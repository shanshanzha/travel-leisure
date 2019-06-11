Page({
  data: {
    imgUrls: [
      'http://127.0.0.1:6006/images/haerbin.jpg',
      'http://127.0.0.1:6006/images/daoyou_3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    showModal: false,

    service:{
      summary: "小仙教您一天如何轻松的走完西湖十景",
      price: "￥599.0",
      content:"http://127.0.0.1:6006/images/service1.png"
    }

  },

  goOrder: function () {
    wx.navigateTo({
      url: '../zhifu/zhifu'
    })
  },

})