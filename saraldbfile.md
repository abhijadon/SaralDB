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


    <nav className="hidden lg:flex items-center gap-2 text-sm text-white relative">
                        {/* PRODUCTS DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition hover:bg-white/20 px-2 py-1 rounded-full duration-300">
                                Products
                                <motion.span
                                    animate={{ rotate: productsOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <MdOutlineKeyboardArrowDown size={18} />
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute top-10 left-0 w-[650px] bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6"
                                    >
                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">
                                                Database Platform
                                            </h4>

                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB Core</p>
                                                    <p className="text-xs text-gray-200">
                                                        High-performance Rust database engine
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB Cloud</p>
                                                    <p className="text-xs text-gray-200">
                                                        Fully managed scalable hosting
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB AI</p>
                                                    <p className="text-xs text-gray-200">
                                                        Vector search & AI storage
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">
                                                Enterprise & Insights
                                            </h4>

                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB Analytics</p>
                                                    <p className="text-xs text-gray-200">
                                                        Real-time dashboards & forecasting
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB Security</p>
                                                    <p className="text-xs text-gray-200">
                                                        RBAC & multi-tenant control
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        {/* RESOURCES DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setResourcesOpen(true)}
                            onMouseLeave={() => setResourcesOpen(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition hover:bg-white/20 px-2 py-1 rounded-full duration-300">
                                Resources
                                <motion.span
                                    animate={{ rotate: resourcesOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <MdOutlineKeyboardArrowDown size={18} />
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {resourcesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute top-10 left-0 w-[500px] bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6"
                                    >
                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">
                                                Learn
                                            </h4>

                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">Documentation</p>
                                                    <p className="text-xs text-gray-200">
                                                        Complete developer guides
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">API Reference</p>
                                                    <p className="text-xs text-gray-200">
                                                        Technical API documentation
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">Tutorials</p>
                                                    <p className="text-xs text-gray-200">
                                                        Step-by-step integration guides
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">
                                                Community
                                            </h4>

                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">Blog</p>
                                                    <p className="text-xs text-gray-200">
                                                        Product updates & engineering deep dives
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">GitHub</p>
                                                    <p className="text-xs text-gray-200">
                                                        Open source repository
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">Discord</p>
                                                    <p className="text-xs text-gray-200">
                                                        Join our developer community
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* COMPANY DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setCompanyOpen(true)}
                            onMouseLeave={() => setCompanyOpen(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition hover:bg-white/20 px-2 py-1 rounded-full duration-300">
                                Company
                                <motion.span
                                    animate={{ rotate: companyOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <MdOutlineKeyboardArrowDown size={18} />
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {companyOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute top-10 left-0 w-[500px] bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6"
                                    >
                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">
                                                About SaralDB
                                            </h4>

                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">About Us</p>
                                                    <p className="text-xs text-gray-200">
                                                        Our mission & vision
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">Careers</p>
                                                    <p className="text-xs text-gray-200">
                                                        Join the SaralDB team
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">Press</p>
                                                    <p className="text-xs text-gray-200">
                                                        Media & announcements
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">
                                                Legal & Contact
                                            </h4>

                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">Privacy Policy</p>
                                                    <p className="text-xs text-gray-200">
                                                        How we handle your data
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">Terms of Service</p>
                                                    <p className="text-xs text-gray-200">
                                                        Platform usage terms
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">Contact</p>
                                                    <p className="text-xs text-gray-200">
                                                        Get in touch with us
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <Link href="#" className="flex items-center gap-1 cursor-pointer hover:text-white transition hover:bg-white/20 px-2 py-1 rounded-full duration-300">
                            Docs
                        </Link>

                        <Link href="/pricing" className="flex items-center gap-1 cursor-pointer hover:text-white transition hover:bg-white/20 px-2 py-1 rounded-full duration-300">
                            Pricing
                        </Link>

                        <Link href="#" className="flex items-center gap-1 cursor-pointer hover:text-white transition hover:bg-white/20 px-2 py-1 rounded-full duration-300">
                            Why SaralDB
                        </Link>
                    </nav>



                      <div className="flex items-center gap-4">
                    {/* Desktop Icons */}
                    <div className="hidden lg:flex items-center gap-2">
                        <a
                            href="https://discord.gg/xydepExn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:scale-110 transition duration-300"
                        >
                            <FaDiscord size={16} />
                        </a>

                        <a
                            href="https://github.com/abhijadon/SaralDB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:scale-110 transition duration-300"
                        >
                            <FaGithub size={16} />
                        </a>

                        <Link
                            href="/login"
                            className="text-sm px-4 py-1 rounded-full border border-white/30 hover:bg-white/30 transition text-white duration-300 hover:scale-110"
                        >
                            Sign In
                        </Link>

                        <button className="bg-blue-700 px-4 py-1 rounded-full text-white hover:bg-blue-500 transition duration-300 cursor-pointer">
                            Try SaralDB
                        </button>
                    </div>

                    <ThemeToggle />

                    {/* MOBILE BUTTON */}
                    <button
                        className="lg:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>