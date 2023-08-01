const userService = require("../service/user.service.js")
class UserController {
    async create (ctx, next) {
        // 1.获取用户请求传递的参数
        const user = ctx.request.body;

        // 2.验证客户端传递过来的user是否可以保存到数据库中
        // 2.1验证用户名和密码是否为空
        const { name, password } = user
        if (!name || !password) {
            ctx.body = {
                code: 400,
                msg: "用户名和密码不能为空"
            }
            return
        }
        // 2.2判断用户名是否已经存在
        const users = await userService.findUserByName(name)
        if (users.length > 0) {
            ctx.body = {
                code: 400,
                msg: "用户名已经存在"
            }
            return
        }
        // 查询数据
        const result = await userService.create(user);

        // 返回数据
        ctx.body = result;
    }
}
module.exports = new UserController();