import Fastify from "fastify";
import jwtPlugin from "./core/jwt/index.js";
import errorHandler from "./core/error-handler/index.js";

export const app = Fastify({
  logger: { level: "info" },
  trustProxy: true
});

app.register(jwtPlugin);

await errorHandler(app);

app.get("/", async () => {
  return { status: "SaralDB running 🚀" };
});
