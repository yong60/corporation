//获取应用实例
const app = getApp();
 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      that.setUserInfo(app.globalData.userInfo);
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setUserInfo(res.userInfo);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          that.setUserInfo(res.userInfo);
        }
      })
    }
  },
 
  getUserInfo: function (e) {
    this.setUserInfo(e.detail.userInfo);
  },
 
  setUserInfo: function (userInfo) {
    if (userInfo != null) {
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      })
    }
  },

  userid:function(){
    wx.login({
      success (res) {
        console.log(res.code)
        if (res.code) {
        //发起网络请求
        wx.request({
          url: 'https://www.toilet-mis.cn/login.php',
          data: {
            code: res.code
          },
          success(res){
            console.log(res)
          },
          fail(res){
            wx.showToast({
              title: '登录失败',
              icon: 'loading',
              duration: 2000
            })
          }
        })
      }
      else {
        console.log('登录失败！' + res.errMsg)
        wx.showToast({
          title: '请尝试重新登录，否则可能影响您的使用',
          icon: 'none',
          duration: 2000
        })
      }
    }
  })
  },

})