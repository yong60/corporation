// pages/wdst/wdst.js
Page({
  data: {
    xsh:0,
    txtw:0,
    xxjs:0,
    total:0,
    none:1,
  },

  stor:function(){
    var that = this
    wx.login({
      success: function (res) {
        console.log(res)
        var code = res.code;//发送给服务器的code
        wx.getUserInfo({
          success: function (res) {
            var userNick = res.userInfo.nickName;//用户昵称
            var avataUrl = res.userInfo.avatarUrl;//用户头像地址
            var gender = res.userInfo.gender;//用户性别
            console.log(res)
            if (code) {
              wx.request({
                url: 'https://www.toilet-mis.cn/login2.php',
                data: {
                  code: code,
                  nick: userNick,
                  avaurl: avataUrl,
                  sex: gender,
                },
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  console.log(res);
                  wx.setStorageSync('name', res.data.name);//将获取信息写入本地缓存
                  wx.setStorageSync('openid', res.data.openid);
                  wx.setStorageSync('imgUrl', res.data.imgurl);
                  wx.setStorageSync('sex', res.data.sex);
                },
                fail:function(){
                  console.log('error')
                }
              })
            }
            else {
              console.log("获取用户登录态失败！");
            }
          }
        })
      },
      fail: function (error) {
        console.log('login failed ' + error);
      }
    }),
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
            if(res.data!=0){
            var sum = res.data
            var a = sum/100
            a = a.toFixed(0)
            var b = (sum-a*100)/10
            b = b.toFixed(0)
            var c = (sum-a*100)-b*10
            var t = 0
            if(a==0&&b==0&&c==0){
              t = 1;
            }
            that.setData({
              xsh:a,
              txtw:b,
              xxjs:c,
              total:t
            })
            if(that.data.total>0){
              setTimeout(function () {
                wx.reLaunch({
                  url: '../no1/no1',
                })
              }, 4000)
              wx.showToast({
                title: '3秒后为您跳转到社团介绍页面',
                icon:"loading",
                duration:2000
              })
            }
          }
          else{
            that.setData({
              none:0
            })
          }
        }
        })
      },
      fail(){
        wx.login({
          success: function (res) {
            console.log(res)
            var code = res.code;//发送给服务器的code
            wx.getUserInfo({
              success: function (res) {
                var userNick = res.userInfo.nickName;//用户昵称
                var avataUrl = res.userInfo.avatarUrl;//用户头像地址
                var gender = res.userInfo.gender;//用户性别
                console.log(res)
                if (code) {
                  wx.request({
                    url: 'https://www.toilet-mis.cn/login2.php',
                    data: {
                      code: code,
                      nick: userNick,
                      avaurl: avataUrl,
                      sex: gender,
                    },
                    header: {
                      'content-type': 'application/json'
                    },
                    success: function (res) {
                      wx.setStorageSync('name', res.data.name);//将获取信息写入本地缓存
                      wx.setStorageSync('openid', res.data.openid);
                      wx.setStorageSync('imgUrl', res.data.imgurl);
                      wx.setStorageSync('sex', res.data.sex);
                      var id = res.data.openid
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
                          if(res.data!=0){
                          var sum = res.data
                          var a = sum/100
                          a = a.toFixed(0)
                          var b = (sum-a*100)/10
                          b = b.toFixed(0)
                          var c = (sum-a*100)-b*10
                          var t = 0
                          if(a==0&&b==0&&c==0){
                            t = 1;
                          }
                          that.setData({
                            xsh:a,
                            txtw:b,
                            xxjs:c,
                            total:t
                          })
                          if(that.data.total>0){
                            setTimeout(function () {
                              wx.reLaunch({
                                url: '../no1/no1',
                              })
                            }, 4000)
                            wx.showToast({
                              title: '3秒后为您跳转到社团介绍页面',
                              icon:"loading",
                              duration:2000
                            })
                          }
                        }
                        else{
                          that.setData({
                            none:0
                          })
                        }
                      }
                      })

                    },
                    fail:function(){
                      console.log('error')
                    }
                  })
                }
                else {
                  console.log("获取用户登录态失败！");
                }
              }
            })
      },
      fail:function(){
        wx.showToast({
          title: '账号异常，请尝试重新登录',
          icon: 'none',
          duration: 2000
        })
      }
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