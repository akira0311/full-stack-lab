import { verifyToken } from '@/utils/jwt';
import { prisma } from '@/db';

/**
 * Middleware to protect routes that require authentication
 * @param token - The JWT token from the request headers
 * @returns The authenticated user or null if authentication fails
 */
export async function authenticateUser(token?: string) {
  if (!token) {
    return null;
  }

  // Verify the token
  const decoded = verifyToken(token);
  if (!decoded) {
    return null;
  }

  // Fetch the user from the database
  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
    select: {
      id: true,
      username: true,
    },
  });

  return user;
}
