webpackJsonp([13],{"K5f/":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",desc:"",url:"",url_c:"",aces:{default:!0}}}},KhzA:function(e,t,s){var l=s("VU/8")(s("feSW"),s("ZpQy"),!1,null,null,null);e.exports=l.exports},ZpQy:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",this._l(this.portals,function(e){return t("div",[t("portal-card",{attrs:{url:e.url,title:e.title,url_c:e.url_c,desc:e.desc}})],1)}))])},staticRenderFns:[]}},feSW:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,r=s("mdxA"),i=(l=r)&&l.__esModule?l:{default:l};t.default={components:{PortalCard:i.default},data:function(){return{portals:[{url:"verification",title:"Document Verification",url_c:"Verify Registered Customer!",desc:"For Verification of registered customers"},{url:"customer/update",title:"Customer Update",url_c:"Update customers details!",desc:"For Updating existing customers details"},{url:"message",title:"Messaging",url_c:"Send messages!",desc:"For sending messages to customers"},{url:"reminder/sms",title:"Customer SMS Reminder",url_c:"View SMS reminders",desc:"View all due SMS reminders!"},{url:"reminder/call",title:"Customer Call Reminder",url_c:"View Call reminders",desc:"View all due Call reminders!"},{url:"reminder/collection",title:"Collection list",url_c:"View collections",desc:"View all due collection!"},{url:"reminder/recovery",title:"Recovery list",url_c:"View Recoveries",desc:"View all due recovery!"},{url:"reminder/external-recovery",title:"External recovery list",url_c:"View Recoveries",desc:"View all due recovery!"},{url:"all-overdue",title:"All overdue payments list",url_c:"View All Overdue payments",desc:"View all overdue payment!"},{url:"/customer",title:"Customer List",url_c:"View Customer List",desc:"View all registered customers!"},{url:"sales",title:"Sales List",url_c:"View Sales List",desc:"View all Sales!"}]}}}},mdxA:function(e,t,s){var l=s("VU/8")(s("K5f/"),s("zs6E"),!1,null,null,null);e.exports=l.exports},zs6E:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.aces?s("div",{staticClass:"col-md-4 col-sm-6 float-left product p-4"},[s("div",{staticClass:"portal-card clearfix"},[s("div",{staticClass:"first portion clearfix"},[s("span",{staticClass:"deco"}),s("span",{staticClass:"deco second"}),e._v(" "),s("span",{staticClass:"portal-title"},[e._v(e._s(e._f("capitalize")(e.title)))])]),e._v(" "),s("div",{staticClass:"portion clearfix"},[s("p",[e._v(e._s(e._f("capitalize")(e.desc)))]),e._v(" "),s("h6",{staticStyle:{"margin-top":"2rem"}},[e._v(e._s(e._f("capitalize")(e.url_c)))]),e._v(" "),s("span",{staticClass:"deco-down first"}),e._v(" "),s("span",{staticClass:"deco-down second"},[s("router-link",{staticClass:"btn bg-default btn-round m-0",attrs:{to:e.url}},[e._v("\n                   continue "),s("span",{staticClass:"custom-icon ml-2"},[s("i",{staticClass:"now-ui-icons ui-1_send"})])])],1)])])]):e._e()},staticRenderFns:[]}}});