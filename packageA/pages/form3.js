Page({
  data: {
    name: '',
    class: '',
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
    g:''
  },
  gen:function(a){
    var that = this
    if(a.detail.value==0){
      that.setData({
        g:'男'
      })
    }
    else{
      that.setData({
        g:'女'
      })
    }
    console.log(that.data.g)
  },

  formSubmit: function(e) {
    var that = this
    console.log(e.detail.value)
    console.log(that.data.g)
    wx.request({
      url: 'https://www.toilet-mis.cn/form3.php',
      data:{
        name: e.detail.value.name,
        grade: e.detail.value.grade,
        gender:that.data.g,
        part:e.detail.value.part,
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