const connection = require("../app/database.js")
class PermissionService {
    async checkMoment (momentid, userId) {
        // 2.拼接statement;预处理语句
        const statement = `SELECT * FROM  moment WHERE id=? AND user_id=? ;`
        //执行的SQL语句
        const result = await connection.execute(statement, [momentid, userId]);
        return Boolean(result.length);
    }

}

module.exports = new PermissionService(); 