(this["webpackJsonpreact-with-typescript-code-alogn"]=this["webpackJsonpreact-with-typescript-code-alogn"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),i=n.n(s),o=(n(14),n(5)),l=n(0),r=function(e){var t=e.people;return Object(l.jsx)("ul",{children:t.map((function(e,t){return Object(l.jsxs)("li",{className:"List",children:[Object(l.jsxs)("div",{className:"List-header",children:[Object(l.jsx)("img",{className:"List-img",src:e.url}),Object(l.jsx)("h2",{children:e.name})]}),Object(l.jsxs)("p",{children:[e.age," years old"]}),Object(l.jsx)("p",{className:"List-note",children:e.note})]},t)}))})},j=n(9),d=n(4),m=n(7),p=function(e){var t=e.people,n=e.setPeople,c=Object(a.useState)({name:"",age:"",img:"",note:""}),s=Object(o.a)(c,2),i=s[0],r=s[1],p=function(e){r(Object(m.a)(Object(m.a)({},i),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{className:"AddToList",children:[Object(l.jsx)("input",{type:"text",placeholder:"Name",className:"AddToList-input",value:i.name,onChange:p,name:"name"}),Object(l.jsx)("input",{type:"text",placeholder:"Age",className:"AddToList-input",value:i.age,onChange:p,name:"age"}),Object(l.jsx)("input",{type:"text",placeholder:"Image Url",className:"AddToList-input",value:i.img,onChange:p,name:"img"}),Object(l.jsx)("textarea",{placeholder:"Notes",className:"AddToList-input",value:i.note,onChange:p,name:"note"}),Object(l.jsx)("button",{className:"AddToList-btn",onClick:function(){i.name&&i.age&&i.img&&(n([].concat(Object(j.a)(t),[{name:i.name,age:parseInt(i.age),url:i.img,note:i.note}])),r({name:"",age:"",img:"",note:""}))},children:"Add to List"})]})};n(16);var u=function(){var e=Object(a.useState)([{name:"LeBron James",url:"https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",age:36,note:"Allergic to staying on the same team."}]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"People Invited to my Party"}),Object(l.jsx)(r,{people:n}),Object(l.jsx)(p,{people:n,setPeople:c})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.eb2bf84b.chunk.js.map