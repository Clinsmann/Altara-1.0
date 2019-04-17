webpackJsonp([8],{"2Q7A":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,r.post)("/api/log",{action:e,description:t})};var r=a("uD8u")},"8I1l":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".typeahead{border-radius:3px;border:1px solid #e3e3e3;position:relative;z-index:1}.typeahead__open{border:1px solid #0b78bc}.typeahead__open .typeahead__text{opacity:.4}.typeahead__toggle{position:relative;z-index:1;line-height:1rem}.typeahead__search{position:absolute;top:0;left:0;padding:10px;width:100%;display:block;cursor:text;background:transparent;border:none;outline:none;z-index:4}.typeahead__text{min-height:30px;line-height:1em;padding:10px;display:inline-block;position:relative;z-index:3}.typeahead__list{margin:0;padding:0;max-height:240px;overflow-y:scroll;position:absolute;background-color:#fff;width:calc(100% + 2px);border:1px solid #0b78bc;border-top:0;left:-1px;right:0;border-radius:0 0 4px 4px}.typeahead__item{display:block;border-top:1px solid #f4f4f4}.typeahead__link{display:block;padding:10px;line-height:1em;cursor:pointer}.typeahead__active{background:#0b78bc;color:#fff!important}",""])},GqYo:function(e,t,a){var r=a("VU/8")(a("MmHb"),a("qn6o"),!1,function(e){a("neUG")},null,null);e.exports=r.exports},La9N:function(e,t,a){var r=a("VU/8")(a("WvS4"),a("Lh0S"),!1,null,null,null);e.exports=r.exports},Lh0S:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",[a("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[e._v("Send Caution")]),e._v(" "),a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:"."}},[e._v("view all cautions!")])],1)])])]),e._v(" "),a("div",{staticClass:"attendance-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[a("div",{staticClass:"p-5 row bg-white shadow-sm",staticStyle:{"border-radius":".4rem"}},[a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Employee Name")]),e._v(" "),a("typeahead",{attrs:{options:e.users,caption:"full_name"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}})],1),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Issued by")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.issuer_id,expression:"form.issuer_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",disabled:"",name:"issued_by"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"issuer_id",t.target.multiple?a:a[0])}}},[a("option",{domProps:{value:e.issuer.id}},[e._v(e._s(e.issuer.full_name))])])]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("div",{staticClass:"form-check pl-3 ml-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.autoReason,expression:"autoReason"}],staticClass:"form-check-input",attrs:{id:"reason",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.autoReason)?e._i(e.autoReason,"true")>-1:e.autoReason},on:{change:function(t){var a=e.autoReason,r=t.target,n=!!r.checked;if(Array.isArray(a)){var o=e._i(a,"true");r.checked?o<0&&(e.autoReason=a.concat(["true"])):o>-1&&(e.autoReason=a.slice(0,o).concat(a.slice(o+1)))}else e.autoReason=n}}}),e._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"reason"}},[e._v("Select Reason From List")])]),e._v(" "),e.autoReason?a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.reason,expression:"form.reason"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"reason",disabled:!e.autoReason},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"reason",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("-- select reason --")]),e._v(" "),e._l(e.cautions,function(t){return a("option",{domProps:{value:t.reason}},[e._v(e._s(e._f("capitalize")(t.reason)))])})],2):a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.reason,expression:"form.reason"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:e.autoReason,name:"reason",rows:"2"},domProps:{value:e.form.reason},on:{input:function(t){t.target.composing||e.$set(e.form,"reason",t.target.value)}}}),e._v(" "),e.errors.first("reason")?a("small",[e._v(e._s(e.errors.first("reason")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("div",{staticClass:"form-check pl-3 ml-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.autoPenalty,expression:"autoPenalty"}],staticClass:"form-check-input",attrs:{id:"penalty",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.autoPenalty)?e._i(e.autoPenalty,"true")>-1:e.autoPenalty},on:{change:function(t){var a=e.autoPenalty,r=t.target,n=!!r.checked;if(Array.isArray(a)){var o=e._i(a,"true");r.checked?o<0&&(e.autoPenalty=a.concat(["true"])):o>-1&&(e.autoPenalty=a.slice(0,o).concat(a.slice(o+1)))}else e.autoPenalty=n}}}),e._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"penalty"}},[e._v("Add Penalty Automatically")])]),e._v(" "),e.autoPenalty?a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.penalty,expression:"form.penalty"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:e.autoPenalty,name:"penalty"},domProps:{value:e.form.penalty},on:{input:function(t){t.target.composing||e.$set(e.form,"penalty",t.target.value)}}}):a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.penalty,expression:"form.penalty"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:e.autoPenalty,rows:"2",name:"penalty"},domProps:{value:e.form.penalty},on:{input:function(t){t.target.composing||e.$set(e.form,"penalty",t.target.value)}}}),e._v(" "),e.errors.first("penalty")?a("small",[e._v(e._s(e.errors.first("penalty")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBefore"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date,expression:"form.date"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date",name:"date",type:"date"},domProps:{value:e.form.date},on:{input:function(t){t.target.composing||e.$set(e.form,"date",t.target.value)}}}),e._v(" "),e.errors.first("date")?a("small",[e._v(e._s(e.errors.first("date")))]):e._e()])]),e._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),e._v(" "),a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                                create Attendance "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])])},staticRenderFns:[]}},MmHb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{options:{type:Array,default:function(){return[]}},caption:{type:[String,Number],default:null},value:{type:[String,Number],default:null}},data:function(){return{open:!1,selectIndex:0,displayText:"",search:""}},computed:{typeaheadState:function(){return this.open?"typeahead typeahead__open":"typeahead"},filteredOptions:function(){var e=this,t=new RegExp(this.search,"i");return this.options.filter(function(a){return t.test(a.id)||t.test(a[e.caption])})}},watch:{value:function(e,t){e&&this.select(this.options.find(function(t){return t.id===e}))}},methods:{onDownKey:function(){this.filteredOptions.length-1>this.selectIndex&&this.selectIndex++},onUpKey:function(){this.selectIndex>0&&this.selectIndex--},onEnterKey:function(){var e=this.filteredOptions[this.selectIndex];e&&this.select(e)},select:function(e){this.displayText=e[this.caption],this.$emit("input",e.id),this.$refs.search.blur()},toggle:function(e){e.target!==this.$refs.toggle&&e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]||(this.open?e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]&&this.$refs.search.blur():this.$refs.search.focus())},onFocus:function(){this.open=!0},onBlur:function(){this.search="",this.open=!1},onEscape:function(){this.$refs.search.blur()}}}},WvS4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a("I3G/")),n=a("uD8u"),o=a("2Q7A"),s=l(a("TOoT")),i=l(a("GqYo"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Typeahead:i.default},data:function(){return{users:null,columns:{},show:!1,form:{},error:{},issuer:{},autoPenalty:!0,autoReason:!0,cautions:null}},beforeRouteEnter:function(e,t,a){(0,n.get)("/api/caution/create").then(function(e){a(function(t){return t.prepareForm(e.data)})}).catch(function(e){a(function(t){return t.handleErr(e)})})},beforeRouteUpdate:function(e,t,a){var r=this;this.show=!1,this.$LIPS(!0),(0,n.get)("/api/caution/create").then(function(e){r.prepareForm(e.data),a()}).catch(function(e){r.handleErr(e),a()})},methods:{onSave:function(){var e=this;this.$validator.validateAll().then(function(t){t?e.$network()?(e.$LIPS(!0),e.error={},(0,n.post)("/api/caution",{form:e.form}).then(function(t){t.data.saved&&((0,o.log)("CautionSent",""+e.users.find(function(t){return t.id===e.form.user_id}).staff_id),e.prepareForm(t.data),s.default.setSuccess("Caution sent!",5e3))}).catch(function(t){422===(t=t.response).status&&(e.error=t.data.errors?t.data.errors:t.data,e.$networkErr("unique"))}).finally(function(){e.$LIPS(!1),e.$scrollToTop()})):e.$networkErr():e.$networkErr("form")})},prepareForm:function(e){r.default.set(this.$data,"form",e.form),r.default.set(this.$data,"users",e.users),r.default.set(this.$data,"cautions",e.cautionsList),this.issuer=e.users.find(function(t){return t.id===e.form.issuer_id}),this.show=!0,this.$LIPS(!1)},handleErr:function(e){s.default.setError("Error Preparing form")}},watch:{form:{handler:function(e){var t=this.cautions.find(function(t){return t.reason===e.reason});r.default.set(this.$data.form,"penalty",t?t.penalty:"")},deep:!0}}}},neUG:function(e,t,a){var r=a("8I1l");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("3441da72",r,!0,{})},qn6o:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"position-relative",class:e.typeaheadState},[a("div",{ref:"toggle",staticClass:"typeahead__toggle",on:{mousedown:function(t){return t.preventDefault(),e.toggle(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"search",staticClass:"typeahead__search",attrs:{type:"text"},domProps:{value:e.search},on:{blur:e.onBlur,focus:e.onFocus,keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.onDownKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onEnterKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.onEscape(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.onUpKey(t):null}],input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),a("span",{ref:"text",staticClass:"typeahead__text"},[e._v("\n        "+e._s(e.displayText)+"\n     ")])]),e._v(" "),e.open?a("ul",{staticClass:"typeahead__list"},e._l(e.filteredOptions,function(t,r){return a("li",{key:r,staticClass:"typeahead__item"},[a("a",{staticClass:"typeahead__link",class:[e.selectIndex===r?"typeahead__active":""],on:{mousedown:function(a){a.preventDefault(),e.select(t)}}},[e._v("\n                "+e._s(t[e.caption])+"\n            ")])])})):e._e()])},staticRenderFns:[]}}});