webpackJsonp([57],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/supplier/form.vue":
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
    var urls = { create: '/api/supplier/create', edit: '/api/supplier/' + to.params.id + '/edit' };
    return urls[to.meta.mode];
}

exports.default = {
    props: {},
    data: function data() {
        return {
            form: {},
            banks: '',
            mode: null,
            error: {},
            show: false,
            store: '/api/supplier',
            method: 'POST',
            statuses: [{ name: 'active', value: 1 }, { name: 'inactive', value: 0 }]
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

        this.show = false;c;
        (0, _api.get)(initialize(to)).then(function (_ref3) {
            var data = _ref3.data;
            return _this.prepareForm(data);
        }).catch(function (_ref4) {
            var response = _ref4.response;
            return vm.handleErr(response);
        }).finally(function () {
            return next();
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
            _vue2.default.set(this.$data, 'banks', data.banks);
            if (this.mode === 'edit') {
                this.store = '/api/supplier/' + this.$route.params.id;
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
                                if (data['updated']) _this2.$router.push('/log/suppliers');
                            }
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-424fefff\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/supplier/form.vue":
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
                _vm._v(_vm._s(_vm._f("capitalize")(_vm.mode)) + " Supplier")
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
                      attrs: { to: "/log/suppliers" }
                    },
                    [_vm._v("view all Suppliers!")]
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
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("SKU")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.sku,
                            expression: "form.sku"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          disabled: "",
                          name: "sku",
                          placeholder: "supplier sku",
                          type: "text"
                        },
                        domProps: { value: _vm.form.sku },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "sku", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("sku")
                        ? _c("small", [_vm._v(_vm._s(_vm.errors.first("sku")))])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.error.sku
                        ? _c("small", [_vm._v(_vm._s(_vm.error.sku[0]))])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Full Name")]),
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
                        staticClass: "form-control",
                        attrs: {
                          name: "name",
                          placeholder: "supplier name",
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
                      _vm.errors.first("name")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("name")))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.error.sku
                        ? _c("small", [_vm._v(_vm._s(_vm.error.name[0]))])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Email")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email|max:100",
                            expression: "'required|email|max:100'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "email",
                          placeholder: "email",
                          type: "email"
                        },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("email")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("email")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Date of registration")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.date_of_reg,
                            expression: "form.date_of_reg"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "date", type: "date" },
                        domProps: { value: _vm.form.date_of_reg },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "date_of_reg",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("date")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("date")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Phone")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.phone_number,
                            expression: "form.phone_number"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:20",
                            expression: "'required|max:20'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "phone",
                          placeholder: "phone",
                          type: "text"
                        },
                        domProps: { value: _vm.form.phone_number },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "phone_number",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("phone")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("phone")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Contact person phone")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.contact_person_name,
                            expression: "form.contact_person_name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:20",
                            expression: "'required|max:20'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "contact person phone",
                          name: "contact_phone",
                          placeholder: "phone",
                          type: "text"
                        },
                        domProps: { value: _vm.form.contact_person_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "contact_person_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("contact_phone")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("contact_phone")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", { staticClass: "w-100 float-left" }, [
                        _vm._v("Status")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.statuses, function(status) {
                        return _c(
                          "div",
                          {
                            staticClass: "radio p-0 col-md-6 col-6 float-left"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.status,
                                  expression: "form.status"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                id: status.name,
                                name: "status",
                                type: "radio"
                              },
                              domProps: {
                                value: status.value,
                                checked: _vm._q(_vm.form.status, status.value)
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(_vm.form, "status", status.value)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: status.name } }, [
                              _vm._v(_vm._s(status.name))
                            ])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm.errors.first("status")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("status")))
                          ])
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Address")]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:255",
                            expression: "'required|max:255'"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address,
                            expression: "form.address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "address",
                          name: "address",
                          rows: "1"
                        },
                        domProps: { value: _vm.form.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("address")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("address")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceAfter" }),
                  _vm._v(" "),
                  _c("h5", { staticClass: "m-3" }, [_vm._v("Bank Details")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceAfter" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Bank Name")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.bank_name,
                              expression: "form.bank_name"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "custom-select w-100",
                          attrs: {
                            "data-vv-as": "bank name",
                            "data-vv-validate-on": "blur",
                            name: "bank_name"
                          },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "bank_name",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("-- select duration --")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.banks, function(bank) {
                            return _c(
                              "option",
                              { domProps: { value: bank.name } },
                              [_vm._v(_vm._s(bank.name))]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("bank_name")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("bank_name")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Bank account name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.bank_account_name,
                            expression: "form.bank_account_name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50",
                            expression: "'required|max:50'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "account name",
                          name: "account_name",
                          placeholder: "account name",
                          type: "number"
                        },
                        domProps: { value: _vm.form.bank_account_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "bank_account_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("account_name")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("account_name")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Bank account number")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.bank_account_no,
                            expression: "form.bank_account_no"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50",
                            expression: "'required|max:50'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "account number",
                          name: "account_number",
                          placeholder: "account number",
                          type: "number"
                        },
                        domProps: { value: _vm.form.bank_account_no },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "bank_account_no",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("account_number")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("account_number")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" })
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
                            attrs: { to: "/log/suppliers" }
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
                          "\n                            " +
                            _vm._s(_vm._f("capitalize")(_vm.mode)) +
                            " Supplier "
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
    require("vue-hot-reload-api")      .rerender("data-v-424fefff", module.exports)
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

/***/ "./resources/assets/js/views/LOG/supplier/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/supplier/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-424fefff\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/supplier/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\LOG\\supplier\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-424fefff", Component.options)
  } else {
    hotAPI.reload("data-v-424fefff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});