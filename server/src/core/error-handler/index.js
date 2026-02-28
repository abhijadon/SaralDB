export default async function errorHandler(app) {
  app.setErrorHandler((error, request, reply) => {
    app.log.error(error);

    reply.status(error.statusCode || 500).send({
      success: false,
      message: error.message || "Internal Server Error"
    });
  });
}
