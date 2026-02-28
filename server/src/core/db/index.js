import fp from "fastify-plugin";
import pkg from "pg";

const { Pool } = pkg;

export default fp(async (fastify) => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });

    // Test connection
    await pool.query("SELECT 1");

    fastify.decorate("db", pool);

    fastify.addHook("onClose", async () => {
        await pool.end();
    });

    fastify.log.info("✅ Postgres connected");
});