const Router = require('koa-router');
const { verifyToken } = require('../middleware/login.middleware');
const labelConreoller = require('../controller/label.controller')
const labelRouter = new Router({ prefix: '/label' })

//创建标签
labelRouter.post('/', verifyToken, labelConreoller.create)

//查询标签
labelRouter.get("/", labelConreoller.list)


module.exports = labelRouter