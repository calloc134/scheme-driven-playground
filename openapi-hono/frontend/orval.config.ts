import { defineConfig } from "orval";

export default defineConfig({
  posts: {
    output: {
      mode: "split",
      target: "src/hooks/query/query.ts",
      schemas: "src/types",
      // TanStack Query(React Query)を使う
      client: "react-query",
      // 内部HTTPクライアントをfetchに指定
      httpClient: "fetch",
      // バックエンドのホストを指定
      baseUrl: "http://localhost:3000",
      // 以下はSuspenseを使う場合有効にする
      //   override: {
      //     query: {
      //       useSuspenseQuery: true,
      //     },
      //   },
    },
    input: {
      target: "../openapi.yaml",
    },
  },
});
