// pages/issue/xdxq/xdxq.js
// http://127.0.0.1:6006
Page({
  data: {
    // swiper data
    imgUrls: [
      'http://127.0.0.1:6006/images/daoyou_1.jpg',
      'http://127.0.0.1:6006/images/dy_2.jpg',
      'http://127.0.0.1:6006/images/daoyou_3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    // dyCardData
    dyDetails:{
      name: "黄玉婷",
      avatar: "http://127.0.0.1:6006/images/avatar.png",
      star: "http://127.0.0.1:6006/images/oneStar.png",
      label_list: ["熟悉当地","热情","担当"],
      brief_intro: "9年|中文|英语",
      auth_img:"http://127.0.0.1:6006/images/auth.svg",
      auth_list: ["身份证认证", "导游证认证", "驾驶证认证"]
    },
    // fwCards
    fwCards:[
      {
        id: 1,
        bg_img: "http://127.0.0.1:6006/images/hzxh.jpeg",
        summary: "小仙教您一天如何轻松的走完西湖十景",
        price: "￥599.0"
      },
      {
        bg_img: "http://127.0.0.1:6006/images/shai.jpeg",
        summary: "小仙带您一天看遍老上海",
        price: "￥599.0"
      },
    ]
    
  },
  goConsult: function(){
    wx.navigateTo({
      url: '../../chat/chat'
    })
  },
  goServiceDetails:function(){
    wx.navigateTo({
      url: '../fwxq/fwxq'
    })
  }
})