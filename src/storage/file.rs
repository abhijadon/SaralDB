use std::{fs::OpenOptions, io::Write, path::Path};

/// Low-level append-only data file
/// This layer ONLY talks to OS filesystem
pub struct DataFile {
    path: String,
}

impl DataFile {
    /// Create or open a data file
    pub fn new(path: &str) -> Self {
        // Ensure parent directories exist
        if let Some(parent) = Path::new(path).parent() {
            std::fs::create_dir_all(parent).expect("Failed to create data directory");
        }

        Self {
            path: path.to_string(),
        }
    }

    /// Return file path (needed for recovery)
    pub fn path(&self) -> &str {
        &self.path
    }

    /// Append bytes to the file (NEVER overwrite)
    pub fn append(&self, bytes: &[u8]) {
        let mut file = OpenOptions::new()
            .create(true)
            .append(true)
            .open(&self.path)
            .expect("Failed to open data file");

        // Write data
        file.write_all(bytes).expect("Failed to write data");

        // Force OS flush (CRASH SAFETY)
        file.flush().expect("Failed to flush data");
    }
}
