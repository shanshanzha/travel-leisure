// pages/home/home.js
// http://127.0.0.1:6006
Page({
  data: {
    region: ['广东省', '广州市',],
    customItem: '全部',
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    msg: '驴友：***在7小时前购买了陈女士的向导陪游',
    imageUrls:[
      'http://127.0.0.1:6006/images/banner3.jpg',
      'http://127.0.0.1:6006/images/banner2.jpg',
      'http://127.0.0.1:6006/images/banner6.jpg'
    ],
    star: "http://127.0.0.1:6006/images/Onestar.png",
    // 向导板块对应数据
    dyList: [],
  },
  //点击每个导航的点击事件
  // handleTap: function (e) {
  //   let id = e.currentTarget.id;
  //   if (id) {
  //     this.setData({
  //       currentId: id
  //     })
  //   }
  // },
  // goDetails: function (event) {
  //   var cur_url = event.currentTarget.dataset.id;
  //   wx.navigateTo({
  //     url: cur_url,
  //   })
  // },
  onShow: function(){
    var that = this;
    var value = wx.getStorageSync('dyList');
    if(value){
      that.setData({
        'dyList': value
      })
    }else{
      wx.request({
        url: 'http://localhost:6006/home',
        success: function(res){
          // console.log(res.data)
          that.setData({
            'dyList': res.data.data
          });
          wx.setStorageSync('dyList', res.data.data)
        },
      });
    }

  },
  goDetails: function () {
    wx.navigateTo({
      url: './xdxq/xdxq'
    })
  }
})

