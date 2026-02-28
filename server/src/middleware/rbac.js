export function requirePermission(permissionKey) {
  return async (req, reply) => {
    // Placeholder RBAC check
    // Later integrate Prisma + Redis cache
    if (!req.user) {
      return reply.code(403).send({ message: "Permission denied" });
    }
  };
}
