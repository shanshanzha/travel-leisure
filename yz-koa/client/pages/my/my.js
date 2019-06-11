var app = getApp();
Page({
  data: {
    // 用户信息数据
    unLogin: "../../icons/touxiang.svg",
    userInfo: {
      avatarUrl: "",
      nickName: "点击登录"
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 我的订单数据 
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../../icons/topay.png',
      },
      {
        typeId: 1,
        name: '已付款',
        url: 'bill',
        imageurl: '../../icons/payded.png',
      },
      {
        typeId: 2,
        name: '已完成',
        url: 'bill',
        imageurl: '../../icons/finished.png'
      },
      {
        typeId: 3,
        name: '已取消',
        url: 'bill',
        imageurl: '../../icons/canceled.png'
      }
    ],

    // 功能列表数据
    userListInfo: [{
      id: '0',
      url: './comment/comment',
      icon: '../../icons/pinglun.png',
      text: '我的评论'
    }, {
      id: '1',
      url: './support/support',
      icon: '../../icons/kefu.svg',
      text: '联系客服',
    }, {
      id: '2',
      url: './feedback/feedback',
      icon: '../../icons/fankui.svg',
      text: '意见反馈',
    }, {
      id: '3',
      url: './setting/setting',
      icon: '../../icons/setting.svg',
      text: '设置'
    },]
  },
  goDetails: function (event) {
    var cur_url = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: cur_url,
    })
  },

  //用户定义的事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../my/order/order'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})



