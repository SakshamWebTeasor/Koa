async function sayHiTest(ctx) {
    ctx.status = 200;
    ctx.body = { message: 'Hello, Koa API!' };
}

sendDataTest = async (ctx) => {
    const requestData = ctx.request.body;
    ctx.status = 201; // 201 Created
    ctx.body = { message: 'Data received', data: requestData };
}

module.exports = { sayHiTest, sendDataTest };