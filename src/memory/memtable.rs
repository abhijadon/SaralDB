use std::collections::HashMap;

/// In-memory table for fast access
/// This holds latest state of data
pub struct MemTable {
    pub data: HashMap<String, Vec<u8>>,
}

impl MemTable {
    pub fn new() -> Self {
        Self {
            data: HashMap::new(),
        }
    }

    pub fn insert(&mut self, key: String, value: Vec<u8>) {
        self.data.insert(key, value);
    }
}
