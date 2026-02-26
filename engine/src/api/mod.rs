pub mod db;
pub mod flow;
pub mod tx;

use crate::kernel::Kernel;

pub struct SaralDB {
    pub kernel: Kernel,
}

impl SaralDB {
    pub fn new() -> Self {
        Self {
            kernel: Kernel::new(),
        }
    }

    pub fn flow(&self) -> &Kernel {
        &self.kernel
    }

    pub fn tx(&self) -> &Kernel {
        &self.kernel
    }
}