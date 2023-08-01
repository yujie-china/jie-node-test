const jwt = require("jsonwebtoken")
const fs = require("fs");

class loginController {
    sign (ctx, next) {
        const { id, name } = ctx.user
        console.log(id, name);
        const privateKey = fs.readFileSync("src/key/private.key")
        //4.颁发token
        const token = jwt.sign({ id, name }, privateKey, {
            expiresIn: 60 * 60 * 24,
            algorithm: "RS256"
        })
        ctx.body = {
            code: 0,
            data: {
                id,
                name,
                token
            }
        }
    }
    test (ctx, next) {
        const { id, name, result } = ctx.user
        console.log(result);
        ctx.body = {
            code: 0,
            data: {
                id,
                name,
                result
            }
        }
    }
}
module.exports = new loginController() 