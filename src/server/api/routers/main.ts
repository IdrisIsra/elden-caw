import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import { generateCaw } from "~/utils/helpers";

export const mainRouter = createTRPCRouter({
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
          userName: ctx.session?.user?.name ?? "",
        },
      });
      return entry;
    }),

  addLike: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const entry = await ctx.prisma.caw.update({
        where: {
          id: input.id,
        },
        data: {
          likedBy: {
            connect: [{ id: ctx.session?.user?.id }],
          },
        },
      });
      return entry;
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.caw.findMany({
      take: 100,
      orderBy: [{ createdAt: "desc" }],
      include: {
        likedBy: true,
        dislikedBy: true,
      },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
