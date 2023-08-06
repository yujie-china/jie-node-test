const commentService = require('../service/comment.service')
class commentController {
    async create (ctx, next) {
        // 1.获取body中的参数
        const { content, momentid } = ctx.request.body
        const { id } = ctx.user
        //2.操作数据库
        const result = await commentService.create(content, momentid, id)
        ctx.body = {
            code: 200,
            msg: '评论成功',
            data: result
        }
    }
    async reply (ctx, next) {
        // 1.获取body中的参数
        const { content, momentid, commentid } = ctx.request.body
        const { id } = ctx.user
        const result = await commentService.reply(content, momentid, commentid, id)
        ctx.body = {
            code: 200,
            msg: '回复成功',
            data: result
        }
    }
}
module.exports = new commentController()