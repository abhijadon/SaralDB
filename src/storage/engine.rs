use std::fs::File;
use std::io::BufReader;

use crate::{
    memory::memtable::MemTable,
    storage::{file::DataFile, record::Record},
};

/// Core storage engine
/// Coordinates disk + memory
pub struct StorageEngine {
    data_file: DataFile,
    memtable: MemTable,
}

impl StorageEngine {
    /// Create a new storage engine for a collection
    pub fn new(file_path: &str) -> Self {
        let mut engine = Self {
            data_file: DataFile::new(file_path),
            memtable: MemTable::new(),
        };

        // 🔥 THIS is what uses deserialize()
        engine.recover();

        engine
    }

    /// Insert a new document
    pub fn insert(&mut self, key: String, payload: Vec<u8>) {
        let record = Record::new(1, payload.clone());

        // disk first (durability)
        self.data_file.append(&record.serialize());

        // memory update
        self.memtable.insert(key, payload);
    }

    /// Replay data file on startup
    fn recover(&mut self) {
        let file = match File::open(self.data_file.path()) {
            Ok(f) => f,
            Err(_) => return, // no file yet
        };

        let mut reader = BufReader::new(file);

        // 🔥 deserialize is ACTUALLY CALLED HERE
        while let Ok(Some(record)) = Record::deserialize(&mut reader) {
            if record.record_type == 1 {
                let key = format!("recovered_{}", self.memtable.data.len());
                self.memtable.insert(key, record.payload);
            }
        }
    }
}
