import * as fs from "fs";
import path from "path";

import * as Fastify from "fastify";
import * as Next from "next";

(async (): Promise<void> => {
  const fastify = Fastify.fastify({
    logger: {
      prettyPrint: true,
    },
    https: {
      key: fs.readFileSync(path.join(__dirname, "../private/key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "../private/cert.pem")),
    },
  });

  const next = Next.default({ dev: process.env.NODE_ENV === "development" });
  await next.prepare();
  const next_handler = await next.getRequestHandler();

  fastify.get("*", (req, res) => {
    next_handler(req.raw, res.raw);
  });

  await fastify.listen(3000, "0.0.0.0");
})().catch((reason) => {
  console.error(reason);
  process.exit(1);
});
