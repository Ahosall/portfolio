export type UserType = {
  avatar_url: string;
  url: string;
  name: string;
  bio: string;
  public_repos: number;
}

export type RepoType = {
  name: string;
  created_at: string;
  updated_at: string | null;
  description: string | null;
  topics: string[];
  language: string;
  homepage: string | null;
}