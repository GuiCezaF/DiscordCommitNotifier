import { env } from "../env";


export async function SendDiscordMessage(msg: string): Promise<void> { 
  const webhook_url = env.DISCORD_WEBHOOK;

  const params = {
      username: 'James',
      content: msg,
  };

  try {
    const sendMessage = await fetch(webhook_url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    
    const data = sendMessage.json();

    return data;

  } catch (error) {
    console.error('Error sending message to Discord:', error);
    throw error; 
  }
}
