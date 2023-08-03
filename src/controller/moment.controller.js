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
    async list (ctx, next) {
        //1.获取offset/size
        const { offset, size } = ctx.request.query;
        const result = await momentService.queryList(size, offset)
        ctx.body = {
            code: 0,
            data: result
        }
    }

    async detali (ctx, next) {
        //1.拿到id
        const momentid = ctx.params.momentid;
        // 2.根据id拿到详情数据
        const result = await momentService.queryDetailByID(momentid)
        ctx.body = {
            code: 0,
            data: result[0]
        }
    }
    async remove (ctx, next) {
        const momentid = ctx.params.momentid
        const result = await momentService.remove(momentid);
        ctx.body = {
            code: 0,
            message: "删除成功",
            data: result
        }
    }
    async updata (ctx, next) {
        // 1.获取用户请求传递的参数
        const momentid = ctx.params.momentid;
        const content = ctx.request.body.content;
        // 2.路由由谁发布（token=>id,name）
        const result = await momentService.updata(content, momentid);
        // 返回数据
        ctx.body = {
            code: 0,
            message: "更新成功",
            data: result
        }
    }


}
module.exports = new MomentController();