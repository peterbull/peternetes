import { serve } from "@hono/node-server";
import { Hono } from "hono";
import os from "os";

const app = new Hono();

app.get("/", (c) => {
  const date = new Date();
  const reqUrl = new URL(c.req.url);
  const hostname = reqUrl.hostname;
  const podHostName = os.hostname();
  const msg = `Peternetes request from ${hostname} handled by ${podHostName} at ${date}`;

  console.log(msg);
  return c.text(msg);
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
