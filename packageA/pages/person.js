const app = getApp()
Component({
  data: {
    showTopTips: false,
    gender: "无记载",
    love: "无记载",
    username: "无记载",
    grade: "无记载",
  },

  pageLifetimes:{
    show:function(){
      var that = this
      wx.request({
        url: 'https://www.toilet-mis.cn/data.php',
        data: {
          num:app.globalData.num
        },
        header: {
          'content-type': 'application/json'
        },
        success:function(res){
          that.setData({
            username:res.data.username,
            grade:res.data.grade,
            gender:res.data.gender,
            love:res.data.love
          }),
          wx.setStorageSync('username', res.data.username);
          wx.setStorageSync('grade', res.data.grade);
          wx.setStorageSync('gender', res.data.gender);
          wx.setStorageSync('love', res.data.love);
        }
      })
    },
  },

  methods: {
    jump: function() {
      wx.navigateTo({
        url: '/packageA/pages/modify'
      })
    },
  }
});