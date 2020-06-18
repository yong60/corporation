Page({
  //页面的初始数据
  data: {
    activity:'',
            name: '',
            corporation: '',
            time: '',
            people: '',
            date:'',
            phone:''
  },

  formSubmit: function(e) {
    var that = this
    console.log(e.detail.value)
    wx.request({
      url: 'https://www.toilet-mis.cn/form1.php',
      data:{
        activity:e.detail.value.activity,
        name: e.detail.value.name,
        corporation: e.detail.value.corporation,
        time: e.detail.value.time,
        people: e.detail.value.people,
        date:e.detail.value.date,
        phone:e.detail.value.phone
      },
      success(res){
        console.log(res.data)
        if(res.data == 0){
          wx.showToast({
            title: '请完整填写表格',
            icon:'none',
            duration:1500
          })
        }
        else if(res.data==1){
          wx.showToast({
            title: '已为您更新数据',
            icon:'none',
            duration:1500
          })
        }
        else{
          wx.showToast({
            title: '提交成功',
            icon:'success',
            duration:1500
          })
          that.setData({
            activity:'',
            name: '',
            corporation: '',
            time: '',
            people: '',
            date:'',
            phone:''
          })
        }
      }
    })
  },
})