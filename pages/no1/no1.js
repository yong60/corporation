const app = getApp()
Page({
  data: {
    img: [
      'lun1.jpg',
      'lun2.jpg',
      'lun3.jpg'
    ],
    test:0,
    indicatorDots:true,
    //是否显示面板指示点
    autoplay:true,
    //是否自动切换
    interval: 5000,
    //自动切换时间间隔
    duration: 500,
    //滑动动画时长
    color:'#ffffff',
    //当前选中的指示点颜色
    height:''
    //swiper高度
  },

  nb:function(){
    this.setData({
      test:1
    })
  },

  onShow:function(){
    console.log("no1:"+app.globalData.youke)
    
    wx.request({
      url: 'https://www.toilet-mis.cn/sh.php',
      data:{
        sh:1
      },
      success(res){
        console.log(res.data)
        wx.setStorageSync('hide', res.data)
        if(res.data==1){
          wx.hideTabBar()
        }
        else{
          if(app.globalData.youke==1){
            if(app.globalData.inform==0){
              wx.showModal({
                title:"警告",
                content:'游客登录将无法使用程序中的聊天和通讯录功能，仅供您浏览学校社团信息。若要重新登录可移步“我的”界面，退回到登录页面。',
                showCancel:false,
                confirmText:'我知道了'
              })
              app.globalData.inform = 1
            }
            wx.setTabBarItem({
              index: 0,
              text: '禁用',
              iconPath: "https://www.toilet-mis.cn/images/disabled.jpg",
              selectedIconPath:"https://www.toilet-mis.cn/images/disabled.jpg"
            }),
            wx.setTabBarItem({
              index: 1,
              text: '禁用',
              iconPath: "https://www.toilet-mis.cn/images/disabled.jpg",
              selectedIconPath:"https://www.toilet-mis.cn/images/disabled.jpg"
            })
          }
        }
      }
    })

  },

  goheight:function (e) {
    var width = wx.getSystemInfoSync().windowWidth
    //获取可使用窗口宽度
    var imgheight = e.detail.height
    //获取图片实际高度
    var imgwidth = e.detail.width
    //获取图片实际宽度
    var height = width * imgheight / imgwidth +"px"
    //计算等比swiper高度
    this.setData({
      height: height
    })
  }
})