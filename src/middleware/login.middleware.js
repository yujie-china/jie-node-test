const userService = require("../service/user.service")
const jwt = require("jsonwebtoken")
const fs = require("fs");
const verifyLogin = async (ctx, next) => {
    const { name, password } = ctx.request.body
    //1.判断用户名和密码是否为空
    if (!name || !password) {
        return ctx.app.emit("error", "name_or_password_required", ctx)
    }
    //2.查询该用户是否在数据库中存在
    const users = await userService.getUserByName(name)
    const user = users[0]
    if (!user) {
        return ctx.app.emit("error", "user_not_exist", ctx)
    }
    //3.判断密码是否正确
    if (password !== user.password) {
        return ctx.app.emit("error", "password_incorrect", ctx)
    }
    //4.将用户信息存入到ctx中
    ctx.user = user

    await next()
}

const verifyToken = async (ctx, next) => {
    //获取公钥
    const publicKey = fs.readFileSync("src/key/public.key")
    //获取token
    const authorization = ctx.headers.authorization
    const token = authorization.split(" ")[1]
    // const token = authorizetion.replace("Bearer ", "")
    //验证token是否是有效
    try {
        //获取token中的信息
        const result = jwt.verify(token, publicKey, {
            algorithms: ["RS256"]
        })
        //将token中的信息保存下来
        ctx.user = result

        //执行下一步操作
        await next()
    } catch (error) {
        ctx.app.emit("error", "unauthorization", ctx)
    }
}
module.exports = {
    verifyLogin,
    verifyToken
}