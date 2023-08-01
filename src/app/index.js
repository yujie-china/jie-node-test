const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const userRouter = require("../router/userRouter");
//创建了一个Koa应用实例，代表整个Web应用。
const app = new Koa();

app.use(bodyParser());
//注册路由中间件
app.use(userRouter.routes());
//添加处理HTTP请求方法不被支持的响应处理，比如返回一个405 Method Not Allowed响应
app.use(userRouter.allowedMethods());
//启动HTTP服务器监听在端口8000上，并在服务器启动成功后打印一条消息。

module.exports = app;
