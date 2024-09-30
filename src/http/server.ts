import fastify from "fastify";
import { env } from "../env";
import { routes } from "../routes/routes";

const app = fastify()

app.register(routes);


app.listen({
  port: Number(env.APP_PORT),
  host: env.APP_HOST,
}).then(() => {
  console.log(`Server is running on http://${env.APP_HOST}:${env.APP_PORT} 🚀`);
}).catch(err => {
  app.log.error(err);
  process.exit(1);
});
  