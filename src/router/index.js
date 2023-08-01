const fs = require('fs');
function registerRoutes (app) {
    // //1.读取当前文件夹的所以文件
    // fs.readdirSync(__dirname).forEach(function (file) {
    //     //2.判断文件名是否以.js结尾
    //     if (file.indexOf('.js') !== -1) {
    //         //3.读取文件内容
    //         var route = require('./' + file);
    //         //4.将文件内容注册到express
    //         app.use(route.url, route.router);
    //     }
    // });
    const files = fs.readdirSync(__dirname)
    console.log(files);

}
module.exports = registerRoutes;