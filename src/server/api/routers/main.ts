import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import { generateCaw } from "~/utils/helpers";

export const mainRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  addCaw: protectedProcedure
    .input(
      z.object({
        template: z.number(),
        words: z.number(),
        conjunction: z.number().optional(),
        template2: z.number().optional(),
        words2: z.number().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const entry = await ctx.prisma.caw.create({
        data: {
          caw: generateCaw(input),
          user: { connect: { id: ctx.session?.user?.id } },
        },
      });
      return entry;
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.caw.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
