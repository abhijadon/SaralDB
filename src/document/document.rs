use serde::{Deserialize, Serialize};
use serde_json::Value;
use uuid::Uuid;

/// Schema-less document
#[derive(Serialize, Deserialize)]
pub struct Document {
    pub _id: String,
    pub data: Value,
}

impl Document {
    pub fn new(data: Value) -> Self {
        Self {
            _id: Uuid::new_v4().to_string(),
            data,
        }
    }
}
