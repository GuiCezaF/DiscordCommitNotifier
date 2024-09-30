interface Commit {
  message: string;
  url: string;
  author: {
    name: string;
    email: string;
  };
}

interface Pusher {
  name: string;
  email: string;
}

interface GitHubPushPayload {
  ref: string;
  commits: Commit[];
  pusher: Pusher;
  repository: {
    name: string;
    url: string;
  };
}