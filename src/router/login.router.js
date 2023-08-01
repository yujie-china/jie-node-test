const Router = require('koa-router');
const { sign, test } = require('../controller/login.controller');
const { verifyLogin, verifyToken } = require("../middleware/login.middleware")
const loginRouter = new Router({ prefix: '/login' });

loginRouter.post("/", verifyLogin, sign)

loginRouter.get("/test", verifyToken, test)
//导出路由
module.exports = loginRouter;
