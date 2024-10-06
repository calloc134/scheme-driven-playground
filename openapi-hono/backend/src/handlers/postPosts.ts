import { createFactory } from "hono/factory";
import { zValidator } from "../generated/posts.validator";
import { PostPostsContext } from "../generated/posts.context";
import { postPostsBody, postPostsResponse } from "../generated/posts.zod";
import { db } from "../db";
import { randomUUID } from "crypto";
import { z } from "zod";

const factory = createFactory();

export const postPostsHandlers = factory.createHandlers(
  zValidator("json", postPostsBody),
  async (c: PostPostsContext) => {
    const { title, content } = await c.req.valid("json");

    db.push({
      id: randomUUID(),
      title,
      content,
    });
    const result: z.infer<typeof postPostsResponse> = {
      id: db.length,
      title,
      content,
    };
    return c.json(result);
  }
);
