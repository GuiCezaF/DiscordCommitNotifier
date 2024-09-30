import { FastifyRequest } from "fastify";
import { SendDiscordMessage } from "../utils/send-message";

export async function handleGitHubPush(req: FastifyRequest<{ Body: GitHubPushPayload }>, res) {
  
  const payload = req.body;

  if (payload) {
    const { commits, pusher } = payload;

    const pusherName = pusher.name;
    
    const commitInfos = commits.map((commit) => ({
      message: commit.message,
      author: commit.author.name,
      url: commit.url,
    }));

    const commitMessages = commitInfos
      .map(
        (info) => `
    **URL do Commit:** [GITHUB](${info.url})                 
    
    **Mensagens do Commit:**
    \`\`\`${info.message}\`\`\`
    `
      )
      .join("\n");

    const message = `
     **## NOVO PUSH REALIZADO:**       
    ** Usuário:** ${pusherName} 🚀
    ${commitMessages}
    `;

    await SendDiscordMessage(message);

    res.status(200);
  } else {
    res.status(400);
  }
}