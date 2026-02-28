export function tenantGuard() {
  return async (req, reply) => {
    if (!req.user?.workspaceId) {
      return reply.code(403).send({ message: "Workspace missing" });
    }
  };
}
