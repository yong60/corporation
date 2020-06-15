Component({
  data: {
    showTopTips: false,


    gender: "女",
    love: "篮球",
    username: "ss",
    grade: "电信1802",



  },
  methods: {

    jump: function(e) {

      wx.navigateTo({
        url: '/pages/modify/modify?uername=' + encodeURIComponent(this.data.username) + '&love=' + encodeURIComponent(this.data.love) + '&grade=' + encodeURIComponent(this.data.grade) + '&gender=' + encodeURIComponent(this.data.gender)
      })
    },

  }


});