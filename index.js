// const Koa = require('koa');
// const bodyParser = require('koa-bodyparser');
// const Router = require('koa-router');

// const http = require('http');
// // const https = require('https');
// const app = new Koa();

// const router = new Router();
// app.use(bodyParser());

// // logger
// app.use(async (ctx, next) => {
//     await next();
//     const rt = ctx.response.get('X-Response-Time');
//     console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

// // // response
// // app.use(async ctx => {
// //     ctx.body = 'Hello World';
// // });

// //api
// router.get('/api/data', (ctx) => {
//     ctx.status = 200;
//     ctx.body = { message: 'Hello, Koa API!' };
// });
// router.post('/api/data', (ctx) => {
//     const requestData = ctx.request.body;
//     ctx.status = 201; // 201 Created
//     ctx.body = { message: 'Data received', data: requestData };
// });
// app.use(router.routes());
// app.use(router.allowedMethods());


// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Koa API is listening on port ${port}`);
// });

// http.createServer(app.callback()).listen(4001);
// // https.createServer(app.callback()).listen(4002);
