import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { registerUser, loginUser } from '@/backend/auth/service';

export const authRouter = router({
  register: publicProcedure
    .input(
      z.object({
        username: z
          .string()
          .min(3, 'Username must be at least 3 characters long'),
        password: z
          .string()
          .min(6, 'Password must be at least 6 characters long'),
      }),
    )
    .mutation(async ({ input }) => {
      const user = await registerUser(input.username, input.password);
      return {
        id: user.id,
        username: user.username,
      };
    }),
  login: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { user, token } = await loginUser(input.username, input.password);
      return {
        id: user.id,
        username: user.username,
        token,
      };
    }),
});
