use std::io::{self, Read};

/// A single binary record stored on disk
/// This is the smallest unit of persistence
#[derive(Debug)]
pub struct Record {
    pub len: u32,
    pub record_type: u8,
    pub payload: Vec<u8>,
}

impl Record {
    pub fn new(record_type: u8, payload: Vec<u8>) -> Self {
        Self {
            len: (1 + payload.len()) as u32,
            record_type,
            payload,
        }
    }

    pub fn serialize(&self) -> Vec<u8> {
        let mut buf = Vec::with_capacity(4 + self.len as usize);
        buf.extend_from_slice(&self.len.to_le_bytes());
        buf.push(self.record_type);
        buf.extend_from_slice(&self.payload);
        buf
    }

    /// Safe deserialization (crash / corruption tolerant)
    pub fn deserialize(mut reader: impl Read) -> io::Result<Option<Self>> {
        let mut len_buf = [0u8; 4];

        // EOF or unreadable length
        if reader.read_exact(&mut len_buf).is_err() {
            return Ok(None);
        }

        let len = u32::from_le_bytes(len_buf);

        // length must include at least record_type
        if len < 1 {
            return Ok(None);
        }

        let mut type_buf = [0u8; 1];
        if reader.read_exact(&mut type_buf).is_err() {
            return Ok(None);
        }

        let mut payload = vec![0u8; (len - 1) as usize];
        if reader.read_exact(&mut payload).is_err() {
            return Ok(None);
        }

        Ok(Some(Self {
            len,
            record_type: type_buf[0],
            payload,
        }))
    }
}
