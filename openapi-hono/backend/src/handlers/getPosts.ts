import { createFactory } from "hono/factory";
import { zValidator } from "../generated/posts.validator";
import { GetPostsContext } from "../generated/posts.context";
import { getPostsResponse } from "../generated/posts.zod";
import { db } from "../db";
import { z } from "zod";

const factory = createFactory();

export const getPostsHandlers = factory.createHandlers(
  zValidator("response", getPostsResponse),
  async (c: GetPostsContext) => {
    const posts = db;
    const result: z.infer<typeof getPostsResponse> = posts.map((post) => ({
      id: Number(post.id),
      title: post.title,
      content: post.content,
    }));

    return c.json(result);
  }
);
