const fs = require('fs');
function registerRoutes (app) {
    // //1.读取当前文件夹的所以文件

    const files = fs.readdirSync(__dirname)

    for (const file of files) {
        if (file === 'index.js') {
            continue;
        }
        const router = require(`./${file}`)
        app.use(router.routes())
        app.use(router.allowedMethods())
    }


}
module.exports = registerRoutes;