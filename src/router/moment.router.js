const Router = require('koa-router');
const MomentController = require("../controller/moment.controller")
const { verifyToken } = require("../middleware/login.middleware")
const { verifyPermission } = require("../middleware/permission.middleware")
const momentRouter = new Router({ prefix: '/moment' });

//增：新增评论信息 
momentRouter.post("/", verifyToken, MomentController.create)

//查：查询列表接口
momentRouter.get("/", MomentController.list)
//查：查询详情数据（id）
momentRouter.get("/:momentid", MomentController.detali)
//删：删除数据信息
momentRouter.delete("/:momentid", verifyToken, verifyPermission, MomentController.remove)
//改：修改数据信息
momentRouter.patch("/:momentid", verifyToken, verifyPermission, MomentController.updata)

//导出路由
module.exports = momentRouter;
