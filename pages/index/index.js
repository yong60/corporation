//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    list: [{
      "text": "对话",
      "iconPath": "/images/index1.png",
      "selectedIconPath": "/images/index2.png",
      dot: true
    },
    {
      "text": "设置",
      "iconPath": "/images/user1.png",
      "selectedIconPath": "/images/user2.png",
      badge: 'New'
    }]
  },
  tabChange(e) {
    console.log('tab change', e)
  }
})
