// pages/map/index.js
const app = getApp()
var server = app.globalData.server;
var appid = app.globalData.appid;

const AV = require("../../WxComment/libs/leancloud/av-weapp-min.js");
var Common = require('../../WxComment/libs/scripts/common.js');
// LeanCloud 应用的 ID 和 Key
// AV.init({
//   appId: 'Q7y6ChsRaO66w6DLJ7XR0IF9-gzGzoHsz',
//   appKey: 'tO9g5jhd0ETAx2vrRtR1NLp5',
// });

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},

    movieList:

      [{
          img: "https://github.com/AINY-LJW/DEMO/blob/master/images/g6.jpg?raw=true",
          desc: "缘分来得早或者迟，没有关系，遇见你，就是我最好的时光",
          time: 1532519734589,
          title: "海边",
          vid: "e0354z3cqjp",
          src: "http://ykugc.cp31.ott.cibntv.net/67740782CC54C71F16B6E3406/03001101005D1AB35ED7928580ED0F3A38E9C2-C58D-44A5-A8F9-D4B2B5BFDF32.mp4?ccode=050F&duration=30&expire=18000&psid=c5cca489df4928145555be0146bf8dbe&ups_client_netip=7ccf1dfe&ups_ts=1564746941&ups_userid=&utid=lpv2FK4vd0ACAXzPHf5dpeQJ&vid=XNDI1MjA4NTg1Mg%3D%3D&vkey=Ac53a64a61e22ab53ca4228c086fa46d7&sp=&bc=2"
        },
        {
          img: "https://github.com/AINY-LJW/DEMO/blob/master/images/g3.jpg?raw=true",
          desc: "阳光与你同在，就是我想要的未来",
          time: 1532519734589,
          title: "绿地",
          vid: "e0354z3cqjp",
          src: "http://ykugc.cp31.ott.cibntv.net/67740782CC54C71F16B6E3406/03001101005D1AB35ED7928580ED0F3A38E9C2-C58D-44A5-A8F9-D4B2B5BFDF32.mp4?ccode=050F&duration=30&expire=18000&psid=c5cca489df4928145555be0146bf8dbe&ups_client_netip=7ccf1dfe&ups_ts=1564746941&ups_userid=&utid=lpv2FK4vd0ACAXzPHf5dpeQJ&vid=XNDI1MjA4NTg1Mg%3D%3D&vkey=Ac53a64a61e22ab53ca4228c086fa46d7&sp=&bc=2"
        },
        {
          img: "https://github.com/AINY-LJW/DEMO/blob/master/images/g6.jpg?raw=true",
          desc: "大步大步地跑向你，像海洋歌颂旭日一样，歌颂我爱的你~",
          time: 1532519734589,
          title: "喷泉",
          vid: "e0354z3cqjp",
          src: "http://ykugc.cp31.ott.cibntv.net/67740782CC54C71F16B6E3406/03001101005D1AB35ED7928580ED0F3A38E9C2-C58D-44A5-A8F9-D4B2B5BFDF32.mp4?ccode=050F&duration=30&expire=18000&psid=c5cca489df4928145555be0146bf8dbe&ups_client_netip=7ccf1dfe&ups_ts=1564746941&ups_userid=&utid=lpv2FK4vd0ACAXzPHf5dpeQJ&vid=XNDI1MjA4NTg1Mg%3D%3D&vkey=Ac53a64a61e22ab53ca4228c086fa46d7&sp=&bc=2"
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this

    wx.getUserInfo({
      success: function(res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
    })

    var query = new AV.Query('VideoList');
    query.include('src');
    console.log('韩洋1');
    query.find().then(function(videoList) {
      // 将返回结果返回到 data 数据中，以在 wxml 渲染


      console.log('韩洋4:' + videoList.length);

      for (var i = 0, len = videoList.length; i < len; i++) {

        var str = JSON.stringify(videoList[i]);
        var obj = JSON.parse(str);
        that.data.movieList.unshift(obj);
        console.log('韩洋9' + obj.name); //遍历输出
      }

      that.setData({
        movieList: that.data.movieList
      })

    }, function(err) {
      console.log(err);
    });















  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    var that = this;
    //console.log(that.data);
    return {
      title: that.data.mainInfo.share,
      imageUrl: that.data.mainInfo.thumb,
      path: 'pages/index/index',
      success: function(res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  }
})