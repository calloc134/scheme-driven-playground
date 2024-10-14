import type { ConnectRouter } from "@connectrpc/connect";
import { PostService } from "./gen/post_connect";
import { db } from "./db";

export default (router: ConnectRouter) =>
  router.service(PostService, {
    getAllPosts: async (req) => {
      return { posts: db };
    },
    createPost: async (req) => {
      return {};
    },
  });
