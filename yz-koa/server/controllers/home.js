const Mysql = require('../tools/mysql')

module.exports = async (ctx) => {
    let lang = "SELECT * FROM guide";
    let data = await Mysql.query(lang)

    ctx.body = {
        "code": 1,
        "data": data,
        "mesg": 'ok'
    }
}




