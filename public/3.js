<<<<<<< HEAD
webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue":
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
//
//

exports.default = {
    /*router navigation is used in the entire app for in app navigation (basically previous and next)
    * the : pageTitle is the title of the page where this navigation component is used
    * the : pageTitleSmall is the minimized title for the small screen view
    * the previous is the this.$routerHistory.previous().path sent from the parent component
    * the forward is the this.$routerHistory.next().path sent from the parent component*/
    props: ['pageTitle', 'pageTitleSmall', 'previous', 'forward']
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerList.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DataViewer = __webpack_require__("./resources/assets/js/components/DataViewer.vue");

var _DataViewer2 = _interopRequireDefault(_DataViewer);

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

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

exports.default = {
    components: { DataViewer: _DataViewer2.default, AppNavigation: _AppNavigation2.default }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _sms = __webpack_require__("./resources/assets/js/helpers/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _store = __webpack_require__("./resources/assets/js/store/store.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _form = __webpack_require__("./resources/assets/js/views/HRM/utility/form.vue");

var _form2 = _interopRequireDefault(_form);

var _branchForm = __webpack_require__("./resources/assets/js/views/FSL/utility/branchForm.vue");

var _branchForm2 = _interopRequireDefault(_branchForm);

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

exports.default = {
    components: {
        UtilityForm: _form2.default,
        BranchForm: _branchForm2.default
    },
    data: function data() {
        return {
            /*data generic to data viewer starts here*/
            model: {},
            columns: {},
            query: {
                page: 1,
                column: 'id',
                direction: 'desc',
                per_page: 10,
                search_column: 'id',
                search_operator: 'greater_than',
                search_input: 0
            },
            operators: {
                equal: '=',
                not_equal: '<>',
                less_than: '<',
                greater_than: '>',
                less_than_or_equal_to: '<=',
                greater_than_or_equal_to: '>=',
                in: 'IN',
                like: 'LIKE'
            },
            /*data generic to data viewer stops here*/

            /*data peculiar to hrm portal data viewer starts here*/
            bus: new _vue2.default(),
            form: {},
            portal_access: [{ name: 'grant', value: 1 }, { name: 'deny', value: 0 }],
            sentData: {},
            /*data peculiar to hrm portal data viewer stops here*/

            /*data peculiar to fsl branch portal data viewer starts here*/
            branchToUpdate: {}
            /*data peculiar to fsl branch portal data viewer stops here*/
        };
    },

    props: ['source', 'title', 'appModel'],
    created: function created() {
        this.$prepareStates();
        this.fetchIndexData();
        $(document).on('click', 'tr', function () {
            $('tr.current').removeClass('current');
            $(this).addClass('current');
        });
    },
    updated: function updated() {
        $('[data-toggle="tooltip"]').tooltip();
    },

    methods: {
        /*methods exclusive to data viewer starts here*/
        next: function next() {
            if (this.model.next_page_url) {
                this.query.page++;
                this.fetchIndexData();
            }
        },
        prev: function prev() {
            if (this.model.prev_page_url) {
                this.query.page--;
                this.fetchIndexData();
            }
        },
        toggleOrder: function toggleOrder(column) {
            if (column === this.query.column) this.query.direction = this.query.direction === 'desc' ? 'asc' : 'desc';else {
                this.query.column = column;
                this.query.direcntion = 'asc';
            }
            this.fetchIndexData();
        },
        fetchIndexData: function fetchIndexData() {
            var _this = this;

            this.$LIPS(true);
            $('.modal').modal('hide');
            (0, _api.get)('' + this.source + ('?page=' + this.query.page) + ('&column=' + this.query.column) + ('&per_page=' + this.query.per_page) + ('&direction=' + this.query.direction) + ('&search_input=' + this.query.search_input) + ('&search_column=' + this.query.search_column) + ('&search_operator=' + this.query.search_operator)).then(function (res) {
                var data = res.data.model.data;
                /*the state id for the branch fetched from the db is a number
                * hence the code below is used to get the state name
                * corresponding to the state id and display it
                * instead of showing state id as a number*/
                if (data.length && data[0].state_id) {
                    data.forEach(function (curr) {
                        return curr.state_id = _store.store.getters.getStates.find(function (obj) {
                            return obj.id === curr.state_id;
                        }).name;
                    });
                }
                _vue2.default.set(_this.$data, 'model', res.data.model);
                _vue2.default.set(_this.$data, 'columns', res.data.columns);
                _this.$scrollToTop();
                _this.$LIPS(false);
            });
        },

        /*methods exclusive to data viewer stop here*/

        /*methods exclusive to hrm data viewer starts here*/
        accessStatus: function accessStatus(status) {
            return Boolean(Number(status));
            /*returns true or false for the portal
            access status for each staff
            (1 or 0 respectively)*/
        },
        update: function update(emp, mod) {
            var _this2 = this;

            var up = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            /*emp is the employer you want to carry an action on
            * mod is the modal id that carries the form for the process
            * up is tentative if 0*/
            if (up === 0) {
                this.form = emp;
                $('#' + mod).modal('toggle');
                /*then action is for password reset or portal access update
                * the corresponding modal is triggered as above*/
            } else if (up === 1) {
                /*if up is 1 then its for details update*/
                if (this.$network()) {
                    this.$LIPS(true);
                    (0, _api.get)('/api/employee/' + emp.id + '/edit').then(function (res) {
                        /*the full employee details are fetched to populate
                        the form for editing ie the utility form*/
                        _this2.sentData = res.data;
                        /*the data sent to the utility form is updated*/
                        $('#' + mod).modal('toggle');
                        /*corresponding modal is toggled*/
                        _this2.$LIPS(false);
                    });
                } else this.$networkErr();
            }
        },
        resetPassword: function resetPassword() {
            var _this3 = this;

            if (this.$network()) {
                this.$LIPS(true);
                (0, _api.get)('/api/reset-password/' + this.form.id).then(function (res) {
                    _this3.$scrollToTop();
                    $('#editPassword').modal('toggle');
                    (0, _log.log)('resetUserPassword', _this3.form.staff_id);
                    _flash2.default.setSuccess('Employee password reset successful!');
                    var details = {
                        phone: String(parseInt(_this3.form.phone_number)), password: res.data.password,
                        staff_id: _this3.form.staff_id
                    };
                    _sms2.default.passwordReset(details);
                    _this3.$LIPS(false);
                });
            } else this.$networkErr();
        },

        /*methods exclusive to hrm data viewer stops here*/

        /*methods exclusive to branch on  fsl portal*/
        updateBranch: function updateBranch(id) {
            var _this4 = this;

            /*id id the id of the branch as fetched from the data view*/
            if (this.$network()) {
                this.$LIPS(true);
                (0, _api.get)('/api/branch/' + id).then(function (res) {
                    /*the branch details with that id is fetched and prepared to be
                    * sent to the for for branch update
                    * NB same form is used both for
                    * update and creating branch*/
                    _this4.branchToUpdate = res.data.branch;
                    $('#updateBranch').modal('toggle');
                });
            } else this.$networkErr();
        }
        /*methods exclusive to branch on  fsl portal*/

    },
    computed: {
        user: function user() {
            return this.appModel === 'user';
            /*return true if the context
            * of the data viewer is
            * for employees*/
        },
        branch: function branch() {
            return this.appModel === 'branch';
            /*return true if the context
            * of the data viewer is
            * for branch*/
        },
        customer: function customer() {
            return this.appModel === 'customer';
            /*return true if the context
            * of the data viewer is
            * for customer*/
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/utility/branchForm.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        //the component is never called exclusively its
        //is called by another parent component.
        //the action is purpose or the context
        action: '',
        branchToUpdate: { default: '' }
    },
    data: function data() {
        return {
            form: {},
            banks: {},
            error: {},
            states: {}
        };
    },

    methods: {
        ifCreate: function ifCreate(a) {
            //a is the action for which the form is called or the context
            //the form is used this function return true if the
            //action : a is === create else else
            return a === 'create';
        },
        ifUpdate: function ifUpdate(a) {
            //a is the action for which the form is called or the context
            //the form is used this function return true if the
            //action : a is === update else else
            return a === 'update';
        },
        prepareForm: function prepareForm(data) {
            //this function is used when a data is sent to this component
            //or this component makes a request to backend the
            //data received is used to prepare the form
            this.error = {};
            this.errors.clear();
            this.form = data.form;
            this.banks = data.banks;
            this.states = data.states;
        },
        processBranch: function processBranch() {
            var _this = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this.$network()) {
                        _this.$LIPS(true);
                        _this.error = {};
                        var url = '/api/branch',
                            action = _this.$options.filters.capitalize(_this.action);
                        //for creating a branch the url above is used
                        if (_this.action === 'update') url = '/api/branch/' + _this.branchToUpdate.id;
                        //else if the form action is not create den its update
                        //hence the url "/api/branch/{id}"
                        (0, _api.post)(url, _this.form).then(function (res) {
                            (0, _log.log)('Branch' + action, '' + _this.form.employee_id);
                            if (_this.ifCreate(_this.action)) _this.prepareForm(res.data.prepareForm);
                            if (_this.ifUpdate(_this.action)) _this.$emit('done');
                            _flash2.default.setSuccess('Branch ' + _this.action + 'd successfully!', 20000);
                        }).catch(function (e) {
                            e = e.response;
                            if (e.status === 422) {
                                _this.error = e.data.errors ? e.data.errors : e.data;
                                _this.$networkErr('unique');
                            }
                        }).finally(function () {
                            _this.$scrollToTop();
                            _this.$LIPS(false);
                        });
                    } else _this.$networkErr();
                } else _this.$networkErr('form');
            });
        }
    },
    created: function created() {
        var _this2 = this;

        (0, _api.get)('/api/branch/create').then(function (res) {
            return _this2.prepareForm(res.data);
        });
        // fetch data for new branch registration and prepare form
    },

    watch: {
        branchToUpdate: function branchToUpdate(newVal) {
            /*watches when a data is sent from the parent (dataviewer)
            * to this component*/
            this.form = newVal;
            this.$LIPS(false);
        }
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/utility/form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sms = __webpack_require__("./resources/assets/js/helpers/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

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
    props: {
        //the component is never called exclusively its
        //is called by another parent component.
        //the action is purpose or the context
        action: '',
        receivedData: { default: '' },
        bus: { default: '' }
    },
    data: function data() {
        return {
            form: {},
            error: {},
            roles: {},
            branches: {},
            password: '',
            countries: ['nigeria'],
            gender: ['male', 'female'],
            categories: {},
            textDetails: { phone: '', loginPassword: '', loginID: '' },
            statuses: ['married', 'single', 'divorced', 'complicated'],
            qualifications: ['NCE', 'HND', 'OND', 'bachelors', 'masters', 'doctorate']
        };
    },

    methods: {
        ifReg: function ifReg(a) {
            //a is the action for which the form is called or the context
            //the form is used this function return true if the
            //action : a is === register
            return a === 'register';
        },
        ifUp: function ifUp(a) {
            //a is the action for which the form is called or the context
            //the form is used this function return true if the
            //action : a is === update
            return a === 'update';
        },
        prepareForm: function prepareForm(data) {
            //this function is used when a data is sent to this component
            //or this component makes a request to backend the
            //data received is used to prepare the form
            this.error = {};
            this.form = data.form;
            this.roles = data.roles;
            this.branches = data.branches;
            this.categories = data.categories;
        },
        register: function register() {
            var _this = this;

            var emp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var AC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            //NB: this function is used by the employee register, employee update and for portal access update.
            //the AC means: if the function is called to updated the access control or not.
            //by default it set to 1, but when it is called from the register
            //form it is set to 0 to show that it is not for access
            //control update rather for registration.

            //emp for context :registration is the form, ie a new user hences uses
            //the default url '/api/register' for registration
            //emp for context :details update and portal access
            //update are the staff details to be updated
            if (AC === 1) this.updatingPortalAccess = true;
            this.$validator.validateAll().then(function (result) {
                if (AC === 1) {
                    //AC means the context : access control, by default its set to true i.e 1 because this function
                    //was called as a callback on a this.$emit process and cant pass two params to the function
                    //the employee register call the function in this manner : register(form,0) to show
                    //its not for access control context again;
                    _this.errors.clear();
                    result = true;
                    //This process doesn't need validation because the form has only one field
                    //ref: DataViewer.vue => id="editPortalAccess"
                }
                if (result) {
                    if (_this.$network()) {
                        _this.$LIPS(true);
                        _this.error = {};
                        var newUrl = '/api/register',
                            message = void 0,
                            logMsg = void 0;
                        //for registration the url is used
                        if (_this.action === 'update') newUrl = '/api/employee/' + emp.id + '/update';
                        //else f the form action is not registration den its update
                        //hence the url "/api/employee/{id}/update"
                        (0, _api.post)(newUrl, emp).then(function (res) {
                            if (res.data.hasOwnProperty('registered')) {
                                //if the response is from '/api/register'
                                logMsg = 'Registered';
                                _this.textDetails.loginID = String(res.data.staff_id);
                                _this.textDetails.phone = String(parseInt(_this.form.phone_number));
                                _this.textDetails.loginPassword = _this.password = res.data.password;
                                message = 'Staff registered with ID ' + res.data.staff_id + '. An sms has been sent to the employee with his Login details!';
                                _sms2.default.welcome(_this.textDetails);
                            } else if (res.data.hasOwnProperty('updated')) {
                                //if the response is from "/api/employee/{id}/update"
                                logMsg = 'Updated';
                                message = 'Staff details updated!';
                                _this.$emit('done');
                                //it emits an event to the parent(dataviewer.vue)
                                // since its for update
                            }
                            (0, _log.log)('Staff' + logMsg, String(res.data.staff_id));
                            _flash2.default.setSuccess(message, 20000);
                            if (_this.ifReg(_this.action)) _this.form = res.data.form;
                            //the line above is there so as to allow the log
                            // method use its data before resetting
                        }).catch(function (e) {
                            e = e.response;
                            if (e.status === 422) {
                                _this.error = e.data.errors ? e.data.errors : e.data;
                                _this.$networkErr('unique');
                            }
                        }).finally(function () {
                            _this.$scrollToTop();
                            _this.$LIPS(false);
                        });
                    } else _this.$networkErr();
                } else _this.$networkErr('form');
            });
        }
    },
    created: function created() {
        var _this2 = this;

        if (this.ifReg(this.action)) (0, _api.get)('/api/create').then(function (res) {
            return _this2.prepareForm(res.data);
        });
        //if registration fetch data for new customer registration and prepare form
        if (this.action === 'update') this.bus.$on('submit', this.register);
        //this.bus is a (vue instance and )prop received from dataviewer to track when the access portal form(ref: DataViewer.vue
        //=> id="editPortalAccess") is submitted from the data viewer. this is because we want to use the 'register'
        //function to process both (1)registration, (2)update details and (3)update portal access
    },

    watch: {
        receivedData: function receivedData(newVal) {
            //watches when a data is sent from the parent (dataviewer)
            this.prepareForm(newVal);
            //prepares the form with the data received
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Not the css is included in this component to reduce\n* the size of the main css file because\n* the components are lazy loaded*/\n#index a#back {\n  left: 0;\n}\n#index a#forward {\n  right: 0;\n}\n#index a#back, #index a#forward {\n  margin-top: .8rem;\n  position: absolute;\n}\n#index a#back i, #index a#forward i {\n    font-size: 2.4rem;\n}\n#index .forward, #index .back {\n  line-height: 2.4rem;\n  margin-top: -.2rem;\n  font-weight: bold;\n}\n@media (max-width: 990px) {\n#index a#back i, #index a#forward i {\n    font-size: 2.6rem;\n}\n}\n@media (max-width: 600px) {\n#index a#back, #index a#forward, #index [data-title=\"title\"] {\n    margin-top: -.3rem;\n    margin-bottom: .3rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01f74a80\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/utility/branchForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.processBranch($event)
        }
      }
    },
    [
      _c("h5", [_vm._v("Branch Details")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Branch Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.name,
                expression: "form.name"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.error.name },
            attrs: {
              type: "text",
              placeholder: "branch name",
              name: "branch_name",
              "data-vv-as": "branch name"
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
          _vm.errors.first("branch_name")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("branch_name")))])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.name
            ? _c("small", [_vm._v(_vm._s(_vm.error.name[0]))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("State")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.state_id,
                  expression: "form.state_id"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "custom-select w-100",
              attrs: { name: "state", "data-vv-validate-on": "blur" },
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
                    "state_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select state")
              ]),
              _vm._v(" "),
              _vm._l(_vm.states, function(state) {
                return _c("option", { domProps: { value: state.id } }, [
                  _vm._v(_vm._s(_vm._f("capitalize")(state.name)))
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("state")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("state")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Phone (English)")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.phone_english,
                expression: "form.phone_english"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|numeric|max:11|min:11",
                expression: "'required|numeric|max:11|min:11'"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "phone_english",
              "data-vv-as": "phone english"
            },
            domProps: { value: _vm.form.phone_english },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "phone_english", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("phone_english")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("phone_english")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Phone (Yoruba)")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.phone_yoruba,
                expression: "form.phone_yoruba"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|numeric|max:11|min:11",
                expression: "'required|numeric|max:11|min:11'"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "phone_yoruba",
              "data-vv-as": "phone yoruba"
            },
            domProps: { value: _vm.form.phone_yoruba },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "phone_yoruba", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("phone_yoruba")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("phone_yoruba")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", { staticClass: "w-100 float-left pl-1" }, [
            _vm._v("Status")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "radio pl-1 w-50 pr-3 float-left" }, [
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
                type: "radio",
                name: "status",
                id: "active",
                value: "active"
              },
              domProps: { checked: _vm._q(_vm.form.status, "active") },
              on: {
                change: function($event) {
                  _vm.$set(_vm.form, "status", "active")
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "active" } }, [_vm._v("Active")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "radio pl-1 w-50 pr-3 float-left" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.status,
                  expression: "form.status"
                }
              ],
              attrs: {
                type: "radio",
                name: "status",
                id: "passive",
                value: "passive"
              },
              domProps: { checked: _vm._q(_vm.form.status, "passive") },
              on: {
                change: function($event) {
                  _vm.$set(_vm.form, "status", "passive")
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "passive" } }, [_vm._v("Passive")])
          ]),
          _vm._v(" "),
          _vm.errors.first("status")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("status")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Describe Location")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.description,
                expression: "form.description"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|max:255",
                expression: "'required|max:255'"
              }
            ],
            staticClass: "form-control w-100",
            attrs: {
              placeholder: "address description",
              name: "description",
              rows: "1"
            },
            domProps: { value: _vm.form.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "description", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("description")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("description")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceAfter" }),
      _vm._v(" "),
      _c("h5", [_vm._v("Account Details")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
                value: "required|email",
                expression: "'required|email'"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.error.email },
            attrs: {
              type: "email",
              placeholder: "name@example.com",
              name: "email"
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
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("email")))])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.email
            ? _c("small", [_vm._v(_vm._s(_vm.error.email[0]))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Bank")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.bank,
                  expression: "form.bank"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "custom-select w-100",
              attrs: { name: "bank", "data-vv-validate-on": "blur" },
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
                    "bank",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select bank")
              ]),
              _vm._v(" "),
              _vm._l(_vm.banks, function(bank) {
                return _c("option", { domProps: { value: bank.id } }, [
                  _vm._v(_vm._s(_vm._f("capitalize")(bank.name)))
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("bank")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("bank")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Account Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.account_name,
                expression: "form.account_name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "branch name",
              name: "account_name",
              "data-vv-as": "account name"
            },
            domProps: { value: _vm.form.account_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "account_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("account_name")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("account_name")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Account Number")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.account_number,
                expression: "form.account_number"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|numeric|max:10|min:10",
                expression: "'required|numeric|max:10|min:10'"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.error.account_number },
            attrs: {
              type: "tel",
              placeholder: "01xxxxxxxx",
              name: "account_number",
              "data-vv-as": "account number"
            },
            domProps: { value: _vm.form.account_number },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "account_number", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("account_number")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("account_number")))])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.account_number
            ? _c("small", [_vm._v(_vm._s(_vm.error.account_number[0]))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "style-two" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"
        },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-lg bg-default",
              attrs: { type: "submit", disabled: _vm.$isProcessing }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm._f("capitalize")(_vm.action)) +
                  " Branch "
              ),
              _c("i", { staticClass: "far fa-paper-plane ml-1" })
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01f74a80", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ccfe15a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/utility/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.register(_vm.form, 0)
        }
      }
    },
    [
      _c("h5", [_vm._v("Employee Personal Details")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Full Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.full_name,
                expression: "form.full_name"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|max:100",
                expression: "'required|max:100'"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "employee full name",
              name: "name"
            },
            domProps: { value: _vm.form.full_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "full_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("name")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("name")))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Phone Number")]),
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
                value: "required|numeric|max:11|min:11",
                expression: "'required|numeric|max:11|min:11'"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.error.phone_number },
            attrs: {
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "phone_number",
              "data-vv-as": "phone number"
            },
            domProps: { value: _vm.form.phone_number },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "phone_number", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("phone_number")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("phone_number")) +
                    "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.phone_number
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.error.phone_number[0]) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Marital Status")]),
          _vm._v(" "),
          _c(
            "select",
            {
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
              staticClass: "custom-select w-100",
              attrs: { name: "status", "data-vv-validate-on": "blur" },
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
                    "status",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select status")
              ]),
              _vm._v(" "),
              _vm._l(_vm.statuses, function(status) {
                return _c("option", { domProps: { value: status } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(status)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("status")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("status")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Nationality")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.nationality,
                  expression: "form.nationality"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "custom-select w-100",
              attrs: { name: "nationality", "data-vv-validate-on": "blur" },
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
                    "nationality",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select nationality")
              ]),
              _vm._v(" "),
              _vm._l(_vm.countries, function(country) {
                return _c("option", { domProps: { value: country } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(country)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("nationality")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("nationality")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Date of Birth")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.date_of_birth,
                expression: "form.date_of_birth"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "date",
              name: "date_of_birth",
              "data-vv-as": "date of birth"
            },
            domProps: { value: _vm.form.date_of_birth },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "date_of_birth", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("date_of_birth")
            ? _c("small", [_vm._v(_vm._s(_vm.errors.first("date_of_birth")))])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.date_of_birth
            ? _c("small", [_vm._v(_vm._s(_vm.error.date_of_birth[0]))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
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
                value: "required|email|min:1",
                expression: "'required|email|min:1'"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.error.email },
            attrs: {
              type: "email",
              placeholder: "name@example.com",
              name: "email"
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
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("email")) +
                    "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.error.email
            ? _c("small", [
                _vm._v(
                  "\n            " + _vm._s(_vm.error.email[0]) + "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Role in the company")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.role_id,
                  expression: "form.role_id"
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
                name: "role",
                "data-vv-validate-on": "blur",
                "data-vv-name": "role"
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
                    "role_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select role")
              ]),
              _vm._v(" "),
              _vm._l(_vm.roles, function(role) {
                return _c("option", { domProps: { value: role.id } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(role.name)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.first("role")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("role")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Highest Qualification")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.highest_qualification,
                  expression: "form.highest_qualification"
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
                name: "qualification",
                "data-vv-validate-on": "blur",
                "data-vv-name": "qualification"
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
                    "highest_qualification",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select qualification")
              ]),
              _vm._v(" "),
              _vm._l(_vm.qualifications, function(qualification) {
                return _c("option", { domProps: { value: qualification } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(qualification)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.has("qualification")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("qualification")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Operations Branch")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.branch_id,
                  expression: "form.branch_id"
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
                name: "branch",
                "data-vv-validate-on": "blur",
                "data-vv-name": "branch"
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
                    "branch_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select branch")
              ]),
              _vm._v(" "),
              _vm._l(_vm.branches, function(branch) {
                return _c("option", { domProps: { value: branch.id } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(branch.name)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.has("branch")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("branch")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Date of Appointment")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.date_of_appointment,
                expression: "form.date_of_appointment"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "date",
              name: "date_of_appointment",
              "data-vv-as": "date of appointment"
            },
            domProps: { value: _vm.form.date_of_appointment },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "date_of_appointment", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("date_of_appointment")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("date_of_appointment")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
      _vm._v(" "),
      _vm.ifUp(_vm.action)
        ? _c(
            "div",
            {
              staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3"
            },
            [
              _c("label", [_vm._v("Date of Exit")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.date_of_exit,
                    expression: "form.date_of_exit"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "date" },
                domProps: { value: _vm.form.date_of_exit },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "date_of_exit", $event.target.value)
                  }
                }
              })
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Staff Category")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.category,
                  expression: "form.category"
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
                name: "qualification",
                "data-vv-validate-on": "blur",
                "data-vv-name": "category"
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
                    "category",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("select category")
              ]),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category) {
                return _c("option", { domProps: { value: category.name } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("capitalize")(category.name)) +
                      "\n            "
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.has("category")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("category")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", { staticClass: "w-100 float-left pl-1" }, [
            _vm._v("Gender")
          ]),
          _vm._v(" "),
          _vm._l(_vm.gender, function(sex) {
            return _c(
              "div",
              { staticClass: "radio p-0 col-md-6 col-6 float-left" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.gender,
                      expression: "form.gender"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  attrs: { name: "gender", type: "radio", id: sex },
                  domProps: {
                    value: sex,
                    checked: _vm._q(_vm.form.gender, sex)
                  },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.form, "gender", sex)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: sex } }, [
                  _vm._v("\n                " + _vm._s(sex) + "\n            ")
                ])
              ]
            )
          }),
          _vm._v(" "),
          _vm.errors.first("gender")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("gender")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-12 float-left px-0 px-md-3" }, [
        _c("label", [_vm._v("Describe Location")]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.address,
              expression: "form.address"
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required|max:255",
              expression: "'required|max:255'"
            }
          ],
          staticClass: "form-control w-100",
          attrs: { placeholder: "address", rows: "1", name: "address" },
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
              _vm._v(
                "\n            " +
                  _vm._s(_vm.errors.first("address")) +
                  "\n        "
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "spaceAfter" }),
      _vm._v(" "),
      _c("h5", [_vm._v("Referee Details")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Referee 1 Full Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.referee_1,
                expression: "form.referee_1"
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
              type: "text",
              placeholder: "enter full name here",
              name: "referee_1",
              "data-vv-as": "referee 1 full name"
            },
            domProps: { value: _vm.form.referee_1 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "referee_1", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("referee_1")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("referee_1")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Referee 1 Phone Number")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.referee_1_phone_no,
                expression: "form.referee_1_phone_no"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|numeric|max:11|min:11",
                expression: "'required|numeric|max:11|min:11'"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "referee_1_phone_no",
              "data-vv-as": "referee 1 phone number"
            },
            domProps: { value: _vm.form.referee_1_phone_no },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "referee_1_phone_no", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("referee_1_phone_no")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("referee_1_phone_no")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Referee 2 Full Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.referee_2,
                expression: "form.referee_2"
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
              type: "text",
              placeholder: "enter full name here",
              name: "referee_2",
              "data-vv-as": "referee 2 full name"
            },
            domProps: { value: _vm.form.referee_2 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "referee_2", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("referee_2")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("referee_2")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Referee 2 Phone Number")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.referee_2_phone_no,
                expression: "form.referee_2_phone_no"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|numeric|max:11|min:11",
                expression: "'required|numeric|max:11|min:11'"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "referee_2_phone_no",
              "data-vv-as": "referee 2 phone number"
            },
            domProps: { value: _vm.form.referee_2_phone_no },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "referee_2_phone_no", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("referee_2_phone_no")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("referee_2_phone_no")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceAfter" }),
      _vm._v(" "),
      _c("h5", [_vm._v("Next of Kin Details")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Next of Kin Full Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.next_of_kin_name,
                expression: "form.next_of_kin_name"
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
              type: "text",
              placeholder: "enter full name here",
              name: "next_of_kin_name",
              "data-vv-as": "next of kin name"
            },
            domProps: { value: _vm.form.next_of_kin_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "next_of_kin_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("next_of_kin_name")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("next_of_kin_name")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group col-md-6 col-12 float-left px-0 px-md-3" },
        [
          _c("label", [_vm._v("Next of Kin Phone Number")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.next_of_kin_phone_no,
                expression: "form.next_of_kin_phone_no"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|numeric|max:11|min:11",
                expression: "'required|numeric|max:11|min:11'"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "tel",
              placeholder: "081xxxxxxxx",
              name: "next_of_kin_phone_no",
              "data-vv-as": "next of kin phone number"
            },
            domProps: { value: _vm.form.next_of_kin_phone_no },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "next_of_kin_phone_no", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.first("next_of_kin_phone_no")
            ? _c("small", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.first("next_of_kin_phone_no")) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
      _vm._v(" "),
      _c("hr", { staticClass: "style-two" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"
        },
        [
          _vm.ifReg(_vm.action)
            ? _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-lg bg-default",
                    attrs: { type: "submit", disabled: _vm.$isProcessing }
                  },
                  [
                    _vm._v("\n                Register Employee "),
                    _c("i", { staticClass: "far fa-paper-plane ml-1" })
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.ifUp(_vm.action)
            ? _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "mx-3 btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "mx-3 btn bg-default float-right",
                    attrs: { type: "submit", disabled: _vm.$isProcessing }
                  },
                  [
                    _vm._v("\n                Update Employee "),
                    _c("i", { staticClass: "far fa-paper-plane ml-1" })
                  ]
                )
              ])
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ccfe15a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "h4",
    {
      staticClass: "mx-md-3 mx-0 py-0 my-0 text-center clearfix",
      attrs: { id: "index" }
    },
    [
      _vm.$routerHistory.hasPrevious()
        ? _c(
            "router-link",
            {
              staticClass:
                "text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",
              attrs: { to: _vm.previous, id: "back" }
            },
            [
              _c("span", { staticClass: "mr-5 float-left" }, [
                _c("i", {
                  staticClass: "far fa-arrow-alt-circle-left float-left"
                }),
                _vm._v(" "),
                _c(
                  "small",
                  { staticClass: "back float-left ml-2 d-none d-sm-block" },
                  [_vm._v("Back")]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "strong",
        {
          staticClass: "mx-auto w-100 float-left",
          attrs: { "data-title": "title" }
        },
        [
          _c("span", { staticClass: "d-none d-sm-block" }, [
            _vm._v(_vm._s(_vm.pageTitle) + " Portal")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "d-block d-sm-none" }, [
            _vm._v(_vm._s(_vm.pageTitleSmall) + " Portal")
          ])
        ]
      ),
      _vm._v(" "),
      _vm.$routerHistory.hasForward()
        ? _c(
            "router-link",
            {
              staticClass:
                "text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",
              attrs: { to: _vm.forward, id: "forward" }
            },
            [
              _c("span", { staticClass: "ml-5 float-right" }, [
                _c("i", {
                  staticClass: "far fa-arrow-alt-circle-right float-right"
                }),
                _vm._v(" "),
                _c(
                  "small",
                  { staticClass: "forward float-right mr-2 d-none d-sm-block" },
                  [_vm._v("Forward")]
                )
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f542aae", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53eb4313\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card-body p-4 p-md-5" }, [
      _c("div", { staticClass: "clearfix w-100" }, [
        _c(
          "div",
          {
            staticClass: "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
          },
          [
            _c("label", [_vm._v("Search Column")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.query.search_column,
                    expression: "query.search_column"
                  }
                ],
                staticClass: "custom-select w-100",
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
                      _vm.query,
                      "search_column",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              _vm._l(_vm.columns, function(column) {
                return _c("option", { domProps: { value: column } }, [
                  _vm._v(_vm._s(_vm._f("capitalize")(column)))
                ])
              })
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
          },
          [
            _c("label", [_vm._v("Search Operator")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.query.search_operator,
                    expression: "query.search_operator"
                  }
                ],
                staticClass: "custom-select w-100",
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
                      _vm.query,
                      "search_operator",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              _vm._l(_vm.operators, function(value, key) {
                return _c("option", { domProps: { value: key } }, [
                  _vm._v(_vm._s(value))
                ])
              })
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group col-md-6 col-sm-6 px-md-3 px-1 float-left"
          },
          [
            _c("label", [_vm._v("Search Input")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.query.search_input,
                  expression: "query.search_input"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "search..." },
              domProps: { value: _vm.query.search_input },
              on: {
                keyup: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  _vm.fetchIndexData()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.query, "search_input", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left"
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-block bg-default mb-0 mt-3 mt-md-4",
                on: {
                  click: function($event) {
                    _vm.fetchIndexData()
                  }
                }
              },
              [_vm._v("Filter")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "px-0 px-md-3 mt-3 table-responsive" }, [
        _c("table", { staticClass: "table m-0  table-bordered table-hover" }, [
          _c("thead", { staticClass: "thead-light" }, [
            _c(
              "tr",
              [
                _vm._l(_vm.columns, function(column) {
                  return _c(
                    "th",
                    {
                      attrs: { scope: "col" },
                      on: {
                        click: function($event) {
                          _vm.toggleOrder(column)
                        }
                      }
                    },
                    [
                      _c("span", [
                        _vm._v(_vm._s(_vm._f("capitalize")(column)))
                      ]),
                      _vm._v(" "),
                      column === _vm.query.column
                        ? _c("span", { staticClass: "dv-table-column" }, [
                            _vm.query.direction === "desc"
                              ? _c("span", [_vm._v("↑")])
                              : _c("span", [_vm._v("↓")])
                          ])
                        : _vm._e()
                    ]
                  )
                }),
                _vm._v(" "),
                _vm.user || _vm.branch || _vm.customer
                  ? _c("th", { attrs: { scope: "col" } }, [
                      _c("span", [_vm._v("Action")])
                    ])
                  : _vm._e()
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.model.data, function(model) {
              return _c(
                "tr",
                [
                  _vm._l(model, function(value, key) {
                    return _c("td", [_vm._v(_vm._s(value))])
                  }),
                  _vm._v(" "),
                  _vm.user
                    ? _c("td", [
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round",
                            attrs: {
                              "data-toggle": "tooltip",
                              "data-placement": "top",
                              title: "Edit Employee Detail"
                            },
                            on: {
                              click: function($event) {
                                _vm.update(model, "updateEmployee", 1)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-user-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-center mr-2 btn btn-icon btn-sm float-left btn-round",
                            class: {
                              "btn-success": _vm.accessStatus(
                                model.portal_access
                              ),
                              "btn-danger": !_vm.accessStatus(
                                model.portal_access
                              )
                            },
                            attrs: {
                              "data-toggle": "tooltip",
                              "data-placement": "top",
                              title: "Edit Employee Portal Access"
                            },
                            on: {
                              click: function($event) {
                                _vm.update(model, "editPortalAccess")
                              }
                            }
                          },
                          [
                            _vm.accessStatus(model.portal_access)
                              ? _c("i", { staticClass: "fas fa-lock-open" })
                              : _c("i", { staticClass: "fas fa-lock" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round",
                            attrs: {
                              "data-toggle": "tooltip",
                              "data-placement": "top",
                              title: "Reset Employee Password"
                            },
                            on: {
                              click: function($event) {
                                _vm.update(model, "editPassword")
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-key" })]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.branch || _vm.customer
                    ? _c("td", [
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round",
                            attrs: {
                              "data-toggle": "tooltip",
                              "data-placement": "top",
                              title:
                                "" +
                                (_vm.branch
                                  ? "update branch details"
                                  : "view details")
                            },
                            on: {
                              click: function($event) {
                                _vm.branch
                                  ? _vm.updateBranch(model.id)
                                  : _vm.$router.push("/customer/" + model.id)
                              }
                            }
                          },
                          [
                            _vm.branch
                              ? _c("i", { staticClass: "fas fa-cog" })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.customer
                              ? _c("i", { staticClass: "far fa-user" })
                              : _vm._e()
                          ]
                        )
                      ])
                    : _vm._e()
                ],
                2
              )
            })
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "nav",
        {
          staticClass: "clearfix pt-5",
          attrs: { "aria-label": "Page navigation example" }
        },
        [
          _c(
            "span",
            { staticClass: "float-left col-md-6 col-12 px-0 mb-5 mb-md-0" },
            [
              _vm._v(
                "\n                Displaying: " +
                  _vm._s(_vm.model.from) +
                  " - " +
                  _vm._s(_vm.model.to) +
                  " of " +
                  _vm._s(_vm.model.total) +
                  " " +
                  _vm._s(_vm._f("capitalize")(_vm.appModel)) +
                  " (s)\n            "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0"
            },
            [
              _c("ul", { staticClass: "pagination m-0 float-right" }, [
                _c("li", { staticClass: "page-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      on: {
                        click: function($event) {
                          _vm.prev()
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-arrow-circle-left" })]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "page-item" }, [
                  _c("span", { staticClass: "page-link" }, [
                    _vm._v("Current Page: " + _vm._s(_vm.model.current_page))
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "page-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      on: {
                        click: function($event) {
                          _vm.next()
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-arrow-circle-right" })]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "float-left" }, [
                _c("span", { staticClass: "py-2 pr-3 float-left" }, [
                  _vm._v("Rows Per Page ")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.query.per_page,
                      expression: "query.per_page"
                    }
                  ],
                  staticClass: "form-control float-left",
                  staticStyle: { width: "50px" },
                  attrs: { type: "text", placeholder: "search..." },
                  domProps: { value: _vm.query.per_page },
                  on: {
                    keyup: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      _vm.fetchIndexData()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.query, "per_page", $event.target.value)
                    }
                  }
                })
              ])
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade bd-example-modal-lg",
        attrs: { id: "updateEmployee" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _c("utility-form", {
                  attrs: {
                    bus: _vm.bus,
                    receivedData: _vm.sentData,
                    action: "update"
                  },
                  on: {
                    done: function($event) {
                      _vm.fetchIndexData()
                    }
                  }
                })
              ],
              1
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "editPortalAccess" } },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "div",
                    { staticClass: "form-group col-12 float-left mt-0 mb-2" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._l(_vm.portal_access, function(access) {
                        return _c(
                          "div",
                          {
                            staticClass:
                              "radio p-0 col-6 float-left text-center"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.portal_access,
                                  expression: "form.portal_access"
                                }
                              ],
                              attrs: {
                                name: "access",
                                type: "radio",
                                id: access.name
                              },
                              domProps: {
                                value: access.value,
                                checked: _vm._q(
                                  _vm.form.portal_access,
                                  access.value
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.form,
                                    "portal_access",
                                    access.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: access.name } }, [
                              _vm._v(
                                _vm._s(_vm._f("capitalize")(access.name)) +
                                  " Access"
                              )
                            ])
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "m-2 btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "m-2 btn bg-default",
                      attrs: { type: "button", disabled: _vm.$isProcessing },
                      on: {
                        click: function($event) {
                          _vm.bus.$emit("submit", _vm.form)
                        }
                      }
                    },
                    [
                      _vm._v(" Save changes "),
                      _c("i", { staticClass: "far fa-paper-plane ml-1" })
                    ]
                  )
                ])
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "editPassword" } }, [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("form", [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "m-2 btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "m-2 btn bg-default",
                  attrs: { type: "button", disabled: _vm.$isProcessing },
                  on: { click: _vm.resetPassword }
                },
                [
                  _vm._v(
                    "\n                            continue and reset password "
                  ),
                  _c("i", { staticClass: "far fa-paper-plane ml-1" })
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade bd-example-modal-lg",
        attrs: { id: "updateBranch" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(5),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _c("branch-form", {
                  attrs: {
                    action: "update",
                    branchToUpdate: _vm.branchToUpdate
                  },
                  on: { done: _vm.fetchIndexData }
                })
              ],
              1
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Update Employee Details")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "data-dismiss": "modal", "aria-label": "Close" }
        },
        [
          _c(
            "span",
            {
              staticClass: "modal-close text-danger",
              attrs: { "aria-hidden": "true" }
            },
            [_c("i", { staticClass: "fas fa-times" })]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Edit Employee Portal Access")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "data-dismiss": "modal", "aria-label": "Close" }
        },
        [
          _c(
            "span",
            {
              staticClass: "modal-close text-danger",
              attrs: { "aria-hidden": "true" }
            },
            [_c("i", { staticClass: "fas fa-times" })]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "mb-2 w-100 float-left pl-1 text-center",
        staticStyle: { "font-size": "14px" }
      },
      [
        _vm._v(
          "\n                                Please Verify you selected the right access before clicking "
        ),
        _c("br"),
        _vm._v(" "),
        _c("strong", [_vm._v("Save Changes ")]),
        _vm._v("!\n                            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Reset Employee Password")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "data-dismiss": "modal", "aria-label": "Close" }
        },
        [
          _c(
            "span",
            {
              staticClass: "modal-close text-danger",
              attrs: { "aria-hidden": "true" }
            },
            [_c("i", { staticClass: "fas fa-times" })]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", { staticClass: "form-group col-12 float-left mt-2 mb-4 " }, [
        _c("span", [
          _vm._v("A new password will be sent to the employee via "),
          _c("strong", [_vm._v("sms")]),
          _vm._v(
            " on the\n                                  telephone He/She "
          ),
          _c("strong", [_vm._v("used for registration")]),
          _vm._v(" on this portal.\n                                "),
          _c("br"),
          _c("br"),
          _vm._v(
            "Please Kindly verify that the phone to receive the new password is on and active!\n                            "
          )
        ]),
        _c("br"),
        _c("br"),
        _vm._v(" "),
        _c("u", [
          _c("em", [
            _vm._v("click the continue and reset password to finish this task!")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Update Branch Details")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "data-dismiss": "modal", "aria-label": "Close" }
        },
        [
          _c(
            "span",
            {
              staticClass: "modal-close text-danger",
              attrs: { "aria-hidden": "true" }
            },
            [_c("i", { staticClass: "fas fa-times" })]
          )
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-53eb4313", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c2d112da\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerList.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { staticClass: "px-md-4 px-2" },
      [
        _c("app-navigation", {
          attrs: {
            pageTitle: "General Customer List",
            pageTitleSmall: "Customers",
            previous: { path: _vm.$routerHistory.previous().path },
            forward: { path: _vm.$routerHistory.next().path }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "float-left w-100 pt-md-3 pt-2 clearfix",
            attrs: { id: "index" }
          },
          [
            _c(
              "div",
              { staticClass: "card" },
              [
                _c(
                  "ul",
                  {
                    staticClass:
                      "nav nav-tabs justify-content-center bg-default"
                  },
                  [_c("h6", [_vm._v("Customer List")])]
                ),
                _vm._v(" "),
                _c("data-viewer", {
                  attrs: {
                    source: "/api/customer",
                    title: "Customer Data",
                    appModel: "customer"
                  }
                })
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c2d112da", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("25e038e4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavigation.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\AppNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f542aae", Component.options)
  } else {
    hotAPI.reload("data-v-2f542aae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/CustomerList.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerList.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c2d112da\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerList.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\CustomerList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c2d112da", Component.options)
  } else {
    hotAPI.reload("data-v-c2d112da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataViewer.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53eb4313\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataViewer.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\DataViewer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53eb4313", Component.options)
  } else {
    hotAPI.reload("data-v-53eb4313", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ "./resources/assets/js/helpers/sms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

exports.default = {
    message: "",
    welcome: function welcome(details) {
        this.message = "Welcome to Altara credit. Please secure your login details. Staff ID: " + details.loginID + ", password: " + details.loginPassword;
        this.send(details);
    },
    customerReg: function customerReg(details) {
        this.message = "Dear " + details.first_name + " " + details.last_name + ", Welcome to Altara Credit Limited, You are hereby invited to our showroom at " + details.branch.description + " to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: " + details.branch.phone_yoruba + ". Your customer id is: " + details.id;
        this.send({ phone: details.telephone.substr(1) });
    },
    passwordReset: function passwordReset(details) {
        this.message = "Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is " + details.staff_id + ", new password: " + details.password;
        this.send(details);
    },
    dvaMessage: function dvaMessage(details) {
        this.message = details.message;
        this.send(details);
    },
    send: function send(details) {
        (0, _api.get)("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to=234" + details.phone + "&text=" + this.message).then(function () {
            return console.log("sms sent successfully");
        });
    }
};

/***/ }),

/***/ "./resources/assets/js/views/FSL/utility/branchForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/utility/branchForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01f74a80\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/utility/branchForm.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\utility\\branchForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01f74a80", Component.options)
  } else {
    hotAPI.reload("data-v-01f74a80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/HRM/utility/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/utility/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ccfe15a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/utility/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\HRM\\utility\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ccfe15a", Component.options)
  } else {
    hotAPI.reload("data-v-0ccfe15a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([3],{"1gIg":function(t,e,r){var o=r("VU/8")(r("wBhk"),r("wSO8"),!1,function(t){r("dvca")},null,null);t.exports=o.exports},IVuq:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=c(r("Xxa5")),a=r("uD8u"),i=c(r("TOoT")),n=c(r("KjZf")),s=c(r("1gIg"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{customer:""}},components:{CustomerProfile:n.default,AppNavigation:s.default},created:function(){$(".tooltip").remove(),this.fetch()},methods:{fetch:function(){var t,e=(t=o.default.mark(function t(){var e=this;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$network()){t.next=8;break}return this.$LIPS(!0),t.next=4,(0,a.get)("/api/customer/"+this.$route.params.id).then(function(t){return e.customer=t.data.customer}).catch(function(t){return i.default.setError(422===t.response.status?t.response.data.message:"Something went wrong, try again later!")});case 4:this.$LIPS(!1),this.$scrollToTop(),t.next=9;break;case 8:this.$networkErr();case 9:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function o(a,i){try{var n=e[a](i),s=n.value}catch(t){return void r(t)}if(!n.done)return Promise.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()}}},KjZf:function(t,e,r){var o=r("VU/8")(r("rNNu"),r("oJ9/"),!1,function(t){r("RtVY")},null,null);t.exports=o.exports},Otht:function(t,e,r){var o=r("VU/8")(r("IVuq"),r("x/cd"),!1,null,null,null);t.exports=o.exports},RtVY:function(t,e,r){var o=r("v2hL");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("7cbcb43e",o,!0,{})},SldL:function(t,e){!function(e){"use strict";var r,o=Object.prototype,a=o.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},n=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=y;var f="suspendedStart",p="suspendedYield",m="executing",d="completed",h={},v={};v[n]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(R([])));_&&_!==o&&a.call(_,n)&&(v=_);var x=k.prototype=b.prototype=Object.create(v);C.prototype=x.constructor=k,k.constructor=C,k[c]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},u.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[s]=function(){return this},u.AsyncIterator=L,u.async=function(t,e,r,o){var a=new L(y(t,e,r,o));return u.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[n]=function(){return this},x.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},u.values=R,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,a){return s.type="throw",s.arg=t,e.next=o,a&&(e.method="next",e.arg=r),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],s=n.completion;if("root"===n.tryLoc)return o("end");if(n.tryLoc<=this.prev){var c=a.call(n,"catchLoc"),l=a.call(n,"finallyLoc");if(c&&l){if(this.prev<n.catchLoc)return o(n.catchLoc,!0);if(this.prev<n.finallyLoc)return o(n.finallyLoc)}else if(c){if(this.prev<n.catchLoc)return o(n.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return o(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var n=i?i.completion:{};return n.type=t,n.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var a=o.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:R(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=r),h}}}function y(t,e,r,o){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),n=new $(o||[]);return i._invoke=function(t,e,r){var o=f;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===d){if("throw"===a)throw i;return N()}for(r.method=a,r.arg=i;;){var n=r.delegate;if(n){var s=j(n,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var c=w(t,e,r);if("normal"===c.type){if(o=r.done?d:p,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=d,r.method="throw",r.arg=c.arg)}}}(t,r,n),i}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function C(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,n){var s=w(t[r],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,n)},function(t){e("throw",t,i,n)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},n)}n(s.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function j(t,e){var o=t.iterator[e.method];if(o===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=w(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},dvca:function(t,e,r){var o=r("kHNU");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("95a6393e",o,!0,{})},jyFz:function(t,e,r){var o=function(){return this}()||Function("return this")(),a=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,i=a&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,t.exports=r("SldL"),a)o.regeneratorRuntime=i;else try{delete o.regeneratorRuntime}catch(t){o.regeneratorRuntime=void 0}},kHNU:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"#index a#back{left:0}#index a#forward{right:0}#index a#back,#index a#forward{margin-top:.8rem;position:absolute}#index a#back i,#index a#forward i{font-size:2.4rem}#index .back,#index .forward{line-height:2.4rem;margin-top:-.2rem;font-weight:700}@media (max-width:990px){#index a#back i,#index a#forward i{font-size:2.6rem}}@media (max-width:600px){#index [data-title=title],#index a#back,#index a#forward{margin-top:-.3rem;margin-bottom:.3rem}}",""])},"oJ9/":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"customer-profile card position-relative"},[r("div",{staticClass:"design"}),t._v(" "),r("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[r("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[r("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[r("span",{staticClass:"img-border"},[t.customer.document.passport_url?r("img",{staticClass:"profile-picture rounded-circle",attrs:{src:"https://s3.eu-west-2.amazonaws.com/altara-one/"+t.customer.document.passport_url,alt:"customer profile pic"}}):r("i",{staticClass:"no-image fas fa-user-alt"})])]),t._v(" "),r("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[r("span",{staticClass:"w-50"},[t._m(0),t._v(" "),r("div",{staticClass:"data text-right px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.employment_status)))])]),t._v(" "),r("span",{staticClass:"separator"}),t._v(" "),r("span",{staticClass:"w-50"},[t._m(1),t._v(" "),r("div",{staticClass:"data px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.gender)))])])])])]),t._v(" "),r("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[r("div",{staticClass:"pt-md-4 pt-0 clearfix"},[r("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[r("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[r("i",{staticClass:"mr-3 far fa-user-circle"}),t._v(" "),r("strong",[t._v(t._s(t._f("capitalize")(t.customer.first_name+" "+t.customer.last_name)))])])]),t._v(" "),r("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[r("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[r("strong",[t._v("Customer ID: "+t._s(t.customer.id))])])]),t._v(" "),r("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[t.approved?r("span",{staticClass:"status mt-md-5 my-sm-2 mt-0 approved shadow-sm"},[t._v("\n                    APPROVED"),r("i",{staticClass:"ml-3 fas fa-check"})]):r("span",{staticClass:"status mt-md-5 my-sm-2 mt-0 not-approved shadow-sm"},[t._v("\n                    NOT APPROVED"),r("i",{staticClass:"ml-3 fas fa-times"})])])]),t._v(" "),r("div",{staticClass:"pt-4"},[r("table",{staticClass:"table"},[r("tbody",[r("tr",[t._m(2),t._v(" "),r("td",[t._v(t._s(t.customer.telephone))])]),t._v(" "),r("tr",[t._m(3),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.customer.add_houseno+" "+t.customer.add_street+" "+t.customer.area_address+", "+t.customer.city+", "+t.customer.state+"."))+"\n                    ")])]),t._v(" "),r("tr",[t._m(4),t._v(" "),r("td",[t._v(t._s(t.customer.date_of_registration))])]),t._v(" "),r("tr",[t._m(5),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.customer.user.full_name)))])]),t._v(" "),r("tr",[t._m(6),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.customer.branch.description+" "+t.customer.branch.name)))])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[this._v("\n                        Status"),e("i",{staticClass:"ml-3 fas fa-briefcase"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[e("i",{staticClass:"mr-3 fas fa-transgender"}),this._v("Gender\n                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 fas fa-mobile-alt"}),this._v("Phone Number")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),this._v("Address")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 fas fa-gift"}),this._v("Registered On")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 far fa-user-circle"}),this._v("Registered By")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 far fa-building"}),this._v("Branch")])}]}},rNNu:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["customer"],computed:{approved:function(){return 1===this.customer.verification.address&&1===this.customer.verification.id_card&&1===this.customer.verification.passport&&1===this.customer.verification.processing_fee&&1===this.customer.verification.work_guarantor&&1===this.customer.verification.personal_guarantor}}}},v2hL:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".customer-profile{position:relative}.customer-profile th{width:auto;font-weight:400}.customer-profile .data,.customer-profile td{font-size:1.5rem;font-weight:500}.customer-profile .status{padding:1.2rem 3rem;float:left;color:#fff;border-radius:.5rem;-webkit-box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);font-weight:700;font-size:1.3rem}.customer-profile .status.approved{background-color:#00a368}.customer-profile .status.not-approved{background-color:#c81618}.customer-profile .design{position:absolute;top:13rem;bottom:0;left:0;width:101%;height:calc(100% - 8.1rem);z-index:0;background:linear-gradient(45deg,#dedede,#fff)}.customer-profile .no-image,.customer-profile .profile-picture{height:16rem;width:16rem;-webkit-box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2)}.customer-profile .no-image{background-color:#e3e3e3;border-radius:50%;line-height:16rem;text-align:center;font-size:8rem;color:rgba(0,0,0,.15)}.customer-profile .img-border{padding:1.1rem;background-color:#fff;border-radius:50%}.customer-profile .separator{position:absolute;left:50%;height:70%;width:1px;background-color:rgba(0,0,0,.1);top:3%}@media (max-width:600px){.customer-profile .design{background:-webkit-gradient(linear,left top,left bottom,from(#dedede),to(#fff));background:linear-gradient(180deg,#dedede,#fff)}.customer-profile .separator{top:-11%}.customer-profile .small-center{text-align:center}.customer-profile th{width:35%}.customer-profile tbody{padding:1rem 1rem 0;float:left}}",""])},wBhk:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}},wSO8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"index"}},[t.$routerHistory.hasPrevious()?r("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[r("span",{staticClass:"mr-5 float-left"},[r("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),r("small",{staticClass:"back float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),r("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[r("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle)+" Portal")]),t._v(" "),r("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall)+" Portal")])]),t._v(" "),t.$routerHistory.hasForward()?r("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[r("span",{staticClass:"ml-5 float-right"},[r("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),r("small",{staticClass:"forward float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},"x/cd":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"px-md-4 px-2"},[e("app-navigation",{attrs:{pageTitle:"Customer Profile",pageTitleSmall:"Profile",previous:{path:this.$routerHistory.previous().path},forward:{path:this.$routerHistory.next().path}}}),this._v(" "),e("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[this.customer?e("customer-profile",{attrs:{customer:this.customer}}):this._e()],1)],1)])},staticRenderFns:[]}}});
>>>>>>> 5b66d6bd3124cd9c1e27808029b5045efc350129
