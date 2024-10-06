import { serve } from "@hono/node-server";
import { Hono } from "hono";
import generatedApp from "./generated/posts";

const app = new Hono();

app.route("/", generatedApp);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
