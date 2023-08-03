const PermissionService = require("../service/permission.service")
const verifyPermission = async (ctx, next) => {
    const { id } = ctx.user
    const keyName = Object.keys(ctx.params)[0]
    const resourceID = ctx.params[keyName]
    const resourceName = keyName.replace("id", " ")

    const isPermission = await PermissionService.checkMoment(resourceID, resourceName, id)
    if (!isPermission) {
        return ctx.app.emit("error", "operation_is_not_allowed", ctx)
    } else {
        await next()
    }
}

module.exports = {
    verifyPermission
}