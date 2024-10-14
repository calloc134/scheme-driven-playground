import {
  getGetPostsQueryKey,
  useGetPosts,
  usePostPosts,
} from "./hooks/query/query";
import { useQueryClient } from "@tanstack/react-query";

function App() {
  // クエリ用クライアントの取得
  const queryClient = useQueryClient();
  // クエリ用フックの呼び出し
  const { data, error, isLoading } = useGetPosts();

  // ミューテーション用フックの呼び出し
  const { mutate } = usePostPosts({
    mutation: {
      // クエリに成功したらキャッシュを無効化
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: getGetPostsQueryKey() }),
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error fetching posts</div>;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title")?.toString() || "";
    const content = formData.get("content")?.toString() || "";
    mutate({ data: { title, content } });
  };

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Posts</h2>
      <ul>
        {data.data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input name="title" placeholder="title" type="text" />
        <input name="content" placeholder="content" type="text" />
        <button type="submit">Add post</button>
      </form>
    </>
  );
}

export default App;
