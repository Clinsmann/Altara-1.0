webpackJsonp([15],{"K5f/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",desc:"",url:"",url_c:"",aces:{default:!0}}}},TYJk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,l=s("mdxA"),r=(a=l)&&a.__esModule?a:{default:a};e.default={components:{PortalCard:r.default},methods:{auth:function(t){return this.$store.getters.auth(t)}},data:function(){return{portals:[{url:"attendance/create",title:"Log Daily Attendance",url_c:"Log Attendance!",desc:"For Logging staff attendances!",aces:this.auth("supervisor")},{url:"branch",title:"Manage Branches",url_c:"Manage Branches now!",desc:"Manage all the branch details",aces:this.auth("FSLLead")},{url:"/customer",title:"Customer List",url_c:"View Customer List",desc:"View all registered customers!"},{url:"sales",title:"Sales List",url_c:"View Sales List",desc:"View all Sales!"},{url:"sales/create",title:"Temp POS",url_c:"Post Daily Sales",desc:"Temp POS!",aces:this.auth("supervisor")},{url:"payment",title:"Online Payment",url_c:"Make Online Payment for Formal Sector",desc:"Online Payment",aces:this.auth("supervisor")},{url:"lookup",title:"Customer Lookup",url_c:"Manage customer repayment details",desc:"Customer Lookup"}]}}}},VC7S:function(t,e,s){var a=s("VU/8")(s("TYJk"),s("cD9i"),!1,null,null,null);t.exports=a.exports},cD9i:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",this._l(this.portals,function(t){return e("div",[e("portal-card",{attrs:{url:t.url,title:t.title,url_c:t.url_c,desc:t.desc,aces:t.aces}})],1)}))])},staticRenderFns:[]}},mdxA:function(t,e,s){var a=s("VU/8")(s("K5f/"),s("zs6E"),!1,null,null,null);t.exports=a.exports},zs6E:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.aces?s("div",{staticClass:"col-md-4 col-sm-6 float-left product p-4"},[s("div",{staticClass:"portal-card clearfix"},[s("div",{staticClass:"first portion clearfix"},[s("span",{staticClass:"deco"}),s("span",{staticClass:"deco second"}),t._v(" "),s("span",{staticClass:"portal-title"},[t._v(t._s(t._f("capitalize")(t.title)))])]),t._v(" "),s("div",{staticClass:"portion clearfix"},[s("p",[t._v(t._s(t._f("capitalize")(t.desc)))]),t._v(" "),s("h6",{staticStyle:{"margin-top":"2rem"}},[t._v(t._s(t._f("capitalize")(t.url_c)))]),t._v(" "),s("span",{staticClass:"deco-down first"}),t._v(" "),s("span",{staticClass:"deco-down second"},[s("router-link",{staticClass:"btn bg-default btn-round m-0",attrs:{to:t.url}},[t._v("\n                   continue "),s("span",{staticClass:"custom-icon ml-2"},[s("i",{staticClass:"now-ui-icons ui-1_send"})])])],1)])])]):t._e()},staticRenderFns:[]}}});