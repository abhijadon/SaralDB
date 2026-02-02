use crate::{
    document::document::Document,
    storage::engine::StorageEngine,
};
use serde_json::to_vec;

/// MongoDB-like collection
pub struct Collection {
    engine: StorageEngine,
}

impl Collection {
    pub fn new(name: &str) -> Self {
        let path = format!("data/default/{}.bdb", name);
        Self {
            engine: StorageEngine::new(&path),
        }
    }

    pub fn insert(&mut self, doc: Document) {
        let bytes = to_vec(&doc).expect("Failed to serialize document");
        self.engine.insert(doc._id, bytes);
    }
}
