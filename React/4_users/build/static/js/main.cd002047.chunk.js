(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{10:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),i=n(19),a=n.n(i),o=(n(26),n(10),n(7));var u=function(){var e={color:"white"};return Object(c.jsxs)("nav",{children:[Object(c.jsx)(o.b,{to:"/",style:e,children:Object(c.jsx)("h3",{children:"Logo"})}),Object(c.jsxs)("ul",{className:"nav-links",children:[Object(c.jsx)(o.b,{to:"/about",style:e,children:Object(c.jsx)("li",{children:"About"})}),Object(c.jsx)(o.b,{to:"/users",style:e,children:Object(c.jsx)("li",{children:"Users"})})]})]})};var j=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"About Page"})})},d=n(9),l=n.n(d),h=n(12),b=n(13);var x=function(){Object(r.useEffect)((function(){i()}),[]);var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],s=t[1],i=function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://62.173.140.14/data.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Users"}),n.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(o.b,{to:"/user/".concat(e.id),children:Object(c.jsx)("h2",{children:e.name})})},e.id)}))]})};var p=function(e){var t=e.match;Object(r.useEffect)((function(){o()}),[]);var n=Object(r.useState)({}),s=Object(b.a)(n,2),i=s[0],a=s[1],o=function(){var e=Object(h.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://62.173.140.14/data.php/?id=".concat(t.params.id));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,a(c),console.log(c.name);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Item"}),Object(c.jsxs)("h1",{children:["Id: ",i.id]}),Object(c.jsxs)("h1",{children:["Name: ",i.name]}),Object(c.jsxs)("h1",{children:["Name: ",i.country]})]})},O=n(2);var m=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Home Page"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})},f=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsxs)(O.c,{children:[Object(c.jsx)(O.a,{path:"/",exact:!0,component:m}),Object(c.jsx)(O.a,{path:"/about",component:j}),Object(c.jsx)(O.a,{path:"/users",exact:!0,component:x}),Object(c.jsx)(O.a,{path:"/user/:id",component:p})]})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.cd002047.chunk.js.map