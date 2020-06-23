//index.js  
//获取应用实例  
var app = getApp()  
Page( {  
  data: {
    winWidth: 0,  
    winHeight: 0, 
    currentTab: 0,  
  }, 
  onLoad: function() {  
    var that = this;  
    wx.getSystemInfo( {  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
    });  
  }, 
  bindChange: function( e ) { 
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  }, 
  swichNav: function( e ) { 
    var that = this;  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  },

  create:function(){
    wx.getStorage({
      key: 'openid',
      success(res){
        wx.request({
          url: 'https://www.toilet-mis.cn/create.php',
          data:{
            openid:res.data
          },
          success:function(res){
            if(res.data==1){
              wx.showToast({
                title: '身份验证成功',
                icon:'success',
                duration:1500
              })
              setTimeout(function(){
                wx.navigateTo({
                  url: '/packageA/pages/form1',
                })
              }, 1500);
            }
            else{
              wx.showToast({
                title: '抱歉，您还没有权限新建活动，请与管理员联系。',
                icon: 'none',
                duration: 2000
              })
            }
          }
        })
      },
      fail:function(){
        app.globalData.show = 1
        wx.showToast({
          title: '账号异常，正在为您解决问题',
          icon: 'none',
          duration: 1000
        })
        setTimeout(function(){
          wx.reLaunch({
            url: '/pages/no4/no4',
          })
        }, 1000);
      }
    })
  }

})  