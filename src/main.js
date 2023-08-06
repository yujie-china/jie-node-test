// 1.导入app
const app = require("./app/index");
const { SERVER_PORT } = require("./config/server");
require("./utils/handle-error.js")
// require('./app/database.js')
// 2.启动app
//启动HTTP服务器监听在端口8000上，并在服务器启动成功后打印一条消息。
app.listen(SERVER_PORT, () => {
  console.log("服务器启动成功~");
});
