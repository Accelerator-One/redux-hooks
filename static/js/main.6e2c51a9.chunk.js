(this["webpackJsonpredux-hooks"]=this["webpackJsonpredux-hooks"]||[]).push([[0],{16:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(16);var c=n(0),o=n.n(c),r=(n(18),n(5)),s=n(12),a=n.n(s),i=n(2),l={card:{borderRadius:"0.5em",margin:"2em",marginRight:"2em",marginTop:"2em"},between:{display:"flex",justifyContent:"space-between"}};function d(e){var t=e.type,n=e.data,c=e.completed;return Object(i.jsx)("div",{className:"card",style:l.card,children:Object(i.jsxs)("div",{className:"card-content",style:l.between,children:[Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",checked:c}),Object(i.jsxs)("span",{children:[" ",n," ",Object(i.jsx)("br",{})," ","A"===t?Object(i.jsx)("small",{className:"red-text",children:" Professional "}):Object(i.jsx)("small",{className:"green-text",children:" Personal "})," "]})]})}),Object(i.jsx)(a.a,{})]})})}function j(){Object(r.c)((function(e){return e})),Object(r.b)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d,{type:"A",data:"Complete documentation",completed:"checked"},"a"),Object(i.jsx)(d,{type:"B",data:"Revamp codebase",completed:""},"b")]})}var b=n(13),h=n.n(b),u={card:{borderRadius:"1em",margin:"2em"}};function m(e){var t=e.title,n=e.progress,c=e.color;return Object(i.jsx)("div",{className:"card",style:u.card,children:Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title ".concat(c,"-text"),children:t}),Object(i.jsx)("br",{}),"Completed : ",Object(i.jsxs)("strong",{children:[n,"%"]}),Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"determinate",style:{width:"".concat(n,"%"),backgroundColor:"".concat(c)}})})]})})}var p={card:{borderRadius:"1em",margin:"2em"}};function x(){Object(r.c)((function(e){return e})),Object(r.b)();return Object(c.useEffect)((function(){h.a.AutoInit()})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{title:"Professional",progress:"50",color:"red"}),Object(i.jsx)(m,{title:"Personal",progress:"50",color:"green"}),Object(i.jsx)("div",{className:"card",style:p.card,children:Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsxs)("div",{class:"input-field",children:[Object(i.jsxs)("select",{children:[Object(i.jsx)("option",{value:"1",children:"Professional"}),Object(i.jsx)("option",{value:"2",children:"Personal"})]}),Object(i.jsx)("label",{children:"Select category"})]}),Object(i.jsx)("div",{class:"input-field",children:Object(i.jsx)("input",{id:"task",type:"text",placeholder:"Add desciption here..."})})]})})]})}function v(){return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col s12 m6",children:Object(i.jsx)(x,{})}),Object(i.jsx)("div",{className:"col s12 m6",children:Object(i.jsx)(j,{})})]})}var f=n(7),O=n.n(f),g=n(14),w=[{timestamp:1619853614252,task:"Maintainence",done:!1},{timestamp:1619853629952,task:"Gmail",done:!0}];var k=Object(g.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.action){case"INSERT":console.log("Insert operation!");break;case"DELETE":console.log("Delete operation!");break;case"UPDATE":console.log("Update operation!");break;default:console.log("Invalid operation!")}return e})),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}O.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(r.a,{store:k,children:Object(i.jsx)(v,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/redux-hooks",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/redux-hooks","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(t,e)}))}}()}},[[34,1,2]]]);