const Router = require('koa-router');
const MomentController = require("../controller/moment.controller")
const { verifyToken } = require("../middleware/login.middleware")
const { verifyPermission } = require("../middleware/permission.middleware")
const { verifyLabelExists } = require("../middleware/label.middleware")
const momentRouter = new Router({ prefix: '/moment' });

//增：新增动态信息 
momentRouter.post("/", verifyToken, MomentController.create)

//查：查询列表接口
momentRouter.get("/", MomentController.list)
//查：查询详情数据（id）
momentRouter.get("/:momentid", MomentController.detali)
//删：删除数据信息
momentRouter.delete("/:momentid", verifyToken, verifyPermission, MomentController.remove)
//改：修改数据信息
momentRouter.patch("/:momentid", verifyToken, verifyPermission, MomentController.updata)

//动态数据添加标签
/** 
 * 中间件：
 *        1.是否登录
 *        2.是否有更改这个的权限（这个是不是你创建的）
 *        3.检验这个标签是不是存在，不存在就要创建这个标签
 *        4.把moment表和label表关系，放在他们的关系表中
 */
momentRouter.post("/:momentid/labels", verifyToken, verifyPermission, verifyLabelExists, MomentController.addLabels)
//导出路由
module.exports = momentRouter;
