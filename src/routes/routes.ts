import { FastifyInstance, FastifyRequest } from "fastify";
import { handleGitHubPush } from "../services/handleGitHubPush";

export async function routes(app: FastifyInstance) {
  app.post("/webhook/github", handleGitHubPush);
}
