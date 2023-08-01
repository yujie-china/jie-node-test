const userService = require("../service/user.service");
const { md5password } = require("../utils/md5password")
const verifyUser = async (ctx, next) => {
    // 2.验证客户端传递过来的user是否可以保存到数据库中
    // 2.1验证用户名和密码是否为空
    const { name, password } = ctx.request.body

    if (!name || !password) {
        return ctx.app.emit("error", "name_or_password_required", ctx)
    }
    // 2.2判断用户名是否已经存在
    const users = await userService.getUserByName(name)
    if (users.length > 0) {
        return ctx.app.emit("error", "name_is_already_exists", ctx)
    }
    //3.执行下一个函数
    await next()
}
const handlePassword = async (ctx, next) => {
    //1.拿到用户输入的密码
    const { password } = ctx.request.body;
    //2.对用户输入的密码进行加密
    ctx.request.body.password = md5password(password)
    //3.执行下一个函数
    await next();
}


module.exports = { verifyUser, handlePassword }