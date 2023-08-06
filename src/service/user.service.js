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
    async getUserByName (name) {
        const statement = `SELECT * FROM user WHERE name = ?;`;
        const result = await connection.execute(statement, [name]);
        return result[0];
    }
    async updateUserAvatar (avatarUrl, userId) {
        const statement = `UPDATE user SET avatar_url = ? WHERE id = ?;`;
        const [result] = await connection.execute(statement, [avatarUrl, userId]);
        console.log(result);
        return result;
    }

}

module.exports = new UserService(); 