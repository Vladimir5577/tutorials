(this.webpackJsonptypescript=this.webpackJsonptypescript||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(6),i=n.n(o),s=(n(12),n(5)),l=n(7),a=n(0),d=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"nav-wrapper purple darken-2 px1",children:[Object(a.jsx)("a",{href:"/",className:"brand-logo",children:"React + Typescript"}),Object(a.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/",children:"To Do List"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/a",children:"Info"})})]})]})})},j=function(e){var t=Object(c.useRef)(null);return Object(a.jsxs)("div",{className:"input-field mt2",children:[Object(a.jsx)("input",{type:"text",id:"title",placeholder:"Add to do",ref:t,onKeyPress:function(n){"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="")}}),Object(a.jsx)("label",{htmlFor:"title",className:"active",children:"Add to do and press Enter"})]})},u=function(e){var t=e.todos,n=e.onRemove,c=e.onToggle;if(0===t.length)return Object(a.jsx)("p",{children:"There are no todo"});return Object(a.jsx)("ul",{children:t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),Object(a.jsx)("li",{className:t.join(" "),children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:e.completed,onChange:c.bind(null,e.id)}),Object(a.jsx)("span",{children:e.title}),Object(a.jsx)("i",{className:"material-icon red-text",onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)},children:"Delete"})]})},e.id)}))})},b=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");r(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};r((function(e){return[t].concat(Object(s.a)(e))}))}}),Object(a.jsx)(u,{todos:n,onToggle:function(e){var t=Object(s.a)(n).map((function(t){return t.id===e&&(t.completed=!t.completed),t}));r(t)},onRemove:function(e){confirm("Do you want to remove item ?")&&r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bbdfff5b.chunk.js.map