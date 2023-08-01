const verifyUser = async (ctx, next) => {
    // 2.验证客户端传递过来的user是否可以保存到数据库中
    // 2.1验证用户名和密码是否为空
    const user = ctx.request.body;
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

    await next()
}
module.exports = {
    verifyUser
}