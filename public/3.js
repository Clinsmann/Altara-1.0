webpackJsonp([3],{"7elN":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=a("p/p5"),n=a("K23+"),i=(r=n)&&r.__esModule?r:{default:r},o=a("nv24");function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.default={props:{mode:null,index:null,startIndex:{default:1},dva_id:null,paySummary:null,repaymentLevel:null,order:{default:{}},isRepaymentValid:null},data:function(){return{selected:!1}},created:function(){o.EventBus.$on("selectOrderItem",this.toggleSelect)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.reminder.order,delete this.reminder.canBeSelected,(0,s.post)("/api/reminder",{reminders:[this.reminder]}).then(function(e){return e.data.saved?t.logPromiseCall():t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.promiseCall.date?(0,s.post)("/api/promise_call",this.promiseCall).then(function(a){return a.data.saved?t.done(e+" Promise call added!"):t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},isReminderSent:function(){var t=this,e=!0;if(this.order.reminders.length>0){var a=this.$getDate();this.order.reminders.forEach(function(r){var s=r.date.split(" "),n=s[0].split("-"),i=s[1].split(":"),o=[].concat(l(n),l(i)).map(function(t){return parseInt(t,10)});t.$getDate(new Date(Date.UTC.apply(Date,l(o))),!1)===a&&(e=!1)})}return e},toggleSelect:function(t){this.reminder.canBeSelected&&(this.selected=t,this.$emit("updateReminderList",this.reminder,t))}},computed:{reminder:function(){var t={customer_id:this.order.customer.id,order_id:this.order.id,repayment_level:this.repaymentLevel,dva_id:this.dva_id,type:this.mode,canBeSelected:this.isReminderSent()};return"sms"===this.mode&&(t.contacts=this.order.customer.telephone,t.sms_id=null),t},promiseCall:function(){return{order_id:this.order.id,user_id:this.dva_id,customer_id:this.order.customer.id,date:null}},getFinancialStatus:function(){return this.isRepaymentValid?"Paid: "+this.paySummary.amountPaid+" | Debt: "+this.paySummary.outstandingDebt:"no detail!"}}}},"8yhK":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".table-separator[data-v-f4c329a8]{border-top:2px solid #dee1e4}",""])},"9OGK":function(t,e,a){var r=a("iEej");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("134b9e54",r,!0,{})},AiEC:function(t,e,a){var r=a("8yhK");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("1005bf1b",r,!0,{})},PTgL:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("div",{staticClass:"tab-content mt-1 attendance-body"},[a("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,r){return a("order-item",{key:e.id,attrs:{index:r,"start-index":t.startIndex,order:e,dva_id:t.dva_id,"is-repayment-valid":t.isRepaymentValid(e),"pay-summary":t.calcPaymentSummary(e),"repayment-level":t.getRepaymentLevel(e),mode:t.mode},on:{done:function(e){t.fetchList(t.list)},updateReminderList:t.updateReminder,display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?a("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):a("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?a("div",{staticClass:"mt-1 attendance-body"},[a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Order ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),a("tr",[a("th",[t._v("Order date")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),a("tr",[a("th",[t._v("Product")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),a("tr",[a("th",[t._v("Repayment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.repayment_amount)))])]),t._v(" "),a("tr",[a("th",[t._v("Down Payment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])]),t._v(" "),a("tr",[a("th",[t._v("Discount (%)")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),a("tr",[a("th",[t._v("Sale Type")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),a("tr",[a("th",[t._v("Total amount to Pay")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))])]),t._v(" "),a("tr",[a("th",[t._v("Processed by")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Customer ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),a("tr",[a("th",[t._v("Full Name")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),a("tr",[a("th",[t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),a("tr",[a("th",[t._v("Category")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_first_name+" "+t.currentOrder.customer.work_guarantor_last_name+" - "+t.currentOrder.customer.work_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_first_name+" "+t.currentOrder.customer.personal_guarantor_last_name+" - "+t.currentOrder.customer.personal_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Verified by")]),t._v(" "),a("td",[a("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.currentOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._l(t.repaymentCaption(t.currentOrder),function(e){return a("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"payment_methods"))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                    -\n                                    ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                ")]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.product_price))))]),t._v(" "),a("td",[t._v("Total Paid")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.amountPaid))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountAmount))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountedTotal))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.outstandingDebt))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.down_payment))))]),t._v(" "),a("td",[t._v("Total Plus Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.totalPlusDefault))]),t._v(" "),a("td",[t._v("Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.defaultFee))])])])])])]),t._v(" "),t._m(6)]):t._e()])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?a("table",{staticClass:"table table-bordered table-striped"},[t._m(8),t._v(" "),a("tbody",t._l(t.currentOrder.reminders,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),a("td",[t._v(t._s(e.user.full_name))])])}))]):a("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(9)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("S/N")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("SMS/Feedback")]),t._v(" "),a("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},TZKk:function(t,e,a){var r=a("VU/8")(a("7elN"),a("YtoT"),!1,null,null,null);t.exports=r.exports},XPj8:function(t,e,a){var r=a("VU/8")(a("aSpy"),a("PTgL"),!1,function(t){a("AiEC")},"data-v-f4c329a8",null);t.exports=r.exports},YtoT:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?a("span"):t.reminder.canBeSelected&&["collection","recovery","call"].includes(t.mode)?a("span",{staticClass:"user mx-auto waiting-reminder",on:{click:t.logReminder}},[a("i",{staticClass:"fas fa-hourglass-start"})]):t.reminder.canBeSelected&&"sms"===t.mode?a("div",{staticClass:"d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?t._i(t.selected,null)>-1:t.selected},on:{click:function(e){t.toggleSelect(!t.selected)},change:function(e){var a=t.selected,r=e.target,s=!!r.checked;if(Array.isArray(a)){var n=t._i(a,null);r.checked?n<0&&(t.selected=a.concat([null])):n>-1&&(t.selected=a.slice(0,n).concat(a.slice(n+1)))}else t.selected=s}}})]):a("span",{staticClass:"user mx-auto sent-reminder"},[a("i",{staticClass:"fas fa-check"})]),t._v(" "),a("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order_date)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.getFinancialStatus)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[a("span",{staticClass:"present"},[a("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"yes",id:"present"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),a("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"no",id:"absent"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reminder.feedback,expression:"reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.reminder.canBeSelected},domProps:{value:t.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.promiseCall.date,expression:"promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.reminder.canBeSelected},domProps:{value:t.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},aSpy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s=d(a("I3G/")),n=d(a("K23+")),i=a("m2tk"),o=a("p/p5"),l=d(a("TZKk"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{OrderItem:l.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:{},show:!1,banks:null,reminder:[],currentOrder:{},paymentSummary:null,payment_methods:null,showModalContent:!1}},methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1,this.banks=t.banks,this.dva_id=t.dva_id,this.payment_methods=t.payment_methods,this.orders=t.orders.filter(function(a){var r=e.getCountAndRepaymentData(a).repaymentData,s=e.amortizationPlan(a),n=s.count,i=s.interval;return(!(!e.$store.getters.auth("DVALead")&&!e.$store.getters.auth("FSLLead"))||parseInt(a.store_product.store_name)===t.branch)&&function(){if([8,1].includes(e.list)||"normal-list"===e.mode)return!0;for(var t=void 0,s=void 0,o=[],l=new Date,d=1===l.getDay()||[9,10,11,12,13].includes(e.list)?3:1,c=1;c<n+1;c++){var u=e.$getColumn(c);if(!r[u+"_pay"]){t=e.generateDates({startDate:a.order_date,interval:i,count:n})[c-1];break}}switch(e.list){case 2:s=7;break;case 3:s=3;break;case 4:s=0;break;case 5:s=1;break;case 6:s=5;break;case 7:s=31;break;case 9:s=38;break;case 10:s=45;break;case 11:s=61;break;case 12:s=75;break;case 13:s=90;break;case 14:s=121}if(["collection","recovery","call"].includes(e.mode))for(var m=0;m<d;m++)o.push(e.$getDate(l.addDays(-(m+s))));if("sms"===e.mode)for(var v=0;v<d;v++)o.push(e.$getDate(l.addDays(v+s)));return o.includes(t)}()}),this.orders.length&&(this.show=!0),this.$LIPS(!1)},isOrderFormal:function(t){return["formal","salaried"].includes(t.customer.employment_status.toLowerCase())},generateDates:function(t){for(var e=t.startDate,a=t.interval,r=t.count,s=[],n=0;n<r;n++){var i=new Date(e).addDays((n+1)*a),o=this.$getDate(i);s.push(o)}return s},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback},fetchList:function(t){var e,a=this;this.$LIPS(!0),(0,o.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var r=e.data;if(8===t){var s=[];r.orders.forEach(function(t){return s.push(t.order)}),r.orders=s}a.prepareForm(r)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isRepaymentValid:function(t){return!(!t.repayment_formal&&!t.repayment_informal)},displayDetails:function(t,e){return this.paymentSummary=this.calcPaymentSummary(t),s.default.set(this.$data,"currentOrder",t),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e={count:this.amortizationPlan(t).count};return null!=t.repayment_formal&&(e.repaymentData=t.repayment_formal),null!=t.repayment_informal&&(e.repaymentData=t.repayment_informal),e},calcPaymentSummary:function(t){var e=this,a=[],r=function(t){return e.$formatCurrency(t)},s=this.$roundDownAmt(parseInt(t.down_payment)),n=this.amortizationPlan(t),i=n.count,o=n.interval,l=this.getCountAndRepaymentData(t).repaymentData;if(this.generateDates({startDate:t.order_date,interval:o,count:i}).forEach(function(t,r){return e.isPaymentDue(e.$getDate(new Date(t).addDays(5)))&&a.push({dueDate:t,actualPayDate:l[e.$getColumn(r)+"_date"]})}),l)for(var d=1;d<i+1;d++)s+=this.$roundDownAmt(l[this.$getColumn(d)+"_pay"]);else s=0;var c=t.discount.percentage_discount,u=6===i?.5:1,m=t.repayment_amount*u*(c>0?5===c?1:2:0);m=this.$roundDownAmt(m);var v=500*a.length,_=this.$roundDownAmt(t.product_price-m);return{amountPaid:r(s),discountAmount:r(this.$roundDownAmt(m)),outstandingDebt:r(this.$roundDownAmt(parseInt(t.product_price)-s)),discountedTotal:r(_),defaultFee:r(v),totalPlusDefault:r(_+v)}},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isRepaymentValid(t))return null;var a=[],r=this.getCountAndRepaymentData(t).repaymentData,s=this.amortizationPlan(t),n=s.interval,i=s.count;if(null===e)return this.generateDates({startDate:t.order_date,interval:n,count:i});if("repayments"===e)return new Array(i).fill(this.$roundDownAmt(t.repayment_amount),0,i);for(var o=1;o<i+1;o++)a.push(r[this.$getColumn(o)+e]);return a},getPaymentStatusClasses:function(t){if(!this.isRepaymentValid(t))return null;for(var e=[],a=this.getCountAndRepaymentData(t).repaymentData,r=this.amortizationPlan(t).count,s=this.getRepayment(t),n=1;n<r+1;n++){var i={class:null,icon:null},o=this.$getColumn(n),l=this.isPaymentDue(s[n-1]),d=parseInt(a[o+"_pay"]);d?(i.class="paid",i.icon="fa-check"):l&&!d?(i.class="missed",i.icon="fa-times"):l||(i.class="pending",i.icon="fa-hourglass-start"),e.push(i)}return e},getRepaymentLevel:function(t){if(!this.isRepaymentValid(t))return 0;for(var e=0,a=this.amortizationPlan(t).count,r=this.getCountAndRepaymentData(t).repaymentData,s=1;s<a+1;s++)r[this.$getColumn(s)+"_pay"]>0&&e++;return e+"/"+a},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data[e].find(function(e){return e.id===t}).name:null},updateReminder:function(t,e){if(e)this.reminder.push(t);else{var a=void 0;this.reminder.forEach(function(e,r){return e.order_id===t.order_id&&(a=r)}),this.reminder.splice(a,1)}},processSelected:function(){var t=this;if(this.reminder.length){this.$LIPS(!0);var e=this.reminder.map(function(e){var a=JSON.parse(JSON.stringify(e));return a.order=t.orders.find(function(t){return t.id===e.order_id}),a.message=t.generateCustomMessage(a.order),a});this.sendSMSReminders(e)}else this.$displayErrorMessage("please select at least one!")},sendSMSReminders:function(t){var e=this,a=[];t.forEach(function(r,s){var n=new i.Message(r.message,r.contacts,!1,r.dva_id);n.send(function(r){200===r.status&&(delete n.logToDB,a.push(n)),s+1===t.length&&e.logSentMessages(a,t)})})},logSentMessages:function(t,e){var a=this;t?(0,o.post)("/api/message",{messages:t,bulk:!0}).then(function(t){var r=t.data,s=r.sentAndLogged,n=r.ids;s?a.logSentReminders(e,n):a.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var a=this;e.reverse();var r=JSON.parse(JSON.stringify(t));r.forEach(function(t,a){t.sms_id=e[a],delete t.message,delete t.order,delete t.contacts,delete t.canBeSelected}),e.length>0?(0,o.post)("/api/reminder",{reminders:r}).then(function(t){t.data.saved?(n.default.setSuccess("Reminders have been sent successfully!",5e4),a.fetchList(a.list)):a.$displayErrorMessage("Error sending reminders!"),a.$scrollToTop()}):this.$displayErrorMessage("Error logging sent messages!")},generateCustomMessage:function(t){var e=this,a=t.customer,s=t.store_product,n=t.order_date,i=t.repayment_amount,o=s.product_name,l=a.first_name,d=a.last_name,c=void 0,u=r({startDate:n},this.amortizationPlan(t)),m=this.generateDates(u),v=this.getRepaymentLevel(t).split("/")[0];return 1===this.list?(c="Hello "+l+" "+d+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+o+":%0a",m.length>0&&m.forEach(function(t,a){return c+=e.$getColumn(a+1)+": "+t+" => "+e.$formatCurrency(e.$roundDownAmt(i))+"%0a"})):c="Hello "+l+" "+d+", This is to remind you that your "+this.$getColumn(parseInt(v)+1)+" repayment of "+this.$formatCurrency(this.$roundDownAmt(i))+" for "+o+" will be due on "+m[v]+". we will be expecting you.",c+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."},amortizationPlan:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentOrder,e=void 0,a=void 0;return new Date(t.order_date)<=new Date("2019-07-07")?(null!=t.repayment_formal&&(e=28,a=6),null!=t.repayment_informal&&(e=14,a=12)):this.isBankDraftAvailable(t)&&this.isOrderFormal(t)?(e=28,a=6):(e=14,a=12),{interval:e,count:a}},isBankDraftAvailable:function(){return!1},repaymentCaption:function(t){for(var e=this.amortizationPlan(t).count,a=[],r=1;r<=e;r++){for(var s=this.$getColumn(r).split(""),n=[],i=1;i<=2;i++)n.unshift(s.pop());a.push("<td>"+s.join("")+"<sup>"+n.join("")+"</sup></td>")}return a}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1})}}},dBli:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=a("XPj8"),n=(r=s)&&r.__esModule?r:{default:r},i=a("nv24");function o(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.default={components:{Order:n.default},data:function(){return{listToOrder:null,doSelectAll:!1}},methods:{selectAll:function(){this.doSelectAll=!this.doSelectAll,i.EventBus.$emit("selectOrderItem",this.doSelectAll)},mode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$route.meta.mode.toLowerCase();return t?e===t:e}},computed:{details:function(){var t=1,e=["1<sup>st</sup>","2<sup>nd</sup>","3<sup>rd</sup>"],a=["Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History"];switch(this.mode()){case"call":t=4,e=[].concat(o(e),["Guarantor's","Promise"]),a=[].concat(o(a),["Feedback","Promise Date"]);break;case"collection":t=9,e.splice(2,1),a=[].concat(o(a),["Visited?","Feedback"]);break;case"recovery":t=11,a=[].concat(o(a),["Visited?","Feedback"])}return this.listToOrder||(this.listToOrder=t),{tabs:e,headings:a,list:t}}}}},iEej:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".attendance-head .light-heading[data-v-abd1b7bc]:first-child{max-width:120px}",""])},iNcs:function(t,e,a){var r=a("VU/8")(a("dBli"),a("uH4K"),!1,function(t){a("9OGK")},"data-v-abd1b7bc",null);t.exports=r.exports},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("p/p5");e.Message=function(){function t(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=s,this.message=e,this.logToDB=r,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,s.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var r,s=a("I3G/"),n=(r=s)&&r.__esModule?r:{default:r};e.EventBus=new n.default},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a("tTVk"),n={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t){for(var e=0;e<t.length;e++){var a=t[e],r=n[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(p(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var i=[];for(s=0;s<a.parts.length;s++)i.push(p(a.parts[s]));n[a.id]={id:a.id,refs:1,parts:i}}}}function h(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function p(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(v){var s=l++;r=o||(o=h()),e=g.bind(null,r,s,!1),a=g.bind(null,r,s,!0)}else r=h(),e=function(t,e){var a=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);u.ssrId&&t.setAttribute(m,e.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){d=a,u=r||{};var i=s(t,e);return _(i),function(e){for(var a=[],r=0;r<i.length;r++){var o=i[r];(l=n[o.id]).refs--,a.push(l)}e?_(i=s(t,e)):i=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete n[l.id]}}}};var f,y=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function g(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var n=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},s=0;s<e.length;s++){var n=e[s],i=n[0],o={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};r[i]?r[i].parts.push(o):a.push(r[i]={id:i,parts:[o]})}return a}},uH4K:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{attrs:{id:"reminder"}},[a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("ul",{staticClass:"nav nav-tabs justify-content-center p-0",attrs:{role:"tablist"}},t._l(t.details.tabs,function(e,r){return a("li",{staticClass:"col p-0 nav-item mb-0"},[a("a",{staticClass:"nav-link",class:0===r&&"active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},domProps:{innerHTML:t._s(e+" "+t.mode())},on:{click:function(e){t.listToOrder=t.details.list+r}}})])}))]),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[t.mode("sms")?a("div",{staticClass:"col p-0 text-link",staticStyle:{"max-width":"120px"},on:{click:t.selectAll}},[t._v("\n                    Click to "+t._s(t.doSelectAll?"De-select":"Select")+" all\n                ")]):a("div",{staticClass:"col light-heading"},[t._v("Action")]),t._v(" "),t._l(t.details.headings,function(e){return a("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),a("order",{attrs:{list:t.listToOrder,mode:t.mode()}})],1)])},staticRenderFns:[]}}});