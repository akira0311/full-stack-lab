import { describe, it, expect, beforeEach, vi, type Mock } from 'vitest';
import { registerUser, loginUser } from '@/backend/auth/service';
import { hashPassword, comparePassword } from '@/utils/password';
import { prisma } from '@/db';

// Mocking dependencies
vi.mock('@/utils/password');
vi.mock('@/db', () => {
  return {
    prisma: {
      user: {
        findUnique: vi.fn(),
        create: vi.fn(),
      },
    },
  };
});

describe('Auth Service', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  describe('registerUser', () => {
    // Arrange - Success case
    it('should register a new user successfully', async () => {
      // Arrange
      const userData = { username: 'testuser', password: 'password123' };
      const hashedPassword = 'hashedPassword123';
      const createdUser = {
        id: '1',
        username: userData.username,
        passwordHash: hashedPassword,
      };

      // Mock Prisma methods
      (prisma.user.findUnique as Mock).mockResolvedValue(null);
      (hashPassword as Mock).mockResolvedValue(hashedPassword);
      (prisma.user.create as Mock).mockResolvedValue(createdUser);

      // Act
      const result = await registerUser(userData.username, userData.password);

      // Assert
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { username: userData.username },
      });
      expect(hashPassword).toHaveBeenCalledWith(userData.password);
      expect(prisma.user.create).toHaveBeenCalledWith({
        data: {
          username: userData.username,
          passwordHash: hashedPassword,
        },
      });
      expect(result).toEqual(createdUser);
    });

    // Arrange - Username already exists
    it('should throw an error if username already exists', async () => {
      // Arrange
      const userData = { username: 'existinguser', password: 'password123' };
      const existingUser = {
        id: '1',
        username: userData.username,
        passwordHash: 'existingHash',
      };

      // Mock Prisma methods
      (prisma.user.findUnique as Mock).mockResolvedValue(existingUser);

      // Act & Assert
      await expect(
        registerUser(userData.username, userData.password),
      ).rejects.toThrow('Username already exists');
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { username: userData.username },
      });
      expect(hashPassword).not.toHaveBeenCalled();
      expect(prisma.user.create).not.toHaveBeenCalled();
    });

    // Arrange - Invalid input
    it('should throw an error for invalid input', async () => {
      // Arrange
      const userData = { username: '', password: 'short' };

      // Act & Assert
      await expect(
        registerUser(userData.username, userData.password),
      ).rejects.toThrow();
      expect(prisma.user.findUnique).not.toHaveBeenCalled();
      expect(hashPassword).not.toHaveBeenCalled();
      expect(prisma.user.create).not.toHaveBeenCalled();
    });
  });

  describe('loginUser', () => {
    // Arrange - Success case
    it('should login user successfully with valid credentials', async () => {
      // Arrange
      const loginData = { username: 'testuser', password: 'password123' };
      const user = {
        id: '1',
        username: loginData.username,
        passwordHash: 'hashedPassword123',
      };

      // Mock Prisma methods
      (prisma.user.findUnique as Mock).mockResolvedValue(user);
      (comparePassword as Mock).mockResolvedValue(true);

      // Act
      const result = await loginUser(loginData.username, loginData.password);

      // Assert
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { username: loginData.username },
      });
      expect(comparePassword).toHaveBeenCalledWith(
        loginData.password,
        user.passwordHash,
      );
      expect(result).toEqual(user);
    });

    // Arrange - Wrong password
    it('should throw an error for incorrect password', async () => {
      // Arrange
      const loginData = { username: 'testuser', password: 'wrongpassword' };
      const user = {
        id: '1',
        username: loginData.username,
        passwordHash: 'hashedPassword123',
      };

      // Mock Prisma methods
      (prisma.user.findUnique as Mock).mockResolvedValue(user);
      (comparePassword as Mock).mockResolvedValue(false);

      // Act & Assert
      await expect(
        loginUser(loginData.username, loginData.password),
      ).rejects.toThrow('Invalid username or password');
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { username: loginData.username },
      });
      expect(comparePassword).toHaveBeenCalledWith(
        loginData.password,
        user.passwordHash,
      );
    });

    // Arrange - User not found
    it('should throw an error if user not found', async () => {
      // Arrange
      const loginData = {
        username: 'nonexistentuser',
        password: 'password123',
      };

      // Mock Prisma methods
      (prisma.user.findUnique as Mock).mockResolvedValue(null);

      // Act & Assert
      await expect(
        loginUser(loginData.username, loginData.password),
      ).rejects.toThrow('Invalid username or password');
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { username: loginData.username },
      });
      expect(comparePassword).not.toHaveBeenCalled();
    });
  });
});
