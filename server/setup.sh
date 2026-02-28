#!/bin/bash

echo "🚀 Creating SaralDB Enterprise Structure..."

# -----------------------------
# CREATE CORE FOLDERS
# -----------------------------

mkdir -p src/core/{db,error-handler,jwt,kafka,logger,queue,redis}
mkdir -p src/jobs/workers
mkdir -p src/middleware
mkdir -p src/modules/{analytics,auth,events,organizations,projects,rbac,users}
mkdir -p src/utils
mkdir -p prisma

# -----------------------------
# CREATE APP & SERVER
# -----------------------------

cat <<EOF > src/app.js
import Fastify from "fastify";
import jwtPlugin from "./core/jwt/index.js";
import errorHandler from "./core/error-handler/index.js";

export const app = Fastify({
  logger: { level: "info" },
  trustProxy: true
});

app.register(jwtPlugin);

await errorHandler(app);

app.get("/health", async () => {
  return { status: "SaralDB running 🚀" };
});
EOF

cat <<EOF > src/server.js
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
EOF

# -----------------------------
# ERROR HANDLER
# -----------------------------

cat <<EOF > src/core/error-handler/index.js
export default async function errorHandler(app) {
  app.setErrorHandler((error, request, reply) => {
    app.log.error(error);

    reply.status(error.statusCode || 500).send({
      success: false,
      message: error.message || "Internal Server Error"
    });
  });
}
EOF

# -----------------------------
# JWT PLUGIN
# -----------------------------

cat <<EOF > src/core/jwt/index.js
import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";

export default fp(async (fastify) => {
  fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || "supersecret"
  });

  fastify.decorate("authenticate", async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch {
      reply.code(401).send({ message: "Unauthorized" });
    }
  });
});
EOF

# -----------------------------
# MIDDLEWARE
# -----------------------------

cat <<EOF > src/middleware/auth.js
export async function authenticate(req, reply) {
  await req.jwtVerify();
}
EOF

cat <<EOF > src/middleware/rbac.js
export function requirePermission(permissionKey) {
  return async (req, reply) => {
    // Placeholder RBAC check
    // Later integrate Prisma + Redis cache
    if (!req.user) {
      return reply.code(403).send({ message: "Permission denied" });
    }
  };
}
EOF

cat <<EOF > src/middleware/tenant.js
export function tenantGuard() {
  return async (req, reply) => {
    if (!req.user?.workspaceId) {
      return reply.code(403).send({ message: "Workspace missing" });
    }
  };
}
EOF

# -----------------------------
# PRISMA BASE SCHEMA
# -----------------------------

cat <<EOF > prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Workspace {
  id        String   @id @default(uuid())
  name      String
  createdAt DateTime @default(now())
}
EOF

# -----------------------------
# ENV TEMPLATE
# -----------------------------

cat <<EOF > .env
PORT=8000
JWT_SECRET=supersecret
DATABASE_URL="postgresql://user:password@localhost:5432/saraldb"
EOF

echo "✅ SaralDB Enterprise Base Setup Complete!"