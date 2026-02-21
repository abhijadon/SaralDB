SaralDB/
│
├── 📁 apps
│   │
│   ├── 📁 web                # Next.js Frontend (SaaS UI)
│   │   ├── public/
│   │   ├── src/
│   │   ├── package.json
│   │   └── next.config.mjs
│   │
│   ├── 📁 api                # Fastify Cloud Backend
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   ├── plugins/
│   │   │   ├── services/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   └── server.js
│   │   ├── package.json
│   │   └── .env
│   │
│   ├── 📁 ml-service         # Python ML & Forecasting Service
│   │   ├── app/
│   │   │   ├── models/
│   │   │   ├── training/
│   │   │   ├── inference/
│   │   │   └── main.py
│   │   ├── requirements.txt
│   │   └── Dockerfile
│   │
│   └── 📁 engine             # Rust Database Engine
│       ├── src/
│       │   ├── storage/
│       │   ├── memtable/
│       │   ├── wal/
│       │   ├── index/
│       │   ├── query/
│       │   ├── network/
│       │   └── main.rs
│       ├── Cargo.toml
│       └── tests/
│
├── 📁 infra                  # Deployment configs
│   ├── docker/
│   ├── kubernetes/
│   └── nginx/
│
├── 📁 shared                 # Shared schemas/types
│   ├── api-contracts/
│   └── protobuf/
│
├── docker-compose.yml
├── README.md
└── .gitignore