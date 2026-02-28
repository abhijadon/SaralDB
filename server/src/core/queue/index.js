import { Queue } from "bullmq";
import { redis } from "../redis/index.js";

export const analyticsQueue = new Queue("analytics", {
    connection: redis
});