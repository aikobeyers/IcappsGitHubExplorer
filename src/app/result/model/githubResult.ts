export class GithubResult{
  // Naming convention tegengegaan om de velden overeen te laten komen met de response
  name: string;
  id: number;
  stargazers_count: number;
  forks_count: number;
  owner: {
    login: string;
    id: number;
    avatar_url: string };
  description: string;
  url: string;
  html_url: string;
}
