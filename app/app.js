const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const http = require("http");
const app = new Koa();
const Router = require("koa-router");
const apiRouteAll = require("./routes/index");
const router = new Router();
const KoaSocket = require("koa-socket-2");

app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

router.use("/api", apiRouteAll);

const port = process.env.PORT || 4000;

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

let server = http.createServer(app.callback());

const io = new KoaSocket();
io.attach(app);

// KoaSocket allows you to define WebSocket handlers.
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (data) => {
    console.log("Received a message:", data);
    // Handle the incoming message
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.use(async (ctx) => {
  ctx.body = "Hello, Koa Here!";
});

server.listen(port, () => {
  console.log(`Koa WebSocket is listening on port ${port}`);
});
