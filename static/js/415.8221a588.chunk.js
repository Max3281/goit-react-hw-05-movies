"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{536:function(e,t,n){var r=n(861),a=n(757),i=n.n(a);function c(){return(c=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/week?api_key=41c0b9645bddc9a823d77ecad6385ef5");case 2:return t=e.sent,n=t.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.Z=function(){return c.apply(this,arguments)}},546:function(e,t,n){var r=n(689),a=n(87),i=n(184);t.Z=function(e){var t=e.data,n=(0,r.TH)();return(0,i.jsx)("ul",{className:"movie-list",children:t.map((function(e){var t,r;return(0,i.jsx)("li",{children:(0,i.jsx)(a.Link,{to:"/movies/".concat(null!==(t=e.title)&&void 0!==t?t:e.name),state:{from:n},children:null!==(r=e.title)&&void 0!==r?r:e.name})},e.id)}))})}},415:function(e,t,n){n.r(t);var r=n(439),a=n(546),i=n(536),c=n(791),u=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1];return(0,c.useEffect)((function(){(0,i.Z)().then((function(e){s(e.results)}))}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Trending today"}),(0,u.jsx)(a.Z,{data:n})]})}}}]);
//# sourceMappingURL=415.8221a588.chunk.js.map