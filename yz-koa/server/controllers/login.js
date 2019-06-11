// const axios = require('axios')
// const config = require('../config')
// // const User = require('../models/user')
// // const jwt = require('jsonwebtoken')

// // let generateToken = function(user) {
// //     return jwt.sign(user, config.jwtSecret , {
// //       expiresIn: 7200
// //     })
// // }


// module.exports = async (ctx,next) => {
//     next();
//     var resdata;
//     // console.log(ctx.request.body);
//     const code = ctx.request.body.code;
//     const userinfo = ctx.request.body.userinfo;
//     // console.log(code);
//     const queryString = `appid=${config.appid}&secret=${config.appsecret}&js_code=${code}&grant_type=authorization_code`;
//     const wxAPI = `https://api.weixin.qq.com/sns/jscode2session?${queryString}`;
//     axios.get(wxAPI)
//     .then(response => {
//         // console.log(response.data)


//         axios.post('http://127.0.0.1:6006/adduser',{
//             session_key: response.data.session_key,
//             openid: response.data.openid,
//             userinfo: userinfo
//         })
//         .then(response =>{
//             console.log(response.data)
//         })
//         .catch(error =>{
//             console.log(error)
//         })





//         // User.findOne({openid: response.data.openid}, (err, user) => {
//         //     if(user) {
//         //       return res.json({
//         //         token: generateToken({openid: response.data.openid})
//         //       })
//         //     } else {
//         //       const user = new User();
//         //       user.openid = response.data.openid;
//         //       user.save();
  
//         //       return res.json({
//         //         token: generateToken({openid: response.data.openid})
//         //       })
//         //     }
//         //   })
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }



//         // resdata = response.data;

//         // axios.post('http://127.0.0.1:6006/adduser',{
//         //     session_key: response.data.session_key,
//         //     openid: response.data.openid,
//         //     userinfo: userinfo
//         // })
//         // .then(response =>{
//         //     // console.log(response.data)
//         // })
//         // .catch(error =>{
//         //     console.log(error)
//         // })



// // exports.checkToken = async(ctx, next) => {
// //     let token = req.headers.authorization;
// //     console.log(token);
// //             if(token) {
// //               console.log('token exist');
// //               jwt.verify(token, config.jwtSecret, (err, decoded) => {
// //                 console.log('jwt.verify');
// //                 if(err) {
// //                   console.log('err');
// //                   if(err.name === 'TokenExpiredError') {
// //                     console.log('认证码失效，请重新登录!');
// //                     return res.status(401).json({ error: '认证码失效，请重新登录!' });
// //                   } else {
// //                     console.log('认证失败！');
// //                     return res.status(401).json({ error: '认证失败！'});
// //                   }
// //                 } else {
// //                   if(decoded.openid) {
// //                     req.openid = decoded.openid;
// //                     console.log('req.openid = decoded.openid;');
// //                     return res.status(200).json({ message: '已登录'});
// //                   } else {
// //                       console.log('认证失败！');
// //                     res.status(401).json({ error: '认证失败！'});
// //                   }
// //                 }
// //               });
// //             } else {
// //               console.log("no token");
// //               return res.status(403).json({
// //                 error: '请提供认证码！'
// //               });
// //             }
// //         }