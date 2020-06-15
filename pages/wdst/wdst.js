// pages/wdst/wdst.js
Page({
  data: {
    xsh:0,
    txtw:0,
    xxjs:0,
  },

  stor:function(){
    var that = this
    wx.getStorage({
      key: 'openid',
      success (res) {
        console.log(res.data)
        var id = res.data
        wx.request({
          url: 'https://www.toilet-mis.cn/wdst.php',
          data:{
            openid:id
          },
          header: {
            'content-type': 'application/json'
          },
          success:function(res){
            console.log(res.data)
            var sum = res.data
            var a = sum/100
            a = a.toFixed(0)
            var b = (sum-a*100)/10
            b = b.toFixed(0)
            var c = (sum-a*100)-b*10
            that.setData({
              xsh:a,
              txtw:b,
              xxjs:c
            })
            console.log(that.data.xsh)
            console.log(that.data.txtw)
            console.log(that.data.xxjs)
          }
        })

      },
      fail(){
        wx.showToast({
          title: '账号异常，请尝试重新登录',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(function()
    {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})