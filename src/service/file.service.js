const connection = require("../app/database")
class fileService {
    async create (filename, mimetype, size, user_id) {
        const statement = `INSERT INTO avatar (filename,mimetype,size,user_id) VALUES (?, ?, ?,?);`
        const [result] = await connection.execute(statement, [filename, mimetype, size, user_id])
        return result
    }
    async showAvatarImageByUserid (userid) {
        const statement = `SELECT * FROM avatar WHERE user_id =?`;
        const [result] = await connection.execute(statement, [userid]);
        //.pop()拿到数组的最后的一条数据
        return result.pop()
    }


}
module.exports = new fileService();