import { createFactory } from "hono/factory";
import { zValidator } from "../generated/posts.validator";
import { PostPostsContext } from "../generated/posts.context";
import { postPostsBody, postPostsResponse } from "../generated/posts.zod";
import { db } from "../db";
import { randomInt, randomUUID } from "crypto";
import { z } from "zod";

const factory = createFactory();

export const postPostsHandlers = factory.createHandlers(
  zValidator("json", postPostsBody),
  async (c: PostPostsContext) => {
    const { title, content } = await c.req.valid("json");

    const id = randomInt(0, 1000);

    db.push({
      id,
      title,
      content,
    });
    const result: z.infer<typeof postPostsResponse> = {
      id,
      title,
      content,
    };
    return c.json(result);
  }
);
