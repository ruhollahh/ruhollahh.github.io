(this.csbJsonP=this.csbJsonP||[]).push([["vue-selector"],{"./src/sandbox/eval/transpilers/vue/v2/parser.js":function(e,s,r){var n=r("../../node_modules/vue-template-compiler/browser.js"),t=r("./config/stubs/lru-cache.js")(100),o=r("../../node_modules/hash-sum/hash-sum.js"),a=r("./node_modules/source-map/source-map.js").SourceMapGenerator,c=/\r?\n/g,u=/^(?:\/\/)?\s*$/;function i(e,s,r,n){var t=new a({sourceRoot:n});return t.setSourceContent(e,s),r.split(c).forEach((function(s,r){u.test(s)||t.addMapping({source:e,original:{line:r+1,column:0},generated:{line:r+1,column:0}})})),t.toJSON()}e.exports=function(e,s,r,a){var c=o(s+e),u=s+"?"+c,l=t.get(c);return l||(l=n.parseComponent(e,{pad:"line"}),r&&(l.script&&!l.script.src&&(l.script.map=i(u,e,l.script.content,a)),l.styles&&l.styles.forEach((function(s){s.src||(s.map=i(u,e,s.content,a))}))),t.set(c,l),l)}},"./src/sandbox/eval/transpilers/vue/v2/selector/loader.ts":function(e,s,r){"use strict";r.r(s);var n=r("../../node_modules/path-browserify/index.js"),t=r.n(n),o=r("./src/sandbox/eval/transpilers/vue/v2/parser.js"),a=r.n(o);s.default=function(e,s){var r=s.options,n=r.context,o=t.a.basename(s.path);o=o.substring(0,o.lastIndexOf(t.a.extname(o)))+".vue";var c=t.a.dirname(t.a.relative(n,s.path)),u=a()(e,o,!1,c,r.bustCache)[r.type];return Array.isArray(u)&&(u=u[r.index]),Promise.resolve({transpiledCode:u?u.content:""})}}}]);
//# sourceMappingURL=vue-selector.e7ab9427e.chunk.js.map