require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
const app = getApp()


global.webpackJsonpMpvue([9],
  {"+1If":function(t,e){},

  GG4c:function(t,e,s){
    "use strict";
    var i=s("Dd8w"),
    n=s.n(i),
    a=s("NYxO"),
    c=s("dutN");

    e.a={
      data:function()
      {
        return{password:"",userIDList:new Array(500).fill().
        map(function(t,e)
        {return"user"+e}),
        selectedIndex:1,
        loading:!1}
    },

      computed:n()({},Object(a.c)({myInfo:function(t){return t.user.myInfo}})),

      onUnload:function()
      {this.loading=!1},

      methods:{
        handleLogin:function(){
          var t=this,
          //e=this.userIDList[this.selectedIndex];
          e = "user"+app.globalData.num;
          console.log(e)
          /*if(this.myInfo.userID&&e===this.myInfo.userID){
            console.log("是不是这里")
            wx.switchTab({url:"../index/main"});
          }*/
            if(app.globalData.num!=100){
            wx.showToast({
              title: "为您分配的用户名是user"+app.globalData.num,
              icon:"none",
              duration:2000
            })
          }
            else{
              wx.showToast({
                title: "正在为您分配用户名，请稍等",
                icon:"none",
                duration:2000
              })
              wx.login({
                success: function (res) {
                  console.log(res)
                  var code = res.code;//发送给服务器的code
                  wx.getUserInfo({
                    success: function (res) {
                      console.log(res)
                      var userNick = res.userInfo.nickName;//用户昵称
                      var avataUrl = res.userInfo.avatarUrl;//用户头像地址
                      var gender = res.userInfo.gender;//用户性别
                      //console.log(res)
                      if (code) {
                        wx.request({
                          url: 'https://www.toilet-mis.cn/login3.php',
                          data: {
                            code: code,
                            nick: userNick,
                            avaurl: avataUrl,
                            sex: gender,
                          },
                          header: {
                            'content-type': 'application/json'
                          },
                          success: function (res) {
                            app.globalData.num = res.data.num
                            wx.showToast({
                              title: "为您分配的用户名是user"+app.globalData.num,
                              icon:"none",
                              duration:2000
                            })
                            wx.setStorageSync('num', res.data.num)
                          },
                          fail:function(){
                            console.log('error')
                          }
                        })
                      }
                      else {
                        console.log("获取用户登录态失败！");
                      }
                    }
                  })
                },
                fail: function (error) {
                  console.log('login failed ' + error);
                }
              })
            }
            if(this.loading=!0,this.myInfo.userID)
            return this.$store.dispatch("resetStore"),
          void wx.$app.logout().then(function(){t.login(e)});this.login(e)
      },
          login:function(t){
            var e=this;
            wx.$app.login({
              userID:t,
              userSig:Object(c.b)(this.userIDList[this.selectedIndex]).userSig
            }).
            then(function(){
              app.globalData.youke = 0
              wx.switchTab({url:"../index/main"})
            })
            .catch(function(){e.loading=!1})
          },
          choose:function(t){
            this.selectedIndex=Number(t.mp.detail.value)
          }
          }
          }
          },
          IOAW:function(t,e,s){
            "use strict";
            var i={render:function(){
              var t=this,
              e=t.$createElement,
              s=t._self._c||e;
              return s("div",{staticClass:"counter-warp"},
              [t._m(0),t._v(" "),
              s("picker",
              {staticClass:"picker",
              attrs:{range:t.userIDList,value:t.selectedIndex,eventid:"0"},
              on:{change:t.choose}
            },
            [s("div",{staticClass:"cell"},
            [s("div",{staticClass:"choose"},[t._v("用户")]),
            t._v(" "),
            s("div",
            [t._v("\n        "+t._s(t.userIDList[t.selectedIndex])+"\n        "),
            s("i-icon",{attrs:{type:"enter",mpcomid:"0"}})
          ],1)
        ])]
        ),
        t._v(" "),
        s("button",
        {staticClass:"login-button",
        attrs:{"hover-class":"clicked",loading:t.loading,eventid:"1"},
        on:{click:t.handleLogin}},
        [t._v("登录")])],1)},
        staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},
        [e("div",{staticClass:"header-content"},
        [e("img",{staticClass:"icon",attrs:{src:"https://www.toilet-mis.cn/images/bistu.jpg"}}),this._v(" "),e("div",{staticClass:"text"},[e("div",{staticClass:"text-header"},[this._v("团战发动机")]),
        this._v(" "),e("div",{staticClass:"text-content"},
        [this._v("高效率的社团管理工具")])])])])}]};
        e.a=i},
        jT7l:function(t,e,s){
          "use strict";
          var i=s("GG4c"),
          n=s("IOAW");
          var a=function(t){
            s("+1If")},
            c=s("ybqe")(i.a,n.a,a,"data-v-1532f6f5",null);
            e.a=c.exports},
            uvAE:function(t,e,s){
              "use strict";
              Object.defineProperty(e,"__esModule",{value:!0});
              var i=s("5nAL"),
              n=s.n(i),
              a=s("jT7l");
              new n.a(a.a).$mount()
            }},
            ["uvAE"]);
