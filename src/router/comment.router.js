const Router = require('koa-router');
const { verifyToken } = require("../middleware/login.middleware")
const commentController = require("../controller/comment.controller")
const commentRouter = new Router({ prefix: '/comment' });

//增：新增评论
commentRouter.post("/", verifyToken, commentController.create)
//增：回复评论
commentRouter.post("/reply", verifyToken, commentController.reply)

//导出路由
module.exports = commentRouter;
