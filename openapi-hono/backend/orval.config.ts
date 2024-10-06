import { defineConfig } from "orval";

export default defineConfig({
  posts: {
    output: {
      mode: "split",
      //
      target: "src/types-and-zod/posts.ts",
      // Honoを指定
      client: "hono",
      override: {
        hono: {
          // ユーザが記述するハンドラのディレクトリを指定
          handlers: "src/handlers",
        },
        // Zodの設定
        zod: {
          generate: {
            body: true,
            response: true,
            param: true,
            header: true,
            query: true,
          },
          strict: {
            response: true,
          },
        },
      },
    },
    input: {
      target: "../openapi.yaml",
    },
  },
});
