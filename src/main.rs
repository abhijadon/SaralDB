mod storage;
mod document;
mod memory;
mod collection;

use collection::collection::Collection;
use document::document::Document;
use serde_json::json;

fn main() {
    println!("BharatDB storage engine booting 🇮🇳");

    let mut users = Collection::new("users");

    let doc = Document::new(json!({
        "name": "Abhishek",
        "email": "abhishek@bharatdb.in"
    }));

    users.insert(doc);

    println!("Insert + recovery path executed ✅");
}
