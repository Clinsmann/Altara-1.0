<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
webpackJsonp([20],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/portalCard.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: { title: '', desc: '', url: '', url_c: '', aces: { default: true } }
    /*title is the card title also mean the portal title.
    * desc is a few word description of the portal
    * url is the link to the portal
    * url_c is the caption for the link
    * aces is used in situations when a particular portal is accessible to only few person in a
    * department hence from the parent component the aces will be set to false is want
    * only few people to access it. true means everyone in that dept can access it.*/
};

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/CAG/HomePage.vue":
=======
/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/HomePage.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _portalCard = __webpack_require__("./resources/assets/js/components/portalCard.vue");

var _portalCard2 = _interopRequireDefault(_portalCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { PortalCard: _portalCard2.default },
    data: function data() {
        return {
            portals: [{
<<<<<<< HEAD
=======
                url: 'verification', title: 'Document Verification', url_c: 'Verify Registered Customer!',
                desc: 'For Verification of registered customers'
            }, {
                url: 'customer/update', title: 'Customer Update', url_c: 'Update customers details!',
                desc: 'For Updating existing customers details'
            }, {
                url: 'message', title: 'Messaging', url_c: 'Send messages!',
                desc: 'For sending messages to customers'
            }, {
                url: 'reminder/sms', title: 'Customer SMS Reminder', url_c: 'View SMS reminders',
                desc: 'View all due SMS reminders!'
            }, {
                url: 'reminder/call', title: 'Customer Call Reminder', url_c: 'View Call reminders',
                desc: 'View all due Call reminders!'
            }, {
                url: 'reminder/collection', title: 'Collection list', url_c: 'View collections',
                desc: 'View all due collection!'
            }, {
                url: 'reminder/recovery', title: 'Recovery list', url_c: 'View Recoveries',
                desc: 'View all due recovery!'
            }, {
                url: 'reminder/external-recovery', title: 'External recovery list', url_c: 'View Recoveries',
                desc: 'View all due recovery!'
            }, {
                url: 'all-overdue', title: 'All overdue payments list', url_c: 'View All Overdue payments',
                desc: 'View all overdue payment!'
            }, {
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
                url: '/customer', title: 'Customer List', url_c: 'View Customer List',
                desc: 'View all registered customers!'
            }, {
                url: 'sales', title: 'Sales List', url_c: 'View Sales List',
                desc: 'View all Sales!'
            }]
        };
    }
}; //
//
//
//
//
//
//
//
//

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0bb73624\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/CAG/HomePage.vue":
=======
/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-20f97f30\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/HomePage.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      _vm._l(_vm.portals, function(portal) {
        return _c(
          "div",
          [
            _c("portal-card", {
              attrs: {
                url: portal.url,
                title: portal.title,
                url_c: portal.url_c,
<<<<<<< HEAD
                desc: portal.desc,
                aces: portal.aces
=======
                desc: portal.desc
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
              }
            })
          ],
          1
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
<<<<<<< HEAD
    require("vue-hot-reload-api")      .rerender("data-v-0bb73624", module.exports)
=======
    require("vue-hot-reload-api")      .rerender("data-v-20f97f30", module.exports)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28781233\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/portalCard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.aces
    ? _c("div", { staticClass: "col-md-4 col-sm-6 float-left product p-4" }, [
        _c("div", { staticClass: "portal-card clearfix" }, [
          _c("div", { staticClass: "first portion clearfix" }, [
            _c("span", { staticClass: "deco" }),
            _c("span", { staticClass: "deco second" }),
            _vm._v(" "),
            _c("span", { staticClass: "portal-title" }, [
              _vm._v(_vm._s(_vm._f("capitalize")(_vm.title)))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "portion clearfix" }, [
            _c("p", [_vm._v(_vm._s(_vm._f("capitalize")(_vm.desc)))]),
            _vm._v(" "),
            _c("h6", { staticStyle: { "margin-top": "2rem" } }, [
              _vm._v(_vm._s(_vm._f("capitalize")(_vm.url_c)))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "deco-down first" }),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "deco-down second" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn bg-default btn-round m-0",
                    attrs: { to: _vm.url }
                  },
                  [
                    _vm._v("\n                   continue "),
                    _c("span", { staticClass: "custom-icon ml-2" }, [
                      _c("i", { staticClass: "now-ui-icons ui-1_send" })
                    ])
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-28781233", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/portalCard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/portalCard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28781233\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/portalCard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\portalCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28781233", Component.options)
  } else {
    hotAPI.reload("data-v-28781233", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/views/CAG/HomePage.vue":
=======
/***/ "./resources/assets/js/views/DVA/HomePage.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
<<<<<<< HEAD
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/CAG/HomePage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0bb73624\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/CAG/HomePage.vue")
=======
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/HomePage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-20f97f30\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/HomePage.vue")
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
<<<<<<< HEAD
Component.options.__file = "resources\\assets\\js\\views\\CAG\\HomePage.vue"
=======
Component.options.__file = "resources\\assets\\js\\views\\DVA\\HomePage.vue"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
<<<<<<< HEAD
    hotAPI.createRecord("data-v-0bb73624", Component.options)
  } else {
    hotAPI.reload("data-v-0bb73624", Component.options)
=======
    hotAPI.createRecord("data-v-20f97f30", Component.options)
  } else {
    hotAPI.reload("data-v-20f97f30", Component.options)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

<<<<<<< HEAD
});
=======
webpackJsonp([20],{"70mC":function(t,e,s){var r=s("VU/8")(s("Z++X"),s("jcvO"),!1,null,null,null);t.exports=r.exports},"K5f/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",desc:"",url:"",url_c:"",aces:{default:!0}}}},"Z++X":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=s("mdxA"),l=(r=a)&&r.__esModule?r:{default:r};e.default={components:{PortalCard:l.default},data:function(){return{portals:[{url:"customer/create",title:"Customer Registration",url_c:"Register new customer now!",desc:"Registering new customers"},{url:"customer/update",title:"Customer Update",url_c:"Update customers details!",desc:"Updating customers details"},{url:"report",title:"Sales Reporting",url_c:"Get Reports",desc:"Real time DSA reports!",aces:this.$store.getters.auth("DSACaptain")},{url:"/customer",title:"Customer List",url_c:"View Customer List",desc:"View all registered customers!"}]}}}},jcvO:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",this._l(this.portals,function(t){return e("div",[e("portal-card",{attrs:{url:t.url,title:t.title,url_c:t.url_c,desc:t.desc,aces:t.aces}})],1)}))])},staticRenderFns:[]}},mdxA:function(t,e,s){var r=s("VU/8")(s("K5f/"),s("zs6E"),!1,null,null,null);t.exports=r.exports},zs6E:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.aces?s("div",{staticClass:"col-md-4 col-sm-6 float-left product p-4"},[s("div",{staticClass:"portal-card clearfix"},[s("div",{staticClass:"first portion clearfix"},[s("span",{staticClass:"deco"}),s("span",{staticClass:"deco second"}),t._v(" "),s("span",{staticClass:"portal-title"},[t._v(t._s(t._f("capitalize")(t.title)))])]),t._v(" "),s("div",{staticClass:"portion clearfix"},[s("p",[t._v(t._s(t._f("capitalize")(t.desc)))]),t._v(" "),s("h6",{staticStyle:{"margin-top":"2rem"}},[t._v(t._s(t._f("capitalize")(t.url_c)))]),t._v(" "),s("span",{staticClass:"deco-down first"}),t._v(" "),s("span",{staticClass:"deco-down second"},[s("router-link",{staticClass:"btn bg-default btn-round m-0",attrs:{to:t.url}},[t._v("\n                   continue "),s("span",{staticClass:"custom-icon ml-2"},[s("i",{staticClass:"now-ui-icons ui-1_send"})])])],1)])])]):t._e()},staticRenderFns:[]}}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([20],{"K5f/":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",desc:"",url:"",url_c:"",aces:{default:!0}}}},KhzA:function(e,t,s){var l=s("VU/8")(s("feSW"),s("ZpQy"),!1,null,null,null);e.exports=l.exports},ZpQy:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",this._l(this.portals,function(e){return t("div",[t("portal-card",{attrs:{url:e.url,title:e.title,url_c:e.url_c,desc:e.desc}})],1)}))])},staticRenderFns:[]}},feSW:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,r=s("mdxA"),i=(l=r)&&l.__esModule?l:{default:l};t.default={components:{PortalCard:i.default},data:function(){return{portals:[{url:"verification",title:"Document Verification",url_c:"Verify Registered Customer!",desc:"For Verification of registered customers"},{url:"customer/update",title:"Customer Update",url_c:"Update customers details!",desc:"For Updating existing customers details"},{url:"message",title:"Messaging",url_c:"Send messages!",desc:"For sending messages to customers"},{url:"reminder/sms",title:"Customer SMS Reminder",url_c:"View SMS reminders",desc:"View all due SMS reminders!"},{url:"reminder/call",title:"Customer Call Reminder",url_c:"View Call reminders",desc:"View all due Call reminders!"},{url:"reminder/collection",title:"Collection list",url_c:"View collections",desc:"View all due collection!"},{url:"reminder/recovery",title:"Recovery list",url_c:"View Recoveries",desc:"View all due recovery!"},{url:"reminder/external-recovery",title:"External recovery list",url_c:"View Recoveries",desc:"View all due recovery!"},{url:"all-overdue",title:"All overdue payments list",url_c:"View All Overdue payments",desc:"View all overdue payment!"},{url:"/customer",title:"Customer List",url_c:"View Customer List",desc:"View all registered customers!"},{url:"sales",title:"Sales List",url_c:"View Sales List",desc:"View all Sales!"}]}}}},mdxA:function(e,t,s){var l=s("VU/8")(s("K5f/"),s("zs6E"),!1,null,null,null);e.exports=l.exports},zs6E:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.aces?s("div",{staticClass:"col-md-4 col-sm-6 float-left product p-4"},[s("div",{staticClass:"portal-card clearfix"},[s("div",{staticClass:"first portion clearfix"},[s("span",{staticClass:"deco"}),s("span",{staticClass:"deco second"}),e._v(" "),s("span",{staticClass:"portal-title"},[e._v(e._s(e._f("capitalize")(e.title)))])]),e._v(" "),s("div",{staticClass:"portion clearfix"},[s("p",[e._v(e._s(e._f("capitalize")(e.desc)))]),e._v(" "),s("h6",{staticStyle:{"margin-top":"2rem"}},[e._v(e._s(e._f("capitalize")(e.url_c)))]),e._v(" "),s("span",{staticClass:"deco-down first"}),e._v(" "),s("span",{staticClass:"deco-down second"},[s("router-link",{staticClass:"btn bg-default btn-round m-0",attrs:{to:e.url}},[e._v("\n                   continue "),s("span",{staticClass:"custom-icon ml-2"},[s("i",{staticClass:"now-ui-icons ui-1_send"})])])],1)])])]):e._e()},staticRenderFns:[]}}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
=======
});
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
