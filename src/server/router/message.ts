import { createRouter } from "./context";
import { z } from "zod";
import { nanoid } from "nanoid";

export const messageRouter = createRouter()
  .mutation("add", {
    input: z.object({
      message: z.string(),
      author: z.string(),
    }),
    async resolve({ input, ctx }) {
      const message = await ctx?.prisma?.messages?.create({
        data: { ...input, messageId: nanoid() },
      });
      return JSON.stringify(message);
    },
  })
  .query("retrieve", {
    input: z
      .object({
        message: z.string().nullish(),
      })
      .nullish(),
    async resolve({ input, ctx }) {
      if (typeof input === "string") {
        const messages = ctx?.prisma?.messages?.findMany(input);
        return JSON.stringify(messages);
      }
      const messages = await ctx?.prisma?.messages?.findMany();
      return JSON.stringify(messages);
    },
  })
  .mutation("delete", {
    input: z.string(),
    async resolve({ input, ctx }) {
      await ctx?.prisma?.messages?.delete({
        where: {
          messageId: input,
        },
      });
    },
  });
