webpackJsonp([4],{"3e22":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2 attendance attendance-create",attrs:{id:"index"}},[r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")("attendance for "+t.today)))]),t._v(" "),t.$store.getters.auth("peoplesOps")?r("div",{staticClass:"row justify-content-end align-items-center"},[r("a",{staticClass:"text-link pr-4 text-capitalize",attrs:{href:"javascript:"},on:{click:function(e){t.$router.push(t.branch?"?branch="+t.branch:"")}}},[t._v("\n                            get attendance list for :\n                        ")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.branch,expression:"branch"}],staticClass:"custom-select",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.branch=e.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("branch")]),t._v(" "),t._l(t.$store.getters.getBranches,function(e){return r("option",{domProps:{value:e.id}},[t._v("\n                                "+t._s(t._f("capitalize")(e.name))+"\n                            ")])})],2)]):t._e()])])]),t._v(" "),r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"row px-5 pt-3 pb-4"},[r("div",{staticClass:"col-10 col-xs-3 col-md-3 col-lg-3"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"mx-5 col-1 p-0 sm-hide"}),t._v(" "),r("div",{staticClass:"col pl-4 ml-1 ml-xs-0 pl-xs-3"},[r("span",{staticClass:"user-name light-heading"},[t._v(t._s(t.columns[0]))])])])]),t._v(" "),r("div",{staticClass:"col-2 light-heading"},[t._v(t._s(t.columns[1]))]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col light-heading pr-1 pr-lg-4"},[t._v(t._s(t.columns[3]))]),t._v(" "),r("div",{staticClass:"col light-heading pl-1 pl-lg-4"},[t._v(t._s(t.columns[4]))])])]),t._v(" "),r("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 px-0 px-lg-4 light-heading"},[t._v(t._s(t.columns[5]))]),t._v(" "),r("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 light-heading"},[t._v(t._s(t.columns[6]))])])]),t._v(" "),r("div",{staticClass:"mt-1 attendance-body"},[t.show?r("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[t._l(t.form,function(e,a){return r("div",{staticClass:"mb-3 px-4 row align-items-center attendance-item"},[r("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3 pt-2 pb-3 p-xs-0"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"ml-5 mr-3 sm-hide"},[r("span",{staticClass:"user mx-auto"},[r("i",{staticClass:"user-icon fas fa-user-alt"})])]),t._v(" "),r("div",{staticClass:"col"},[r("span",{staticClass:"user-name"},[t._v(t._s(t._f("capitalize")(e.user.full_name)))]),t._v(" "),r("span",{staticClass:"sm-show staff_id-sm"},[t._v("\n                                    - "+t._s(e.user.staff_id)+"\n                                ")])])])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md-2 col-lg-2 sm-hide"},[t._v("\n                        "+t._s(e.user.staff_id)+"\n                    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col pr-3 pr-sm-1 pr-lg-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form[a].arrival_time,expression:"form[index].arrival_time"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:"0"===t.form[a].is_present,name:"arrival_time_"+a,type:"time"},domProps:{value:t.form[a].arrival_time},on:{input:function(e){e.target.composing||t.$set(t.form[a],"arrival_time",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col pl-3 pl-sm-1 pl-lg-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form[a].departure_time,expression:"form[index].departure_time"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:"0"===t.form[a].is_present||t.form[a].no_signout,name:"departure_time_"+a,type:"time"},domProps:{value:t.form[a].departure_time},on:{input:function(e){e.target.composing||t.$set(t.form[a],"departure_time",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mr-5"},[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form[a].no_signout,expression:"form[index].no_signout"}],staticClass:"form-check-input mt-3 ml-2",attrs:{disabled:"0"===t.form[a].is_present,id:"exampleCheck1",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(t.form[a].no_signout)?t._i(t.form[a].no_signout,"true")>-1:t.form[a].no_signout},on:{click:function(e){t.no_signout(a,t.form[a].no_signout)},change:function(e){var r=t.form[a].no_signout,n=e.target,o=!!n.checked;if(Array.isArray(r)){var i=t._i(r,"true");n.checked?i<0&&t.$set(t.form[a],"no_signout",r.concat(["true"])):i>-1&&t.$set(t.form[a],"no_signout",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form[a],"no_signout",o)}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}})])])])]),t._v(" "),r("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4"},[r("div",{staticClass:"clearfix",class:"0"===t.form[a].is_present?"absent":"present"},[r("div",{staticClass:"radio w-50 pr-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form[a].is_present,expression:"form[index].is_present"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"yes_"+a,name:"status_"+a,type:"radio",value:"1"},domProps:{checked:t._q(t.form[a].is_present,"1")},on:{change:function(e){t.$set(t.form[a],"is_present","1")}}}),t._v(" "),r("label",{attrs:{for:"yes_"+a}},[t._v("yes")])]),t._v(" "),r("div",{staticClass:"radio w-50 pl-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form[a].is_present,expression:"form[index].is_present"}],attrs:{id:"no_"+a,name:"status_"+a,type:"radio",value:"0"},domProps:{checked:t._q(t.form[a].is_present,"0")},on:{click:function(e){t.clearTime(a)},change:function(e){t.$set(t.form[a],"is_present","0")}}}),t._v(" "),r("label",{attrs:{for:"no_"+a}},[t._v("no")])])])]),t._v(" "),r("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pl-3 py-4 py-sm-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form[a].remark,expression:"form[index].remark"},{name:"validate",rawName:"v-validate",value:{required:0==t.form[a].is_present},expression:"{ required: form[index].is_present == 0 }"}],staticClass:"form-control",attrs:{disabled:t.form[a].no_signout,name:"remark_"+a,type:"text"},domProps:{value:t.form[a].remark},on:{input:function(e){e.target.composing||t.$set(t.form[a],"remark",e.target.value)}}})])])}),t._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                            "+t._s(t._f("capitalize")(t.mode))+" Attendance "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])],2):r("div",{staticClass:"row attendance-item p-5 mb-5"},[r("span",{staticClass:"no-attendance"},[t._v("You have already submitted attendance for today!")])])]),t._v(" "),r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),r("div",{staticClass:"pt-3 pb-4 align-items-center"},[r("div",{staticClass:"light-heading d-flex"},[r("div",{staticClass:"float-left align-self-center"},[t._v("\n                        To fill attendance for a past date kindly select the date and click get attendance list.\n                        "),r("span",{staticClass:"mx-5"},[t._v("\n                            ||\n                        ")])]),t._v(" "),r("div",{staticClass:"float-left align-self-center",on:{click:function(e){t.fetchAttendanceByDate()}}},[r("a",{staticClass:"text-link text-capitalize",attrs:{href:"javascript:"}},[t._v("get attendance list for "),r("strong",[t._v("Date")]),t._v(" : ")])]),t._v(" "),r("div",{staticClass:"float-left align-self-center ml-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newDate,expression:"newDate"}],staticClass:"form-control float-left",attrs:{type:"date"},domProps:{value:t.newDate},on:{input:function(e){e.target.composing||(t.newDate=e.target.value)}}})])])])])])])},staticRenderFns:[]}},SldL:function(t,e){!function(e){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=x;var f="suspendedStart",d="suspendedYield",m="executing",p="completed",h={},v={};v[i]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(N([])));_&&_!==a&&n.call(_,i)&&(v=_);var y=k.prototype=b.prototype=Object.create(v);C.prototype=y.constructor=k,k.constructor=C,k[c]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},u.awrap=function(t){return{__await:t}},E($.prototype),$.prototype[s]=function(){return this},u.AsyncIterator=$,u.async=function(t,e,r,a){var n=new $(x(t,e,r,a));return u.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},E(y),y[c]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},u.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return s.type="throw",s.arg=t,e.next=a,n&&(e.method="next",e.arg=r),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;j(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:N(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=r),h}}}function x(t,e,r,a){var n=e&&e.prototype instanceof b?e:b,o=Object.create(n.prototype),i=new T(a||[]);return o._invoke=function(t,e,r){var a=f;return function(n,o){if(a===m)throw new Error("Generator is already running");if(a===p){if("throw"===n)throw o;return A()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var c=w(t,e,r);if("normal"===c.type){if(a=r.done?p:d,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=p,r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function C(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function $(t){var e;this._invoke=function(r,a){function o(){return new Promise(function(e,o){!function e(r,a,o,i){var s=w(t[r],t,a);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},i)}i(s.arg)}(r,a,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var a=t.iterator[e.method];if(a===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=w(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},ic49:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t,e){t=t.replace(/([A-Z])/g," $1").replace(/^./,function(t){return t.toUpperCase()}),(0,a.post)("/api/log",{action:t,description:e})};var a=r("p/p5")},jyFz:function(t,e,r){var a=function(){return this}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,o=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,t.exports=r("SldL"),n)a.regeneratorRuntime=o;else try{delete a.regeneratorRuntime}catch(t){a.regeneratorRuntime=void 0}},sUTM:function(t,e,r){var a=r("ykHC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("03930cfa",a,!0,{})},v7K3:function(t,e,r){var a=r("VU/8")(r("xgek"),r("3e22"),!1,function(t){r("sUTM")},"data-v-c4f29f9c",null);t.exports=a.exports},xgek:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=c(r("Xxa5")),n=c(r("I3G/")),o=r("ic49"),i=c(r("K23+")),s=r("p/p5");function c(t){return t&&t.__esModule?t:{default:t}}function l(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function a(n,o){try{var i=e[n](o),s=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}function u(t){return{create:"/api/attendance/create"+(t.query.branch?"?branch="+t.query.branch:"")}[t.meta.mode]}e.default={data:function(){return{form:{},mode:null,show:!1,today:"",newDate:"",submittedToday:"",resource:"/attendance",store:"/api/attendance",method:"POST",columns:["Employee","ID","Date","Arr. Time","Dep. Time","Present?","Remark"],branch:""}},beforeRouteEnter:function(t,e,r){(0,s.get)(u(t)).then(function(t){r(function(e){return e.prepareForm(t.data)})})},beforeRouteUpdate:function(t,e,r){var a=this;this.show=!1,(0,s.get)(u(t)).then(function(t){a.prepareForm(t.data),r()})},created:function(){this.$prepareBranches()},methods:{prepareForm:function(){var t=l(a.default.mark(function t(e){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.getters.auth("peoplesOps")&&this.$route.query.branch){t.next=12;break}return this.mode=this.$route.meta.mode,e.form.length&&e.form.forEach(function(t){return t.no_signout=!1}),t.next=5,n.default.set(this.$data,"form",e.form);case 5:return t.next=7,n.default.set(this.$data,"today",e.today);case 7:return t.next=9,n.default.set(this.$data,"submittedToday",e.submittedToday);case 9:this.show=!this.submittedToday,t.next=14;break;case 12:i.default.setError("You cannot create attendance for a branch other than yours",5e3),this.$router.push({path:"../home"});case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),onSave:function(){var t=l(a.default.mark(function t(){var e=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$validator.validateAll().then(function(t){t?e.$network()?(e.$LIPS(!0),e.form.forEach(function(t){return delete t.no_signout}),(0,s.byMethod)(e.method,e.store,{form:e.form}).then(function(t){(t.data.saved||t.data.updated)&&((0,o.log)("Attendance "+e.mode+"d",""+t.employee_id),i.default.setSuccess("Attendance Submitted successfully!",3e3),e.$router.push("/"))}).catch(function(t){422===(t=t.response).status&&i.default.setError(t.data.message?t.data.message:t.data)}).finally(function(){e.$LIPS(!1),e.$scrollToTop()})):e.$networkErr():e.$networkErr("form")});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),clearTime:function(t){this.form[t].arrival_time="",this.form[t].departure_time=""},no_signout:function(t,e){n.default.set(this.$data.form[t],"departure_time",""),n.default.set(this.$data.form[t],"remark",e?"":"Did not sign out.")},fetchAttendanceByDate:function(){var t=this;if(this.newDate){var e=new Date(this.newDate);e<new Date?((e=e.toDateString().split(" ")).shift(),this.form.forEach(function(e){return e.date=t.newDate}),this.submittedToday=!1,this.show=!0,this.today=[].concat(function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(e)).join(" ")):i.default.setError("Sorry you cannot create attendance for a feature date!",2e3)}else i.default.setError("Select date to continue!",2e3);this.$scrollToTop()}}}},ykHC:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"input[data-v-c4f29f9c]{background-color:#fff}.checkbox[data-v-c4f29f9c],.radio[data-v-c4f29f9c]{margin-bottom:0}@media (max-width:990px){.user[data-v-c4f29f9c]{display:none}[type=radio]+label[data-v-c4f29f9c]{font-size:1.2rem}}@media (max-width:600px){.staff_id-sm[data-v-c4f29f9c]{color:#b6a5ab;font-size:1.4rem;float:right}}",""])}});