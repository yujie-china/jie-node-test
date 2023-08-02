const connection = require("../app/database")
class momentService {
    async create (userId, content) {
        const statement = `INSERT INTO moment (user_id, content) VALUES (?, ?);`
        const result = await connection.execute(statement, [userId, content])
        return result
    }

}
module.exports = new momentService()