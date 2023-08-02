const Router = require('koa-router');
const MomentController = require("../controller/moment.controller")
const { verifyToken } = require("../middleware/login.middleware")
const momentRouter = new Router({ prefix: '/moment' });

momentRouter.post("/", verifyToken, MomentController.create)



//导出路由
module.exports = momentRouter;
