import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

interface User {
  id: string;
  username: string;
}

export interface Context {
  user: User | null;
}

export async function createContext({
  req,
}: FetchCreateContextFnOptions): Promise<Context> {
  // In a real implementation, we would verify the JWT token here
  // For now, we'll just return a null user
  return {
    user: null,
  };
}
