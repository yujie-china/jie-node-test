//导入dotenv
const dotenv = require("dotenv");
//默认方法，用完之后就可以在process.env中拿到 .env文件的数据
dotenv.config();
//从process.env中解构出SERVER_PORT
module.exports = { SERVER_PORT, SERVER_HOST } = process.env;
