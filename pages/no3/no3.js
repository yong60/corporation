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
  }
})  