const labelService = require("../service/label.service")
class labelConreoller {
    async create (ctx, next) {
        const name = ctx.request.body.name
        const result = await labelService.create(name)
        ctx.body = {
            code: 200,
            data: result
        }
    }
    async list (ctx, next) {
        const result = await labelService.list()
        ctx.body = {
            code: 200,
            data: result
        }
    }
}
module.exports = new labelConreoller()