webpackJsonp([25],{"24V1":function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"profile-view"}},[t("router-view")],1)},staticRenderFns:[]}},RXsi:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=r("K23+"),a=(o=s)&&o.__esModule?o:{default:o};t.default={beforeCreate:function(){var e=parseInt(localStorage.getItem("role"));this.$store.dispatch("mutateProfileAccess",e),-1!==this.$store.state.ProfileAccess.indexOf(e)||localStorage.getItem("api_token")||(a.default.setError("You do not have access to that page!"),this.$router.push("/login"))}}},dgKe:function(e,t,r){var o=r("VU/8")(r("RXsi"),r("24V1"),!1,null,null,null);e.exports=o.exports}});