import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { validateToken } from '@/backend/auth/service';

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
  // Get the authorization header
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.startsWith('Bearer ')
    ? authHeader.substring(7)
    : null;

  // If no token, return null user
  if (!token) {
    return {
      user: null,
    };
  }

  // Validate the token and get the user
  const user = await validateToken(token);

  return {
    user,
  };
}
