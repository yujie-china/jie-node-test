const Router = require('@koa/router');
const UserController = require("../controller/user.controller.js")
const { verifyUser, handlePassword } = require("../middleware/user.middleware.js")

//创建一个Koa路由对象
//为该路由对象的所有路由路径添加了"/users"前缀
const userRouter = new Router({ prefix: '/users' });

//使用userRouter对象的get方法来定义一个GET请求的路由。路由路径是"/list"
//定义路由中映射
userRouter.post("/", verifyUser, UserController.create)

//用户提供头像
userRouter.get("/avatar/:userid", UserController.showAvatarImage)

//导出路由
module.exports = userRouter;
