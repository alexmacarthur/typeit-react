import*as e from"react";function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const n=[null,null,{}];var r=(e,t)=>Object.assign({},e,t),o=e=>Array.from(e),i=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,t.body};const s=(e,t=null,n=!1)=>{let r=o(e.childNodes).flatMap(e=>{return 3===(t=e).nodeType||"BR"===t.tagName?e:s(e);var t});return t&&(r=r.filter(e=>!t.contains(e))),n?r.reverse():r},u=(e,t=null)=>({node:t,content:e});function c(e){let t=i(e);return s(t).flatMap(e=>e.nodeValue?o(e.nodeValue).map(t=>u(t,e)):u(e))}function l(e,t=!0){return t?c(e):o(e).map(e=>u(e))}var a=e=>document.createElement(e),f=e=>document.createTextNode(e),h=(e,t="")=>{let n=a("style");n.id=t,n.appendChild(f(e)),document.head.appendChild(n)},d=e=>Array.isArray(e);const m=e=>Number.isInteger(e),v=(e,t=document,n=!1)=>t["querySelector"+(n?"All":"")](e),p={started:!1,completed:!1,frozen:!1,destroyed:!1},y={breakLines:!0,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}};var g=({el:e,move:t,cursorPos:n,to:r})=>m(t)?-1*t:((e,t,n="START")=>{let r=new RegExp("END","i").test(n),o=v(".ti-cursor",t),i=e?v(e,t):t,u=s(i,o,!0),c=u[0],l=u[u.length-1],a=r&&!e?0:s(t,o,!0).findIndex(e=>e.isSameNode(r?c:l));return r&&a--,a+1})(t,e,r)-n,P=e=>(d(e)||(e=[e/2,e/2]),e),b=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let S=e=>e/2;var M=e=>"value"in e;const N=e=>"function"==typeof e?e():e;var T=e=>"BODY"===e.tagName;const w=(e,t)=>{let n=o(v("*",t,!0));return[t].concat(n.reverse()).find(t=>t.cloneNode().isEqualNode(e.cloneNode()))},j=(e,t,n,r)=>{let o=t.content instanceof HTMLElement,i=t.node,u=null==i?void 0:i.parentNode,c=o?t.content:f(t.content);if(M(e))return void(e.value=""+e.value+t.content);if(!o&&u&&!T(u)){let r=w(u,e);if(r&&((e,t)=>{let n=e.nextSibling;return!n||n.isEqualNode(t)})(r,n))e=r;else{c=u.cloneNode(),c.appendChild(f(t.content));let n=u.parentNode,r=n.cloneNode();if(!T(n)){let t=w(r,e);for(;!t&&!T(n);){let o=r;o.innerHTML=c.outerHTML,c=o,n=n.parentNode,r=n.cloneNode(),t=w(r,e)}e=t||e}}}let l=s(e,n,!0)[r-1],a=l?l.parentNode:e;a.insertBefore(c,a.contains(n)?n:null)};var E=e=>e&&e.remove();const L={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"","margin-left":"-.125em","margin-right":".125em"};function x(e,t,n){if(!e.s){if(n instanceof k){if(!n.s)return void(n.o=x.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(x.bind(null,e,t),x.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}const k=function(){function e(){}return e.prototype.then=function(t,n){const r=new e,o=this.s;if(o){const e=1&o?t:n;if(e){try{x(r,1,e(this.v))}catch(e){x(r,2,e)}return r}return this}return this.o=function(e){try{const o=e.v;1&e.s?x(r,1,t?t(o):o):n?x(r,1,n(o)):x(r,2,o)}catch(e){x(r,2,e)}},r},e}();function D(e){return e instanceof k&&1&e.s}function I(e,t,n){var r,o,i=-1;return function s(u){try{for(;++i<e.length&&(!n||!n());)if((u=t(i))&&u.then){if(!D(u))return void u.then(s,o||(o=x.bind(null,r=new k,2)));u=u.v}r?x(r,1,u):r=u}catch(e){x(r||(r=new k),2,e)}}(),r}function C(e,t,n){for(var r;;){var o=e();if(D(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!D(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!D(s)){r=2;break}}}var u=new k,c=x.bind(null,u,2);return(0===r?o.then(a):1===r?i.then(l):s.then(f)).then(void 0,c),u;function l(r){i=r;do{if(t&&(s=t())&&s.then&&!D(s))return void s.then(f).then(void 0,c);if(!(o=e())||D(o)&&!o.v)return void x(u,1,i);if(o.then)return void o.then(a).then(void 0,c);D(i=n())&&(i=i.v)}while(!i||!i.then);i.then(l).then(void 0,c)}function a(e){e?(i=n())&&i.then?i.then(l).then(void 0,c):l(i):x(u,1,i)}function f(){(o=e())?o.then?o.then(a).then(void 0,c):a(o):x(u,1,i)}}function H(e,t={}){const f=this,T=this,w=function(e,t,n=!1){try{function r(){function r(r){return Promise.resolve(function(e,t,n){try{return Promise.resolve(new Promise(r=>{n.push(setTimeout(function(){try{return Promise.resolve(e()).then(function(){r()})}catch(e){return Promise.reject(e)}},t))}))}catch(e){return Promise.reject(e)}}(e,t,K)).then(function(){return n?void 0:Promise.resolve($.afterStep(f)).then(function(e){})})}return n?r():Promise.resolve($.beforeStep(f)).then(r)}const o=function(){if(Z.frozen)return Promise.resolve(new Promise(e=>{f.unfreeze=()=>{Z.frozen=!1,e()}})).then(function(){})}();return Promise.resolve(o&&o.then?o.then(r):r())}catch(e){return Promise.reject(e)}},x=()=>M(G),k=e=>function(e){let{speed:t,deleteSpeed:n,lifeLike:r}=e;return n=null!==n?n:t/3,r?[b(t,S(t)),b(n,S(n))]:[t,n]}($)[e],D=(e,t=0)=>e?k(t):0,H=(e,t)=>(ee.add(e),((e={})=>{let t=e.delay;t&&ee.add([[V,t]])})(t),this),O=()=>(e=>M(e)?o(e.value):s(e,v(".ti-cursor",e),!0))(G),z=(e={})=>[[Q,e],[Q,$]],A=e=>{let t=$.nextStringDelay;ee.add([[V,t[0]],...e,[V,t[1]]])},B=e=>{te&&(ne.classList.toggle("disabled",e),ne.classList.toggle("with-delay",!e))},R=function(){try{let e;Z.started=!0;let t=ee.getItems();const n=function(e,n){try{var r=function(){function e(){return Z.completed=!0,Promise.resolve($.afterComplete(T)).then(function(){if(!$.loop)throw"";let e=$.loopDelay;w(function(){try{return Promise.resolve(function(e){try{function t(t){return ee.reset(),ee.set(0,[V,e,{}]),Promise.resolve(F({num:null})).then(function(){})}return Promise.resolve(W?Promise.resolve(q({value:W})).then(t):t())}catch(e){return Promise.reject(e)}}(e[0])).then(function(){R()})}catch(e){return Promise.reject(e)}},e[1])})}const n=I(t,function(e){let n=t[e],r=n[2];return r.freezeCursor&&B(!0),Promise.resolve(n[0].call(T,n[1],r)).then(function(){ee.setMeta(e,{executed:!0}),B(!1)})});return n&&n.then?n.then(e):e()}()}catch(e){return}return r&&r.then?r.then(void 0,function(){}):r}();return Promise.resolve(n&&n.then?n.then(function(t){return e?t:T}):e?n:T)}catch(e){return Promise.reject(e)}},V=(e=0)=>w(()=>{},e),q=function({value:e,to:t="START",instant:n=!1}){try{let r=g({el:G,move:e,cursorPos:W,to:t}),o=()=>{var e,t,n;e=r<0?-1:1,t=W,n=O(),W=Math.min(Math.max(t+e,0),n.length),((e,t,n,r)=>{let o=t[r-1];(e=(null==o?void 0:o.parentNode)||e).insertBefore(n,o||null)})(G,O(),ne,W)};return Promise.resolve(w(function(){try{let e=0;const t=C(function(){return e<Math.abs(r)},function(){return e++},function(){return n?void o():Promise.resolve(w(o,k(0))).then(function(e){})});return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},D(n))).then(function(){})}catch(e){return Promise.reject(e)}},U=({chars:e,instant:t,silent:n})=>{const r=this;return w(function(){try{function o(o){function s(){return n?void 0:Promise.resolve($.afterString(e,r)).then(function(e){})}const u=I(e,function(n){return t?void i(e[n]):Promise.resolve(w(()=>{i(e[n])},k(0))).then(function(e){})});return u&&u.then?u.then(s):s()}const i=e=>j(G,e,ne,W);return Promise.resolve(n?o():Promise.resolve($.beforeString(e,r)).then(o))}catch(e){return Promise.reject(e)}},D(t),!0)},Q=function(e){try{return $=r($,e),Promise.resolve()}catch(e){return Promise.reject(e)}},Y=function(){try{return x()?(G.value="",Promise.resolve()):(O().forEach(e=>{E(e)}),Promise.resolve())}catch(e){return Promise.reject(e)}},F=function({num:e=null,instant:t=!1,to:n="START"}){try{return Promise.resolve(w(function(){try{let r=m(e)?e:g({el:G,move:e,cursorPos:W,to:n});const o=()=>{let e=O();var t;e.length&&(x()?G.value=G.value.slice(0,-1):(E(e[W]),t=ne,v("*",G,!0).forEach(e=>{if(!e.innerHTML&&"BR"!==e.tagName&&!e.isSameNode(t)){let t=e;for(;1===t.parentElement.childNodes.length;)t=t.parentElement;E(t)}})))};let i=0;const s=C(function(){return i<r},function(){return i++},function(){return t?void o():Promise.resolve(w(o,k(1))).then(function(e){})});return Promise.resolve(s&&s.then?s.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},D(t,1))).then(function(){const t=function(){if(null===e&&O().length-1>0)return Promise.resolve(F({num:null})).then(function(){})}();if(t&&t.then)return t.then(function(){})})}catch(e){return Promise.reject(e)}};this.break=function(e){const t=u(a("BR"));return H([[U,{chars:[t],silent:!0}]],e)},this.delete=function(e=null,t={}){e=N(e);let n=z(t),r=e,{instant:o,to:i}=t;return H([n[0],[F,{num:r,instant:o,to:i},X],n[1]],t)},this.empty=function(e={}){return H([[Y]],e)},this.exec=function(e,t){let n=z(t);return H([n[0],[e,null],n[1]],t)},this.move=function(e,t={}){e=N(e);let n=z(t),{instant:r,to:o}=t;return H([n[0],[q,{value:null===e?"":e,to:o,instant:r},X],n[1]],t)},this.options=function(e){return e=N(e),H([[Q,e]],e)},this.pause=function(e,t={}){return H([[V,N(e)]],t)},this.type=function(e,t={}){e=N(e);let n=z(t),r=l(e,$.html),{instant:o}=t;return H([n[0],[U,{chars:r,instant:o},X],n[1]],t)},this.is=function(e){return Z[e]},this.destroy=function(e=!0){K.forEach(e=>clearTimeout(e)),K=[],N(e)&&E(ne),Z.destroyed=!0},this.freeze=function(){Z.frozen=!0},this.unfreeze=function(){},this.reset=function(){!this.is("destroyed")&&this.destroy(),ee.reset(),W=0;for(let e in Z)Z[e]=!1;return G[x()?"value":"innerHTML"]="",this},this.go=function(){return Z.started?this:(function(){try{!x()&&G.appendChild(ne),te?(((e,t,n)=>{let r="[data-typeit-id='"+e+"'] .ti-cursor",o=getComputedStyle(n),i=Object.entries(L).reduce((e,[t,n])=>e+" "+t+": var(--ti-"+t+", "+(n||o[t])+");","");h("@keyframes blink-"+e+" { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } "+r+" { display: inline; letter-spacing: -1em; "+i+" animation: blink-"+e+" "+t.cursorSpeed/1e3+"s infinite; } "+r+".with-delay { animation-delay: 500ms; } "+r+".disabled { animation: none; }",e)})(_,$,G),Promise.resolve()):Promise.resolve()}catch(e){return Promise.reject(e)}}(),$.waitUntilVisible?(((e,t)=>{new IntersectionObserver((n,r)=>{n.forEach(n=>{n.isIntersecting&&(t(),r.unobserve(e))})},{threshold:1}).observe(e)})(G,R.bind(this)),this):(R(),this))},this.getQueue=function(){return ee},this.getOptions=function(){return $},this.getElement=function(){return G};let G="string"==typeof(J=e)?v(J):J;var J;let K=[],W=0,X={freezeCursor:!0},Z=r({},p),$=r(y,t);$=r($,{html:!x()&&$.html,nextStringDelay:P($.nextStringDelay),loopDelay:P($.loopDelay)});let _=Math.random().toString().substring(2,9),ee=function(e){const t=function(e){return o=o.concat(e.map(e=>n.map((t,n)=>e[n]?e[n]:t))),this};let o=[];return t(e),{add:t,set:function(e,t){o[e]=t},reset:function(){o=o.map(e=>(e[2].executed=!1,e))},getItems:function(){return o.filter(e=>!e[2].executed)},setMeta:function(e,t){o[e][2]=r(o[e][2],t)}}}([[V,$.startDelay]]);G.dataset.typeitId=_,h("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}");let te=$.cursor&&!x(),ne=(()=>{if(x())return;let e=a("span");return e.className="ti-cursor",te?(e.innerHTML=i($.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)})();var re;$.strings=(e=>{let t=G.innerHTML;return t?(G.innerHTML="",$.startDelete?(c(t).forEach(e=>{j(G,e,ne,W)}),A([[F,{num:null}]]),e):t.trim().split(/<br(?:\s*?)(?:\/)?>/).concat(e)):e})(d(re=$.strings)?re:[re]),$.strings.length&&(()=>{let e=$.strings.filter(e=>!!e);e.forEach((t,n)=>{let r=l(t,$.html);if(ee.add([[U,{chars:r},X]]),n+1===e.length)return;const o=$.breakLines?[[U,{chars:[u(a("BR"))],silent:!0},X]]:[[F,{num:r.length},X]];A(o)})})()}var O=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],z=["options","as","children","getBeforeInit","getAfterInit"],A=e.useRef,B=e.useEffect,R=e.useState,V=e.useMemo,q=function(n){var r=R(!0),o=r[0],i=r[1],s=A(null),u=n.options,c=n.as,l=n.children,a=n.getBeforeInit,f=n.getAfterInit,h=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(n,z),d=c,m=V(function(){return O.indexOf(d.toLowerCase())>-1},[d]);return B(function(){l&&(u.strings=s.current.innerHTML),i(!1)},[]),B(function(){if(!o){var e=new H(s.current,t({},u));return(e=a(e)).go(),e=f(e),function(){e.destroy()}}},[o]),e.createElement("div",{style:{opacity:o?0:1}},m?e.createElement(d,t({ref:s},h)):e.createElement(d,t({ref:s},h),o&&l))};q.defaultProps={as:"span",options:{},getBeforeInit:function(e){return e},getAfterInit:function(e){return e}};export{q as default};
