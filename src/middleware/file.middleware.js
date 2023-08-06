const multer = require("@koa/multer")
const { UPLOAD_PATH } = require("../config/path")
//上传头像中间件
const uploadAvatar = multer({
    dest: UPLOAD_PATH
})

const handleAvatar = uploadAvatar.single('avatar')

//上传文件中间件



module.exports = {
    handleAvatar
}