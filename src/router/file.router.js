const Router = require("koa-router");
const { handleAvatar } = require("../middleware/file.middleware");
const { verifyToken } = require("../middleware/login.middleware")
const fileController = require("../controller/file.controller");

const fileRouter = new Router({ prefix: '/file' });

fileRouter.post("/avatar", verifyToken, handleAvatar, fileController.create)

//导出路由
module.exports = fileRouter;
