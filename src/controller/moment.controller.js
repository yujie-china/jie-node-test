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
    //为moment添加labels
    async addLabels (ctx, next) {
        //  1.拿到labels
        const { labels } = ctx
        const { momentid } = ctx.params
        // 2.将moment_id和label_id添加到关系表中
        try {
            for (const label of labels) {
                // 2.1判断他们的关系是否已经放在关系表中了
                const isExists = await momentService.hasLabel(momentid, label.id)
                if (!isExists) {
                    // 2.2如果不存在就存入数据库
                    const result = await momentService.addLabel(momentid, label.id)
                }
            }
            ctx.body = {
                code: 0,
                message: "添加成功"
            }
        } catch (error) {
            ctx.body = {
                code: -3001,
                message: "添加失败"

            }
        }
    }


}
module.exports = new MomentController();