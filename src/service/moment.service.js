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
        JSON_OBJECT('id',u.id,'name',u.name,'createTime',u.createAt,'updateTime',u.updateAt) user,
        (SELECT COUNT(*) FROM comment WHERE comment.moment_id=m.id ) commentCount ,
				(SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id=m.id ) labelCount
    FROM moment m
    LEFT JOIN user u ON u.id=m.user_id
    LIMIT ? OFFSET ?;`
        const [result] = await connection.execute(statement, [String(size), String(offset)])
        return result
    }
    async queryDetailByID (id) {
        const statement = `SELECT 
        m.id id,m.content content, m.createAt createTime, m.updataAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name,'createTime',u.createAt,'updateTime',u.updateAt) user,
      (
          JSON_ARRAYAGG(JSON_OBJECT(
          'id',c.id,'content',c.content,'commentId',c.comment_id,
          'user',JSON_OBJECT('id',cu.id,'name',cu.name)
          ))
      ) comments 
      FROM moment m
      LEFT JOIN user u ON u.id=m.user_id
      LEFT JOIN comment c ON c.moment_id=m.id
      LEFT JOIN user cu ON cu.id=c.user_id
      where m.id = ?
      GROUP BY m.id;`
        const [result] = await connection.execute(statement, [id])
        return result
    }
    async updata (content, momentid) {
        const statement = `UPDATE moment SET content = ? WHERE id = ?`;
        const [result] = await connection.execute(statement, [content, momentid]);
        return result;
    }
    async remove (momentid) {
        const statement = `DELETE FROM moment WHERE id = ?`
        const [result] = await connection.execute(statement, [momentid]);
        return result
    }
    async hasLabel (momentid, labelid) {
        const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?`
        const [result] = await connection.execute(statement, [momentid, labelid]);

        return Boolean(result.length)
    }
    async addLabel (momentid, labelid) {
        const statement = `INSERT INTO moment_label (moment_id,label_id) VALUES (?,?) `
        const [result] = await connection.execute(statement, [momentid, labelid]);
        return result
    }
}
module.exports = new momentService() 