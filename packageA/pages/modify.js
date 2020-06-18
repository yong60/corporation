const app = getApp()
Page({
  data: {
    gender: "无记载",
    love: "无记载",
    username: "无记载",
    grade: "无记载"
  },
  onLoad: function(options) {
    var that = this
    wx.getStorage({
      key: 'username',
      success:function(res){
        that.setData({
          username:res.data
        })
      }
    }),
    wx.getStorage({
      key: 'grade',
      success:function(res){
        that.setData({
          grade:res.data
        })
      }
    }),
    wx.getStorage({
      key: 'gender',
      success:function(res){
        that.setData({
          gender:res.data
        })
      }
    }),
    wx.getStorage({
      key: 'love',
      success:function(res){
        that.setData({
          love:res.data
        })
      }
    })
  },
  formSubmit: function(e) {
    console.log(e.detail.value)
    wx.request({
      url: 'https://www.toilet-mis.cn/data2.php',
      data: {
        num:app.globalData.num,
        username:e.detail.value.username,
        grade:e.detail.value.grade,
        gender:e.detail.value.gender,
        love:e.detail.value.love
      },
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
        wx.navigateBack({
          complete: (res) => {
            wx.showToast({
              title: '修改成功',
              icon:"success",
              duration:1500
            })
          },
        })
      },
      fail:function(res){
        wx.showToast({
          title: '修改资料失败，请检查您的网络',
          icon:"none",
          duration:1500
        })
      }
    })
  }
})