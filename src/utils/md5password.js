const { log } = require('console')
const crypto = require('crypto')
function md5password (password) {
    //名叫md5的哈希算法
    const md5 = crypto.createHash('md5')
    //用md5对password进行加密，在转化成16进制
    const md5pwd = md5.update(password).digest("hex")

    return md5pwd
}

module.exports = md5password 