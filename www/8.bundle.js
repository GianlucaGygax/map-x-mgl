webpackJsonp([8],{100:function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},77:function(e,t,r){(function(t){var r,r;/*!
    localForage -- Offline Storage, Improved
    Version 1.5.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
!function(t){e.exports=t()}(function(){return function e(t,n,o){function i(u,c){if(!n[u]){if(!t[u]){var f="function"==typeof r&&r;if(!c&&f)return r(u,!0);if(a)return a(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[u]={exports:{}};t[u][0].call(l.exports,function(e){var r=t[u][1][e];return i(r||e)},l,l.exports,e,t,n,o)}return n[u].exports}for(var a="function"==typeof r&&r,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,r,n){(function(e){"use strict";function t(){s=!0;for(var e,t,r=l.length;r;){for(t=l,l=[],e=-1;++e<r;)t[e]();r=l.length}s=!1}function n(e){1!==l.push(e)||s||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,u=new i(t),c=e.document.createTextNode("");u.observe(c,{characterData:!0}),o=function(){c.data=a=++a%2}}else if(e.setImmediate||void 0===e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var r=e.document.createElement("script");r.onreadystatechange=function(){t(),r.onreadystatechange=null,r.parentNode.removeChild(r),r=null},e.document.documentElement.appendChild(r)}:function(){setTimeout(t,0)};else{var f=new e.MessageChannel;f.port1.onmessage=t,o=function(){f.port2.postMessage(0)}}var s,l=[];r.exports=n}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,r){"use strict";function n(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,e!==n&&c(this,e)}function i(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function a(e,t,r){h(function(){var n;try{n=t(r)}catch(t){return y.reject(e,t)}n===e?y.reject(e,new TypeError("Cannot resolve promise with itself")):y.resolve(e,n)})}function u(e){var t=e&&e.then;if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function c(e,t){function r(t){i||(i=!0,y.reject(e,t))}function n(t){i||(i=!0,y.resolve(e,t))}function o(){t(n,r)}var i=!1,a=f(o);"error"===a.status&&r(a.value)}function f(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}function s(e){return e instanceof this?e:y.resolve(new this(n),e)}function l(e){var t=new this(n);return y.reject(t,e)}function d(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,o=!1;if(!r)return this.resolve([]);for(var i=new Array(r),a=0,u=-1,c=new this(n);++u<r;)!function(e,n){function u(e){i[n]=e,++a!==r||o||(o=!0,y.resolve(c,i))}t.resolve(e).then(u,function(e){o||(o=!0,y.reject(c,e))})}(e[u],u);return c}function v(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,o=!1;if(!r)return this.resolve([]);for(var i=-1,a=new this(n);++i<r;)!function(e){t.resolve(e).then(function(e){o||(o=!0,y.resolve(a,e))},function(e){o||(o=!0,y.reject(a,e))})}(e[i]);return a}var h=e(1),y={},p=["REJECTED"],b=["FULFILLED"],g=["PENDING"];t.exports=r=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===b||"function"!=typeof t&&this.state===p)return this;var r=new this.constructor(n);if(this.state!==g){a(r,this.state===b?e:t,this.outcome)}else this.queue.push(new i(r,e,t));return r},i.prototype.callFulfilled=function(e){y.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){y.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},y.resolve=function(e,t){var r=f(u,t);if("error"===r.status)return y.reject(e,r.value);var n=r.value;if(n)c(e,n);else{e.state=b,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},y.reject=function(e,t){e.state=p,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},r.resolve=s,r.reject=l,r.all=d,r.race=v},{1:1}],3:[function(e,r,n){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}function i(e,t){t&&e.then(function(e){t(null,e)},function(e){t(e)})}function a(e,t,r){"function"==typeof t&&e.then(t),"function"==typeof r&&e.catch(r)}function u(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function c(e){return new ie(function(t){var r=e.transaction(ae,"readwrite"),n=o([""]);r.objectStore(ae).put(n,"key"),r.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},r.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),r=navigator.userAgent.match(/Edge\//);t(r||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1})}function f(e){return"boolean"==typeof ne?ie.resolve(ne):c(e).then(function(e){return ne=e})}function s(e){var t=oe[e.name],r={};r.promise=new ie(function(e){r.resolve=e}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function l(e){var t=oe[e.name],r=t.deferredOperations.pop();r&&r.resolve()}function d(e,t){return new ie(function(r,n){if(e.db){if(!t)return r(e.db);s(e),e.db.close()}var o=[e.name];t&&o.push(e.version);var i=re.open.apply(re,o);t&&(i.onupgradeneeded=function(t){var r=i.result;try{r.createObjectStore(e.storeName),t.oldVersion<=1&&r.createObjectStore(ae)}catch(r){if("ConstraintError"!==r.name)throw r;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(e){e.preventDefault(),n(i.error)},i.onsuccess=function(){r(i.result),l(e)}})}function v(e){return d(e,!1)}function h(e){return d(e,!0)}function y(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function p(e){return new ie(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(r){var n=btoa(r.target.result||"");t({__local_forage_encoded_blob:!0,data:n,type:e.type})},n.readAsBinaryString(e)})}function b(e){return o([u(atob(e.data))],{type:e.type})}function g(e){return e&&e.__local_forage_encoded_blob}function m(e){var t=this,r=t._initReady().then(function(){var e=oe[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return a(r,e,e),r}function w(e){function t(){return ie.resolve()}var r=this,n={db:null};if(e)for(var o in e)n[o]=e[o];oe||(oe={});var i=oe[n.name];i||(i={forages:[],db:null,dbReady:null,deferredOperations:[]},oe[n.name]=i),i.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=m);for(var a=[],u=0;u<i.forages.length;u++){var c=i.forages[u];c!==r&&a.push(c._initReady().catch(t))}var f=i.forages.slice(0);return ie.all(a).then(function(){return n.db=i.db,v(n)}).then(function(e){return n.db=e,y(n,r._defaultConfig.version)?h(n):e}).then(function(e){n.db=i.db=e,r._dbInfo=n;for(var t=0;t<f.length;t++){var o=f[t];o!==r&&(o._dbInfo.db=n.db,o._dbInfo.version=n.version)}})}function _(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=new ie(function(t,n){r.ready().then(function(){var o=r._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName),a=i.get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),g(e)&&(e=b(e)),t(e)},a.onerror=function(){n(a.error)}}).catch(n)});return i(n,t),n}function S(e,t){var r=this,n=new ie(function(t,n){r.ready().then(function(){var o=r._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName),a=i.openCursor(),u=1;a.onsuccess=function(){var r=a.result;if(r){var n=r.value;g(n)&&(n=b(n));var o=e(n,r.key,u++);void 0!==o?t(o):r.continue()}else t()},a.onerror=function(){n(a.error)}}).catch(n)});return i(n,t),n}function E(e,t,r){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var o=new ie(function(r,o){var i;n.ready().then(function(){return i=n._dbInfo,"[object Blob]"===ue.call(t)?f(i.db).then(function(e){return e?t:p(t)}):t}).then(function(t){var n=i.db.transaction(i.storeName,"readwrite"),a=n.objectStore(i.storeName),u=a.put(t,e);null===t&&(t=void 0),n.oncomplete=function(){void 0===t&&(t=null),r(t)},n.onabort=n.onerror=function(){var e=u.error?u.error:u.transaction.error;o(e)}}).catch(o)});return i(o,r),o}function I(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=new ie(function(t,n){r.ready().then(function(){var o=r._dbInfo,i=o.db.transaction(o.storeName,"readwrite"),a=i.objectStore(o.storeName),u=a.delete(e);i.oncomplete=function(){t()},i.onerror=function(){n(u.error)},i.onabort=function(){var e=u.error?u.error:u.transaction.error;n(e)}}).catch(n)});return i(n,t),n}function A(e){var t=this,r=new ie(function(e,r){t.ready().then(function(){var n=t._dbInfo,o=n.db.transaction(n.storeName,"readwrite"),i=o.objectStore(n.storeName),a=i.clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=a.error?a.error:a.transaction.error;r(e)}}).catch(r)});return i(r,e),r}function D(e){var t=this,r=new ie(function(e,r){t.ready().then(function(){var n=t._dbInfo,o=n.db.transaction(n.storeName,"readonly").objectStore(n.storeName),i=o.count();i.onsuccess=function(){e(i.result)},i.onerror=function(){r(i.error)}}).catch(r)});return i(r,e),r}function j(e,t){var r=this,n=new ie(function(t,n){if(e<0)return void t(null);r.ready().then(function(){var o=r._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName),a=!1,u=i.openCursor();u.onsuccess=function(){var r=u.result;if(!r)return void t(null);0===e?t(r.key):a?t(r.key):(a=!0,r.advance(e))},u.onerror=function(){n(u.error)}}).catch(n)});return i(n,t),n}function N(e){var t=this,r=new ie(function(e,r){t.ready().then(function(){var n=t._dbInfo,o=n.db.transaction(n.storeName,"readonly").objectStore(n.storeName),i=o.openCursor(),a=[];i.onsuccess=function(){var t=i.result;if(!t)return void e(a);a.push(t.key),t.continue()},i.onerror=function(){r(i.error)}}).catch(r)});return i(r,e),r}function O(e){var t,r,n,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(t=0;t<u;t+=4)r=fe.indexOf(e[t]),n=fe.indexOf(e[t+1]),o=fe.indexOf(e[t+2]),i=fe.indexOf(e[t+3]),s[c++]=r<<2|n>>4,s[c++]=(15&n)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function k(e){var t,r=new Uint8Array(e),n="";for(t=0;t<r.length;t+=3)n+=fe[r[t]>>2],n+=fe[(3&r[t])<<4|r[t+1]>>4],n+=fe[(15&r[t+1])<<2|r[t+2]>>6],n+=fe[63&r[t+2]];return r.length%3==2?n=n.substring(0,n.length-1)+"=":r.length%3==1&&(n=n.substring(0,n.length-2)+"=="),n}function B(e,t){var r="";if(e&&(r=De.call(e)),e&&("[object ArrayBuffer]"===r||e.buffer&&"[object ArrayBuffer]"===De.call(e.buffer))){var n,o=de;e instanceof ArrayBuffer?(n=e,o+=he):(n=e.buffer,"[object Int8Array]"===r?o+=pe:"[object Uint8Array]"===r?o+=be:"[object Uint8ClampedArray]"===r?o+=ge:"[object Int16Array]"===r?o+=me:"[object Uint16Array]"===r?o+=_e:"[object Int32Array]"===r?o+=we:"[object Uint32Array]"===r?o+=Se:"[object Float32Array]"===r?o+=Ee:"[object Float64Array]"===r?o+=Ie:t(new Error("Failed to get type for BinaryArray"))),t(o+k(n))}else if("[object Blob]"===r){var i=new FileReader;i.onload=function(){var r=se+e.type+"~"+k(this.result);t(de+ye+r)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(r){console.error("Couldn't convert value into a JSON string: ",e),t(null,r)}}function R(e){if(e.substring(0,ve)!==de)return JSON.parse(e);var t,r=e.substring(Ae),n=e.substring(ve,Ae);if(n===ye&&le.test(r)){var i=r.match(le);t=i[1],r=r.substring(i[0].length)}var a=O(r);switch(n){case he:return a;case ye:return o([a],{type:t});case pe:return new Int8Array(a);case be:return new Uint8Array(a);case ge:return new Uint8ClampedArray(a);case me:return new Int16Array(a);case _e:return new Uint16Array(a);case we:return new Int32Array(a);case Se:return new Uint32Array(a);case Ee:return new Float32Array(a);case Ie:return new Float64Array(a);default:throw new Error("Unkown type: "+n)}}function x(e){var t=this,r={db:null};if(e)for(var n in e)r[n]="string"!=typeof e[n]?e[n].toString():e[n];var o=new ie(function(e,n){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(e){return n(e)}r.db.transaction(function(o){o.executeSql("CREATE TABLE IF NOT EXISTS "+r.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){t._dbInfo=r,e()},function(e,t){n(t)})})});return r.serializer=je,o}function C(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=new ie(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){r.executeSql("SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],function(e,r){var n=r.rows.length?r.rows.item(0).value:null;n&&(n=o.serializer.deserialize(n)),t(n)},function(e,t){n(t)})})}).catch(n)});return i(n,t),n}function L(e,t){var r=this,n=new ie(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){r.executeSql("SELECT * FROM "+o.storeName,[],function(r,n){for(var i=n.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1)))return void t(f)}t()},function(e,t){n(t)})})}).catch(n)});return i(n,t),n}function T(e,t,r,n){var o=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var a=new ie(function(i,a){o.ready().then(function(){void 0===t&&(t=null);var u=t,c=o._dbInfo;c.serializer.serialize(t,function(t,f){f?a(f):c.db.transaction(function(r){r.executeSql("INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,t],function(){i(u)},function(e,t){a(t)})},function(t){if(t.code===t.QUOTA_ERR){if(n>0)return void i(T.apply(o,[e,u,r,n-1]));a(t)}})})}).catch(a)});return i(a,r),a}function F(e,t,r){return T.apply(this,[e,t,r,1])}function z(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=new ie(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){r.executeSql("DELETE FROM "+o.storeName+" WHERE key = ?",[e],function(){t()},function(e,t){n(t)})})}).catch(n)});return i(n,t),n}function M(e){var t=this,r=new ie(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(t){t.executeSql("DELETE FROM "+n.storeName,[],function(){e()},function(e,t){r(t)})})}).catch(r)});return i(r,e),r}function P(e){var t=this,r=new ie(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(t){t.executeSql("SELECT COUNT(key) as c FROM "+n.storeName,[],function(t,r){var n=r.rows.item(0).c;e(n)},function(e,t){r(t)})})}).catch(r)});return i(r,e),r}function U(e,t){var r=this,n=new ie(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){r.executeSql("SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,r){var n=r.rows.length?r.rows.item(0).key:null;t(n)},function(e,t){n(t)})})}).catch(n)});return i(n,t),n}function W(e){var t=this,r=new ie(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(t){t.executeSql("SELECT key FROM "+n.storeName,[],function(t,r){for(var n=[],o=0;o<r.rows.length;o++)n.push(r.rows.item(o).key);e(n)},function(e,t){r(t)})})}).catch(r)});return i(r,e),r}function q(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=r.name+"/",r.storeName!==t._defaultConfig.storeName&&(r.keyPrefix+=r.storeName+"/"),t._dbInfo=r,r.serializer=je,ie.resolve()}function Q(e){var t=this,r=t.ready().then(function(){for(var e=t._dbInfo.keyPrefix,r=localStorage.length-1;r>=0;r--){var n=localStorage.key(r);0===n.indexOf(e)&&localStorage.removeItem(n)}});return i(r,e),r}function G(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=r.ready().then(function(){var t=r._dbInfo,n=localStorage.getItem(t.keyPrefix+e);return n&&(n=t.serializer.deserialize(n)),n});return i(n,t),n}function X(e,t){var r=this,n=r.ready().then(function(){for(var t=r._dbInfo,n=t.keyPrefix,o=n.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(n)){var f=localStorage.getItem(c);if(f&&(f=t.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}});return i(n,t),n}function J(e,t){var r=this,n=r.ready().then(function(){var t,n=r._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(n.keyPrefix.length)),t});return i(n,t),n}function H(e){var t=this,r=t.ready().then(function(){for(var e=t._dbInfo,r=localStorage.length,n=[],o=0;o<r;o++)0===localStorage.key(o).indexOf(e.keyPrefix)&&n.push(localStorage.key(o).substring(e.keyPrefix.length));return n});return i(r,e),r}function K(e){var t=this,r=t.keys().then(function(e){return e.length});return i(r,e),r}function V(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=r.ready().then(function(){var t=r._dbInfo;localStorage.removeItem(t.keyPrefix+e)});return i(n,t),n}function Y(e,t,r){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var o=n.ready().then(function(){void 0===t&&(t=null);var r=t;return new ie(function(o,i){var a=n._dbInfo;a.serializer.serialize(t,function(t,n){if(n)i(n);else try{localStorage.setItem(a.keyPrefix+e,t),o(r)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}})})});return i(o,r),o}function Z(e,t){e[t]=function(){var r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function $(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var r in t)t.hasOwnProperty(r)&&(Te(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}function ee(e){for(var t in Be)if(Be.hasOwnProperty(t)&&Be[t]===e)return!0;return!1}var te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){}}();"undefined"==typeof Promise&&e(3);var ne,oe,ie=Promise,ae="local-forage-detect-blob-support",ue=Object.prototype.toString,ce={_driver:"asyncStorage",_initStorage:w,iterate:S,getItem:_,setItem:E,removeItem:I,clear:A,length:D,key:j,keys:N},fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",se="~~local_forage_type~",le=/^~~local_forage_type~([^~]+)~/,de="__lfsc__:",ve=de.length,he="arbf",ye="blob",pe="si08",be="ui08",ge="uic8",me="si16",we="si32",_e="ur16",Se="ui32",Ee="fl32",Ie="fl64",Ae=ve+he.length,De=Object.prototype.toString,je={serialize:B,deserialize:R,stringToBuffer:O,bufferToString:k},Ne={_driver:"webSQLStorage",_initStorage:x,iterate:L,getItem:C,setItem:F,removeItem:z,clear:M,length:P,key:U,keys:W},Oe={_driver:"localStorageWrapper",_initStorage:q,iterate:X,getItem:G,setItem:Y,removeItem:V,clear:Q,length:K,key:J,keys:H},ke={},Be={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},Re=[Be.INDEXEDDB,Be.WEBSQL,Be.LOCALSTORAGE],xe=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],Ce={description:"",driver:Re.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},Le={};Le[Be.INDEXEDDB]=function(){try{if(!re)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),Le[Be.WEBSQL]=function(){return"function"==typeof openDatabase}(),Le[Be.LOCALSTORAGE]=function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&localStorage.setItem}catch(e){return!1}}();var Te=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Fe=function(){function e(t){n(this,e),this.INDEXEDDB=Be.INDEXEDDB,this.LOCALSTORAGE=Be.LOCALSTORAGE,this.WEBSQL=Be.WEBSQL,this._defaultConfig=$({},Ce),this._config=$({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":te(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e&&e.driver)||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,r){var n=new ie(function(t,r){try{var n=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),i=new Error("Custom driver name already in use: "+e._driver);if(!e._driver)return void r(o);if(ee(e._driver))return void r(i);for(var a=xe.concat("_initStorage"),u=0;u<a.length;u++){var c=a[u];if(!c||!e[c]||"function"!=typeof e[c])return void r(o)}var f=ie.resolve(!0);"_support"in e&&(f=e._support&&"function"==typeof e._support?e._support():ie.resolve(!!e._support)),f.then(function(r){Le[n]=r,ke[n]=e,t()},r)}catch(e){r(e)}});return a(n,t,r),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,r){var n=this,o=ie.resolve().then(function(){if(!ee(e)){if(ke[e])return ke[e];throw new Error("Driver not found.")}switch(e){case n.INDEXEDDB:return ce;case n.LOCALSTORAGE:return Oe;case n.WEBSQL:return Ne}});return a(o,t,r),o},e.prototype.getSerializer=function(e){var t=ie.resolve(je);return a(t,e),t},e.prototype.ready=function(e){var t=this,r=t._driverSet.then(function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready});return a(r,e,e),r},e.prototype.setDriver=function(e,t,r){function n(){u._config.driver=u.driver()}function o(e){return u._extend(e),n(),u._ready=u._initStorage(u._config),u._ready}function i(e){return function(){function t(){for(;r<e.length;){var i=e[r];return r++,u._dbInfo=null,u._ready=null,u.getDriver(i).then(o).catch(t)}n();var a=new Error("No available storage method found.");return u._driverSet=ie.reject(a),u._driverSet}var r=0;return t()}}var u=this;Te(e)||(e=[e]);var c=this._getSupportedDrivers(e),f=null!==this._driverSet?this._driverSet.catch(function(){return ie.resolve()}):ie.resolve();return this._driverSet=f.then(function(){var e=c[0];return u._dbInfo=null,u._ready=null,u.getDriver(e).then(function(e){u._driver=e._driver,n(),u._wrapLibraryMethodsWithReady(),u._initDriver=i(c)})}).catch(function(){n();var e=new Error("No available storage method found.");return u._driverSet=ie.reject(e),u._driverSet}),a(this._driverSet,t,r),this._driverSet},e.prototype.supports=function(e){return!!Le[e]},e.prototype._extend=function(e){$(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],r=0,n=e.length;r<n;r++){var o=e[r];this.supports(o)&&t.push(o)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0;e<xe.length;e++)Z(this,xe[e])},e.prototype.createInstance=function(t){return new e(t)},e}(),ze=new Fe;t.exports=ze},{3:3}]},{},[4])(4)})}).call(t,r(100))}});