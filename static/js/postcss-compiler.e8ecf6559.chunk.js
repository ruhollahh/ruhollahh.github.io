(this.csbJsonP=this.csbJsonP||[]).push([["postcss-compiler"],{"./src/sandbox/eval/transpilers/postcss/loader.ts":function(e,n,r){"use strict";r.r(n);var t=r("../../node_modules/@babel/runtime/regenerator/index.js"),s=r.n(t),a=r("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),u=r.n(a),c=r("../../node_modules/postcss/lib/postcss.js"),o=r.n(c),i=r("../../node_modules/postcss-import/index.js"),p=r.n(i),l=r("../../node_modules/path-browserify/index.js"),d=r("./src/sandbox/eval/utils/is-dependency-path.ts");function f(e,n,r){return v.apply(this,arguments)}function v(){return(v=u()(s.a.mark((function e(n,r,t){var a,u,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(d.a)(r)){e.next=15;break}return e.prev=2,e.next=5,n.resolveTranspiledModuleAsync(Object(l.join)(r,"package.json"));case 5:if(a=e.sent,!(u=JSON.parse(a.module.code)).style){e.next=10;break}return c=Object(l.join)(r,u.style),e.abrupt("return",n.resolveTranspiledModuleAsync(c));case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(2);case 14:return e.abrupt("return",n.resolveTranspiledModuleAsync(r));case 15:return o="/"===r.charAt(0)?r:Object(l.join)(t,r),e.abrupt("return",n.resolveTranspiledModuleAsync(o));case 17:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function b(){return(b=u()(s.a.mark((function e(n,r){var t,a,c,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[p()({resolve:function(){var e=u()(s.a.mark((function e(n,t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(r,n,t);case 3:return a=e.sent,e.abrupt("return",a.module.path);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}(),load:function(){var e=u()(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.resolveTranspiledModuleAsync(n);case 2:return t=e.sent,e.abrupt("return",t.module.code);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})],a={to:r.path,from:r.path,map:{inline:!0,annotation:!0}},e.next=4,o()(t).process(null===n?void 0:n,a);case 4:if(!(c=e.sent).messages){e.next=9;break}return i=c.messages,e.next=9,Promise.all(i.map(function(){var e=u()(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("dependency"!==n.type){e.next=3;break}return e.next=3,r.addDependency(n.file);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 9:return l=c.map&&c.map.toJSON(),e.abrupt("return",{transpiledCode:c.css,sourceMap:l});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.default=function(e,n){return b.apply(this,arguments)}},"./src/sandbox/eval/utils/is-dependency-path.ts":function(e,n,r){"use strict";r.d(n,"a",(function(){return t}));var t=function(e){return/^(\w|@\w|@-)/.test(e)}},11:function(e,n){},12:function(e,n){},13:function(e,n){}}]);
//# sourceMappingURL=postcss-compiler.e8ecf6559.chunk.js.map