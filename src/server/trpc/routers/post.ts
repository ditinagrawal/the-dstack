import { z } from "zod";
import { procedure, router } from "../trpc";

export const postRouter = router({
  getAll: procedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
    });
  }),

  addPost: procedure
    .input(
      z.object({ title: z.string().min(1), description: z.string().min(1) }),
    )
    .mutation(async ({ input, ctx }) => {
      return ctx.db.post.create({
        data: {
          title: input.title,
          description: input.description,
        },
      });
    }),
});

export type PostRouter = typeof postRouter;
