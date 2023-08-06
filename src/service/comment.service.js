const connection = require("../app/database")
class commentService {
    async create (content, momentid, user_id) {
        const statement = `INSERT INTO comment (content,moment_id,user_id) VALUES (?, ?, ?);`
        const [result] = await connection.execute(statement, [content, momentid, user_id])
        return result
    }
    async reply (content, momentid, commentid, user_id) {
        const statement = `INSERT INTO comment (content,moment_id,comment_id,user_id) VALUES (?, ?,?, ?);`
        const [result] = await connection.execute(statement, [content, momentid, commentid, user_id])
        return result
    }

}
module.exports = new commentService();