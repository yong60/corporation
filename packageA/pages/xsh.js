// pages/xsh/xsh.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    baoming:function(){
      var that = this
      wx.getStorage({
        key: 'openid',
        success (res) {
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
              var sum = res.data
              var a = sum/100
              a = a.toFixed(0)
              if(a==0){
                wx.navigateTo({
                  url: '/packageA/pages/form3',
                })}
              else{
                wx.showToast({
                  title: '您已经是社团成员了,无需重复报名',
                  icon:'none',
                  duration:2500
                })
              }
            }
            })
          },
        fail(){
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
    },
  }
})
