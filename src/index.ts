import * as Fastify from "fastify";

const fastify = Fastify.fastify();

const run = async (): Promise<void> => {
  await fastify.listen(3000, "0.0.0.0");
};

run().catch((reason) => {
  console.error(reason);
  process.exit(1);
});
