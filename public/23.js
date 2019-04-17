webpackJsonp([23],{"2Q7A":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.log=function(e,a){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,r.post)("/api/log",{action:e,description:a})};var r=t("uD8u")},"69a7":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=l(t("I3G/")),s=l(t("TOoT")),o=t("uD8u"),n=t("2Q7A");function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return{create:"/api/supplier/create",edit:"/api/supplier/"+e.params.id+"/edit"}[e.meta.mode]}a.default={props:{},data:function(){return{form:{},banks:"",mode:null,error:{},show:!1,store:"/api/supplier",method:"POST",statuses:[{name:"active",value:1},{name:"inactive",value:0}]}},beforeRouteEnter:function(e,a,t){(0,o.get)(i(e)).then(function(e){var a=e.data;return t(function(e){return e.prepareForm(a)})}).catch(function(e){var a=e.response;return t(function(e){return e.handleErr(a)})})},beforeRouteUpdate:function(e,a,t){var r=this;this.show=!1,c,(0,o.get)(i(e)).then(function(e){var a=e.data;return r.prepareForm(a)}).catch(function(e){var a=e.response;return vm.handleErr(a)}).finally(function(){return t()})},methods:{handleErr:function(e){s.default.setError("Error Preparing form")},prepareForm:function(e){this.show=!1,this.error={},r.default.set(this.$data,"mode",this.$route.meta.mode),r.default.set(this.$data,"form",e.form),r.default.set(this.$data,"banks",e.banks),"edit"===this.mode&&(this.store="/api/supplier/"+this.$route.params.id,this.method="PUT"),this.show=!0},onSave:function(){var e=this;this.$validator.validateAll().then(function(a){a?e.$network()?(e.$LIPS(!0),(0,o.byMethod)(e.method,e.store,e.form).then(function(a){var t=a.data;(t.saved||t.updated)&&((0,n.log)(t.log,t.staff_id),r.default.set(e.$data,"form",t.form),s.default.setSuccess(t.message,5e3),t.updated&&e.$router.push("/log/suppliers"))}).catch(function(a){var t=a.response;422===t.status&&(e.error=t.data.errors?t.data.errors:t.data,e.$networkErr("unique"))}).finally(function(){e.$scrollToTop(),e.$LIPS(!1)})):e.$networkErr():e.$networkErr("form")})}}}},Kus3:function(e,a,t){var r=t("VU/8")(t("69a7"),t("jCdR"),!1,null,null,null);e.exports=r.exports},jCdR:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("transition",{attrs:{name:"fade"}},[t("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[t("div",{staticClass:"mt-5 attendance-head"},[t("div",{staticClass:"mb-5 row align-items-center"},[t("div",{staticClass:"col-12 title-con"},[t("span",{staticClass:"title"},[e._v(e._s(e._f("capitalize")(e.mode))+" Supplier")]),e._v(" "),t("div",{staticClass:"row justify-content-end"},[t("router-link",{staticClass:"text-link mt-3",attrs:{to:"/log/suppliers"}},[e._v("view all Suppliers!")])],1)])])]),e._v(" "),t("div",{staticClass:"attendance-body"},[t("form",{on:{submit:function(a){return a.preventDefault(),e.onSave(a)}}},[t("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm",staticStyle:{"border-radius":".4rem"}},[t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("SKU")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.sku,expression:"form.sku"}],staticClass:"form-control",attrs:{disabled:"",name:"sku",placeholder:"supplier sku",type:"text"},domProps:{value:e.form.sku},on:{input:function(a){a.target.composing||e.$set(e.form,"sku",a.target.value)}}}),e._v(" "),e.errors.first("sku")?t("small",[e._v(e._s(e.errors.first("sku")))]):e._e(),e._v(" "),e.error.sku?t("small",[e._v(e._s(e.error.sku[0]))]):e._e()]),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("Full Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{name:"name",placeholder:"supplier name",type:"text"},domProps:{value:e.form.name},on:{input:function(a){a.target.composing||e.$set(e.form,"name",a.target.value)}}}),e._v(" "),e.errors.first("name")?t("small",[e._v(e._s(e.errors.first("name")))]):e._e(),e._v(" "),e.error.sku?t("small",[e._v(e._s(e.error.name[0]))]):e._e()]),e._v(" "),t("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("Email")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:100",expression:"'required|email|max:100'"}],staticClass:"form-control",attrs:{name:"email",placeholder:"email",type:"email"},domProps:{value:e.form.email},on:{input:function(a){a.target.composing||e.$set(e.form,"email",a.target.value)}}}),e._v(" "),e.errors.first("email")?t("small",[e._v(e._s(e.errors.first("email")))]):e._e()]),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("Date of registration")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_reg,expression:"form.date_of_reg"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.form.date_of_reg},on:{input:function(a){a.target.composing||e.$set(e.form,"date_of_reg",a.target.value)}}}),e._v(" "),e.errors.first("date")?t("small",[e._v(e._s(e.errors.first("date")))]):e._e()]),e._v(" "),t("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("Phone")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_number,expression:"form.phone_number"},{name:"validate",rawName:"v-validate",value:"required|max:20",expression:"'required|max:20'"}],staticClass:"form-control",attrs:{name:"phone",placeholder:"phone",type:"text"},domProps:{value:e.form.phone_number},on:{input:function(a){a.target.composing||e.$set(e.form,"phone_number",a.target.value)}}}),e._v(" "),e.errors.first("phone")?t("small",[e._v(e._s(e.errors.first("phone")))]):e._e()]),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("Contact person phone")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact_person_name,expression:"form.contact_person_name"},{name:"validate",rawName:"v-validate",value:"required|max:20",expression:"'required|max:20'"}],staticClass:"form-control",attrs:{"data-vv-as":"contact person phone",name:"contact_phone",placeholder:"phone",type:"text"},domProps:{value:e.form.contact_person_name},on:{input:function(a){a.target.composing||e.$set(e.form,"contact_person_name",a.target.value)}}}),e._v(" "),e.errors.first("contact_phone")?t("small",[e._v(e._s(e.errors.first("contact_phone")))]):e._e()]),e._v(" "),t("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",{staticClass:"w-100 float-left"},[e._v("Status")]),e._v(" "),e._l(e.statuses,function(a){return t("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:a.name,name:"status",type:"radio"},domProps:{value:a.value,checked:e._q(e.form.status,a.value)},on:{change:function(t){e.$set(e.form,"status",a.value)}}}),e._v(" "),t("label",{attrs:{for:a.name}},[e._v(e._s(a.name))])])}),e._v(" "),e.errors.first("status")?t("small",[e._v(e._s(e.errors.first("status")))]):e._e()],2),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("Address")]),e._v(" "),t("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"},{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"}],staticClass:"form-control",attrs:{placeholder:"address",name:"address",rows:"1"},domProps:{value:e.form.address},on:{input:function(a){a.target.composing||e.$set(e.form,"address",a.target.value)}}}),e._v(" "),e.errors.first("address")?t("small",[e._v(e._s(e.errors.first("address")))]):e._e()]),e._v(" "),t("div",{staticClass:"spaceAfter"}),e._v(" "),t("h5",{staticClass:"m-3"},[e._v("Bank Details")]),e._v(" "),t("div",{staticClass:"spaceAfter"}),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("Bank Name")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.bank_name,expression:"form.bank_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"bank name","data-vv-validate-on":"blur",name:"bank_name"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"bank_name",a.target.multiple?t:t[0])}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("-- select duration --")]),e._v(" "),e._l(e.banks,function(a){return t("option",{domProps:{value:a.name}},[e._v(e._s(a.name))])})],2),e._v(" "),e.errors.first("bank_name")?t("small",[e._v(e._s(e.errors.first("bank_name")))]):e._e()]),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("Bank account name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bank_account_name,expression:"form.bank_account_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"account name",name:"account_name",placeholder:"account name",type:"number"},domProps:{value:e.form.bank_account_name},on:{input:function(a){a.target.composing||e.$set(e.form,"bank_account_name",a.target.value)}}}),e._v(" "),e.errors.first("account_name")?t("small",[e._v(e._s(e.errors.first("account_name")))]):e._e()]),e._v(" "),t("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),t("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[t("label",[e._v("Bank account number")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bank_account_no,expression:"form.bank_account_no"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"account number",name:"account_number",placeholder:"account number",type:"number"},domProps:{value:e.form.bank_account_no},on:{input:function(a){a.target.composing||e.$set(e.form,"bank_account_no",a.target.value)}}}),e._v(" "),e.errors.first("account_number")?t("small",[e._v(e._s(e.errors.first("account_number")))]):e._e()]),e._v(" "),t("div",{staticClass:"spaceBetween mb-md-2 mb-0"})]),e._v(" "),t("div",{staticClass:"mb-5 px-0 row align-items-center"},[t("div",{staticClass:"clearfix d-flex justify-content-end w-100"},["edit"===e.mode?t("router-link",{staticClass:"mx-5 text-link mt-4 pt-2",attrs:{to:"/log/suppliers"}},[e._v("Cancel")]):e._e(),e._v(" "),t("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            "+e._s(e._f("capitalize")(e.mode))+" Supplier "),t("i",{staticClass:"far fa-paper-plane ml-1"})])],1)])])])])])},staticRenderFns:[]}}});