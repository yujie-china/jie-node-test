const PermissionService = require("../service/permission.service")
const verifyMomentPermission = async (ctx, next) => {
    const { momentid } = ctx.params
    const { id } = ctx.user
    const isPermission = await PermissionService.checkMoment(momentid, id)
    if (!isPermission) {
        return ctx.app.emit("error", "operation_is_not_allowed", ctx)
    } else {
        await next()
    }
}

module.exports = {
    verifyMomentPermission
}