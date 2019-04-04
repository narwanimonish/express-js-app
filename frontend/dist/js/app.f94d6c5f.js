(function(e){function t(t){for(var i,n,o=t[0],l=t[1],m=t[2],p=0,d=[];p<o.length;p++)n=o[p],s[n]&&d.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,m||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},s={app:0},r=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var m=0;m<o.length;m++)t(o[m]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("64a9"),s=a.n(i);s.a},1821:function(e,t,a){"use strict";var i=a("2eae"),s=a.n(i);s.a},"2eae":function(e,t,a){},"4ab1":function(e,t,a){"use strict";var i=a("e173"),s=a.n(i);s.a},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("main-menu"),a("router-view")],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"collapse navbar-collapse"},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Employees"}}},[e._v("\n                    Employees\n                ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Weather"}}},[e._v("\n                    Weather Forecast\n                ")])],1)])])])},o=[],l={},m=l,c=a("2877"),p=Object(c["a"])(m,n,o,!1,null,null,null),d=p.exports,u={name:"app",components:{MainMenu:d}},v=u,f=(a("034f"),Object(c["a"])(v,s,r,!1,null,null,null)),b=f.exports,h=a("8c4f"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"emp"},[a("employees-create",{on:{"emp-create":e.createEmp}}),a("br"),a("br"),a("employees-list",{attrs:{emps:e.emps},on:{"emp-delete":e.deleteEmp,"emp-edit":e.editEmp}}),a("employees-edit-modal",{attrs:{emp:e.currEmp,show:e.isEditing},on:{"emp-close-modal":e.closeModal,"emp-save-modal":e.updateEmp}})],1)},y=[],_="http://35.200.220.232:3000/api/",g=_+"employees",C="https://api.openweathermap.org/data/2.5/forecast?q=Mumbai,in&units=metric&appid=",j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"emp-create"},[a("h3",[e._v("Create new Employee")]),a("br"),a("div",{staticClass:"card",staticStyle:{width:"60rem"}},[a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.createEmployee(t)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.name,expression:"emp.name"}],ref:"name",staticClass:"form-control",class:{"is-invalid":e.isError},attrs:{type:"text",id:"emp-name","aria-describedby":"empName",placeholder:"Enter Name"},domProps:{value:e.emp.name},on:{input:function(t){t.target.composing||e.$set(e.emp,"name",t.target.value)}}}),e.isError?a("small",{staticClass:"invalid-feedback"},[e._v("Enter valid name")]):e._e()]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.email,expression:"emp.email"}],ref:"email",staticClass:"form-control",class:{"is-invalid":e.isError},attrs:{type:"email",id:"emp-email","aria-describedby":"empemail",placeholder:"Enter e-mail"},domProps:{value:e.emp.email},on:{input:function(t){t.target.composing||e.$set(e.emp,"email",t.target.value)}}}),e.isError?a("small",{staticClass:"invalid-feedback"},[e._v("Enter valid email")]):e._e()]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.mobile,expression:"emp.mobile"}],ref:"mobile",staticClass:"form-control",class:{"is-invalid":e.isError},attrs:{type:"text",id:"emp-mobile","aria-describedby":"empmobile",placeholder:"Enter mobile number"},domProps:{value:e.emp.mobile},on:{input:function(t){t.target.composing||e.$set(e.emp,"mobile",t.target.value)}}}),e.isError?a("small",{staticClass:"invalid-feedback"},[e._v("Enter valid mobile number")]):e._e()]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.jobTitle,expression:"emp.jobTitle"}],ref:"jobTitle",staticClass:"form-control",class:{"is-invalid":e.isError},attrs:{type:"text",id:"emp-jobTitle","aria-describedby":"empjobTitle",placeholder:"Enter Job title"},domProps:{value:e.emp.jobTitle},on:{input:function(t){t.target.composing||e.$set(e.emp,"jobTitle",t.target.value)}}}),e.isError?a("small",{staticClass:"invalid-feedback"},[e._v("Enter valid Job title")]):e._e()]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:e.resetForm}},[e._v("Reset")])])])])])},$=[],w={data:function(){return{emp:{name:"",email:"",mobile:"",jobTitle:""},isError:!1}},methods:{resetForm:function(){this.emp={name:"",email:"",mobile:"",jobTitle:""};for(var e=Object.keys(this.$refs),t=0;t<e.length;t++)this.$refs[e[t]].classList.remove("is-invalid")},createEmployee:function(){this.validateEmp()&&(this.$emit("emp-create",{emp:this.emp}),this.resetForm())},validateEmp:function(){for(var e=this.emp,t=Object.keys(e),a=[],i=0;i<t.length;i++)e[t[i]]&&e[t[i]].length?this.$refs[t[i]].classList.remove("is-invalid"):(a.push(t[i]),this.$refs[t[i]].classList.add("is-invalid"));return 0==a.length}}},x=w,k=(a("823c"),Object(c["a"])(x,j,$,!1,null,"1a34edf3",null)),O=k.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"emp-list"},[a("h3",[e._v("List of Employees")]),a("br"),a("table",{staticClass:"table table-bordered"},[e._m(0),a("tbody",e._l(e.emps,function(t,i){return a("tr",{key:i},[a("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.email))]),a("td",[e._v(e._s(t.mobile))]),a("td",[e._v(e._s(t.jobTitle))]),a("td",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return e.editEmp(t.id,i)}}},[e._v("Edit")]),a("button",{staticClass:"btn btn-danger",on:{click:function(a){return e.deleteEmp(t.id)}}},[e._v("Delete")])])])}),0)])])},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("#")]),a("th",{attrs:{scope:"col"}},[e._v("Name")]),a("th",{attrs:{scope:"col"}},[e._v("e-mail")]),a("th",{attrs:{scope:"col"}},[e._v("Mobile Number")]),a("th",{attrs:{scope:"col"}},[e._v("Job Title")]),a("th",{attrs:{scope:"col"}},[e._v("Action")])])])}],P={props:{emps:{}},created:function(){},data:function(){return{}},methods:{deleteEmp:function(e){var t=confirm("Are you sure, you want to delete employee with id: "+e);t&&this.$emit("emp-delete",{id:e})},editEmp:function(e,t){this.$emit("emp-edit",{id:e,key:t})}}},M=P,S=(a("6690"),Object(c["a"])(M,T,N,!1,null,"28e0fcf9",null)),J=S.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("div",{staticClass:"emp-edit"},[a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("Edit employee - "+e._s(e.emp.name))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.closeEdit}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),a("form",{on:{submit:function(t){return t.preventDefault(),e.editEmployee(t)}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.name,expression:"emp.name"}],ref:"name",staticClass:"form-control",class:{"is-invalid":e.isError},attrs:{type:"text",id:"emp-name","aria-describedby":"empName",placeholder:"Enter Name"},domProps:{value:e.emp.name},on:{input:function(t){t.target.composing||e.$set(e.emp,"name",t.target.value)}}}),e.isError?a("small",{staticClass:"invalid-feedback"},[e._v("Enter valid name")]):e._e()]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.email,expression:"emp.email"}],ref:"email",staticClass:"form-control",class:{"is-invalid":e.isError},attrs:{type:"email",id:"emp-email","aria-describedby":"empemail",placeholder:"Enter e-mail"},domProps:{value:e.emp.email},on:{input:function(t){t.target.composing||e.$set(e.emp,"email",t.target.value)}}}),e.isError?a("small",{staticClass:"invalid-feedback"},[e._v("Enter valid email")]):e._e()]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.mobile,expression:"emp.mobile"}],ref:"mobile",staticClass:"form-control",class:{"is-invalid":e.isError},attrs:{type:"text",id:"emp-mobile","aria-describedby":"empmobile",placeholder:"Enter mobile number"},domProps:{value:e.emp.mobile},on:{input:function(t){t.target.composing||e.$set(e.emp,"mobile",t.target.value)}}}),e.isError?a("small",{staticClass:"invalid-feedback"},[e._v("Enter valid mobile number")]):e._e()]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.jobTitle,expression:"emp.jobTitle"}],ref:"jobTitle",staticClass:"form-control",class:{"is-invalid":e.isError},attrs:{type:"text",id:"emp-jobTitle","aria-describedby":"empjobTitle",placeholder:"Enter Job title"},domProps:{value:e.emp.jobTitle},on:{input:function(t){t.target.composing||e.$set(e.emp,"jobTitle",t.target.value)}}}),e.isError?a("small",{staticClass:"invalid-feedback"},[e._v("Enter valid Job title")]):e._e()])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Save changes")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.closeEdit}},[e._v("Close")])])])])])])]):e._e()},L=[],W={props:{emp:{},show:{}},data:function(){return{isError:!1}},methods:{closeEdit:function(){this.$emit("emp-close-modal")},editEmployee:function(){this.validateEmp()&&this.$emit("emp-save-modal",{emp:this.emp})},validateEmp:function(){for(var e=this.emp,t=Object.keys(this.$refs),a=[],i=0;i<t.length;i++)e[t[i]]&&e[t[i]].length?this.$refs[t[i]].classList.remove("is-invalid"):(a.push(t[i]),this.$refs[t[i]].classList.add("is-invalid"));return 0==a.length}}},F=W,A=(a("4ab1"),Object(c["a"])(F,D,L,!1,null,"777e88c3",null)),q=A.exports,R={components:{EmployeesCreate:O,EmployeesList:J,EmployeesEditModal:q},created:function(){this.fetchEmp()},data:function(){return{emps:[],currEmp:{},isEditing:!1}},methods:{fetchEmp:function(){var e=this;this.$http.get(g).then(function(t){e.emps=t.data})},createEmp:function(e){var t=this,a=e.emp;this.$http.post(g,a).then(function(e){var a=e.data;t.emps.push(a),alert("Employee created: "+a.name)})},deleteEmp:function(e){var t=this,a=e.id;this.$http.delete(g+"/"+a).then(function(e){t.emps=e.data})},editEmp:function(e){var t=e.key;this.currEmp=JSON.parse(JSON.stringify(this.emps[t])),this.isEditing=!0},closeModal:function(){this.isEditing=!1},updateEmp:function(e){var t=this,a=e.emp;a.id&&this.$http.put(g+"/"+a.id,a).then(function(e){t.emps[a.id-1]=e.data,t.emps=JSON.parse(JSON.stringify(t.emps)),t.closeModal()})}}},z=R,B=Object(c["a"])(z,E,y,!1,null,null,null),G=B.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weather-forcast"},[a("table",{staticClass:"table table-bordered"},[a("tbody",[a("tr",[e._l(e.temps,function(t,i){return[a("th",{key:i,attrs:{scope:"row"}},[e._v(e._s(e.getDay(t.dt_txt)))])]})],2),a("tr",[e._l(e.temps,function(t,i){return[a("td",{key:i},[e._v(e._s(t.main.temp)+"℃")])]})],2)])])])},I=[],K={created:function(){this.fetchWeatherData()},data:function(){return{temps:[]}},methods:{fetchWeatherData:function(){var e=this;this.$http.get(C).then(function(t){var a=t.data;if(a.list.length)for(var i="",s=0;s<a.list.length;s++)i!=a.list[s].dt_txt.substr(0,10)&&(i=a.list[s].dt_txt.substr(0,10),e.temps.push(a.list[s]))})},getDay:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=new Date(e);return t[a.getDay()]}}},Q=K,U=(a("1821"),Object(c["a"])(Q,H,I,!1,null,"18174982",null)),V=U.exports;i["a"].use(h["a"]);var X=new h["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"Employees",component:G},{path:"/weather",name:"Weather",component:V}]}),Y=(a("ab8b"),a("bc3a")),Z=a.n(Y),ee=a("a7fe"),te=a.n(ee);i["a"].use(te.a,Z.a),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(b)},router:X}).$mount("#app")},"64a9":function(e,t,a){},6690:function(e,t,a){"use strict";var i=a("c7c0"),s=a.n(i);s.a},"6a50":function(e,t,a){},"823c":function(e,t,a){"use strict";var i=a("6a50"),s=a.n(i);s.a},c7c0:function(e,t,a){},e173:function(e,t,a){}});
//# sourceMappingURL=app.f94d6c5f.js.map