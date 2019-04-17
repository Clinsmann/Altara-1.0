webpackJsonp([58],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/category/form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function initialize(to) {
   var urls = { create: '/api/category/create', edit: '/api/category/' + to.params.id + '/edit' };
   return urls[to.meta.mode];
}

exports.default = {
   data: function data() {
      return {
         form: {},
         mode: null,
         error: {},
         show: false,
         store: '/api/category',
         method: 'POST'
      };
   },
   beforeRouteEnter: function beforeRouteEnter(to, from, next) {
      (0, _api.get)(initialize(to)).then(function (_ref) {
         var data = _ref.data;
         return next(function (vm) {
            return vm.prepareForm(data);
         });
      }).catch(function (_ref2) {
         var response = _ref2.response;
         return next(function (vm) {
            return vm.handleErr(response);
         });
      });
   },
   beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
      var _this = this;

      this.show = false;
      (0, _api.get)(initialize(to)).then(function (_ref3) {
         var data = _ref3.data;
         return _this.prepareForm(data);
      }).catch(function (_ref4) {
         var response = _ref4.response;
         return vm.handleErr(response);
      });
   },

   methods: {
      handleErr: function handleErr(e) {
         _flash2.default.setError('Error Preparing form');
      },
      prepareForm: function prepareForm(data) {
         this.show = false;
         this.error = {};
         _vue2.default.set(this.$data, 'mode', this.$route.meta.mode);
         _vue2.default.set(this.$data, 'form', data.form);
         if (this.mode === 'edit') {
            this.store = '/api/category/' + this.$route.params.id;
            this.method = 'PUT';
         }
         this.show = true;
      },
      onSave: function onSave() {
         var _this2 = this;

         this.$validator.validateAll().then(function (result) {
            if (result) {
               if (_this2.$network()) {
                  _this2.$LIPS(true);
                  (0, _api.byMethod)(_this2.method, _this2.store, _this2.form).then(function (_ref5) {
                     var data = _ref5.data;

                     if (data.saved || data.updated) {
                        (0, _log.log)(data.log, data.staff_id);
                        _vue2.default.set(_this2.$data, 'form', data.form);
                        _flash2.default.setSuccess(data.message, 5000);
                        if (data['updated']) _this2.$router.push('/log/categories');
                     }
                     _this2.error = {};
                  }).catch(function (_ref6) {
                     var response = _ref6.response;

                     if (response.status === 422) {
                        _this2.error = response.data.errors ? response.data.errors : response.data;
                        _this2.$networkErr('unique');
                     }
                  }).finally(function () {
                     _this2.$scrollToTop();
                     _this2.$LIPS(false);
                  });
               } else _this2.$networkErr();
            } else _this2.$networkErr('form');
         });
      }
   }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0e6ca50d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/category/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        staticClass: "pt-md-3 pt-2 attendance attendance-view",
        attrs: { id: "index" }
      },
      [
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "mb-5 row align-items-center" }, [
            _c("div", { staticClass: "col-12 title-con" }, [
              _c("span", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm._f("capitalize")(_vm.mode)) + " Category")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row justify-content-end" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "text-link mt-3",
                      attrs: { to: "/log/categories" }
                    },
                    [_vm._v("view all categories!")]
                  )
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "attendance-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSave($event)
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "my-4 clearfix p-5 row bg-white shadow-sm",
                  staticStyle: { "border-radius": ".4rem" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "form-group col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Category name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50",
                            expression: "'required|max:50'"
                          }
                        ],
                        staticClass: "form-control mb-2",
                        attrs: {
                          placeholder: "category name",
                          name: "category name",
                          type: "text"
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("category name")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("category name")))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.error.name
                        ? _c("small", [_vm._v(_vm._s(_vm.error.name[0]))])
                        : _vm._e()
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5 px-0 row align-items-center" }, [
                _c(
                  "div",
                  { staticClass: "clearfix d-flex justify-content-end w-100" },
                  [
                    _vm.mode === "edit"
                      ? _c(
                          "router-link",
                          {
                            staticClass: "mx-5 text-link mt-4 pt-2",
                            attrs: { to: "/log/categories" }
                          },
                          [_vm._v("Cancel")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn bg-default",
                        attrs: { disabled: _vm.$isProcessing, type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                     " +
                            _vm._s(_vm._f("capitalize")(_vm.mode)) +
                            " Category "
                        ),
                        _c("i", { staticClass: "far fa-paper-plane ml-1" })
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e6ca50d", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/helpers/log.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

function log(action, description) {
    /*actions is the action performed
    * description is reference of the data the action was taken on*/
    action = action.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase();
    });
    //formats and capitalize the action performed
    (0, _api.post)('/api/log', { action: action, description: description });
    //and logs then on the log table;
}

/***/ }),

/***/ "./resources/assets/js/views/LOG/category/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/category/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0e6ca50d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/category/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\LOG\\category\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e6ca50d", Component.options)
  } else {
    hotAPI.reload("data-v-0e6ca50d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});