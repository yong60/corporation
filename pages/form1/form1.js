Page({
  //页面的初始数据
  data: {
    winWidth: 0,  
    winHeight: 0, 
    currentTab: 0, 
    current: 0,   //文本框当前字数
    max: 300, //文本框字数最大值
    name: '',
    class: '',
    age: '',
    gender: [{
        name: '男',
        value: '0',
        checked: true
      },
      {
        name: '女',
        value: '1',
        checked: false
      }
    ],
    skills: [{
        name: '1',
        value: '1'
      },
      {
        name: '2',
        value: '2'
      },
      {
        name: '3',
        value: '3'
      },
    ],
    opinion: ''
  },


  //首次进入页面时加载，主动刷新时加载
  onLoad: function(options) {
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

  submit: function(e) {
    wx.request({
      method: 'post', //请求方式
      url: 'https://www.toilet-mis.cn/action.php', //服务器接口地址
      data: e.detail.value, //请求参数
      success: function(res) { //回调函数
        console.log(res)
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  // 文本框字数限制
  limit: function (e) {
    var value = e.detail.value;
    var length = parseInt(value.length);
    if (length > this.data.noteMaxLen) {
      return;
    }
    this.setData({
      current: length
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