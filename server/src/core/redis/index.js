import fp from "fastify-plugin";
import Redis from "ioredis";

export default fp(async (fastify) => {
    const redis = new Redis(process.env.REDIS_URL);

    redis.on("connect", () => {
        fastify.log.info("✅ Redis connected");
    });

    redis.on("error", (err) => {
        fastify.log.error("Redis Error:", err);
    });

    fastify.decorate("redis", redis);

    fastify.addHook("onClose", async () => {
        await redis.quit();
    });
});