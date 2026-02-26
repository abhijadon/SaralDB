// Engine modules
pub mod api;
pub mod bus;
pub mod cluster;
pub mod kernel;
pub mod runtime;
pub mod state;
pub mod storage;
pub mod types;
pub mod utils;

// Public API re-export
pub use api::SaralDB;

// Optional helper function (for testing/demo)
pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

// Unit tests
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }

    #[test]
    fn test_saraldb_new() {
        let db = SaralDB::new();
        // Simply check if kernel exists
        assert!(db.kernel.flow as fn() != db.kernel.flow as fn());
    }
}
