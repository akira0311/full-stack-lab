import { hashPassword, comparePassword } from '@/utils/password';
import { prisma } from '@/db';

/**
 * Registers a new user
 * @param username - The username for the new user
 * @param password - The password for the new user
 * @returns The created user object
 * @throws Error if username already exists or validation fails
 */
export async function registerUser(username: string, password: string) {
  // Validate input
  if (!username || username.length < 3) {
    throw new Error('Username must be at least 3 characters long');
  }

  if (!password || password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }

  // Check if username already exists
  const existingUser = await prisma.user.findUnique({
    where: { username },
  });

  if (existingUser) {
    throw new Error('Username already exists');
  }

  // Hash the password
  const hashedPassword = await hashPassword(password);

  // Create the user
  const user = await prisma.user.create({
    data: {
      username,
      passwordHash: hashedPassword,
    },
  });

  return user;
}

/**
 * Logs in a user
 * @param username - The username of the user
 * @param password - The password of the user
 * @returns The user object if login is successful
 * @throws Error if credentials are invalid
 */
export async function loginUser(username: string, password: string) {
  // Validate input
  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  // Find user by username
  const user = await prisma.user.findUnique({
    where: { username },
  });

  // If user not found, throw error
  if (!user) {
    throw new Error('Invalid username or password');
  }

  // Compare password
  const isPasswordValid = await comparePassword(password, user.passwordHash);

  // If password is invalid, throw error
  if (!isPasswordValid) {
    throw new Error('Invalid username or password');
  }

  return user;
}
