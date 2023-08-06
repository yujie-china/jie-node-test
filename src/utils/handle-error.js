const app = require("../app/index")

app.on("error", (error, ctx) => {
    let code = 0
    let message = ""
    switch (error) {
        case "name_or_password_required":
            code = -1001
            message = "用户名和密码不能为空"
            break
        case "name_is_already_exists":
            code = -1002
            message = "用户名已存在"
            break
        case "user_not_exist":
            code = -1003
            message = "用户不存在"
            break
        case "password_incorrect":
            code = -1004
            message = "密码错误"
            break
        case "unauthorization":
            code = -1005
            message = "权限不足"
            break
        case "operation_is_not_allowed":
            code = -1006
            message = "没有操作改资源的权限"
            break
        case "Label_already_exists":
            code = -1007
            message = "标签已存在"
            break
    }
    ctx.body = { code, message }
})