webpackJsonp([19],{"7Roy":function(t,e,a){var n=a("VU/8")(a("oGME"),a("eRnd"),!1,function(t){a("Px0A")},"data-v-35886efe",null);t.exports=n.exports},Px0A:function(t,e,a){var n=a("vBP8");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("bff28e76",n,!0,{})},eRnd:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"row justify-content-end"},[a("a",{staticClass:"text-link mt-3",attrs:{href:"javascript:"},on:{click:function(e){t.$router.push("attendance/create")}}},[t._v("\n                            click here to create attendance!")])])])])]),t._v(" "),a("div",{staticClass:"mt-5 row attendance-head"},t._l(["Branch","Month","Year"],function(e){return a("div",{staticClass:"col-4 col-sm-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"light-heading"},[a("span",{staticClass:"d-none d-sm-inline"},[t._v("Select")]),t._v(" "+t._s(e))])])])})),t._v(" "),a("div",{staticClass:"mt-2 mt-lg-3 row attendance-head"},[t._l(["branch","month","year"],function(e){return a("div",{staticClass:"col-4 col-sm-3"},[a("div",{staticClass:"row"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.query[e],expression:"query[caption]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select",attrs:{name:e,"data-vv-validate-on":"blur"},on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.query,e,a.target.multiple?n:n[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v(t._s(e))]),t._v(" "),t._l(t.$store.getters.getBranches,function(n){return"branch"===e?a("option",{domProps:{value:n.id}},[t._v("\n                            "+t._s(t._f("capitalize")(n.name))+"\n                        ")]):t._e()}),t._v(" "),t._l(t.$store.getters.getMonths,function(n){return"month"===e?a("option",{domProps:{value:n.id}},[t._v("\n                            "+t._s(n.name)+"\n                        ")]):t._e()}),t._v(" "),t._l(t.$store.getters.getYears,function(n){return"year"===e?a("option",{domProps:{value:n}},[t._v("\n                            "+t._s(n)+"\n                        ")]):t._e()})],2),t._v(" "),t.errors.first(e)?a("small",{staticClass:"text-muted"},[t._v(t._s(t.errors.first(e)))]):t._e()])])}),t._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"row d-flex justify-content-end"},[a("button",{staticClass:"btn btn-primary bg-default mt-0 myBtn",on:{click:function(e){t.fetch()}}},[t._v("View Attendance")])])])],2),t._v(" "),a("div",{staticClass:"attendance-body"},[t.show?a("div",{staticClass:"mt-5 row"},[a("div",{staticClass:"card"},[a("div",{staticClass:"image-and-names float-left"},[a("table",{staticClass:"table table-names"},[a("thead",[a("tr",[a("th",{staticClass:"ml-5"},[t._v("Employee Name")])])]),t._v(" "),a("tbody",t._l(t.attendances,function(e){return a("tr",[a("td",[a("div",{staticClass:"row align-items-center m-0 user-details"},[a("span",{staticClass:"user mx-auto"},[a("i",{staticClass:"user-icon fas fa-user-alt"})]),t._v(" "),a("div",{staticClass:" col user-name"},[t._v(t._s(""+e.full_name))])])])])}))])]),t._v(" "),a("div",{staticClass:"float-left daily-attendance"},[a("table",{staticClass:"table table-details table-bordered"},[a("thead",[a("tr",t._l(t.columns,function(e){return a("th",{staticClass:"text-center"},[a("span",[t._v(t._s(e.month+" "+e.date))]),a("br"),a("span",{staticClass:"light-heading day"},[t._v("\n                                    "+t._s(""+e.dayString)+"\n                                ")])])}))]),t._v(" "),a("tbody",t._l(t.attendances,function(e){return a("tr",t._l(t.columns,function(n){return a("td",{class:t.checkClass(e,n),attrs:{"data-toggle":"tooltip",title:"\n"+(t.isPresent(e,n,"arrival_time")?"Arrival Time : <b>"+t.$timeConvert(t.isPresent(e,n,"arrival_time"))+"</b><br>":"")+"\n"+(t.isPresent(e,n,"departure_time")?"Departure Time: <b>"+t.$timeConvert(t.isPresent(e,n,"arrival_time"))+"</b><br>":"")+"\n<b>"+(t.isPresent(e,n,"is_present")?"Present":"Absent")+"</b>"}},[t._v("\n                                    "+t._s(t.isPresent(e,n))+"\n                                ")])}))}))])])])]):a("div",{staticClass:"row attendance-item p-5 my-5"},[a("span",{staticClass:"no-attendance"},[t._v("Kindly Select Branch, Month and, Year to get started!")])])])])])},staticRenderFns:[]}},oGME:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(a("I3G/")),s=a("uD8u"),r=i(a("TOoT"));function i(t){return t&&t.__esModule?t:{default:t}}var o=function(t){return"/attendance?branch="+t.branch+"&month="+t.month+"&year="+t.year};e.default={data:function(){return{columns:{},show:!1,query:{month:"",branch:"",year:""},attendances:{}}},beforeRouteEnter:function(t,e,a){t.query.branch?(0,s.get)("/api"+o(t.query)).then(function(t){a(function(e){return e.prepareForm(t.data)})}).catch(function(t){a(function(e){return e.handleErr(t)})}):a()},beforeRouteUpdate:function(t,e,a){var n=this;this.show=!1,t.query.branch?(this.$LIPS(!0),(0,s.get)("/api"+o(t.query)).then(function(t){n.prepareForm(t.data),a()}).catch(function(t){n.handleErr(t),a()})):a()},created:function(){this.$prepareBranches(),this.completeQry&&(n.default.set(this.$data.query,"year",this.$route.query.year),n.default.set(this.$data.query,"month",this.$route.query.month),n.default.set(this.$data.query,"branch",this.$route.query.branch))},updated:function(){$('[data-toggle="tooltip"]').tooltip({boundary:"window",html:!0})},methods:{fetch:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$network()?t.$router.push("/hrm"+o(t.query)):t.$networkErr():t.$networkErr("form")})},prepareForm:function(t){t&&(n.default.set(this.$data,"columns",t.columns),n.default.set(this.$data,"attendances",t.attendances),n.default.set(this.$data.query,"branch",t.branch[0].id),this.show=!0),this.$LIPS(!1)},handleErr:function(t){r.default.setError("Error Fetching Attendance")},isPresent:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.attendances.filter(function(t){return t.date===e.fullDate}),s=null;return n.length>0&&(s=a?n[0][a]:n[0].is_present?"P":"A"),s},checkClass:function(t,e){var a=this.isPresent(t,e);return["Sun","Sat"].includes(e.dayString)?"weekend":"P"===a?"present":"A"===a?"absent":""}},computed:{completeQry:function(){return this.$route.query.year&&this.$route.query.month&&this.$route.query.branch},title:function(){var t="Attendance";if(this.completeQry){var e=this.$route.query.month,a=this.$route.query.year;t+=" "+(e?" - "+this.$store.getters.getMonths[parseInt(e)-1].name:"")+" "+(a||"")}return t}}}},vBP8:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".weekend[data-v-35886efe]{background:repeating-linear-gradient(45deg,hsla(44,53%,76%,.2),hsla(44,53%,76%,.2) 2px,transparent 0,transparent 8px),#fffff1}.custom-select[data-v-35886efe],.daily-attendance[data-v-35886efe],.myBtn[data-v-35886efe]{width:75%}.daily-attendance[data-v-35886efe]{overflow-x:scroll}.image-and-names[data-v-35886efe]{width:25%}@media (max-width:990px){.custom-select[data-v-35886efe]{width:90%}.myBtn[data-v-35886efe]{width:100%}.image-and-names[data-v-35886efe]{width:30%}.daily-attendance[data-v-35886efe]{width:70%}}@media (max-width:600px){.daily-attendance[data-v-35886efe],.image-and-names[data-v-35886efe]{width:50%}}",""])}});