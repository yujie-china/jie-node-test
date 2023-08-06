const fileService = require('../service/file.service')
const userService = require('../service/user.service')
const { SERVER_HOST, SERVER_PORT } = require("../config/server")
class fileController {
    async create (ctx, next) {
        const { filename, mimetype, size } = ctx.request.file
        const { id } = ctx.user
        const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${id}`
        //创建图片
        const result = await fileService.create(filename, mimetype, size, id)
        const result2 = await userService.updateUserAvatar(avatarUrl, id)
        ctx.body = {
            code: 200,
            msg: '上传成功',
            data: avatarUrl
        }

    }
}
module.exports = new fileController()