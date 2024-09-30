export async function getGitHubUserAvatar(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data.avatar_url; 
}