const connection = require("../app/database")
class momentService {
    async create (userId, content) {
        const statement = `INSERT INTO moment (user_id, content) VALUES (?, ?);`
        const result = await connection.execute(statement, [userId, content])
        return result
    }
    async queryList (size = 0, offset = 10) {
        const statement = `SELECT 
        m.id id,m.content content, m.createAt createTime, m.updataAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name,'createTime',u.createAt,'updateTime',u.updateAt) user
    FROM moment m
    LEFT JOIN user u ON u.id=m.user_id
    LIMIT ? OFFSET ?;`
        const [result] = await connection.execute(statement, [String(size), String(offset)])
        return result
    }
    async queryDetailByID (id) {
        const statement = `SELECT 
        m.id id,m.content content, m.createAt createTime, m.updataAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name,'createTime',u.createAt,'updateTime',u.updateAt) user
    FROM moment m
    LEFT JOIN user u ON u.id=m.user_id
    where m.id = ?`
        const [result] = await connection.execute(statement, [id])
        return result
    }
    async updata (content, id) {
        const statement = `UPDATE moment SET content ="?" WHERE id =? ;`
        const result = await connection.execute(statement, [content, id])
        return result
    }
}
module.exports = new momentService()