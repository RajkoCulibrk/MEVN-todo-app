(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],p=0,b=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5032:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){var u=Object(r["s"])("Navbar"),i=Object(r["s"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(u),Object(r["f"])(i)],64)}var a=n("cf05"),c=n.n(a),u={class:"navbar"},i=Object(r["f"])("div",{class:"logo"},[Object(r["f"])("img",{src:c.a,alt:""})],-1),l={class:"nav-links"},s=Object(r["e"])("Signin"),p=Object(r["e"])("Signin");function b(e,t,n,o,a,c){var b=Object(r["s"])("router-link");return Object(r["o"])(),Object(r["d"])("div",u,[i,Object(r["f"])("div",l,[Object(r["f"])(b,{to:"Signin"},{default:Object(r["x"])((function(){return[s]})),_:1}),Object(r["f"])(b,{to:"Signup"},{default:Object(r["x"])((function(){return[p]})),_:1})])])}var f={};n("bd7a");f.render=b;var d=f,v={components:{Navbar:d}};n("6ce1");v.render=o;var O=v,j=n("6c02"),m={class:"home"};function g(e,t,n,o,a,c){return Object(r["o"])(),Object(r["d"])("div",m)}var h={name:"Home"};h.render=g;var y=h;function S(e,t,n,o,a,c){return Object(r["o"])(),Object(r["d"])("div",null,"signin")}var w={};w.render=S;var x=w,k=Object(r["f"])("h3",null,"Sign up",-1),P=Object(r["f"])("button",null,"Sign up",-1);function _(e,t,n,o,a,c){return Object(r["o"])(),Object(r["d"])("form",{onSubmit:t[4]||(t[4]=Object(r["z"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[k,Object(r["y"])(Object(r["f"])("input",{type:"text",placeholder:"Username","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.username=e})},null,512),[[r["v"],o.username]]),Object(r["y"])(Object(r["f"])("input",{type:"email",placeholder:"Email","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.email=e})},null,512),[[r["v"],o.email]]),Object(r["y"])(Object(r["f"])("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.password=e})},null,512),[[r["v"],o.password]]),P],32)}var U=n("5502"),M={setup:function(){var e=Object(U["b"])(),t=Object(r["r"])(""),n=Object(r["r"])(""),o=Object(r["r"])(""),a=(t.value,n.value,o.value,function(){e.dispatch({type:"signUp",payload:{name:t.value,password:n.value,email:o.value}})});return{onSubmit:a,username:t,password:n,email:o}}};n("79bd");M.render=_;var V=M,H=[{path:"/",name:"Home",component:y},{path:"/Signin",name:"Signin",component:x},{path:"/Signup",name:"Signup",component:V}],I=Object(j["a"])({history:Object(j["b"])("/"),routes:H}),J=I,N=(n("96cf"),n("1da1")),R=n("bc3a"),T=n.n(R),z=Object(U["a"])({state:{},mutations:{},actions:{signUp:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,r=t.payload,n.prev=2,console.log(r),n.next=6,T.a.post("http://localhost:5000/api/users",r);case 6:o=n.sent,a=o.data,localStorage.setItem("token",a.token),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](2),localStorage.removeItem("token"),console.log(n.t0.response.data);case 15:case"end":return n.stop()}}),n,null,[[2,11]])})))()}},modules:{}});Object(r["c"])(O).use(z).use(J).mount("#app")},"5cab":function(e,t,n){},"6ce1":function(e,t,n){"use strict";n("5032")},"79bd":function(e,t,n){"use strict";n("5cab")},"86ec":function(e,t,n){},bd7a:function(e,t,n){"use strict";n("86ec")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.30055b4b.js.map