export async function authenticate(req, reply) {
  await req.jwtVerify();
}
