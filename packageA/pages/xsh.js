// pages/xsh/xsh.js
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
          wx.showToast({
            title: '账号异常，请尝试重新登录',
            icon: 'none',
            duration: 2000
          })
        }
      })
    },
  }
})
