const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const registerRoutes = require("../router/index")
//创建了一个Koa应用实例，代表整个Web应用。
const app = new Koa();
//注册路由中间件
app.use(bodyParser());

registerRoutes(app);

module.exports = app;
