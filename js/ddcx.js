webpackJsonp([2],{102:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"+t.rn}},[t._l(t.querys,function(e,a){return t.isShow(e)?n(t.getItem(e),{key:"cc-"+t.rn+"-"+a,tag:"component",class:t.getComponentClass(e),style:t.getComponentStyle(e),attrs:{item:e}}):t._e()}),t._v(" "),t._l(t.items,function(e,a){return t.isShow(e)?n(t.getItem(e),{key:"cc-"+t.rn+"-"+a,tag:"component",class:t.getComponentClass(e),style:t.getComponentStyle(e),attrs:{item:e,data:t.dataCache[e.index]}}):t._e()})],2)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};e.a=r},19:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(43),r=n.n(a),o=n(102),i=!1,u=function(t){i||n(61)},s=n(1)(r.a,o.a,!1,u,"data-v-3ce1c193",null);s.options.__file="src\\pages\\ddcx.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=s.exports},43:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});a(n(5));var r=a(n(0)),o=n(2),i=a(n(8)),u=a(n(4)),s=n(11);e.default={mixins:[r.default],props:[],data:function(){return{dataCache:[],queryParam:function(){if("function"==typeof getDefQueryParam)return getDefQueryParam((0,s.getConf)())}()||{}}},methods:{isShow:function(t){return!t.toggleShow||this.dataCache[t.index]},getItem:function(t){return(0,i.default)(t.tplid)},queryData:function(){var t=this;this.items.map(function(e){var n=e.index;void 0!=n&&t.sendData(n)})},sendData:function(t){var e=this,n=GetSendData(t,this.queryParam);n[0]&&(0,o.callTqlWrapper)(n[0],n[1],function(a){1==n[1].valueOfJson()[0].tdxOrigin||0==(a=FormatResult(a)).ErrorCode?("function"==typeof SetDataField&&(a=SetDataField(a,t,e)),e.dataCache[t]=a,e.$forceUpdate()):tdxAlert(a.ErrorInfo)})},queryParamChange:function(t){$.extend(this.queryParam,t),this.queryParamChangeReq()},queryParamChangeReq:function(){this.dataCache=[],this.$nextTick(this.queryData)}},computed:{items:function(){return this.tdxConf.items||[]},querys:function(){return this.tdxConf.querys||[]}},created:function(){u.default.$on("mob-bar-tab-item-click",this.queryParamChange),u.default.$on("mob-query-date-change",this.queryParamChange)},mounted:function(){this.htmlColor(),this.autoHeight(),this.queryData()}}},50:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}n(7);a(n(4));var r=n(2);n(6);var o=n(11),i=a(n(19)),u=function(){(0,r.isPtLogin)(function(t,e){if(t)new Vue({el:"#app",data:{},computed:{ViewPage:function(){return i.default}},render:function(t){return t(this.ViewPage)}});else{var n=(0,o.getConf)().loginPage;n?window.location.href=n:tdxAlert("mob_list_xxx.js 中缺少配置项 loginPage")}})};u(),window.tdxActivity=function(){u()},window.tdxRefresh=function(){window.location.href=window.location.href},window.Ret_Query=function(){window.location.href=window.location.href}},61:function(t,e){}},[50]);
//# sourceMappingURL=ddcx.js.map