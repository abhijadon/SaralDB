import dotenv from "dotenv";
dotenv.config();

import { app } from "./app.js";

const start = async () => {
  try {
    await app.listen({
      port: process.env.PORT || 8000,
      host: "0.0.0.0"
    });

    app.log.info("🚀 SaralDB running");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
