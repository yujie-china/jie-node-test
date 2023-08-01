const connection = require("../app/database.js")
class UserService {
    async create (user) {
        // 1.获取用户 user
        const { name, password } = user;

        // 2.拼接statement;预处理语句
        const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;
        //执行的SQL语句
        const result = await connection.execute(statement, [name, password]);
        return result[0];
    }
    async findUserByName (name) {
        const statement = `SELECT * FROM user WHERE name=?;`;
        const [values] = await connection.execute(statement, [name])
        return values;
    }
}

module.exports = new UserService(); 