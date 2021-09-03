function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={exports:{}},n={},r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var a=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var n,a,u=o(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))i.call(n,c)&&(u[c]=n[c]);if(r){a=r(n);for(var d=0;d<a.length;d++)s.call(n,a[d])&&(u[a[d]]=n[a[d]])}}return u},u=a,l=60103,c=60106;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var d=60109,h=60110,f=60112;n.Suspense=60113;var p=60115,m=60116;if("function"==typeof Symbol&&Symbol.for){var g=Symbol.for;l=g("react.element"),c=g("react.portal"),n.Fragment=g("react.fragment"),n.StrictMode=g("react.strict_mode"),n.Profiler=g("react.profiler"),d=g("react.provider"),h=g("react.context"),f=g("react.forward_ref"),n.Suspense=g("react.suspense"),p=g("react.memo"),m=g("react.lazy")}var v="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||w}function E(){}function I(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||w}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=_.prototype;var S=I.prototype=new E;S.constructor=I,u(S,_.prototype),S.isPureReactComponent=!0;var T={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:l,type:e,key:s,ref:o,props:i,_owner:T.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var C=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case l:case c:o=!0}}if(o)return i=i(o=e),e=""===r?"."+R(o,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),O(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var u=r+R(s=e[a],a);o+=O(s,t,n,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=v&&e[v]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),a=0;!(s=e.next()).done;)o+=O(s=s.value,t,n,u=r+R(s,a++),i);else if("object"===s)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return o}function P(e,t,n){if(null==e)return e;var r=[],i=0;return O(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var L={current:null};function M(){var e=L.current;if(null===e)throw Error(y(321));return e}var F={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:T,IsSomeRendererActing:{current:!1},assign:u};n.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error(y(143));return e}},n.Component=_,n.PureComponent=I,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,n.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var r=u({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=T.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)x.call(t,c)&&!k.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==a?a[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:l,type:e.type,key:i,ref:s,props:r,_owner:o}},n.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},n.createElement=A,n.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:f,render:e}},n.isValidElement=N,n.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:D}},n.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},n.useCallback=function(e,t){return M().useCallback(e,t)},n.useContext=function(e,t){return M().useContext(e,t)},n.useDebugValue=function(){},n.useEffect=function(e,t){return M().useEffect(e,t)},n.useImperativeHandle=function(e,t,n){return M().useImperativeHandle(e,t,n)},n.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},n.useMemo=function(e,t){return M().useMemo(e,t)},n.useReducer=function(e,t,n){return M().useReducer(e,t,n)},n.useRef=function(e){return M().useRef(e)},n.useState=function(e){return M().useState(e)},n.version="17.0.2",t.exports=n;var U=t.exports,$={exports:{}},B={},V={exports:{}},j={};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){var t,n,r,i;if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,l=null,c=function(){if(null!==u)try{var t=e.unstable_now();u(!0,t),u=null}catch(n){throw setTimeout(c,0),n}};t=function(e){null!==u?setTimeout(t,0,e):(u=e,setTimeout(c,0))},n=function(e,t){l=setTimeout(e,t)},r=function(){clearTimeout(l)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,h=window.clearTimeout;if("undefined"!=typeof console){var f=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof f&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var p=!1,m=null,g=-1,v=5,y=0;e.unstable_shouldYield=function(){return e.unstable_now()>=y},i=function(){},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<e?Math.floor(1e3/e):5};var w=new MessageChannel,b=w.port2;w.port1.onmessage=function(){if(null!==m){var t=e.unstable_now();y=t+v;try{m(!0,t)?b.postMessage(null):(p=!1,m=null)}catch(n){throw b.postMessage(null),n}}else p=!1},t=function(e){m=e,p||(p=!0,b.postMessage(null))},n=function(t,n){g=d((function(){t(e.unstable_now())}),n)},r=function(){h(g),g=-1}}function _(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<S(i,t)))break e;e[r]=t,e[n]=i,n=r}}function E(e){return void 0===(e=e[0])?null:e}function I(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var s=2*(r+1)-1,o=e[s],a=s+1,u=e[a];if(void 0!==o&&0>S(o,n))void 0!==u&&0>S(u,o)?(e[r]=u,e[a]=n,r=a):(e[r]=o,e[s]=n,r=s);else{if(!(void 0!==u&&0>S(u,n)))break e;e[r]=u,e[a]=n,r=a}}}return t}return null}function S(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var T=[],x=[],k=1,A=null,N=3,C=!1,R=!1,O=!1;function P(e){for(var t=E(x);null!==t;){if(null===t.callback)I(x);else{if(!(t.startTime<=e))break;I(x),t.sortIndex=t.expirationTime,_(T,t)}t=E(x)}}function D(e){if(O=!1,P(e),!R)if(null!==E(T))R=!0,t(L);else{var r=E(x);null!==r&&n(D,r.startTime-e)}}function L(t,i){R=!1,O&&(O=!1,r()),C=!0;var s=N;try{for(P(i),A=E(T);null!==A&&(!(A.expirationTime>i)||t&&!e.unstable_shouldYield());){var o=A.callback;if("function"==typeof o){A.callback=null,N=A.priorityLevel;var a=o(A.expirationTime<=i);i=e.unstable_now(),"function"==typeof a?A.callback=a:A===E(T)&&I(T),P(i)}else I(T);A=E(T)}if(null!==A)var u=!0;else{var l=E(x);null!==l&&n(D,l.startTime-i),u=!1}return u}finally{A=null,N=s,C=!1}}var M=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){R||C||(R=!0,t(L))},e.unstable_getCurrentPriorityLevel=function(){return N},e.unstable_getFirstCallbackNode=function(){return E(T)},e.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var n=N;N=t;try{return e()}finally{N=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=M,e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=N;N=e;try{return t()}finally{N=n}},e.unstable_scheduleCallback=function(i,s,o){var a=e.unstable_now();switch("object"==typeof o&&null!==o?o="number"==typeof(o=o.delay)&&0<o?a+o:a:o=a,i){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return i={id:k++,callback:s,priorityLevel:i,startTime:o,expirationTime:u=o+u,sortIndex:-1},o>a?(i.sortIndex=o,_(x,i),null===E(T)&&i===E(x)&&(O?r():O=!0,n(D,o-a))):(i.sortIndex=u,_(T,i),R||C||(R=!0,t(L))),i},e.unstable_wrapCallback=function(e){var t=N;return function(){var n=N;N=t;try{return e.apply(this,arguments)}finally{N=n}}}}(j),V.exports=j;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z=t.exports,q=a,H=V.exports;function K(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!z)throw Error(K(227));var G=new Set,W={};function Z(e,t){Y(e,t),Y(e+"Capture",t)}function Y(e,t){for(W[e]=t,e=0;e<t.length;e++)G.add(t[e])}var Q=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),J=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,X=Object.prototype.hasOwnProperty,ee={},te={};function ne(e,t,n,r,i,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){re[e]=new ne(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];re[t]=new ne(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){re[e]=new ne(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){re[e]=new ne(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){re[e]=new ne(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){re[e]=new ne(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){re[e]=new ne(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){re[e]=new ne(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){re[e]=new ne(e,5,!1,e.toLowerCase(),null,!1,!1)}));var ie=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}function oe(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!X.call(te,e)||!X.call(ee,e)&&(J.test(e)?te[e]=!0:(ee[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(ie,se);re[t]=new ne(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(ie,se);re[t]=new ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(ie,se);re[t]=new ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){re[e]=new ne(e,1,!1,e.toLowerCase(),null,!1,!1)})),re.xlinkHref=new ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){re[e]=new ne(e,1,!1,e.toLowerCase(),null,!0,!0)}));var ae=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=60103,le=60106,ce=60107,de=60108,he=60114,fe=60109,pe=60110,me=60112,ge=60113,ve=60120,ye=60115,we=60116,be=60121,_e=60128,Ee=60129,Ie=60130,Se=60131;if("function"==typeof Symbol&&Symbol.for){var Te=Symbol.for;ue=Te("react.element"),le=Te("react.portal"),ce=Te("react.fragment"),de=Te("react.strict_mode"),he=Te("react.profiler"),fe=Te("react.provider"),pe=Te("react.context"),me=Te("react.forward_ref"),ge=Te("react.suspense"),ve=Te("react.suspense_list"),ye=Te("react.memo"),we=Te("react.lazy"),be=Te("react.block"),Te("react.scope"),_e=Te("react.opaque.id"),Ee=Te("react.debug_trace_mode"),Ie=Te("react.offscreen"),Se=Te("react.legacy_hidden")}var xe,ke="function"==typeof Symbol&&Symbol.iterator;function Ae(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=ke&&e[ke]||e["@@iterator"])?e:null}function Ne(e){if(void 0===xe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||""}return"\n"+xe+e}var Ce=!1;function Re(e,t){if(!e||Ce)return"";Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var i=u.stack.split("\n"),s=r.stack.split("\n"),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(1!==o||1!==a)do{if(o--,0>--a||i[o]!==s[a])return"\n"+i[o].replace(" at new "," at ")}while(1<=o&&0<=a);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ne(e):""}function Oe(e){switch(e.tag){case 5:return Ne(e.type);case 16:return Ne("Lazy");case 13:return Ne("Suspense");case 19:return Ne("SuspenseList");case 0:case 2:case 15:return e=Re(e.type,!1);case 11:return e=Re(e.type.render,!1);case 22:return e=Re(e.type._render,!1);case 1:return e=Re(e.type,!0);default:return""}}function Pe(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ce:return"Fragment";case le:return"Portal";case he:return"Profiler";case de:return"StrictMode";case ge:return"Suspense";case ve:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case pe:return(e.displayName||"Context")+".Consumer";case fe:return(e._context.displayName||"Context")+".Provider";case me:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case ye:return Pe(e.type);case be:return Pe(e._render);case we:t=e._payload,e=e._init;try{return Pe(e(t))}catch(n){}}return null}function De(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Le(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Me(e){e._valueTracker||(e._valueTracker=function(e){var t=Le(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Fe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Le(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ue(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function $e(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Be(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=De(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Ve(e,t){null!=(t=t.checked)&&oe(e,"checked",t,!1)}function je(e,t){Ve(e,t);var n=De(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?qe(e,t.type,n):t.hasOwnProperty("defaultValue")&&qe(e,t.type,De(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ze(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function qe(e,t,n){"number"===t&&Ue(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function He(e,t){return e=q({children:void 0},t),(t=function(e){var t="";return z.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Ke(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+De(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(K(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function We(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(K(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(K(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:De(n)}}function Ze(e,t){var n=De(t.value),r=De(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Ye(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var Qe="http://www.w3.org/1999/xhtml",Je="http://www.w3.org/2000/svg";function Xe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function et(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Xe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var tt,nt,rt=(nt=function(e,t){if(e.namespaceURI!==Je||"innerHTML"in e)e.innerHTML=t;else{for((tt=tt||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return nt(e,t)}))}:nt);function it(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var st={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ot=["Webkit","ms","Moz","O"];function at(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||st.hasOwnProperty(e)&&st[e]?(""+t).trim():t+"px"}function ut(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=at(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(st).forEach((function(e){ot.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),st[t]=st[e]}))}));var lt=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(e,t){if(t){if(lt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(K(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(K(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(K(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(K(62))}}function dt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ht(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ft=null,pt=null,mt=null;function gt(e){if(e=Bi(e)){if("function"!=typeof ft)throw Error(K(280));var t=e.stateNode;t&&(t=ji(t),ft(e.stateNode,e.type,t))}}function vt(e){pt?mt?mt.push(e):mt=[e]:pt=e}function yt(){if(pt){var e=pt,t=mt;if(mt=pt=null,gt(e),t)for(e=0;e<t.length;e++)gt(t[e])}}function wt(e,t){return e(t)}function bt(e,t,n,r,i){return e(t,n,r,i)}function _t(){}var Et=wt,It=!1,St=!1;function Tt(){null===pt&&null===mt||(_t(),yt())}function xt(e,t){var n=e.stateNode;if(null===n)return null;var r=ji(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(K(231,t,typeof n));return n}var kt=!1;if(Q)try{var At={};Object.defineProperty(At,"passive",{get:function(){kt=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch(nt){kt=!1}function Nt(e,t,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(c){this.onError(c)}}var Ct=!1,Rt=null,Ot=!1,Pt=null,Dt={onError:function(e){Ct=!0,Rt=e}};function Lt(e,t,n,r,i,s,o,a,u){Ct=!1,Rt=null,Nt.apply(Dt,arguments)}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ft(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ut(e){if(Mt(e)!==e)throw Error(K(188))}function $t(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Mt(e)))throw Error(K(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ut(i),e;if(s===r)return Ut(i),t;s=s.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(3!==n.tag)throw Error(K(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Bt(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var Vt,jt,zt,qt,Ht=!1,Kt=[],Gt=null,Wt=null,Zt=null,Yt=new Map,Qt=new Map,Jt=[],Xt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function en(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:i,targetContainers:[r]}}function tn(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Yt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(t.pointerId)}}function nn(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e=en(t,n,r,i,s),null!==t&&(null!==(t=Bi(t))&&jt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function rn(e){var t=$i(e.target);if(null!==t){var n=Mt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ft(n)))return e.blockedOn=t,void qt(e.lanePriority,(function(){H.unstable_runWithPriority(e.priority,(function(){zt(n)}))}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function sn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Bi(n))&&jt(t),e.blockedOn=n,!1;t.shift()}return!0}function on(e,t,n){sn(e)&&n.delete(t)}function an(){for(Ht=!1;0<Kt.length;){var e=Kt[0];if(null!==e.blockedOn){null!==(e=Bi(e.blockedOn))&&Vt(e);break}for(var t=e.targetContainers;0<t.length;){var n=Bn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&Kt.shift()}null!==Gt&&sn(Gt)&&(Gt=null),null!==Wt&&sn(Wt)&&(Wt=null),null!==Zt&&sn(Zt)&&(Zt=null),Yt.forEach(on),Qt.forEach(on)}function un(e,t){e.blockedOn===t&&(e.blockedOn=null,Ht||(Ht=!0,H.unstable_scheduleCallback(H.unstable_NormalPriority,an)))}function ln(e){function t(t){return un(t,e)}if(0<Kt.length){un(Kt[0],e);for(var n=1;n<Kt.length;n++){var r=Kt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Gt&&un(Gt,e),null!==Wt&&un(Wt,e),null!==Zt&&un(Zt,e),Yt.forEach(t),Qt.forEach(t),n=0;n<Jt.length;n++)(r=Jt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&null===(n=Jt[0]).blockedOn;)rn(n),null===n.blockedOn&&Jt.shift()}function cn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:cn("Animation","AnimationEnd"),animationiteration:cn("Animation","AnimationIteration"),animationstart:cn("Animation","AnimationStart"),transitionend:cn("Transition","TransitionEnd")},hn={},fn={};function pn(e){if(hn[e])return hn[e];if(!dn[e])return e;var t,n=dn[e];for(t in n)if(n.hasOwnProperty(t)&&t in fn)return hn[e]=n[t];return e}Q&&(fn=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);var mn=pn("animationend"),gn=pn("animationiteration"),vn=pn("animationstart"),yn=pn("transitionend"),wn=new Map,bn=new Map,_n=["abort","abort",mn,"animationEnd",gn,"animationIteration",vn,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",yn,"transitionEnd","waiting","waiting"];function En(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),bn.set(r,t),wn.set(r,i),Z(i,[r])}}(0,H.unstable_now)();var In=8;function Sn(e){if(0!=(1&e))return In=15,1;if(0!=(2&e))return In=14,2;if(0!=(4&e))return In=13,4;var t=24&e;return 0!==t?(In=12,t):0!=(32&e)?(In=11,32):0!==(t=192&e)?(In=10,t):0!=(256&e)?(In=9,256):0!==(t=3584&e)?(In=8,t):0!=(4096&e)?(In=7,4096):0!==(t=4186112&e)?(In=6,t):0!==(t=62914560&e)?(In=5,t):67108864&e?(In=4,67108864):0!=(134217728&e)?(In=3,134217728):0!==(t=805306368&e)?(In=2,t):0!=(1073741824&e)?(In=1,1073741824):(In=8,e)}function Tn(e,t){var n=e.pendingLanes;if(0===n)return In=0;var r=0,i=0,s=e.expiredLanes,o=e.suspendedLanes,a=e.pingedLanes;if(0!==s)r=s,i=In=15;else if(0!==(s=134217727&n)){var u=s&~o;0!==u?(r=Sn(u),i=In):0!==(a&=s)&&(r=Sn(a),i=In)}else 0!==(s=n&~o)?(r=Sn(s),i=In):0!==a&&(r=Sn(a),i=In);if(0===r)return 0;if(r=n&((0>(r=31-Rn(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0==(t&o)){if(Sn(t),i<=In)return t;In=i}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-Rn(t)),r|=e[n],t&=~i;return r}function xn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function kn(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=An(24&~t))?kn(10,t):e;case 10:return 0===(e=An(192&~t))?kn(8,t):e;case 8:return 0===(e=An(3584&~t))&&(0===(e=An(4186112&~t))&&(e=512)),e;case 2:return 0===(t=An(805306368&~t))&&(t=268435456),t}throw Error(K(358,e))}function An(e){return e&-e}function Nn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cn(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-Rn(t)]=n}var Rn=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(On(e)/Pn|0)|0},On=Math.log,Pn=Math.LN2;var Dn=H.unstable_UserBlockingPriority,Ln=H.unstable_runWithPriority,Mn=!0;function Fn(e,t,n,r){It||_t();var i=$n,s=It;It=!0;try{bt(i,e,t,n,r)}finally{(It=s)||Tt()}}function Un(e,t,n,r){Ln(Dn,$n.bind(null,e,t,n,r))}function $n(e,t,n,r){var i;if(Mn)if((i=0==(4&t))&&0<Kt.length&&-1<Xt.indexOf(e))e=en(null,e,t,n,r),Kt.push(e);else{var s=Bn(e,t,n,r);if(null===s)i&&tn(e,r);else{if(i){if(-1<Xt.indexOf(e))return e=en(s,e,t,n,r),void Kt.push(e);if(function(e,t,n,r,i){switch(t){case"focusin":return Gt=nn(Gt,e,t,n,r,i),!0;case"dragenter":return Wt=nn(Wt,e,t,n,r,i),!0;case"mouseover":return Zt=nn(Zt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yt.set(s,nn(Yt.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qt.set(s,nn(Qt.get(s)||null,e,t,n,r,i)),!0}return!1}(s,e,t,n,r))return;tn(e,r)}yi(e,t,r,null,n)}}}function Bn(e,t,n,r){var i=ht(r);if(null!==(i=$i(i))){var s=Mt(i);if(null===s)i=null;else{var o=s.tag;if(13===o){if(null!==(i=Ft(s)))return i;i=null}else if(3===o){if(s.stateNode.hydrate)return 3===s.tag?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return yi(e,t,r,i,n),null}var Vn=null,jn=null,zn=null;function qn(){if(zn)return zn;var e,t,n=jn,r=n.length,i="value"in Vn?Vn.value:Vn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return zn=i.slice(e,1<t?1-t:void 0)}function Hn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Kn(){return!0}function Gn(){return!1}function Wn(e){function t(t,n,r,i,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Kn:Gn,this.isPropagationStopped=Gn,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),t}var Zn,Yn,Qn,Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xn=Wn(Jn),er=q({},Jn,{view:0,detail:0}),tr=Wn(er),nr=q({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&"mousemove"===e.type?(Zn=e.screenX-Qn.screenX,Yn=e.screenY-Qn.screenY):Yn=Zn=0,Qn=e),Zn)},movementY:function(e){return"movementY"in e?e.movementY:Yn}}),rr=Wn(nr),ir=Wn(q({},nr,{dataTransfer:0})),sr=Wn(q({},er,{relatedTarget:0})),or=Wn(q({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0})),ar=Wn(q({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),ur=Wn(q({},Jn,{data:0})),lr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=dr[e])&&!!t[e]}function fr(){return hr}var pr=Wn(q({},er,{key:function(e){if(e.key){var t=lr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Hn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?cr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(e){return"keypress"===e.type?Hn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Hn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mr=Wn(q({},nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),gr=Wn(q({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr})),vr=Wn(q({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0})),yr=Wn(q({},nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),wr=[9,13,27,32],br=Q&&"CompositionEvent"in window,_r=null;Q&&"documentMode"in document&&(_r=document.documentMode);var Er=Q&&"TextEvent"in window&&!_r,Ir=Q&&(!br||_r&&8<_r&&11>=_r),Sr=String.fromCharCode(32),Tr=!1;function xr(e,t){switch(e){case"keyup":return-1!==wr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Ar=!1;var Nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nr[e.type]:"textarea"===t}function Rr(e,t,n,r){vt(r),0<(t=bi(t,"onChange")).length&&(n=new Xn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Pr=null;function Dr(e){hi(e,0)}function Lr(e){if(Fe(Vi(e)))return e}function Mr(e,t){if("change"===e)return t}var Fr=!1;if(Q){var Ur;if(Q){var $r="oninput"in document;if(!$r){var Br=document.createElement("div");Br.setAttribute("oninput","return;"),$r="function"==typeof Br.oninput}Ur=$r}else Ur=!1;Fr=Ur&&(!document.documentMode||9<document.documentMode)}function Vr(){Or&&(Or.detachEvent("onpropertychange",jr),Pr=Or=null)}function jr(e){if("value"===e.propertyName&&Lr(Pr)){var t=[];if(Rr(t,Pr,e,ht(e)),e=Dr,It)e(t);else{It=!0;try{wt(e,t)}finally{It=!1,Tt()}}}}function zr(e,t,n){"focusin"===e?(Vr(),Pr=n,(Or=t).attachEvent("onpropertychange",jr)):"focusout"===e&&Vr()}function qr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Lr(Pr)}function Hr(e,t){if("click"===e)return Lr(t)}function Kr(e,t){if("input"===e||"change"===e)return Lr(t)}var Gr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Wr=Object.prototype.hasOwnProperty;function Zr(e,t){if(Gr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Wr.call(t,n[r])||!Gr(e[n[r]],t[n[r]]))return!1;return!0}function Yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qr(e,t){var n,r=Yr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yr(r)}}function Jr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Jr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Xr(){for(var e=window,t=Ue();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Ue((e=t.contentWindow).document)}return t}function ei(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ti=Q&&"documentMode"in document&&11>=document.documentMode,ni=null,ri=null,ii=null,si=!1;function oi(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;si||null==ni||ni!==Ue(r)||("selectionStart"in(r=ni)&&ei(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ii&&Zr(ii,r)||(ii=r,0<(r=bi(ri,"onSelect")).length&&(t=new Xn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ni)))}En("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),En("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),En(_n,2);for(var ai="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ui=0;ui<ai.length;ui++)bn.set(ai[ui],0);Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ci=new Set("cancel close invalid load scroll toggle".split(" ").concat(li));function di(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,o,a,u){if(Lt.apply(this,arguments),Ct){if(!Ct)throw Error(K(198));var l=Rt;Ct=!1,Rt=null,Ot||(Ot=!0,Pt=l)}}(r,t,void 0,e),e.currentTarget=null}function hi(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;di(i,a,l),s=u}else for(o=0;o<r.length;o++){if(u=(a=r[o]).instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;di(i,a,l),s=u}}}if(Ot)throw e=Pt,Ot=!1,Pt=null,e}function fi(e,t){var n=zi(t),r=e+"__bubble";n.has(r)||(vi(t,e,2,!1),n.add(r))}var pi="_reactListening"+Math.random().toString(36).slice(2);function mi(e){e[pi]||(e[pi]=!0,G.forEach((function(t){ci.has(t)||gi(t,!1,e,null),gi(t,!0,e,null)})))}function gi(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,s=n;if("selectionchange"===e&&9!==n.nodeType&&(s=n.ownerDocument),null!==r&&!t&&ci.has(e)){if("scroll"!==e)return;i|=2,s=r}var o=zi(s),a=e+"__"+(t?"capture":"bubble");o.has(a)||(t&&(i|=4),vi(s,e,i,t),o.add(a))}function vi(e,t,n,r){var i=bn.get(t);switch(void 0===i?2:i){case 0:i=Fn;break;case 1:i=Un;break;default:i=$n}n=i.bind(null,t,n,e),i=void 0,!kt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yi(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var u=o.tag;if((3===u||4===u)&&((u=o.stateNode.containerInfo)===i||8===u.nodeType&&u.parentNode===i))return;o=o.return}for(;null!==a;){if(null===(o=$i(a)))return;if(5===(u=o.tag)||6===u){r=s=o;continue e}a=a.parentNode}}r=r.return}!function(e,t,n){if(St)return e(t,n);St=!0;try{Et(e,t,n)}finally{St=!1,Tt()}}((function(){var r=s,i=ht(n),o=[];e:{var a=wn.get(e);if(void 0!==a){var u=Xn,l=e;switch(e){case"keypress":if(0===Hn(n))break e;case"keydown":case"keyup":u=pr;break;case"focusin":l="focus",u=sr;break;case"focusout":l="blur",u=sr;break;case"beforeblur":case"afterblur":u=sr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=rr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=ir;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=gr;break;case mn:case gn:case vn:u=or;break;case yn:u=vr;break;case"scroll":u=tr;break;case"wheel":u=yr;break;case"copy":case"cut":case"paste":u=ar;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=mr}var c=0!=(4&t),d=!c&&"scroll"===e,h=c?null!==a?a+"Capture":null:a;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=xt(p,h))&&c.push(wi(p,m,f)))),d)break;p=p.return}0<c.length&&(a=new u(a,l,null,n,i),o.push({event:a,listeners:c}))}}if(0==(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||0!=(16&t)||!(l=n.relatedTarget||n.fromElement)||!$i(l)&&!l[Fi])&&(u||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,u?(u=r,null!==(l=(l=n.relatedTarget||n.toElement)?$i(l):null)&&(l!==(d=Mt(l))||5!==l.tag&&6!==l.tag)&&(l=null)):(u=null,l=r),u!==l)){if(c=rr,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=mr,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==u?a:Vi(u),f=null==l?a:Vi(l),(a=new c(m,p+"leave",u,n,i)).target=d,a.relatedTarget=f,m=null,$i(i)===r&&((c=new c(h,p+"enter",l,n,i)).target=f,c.relatedTarget=d,m=c),d=m,u&&l)e:{for(h=l,p=0,f=c=u;f;f=_i(f))p++;for(f=0,m=h;m;m=_i(m))f++;for(;0<p-f;)c=_i(c),p--;for(;0<f-p;)h=_i(h),f--;for(;p--;){if(c===h||null!==h&&c===h.alternate)break e;c=_i(c),h=_i(h)}c=null}else c=null;null!==u&&Ei(o,a,u,c,!1),null!==l&&null!==d&&Ei(o,d,l,c,!0)}if("select"===(u=(a=r?Vi(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===u&&"file"===a.type)var g=Mr;else if(Cr(a))if(Fr)g=Kr;else{g=qr;var v=zr}else(u=a.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=Hr);switch(g&&(g=g(e,r))?Rr(o,g,n,i):(v&&v(e,a,r),"focusout"===e&&(v=a._wrapperState)&&v.controlled&&"number"===a.type&&qe(a,"number",a.value)),v=r?Vi(r):window,e){case"focusin":(Cr(v)||"true"===v.contentEditable)&&(ni=v,ri=r,ii=null);break;case"focusout":ii=ri=ni=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,oi(o,n,i);break;case"selectionchange":if(ti)break;case"keydown":case"keyup":oi(o,n,i)}var y;if(br)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ar?xr(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Ir&&"ko"!==n.locale&&(Ar||"onCompositionStart"!==w?"onCompositionEnd"===w&&Ar&&(y=qn()):(jn="value"in(Vn=i)?Vn.value:Vn.textContent,Ar=!0)),0<(v=bi(r,w)).length&&(w=new ur(w,e,null,n,i),o.push({event:w,listeners:v}),y?w.data=y:null!==(y=kr(n))&&(w.data=y))),(y=Er?function(e,t){switch(e){case"compositionend":return kr(t);case"keypress":return 32!==t.which?null:(Tr=!0,Sr);case"textInput":return(e=t.data)===Sr&&Tr?null:e;default:return null}}(e,n):function(e,t){if(Ar)return"compositionend"===e||!br&&xr(e,t)?(e=qn(),zn=jn=Vn=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ir&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))&&(0<(r=bi(r,"onBeforeInput")).length&&(i=new ur("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=y))}hi(o,t)}))}function wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=xt(e,n))&&r.unshift(wi(e,s,i)),null!=(s=xt(e,t))&&r.push(wi(e,s,i))),e=e.return}return r}function _i(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Ei(e,t,n,r,i){for(var s=t._reactName,o=[];null!==n&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(null!==u&&u===r)break;5===a.tag&&null!==l&&(a=l,i?null!=(u=xt(n,s))&&o.unshift(wi(n,u,a)):i||null!=(u=xt(n,s))&&o.push(wi(n,u,a))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}function Ii(){}var Si=null,Ti=null;function xi(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function ki(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Ai="function"==typeof setTimeout?setTimeout:void 0,Ni="function"==typeof clearTimeout?clearTimeout:void 0;function Ci(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Ri(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Oi(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Pi=0;var Di=Math.random().toString(36).slice(2),Li="__reactFiber$"+Di,Mi="__reactProps$"+Di,Fi="__reactContainer$"+Di,Ui="__reactEvents$"+Di;function $i(e){var t=e[Li];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fi]||n[Li]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Oi(e);null!==e;){if(n=e[Li])return n;e=Oi(e)}return t}n=(e=n).parentNode}return null}function Bi(e){return!(e=e[Li]||e[Fi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Vi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(K(33))}function ji(e){return e[Mi]||null}function zi(e){var t=e[Ui];return void 0===t&&(t=e[Ui]=new Set),t}var qi=[],Hi=-1;function Ki(e){return{current:e}}function Gi(e){0>Hi||(e.current=qi[Hi],qi[Hi]=null,Hi--)}function Wi(e,t){Hi++,qi[Hi]=e.current,e.current=t}var Zi={},Yi=Ki(Zi),Qi=Ki(!1),Ji=Zi;function Xi(e,t){var n=e.type.contextTypes;if(!n)return Zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function es(e){return null!=(e=e.childContextTypes)}function ts(){Gi(Qi),Gi(Yi)}function ns(e,t,n){if(Yi.current!==Zi)throw Error(K(168));Wi(Yi,t),Wi(Qi,n)}function rs(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in e))throw Error(K(108,Pe(t)||"Unknown",i));return q({},n,r)}function is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zi,Ji=Yi.current,Wi(Yi,e),Wi(Qi,Qi.current),!0}function ss(e,t,n){var r=e.stateNode;if(!r)throw Error(K(169));n?(e=rs(e,t,Ji),r.__reactInternalMemoizedMergedChildContext=e,Gi(Qi),Gi(Yi),Wi(Yi,e)):Gi(Qi),Wi(Qi,n)}var os=null,as=null,us=H.unstable_runWithPriority,ls=H.unstable_scheduleCallback,cs=H.unstable_cancelCallback,ds=H.unstable_shouldYield,hs=H.unstable_requestPaint,fs=H.unstable_now,ps=H.unstable_getCurrentPriorityLevel,ms=H.unstable_ImmediatePriority,gs=H.unstable_UserBlockingPriority,vs=H.unstable_NormalPriority,ys=H.unstable_LowPriority,ws=H.unstable_IdlePriority,bs={},_s=void 0!==hs?hs:function(){},Es=null,Is=null,Ss=!1,Ts=fs(),xs=1e4>Ts?fs:function(){return fs()-Ts};function ks(){switch(ps()){case ms:return 99;case gs:return 98;case vs:return 97;case ys:return 96;case ws:return 95;default:throw Error(K(332))}}function As(e){switch(e){case 99:return ms;case 98:return gs;case 97:return vs;case 96:return ys;case 95:return ws;default:throw Error(K(332))}}function Ns(e,t){return e=As(e),us(e,t)}function Cs(e,t,n){return e=As(e),ls(e,t,n)}function Rs(){if(null!==Is){var e=Is;Is=null,cs(e)}Os()}function Os(){if(!Ss&&null!==Es){Ss=!0;var e=0;try{var t=Es;Ns(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Es=null}catch(n){throw null!==Es&&(Es=Es.slice(e+1)),ls(ms,Rs),n}finally{Ss=!1}}}var Ps=ae.ReactCurrentBatchConfig;function Ds(e,t){if(e&&e.defaultProps){for(var n in t=q({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Ls=Ki(null),Ms=null,Fs=null,Us=null;function $s(){Us=Fs=Ms=null}function Bs(e){var t=Ls.current;Gi(Ls),e.type._context._currentValue=t}function Vs(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function js(e,t){Ms=e,Us=Fs=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ba=!0),e.firstContext=null)}function zs(e,t){if(Us!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(Us=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Fs){if(null===Ms)throw Error(K(308));Fs=t,Ms.dependencies={lanes:0,firstContext:t,responders:null}}else Fs=Fs.next=t;return e._currentValue}var qs=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Ks(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gs(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ws(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Zs(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var i=e.updateQueue;qs=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var u=a,l=u.next;u.next=null,null===o?s=l:o.next=l,o=u;var c=e.alternate;if(null!==c){var d=(c=c.updateQueue).lastBaseUpdate;d!==o&&(null===d?c.firstBaseUpdate=l:d.next=l,c.lastBaseUpdate=u)}}if(null!==s){for(d=i.baseState,o=0,c=l=u=null;;){a=s.lane;var h=s.eventTime;if((r&a)===a){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,p=s;switch(a=t,h=n,p.tag){case 1:if("function"==typeof(f=p.payload)){d=f.call(h,d,a);break e}d=f;break e;case 3:f.flags=-4097&f.flags|64;case 0:if(null==(a="function"==typeof(f=p.payload)?f.call(h,d,a):f))break e;d=q({},d,a);break e;case 2:qs=!0}}null!==s.callback&&(e.flags|=32,null===(a=i.effects)?i.effects=[s]:a.push(s))}else h={eventTime:h,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(l=c=h,u=d):c=c.next=h,o|=a;if(null===(s=s.next)){if(null===(a=i.shared.pending))break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}null===c&&(u=d),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,Su|=o,e.lanes=o,e.memoizedState=d}}function Qs(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(K(191,i));i.call(r)}}}var Js=(new z.Component).refs;function Xs(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:q({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return!!(e=e._reactInternals)&&Mt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Zu(),i=Yu(e),s=Gs(r,i);s.payload=t,null!=n&&(s.callback=n),Ws(e,s),Qu(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Zu(),i=Yu(e),s=Gs(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),Ws(e,s),Qu(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zu(),r=Yu(e),i=Gs(n,r);i.tag=2,null!=t&&(i.callback=t),Ws(e,i),Qu(e,r,n)}};function to(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!Zr(n,r)||!Zr(i,s))}function no(e,t,n){var r=!1,i=Zi,s=t.contextType;return"object"==typeof s&&null!==s?s=zs(s):(i=es(t)?Ji:Yi.current,s=(r=null!=(r=t.contextTypes))?Xi(e,i):Zi),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ro(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function io(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Js,Hs(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=zs(s):(s=es(t)?Ji:Yi.current,i.context=Xi(e,s)),Ys(e,n,i,r),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Xs(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Ys(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4)}var so=Array.isArray;function oo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===Js&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(K(284));if(!n._owner)throw Error(K(290,e))}return e}function ao(e,t){if("textarea"!==e.type)throw Error(K(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function uo(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Nl(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags=2,n):r:(t.flags=2,n):n}function o(t){return e&&null===t.alternate&&(t.flags=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Pl(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=oo(e,t,n),r.return=e,r):((r=Cl(n.type,n.key,n.props,null,e.mode,r)).ref=oo(e,t,n),r.return=e,r)}function l(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dl(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Rl(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Pl(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ue:return(n=Cl(t.type,t.key,t.props,null,e.mode,n)).ref=oo(e,null,t),n.return=e,n;case le:return(t=Dl(t,e.mode,n)).return=e,t}if(so(t)||Ae(t))return(t=Rl(t,e.mode,n,null)).return=e,t;ao(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ue:return n.key===i?n.type===ce?c(e,t,n.props.children,r,i):u(e,t,n,r):null;case le:return n.key===i?l(e,t,n,r):null}if(so(n)||Ae(n))return null!==i?null:c(e,t,n,r,null);ao(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ue:return e=e.get(null===r.key?n:r.key)||null,r.type===ce?c(t,e,r.props.children,i,r.key):u(t,e,r,i);case le:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(so(r)||Ae(r))return c(t,e=e.get(n)||null,r,i,null);ao(t,r)}return null}return function(a,u,l,c){var p="object"==typeof l&&null!==l&&l.type===ce&&null===l.key;p&&(l=l.props.children);var m="object"==typeof l&&null!==l;if(m)switch(l.$$typeof){case ue:e:{for(m=l.key,p=u;null!==p;){if(p.key===m){switch(p.tag){case 7:if(l.type===ce){n(a,p.sibling),(u=i(p,l.props.children)).return=a,a=u;break e}break;default:if(p.elementType===l.type){n(a,p.sibling),(u=i(p,l.props)).ref=oo(a,p,l),u.return=a,a=u;break e}}n(a,p);break}t(a,p),p=p.sibling}l.type===ce?((u=Rl(l.props.children,a.mode,c,l.key)).return=a,a=u):((c=Cl(l.type,l.key,l.props,null,a.mode,c)).ref=oo(a,u,l),c.return=a,a=c)}return o(a);case le:e:{for(p=l.key;null!==u;){if(u.key===p){if(4===u.tag&&u.stateNode.containerInfo===l.containerInfo&&u.stateNode.implementation===l.implementation){n(a,u.sibling),(u=i(u,l.children||[])).return=a,a=u;break e}n(a,u);break}t(a,u),u=u.sibling}(u=Dl(l,a.mode,c)).return=a,a=u}return o(a)}if("string"==typeof l||"number"==typeof l)return l=""+l,null!==u&&6===u.tag?(n(a,u.sibling),(u=i(u,l)).return=a,a=u):(n(a,u),(u=Pl(l,a.mode,c)).return=a,a=u),o(a);if(so(l))return function(i,o,a,u){for(var l=null,c=null,p=o,m=o=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=h(i,p,a[m],u);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),o=s(v,o,m),null===c?l=v:c.sibling=v,c=v,p=g}if(m===a.length)return n(i,p),l;if(null===p){for(;m<a.length;m++)null!==(p=d(i,a[m],u))&&(o=s(p,o,m),null===c?l=p:c.sibling=p,c=p);return l}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],u))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=s(g,o,m),null===c?l=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),l}(a,u,l,c);if(Ae(l))return function(i,o,a,u){var l=Ae(a);if("function"!=typeof l)throw Error(K(150));if(null==(a=l.call(a)))throw Error(K(151));for(var c=l=null,p=o,m=o=0,g=null,v=a.next();null!==p&&!v.done;m++,v=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var y=h(i,p,v.value,u);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),o=s(y,o,m),null===c?l=y:c.sibling=y,c=y,p=g}if(v.done)return n(i,p),l;if(null===p){for(;!v.done;m++,v=a.next())null!==(v=d(i,v.value,u))&&(o=s(v,o,m),null===c?l=v:c.sibling=v,c=v);return l}for(p=r(i,p);!v.done;m++,v=a.next())null!==(v=f(p,i,m,v.value,u))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),o=s(v,o,m),null===c?l=v:c.sibling=v,c=v);return e&&p.forEach((function(e){return t(i,e)})),l}(a,u,l,c);if(m&&ao(a,l),void 0===l&&!p)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(K(152,Pe(a.type)||"Component"))}return n(a,u)}}var lo=uo(!0),co=uo(!1),ho={},fo=Ki(ho),po=Ki(ho),mo=Ki(ho);function go(e){if(e===ho)throw Error(K(174));return e}function vo(e,t){switch(Wi(mo,t),Wi(po,e),Wi(fo,ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:et(null,"");break;default:t=et(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Gi(fo),Wi(fo,t)}function yo(){Gi(fo),Gi(po),Gi(mo)}function wo(e){go(mo.current);var t=go(fo.current),n=et(t,e.type);t!==n&&(Wi(po,e),Wi(fo,n))}function bo(e){po.current===e&&(Gi(fo),Gi(po))}var _o=Ki(0);function Eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=null,So=null,To=!1;function xo(e,t){var n=kl(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function ko(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Ao(e){if(To){var t=So;if(t){var n=t;if(!ko(e,t)){if(!(t=Ri(n.nextSibling))||!ko(e,t))return e.flags=-1025&e.flags|2,To=!1,void(Io=e);xo(Io,n)}Io=e,So=Ri(t.firstChild)}else e.flags=-1025&e.flags|2,To=!1,Io=e}}function No(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Io=e}function Co(e){if(e!==Io)return!1;if(!To)return No(e),To=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!ki(t,e.memoizedProps))for(t=So;t;)xo(e,t),t=Ri(t.nextSibling);if(No(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(K(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){So=Ri(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}So=null}}else So=Io?Ri(e.stateNode.nextSibling):null;return!0}function Ro(){So=Io=null,To=!1}var Oo=[];function Po(){for(var e=0;e<Oo.length;e++)Oo[e]._workInProgressVersionPrimary=null;Oo.length=0}var Do=ae.ReactCurrentDispatcher,Lo=ae.ReactCurrentBatchConfig,Mo=0,Fo=null,Uo=null,$o=null,Bo=!1,Vo=!1;function jo(){throw Error(K(321))}function zo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gr(e[n],t[n]))return!1;return!0}function qo(e,t,n,r,i,s){if(Mo=s,Fo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=null===e||null===e.memoizedState?ga:va,e=n(r,i),Vo){s=0;do{if(Vo=!1,!(25>s))throw Error(K(301));s+=1,$o=Uo=null,t.updateQueue=null,Do.current=ya,e=n(r,i)}while(Vo)}if(Do.current=ma,t=null!==Uo&&null!==Uo.next,Mo=0,$o=Uo=Fo=null,Bo=!1,t)throw Error(K(300));return e}function Ho(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===$o?Fo.memoizedState=$o=e:$o=$o.next=e,$o}function Ko(){if(null===Uo){var e=Fo.alternate;e=null!==e?e.memoizedState:null}else e=Uo.next;var t=null===$o?Fo.memoizedState:$o.next;if(null!==t)$o=t,Uo=e;else{if(null===e)throw Error(K(310));e={memoizedState:(Uo=e).memoizedState,baseState:Uo.baseState,baseQueue:Uo.baseQueue,queue:Uo.queue,next:null},null===$o?Fo.memoizedState=$o=e:$o=$o.next=e}return $o}function Go(e,t){return"function"==typeof t?t(e):t}function Wo(e){var t=Ko(),n=t.queue;if(null===n)throw Error(K(311));n.lastRenderedReducer=e;var r=Uo,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((Mo&l)===l)null!==a&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===e?u.eagerState:e(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};null===a?(o=a=c,s=r):a=a.next=c,Fo.lanes|=l,Su|=l}u=u.next}while(null!==u&&u!==i);null===a?s=r:a.next=o,Gr(r,t.memoizedState)||(ba=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Zo(e){var t=Ko(),n=t.queue;if(null===n)throw Error(K(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{s=e(s,o.action),o=o.next}while(o!==i);Gr(s,t.memoizedState)||(ba=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Yo(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(null!==i?e=i===r:(e=e.mutableReadLanes,(e=(Mo&e)===e)&&(t._workInProgressVersionPrimary=r,Oo.push(t))),e)return n(t._source);throw Oo.push(t),Error(K(350))}function Qo(e,t,n,r){var i=gu;if(null===i)throw Error(K(349));var s=t._getVersion,o=s(t._source),a=Do.current,u=a.useState((function(){return Yo(i,t,n)})),l=u[1],c=u[0];u=$o;var d=e.memoizedState,h=d.refs,f=h.getSnapshot,p=d.source;d=d.subscribe;var m=Fo;return e.memoizedState={refs:h,source:t,subscribe:r},a.useEffect((function(){h.getSnapshot=n,h.setSnapshot=l;var e=s(t._source);if(!Gr(o,e)){e=n(t._source),Gr(c,e)||(l(e),e=Yu(m),i.mutableReadLanes|=e&i.pendingLanes),e=i.mutableReadLanes,i.entangledLanes|=e;for(var r=i.entanglements,a=e;0<a;){var u=31-Rn(a),d=1<<u;r[u]|=e,a&=~d}}}),[n,t,r]),a.useEffect((function(){return r(t._source,(function(){var e=h.getSnapshot,n=h.setSnapshot;try{n(e(t._source));var r=Yu(m);i.mutableReadLanes|=r&i.pendingLanes}catch(s){n((function(){throw s}))}}))}),[t,r]),Gr(f,n)&&Gr(p,t)&&Gr(d,r)||((e={pending:null,dispatch:null,lastRenderedReducer:Go,lastRenderedState:c}).dispatch=l=pa.bind(null,Fo,e),u.queue=e,u.baseQueue=null,c=Yo(i,t,n),u.memoizedState=u.baseState=c),c}function Jo(e,t,n){return Qo(Ko(),e,t,n)}function Xo(e){var t=Ho();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e}).dispatch=pa.bind(null,Fo,e),[t.memoizedState,e]}function ea(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Fo.updateQueue)?(t={lastEffect:null},Fo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ta(e){return e={current:e},Ho().memoizedState=e}function na(){return Ko().memoizedState}function ra(e,t,n,r){var i=Ho();Fo.flags|=e,i.memoizedState=ea(1|t,n,void 0,void 0===r?null:r)}function ia(e,t,n,r){var i=Ko();r=void 0===r?null:r;var s=void 0;if(null!==Uo){var o=Uo.memoizedState;if(s=o.destroy,null!==r&&zo(r,o.deps))return void ea(t,n,s,r)}Fo.flags|=e,i.memoizedState=ea(1|t,n,s,r)}function sa(e,t){return ra(516,4,e,t)}function oa(e,t){return ia(516,4,e,t)}function aa(e,t){return ia(4,2,e,t)}function ua(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function la(e,t,n){return n=null!=n?n.concat([e]):null,ia(4,2,ua.bind(null,t,e),n)}function ca(){}function da(e,t){var n=Ko();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ha(e,t){var n=Ko();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fa(e,t){var n=ks();Ns(98>n?98:n,(function(){e(!0)})),Ns(97<n?97:n,(function(){var n=Lo.transition;Lo.transition=1;try{e(!1),t()}finally{Lo.transition=n}}))}function pa(e,t,n){var r=Zu(),i=Yu(e),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=t.pending;if(null===o?s.next=s:(s.next=o.next,o.next=s),t.pending=s,o=e.alternate,e===Fo||null!==o&&o===Fo)Vo=Bo=!0;else{if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,Gr(u,a))return}catch(l){}Qu(e,i,r)}}var ma={readContext:zs,useCallback:jo,useContext:jo,useEffect:jo,useImperativeHandle:jo,useLayoutEffect:jo,useMemo:jo,useReducer:jo,useRef:jo,useState:jo,useDebugValue:jo,useDeferredValue:jo,useTransition:jo,useMutableSource:jo,useOpaqueIdentifier:jo,unstable_isNewReconciler:!1},ga={readContext:zs,useCallback:function(e,t){return Ho().memoizedState=[e,void 0===t?null:t],e},useContext:zs,useEffect:sa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ra(4,2,ua.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var n=Ho();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ho();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=pa.bind(null,Fo,e),[r.memoizedState,e]},useRef:ta,useState:Xo,useDebugValue:ca,useDeferredValue:function(e){var t=Xo(e),n=t[0],r=t[1];return sa((function(){var t=Lo.transition;Lo.transition=1;try{r(e)}finally{Lo.transition=t}}),[e]),n},useTransition:function(){var e=Xo(!1),t=e[0];return ta(e=fa.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,n){var r=Ho();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Qo(r,e,t,n)},useOpaqueIdentifier:function(){if(To){var e=!1,t=function(e){return{$$typeof:_e,toString:e,valueOf:e}}((function(){throw e||(e=!0,n("r:"+(Pi++).toString(36))),Error(K(355))})),n=Xo(t)[1];return 0==(2&Fo.mode)&&(Fo.flags|=516,ea(5,(function(){n("r:"+(Pi++).toString(36))}),void 0,null)),t}return Xo(t="r:"+(Pi++).toString(36)),t},unstable_isNewReconciler:!1},va={readContext:zs,useCallback:da,useContext:zs,useEffect:oa,useImperativeHandle:la,useLayoutEffect:aa,useMemo:ha,useReducer:Wo,useRef:na,useState:function(){return Wo(Go)},useDebugValue:ca,useDeferredValue:function(e){var t=Wo(Go),n=t[0],r=t[1];return oa((function(){var t=Lo.transition;Lo.transition=1;try{r(e)}finally{Lo.transition=t}}),[e]),n},useTransition:function(){var e=Wo(Go)[0];return[na().current,e]},useMutableSource:Jo,useOpaqueIdentifier:function(){return Wo(Go)[0]},unstable_isNewReconciler:!1},ya={readContext:zs,useCallback:da,useContext:zs,useEffect:oa,useImperativeHandle:la,useLayoutEffect:aa,useMemo:ha,useReducer:Zo,useRef:na,useState:function(){return Zo(Go)},useDebugValue:ca,useDeferredValue:function(e){var t=Zo(Go),n=t[0],r=t[1];return oa((function(){var t=Lo.transition;Lo.transition=1;try{r(e)}finally{Lo.transition=t}}),[e]),n},useTransition:function(){var e=Zo(Go)[0];return[na().current,e]},useMutableSource:Jo,useOpaqueIdentifier:function(){return Zo(Go)[0]},unstable_isNewReconciler:!1},wa=ae.ReactCurrentOwner,ba=!1;function _a(e,t,n,r){t.child=null===e?co(t,null,n,r):lo(t,e.child,n,r)}function Ea(e,t,n,r,i){n=n.render;var s=t.ref;return js(t,i),r=qo(e,t,n,r,s,i),null===e||ba?(t.flags|=1,_a(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ja(e,t,i))}function Ia(e,t,n,r,i,s){if(null===e){var o=n.type;return"function"!=typeof o||Al(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Cl(n.type,null,r,t,t.mode,s)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Sa(e,t,o,r,i,s))}return o=e.child,0==(i&s)&&(i=o.memoizedProps,(n=null!==(n=n.compare)?n:Zr)(i,r)&&e.ref===t.ref)?ja(e,t,s):(t.flags|=1,(e=Nl(o,r)).ref=t.ref,e.return=t,t.child=e)}function Sa(e,t,n,r,i,s){if(null!==e&&Zr(e.memoizedProps,r)&&e.ref===t.ref){if(ba=!1,0==(s&i))return t.lanes=e.lanes,ja(e,t,s);0!=(16384&e.flags)&&(ba=!0)}return ka(e,t,n,r,s)}function Ta(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(0==(4&t.mode))t.memoizedState={baseLanes:0},sl(t,n);else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},sl(t,e),null;t.memoizedState={baseLanes:0},sl(t,null!==s?s.baseLanes:n)}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,sl(t,r);return _a(e,t,i,n),t.child}function xa(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function ka(e,t,n,r,i){var s=es(n)?Ji:Yi.current;return s=Xi(t,s),js(t,i),n=qo(e,t,n,r,s,i),null===e||ba?(t.flags|=1,_a(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ja(e,t,i))}function Aa(e,t,n,r,i){if(es(n)){var s=!0;is(t)}else s=!1;if(js(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),no(t,n,r),io(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,l=n.contextType;"object"==typeof l&&null!==l?l=zs(l):l=Xi(t,l=es(n)?Ji:Yi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||u!==l)&&ro(t,o,r,l),qs=!1;var h=t.memoizedState;o.state=h,Ys(t,r,o,i),u=t.memoizedState,a!==r||h!==u||Qi.current||qs?("function"==typeof c&&(Xs(t,n,c,r),u=t.memoizedState),(a=qs||to(t,n,a,r,h,u,l))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4)):("function"==typeof o.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):("function"==typeof o.componentDidMount&&(t.flags|=4),r=!1)}else{o=t.stateNode,Ks(e,t),a=t.memoizedProps,l=t.type===t.elementType?a:Ds(t.type,a),o.props=l,d=t.pendingProps,h=o.context,"object"==typeof(u=n.contextType)&&null!==u?u=zs(u):u=Xi(t,u=es(n)?Ji:Yi.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==d||h!==u)&&ro(t,o,r,u),qs=!1,h=t.memoizedState,o.state=h,Ys(t,r,o,i);var p=t.memoizedState;a!==d||h!==p||Qi.current||qs?("function"==typeof f&&(Xs(t,n,f,r),p=t.memoizedState),(l=qs||to(t,n,l,r,h,p,u))?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,u),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,u)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=u,r=l):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),r=!1)}return Na(e,t,n,r,s,i)}function Na(e,t,n,r,i,s){xa(e,t);var o=0!=(64&t.flags);if(!r&&!o)return i&&ss(t,n,!1),ja(e,t,s);r=t.stateNode,wa.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=lo(t,e.child,null,s),t.child=lo(t,null,a,s)):_a(e,t,a,s),t.memoizedState=r.state,i&&ss(t,n,!0),t.child}function Ca(e){var t=e.stateNode;t.pendingContext?ns(0,t.pendingContext,t.pendingContext!==t.context):t.context&&ns(0,t.context,!1),vo(e,t.containerInfo)}var Ra,Oa,Pa,Da={dehydrated:null,retryLane:0};function La(e,t,n){var r,i=t.pendingProps,s=_o.current,o=!1;return(r=0!=(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(o=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===i.fallback||!0===i.unstable_avoidThisFallback||(s|=1),Wi(_o,1&s),null===e?(void 0!==i.fallback&&Ao(t),e=i.children,s=i.fallback,o?(e=Ma(t,e,s,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Da,e):"number"==typeof i.unstable_expectedLoadTime?(e=Ma(t,e,s,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Da,t.lanes=33554432,e):((n=Ol({mode:"visible",children:e},t.mode,n,null)).return=t,t.child=n)):(e.memoizedState,o?(i=Ua(e,t,i.children,i.fallback,n),o=t.child,s=e.child.memoizedState,o.memoizedState=null===s?{baseLanes:n}:{baseLanes:s.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Da,i):(n=Fa(e,t,i.children,n),t.memoizedState=null,n))}function Ma(e,t,n,r){var i=e.mode,s=e.child;return t={mode:"hidden",children:t},0==(2&i)&&null!==s?(s.childLanes=0,s.pendingProps=t):s=Ol(t,i,0,null),n=Rl(n,i,r,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n}function Fa(e,t,n,r){var i=e.child;return e=i.sibling,n=Nl(i,{mode:"visible",children:n}),0==(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Ua(e,t,n,r,i){var s=t.mode,o=e.child;e=o.sibling;var a={mode:"hidden",children:n};return 0==(2&s)&&t.child!==o?((n=t.child).childLanes=0,n.pendingProps=a,null!==(o=n.lastEffect)?(t.firstEffect=n.firstEffect,t.lastEffect=o,o.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Nl(o,a),null!==e?r=Nl(e,r):(r=Rl(r,s,i,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function $a(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Vs(e.return,t)}function Ba(e,t,n,r,i,s){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function Va(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(_a(e,t,r.children,n),0!=(2&(r=_o.current)))r=1&r|2,t.flags|=64;else{if(null!==e&&0!=(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$a(e,n);else if(19===e.tag)$a(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Wi(_o,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ba(t,!1,i,n,s,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ba(t,!0,n,null,s,t.lastEffect);break;case"together":Ba(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function ja(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Su|=t.lanes,0!=(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(K(153));if(null!==t.child){for(n=Nl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}return null}function za(e,t){if(!To)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qa(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return es(t.type)&&ts(),null;case 3:return yo(),Gi(Qi),Gi(Yi),Po(),(r=t.stateNode).pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Co(t)?t.flags|=4:r.hydrate||(t.flags|=256)),null;case 5:bo(t);var i=go(mo.current);if(n=t.type,null!==e&&null!=t.stateNode)Oa(e,t,n,r),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(null===t.stateNode)throw Error(K(166));return null}if(e=go(fo.current),Co(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Li]=t,r[Mi]=s,n){case"dialog":fi("cancel",r),fi("close",r);break;case"iframe":case"object":case"embed":fi("load",r);break;case"video":case"audio":for(e=0;e<li.length;e++)fi(li[e],r);break;case"source":fi("error",r);break;case"img":case"image":case"link":fi("error",r),fi("load",r);break;case"details":fi("toggle",r);break;case"input":Be(r,s),fi("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fi("invalid",r);break;case"textarea":We(r,s),fi("invalid",r)}for(var o in ct(n,s),e=null,s)s.hasOwnProperty(o)&&(i=s[o],"children"===o?"string"==typeof i?r.textContent!==i&&(e=["children",i]):"number"==typeof i&&r.textContent!==""+i&&(e=["children",""+i]):W.hasOwnProperty(o)&&null!=i&&"onScroll"===o&&fi("scroll",r));switch(n){case"input":Me(r),ze(r,s,!0);break;case"textarea":Me(r),Ye(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Ii)}r=e,t.updateQueue=r,null!==r&&(t.flags|=4)}else{switch(o=9===i.nodeType?i:i.ownerDocument,e===Qe&&(e=Xe(n)),e===Qe?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Li]=t,e[Mi]=r,Ra(e,t),t.stateNode=e,o=dt(n,r),n){case"dialog":fi("cancel",e),fi("close",e),i=r;break;case"iframe":case"object":case"embed":fi("load",e),i=r;break;case"video":case"audio":for(i=0;i<li.length;i++)fi(li[i],e);i=r;break;case"source":fi("error",e),i=r;break;case"img":case"image":case"link":fi("error",e),fi("load",e),i=r;break;case"details":fi("toggle",e),i=r;break;case"input":Be(e,r),i=$e(e,r),fi("invalid",e);break;case"option":i=He(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),fi("invalid",e);break;case"textarea":We(e,r),i=Ge(e,r),fi("invalid",e);break;default:i=r}ct(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];"style"===s?ut(e,u):"dangerouslySetInnerHTML"===s?null!=(u=u?u.__html:void 0)&&rt(e,u):"children"===s?"string"==typeof u?("textarea"!==n||""!==u)&&it(e,u):"number"==typeof u&&it(e,""+u):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(W.hasOwnProperty(s)?null!=u&&"onScroll"===s&&fi("scroll",e):null!=u&&oe(e,s,u,o))}switch(n){case"input":Me(e),ze(e,r,!1);break;case"textarea":Me(e),Ye(e);break;case"option":null!=r.value&&e.setAttribute("value",""+De(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?Ke(e,!!r.multiple,s,!1):null!=r.defaultValue&&Ke(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Ii)}xi(n,r)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Pa(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(K(166));n=go(mo.current),go(fo.current),Co(t)?(r=t.stateNode,n=t.memoizedProps,r[Li]=t,r.nodeValue!==n&&(t.flags|=4)):((r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Li]=t,t.stateNode=r)}return null;case 13:return Gi(_o),r=t.memoizedState,0!=(64&t.flags)?(t.lanes=n,t):(r=null!==r,n=!1,null===e?void 0!==t.memoizedProps.fallback&&Co(t):n=null!==e.memoizedState,r&&!n&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&_o.current)?0===_u&&(_u=3):(0!==_u&&3!==_u||(_u=4),null===gu||0==(134217727&Su)&&0==(134217727&Tu)||tl(gu,yu))),(r||n)&&(t.flags|=4),null);case 4:return yo(),null===e&&mi(t.stateNode.containerInfo),null;case 10:return Bs(t),null;case 17:return es(t.type)&&ts(),null;case 19:if(Gi(_o),null===(r=t.memoizedState))return null;if(s=0!=(64&t.flags),null===(o=r.rendering))if(s)za(r,!1);else{if(0!==_u||null!==e&&0!=(64&e.flags))for(e=t.child;null!==e;){if(null!==(o=Eo(e))){for(t.flags|=64,za(r,!1),null!==(s=o.updateQueue)&&(t.updateQueue=s,t.flags|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Wi(_o,1&_o.current|2),t.child}e=e.sibling}null!==r.tail&&xs()>Nu&&(t.flags|=64,s=!0,za(r,!1),t.lanes=33554432)}else{if(!s)if(null!==(e=Eo(o))){if(t.flags|=64,s=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),za(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!To)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*xs()-r.renderingStartTime>Nu&&1073741824!==n&&(t.flags|=64,s=!0,za(r,!1),t.lanes=33554432);r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=r.last)?n.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=xs(),n.sibling=null,t=_o.current,Wi(_o,s?1&t|2:1&t),n):null;case 23:case 24:return ol(),null!==e&&null!==e.memoizedState!=(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4),null}throw Error(K(156,t.tag))}function Ha(e){switch(e.tag){case 1:es(e.type)&&ts();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(yo(),Gi(Qi),Gi(Yi),Po(),0!=(64&(t=e.flags)))throw Error(K(285));return e.flags=-4097&t|64,e;case 5:return bo(e),null;case 13:return Gi(_o),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return Gi(_o),null;case 4:return yo(),null;case 10:return Bs(e),null;case 23:case 24:return ol(),null;default:return null}}function Ka(e,t){try{var n="",r=t;do{n+=Oe(r),r=r.return}while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:e,source:t,stack:i}}function Ga(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}Ra=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Oa=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,go(fo.current);var s,o=null;switch(n){case"input":i=$e(e,i),r=$e(e,r),o=[];break;case"option":i=He(e,i),r=He(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=Ge(e,i),r=Ge(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Ii)}for(l in ct(n,r),n=null,i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&null!=i[l])if("style"===l){var a=i[l];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(W.hasOwnProperty(l)?o||(o=[]):(o=o||[]).push(l,null));for(l in r){var u=r[l];if(a=null!=i?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(null!=u||null!=a))if("style"===l)if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(l,n)),n=u;else"dangerouslySetInnerHTML"===l?(u=u?u.__html:void 0,a=a?a.__html:void 0,null!=u&&a!==u&&(o=o||[]).push(l,u)):"children"===l?"string"!=typeof u&&"number"!=typeof u||(o=o||[]).push(l,""+u):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(W.hasOwnProperty(l)?(null!=u&&"onScroll"===l&&fi("scroll",e),o||a===u||(o=[])):"object"==typeof u&&null!==u&&u.$$typeof===_e?u.toString():(o=o||[]).push(l,u))}n&&(o=o||[]).push("style",n);var l=o;(t.updateQueue=l)&&(t.flags|=4)}},Pa=function(e,t,n,r){n!==r&&(t.flags|=4)};var Wa="function"==typeof WeakMap?WeakMap:Map;function Za(e,t,n){(n=Gs(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pu||(Pu=!0,Du=r),Ga(0,t)},n}function Ya(e,t,n){(n=Gs(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return Ga(0,t),r(i)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Lu?Lu=new Set([this]):Lu.add(this),Ga(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}var Qa="function"==typeof WeakSet?WeakSet:Set;function Ja(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(n){Il(e,n)}else t.current=null}function Xa(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Ds(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&Ci(t.stateNode.containerInfo));case 5:case 6:case 4:case 17:return}throw Error(K(163))}function eu(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3==(3&e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var i=e;r=i.next,0!=(4&(i=i.tag))&&0!=(1&i)&&(bl(n,e),wl(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Ds(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=n.updateQueue)&&Qs(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Qs(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&xi(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&ln(n)))));case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(K(163))}function tu(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)"function"==typeof(r=r.style).setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=null!=i&&i.hasOwnProperty("display")?i.display:null,r.style.display=at("display",i)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function nu(e,t){if(as&&"function"==typeof as.onCommitFiberUnmount)try{as.onCommitFiberUnmount(os,t)}catch(s){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,void 0!==i)if(0!=(4&r))bl(t,n);else{r=t;try{i()}catch(s){Il(r,s)}}n=n.next}while(n!==e)}break;case 1:if(Ja(t),"function"==typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(s){Il(t,s)}break;case 5:Ja(t);break;case 4:uu(e,t)}}function ru(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function iu(e){return 5===e.tag||3===e.tag||4===e.tag}function su(e){e:{for(var t=e.return;null!==t;){if(iu(t))break e;t=t.return}throw Error(K(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(K(161))}16&n.flags&&(it(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||iu(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?ou(e,n,t):au(e,n,t)}function ou(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Ii));else if(4!==r&&null!==(e=e.child))for(ou(e,t,n),e=e.sibling;null!==e;)ou(e,t,n),e=e.sibling}function au(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(au(e,t,n),e=e.sibling;null!==e;)au(e,t,n),e=e.sibling}function uu(e,t){for(var n,r,i=t,s=!1;;){if(!s){s=i.return;e:for(;;){if(null===s)throw Error(K(160));switch(n=s.stateNode,s.tag){case 5:r=!1;break e;case 3:case 4:n=n.containerInfo,r=!0;break e}s=s.return}s=!0}if(5===i.tag||6===i.tag){e:for(var o=e,a=i,u=a;;)if(nu(o,u),null!==u.child&&4!==u.tag)u.child.return=u,u=u.child;else{if(u===a)break e;for(;null===u.sibling;){if(null===u.return||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}r?(o=n,a=i.stateNode,8===o.nodeType?o.parentNode.removeChild(a):o.removeChild(a)):n.removeChild(i.stateNode)}else if(4===i.tag){if(null!==i.child){n=i.stateNode.containerInfo,r=!0,i.child.return=i,i=i.child;continue}}else if(nu(e,i),null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break;for(;null===i.sibling;){if(null===i.return||i.return===t)return;4===(i=i.return).tag&&(s=!1)}i.sibling.return=i.return,i=i.sibling}}function lu(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{3==(3&r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:return;case 5:if(null!=(n=t.stateNode)){r=t.memoizedProps;var i=null!==e?e.memoizedProps:r;e=t.type;var s=t.updateQueue;if(t.updateQueue=null,null!==s){for(n[Mi]=r,"input"===e&&"radio"===r.type&&null!=r.name&&Ve(n,r),dt(e,i),t=dt(e,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];"style"===o?ut(n,a):"dangerouslySetInnerHTML"===o?rt(n,a):"children"===o?it(n,a):oe(n,o,a,t)}switch(e){case"input":je(n,r);break;case"textarea":Ze(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(s=r.value)?Ke(n,!!r.multiple,s,!1):e!==!!r.multiple&&(null!=r.defaultValue?Ke(n,!!r.multiple,r.defaultValue,!0):Ke(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(K(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((n=t.stateNode).hydrate&&(n.hydrate=!1,ln(n.containerInfo)));case 12:return;case 13:return null!==t.memoizedState&&(Au=xs(),tu(t.child,!0)),void cu(t);case 19:return void cu(t);case 17:return;case 23:case 24:return void tu(t,null!==t.memoizedState)}throw Error(K(163))}function cu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qa),t.forEach((function(t){var r=Tl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function du(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var hu=Math.ceil,fu=ae.ReactCurrentDispatcher,pu=ae.ReactCurrentOwner,mu=0,gu=null,vu=null,yu=0,wu=0,bu=Ki(0),_u=0,Eu=null,Iu=0,Su=0,Tu=0,xu=0,ku=null,Au=0,Nu=1/0;function Cu(){Nu=xs()+500}var Ru,Ou=null,Pu=!1,Du=null,Lu=null,Mu=!1,Fu=null,Uu=90,$u=[],Bu=[],Vu=null,ju=0,zu=null,qu=-1,Hu=0,Ku=0,Gu=null,Wu=!1;function Zu(){return 0!=(48&mu)?xs():-1!==qu?qu:qu=xs()}function Yu(e){if(0==(2&(e=e.mode)))return 1;if(0==(4&e))return 99===ks()?1:2;if(0===Hu&&(Hu=Iu),0!==Ps.transition){0!==Ku&&(Ku=null!==ku?ku.pendingLanes:0),e=Hu;var t=4186112&~Ku;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=ks(),0!=(4&mu)&&98===e?e=kn(12,Hu):e=kn(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),Hu),e}function Qu(e,t,n){if(50<ju)throw ju=0,zu=null,Error(K(185));if(null===(e=Ju(e,t)))return null;Cn(e,t,n),e===gu&&(Tu|=t,4===_u&&tl(e,yu));var r=ks();1===t?0!=(8&mu)&&0==(48&mu)?nl(e):(Xu(e,n),0===mu&&(Cu(),Rs())):(0==(4&mu)||98!==r&&99!==r||(null===Vu?Vu=new Set([e]):Vu.add(e)),Xu(e,n)),ku=e}function Ju(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function Xu(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Rn(o),u=1<<a,l=s[a];if(-1===l){if(0==(u&r)||0!=(u&i)){l=t,Sn(u);var c=In;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=t&&(e.expiredLanes|=u);o&=~u}if(r=Tn(e,e===gu?yu:0),t=In,0===r)null!==n&&(n!==bs&&cs(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==bs&&cs(n)}15===t?(n=nl.bind(null,e),null===Es?(Es=[n],Is=ls(ms,Os)):Es.push(n),n=bs):14===t?n=Cs(99,nl.bind(null,e)):n=Cs(n=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(K(358,e))}}(t),el.bind(null,e)),e.callbackPriority=t,e.callbackNode=n}}function el(e){if(qu=-1,Ku=Hu=0,0!=(48&mu))throw Error(K(327));var t=e.callbackNode;if(yl()&&e.callbackNode!==t)return null;var n=Tn(e,e===gu?yu:0);if(0===n)return null;var r=n,i=mu;mu|=16;var s=ll();for(gu===e&&yu===r||(Cu(),al(e,r));;)try{hl();break}catch(a){ul(e,a)}if($s(),fu.current=s,mu=i,null!==vu?r=0:(gu=null,yu=0,r=_u),0!=(Iu&Tu))al(e,0);else if(0!==r){if(2===r&&(mu|=64,e.hydrate&&(e.hydrate=!1,Ci(e.containerInfo)),0!==(n=xn(e))&&(r=cl(e,n))),1===r)throw t=Eu,al(e,0),tl(e,n),Xu(e,xs()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(K(345));case 2:ml(e);break;case 3:if(tl(e,n),(62914560&n)===n&&10<(r=Au+500-xs())){if(0!==Tn(e,0))break;if(((i=e.suspendedLanes)&n)!==n){Zu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ai(ml.bind(null,e),r);break}ml(e);break;case 4:if(tl(e,n),(4186112&n)===n)break;for(r=e.eventTimes,i=-1;0<n;){var o=31-Rn(n);s=1<<o,(o=r[o])>i&&(i=o),n&=~s}if(n=i,10<(n=(120>(n=xs()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*hu(n/1960))-n)){e.timeoutHandle=Ai(ml.bind(null,e),n);break}ml(e);break;case 5:ml(e);break;default:throw Error(K(329))}}return Xu(e,xs()),e.callbackNode===t?el.bind(null,e):null}function tl(e,t){for(t&=~xu,t&=~Tu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rn(t),r=1<<n;e[n]=-1,t&=~r}}function nl(e){if(0!=(48&mu))throw Error(K(327));if(yl(),e===gu&&0!=(e.expiredLanes&yu)){var t=yu,n=cl(e,t);0!=(Iu&Tu)&&(n=cl(e,t=Tn(e,t)))}else n=cl(e,t=Tn(e,0));if(0!==e.tag&&2===n&&(mu|=64,e.hydrate&&(e.hydrate=!1,Ci(e.containerInfo)),0!==(t=xn(e))&&(n=cl(e,t))),1===n)throw n=Eu,al(e,0),tl(e,t),Xu(e,xs()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,ml(e),Xu(e,xs()),null}function rl(e,t){var n=mu;mu|=1;try{return e(t)}finally{0===(mu=n)&&(Cu(),Rs())}}function il(e,t){var n=mu;mu&=-2,mu|=8;try{return e(t)}finally{0===(mu=n)&&(Cu(),Rs())}}function sl(e,t){Wi(bu,wu),wu|=t,Iu|=t}function ol(){wu=bu.current,Gi(bu)}function al(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,Ni(n)),null!==vu)for(n=vu.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&ts();break;case 3:yo(),Gi(Qi),Gi(Yi),Po();break;case 5:bo(r);break;case 4:yo();break;case 13:case 19:Gi(_o);break;case 10:Bs(r);break;case 23:case 24:ol()}n=n.return}gu=e,vu=Nl(e.current,null),yu=wu=Iu=t,_u=0,Eu=null,xu=Tu=Su=0}function ul(e,t){for(;;){var n=vu;try{if($s(),Do.current=ma,Bo){for(var r=Fo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Bo=!1}if(Mo=0,$o=Uo=Fo=null,Vo=!1,pu.current=null,null===n||null===n.return){_u=1,Eu=t,vu=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=yu,a.flags|=2048,a.firstEffect=a.lastEffect=null,null!==u&&"object"==typeof u&&"function"==typeof u.then){var l=u;if(0==(2&a.mode)){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var d=0!=(1&_o.current),h=o;do{var f;if(f=13===h.tag){var p=h.memoizedState;if(null!==p)f=null!==p.dehydrated;else{var m=h.memoizedProps;f=void 0!==m.fallback&&(!0!==m.unstable_avoidThisFallback||!d)}}if(f){var g=h.updateQueue;if(null===g){var v=new Set;v.add(l),h.updateQueue=v}else g.add(l);if(0==(2&h.mode)){if(h.flags|=64,a.flags|=16384,a.flags&=-2981,1===a.tag)if(null===a.alternate)a.tag=17;else{var y=Gs(-1,1);y.tag=2,Ws(a,y)}a.lanes|=1;break e}u=void 0,a=t;var w=s.pingCache;if(null===w?(w=s.pingCache=new Wa,u=new Set,w.set(l,u)):void 0===(u=w.get(l))&&(u=new Set,w.set(l,u)),!u.has(a)){u.add(a);var b=Sl.bind(null,s,l,a);l.then(b,b)}h.flags|=4096,h.lanes=t;break e}h=h.return}while(null!==h);u=Error((Pe(a.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==_u&&(_u=2),u=Ka(u,a),h=o;do{switch(h.tag){case 3:s=u,h.flags|=4096,t&=-t,h.lanes|=t,Zs(h,Za(0,s,t));break e;case 1:s=u;var _=h.type,E=h.stateNode;if(0==(64&h.flags)&&("function"==typeof _.getDerivedStateFromError||null!==E&&"function"==typeof E.componentDidCatch&&(null===Lu||!Lu.has(E)))){h.flags|=4096,t&=-t,h.lanes|=t,Zs(h,Ya(h,s,t));break e}}h=h.return}while(null!==h)}pl(n)}catch(I){t=I,vu===n&&null!==n&&(vu=n=n.return);continue}break}}function ll(){var e=fu.current;return fu.current=ma,null===e?ma:e}function cl(e,t){var n=mu;mu|=16;var r=ll();for(gu===e&&yu===t||al(e,t);;)try{dl();break}catch(i){ul(e,i)}if($s(),mu=n,fu.current=r,null!==vu)throw Error(K(261));return gu=null,yu=0,_u}function dl(){for(;null!==vu;)fl(vu)}function hl(){for(;null!==vu&&!ds();)fl(vu)}function fl(e){var t=Ru(e.alternate,e,wu);e.memoizedProps=e.pendingProps,null===t?pl(e):vu=t,pu.current=null}function pl(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(2048&t.flags)){if(null!==(n=qa(n,t,wu)))return void(vu=n);if(24!==(n=t).tag&&23!==n.tag||null===n.memoizedState||0!=(1073741824&wu)||0==(4&n.mode)){for(var r=0,i=n.child;null!==i;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}null!==e&&0==(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(n=Ha(t)))return n.flags&=2047,void(vu=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(vu=t);vu=t=e}while(null!==t);0===_u&&(_u=5)}function ml(e){var t=ks();return Ns(99,gl.bind(null,e,t)),null}function gl(e,t){do{yl()}while(null!==Fu);if(0!=(48&mu))throw Error(K(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(K(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var o=e.eventTimes,a=e.expirationTimes;0<s;){var u=31-Rn(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(null!==Vu&&0==(24&r)&&Vu.has(e)&&Vu.delete(e),e===gu&&(vu=gu=null,yu=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(i=mu,mu|=32,pu.current=null,Si=Mn,ei(o=Xr())){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&0!==l.rangeCount){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch(T){a=null;break e}var c=0,d=-1,h=-1,f=0,p=0,m=o,g=null;t:for(;;){for(var v;m!==a||0!==s&&3!==m.nodeType||(d=c+s),m!==u||0!==l&&3!==m.nodeType||(h=c+l),3===m.nodeType&&(c+=m.nodeValue.length),null!==(v=m.firstChild);)g=m,m=v;for(;;){if(m===o)break t;if(g===a&&++f===s&&(d=c),g===u&&++p===l&&(h=c),null!==(v=m.nextSibling))break;g=(m=g).parentNode}m=v}a=-1===d||-1===h?null:{start:d,end:h}}else a=null;a=a||{start:0,end:0}}else a=null;Ti={focusedElem:o,selectionRange:a},Mn=!1,Gu=null,Wu=!1,Ou=r;do{try{vl()}catch(T){if(null===Ou)throw Error(K(330));Il(Ou,T),Ou=Ou.nextEffect}}while(null!==Ou);Gu=null,Ou=r;do{try{for(o=e;null!==Ou;){var y=Ou.flags;if(16&y&&it(Ou.stateNode,""),128&y){var w=Ou.alternate;if(null!==w){var b=w.ref;null!==b&&("function"==typeof b?b(null):b.current=null)}}switch(1038&y){case 2:su(Ou),Ou.flags&=-3;break;case 6:su(Ou),Ou.flags&=-3,lu(Ou.alternate,Ou);break;case 1024:Ou.flags&=-1025;break;case 1028:Ou.flags&=-1025,lu(Ou.alternate,Ou);break;case 4:lu(Ou.alternate,Ou);break;case 8:uu(o,a=Ou);var _=a.alternate;ru(a),null!==_&&ru(_)}Ou=Ou.nextEffect}}catch(T){if(null===Ou)throw Error(K(330));Il(Ou,T),Ou=Ou.nextEffect}}while(null!==Ou);if(b=Ti,w=Xr(),y=b.focusedElem,o=b.selectionRange,w!==y&&y&&y.ownerDocument&&Jr(y.ownerDocument.documentElement,y)){null!==o&&ei(y)&&(w=o.start,void 0===(b=o.end)&&(b=w),"selectionStart"in y?(y.selectionStart=w,y.selectionEnd=Math.min(b,y.value.length)):(b=(w=y.ownerDocument||document)&&w.defaultView||window).getSelection&&(b=b.getSelection(),a=y.textContent.length,_=Math.min(o.start,a),o=void 0===o.end?_:Math.min(o.end,a),!b.extend&&_>o&&(a=o,o=_,_=a),a=Qr(y,_),s=Qr(y,o),a&&s&&(1!==b.rangeCount||b.anchorNode!==a.node||b.anchorOffset!==a.offset||b.focusNode!==s.node||b.focusOffset!==s.offset)&&((w=w.createRange()).setStart(a.node,a.offset),b.removeAllRanges(),_>o?(b.addRange(w),b.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),b.addRange(w))))),w=[];for(b=y;b=b.parentNode;)1===b.nodeType&&w.push({element:b,left:b.scrollLeft,top:b.scrollTop});for("function"==typeof y.focus&&y.focus(),y=0;y<w.length;y++)(b=w[y]).element.scrollLeft=b.left,b.element.scrollTop=b.top}Mn=!!Si,Ti=Si=null,e.current=n,Ou=r;do{try{for(y=e;null!==Ou;){var E=Ou.flags;if(36&E&&eu(y,Ou.alternate,Ou),128&E){w=void 0;var I=Ou.ref;if(null!==I){var S=Ou.stateNode;switch(Ou.tag){case 5:w=S;break;default:w=S}"function"==typeof I?I(w):I.current=w}}Ou=Ou.nextEffect}}catch(T){if(null===Ou)throw Error(K(330));Il(Ou,T),Ou=Ou.nextEffect}}while(null!==Ou);Ou=null,_s(),mu=i}else e.current=n;if(Mu)Mu=!1,Fu=e,Uu=t;else for(Ou=r;null!==Ou;)t=Ou.nextEffect,Ou.nextEffect=null,8&Ou.flags&&((E=Ou).sibling=null,E.stateNode=null),Ou=t;if(0===(r=e.pendingLanes)&&(Lu=null),1===r?e===zu?ju++:(ju=0,zu=e):ju=0,n=n.stateNode,as&&"function"==typeof as.onCommitFiberRoot)try{as.onCommitFiberRoot(os,n,void 0,64==(64&n.current.flags))}catch(T){}if(Xu(e,xs()),Pu)throw Pu=!1,e=Du,Du=null,e;return 0!=(8&mu)||Rs(),null}function vl(){for(;null!==Ou;){var e=Ou.alternate;Wu||null===Gu||(0!=(8&Ou.flags)?Bt(Ou,Gu)&&(Wu=!0):13===Ou.tag&&du(e,Ou)&&Bt(Ou,Gu)&&(Wu=!0));var t=Ou.flags;0!=(256&t)&&Xa(e,Ou),0==(512&t)||Mu||(Mu=!0,Cs(97,(function(){return yl(),null}))),Ou=Ou.nextEffect}}function yl(){if(90!==Uu){var e=97<Uu?97:Uu;return Uu=90,Ns(e,_l)}return!1}function wl(e,t){$u.push(t,e),Mu||(Mu=!0,Cs(97,(function(){return yl(),null})))}function bl(e,t){Bu.push(t,e),Mu||(Mu=!0,Cs(97,(function(){return yl(),null})))}function _l(){if(null===Fu)return!1;var e=Fu;if(Fu=null,0!=(48&mu))throw Error(K(331));var t=mu;mu|=32;var n=Bu;Bu=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,"function"==typeof o)try{o()}catch(u){if(null===s)throw Error(K(330));Il(s,u)}}for(n=$u,$u=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(null===s)throw Error(K(330));Il(s,u)}}for(a=e.current.firstEffect;null!==a;)e=a.nextEffect,a.nextEffect=null,8&a.flags&&(a.sibling=null,a.stateNode=null),a=e;return mu=t,Rs(),!0}function El(e,t,n){Ws(e,t=Za(0,t=Ka(n,t),1)),t=Zu(),null!==(e=Ju(e,1))&&(Cn(e,1,t),Xu(e,t))}function Il(e,t){if(3===e.tag)El(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){El(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Lu||!Lu.has(r))){var i=Ya(n,e=Ka(t,e),1);if(Ws(n,i),i=Zu(),null!==(n=Ju(n,1)))Cn(n,1,i),Xu(n,i);else if("function"==typeof r.componentDidCatch&&(null===Lu||!Lu.has(r)))try{r.componentDidCatch(t,e)}catch(s){}break}}n=n.return}}function Sl(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Zu(),e.pingedLanes|=e.suspendedLanes&n,gu===e&&(yu&n)===n&&(4===_u||3===_u&&(62914560&yu)===yu&&500>xs()-Au?al(e,0):xu|=n),Xu(e,t)}function Tl(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(0==(2&(t=e.mode))?t=1:0==(4&t)?t=99===ks()?1:2:(0===Hu&&(Hu=Iu),0===(t=An(62914560&~Hu))&&(t=4194304))),n=Zu(),null!==(e=Ju(e,t))&&(Cn(e,t,n),Xu(e,n))}function xl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function kl(e,t,n,r){return new xl(e,t,n,r)}function Al(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nl(e,t){var n=e.alternate;return null===n?((n=kl(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cl(e,t,n,r,i,s){var o=2;if(r=e,"function"==typeof e)Al(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case ce:return Rl(n.children,i,s,t);case Ee:o=8,i|=16;break;case de:o=8,i|=1;break;case he:return(e=kl(12,n,t,8|i)).elementType=he,e.type=he,e.lanes=s,e;case ge:return(e=kl(13,n,t,i)).type=ge,e.elementType=ge,e.lanes=s,e;case ve:return(e=kl(19,n,t,i)).elementType=ve,e.lanes=s,e;case Ie:return Ol(n,i,s,t);case Se:return(e=kl(24,n,t,i)).elementType=Se,e.lanes=s,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case fe:o=10;break e;case pe:o=9;break e;case me:o=11;break e;case ye:o=14;break e;case we:o=16,r=null;break e;case be:o=22;break e}throw Error(K(130,null==e?e:typeof e,""))}return(t=kl(o,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Rl(e,t,n,r){return(e=kl(7,e,r,t)).lanes=n,e}function Ol(e,t,n,r){return(e=kl(23,e,r,t)).elementType=Ie,e.lanes=n,e}function Pl(e,t,n){return(e=kl(6,e,null,t)).lanes=n,e}function Dl(e,t,n){return(t=kl(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ll(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Nn(0),this.expirationTimes=Nn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nn(0),this.mutableSourceEagerHydrationData=null}function Ml(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:le,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Fl(e,t,n,r){var i=t.current,s=Zu(),o=Yu(i);e:if(n){t:{if(Mt(n=n._reactInternals)!==n||1!==n.tag)throw Error(K(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(es(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(null!==a);throw Error(K(171))}if(1===n.tag){var u=n.type;if(es(u)){n=rs(n,u,a);break e}}n=a}else n=Zi;return null===t.context?t.context=n:t.pendingContext=n,(t=Gs(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),Ws(i,t),Qu(i,o,s),o}function Ul(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function $l(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Bl(e,t){$l(e,t),(e=e.alternate)&&$l(e,t)}function Vl(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new Ll(e,t,null!=n&&!0===n.hydrate),t=kl(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,Hs(t),e[Fi]=n.current,mi(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){var i=(t=r[e])._getVersion;i=i(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}function jl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function zl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if("function"==typeof i){var a=i;i=function(){var e=Ul(o);a.call(e)}}Fl(t,o,e,i)}else{if(s=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Vl(e,0,t?{hydrate:!0}:void 0)}(n,r),o=s._internalRoot,"function"==typeof i){var u=i;i=function(){var e=Ul(o);u.call(e)}}il((function(){Fl(t,o,e,i)}))}return Ul(o)}function ql(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!jl(t))throw Error(K(200));return Ml(e,t,null,n)}Ru=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||Qi.current)ba=!0;else{if(0==(n&r)){switch(ba=!1,t.tag){case 3:Ca(t),Ro();break;case 5:wo(t);break;case 1:es(t.type)&&is(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;Wi(Ls,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!=(n&t.child.childLanes)?La(e,t,n):(Wi(_o,1&_o.current),null!==(t=ja(e,t,n))?t.sibling:null);Wi(_o,1&_o.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(64&e.flags)){if(r)return Va(e,t,n);t.flags|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Wi(_o,_o.current),r)break;return null;case 23:case 24:return t.lanes=0,Ta(e,t,n)}return ja(e,t,n)}ba=0!=(16384&e.flags)}else ba=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Xi(t,Yi.current),js(t,n),i=qo(null,t,r,e,i,n),t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,es(r)){var s=!0;is(t)}else s=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Hs(t);var o=r.getDerivedStateFromProps;"function"==typeof o&&Xs(t,r,o,e),i.updater=eo,t.stateNode=i,i._reactInternals=t,io(t,r,e,n),t=Na(null,t,r,!0,s,n)}else t.tag=0,_a(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=(s=i._init)(i._payload),t.type=i,s=t.tag=function(e){if("function"==typeof e)return Al(e)?1:0;if(null!=e){if((e=e.$$typeof)===me)return 11;if(e===ye)return 14}return 2}(i),e=Ds(i,e),s){case 0:t=ka(null,t,i,e,n);break e;case 1:t=Aa(null,t,i,e,n);break e;case 11:t=Ea(null,t,i,e,n);break e;case 14:t=Ia(null,t,i,Ds(i.type,e),r,n);break e}throw Error(K(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,ka(e,t,r,i=t.elementType===r?i:Ds(r,i),n);case 1:return r=t.type,i=t.pendingProps,Aa(e,t,r,i=t.elementType===r?i:Ds(r,i),n);case 3:if(Ca(t),r=t.updateQueue,null===e||null===r)throw Error(K(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,Ks(e,t),Ys(t,r,null,n),(r=t.memoizedState.element)===i)Ro(),t=ja(e,t,n);else{if((s=(i=t.stateNode).hydrate)&&(So=Ri(t.stateNode.containerInfo.firstChild),Io=t,s=To=!0),s){if(null!=(e=i.mutableSourceEagerHydrationData))for(i=0;i<e.length;i+=2)(s=e[i])._workInProgressVersionPrimary=e[i+1],Oo.push(s);for(n=co(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else _a(e,t,r,n),Ro();t=t.child}return t;case 5:return wo(t),null===e&&Ao(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,o=i.children,ki(r,i)?o=null:null!==s&&ki(r,s)&&(t.flags|=16),xa(e,t),_a(e,t,o,n),t.child;case 6:return null===e&&Ao(t),null;case 13:return La(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=lo(t,null,r,n):_a(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Ea(e,t,r,i=t.elementType===r?i:Ds(r,i),n);case 7:return _a(e,t,t.pendingProps,n),t.child;case 8:case 12:return _a(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value;var a=t.type._context;if(Wi(Ls,a._currentValue),a._currentValue=s,null!==o)if(a=o.value,0===(s=Gr(a,s)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(a,s):1073741823))){if(o.children===i.children&&!Qi.current){t=ja(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var u=a.dependencies;if(null!==u){o=a.child;for(var l=u.firstContext;null!==l;){if(l.context===r&&0!=(l.observedBits&s)){1===a.tag&&((l=Gs(-1,n&-n)).tag=2,Ws(a,l)),a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),Vs(a.return,n),u.lanes|=n;break}l=l.next}}else o=10===a.tag&&a.type===t.type?null:a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===t){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}_a(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(s=t.pendingProps).children,js(t,n),r=r(i=zs(i,s.unstable_observedBits)),t.flags|=1,_a(e,t,r,n),t.child;case 14:return s=Ds(i=t.type,t.pendingProps),Ia(e,t,i,s=Ds(i.type,s),r,n);case 15:return Sa(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ds(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,es(r)?(e=!0,is(t)):e=!1,js(t,n),no(t,r,i),io(t,r,i,n),Na(null,t,r,!0,e,n);case 19:return Va(e,t,n);case 23:case 24:return Ta(e,t,n)}throw Error(K(156,t.tag))},Vl.prototype.render=function(e){Fl(e,this._internalRoot,null,null)},Vl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Fl(null,e,null,(function(){t[Fi]=null}))},Vt=function(e){13===e.tag&&(Qu(e,4,Zu()),Bl(e,4))},jt=function(e){13===e.tag&&(Qu(e,67108864,Zu()),Bl(e,67108864))},zt=function(e){if(13===e.tag){var t=Zu(),n=Yu(e);Qu(e,n,t),Bl(e,n)}},qt=function(e,t){return t()},ft=function(e,t,n){switch(t){case"input":if(je(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ji(r);if(!i)throw Error(K(90));Fe(r),je(r,i)}}}break;case"textarea":Ze(e,n);break;case"select":null!=(t=n.value)&&Ke(e,!!n.multiple,t,!1)}},wt=rl,bt=function(e,t,n,r,i){var s=mu;mu|=4;try{return Ns(98,e.bind(null,t,n,r,i))}finally{0===(mu=s)&&(Cu(),Rs())}},_t=function(){0==(49&mu)&&(function(){if(null!==Vu){var e=Vu;Vu=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,Xu(e,xs())}))}Rs()}(),yl())},Et=function(e,t){var n=mu;mu|=2;try{return e(t)}finally{0===(mu=n)&&(Cu(),Rs())}};var Hl={Events:[Bi,Vi,ji,vt,yt,yl,{current:!1}]},Kl={findFiberByHostInstance:$i,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Gl={bundleType:Kl.bundleType,version:Kl.version,rendererPackageName:Kl.rendererPackageName,rendererConfig:Kl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=$t(e))?null:e.stateNode},findFiberByHostInstance:Kl.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{os=Wl.inject(Gl),as=Wl}catch(nt){}}B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hl,B.createPortal=ql,B.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(K(188));throw Error(K(268,Object.keys(e)))}return e=null===(e=$t(t))?null:e.stateNode},B.flushSync=function(e,t){var n=mu;if(0!=(48&n))return e(t);mu|=1;try{if(e)return Ns(99,e.bind(null,t))}finally{mu=n,Rs()}},B.hydrate=function(e,t,n){if(!jl(t))throw Error(K(200));return zl(null,e,t,!0,n)},B.render=function(e,t,n){if(!jl(t))throw Error(K(200));return zl(null,e,t,!1,n)},B.unmountComponentAtNode=function(e){if(!jl(e))throw Error(K(40));return!!e._reactRootContainer&&(il((function(){zl(null,null,e,!1,(function(){e._reactRootContainer=null,e[Fi]=null}))})),!0)},B.unstable_batchedUpdates=rl,B.unstable_createPortal=function(e,t){return ql(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},B.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jl(n))throw Error(K(200));if(null==e||void 0===e._reactInternals)throw Error(K(38));return zl(e,t,n,!1,r)},B.version="17.0.2",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),$.exports=B;var Zl=$.exports,Yl={exports:{}};function Ql(){}function Jl(){}Jl.resetWarningCache=Ql;Yl.exports=function(){function e(e,t,n,r,i,s){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==s){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Jl,resetWarningCache:Ql};return n.PropTypes=n,n}();var Xl=Yl.exports,ec=U.createContext(null);var tc=function(e){e()},nc={notify:function(){}};function rc(){var e=tc,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,i=n={callback:e,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){r&&null!==t&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var ic=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=nc,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=rc())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=nc)},e}(),sc="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.exports.useLayoutEffect:t.exports.useEffect;function oc(e){var n=e.store,r=e.context,i=e.children,s=t.exports.useMemo((function(){var e=new ic(n);return e.onStateChange=e.notifyNestedSubs,{store:n,subscription:e}}),[n]),o=t.exports.useMemo((function(){return n.getState()}),[n]);sc((function(){var e=s.subscription;return e.trySubscribe(),o!==n.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[s,o]);var a=r||ec;return U.createElement(a.Provider,{value:s},i)}function ac(){return(ac=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function uc(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var lc={exports:{}},cc={},dc="function"==typeof Symbol&&Symbol.for,hc=dc?Symbol.for("react.element"):60103,fc=dc?Symbol.for("react.portal"):60106,pc=dc?Symbol.for("react.fragment"):60107,mc=dc?Symbol.for("react.strict_mode"):60108,gc=dc?Symbol.for("react.profiler"):60114,vc=dc?Symbol.for("react.provider"):60109,yc=dc?Symbol.for("react.context"):60110,wc=dc?Symbol.for("react.async_mode"):60111,bc=dc?Symbol.for("react.concurrent_mode"):60111,_c=dc?Symbol.for("react.forward_ref"):60112,Ec=dc?Symbol.for("react.suspense"):60113,Ic=dc?Symbol.for("react.suspense_list"):60120,Sc=dc?Symbol.for("react.memo"):60115,Tc=dc?Symbol.for("react.lazy"):60116,xc=dc?Symbol.for("react.block"):60121,kc=dc?Symbol.for("react.fundamental"):60117,Ac=dc?Symbol.for("react.responder"):60118,Nc=dc?Symbol.for("react.scope"):60119;function Cc(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case hc:switch(e=e.type){case wc:case bc:case pc:case gc:case mc:case Ec:return e;default:switch(e=e&&e.$$typeof){case yc:case _c:case Tc:case Sc:case vc:return e;default:return t}}case fc:return t}}}function Rc(e){return Cc(e)===bc}cc.AsyncMode=wc,cc.ConcurrentMode=bc,cc.ContextConsumer=yc,cc.ContextProvider=vc,cc.Element=hc,cc.ForwardRef=_c,cc.Fragment=pc,cc.Lazy=Tc,cc.Memo=Sc,cc.Portal=fc,cc.Profiler=gc,cc.StrictMode=mc,cc.Suspense=Ec,cc.isAsyncMode=function(e){return Rc(e)||Cc(e)===wc},cc.isConcurrentMode=Rc,cc.isContextConsumer=function(e){return Cc(e)===yc},cc.isContextProvider=function(e){return Cc(e)===vc},cc.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===hc},cc.isForwardRef=function(e){return Cc(e)===_c},cc.isFragment=function(e){return Cc(e)===pc},cc.isLazy=function(e){return Cc(e)===Tc},cc.isMemo=function(e){return Cc(e)===Sc},cc.isPortal=function(e){return Cc(e)===fc},cc.isProfiler=function(e){return Cc(e)===gc},cc.isStrictMode=function(e){return Cc(e)===mc},cc.isSuspense=function(e){return Cc(e)===Ec},cc.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===pc||e===bc||e===gc||e===mc||e===Ec||e===Ic||"object"==typeof e&&null!==e&&(e.$$typeof===Tc||e.$$typeof===Sc||e.$$typeof===vc||e.$$typeof===yc||e.$$typeof===_c||e.$$typeof===kc||e.$$typeof===Ac||e.$$typeof===Nc||e.$$typeof===xc)},cc.typeOf=Cc,lc.exports=cc;var Oc=lc.exports,Pc={};function Dc(){return t.exports.useContext(ec)}function Lc(e){void 0===e&&(e=ec);var n=e===ec?Dc:function(){return t.exports.useContext(e)};return function(){return n().store}}Pc[Oc.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pc[Oc.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var Mc=Lc();function Fc(e){void 0===e&&(e=ec);var t=e===ec?Mc:Lc(e);return function(){return t().dispatch}}var Uc=Fc(),$c=function(e,t){return e===t};function Bc(e){void 0===e&&(e=ec);var n=e===ec?Dc:function(){return t.exports.useContext(e)};return function(e,r){void 0===r&&(r=$c);var i=n(),s=function(e,n,r,i){var s,o=t.exports.useReducer((function(e){return e+1}),0)[1],a=t.exports.useMemo((function(){return new ic(r,i)}),[r,i]),u=t.exports.useRef(),l=t.exports.useRef(),c=t.exports.useRef(),d=t.exports.useRef(),h=r.getState();try{if(e!==l.current||h!==c.current||u.current){var f=e(h);s=void 0!==d.current&&n(f,d.current)?d.current:f}else s=d.current}catch(p){throw u.current&&(p.message+="\nThe error may be correlated with this previous error:\n"+u.current.stack+"\n\n"),p}return sc((function(){l.current=e,c.current=h,d.current=s,u.current=void 0})),sc((function(){function e(){try{var e=r.getState(),t=l.current(e);if(n(t,d.current))return;d.current=t,c.current=e}catch(p){u.current=p}o()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[r,a]),s}(e,r,i.store,i.subscription);return t.exports.useDebugValue(s),s}}var Vc,jc=Bc();function zc(e,t){return(zc=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qc(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,zc(e,t)}function Hc(e){return"/"===e.charAt(0)}function Kc(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}function Gc(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}function Wc(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every((function(e,n){return Wc(e,t[n])}));if("object"==typeof e||"object"==typeof t){var n=Gc(e),r=Gc(t);return n!==e||r!==t?Wc(n,r):Object.keys(Object.assign({},e,t)).every((function(n){return Wc(e[n],t[n])}))}return!1}Vc=$.exports.unstable_batchedUpdates,tc=Vc;function Zc(e,t){if(!e)throw new Error("Invariant failed")}function Yc(e){return"/"===e.charAt(0)?e:"/"+e}function Qc(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function Jc(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function Xc(e){var t=e.pathname,n=e.search,r=e.hash,i=t||"/";return n&&"?"!==n&&(i+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(i+="#"===r.charAt(0)?r:"#"+r),i}function ed(e,t,n,r){var i;"string"==typeof e?(i=function(e){var t=e||"/",n="",r="",i=t.indexOf("#");-1!==i&&(r=t.substr(i),t=t.substr(0,i));var s=t.indexOf("?");return-1!==s&&(n=t.substr(s),t=t.substr(0,s)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(i=ac({},e)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(s){throw s instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):s}return n&&(i.key=n),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],i=t&&t.split("/")||[],s=e&&Hc(e),o=t&&Hc(t),a=s||o;if(e&&Hc(e)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";if(i.length){var u=i[i.length-1];n="."===u||".."===u||""===u}else n=!1;for(var l=0,c=i.length;c>=0;c--){var d=i[c];"."===d?Kc(i,c):".."===d?(Kc(i,c),l++):l&&(Kc(i,c),l--)}if(!a)for(;l--;l)i.unshift("..");!a||""===i[0]||i[0]&&Hc(i[0])||i.unshift("");var h=i.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h}(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function td(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&Wc(e.state,t.state)}function nd(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,i){if(null!=e){var s="function"==typeof e?e(t,n):e;"string"==typeof s?"function"==typeof r?r(s,i):i(!0):i(!1!==s)}else i(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var rd=!("undefined"==typeof window||!window.document||!window.document.createElement);function id(e,t){t(window.confirm(e))}function sd(){try{return window.history.state||{}}catch(e){return{}}}function od(e){void 0===e&&(e={}),rd||Zc(!1);var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),s=e,o=s.forceRefresh,a=void 0!==o&&o,u=s.getUserConfirmation,l=void 0===u?id:u,c=s.keyLength,d=void 0===c?6:c,h=e.basename?Jc(Yc(e.basename)):"";function f(e){var t=e||{},n=t.key,r=t.state,i=window.location,s=i.pathname+i.search+i.hash;return h&&(s=Qc(s,h)),ed(s,r,n)}function p(){return Math.random().toString(36).substr(2,d)}var m=nd();function g(e){ac(A,e),A.length=n.length,m.notifyListeners(A.location,A.action)}function v(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||b(f(e.state))}function y(){b(f(sd()))}var w=!1;function b(e){if(w)w=!1,g();else{m.confirmTransitionTo(e,"POP",l,(function(t){t?g({action:"POP",location:e}):function(e){var t=A.location,n=E.indexOf(t.key);-1===n&&(n=0);var r=E.indexOf(e.key);-1===r&&(r=0);var i=n-r;i&&(w=!0,S(i))}(e)}))}}var _=f(sd()),E=[_.key];function I(e){return h+Xc(e)}function S(e){n.go(e)}var T=0;function x(e){1===(T+=e)&&1===e?(window.addEventListener("popstate",v),i&&window.addEventListener("hashchange",y)):0===T&&(window.removeEventListener("popstate",v),i&&window.removeEventListener("hashchange",y))}var k=!1;var A={length:n.length,action:"POP",location:_,createHref:I,push:function(e,t){var i="PUSH",s=ed(e,t,p(),A.location);m.confirmTransitionTo(s,i,l,(function(e){if(e){var t=I(s),o=s.key,u=s.state;if(r)if(n.pushState({key:o,state:u},null,t),a)window.location.href=t;else{var l=E.indexOf(A.location.key),c=E.slice(0,l+1);c.push(s.key),E=c,g({action:i,location:s})}else window.location.href=t}}))},replace:function(e,t){var i="REPLACE",s=ed(e,t,p(),A.location);m.confirmTransitionTo(s,i,l,(function(e){if(e){var t=I(s),o=s.key,u=s.state;if(r)if(n.replaceState({key:o,state:u},null,t),a)window.location.replace(t);else{var l=E.indexOf(A.location.key);-1!==l&&(E[l]=s.key),g({action:i,location:s})}else window.location.replace(t)}}))},go:S,goBack:function(){S(-1)},goForward:function(){S(1)},block:function(e){void 0===e&&(e=!1);var t=m.setPrompt(e);return k||(x(1),k=!0),function(){return k&&(k=!1,x(-1)),t()}},listen:function(e){var t=m.appendListener(e);return x(1),function(){x(-1),t()}}};return A}var ad="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function ud(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var ld=U.createContext||function(e,n){var r,i,s,o="__create-react-context-"+((ad[s="__global_unique_id__"]=(ad[s]||0)+1)+"__"),a=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).emitter=ud(t.props.value),t}qc(t,e);var r=t.prototype;return r.getChildContext=function(){var e;return(e={})[o]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var t,r=this.props.value,i=e.value;((s=r)===(o=i)?0!==s||1/s==1/o:s!=s&&o!=o)?t=0:(t="function"==typeof n?n(r,i):1073741823,0!==(t|=0)&&this.emitter.set(e.value,t))}var s,o},r.render=function(){return this.props.children},t}(t.exports.Component);a.childContextTypes=((r={})[o]=Xl.object.isRequired,r);var u=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}qc(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},r.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},r.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},r.getValue=function(){return this.context[o]?this.context[o].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(t.exports.Component);return u.contextTypes=((i={})[o]=Xl.object,i),{Provider:a,Consumer:u}},cd={exports:{}},dd=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};cd.exports=_d,cd.exports.parse=fd,cd.exports.compile=function(e,t){return md(fd(e,t),t)},cd.exports.tokensToFunction=md,cd.exports.tokensToRegExp=bd;var hd=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function fd(e,t){for(var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";null!=(n=hd.exec(e));){var u=n[0],l=n[1],c=n.index;if(o+=e.slice(s,c),s=c+u.length,l)o+=l[1];else{var d=e[s],h=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=h&&null!=d&&d!==h,w="+"===g||"*"===g,b="?"===g||"*"===g,_=n[2]||a,E=p||m;r.push({name:f||i++,prefix:h||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!v,pattern:E?vd(E):v?".*":"[^"+gd(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function pd(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function md(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",wd(t)));return function(t,r){for(var i="",s=t||{},o=(r||{}).pretty?pd:encodeURIComponent,a=0;a<e.length;a++){var u=e[a];if("string"!=typeof u){var l,c=s[u.name];if(null==c){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(dd(c)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(c)+"`");if(0===c.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=o(c[d]),!n[a].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?encodeURI(c).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):o(c),!n[a].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function gd(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function vd(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function yd(e,t){return e.keys=t,e}function wd(e){return e&&e.sensitive?"":"i"}function bd(e,t,n){dd(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"==typeof a)s+=gd(a);else{var u=gd(a.prefix),l="(?:"+a.pattern+")";t.push(a),a.repeat&&(l+="(?:"+u+l+")*"),s+=l=a.optional?a.partial?u+"("+l+")?":"(?:"+u+"("+l+"))?":u+"("+l+")"}}var c=gd(n.delimiter||"/"),d=s.slice(-c.length)===c;return r||(s=(d?s.slice(0,-c.length):s)+"(?:"+c+"(?=$))?"),s+=i?"$":r&&d?"":"(?="+c+"|$)",yd(new RegExp("^"+s,wd(n)),t)}function _d(e,t,n){return dd(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return yd(e,t)}(e,t):dd(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(_d(e[i],t,n).source);return yd(new RegExp("(?:"+r.join("|")+")",wd(n)),t)}(e,t,n):function(e,t,n){return bd(fd(e,n),t,n)}(e,t,n)}var Ed=cd.exports,Id=function(e){var t=ld();return t.displayName=e,t},Sd=Id("Router-History"),Td=Id("Router"),xd=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}qc(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return U.createElement(Td.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},U.createElement(Sd.Provider,{children:this.props.children||null,value:this.props.history}))},t}(U.Component);U.Component;var kd=function(e){function t(){return e.apply(this,arguments)||this}qc(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},t}(U.Component),Ad={},Nd=0;function Cd(e,t){return void 0===e&&(e="/"),void 0===t&&(t={}),"/"===e?e:function(e){if(Ad[e])return Ad[e];var t=Ed.compile(e);return Nd<1e4&&(Ad[e]=t,Nd++),t}(e)(t,{pretty:!0})}function Rd(e){var t=e.computedMatch,n=e.to,r=e.push,i=void 0!==r&&r;return U.createElement(Td.Consumer,null,(function(e){e||Zc(!1);var r=e.history,s=e.staticContext,o=i?r.push:r.replace,a=ed(t?"string"==typeof n?Cd(n,t.params):ac({},n,{pathname:Cd(n.pathname,t.params)}):n);return s?(o(a),null):U.createElement(kd,{onMount:function(){o(a)},onUpdate:function(e,t){var n=ed(t.to);td(n,ac({},a,{key:n.key}))||o(a)},to:n})}))}var Od={},Pd=0;function Dd(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,i=n.exact,s=void 0!==i&&i,o=n.strict,a=void 0!==o&&o,u=n.sensitive,l=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=Od[n]||(Od[n]={});if(r[e])return r[e];var i=[],s={regexp:Ed(e,i,t),keys:i};return Pd<1e4&&(r[e]=s,Pd++),s}(n,{end:s,strict:a,sensitive:l}),i=r.regexp,o=r.keys,u=i.exec(e);if(!u)return null;var c=u[0],d=u.slice(1),h=e===c;return s&&!h?null:{path:n,url:"/"===n&&""===c?"/":c,isExact:h,params:o.reduce((function(e,t,n){return e[t.name]=d[n],e}),{})}}),null)}var Ld=function(e){function t(){return e.apply(this,arguments)||this}return qc(t,e),t.prototype.render=function(){var e=this;return U.createElement(Td.Consumer,null,(function(t){t||Zc(!1);var n=e.props.location||t.location,r=ac({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?Dd(n.pathname,e.props):t.match}),i=e.props,s=i.children,o=i.component,a=i.render;return Array.isArray(s)&&function(e){return 0===U.Children.count(e)}(s)&&(s=null),U.createElement(Td.Provider,{value:r},r.match?s?"function"==typeof s?s(r):s:o?U.createElement(o,r):a?a(r):null:"function"==typeof s?s(r):null)}))},t}(U.Component);U.Component;var Md=function(e){function t(){return e.apply(this,arguments)||this}return qc(t,e),t.prototype.render=function(){var e=this;return U.createElement(Td.Consumer,null,(function(t){t||Zc(!1);var n,r,i=e.props.location||t.location;return U.Children.forEach(e.props.children,(function(e){if(null==r&&U.isValidElement(e)){n=e;var s=e.props.path||e.props.from;r=s?Dd(i.pathname,ac({},e.props,{path:s})):t.match}})),r?U.cloneElement(n,{location:i,computedMatch:r}):null}))},t}(U.Component);U.useContext;var Fd=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=od(t.props),t}return qc(t,e),t.prototype.render=function(){return U.createElement(xd,{history:this.history,children:this.props.children})},t}(U.Component);U.Component;var Ud=function(e,t){return"function"==typeof e?e(t):e},$d=function(e,t){return"string"==typeof e?ed(e,null,null,t):e},Bd=function(e){return e},Vd=U.forwardRef;void 0===Vd&&(Vd=Bd);var jd=Vd((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,s=uc(e,["innerRef","navigate","onClick"]),o=s.target,a=ac({},s,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return a.ref=Bd!==Vd&&t||n,U.createElement("a",a)})),zd=Vd((function(e,t){var n=e.component,r=void 0===n?jd:n,i=e.replace,s=e.to,o=e.innerRef,a=uc(e,["component","replace","to","innerRef"]);return U.createElement(Td.Consumer,null,(function(e){e||Zc(!1);var n=e.history,u=$d(Ud(s,e.location),e.location),l=u?n.createHref(u):"",c=ac({},a,{href:l,navigate:function(){var t=Ud(s,e.location),r=Xc(e.location)===Xc($d(t));(i||r?n.replace:n.push)(t)}});return Bd!==Vd?c.ref=t||o:c.innerRef=o,U.createElement(r,c)}))})),qd=function(e){return e},Hd=U.forwardRef;void 0===Hd&&(Hd=qd),Hd((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,s=void 0===i?"active":i,o=e.activeStyle,a=e.className,u=e.exact,l=e.isActive,c=e.location,d=e.sensitive,h=e.strict,f=e.style,p=e.to,m=e.innerRef,g=uc(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return U.createElement(Td.Consumer,null,(function(e){e||Zc(!1);var n=c||e.location,i=$d(Ud(p,n),n),v=i.pathname,y=v&&v.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),w=y?Dd(n.pathname,{path:y,exact:u,sensitive:d,strict:h}):null,b=!!(l?l(w,n):w),_=b?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(a,s):a,E=b?ac({},f,o):f,I=ac({"aria-current":b&&r||null,className:_,style:E,to:i},g);return qd!==Hd?I.ref=t||m:I.innerRef=m,U.createElement(zd,I)}))}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Kd=function(e,t){return(Kd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var Gd=function(){return(Gd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function Wd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Zd(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))}function Yd(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function Qd(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Jd(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Xd(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eh=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,l=u?e[i+2]:0,c=s>>2,d=(3&s)<<4|a>>4,h=(15&a)<<2|l>>6,f=63&l;u||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eh(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==u)throw Error();var l=s<<2|o>>4;if(r.push(l),64!==a){var c=o<<4&240|a>>2;if(r.push(c),64!==u){var d=a<<6&192|u;r.push(d)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},nh=function(e){return function(e){var t=eh(e);return th.encodeByteArray(t,!0)}(e).replace(/\./g,"")};function rh(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=rh(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ih=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function oh(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sh())}function ah(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function uh(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function lh(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ch(){var e=sh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function dh(){return"indexedDB"in self&&null!=indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hh=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,fh.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Kd(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),fh=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?ph(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",u=new hh(i,a,r);return u},e}();function ph(e,t){return e.replace(mh,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var mh=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function vh(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=e[o],u=t[o];if(yh(a)&&yh(u)){if(!vh(a,u))return!1}else if(a!==u)return!1}for(var l=0,c=r;l<c.length;l++){o=c[l];if(!n.includes(o))return!1}return!0}function yh(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}function bh(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function _h(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Eh(e,t){var n=new Ih(e,t);return n.subscribe.bind(n)}var Ih=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Sh),void 0===r.error&&(r.error=Sh),void 0===r.complete&&(r.complete=Sh);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function Sh(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(e){return e&&e._delegate?e._delegate:e}var xh=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),kh=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new ih;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(c){}try{for(var r=Qd(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=Jd(i.value,2),o=s[0],a=s[1],u=this.normalizeInstanceIdentifier(o);try{var l=this.getOrInitializeService({instanceIdentifier:u});a.resolve(l)}catch(c){}}}catch(d){t={error:d}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Zd(this,void 0,void 0,(function(){var e;return Yd(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Xd(Xd([],Jd(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Jd(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=Qd(this.instancesDeferred.entries()),u=a.next();!u.done;u=a.next()){var l=Jd(u.value,2),c=l[0],d=l[1];s===this.normalizeInstanceIdentifier(c)&&d.resolve(o)}}catch(h){t={error:h}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=Qd(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(u){}}}catch(l){n={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ah,Nh=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new kh(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Ch(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rh,Oh,Ph=[];(Oh=Rh||(Rh={}))[Oh.DEBUG=0]="DEBUG",Oh[Oh.VERBOSE=1]="VERBOSE",Oh[Oh.INFO=2]="INFO",Oh[Oh.WARN=3]="WARN",Oh[Oh.ERROR=4]="ERROR",Oh[Oh.SILENT=5]="SILENT";var Dh={debug:Rh.DEBUG,verbose:Rh.VERBOSE,info:Rh.INFO,warn:Rh.WARN,error:Rh.ERROR,silent:Rh.SILENT},Lh=Rh.INFO,Mh=((Ah={})[Rh.DEBUG]="log",Ah[Rh.VERBOSE]="log",Ah[Rh.INFO]="info",Ah[Rh.WARN]="warn",Ah[Rh.ERROR]="error",Ah),Fh=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=Mh[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,Ch(["["+i+"]  "+e.name+":"],n))}},Uh=function(){function e(e){this.name=e,this._logLevel=Lh,this._logHandler=Fh,this._userLogHandler=null,Ph.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Rh))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?Dh[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ch([this,Rh.DEBUG],e)),this._logHandler.apply(this,Ch([this,Rh.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ch([this,Rh.VERBOSE],e)),this._logHandler.apply(this,Ch([this,Rh.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ch([this,Rh.INFO],e)),this._logHandler.apply(this,Ch([this,Rh.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ch([this,Rh.WARN],e)),this._logHandler.apply(this,Ch([this,Rh.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ch([this,Rh.ERROR],e)),this._logHandler.apply(this,Ch([this,Rh.ERROR],e))},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $h{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Bh=new Uh("@firebase/app"),Vh={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},jh=new Map,zh=new Map;function qh(e,t){try{e.container.addComponent(t)}catch(n){Bh.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hh(e,t){e.container.addOrOverwriteComponent(t)}function Kh(e){const t=e.name;if(zh.has(t))return Bh.debug(`There were multiple attempts to register component ${t}.`),!1;zh.set(t,e);for(const n of jh.values())qh(n,e);return!0}function Gh(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wh=new fh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zh{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xh("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wh.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Wh.create("bad-app-name",{appName:String(r)});const i=jh.get(r);if(i){if(vh(e,i.options)&&vh(n,i.config))return i;throw Wh.create("duplicate-app",{appName:r})}const s=new Nh(r);for(const a of zh.values())s.addComponent(a);const o=new Zh(e,n,s);return jh.set(r,o),o}async function Qh(e){const t=e.name;jh.has(t)&&(jh.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Jh(e,t,n){var r;let i=null!==(r=Vh[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Bh.warn(e.join(" "))}Kh(new xh(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function Xh(e,t){if(null!==e&&"function"!=typeof e)throw Wh.create("invalid-log-argument");!function(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=Dh[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];var o=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:Rh[n].toLowerCase(),message:o,args:i,type:t.name})}},r=0,i=Ph;r<i.length;r++)n(i[r])}(e,t)}function ef(e){var t;t=e,Ph.forEach((function(e){e.setLogLevel(t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tf;Kh(new xh("platform-logger",(e=>new $h(e)),"PRIVATE")),Jh("@firebase/app","0.7.0",tf),Jh("fire-js","");var nf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:"9.0.0",_DEFAULT_ENTRY_NAME:"[DEFAULT]",_addComponent:qh,_addOrOverwriteComponent:Hh,_apps:jh,_clearComponents:function(){zh.clear()},_components:zh,_getProvider:Gh,_registerComponent:Kh,_removeServiceInstance:function(e,t,n="[DEFAULT]"){Gh(e,t).clearInstance(n)},deleteApp:Qh,getApp:function(e="[DEFAULT]"){const t=jh.get(e);if(!t)throw Wh.create("no-app",{appName:e});return t},getApps:function(){return Array.from(jh.values())},initializeApp:Yh,onLog:Xh,registerVersion:Jh,setLogLevel:ef,FirebaseError:hh});
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this._delegate=e,this.firebase=t,qh(e,new xh("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Qh(this._delegate))))}_getService(e,t="[DEFAULT]"){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t="[DEFAULT]"){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){qh(this._delegate,e)}_addOrOverwriteComponent(e){Hh(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new fh("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const of=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(r,i={}){const s=Yh(r,i);if(gh(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o},app:r,registerVersion:Jh,setLogLevel:ef,onLog:Xh,apps:null,SDK_VERSION:"9.0.0",INTERNAL:{registerComponent:function(t){const i=t.name,s=i.replace("-compat","");if(Kh(t)&&"PUBLIC"===t.type){const o=(e=r())=>{if("function"!=typeof e[s])throw sf.create("invalid-app-argument",{appName:i});return e[s]()};void 0!==t.serviceProps&&rh(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:nf}};function r(e){if(!gh(t,e=e||"[DEFAULT]"))throw sf.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),r.App=e,n}(rf);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){rh(t,e)},createSubscribe:Eh,ErrorFactory:fh,deepExtend:rh}),t}(),af=new Uh("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){af.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&af.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const uf=of;!
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Jh("@firebase/app-compat","0.1.1",e)}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
uf.registerVersion("firebase","9.0.1","app-compat");const lf="facebook.com",cf="github.com",df="google.com",hf="password",ff="twitter.com",pf="EMAIL_SIGNIN",mf="PASSWORD_RESET",gf="RECOVER_EMAIL",vf="REVERT_SECOND_FACTOR_ADDITION",yf="VERIFY_AND_CHANGE_EMAIL",wf="VERIFY_EMAIL";const bf=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},_f=new fh("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ef=new Uh("@firebase/auth");function If(e,...t){Ef.logLevel<=Rh.ERROR&&Ef.error(`Auth (9.0.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(e,...t){throw xf(e,...t)}function Tf(e,...t){return xf(e,...t)}function xf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return _f.create(e,...t)}function kf(e,t,...n){if(!e)throw xf(t,...n)}function Af(e){const t="INTERNAL ASSERTION FAILED: "+e;throw If(t),new Error(t)}function Nf(e,t){e||Af(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new Map;function Rf(e){Nf(e instanceof Function,"Expected a class definition");let t=Cf.get(e);return t?(Nf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Cf.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Of(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Pf(){return"http:"===Df()||"https:"===Df()}function Df(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lf{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nf(t>e,"Short delay should be less than long delay!"),this.isMobile=oh()||lh()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Pf()||uh()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(e,t){Nf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Af("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Af("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Af("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},$f=new Lf(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vf(e,t,n,r,i={}){return jf(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=wh(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(Ff.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Ff.fetch()(qf(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function jf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Uf),t);try{const t=new Hf(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Kf(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Kf(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw Kf(e,"email-already-in-use",s);Sf(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(i){if(i instanceof hh)throw i;Sf(e,"network-request-failed")}}async function zf(e,t,n,r,i={}){const s=await Vf(e,t,n,r,i);return"mfaPendingCredential"in s&&Sf(e,"multi-factor-auth-required",{serverResponse:s}),s}function qf(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Mf(e.config,i):`${e.config.apiScheme}://${i}`}class Hf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Tf(this.auth,"timeout"))),$f.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kf(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tf(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gf(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Wf(e){return 1e3*Number(e)}function Zf(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return If("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return th.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(If("Failed to decode base64 JWT payload"),null)}catch(i){return If("Caught error parsing JWT payload as JSON",i),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yf(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof hh&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Qf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gf(this.lastLoginAt),this.creationTime=Gf(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xf(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Yf(e,async function(e,t){return Vf(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));kf(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Wd(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(u=e.providerData,l=o,[...u.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var u,l;const c=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!c&&d,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Jf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ep{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){kf(e.idToken,"internal-error"),kf(void 0!==e.idToken,"internal-error"),kf(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Zf(e);return kf(t,"internal-error"),kf(void 0!==t.exp,"internal-error"),kf(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return kf(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await jf(e,{},(()=>{const n=wh({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=qf(e,r,"/v1/token",`key=${i}`);return Ff.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ep;return n&&(kf("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(kf("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(kf("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ep,this.toJSON())}_performRefresh(){return Af("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(e,t){kf("string"==typeof e||void 0===e,"internal-error",{appName:t})}class np{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Qf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Jf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Yf(this,this.stsTokenManager.getToken(this.auth,e));return kf(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Th(e),r=await n.getIdToken(t),i=Zf(r);kf(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gf(Wf(i.auth_time)),issuedAtTime:Gf(Wf(i.iat)),expirationTime:Gf(Wf(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Th(e);await Xf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(kf(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new np(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){kf(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Xf(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yf(this,async function(e,t){return Vf(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,u,l;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(u=t.createdAt)&&void 0!==u?u:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;kf(y&&E,e,"internal-error");const I=ep.fromJSON(this.name,E);kf("string"==typeof y,e,"internal-error"),tp(c,e.name),tp(d,e.name),kf("boolean"==typeof w,e,"internal-error"),kf("boolean"==typeof b,e,"internal-error"),tp(h,e.name),tp(f,e.name),tp(p,e.name),tp(m,e.name),tp(g,e.name),tp(v,e.name);const S=new np({uid:y,auth:e,email:d,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ep;r.updateFromServerResponse(t);const i=new np({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Xf(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rp.type="NONE";const ip=rp;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(e,t,n){return`firebase:${e}:${t}:${n}`}class op{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=sp(this.userKey,r.apiKey,i),this.fullPersistenceKey=sp("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?np._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new op(Rf(ip),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Rf(ip);const s=sp(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=np._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(u){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(u){}}))),new op(i,e,n)):new op(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(up(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fp(t))return"Blackberry";if(pp(t))return"Webos";if(lp(t))return"Safari";if((t.includes("chrome/")||cp(t))&&!t.includes("edge/"))return"Chrome";if(hp(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function up(e=sh()){return/firefox\//i.test(e)}function lp(e=sh()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cp(e=sh()){return/crios\//i.test(e)}function dp(e=sh()){return/iemobile/i.test(e)}function hp(e=sh()){return/android/i.test(e)}function fp(e=sh()){return/blackberry/i.test(e)}function pp(e=sh()){return/webos/i.test(e)}function mp(e=sh()){return/iphone|ipad|ipod/i.test(e)}function gp(e=sh()){return mp(e)||hp(e)||pp(e)||fp(e)||/windows phone/i.test(e)||dp(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vp(e,t=[]){let n;switch(e){case"Browser":n=ap(sh());break;case"Worker":n=`${ap(sh())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bp(this),this.idTokenSubscription=new bp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_f,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rf(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await op.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(kf(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xf(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Th(e):null;return t&&kf(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&kf(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Rf(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fh("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rf(e)||this._popupRedirectResolver;kf(t,this,"argument-error"),this.redirectPersistenceManager=await op.create(this,[Rf(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return kf(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return kf(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function wp(e){return Th(e)}class bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eh((e=>this.observer=e))}get next(){return kf(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _p(e,t,n){const r=wp(e);kf(r._canInitEmulator,r,"emulator-config-failed"),kf(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Ep(t),{host:o,port:a}=function(e){const t=Ep(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ip(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ip(t)}}}(t),u=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),function(e){function t(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"==typeof window||"undefined"==typeof document||e||("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i)}function Ep(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ip(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Sp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Af("not implemented")}_getIdTokenResponse(e){return Af("not implemented")}_linkToIdToken(e,t){return Af("not implemented")}_getReauthenticationResolver(e){return Af("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(e,t){return Vf(e,"POST","/v1/accounts:resetPassword",Bf(e,t))}async function xp(e,t){return Vf(e,"POST","/v1/accounts:update",t)}async function kp(e,t){return Vf(e,"POST","/v1/accounts:sendOobCode",Bf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ap extends Sp{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ap(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ap(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return zf(e,"POST","/v1/accounts:signInWithPassword",Bf(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return zf(e,"POST","/v1/accounts:signInWithEmailLink",Bf(e,t))}(e,{email:this._email,oobCode:this._password});default:Sf(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return zf(e,"POST","/v1/accounts:signInWithEmailLink",Bf(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Sf(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(e,t){return zf(e,"POST","/v1/accounts:signInWithIdp",Bf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sf("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Wd(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Cp(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return Np(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Np(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Np(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wh(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Op extends Sp{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Op({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Op({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return zf(e,"POST","/v1/accounts:signInWithPhoneNumber",Bf(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await zf(e,"POST","/v1/accounts:signInWithPhoneNumber",Bf(e,t));if(n.temporaryProof)throw Kf(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return zf(e,"POST","/v1/accounts:signInWithPhoneNumber",Bf(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Rp)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Op({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){var t,n,r,i,s,o;const a=bh(_h(e)),u=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);kf(u&&l&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=bh(_h(e)).link,n=t?bh(_h(t)).deep_link_id:null,r=bh(_h(e)).deep_link_id;return(r?bh(_h(r)).link:null)||r||n||t||e}(e);try{return new Pp(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.providerId=Dp.PROVIDER_ID}static credential(e,t){return Ap._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Pp.parseLink(t);return kf(n,"argument-error"),Ap._fromEmailAndCode(e,n.code,n.tenantId)}}Dp.PROVIDER_ID="password",Dp.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Dp.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp extends Lp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fp extends Mp{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return kf("providerId"in t&&"signInMethod"in t,"argument-error"),Cp._fromParams(t)}credential(e){return this._credential(e)}_credential(e){return kf(e.idToken||e.accessToken,"argument-error"),Cp._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Fp.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fp.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new Fp(o)._credential({idToken:t,accessToken:n,rawNonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends Mp{constructor(){super("facebook.com")}static credential(e){return Cp._fromParams({providerId:Up.PROVIDER_ID,signInMethod:Up.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Up.credentialFromTaggedObject(e)}static credentialFromError(e){return Up.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Up.credential(e.oauthAccessToken)}catch(t){return null}}}Up.FACEBOOK_SIGN_IN_METHOD="facebook.com",Up.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $p extends Mp{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cp._fromParams({providerId:$p.PROVIDER_ID,signInMethod:$p.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $p.credentialFromTaggedObject(e)}static credentialFromError(e){return $p.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $p.credential(t,n)}catch(r){return null}}}$p.GOOGLE_SIGN_IN_METHOD="google.com",$p.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bp extends Mp{constructor(){super("github.com")}static credential(e){return Cp._fromParams({providerId:Bp.PROVIDER_ID,signInMethod:Bp.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bp.credentialFromTaggedObject(e)}static credentialFromError(e){return Bp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Bp.credential(e.oauthAccessToken)}catch(t){return null}}}Bp.GITHUB_SIGN_IN_METHOD="github.com",Bp.PROVIDER_ID="github.com";class Vp extends Sp{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Np(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Np(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Np(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Vp(n,i):null}static _create(e,t){return new Vp(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends Mp{constructor(){super("twitter.com")}static credential(e,t){return Cp._fromParams({providerId:jp.PROVIDER_ID,signInMethod:jp.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jp.credentialFromTaggedObject(e)}static credentialFromError(e){return jp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return jp.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zp(e,t){return zf(e,"POST","/v1/accounts:signUp",Bf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jp.TWITTER_SIGN_IN_METHOD="twitter.com",jp.PROVIDER_ID="twitter.com";class qp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await np._fromIdTokenResponse(e,n,r),s=Hp(n);return new qp({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Hp(n);return new qp({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Hp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kp extends hh{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Kp.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Kp(e,t,n,r)}}function Gp(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Kp._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(e,t){const n=Th(e);await Qp(!0,n,t);const{providerUserInfo:r}=await async function(e,t){return Vf(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=Wp(r||[]);return n.providerData=n.providerData.filter((e=>i.has(e.providerId))),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Yp(e,t,n=!1){const r=await Yf(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qp._forOperation(e,"link",r)}async function Qp(e,t,n){await Xf(t);const r=!1===e?"provider-already-linked":"no-such-provider";kf(Wp(t.providerData).has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Yf(e,Gp(r,i,t,e),n);kf(s.idToken,r,"internal-error");const o=Zf(s.idToken);kf(o,r,"internal-error");const{sub:a}=o;return kf(e.uid===a,r,"user-mismatch"),qp._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&Sf(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(e,t,n=!1){const r="signIn",i=await Gp(e,r,t),s=await qp._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function em(e,t){return Xp(wp(e),t)}async function tm(e,t){const n=Th(e);return await Qp(!1,n,t.providerId),Yp(n,t)}async function nm(e,t){return Jp(Th(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rm(e,t){const n=wp(e),r=await async function(e,t){return zf(e,"POST","/v1/accounts:signInWithCustomToken",Bf(e,t))}(n,{token:t,returnSecureToken:!0}),i=await qp._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?sm._fromServerResponse(e,t):Sf(e,"internal-error")}}class sm extends im{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new sm(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(e,t,n){var r;kf((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),kf(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(kf(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iosBundleId=n.iOS.bundleId),n.android&&(kf(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(e,t,n){const r=Th(e),i={requestType:"PASSWORD_RESET",email:t};n&&om(r,i,n),await async function(e,t){return kp(e,t)}(r,i)}async function um(e,t){await async function(e,t){return Vf(e,"POST","/v1/accounts:update",Bf(e,t))}(Th(e),{oobCode:t})}async function lm(e,t){const n=Th(e),r=await Tp(n,{oobCode:t}),i=r.requestType;switch(kf(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":kf(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":kf(r.mfaInfo,n,"internal-error");default:kf(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=im._fromServerResponse(wp(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function cm(e,t,n){const r=Th(e),i={requestType:"EMAIL_SIGNIN",email:t};kf(n.handleCodeInApp,r,"argument-error"),n&&om(r,i,n),await async function(e,t){return kp(e,t)}(r,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dm(e,t){const n={identifier:t,continueUri:Pf()?Of():"http://localhost"},{signinMethods:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Vf(e,"POST","/v1/accounts:createAuthUri",Bf(e,t))}(Th(e),n);return r||[]}async function hm(e,t){const n=Th(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&om(n.auth,r,t);const{email:i}=await async function(e,t){return kp(e,t)}(n.auth,r);i!==e.email&&await e.reload()}async function fm(e,t,n){const r=Th(e),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&om(r.auth,i,n);const{email:s}=await async function(e,t){return kp(e,t)}(r.auth,i);s!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pm(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Th(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Yf(r,async function(e,t){return Vf(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}async function mm(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await Yf(e,xp(r,i));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class vm extends gm{constructor(e,t,n,r){super(e,t,n),this.username=r}}class ym extends gm{constructor(e,t){super(e,"facebook.com",t)}}class wm extends vm{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class bm extends gm{constructor(e,t){super(e,"google.com",t)}}class _m extends vm{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Em(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=Zf(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new gm(s,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new ym(s,i);case"github.com":return new wm(s,i);case"google.com":return new bm(s,i);case"twitter.com":return new _m(s,i,e.screenName||null);case"custom":case"anonymous":return new gm(s,null);default:return new gm(s,r,i)}}(n)}class Im{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Im("enroll",e)}static _fromMfaPendingCredential(e){return new Im("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Im._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Im._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=wp(e),r=(t.serverResponse.mfaInfo||[]).map((e=>im._fromServerResponse(n,e)));kf(t.serverResponse.mfaPendingCredential,n,"internal-error");const i=Im._fromMfaPendingCredential(t.serverResponse.mfaPendingCredential);return new Sm(i,r,(async e=>{const r=await e._process(n,i);delete t.serverResponse.mfaInfo,delete t.serverResponse.mfaPendingCredential;const s=Object.assign(Object.assign({},t.serverResponse),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await qp._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return kf(t.user,n,"internal-error"),qp._forOperation(t.user,t.operationType,s);default:Sf(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}class Tm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>im._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Tm(e)}async getSession(){return Im._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await Yf(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),r=await Yf(this.user,(i=this.user.auth,s={idToken:n,mfaEnrollmentId:t},Vf(i,"POST","/v2/accounts/mfaEnrollment:withdraw",Object.assign({tenantId:i.tenantId},s))));var i,s;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(o){if("auth/user-token-expired"!==o.code)throw o}}}const xm=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class km{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends km{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=sh();return lp(e)||mp(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=gp(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ch()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Am.type="LOCAL";const Nm=Am;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends km{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cm.type="SESSION";const Rm=Cm;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Om{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Om(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pm(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Om.receivers=[];class Dm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=Pm("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mm(){return void 0!==Lm().WorkerGlobalScope&&"function"==typeof Lm().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fm="firebaseLocalStorageDb";class Um{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function $m(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Bm(){const e=indexedDB.open(Fm,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Fm);return new Um(e).toPromise()}(),t(await Bm()))}))}))}async function Vm(e,t,n){const r=$m(e,!0).put({fbase_key:t,value:n});return new Um(r).toPromise()}function jm(e,t){const n=$m(e,!0).delete(t);return new Um(n).toPromise()}class zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Bm()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Om._getInstance(Mm()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Dm(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bm();return await Vm(e,"__sak","1"),await jm(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Vm(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=$m(e,!1).get(t),r=await new Um(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>jm(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=$m(e,!1).getAll();return new Um(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}zm.type="LOCAL";const qm=zm;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Tf("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Km(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Wm(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Wm{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;kf(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Zm=Km("rcb"),Ym=new Lf(3e4,6e4);class Qm{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Lm().grecaptcha}load(e,t=""){return kf(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Lm().grecaptcha):new Promise(((n,r)=>{const i=Lm().setTimeout((()=>{r(Tf(e,"network-request-failed"))}),Ym.get());Lm()[Zm]=()=>{Lm().clearTimeout(i),delete Lm()[Zm];const s=Lm().grecaptcha;if(!s)return void r(Tf(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};Hm(`https://www.google.com/recaptcha/api.js??${wh({onload:Zm,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(i),r(Tf(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Lm().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class Jm{async load(e){return new Gm(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm={theme:"light",type:"image"};class eg{constructor(e,t=Object.assign({},Xm),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=wp(n),this.isInvisible="invisible"===this.parameters.size,kf("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;kf(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Jm:new Qm,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){kf(!this.parameters.sitekey,this.auth,"argument-error"),kf(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),kf("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=Lm()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){kf(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){kf(Pf()&&!Mm(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await Vf(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);kf(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return kf(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class tg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Op._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ng(e,t,n){var r;const i=await n.verify();try{let s;if(kf("string"==typeof i,e,"argument-error"),kf("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){kf("enroll"===t.type,e,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Vf(e,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:e.tenantId},t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{kf("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;kf(n,e,"missing-multi-factor-info");return(await function(e,t){return Vf(e,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:e.tenantId},t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Vf(e,"POST","/v1/accounts:sendVerificationCode",Bf(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rg{constructor(e){this.providerId=rg.PROVIDER_ID,this.auth=wp(e)}verifyPhoneNumber(e,t){return ng(this.auth,e,Th(t))}static credential(e,t){return Op._fromVerification(e,t)}static credentialFromResult(e){const t=e;return rg.credentialFromTaggedObject(t)}static credentialFromError(e){return rg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Op._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ig(e,t){return t?Rf(t):(kf(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rg.PROVIDER_ID="phone",rg.PHONE_SIGN_IN_METHOD="phone";class sg extends Sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Np(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Np(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Np(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function og(e){return Xp(e.auth,new sg(e),e.bypassAuthState)}function ag(e){const{auth:t,user:n}=e;return kf(n,t,"internal-error"),Jp(n,new sg(e),e.bypassAuthState)}async function ug(e){const{auth:t,user:n}=e;return kf(n,t,"internal-error"),Yp(n,new sg(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return og;case"linkViaPopup":case"linkViaRedirect":return ug;case"reauthViaPopup":case"reauthViaRedirect":return ag;default:Sf(this.auth,"internal-error")}}resolve(e){Nf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new Lf(2e3,1e4);class dg extends lg{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,dg.currentPopupAction&&dg.currentPopupAction.cancel(),dg.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return kf(e,this.auth,"internal-error"),e}async onExecution(){Nf(1===this.filter.length,"Popup operations only handle one event");const e=Pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Tf(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Tf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dg.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Tf(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,cg.get())};e()}}dg.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hg=new Map;class fg extends lg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hg.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=gg(t),r="true"===await mg(e)._get(n);return await mg(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}hg.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pg(e,t){return mg(e)._set(gg(t),"true")}function mg(e){return Rf(e._redirectPersistence)}function gg(e){return sp("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(e,t,n){return async function(e,t,n){const r=wp(e);kf(t instanceof Lp,e,"argument-error");const i=ig(r,n);return await pg(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function yg(e,t,n){return async function(e,t,n){const r=Th(e);kf(t instanceof Lp,r.auth,"argument-error");const i=ig(r.auth,n);await pg(i,r.auth);const s=await _g(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}(e,t,n)}function wg(e,t,n){return async function(e,t,n){const r=Th(e);kf(t instanceof Lp,r.auth,"argument-error");const i=ig(r.auth,n);await Qp(!1,r,t.providerId),await pg(i,r.auth);const s=await _g(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}(e,t,n)}async function bg(e,t,n=!1){const r=wp(e),i=ig(r,t),s=new fg(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function _g(e){const t=Pm(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sg(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Sg(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Tf(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ig(e))}saveEventToCache(e){this.cachedEventUids.add(Ig(e)),this.lastProcessedEventTime=Date.now()}}function Ig(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Sg({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function Tg(e,t={}){return Vf(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kg=/^https?/;function Ag(e){const t=Of(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!kg.test(n))return!1;if(xg.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=new Lf(3e4,6e4);function Cg(){const e=Lm().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}let Rg=null;function Og(e){return Rg=Rg||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Cg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Cg(),n(Tf(e,"network-request-failed"))},timeout:Ng.get()})}if(null===(i=null===(r=Lm().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Lm().gapi)||void 0===s?void 0:s.load)){const t=Km("iframefcb");return Lm()[t]=()=>{gapi.load?o():n(Tf(e,"network-request-failed"))},Hm(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw Rg=null,e}))}(e),Rg}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Lf(5e3,15e3),Dg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Lg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mg(e){const t=e.config;kf(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Mf(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0"},i=Lg.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wh(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ug{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function $g(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Fg),{width:r.toString(),height:i.toString(),top:s,left:o}),l=sh().toLowerCase();n&&(a=cp(l)?"_blank":n),up(l)&&(t=t||"http://localhost",u.scrollbars="yes");const c=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=sh()){var t;return mp(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Ug(null);const d=window.open(t||"",a,c);kf(d,e,"popup-blocked");try{d.focus()}catch(h){}return new Ug(d)}function Bg(e,t,n,r,i,s){kf(e.config.authDomain,e,"auth-domain-config-required"),kf(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0",eventId:i};if(t instanceof Lp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Mp){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))void 0===a[u]&&delete a[u];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Mf(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${wh(a).slice(1)}`}const Vg=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rm,this._completeRedirectFn=bg}async _openPopup(e,t,n,r){var i;Nf(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return $g(e,Bg(e,t,n,Of(),r),Pm())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Bg(e,t,n,Of(),r),Lm().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Nf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await Og(e),n=Lm().gapi;return kf(n,e,"internal-error"),t.open({where:document.body,url:Mg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dg,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Tf(e,"network-request-failed"),s=Lm().setTimeout((()=>{r(i)}),Pg.get());function o(){Lm().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Eg(e);return t.register("authEvent",(t=>{kf(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Sf(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Tg(e);for(const r of t)try{if(Ag(r))return}catch(n){}Sf(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gp()||lp()||mp()}};class jg extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Af("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new jg(e)}_finalizeEnroll(e,t,n){return function(e,t){return Vf(e,"POST","/v2/accounts/mfaEnrollment:finalize",Object.assign({tenantId:e.tenantId},t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Vf(e,"POST","/v2/accounts/mfaSignIn:finalize",Object.assign({tenantId:e.tenantId},t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class zg{constructor(){}static assertion(e){return jg._fromCredential(e)}}var qg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){kf(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kg(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qg="Browser",Kh(new xh("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{kf(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),kf(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:qg,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vp(qg)},s=new yp(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rf);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Kh(new xh("auth-internal",(e=>{const t=wp(e.getProvider("auth").getImmediate());return new Hg(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Jh("@firebase/auth","0.17.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(qg));async function Gg(e,t,n){var r;const{BuildInfo:i}=Kg();Nf(t.sessionId,"AuthEvent did not contain a session ID");const s=await async function(e){const t=function(e){if(Nf(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),o={};return mp()?o.ibi=i.packageName:hp()?o.apn=i.packageName:Sf(e,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Bg(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}function Wg(e){const{cordova:t}=Kg();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,function(e=sh()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),n(i)}))}))}class Zg extends Eg{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function Yg(e){const t=await Xg()._get(ev(e));return t&&await Xg()._remove(ev(e)),t}function Qg(e,t){var n,r;const i=function(e){const t=tv(e),n=t.link?decodeURIComponent(t.link):void 0,r=tv(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return tv(i).link||i||r||n||e}(t);if(i.includes("/__/auth/callback")){const t=tv(i),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(t){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(r=null===(n=null==s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?Tf(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Jg(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Xg(){return Rf(Nm)}function ev(e){return sp("authEvent",e.config.apiKey,e.name)}function tv(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return bh(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=class{constructor(){this._redirectPersistence=Rm,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=bg}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Zg(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Sf(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,i,s,o,a,u,l,c;const d=Kg();kf("function"==typeof(null===(t=null==d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),kf(void 0!==(null===(n=null==d?void 0:d.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),kf("function"==typeof(null===(s=null===(i=null===(r=null==d?void 0:d.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),kf("function"==typeof(null===(u=null===(a=null===(o=null==d?void 0:d.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===u?void 0:u.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),kf("function"==typeof(null===(c=null===(l=null==d?void 0:d.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===c?void 0:c.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),hg.clear(),await this._originValidation(e);const s=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Jg(),postBody:null,tenantId:e.tenantId,error:Tf(e,"no-auth-event")}}(e,n,r);await function(e,t){return Xg()._set(ev(e),t)}(e,s);const o=await Gg(e,s,t);return async function(e,t,n){const{cordova:r}=Kg();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function u(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function l(){a||(a=window.setTimeout((()=>{o(Tf(e,"redirect-cancelled-by-user"))}),2e3))}function c(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(u),document.addEventListener("resume",l,!1),hp()&&document.addEventListener("visibilitychange",c,!1),i=()=>{t.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}}))}finally{i()}}(e,i,await Wg(o))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=Kg(),n={};mp()?n.iosBundleId=t.packageName:hp()?n.androidPackageName=t.packageName:Sf(e,"operation-not-supported-in-this-environment"),await Tg(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Kg(),s=setTimeout((async()=>{await Yg(e),t.onEvent(rv())}),500),o=async n=>{clearTimeout(s);const r=await Yg(e);let i=null;r&&(null==n?void 0:n.url)&&(i=Qg(r,n.url)),t.onEvent(i||rv())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,o);const a=r,u=`${i.packageName.toLowerCase()}://`;Kg().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&o({url:e}),"function"==typeof a)try{a(e)}catch(t){console.error(t)}}}};function rv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Tf("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function sv(e=sh()){return!("file:"!==iv()&&"ionic:"!==iv()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function ov(e=sh()){return ch()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=sh()){return/Edge\/\d+/.test(e)}(e)}function av(){try{const e=self.localStorage,t=Pm();if(e)return e.setItem(t,"1"),e.removeItem(t),!ov()||dh()}catch(e){return uv()&&dh()}return!1}function uv(){return"undefined"!=typeof global&&"WorkerGlobalScope"in global&&"importScripts"in global}function lv(){return("http:"===iv()||"https:"===iv()||uh()||sv())&&!(lh()||ah())&&av()&&!uv()}function cv(){return sv()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dv={LOCAL:"local",NONE:"none",SESSION:"session"},hv=kf;async function fv(e){await e._initializationPromise;const t=pv(),n=sp("persistence",e.config.apiKey,e.name);(null==t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function pv(){return"undefined"!=typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=kf;class gv{constructor(){this.browserResolver=Rf(Vg),this.cordovaResolver=Rf(nv),this.underlyingResolver=null,this._redirectPersistence=Rm,this._completeRedirectFn=bg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return cv()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return mv(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!cv()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(e){return e.unwrap()}function yv(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){t.resolver=new Ev(e,function(e,t){var n;const r=Th(e),i=t;return kf(t.operationType,r,"argument-error"),kf(null===(n=i.serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),Sm._fromError(r,i)}(e,t))}else if(r){const e=wv(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function wv(e){const{_tokenResponse:t}=e instanceof hh?e.customData:e;if(!t)return null;if(!(e instanceof hh)&&"temporaryProof"in t&&"phoneNumber"in t)return rg.credentialFromResult(e);const n=t.providerId;if(!n||n===hf)return null;let r;switch(n){case df:r=$p;break;case lf:r=Up;break;case cf:r=Bp;break;case ff:r=jp;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?Vp._create(n,o):Cp._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new Fp(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof hh?r.credentialFromError(e):r.credentialFromResult(e)}async function bv(e,t){let n;try{n=await t}catch(o){throw o instanceof hh&&yv(e,o),o}const{operationType:r,user:i}=n;return{operationType:r,credential:(s=n,wv(s)),additionalUserInfo:Em(n),user:Iv.getOrCreate(i)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s}async function _v(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>bv(e,n.confirm(t))}}class Ev{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return bv(vv(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this._delegate=e,this.multiFactor=function(e){const t=Th(e);return xm.has(t)||xm.set(t,Tm._fromUser(t)),xm.get(t)}(e)}static getOrCreate(e){return Iv.USER_MAP.has(e)||Iv.USER_MAP.set(e,new Iv(e)),Iv.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return bv(this.auth,tm(this._delegate,e))}async linkWithPhoneNumber(e,t){return _v(this.auth,async function(e,t,n){const r=Th(e);await Qp(!1,r,"phone");const i=await ng(r.auth,t,Th(n));return new tg(i,(e=>tm(r,e)))}(this._delegate,e,t))}async linkWithPopup(e){return bv(this.auth,async function(e,t,n){const r=Th(e);kf(t instanceof Lp,r.auth,"argument-error");const i=ig(r.auth,n);return new dg(r.auth,"linkViaPopup",t,i,r).executeNotNull()}(this._delegate,e,gv))}async linkWithRedirect(e){return await fv(wp(this.auth)),wg(this._delegate,e,gv)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return bv(this.auth,nm(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return _v(this.auth,async function(e,t,n){const r=Th(e),i=await ng(r.auth,t,Th(n));return new tg(i,(e=>nm(r,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return bv(this.auth,async function(e,t,n){const r=Th(e);kf(t instanceof Lp,r.auth,"argument-error");const i=ig(r.auth,n);return new dg(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}(this._delegate,e,gv))}async reauthenticateWithRedirect(e){return await fv(wp(this.auth)),yg(this._delegate,e,gv)}sendEmailVerification(e){return hm(this._delegate,e)}async unlink(e){return await Zp(this._delegate,e),this}updateEmail(e){return function(e,t){return mm(Th(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return mm(Th(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await Yp(Th(e),t)}(this._delegate,e)}updateProfile(e){return pm(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return fm(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Iv.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sv=kf;class Tv{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Sv(n,"invalid-api-key",{appName:e.name});let r=[ip];if("undefined"!=typeof window){r=function(e,t){const n=pv();if(!(null==n?void 0:n.sessionStorage))return[];const r=sp("persistence",e,t);switch(n.sessionStorage.getItem(r)){case dv.NONE:return[ip];case dv.LOCAL:return[qm,Rm];case dv.SESSION:return[Rm];default:return[]}}(n,e.name);for(const e of[qm,Nm,Rm])r.includes(e)||r.push(e)}Sv(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?gv:void 0;this._delegate=t.initialize({options:{persistence:r,popupRedirectResolver:i}}),this._delegate._updateErrorMap(bf),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Iv.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){_p(this._delegate,e,t)}applyActionCode(e){return um(this._delegate,e)}checkActionCode(e){return lm(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,n){await Tp(Th(e),{oobCode:t,newPassword:n})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return bv(this._delegate,async function(e,t,n){const r=wp(e),i=await zp(r,{returnSecureToken:!0,email:t,password:n}),s=await qp._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return dm(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const n=Pp.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}(this._delegate,e)}async getRedirectResult(){Sv(lv(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await wp(e)._initializationPromise,bg(e,t,!1)}(this._delegate,gv);return e?bv(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){wp(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=xv(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=xv(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return cm(this._delegate,e,t)}sendPasswordResetEmail(e,t){return am(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){hv(Object.values(dv).includes(t),e,"invalid-persistence-type"),lh()?hv(t!==dv.SESSION,e,"unsupported-persistence-type"):ah()?hv(t===dv.NONE,e,"unsupported-persistence-type"):uv()?hv(t===dv.NONE||t===dv.LOCAL&&dh(),e,"unsupported-persistence-type"):hv(t===dv.NONE||av(),e,"unsupported-persistence-type")}(this._delegate,e),e){case dv.SESSION:t=Rm;break;case dv.LOCAL:t=await Rf(qm)._isAvailable()?qm:Nm;break;case dv.NONE:t=ip;break;default:return Sf("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return bv(this._delegate,async function(e){var t;const n=wp(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new qp({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await zp(n,{returnSecureToken:!0}),i=await qp._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}(this._delegate))}signInWithCredential(e){return bv(this._delegate,em(this._delegate,e))}signInWithCustomToken(e){return bv(this._delegate,rm(this._delegate,e))}signInWithEmailAndPassword(e,t){return bv(this._delegate,function(e,t,n){return em(Th(e),Dp.credential(t,n))}(this._delegate,e,t))}signInWithEmailLink(e,t){return bv(this._delegate,async function(e,t,n){const r=Th(e),i=Dp.credentialWithLink(t,n||Of());return kf(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),em(r,i)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return _v(this._delegate,async function(e,t,n){const r=wp(e),i=await ng(r,t,Th(n));return new tg(i,(e=>em(r,e)))}(this._delegate,e,t))}async signInWithPopup(e){return Sv(lv(),this._delegate,"operation-not-supported-in-this-environment"),bv(this._delegate,async function(e,t,n){const r=wp(e);kf(t instanceof Lp,e,"argument-error");const i=ig(r,n);return new dg(r,"signInViaPopup",t,i).executeNotNull()}(this._delegate,e,gv))}async signInWithRedirect(e){return Sv(lv(),this._delegate,"operation-not-supported-in-this-environment"),await fv(this._delegate),vg(this._delegate,e,gv)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:n}=await lm(Th(e),t);return n.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function xv(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const i=r;return{next:e=>i(e&&Iv.getOrCreate(e)),error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tv.Persistence=dv;class kv{constructor(){this.providerId="phone",this._delegate=new rg(vv(uf.auth()))}static credential(e,t){return rg.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}kv.PHONE_SIGN_IN_METHOD=rg.PHONE_SIGN_IN_METHOD,kv.PROVIDER_ID=rg.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Av=kf;class Nv{constructor(e,t,n=uf.app()){var r;Av(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new eg(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cv;(Cv=uf).INTERNAL.registerComponent(new xh("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Tv(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:pf,PASSWORD_RESET:mf,RECOVER_EMAIL:gf,REVERT_SECOND_FACTOR_ADDITION:vf,VERIFY_AND_CHANGE_EMAIL:yf,VERIFY_EMAIL:wf}},EmailAuthProvider:Dp,FacebookAuthProvider:Up,GithubAuthProvider:Bp,GoogleAuthProvider:$p,OAuthProvider:Fp,PhoneAuthProvider:kv,PhoneMultiFactorGenerator:zg,RecaptchaVerifier:Nv,TwitterAuthProvider:jp,Auth:Tv,AuthCredential:Sp,Error:hh}).setInstantiationMode("LAZY").setMultipleInstances(!1)),Cv.registerVersion("@firebase/auth-compat","0.1.1");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Rv=function(e,t){return(Rv=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function Ov(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var Pv,Dv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Lv=Lv||{},Mv=Dv||self;function Fv(){}function Uv(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function $v(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Bv="closure_uid_"+(1e9*Math.random()>>>0),Vv=0;function jv(e,t,n){return e.call.apply(e.bind,arguments)}function zv(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function qv(e,t,n){return(qv=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?jv:zv).apply(null,arguments)}function Hv(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Kv(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Gv(){this.s=this.s,this.o=this.o}var Wv={};Gv.prototype.s=!1,Gv.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Bv)&&e[Bv]||(e[Bv]=++Vv)}(this);delete Wv[e]}},Gv.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Zv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Yv=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"==typeof e?e.split(""):e,s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function Qv(e){return Array.prototype.concat.apply([],arguments)}function Jv(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function Xv(e){return/^[\s\xa0]*$/.test(e)}var ey,ty=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ny(e,t){return-1!=e.indexOf(t)}function ry(e,t){return e<t?-1:e>t?1:0}e:{var iy=Mv.navigator;if(iy){var sy=iy.userAgent;if(sy){ey=sy;break e}}ey=""}function oy(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function ay(e){var t={};for(var n in e)t[n]=e[n];return t}var uy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ly(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var s=0;s<uy.length;s++)n=uy[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function cy(e){return cy[" "](e),e}cy[" "]=Fv;var dy,hy=ny(ey,"Opera"),fy=ny(ey,"Trident")||ny(ey,"MSIE"),py=ny(ey,"Edge"),my=py||fy,gy=ny(ey,"Gecko")&&!(ny(ey.toLowerCase(),"webkit")&&!ny(ey,"Edge"))&&!(ny(ey,"Trident")||ny(ey,"MSIE"))&&!ny(ey,"Edge"),vy=ny(ey.toLowerCase(),"webkit")&&!ny(ey,"Edge");function yy(){var e=Mv.document;return e?e.documentMode:void 0}e:{var wy="",by=function(){var e=ey;return gy?/rv:([^\);]+)(\)|;)/.exec(e):py?/Edge\/([\d\.]+)/.exec(e):fy?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):vy?/WebKit\/(\S+)/.exec(e):hy?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(by&&(wy=by?by[1]:""),fy){var _y=yy();if(null!=_y&&_y>parseFloat(wy)){dy=String(_y);break e}}dy=wy}var Ey,Iy={};function Sy(){return function(e){var t=Iy;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=ty(String(dy)).split("."),n=ty("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var s=t[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=ry(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||ry(0==s[2].length,0==o[2].length)||ry(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}))}if(Mv.document&&fy){var Ty=yy();Ey=Ty||(parseInt(dy,10)||void 0)}else Ey=void 0;var xy=Ey,ky=function(){if(!Mv.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Mv.addEventListener("test",Fv,t),Mv.removeEventListener("test",Fv,t)}catch(n){}return e}();function Ay(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Ny(e,t){if(Ay.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(gy){e:{try{cy(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Cy[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ny.Z.h.call(this)}}Ay.prototype.h=function(){this.defaultPrevented=!0},Kv(Ny,Ay);var Cy={2:"touch",3:"pen",4:"mouse"};Ny.prototype.h=function(){Ny.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ry="closure_listenable_"+(1e6*Math.random()|0),Oy=0;function Py(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Oy,this.ca=this.fa=!1}function Dy(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Ly(e){this.src=e,this.g={},this.h=0}function My(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Zv(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Dy(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Fy(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}Ly.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Fy(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Py(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var Uy="closure_lm_"+(1e6*Math.random()|0),$y={};function By(e,t,n,r,i){if(r&&r.once)return jy(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)By(e,t[s],n,r,i);return null}return n=Zy(n),e&&e[Ry]?e.N(t,n,$v(r)?!!r.capture:!!r,i):Vy(e,t,n,!1,r,i)}function Vy(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=$v(i)?!!i.capture:!!i,a=Gy(e);if(a||(e[Uy]=a=new Ly(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Ky;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ky||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Hy(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function jy(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)jy(e,t[s],n,r,i);return null}return n=Zy(n),e&&e[Ry]?e.O(t,n,$v(r)?!!r.capture:!!r,i):Vy(e,t,n,!0,r,i)}function zy(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)zy(e,t[s],n,r,i);else r=$v(r)?!!r.capture:!!r,n=Zy(n),e&&e[Ry]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Fy(s=e.g[t],n,r,i))&&(Dy(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Gy(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Fy(t,n,r,i)),(n=-1<e?t[e]:null)&&qy(n))}function qy(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Ry])My(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Hy(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Gy(t))?(My(n,e),0==n.h&&(n.src=null,t[Uy]=null)):Dy(e)}}}function Hy(e){return e in $y?$y[e]:$y[e]="on"+e}function Ky(e,t){if(e.ca)e=!0;else{t=new Ny(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&qy(e),e=n.call(r,t)}return e}function Gy(e){return(e=e[Uy])instanceof Ly?e:null}var Wy="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zy(e){return"function"==typeof e?e:(e[Wy]||(e[Wy]=function(t){return e.handleEvent(t)}),e[Wy])}function Yy(){Gv.call(this),this.i=new Ly(this),this.P=this,this.I=null}function Qy(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Ay(t,e);else if(t instanceof Ay)t.target=t.target||e;else{var i=t;ly(t=new Ay(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Jy(o,r,!0,t)&&i}if(i=Jy(o=t.g=e,r,!0,t)&&i,i=Jy(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=Jy(o=t.g=n[s],r,!1,t)&&i}function Jy(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&My(e.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}Kv(Yy,Gv),Yy.prototype[Ry]=!0,Yy.prototype.removeEventListener=function(e,t,n,r){zy(this,e,t,n,r)},Yy.prototype.M=function(){if(Yy.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Dy(n[r]);delete t.g[e],t.h--}}this.I=null},Yy.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Yy.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Xy=Mv.JSON.stringify;function ew(){var e=uw,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var tw,nw=function(){function e(){this.h=this.g=null}return e.prototype.add=function(e,t){var n=rw.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n},e}(),rw=new(function(){function e(e,t){this.i=e,this.j=t,this.h=0,this.g=null}return e.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},e}())((function(){return new iw}),(function(e){return e.reset()})),iw=function(){function e(){this.next=this.g=this.h=null}return e.prototype.set=function(e,t){this.h=e,this.g=t,this.next=null},e.prototype.reset=function(){this.next=this.g=this.h=null},e}();function sw(e){Mv.setTimeout((function(){throw e}),0)}function ow(e,t){tw||function(){var e=Mv.Promise.resolve(void 0);tw=function(){e.then(lw)}}(),aw||(tw(),aw=!0),uw.add(e,t)}var aw=!1,uw=new nw;function lw(){for(var e;e=ew();){try{e.h.call(e.g)}catch(n){sw(n)}var t=rw;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}aw=!1}function cw(e,t){Yy.call(this),this.h=e||1,this.g=t||Mv,this.j=qv(this.kb,this),this.l=Date.now()}function dw(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function hw(e,t,n){if("function"==typeof e)n&&(e=qv(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=qv(e.handleEvent,e)}return 2147483647<Number(t)?-1:Mv.setTimeout(e,t||0)}function fw(e){e.g=hw((function(){e.g=null,e.i&&(e.i=!1,fw(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}Kv(cw,Yy),(Pv=cw.prototype).da=!1,Pv.S=null,Pv.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Qy(this,"tick"),this.da&&(dw(this),this.start()))}},Pv.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Pv.M=function(){cw.Z.M.call(this),dw(this),delete this.g};var pw=function(e){function t(t,n){var r=e.call(this)||this;return r.m=t,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Rv(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.l=function(e){this.h=arguments,this.g?this.i=!0:fw(this)},t.prototype.M=function(){e.prototype.M.call(this),this.g&&(Mv.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},t}(Gv);function mw(e){Gv.call(this),this.h=e,this.g={}}Kv(mw,Gv);var gw=[];function vw(e,t,n,r){Array.isArray(n)||(n&&(gw[0]=n.toString()),n=gw);for(var i=0;i<n.length;i++){var s=By(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function yw(e){oy(e.g,(function(e,t){this.g.hasOwnProperty(t)&&qy(e)}),e),e.g={}}function ww(){this.g=!0}function bw(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Xy(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}mw.prototype.M=function(){mw.Z.M.call(this),yw(this)},mw.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ww.prototype.Aa=function(){this.g=!1},ww.prototype.info=function(){};var _w={},Ew=null;function Iw(){return Ew=Ew||new Yy}function Sw(e){Ay.call(this,_w.Ma,e)}function Tw(e){var t=Iw();Qy(t,new Sw(t,e))}function xw(e,t){Ay.call(this,_w.STAT_EVENT,e),this.stat=t}function kw(e){var t=Iw();Qy(t,new xw(t,e))}function Aw(e,t){Ay.call(this,_w.Na,e),this.size=t}function Nw(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Mv.setTimeout((function(){e()}),t)}_w.Ma="serverreachability",Kv(Sw,Ay),_w.STAT_EVENT="statevent",Kv(xw,Ay),_w.Na="timingevent",Kv(Aw,Ay);var Cw={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Rw={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ow(){}function Pw(e){return e.h||(e.h=e.i())}function Dw(){}Ow.prototype.h=null;var Lw,Mw={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Fw(){Ay.call(this,"d")}function Uw(){Ay.call(this,"c")}function $w(){}function Bw(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new mw(this),this.P=jw,e=my?125:void 0,this.W=new cw(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Vw}function Vw(){this.i=null,this.g="",this.h=!1}Kv(Fw,Ay),Kv(Uw,Ay),Kv($w,Ow),$w.prototype.g=function(){return new XMLHttpRequest},$w.prototype.i=function(){return{}},Lw=new $w;var jw=45e3,zw={},qw={};function Hw(e,t,n){e.K=1,e.v=pb(ub(t)),e.s=n,e.U=!0,Kw(e,null)}function Kw(e,t){e.F=Date.now(),Yw(e),e.A=ub(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),kb(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Vw,e.g=A_(e.l,n?t:null,!e.s),0<e.O&&(e.L=new pw(qv(e.Ia,e,e.g),e.O)),vw(e.V,e.g,"readystatechange",e.gb),t=e.H?ay(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Tw(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var d=c.split("_");o=2<=d.length&&"type"==d[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Gw(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ww(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=Zw(e,n))==qw){4==t&&(e.o=4,kw(14),i=!1),bw(e.j,e.m,null,"[Incomplete Response]");break}if(r==zw){e.o=4,kw(15),bw(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}bw(e.j,e.m,r,null),tb(e,r)}Gw(e)&&r!=qw&&r!=zw&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,kw(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),b_(t),t.L=!0,kw(11))):(bw(e.j,e.m,n,"[Invalid Chunked Response]"),eb(e),Xw(e))}function Zw(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?qw:(n=Number(t.substring(n,r)),isNaN(n)?zw:(r+=1)+n>t.length?qw:(t=t.substr(r,n),e.C=r+n,t))}function Yw(e){e.Y=Date.now()+e.P,Qw(e,e.P)}function Qw(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Nw(qv(e.eb,e),t)}function Jw(e){e.B&&(Mv.clearTimeout(e.B),e.B=null)}function Xw(e){0==e.l.G||e.I||I_(e.l,e)}function eb(e){Jw(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,dw(e.W),yw(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tb(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Db(n.i,e)))if(n.I=e.N,!e.J&&Db(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(g){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;E_(n),d_(n)}w_(n),kw(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Nw(qv(n.ab,n),6e3));if(1>=Pb(n.i)&&n.ka){try{n.ka()}catch(g){}n.ka=void 0}}else T_(n,11)}else if((e.J||n.g==e)&&E_(n),!Xv(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){var s=i[t];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var u=s[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var l=e.g;if(l){var c=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(c){var d=r.i;!d.g&&(ny(c,"spdy")||ny(c,"quic")||ny(c,"h2"))&&(d.j=d.l,d.g=new Set,d.h&&(Lb(d,d.h),d.h=null))}if(r.D){var h=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;h&&(r.sa=h,fb(r.F,r.D,h))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=e;if((r=n).oa=k_(r,r.H?r.la:null,r.W),f.J){Mb(r.i,f);var p=f,m=r.K;m&&p.setTimeout(m),p.B&&(Jw(p),Yw(p)),r.g=f}else y_(r);0<n.l.length&&p_(n)}else"stop"!=s[0]&&"close"!=s[0]||T_(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?T_(n,7):c_(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}Tw(4)}catch(g){}}function nb(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Uv(e)||"string"==typeof e)Yv(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Uv(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;i=(r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Uv(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function rb(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof rb)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function ib(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];sb(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)sb(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function sb(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Pv=Bw.prototype).setTimeout=function(e){this.P=e},Pv.gb=function(e){e=e.target;var t=this.L;t&&3==s_(e)?t.l():this.Ia(e)},Pv.Ia=function(e){try{if(e==this.g)e:{var t=s_(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>t)&&(3!=t||my||this.g&&(this.h.h||this.g.ga()||o_(this.g)))){this.I||4!=t||7==n||Tw(8==n||0>=r?3:2),Jw(this);var i=this.g.ba();this.N=i;t:if(Gw(this)){var s=o_(this.g);e="";var o=s.length,a=4==s_(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eb(this),Xw(this);var u="";break t}this.h.i=new Mv.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,e+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=e,this.C=0,u=this.h.g}else u=this.g.ga();if(this.i=200==i,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,t,i),this.i){if(this.$&&!this.J){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xv(l)){var d=l;break t}}d=null}if(!(i=d)){this.i=!1,this.o=3,kw(12),eb(this),Xw(this);break e}bw(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tb(this,i)}this.U?(Ww(this,t,u),my&&this.i&&3==t&&(vw(this.V,this.W,"tick",this.fb),this.W.start())):(bw(this.j,this.m,u,null),tb(this,u)),4==t&&eb(this),this.i&&!this.I&&(4==t?I_(this.l,this):(this.i=!1,Yw(this)))}else 400==i&&0<u.indexOf("Unknown SID")?(this.o=3,kw(12)):(this.o=0,kw(13)),eb(this),Xw(this)}}}catch(h){}},Pv.fb=function(){if(this.g){var e=s_(this.g),t=this.g.ga();this.C<t.length&&(Jw(this),Ww(this,e,t),this.i&&4!=e&&Yw(this))}},Pv.cancel=function(){this.I=!0,eb(this)},Pv.eb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Tw(3),kw(17)),eb(this),this.o=2,Xw(this)):Qw(this,this.Y-e)},(Pv=rb.prototype).R=function(){ib(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Pv.T=function(){return ib(this),this.g.concat()},Pv.get=function(e,t){return sb(this.h,e)?this.h[e]:t},Pv.set=function(e,t){sb(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Pv.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var ob=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ab(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof ab){this.g=void 0!==t?t:e.g,lb(this,e.j),this.s=e.s,cb(this,e.i),db(this,e.m),this.l=e.l,t=e.h;var n=new Ib;n.i=t.i,t.g&&(n.g=new rb(t.g),n.h=t.h),hb(this,n),this.o=e.o}else e&&(n=String(e).match(ob))?(this.g=!!t,lb(this,n[1]||"",!0),this.s=mb(n[2]||""),cb(this,n[3]||"",!0),db(this,n[4]),this.l=mb(n[5]||"",!0),hb(this,n[6]||"",!0),this.o=mb(n[7]||"")):(this.g=!!t,this.h=new Ib(null,this.g))}function ub(e){return new ab(e)}function lb(e,t,n){e.j=n?mb(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function cb(e,t,n){e.i=n?mb(t,!0):t}function db(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function hb(e,t,n){t instanceof Ib?(e.h=t,function(e,t){t&&!e.j&&(Sb(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Tb(this,t),kb(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=gb(t,_b)),e.h=new Ib(t,e.g))}function fb(e,t,n){e.h.set(t,n)}function pb(e){return fb(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function mb(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function gb(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,vb),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function vb(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ab.prototype.toString=function(){var e=[],t=this.j;t&&e.push(gb(t,yb,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(gb(t,yb,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(gb(n,"/"==n.charAt(0)?bb:wb,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",gb(n,Eb)),e.join("")};var yb=/[#\/\?@]/g,wb=/[#\?:]/g,bb=/[#\?]/g,_b=/[#\?@]/g,Eb=/#/g;function Ib(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Sb(e){e.g||(e.g=new rb,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Tb(e,t){Sb(e),t=Ab(e,t),sb(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,sb((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&ib(e)))}function xb(e,t){return Sb(e),t=Ab(e,t),sb(e.g.h,t)}function kb(e,t,n){Tb(e,t),0<n.length&&(e.i=null,e.g.set(Ab(e,t),Jv(n)),e.h+=n.length)}function Ab(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Pv=Ib.prototype).add=function(e,t){Sb(this),this.i=null,e=Ab(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Pv.forEach=function(e,t){Sb(this),this.g.forEach((function(n,r){Yv(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Pv.T=function(){Sb(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Pv.R=function(e){Sb(this);var t=[];if("string"==typeof e)xb(this,e)&&(t=Qv(t,this.g.get(Ab(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Qv(t,e[n])}return t},Pv.set=function(e,t){return Sb(this),this.i=null,xb(this,e=Ab(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Pv.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Pv.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var Nb=function(e,t){this.h=e,this.g=t};function Cb(e){this.l=e||Rb,Mv.PerformanceNavigationTiming?e=0<(e=Mv.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Mv.g&&Mv.g.Ea&&Mv.g.Ea()&&Mv.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rb=10;function Ob(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Pb(e){return e.h?1:e.g?e.g.size:0}function Db(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Lb(e,t){e.g?e.g.add(t):e.h=t}function Mb(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Fb(e){var t,n;if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var r=e.i;try{for(var i=Ov(e.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}return Jv(e.i)}function Ub(){}function $b(){this.g=new Ub}function Bb(e,t,n){var r=n||"";try{nb(e,(function(e,n){var i=e;$v(e)&&(i=Xy(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Vb(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function jb(e){this.l=e.$b||null,this.j=e.ib||!1}function zb(e,t){Yy.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=qb,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Cb.prototype.cancel=function(){var e,t;if(this.i=Fb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=Ov(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){e={error:i}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.g.clear()}},Ub.prototype.stringify=function(e){return Mv.JSON.stringify(e,void 0)},Ub.prototype.parse=function(e){return Mv.JSON.parse(e,void 0)},Kv(jb,Ow),jb.prototype.g=function(){return new zb(this.l,this.j)},jb.prototype.i=function(e){return function(){return e}}({}),Kv(zb,Yy);var qb=0;function Hb(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Kb(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Gb(e)}function Gb(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Pv=zb.prototype).open=function(e,t){if(this.readyState!=qb)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Gb(this)},Pv.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Mv).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Pv.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Kb(this)),this.readyState=qb},Pv.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Gb(this)),this.g&&(this.readyState=3,Gb(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Mv.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hb(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Pv.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Kb(this):Gb(this),3==this.readyState&&Hb(this)}},Pv.Ua=function(e){this.g&&(this.response=this.responseText=e,Kb(this))},Pv.Ta=function(e){this.g&&(this.response=e,Kb(this))},Pv.ha=function(){this.g&&Kb(this)},Pv.setRequestHeader=function(e,t){this.v.append(e,t)},Pv.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Pv.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(zb.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Wb=Mv.JSON.parse;function Zb(e){Yy.call(this),this.headers=new rb,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yb,this.K=this.L=!1}Kv(Zb,Yy);var Yb="",Qb=/^https?$/i,Jb=["POST","PUT"];function Xb(e){return"content-type"==e.toLowerCase()}function e_(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t_(e),r_(e)}function t_(e){e.D||(e.D=!0,Qy(e,"complete"),Qy(e,"error"))}function n_(e){if(e.h&&void 0!==Lv&&(!e.C[1]||4!=s_(e)||2!=e.ba()))if(e.v&&4==s_(e))hw(e.Fa,0,e);else if(Qy(e,"readystatechange"),4==s_(e)){e.h=!1;try{var t,n=e.ba();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var s=String(e.H).match(ob)[1]||null;if(!s&&Mv.self&&Mv.self.location){var o=Mv.self.location.protocol;s=o.substr(0,o.length-1)}i=!Qb.test(s?s.toLowerCase():"")}t=i}if(t)Qy(e,"complete"),Qy(e,"success");else{e.m=6;try{var a=2<s_(e)?e.g.statusText:""}catch(u){a=""}e.j=a+" ["+e.ba()+"]",t_(e)}}finally{r_(e)}}}function r_(e,t){if(e.g){i_(e);var n=e.g,r=e.C[0]?Fv:null;e.g=null,e.C=null,t||Qy(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function i_(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Mv.clearTimeout(e.A),e.A=null)}function s_(e){return e.g?e.g.readyState:0}function o_(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Yb:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function a_(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){var t="";return oy(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):fb(e,t,n))}function u_(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function l_(e){this.za=0,this.l=[],this.h=new ww,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=u_("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=u_("baseRetryDelayMs",5e3,e),this.$a=u_("retryDelaySeedMs",1e4,e),this.Ya=u_("forwardChannelMaxRetries",2,e),this.ra=u_("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Cb(e&&e.concurrentRequestLimit),this.Ca=new $b,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function c_(e){if(h_(e),3==e.G){var t=e.V++,n=ub(e.F);fb(n,"SID",e.J),fb(n,"RID",t),fb(n,"TYPE","terminate"),g_(e,n),(t=new Bw(e,e.h,t,void 0)).K=2,t.v=pb(ub(n)),n=!1,Mv.navigator&&Mv.navigator.sendBeacon&&(n=Mv.navigator.sendBeacon(t.v.toString(),"")),!n&&Mv.Image&&((new Image).src=t.v,n=!0),n||(t.g=A_(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Yw(t)}x_(e)}function d_(e){e.g&&(b_(e),e.g.cancel(),e.g=null)}function h_(e){d_(e),e.u&&(Mv.clearTimeout(e.u),e.u=null),E_(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Mv.clearTimeout(e.m),e.m=null)}function f_(e,t){e.l.push(new Nb(e.Za++,t)),3==e.G&&p_(e)}function p_(e){Ob(e.i)||e.m||(e.m=!0,ow(e.Ha,e),e.C=0)}function m_(e,t){var n;n=t?t.m:e.V++;var r=ub(e.F);fb(r,"SID",e.J),fb(r,"RID",n),fb(r,"AID",e.U),g_(e,r),e.o&&e.s&&a_(r,e.o,e.s),n=new Bw(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=v_(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Lb(e.i,n),Hw(n,r,t)}function g_(e,t){e.j&&nb({},(function(e,n){fb(t,n,e)}))}function v_(e,t,n){n=Math.min(e.l.length,n);var r=e.j?qv(e.j.Oa,e.j,e):null;e:for(var i=e.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,u=0;u<n;u++){var l=i[u].h,c=i[u].g;if(0>(l-=s))s=Math.max(0,i[u].h-100),a=!1;else try{Bb(c,o,"req"+l+"_")}catch(d){r&&r(c)}}if(a){r=o.join("&");break e}}return e=e.l.splice(0,n),t.D=e,r}function y_(e){e.g||e.u||(e.Y=1,ow(e.Ga,e),e.A=0)}function w_(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Nw(qv(e.Ga,e),S_(e,e.A)),e.A++,!0)}function b_(e){null!=e.B&&(Mv.clearTimeout(e.B),e.B=null)}function __(e){e.g=new Bw(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=ub(e.oa);fb(t,"RID","rpc"),fb(t,"SID",e.J),fb(t,"CI",e.N?"0":"1"),fb(t,"AID",e.U),g_(e,t),fb(t,"TYPE","xmlhttp"),e.o&&e.s&&a_(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=pb(ub(t)),n.s=null,n.U=!0,Kw(n,e)}function E_(e){null!=e.v&&(Mv.clearTimeout(e.v),e.v=null)}function I_(e,t){var n=null;if(e.g==t){E_(e),b_(e),e.g=null;var r=2}else{if(!Db(e.i,t))return;n=t.D,Mb(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Qy(r=Iw(),new Aw(r,n,t,i)),p_(e)}else y_(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Pb(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Nw(qv(e.Ha,e,t),S_(e,e.C)),e.C++,0)))}(e,t)||2==r&&w_(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:T_(e,5);break;case 4:T_(e,10);break;case 3:T_(e,6);break;default:T_(e,2)}}function S_(e,t){var n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function T_(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=qv(e.jb,e);n||(n=new ab("//www.google.com/images/cleardot.gif"),Mv.location&&"http"==Mv.location.protocol||lb(n,"https"),pb(n)),function(e,t){var n=new ww;if(Mv.Image){var r=new Image;r.onload=Hv(Vb,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Hv(Vb,n,r,"TestLoadImage: error",!1,t),r.onabort=Hv(Vb,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Hv(Vb,n,r,"TestLoadImage: timeout",!1,t),Mv.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else kw(2);e.G=0,e.j&&e.j.va(t),x_(e),h_(e)}function x_(e){e.G=0,e.I=-1,e.j&&(0==Fb(e.i).length&&0==e.l.length||(e.i.i.length=0,Jv(e.l),e.l.length=0),e.j.ua())}function k_(e,t,n){var r=function(e){return e instanceof ab?ub(e):new ab(e,void 0)}(n);if(""!=r.i)t&&cb(r,t+"."+r.i),db(r,r.m);else{var i=Mv.location;r=function(e,t,n,r){var i=new ab(null,void 0);return e&&lb(i,e),t&&cb(i,t),n&&db(i,n),r&&(i.l=r),i}(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&oy(e.aa,(function(e,t){fb(r,t,e)})),t=e.D,n=e.sa,t&&n&&fb(r,t,n),fb(r,"VER",e.ma),g_(e,r),r}function A_(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Zb(new jb({ib:!0})):new Zb(e.qa)).L=e.H,t}function N_(){}function C_(){if(fy&&!(10<=Number(xy)))throw Error("Environmental error: no available transport.")}function R_(e,t){Yy.call(this),this.g=new l_(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Xv(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xv(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new D_(this)}function O_(e){Fw.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function P_(){Uw.call(this),this.status=1}function D_(e){this.g=e}(Pv=Zb.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Lw.g(),this.C=this.u?Pw(this.u):Pw(Lw),this.g.onreadystatechange=qv(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void e_(this,s)}e=n||"";var i=new rb(this.headers);r&&nb(r,(function(e,t){i.set(t,e)})),r=function(e){e:{for(var t=Xb,n=e.length,r="string"==typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=Mv.FormData&&e instanceof Mv.FormData,!(0<=Zv(Jb,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{i_(this),0<this.B&&((this.K=function(e){return fy&&Sy()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qv(this.pa,this)):this.A=hw(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){e_(this,s)}},Pv.pa=function(){void 0!==Lv&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qy(this,"timeout"),this.abort(8))},Pv.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Qy(this,"complete"),Qy(this,"abort"),r_(this))},Pv.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),r_(this,!0)),Zb.Z.M.call(this)},Pv.Fa=function(){this.s||(this.F||this.v||this.l?n_(this):this.cb())},Pv.cb=function(){n_(this)},Pv.ba=function(){try{return 2<s_(this)?this.g.status:-1}catch(nt){return-1}},Pv.ga=function(){try{return this.g?this.g.responseText:""}catch(nt){return""}},Pv.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Wb(t)}},Pv.Da=function(){return this.m},Pv.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Pv=l_.prototype).ma=8,Pv.G=1,Pv.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},Pv.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;var t=new Bw(this,this.h,e,void 0),n=this.s;if(this.P&&(n?ly(n=ay(n),this.P):n=this.P),null===this.o&&(t.H=n),this.ja)e:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break e}if(4096===r||i===this.l.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=v_(this,t,r),fb(i=ub(this.F),"RID",e),fb(i,"CVER",22),this.D&&fb(i,"X-HTTP-Session-Id",this.D),g_(this,i),this.o&&n&&a_(i,this.o,n),Lb(this.i,t),this.Ra&&fb(i,"TYPE","init"),this.ja?(fb(i,"$req",r),fb(i,"SID","null"),t.$=!0,Hw(t,i,null)):Hw(t,i,r),this.G=2}}else 3==this.G&&(e?m_(this,e):0==this.l.length||Ob(this.i)||m_(this))},Pv.Ga=function(){if(this.u=null,__(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Nw(qv(this.bb,this),e)}},Pv.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,kw(10),d_(this),__(this))},Pv.ab=function(){null!=this.v&&(this.v=null,d_(this),w_(this),kw(19))},Pv.jb=function(e){e?(this.h.info("Successfully pinged google.com"),kw(2)):(this.h.info("Failed to ping google.com"),kw(1))},(Pv=N_.prototype).xa=function(){},Pv.wa=function(){},Pv.va=function(){},Pv.ua=function(){},Pv.Oa=function(){},C_.prototype.g=function(e,t){return new R_(e,t)},Kv(R_,Yy),R_.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ow(qv(e.hb,e,t))),kw(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=k_(e,null,e.W),p_(e)},R_.prototype.close=function(){c_(this.g)},R_.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,f_(this.g,t)}else this.v?((t={}).__data__=Xy(e),f_(this.g,t)):f_(this.g,e)},R_.prototype.M=function(){this.g.j=null,delete this.j,c_(this.g),delete this.g,R_.Z.M.call(this)},Kv(O_,Fw),Kv(P_,Uw),Kv(D_,N_),D_.prototype.xa=function(){Qy(this.g,"a")},D_.prototype.wa=function(e){Qy(this.g,new O_(e))},D_.prototype.va=function(e){Qy(this.g,new P_(e))},D_.prototype.ua=function(){Qy(this.g,"b")},C_.prototype.createWebChannel=C_.prototype.g,R_.prototype.send=R_.prototype.u,R_.prototype.open=R_.prototype.m,R_.prototype.close=R_.prototype.close,Cw.NO_ERROR=0,Cw.TIMEOUT=8,Cw.HTTP_ERROR=6,Rw.COMPLETE="complete",Dw.EventType=Mw,Mw.OPEN="a",Mw.CLOSE="b",Mw.ERROR="c",Mw.MESSAGE="d",Yy.prototype.listen=Yy.prototype.N,Zb.prototype.listenOnce=Zb.prototype.O,Zb.prototype.getLastError=Zb.prototype.La,Zb.prototype.getLastErrorCode=Zb.prototype.Da,Zb.prototype.getStatus=Zb.prototype.ba,Zb.prototype.getResponseJson=Zb.prototype.Qa,Zb.prototype.getResponseText=Zb.prototype.ga,Zb.prototype.send=Zb.prototype.ea;var L_=Cw,M_=Rw,F_=_w,U_=10,$_=11,B_=jb,V_=Dw,j_=Zb;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z_{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z_.UNAUTHENTICATED=new z_(null),z_.GOOGLE_CREDENTIALS=new z_("google-credentials-uid"),z_.FIRST_PARTY=new z_("first-party-uid"),z_.MOCK_USER=new z_("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let q_="9.0.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=new Uh("@firebase/firestore");function K_(){return H_.logLevel}function G_(e,...t){if(H_.logLevel<=Rh.DEBUG){const n=t.map(Y_);H_.debug(`Firestore (${q_}): ${e}`,...n)}}function W_(e,...t){if(H_.logLevel<=Rh.ERROR){const n=t.map(Y_);H_.error(`Firestore (${q_}): ${e}`,...n)}}function Z_(e,...t){if(H_.logLevel<=Rh.WARN){const n=t.map(Y_);H_.warn(`Firestore (${q_}): ${e}`,...n)}}function Y_(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(e="Unexpected state"){const t=`FIRESTORE (${q_}) INTERNAL ASSERTION FAILED: `+e;throw W_(t),new Error(t)}function J_(e,t){e||Q_()}function X_(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tE extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class iE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(z_.UNAUTHENTICATED)))}shutdown(){}}class sE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class oE{constructor(e){this.t=e,this.currentUser=z_.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new nE;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nE,e.enqueueRetryable((()=>r(this.currentUser)))};const s=t=>{e.enqueueRetryable((async()=>{G_("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),await i.promise,await r(this.currentUser)}))};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(G_("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nE)}}),0),e.enqueueRetryable((async()=>{0===this.i&&(await i.promise,await r(this.currentUser))}))}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(G_("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(J_("string"==typeof t.accessToken),new rE(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J_(null===e||"string"==typeof e),new z_(e)}}class aE{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=z_.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class uE{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new aE(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(z_.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lE.T=-1;class dE{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=cE(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function hE(e,t){return e<t?-1:e>t?1:0}function fE(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function pE(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new tE(eE.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new tE(eE.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new tE(eE.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new tE(eE.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mE.fromMillis(Date.now())}static fromDate(e){return mE.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new mE(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?hE(this.nanoseconds,e.nanoseconds):hE(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.timestamp=e}static fromTimestamp(e){return new gE(e)}static min(){return new gE(new mE(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function yE(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t,n){void 0===t?t=0:t>e.length&&Q_(),void 0===n?n=e.length-t:n>e.length-t&&Q_(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===bE.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bE?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class _E extends bE{construct(e,t,n){return new _E(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new tE(eE.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new _E(t)}static emptyPath(){return new _E([])}}const EE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class IE extends bE{construct(e,t,n){return new IE(e,t,n)}static isValidIdentifier(e){return EE.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),IE.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new IE(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new tE(eE.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new tE(eE.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new tE(eE.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new tE(eE.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new IE(t)}static emptyPath(){return new IE([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.fields=e,e.sort(IE.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fE(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class TE{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new TE(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new TE(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return hE(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}TE.EMPTY_BYTE_STRING=new TE("");const xE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kE(e){if(J_(!!e),"string"==typeof e){let t=0;const n=xE.exec(e);if(J_(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:AE(e.seconds),nanos:AE(e.nanos)}}function AE(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function NE(e){return"string"==typeof e?TE.fromBase64String(e):TE.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function RE(e){const t=e.mapValue.fields.__previous_value__;return CE(t)?RE(t):t}function OE(e){const t=kE(e.mapValue.fields.__local_write_time__.timestampValue);return new mE(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(e){return null==e}function DE(e){return 0===e&&1/e==-1/0}function LE(e){return"number"==typeof e&&Number.isInteger(e)&&!DE(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.path=e}static fromPath(e){return new ME(_E.fromString(e))}static fromName(e){return new ME(_E.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===_E.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return _E.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ME(new _E(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?CE(e)?4:10:Q_()}function UE(e,t){const n=FE(e);if(n!==FE(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return OE(e).isEqual(OE(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=kE(e.timestampValue),r=kE(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,NE(e.bytesValue).isEqual(NE(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return AE(e.geoPointValue.latitude)===AE(t.geoPointValue.latitude)&&AE(e.geoPointValue.longitude)===AE(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return AE(e.integerValue)===AE(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=AE(e.doubleValue),r=AE(t.doubleValue);return n===r?DE(n)===DE(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return fE(e.arrayValue.values||[],t.arrayValue.values||[],UE);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(vE(n)!==vE(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!UE(n[i],r[i])))return!1;return!0}(e,t);default:return Q_()}var r}function $E(e,t){return void 0!==(e.values||[]).find((e=>UE(e,t)))}function BE(e,t){const n=FE(e),r=FE(t);if(n!==r)return hE(n,r);switch(n){case 0:return 0;case 1:return hE(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=AE(e.integerValue||e.doubleValue),r=AE(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return VE(e.timestampValue,t.timestampValue);case 4:return VE(OE(e),OE(t));case 5:return hE(e.stringValue,t.stringValue);case 6:return function(e,t){const n=NE(e),r=NE(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=hE(n[i],r[i]);if(0!==e)return e}return hE(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=hE(AE(e.latitude),AE(t.latitude));return 0!==n?n:hE(AE(e.longitude),AE(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=BE(n[i],r[i]);if(e)return e}return hE(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=hE(r[o],s[o]);if(0!==e)return e;const t=BE(n[r[o]],i[s[o]]);if(0!==t)return t}return hE(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Q_()}}function VE(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return hE(e,t);const n=kE(e),r=kE(t),i=hE(n.seconds,r.seconds);return 0!==i?i:hE(n.nanos,r.nanos)}function jE(e){return zE(e)}function zE(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=kE(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?NE(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ME.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=zE(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${zE(e.fields[i])}`;return n+"}"}(e.mapValue):Q_();var t,n}function qE(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function HE(e){return!!e&&"integerValue"in e}function KE(e){return!!e&&"arrayValue"in e}function GE(e){return!!e&&"nullValue"in e}function WE(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ZE(e){return!!e&&"mapValue"in e}function YE(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return yE(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=YE(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=YE(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.value=e}static empty(){return new QE({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ZE(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=YE(t)}setAll(e){let t=IE.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=YE(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ZE(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return UE(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ZE(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){yE(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new QE(YE(this.value))}}function JE(e){const t=[];return yE(e.fields,((e,n)=>{const r=new IE([e]);if(ZE(n)){const e=JE(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new SE(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class XE{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new XE(e,0,gE.min(),QE.empty(),0)}static newFoundDocument(e,t,n){return new XE(e,1,t,n,0)}static newNoDocument(e,t){return new XE(e,2,t,QE.empty(),0)}static newUnknownDocument(e,t){return new XE(e,3,t,QE.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=QE.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=QE.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof XE&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new XE(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function tI(e,t=null,n=[],r=[],i=null,s=null,o=null){return new eI(e,t,n,r,i,s,o)}function nI(e){const t=X_(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+jE(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),PE(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=mI(t.startAt)),t.endAt&&(e+="|ub:",e+=mI(t.endAt)),t.A=e}return t.A}function rI(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!vI(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!UE(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!wI(e.startAt,t.startAt)&&wI(e.endAt,t.endAt)}function iI(e){return ME.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class sI extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new oI(e,t,n):"array-contains"===t?new cI(e,n):"in"===t?new dI(e,n):"not-in"===t?new hI(e,n):"array-contains-any"===t?new fI(e,n):new sI(e,t,n)}static R(e,t,n){return"in"===t?new aI(e,n):new uI(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(BE(t,this.value)):null!==t&&FE(this.value)===FE(t)&&this.P(BE(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Q_()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class oI extends sI{constructor(e,t,n){super(e,t,n),this.key=ME.fromName(n.referenceValue)}matches(e){const t=ME.comparator(e.key,this.key);return this.P(t)}}class aI extends sI{constructor(e,t){super(e,"in",t),this.keys=lI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class uI extends sI{constructor(e,t){super(e,"not-in",t),this.keys=lI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function lI(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ME.fromName(e.referenceValue)))}class cI extends sI{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return KE(t)&&$E(t.arrayValue,this.value)}}class dI extends sI{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&$E(this.value.arrayValue,t)}}class hI extends sI{constructor(e,t){super(e,"not-in",t)}matches(e){if($E(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!$E(this.value.arrayValue,t)}}class fI extends sI{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!KE(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>$E(this.value.arrayValue,e)))}}class pI{constructor(e,t){this.position=e,this.before=t}}function mI(e){return`${e.before?"b":"a"}:${e.position.map((e=>jE(e))).join(",")}`}class gI{constructor(e,t="asc"){this.field=e,this.dir=t}}function vI(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function yI(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ME.comparator(ME.fromName(o.referenceValue),n.key):BE(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function wI(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!UE(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function _I(e,t,n,r,i,s,o,a){return new bI(e,t,n,r,i,s,o,a)}function EI(e){return new bI(e)}function II(e){return!PE(e.limit)&&"F"===e.limitType}function SI(e){return!PE(e.limit)&&"L"===e.limitType}function TI(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function xI(e){for(const t of e.filters)if(t.v())return t.field;return null}function kI(e){return null!==e.collectionGroup}function AI(e){const t=X_(e);if(null===t.V){t.V=[];const e=xI(t),n=TI(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new gI(e)),t.V.push(new gI(IE.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new gI(IE.keyField(),e))}}}return t.V}function NI(e){const t=X_(e);if(!t.S)if("F"===t.limitType)t.S=tI(t.path,t.collectionGroup,AI(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of AI(t)){const t="desc"===i.dir?"asc":"desc";e.push(new gI(i.field,t))}const n=t.endAt?new pI(t.endAt.position,!t.endAt.before):null,r=t.startAt?new pI(t.startAt.position,!t.startAt.before):null;t.S=tI(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}function CI(e,t,n){return new bI(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function RI(e,t){return rI(NI(e),NI(t))&&e.limitType===t.limitType}function OI(e){return`${nI(NI(e))}|lt:${e.limitType}`}function PI(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${jE(t.value)}`;var t})).join(", ")}]`),PE(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: "+mI(e.startAt)),e.endAt&&(t+=", endAt: "+mI(e.endAt)),`Target(${t})`}(NI(e))}; limitType=${e.limitType})`}function DI(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ME.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!yI(n.startAt,AI(n),r)||n.endAt&&yI(n.endAt,AI(n),r)));var n,r}function LI(e){return(t,n)=>{let r=!1;for(const i of AI(e)){const e=MI(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function MI(e,t,n){const r=e.field.isKeyField()?ME.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?BE(r,i):Q_()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Q_()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:DE(t)?"-0":t}}function UI(e){return{integerValue:""+e}}function $I(e,t){return LE(t)?UI(t):FI(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this._=void 0}}function VI(e,t,n){return e instanceof qI?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof HI?KI(e,t):e instanceof GI?WI(e,t):function(e,t){const n=zI(e,t),r=YI(n)+YI(e.C);return HE(n)&&HE(e.C)?UI(r):FI(e.N,r)}(e,t)}function jI(e,t,n){return e instanceof HI?KI(e,t):e instanceof GI?WI(e,t):n}function zI(e,t){return e instanceof ZI?HE(r=t)||(n=r)&&"doubleValue"in n?t:{integerValue:0}:null;var n,r}class qI extends BI{}class HI extends BI{constructor(e){super(),this.elements=e}}function KI(e,t){const n=QI(t);for(const r of e.elements)n.some((e=>UE(e,r)))||n.push(r);return{arrayValue:{values:n}}}class GI extends BI{constructor(e){super(),this.elements=e}}function WI(e,t){let n=QI(t);for(const r of e.elements)n=n.filter((e=>!UE(e,r)));return{arrayValue:{values:n}}}class ZI extends BI{constructor(e,t){super(),this.N=e,this.C=t}}function YI(e){return AE(e.integerValue||e.doubleValue)}function QI(e){return KE(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t){this.field=e,this.transform=t}}class XI{constructor(e,t){this.version=e,this.transformResults=t}}class eS{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new eS}static exists(e){return new eS(void 0,e)}static updateTime(e){return new eS(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tS(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nS{}function rS(e,t,n){var r;e instanceof uS?function(e,t,n){const r=e.value.clone(),i=dS(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof lS?function(e,t,n){if(!tS(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=dS(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(cS(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function iS(e,t,n){var r;e instanceof uS?function(e,t,n){if(!tS(e.precondition,t))return;const r=e.value.clone(),i=hS(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(aS(t),r).setHasLocalMutations()}(e,t,n):e instanceof lS?function(e,t,n){if(!tS(e.precondition,t))return;const r=hS(e.fieldTransforms,n,t),i=t.data;i.setAll(cS(e)),i.setAll(r),t.convertToFoundDocument(aS(t),i).setHasLocalMutations()}(e,t,n):(r=t,tS(e.precondition,r)&&r.convertToNoDocument(gE.min()))}function sS(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=zI(r.transform,e||null);null!=i&&(null==n&&(n=QE.empty()),n.set(r.field,i))}return n||null}function oS(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&fE(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof HI&&r instanceof HI||n instanceof GI&&r instanceof GI?fE(n.elements,r.elements,UE):n instanceof ZI&&r instanceof ZI?UE(n.C,r.C):n instanceof qI&&r instanceof qI);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}function aS(e){return e.isFoundDocument()?e.version:gE.min()}class uS extends nS{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class lS extends nS{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function cS(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function dS(e,t,n){const r=new Map;J_(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,jI(o,a,n[i]))}return r}function hS(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,VI(e,s,t))}return r}class fS extends nS{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class pS extends nS{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gS,vS;function yS(e){switch(e){case eE.OK:return Q_();case eE.CANCELLED:case eE.UNKNOWN:case eE.DEADLINE_EXCEEDED:case eE.RESOURCE_EXHAUSTED:case eE.INTERNAL:case eE.UNAVAILABLE:case eE.UNAUTHENTICATED:return!1;case eE.INVALID_ARGUMENT:case eE.NOT_FOUND:case eE.ALREADY_EXISTS:case eE.PERMISSION_DENIED:case eE.FAILED_PRECONDITION:case eE.ABORTED:case eE.OUT_OF_RANGE:case eE.UNIMPLEMENTED:case eE.DATA_LOSS:return!0;default:return Q_()}}function wS(e){if(void 0===e)return W_("GRPC error has no .code"),eE.UNKNOWN;switch(e){case gS.OK:return eE.OK;case gS.CANCELLED:return eE.CANCELLED;case gS.UNKNOWN:return eE.UNKNOWN;case gS.DEADLINE_EXCEEDED:return eE.DEADLINE_EXCEEDED;case gS.RESOURCE_EXHAUSTED:return eE.RESOURCE_EXHAUSTED;case gS.INTERNAL:return eE.INTERNAL;case gS.UNAVAILABLE:return eE.UNAVAILABLE;case gS.UNAUTHENTICATED:return eE.UNAUTHENTICATED;case gS.INVALID_ARGUMENT:return eE.INVALID_ARGUMENT;case gS.NOT_FOUND:return eE.NOT_FOUND;case gS.ALREADY_EXISTS:return eE.ALREADY_EXISTS;case gS.PERMISSION_DENIED:return eE.PERMISSION_DENIED;case gS.FAILED_PRECONDITION:return eE.FAILED_PRECONDITION;case gS.ABORTED:return eE.ABORTED;case gS.OUT_OF_RANGE:return eE.OUT_OF_RANGE;case gS.UNIMPLEMENTED:return eE.UNIMPLEMENTED;case gS.DATA_LOSS:return eE.DATA_LOSS;default:return Q_()}}(vS=gS||(gS={}))[vS.OK=0]="OK",vS[vS.CANCELLED=1]="CANCELLED",vS[vS.UNKNOWN=2]="UNKNOWN",vS[vS.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vS[vS.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vS[vS.NOT_FOUND=5]="NOT_FOUND",vS[vS.ALREADY_EXISTS=6]="ALREADY_EXISTS",vS[vS.PERMISSION_DENIED=7]="PERMISSION_DENIED",vS[vS.UNAUTHENTICATED=16]="UNAUTHENTICATED",vS[vS.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vS[vS.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vS[vS.ABORTED=10]="ABORTED",vS[vS.OUT_OF_RANGE=11]="OUT_OF_RANGE",vS[vS.UNIMPLEMENTED=12]="UNIMPLEMENTED",vS[vS.INTERNAL=13]="INTERNAL",vS[vS.UNAVAILABLE=14]="UNAVAILABLE",vS[vS.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bS{constructor(e,t){this.comparator=e,this.root=t||ES.EMPTY}insert(e,t){return new bS(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ES.BLACK,null,null))}remove(e){return new bS(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ES.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _S(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _S(this.root,e,this.comparator,!1)}getReverseIterator(){return new _S(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _S(this.root,e,this.comparator,!0)}}class _S{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ES{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ES.RED,this.left=null!=r?r:ES.EMPTY,this.right=null!=i?i:ES.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ES(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ES.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ES.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ES.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ES.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q_();if(this.right.isRed())throw Q_();const e=this.left.check();if(e!==this.right.check())throw Q_();return e+(this.isRed()?0:1)}}ES.EMPTY=null,ES.RED=!0,ES.BLACK=!1,ES.EMPTY=new class{constructor(){this.size=0}get key(){throw Q_()}get value(){throw Q_()}get color(){throw Q_()}get left(){throw Q_()}get right(){throw Q_()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ES(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class IS{constructor(e){this.comparator=e,this.data=new bS(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new SS(this.data.getIterator())}getIteratorFrom(e){return new SS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof IS))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new IS(this.comparator);return t.data=e,t}}class SS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new bS(ME.comparator);function xS(){return TS}const kS=new bS(ME.comparator);function AS(){return kS}const NS=new bS(ME.comparator);function CS(){return NS}const RS=new IS(ME.comparator);function OS(...e){let t=RS;for(const n of e)t=t.add(n);return t}const PS=new IS(hE);function DS(){return PS}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,MS.createSynthesizedTargetChangeForCurrentChange(e,t)),new LS(gE.min(),n,DS(),xS(),OS())}}class MS{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new MS(TE.EMPTY_BYTE_STRING,t,OS(),OS(),OS())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t,n,r){this.k=e,this.removedTargetIds=t,this.key=n,this.$=r}}class US{constructor(e,t){this.targetId=e,this.O=t}}class $S{constructor(e,t,n=TE.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class BS{constructor(){this.F=0,this.M=zS(),this.L=TE.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=OS(),t=OS(),n=OS();return this.M.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Q_()}})),new MS(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=zS()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class VS{constructor(e){this.tt=e,this.et=new Map,this.nt=xS(),this.st=jS(),this.it=new IS(hE)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,(t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:Q_()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach(((e,n)=>{this.ht(n)&&t(n)}))}ft(e){const t=e.targetId,n=e.O.count,r=this.dt(t);if(r){const e=r.target;if(iI(e))if(0===n){const n=new ME(e.path);this.at(t,n,XE.newNoDocument(n,gE.min()))}else J_(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&iI(i.target)){const t=new ME(i.target.path);null!==this.nt.get(t)||this.gt(r,t)||this.at(r,t,XE.newNoDocument(t,e))}n.K&&(t.set(r,n.W()),n.G())}}));let n=OS();this.st.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.dt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new LS(e,t,this.it,this.nt,n);return this.nt=xS(),this.st=jS(),this.it=new IS(hE),r}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,n){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,t)?r.H(t,1):r.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new BS,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new IS(hE),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||G_("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new BS),this.tt.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function jS(){return new bS(ME.comparator)}function zS(){return new bS(ME.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS={asc:"ASCENDING",desc:"DESCENDING"},HS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class KS{constructor(e,t){this.databaseId=e,this.D=t}}function GS(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function WS(e,t){return e.D?t.toBase64():t.toUint8Array()}function ZS(e,t){return GS(e,t.toTimestamp())}function YS(e){return J_(!!e),gE.fromTimestamp(function(e){const t=kE(e);return new mE(t.seconds,t.nanos)}(e))}function QS(e,t){return(n=e,new _E(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function JS(e){const t=_E.fromString(e);return J_(ET(t)),t}function XS(e,t){return QS(e.databaseId,t.path)}function eT(e,t){const n=JS(t);if(n.get(1)!==e.databaseId.projectId)throw new tE(eE.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new tE(eE.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ME(iT(n))}function tT(e,t){return QS(e.databaseId,t)}function nT(e){const t=JS(e);return 4===t.length?_E.emptyPath():iT(t)}function rT(e){return new _E(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iT(e){return J_(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function sT(e,t,n){return{name:XS(e,t),fields:n.value.mapValue.fields}}function oT(e,t,n){const r=eT(e,t.name),i=YS(t.updateTime),s=new QE({mapValue:{fields:t.fields}}),o=XE.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function aT(e,t){let n;if(t instanceof uS)n={update:sT(e,t.key,t.value)};else if(t instanceof fS)n={delete:XS(e,t.key)};else if(t instanceof lS)n={update:sT(e,t.key,t.data),updateMask:_T(t.fieldMask)};else{if(!(t instanceof pS))return Q_();n={verify:XS(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof qI)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof HI)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof GI)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ZI)return{fieldPath:t.field.canonicalString(),increment:n.C};throw Q_()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:ZS(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Q_())),n;var r,i}function uT(e,t){const n=t.currentDocument?void 0!==(i=t.currentDocument).updateTime?eS.updateTime(YS(i.updateTime)):void 0!==i.exists?eS.exists(i.exists):eS.none():eS.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)J_("REQUEST_TIME"===t.setToServerValue),n=new qI;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new HI(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new GI(e)}else"increment"in t?n=new ZI(e,t.increment):Q_();const r=IE.fromServerFormat(t.fieldPath);return new JI(r,n)}(e,t))):[];var i;if(t.update){t.update.name;const i=eT(e,t.update.name),s=new QE({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new SE(t.map((e=>IE.fromServerFormat(e))))}(t.updateMask);return new lS(i,s,e,n,r)}return new uS(i,s,n,r)}if(t.delete){const r=eT(e,t.delete);return new fS(r,n)}if(t.verify){const r=eT(e,t.verify);return new pS(r,n)}return Q_()}function lT(e,t){return{documents:[tT(e,t.path)]}}function cT(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=tT(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=tT(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(WE(e.value))return{unaryFilter:{field:vT(e.field),op:"IS_NAN"}};if(GE(e.value))return{unaryFilter:{field:vT(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(WE(e.value))return{unaryFilter:{field:vT(e.field),op:"IS_NOT_NAN"}};if(GE(e.value))return{unaryFilter:{field:vT(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vT(e.field),op:gT(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:vT((t=e).field),direction:mT(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=e,u=t.limit,a.D||PE(u)?u:{value:u});var a,u;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=fT(t.startAt)),t.endAt&&(n.structuredQuery.endAt=fT(t.endAt)),n}function dT(e){let t=nT(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J_(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=hT(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new gI(yT((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,PE(t)?null:t}(n.limit));let u=null;n.startAt&&(u=pT(n.startAt));let l=null;return n.endAt&&(l=pT(n.endAt)),_I(t,i,o,s,a,"F",u,l)}function hT(e){return e?void 0!==e.unaryFilter?[bT(e)]:void 0!==e.fieldFilter?[wT(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>hT(e))).reduce(((e,t)=>e.concat(t))):Q_():[]}function fT(e){return{before:e.before,values:e.position}}function pT(e){const t=!!e.before,n=e.values||[];return new pI(n,t)}function mT(e){return qS[e]}function gT(e){return HS[e]}function vT(e){return{fieldPath:e.canonicalString()}}function yT(e){return IE.fromServerFormat(e.fieldPath)}function wT(e){return sI.create(yT(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Q_()}}(e.fieldFilter.op),e.fieldFilter.value)}function bT(e){switch(e.unaryFilter.op){case"IS_NAN":const t=yT(e.unaryFilter.field);return sI.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=yT(e.unaryFilter.field);return sI.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yT(e.unaryFilter.field);return sI.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=yT(e.unaryFilter.field);return sI.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Q_()}}function _T(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ET(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=TT(t)),t=ST(e.get(n),t);return TT(t)}function ST(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function TT(e){return e+""}function xT(e){const t=e.length;if(J_(t>=2),2===t)return J_(""===e.charAt(0)&&""===e.charAt(1)),_E.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Q_(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Q_()}s=t+2}return new _E(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class AT{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}AT.store="owner",AT.key="owner";class NT{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}NT.store="mutationQueues",NT.keyPath="userId";class CT{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}CT.store="mutations",CT.keyPath="batchId",CT.userMutationsIndex="userMutationsIndex",CT.userMutationsKeyPath=["userId","batchId"];class RT{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,IT(t)]}static key(e,t,n){return[e,IT(t),n]}}RT.store="documentMutations",RT.PLACEHOLDER=new RT;class OT{constructor(e,t){this.path=e,this.readTime=t}}class PT{constructor(e,t){this.path=e,this.version=t}}class DT{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}DT.store="remoteDocuments",DT.readTimeIndex="readTimeIndex",DT.readTimeIndexPath="readTime",DT.collectionReadTimeIndex="collectionReadTimeIndex",DT.collectionReadTimeIndexPath=["parentPath","readTime"];class LT{constructor(e){this.byteSize=e}}LT.store="remoteDocumentGlobal",LT.key="remoteDocumentGlobalKey";class MT{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}MT.store="targets",MT.keyPath="targetId",MT.queryTargetsIndexName="queryTargetsIndex",MT.queryTargetsKeyPath=["canonicalId","targetId"];class FT{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}FT.store="targetDocuments",FT.keyPath=["targetId","path"],FT.documentTargetsIndex="documentTargetsIndex",FT.documentTargetsKeyPath=["path","targetId"];class UT{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}UT.key="targetGlobalKey",UT.store="targetGlobal";class $T{constructor(e,t){this.collectionId=e,this.parent=t}}$T.store="collectionParents",$T.keyPath=["collectionId","parent"];class BT{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}BT.store="clientMetadata",BT.keyPath="clientId";class VT{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}VT.store="bundles",VT.keyPath="bundleId";class jT{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}jT.store="namedQueries",jT.keyPath="name";const zT=[NT.store,CT.store,RT.store,DT.store,MT.store,AT.store,UT.store,FT.store,BT.store,LT.store,$T.store,VT.store,jT.store],qT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new KT(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof KT?t:KT.resolve(t)}catch(t){return KT.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):KT.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):KT.reject(t)}static resolve(e){return new KT(((t,n)=>{t(e)}))}static reject(e){return new KT(((t,n)=>{n(e)}))}static waitFor(e){return new KT(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=KT.resolve(!1);for(const n of e)t=t.next((e=>e?KT.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Tt=new nE,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{t.error?this.Tt.reject(new YT(e,t.error)):this.Tt.resolve()},this.transaction.onerror=t=>{const n=tx(t.target.error);this.Tt.reject(new YT(e,n))}}static open(e,t,n,r){try{return new GT(t,e.transaction(r,n))}catch(i){throw new YT(t,i)}}get It(){return this.Tt.promise}abort(e){e&&this.Tt.reject(e),this.aborted||(G_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new JT(t)}}class WT{constructor(e,t,n){this.name=e,this.version=t,this.At=n,12.2===WT.Rt(sh())&&W_("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return G_("SimpleDb","Removing database:",e),XT(window.indexedDB.deleteDatabase(e)).toPromise()}static Pt(){if("undefined"==typeof indexedDB)return!1;if(WT.bt())return!0;const e=sh(),t=WT.Rt(e),n=0<t&&t<10,r=WT.vt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static bt(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.env)||void 0===e?void 0:e.Vt)}static St(e,t){return e.store(t)}static Rt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(e){return this.db||(G_("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new YT(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new tE(eE.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):n(new YT(e,r))},r.onupgradeneeded=e=>{G_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.At.Ct(t,r.transaction,e.oldVersion,this.version).next((()=>{G_("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Nt&&(this.db.onversionchange=e=>this.Nt(e)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Dt(e);const t=GT.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).catch((e=>(t.abort(e),KT.reject(e)))).toPromise();return s.catch((()=>{})),await t.It,s}catch(o){const e="FirebaseError"!==o.name&&s<3;if(G_("SimpleDb","Transaction failed with error:",o.message,"Retrying:",e),this.close(),!e)return Promise.reject(o)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ZT{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return XT(this.kt.delete())}}class YT extends tE{constructor(e,t){super(eE.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function QT(e){return"IndexedDbTransactionError"===e.name}class JT{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(G_("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(G_("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),XT(n)}add(e){return G_("SimpleDb","ADD",this.store.name,e,e),XT(this.store.add(e))}get(e){return XT(this.store.get(e)).next((t=>(void 0===t&&(t=null),G_("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return G_("SimpleDb","DELETE",this.store.name,e),XT(this.store.delete(e))}count(){return G_("SimpleDb","COUNT",this.store.name),XT(this.store.count())}Lt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.Bt(n,((e,t)=>{r.push(t)})).next((()=>r))}Ut(e,t){G_("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.qt=!1;const r=this.cursor(n);return this.Bt(r,((e,t,n)=>n.delete()))}Kt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Bt(r,t)}jt(e){const t=this.cursor({});return new KT(((n,r)=>{t.onerror=e=>{const t=tx(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Bt(e,t){const n=[];return new KT(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new ZT(i),o=t(i.primaryKey,i.value,s);if(o instanceof KT){const e=o.catch((e=>(s.done(),KT.reject(e))));n.push(e)}s.isDone?r():null===s.Ft?i.continue():i.continue(s.Ft)}})).next((()=>KT.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.qt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function XT(e){return new KT(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=tx(e.target.error);n(t)}}))}let ex=!1;function tx(e){const t=WT.Rt(sh());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new tE("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ex||(ex=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx extends HT{constructor(e,t){super(),this.Qt=e,this.currentSequenceNumber=t}}function rx(e,t){const n=X_(e);return WT.St(n.Qt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&rS(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&iS(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&iS(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(gE.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),OS())}isEqual(e){return this.batchId===e.batchId&&fE(this.mutations,e.mutations,((e,t)=>oS(e,t)))&&fE(this.baseMutations,e.baseMutations,((e,t)=>oS(e,t)))}}class sx{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){J_(e.mutations.length===n.length);let r=CS();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new sx(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t,n,r,i=gE.min(),s=gE.min(),o=TE.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new ox(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ox(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ox(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.Wt=e}}function ux(e,t){if(t.document)return oT(e.Wt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=ME.fromSegments(t.noDocument.path),n=fx(t.noDocument.readTime),r=XE.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=ME.fromSegments(t.unknownDocument.path),n=fx(t.unknownDocument.version);return XE.newUnknownDocument(e,n)}return Q_()}function lx(e,t,n){const r=cx(n),i=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n={name:XS(s=e.Wt,(o=t).key),fields:o.data.value.mapValue.fields,updateTime:GS(s,o.version.toTimestamp())},a=t.hasCommittedMutations;return new DT(null,null,n,a,r,i)}var s,o;if(t.isNoDocument()){const e=t.key.path.toArray(),n=hx(t.version),s=t.hasCommittedMutations;return new DT(null,new OT(e,n),null,s,r,i)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=hx(t.version);return new DT(new PT(e,n),null,null,!0,r,i)}return Q_()}function cx(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function dx(e){const t=new mE(e[0],e[1]);return gE.fromTimestamp(t)}function hx(e){const t=e.toTimestamp();return new kT(t.seconds,t.nanoseconds)}function fx(e){const t=new mE(e.seconds,e.nanoseconds);return gE.fromTimestamp(t)}function px(e,t){const n=(t.baseMutations||[]).map((t=>uT(e.Wt,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>uT(e.Wt,t))),i=mE.fromMillis(t.localWriteTimeMs);return new ix(t.batchId,i,n,r)}function mx(e){const t=fx(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?fx(e.lastLimboFreeSnapshotVersion):gE.min();let r;var i;return void 0!==e.query.documents?(J_(1===(i=e.query).documents.length),r=NI(EI(nT(i.documents[0])))):r=NI(dT(e.query)),new ox(r,e.targetId,0,e.lastListenSequenceNumber,t,n,TE.fromBase64String(e.resumeToken))}function gx(e,t){const n=hx(t.snapshotVersion),r=hx(t.lastLimboFreeSnapshotVersion);let i;i=iI(t.target)?lT(e.Wt,t.target):cT(e.Wt,t.target);const s=t.resumeToken.toBase64();return new MT(t.targetId,nI(t.target),n,s,t.sequenceNumber,r,i)}function vx(e){const t=dT({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?CI(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{getBundleMetadata(e,t){return wx(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:fx(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return wx(e).put({bundleId:(n=t).id,createTime:hx(YS(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return bx(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:vx(t.bundledQuery),readTime:fx(t.readTime)};var t}))}saveNamedQuery(e,t){return bx(e).put({name:(n=t).name,readTime:hx(YS(n.readTime)),bundledQuery:n.bundledQuery});var n}}function wx(e){return rx(e,VT.store)}function bx(e){return rx(e,jT.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.Gt=new Ex}addToCollectionParentIndex(e,t){return this.Gt.add(t),KT.resolve()}getCollectionParents(e,t){return KT.resolve(this.Gt.getEntries(t))}}class Ex{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new IS(_E.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new IS(_E.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(){this.zt=new Ex}addToCollectionParentIndex(e,t){if(!this.zt.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.zt.add(t)}));const i={collectionId:n,parent:IT(r)};return Sx(e).put(i)}return KT.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[pE(t),""],!1,!0);return Sx(e).Lt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(xT(r.parent))}return n}))}}function Sx(e){return rx(e,$T.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class xx{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new xx(e,xx.DEFAULT_COLLECTION_PERCENTILE,xx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(e,t,n){const r=e.store(CT.store),i=e.store(RT.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Kt({range:o},((e,t,n)=>(a++,n.delete())));s.push(u.next((()=>{J_(1===a)})));const l=[];for(const c of n.mutations){const e=RT.key(t,c.key.path,n.batchId);s.push(i.delete(e)),l.push(c.key)}return KT.waitFor(s).next((()=>l))}function Ax(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Q_();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xx.DEFAULT_COLLECTION_PERCENTILE=10,xx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xx.DEFAULT=new xx(41943040,xx.DEFAULT_COLLECTION_PERCENTILE,xx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xx.DISABLED=new xx(-1,0,0);class Nx{constructor(e,t,n,r){this.userId=e,this.N=t,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(e,t,n,r){J_(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Nx(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Rx(e).Kt({index:CT.userMutationsIndex,range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Ox(e),s=Rx(e);return s.add({}).next((o=>{J_("number"==typeof o);const a=new ix(o,t,n,r),u=function(e,t,n){const r=n.baseMutations.map((t=>aT(e.Wt,t))),i=n.mutations.map((t=>aT(e.Wt,t)));return new CT(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.N,this.userId,a),l=[];let c=new IS(((e,t)=>hE(e.canonicalString(),t.canonicalString())));for(const e of r){const t=RT.key(this.userId,e.key.path,o);c=c.add(e.key.path.popLast()),l.push(s.put(u)),l.push(i.put(t,RT.PLACEHOLDER))}return c.forEach((t=>{l.push(this.Ht.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Jt[o]=a.keys()})),KT.waitFor(l).next((()=>a))}))}lookupMutationBatch(e,t){return Rx(e).get(t).next((e=>e?(J_(e.userId===this.userId),px(this.N,e)):null))}Xt(e,t){return this.Jt[t]?KT.resolve(this.Jt[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Jt[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Rx(e).Kt({index:CT.userMutationsIndex,range:r},((e,t,r)=>{t.userId===this.userId&&(J_(t.batchId>=n),i=px(this.N,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Rx(e).Kt({index:CT.userMutationsIndex,range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Rx(e).Lt(CT.userMutationsIndex,t).next((e=>e.map((e=>px(this.N,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=RT.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Ox(e).Kt({range:r},((n,r,s)=>{const[o,a,u]=n,l=xT(a);if(o===this.userId&&t.path.isEqual(l))return Rx(e).get(u).next((e=>{if(!e)throw Q_();J_(e.userId===this.userId),i.push(px(this.N,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new IS(hE);const r=[];return t.forEach((t=>{const i=RT.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Ox(e).Kt({range:s},((e,r,i)=>{const[s,o,a]=e,u=xT(o);s===this.userId&&t.path.isEqual(u)?n=n.add(a):i.done()}));r.push(o)})),KT.waitFor(r).next((()=>this.Zt(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=RT.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new IS(hE);return Ox(e).Kt({range:s},((e,t,i)=>{const[s,a,u]=e,l=xT(a);s===this.userId&&n.isPrefixOf(l)?l.length===r&&(o=o.add(u)):i.done()})).next((()=>this.Zt(e,o)))}Zt(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Rx(e).get(t).next((e=>{if(null===e)throw Q_();J_(e.userId===this.userId),n.push(px(this.N,e))})))})),KT.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return kx(e.Qt,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.te(t.batchId)})),KT.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return KT.resolve();const n=IDBKeyRange.lowerBound(RT.prefixForUser(this.userId)),r=[];return Ox(e).Kt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=xT(e[1]);r.push(t)}else n.done()})).next((()=>{J_(0===r.length)}))}))}containsKey(e,t){return Cx(e,this.userId,t)}ee(e){return Px(e).get(this.userId).next((e=>e||new NT(this.userId,-1,"")))}}function Cx(e,t,n){const r=RT.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ox(e).Kt({range:s,qt:!0},((e,n,r)=>{const[s,a,u]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Rx(e){return rx(e,CT.store)}function Ox(e){return rx(e,RT.store)}function Px(e){return rx(e,NT.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Dx(0)}static ie(){return new Dx(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,t){this.referenceDelegate=e,this.N=t}allocateTargetId(e){return this.re(e).next((t=>{const n=new Dx(t.highestTargetId);return t.highestTargetId=n.next(),this.oe(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.re(e).next((e=>gE.fromTimestamp(new mE(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.re(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.re(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.oe(e,r))))}addTargetData(e,t){return this.ae(e,t).next((()=>this.re(e).next((n=>(n.targetCount+=1,this.ce(t,n),this.oe(e,n))))))}updateTargetData(e,t){return this.ae(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Mx(e).delete(t.targetId))).next((()=>this.re(e))).next((t=>(J_(t.targetCount>0),t.targetCount-=1,this.oe(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Mx(e).Kt(((s,o)=>{const a=mx(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>KT.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Mx(e).Kt(((e,n)=>{const r=mx(n);t(r)}))}re(e){return Fx(e).get(UT.key).next((e=>(J_(null!==e),e)))}oe(e,t){return Fx(e).put(UT.key,t)}ae(e,t){return Mx(e).put(gx(this.N,t))}ce(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.re(e).next((e=>e.targetCount))}getTargetData(e,t){const n=nI(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Mx(e).Kt({range:r,index:MT.queryTargetsIndexName},((e,n,r)=>{const s=mx(n);rI(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Ux(e);return t.forEach((t=>{const s=IT(t.path);r.push(i.put(new FT(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))})),KT.waitFor(r)}removeMatchingKeys(e,t,n){const r=Ux(e);return KT.forEach(t,(t=>{const i=IT(t.path);return KT.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Ux(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Ux(e);let i=OS();return r.Kt({range:n,qt:!0},((e,t,n)=>{const r=xT(e[1]),s=new ME(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=IT(t.path),r=IDBKeyRange.bound([n],[pE(n)],!1,!0);let i=0;return Ux(e).Kt({index:FT.documentTargetsIndex,qt:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}Et(e,t){return Mx(e).get(t).next((e=>e?mx(e):null))}}function Mx(e){return rx(e,MT.store)}function Fx(e){return rx(e,UT.store)}function Ux(e){return rx(e,FT.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(e){if(e.code!==eE.FAILED_PRECONDITION||e.message!==qT)throw e;G_("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx([e,t],[n,r]){const i=hE(e,n);return 0===i?hE(t,r):i}class Vx{constructor(e){this.ue=e,this.buffer=new IS(Bx),this.he=0}le(){return++this.he}fe(e){const t=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Bx(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jx{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.de=!1,this.we=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(e){const t=this.de?3e5:6e4;G_("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(t){QT(t)?G_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await $x(t)}await this._e(e)}))}}class zx{constructor(e,t){this.me=e,this.params=t}calculateTargetCount(e,t){return this.me.ge(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return KT.resolve(lE.T);const n=new Vx(t);return this.me.forEachTarget(e,(e=>n.fe(e.sequenceNumber))).next((()=>this.me.ye(e,(e=>n.fe(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.me.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.me.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(G_("LruGarbageCollector","Garbage collection skipped; disabled"),KT.resolve(Tx)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(G_("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tx):this.pe(e,t)))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,t){let n,r,i,s,o,a,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(G_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),K_()<=Rh.DEBUG&&G_("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(u-a)+`ms\nTotal Duration: ${u-l}ms`),KT.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,t){this.db=e,this.garbageCollector=new zx(this,t)}ge(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Ee(e){let t=0;return this.ye(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ye(e,t){return this.Te(e,((e,n)=>t(n)))}addReference(e,t,n){return Hx(e,n)}removeReference(e,t,n){return Hx(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Hx(e,t)}Ie(e,t){return function(e,t){let n=!1;return Px(e).jt((r=>Cx(e,r,t).next((e=>(e&&(n=!0),KT.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Te(e,((s,o)=>{if(o<=t){const t=this.Ie(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s),Ux(e).delete([0,IT(s.path)]))))}));r.push(t)}})).next((()=>KT.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Hx(e,t)}Te(e,t){const n=Ux(e);let r,i=lE.T;return n.Kt({index:FT.documentTargetsIndex},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==lE.T&&t(new ME(xT(r)),i),i=o,r=s):i=lE.T})).next((()=>{i!==lE.T&&t(new ME(xT(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Hx(e,t){return Ux(e).put((n=t,r=e.currentSequenceNumber,new FT(0,IT(n.path),r)));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){yE(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return wE(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.changes=new Kx((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:gE.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:XE.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?KT.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,t){this.N=e,this.Ht=t}addEntry(e,t,n){return Qx(e).put(Jx(t),n)}removeEntry(e,t){const n=Qx(e),r=Jx(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Ae(e,n))))}getEntry(e,t){return Qx(e).get(Jx(t)).next((e=>this.Re(t,e)))}Pe(e,t){return Qx(e).get(Jx(t)).next((e=>({document:this.Re(t,e),size:Ax(e)})))}getEntries(e,t){let n=xS();return this.be(e,t,((e,t)=>{const r=this.Re(e,t);n=n.insert(e,r)})).next((()=>n))}ve(e,t){let n=xS(),r=new bS(ME.comparator);return this.be(e,t,((e,t)=>{const i=this.Re(e,t);n=n.insert(e,i),r=r.insert(e,Ax(t))})).next((()=>({documents:n,Ve:r})))}be(e,t,n){if(t.isEmpty())return KT.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return Qx(e).Kt({range:r},((e,t,r)=>{const o=ME.fromSegments(e);for(;s&&ME.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Mt(s.path.toArray()):r.done()})).next((()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null}))}getDocumentsMatchingQuery(e,t,n){let r=xS();const i=t.path.length+1,s={};if(n.isEqual(gE.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=cx(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=DT.collectionReadTimeIndex}return Qx(e).Kt(s,((e,n,s)=>{if(e.length!==i)return;const o=ux(this.N,n);t.path.isPrefixOf(o.key.path)?DI(t,o)&&(r=r.insert(o.key,o)):s.done()})).next((()=>r))}newChangeBuffer(e){return new Zx(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Yx(e).get(LT.key).next((e=>(J_(!!e),e)))}Ae(e,t){return Yx(e).put(LT.key,t)}Re(e,t){if(t){const e=ux(this.N,t);if(!e.isNoDocument()||!e.version.isEqual(gE.min()))return e}return XE.newInvalidDocument(e)}}class Zx extends Gx{constructor(e,t){super(),this.Se=e,this.trackRemovals=t,this.De=new Kx((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new IS(((e,t)=>hE(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.De.get(i);if(s.document.isValidDocument()){const a=lx(this.Se.N,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const u=Ax(a);n+=u-o,t.push(this.Se.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=lx(this.Se.N,XE.newNoDocument(i,gE.min()),this.getReadTime(i));t.push(this.Se.addEntry(e,i,n))}else t.push(this.Se.removeEntry(e,i))})),r.forEach((n=>{t.push(this.Se.Ht.addToCollectionParentIndex(e,n))})),t.push(this.Se.updateMetadata(e,n)),KT.waitFor(t)}getFromCache(e,t){return this.Se.Pe(e,t).next((e=>(this.De.set(t,e.size),e.document)))}getAllFromCache(e,t){return this.Se.ve(e,t).next((({documents:e,Ve:t})=>(t.forEach(((e,t)=>{this.De.set(e,t)})),e)))}}function Yx(e){return rx(e,LT.store)}function Qx(e){return rx(e,DT.store)}function Jx(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.N=e}Ct(e,t,n,r){J_(n<r&&n>=0&&r<=11);const i=new GT("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore(AT.store),function(e){e.createObjectStore(NT.store,{keyPath:NT.keyPath}),e.createObjectStore(CT.store,{keyPath:CT.keyPath,autoIncrement:!0}).createIndex(CT.userMutationsIndex,CT.userMutationsKeyPath,{unique:!0}),e.createObjectStore(RT.store)}(e),ek(e),function(e){e.createObjectStore(DT.store)}(e));let s=KT.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(FT.store),e.deleteObjectStore(MT.store),e.deleteObjectStore(UT.store)}(e),ek(e)),s=s.next((()=>function(e){const t=e.store(UT.store),n=new UT(0,0,gE.min().toTimestamp(),0);return t.put(UT.key,n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store(CT.store).Lt().next((n=>{e.deleteObjectStore(CT.store),e.createObjectStore(CT.store,{keyPath:CT.keyPath,autoIncrement:!0}).createIndex(CT.userMutationsIndex,CT.userMutationsKeyPath,{unique:!0});const r=t.store(CT.store),i=n.map((e=>r.put(e)));return KT.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore(BT.store,{keyPath:BT.keyPath})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Ce(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore(LT.store)}(e),this.Ne(i))))),n<7&&r>=7&&(s=s.next((()=>this.xe(i)))),n<8&&r>=8&&(s=s.next((()=>this.ke(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(DT.store);t.createIndex(DT.readTimeIndex,DT.readTimeIndexPath,{unique:!1}),t.createIndex(DT.collectionReadTimeIndex,DT.collectionReadTimeIndexPath,{unique:!1})}(t)}))),n<10&&r>=10&&(s=s.next((()=>this.$e(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore(VT.store,{keyPath:VT.keyPath})}(e),function(e){e.createObjectStore(jT.store,{keyPath:jT.keyPath})}(e)}))),s}Ne(e){let t=0;return e.store(DT.store).Kt(((e,n)=>{t+=Ax(n)})).next((()=>{const n=new LT(t);return e.store(LT.store).put(LT.key,n)}))}Ce(e){const t=e.store(NT.store),n=e.store(CT.store);return t.Lt().next((t=>KT.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Lt(CT.userMutationsIndex,r).next((n=>KT.forEach(n,(n=>{J_(n.userId===t.userId);const r=px(this.N,n);return kx(e,t.userId,r).next((()=>{}))}))))}))))}xe(e){const t=e.store(FT.store),n=e.store(DT.store);return e.store(UT.store).get(UT.key).next((e=>{const r=[];return n.Kt(((n,i)=>{const s=new _E(n),o=[0,IT(s)];r.push(t.get(o).next((n=>{return n?KT.resolve():(r=s,t.put(new FT(0,IT(r),e.highestListenSequenceNumber)));var r})))})).next((()=>KT.waitFor(r)))}))}ke(e,t){e.createObjectStore($T.store,{keyPath:$T.keyPath});const n=t.store($T.store),r=new Ex,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:IT(r)})}};return t.store(DT.store).Kt({qt:!0},((e,t)=>{const n=new _E(e);return i(n.popLast())})).next((()=>t.store(RT.store).Kt({qt:!0},(([e,t,n],r)=>{const s=xT(t);return i(s.popLast())}))))}$e(e){const t=e.store(MT.store);return t.Kt(((e,n)=>{const r=mx(n),i=gx(this.N,r);return t.put(i)}))}}function ek(e){e.createObjectStore(FT.store,{keyPath:FT.keyPath}).createIndex(FT.documentTargetsIndex,FT.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(MT.store,{keyPath:MT.keyPath}).createIndex(MT.queryTargetsIndexName,MT.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(UT.store)}const tk="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class nk{constructor(e,t,n,r,i,s,o,a,u,l){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Fe=u,this.Me=l,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=e=>Promise.resolve(),!nk.Pt())throw new tE(eE.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");var c,d;this.referenceDelegate=new qx(this,r),this.We=t+"main",this.N=new ax(a),this.Ge=new WT(this.We,11,new Xx(this.N)),this.ze=new Lx(this.referenceDelegate,this.N),this.Ht=new Ix,this.He=(c=this.N,d=this.Ht,new Wx(c,d)),this.Je=new yx,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===l&&W_("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new tE(eE.FAILED_PRECONDITION,tk);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ze.getHighestSequenceNumber(e)))})).then((e=>{this.Le=new lE(e,this.Fe)})).then((()=>{this.Be=!0})).catch((e=>(this.Ge&&this.Ge.close(),Promise.reject(e))))}nn(e){return this.Qe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget((async()=>{this.started&&await this.Xe()})))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ik(e).put(new BT(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next((()=>{if(this.isPrimary)return this.sn(e).next((e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))))}))})).next((()=>this.rn(e))).next((t=>this.isPrimary&&!t?this.on(e).next((()=>!1)):!!t&&this.an(e).next((()=>!0)))))).catch((e=>{if(QT(e))return G_("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return G_("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable((()=>this.Qe(e))),this.isPrimary=e}))}sn(e){return rk(e).get(AT.key).next((e=>KT.resolve(this.cn(e))))}un(e){return ik(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=rx(e,BT.store);return t.Lt().next((e=>{const n=this.fn(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return KT.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Ye)for(const t of e)this.Ye.removeItem(this.dn(t.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Xe().then((()=>this.hn())).then((()=>this.en()))))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?KT.resolve(!0):rk(e).get(AT.key).next((t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)){if(this.cn(t)&&this.networkEnabled)return!0;if(!this.cn(t)){if(!t.allowTabSynchronization)throw new tE(eE.FAILED_PRECONDITION,tk);return!1}}return!(!this.networkEnabled||!this.inForeground)||ik(e).Lt().next((e=>void 0===this.fn(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&G_("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[AT.store,BT.store],(e=>{const t=new nx(e,lE.T);return this.on(t).next((()=>this.un(t)))})),this.Ge.close(),this.yn()}fn(e,t){return e.filter((e=>this.ln(e.updateTimeMs,t)&&!this.wn(e.clientId)))}pn(){return this.runTransaction("getActiveClients","readonly",(e=>ik(e).Lt().next((e=>this.fn(e,18e5).map((e=>e.clientId))))))}get started(){return this.Be}getMutationQueue(e){return Nx.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,t,n){G_("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let i;return this.Ge.runTransaction(e,r,zT,(r=>(i=new nx(r,this.Le?this.Le.next():lE.T),"readwrite-primary"===t?this.sn(i).next((e=>!!e||this.rn(i))).next((t=>{if(!t)throw W_(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))),new tE(eE.FAILED_PRECONDITION,qT);return n(i)})).next((e=>this.an(i).next((()=>e)))):this.En(i).next((()=>n(i)))))).then((e=>(i.raiseOnCommittedEvent(),e)))}En(e){return rk(e).get(AT.key).next((e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)&&!this.cn(e)&&!(this.Me||this.allowTabSynchronization&&e.allowTabSynchronization))throw new tE(eE.FAILED_PRECONDITION,tk)}))}an(e){const t=new AT(this.clientId,this.allowTabSynchronization,Date.now());return rk(e).put(AT.key,t)}static Pt(){return WT.Pt()}on(e){const t=rk(e);return t.get(AT.key).next((e=>this.cn(e)?(G_("IndexedDbPersistence","Releasing primary lease."),t.delete(AT.key)):KT.resolve()))}ln(e,t){const n=Date.now();return!(e<n-t||e>n&&(W_(`Detected an update time that is in the future: ${e} > ${n}`),1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe())))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ue=()=>{this._n(),!ah()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var t;try{const n=null!==(null===(t=this.Ye)||void 0===t?void 0:t.getItem(this.dn(e)));return G_("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return W_("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){W_("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function rk(e){return rx(e,AT.store)}function ik(e){return rx(e,BT.store)}function sk(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ok{constructor(e,t){this.progress=e,this.Tn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Rn(e,t,n)))}Rn(e,t,n){return this.He.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}Pn(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}bn(e,t){return this.He.getEntries(e,t).next((t=>this.vn(e,t).next((()=>t))))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.Pn(t,e)))}getDocumentsMatchingQuery(e,t,n){return r=t,ME.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Vn(e,t.path):kI(t)?this.Sn(e,t,n):this.Dn(e,t,n);var r}Vn(e,t){return this.An(e,new ME(t)).next((e=>{let t=AS();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Sn(e,t,n){const r=t.collectionGroup;let i=AS();return this.Ht.getCollectionParents(e,r).next((s=>KT.forEach(s,(s=>{const o=(a=t,u=s.child(r),new bI(u,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,u;return this.Dn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Dn(e,t,n){let r,i;return this.He.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Cn(e,i,r).next((e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=XE.newInvalidDocument(n),r=r.insert(n,i)),iS(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{DI(t,n)||(r=r.remove(e))})),r)))}Cn(e,t,n){let r=OS();for(const s of t)for(const e of s.mutations)e instanceof lS&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=r}static kn(e,t){let n=OS(),r=OS();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new uk(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return 0===(i=t).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(gE.min())?this.Fn(e,t):this.On.bn(e,r).next((i=>{const s=this.Mn(t,i);return(II(t)||SI(t))&&this.Ln(t.limitType,s,r,n)?this.Fn(e,t):(K_()<=Rh.DEBUG&&G_("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),PI(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var i}Mn(e,t){let n=new IS(LI(e));return t.forEach(((t,r)=>{DI(e,r)&&(n=n.add(r))})),n}Ln(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return K_()<=Rh.DEBUG&&G_("QueryEngine","Using full collection scan to execute query:",PI(t)),this.On.getDocumentsMatchingQuery(e,t,gE.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t,n,r){this.persistence=e,this.Bn=t,this.N=r,this.Un=new bS(hE),this.qn=new Kx((e=>nI(e)),rI),this.Kn=gE.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new ak(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Un)))}}function dk(e,t,n,r){return new ck(e,t,n,r)}async function hk(e,t){const n=X_(e);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.In.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new ak(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=OS();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.bn(e,o).next((e=>({Wn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function fk(e){const t=X_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.ze.getLastRemoteSnapshotVersion(e)))}function pk(e,t,n,r,i){let s=OS();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=xS();return n.forEach(((n,o)=>{const a=e.get(n),u=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(gE.min())?(t.removeEntry(n,u),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,u),s=s.insert(n,o)):G_("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}function mk(e,t){const n=X_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t))))}function gk(e,t){const n=X_(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.ze.getTargetData(e,t).next((i=>i?(r=i,KT.resolve(r)):n.ze.allocateTargetId(e).next((i=>(r=new ox(t,i,0,e.currentSequenceNumber),n.ze.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Un.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e}))}async function vk(e,t,n){const r=X_(e),i=r.Un.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!QT(o))throw o;G_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Un=r.Un.remove(t),r.qn.delete(i.target)}function yk(e,t,n){const r=X_(e);let i=gE.min(),s=OS();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=X_(e),i=r.qn.get(n);return void 0!==i?KT.resolve(r.Un.get(i)):r.ze.getTargetData(t,n)}(r,e,NI(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Bn.getDocumentsMatchingQuery(e,t,n?i:gE.min(),n?s:OS()))).next((e=>({documents:e,Gn:s})))))}function wk(e,t){const n=X_(e),r=X_(n.ze),i=n.Un.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function bk(e){const t=X_(e);return t.persistence.runTransaction("Get new document changes","readonly",(e=>function(e,t,n){const r=X_(e);let i=xS(),s=cx(n);const o=Qx(t),a=IDBKeyRange.lowerBound(s,!0);return o.Kt({index:DT.readTimeIndex,range:a},((e,t)=>{const n=ux(r.N,t);i=i.insert(n.key,n),s=t.readTime})).next((()=>({Tn:i,readTime:dx(s)})))}(t.jn,e,t.Kn))).then((({Tn:e,readTime:n})=>(t.Kn=n,e)))}async function _k(e,t,n=OS()){const r=await gk(e,NI(vx(t.bundledQuery))),i=X_(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=YS(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Je.saveNamedQuery(e,t);const o=r.withResumeToken(TE.EMPTY_BYTE_STRING,s);return i.Un=i.Un.insert(o.targetId,o),i.ze.updateTargetData(e,o).next((()=>i.ze.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.ze.addMatchingKeys(e,n,r.targetId))).next((()=>i.Je.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return KT.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:YS(n.createTime)}),KT.resolve()}getNamedQuery(e,t){return KT.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:vx(n.bundledQuery),readTime:YS(n.readTime)}),KT.resolve();var n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.Zn=new IS(Sk.ts),this.es=new IS(Sk.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new Sk(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new Sk(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}cs(e){const t=new ME(new _E([])),n=new Sk(t,e),r=new Sk(t,e+1),i=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),i.push(e.key)})),i}us(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new ME(new _E([])),n=new Sk(t,e),r=new Sk(t,e+1);let i=OS();return this.es.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Sk(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Sk{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return ME.comparator(e.key,t.key)||hE(e.ls,t.ls)}static ns(e,t){return hE(e.ls,t.ls)||ME.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new IS(Sk.ts)}checkEmpty(e){return KT.resolve(0===this.In.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new ix(i,t,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new Sk(o.key,i)),this.Ht.addToCollectionParentIndex(e,o.key.path.popLast());return KT.resolve(s)}lookupMutationBatch(e,t){return KT.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this._s(n),i=r<0?0:r;return KT.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return KT.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return KT.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Sk(t,0),r=new Sk(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(e=>{const t=this.ws(e.ls);i.push(t)})),KT.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new IS(hE);return t.forEach((e=>{const t=new Sk(e,0),r=new Sk(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),KT.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ME.isDocumentKey(i)||(i=i.child(""));const s=new Sk(new ME(i),0);let o=new IS(hE);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),s),KT.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this.ws(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){J_(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return KT.forEach(t.mutations,(r=>{const i=new Sk(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}te(e){}containsKey(e,t){const n=new Sk(t,0),r=this.ds.firstAfterOrEqual(n);return KT.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,KT.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new bS(ME.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return KT.resolve(n?n.document.clone():XE.newInvalidDocument(t))}getEntries(e,t){let n=xS();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():XE.newInvalidDocument(e))})),KT.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=xS();const i=new ME(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||DI(t,i)&&(r=r.insert(i.key,i.clone()))}return KT.resolve(r)}Es(e,t){return KT.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new kk(this)}getSize(e){return KT.resolve(this.size)}}class kk extends Gx{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Se.addEntry(e,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),KT.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.persistence=e,this.Ts=new Kx((e=>nI(e)),rI),this.lastRemoteSnapshotVersion=gE.min(),this.highestTargetId=0,this.Is=0,this.As=new Ik,this.targetCount=0,this.Rs=Dx.se()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),KT.resolve()}getLastRemoteSnapshotVersion(e){return KT.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return KT.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),KT.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),KT.resolve()}ae(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Dx(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,KT.resolve()}updateTargetData(e,t){return this.ae(t),KT.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,KT.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),KT.waitFor(i).next((()=>r))}getTargetCount(e){return KT.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return KT.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),KT.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),KT.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),KT.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return KT.resolve(n)}containsKey(e,t){return KT.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t){var n;this.Ps={},this.Le=new lE(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Ak(this),this.Ht=new _x,this.He=(n=this.Ht,new xk(n,(e=>this.referenceDelegate.bs(e)))),this.N=new ax(t),this.Je=new Ek(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.Ps[e.toKey()];return t||(t=new Tk(this.Ht,this.referenceDelegate),this.Ps[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){G_("MemoryPersistence","Starting transaction:",e);const r=new Ck(this.Le.next());return this.referenceDelegate.vs(),n(r).next((e=>this.referenceDelegate.Vs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ss(e,t){return KT.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class Ck extends HT{constructor(e){super(),this.currentSequenceNumber=e}}class Rk{constructor(e){this.persistence=e,this.Ds=new Ik,this.Cs=null}static Ns(e){return new Rk(e)}get xs(){if(this.Cs)return this.Cs;throw Q_()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),KT.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),KT.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),KT.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return KT.forEach(this.xs,(n=>{const r=ME.fromPath(n);return this.ks(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Cs=null,t.apply(e))))}updateLimboDocument(e,t){return this.ks(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}bs(e){return 0}ks(e,t){return KT.or([()=>KT.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(e,t){return`firestore_clients_${e}_${t}`}function Pk(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Dk(e,t){return`firestore_targets_${e}_${t}`}class Lk{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static $s(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new tE(r.error.code,r.error.message))),s?new Lk(e,t,r.state,i):(W_("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Mk{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new tE(n.error.code,n.error.message))),i?new Mk(e,n.state,r):(W_("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fk{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=DS();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=LE(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Fk(e,i):(W_("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Uk{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Uk(t.clientId,t.onlineState):(W_("SharedClientState",`Failed to parse online state: ${e}`),null)}}class $k{constructor(){this.activeTargetIds=DS()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bk{constructor(e,t,n,r,i){this.window=e,this.Oe=t,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new bS(hE),this.started=!1,this.Ks=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.js=Ok(this.persistenceKey,this.Ls),this.Qs=`firestore_sequence_number_${this.persistenceKey}`,this.qs=this.qs.insert(this.Ls,new $k),this.Ws=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Hs=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Js=function(e){return`firestore_bundle_loaded_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static Pt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const n of e){if(n===this.Ls)continue;const e=this.getItem(Ok(this.persistenceKey,n));if(e){const t=Fk.$s(n,e);t&&(this.qs=this.qs.insert(t.clientId,t))}}this.Ys();const t=this.storage.getItem(this.Hs);if(t){const e=this.Xs(t);e&&this.Zs(e)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let t=!1;return this.qs.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,t,n){this.ei(e,t,n),this.ni(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Dk(this.persistenceKey,e));if(n){const r=Mk.$s(e,n);r&&(t=r.state)}}return this.si.Fs(e),this.Ys(),t}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Dk(this.persistenceKey,e))}updateQueryState(e,t,n){this.ii(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.ni(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return G_("SharedClientState","READ",e,t),t}setItem(e,t){G_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){G_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const t=e;if(t.storageArea===this.storage){if(G_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.js)return void W_("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ws.test(t.key)){if(null==t.newValue){const e=this.ai(t.key);return this.ci(e,null)}{const e=this.ui(t.key,t.newValue);if(e)return this.ci(e.clientId,e)}}else if(this.Gs.test(t.key)){if(null!==t.newValue){const e=this.hi(t.key,t.newValue);if(e)return this.li(e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.fi(t.key,t.newValue);if(e)return this.di(e)}}else if(t.key===this.Hs){if(null!==t.newValue){const e=this.Xs(t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.Qs){const e=function(e){let t=lE.T;if(null!=e)try{const n=JSON.parse(e);J_("number"==typeof n),t=n}catch(n){W_("SharedClientState","Failed to read sequence number from WebStorage",n)}return t}(t.newValue);e!==lE.T&&this.sequenceNumberHandler(e)}else if(t.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(t)}))}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,t,n){const r=new Lk(this.currentUser,e,t,n),i=Pk(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Os())}ni(e){const t=Pk(this.persistenceKey,this.currentUser,e);this.removeItem(t)}ri(e){const t={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(t))}ii(e,t,n){const r=Dk(this.persistenceKey,e),i=new Mk(e,t,n);this.setItem(r,i.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const t=this.Ws.exec(e);return t?t[1]:null}ui(e,t){const n=this.ai(e);return Fk.$s(n,t)}hi(e,t){const n=this.Gs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Lk.$s(new z_(i),r,t)}fi(e,t){const n=this.zs.exec(e),r=Number(n[1]);return Mk.$s(r,t)}Xs(e){return Uk.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);G_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,t){const n=t?this.qs.insert(e,t):this.qs.remove(e),r=this.ti(this.qs),i=this.ti(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.gi(s,o).then((()=>{this.qs=n}))}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let t=DS();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Vk{constructor(){this.yi=new $k,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new $k,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.Pi=[],this.bi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}bi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){G_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}Ri(){G_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,r){const i=this.Bi(e,t);G_("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(e,i,s,n).then((e=>(G_("RestConnection","Received: ",e),e)),(t=>{throw Z_("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}Ki(e,t,n,r){return this.Li(e,t,n,r)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+q_,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=qk[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,r){return new Promise(((i,s)=>{const o=new j_;o.listenOnce(M_.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case L_.NO_ERROR:const t=o.getResponseJson();G_("Connection","XHR received:",JSON.stringify(t)),i(t);break;case L_.TIMEOUT:G_("Connection",'RPC "'+e+'" timed out'),s(new tE(eE.DEADLINE_EXCEEDED,"Request time out"));break;case L_.HTTP_ERROR:const n=o.getStatus();if(G_("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(eE).indexOf(t)>=0?t:eE.UNKNOWN}(e.status);s(new tE(t,e.message))}else s(new tE(eE.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new tE(eE.UNAVAILABLE,"Connection failed."));break;default:Q_()}}finally{G_("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new C_,i=Iw(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new B_({})),this.Ui(s.initMessageHeaders,t),oh()||lh()||sh().indexOf("Electron/")>=0||ch()||sh().indexOf("MSAppHost/")>=0||uh()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");G_("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let u=!1,l=!1;const c=new Hk({vi:e=>{l?G_("Connection","Not sending because WebChannel is closed:",e):(u||(G_("Connection","Opening WebChannel transport."),a.open(),u=!0),G_("Connection","WebChannel sending:",e),a.send(e))},Vi:()=>a.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(a,V_.EventType.OPEN,(()=>{l||G_("Connection","WebChannel transport opened.")})),d(a,V_.EventType.CLOSE,(()=>{l||(l=!0,G_("Connection","WebChannel transport closed"),c.$i())})),d(a,V_.EventType.ERROR,(e=>{l||(l=!0,Z_("Connection","WebChannel transport errored:",e),c.$i(new tE(eE.UNAVAILABLE,"The operation could not be completed")))})),d(a,V_.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];J_(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){G_("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=gS[e];if(void 0!==t)return wS(t)}(e),n=i.message;void 0===t&&(t=eE.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,c.$i(new tE(t,n)),a.close()}else G_("Connection","WebChannel received:",n),c.Oi(n)}})),d(i,F_.STAT_EVENT,(e=>{e.stat===U_?G_("Connection","Detected buffering proxy"):e.stat===$_&&G_("Connection","Detected no buffering proxy")})),setTimeout((()=>{c.ki()}),0),c}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(){return"undefined"!=typeof window?window:null}function Wk(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(e){return new KS(e,!0)}class Yk{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&G_("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),e()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,t,n,r,i,s){this.Oe=e,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Yk(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===eE.RESOURCE_EXHAUSTED?(W_(t.toString()),W_("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===eE.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then((e=>{this.sr===t&&this.yr(e)}),(t=>{e((()=>{const e=new tE(eE.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)}))}))}yr(e){const t=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si((()=>{t((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((e=>{t((()=>this.pr(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(e){return G_("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget((()=>this.sr===e?t():(G_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Jk extends Qk{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.N=r}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Q_(),s=t.targetChange.targetIds||[],o=function(e,t){return e.D?(J_(void 0===t||"string"==typeof t),TE.fromBase64String(t||"")):(J_(void 0===t||t instanceof Uint8Array),TE.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(e){const t=void 0===e.code?eE.UNKNOWN:wS(e.code);return new tE(t,e.message||"")}(a);n=new $S(i,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=eT(e,r.document.name),s=YS(r.document.updateTime),o=new QE({mapValue:{fields:r.document.fields}}),a=XE.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new FS(u,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=eT(e,r.document),s=r.readTime?YS(r.readTime):gE.min(),o=XE.newNoDocument(i,s),a=r.removedTargetIds||[];n=new FS([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=eT(e,r.document),s=r.removedTargetIds||[];n=new FS([],s,i,null)}else{if(!("filter"in t))return Q_();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new mS(r),s=e.targetId;n=new US(s,i)}}var r;return n}(this.N,e),n=function(e){if(!("targetChange"in e))return gE.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?gE.min():t.readTime?YS(t.readTime):gE.min()}(e);return this.listener.Tr(t,n)}Ir(e){const t={};t.database=rT(this.N),t.addTarget=function(e,t){let n;const r=t.target;return n=iI(r)?{documents:lT(e,r)}:{query:cT(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=WS(e,t.resumeToken):t.snapshotVersion.compareTo(gE.min())>0&&(n.readTime=GS(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q_()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,e);n&&(t.labels=n),this.wr(t)}Ar(e){const t={};t.database=rT(this.N),t.removeTarget=e,this.wr(t)}}class Xk extends Qk{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.N=r,this.Rr=!1}get Pr(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.br([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(J_(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const t=function(e,t){return e&&e.length>0?(J_(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?YS(e.updateTime):YS(t);return n.isEqual(gE.min())&&(n=YS(t)),new XI(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=YS(e.commitTime);return this.listener.vr(n,t)}return J_(!e.writeResults||0===e.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=rT(this.N),this.wr(e)}br(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>aT(this.N,e)))};this.wr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA extends class{}{constructor(e,t,n){super(),this.credentials=e,this.nr=t,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new tE(eE.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===eE.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new tE(eE.UNKNOWN,e.toString())}))}Ki(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===eE.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new tE(eE.UNKNOWN,e.toString())}))}terminate(){this.Dr=!0}}class tA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(W_(t),this.$r=!1):G_("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((e=>{n.enqueueAndForget((async()=>{dA(this)&&(G_("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=X_(e);t.Kr.add(4),await iA(t),t.Wr.set("Unknown"),t.Kr.delete(4),await rA(t)}(this))}))})),this.Wr=new tA(n,r)}}async function rA(e){if(dA(e))for(const t of e.jr)await t(!0)}async function iA(e){for(const t of e.jr)await t(!1)}function sA(e,t){const n=X_(e);n.qr.has(t.targetId)||(n.qr.set(t.targetId,t),cA(n)?lA(n):AA(n).cr()&&aA(n,t))}function oA(e,t){const n=X_(e),r=AA(n);n.qr.delete(t),r.cr()&&uA(n,t),0===n.qr.size&&(r.cr()?r.lr():dA(n)&&n.Wr.set("Unknown"))}function aA(e,t){e.Gr.Y(t.targetId),AA(e).Ir(t)}function uA(e,t){e.Gr.Y(t),AA(e).Ar(t)}function lA(e){e.Gr=new VS({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),AA(e).start(),e.Wr.Or()}function cA(e){return dA(e)&&!AA(e).ar()&&e.qr.size>0}function dA(e){return 0===X_(e).Kr.size}function hA(e){e.Gr=void 0}async function fA(e){e.qr.forEach(((t,n)=>{aA(e,t)}))}async function pA(e,t){hA(e),cA(e)?(e.Wr.Lr(t),lA(e)):e.Wr.set("Unknown")}async function mA(e,t,n){if(e.Wr.set("Online"),t instanceof $S&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qr.delete(r),e.Gr.removeTarget(r))}(e,t)}catch(r){G_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await gA(e,r)}else if(t instanceof FS?e.Gr.rt(t):t instanceof US?e.Gr.ft(t):e.Gr.ct(t),!n.isEqual(gE.min()))try{const t=await fk(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Gr._t(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qr.get(r);i&&e.qr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.qr.get(t);if(!n)return;e.qr.set(t,n.withResumeToken(TE.EMPTY_BYTE_STRING,n.snapshotVersion)),uA(e,t);const r=new ox(n.target,t,1,n.sequenceNumber);aA(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){G_("RemoteStore","Failed to raise snapshot:",i),await gA(e,i)}}async function gA(e,t,n){if(!QT(t))throw t;e.Kr.add(1),await iA(e),e.Wr.set("Offline"),n||(n=()=>fk(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{G_("RemoteStore","Retrying IndexedDB access"),await n(),e.Kr.delete(1),await rA(e)}))}function vA(e,t){return t().catch((n=>gA(e,n,t)))}async function yA(e){const t=X_(e),n=NA(t);let r=t.Ur.length>0?t.Ur[t.Ur.length-1].batchId:-1;for(;wA(t);)try{const e=await mk(t.localStore,r);if(null===e){0===t.Ur.length&&n.lr();break}r=e.batchId,bA(t,e)}catch(i){await gA(t,i)}_A(t)&&EA(t)}function wA(e){return dA(e)&&e.Ur.length<10}function bA(e,t){e.Ur.push(t);const n=NA(e);n.cr()&&n.Pr&&n.br(t.mutations)}function _A(e){return dA(e)&&!NA(e).ar()&&e.Ur.length>0}function EA(e){NA(e).start()}async function IA(e){NA(e).Sr()}async function SA(e){const t=NA(e);for(const n of e.Ur)t.br(n.mutations)}async function TA(e,t,n){const r=e.Ur.shift(),i=sx.from(r,t,n);await vA(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await yA(e)}async function xA(e,t){t&&NA(e).Pr&&await async function(e,t){if(yS(n=t.code)&&n!==eE.ABORTED){const n=e.Ur.shift();NA(e).hr(),await vA(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await yA(e)}var n}(e,t),_A(e)&&EA(e)}async function kA(e,t){const n=X_(e);t?(n.Kr.delete(2),await rA(n)):t||(n.Kr.add(2),await iA(n),n.Wr.set("Unknown"))}function AA(e){return e.zr||(e.zr=function(e,t,n){const r=X_(e);return r.Cr(),new Jk(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:fA.bind(null,e),Ci:pA.bind(null,e),Tr:mA.bind(null,e)}),e.jr.push((async t=>{t?(e.zr.hr(),cA(e)?lA(e):e.Wr.set("Unknown")):(await e.zr.stop(),hA(e))}))),e.zr}function NA(e){return e.Hr||(e.Hr=function(e,t,n){const r=X_(e);return r.Cr(),new Xk(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:IA.bind(null,e),Ci:xA.bind(null,e),Vr:SA.bind(null,e),vr:TA.bind(null,e)}),e.jr.push((async t=>{t?(e.Hr.hr(),await yA(e)):(await e.Hr.stop(),e.Ur.length>0&&(G_("RemoteStore",`Stopping write stream with ${e.Ur.length} pending writes`),e.Ur=[]))}))),e.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class CA{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nE,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new CA(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new tE(eE.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function RA(e,t){if(W_("AsyncQueue",`${t}: ${e}`),QT(e))return new tE(eE.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ME.comparator(t.key,n.key):(e,t)=>ME.comparator(e.key,t.key),this.keyedMap=AS(),this.sortedSet=new bS(this.comparator)}static emptySet(e){return new OA(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof OA))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new OA;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(){this.Jr=new bS(ME.comparator)}track(e){const t=e.doc.key,n=this.Jr.get(t);n?0!==e.type&&3===n.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==n.type?this.Jr=this.Jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jr=this.Jr.remove(t):1===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):Q_():this.Jr=this.Jr.insert(t,e)}Yr(){const e=[];return this.Jr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class DA{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new DA(e,t,OA.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&RI(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.Xr=void 0,this.listeners=[]}}class MA{constructor(){this.queries=new Kx((e=>OI(e)),RI),this.onlineState="Unknown",this.Zr=new Set}}async function FA(e,t){const n=X_(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new LA),i)try{s.Xr=await n.onListen(r)}catch(o){const e=RA(o,`Initialization of query '${PI(t.query)}' failed`);return void t.onError(e)}n.queries.set(r,s),s.listeners.push(t),t.eo(n.onlineState),s.Xr&&t.no(s.Xr)&&VA(n)}async function UA(e,t){const n=X_(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $A(e,t){const n=X_(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.no(i)&&(r=!0);t.Xr=i}}r&&VA(n)}function BA(e,t,n){const r=X_(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function VA(e){e.Zr.forEach((e=>{e.next()}))}class jA{constructor(e,t,n){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new DA(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.uo&&n||e.docs.isEmpty()&&"Offline"!==t)}oo(e){if(e.docChanges.length>0)return!0;const t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=DA.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,t){this.payload=e,this.byteLength=t}ho(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.N=e}zn(e){return eT(this.N,e)}Hn(e){return e.metadata.exists?oT(this.N,e.document,!1):XE.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return YS(e)}}class HA{constructor(e,t,n){this.lo=e,this.localStore=t,this.N=n,this.queries=[],this.documents=[],this.progress=KA(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}wo(e){const t=new Map,n=new qA(this.N);for(const r of e)if(r.metadata.queries){const e=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||OS()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=X_(e);let s=OS(),o=xS(),a=CS();for(const d of n){const e=t.zn(d.metadata.name);d.document&&(s=s.add(e)),o=o.insert(e,t.Hn(d)),a=a.insert(e,t.Jn(d.metadata.readTime))}const u=i.jn.newChangeBuffer({trackRemovals:!0}),l=await gk(i,(c=r,NI(EI(_E.fromString(`__bundle__/docs/${c}`)))));var c;return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>pk(e,u,o,gE.min(),a).next((t=>(u.apply(e),t))).next((t=>i.ze.removeMatchingKeysForTargetId(e,l.targetId).next((()=>i.ze.addMatchingKeys(e,s,l.targetId))).next((()=>i.Qn.vn(e,t))).next((()=>t))))))}(this.localStore,new qA(this.N),this.documents,this.lo.id),t=this.wo(this.documents);for(const n of this.queries)await _k(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new ok(Object.assign({},this.progress),e)}}function KA(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.key=e}}class WA{constructor(e){this.key=e}}class ZA{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=OS(),this.mutatedKeys=OS(),this.po=LI(e),this.Eo=new OA(this.po)}get To(){return this._o}Io(e,t){const n=t?t.Ao:new PA,r=t?t.Eo:this.Eo;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=II(this.query)&&r.size===this.query.limit?r.last():null,u=SI(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),c=DI(this.query,t)?t:null,d=!!l&&this.mutatedKeys.has(l.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;l&&c?l.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.Ro(l,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.po(c,a)>0||u&&this.po(c,u)<0)&&(o=!0)):!l&&c?(n.track({type:0,doc:c}),f=!0):l&&!c&&(n.track({type:1,doc:l}),f=!0,(a||u)&&(o=!0)),f&&(c?(s=s.add(c),i=h?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),II(this.query)||SI(this.query))for(;s.size>this.query.limit;){const e=II(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const i=e.Ao.Yr();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q_()}};return n(e)-n(t)}(e.type,t.type)||this.po(e.doc,t.doc))),this.Po(n);const s=t?this.bo():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new DA(this.query,e.Eo,r,i,e.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new PA,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}Po(e){e&&(e.addedDocuments.forEach((e=>this._o=this._o.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this._o=this._o.delete(e))),this.current=e.current)}bo(){if(!this.current)return[];const e=this.yo;this.yo=OS(),this.Eo.forEach((e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))}));const t=[];return e.forEach((e=>{this.yo.has(e)||t.push(new WA(e))})),this.yo.forEach((n=>{e.has(n)||t.push(new GA(n))})),t}So(e){this._o=e.Gn,this.yo=OS();const t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return DA.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class YA{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class QA{constructor(e){this.key=e,this.Co=!1}}class JA{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new Kx((e=>OI(e)),RI),this.ko=new Map,this.$o=new Set,this.Oo=new bS(ME.comparator),this.Fo=new Map,this.Mo=new Ik,this.Lo={},this.Bo=new Map,this.Uo=Dx.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function XA(e,t){const n=TN(e);let r,i;const s=n.xo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const e=await gk(n.localStore,NI(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await eN(n,t,r,"current"===s),n.isPrimaryClient&&sA(n.remoteStore,e)}return i}async function eN(e,t,n,r){e.Ko=(t,n,r)=>async function(e,t,n,r){let i=t.view.Io(n);i.Ln&&(i=await yk(e.localStore,t.query,!1).then((({documents:e})=>t.view.Io(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return dN(e,t.targetId,o.vo),o.snapshot}(e,t,n,r);const i=await yk(e.localStore,t,!0),s=new ZA(t,i.Gn),o=s.Io(i.documents),a=MS.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),u=s.applyChanges(o,e.isPrimaryClient,a);dN(e,n,u.vo);const l=new YA(t,n,s);return e.xo.set(t,l),e.ko.has(n)?e.ko.get(n).push(t):e.ko.set(n,[t]),u.snapshot}async function tN(e,t){const n=X_(e),r=n.xo.get(t),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((e=>!RI(e,t)))),void n.xo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vk(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),oA(n.remoteStore,r.targetId),lN(n,r.targetId)})).catch($x)):(lN(n,r.targetId),await vk(n.localStore,r.targetId,!0))}async function nN(e,t){const n=X_(e);try{const e=await function(e,t){const n=X_(e),r=t.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.ze.addMatchingKeys(e,t.addedDocuments,s))));const u=t.resumeToken;if(u.approximateByteSize()>0){const h=a.withResumeToken(u,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,h),l=a,d=t,J_((c=h).resumeToken.approximateByteSize()>0),(0===l.resumeToken.approximateByteSize()||c.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.ze.updateTargetData(e,h))}var l,c,d}));let a=xS();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(pk(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(gE.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next((t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return KT.waitFor(o).next((()=>s.apply(e))).next((()=>n.Qn.vn(e,a))).next((()=>a))})).then((e=>(n.Un=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Fo.get(t);r&&(J_(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Co=!0:e.modifiedDocuments.size>0?J_(r.Co):e.removedDocuments.size>0&&(J_(r.Co),r.Co=!1))})),await pN(n,e,t)}catch(r){await $x(r)}}function rN(e,t,n){const r=X_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=X_(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.eo(t)&&(r=!0)})),r&&VA(n)}(r.eventManager,t),e.length&&r.No.Tr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function iN(e,t,n){const r=X_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fo.get(t),s=i&&i.key;if(s){let e=new bS(ME.comparator);e=e.insert(s,XE.newNoDocument(s,gE.min()));const n=OS().add(s),i=new LS(gE.min(),new Map,new IS(hE),e,n);await nN(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(t),fN(r)}else await vk(r.localStore,t,!1).then((()=>lN(r,t,n))).catch($x)}async function sN(e,t){const n=X_(e),r=t.batch.batchId;try{const e=await function(e,t){const n=X_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=KT.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);J_(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.In.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.bn(e,r)))}))}(n.localStore,t);uN(n,r,null),aN(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pN(n,e)}catch(i){await $x(i)}}async function oN(e,t,n){const r=X_(e);try{const e=await function(e,t){const n=X_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.In.lookupMutationBatch(e,t).next((t=>(J_(null!==t),r=t.keys(),n.In.removeMutationBatch(e,t)))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.bn(e,r)))}))}(r.localStore,t);uN(r,t,n),aN(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await pN(r,e)}catch(i){await $x(i)}}function aN(e,t){(e.Bo.get(t)||[]).forEach((e=>{e.resolve()})),e.Bo.delete(t)}function uN(e,t,n){const r=X_(e);let i=r.Lo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Lo[r.currentUser.toKey()]=i}}function lN(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ko.get(t))e.xo.delete(r),n&&e.No.jo(r,n);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach((t=>{e.Mo.containsKey(t)||cN(e,t)}))}function cN(e,t){e.$o.delete(t.path.canonicalString());const n=e.Oo.get(t);null!==n&&(oA(e.remoteStore,n),e.Oo=e.Oo.remove(t),e.Fo.delete(n),fN(e))}function dN(e,t,n){for(const r of n)r instanceof GA?(e.Mo.addReference(r.key,t),hN(e,r)):r instanceof WA?(G_("SyncEngine","Document no longer in limbo: "+r.key),e.Mo.removeReference(r.key,t),e.Mo.containsKey(r.key)||cN(e,r.key)):Q_()}function hN(e,t){const n=t.key,r=n.path.canonicalString();e.Oo.get(n)||e.$o.has(r)||(G_("SyncEngine","New document in limbo: "+n),e.$o.add(r),fN(e))}function fN(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const n=new ME(_E.fromString(t)),r=e.Uo.next();e.Fo.set(r,new QA(n)),e.Oo=e.Oo.insert(n,r),sA(e.remoteStore,new ox(NI(EI(n.path)),r,2,lE.T))}}async function pN(e,t,n){const r=X_(e),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((e,a)=>{o.push(r.Ko(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=uk.kn(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.No.Tr(i),await async function(e,t){const n=X_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>KT.forEach(t,(t=>KT.forEach(t.Nn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>KT.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!QT(r))throw r;G_("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,s))}async function mN(e,t){const n=X_(e);if(!n.currentUser.isEqual(t)){G_("SyncEngine","User change. New user:",t.toKey());const e=await hk(n.localStore,t);n.currentUser=t,(r=n).Bo.forEach((e=>{e.forEach((e=>{e.reject(new tE(eE.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Bo.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await pN(n,e.Wn)}var r}function gN(e,t){const n=X_(e),r=n.Fo.get(t);if(r&&r.Co)return OS().add(r.key);{let e=OS();const r=n.ko.get(t);if(!r)return e;for(const t of r){const r=n.xo.get(t);e=e.unionWith(r.view.To)}return e}}async function vN(e,t){const n=X_(e),r=await yk(n.localStore,t.query,!0),i=t.view.So(r);return n.isPrimaryClient&&dN(n,t.targetId,i.vo),i}async function yN(e){const t=X_(e);return bk(t.localStore).then((e=>pN(t,e)))}async function wN(e,t,n,r){const i=X_(e),s=await function(e,t){const n=X_(e),r=X_(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Xt(e,t).next((t=>t?n.Qn.bn(e,t):KT.resolve(null)))))}(i.localStore,t);var o,a;null!==s?("pending"===n?await yA(i.remoteStore):"acknowledged"===n||"rejected"===n?(uN(i,t,r||null),aN(i,t),o=i.localStore,a=t,X_(X_(o).In).te(a)):Q_(),await pN(i,s)):G_("SyncEngine","Cannot apply mutation batch with id: "+t)}async function bN(e,t,n){const r=X_(e),i=[],s=[];for(const o of t){let e;const t=r.ko.get(o);if(t&&0!==t.length){e=await gk(r.localStore,NI(t[0]));for(const e of t){const t=r.xo.get(e),n=await vN(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await wk(r.localStore,o);e=await gk(r.localStore,t),await eN(r,_N(t),o,!1)}i.push(e)}return r.No.Tr(s),i}function _N(e){return _I(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function EN(e){const t=X_(e);return X_(X_(t.localStore).persistence).pn()}async function IN(e,t,n,r){const i=X_(e);if(i.qo)G_("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(t))switch(n){case"current":case"not-current":{const e=await bk(i.localStore),r=LS.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await pN(i,e,r);break}case"rejected":await vk(i.localStore,t,!0),lN(i,t,r);break;default:Q_()}}async function SN(e,t,n){const r=TN(e);if(r.qo){for(const e of t){if(r.ko.has(e)){G_("SyncEngine","Adding an already active target "+e);continue}const t=await wk(r.localStore,e),n=await gk(r.localStore,t);await eN(r,_N(t),n.targetId,!1),sA(r.remoteStore,n)}for(const e of n)r.ko.has(e)&&await vk(r.localStore,e,!1).then((()=>{oA(r.remoteStore,e),lN(r,e)})).catch($x)}}function TN(e){const t=X_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=nN.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gN.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=iN.bind(null,t),t.No.Tr=$A.bind(null,t.eventManager),t.No.jo=BA.bind(null,t.eventManager),t}function xN(e){const t=X_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=sN.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=oN.bind(null,t),t}class kN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Zk(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return dk(this.persistence,new lk,e.initialUser,this.N)}Go(e){return new Nk(Rk.Ns,this.N)}Wo(e){return new Vk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AN extends kN{constructor(e,t,n){super(),this.Jo=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await async function(e){const t=X_(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",(e=>function(e){const t=Qx(e);let n=gE.min();return t.Kt({index:DT.readTimeIndex,reverse:!0},((e,t,r)=>{t.readTime&&(n=dx(t.readTime)),r.done()})).next((()=>n))}(e))).then((e=>{t.Kn=e}))}(this.localStore),await this.Jo.initialize(this,e),await xN(this.Jo.syncEngine),await yA(this.Jo.remoteStore),await this.persistence.nn((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Ho(e){return dk(this.persistence,new lk,e.initialUser,this.N)}zo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new jx(t,e.asyncQueue)}Go(e){const t=sk(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?xx.withCacheSize(this.cacheSizeBytes):xx.DEFAULT;return new nk(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Gk(),Wk(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new Vk}}class NN extends AN{constructor(e,t){super(e,t,!1),this.Jo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Jo.syncEngine;this.sharedClientState instanceof Bk&&(this.sharedClientState.syncEngine={_i:wN.bind(null,t),mi:IN.bind(null,t),gi:SN.bind(null,t),pn:EN.bind(null,t),wi:yN.bind(null,t)},await this.sharedClientState.start()),await this.persistence.nn((async e=>{await async function(e,t){const n=X_(e);if(TN(n),xN(n),!0===t&&!0!==n.qo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await bN(n,e.toArray());n.qo=!0,await kA(n.remoteStore,!0);for(const r of t)sA(n.remoteStore,r)}else if(!1===t&&!1!==n.qo){const e=[];let t=Promise.resolve();n.ko.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(lN(n,i),vk(n.localStore,i,!0)))),oA(n.remoteStore,i)})),await t,await bN(n,e),function(e){const t=X_(e);t.Fo.forEach(((e,n)=>{oA(t.remoteStore,n)})),t.Mo.us(),t.Fo=new Map,t.Oo=new bS(ME.comparator)}(n),n.qo=!1,await kA(n.remoteStore,!1)}}(this.Jo.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}Wo(e){const t=Gk();if(!Bk.Pt(t))throw new tE(eE.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=sk(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Bk(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class CN{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rN(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=mN.bind(null,this.syncEngine),await kA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new MA}createDatastore(e){const t=Zk(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Kk(r));var r,i;return i=e.credentials,new eA(i,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>rN(this.syncEngine,e,0),s=zk.Pt()?new zk:new jk,new nA(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new JA(e,t,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=X_(e);G_("RemoteStore","RemoteStore shutting down."),t.Kr.add(5),await iA(t),t.Qr.shutdown(),t.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,t){this.Zo=e,this.N=t,this.metadata=new nE,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then((e=>{e&&e.ho()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(null===e)return null;const t=this.ta.decode(e),n=Number(t);isNaN(n)&&this.sa(`length string (${t}) is not valid number`);const r=await this.ia(n);return new zA(JSON.parse(r),e.length+n)}ra(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async na(){for(;this.ra()<0&&!(await this.oa()););if(0===this.buffer.length)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const t=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new tE(eE.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=X_(e),r=rT(n.N)+"/documents",i={documents:t.map((e=>XS(n.N,e)))},s=await n.Ki("BatchGetDocuments",r,i),o=new Map;s.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){J_(!!t.found),t.found.name,t.found.updateTime;const n=eT(e,t.found.name),r=YS(t.found.updateTime),i=new QE({mapValue:{fields:t.found.fields}});return XE.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){J_(!!t.missing),J_(!!t.readTime);const n=eT(e,t.missing),r=YS(t.readTime);return XE.newNoDocument(n,r)}(e,t):Q_()}(n.N,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());J_(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastWriteError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new fS(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=ME.fromPath(t);this.mutations.push(new pS(n,this.precondition(n)))})),await async function(e,t){const n=X_(e),r=rT(n.N)+"/documents",i={writes:t.map((e=>aT(n.N,e)))};await n.Li("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Q_();t=gE.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new tE(eE.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?eS.updateTime(t):eS.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(gE.min()))throw new tE(eE.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return eS.updateTime(t)}return eS.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.aa=5,this.rr=new Yk(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi((async()=>{const e=new DN(this.datastore),t=this.ua(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.ha(e)}))))})).catch((e=>{this.ha(e)}))}))}ua(e){try{const t=this.updateFunction(e);return!PE(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget((()=>(this.ca(),Promise.resolve())))):this.deferred.reject(e)}la(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!yS(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=z_.UNAUTHENTICATED,this.clientId=dE.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,(async e=>{G_("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new tE(eE.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nE;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=RA(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function FN(e,t){e.asyncQueue.verifyOperationInProgress(),G_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await hk(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function UN(e,t){e.asyncQueue.verifyOperationInProgress();const n=await $N(e);G_("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=X_(e);n.asyncQueue.verifyOperationInProgress(),G_("RemoteStore","RemoteStore received new credentials");const r=dA(n);n.Kr.add(3),await iA(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Kr.delete(3),await rA(n)}(t.remoteStore,e))),e.onlineComponents=t}async function $N(e){return e.offlineComponents||(G_("FirestoreClient","Using default OfflineComponentProvider"),await FN(e,new kN)),e.offlineComponents}async function BN(e){return e.onlineComponents||(G_("FirestoreClient","Using default OnlineComponentProvider"),await UN(e,new CN)),e.onlineComponents}function VN(e){return $N(e).then((e=>e.persistence))}function jN(e){return $N(e).then((e=>e.localStore))}function zN(e){return BN(e).then((e=>e.remoteStore))}function qN(e){return BN(e).then((e=>e.syncEngine))}async function HN(e){const t=await BN(e),n=t.eventManager;return n.onListen=XA.bind(null,t.syncEngine),n.onUnlisten=tN.bind(null,t.syncEngine),n}function KN(e,t,n={}){const r=new nE;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new ON({next:s=>{t.enqueueAndForget((()=>UA(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new tE(eE.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new tE(eE.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new jA(EI(n.path),s,{includeMetadataChanges:!0,uo:!0});return FA(e,o)}(await HN(e),e.asyncQueue,t,n,r))),r.promise}function GN(e,t,n={}){const r=new nE;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new ON({next:n=>{t.enqueueAndForget((()=>UA(e,o))),n.fromCache&&"server"===r.source?i.reject(new tE(eE.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new jA(n,s,{includeMetadataChanges:!0,uo:!0});return FA(e,o)}(await HN(e),e.asyncQueue,t,n,r))),r.promise}function WN(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,r=function(e,t){if(e instanceof Uint8Array)return RN(e,t);if(e instanceof ArrayBuffer)return RN(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),new PN(r,t);var r}(n,Zk(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const r=X_(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=X_(e),r=YS(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Je.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,i))return await t.close(),void n._completeWith((r=i,{taskState:"Success",documentsLoaded:r.totalDocuments,bytesLoaded:r.totalBytes,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}));n._updateProgress(KA(i));const s=new HA(i,e.localStore,t.N);let o=await t.Qo();for(;o;){const e=await s.fo(o);e&&n._updateProgress(e),o=await t.Qo()}const a=await s.complete();await pN(e,a.Tn,void 0),await function(e,t){const n=X_(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Je.saveBundleMetadata(e,t)))}(e.localStore,i),n._completeWith(a.progress)}catch(r){Z_("SyncEngine",`Loading bundle failed with ${r}`),n._failWith(r)}var r})(r,t,n).then((()=>{r.sharedClientState.notifyBundleLoaded()}))}(await qN(e),i,r)}))}class ZN{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class YN{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof YN&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(e,t,n){if(!n)throw new tE(eE.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function XN(e,t,n,r){if(!0===t&&!0===r)throw new tE(eE.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function eC(e){if(!ME.isDocumentKey(e))throw new tE(eE.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function tC(e){if(ME.isDocumentKey(e))throw new tE(eE.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function nC(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){if(e.constructor){const t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&t.length>1)return t[1]}return null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Q_()}function rC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new tE(eE.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nC(e);throw new tE(eE.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function iC(e,t){if(t<=0)throw new tE(eE.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new tE(eE.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new tE(eE.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,XN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sC({}),this._settingsFrozen=!1,e instanceof YN?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new tE(eE.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new YN(e.options.projectId)}(e))}get app(){if(!this._app)throw new tE(eE.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new tE(eE.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sC(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new iE;switch(e.type){case"gapi":const t=e.client;return J_(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new uE(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new tE(eE.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=QN.get(e);t&&(G_("ComponentProvider","Removing Datastore"),QN.delete(e),t.terminate())}(this),Promise.resolve()}}function aC(e,t,n,r={}){var i;const s=(e=rC(e,oC))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Z_("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=z_.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var s=Gd({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[nh(JSON.stringify({alg:"none",type:"JWT"})),nh(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new tE(eE.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new z_(s)}e._credentials=new sE(new rE(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cC(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new uC(this.firestore,e,this._key)}}class lC{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new lC(this.firestore,e,this._query)}}class cC extends lC{constructor(e,t,n){super(e,t,EI(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new uC(this.firestore,null,new ME(e))}withConverter(e){return new cC(this.firestore,e,this._path)}}function dC(e,t,...n){if(e=Th(e),JN("collection","path",t),e instanceof oC){const r=_E.fromString(t,...n);return tC(r),new cC(e,null,r)}{if(!(e instanceof uC||e instanceof cC))throw new tE(eE.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=_E.fromString(e.path,...n).child(_E.fromString(t));return tC(r),new cC(e.firestore,null,r)}}function hC(e,t,...n){if(e=Th(e),1===arguments.length&&(t=dE.I()),JN("doc","path",t),e instanceof oC){const r=_E.fromString(t,...n);return eC(r),new uC(e,null,new ME(r))}{if(!(e instanceof uC||e instanceof cC))throw new tE(eE.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(_E.fromString(t,...n));return eC(r),new uC(e.firestore,e instanceof cC?e.converter:null,new ME(r))}}function fC(e,t){return e=Th(e),t=Th(t),(e instanceof uC||e instanceof cC)&&(t instanceof uC||t instanceof cC)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function pC(e,t){return e=Th(e),t=Th(t),e instanceof lC&&t instanceof lC&&e.firestore===t.firestore&&RI(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mC{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Yk(this,"async_queue_retry"),this.Ea=()=>{const e=Wk();e&&G_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=Wk();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=Wk();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise((()=>{}));const t=new nE;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.da.push(e),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!QT(e))throw e;G_("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(e){const t=this.fa.then((()=>(this.ga=!0,e().catch((e=>{throw this.ma=e,this.ga=!1,W_("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.ga=!1,e))))));return this.fa=t,t}enqueueAfterDelay(e,t,n){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);const r=CA.createAndSchedule(this,e,t,n,(e=>this.Ra(e)));return this._a.push(r),r}Ta(){this.ma&&Q_()}verifyOperationInProgress(){}async Pa(){let e;do{e=this.fa,await e}while(e!==this.fa)}ba(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.Pa().then((()=>{this._a.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pa()}))}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}function gC(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of["next","error","complete"])if(r in n&&"function"==typeof n[r])return!0;return!1}(e)}class vC{constructor(){this._progressObserver={},this._taskCompletionResolver=new nE,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC extends oC{constructor(e,t){super(e,t),this.type="firestore",this._queue=new mC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||bC(this),this._firestoreClient.terminate()}}function wC(e){return e._firestoreClient||bC(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function bC(e){var t;const n=e._freezeSettings(),r=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new ZN(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;e._firestoreClient=new MN(e._credentials,e._queue,r)}function _C(e,t,n){const r=new nE;return e.asyncQueue.enqueue((async()=>{try{await FN(e,n),await UN(e,t),r.resolve()}catch(s){if(!("FirebaseError"===(i=s).name?i.code===eE.FAILED_PRECONDITION||i.code===eE.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&i instanceof DOMException)||22===i.code||20===i.code||11===i.code))throw s;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}var i})).then((()=>r.promise))}function EC(e){return function(e){const t=new nE;return e.asyncQueue.enqueueAndForget((async()=>async function(t,n){const r=X_(t);dA(r.remoteStore)||G_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=X_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.In.getHighestUnacknowledgedBatchId(e)))}(r.localStore);if(-1===e)return void n.resolve();const t=r.Bo.get(e)||[];t.push(n),r.Bo.set(e,t)}catch(e){const r=RA(e,"Initialization of waitForPendingWrites() operation failed");n.reject(r)}}(await qN(e),t))),t.promise}(wC(e=rC(e,yC)))}function IC(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await VN(e),n=await zN(e);return t.setNetworkEnabled(!0),function(e){const t=X_(e);return t.Kr.delete(0),rA(t)}(n)}))}(wC(e=rC(e,yC)))}function SC(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await VN(e),n=await zN(e);return t.setNetworkEnabled(!1),async function(e){const t=X_(e);t.Kr.add(0),await iA(t),t.Wr.set("Offline")}(n)}))}(wC(e=rC(e,yC)))}function TC(e,t){return function(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=X_(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Je.getNamedQuery(e,t)))}(await jN(e),t)))}(wC(e=rC(e,yC)),t).then((t=>t?new lC(e,null,t.query):null))}function xC(e){if(e._initialized||e._terminated)throw new tE(eE.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new tE(eE.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new IE(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this._byteString=e}static fromBase64String(e){try{return new AC(TE.fromBase64String(e))}catch(t){throw new tE(eE.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new AC(TE.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new tE(eE.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new tE(eE.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return hE(this._lat,e._lat)||hE(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=/^__.*__$/;class OC{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new lS(e,this.data,this.fieldMask,t,this.fieldTransforms):new uS(e,this.data,t,this.fieldTransforms)}}class PC{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new lS(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function DC(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q_()}}class LC{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new LC(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.ka(e),r}$a(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return tR(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(0===e.length)throw this.Fa("Document fields must not be empty");if(DC(this.Da)&&RC.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class MC{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||Zk(e)}Ba(e,t,n,r=!1){return new LC({Da:e,methodName:t,La:n,path:IE.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function FC(e){const t=e._freezeSettings(),n=Zk(e._databaseId);return new MC(e._databaseId,!!t.ignoreUndefinedProperties,n)}function UC(e,t,n,r,i,s={}){const o=e.Ba(s.merge||s.mergeFields?2:0,t,n,i);QC("Data must be an object, but it was:",o,r);const a=ZC(r,o);let u,l;if(s.merge)u=new SE(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=JC(t,r,n);if(!o.contains(i))throw new tE(eE.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);nR(e,i)||e.push(i)}u=new SE(e),l=o.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,l=o.fieldTransforms;return new OC(new QE(a),u,l)}class $C extends NC{_toFieldTransform(e){if(2!==e.Da)throw 1===e.Da?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $C}}function BC(e,t,n){return new LC({Da:3,La:t.settings.La,methodName:e._methodName,xa:n},t.databaseId,t.N,t.ignoreUndefinedProperties)}class VC extends NC{_toFieldTransform(e){return new JI(e.path,new qI)}isEqual(e){return e instanceof VC}}class jC extends NC{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=BC(this,e,!0),n=this.Ua.map((e=>WC(e,t))),r=new HI(n);return new JI(e.path,r)}isEqual(e){return this===e}}class zC extends NC{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=BC(this,e,!0),n=this.Ua.map((e=>WC(e,t))),r=new GI(n);return new JI(e.path,r)}isEqual(e){return this===e}}class qC extends NC{constructor(e,t){super(e),this.qa=t}_toFieldTransform(e){const t=new ZI(e.N,$I(e.N,this.qa));return new JI(e.path,t)}isEqual(e){return this===e}}function HC(e,t,n,r){const i=e.Ba(1,t,n);QC("Data must be an object, but it was:",i,r);const s=[],o=QE.empty();yE(r,((e,r)=>{const a=eR(t,e,n);r=Th(r);const u=i.$a(a);if(r instanceof $C)s.push(a);else{const e=WC(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new SE(s);return new PC(o,a,i.fieldTransforms)}function KC(e,t,n,r,i,s){const o=e.Ba(1,t,n),a=[JC(t,r,n)],u=[i];if(s.length%2!=0)throw new tE(eE.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(JC(t,s[h])),u.push(s[h+1]);const l=[],c=QE.empty();for(let h=a.length-1;h>=0;--h)if(!nR(l,a[h])){const e=a[h];let t=u[h];t=Th(t);const n=o.$a(e);if(t instanceof $C)l.push(e);else{const r=WC(t,n);null!=r&&(l.push(e),c.set(e,r))}}const d=new SE(l);return new PC(c,d,o.fieldTransforms)}function GC(e,t,n,r=!1){return WC(n,e.Ba(r?4:3,t))}function WC(e,t){if(YC(e=Th(e)))return QC("Unsupported field value:",t,e),ZC(e,t);if(e instanceof NC)return function(e,t){if(!DC(t.Da))throw t.Fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Fa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&4!==t.Da)throw t.Fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=WC(i,t.Oa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Th(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return $I(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=mE.fromDate(e);return{timestampValue:GS(t.N,n)}}if(e instanceof mE){const n=new mE(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:GS(t.N,n)}}if(e instanceof CC)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof AC)return{bytesValue:WS(t.N,e._byteString)};if(e instanceof uC){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:QS(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fa(`Unsupported field value: ${nC(e)}`)}(e,t)}function ZC(e,t){const n={};return wE(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):yE(e,((e,r)=>{const i=WC(r,t.Na(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function YC(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof mE||e instanceof CC||e instanceof AC||e instanceof uC||e instanceof NC)}function QC(e,t,n){if(!YC(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=nC(n);throw"an object"===r?t.Fa(e+" a custom object"):t.Fa(e+" "+r)}var r}function JC(e,t,n){if((t=Th(t))instanceof kC)return t._internalPath;if("string"==typeof t)return eR(e,t);throw tR("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const XC=new RegExp("[~\\*/\\[\\]]");function eR(e,t,n){if(t.search(XC)>=0)throw tR(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new kC(...t.split("."))._internalPath}catch(r){throw tR(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tR(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new tE(eE.INVALID_ARGUMENT,a+e+u)}function nR(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new uC(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new iR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sR("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class iR extends rR{data(){return super.data()}}function sR(e,t){return"string"==typeof t?eR(e,t):t instanceof kC?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aR extends rR{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new uR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(sR("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class uR extends aR{data(e={}){return super.data(e)}}class lR{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new oR(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new uR(this._firestore,this._userDataWriter,n.key,n,new oR(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new tE(eE.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new uR(e._firestore,e._userDataWriter,n.doc.key,n.doc,new oR(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new uR(e._firestore,e._userDataWriter,t.doc.key,t.doc,new oR(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:cR(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function cR(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q_()}}function dR(e,t){return e instanceof aR&&t instanceof aR?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lR&&t instanceof lR&&e._firestore===t._firestore&&pC(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(e){if(SI(e)&&0===e.explicitOrderBy.length)throw new tE(eE.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fR{}function pR(e,...t){for(const n of t)e=n._apply(e);return e}class mR extends fR{constructor(e,t,n){super(),this.Ka=e,this.ja=t,this.Qa=n,this.type="where"}_apply(e){const t=FC(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new tE(eE.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){ER(o,s);const t=[];for(const n of o)t.push(_R(r,e,n));a={arrayValue:{values:t}}}else a=_R(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ER(o,s),a=GC(n,"where",o,"in"===s||"not-in"===s);const u=sI.create(i,s,a);return function(e,t){if(t.v()){const n=xI(e);if(null!==n&&!n.isEqual(t.field))throw new tE(eE.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=TI(e);null!==r&&IR(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new tE(eE.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new tE(eE.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,u),u}(e._query,0,t,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new lC(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new bI(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}class gR extends fR{constructor(e,t){super(),this.Ka=e,this.Wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new tE(eE.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new tE(eE.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new gI(t,n);return function(e,t){if(null===TI(e)){const n=xI(e);null!==n&&IR(e,n,t.field)}}(e,r),r}(e._query,this.Ka,this.Wa);return new lC(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new bI(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class vR extends fR{constructor(e,t,n){super(),this.type=e,this.Ga=t,this.za=n}_apply(e){return new lC(e.firestore,e.converter,CI(e._query,this.Ga,this.za))}}class yR extends fR{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=bR(e,this.type,this.Ha,this.Ja);return new lC(e.firestore,e.converter,(n=e._query,r=t,new bI(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}}class wR extends fR{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=bR(e,this.type,this.Ha,this.Ja);return new lC(e.firestore,e.converter,(n=e._query,r=t,new bI(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,r)));var n,r}}function bR(e,t,n,r){if(n[0]=Th(n[0]),n[0]instanceof rR)return function(e,t,n,r,i){if(!r)throw new tE(eE.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of AI(e))if(o.field.isKeyField())s.push(qE(t,r.key));else{const e=r.data.field(o.field);if(CE(e))throw new tE(eE.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new tE(eE.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new pI(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=FC(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new tE(eE.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let u=0;u<i.length;u++){const s=i[u];if(o[u].field.isKeyField()){if("string"!=typeof s)throw new tE(eE.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!kI(e)&&-1!==s.indexOf("/"))throw new tE(eE.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(_E.fromString(s));if(!ME.isDocumentKey(n))throw new tE(eE.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ME(n);a.push(qE(t,i))}else{const e=GC(n,r,s);a.push(e)}}return new pI(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function _R(e,t,n){if("string"==typeof(n=Th(n))){if(""===n)throw new tE(eE.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!kI(t)&&-1!==n.indexOf("/"))throw new tE(eE.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(_E.fromString(n));if(!ME.isDocumentKey(r))throw new tE(eE.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qE(e,new ME(r))}if(n instanceof uC)return qE(e,n._key);throw new tE(eE.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${nC(n)}.`)}function ER(e,t){if(!Array.isArray(e)||0===e.length)throw new tE(eE.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new tE(eE.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function IR(e,t,n){if(!n.isEqual(t))throw new tE(eE.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{convertValue(e,t="none"){switch(FE(e)){case 0:return null;case 1:return e.booleanValue;case 2:return AE(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(NE(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Q_()}}convertObject(e,t){const n={};return yE(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new CC(AE(e.latitude),AE(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=RE(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(OE(e));default:return null}}convertTimestamp(e){const t=kE(e);return new mE(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=_E.fromString(e);J_(ET(n));const r=new YN(n.get(1),n.get(3)),i=new ME(n.popFirst(5));return r.isEqual(t)||W_(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class xR extends SR{constructor(e){super(),this.firestore=e}convertBytes(e){return new AC(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new uC(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=FC(e)}set(e,t,n){this._verifyNotCommitted();const r=AR(e,this._firestore),i=TR(r.converter,t,n),s=UC(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,eS.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=AR(e,this._firestore);let s;return s="string"==typeof(t=Th(t))||t instanceof kC?KC(this._dataReader,"WriteBatch.update",i._key,t,n,r):HC(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,eS.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=AR(e,this._firestore);return this._mutations=this._mutations.concat(new fS(t._key,eS.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new tE(eE.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function AR(e,t){if((e=Th(e)).firestore!==t)throw new tE(eE.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR extends SR{constructor(e){super(),this.firestore=e}convertBytes(e){return new AC(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new uC(this.firestore,null,t)}}function CR(e){e=rC(e,uC);const t=rC(e.firestore,yC),n=wC(t),r=new NR(t);return function(e,t){const n=new nE;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=X_(e);return n.persistence.runTransaction("read document","readonly",(e=>n.Qn.An(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new tE(eE.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){const e=RA(r,`Failed to get document '${t} from cache`);n.reject(e)}}(await jN(e),t,n))),n.promise}(n,e._key).then((n=>new aR(t,r,e._key,n,new oR(null!==n&&n.hasLocalMutations,!0),e.converter)))}function RR(e){e=rC(e,lC);const t=rC(e.firestore,yC),n=wC(t),r=new NR(t);return function(e,t){const n=new nE;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await yk(e,t,!0),i=new ZA(t,r.Gn),s=i.Io(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(r){const e=RA(r,`Failed to execute query '${t} against cache`);n.reject(e)}}(await jN(e),t,n))),n.promise}(n,e._query).then((n=>new lR(t,r,e,n)))}function OR(e,t,n){e=rC(e,uC);const r=rC(e.firestore,yC),i=TR(e.converter,t,n);return MR(r,[UC(FC(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,eS.none())])}function PR(e,t,n,...r){e=rC(e,uC);const i=rC(e.firestore,yC),s=FC(i);let o;return o="string"==typeof(t=Th(t))||t instanceof kC?KC(s,"updateDoc",e._key,t,n,r):HC(s,"updateDoc",e._key,t),MR(i,[o.toMutation(e._key,eS.exists(!0))])}function DR(e,...t){var n,r,i;e=Th(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||gC(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(gC(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,c;if(e instanceof uC)l=rC(e.firestore,yC),c=EI(e._key.path),u={next:n=>{t[o]&&t[o](FR(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=rC(e,lC);l=rC(n.firestore,yC),c=n._query;const r=new NR(l);u={next:e=>{t[o]&&t[o](new lR(l,r,n,e))},error:t[o+1],complete:t[o+2]},hR(e._query)}return function(e,t,n,r){const i=new ON(r),s=new jA(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>FA(await HN(e),s))),()=>{i.Xo(),e.asyncQueue.enqueueAndForget((async()=>UA(await HN(e),s)))}}(wC(l),c,a,u)}function LR(e,t){return function(e,t){const n=new ON(t);return e.asyncQueue.enqueueAndForget((async()=>{return t=await HN(e),r=n,X_(t).Zr.add(r),void r.next();var t,r})),()=>{n.Xo(),e.asyncQueue.enqueueAndForget((async()=>{return t=await HN(e),r=n,void X_(t).Zr.delete(r);var t,r}))}}(wC(e=rC(e,yC)),gC(t)?t:{next:t})}function MR(e,t){return function(e,t){const n=new nE;return e.asyncQueue.enqueueAndForget((async()=>async function(t,n,r){const i=xN(t);try{const e=await function(e,t){const n=X_(e),r=mE.now(),i=t.reduce(((e,t)=>e.add(t.key)),OS());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Qn.bn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=sS(e,s.get(e.key));null!=t&&o.push(new lS(e.key,t,JE(t.value.mapValue),eS.exists(!0)))}return n.In.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(i.localStore,n);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Lo[e.currentUser.toKey()];r||(r=new bS(hE)),r=r.insert(t,n),e.Lo[e.currentUser.toKey()]=r}(i,e.batchId,r),await pN(i,e.changes),await yA(i.remoteStore)}catch(e){const n=RA(e,"Failed to persist write");r.reject(n)}}(await qN(e),t,n))),n.promise}(wC(e),t)}function FR(e,t,n){const r=n.docs.get(t._key),i=new NR(e);return new aR(e,i,t._key,r,new oR(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=FC(e)}get(e){const t=AR(e,this._firestore),n=new xR(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Q_();const r=e[0];if(r.isFoundDocument())return new rR(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new rR(this._firestore,n,t._key,null,t.converter);throw Q_()}))}set(e,t,n){const r=AR(e,this._firestore),i=TR(r.converter,t,n),s=UC(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=AR(e,this._firestore);let s;return s="string"==typeof(t=Th(t))||t instanceof kC?KC(this._dataReader,"Transaction.update",i._key,t,n,r):HC(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=AR(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=AR(e,this._firestore),n=new NR(this._firestore);return super.get(e).then((e=>new aR(this._firestore,n,t._key,e._document,new oR(!1,!1),t.converter)))}}function $R(e,t){return function(e,t){const n=new nE;return e.asyncQueue.enqueueAndForget((async()=>{const r=await(i=e,BN(i).then((e=>e.datastore)));var i;new LN(e.asyncQueue,r,t,n).run()})),n.promise}(wC(e),(n=>t(new UR(e,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */q_="9.0.0",Kh(new xh("firestore",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new yC(n,new oE(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r}),"PUBLIC")),Jh("@firebase/firestore","3.0.1",undefined);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function BR(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new tE("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(){if("undefined"==typeof Uint8Array)throw new tE("unimplemented","Uint8Arrays are not available in this environment.")}function jR(){if("undefined"==typeof atob)throw new tE("unimplemented","Blobs are unavailable in Firestore in this environment.")}class zR{constructor(e){this._delegate=e}static fromBase64String(e){return jR(),new zR(AC.fromBase64String(e))}static fromUint8Array(e){return VR(),new zR(AC.fromUint8Array(e))}toBase64(){return jR(),this._delegate.toBase64()}toUint8Array(){return VR(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class HR{enableIndexedDbPersistence(e,t){return function(e,t){xC(e=rC(e,yC));const n=wC(e),r=e._freezeSettings(),i=new CN;return _C(n,i,new AN(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return function(e){xC(e=rC(e,yC));const t=wC(e),n=e._freezeSettings(),r=new CN;return _C(t,r,new NN(r,n.cacheSizeBytes))}(e._delegate)}clearIndexedDbPersistence(e){return function(e){if(e._initialized&&!e._terminated)throw new tE(eE.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new nE;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!WT.Pt())return Promise.resolve();const t=e+"main";await WT.delete(t)}(sk(e._databaseId,e._persistenceKey)),t.resolve()}catch(n){t.reject(n)}})),t.promise}(e._delegate)}}class KR{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof YN||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Z_("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){aC(this._delegate,e,t,n)}enableNetwork(){return IC(this._delegate)}disableNetwork(){return SC(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,XN("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return EC(this._delegate)}onSnapshotsInSync(e){return LR(this._delegate,e)}get app(){if(!this._appCompat)throw new tE("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new oO(this,dC(this._delegate,e))}catch(t){throw JR(t,"collection()","Firestore.collection()")}}doc(e){try{return new QR(this,hC(this._delegate,e))}catch(t){throw JR(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new rO(this,function(e,t){if(e=rC(e,oC),JN("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new tE(eE.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lC(e,null,(n=t,new bI(_E.emptyPath(),n)));var n}(this._delegate,e))}catch(t){throw JR(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return $R(this._delegate,(t=>e(new WR(this,t))))}batch(){return wC(this._delegate),new ZR(new kR(this._delegate,(e=>MR(this._delegate,e))))}loadBundle(e){return function(e,t){const n=wC(e=rC(e,yC)),r=new vC;return WN(n,e._databaseId,t,r),r}(this._delegate,e)}namedQuery(e){return TC(this._delegate,e).then((e=>e?new rO(this,e):null))}}class GR extends SR{constructor(e){super(),this.firestore=e}convertBytes(e){return new zR(new AC(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return QR.forKey(t,this.firestore,null)}}class WR{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new GR(e)}get(e){const t=aO(e);return this._delegate.get(t).then((e=>new tO(this._firestore,new aR(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=aO(e);return n?(BR("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=aO(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=aO(e);return this._delegate.delete(t),this}}class ZR{constructor(e){this._delegate=e}set(e,t,n){const r=aO(e);return n?(BR("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=aO(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=aO(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class YR{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new uR(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new nO(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=YR.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new YR(e,new GR(e),t),r.set(t,i)),i}}YR.INSTANCES=new WeakMap;class QR{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new GR(e)}static forPath(e,t,n){if(e.length%2!=0)throw new tE("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new QR(t,new uC(t._delegate,n,new ME(e)))}static forKey(e,t,n){return new QR(t,new uC(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new oO(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new oO(this.firestore,dC(this._delegate,e))}catch(t){throw JR(t,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Th(e))instanceof uC&&fC(this._delegate,e)}set(e,t){t=BR("DocumentReference.set",t);try{return t?OR(this._delegate,e,t):OR(this._delegate,e)}catch(n){throw JR(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?PR(this._delegate,e):PR(this._delegate,e,t,...n)}catch(r){throw JR(r,"updateDoc()","DocumentReference.update()")}}delete(){return MR(rC((e=this._delegate).firestore,yC),[new fS(e._key,eS.none())]);var e}onSnapshot(...e){const t=XR(e),n=eO(e,(e=>new tO(this.firestore,new aR(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return DR(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?CR(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=rC(e,uC);const t=rC(e.firestore,yC);return KN(wC(t),e._key,{source:"server"}).then((n=>FR(t,e,n)))}(this._delegate):function(e){e=rC(e,uC);const t=rC(e.firestore,yC);return KN(wC(t),e._key).then((n=>FR(t,e,n)))}(this._delegate),t.then((e=>new tO(this.firestore,new aR(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new QR(this.firestore,e?this._delegate.withConverter(YR.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function JR(e,t,n){return e.message=e.message.replace(t,n),e}function XR(e){for(const t of e)if("object"==typeof t&&!qR(t))return t;return{}}function eO(e,t){var n,r;let i;return i=qR(e[0])?e[0]:qR(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class tO{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new QR(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return dR(this._delegate,e._delegate)}}class nO extends tO{data(e){const t=this._delegate.data(e);return void 0!==t||Q_(),t}}class rO{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new GR(e)}where(e,t,n){try{return new rO(this.firestore,pR(this._delegate,function(e,t,n){const r=t,i=sR("where",e);return new mR(i,r,n)}(e,t,n)))}catch(r){throw JR(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new rO(this.firestore,pR(this._delegate,function(e,t="asc"){const n=t,r=sR("orderBy",e);return new gR(r,n)}(e,t)))}catch(n){throw JR(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new rO(this.firestore,pR(this._delegate,(iC("limit",t=e),new vR("limit",t,"F"))))}catch(n){throw JR(n,"limit()","Query.limit()")}var t}limitToLast(e){try{return new rO(this.firestore,pR(this._delegate,(iC("limitToLast",t=e),new vR("limitToLast",t,"L"))))}catch(n){throw JR(n,"limitToLast()","Query.limitToLast()")}var t}startAt(...e){try{return new rO(this.firestore,pR(this._delegate,function(...e){return new yR("startAt",e,!0)}(...e)))}catch(t){throw JR(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new rO(this.firestore,pR(this._delegate,function(...e){return new yR("startAfter",e,!1)}(...e)))}catch(t){throw JR(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new rO(this.firestore,pR(this._delegate,function(...e){return new wR("endBefore",e,!0)}(...e)))}catch(t){throw JR(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new rO(this.firestore,pR(this._delegate,function(...e){return new wR("endAt",e,!1)}(...e)))}catch(t){throw JR(t,"endAt()","Query.endAt()")}}isEqual(e){return pC(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?RR(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=rC(e,lC);const t=rC(e.firestore,yC),n=wC(t),r=new NR(t);return GN(n,e._query,{source:"server"}).then((n=>new lR(t,r,e,n)))}(this._delegate):function(e){e=rC(e,lC);const t=rC(e.firestore,yC),n=wC(t),r=new NR(t);return hR(e._query),GN(n,e._query).then((n=>new lR(t,r,e,n)))}(this._delegate),t.then((e=>new sO(this.firestore,new lR(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=XR(e),n=eO(e,(e=>new sO(this.firestore,new lR(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return DR(this._delegate,t,n)}withConverter(e){return new rO(this.firestore,e?this._delegate.withConverter(YR.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class iO{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new nO(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class sO{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new rO(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new nO(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new iO(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new nO(this._firestore,n))}))}isEqual(e){return dR(this._delegate,e._delegate)}}class oO extends rO{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new QR(this.firestore,e):null}doc(e){try{return new QR(this.firestore,void 0===e?hC(this._delegate):hC(this._delegate,e))}catch(t){throw JR(t,"doc()","CollectionReference.doc()")}}add(e){return function(e,t){const n=rC(e.firestore,yC),r=hC(e),i=TR(e.converter,t);return MR(n,[UC(FC(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,eS.exists(!1))]).then((()=>r))}(this._delegate,e).then((e=>new QR(this.firestore,e)))}isEqual(e){return fC(this._delegate,e._delegate)}withConverter(e){return new oO(this.firestore,e?this._delegate.withConverter(YR.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function aO(e){return rC(e,uC)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(...e){this._delegate=new kC(...e)}static documentId(){return new uO(IE.keyField().canonicalString())}isEqual(e){return(e=Th(e))instanceof kC&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this._delegate=e}static serverTimestamp(){const e=new VC("serverTimestamp");return e._methodName="FieldValue.serverTimestamp",new lO(e)}static delete(){const e=new $C("deleteField");return e._methodName="FieldValue.delete",new lO(e)}static arrayUnion(...e){const t=function(...e){return new jC("arrayUnion",e)}(...e);return t._methodName="FieldValue.arrayUnion",new lO(t)}static arrayRemove(...e){const t=function(...e){return new zC("arrayRemove",e)}(...e);return t._methodName="FieldValue.arrayRemove",new lO(t)}static increment(e){const t=new qC("increment",e);return t._methodName="FieldValue.increment",new lO(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO={Firestore:KR,GeoPoint:CC,Timestamp:mE,Blob:zR,Transaction:WR,WriteBatch:ZR,DocumentReference:QR,DocumentSnapshot:tO,Query:rO,QueryDocumentSnapshot:nO,QuerySnapshot:sO,CollectionReference:oO,FieldPath:uO,FieldValue:lO,setLogLevel:function(e){var t;t=e,H_.setLogLevel(t)},CACHE_SIZE_UNLIMITED:-1};!
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t;t=(e,t)=>new KR(e,t,new HR),e.INTERNAL.registerComponent(new xh("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},cO))),e.registerVersion("@firebase/firestore-compat","0.1.1")}(uf);var dO={exports:{}},hO={exports:{}},fO={exports:{}};!function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t=n(e);throw null===e?t="null":"object"===t&&(t=e.constructor.name),new TypeError("Expected a string but received a ".concat(t))}},e.exports=t.default,e.exports.default=t.default}(fO,fO.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,r.default)(e),e=Date.parse(e),isNaN(e)?null:new Date(e)};var n,r=(n=fO.exports)&&n.__esModule?n:{default:n};e.exports=t.default,e.exports.default=t.default}(hO,hO.exports);var pO={exports:{}},mO={},gO={};Object.defineProperty(gO,"__esModule",{value:!0}),gO.commaDecimal=gO.dotDecimal=gO.farsiLocales=gO.arabicLocales=gO.englishLocales=gO.decimal=gO.alphanumeric=gO.alpha=void 0;var vO={"en-US":/^[A-Z]+$/i,"az-AZ":/^[A-VXYZÇƏĞİıÖŞÜ]+$/i,"bg-BG":/^[А-Я]+$/i,"cs-CZ":/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[A-ZÆØÅ]+$/i,"de-DE":/^[A-ZÄÖÜß]+$/i,"el-GR":/^[Α-ώ]+$/i,"es-ES":/^[A-ZÁÉÍÑÓÚÜ]+$/i,"fa-IR":/^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,"fr-FR":/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[A-ZÀÉÈÌÎÓÒÙ]+$/i,"nb-NO":/^[A-ZÆØÅ]+$/i,"nl-NL":/^[A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[A-ZÆØÅ]+$/i,"hu-HU":/^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"pl-PL":/^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,"ru-RU":/^[А-ЯЁ]+$/i,"sl-SI":/^[A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[A-ZÅÄÖ]+$/i,"th-TH":/^[ก-๐\s]+$/i,"tr-TR":/^[A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[А-ЩЬЮЯЄIЇҐі]+$/i,"vi-VN":/^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,"ku-IQ":/^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,he:/^[א-ת]+$/,fa:/^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i};gO.alpha=vO;var yO={"en-US":/^[0-9A-Z]+$/i,"az-AZ":/^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,"bg-BG":/^[0-9А-Я]+$/i,"cs-CZ":/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[0-9A-ZÆØÅ]+$/i,"de-DE":/^[0-9A-ZÄÖÜß]+$/i,"el-GR":/^[0-9Α-ω]+$/i,"es-ES":/^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,"hu-HU":/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"nb-NO":/^[0-9A-ZÆØÅ]+$/i,"nl-NL":/^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[0-9A-ZÆØÅ]+$/i,"pl-PL":/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,"ru-RU":/^[0-9А-ЯЁ]+$/i,"sl-SI":/^[0-9A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[0-9A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[0-9А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[0-9A-ZÅÄÖ]+$/i,"th-TH":/^[ก-๙\s]+$/i,"tr-TR":/^[0-9A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,"ku-IQ":/^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,"vi-VN":/^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,he:/^[0-9א-ת]+$/,fa:/^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i};gO.alphanumeric=yO;var wO={"en-US":".",ar:"٫"};gO.decimal=wO;var bO=["AU","GB","HK","IN","NZ","ZA","ZM"];gO.englishLocales=bO;for(var _O,EO=0;EO<bO.length;EO++)vO[_O="en-".concat(bO[EO])]=vO["en-US"],yO[_O]=yO["en-US"],wO[_O]=wO["en-US"];var IO=["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","QM","QA","SA","SD","SY","TN","YE"];gO.arabicLocales=IO;for(var SO,TO=0;TO<IO.length;TO++)vO[SO="ar-".concat(IO[TO])]=vO.ar,yO[SO]=yO.ar,wO[SO]=wO.ar;var xO=["IR","AF"];gO.farsiLocales=xO;for(var kO,AO=0;AO<xO.length;AO++)yO[kO="fa-".concat(xO[AO])]=yO.fa,wO[kO]=wO.ar;var NO=["ar-EG","ar-LB","ar-LY"];gO.dotDecimal=NO;var CO=["bg-BG","cs-CZ","da-DK","de-DE","el-GR","en-ZM","es-ES","fr-CA","fr-FR","id-ID","it-IT","ku-IQ","hu-HU","nb-NO","nn-NO","nl-NL","pl-PL","pt-PT","ru-RU","sl-SI","sr-RS@latin","sr-RS","sv-SE","tr-TR","uk-UA","vi-VN"];gO.commaDecimal=CO;for(var RO=0;RO<NO.length;RO++)wO[NO[RO]]=wO["en-US"];for(var OO=0;OO<CO.length;OO++)wO[CO[OO]]=",";vO["fr-CA"]=vO["fr-FR"],yO["fr-CA"]=yO["fr-FR"],vO["pt-BR"]=vO["pt-PT"],yO["pt-BR"]=yO["pt-PT"],wO["pt-BR"]=wO["pt-PT"],vO["pl-Pl"]=vO["pl-PL"],yO["pl-Pl"]=yO["pl-PL"],wO["pl-Pl"]=wO["pl-PL"],vO["fa-AF"]=vO.fa,Object.defineProperty(mO,"__esModule",{value:!0}),mO.default=function(e,t){(0,DO.default)(e),t=t||{};var n=new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(t.locale?LO.decimal[t.locale]:".","[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));if(""===e||"."===e||"-"===e||"+"===e)return!1;var r=parseFloat(e.replace(",","."));return n.test(e)&&(!t.hasOwnProperty("min")||r>=t.min)&&(!t.hasOwnProperty("max")||r<=t.max)&&(!t.hasOwnProperty("lt")||r<t.lt)&&(!t.hasOwnProperty("gt")||r>t.gt)},mO.locales=void 0;var PO,DO=(PO=fO.exports)&&PO.__esModule?PO:{default:PO},LO=gO;var MO=Object.keys(LO.decimal);mO.locales=MO,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e)?parseFloat(e):NaN};var n=function(e){return e&&e.__esModule?e:{default:e}}(mO);e.exports=t.default,e.exports.default=t.default}(pO,pO.exports);var FO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,n.default)(e),parseInt(e,t||10)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(FO,FO.exports);var UO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),t)return"1"===e||/^true$/i.test(e);return"0"!==e&&!/^false$/i.test(e)&&""!==e};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(UO,UO.exports);var $O={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,n.default)(e),e===t};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}($O,$O.exports);var BO={exports:{}},VO={exports:{}};!function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){"object"===n(e)&&null!==e?e="function"==typeof e.toString?e.toString():"[object Object]":(null==e||isNaN(e)&&!e.length)&&(e="");return String(e)},e.exports=t.default,e.exports.default=t.default}(VO,VO.exports);var jO,zO,qO={exports:{}};jO=qO,zO=qO.exports,Object.defineProperty(zO,"__esModule",{value:!0}),zO.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var n in t)void 0===e[n]&&(e[n]=t[n]);return e},jO.exports=zO.default,jO.exports.default=zO.default,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,s){return(0,n.default)(e),(s=(0,i.default)(s,o)).ignoreCase?e.toLowerCase().indexOf((0,r.default)(t).toLowerCase())>=0:e.indexOf((0,r.default)(t))>=0};var n=s(fO.exports),r=s(VO.exports),i=s(qO.exports);function s(e){return e&&e.__esModule?e:{default:e}}var o={ignoreCase:!1};e.exports=t.default,e.exports.default=t.default}(BO,BO.exports);var HO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){(0,n.default)(e),"[object RegExp]"!==Object.prototype.toString.call(t)&&(t=new RegExp(t,r));return t.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(HO,HO.exports);var KO={exports:{}},GO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var i,s;(0,n.default)(e),"object"===r(t)?(i=t.min||0,s=t.max):(i=arguments[1],s=arguments[2]);var o=encodeURI(e).split(/%..|./).length-1;return o>=i&&(void 0===s||o<=s)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports=t.default,e.exports.default=t.default}(GO,GO.exports);var WO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e),(t=(0,r.default)(t,s)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));var i=e.split("."),o=i[i.length-1];if(t.require_tld){if(i.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(o))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(o))return!1}if(!t.allow_numeric_tld&&/^\d+$/.test(o))return!1;return i.every((function(e){return!(e.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e)&&(!/[\uff01-\uff5e]/.test(e)&&(!/^-|-$/.test(e)&&!(!t.allow_underscores&&/_/.test(e)))))}))};var n=i(fO.exports),r=i(qO.exports);function i(e){return e&&e.__esModule?e:{default:e}}var s={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};e.exports=t.default,e.exports.default=t.default}(WO,WO.exports);var ZO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,n.default)(t),!(r=String(r)))return e(t,4)||e(t,6);if("4"===r){if(!s.test(t))return!1;var i=t.split(".").sort((function(e,t){return e-t}));return i[3]<=255}if("6"===r)return!!a.test(t);return!1};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",i="(".concat(r,"[.]){3}").concat(r),s=new RegExp("^".concat(i,"$")),o="(?:[0-9a-fA-F]{1,4})",a=new RegExp("^("+"(?:".concat(o,":){7}(?:").concat(o,"|:)|")+"(?:".concat(o,":){6}(?:").concat(i,"|:").concat(o,"|:)|")+"(?:".concat(o,":){5}(?::").concat(i,"|(:").concat(o,"){1,2}|:)|")+"(?:".concat(o,":){4}(?:(:").concat(o,"){0,1}:").concat(i,"|(:").concat(o,"){1,3}|:)|")+"(?:".concat(o,":){3}(?:(:").concat(o,"){0,2}:").concat(i,"|(:").concat(o,"){1,4}|:)|")+"(?:".concat(o,":){2}(?:(:").concat(o,"){0,3}:").concat(i,"|(:").concat(o,"){1,5}|:)|")+"(?:".concat(o,":){1}(?:(:").concat(o,"){0,4}:").concat(i,"|(:").concat(o,"){1,6}|:)|")+"(?::((?::".concat(o,"){0,5}:").concat(i,"|(?::").concat(o,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");e.exports=t.default,e.exports.default=t.default}(ZO,ZO.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),(t=(0,r.default)(t,u)).require_display_name||t.allow_display_name){var a=e.match(l);if(a){var m=a[1];if(e=e.replace(m,"").replace(/(^<|>$)/g,""),m.endsWith(" ")&&(m=m.substr(0,m.length-1)),!function(e){var t=e.replace(/^"(.+)"$/,"$1");if(!t.trim())return!1;if(/[\.";<>]/.test(t)){if(t===e)return!1;if(!(t.split('"').length===t.split('\\"').length))return!1}return!0}(m))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>254)return!1;var g=e.split("@"),v=g.pop(),y=g.join("@"),w=v.toLowerCase();if(t.domain_specific_validation&&("gmail.com"===w||"googlemail.com"===w)){var b=(y=y.toLowerCase()).split("+")[0];if(!(0,i.default)(b.replace(".",""),{min:6,max:30}))return!1;for(var _=b.split("."),E=0;E<_.length;E++)if(!d.test(_[E]))return!1}if(!(!1!==t.ignore_max_length||(0,i.default)(y,{max:64})&&(0,i.default)(v,{max:254})))return!1;if(!(0,s.default)(v,{require_tld:t.require_tld})){if(!t.allow_ip_domain)return!1;if(!(0,o.default)(v)){if(!v.startsWith("[")||!v.endsWith("]"))return!1;var I=v.substr(1,v.length-2);if(0===I.length||!(0,o.default)(I))return!1}}if('"'===y[0])return y=y.slice(1,y.length-1),t.allow_utf8_local_part?p.test(y):h.test(y);for(var S=t.allow_utf8_local_part?f:c,T=y.split("."),x=0;x<T.length;x++)if(!S.test(T[x]))return!1;if(t.blacklisted_chars&&-1!==y.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g")))return!1;return!0};var n=a(fO.exports),r=a(qO.exports),i=a(GO.exports),s=a(WO.exports),o=a(ZO.exports);function a(e){return e&&e.__esModule?e:{default:e}}var u={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1},l=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,c=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,d=/^[a-z\d]+$/,h=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,f=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,p=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;e.exports=t.default,e.exports.default=t.default}(KO,KO.exports);var YO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),!e||/[\s<>]/.test(e))return!1;if(0===e.indexOf("mailto:"))return!1;if((t=(0,s.default)(t,a)).validate_length&&e.length>=2083)return!1;var o,l,d,h,f,p,m,g;if(m=e.split("#"),e=m.shift(),m=e.split("?"),e=m.shift(),(m=e.split("://")).length>1){if(o=m.shift().toLowerCase(),t.require_valid_protocol&&-1===t.protocols.indexOf(o))return!1}else{if(t.require_protocol)return!1;if("//"===e.substr(0,2)){if(!t.allow_protocol_relative_urls)return!1;m[0]=e.substr(2)}}if(""===(e=m.join("://")))return!1;if(m=e.split("/"),""===(e=m.shift())&&!t.require_host)return!0;if((m=e.split("@")).length>1){if(t.disallow_auth)return!1;if(""===m[0]||":"===m[0].substr(0,1))return!1;if((l=m.shift()).indexOf(":")>=0&&l.split(":").length>2)return!1}h=m.join("@"),p=null,g=null;var v=h.match(u);v?(d="",g=v[1],p=v[2]||null):(m=h.split(":"),d=m.shift(),m.length&&(p=m.join(":")));if(null!==p){if(f=parseInt(p,10),!/^[0-9]+$/.test(p)||f<=0||f>65535)return!1}else if(t.require_port)return!1;if(!((0,i.default)(d)||(0,r.default)(d,t)||g&&(0,i.default)(g,6)))return!1;if(d=d||g,t.host_whitelist&&!c(d,t.host_whitelist))return!1;if(t.host_blacklist&&c(d,t.host_blacklist))return!1;return!0};var n=o(fO.exports),r=o(WO.exports),i=o(ZO.exports),s=o(qO.exports);function o(e){return e&&e.__esModule?e:{default:e}}var a={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,validate_length:!0},u=/^\[([^\]]+)\](?::([0-9]+))?$/;function l(e){return"[object RegExp]"===Object.prototype.toString.call(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];if(e===r||l(r)&&r.test(e))return!0}return!1}e.exports=t.default,e.exports.default=t.default}(YO,YO.exports);var QO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),t&&(t.no_colons||t.no_separators))return i.test(e);return r.test(e)||s.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/,i=/^([0-9a-fA-F]){12}$/,s=/^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;e.exports=t.default,e.exports.default=t.default}(QO,QO.exports);var JO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(0,n.default)(e);var i=e.split("/");if(2!==i.length)return!1;if(!s.test(i[1]))return!1;if(i[1].length>1&&i[1].startsWith("0"))return!1;var a=(0,r.default)(i[0],t);if(!a)return!1;var u=null;switch(String(t)){case"4":u=32;break;case"6":u=o;break;default:u=(0,r.default)(i[0],"6")?o:32}return i[1]<=u&&i[1]>=0};var n=i(fO.exports),r=i(ZO.exports);function i(e){return e&&e.__esModule?e:{default:e}}var s=/^\d{1,3}$/,o=128;e.exports=t.default,e.exports.default=t.default}(JO,JO.exports);var XO={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t="string"==typeof t?(0,n.default)({format:t},o):(0,n.default)(t,o);if("string"==typeof e&&(m=t.format,/(^(y{4}|y{2})[\/-](m{1,2})[\/-](d{1,2})$)|(^(m{1,2})[\/-](d{1,2})[\/-]((y{4}|y{2})$))|(^(d{1,2})[\/-](m{1,2})[\/-]((y{4}|y{2})$))/gi.test(m))){var s,a=t.delimiters.find((function(e){return-1!==t.format.indexOf(e)})),u=t.strictMode?a:t.delimiters.find((function(t){return-1!==e.indexOf(t)})),l=function(e,t){for(var n=[],r=Math.min(e.length,t.length),i=0;i<r;i++)n.push([e[i],t[i]]);return n}(e.split(u),t.format.toLowerCase().split(a)),c={},d=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=i(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}(l);try{for(d.s();!(s=d.n()).done;){var h=r(s.value,2),f=h[0],p=h[1];if(f.length!==p.length)return!1;c[p.charAt(0)]=f}}catch(g){d.e(g)}finally{d.f()}return new Date("".concat(c.m,"/").concat(c.d,"/").concat(c.y)).getDate()===+c.d}var m;if(!t.strictMode)return"[object Date]"===Object.prototype.toString.call(e)&&isFinite(e);return!1};var n=function(e){return e&&e.__esModule?e:{default:e}}(qO.exports);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,s=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o={format:"YYYY/MM/DD",delimiters:["/","-"],strictMode:!1};e.exports=t.default,e.exports.default=t.default}(XO,XO.exports);var eP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),["true","false","1","0"].indexOf(e)>=0};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(eP,eP.exports);var tP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,n.default)(e),"en_US_POSIX"===e||"ca_ES_VALENCIA"===e)return!0;return r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[A-Za-z]{2,4}([_-]([A-Za-z]{4}|[\d]{3}))?([_-]([A-Za-z]{2}|[\d]{3}))?$/;e.exports=t.default,e.exports.default=t.default}(tP,tP.exports);var nP={};Object.defineProperty(nP,"__esModule",{value:!0}),nP.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,rP.default)(e);var r=e,i=n.ignore;if(i)if(i instanceof RegExp)r=r.replace(i,"");else{if("string"!=typeof i)throw new Error("ignore should be instance of a String or RegExp");r=r.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g,"\\$&"),"]"),"g"),"")}if(t in iP.alpha)return iP.alpha[t].test(r);throw new Error("Invalid locale '".concat(t,"'"))},nP.locales=void 0;var rP=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports),iP=gO;var sP=Object.keys(iP.alpha);nP.locales=sP;var oP={};Object.defineProperty(oP,"__esModule",{value:!0}),oP.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,aP.default)(e);var r=e,i=n.ignore;if(i)if(i instanceof RegExp)r=r.replace(i,"");else{if("string"!=typeof i)throw new Error("ignore should be instance of a String or RegExp");r=r.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g,"\\$&"),"]"),"g"),"")}if(t in uP.alphanumeric)return uP.alphanumeric[t].test(r);throw new Error("Invalid locale '".concat(t,"'"))},oP.locales=void 0;var aP=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports),uP=gO;var lP=Object.keys(uP.alphanumeric);oP.locales=lP;var cP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),t&&t.no_symbols)return i.test(e);return new RegExp("^[+-]?([0-9]*[".concat((t||{}).locale?r.decimal[t.locale]:".","])?[0-9]+$")).test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports),r=gO;var i=/^[0-9]+$/;e.exports=t.default,e.exports.default=t.default}(cP,cP.exports);var dP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e);var i=e.replace(/\s/g,"").toUpperCase();return t.toUpperCase()in r&&r[t].test(i)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r={AM:/^[A-Z]{2}\d{7}$/,AR:/^[A-Z]{3}\d{6}$/,AT:/^[A-Z]\d{7}$/,AU:/^[A-Z]\d{7}$/,BE:/^[A-Z]{2}\d{6}$/,BG:/^\d{9}$/,BR:/^[A-Z]{2}\d{6}$/,BY:/^[A-Z]{2}\d{7}$/,CA:/^[A-Z]{2}\d{6}$/,CH:/^[A-Z]\d{7}$/,CN:/^[GE]\d{8}$/,CY:/^[A-Z](\d{6}|\d{8})$/,CZ:/^\d{8}$/,DE:/^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,DK:/^\d{9}$/,DZ:/^\d{9}$/,EE:/^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,ES:/^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,FI:/^[A-Z]{2}\d{7}$/,FR:/^\d{2}[A-Z]{2}\d{5}$/,GB:/^\d{9}$/,GR:/^[A-Z]{2}\d{7}$/,HR:/^\d{9}$/,HU:/^[A-Z]{2}(\d{6}|\d{7})$/,IE:/^[A-Z0-9]{2}\d{7}$/,IN:/^[A-Z]{1}-?\d{7}$/,IR:/^[A-Z]\d{8}$/,IS:/^(A)\d{7}$/,IT:/^[A-Z0-9]{2}\d{7}$/,JP:/^[A-Z]{2}\d{7}$/,KR:/^[MS]\d{8}$/,LT:/^[A-Z0-9]{8}$/,LU:/^[A-Z0-9]{8}$/,LV:/^[A-Z0-9]{2}\d{7}$/,LY:/^[A-Z0-9]{8}$/,MT:/^\d{7}$/,MZ:/^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,MY:/^[AHK]\d{8}$/,NL:/^[A-Z]{2}[A-Z0-9]{6}\d$/,PO:/^[A-Z]{2}\d{7}$/,PT:/^[A-Z]\d{6}$/,RO:/^\d{8,9}$/,RU:/^\d{2}\d{2}\d{6}$/,SE:/^\d{8}$/,SL:/^(P)[A-Z]\d{7}$/,SK:/^[0-9A-Z]\d{7}$/,TR:/^[A-Z]\d{8}$/,UA:/^[A-Z]{2}\d{6}$/,US:/^\d{9}$/};e.exports=t.default,e.exports.default=t.default}(dP,dP.exports);var hP={exports:{}},fP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e);var s=(t=t||{}).hasOwnProperty("allow_leading_zeroes")&&!t.allow_leading_zeroes?r:i,o=!t.hasOwnProperty("min")||e>=t.min,a=!t.hasOwnProperty("max")||e<=t.max,u=!t.hasOwnProperty("lt")||e<t.lt,l=!t.hasOwnProperty("gt")||e>t.gt;return s.test(e)&&o&&a&&u&&l};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(?:[-+]?(?:0|[1-9][0-9]*))$/,i=/^[-+]?[0-9]+$/;e.exports=t.default,e.exports.default=t.default}(fP,fP.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e,{min:0,max:65535})};var n=function(e){return e&&e.__esModule?e:{default:e}}(fP.exports);e.exports=t.default,e.exports.default=t.default}(hP,hP.exports);var pP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),e===e.toLowerCase()};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(pP,pP.exports);var mP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),e===e.toUpperCase()};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(mP,mP.exports);var gP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e);var s=r;(t=t||{}).allow_hyphens&&(s=i);if(!s.test(e))return!1;e=e.replace(/-/g,"");for(var o=0,a=2,u=0;u<14;u++){var l=e.substring(14-u-1,14-u),c=parseInt(l,10)*a;o+=c>=10?c%10+1:c,1===a?a+=1:a-=1}if((10-o%10)%10!==parseInt(e.substring(14,15),10))return!1;return!0};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[0-9]{15}$/,i=/^\d{2}-\d{6}-\d{6}-\d{1}$/;e.exports=t.default,e.exports.default=t.default}(gP,gP.exports);var vP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[\x00-\x7F]+$/;e.exports=t.default,e.exports.default=t.default}(vP,vP.exports);var yP={};Object.defineProperty(yP,"__esModule",{value:!0}),yP.default=function(e){return(0,wP.default)(e),bP.test(e)},yP.fullWidth=void 0;var wP=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var bP=/[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;yP.fullWidth=bP;var _P={};Object.defineProperty(_P,"__esModule",{value:!0}),_P.default=function(e){return(0,EP.default)(e),IP.test(e)},_P.halfWidth=void 0;var EP=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var IP=/[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;_P.halfWidth=IP;var SP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.fullWidth.test(e)&&i.halfWidth.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports),r=yP,i=_P;e.exports=t.default,e.exports.default=t.default}(SP,SP.exports);var TP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/[^\x00-\x7F]/;e.exports=t.default,e.exports.default=t.default}(TP,TP.exports);var xP={exports:{}},kP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.join("");return new RegExp(n,t)},e.exports=t.default,e.exports.default=t.default}(kP,kP.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),i.test(e)};var n=r(fO.exports);function r(e){return e&&e.__esModule?e:{default:e}}var i=(0,r(kP.exports).default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)","(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))","?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"],"i");e.exports=t.default,e.exports.default=t.default}(xP,xP.exports);var AP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/[\uD800-\uDBFF][\uDC00-\uDFFF]/;e.exports=t.default,e.exports.default=t.default}(AP,AP.exports);var NP={exports:{}},CP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){return e.some((function(e){return t===e}))};t.default=n,e.exports=t.default,e.exports.default=t.default}(CP,CP.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,r.default)(e),(t=(0,n.default)(t,a)).locale in s.decimal)return!(0,i.default)(u,e.replace(/ /g,""))&&function(e){return new RegExp("^[-+]?([0-9]+)?(\\".concat(s.decimal[e.locale],"[0-9]{").concat(e.decimal_digits,"})").concat(e.force_decimal?"":"?","$"))}(t).test(e);throw new Error("Invalid locale '".concat(t.locale,"'"))};var n=o(qO.exports),r=o(fO.exports),i=o(CP.exports),s=gO;function o(e){return e&&e.__esModule?e:{default:e}}var a={force_decimal:!1,decimal_digits:"1,",locale:"en-US"},u=["","-","+"];e.exports=t.default,e.exports.default=t.default}(NP,NP.exports);var RP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(0x|0h)?[0-9A-F]+$/i;e.exports=t.default,e.exports.default=t.default}(RP,RP.exports);var OP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(0o)?[0-7]+$/i;e.exports=t.default,e.exports.default=t.default}(OP,OP.exports);var PP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,n.default)(e),(0,r.default)(e)%parseInt(t,10)==0};var n=i(fO.exports),r=i(pO.exports);function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default,e.exports.default=t.default}(PP,PP.exports);var DP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;e.exports=t.default,e.exports.default=t.default}(DP,DP.exports);var LP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if((0,n.default)(e),!t)return r.test(e)||i.test(e);return r.test(e)||i.test(e)||s.test(e)||o.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/,i=/^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/,s=/^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/,o=/^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;e.exports=t.default,e.exports.default=t.default}(LP,LP.exports);var MP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(e);var t=e.replace(/\s+/g," ").replace(/\s?(hsla?\(|\)|,)\s?/gi,"$1");if(-1!==t.indexOf(","))return r.test(t);return i.test(t)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i,i=/^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;e.exports=t.default,e.exports.default=t.default}(MP,MP.exports);var FP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;e.exports=t.default,e.exports.default=t.default}(FP,FP.exports);var UP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),function(e){var t=e.replace(/[\s\-]+/gi,"").toUpperCase(),n=t.slice(0,2).toUpperCase();return n in r&&r[n].test(t)}(e)&&function(e){var t=e.replace(/[^A-Z0-9]+/gi,"").toUpperCase();return 1===(t.slice(4)+t.slice(0,4)).replace(/[A-Z]/g,(function(e){return e.charCodeAt(0)-55})).match(/\d{1,7}/g).reduce((function(e,t){return Number(e+t)%97}),"")}(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r={AD:/^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,AE:/^(AE[0-9]{2})\d{3}\d{16}$/,AL:/^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,AT:/^(AT[0-9]{2})\d{16}$/,AZ:/^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,BA:/^(BA[0-9]{2})\d{16}$/,BE:/^(BE[0-9]{2})\d{12}$/,BG:/^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,BH:/^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,BR:/^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,BY:/^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,CH:/^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,CR:/^(CR[0-9]{2})\d{18}$/,CY:/^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,CZ:/^(CZ[0-9]{2})\d{20}$/,DE:/^(DE[0-9]{2})\d{18}$/,DK:/^(DK[0-9]{2})\d{14}$/,DO:/^(DO[0-9]{2})[A-Z]{4}\d{20}$/,EE:/^(EE[0-9]{2})\d{16}$/,EG:/^(EG[0-9]{2})\d{25}$/,ES:/^(ES[0-9]{2})\d{20}$/,FI:/^(FI[0-9]{2})\d{14}$/,FO:/^(FO[0-9]{2})\d{14}$/,FR:/^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,GB:/^(GB[0-9]{2})[A-Z]{4}\d{14}$/,GE:/^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,GI:/^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,GL:/^(GL[0-9]{2})\d{14}$/,GR:/^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,GT:/^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,HR:/^(HR[0-9]{2})\d{17}$/,HU:/^(HU[0-9]{2})\d{24}$/,IE:/^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,IL:/^(IL[0-9]{2})\d{19}$/,IQ:/^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,IR:/^(IR[0-9]{2})0\d{2}0\d{18}$/,IS:/^(IS[0-9]{2})\d{22}$/,IT:/^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,JO:/^(JO[0-9]{2})[A-Z]{4}\d{22}$/,KW:/^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,KZ:/^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,LB:/^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,LC:/^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,LI:/^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,LT:/^(LT[0-9]{2})\d{16}$/,LU:/^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,LV:/^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,MC:/^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,MD:/^(MD[0-9]{2})[A-Z0-9]{20}$/,ME:/^(ME[0-9]{2})\d{18}$/,MK:/^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,MR:/^(MR[0-9]{2})\d{23}$/,MT:/^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,MU:/^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,MZ:/^(MZ[0-9]{2})\d{21}$/,NL:/^(NL[0-9]{2})[A-Z]{4}\d{10}$/,NO:/^(NO[0-9]{2})\d{11}$/,PK:/^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,PL:/^(PL[0-9]{2})\d{24}$/,PS:/^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,PT:/^(PT[0-9]{2})\d{21}$/,QA:/^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,RO:/^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,RS:/^(RS[0-9]{2})\d{18}$/,SA:/^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,SC:/^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,SE:/^(SE[0-9]{2})\d{20}$/,SI:/^(SI[0-9]{2})\d{15}$/,SK:/^(SK[0-9]{2})\d{20}$/,SM:/^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,SV:/^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,TL:/^(TL[0-9]{2})\d{19}$/,TN:/^(TN[0-9]{2})\d{20}$/,TR:/^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,UA:/^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,VA:/^(VA[0-9]{2})\d{18}$/,VG:/^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,XK:/^(XK[0-9]{2})\d{16}$/};e.exports=t.default,e.exports.default=t.default}(UP,UP.exports);var $P={exports:{}},BP={};Object.defineProperty(BP,"__esModule",{value:!0}),BP.default=function(e){return(0,VP.default)(e),jP.indexOf(e.toUpperCase())>=0},BP.CountryCodes=void 0;var VP=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var jP=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"];var zP=jP;BP.CountryCodes=zP,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,n.default)(e),r.CountryCodes.indexOf(e.slice(4,6).toUpperCase())<0)return!1;return i.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports),r=BP;var i=/^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;e.exports=t.default,e.exports.default=t.default}($P,$P.exports);var qP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[a-f0-9]{32}$/;e.exports=t.default,e.exports.default=t.default}(qP,qP.exports);var HP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,n.default)(e),new RegExp("^[a-fA-F0-9]{".concat(r[t],"}$")).test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r={md5:32,md4:32,sha1:40,sha256:64,sha384:96,sha512:128,ripemd128:32,ripemd160:40,tiger128:32,tiger160:40,tiger192:48,crc32:8,crc32b:8};e.exports=t.default,e.exports.default=t.default}(HP,HP.exports);var KP={exports:{}},GP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e),t=(0,r.default)(t,a);var i=e.length;if(t.urlSafe)return o.test(e);if(i%4!=0||s.test(e))return!1;var u=e.indexOf("=");return-1===u||u===i-1||u===i-2&&"="===e[i-1]};var n=i(fO.exports),r=i(qO.exports);function i(e){return e&&e.__esModule?e:{default:e}}var s=/[^A-Z0-9+\/=]/i,o=/^[A-Z0-9_\-]*$/i,a={urlSafe:!1};e.exports=t.default,e.exports.default=t.default}(GP,GP.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(e);var t=e.split("."),i=t.length;if(i>3||i<2)return!1;return t.reduce((function(e,t){return e&&(0,r.default)(t,{urlSafe:!0})}),!0)};var n=i(fO.exports),r=i(GP.exports);function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default,e.exports.default=t.default}(KP,KP.exports);var WP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e);try{t=(0,r.default)(t,o);var i=[];t.allow_primitives&&(i=[null,!1,!0]);var a=JSON.parse(e);return i.includes(a)||!!a&&"object"===s(a)}catch(u){}return!1};var n=i(fO.exports),r=i(qO.exports);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o={allow_primitives:!1};e.exports=t.default,e.exports.default=t.default}(WP,WP.exports);var ZP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,n.default)(e),0===((t=(0,r.default)(t,s)).ignore_whitespace?e.trim().length:e.length)};var n=i(fO.exports),r=i(qO.exports);function i(e){return e&&e.__esModule?e:{default:e}}var s={ignore_whitespace:!1};e.exports=t.default,e.exports.default=t.default}(ZP,ZP.exports);var YP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var i,s;(0,n.default)(e),"object"===r(t)?(i=t.min||0,s=t.max):(i=arguments[1]||0,s=arguments[2]);var o=e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],a=e.length-o.length;return a>=i&&(void 0===s||a<=s)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports=t.default,e.exports.default=t.default}(YP,YP.exports);var QP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";(0,n.default)(e);var i=r[t];return i&&i.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i};e.exports=t.default,e.exports.default=t.default}(QP,QP.exports);var JP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),(0,r.default)(e)&&24===e.length};var n=i(fO.exports),r=i(RP.exports);function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default,e.exports.default=t.default}(JP,JP.exports);var XP={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:String(new Date);(0,n.default)(e);var i=(0,r.default)(t),s=(0,r.default)(e);return!!(s&&i&&s>i)};var n=i(fO.exports),r=i(hO.exports);function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default,e.exports.default=t.default}(XP,XP.exports);var eD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:String(new Date);(0,n.default)(e);var i=(0,r.default)(t),s=(0,r.default)(e);return!!(s&&i&&s<i)};var n=i(fO.exports),r=i(hO.exports);function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default,e.exports.default=t.default}(eD,eD.exports);var tD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var i;if((0,n.default)(e),"[object Array]"===Object.prototype.toString.call(t)){var o=[];for(i in t)({}).hasOwnProperty.call(t,i)&&(o[i]=(0,r.default)(t[i]));return o.indexOf(e)>=0}if("object"===s(t))return t.hasOwnProperty(e);if(t&&"function"==typeof t.indexOf)return t.indexOf(e)>=0;return!1};var n=i(fO.exports),r=i(VO.exports);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports=t.default,e.exports.default=t.default}(tD,tD.exports);var nD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(e);var t=e.replace(/[- ]+/g,"");if(!r.test(t))return!1;for(var i,s,o,a=0,u=t.length-1;u>=0;u--)i=t.substring(u,u+1),s=parseInt(i,10),a+=o&&(s*=2)>=10?s%10+1:s,o=!o;return!(a%10!=0||!t)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;e.exports=t.default,e.exports.default=t.default}(nD,nD.exports);var rD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),t in r)return r[t](e);if("any"===t){for(var i in r){if(r.hasOwnProperty(i))if((0,r[i])(e))return!0}return!1}throw new Error("Invalid locale '".concat(t,"'"))};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r={ES:function(e){(0,n.default)(e);var t={X:0,Y:1,Z:2},r=e.trim().toUpperCase();if(!/^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(r))return!1;var i=r.slice(0,-1).replace(/[X,Y,Z]/g,(function(e){return t[e]}));return r.endsWith(["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"][i%23])},IN:function(e){var t=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],n=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],r=e.trim();if(!/^[1-9]\d{3}\s?\d{4}\s?\d{4}$/.test(r))return!1;var i=0;return r.replace(/\s/g,"").split("").map(Number).reverse().forEach((function(e,r){i=t[i][n[r%8][e]]})),0===i},IR:function(e){if(!e.match(/^\d{10}$/))return!1;if(e="0000".concat(e).substr(e.length-6),0===parseInt(e.substr(3,6),10))return!1;for(var t=parseInt(e.substr(9,1),10),n=0,r=0;r<9;r++)n+=parseInt(e.substr(r,1),10)*(10-r);return(n%=11)<2&&t===n||n>=2&&t===11-n},IT:function(e){return 9===e.length&&("CA00000AA"!==e&&e.search(/C[A-Z][0-9]{5}[A-Z]{2}/i)>-1)},NO:function(e){var t=e.trim();if(isNaN(Number(t)))return!1;if(11!==t.length)return!1;if("00000000000"===t)return!1;var n=t.split("").map(Number),r=(11-(3*n[0]+7*n[1]+6*n[2]+1*n[3]+8*n[4]+9*n[5]+4*n[6]+5*n[7]+2*n[8])%11)%11,i=(11-(5*n[0]+4*n[1]+3*n[2]+2*n[3]+7*n[4]+6*n[5]+5*n[6]+4*n[7]+3*n[8]+2*r)%11)%11;return r===n[9]&&i===n[10]},"he-IL":function(e){var t=e.trim();if(!/^\d{9}$/.test(t))return!1;for(var n,r=t,i=0,s=0;s<r.length;s++)i+=(n=Number(r[s])*(s%2+1))>9?n-9:n;return i%10==0},"ar-LY":function(e){var t=e.trim();return!!/^(1|2)\d{11}$/.test(t)},"ar-TN":function(e){var t=e.trim();return!!/^\d{8}$/.test(t)},"zh-CN":function(e){var t,n=["11","12","13","14","15","21","22","23","31","32","33","34","35","36","37","41","42","43","44","45","46","50","51","52","53","54","61","62","63","64","65","71","81","82","91"],r=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],i=["1","0","X","9","8","7","6","5","4","3","2"],s=function(e){return n.includes(e)},o=function(e){var t=parseInt(e.substring(0,4),10),n=parseInt(e.substring(4,6),10),r=parseInt(e.substring(6),10),i=new Date(t,n-1,r);return!(i>new Date)&&(i.getFullYear()===t&&i.getMonth()===n-1&&i.getDate()===r)},a=function(e){return function(e){for(var t=e.substring(0,17),n=0,s=0;s<17;s++)n+=parseInt(t.charAt(s),10)*parseInt(r[s],10);return i[n%11]}(e)===e.charAt(17).toUpperCase()};return!!/^\d{15}|(\d{17}(\d|x|X))$/.test(t=e)&&(15===t.length?function(e){var t=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);if(!t)return!1;var n=e.substring(0,2);if(!(t=s(n)))return!1;var r="19".concat(e.substring(6,12));return!!(t=o(r))}(t):function(e){var t=/^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(e);if(!t)return!1;var n=e.substring(0,2);if(!(t=s(n)))return!1;var r=e.substring(6,14);return!!(t=o(r))&&a(e)}(t))},"zh-TW":function(e){var t={A:10,B:11,C:12,D:13,E:14,F:15,G:16,H:17,I:34,J:18,K:19,L:20,M:21,N:22,O:35,P:23,Q:24,R:25,S:26,T:27,U:28,V:29,W:32,X:30,Y:31,Z:33},n=e.trim().toUpperCase();return!!/^[A-Z][0-9]{9}$/.test(n)&&Array.from(n).reduce((function(e,n,r){if(0===r){var i=t[n];return i%10*9+Math.floor(i/10)}return 9===r?(10-e%10-Number(n))%10==0:e+Number(n)*(9-r)}),0)}};e.exports=t.default,e.exports.default=t.default}(rD,rD.exports);var iD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(e);var t=Number(e.slice(-1));return r.test(e)&&t===(i=e,s=10-i.slice(0,-1).split("").map((function(e,t){return Number(e)*function(e,t){return 8===e||14===e?t%2==0?3:1:t%2==0?1:3}(i.length,t)})).reduce((function(e,t){return e+t}),0)%10,s<10?s:0);var i,s};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(\d{8}|\d{13}|\d{14})$/;e.exports=t.default,e.exports.default=t.default}(iD,iD.exports);var sD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,n.default)(e),!r.test(e))return!1;for(var t=!0,i=0,s=e.length-2;s>=0;s--)if(e[s]>="A"&&e[s]<="Z")for(var o=e[s].charCodeAt(0)-55,a=o%10,u=Math.trunc(o/10),l=0,c=[a,u];l<c.length;l++){var d=c[l];i+=t?d>=5?1+2*(d-5):2*d:d,t=!t}else{var h=e[s].charCodeAt(0)-"0".charCodeAt(0);i+=t?h>=5?1+2*(h-5):2*h:h,t=!t}var f=10*Math.trunc((i+9)/10)-i;return+e[e.length-1]===f};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;e.exports=t.default,e.exports.default=t.default}(sD,sD.exports);var oD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,n.default)(t),!(o=String(o)))return e(t,10)||e(t,13);var a,u=t.replace(/[\s-]+/g,""),l=0;if("10"===o){if(!r.test(u))return!1;for(a=0;a<9;a++)l+=(a+1)*u.charAt(a);if("X"===u.charAt(9)?l+=100:l+=10*u.charAt(9),l%11==0)return!!u}else if("13"===o){if(!i.test(u))return!1;for(a=0;a<12;a++)l+=s[a%2]*u.charAt(a);if(u.charAt(12)-(10-l%10)%10==0)return!!u}return!1};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(?:[0-9]{9}X|[0-9]{10})$/,i=/^(?:[0-9]{13})$/,s=[1,3];e.exports=t.default,e.exports.default=t.default}(oD,oD.exports);var aD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,n.default)(e);var i=r;if(i=t.require_hyphen?i.replace("?",""):i,!(i=t.case_sensitive?new RegExp(i):new RegExp(i,"i")).test(e))return!1;for(var s=e.replace("-","").toUpperCase(),o=0,a=0;a<s.length;a++){var u=s[a];o+=("X"===u?10:+u)*(8-a)}return o%11==0};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r="^\\d{4}-?\\d{3}[\\dX]$";e.exports=t.default,e.exports.default=t.default}(aD,aD.exports);var uD={exports:{}},lD={};Object.defineProperty(lD,"__esModule",{value:!0}),lD.iso7064Check=function(e){for(var t=10,n=0;n<e.length-1;n++)t=(parseInt(e[n],10)+t)%10==0?9:(parseInt(e[n],10)+t)%10*2%11;return(t=1===t?0:11-t)===parseInt(e[10],10)},lD.luhnCheck=function(e){for(var t=0,n=!1,r=e.length-1;r>=0;r--){if(n){var i=2*parseInt(e[r],10);t+=i>9?i.toString().split("").map((function(e){return parseInt(e,10)})).reduce((function(e,t){return e+t}),0):i}else t+=parseInt(e[r],10);n=!n}return t%10==0},lD.reverseMultiplyAndSum=function(e,t){for(var n=0,r=0;r<e.length;r++)n+=e[r]*(t-r);return n},lD.verhoeffCheck=function(e){for(var t=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],n=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],r=e.split("").reverse().join(""),i=0,s=0;s<r.length;s++)i=t[i][n[s%8][parseInt(r[s],10)]];return 0===i},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US";(0,r.default)(e);var n=e.slice(0);if(t in h)return t in m&&(n=n.replace(m[t],"")),!!h[t].test(n)&&(!(t in f)||f[t](n));throw new Error("Invalid locale '".concat(t,"'"))};var r=a(fO.exports),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=i?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(lD),s=a(XO.exports);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c={andover:["10","12"],atlanta:["60","67"],austin:["50","53"],brookhaven:["01","02","03","04","05","06","11","13","14","16","21","22","23","25","34","51","52","54","55","56","57","58","59","65"],cincinnati:["30","32","35","36","37","38","61"],fresno:["15","24"],internet:["20","26","27","45","46","47"],kansas:["40","44"],memphis:["94","95"],ogden:["80","90"],philadelphia:["33","39","41","42","43","46","48","62","63","64","66","68","71","72","73","74","75","76","77","81","82","83","84","85","86","87","88","91","92","93","98","99"],sba:["31"]};function d(e){for(var t=!1,n=!1,r=0;r<3;r++)if(!t&&/[AEIOU]/.test(e[r]))t=!0;else if(!n&&t&&"X"===e[r])n=!0;else if(r>0){if(t&&!n&&!/[AEIOU]/.test(e[r]))return!1;if(n&&!/X/.test(e[r]))return!1}return!0}var h={"bg-BG":/^\d{10}$/,"cs-CZ":/^\d{6}\/{0,1}\d{3,4}$/,"de-AT":/^\d{9}$/,"de-DE":/^[1-9]\d{10}$/,"dk-DK":/^\d{6}-{0,1}\d{4}$/,"el-CY":/^[09]\d{7}[A-Z]$/,"el-GR":/^([0-4]|[7-9])\d{8}$/,"en-GB":/^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,"en-IE":/^\d{7}[A-W][A-IW]{0,1}$/i,"en-US":/^\d{2}[- ]{0,1}\d{7}$/,"es-ES":/^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,"et-EE":/^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,"fi-FI":/^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,"fr-BE":/^\d{11}$/,"fr-FR":/^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,"fr-LU":/^\d{13}$/,"hr-HR":/^\d{11}$/,"hu-HU":/^8\d{9}$/,"it-IT":/^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,"lv-LV":/^\d{6}-{0,1}\d{5}$/,"mt-MT":/^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,"nl-NL":/^\d{9}$/,"pl-PL":/^\d{10,11}$/,"pt-BR":/^\d{11,14}$/,"pt-PT":/^\d{9}$/,"ro-RO":/^\d{13}$/,"sk-SK":/^\d{6}\/{0,1}\d{3,4}$/,"sl-SI":/^[1-9]\d{7}$/,"sv-SE":/^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/};h["lb-LU"]=h["fr-LU"],h["lt-LT"]=h["et-EE"],h["nl-BE"]=h["fr-BE"];var f={"bg-BG":function(e){var t=e.slice(0,2),n=parseInt(e.slice(2,4),10);n>40?(n-=40,t="20".concat(t)):n>20?(n-=20,t="18".concat(t)):t="19".concat(t),n<10&&(n="0".concat(n));var r="".concat(t,"/").concat(n,"/").concat(e.slice(4,6));if(!(0,s.default)(r,"YYYY/MM/DD"))return!1;for(var i=e.split("").map((function(e){return parseInt(e,10)})),o=[2,4,8,5,10,9,7,3,6],a=0,u=0;u<o.length;u++)a+=i[u]*o[u];return(a=a%11==10?0:a%11)===i[9]},"cs-CZ":function(e){e=e.replace(/\W/,"");var t=parseInt(e.slice(0,2),10);if(10===e.length)t=t<54?"20".concat(t):"19".concat(t);else{if("000"===e.slice(6))return!1;if(!(t<54))return!1;t="19".concat(t)}3===t.length&&(t=[t.slice(0,2),"0",t.slice(2)].join(""));var n=parseInt(e.slice(2,4),10);if(n>50&&(n-=50),n>20){if(parseInt(t,10)<2004)return!1;n-=20}n<10&&(n="0".concat(n));var r="".concat(t,"/").concat(n,"/").concat(e.slice(4,6));if(!(0,s.default)(r,"YYYY/MM/DD"))return!1;if(10===e.length&&parseInt(e,10)%11!=0){var i=parseInt(e.slice(0,9),10)%11;if(!(parseInt(t,10)<1986&&10===i))return!1;if(0!==parseInt(e.slice(9),10))return!1}return!0},"de-AT":function(e){return i.luhnCheck(e)},"de-DE":function(e){for(var t=e.split("").map((function(e){return parseInt(e,10)})),n=[],r=0;r<t.length-1;r++){n.push("");for(var s=0;s<t.length-1;s++)t[r]===t[s]&&(n[r]+=s)}if(2!==(n=n.filter((function(e){return e.length>1}))).length&&3!==n.length)return!1;if(3===n[0].length){for(var o=n[0].split("").map((function(e){return parseInt(e,10)})),a=0,u=0;u<o.length-1;u++)o[u]+1===o[u+1]&&(a+=1);if(2===a)return!1}return i.iso7064Check(e)},"dk-DK":function(e){e=e.replace(/\W/,"");var t=parseInt(e.slice(4,6),10);switch(e.slice(6,7)){case"0":case"1":case"2":case"3":t="19".concat(t);break;case"4":case"9":t=t<37?"20".concat(t):"19".concat(t);break;default:if(t<37)t="20".concat(t);else{if(!(t>58))return!1;t="18".concat(t)}}3===t.length&&(t=[t.slice(0,2),"0",t.slice(2)].join(""));var n="".concat(t,"/").concat(e.slice(2,4),"/").concat(e.slice(0,2));if(!(0,s.default)(n,"YYYY/MM/DD"))return!1;for(var r=e.split("").map((function(e){return parseInt(e,10)})),i=0,o=4,a=0;a<9;a++)i+=r[a]*o,1===(o-=1)&&(o=7);return 1!==(i%=11)&&(0===i?0===r[9]:r[9]===11-i)},"el-CY":function(e){for(var t=e.slice(0,8).split("").map((function(e){return parseInt(e,10)})),n=0,r=1;r<t.length;r+=2)n+=t[r];for(var i=0;i<t.length;i+=2)t[i]<2?n+=1-t[i]:(n+=2*(t[i]-2)+5,t[i]>4&&(n+=2));return String.fromCharCode(n%26+65)===e.charAt(8)},"el-GR":function(e){for(var t=e.split("").map((function(e){return parseInt(e,10)})),n=0,r=0;r<8;r++)n+=t[r]*Math.pow(2,8-r);return n%11%10===t[8]},"en-IE":function(e){var t=i.reverseMultiplyAndSum(e.split("").slice(0,7).map((function(e){return parseInt(e,10)})),8);return 9===e.length&&"W"!==e[8]&&(t+=9*(e[8].charCodeAt(0)-64)),0===(t%=23)?"W"===e[7].toUpperCase():e[7].toUpperCase()===String.fromCharCode(64+t)},"en-US":function(e){return-1!==function(){var e=[];for(var t in c)c.hasOwnProperty(t)&&e.push.apply(e,u(c[t]));return e}().indexOf(e.substr(0,2))},"es-ES":function(e){var t=e.toUpperCase().split("");if(isNaN(parseInt(t[0],10))&&t.length>1){var n=0;switch(t[0]){case"Y":n=1;break;case"Z":n=2}t.splice(0,1,n)}else for(;t.length<9;)t.unshift(0);t=t.join("");var r=parseInt(t.slice(0,8),10)%23;return t[8]===["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"][r]},"et-EE":function(e){var t=e.slice(1,3);switch(e.slice(0,1)){case"1":case"2":t="18".concat(t);break;case"3":case"4":t="19".concat(t);break;default:t="20".concat(t)}var n="".concat(t,"/").concat(e.slice(3,5),"/").concat(e.slice(5,7));if(!(0,s.default)(n,"YYYY/MM/DD"))return!1;for(var r=e.split("").map((function(e){return parseInt(e,10)})),i=0,o=1,a=0;a<10;a++)i+=r[a]*o,10===(o+=1)&&(o=1);if(i%11==10){i=0,o=3;for(var u=0;u<10;u++)i+=r[u]*o,10===(o+=1)&&(o=1);if(i%11==10)return 0===r[10]}return i%11===r[10]},"fi-FI":function(e){var t=e.slice(4,6);switch(e.slice(6,7)){case"+":t="18".concat(t);break;case"-":t="19".concat(t);break;default:t="20".concat(t)}var n="".concat(t,"/").concat(e.slice(2,4),"/").concat(e.slice(0,2));if(!(0,s.default)(n,"YYYY/MM/DD"))return!1;var r=parseInt(e.slice(0,6)+e.slice(7,10),10)%31;return r<10?r===parseInt(e.slice(10),10):["A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"][r-=10]===e.slice(10)},"fr-BE":function(e){if("00"!==e.slice(2,4)||"00"!==e.slice(4,6)){var t="".concat(e.slice(0,2),"/").concat(e.slice(2,4),"/").concat(e.slice(4,6));if(!(0,s.default)(t,"YY/MM/DD"))return!1}var n=97-parseInt(e.slice(0,9),10)%97,r=parseInt(e.slice(9,11),10);return n===r||(n=97-parseInt("2".concat(e.slice(0,9)),10)%97)===r},"fr-FR":function(e){return e=e.replace(/\s/g,""),parseInt(e.slice(0,10),10)%511===parseInt(e.slice(10,13),10)},"fr-LU":function(e){var t="".concat(e.slice(0,4),"/").concat(e.slice(4,6),"/").concat(e.slice(6,8));return!!(0,s.default)(t,"YYYY/MM/DD")&&(!!i.luhnCheck(e.slice(0,12))&&i.verhoeffCheck("".concat(e.slice(0,11)).concat(e[12])))},"hr-HR":function(e){return i.iso7064Check(e)},"hu-HU":function(e){for(var t=e.split("").map((function(e){return parseInt(e,10)})),n=8,r=1;r<9;r++)n+=t[r]*(r+1);return n%11===t[9]},"it-IT":function(e){var t=e.toUpperCase().split("");if(!d(t.slice(0,3)))return!1;if(!d(t.slice(3,6)))return!1;for(var n={L:"0",M:"1",N:"2",P:"3",Q:"4",R:"5",S:"6",T:"7",U:"8",V:"9"},r=0,i=[6,7,9,10,12,13,14];r<i.length;r++){var o=i[r];t[o]in n&&t.splice(o,1,n[t[o]])}var a={A:"01",B:"02",C:"03",D:"04",E:"05",H:"06",L:"07",M:"08",P:"09",R:"10",S:"11",T:"12"}[t[8]],u=parseInt(t[9]+t[10],10);u>40&&(u-=40),u<10&&(u="0".concat(u));var l="".concat(t[6]).concat(t[7],"/").concat(a,"/").concat(u);if(!(0,s.default)(l,"YY/MM/DD"))return!1;for(var c=0,h=1;h<t.length-1;h+=2){var f=parseInt(t[h],10);isNaN(f)&&(f=t[h].charCodeAt(0)-65),c+=f}for(var p={A:1,B:0,C:5,D:7,E:9,F:13,G:15,H:17,I:19,J:21,K:2,L:4,M:18,N:20,O:11,P:3,Q:6,R:8,S:12,T:14,U:16,V:10,W:22,X:25,Y:24,Z:23,0:1,1:0},m=0;m<t.length-1;m+=2){var g=0;if(t[m]in p)g=p[t[m]];else{var v=parseInt(t[m],10);g=2*v+1,v>4&&(g+=2)}c+=g}return String.fromCharCode(65+c%26)===t[15]},"lv-LV":function(e){var t=(e=e.replace(/\W/,"")).slice(0,2);if("32"!==t){if("00"!==e.slice(2,4)){var n=e.slice(4,6);switch(e[6]){case"0":n="18".concat(n);break;case"1":n="19".concat(n);break;default:n="20".concat(n)}var r="".concat(n,"/").concat(e.slice(2,4),"/").concat(t);if(!(0,s.default)(r,"YYYY/MM/DD"))return!1}for(var i=1101,o=[1,6,3,7,9,10,5,8,4,2],a=0;a<e.length-1;a++)i-=parseInt(e[a],10)*o[a];return parseInt(e[10],10)===i%11}return!0},"mt-MT":function(e){if(9!==e.length){for(var t=e.toUpperCase().split("");t.length<8;)t.unshift(0);switch(e[7]){case"A":case"P":if(0===parseInt(t[6],10))return!1;break;default:var n=parseInt(t.join("").slice(0,5),10);if(n>32e3)return!1;if(n===parseInt(t.join("").slice(5,7),10))return!1}}return!0},"nl-NL":function(e){return i.reverseMultiplyAndSum(e.split("").slice(0,8).map((function(e){return parseInt(e,10)})),9)%11===parseInt(e[8],10)},"pl-PL":function(e){if(10===e.length){for(var t=[6,5,7,2,3,4,5,6,7],n=0,r=0;r<t.length;r++)n+=parseInt(e[r],10)*t[r];return 10!==(n%=11)&&n===parseInt(e[9],10)}var i=e.slice(0,2),o=parseInt(e.slice(2,4),10);o>80?(i="18".concat(i),o-=80):o>60?(i="22".concat(i),o-=60):o>40?(i="21".concat(i),o-=40):o>20?(i="20".concat(i),o-=20):i="19".concat(i),o<10&&(o="0".concat(o));var a="".concat(i,"/").concat(o,"/").concat(e.slice(4,6));if(!(0,s.default)(a,"YYYY/MM/DD"))return!1;for(var u=0,l=1,c=0;c<e.length-1;c++)u+=parseInt(e[c],10)*l%10,(l+=2)>10?l=1:5===l&&(l+=2);return(u=10-u%10)===parseInt(e[10],10)},"pt-BR":function(e){if(""===(e=e.replace(/[^\d]+/g,"")))return!1;if(11===e.length){var t,n;if(t=0,"11111111111"===(e=e.replace(/[^\d]+/g,""))||"22222222222"===e||"33333333333"===e||"44444444444"===e||"55555555555"===e||"66666666666"===e||"77777777777"===e||"88888888888"===e||"99999999999"===e||"00000000000"===e)return!1;for(var r=1;r<=9;r++)t+=parseInt(e.substring(r-1,r),10)*(11-r);if(10!==(n=10*t%11)&&11!==n||(n=0),n!==parseInt(e.substring(9,10),10))return!1;t=0;for(var i=1;i<=10;i++)t+=parseInt(e.substring(i-1,i),10)*(12-i);return 10!==(n=10*t%11)&&11!==n||(n=0),n===parseInt(e.substring(10,11),10)}if(14!==e.length)return!1;if("00000000000000"===e||"11111111111111"===e||"22222222222222"===e||"33333333333333"===e||"44444444444444"===e||"55555555555555"===e||"66666666666666"===e||"77777777777777"===e||"88888888888888"===e||"99999999999999"===e)return!1;for(var s=e.length-2,o=e.substring(0,s),a=e.substring(s),u=0,l=s-7,c=s;c>=1;c--)u+=o.charAt(s-c)*l,(l-=1)<2&&(l=9);var d=u%11<2?0:11-u%11;if(d!==parseInt(a.charAt(0),10))return!1;s+=1,o=e.substring(0,s),u=0,l=s-7;for(var h=s;h>=1;h--)u+=o.charAt(s-h)*l,(l-=1)<2&&(l=9);return(d=u%11<2?0:11-u%11)===parseInt(a.charAt(1),10)},"pt-PT":function(e){var t=11-i.reverseMultiplyAndSum(e.split("").slice(0,8).map((function(e){return parseInt(e,10)})),9)%11;return t>9?0===parseInt(e[8],10):t===parseInt(e[8],10)},"ro-RO":function(e){if("9000"!==e.slice(0,4)){var t=e.slice(1,3);switch(e[0]){case"1":case"2":t="19".concat(t);break;case"3":case"4":t="18".concat(t);break;case"5":case"6":t="20".concat(t)}var n="".concat(t,"/").concat(e.slice(3,5),"/").concat(e.slice(5,7));if(8===n.length){if(!(0,s.default)(n,"YY/MM/DD"))return!1}else if(!(0,s.default)(n,"YYYY/MM/DD"))return!1;for(var r=e.split("").map((function(e){return parseInt(e,10)})),i=[2,7,9,1,4,6,3,5,8,2,7,9],o=0,a=0;a<i.length;a++)o+=r[a]*i[a];return o%11==10?1===r[12]:r[12]===o%11}return!0},"sk-SK":function(e){if(9===e.length){if("000"===(e=e.replace(/\W/,"")).slice(6))return!1;var t=parseInt(e.slice(0,2),10);if(t>53)return!1;t=t<10?"190".concat(t):"19".concat(t);var n=parseInt(e.slice(2,4),10);n>50&&(n-=50),n<10&&(n="0".concat(n));var r="".concat(t,"/").concat(n,"/").concat(e.slice(4,6));if(!(0,s.default)(r,"YYYY/MM/DD"))return!1}return!0},"sl-SI":function(e){var t=11-i.reverseMultiplyAndSum(e.split("").slice(0,7).map((function(e){return parseInt(e,10)})),8)%11;return 10===t?0===parseInt(e[7],10):t===parseInt(e[7],10)},"sv-SE":function(e){var t=e.slice(0);e.length>11&&(t=t.slice(2));var n="",r=t.slice(2,4),o=parseInt(t.slice(4,6),10);if(e.length>11)n=e.slice(0,4);else if(n=e.slice(0,2),11===e.length&&o<60){var a=(new Date).getFullYear().toString(),u=parseInt(a.slice(0,2),10);if(a=parseInt(a,10),"-"===e[6])n=parseInt("".concat(u).concat(n),10)>a?"".concat(u-1).concat(n):"".concat(u).concat(n);else if(n="".concat(u-1).concat(n),a-parseInt(n,10)<100)return!1}o>60&&(o-=60),o<10&&(o="0".concat(o));var l="".concat(n,"/").concat(r,"/").concat(o);if(8===l.length){if(!(0,s.default)(l,"YY/MM/DD"))return!1}else if(!(0,s.default)(l,"YYYY/MM/DD"))return!1;return i.luhnCheck(e.replace(/\W/,""))}};f["lb-LU"]=f["fr-LU"],f["lt-LT"]=f["et-EE"],f["nl-BE"]=f["fr-BE"];var p=/[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g,m={"de-AT":p,"de-DE":/[\/\\]/g,"fr-BE":p};m["nl-BE"]=m["fr-BE"],e.exports=t.default,e.exports.default=t.default}(uD,uD.exports);var cD={};Object.defineProperty(cD,"__esModule",{value:!0}),cD.default=function(e,t,n){if((0,dD.default)(e),n&&n.strictMode&&!e.startsWith("+"))return!1;if(Array.isArray(t))return t.some((function(t){if(hD.hasOwnProperty(t)&&hD[t].test(e))return!0;return!1}));if(t in hD)return hD[t].test(e);if(!t||"any"===t){for(var r in hD){if(hD.hasOwnProperty(r))if(hD[r].test(e))return!0}return!1}throw new Error("Invalid locale '".concat(t,"'"))},cD.locales=void 0;var dD=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var hD={"am-AM":/^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,"ar-AE":/^((\+?971)|0)?5[024568]\d{7}$/,"ar-BH":/^(\+?973)?(3|6)\d{7}$/,"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-LB":/^(\+?961)?((3|81)\d{6}|7\d{7})$/,"ar-EG":/^((\+?20)|0)?1[0125]\d{8}$/,"ar-IQ":/^(\+?964|0)?7[0-9]\d{8}$/,"ar-JO":/^(\+?962|0)?7[789]\d{7}$/,"ar-KW":/^(\+?965)[569]\d{7}$/,"ar-LY":/^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,"ar-MA":/^(?:(?:\+|00)212|0)[5-7]\d{8}$/,"ar-OM":/^((\+|00)968)?(9[1-9])\d{6}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-TN":/^(\+?216)?[2459]\d{7}$/,"az-AZ":/^(\+994|0)(5[015]|7[07]|99)\d{7}$/,"bs-BA":/^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,"be-BY":/^(\+?375)?(24|25|29|33|44)\d{7}$/,"bg-BG":/^(\+?359|0)?8[789]\d{7}$/,"bn-BD":/^(\+?880|0)1[13456789][0-9]{8}$/,"ca-AD":/^(\+376)?[346]\d{5}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"da-DK":/^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,"de-DE":/^(\+49)?0?[1|3]([0|5][0-45-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,"de-AT":/^(\+43|0)\d{1,4}\d{3,12}$/,"de-CH":/^(\+41|0)([1-9])\d{1,9}$/,"de-LU":/^(\+352)?((6\d1)\d{6})$/,"el-GR":/^(\+?30|0)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-GG":/^(\+?44|0)1481\d{6}$/,"en-GH":/^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,"en-HK":/^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,"en-MO":/^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,"en-IE":/^(\+?353|0)8[356789]\d{7}$/,"en-IN":/^(\+?91|0)?[6789]\d{9}$/,"en-KE":/^(\+?254|0)(7|1)\d{8}$/,"en-MT":/^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,"en-MU":/^(\+?230|0)?\d{8}$/,"en-NG":/^(\+?234|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)[28]\d{7,9}$/,"en-PK":/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,"en-PH":/^(09|\+639)\d{9}$/,"en-RW":/^(\+?250|0)?[7]\d{8}$/,"en-SG":/^(\+65)?[3689]\d{7}$/,"en-SL":/^(\+?232|0)\d{8}$/,"en-TZ":/^(\+?255|0)?[67]\d{8}$/,"en-UG":/^(\+?256|0)?[7]\d{8}$/,"en-US":/^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"en-ZW":/^(\+263)[0-9]{9}$/,"es-AR":/^\+?549(11|[2368]\d)\d{8}$/,"es-BO":/^(\+?591)?(6|7)\d{7}$/,"es-CO":/^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,"es-CL":/^(\+?56|0)[2-9]\d{1}\d{7}$/,"es-CR":/^(\+506)?[2-8]\d{7}$/,"es-DO":/^(\+?1)?8[024]9\d{7}$/,"es-HN":/^(\+?504)?[9|8]\d{7}$/,"es-EC":/^(\+?593|0)([2-7]|9[2-9])\d{7}$/,"es-ES":/^(\+?34)?[6|7]\d{8}$/,"es-PE":/^(\+?51)?9\d{8}$/,"es-MX":/^(\+?52)?(1|01)?\d{10,11}$/,"es-PA":/^(\+?507)\d{7,8}$/,"es-PY":/^(\+?595|0)9[9876]\d{7}$/,"es-UY":/^(\+598|0)9[1-9][\d]{6}$/,"et-EE":/^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,"fa-IR":/^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,"fj-FJ":/^(\+?679)?\s?\d{3}\s?\d{4}$/,"fo-FO":/^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"fr-GF":/^(\+?594|0|00594)[67]\d{8}$/,"fr-GP":/^(\+?590|0|00590)[67]\d{8}$/,"fr-MQ":/^(\+?596|0|00596)[67]\d{8}$/,"fr-RE":/^(\+?262|0|00262)[67]\d{8}$/,"he-IL":/^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"id-ID":/^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"it-SM":/^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,"ja-JP":/^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,"ka-GE":/^(\+?995)?(5|79)\d{7}$/,"kk-KZ":/^(\+?7|8)?7\d{9}$/,"kl-GL":/^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"ko-KR":/^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,"lt-LT":/^(\+370|8)\d{8}$/,"lv-LV":/^(\+?371)2\d{7}$/,"ms-MY":/^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"mz-MZ":/^(\+?258)?8[234567]\d{7}$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"ne-NP":/^(\+?977)?9[78]\d{8}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nl-NL":/^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[2-9]{1}\d{3}\-?\d{4}))$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"pt-AO":/^(\+244)\d{9}$/,"ro-RO":/^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"si-LK":/^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,"sl-SI":/^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,"sk-SK":/^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"sq-AL":/^(\+355|0)6[789]\d{6}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"sv-SE":/^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,"th-TH":/^(\+66|66|0)\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"uk-UA":/^(\+?38|8)?0\d{9}$/,"uz-UZ":/^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,"vi-VN":/^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,"zh-CN":/^((\+|00)86)?1([3456789][0-9]|4[579]|6[67]|7[01235678]|9[012356789])[0-9]{8}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};hD["en-CA"]=hD["en-US"],hD["fr-CA"]=hD["en-CA"],hD["fr-BE"]=hD["nl-BE"],hD["zh-HK"]=hD["en-HK"],hD["zh-MO"]=hD["en-MO"],hD["ga-IE"]=hD["en-IE"],hD["fr-CH"]=hD["de-CH"],hD["it-CH"]=hD["fr-CH"];var fD=Object.keys(hD);cD.locales=fD;var pD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(0x)[0-9a-f]{40}$/i;e.exports=t.default,e.exports.default=t.default}(pD,pD.exports);var mD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,r.default)(e),function(e){var t="\\d{".concat(e.digits_after_decimal[0],"}");e.digits_after_decimal.forEach((function(e,n){0!==n&&(t="".concat(t,"|\\d{").concat(e,"}"))}));var n="(".concat(e.symbol.replace(/\W/,(function(e){return"\\".concat(e)})),")").concat(e.require_symbol?"":"?"),r="-?",i="[1-9]\\d{0,2}(\\".concat(e.thousands_separator,"\\d{3})*"),s="(".concat(["0","[1-9]\\d*",i].join("|"),")?"),o="(\\".concat(e.decimal_separator,"(").concat(t,"))").concat(e.require_decimal?"":"?"),a=s+(e.allow_decimal||e.require_decimal?o:"");e.allow_negatives&&!e.parens_for_negatives&&(e.negative_sign_after_digits?a+=r:e.negative_sign_before_digits&&(a=r+a));e.allow_negative_sign_placeholder?a="( (?!\\-))?".concat(a):e.allow_space_after_symbol?a=" ?".concat(a):e.allow_space_after_digits&&(a+="( (?!$))?");e.symbol_after_digits?a+=n:a=n+a;e.allow_negatives&&(e.parens_for_negatives?a="(\\(".concat(a,"\\)|").concat(a,")"):e.negative_sign_before_digits||e.negative_sign_after_digits||(a=r+a));return new RegExp("^(?!-? )(?=.*\\d)".concat(a,"$"))}(t=(0,n.default)(t,s)).test(e)};var n=i(qO.exports),r=i(fO.exports);function i(e){return e&&e.__esModule?e:{default:e}}var s={symbol:"$",require_symbol:!1,allow_space_after_symbol:!1,symbol_after_digits:!1,allow_negatives:!0,parens_for_negatives:!1,negative_sign_before_digits:!1,negative_sign_after_digits:!1,allow_negative_sign_placeholder:!1,thousands_separator:",",decimal_separator:".",allow_decimal:!0,require_decimal:!1,digits_after_decimal:[2],allow_space_after_digits:!1};e.exports=t.default,e.exports.default=t.default}(mD,mD.exports);var gD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,n.default)(e),e.startsWith("bc1"))return r.test(e);return i.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(bc1)[a-z0-9]{25,39}$/,i=/^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;e.exports=t.default,e.exports.default=t.default}(gD,gD.exports);var vD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,n.default)(e);var o=t.strictSeparator?i.test(e):r.test(e);return o&&t.strict?s(e):o};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,i=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,s=function(e){var t=e.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);if(t){var n=Number(t[1]),r=Number(t[2]);return n%4==0&&n%100!=0||n%400==0?r<=366:r<=365}var i=e.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),s=i[1],o=i[2],a=i[3],u=o?"0".concat(o).slice(-2):o,l=a?"0".concat(a).slice(-2):a,c=new Date("".concat(s,"-").concat(u||"01","-").concat(l||"01"));return!o||!a||c.getUTCFullYear()===s&&c.getUTCMonth()+1===o&&c.getUTCDate()===a};e.exports=t.default,e.exports.default=t.default}(vD,vD.exports);var yD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),c.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/([01][0-9]|2[0-3])/,i=/[0-5][0-9]/,s=new RegExp("[-+]".concat(r.source,":").concat(i.source)),o=new RegExp("([zZ]|".concat(s.source,")")),a=new RegExp("".concat(r.source,":").concat(i.source,":").concat(/([0-5][0-9]|60)/.source).concat(/(\.[0-9]+)?/.source)),u=new RegExp("".concat(/[0-9]{4}/.source,"-").concat(/(0[1-9]|1[0-2])/.source,"-").concat(/([12]\d|0[1-9]|3[01])/.source)),l=new RegExp("".concat(a.source).concat(o.source)),c=new RegExp("".concat(u.source,"[ tT]").concat(l.source));e.exports=t.default,e.exports.default=t.default}(yD,yD.exports);var wD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),(0,r.default)(s,e.toUpperCase())};var n=i(fO.exports),r=i(CP.exports);function i(e){return e&&e.__esModule?e:{default:e}}var s=["AFG","ALA","ALB","DZA","ASM","AND","AGO","AIA","ATA","ATG","ARG","ARM","ABW","AUS","AUT","AZE","BHS","BHR","BGD","BRB","BLR","BEL","BLZ","BEN","BMU","BTN","BOL","BES","BIH","BWA","BVT","BRA","IOT","BRN","BGR","BFA","BDI","KHM","CMR","CAN","CPV","CYM","CAF","TCD","CHL","CHN","CXR","CCK","COL","COM","COG","COD","COK","CRI","CIV","HRV","CUB","CUW","CYP","CZE","DNK","DJI","DMA","DOM","ECU","EGY","SLV","GNQ","ERI","EST","ETH","FLK","FRO","FJI","FIN","FRA","GUF","PYF","ATF","GAB","GMB","GEO","DEU","GHA","GIB","GRC","GRL","GRD","GLP","GUM","GTM","GGY","GIN","GNB","GUY","HTI","HMD","VAT","HND","HKG","HUN","ISL","IND","IDN","IRN","IRQ","IRL","IMN","ISR","ITA","JAM","JPN","JEY","JOR","KAZ","KEN","KIR","PRK","KOR","KWT","KGZ","LAO","LVA","LBN","LSO","LBR","LBY","LIE","LTU","LUX","MAC","MKD","MDG","MWI","MYS","MDV","MLI","MLT","MHL","MTQ","MRT","MUS","MYT","MEX","FSM","MDA","MCO","MNG","MNE","MSR","MAR","MOZ","MMR","NAM","NRU","NPL","NLD","NCL","NZL","NIC","NER","NGA","NIU","NFK","MNP","NOR","OMN","PAK","PLW","PSE","PAN","PNG","PRY","PER","PHL","PCN","POL","PRT","PRI","QAT","REU","ROU","RUS","RWA","BLM","SHN","KNA","LCA","MAF","SPM","VCT","WSM","SMR","STP","SAU","SEN","SRB","SYC","SLE","SGP","SXM","SVK","SVN","SLB","SOM","ZAF","SGS","SSD","ESP","LKA","SDN","SUR","SJM","SWZ","SWE","CHE","SYR","TWN","TJK","TZA","THA","TLS","TGO","TKL","TON","TTO","TUN","TUR","TKM","TCA","TUV","UGA","UKR","ARE","GBR","USA","UMI","URY","UZB","VUT","VEN","VNM","VGB","VIR","WLF","ESH","YEM","ZMB","ZWE"];e.exports=t.default,e.exports.default=t.default}(wD,wD.exports);var bD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,n.default)(e),e.length%8==0&&r.test(e))return!0;return!1};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[A-Z2-7]+=*$/;e.exports=t.default,e.exports.default=t.default}(bD,bD.exports);var _D={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,n.default)(e),r.test(e))return!0;return!1};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[A-HJ-NP-Za-km-z1-9]*$/;e.exports=t.default,e.exports.default=t.default}(_D,_D.exports);var ED={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(e);var t=e.split(",");if(t.length<2)return!1;var o=t.shift().trim().split(";"),a=o.shift();if("data:"!==a.substr(0,5))return!1;var u=a.substr(5);if(""!==u&&!r.test(u))return!1;for(var l=0;l<o.length;l++)if((l!==o.length-1||"base64"!==o[l].toLowerCase())&&!i.test(o[l]))return!1;for(var c=0;c<t.length;c++)if(!s.test(t[c]))return!1;return!0};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[a-z]+\/[a-z0-9\-\+]+$/i,i=/^[a-z\-]+=[a-z0-9\-]+$/i,s=/^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;e.exports=t.default,e.exports.default=t.default}(ED,ED.exports);var ID={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e.trim())};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;e.exports=t.default,e.exports.default=t.default}(ID,ID.exports);var SD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)||i.test(e)||s.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i,i=/^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i,s=/^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;e.exports=t.default,e.exports.default=t.default}(SD,SD.exports);var TD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),t=(0,r.default)(t,l),!e.includes(","))return!1;var i=e.split(",");if(i[0].startsWith("(")&&!i[1].endsWith(")")||i[1].endsWith(")")&&!i[0].startsWith("("))return!1;if(t.checkDMS)return a.test(i[0])&&u.test(i[1]);return s.test(i[0])&&o.test(i[1])};var n=i(fO.exports),r=i(qO.exports);function i(e){return e&&e.__esModule?e:{default:e}}var s=/^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,o=/^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,a=/^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i,u=/^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i,l={checkDMS:!1};e.exports=t.default,e.exports.default=t.default}(TD,TD.exports);var xD={};Object.defineProperty(xD,"__esModule",{value:!0}),xD.default=function(e,t){if((0,kD.default)(e),t in RD)return RD[t].test(e);if("any"===t){for(var n in RD){if(RD.hasOwnProperty(n))if(RD[n].test(e))return!0}return!1}throw new Error("Invalid locale '".concat(t,"'"))},xD.locales=void 0;var kD=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var AD=/^\d{4}$/,ND=/^\d{5}$/,CD=/^\d{6}$/,RD={AD:/^AD\d{3}$/,AT:AD,AU:AD,AZ:/^AZ\d{4}$/,BE:AD,BG:AD,BR:/^\d{5}-\d{3}$/,BY:/2[1-4]{1}\d{4}$/,CA:/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,CH:AD,CN:/^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,CZ:/^\d{3}\s?\d{2}$/,DE:ND,DK:AD,DO:ND,DZ:ND,EE:ND,ES:/^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,FI:ND,FR:/^\d{2}\s?\d{3}$/,GB:/^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,GR:/^\d{3}\s?\d{2}$/,HR:/^([1-5]\d{4}$)/,HT:/^HT\d{4}$/,HU:AD,ID:ND,IE:/^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,IL:/^(\d{5}|\d{7})$/,IN:/^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,IR:/\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,IS:/^\d{3}$/,IT:ND,JP:/^\d{3}\-\d{4}$/,KE:ND,KR:/^(\d{5}|\d{6})$/,LI:/^(948[5-9]|949[0-7])$/,LT:/^LT\-\d{5}$/,LU:AD,LV:/^LV\-\d{4}$/,MX:ND,MT:/^[A-Za-z]{3}\s{0,1}\d{4}$/,MY:ND,NL:/^\d{4}\s?[a-z]{2}$/i,NO:AD,NP:/^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,NZ:AD,PL:/^\d{2}\-\d{3}$/,PR:/^00[679]\d{2}([ -]\d{4})?$/,PT:/^\d{4}\-\d{3}?$/,RO:CD,RU:CD,SA:ND,SE:/^[1-9]\d{2}\s?\d{2}$/,SG:CD,SI:AD,SK:/^\d{3}\s?\d{2}$/,TH:ND,TN:AD,TW:/^\d{3}(\d{2})?$/,UA:ND,US:/^\d{5}(-\d{4})?$/,ZA:AD,ZM:ND},OD=Object.keys(RD);xD.locales=OD;var PD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e);var r=t?new RegExp("^[".concat(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"]+"),"g"):/^\s+/g;return e.replace(r,"")};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(PD,PD.exports);var DD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e);var r=t?new RegExp("[".concat(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"]+$"),"g"):/(\s)+$/g;return e.replace(r,"")};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(DD,DD.exports);var LD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,n.default)((0,r.default)(e,t),t)};var n=i(DD.exports),r=i(PD.exports);function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default,e.exports.default=t.default}(LD,LD.exports);var MD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\\/g,"&#x5C;").replace(/`/g,"&#96;")};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(MD,MD.exports);var FD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),e.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#x5C;/g,"\\").replace(/&#96;/g,"`")};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(FD,FD.exports);var UD={exports:{}},$D={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,n.default)(e),e.replace(new RegExp("[".concat(t,"]+"),"g"),"")};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}($D,$D.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e);var i=t?"\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F":"\\x00-\\x1F\\x7F";return(0,r.default)(e,i)};var n=i(fO.exports),r=i($D.exports);function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default,e.exports.default=t.default}(UD,UD.exports);var BD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,n.default)(e),e.replace(new RegExp("[^".concat(t,"]+"),"g"),"")};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(BD,BD.exports);var VD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e);for(var r=e.length-1;r>=0;r--)if(-1===t.indexOf(e[r]))return!1;return!0};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);e.exports=t.default,e.exports.default=t.default}(VD,VD.exports);var jD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t=(0,n.default)(t,r);var l=e.split("@"),c=l.pop(),d=[l.join("@"),c];if(d[1]=d[1].toLowerCase(),"gmail.com"===d[1]||"googlemail.com"===d[1]){if(t.gmail_remove_subaddress&&(d[0]=d[0].split("+")[0]),t.gmail_remove_dots&&(d[0]=d[0].replace(/\.+/g,u)),!d[0].length)return!1;(t.all_lowercase||t.gmail_lowercase)&&(d[0]=d[0].toLowerCase()),d[1]=t.gmail_convert_googlemaildotcom?"gmail.com":d[1]}else if(i.indexOf(d[1])>=0){if(t.icloud_remove_subaddress&&(d[0]=d[0].split("+")[0]),!d[0].length)return!1;(t.all_lowercase||t.icloud_lowercase)&&(d[0]=d[0].toLowerCase())}else if(s.indexOf(d[1])>=0){if(t.outlookdotcom_remove_subaddress&&(d[0]=d[0].split("+")[0]),!d[0].length)return!1;(t.all_lowercase||t.outlookdotcom_lowercase)&&(d[0]=d[0].toLowerCase())}else if(o.indexOf(d[1])>=0){if(t.yahoo_remove_subaddress){var h=d[0].split("-");d[0]=h.length>1?h.slice(0,-1).join("-"):h[0]}if(!d[0].length)return!1;(t.all_lowercase||t.yahoo_lowercase)&&(d[0]=d[0].toLowerCase())}else a.indexOf(d[1])>=0?((t.all_lowercase||t.yandex_lowercase)&&(d[0]=d[0].toLowerCase()),d[1]="yandex.ru"):t.all_lowercase&&(d[0]=d[0].toLowerCase());return d.join("@")};var n=function(e){return e&&e.__esModule?e:{default:e}}(qO.exports);var r={all_lowercase:!0,gmail_lowercase:!0,gmail_remove_dots:!0,gmail_remove_subaddress:!0,gmail_convert_googlemaildotcom:!0,outlookdotcom_lowercase:!0,outlookdotcom_remove_subaddress:!0,yahoo_lowercase:!0,yahoo_remove_subaddress:!0,yandex_lowercase:!0,icloud_lowercase:!0,icloud_remove_subaddress:!0},i=["icloud.com","me.com"],s=["hotmail.at","hotmail.be","hotmail.ca","hotmail.cl","hotmail.co.il","hotmail.co.nz","hotmail.co.th","hotmail.co.uk","hotmail.com","hotmail.com.ar","hotmail.com.au","hotmail.com.br","hotmail.com.gr","hotmail.com.mx","hotmail.com.pe","hotmail.com.tr","hotmail.com.vn","hotmail.cz","hotmail.de","hotmail.dk","hotmail.es","hotmail.fr","hotmail.hu","hotmail.id","hotmail.ie","hotmail.in","hotmail.it","hotmail.jp","hotmail.kr","hotmail.lv","hotmail.my","hotmail.ph","hotmail.pt","hotmail.sa","hotmail.sg","hotmail.sk","live.be","live.co.uk","live.com","live.com.ar","live.com.mx","live.de","live.es","live.eu","live.fr","live.it","live.nl","msn.com","outlook.at","outlook.be","outlook.cl","outlook.co.il","outlook.co.nz","outlook.co.th","outlook.com","outlook.com.ar","outlook.com.au","outlook.com.br","outlook.com.gr","outlook.com.pe","outlook.com.tr","outlook.com.vn","outlook.cz","outlook.de","outlook.dk","outlook.es","outlook.fr","outlook.hu","outlook.id","outlook.ie","outlook.in","outlook.it","outlook.jp","outlook.kr","outlook.lv","outlook.my","outlook.ph","outlook.pt","outlook.sa","outlook.sg","outlook.sk","passport.com"],o=["rocketmail.com","yahoo.ca","yahoo.co.uk","yahoo.com","yahoo.de","yahoo.fr","yahoo.in","yahoo.it","ymail.com"],a=["yandex.ru","yandex.ua","yandex.kz","yandex.com","yandex.by","ya.ru"];function u(e){return e.length>1?e:""}e.exports=t.default,e.exports.default=t.default}(jD,jD.exports);var zD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e),r.test(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r=/^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;e.exports=t.default,e.exports.default=t.default}(zD,zD.exports);var qD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),t in r)return r[t](e);if("any"===t){for(var i in r){if((0,r[i])(e))return!0}return!1}throw new Error("Invalid locale '".concat(t,"'"))};var n=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var r={"de-DE":function(e){return/^((AW|UL|AK|GA|AÖ|LF|AZ|AM|AS|ZE|AN|AB|A|KG|KH|BA|EW|BZ|HY|KM|BT|HP|B|BC|BI|BO|FN|TT|ÜB|BN|AH|BS|FR|HB|ZZ|BB|BK|BÖ|OC|OK|CW|CE|C|CO|LH|CB|KW|LC|LN|DA|DI|DE|DH|SY|NÖ|DO|DD|DU|DN|D|EI|EA|EE|FI|EM|EL|EN|PF|ED|EF|ER|AU|ZP|E|ES|NT|EU|FL|FO|FT|FF|F|FS|FD|FÜ|GE|G|GI|GF|GS|ZR|GG|GP|GR|NY|ZI|GÖ|GZ|GT|HA|HH|HM|HU|WL|HZ|WR|RN|HK|HD|HN|HS|GK|HE|HF|RZ|HI|HG|HO|HX|IK|IL|IN|J|JL|KL|KA|KS|KF|KE|KI|KT|KO|KN|KR|KC|KU|K|LD|LL|LA|L|OP|LM|LI|LB|LU|LÖ|HL|LG|MD|GN|MZ|MA|ML|MR|MY|AT|DM|MC|NZ|RM|RG|MM|ME|MB|MI|FG|DL|HC|MW|RL|MK|MG|MÜ|WS|MH|M|MS|NU|NB|ND|NM|NK|NW|NR|NI|NF|DZ|EB|OZ|TG|TO|N|OA|GM|OB|CA|EH|FW|OF|OL|OE|OG|BH|LR|OS|AA|GD|OH|KY|NP|WK|PB|PA|PE|PI|PS|P|PM|PR|RA|RV|RE|R|H|SB|WN|RS|RD|RT|BM|NE|GV|RP|SU|GL|RO|GÜ|RH|EG|RW|PN|SK|MQ|RU|SZ|RI|SL|SM|SC|HR|FZ|VS|SW|SN|CR|SE|SI|SO|LP|SG|NH|SP|IZ|ST|BF|TE|HV|OD|SR|S|AC|DW|ZW|TF|TS|TR|TÜ|UM|PZ|TP|UE|UN|UH|MN|KK|VB|V|AE|PL|RC|VG|GW|PW|VR|VK|KB|WA|WT|BE|WM|WE|AP|MO|WW|FB|WZ|WI|WB|JE|WF|WO|W|WÜ|BL|Z|GC)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(AIC|FDB|ABG|SLN|SAW|KLZ|BUL|ESB|NAB|SUL|WST|ABI|AZE|BTF|KÖT|DKB|FEU|ROT|ALZ|SMÜ|WER|AUR|NOR|DÜW|BRK|HAB|TÖL|WOR|BAD|BAR|BER|BIW|EBS|KEM|MÜB|PEG|BGL|BGD|REI|WIL|BKS|BIR|WAT|BOR|BOH|BOT|BRB|BLK|HHM|NEB|NMB|WSF|LEO|HDL|WMS|WZL|BÜS|CHA|KÖZ|ROD|WÜM|CLP|NEC|COC|ZEL|COE|CUX|DAH|LDS|DEG|DEL|RSL|DLG|DGF|LAN|HEI|MED|DON|KIB|ROK|JÜL|MON|SLE|EBE|EIC|HIG|WBS|BIT|PRÜ|LIB|EMD|WIT|ERH|HÖS|ERZ|ANA|ASZ|MAB|MEK|STL|SZB|FDS|HCH|HOR|WOL|FRG|GRA|WOS|FRI|FFB|GAP|GER|BRL|CLZ|GTH|NOH|HGW|GRZ|LÖB|NOL|WSW|DUD|HMÜ|OHA|KRU|HAL|HAM|HBS|QLB|HVL|NAU|HAS|EBN|GEO|HOH|HDH|ERK|HER|WAN|HEF|ROF|HBN|ALF|HSK|USI|NAI|REH|SAN|KÜN|ÖHR|HOL|WAR|ARN|BRG|GNT|HOG|WOH|KEH|MAI|PAR|RID|ROL|KLE|GEL|KUS|KYF|ART|SDH|LDK|DIL|MAL|VIB|LER|BNA|GHA|GRM|MTL|WUR|LEV|LIF|STE|WEL|LIP|VAI|LUP|HGN|LBZ|LWL|PCH|STB|DAN|MKK|SLÜ|MSP|TBB|MGH|MTK|BIN|MSH|EIL|HET|SGH|BID|MYK|MSE|MST|MÜR|WRN|MEI|GRH|RIE|MZG|MIL|OBB|BED|FLÖ|MOL|FRW|SEE|SRB|AIB|MOS|BCH|ILL|SOB|NMS|NEA|SEF|UFF|NEW|VOH|NDH|TDO|NWM|GDB|GVM|WIS|NOM|EIN|GAN|LAU|HEB|OHV|OSL|SFB|ERB|LOS|BSK|KEL|BSB|MEL|WTL|OAL|FÜS|MOD|OHZ|OPR|BÜR|PAF|PLÖ|CAS|GLA|REG|VIT|ECK|SIM|GOA|EMS|DIZ|GOH|RÜD|SWA|NES|KÖN|MET|LRO|BÜZ|DBR|ROS|TET|HRO|ROW|BRV|HIP|PAN|GRI|SHK|EIS|SRO|SOK|LBS|SCZ|MER|QFT|SLF|SLS|HOM|SLK|ASL|BBG|SBK|SFT|SHG|MGN|MEG|ZIG|SAD|NEN|OVI|SHA|BLB|SIG|SON|SPN|FOR|GUB|SPB|IGB|WND|STD|STA|SDL|OBG|HST|BOG|SHL|PIR|FTL|SEB|SÖM|SÜW|TIR|SAB|TUT|ANG|SDT|LÜN|LSZ|MHL|VEC|VER|VIE|OVL|ANK|OVP|SBG|UEM|UER|WLG|GMN|NVP|RDG|RÜG|DAU|FKB|WAF|WAK|SLZ|WEN|SOG|APD|WUG|GUN|ESW|WIZ|WES|DIN|BRA|BÜD|WHV|HWI|GHC|WTM|WOB|WUN|MAK|SEL|OCH|HOT|WDA)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(e)},"de-LI":function(e){return/^FL[- ]?\d{1,5}[UZ]?$/.test(e)},"pt-PT":function(e){return/^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(e)},"sq-AL":function(e){return/^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(e)},"pt-BR":function(e){return/^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(e)}};e.exports=t.default,e.exports.default=t.default}(qD,qD.exports);var HD={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;(0,r.default)(e);var i=c(e);if((t=(0,n.default)(t||{},l)).returnScore)return d(i,t);return i.length>=t.minLength&&i.lowercaseCount>=t.minLowercase&&i.uppercaseCount>=t.minUppercase&&i.numberCount>=t.minNumbers&&i.symbolCount>=t.minSymbols};var n=i(qO.exports),r=i(fO.exports);function i(e){return e&&e.__esModule?e:{default:e}}var s=/^[A-Z]$/,o=/^[a-z]$/,a=/^[0-9]$/,u=/^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/,l={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1,returnScore:!1,pointsPerUnique:1,pointsPerRepeat:.5,pointsForContainingLower:10,pointsForContainingUpper:10,pointsForContainingNumber:10,pointsForContainingSymbol:10};function c(e){var t,n,r=(t=e,n={},Array.from(t).forEach((function(e){n[e]?n[e]+=1:n[e]=1})),n),i={length:e.length,uniqueChars:Object.keys(r).length,uppercaseCount:0,lowercaseCount:0,numberCount:0,symbolCount:0};return Object.keys(r).forEach((function(e){s.test(e)?i.uppercaseCount+=r[e]:o.test(e)?i.lowercaseCount+=r[e]:a.test(e)?i.numberCount+=r[e]:u.test(e)&&(i.symbolCount+=r[e])})),i}function d(e,t){var n=0;return n+=e.uniqueChars*t.pointsPerUnique,n+=(e.length-e.uniqueChars)*t.pointsPerRepeat,e.lowercaseCount>0&&(n+=t.pointsForContainingLower),e.uppercaseCount>0&&(n+=t.pointsForContainingUpper),e.numberCount>0&&(n+=t.pointsForContainingNumber),e.symbolCount>0&&(n+=t.pointsForContainingSymbol),n}e.exports=t.default,e.exports.default=t.default}(HD,HD.exports);var KD={};Object.defineProperty(KD,"__esModule",{value:!0}),KD.default=function(e,t){if((0,GD.default)(e),(0,GD.default)(t),t in WD)return WD[t].test(e);throw new Error("Invalid country code: '".concat(t,"'"))},KD.vatMatchers=void 0;var GD=function(e){return e&&e.__esModule?e:{default:e}}(fO.exports);var WD={GB:/^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/,IT:/^(IT)?[0-9]{11}$/};KD.vatMatchers=WD,function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=ze(hO.exports),i=ze(pO.exports),s=ze(FO.exports),o=ze(UO.exports),a=ze($O.exports),u=ze(BO.exports),l=ze(HO.exports),c=ze(KO.exports),d=ze(YO.exports),h=ze(QO.exports),f=ze(ZO.exports),p=ze(JO.exports),m=ze(WO.exports),g=ze(XO.exports),v=ze(eP.exports),y=ze(tP.exports),w=je(nP),b=je(oP),_=ze(cP.exports),E=ze(dP.exports),I=ze(hP.exports),S=ze(pP.exports),T=ze(mP.exports),x=ze(gP.exports),k=ze(vP.exports),A=ze(yP),N=ze(_P),C=ze(SP.exports),R=ze(TP.exports),O=ze(xP.exports),P=ze(AP.exports),D=ze(fP.exports),L=je(mO),M=ze(NP.exports),F=ze(RP.exports),U=ze(OP.exports),$=ze(PP.exports),B=ze(DP.exports),V=ze(LP.exports),j=ze(MP.exports),z=ze(FP.exports),q=ze(UP.exports),H=ze($P.exports),K=ze(qP.exports),G=ze(HP.exports),W=ze(KP.exports),Z=ze(WP.exports),Y=ze(ZP.exports),Q=ze(YP.exports),J=ze(GO.exports),X=ze(QP.exports),ee=ze(JP.exports),te=ze(XP.exports),ne=ze(eD.exports),re=ze(tD.exports),ie=ze(nD.exports),se=ze(rD.exports),oe=ze(iD.exports),ae=ze(sD.exports),ue=ze(oD.exports),le=ze(aD.exports),ce=ze(uD.exports),de=je(cD),he=ze(pD.exports),fe=ze(mD.exports),pe=ze(gD.exports),me=ze(vD.exports),ge=ze(yD.exports),ve=ze(BP),ye=ze(wD.exports),we=ze(bD.exports),be=ze(_D.exports),_e=ze(GP.exports),Ee=ze(ED.exports),Ie=ze(ID.exports),Se=ze(SD.exports),Te=ze(TD.exports),xe=je(xD),ke=ze(PD.exports),Ae=ze(DD.exports),Ne=ze(LD.exports),Ce=ze(MD.exports),Re=ze(FD.exports),Oe=ze(UD.exports),Pe=ze(BD.exports),De=ze($D.exports),Le=ze(VD.exports),Me=ze(jD.exports),Fe=ze(zD.exports),Ue=ze(qD.exports),$e=ze(HD.exports),Be=ze(KD);function Ve(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ve=function(){return e},e}function je(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=Ve();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}function ze(e){return e&&e.__esModule?e:{default:e}}var qe={version:"13.6.0",toDate:r.default,toFloat:i.default,toInt:s.default,toBoolean:o.default,equals:a.default,contains:u.default,matches:l.default,isEmail:c.default,isURL:d.default,isMACAddress:h.default,isIP:f.default,isIPRange:p.default,isFQDN:m.default,isBoolean:v.default,isIBAN:q.default,isBIC:H.default,isAlpha:w.default,isAlphaLocales:w.locales,isAlphanumeric:b.default,isAlphanumericLocales:b.locales,isNumeric:_.default,isPassportNumber:E.default,isPort:I.default,isLowercase:S.default,isUppercase:T.default,isAscii:k.default,isFullWidth:A.default,isHalfWidth:N.default,isVariableWidth:C.default,isMultibyte:R.default,isSemVer:O.default,isSurrogatePair:P.default,isInt:D.default,isIMEI:x.default,isFloat:L.default,isFloatLocales:L.locales,isDecimal:M.default,isHexadecimal:F.default,isOctal:U.default,isDivisibleBy:$.default,isHexColor:B.default,isRgbColor:V.default,isHSL:j.default,isISRC:z.default,isMD5:K.default,isHash:G.default,isJWT:W.default,isJSON:Z.default,isEmpty:Y.default,isLength:Q.default,isLocale:y.default,isByteLength:J.default,isUUID:X.default,isMongoId:ee.default,isAfter:te.default,isBefore:ne.default,isIn:re.default,isCreditCard:ie.default,isIdentityCard:se.default,isEAN:oe.default,isISIN:ae.default,isISBN:ue.default,isISSN:le.default,isMobilePhone:de.default,isMobilePhoneLocales:de.locales,isPostalCode:xe.default,isPostalCodeLocales:xe.locales,isEthereumAddress:he.default,isCurrency:fe.default,isBtcAddress:pe.default,isISO8601:me.default,isRFC3339:ge.default,isISO31661Alpha2:ve.default,isISO31661Alpha3:ye.default,isBase32:we.default,isBase58:be.default,isBase64:_e.default,isDataURI:Ee.default,isMagnetURI:Ie.default,isMimeType:Se.default,isLatLong:Te.default,ltrim:ke.default,rtrim:Ae.default,trim:Ne.default,escape:Ce.default,unescape:Re.default,stripLow:Oe.default,whitelist:Pe.default,blacklist:De.default,isWhitelisted:Le.default,normalizeEmail:Me.default,toString:toString,isSlug:Fe.default,isStrongPassword:$e.default,isTaxID:ce.default,isDate:g.default,isLicensePlate:Ue.default,isVAT:Be.default};t.default=qe,e.exports=t.default,e.exports.default=t.default}(dO,dO.exports);var ZD=e(dO.exports);function YD(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QD(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function JD(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?QD(Object(n),!0).forEach((function(t){YD(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):QD(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function XD(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var eL="function"==typeof Symbol&&Symbol.observable||"@@observable",tL=function(){return Math.random().toString(36).substring(7).split("").join(".")},nL={INIT:"@@redux/INIT"+tL(),REPLACE:"@@redux/REPLACE"+tL(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+tL()}};function rL(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function iL(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(XD(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(XD(1));return n(iL)(e,t)}if("function"!=typeof e)throw new Error(XD(2));var i=e,s=t,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(XD(3));return s}function d(e){if("function"!=typeof e)throw new Error(XD(4));if(u)throw new Error(XD(5));var t=!0;return l(),a.push(e),function(){if(t){if(u)throw new Error(XD(6));t=!1,l();var n=a.indexOf(e);a.splice(n,1),o=null}}}function h(e){if(!rL(e))throw new Error(XD(7));if(void 0===e.type)throw new Error(XD(8));if(u)throw new Error(XD(9));try{u=!0,s=i(s,e)}finally{u=!1}for(var t=o=a,n=0;n<t.length;n++){(0,t[n])()}return e}function f(e){if("function"!=typeof e)throw new Error(XD(10));i=e,h({type:nL.REPLACE})}function p(){var e,t=d;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(XD(11));function n(){e.next&&e.next(c())}return n(),{unsubscribe:t(n)}}})[eL]=function(){return this},e}return h({type:nL.INIT}),(r={dispatch:h,subscribe:d,getState:c,replaceReducer:f})[eL]=p,r}function sL(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];"function"==typeof e[i]&&(n[i]=e[i])}var s,o=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:nL.INIT}))throw new Error(XD(12));if(void 0===n(void 0,{type:nL.PROBE_UNKNOWN_ACTION()}))throw new Error(XD(13))}))}(n)}catch(a){s=a}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var r=!1,i={},a=0;a<o.length;a++){var u=o[a],l=n[u],c=e[u],d=l(c,t);if(void 0===d)throw t&&t.type,new Error(XD(14));i[u]=d,r=r||d!==c}return(r=r||o.length!==Object.keys(e).length)?i:e}}function oL(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function aL(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(XD(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},s=t.map((function(e){return e(i)}));return r=oL.apply(void 0,s)(n.dispatch),JD(JD({},n),{},{dispatch:r})}}}function uL(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var lL=uL();lL.withExtraArgument=uL;export{Fd as B,zd as L,Xl as P,U as R,Md as S,jc as a,Ld as b,Rd as c,sL as d,iL as e,uf as f,aL as g,oL as h,oc as i,Zl as j,t as r,lL as t,Uc as u,ZD as v};
