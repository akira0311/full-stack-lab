import jwt, { type SignOptions } from 'jsonwebtoken';
import { type User } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

if (
  process.env.NODE_ENV !== 'production' &&
  process.env.JWT_SECRET === undefined
) {
  console.warn(
    'JWT_SECRET is not set. Using fallback secret key. This is not recommended for production.',
  );
}

/**
 * Generates a JWT token for a user
 * @param user - The user object
 * @returns The signed JWT token
 */
export function generateToken(user: Pick<User, 'id' | 'username'>): string {
  const payload = {
    userId: user.id,
    username: user.username,
  };

  const options: SignOptions = {
    expiresIn: '7d', // Token expires in 7 days
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

/**
 * Verifies a JWT token and returns the decoded payload
 * @param token - The JWT token to verify
 * @returns The decoded payload or null if verification fails
 */
export function verifyToken(
  token: string,
): { userId: string; username: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
      username: string;
    };
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}
