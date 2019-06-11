// const Mysql = require('../tools/mysql')

// module.exports = async (ctx, next) => {
//     next();
//     let reqdata = ctx.request.body;
//     // console.log(ctx.request.body.userinfo);
//     const skey = reqdata.session_key;
//     const openid = reqdata.openid;
//     const userinfo = reqdata.userinfo; 
//     // 将数据保存在mysql
//     const selectsql = "INSERT INTO user values()";
//     const insertsql = "INSERT INTO user (openid, skey, userinfo) VALUE('${openid}', '${skey}', '${userinfo}')";
//     let data = await Mysql.query(sql)

//     ctx.body = "received, ok!"
//     // ctx.body = {
//     //     "code": 1,
//     //     "data": data,
//     //     "mesg": 'ok'
//     // }
// }