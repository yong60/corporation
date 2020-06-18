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
        if(res.data=='ozBBe5QcsMgwiQoYaBjgGSKTPRBw'||res.data=='ozBBe5VcaNYR-RJb6XLbCMVrUqwM'){
          wx.navigateTo({
            url: '/packageA/pages/form1',
          })
        }
        else{
          wx.showToast({
            title: '抱歉，您还没有权限新建活动，请与社团负责人联系。',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  }

})  