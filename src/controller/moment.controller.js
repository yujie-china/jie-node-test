const momentService = require("../service/moment.service")
class MomentController {
    async create (ctx, next) {
        // 1.获取用户请求传递的参数
        const userId = ctx.user.id;
        const content = ctx.request.body.content;
        // 2.路由由谁发布（token=>id,name）
        const result = await momentService.create(userId, content);

        // 返回数据
        ctx.body = {
            code: 0,
            message: "创建成功",
            data: result
        }
    }

}
module.exports = new MomentController();