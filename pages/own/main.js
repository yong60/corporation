require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{HDTt:function(t,i,s){"use strict";var a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"info-card"},[s("image",{staticClass:"avatar",attrs:{src:t.myInfo.avatar||"/static/images/avatar.png"}}),t._v(" "),s("div",{staticClass:"basic"},[s("div",{staticClass:"username"},[t._v(t._s(t.myInfo.nick||"未设置"))]),t._v(" "),s("div",{staticClass:"user-id"},[t._v("用户ID："+t._s(t.myInfo.userID))])])]),t._v(" "),s("i-cell-group",{attrs:{"i-class":"cell-group",mpcomid:"1"}},[s("i-cell",{attrs:{title:"个性签名",mpcomid:"0"}},[s("div",{staticClass:"signature",slot:"footer"},[t._v("\n        "+t._s(t.myInfo.selfSignature||"暂无")+"\n      ")])])],1),t._v(" "),s("i-cell-group",{attrs:{"i-class":"cell-group",mpcomid:"4"}},[s("i-cell",{attrs:{title:"修改资料","is-link":"",url:"../profile/main",mpcomid:"2"}}),t._v(" "),s("i-cell",{attrs:{title:"退出登录","i-class":"logout",eventid:"0",mpcomid:"3"},on:{click:t.logout}})],1)],1)},staticRenderFns:[]};i.a=a},PpMG:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("5nAL"),e=s.n(a),n=s("nVT/");new e.a(n.a).$mount()},T6iq:function(t,i,s){"use strict";var a=s("Dd8w"),e=s.n(a),n=s("NYxO");i.a={data:function(){return{search:""}},computed:e()({},Object(n.c)({myInfo:function(t){return t.user.myInfo}})),methods:{logout:function(){this.$store.dispatch("resetStore"),wx.$app.logout(),wx.hideLoading(),wx.reLaunch({url:"../login/main"})}}}},moYF:function(t,i){},"nVT/":function(t,i,s){"use strict";var a=s("T6iq"),e=s("HDTt");var n=function(t){s("moYF")},c=s("ybqe")(a.a,e.a,n,null,null);i.a=c.exports}},["PpMG"]);