!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s="../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/pug/pug-worker.ts")}({"../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":function(e,t){function r(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function s(e){r(a,o,i,s,u,"next",e)}function u(e){r(a,o,i,s,u,"throw",e)}s(void 0)}))}}},"../../node_modules/@babel/runtime/helpers/classCallCheck.js":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"../../node_modules/@babel/runtime/helpers/createClass.js":function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},"../../node_modules/@babel/runtime/helpers/defineProperty.js":function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},"../../node_modules/@babel/runtime/helpers/typeof.js":function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},"../../node_modules/@babel/runtime/regenerator/index.js":function(e,t,r){e.exports=r("../../node_modules/regenerator-runtime/runtime.js")},"../../node_modules/regenerator-runtime/runtime.js":function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(e,t,r,n){var o=t&&t.prototype instanceof l?t:l,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=g(a,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var c={};function l(){}function f(){}function d(){}var h={};h[o]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(_([])));m&&m!==t&&r.call(m,o)&&(h=m);var y=d.prototype=l.prototype=Object.create(h);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,s){var c=u(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=y.constructor=d,d.constructor=f,d[a]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/pug/pug-worker.ts":function(e,t,r){"use strict";r.r(t);var n=r("../../node_modules/@babel/runtime/regenerator/index.js"),o=r.n(n),i=r("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),a=r.n(i),s=r("../../node_modules/@babel/runtime/helpers/typeof.js"),u=r.n(s),c=r("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),l=r.n(c),f=r("../../node_modules/@babel/runtime/helpers/createClass.js"),d=r.n(f),h=r("../../node_modules/@babel/runtime/helpers/defineProperty.js"),p=r.n(h);class m extends Error{}var y=function(){function e(t){var r=this;l()(this,e),p()(this,"name",void 0),p()(this,"functions",new Map),p()(this,"pendingCalls",new Map),p()(this,"callId",0),p()(this,"isReady",!1),p()(this,"initializeFS",void 0),p()(this,"queuedMessages",[]),this.name=t,self.addEventListener("message",(function(e){r.handleMessage(e.data).catch(console.error)}))}return d()(e,[{key:"registerFunction",value:function(e,t){this.functions.set(e,t)}},{key:"registerFSInitializer",value:function(e){this.initializeFS=e}},{key:"handleMessage",value:function(){var e=a()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"===u()(t)&&t.codesandbox){e.next=3;break}return t.browserfsMessage||console.warn("Invalid message from main thread to ".concat(this.name),t),e.abrupt("return");case 3:if(this.isReady){e.next=6;break}return this.queuedMessages.push(t),e.abrupt("return");case 6:e.t0=t.type,e.next="ping"===e.t0?9:"request"===e.t0?13:"response"===e.t0?16:"initialize-fs"===e.t0?19:24;break;case 9:if(!this.isReady){e.next=12;break}return e.next=12,this.emitReady();case 12:return e.abrupt("break",24);case 13:return e.next=15,this.handleCallRequest(t);case 15:return e.abrupt("break",24);case 16:return e.next=18,this.handleCallResponse(t);case 18:return e.abrupt("break",24);case 19:if(this.initializeFS){e.next=21;break}throw new Error("initializeFS is undefined for ".concat(this.name));case 21:return e.next=23,this.initializeFS();case 23:return e.abrupt("break",24);case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleCallResponse",value:function(e){var t=this.pendingCalls.get(e.idx);t&&(e.isError?t.reject(function(e){const t=new m(e.message);return t.name=e.name,t.columnNumber=e.columnNumber,t.fileName=e.fileName,t.lineNumber=e.lineNumber,t}(e.data)):t.resolve(e.data))}},{key:"handleCallRequest",value:function(){var e=a()(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=this.functions.get(t.method)){e.next=4;break}throw new Error("Could not find registered child function for call ".concat(this.name,"#").concat(t.method));case 4:return e.next=6,r(t.data);case 6:n=e.sent,self.postMessage({type:"response",codesandbox:!0,idx:t.idx,data:n}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),self.postMessage({type:"response",codesandbox:!0,idx:t.idx,isError:!0,data:(o=e.t0,{name:o.name,message:o.message,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber})});case 14:case"end":return e.stop()}var o}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"callFn",value:function(e){var t=this,r=e.method,n=e.data,o=this.callId++,i={type:"request",codesandbox:!0,idx:o,method:r,data:n};return new Promise((function(e,a){t.pendingCalls.set(o,{method:r,data:n,resolve:e,reject:a}),self.postMessage(i)}))}},{key:"emitReady",value:function(){var e=this;this.isReady=!0,this.queuedMessages.forEach((function(t){console.warn("Run queued message",t),e.handleMessage(t).catch(console.error)})),self.postMessage({type:"ready",codesandbox:!0})}}]),e}();self.importScripts("".concat("","/static/js/browserified-pug.0.1.0.min.js"));var v=new y("pug-worker");function b(){return(b=a()(o.a.mark((function e(t){var r,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.code,n=t.path,e.next=3,new Promise((function(e,t){self.pug.render(r,{filename:n},(function(r,n){return r?t(r):e(n)}))}));case 3:return i=e.sent,e.abrupt("return",{transpiledCode:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v.registerFunction("compile",(function(e){return b.apply(this,arguments)})),v.emitReady()}});
//# sourceMappingURL=pug-transpiler.bdaaf215.worker.js.map