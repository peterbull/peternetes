import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { cors } from "hono/cors";
import os from "os";
const app = new Hono();

app.use(
  "/assets/*",
  serveStatic({
    root: "../frontend/dist",
  }),
);
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.peternetes.com, https://peternetes.com"]
    : ["http://localhost:5174", "http://localhost:3000"];
app.use("*", async (c, next) => {
  const corsMiddlewareHandler = cors({
    origin: allowedOrigins,
  });
  return corsMiddlewareHandler(c, next);
});

app.get("/api/info", (c) => {
  const date = new Date();
  const reqUrl = new URL(c.req.url);
  const hostname = reqUrl.hostname;
  const podHostName = os.hostname();
  const fakeSecret = process.env.FAKE_SECRET;
  const msg = `Peternetes request from ${hostname} handled by ${podHostName} at ${date}. Found ${fakeSecret ? fakeSecret : "no secrets"}`;

  console.log(msg);
  return c.text(msg);
});

app.get(
  "*",
  serveStatic({
    root: "../frontend/dist",
    path: "./index.html",
  }),
);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
