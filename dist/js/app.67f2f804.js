(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,g=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&g.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f7":function(t,e,a){},1944:function(t,e,a){t.exports=a.p+"img/photo.f27eafc5.jpeg"},"1c9b":function(t,e,a){},"2a64":function(t,e,a){"use strict";a("fec0")},"2aa4":function(t,e,a){},"2fb4":function(t,e,a){},"3c4b":function(t,e,a){"use strict";a("7497")},"44bb":function(t,e,a){"use strict";a("1c9b")},"4e41":function(t,e,a){},"53d7":function(t,e,a){"use strict";a("01f7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Main")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page main"},[a("v-container",[a("div",{staticClass:"main__item"},[a("SearchInput",{attrs:{search:t.searchText},on:{"search-input":t.handleSearchInput}}),a("v-fade-transition",[a("Table",{directives:[{name:"show",rawName:"v-show",value:t.isShowTable,expression:"isShowTable"}],attrs:{itemList:t.packagesList},on:{"set-current-item":t.handleSetCurrentItem}})],1),a("v-fade-transition",[a("Pagination",{directives:[{name:"show",rawName:"v-show",value:t.isShowPagination,expression:"isShowPagination"}],attrs:{currentPage:t.pagination.currentPage,totalPage:t.pagination.totalPage},on:{"change-page":t.handleChangePage}})],1)],1),a("Loader",{attrs:{"is-show-loader":t.isLoading}}),a("Footer"),a("ShowDetailPackage",{attrs:{"dialog-data":t.currentItem},on:{"close-dialog":t.handleSetCurrentItem}})],1)],1)},o=[],c=a("5530"),l=(a("ac1f"),a("841c"),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;n&&clearTimeout(n),n=setTimeout((function(){t(),clearTimeout(n)}),e)}),u=a("2f62"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer glassmorphism-box"},[n("v-footer",{attrs:{padless:t.isExtraSmallScreen}},[n("v-card",{attrs:{color:"transparent"}},[n("v-col",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{order:"2","order-sm":"1",cols:"12",sm:"8"}},[n("v-card-title",{staticClass:"text-h5",domProps:{textContent:t._s("Maksym Rakomin")}}),n("v-card-subtitle",{domProps:{textContent:t._s("Frontend Developer")}}),n("v-card-actions",{staticClass:"flex-wrap footer__card-actions"},t._l(t.socialLinks,(function(e){return n("v-btn",{key:e.id,staticClass:"mx-0",attrs:{href:e.link,target:"_blank",fab:"",small:"",color:"grey lighten-5"}},[n("v-icon",{attrs:{dark:""}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1)],1),n("v-col",{class:["d-flex",t.getAvatarAlignment],attrs:{order:"1","order-sm":"2",cols:"12",sm:"4"}},[n("v-avatar",{staticClass:"ma-3 flex-wrap",attrs:{size:"125",tile:""}},[n("v-img",{attrs:{src:a("1944")}})],1)],1)],1)],1)],1)],1)],1)},g=[],h=[{id:1,title:"telegram",link:"https://t.me/maksym_rakomin",icon:"$telegram"},{id:2,title:"github",link:"https://github.com/maksym-rakomin",icon:"mdi-github"},{id:3,title:"linkedin",link:"https://www.linkedin.com/in/maksym-rakomin/",icon:"mdi-linkedin"},{id:4,title:"mail",link:"mailto:maksym.rakomin@gmail.com",icon:"mdi-email"},{id:5,title:"mail",link:"tel:380676637584",icon:"mdi-phone"}],f={name:"Footer",data:function(){return{socialLinks:h}},computed:{isExtraSmallScreen:function(){return this.$vuetify.breakpoint.xs},getAvatarAlignment:function(){return this.isExtraSmallScreen?"justify-start":"justify-end"}}},p=f,m=(a("53d7"),a("2877")),v=a("6544"),b=a.n(v),k=a("8212"),P=a("8336"),x=a("b0af"),_=a("99d9"),y=a("62ad"),w=a("553a"),S=a("132d"),C=a("adda"),L=a("0fd9"),j=Object(m["a"])(p,d,g,!1,null,null,null),T=j.exports;b()(j,{VAvatar:k["a"],VBtn:P["a"],VCard:x["a"],VCardActions:_["a"],VCardSubtitle:_["b"],VCardTitle:_["c"],VCol:y["a"],VFooter:w["a"],VIcon:S["a"],VImg:C["a"],VRow:L["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-overlay",{attrs:{value:t.isShowLoader}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)},V=[],I={props:{isShowLoader:{type:Boolean,default:!1}},name:"Loader"},D=I,$=a("a797"),A=a("490a"),E=Object(m["a"])(D,O,V,!1,null,null,null),M=E.exports;b()(E,{VOverlay:$["a"],VProgressCircular:A["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination glassmorphism-box"},[a("v-pagination",{attrs:{circle:"",value:t.currentPage,length:t.totalPage,"total-visible":9},on:{input:t.handleSetPage}})],1)},N=[],B=(a("a9e3"),{name:"Pagination",props:{currentPage:{type:Number,default:1},totalPage:{type:Number,default:0}},methods:{handleSetPage:function(t){this.$emit("change-page",{page:t})}}}),z=B,R=(a("5eaf"),a("891e")),J=Object(m["a"])(z,F,N,!1,null,null,null),U=J.exports;b()(J,{VPagination:R["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-input glassmorphism-box"},[a("v-text-field",{attrs:{label:"Search...","hide-details":"auto"},on:{input:t.handleSearchInput},model:{value:t.searchLocal,callback:function(e){t.searchLocal=e},expression:"searchLocal"}})],1)},q=[],G={name:"SearchInput",props:{search:{type:String,default:""}},data:function(){return{searchLocal:""}},watch:{search:{handler:function(t){this.searchLocal=t},immediate:!0}},methods:{handleSearchInput:function(){this.$emit("search-input",{search:this.searchLocal})}}},H=G,K=(a("3c4b"),a("8654")),Q=Object(m["a"])(H,Z,q,!1,null,null,null),W=Q.exports;b()(Q,{VTextField:K["a"]});var X,Y,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"show-detail-package text-center"},[a("v-dialog",{attrs:{fullscreen:t.isFullscreenDialog,width:"70%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" Detailed information about the "+t._s(t.getName)+" package ")]),a("v-simple-table",{staticClass:"show-detail-package__table",scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",t._l(t.getParamsList,(function(e){return a("tr",{key:e},[a("td",{staticClass:"show-detail-package__td"},[t._v(t._s(e))]),a("td",{staticClass:"show-detail-package__td"},[a("ShowDialogsTableCell",{attrs:{data:t.getValue(e)}})],1)])})),0)]},proxy:!0}])}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.handleCloseDialog}},[t._v(" Ok ")])],1)],1)],1)],1)},et=[],at=(a("b0c0"),a("b64b"),a("53ca")),nt=(a("d81d"),{name:"ShowDialogsTableCell",props:{data:{type:[String,Array,Number,Object],default:""}},methods:{checkIsObject:function(t){return"object"===Object(at["a"])(t)&&null!==t}},render:function(t){var e=this,a=[this.data];return Array.isArray(this.data)?(a=this.data.map((function(a){return e.checkIsObject(a)?Object.keys(a).map((function(e){return t("div",a[e])})):t("div",a)})),t("div",{},a)):(this.checkIsObject(this.data)&&(a=Object.keys(this.data).map((function(a){return t("div",e.data[a])}))),t("div",{},a))}}),it=nt,rt=Object(m["a"])(it,X,Y,!1,null,null,null),st=rt.exports,ot={name:"ShowDetailPackage",components:{ShowDialogsTableCell:st},props:{dialogData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!0}},computed:{getName:function(){var t,e;return(null===(t=this.dialogData)||void 0===t||null===(e=t.package)||void 0===e?void 0:e.name)||""},getParamsList:function(){var t;return Object.keys((null===(t=this.dialogData)||void 0===t?void 0:t.package)||{})||[]},isFullscreenDialog:function(){return this.$vuetify.breakpoint.xs}},watch:{dialogData:{handler:function(t){this.dialog=Object.keys(t).length>0},immediate:!0}},methods:{handleCloseDialog:function(){this.$emit("close-dialog",{})},getValue:function(t){return this.dialogData.package[t]}}},ct=ot,lt=(a("44bb"),a("169a")),ut=a("1f4f"),dt=a("2fa4"),gt=Object(m["a"])(ct,tt,et,!1,null,null,null),ht=gt.exports;b()(gt,{VBtn:P["a"],VCard:x["a"],VCardActions:_["a"],VCardTitle:_["c"],VDialog:lt["a"],VSimpleTable:ut["a"],VSpacer:dt["a"]});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-result glassmorphism-box"},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),a("th",{staticClass:"text-left"},[t._v("Version")]),a("th",{staticClass:"text-left"},[t._v("Publisher")])])]),a("tbody",t._l(t.itemList,(function(e){return a("tr",{key:e.package.name,on:{click:function(a){return t.handleClickTableItem(e)}}},[a("td",[t._v(t._s(e.package.name))]),a("td",[t._v(t._s(e.package.version))]),a("td",[a("div",[t._v(t._s(e.package.publisher.username))]),a("div",[t._v(t._s(e.package.publisher.email))])])])})),0)]},proxy:!0}])})],1)},pt=[],mt={name:"Table",props:{itemList:{type:Array,default:function(){return[]}}},methods:{handleClickTableItem:function(t){this.$emit("set-current-item",t)}}},vt=mt,bt=(a("d143"),Object(m["a"])(vt,ft,pt,!1,null,null,null)),kt=bt.exports;b()(bt,{VSimpleTable:ut["a"]});var Pt={name:"Main",components:{ShowDetailPackage:ht,Loader:M,Pagination:U,Table:kt,SearchInput:W,Footer:T},data:function(){return{currentItem:{}}},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])({packagesList:"getPackagesList",searchText:"getSearchText",pagination:"getPagination",isLoading:"getIsLoading"})),{},{actualSearchText:{get:function(){return this.searchText},set:function(t){this.setSearchText(t)}},isShowTable:function(){return this.packagesList.length>0},isShowPagination:function(){return this.isShowTable&&this.pagination.totalPage*this.pagination.perPage>this.pagination.perPage}}),mounted:function(){this.fetchPackagesList()},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(u["b"])({fetchPackagesList:"fetchPackagesList"})),Object(u["d"])({setSearchText:"setSearchText",setCurrentPage:"setCurrentPage"})),{},{handleSearchInput:function(t){var e=t.search;this.actualSearchText=e,1!==this.pagination.currentPage&&this.setCurrentPage(1),this.fetchPackages()},handleChangePage:function(t){var e=t.page;this.setCurrentPage(e),this.fetchPackages()},fetchPackages:function(){l(this.fetchPackagesList,700)},handleSetCurrentItem:function(t){this.currentItem=t}})},xt=Pt,_t=(a("d154"),a("a523")),yt=a("0789"),wt=Object(m["a"])(xt,s,o,!1,null,null,null),St=wt.exports;b()(wt,{VContainer:_t["a"],VFadeTransition:yt["a"]});var Ct={name:"App",components:{Main:St}},Lt=Ct,jt=a("7496"),Tt=Object(m["a"])(Lt,i,r,!1,null,null,null),Ot=Tt.exports;b()(Tt,{VApp:jt["a"]});var Vt=a("2b0e"),It=(a("d3b7"),a("99af"),"https://registry.npmjs.org/-/v1"),Dt="search",$t=a("bc3a"),At=a.n($t),Et=function(t){var e="";for(var a in t)(Boolean(t[a])||0===t[a])&&(e+=e?"&":"?",e+="".concat(a,"=").concat(t[a]));return e},Mt=At.a.create({baseURL:It,timeout:3e4});Mt.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t.response)}));var Ft={get:function(t){return Mt.get("".concat(Dt).concat(Et(t)))}};Vt["a"].use(u["a"]);var Nt=new u["a"].Store({state:{packagesList:[],searchText:"",currentPage:1,perPage:10,totalPackages:0,isLoading:!1},getters:{getPackagesList:function(t){return t.packagesList},getSearchText:function(t){return t.searchText},getPagination:function(t){var e=t.currentPage,a=t.perPage,n=t.totalPackages;return{currentPage:e,perPage:a,totalPage:Math.floor(n/a)}},getIsLoading:function(t){return t.isLoading}},mutations:{setPackagesList:function(t,e){t.packagesList=e},setSearchText:function(t,e){t.searchText=e},setTotalPackages:function(t,e){t.totalPackages=e},setCurrentPage:function(t,e){t.currentPage=e},setloading:function(t,e){t.isLoading=e}},actions:{fetchPackagesList:function(t){var e=t.commit,a=t.state,n={from:a.currentPage*a.perPage,size:a.perPage,text:a.searchText};e("setloading",!0),Ft.get(n).then((function(t){var a,n,i,r;e("setPackagesList",null!==(a=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.objects)&&void 0!==a?a:[]),e("setTotalPackages",null!==(i=null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.total)&&void 0!==i?i:0)})).catch((function(t){return console.error(t.message)})).finally((function(){return e("setloading",!1)}))}}}),Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"custom-icon-telegram",attrs:{id:"mdi-telegram",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"}})])},zt=[],Rt={name:"IconTelegram"},Jt=Rt,Ut=(a("2a64"),Object(m["a"])(Jt,Bt,zt,!1,null,null,null)),Zt=Ut.exports,qt=a("f309");Vt["a"].use(qt["a"]);var Gt=new qt["a"]({icons:{iconfont:"mdi",values:{telegram:{component:Zt}}}});a("2fb4");Vt["a"].config.productionTip=!1,new Vt["a"]({store:Nt,vuetify:Gt,render:function(t){return t(Ot)}}).$mount("#app")},"5eaf":function(t,e,a){"use strict";a("2aa4")},"68d1":function(t,e,a){},7497:function(t,e,a){},d143:function(t,e,a){"use strict";a("4e41")},d154:function(t,e,a){"use strict";a("68d1")},fec0:function(t,e,a){}});
//# sourceMappingURL=app.67f2f804.js.map