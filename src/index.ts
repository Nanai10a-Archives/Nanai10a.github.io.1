import * as fs from "fs";
import path from "path";

import * as Next from "next";
import fastify from "fastify";

const next = Next.default({ dev: process.env.NODE_ENV === "development" });

const run = async (): Promise<void> => {
  await next.prepare();

  const handle = next.getRequestHandler();

  const server = fastify({
    logger: {
      prettyPrint: {
        colorize: true,
      },
    },
    https: {
      key: fs.readFileSync(path.join(__dirname, "../private/key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "../private/cert.pem")),
    },
  });

  server.get("*", (req, rep) => {
    handle(req.raw, rep.raw /*, (await import("url")).parse(req.url, true)*/);
  });

  await server.listen(3000, "0.0.0.0");
};

run().catch((reason) => {
  console.error(reason);
  process.exit(1);
});
