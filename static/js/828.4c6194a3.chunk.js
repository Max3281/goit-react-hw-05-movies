"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{997:function(e,t,n){var r=n(861),c=n(757),a=n.n(c);function u(){return(u=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=41c0b9645bddc9a823d77ecad6385ef5&language=en-US&query=".concat(t,"&page=1&include_adult=true"));case 2:return n=e.sent,r=n.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.Z=function(e){return u.apply(this,arguments)}},536:function(e,t,n){var r=n(861),c=n(757),a=n.n(c);function u(){return(u=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/week?api_key=41c0b9645bddc9a823d77ecad6385ef5");case 2:return t=e.sent,n=t.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.Z=function(){return u.apply(this,arguments)}},828:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),c=n(536),a=n(997),u=n(861),o=n(757),i=n.n(o);function s(){return s=(0,u.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=41c0b9645bddc9a823d77ecad6385ef5&language=en-US"));case 2:return n=e.sent,r=n.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}var f=function(e){return s.apply(this,arguments)},p=n(791),h=n(689),l=n(184),d=function(){var e=(0,h.UO)().moviesId,t=(0,h.TH)(),n=(0,p.useState)(Number(0)),u=(0,r.Z)(n,2),o=u[0],i=u[1],s=(0,p.useState)(null),d=(0,r.Z)(s,2),m=d[0],v=d[1];switch(t.state.from.pathname){case"/":try{(0,c.Z)().then((function(t){var n=t.results.filter((function(t){return t.title===e||t.name===e}));i(Number(n[0].id))})).catch((function(e){return console.log(e)}))}catch(b){console.log(b)}break;case"/movies":(0,a.Z)(e).then((function(t){var n=t.results.filter((function(t){return t.title===e||t.name===e}));i(Number(n[0].id))})).catch((function(e){return console.log(e)}))}if((0,p.useEffect)((function(){0!==o&&f(o).then((function(e){var t=e.cast.filter((function(e){return"Acting"===e.known_for_department}));v(t)})).catch((function(e){return console.log(e)}))}),[o]),m)return(0,l.jsx)("ul",{children:m.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.themoviedb.org/person/".concat(e.id,"-").concat(e.name),children:(0,l.jsxs)("p",{children:[e.name," / ",e.character]})})},e.cast_id)}))})}}}]);
//# sourceMappingURL=828.4c6194a3.chunk.js.map