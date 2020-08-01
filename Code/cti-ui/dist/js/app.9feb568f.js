(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],d=0,h=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"028b":function(t,e,n){"use strict";var a=n("e465"),r=n.n(a);r.a},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0f01":function(t,e,n){},"10d9":function(t,e,n){},"2b9a":function(t,e,n){},"49f3":function(t,e,n){"use strict";var a=n("7ca0"),r=n.n(a);r.a},5465:function(t,e,n){"use strict";var a=n("722a"),r=n.n(a);r.a},5655:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("96cf"),n("2fa7")),i=n("bc3a"),c=n.n(i),u=n("2f62");a["default"].use(u["a"]);var l=new u["a"].Store({state:{token:null,menu:""},mutations:{login:function(t,e){t.token=e,localStorage.setItem("auth",e)},logout:function(t){t.token=null,localStorage.removeItem("auth")},menu:function(t,e){t.menu=e}},actions:{login:function(t,e){var n=t.commit;n("login",e)},logout:function(t){var e=t.commit;e("logout")},menu:function(t,e){var n=t.commit;n("menu",e)}},modules:{}});function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={login:function(t){return new Promise((function(e){c.a.post("/cti/auth/login",h({},t)).then((function(t){return t.data})).then((function(t){l.dispatch("login",t.access_token),c.a.interceptors.request.use((function(e){return e.headers={Authorization:"Bearer "+t.access_token},e})),e(!0)})).catch((function(){e(!1)}))}))},saveMenu:function(t){return new Promise((function(e){c.a.post("/cti/menu/save",{menu:t}).then((function(t){return t.data})).then((function(t){e(!0===t)})).catch((function(){e(!1)}))}))},savePage:function(t,e){return new Promise((function(n){c.a.post("/cti/content/save",{id:t,page:e}).then((function(t){return t.data})).then((function(t){n(!0===t)})).catch((function(){n(!1)}))}))},removePage:function(t){return new Promise((function(e){c.a.post("/cti/content/delete",{id:t}).then((function(t){return t.data})).then((function(t){e(!0===t)})).catch((function(){e(!1)}))}))},createPage:function(t,e){return new Promise((function(n){c.a.post("/cti/content/create",{id:t,page:e}).then((function(t){return t.data})).then((function(t){n(!0===t)})).catch((function(){n(!1)}))}))},logout:function(){l.dispatch("logout")},isLoggedIn:function(){var t,e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(t=localStorage.getItem("auth"),null===t){n.next=20;break}return c.a.interceptors.request.use((function(t){return t.headers={Authorization:"Bearer "+localStorage.getItem("auth")},t})),n.prev=3,n.next=6,regeneratorRuntime.awrap(c.a.get("cti/auth/valid").then((function(t){return t.data})));case 6:if(e=n.sent,!e){n.next=11;break}return n.abrupt("return",!0);case 11:return n.abrupt("return",!1);case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n["catch"](3),l.dispatch("logout"),n.abrupt("return",!1);case 18:n.next=22;break;case 20:return l.dispatch("logout"),n.abrupt("return",!1);case 22:case"end":return n.stop()}}),null,null,[[3,14]])}},f={computed:{isLoggedIn:function(){return p.isLoggedIn()}}},m=f,g=(n("034f"),n("2877")),b=Object(g["a"])(m,r,s,!1,null,null,null),v=b.exports,w=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},[n("div",{staticClass:"col-md-6 px-0"},[n("h1",{staticClass:"display-4 font-italic"},[t._v("WELCOME TO C.T.I. CMS")]),n("p",{staticClass:"lead my-3"}),n("p",{staticClass:"lead my-3"},[t._v("Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"primary"},on:{click:t.login}},[t._v("Start Now")])],1)]),t._m(0)])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("tr",[a("td",{attrs:{width:"60%"}},[a("h4",[t._v("Create! Transform! Improve!")]),a("p",[t._v("Whar is C.T.I. CMS? This system allows you to create your website without coding")]),a("div",{staticClass:"text"},[a("span",[t._v("This system will allow you to create a website to solve exactly your tasks."),a("br"),t._v(" C.T.I. CMS is a convenient and functional service for creating high-quality sites. Without knowledge of special technologies, you can get a website with a unique design, original content, convenient modules and the absence of vulnerabilities. You have a clear interface, easy editing mode and ready-made templates at your service . You do not need any experience in a web development, you only need some time and your flight of imagination.")])])]),a("td",{attrs:{width:"40%"}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:n("fbf5")}})])])])])}],x={name:"home",beforeRouteEnter:function(t,e,n){var a;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(p.isLoggedIn());case 2:a=t.sent,!1===a?n():Wt.push({path:"/dashboard"});case 4:case"end":return t.stop()}}))},methods:{login:function(){Wt.push({path:"/login"})}}},_=x,k=(n("69ab"),Object(g["a"])(_,y,C,!1,null,"5d1c18be",null)),E=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("form",{staticClass:"form-signin"},[n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Please sign in")]),n("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Username")]),t.showError?n("b-alert",{attrs:{variant:"danger",show:""}},[t._v("Incorrect credentials")]):t._e(),t.showSuccess?n("b-alert",{attrs:{variant:"success",show:""}},[t._v("You are logged in")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"email",id:"inputUser",placeholder:"Username",required:"",autofocus:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.login}},[t._v("Sign in")]),n("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2019 Hanna Hayrylava")])],1)])},P=[],R={name:"login",data:function(){return{username:null,password:null,showError:!1,showSuccess:!1}},beforeRouteEnter:function(t,e,n){var a;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(p.isLoggedIn());case 2:a=t.sent,!1===a?n():Wt.push({path:"/dashboard"});case 4:case"end":return t.stop()}}))},methods:{login:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(p.login({username:this.username,password:this.password}));case 2:t=e.sent,t?(this.showError=!1,this.showSuccess=!0,setTimeout((function(){Wt.push({path:"/dashboard"})}),2e3)):this.showError=!0;case 4:case"end":return e.stop()}}),null,this)}}},D=R,T=(n("49f3"),Object(g["a"])(D,S,P,!1,null,"8ba36244",null)),O=T.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},[n("div",{staticClass:"col-md-6 px-0"},[n("h1",{staticClass:"display-4 font-italic"},[t._v("Dashboard")]),n("p",{staticClass:"lead my-3"}),n("p",{staticClass:"lead my-3"},[t._v("Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"primary"},on:{click:t.edit}},[t._v("Edit Content")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"info "},on:{click:t.menu}},[t._v("Edit Menu")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"success "},on:{click:t.create}},[t._v("Create Page")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"warning"},on:{click:t.logout}},[t._v("Logout")])],1)]),t._m(0)])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("tr",[a("td",{attrs:{width:"60%"}},[a("h4",[t._v("Create! Transform! Improve!")]),a("p",[t._v("What is C.T.I. CMS? This system allows you to create your website without coding")]),a("div",{staticClass:"text"},[a("span",[t._v("This system will allow you to create a website to solve exactly your tasks."),a("br"),t._v(" C.T.I. CMS is a convenient and functional service for creating high-quality sites. Without knowledge of special technologies, you can get a website with a unique design, original content, convenient modules and the absence of vulnerabilities. You have a clear interface, easy editing mode and ready-made templates at your service . You do not need any experience in a web development, you only need some time and your flight of imagination.")])])]),a("td",{attrs:{width:"40%"}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:n("fbf5")}})])])])])}],M={name:"Dashboard",beforeRouteEnter:function(t,e,n){var a;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(p.isLoggedIn());case 2:a=t.sent,!1===a?Wt.push({path:"/"}):n();case 4:case"end":return t.stop()}}))},methods:{create:function(){Wt.push({path:"/create"})},edit:function(){Wt.push({path:"/edit"})},menu:function(){Wt.push({path:"/menu"})},logout:function(){p.logout(),Wt.push({path:"/"})}}},L=M,z=(n("d4c3"),Object(g["a"])(L,j,I,!1,null,"1cfa2f7f",null)),$=z.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},[n("div",{staticClass:"col-md-6 px-0"},[n("div",{domProps:{innerHTML:t._s(t.menu)}})])]),t.showError?n("b-alert",{attrs:{variant:"danger",show:""}},[t._v("Unknown error occured. Changes hasn't been saved")]):t._e(),t.showSuccess?n("b-alert",{attrs:{variant:"success",show:""}},[t._v("Operation was successful")]):t._e(),t.isIndex()?n("div",{staticClass:"content"},[n("ckeditor",{attrs:{editor:t.editorConstructor,config:t.editorConfig,disabled:t.editorDisabled},on:{ready:t.ready},model:{value:t.editorData,callback:function(e){t.editorData=e},expression:"editorData"}})],1):n("div",{staticClass:"content page"},[n("ckeditor",{attrs:{editor:t.editorConstructor,config:t.editorConfig,disabled:t.editorDisabled},on:{ready:t.ready},model:{value:t.editorData,callback:function(e){t.editorData=e},expression:"editorData"}})],1),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"danger"},on:{click:t.remove}},[t._v("Delete this page")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"success"},on:{click:t.save}},[t._v("Save")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"info"},on:{click:t.close}},[t._v("Close Editor")])],1)},U=[],W=n("3730"),Y=n.n(W),B=n("50cb"),H={getMenu:function(){return new Promise((function(t){c.a.get("/cti/data/menu.html").then((function(t){return t.data})).then((function(e){l.dispatch("menu",e),t(!0)})).catch((function(){t(!1)}))}))},getPage:function(t){return new Promise((function(e){c.a.get("/cti/data/"+t+".html").then((function(t){return t.data})).then((function(t){e(t)})).catch((function(){e(!1)}))}))}},A=n("290f"),N=n("8068"),F=n("85a9"),Q=n("8b25"),J=n("c4b1"),V=n("2d79"),G=n("d4c1"),K=n("f61b"),X=n("4801"),Z=n("62e5"),tt=n("5486"),et=n("e25f"),nt=n("39a0"),at=n("233a"),rt=n("0bf6"),st=n("56b3"),ot=n("7212"),it=n("64f1"),ct=n("643c"),ut=n("f4e9"),lt={name:"Editor",components:{ckeditor:Y.a.component},props:{id:{type:String}},data:function(){return{showError:!1,showSuccess:!1,editorConstructor:B["a"],editorDisabled:!0,editorData:null,editorConfig:{plugins:[A["a"],F["a"],Q["a"],J["a"],Z["a"],V["a"],G["a"],K["a"],X["a"],N["a"],tt["a"],et["a"],nt["a"],at["a"],rt["a"],st["a"],ot["a"],it["a"],ct["a"],ut["a"]],toolbar:{items:["heading","bold","italic","link","fontSize","fontFamily","fontColor","fontBackgroundColor","undo","redo","bulltedList","numberedList","blockQuote","imageUpload","alignment","insertTable"]},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]}}}},computed:{menu:function(){return this.$store.state.menu}},watch:{$route:function(t,e){this.getData()}},beforeRouteEnter:function(t,e,n){var a;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(p.isLoggedIn());case 2:if(a=t.sent,!1!==a){t.next=7;break}Wt.push({path:"/"}),t.next=10;break;case 7:return t.next=9,regeneratorRuntime.awrap(H.getMenu());case 9:n();case 10:case"end":return t.stop()}}))},methods:{close:function(){Wt.push({path:"/"})},isIndex:function(){return!this.id||"index"===this.id},edit:function(){Wt.push({path:"/edit"})},logout:function(){p.logout(),Wt.push({path:"/"})},ready:function(t){this.editorDisabled=!1,this.getData()},getData:function(){var t,e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=this.id,t||(t="index"),n.prev=2,n.next=5,regeneratorRuntime.awrap(H.getPage(t));case 5:if(e=n.sent,!1!==e){n.next=9;break}return Wt.push({path:"/404"}),n.abrupt("return");case 9:this.editorData=e,n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](2),Wt.push({path:"/404"});case 15:case"end":return n.stop()}}),null,this,[[2,12]])},save:function(){var t,e=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(p.savePage(this.id,this.editorData));case 2:t=n.sent,t?(this.showError=!1,this.showSuccess=!0):(this.showError=!0,this.showSuccess=!1),setTimeout((function(){e.showError=!1,e.showSuccess=!1}),3e3);case 5:case"end":return n.stop()}}),null,this)},remove:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.$bvModal.msgBoxConfirm("Do you want to remove this page? This can not be undone!").then((function(e){var n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(!e){a.next=6;break}return a.next=3,regeneratorRuntime.awrap(p.removePage(t.id));case 3:n=a.sent,n?(t.showError=!1,t.showSuccess=!0):(t.showError=!0,t.showSuccess=!1),setTimeout((function(){t.showError=!1,t.showSuccess=!1,Wt.push({path:"/"})}),3e3);case 6:case"end":return a.stop()}}))}));case 1:case"end":return e.stop()}}),null,this)}}},dt=lt,ht=(n("953a"),Object(g["a"])(dt,q,U,!1,null,"5fcbf844",null)),pt=ht.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},[t._m(0),n("b-container",{staticClass:"id-form",attrs:{fluid:""}},[n("b-row",{staticClass:"my-1"},[n("b-col",{attrs:{sm:"1"}},[n("label",{attrs:{for:"id-input"}},[t._v("Page Id:")])]),n("b-col",{attrs:{sm:"9"}},[n("b-form-input",{attrs:{id:"id-input"},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1)],1)],1)],1),t.showError?n("b-alert",{attrs:{variant:"danger",show:""}},[t._v("Unique ID is required. Changes hasn't been saved")]):t._e(),t.showSuccess?n("b-alert",{attrs:{variant:"success",show:""}},[t._v("Changes has been saved")]):t._e(),t.isIndex()?n("div",{staticClass:"content"},[n("ckeditor",{attrs:{editor:t.editorConstructor,config:t.editorConfig,disabled:t.editorDisabled},on:{ready:t.ready},model:{value:t.editorData,callback:function(e){t.editorData=e},expression:"editorData"}})],1):n("div",{staticClass:"content page"},[n("ckeditor",{attrs:{editor:t.editorConstructor,config:t.editorConfig,disabled:t.editorDisabled},on:{ready:t.ready},model:{value:t.editorData,callback:function(e){t.editorData=e},expression:"editorData"}})],1),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"success"},on:{click:t.save}},[t._v("Save")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"info"},on:{click:t.close}},[t._v("Close Editor")])],1)},mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 px-0"},[n("h1",{staticClass:"display-4 font-italic"},[t._v("New Page Editor")])])}],gt={name:"Editor",components:{ckeditor:Y.a.component},data:function(){return{id:null,showError:!1,showSuccess:!1,editorConstructor:B["a"],editorDisabled:!0,editorData:"<h1>New page content</h1>",editorConfig:{plugins:[A["a"],F["a"],Q["a"],J["a"],Z["a"],V["a"],G["a"],K["a"],X["a"],N["a"],tt["a"],et["a"],nt["a"],at["a"],rt["a"],st["a"],ot["a"],it["a"],ct["a"],ut["a"]],toolbar:{items:["heading","bold","italic","link","fontSize","fontFamily","fontColor","fontBackgroundColor","undo","redo","bulltedList","numberedList","blockQuote","imageUpload","alignment","insertTable"]},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]}}}},beforeRouteEnter:function(t,e,n){var a;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(p.isLoggedIn());case 2:a=t.sent,!1===a?Wt.push({path:"/"}):n();case 4:case"end":return t.stop()}}))},methods:{close:function(){Wt.push({path:"/"})},isIndex:function(){return!this.id||"index"===this.id},edit:function(){Wt.push({path:"/edit"})},logout:function(){p.logout(),Wt.push({path:"/"})},ready:function(t){this.editorDisabled=!1},save:function(){var t,e=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(this.id){n.next=4;break}return this.showError=!0,this.showSuccess=!1,n.abrupt("return");case 4:return n.next=6,regeneratorRuntime.awrap(p.createPage(this.id,this.editorData));case 6:t=n.sent,t?(this.showError=!1,this.showSuccess=!0):(this.showError=!0,this.showSuccess=!1),setTimeout((function(){e.showError=!1,e.showSuccess=!1,Wt.push({path:"/edit/"+e.id})}),3e3);case 9:case"end":return n.stop()}}),null,this)}}},bt=gt,vt=(n("028b"),Object(g["a"])(bt,ft,mt,!1,null,"cf39a256",null)),wt=vt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),t.showError?n("b-alert",{attrs:{variant:"danger",show:""}},[t._v("Unknown error occured. Changes hasn't been saved")]):t._e(),t.showSuccess?n("b-alert",{attrs:{variant:"success",show:""}},[t._v("Changes has been saved")]):t._e(),n("div",{staticClass:"content"},[n("ckeditor",{attrs:{editor:t.editorConstructor,config:t.editorConfig,disabled:t.editorDisabled},on:{ready:t.ready},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}})],1),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"success"},on:{click:t.save}},[t._v("Save")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"info"},on:{click:t.close}},[t._v("Close Editor")])],1)},Ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},[n("div",{staticClass:"col-md-6 px-0"},[n("h1",{staticClass:"display-4 font-italic"},[t._v("Menu Editor")])])])}],xt={name:"Editor",components:{ckeditor:Y.a.component},data:function(){return{showError:!1,showSuccess:!1,editorConstructor:B["a"],editorDisabled:!0,editorData:null,editorConfig:{plugins:[A["a"],F["a"],Q["a"],J["a"],Z["a"],V["a"],G["a"],K["a"],X["a"],N["a"],tt["a"],et["a"],nt["a"],at["a"],rt["a"],st["a"],ot["a"],it["a"],ct["a"],ut["a"]],toolbar:{items:["heading","bold","italic","link","fontSize","fontFamily","fontColor","fontBackgroundColor","undo","redo","bulltedList","numberedList","blockQuote","imageUpload","alignment","insertTable"]},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]}}}},computed:{menu:{get:function(){return this.$store.state.menu},set:function(t){this.$store.dispatch("menu",t)}}},beforeRouteEnter:function(t,e,n){var a;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(p.isLoggedIn());case 2:if(a=t.sent,!1!==a){t.next=7;break}Wt.push({path:"/"}),t.next=10;break;case 7:return t.next=9,regeneratorRuntime.awrap(H.getMenu());case 9:n();case 10:case"end":return t.stop()}}))},methods:{close:function(){Wt.push({path:"/"})},ready:function(t){this.editorDisabled=!1,this.editorData=this.menu},save:function(){var t,e=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(p.saveMenu(this.menu));case 2:t=n.sent,t?(this.showError=!1,this.showSuccess=!0):(this.showError=!0,this.showSuccess=!1),setTimeout((function(){e.showError=!1,e.showSuccess=!1}),3e3);case 5:case"end":return n.stop()}}),null,this)}}},_t=xt,kt=(n("5465"),Object(g["a"])(_t,yt,Ct,!1,null,"48a15c0a",null)),Et=kt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},[n("div",{staticClass:"col-md-6 px-0"},[n("div",{domProps:{innerHTML:t._s(t.menu)}})])]),t.isIndex()?n("div",{staticClass:"content"},[n("div",{domProps:{innerHTML:t._s(t.page)}})]):n("div",{staticClass:"content page"},[n("div",{domProps:{innerHTML:t._s(t.page)}})]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"info"},on:{click:t.close}},[t._v("Close Viewer")])],1)},Pt=[],Rt={name:"ViewSite",props:{id:{type:String}},data:function(){return{page:""}},computed:{menu:function(){return this.$store.state.menu}},watch:{$route:function(t,e){this.getData()}},beforeRouteEnter:function(t,e,n){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(H.getMenu());case 2:n();case 3:case"end":return t.stop()}}))},methods:{isIndex:function(){return!this.id||"index"===this.id},close:function(){Wt.push({path:"/"})},getData:function(){var t,e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=this.id,t||(t="index"),n.prev=2,n.next=5,regeneratorRuntime.awrap(H.getPage(t));case 5:if(e=n.sent,!1!==e){n.next=9;break}return Wt.push({path:"/404"}),n.abrupt("return");case 9:this.page=e,n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](2),Wt.push({path:"/404"});case 15:case"end":return n.stop()}}),null,this,[[2,12]])}}},Dt=Rt,Tt=(n("c83f"),Object(g["a"])(Dt,St,Pt,!1,null,"7c28fce3",null)),Ot=Tt.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},[n("div",{staticClass:"col-md-6 px-0"},[n("h1",{staticClass:"display-4 font-italic"},[t._v("404 - We hit a snag!")]),n("p",{staticClass:"lead my-3"}),n("p",{staticClass:"lead my-3"},[t._v("This page has been removed or is not yet created")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"primary"},on:{click:t.edit}},[t._v("Edit Content")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"info "},on:{click:t.menu}},[t._v("Edit Menu")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"success "},on:{click:t.create}},[t._v("Create Page")]),n("b-button",{staticClass:"start-btn",attrs:{size:"lg",variant:"warning"},on:{click:t.logout}},[t._v("Logout")])],1)]),t._m(0)])},It=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("tr",[a("td",{attrs:{width:"60%"}},[a("h4",[t._v("Create! Transform! Improve!")]),a("p",[t._v("What is C.T.I. CMS? This system allows you to create your website without coding")]),a("div",{staticClass:"text"},[a("span",[t._v("This system will allow you to create a website to solve exactly your tasks."),a("br"),t._v(" C.T.I. CMS is a convenient and functional service for creating high-quality sites. Without knowledge of special technologies, you can get a website with a unique design, original content, convenient modules and the absence of vulnerabilities. You have a clear interface, easy editing mode and ready-made templates at your service . You do not need any experience in a web development, you only need some time and your flight of imagination.")])])]),a("td",{attrs:{width:"40%"}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:n("fbf5")}})])])])])}],Mt={name:"Page404",beforeRouteEnter:function(t,e,n){var a;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(p.isLoggedIn());case 2:a=t.sent,!1===a?Wt.push({path:"/"}):n();case 4:case"end":return t.stop()}}))},methods:{create:function(){Wt.push({path:"/create"})},edit:function(){Wt.push({path:"/edit"})},menu:function(){Wt.push({path:"/menu"})},logout:function(){p.logout(),Wt.push({path:"/"})}}},Lt=Mt,zt=(n("771f"),Object(g["a"])(Lt,jt,It,!1,null,"7de5e39c",null)),$t=zt.exports;a["default"].use(w["a"]);var qt=[{path:"/",name:"home",component:E},{path:"/login",name:"login",component:O},{path:"/edit",name:"edit",component:pt},{path:"/create",name:"edit",component:wt},{path:"/edit/:id",name:"edit",component:pt,props:!0},{path:"/page/:id",name:"page",component:pt,props:!0},{path:"/site/",name:"index",component:Ot,props:!0},{path:"/site/:id",name:"site",component:Ot,props:!0},{path:"/menu",name:"menu",component:Et},{path:"/dashboard",name:"dashboard",component:$},{path:"404",component:$t},{path:"*",component:$t}],Ut=new w["a"]({mode:"hash",base:"/",routes:qt}),Wt=Ut,Yt=n("5f5b");n("f9e3"),n("2dd8"),n("10d9");a["default"].use(Yt["a"]),a["default"].config.productionTip=!1,new a["default"]({router:Wt,store:l,render:function(t){return t(v)}}).$mount("#app")},"69ab":function(t,e,n){"use strict";var a=n("2b9a"),r=n.n(a);r.a},"6e32":function(t,e,n){},"722a":function(t,e,n){},"771f":function(t,e,n){"use strict";var a=n("6e32"),r=n.n(a);r.a},"7ca0":function(t,e,n){},"85ec":function(t,e,n){},"953a":function(t,e,n){"use strict";var a=n("5655"),r=n.n(a);r.a},c83f:function(t,e,n){"use strict";var a=n("0f01"),r=n.n(a);r.a},d38b:function(t,e,n){},d4c3:function(t,e,n){"use strict";var a=n("d38b"),r=n.n(a);r.a},e465:function(t,e,n){},fbf5:function(t,e,n){t.exports=n.p+"img/home.54281d53.png"}});
//# sourceMappingURL=app.9feb568f.js.map