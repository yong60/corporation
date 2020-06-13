// pages/modify/modify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    grade:'电信1802',
    love:'',
    gender:'男',

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: decodeURIComponent(options.username),
      grade: decodeURIComponent(options.grade),
      love: decodeURIComponent(options.love),
      gender: decodeURIComponent(options.gender),
    })
  },

  formSubmit:function(e){
    var formData = e.detail.value
    var pages = getCurrentPages()
    var prePage = pages[pages.length - 2]
    prePage.setData({
      username:formData.username,
      grade: formData.grade,
      love: formData.love,
      gender:formData.gender,

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})