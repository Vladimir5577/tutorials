(this.webpackJsonptypescript_3=this.webpackJsonptypescript_3||[]).push([[0],{28:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchUsers",(function(){return f}));var c={};n.r(c),n.d(c,"fetchTodos",(function(){return h})),n.d(c,"setTodoPage",(function(){return b}));var a,o=n(7),i=n.n(o),s=(n(28),n(0)),u=n(5),d=u.c,O=n(4),l=n(3),S=n(6),E=n.n(S),p=n(8);!function(e){e.FETCH_USERS="FETCH_USERS",e.FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS",e.FETCH_USERS_ERROR="FETCH_USERS_FETCH_USERS_ERROR"}(a||(a={}));var _,j=n(9),T=n.n(j),f=function(){return function(){var e=Object(p.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:a.FETCH_USERS}),e.next=4,T.a.get("https://jsonplaceholder.typicode.com/users");case 4:n=e.sent,setTimeout((function(){t({type:a.FETCH_USERS_SUCCESS,payload:n.data})}),1e3),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:a.FETCH_USERS_ERROR,payload:"Something went wrong"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};!function(e){e.FETCH_TODOS="FETCH_TODOS",e.FETCH_TODOS_SUCCESS="FETCH_TODOS_SUCCESS",e.FETCH_TODOS_ERROR="FETCH_TODOS_ERROR",e.SET_TODO_PAGE="SET_TODO_PAGE"}(_||(_={}));var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(){var n=Object(p.a)(E.a.mark((function n(r){var c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:_.FETCH_TODOS}),n.next=4,T.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_page:e,_limit:t}});case 4:c=n.sent,setTimeout((function(){r({type:_.FETCH_TODOS_SUCCESS,payload:c.data})}),500),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r({type:_.FETCH_TODOS_ERROR,payload:"Something went wrong"});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()};function b(e){return{type:_.SET_TODO_PAGE,payload:e}}var C=Object(l.a)(Object(l.a)({},c),r),R=function(){var e=Object(u.b)();return Object(O.b)(C,e)},v=n(1),g=function(){var e=d((function(e){return e.user})),t=e.users,n=e.error,r=e.loading,c=R().fetchUsers;return Object(s.useEffect)((function(){c()}),[]),r?Object(v.jsx)("h1",{children:"Loading........"}):n?Object(v.jsx)("h1",{children:n}):Object(v.jsx)("div",{children:t.map((function(e){return Object(v.jsx)("div",{children:e.name},e.id)}))})},y=function(){var e=d((function(e){return e.todo})),t=e.page,n=e.error,r=e.loading,c=e.todos,a=e.limit,o=R(),i=o.fetchTodos,u=o.setTodoPage;return Object(s.useEffect)((function(){i(t,a)}),[t]),r?Object(v.jsx)("h1",{children:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):n?Object(v.jsx)("h1",{children:n}):Object(v.jsxs)("div",{children:[c.map((function(e){return Object(v.jsxs)("div",{children:[e.id," - ",e.title]},e.id)})),Object(v.jsx)("div",{style:{display:"flex"},children:[1,2,3,4,5].map((function(e){return Object(v.jsx)("div",{onClick:function(){return u(e)},style:{border:e===t?"2px solid green":"1px solid gray",padding:10},children:e})}))})]})},H=function(){return Object(v.jsxs)("div",{className:"App",children:["Hello World",Object(v.jsx)(g,{}),Object(v.jsx)("hr",{}),Object(v.jsx)(y,{})]})},x=n(23),F={users:[],loading:!1,error:null},U={todos:[],page:1,error:null,limit:10,loading:!1},m=Object(O.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.FETCH_USERS:return{loading:!0,error:null,users:[]};case a.FETCH_USERS_SUCCESS:return{loading:!1,error:null,users:t.payload};case a.FETCH_USERS_ERROR:return{loading:!1,error:t.payload,users:[]};default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.FETCH_TODOS:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case _.FETCH_TODOS_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,todos:t.payload});case _.FETCH_TODOS_ERROR:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:t.payload});case _.SET_TODO_PAGE:return Object(l.a)(Object(l.a)({},e),{},{page:t.payload});default:return e}}}),D=Object(O.d)(m,Object(O.a)(x.a));i.a.render(Object(v.jsx)(u.a,{store:D,children:Object(v.jsx)(H,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.6113aa0e.chunk.js.map