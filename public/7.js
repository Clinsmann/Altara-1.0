webpackJsonp([7],{"+O4B":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[e._v(e._s(e._f("capitalize")(e.title)))]),e._v(" "),e.to?r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:e.to}},[e._v(e._s(e.buttonTitle))])],1):e._e()])])])},staticRenderFns:[]}},"3q5L":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"position-relative",class:e.open?"typeahead typeahead__open":"typeahead"},[r("div",{ref:"toggle",staticClass:"typeahead__toggle",on:{mousedown:function(t){return t.preventDefault(),e.toggle(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"search",staticClass:"typeahead__search",attrs:{type:"text"},domProps:{value:e.search},on:{blur:e.onBlur,focus:e.onFocus,keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.onDownKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onEnterKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.onEscape(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.onUpKey(t):null}],input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),r("span",{ref:"text",staticClass:"typeahead__text"},[e._v("\n        "+e._s(e.displayText)+"\n     ")])]),e._v(" "),e.open?r("ul",{staticClass:"typeahead__list"},e._l(e.filteredOptions,function(t,a){return r("li",{key:a,staticClass:"typeahead__item"},[r("a",{staticClass:"typeahead__link",class:[e.selectIndex===a?"typeahead__active":""],on:{mousedown:function(r){r.preventDefault(),e.select(t)}}},[e._v("\n                "+e._s(t[e.caption])+"\n            ")])])})):e._e()])},staticRenderFns:[]}},EJ7O:function(e,t,r){var a=r("VU/8")(r("oKx2"),r("+O4B"),!1,null,null,null);e.exports=a.exports},GqYo:function(e,t,r){var a=r("VU/8")(r("MmHb"),r("3q5L"),!1,null,null,null);e.exports=a.exports},MmHb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("nv24");t.default={props:{options:{type:Array,default:function(){return[]}},caption:{type:[String,Number],default:null},value:{type:[String,Number],default:null}},data:function(){return{open:!1,selectIndex:0,displayText:"",search:""}},computed:{filteredOptions:function(){var e=this,t=new RegExp(this.search,"i");return this.options.filter(function(r){return t.test(r.id)||t.test(r[e.caption])})}},watch:{value:function(e){e&&this.select(this.options.find(function(t){return t.id===e}))}},methods:{onDownKey:function(){this.filteredOptions.length-1>this.selectIndex&&this.selectIndex++},onUpKey:function(){this.selectIndex>0&&this.selectIndex--},onEnterKey:function(){var e=this.filteredOptions[this.selectIndex];e&&this.select(e)},select:function(e){this.displayText=e[this.caption],this.$emit("input",e.id),this.$refs.search.blur()},toggle:function(e){e.target!==this.$refs.toggle&&e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]||(this.open?e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]&&this.$refs.search.blur():this.$refs.search.focus())},onFocus:function(){this.open=!0},onBlur:function(){this.search="",this.open=!1},onEscape:function(){this.$refs.search.blur()}},created:function(){var e=this;a.EventBus.$on("clearTypeAhead",function(){return e.displayText=null})}}},U5lv:function(e,t,r){var a=r("VU/8")(r("rMhB"),r("gFyd"),!1,null,null,null);e.exports=a.exports},gFyd:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[r("custom-header",{attrs:{to:"/log/products",title:e.mode+" product","button-title":"view Products!"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Product name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{disabled:"",placeholder:"product name",type:"text"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),e.error.name?r("small",[e._v(e._s(e.error.name[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Product feature")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.feature,expression:"form.feature"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{name:"feature",placeholder:"product feature",type:"text"},domProps:{value:e.form.feature},on:{input:function(t){t.target.composing||e.$set(e.form,"feature",t.target.value)}}}),e._v(" "),e.errors.first("feature")?r("small",[e._v(e._s(e.errors.first("feature")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Brand ID")]),e._v(" "),r("typeahead",{attrs:{options:e.brands,caption:"name"},model:{value:e.form.brand_id,callback:function(t){e.$set(e.form,"brand_id",t)},expression:"form.brand_id"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Category ID")]),e._v(" "),r("typeahead",{attrs:{options:e.categories,caption:"name"},model:{value:e.form.category_id,callback:function(t){e.$set(e.form,"category_id",t)},expression:"form.category_id"}})],1),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Retail Price")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.retail_price,expression:"form.retail_price"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{name:"price",placeholder:"retail price",type:"number"},domProps:{value:e.form.retail_price},on:{input:function(t){t.target.composing||e.$set(e.form,"retail_price",t.target.value)}}}),e._v(" "),e.errors.first("price")?r("small",[e._v(e._s(e.errors.first("price")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},["edit"===e.mode?r("router-link",{staticClass:"mx-5 text-link mt-4 pt-2",attrs:{to:"/log/products"}},[e._v("\n                            Cancel\n                        ")]):e._e(),e._v(" "),r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            "+e._s(e._f("capitalize")(e.mode))+" Product "),r("i",{staticClass:"far fa-paper-plane ml-1"})])],1)])])])],1)])},staticRenderFns:[]}},ic49:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,a.post)("/api/log",{action:e,description:t})};var a=r("p/p5")},nv24:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventBus=void 0;var a,n=r("I3G/"),o=(a=n)&&a.__esModule?a:{default:a};t.EventBus=new o.default},oKx2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",buttonTitle:null,to:null}}},rMhB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(r("I3G/")),n=r("ic49"),o=c(r("K23+")),s=r("p/p5"),i=c(r("GqYo")),l=c(r("EJ7O"));function c(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Typeahead:i.default,CustomHeader:l.default},props:{},data:function(){return{form:{},categories:[],brands:[],mode:null,error:{},show:!1,store:"/api/product",method:"POST"}},beforeRouteEnter:function(e,t,r){(0,s.get)(function(e){return{create:"/api/product/create",edit:"/api/product/"+e.params.id+"/edit"}[e.meta.mode]}(e)).then(function(e){var t=e.data;return r(function(e){return e.prepareForm(t)})}).catch(function(){return r(function(){return o.default.setError("Error Preparing form")})})},methods:{prepareForm:function(e){a.default.set(this.$data,"mode",this.$route.meta.mode),a.default.set(this.$data,"form",e.form),a.default.set(this.$data,"brands",e.brands),a.default.set(this.$data,"categories",e.categories),"edit"===this.mode&&(this.store="/api/product/"+this.$route.params.id,this.method="PUT"),this.show=!0},onSave:function(){var e=this;this.$validator.validateAll().then(function(t){t?e.$network()?(e.$LIPS(!0),(0,s.byMethod)(e.method,e.store,e.form).then(function(t){var r=t.data;(r.saved||r.updated)&&((0,n.log)(r.log,r.staff_id),a.default.set(e.$data,"form",r.form),o.default.setSuccess(r.message,5e3),r.updated&&e.$router.push("/log/products"))}).catch(function(t){var r=t.response,a=r.data;422===r.status&&(e.error=a.errors?a.errors:a,e.$networkErr("unique"))}).finally(function(){e.$scrollToTop(),e.$LIPS(!1)})):e.$networkErr():e.$networkErr("form")})}},watch:{form:{handler:function(e){var t=this.brands.find(function(t){return t.id===e.brand_id}),r=this.categories.find(function(t){return t.id===e.category_id});a.default.set(this.$data.form,"name",e.feature+" "+(t?t.name:"")+" "+(r?r.name:""))},deep:!0}}}}});