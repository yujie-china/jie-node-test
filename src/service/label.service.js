const connection = require("../app/database")
class labelService {
    async create (name) {
        const statement = `INSERT INTO label (name) VALUES (?);`;
        const result = await connection.execute(statement, [name]);
        return result;
    }
    async list () {
        const statement = `SELECT * FROM label`;
        const [result] = await connection.execute(statement);
        return result;
    }
    async queryLabelByName (name) {
        const statement = `SELECT * FROM label where name = ?`;
        const [result] = await connection.execute(statement, [name]);
        return result[0];

    }
}

module.exports = new labelService();