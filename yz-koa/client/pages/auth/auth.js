var app = getApp();
Page({
  bindGetUserInfo: function (e) {
    console.log(e)
    if (e.detail.userInfo) {
      const userInfo = e.detail.userInfo;
      // console.log("authorize success");
      app.globalData.userInfo = userInfo;
      wx.login({
          success: function(res){
            // console.log(res.code);
            wx.request({
              url: 'http://127.0.0.1:6006/login',
              data: {
                code: res.code,
                userinfo: userInfo
              },
              method: 'POST',
              header:{
                'content-type': 'application/json'
              },
              success: function(res){
                console.log(res.data);
                wx.setStorageSync('session_id', res.data.session_id)
              },
            });
          }
        }),
      wx.reLaunch({
        url: '../home/home',
      })
    } else {
      console.log("auth fail");
      wx.reLaunch({
        url: './auth',
      })
    }
  },
})

