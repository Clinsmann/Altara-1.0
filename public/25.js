webpackJsonp([25],{"2Q7A":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t,e){t=t.replace(/([A-Z])/g," $1").replace(/^./,function(t){return t.toUpperCase()}),(0,a.post)("/api/log",{action:t,description:e})};var a=r("uD8u")},cdYB:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(r("I3G/")),n=i(r("TOoT")),s=r("uD8u"),o=r("2Q7A");function i(t){return t&&t.__esModule?t:{default:t}}function d(t){return{create:"/api/brand/create",edit:"/api/brand/"+t.params.id+"/edit"}[t.meta.mode]}e.default={data:function(){return{form:{},mode:null,error:{},show:!1,store:"/api/brand",method:"POST"}},beforeRouteEnter:function(t,e,r){(0,s.get)(d(t)).then(function(t){var e=t.data;return r(function(t){return t.prepareForm(e)})}).catch(function(t){var e=t.response;return r(function(t){return t.handleErr(e)})})},beforeRouteUpdate:function(t,e,r){var a=this;this.show=!1,(0,s.get)(d(t)).then(function(t){var e=t.data;return a.prepareForm(e)}).catch(function(t){var e=t.response;return vm.handleErr(e)})},methods:{handleErr:function(t){n.default.setError("Error Preparing form")},prepareForm:function(t){this.show=!1,this.error={},a.default.set(this.$data,"mode",this.$route.meta.mode),a.default.set(this.$data,"form",t.form),"edit"===this.mode&&(this.store="/api/brand/"+this.$route.params.id,this.method="PUT"),this.show=!0},onSave:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),(0,s.byMethod)(t.method,t.store,t.form).then(function(e){var r=e.data;(r.saved||r.updated)&&((0,o.log)(r.log,r.staff_id),a.default.set(t.$data,"form",r.form),n.default.setSuccess(r.message,5e3),r.updated&&t.$router.push("/log/brands")),t.error={}}).catch(function(e){var r=e.response;422===r.status&&(t.error=r.data.errors?r.data.errors:r.data,t.$networkErr("unique"))}).finally(function(){t.$scrollToTop(),t.$LIPS(!1)})):t.$networkErr():t.$networkErr("form")})}}}},fIVj:function(t,e,r){var a=r("VU/8")(r("cdYB"),r("t54w"),!1,null,null,null);t.exports=a.exports},t54w:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.mode))+" Brand")]),t._v(" "),r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:"/log/brands"}},[t._v("view all brands!")])],1)])])]),t._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm",staticStyle:{"border-radius":".4rem"}},[r("div",{staticClass:"form-group col-12 float-left px-0 px-md-3"},[r("label",[t._v("Brand name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control mb-2",attrs:{placeholder:"brand name",name:"brand name",type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.errors.first("brand name")?r("small",[t._v(t._s(t.errors.first("brand name")))]):t._e(),t._v(" "),t.error.name?r("small",[t._v(t._s(t.error.name[0]))]):t._e()])]),t._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},["edit"===t.mode?r("router-link",{staticClass:"mx-5 text-link mt-4 pt-2",attrs:{to:"/log/brands"}},[t._v("Cancel")]):t._e(),t._v(" "),r("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                            "+t._s(t._f("capitalize")(t.mode))+" Brand "),r("i",{staticClass:"far fa-paper-plane ml-1"})])],1)])])])])])},staticRenderFns:[]}}});