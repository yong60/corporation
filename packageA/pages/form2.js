// pages/form2/form2.js
Page({
  data: {
    name:'',
    grade:'',
    college:'',
    phone:''
  },
  formSubmit: function(e) {
    var that = this
    console.log(e.detail.value)
    wx.request({
      url: 'https://www.toilet-mis.cn/form2.php',
      data:{
        name: e.detail.value.name,
        grade: e.detail.value.grade,
        college:e.detail.value.college,
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
            name:'',
            grade:'',
            college:'',
            phone:''
          })
        }
      }
    })
  },
})