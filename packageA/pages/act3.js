// pages/act3/act3.js
Page({
  data: {
    status:false,
    inform:'我要报名'
  },

  join:function(){
    wx.navigateTo({
      url: '/packageA/pages/form2',
    })
  },

})