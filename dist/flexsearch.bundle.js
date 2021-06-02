/**!
 * FlexSearch.js v0.7.0-beta (Bundle)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function _f(self){'use strict';try{if(module)self=module}catch(e){}self._factory=_f;var r;function v(a){return"undefined"!==typeof a?a:!0}function w(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=y();return b}function y(){return Object.create(null)}function aa(a,b){return b.length-a.length}function C(a){return"string"===typeof a}function D(a){return"object"===typeof a}function E(a){return"function"===typeof a};const ba=/[\u0300-\u036f]/g;function ca(a){a.normalize&&(a=a.normalize("NFD").replace(ba,""));return a}function da(a,b){const c=Object.keys(a),d=c.length,e=[];let f="",g=0;for(let h=0,l,m;h<d;h++)l=c[h],(m=a[l])?(e[g++]=F(b?"(?!\\b)"+l+"(\\b|_)":l),e[g++]=m):f+=(f?"|":"")+l;f&&(e[g++]=F(b?"(?!\\b)("+f+")(\\b|_)":"("+f+")"),e[g]="");return e}function H(a,b){for(let c=0,d=b.length;c<d&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a}function F(a){return new RegExp(a,"g")}
function ea(a){let b="",c="";for(let d=0,e=a.length,f;d<e;d++)(f=a[d])!==c&&(b+=c=f);return b};var ha={encode:fa,B:!1,C:""};const ia=/[\W_]+/;function fa(a){return ja(this,ca(a).toLowerCase(),!1,ia)};const ka={},I={};function la(a){J(a,"add");J(a,"append");J(a,"search");J(a,"update");J(a,"remove")}function J(a,b){a[b+"Async"]=function(){const c=this,d=arguments;var e=d[d.length-1];let f;E(e)&&(f=e,delete d[d.length-1]);e=new Promise(function(g){setTimeout(function(){c.async=!0;const h=c[b].apply(c,d);c.async=!1;g(h)})});return f?(e.then(f),this):e}};function ma(a,b,c,d){const e=a.length;let f=[],g;let h,l;for(var m=0;m<e;m++){var n=a[m],u=n.length,t=0;for(let k=0,p;k<u;k++)(p=n[k])&&(t+=p.length);if(!q||t<q){var q=t;h=n;l=m}}h=1===h.length?h[0]:[].concat.apply([],h);d&&(d=[h],g=y());m=q=0;for(n=e-1;0<=n;n--)if(n!==l){m++;u=a[n];t=u.length;const k=[];let p=0;for(let x=0,z;x<h.length;x++){z=h[x];let A;for(let B=0;B<t;B++){const G=u[B];if(G.length&&(A=-1!==G.indexOf(z))){if(m===e-1){if(c)c--;else if(f[q++]=z,q===b)return f;d&&(g[z]=1)}break}}A&&
(k[p++]=z)}if(d)d[m]=k;else if(!p)return[];h=k}if(d)for(let k=d.length-1,p,x;0<=k;k--)if(x=(p=d[k])&&p.length)for(let z=0,A;z<x;z++)if(A=p[z],!g[A])if(g[A]=1,c)c--;else if(f[q++]=A,q===b)return f;return f}function na(a,b){const c=y(),d=y(),e=[];for(let f=0;f<a.length;f++)c[a[f]]=1;for(let f=0,g;f<b.length;f++){g=b[f];for(let h=0,l;h<g.length;h++)l=g[h],c[l]&&!d[l]&&(d[l]=1,e[e.length]=l)}return e};function K(a){this.l=!0!==a&&a;this.cache=y();this.h=[]}function oa(a,b,c){D(a)&&(a=a.query);let d=this.cache.get(a);d||(d=this.search(a,b,c),this.cache.set(a,d));return d}K.prototype.set=function(a,b){if(!this.cache[a]){var c=this.h.length;c===this.l?delete this.cache[this.h[c-1]]:c++;for(--c;0<c;c--)this.h[c]=this.h[c-1];this.h[0]=a}this.cache[a]=b};K.prototype.get=function(a){const b=this.cache[a];if(this.l&&b&&(a=this.h.indexOf(a))){const c=this.h[a-1];this.h[a-1]=this.h[a];this.h[a]=c}return b};const qa={memory:{charset:"latin:extra",D:3,A:3,o:!1,s:"memory"},performance:{threshold:8,A:3,context:{depth:1,F:!0}},match:{charset:"latin:extra",C:"full",D:3},score:{charset:"latin:advanced",threshold:1,context:{depth:3,F:!0}},"default":{D:3,threshold:0,depth:3}};function ra(a,b,c,d,e,f){setTimeout(function(){const g=a(c,JSON.stringify(f));g&&g.then?g.then(function(){b.export(a,b,c,d,e+1)}):b.export(a,b,c,d,e+1)})};function L(a,b){if(!(this instanceof L))return new L(a);var c;if(a){C(a)?a=qa[a]:(c=a.preset)&&(a=Object.assign({},c[c],a));c=a.charset;var d=a.lang;C(c)&&(-1===c.indexOf(":")&&(c+=":default"),c=I[c]);C(d)&&(d=ka[d])}else a={};let e,f,g=a.context||{};this.encode=a.encode||c&&c.encode||fa;this.register=b||y();this.D=e=a.resolution||9;this.C=b=c&&c.C||a.tokenize||"strict";this.depth="strict"===b&&g.depth;this.F=v(g.bidirectional);this.s=f=v(a.optimize);this.o=v(a.fastupdate);this.A=a.minlength||1;this.map=
f?w(e):y();this.l=e=g.resolution||1;this.h=f?w(e):y();this.B=c&&c.B||a.rtl;this.I=(b=a.matcher||d&&d.I)&&da(b,!1);this.K=(b=a.stemmer||d&&d.K)&&da(b,!0);if(c=b=a.filter||d&&d.filter){c=b;d=y();for(let h=0,l=c.length;h<l;h++)d[c[h]]=1;c=d}this.filter=c;this.cache=(b=a.cache)&&new K(b)}
function ja(a,b,c,d){if(b&&(c&&(b=H(b,c)),a.I&&(b=H(b,a.I)),a.K&&1<b.length&&(b=H(b,a.K)),d||""===d)){b=b.split(d);if(a.filter){a=a.filter;c=b.length;d=[];for(let e=0,f=0;e<c;e++){const g=b[e];g&&!a[g]&&(d[f++]=g)}a=d}else a=b;return a}return b}r=L.prototype;r.append=function(a,b){return this.add(a,b,!0)};
r.add=function(a,b,c,d){if(!d&&!c&&this.register[a])return this.update(a,b);if(b&&(a||0===a)&&(b=this.encode(b),d=b.length)){const m=this.depth,n=this.D,u=y(),t=y();for(let q=0;q<d;q++){let k=b[this.B?d-1-q:q];var e=k.length;if(k&&e>=this.A&&(m||!u[k])){var f=d<n?q:n/d*q|0,g="";switch(this.C){case "full":if(3<e){for(f=0;f<e;f++)for(var h=e;h>f;h--)if(h-f>=this.A){var l=d+e<n?q+f:n/(d+e)*(q+f)|0;g=k.substring(f,h);M(this,u,g,l,a,c)}break}case "reverse":if(2<e){for(h=e-1;0<h;h--)g=k[h]+g,g.length>=
this.A&&M(this,u,g,d+e<n?q+h:n/(d+e)*(q+h)|0,a,c);g=""}case "forward":if(1<e)for(h=0;h<e;h++)g+=k[h],g.length>=this.A&&M(this,u,g,f,a,c);break;default:if(M(this,u,k,f,a,c),m&&1<d&&q<d-1)for(e=this.l,g=y(),f=k,h=Math.min(m+1,d-q),g[f]=1,l=1;l<h;l++)if((k=b[this.B?d-1-q-l:q+l])&&k.length>=this.A&&!g[k]){g[k]=1;const p=this.F&&k>f;M(this,t,p?f:k,h+d<e?q+(l-1):e/(h+d)*(q+l)|0,a,c,p?k:f)}}}}this.o||(this.register[a]=1)}return this};
function M(a,b,c,d,e,f,g){let h=g?a.h:a.map;if(!b[c]||g&&!b[c][g])a.s&&(h=h[d]),g?(b=b[c]||(b[c]=y()),b[g]=1,h=h[g]||(h[g]=y())):b[c]=1,h=h[c]||(h[c]=[]),a.s||(h=h[d]||(h[d]=[])),f&&-1!==h.indexOf(e)||(h[h.length]=e,a.o&&(a=a.register[e]||(a.register[e]=[]),a[a.length]=h))}
r.search=function(a,b,c){D(a)?(c=a,a=c.query):D(b)&&(c=b);let d=[],e;let f,g=0;if(c){b=c.limit;g=c.offset||0;var h=c.context;f=c.suggest}if(a&&(a=this.encode(a),e=a.length,1<e)){c=y();var l=[];for(let n=0,u=0,t;n<e;n++)if((t=a[n])&&t.length>=this.A&&!c[t])if(this.s||f||this.map[t])l[u++]=t,c[t]=1;else return d;a=l;e=a.length}if(!e)return d;b||(b=100);h=this.depth&&1<e&&!1!==h;c=0;let m;h?(m=a[0],c=1):1<e&&a.sort(aa);for(let n,u;c<e;c++){u=a[c];h?(n=sa(this,d,f,b,g,2===e,u,m),f&&!1===n&&d.length||
(m=u)):n=sa(this,d,f,b,g,1===e,u);if(n)return n;if(f&&c===e-1){l=d.length;if(!l){if(h){h=0;c=-1;continue}return d}if(1===l)return ta(d[0],b,g)}}return ma(d,b,g,f)};
function sa(a,b,c,d,e,f,g,h){let l=[],m=h?a.h:a.map;a.s||(m=ua(m,g,h,a.F));if(m){let n=0;const u=Math.min(m.length,h?a.l:a.D);for(let t=0,q=0,k,p;t<u;t++)if(k=m[t])if(a.s&&(k=ua(k,g,h,a.F)),e&&k&&f&&(p=k.length,p<=e?(e-=p,k=null):(k=k.slice(e),e=0)),k&&(l[n++]=k,f&&(q+=k.length,q>=d)))break;if(n){if(f)return ta(l,d,0);b[b.length]=l;return}}return!c&&l}function ta(a,b,c){a=1===a.length?a[0]:[].concat.apply([],a);return c||a.length>b?a.slice(c,c+b):a}
function ua(a,b,c,d){c?(d=d&&b>c,a=(a=a[d?b:c])&&a[d?c:b]):a=a[b];return a}r.contain=function(a){return!!this.register[a]};r.update=function(a,b){return this.remove(a).add(a,b)};
r.remove=function(a,b){const c=this.register[a];if(c){if(this.o)for(let d=0,e;d<c.length;d++)e=c[d],e.splice(e.indexOf(a),1);else N(this.map,a,this.D,this.s),this.depth&&N(this.h,a,this.l,this.s);b||delete this.register[a];if(this.cache){b=this.cache;for(let d=0,e,f;d<b.h.length;d++)f=b.h[d],e=b.cache[f],-1!==e.indexOf(a)&&(b.h.splice(d--,1),delete b.cache[f])}}return this};
function N(a,b,c,d,e){let f=0;if(a.constructor===Array)if(e)b=a.indexOf(b),-1!==b?1<a.length&&(a.splice(b,1),f++):f++;else{e=Math.min(a.length,c);for(let g=0,h;g<e;g++)if(h=a[g])f=N(h,b,c,d,e),d||f||delete a[g]}else for(let g in a)(f=N(a[g],b,c,d,e))||delete a[g];return f}r.searchCache=oa;
r.export=function(a,b,c,d,e){let f,g;switch(e||(e=0)){case 0:f="reg";if(this.o){g=y();for(let h in this.register)g[h]=1}else g=this.register;break;case 1:f="cfg";g={doc:0,opt:this.s?1:0};break;case 2:f="map";g=this.map;break;case 3:f="ctx";g=this.h;break;default:return}ra(a,b||this,c?c+"."+f:f,d,e,g);return!0};r.import=function(a,b){if(b)switch(C(b)&&(b=JSON.parse(b)),a){case "cfg":this.s=!!b.opt;break;case "reg":this.o=!1;this.register=b;break;case "map":this.map=b;break;case "ctx":this.h=b}};la(L.prototype);function va(a){a=a.data;var b=self._index;const c=a.args;var d=a.task;switch(d){case "init":d=a.options||{};a=a.factory;b=d.encode;d.cache=!1;b&&0===b.indexOf("function")&&(d.encode=Function("return "+b)());a?(Function("return "+a)()(self),self._index=new self.FlexSearch.Index(d),delete self.FlexSearch):self._index=new L(d);break;default:a=a.id,b=b[d].apply(b,c),postMessage("search"===d?{id:a,msg:b}:{id:a})}};let wa=0;function O(a){var b;a?E(b=a.encode)&&(a.encode=b.toString()):a={};(b=(self||window)._factory)&&(b=b.toString());const c=self.exports,d=this;this.m=xa(b,c,a.worker);this.h=y();if(this.m){if(c)this.m.on("message",function(e){d.h[e.id](e.msg);delete d.h[e.id]});else this.m.onmessage=function(e){e=e.data;d.h[e.id](e.msg);delete d.h[e.id]};this.m.postMessage({task:"init",factory:b,options:a})}}P("add");P("append");P("search");P("update");P("remove");
function P(a){O.prototype[a]=O.prototype[a+"Async"]=function(){const b=this,c=[].slice.call(arguments);var d=c[c.length-1];let e;E(d)&&(e=d,c.splice(c.length-1,1));d=new Promise(function(f){setTimeout(function(){b.h[++wa]=f;b.m.postMessage({task:a,id:wa,args:c})})});return e?(d.then(e),this):d}}
function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(C(c)?c:"worker/worker.js",{type:"module"})}catch(e){}return d};function R(a){if(!(this instanceof R))return new R(a);var b=a.document||a.doc||a,c;this.L=[];this.h=[];this.G=[];this.register=y();this.key=(c=b.key||b.id)&&S(c,this.G)||"id";this.o=v(a.fastupdate);this.H=(c=b.store)&&!0!==c&&[];this.store=c&&y();this.J=(c=b.tag)&&S(c,this.G);this.l=c&&y();this.cache=(c=a.cache)&&new K(c);a.cache=!1;this.m=a.worker;this.async=!1;c=y();let d=b.index||b.field||b;C(d)&&(d=[d]);for(let e=0,f,g;e<d.length;e++)f=d[e],C(f)||(g=f,f=f.field),g=D(g)?Object.assign({},a,g):a,
this.m&&(c[f]=new O(g),c[f].m||(this.m=!1)),this.m||(c[f]=new L(g,this.register)),this.L[e]=S(f,this.G),this.h[e]=f;if(this.H)for(a=b.store,C(a)&&(a=[a]),b=0;b<a.length;b++)this.H[b]=S(a[b],this.G);this.index=c}function S(a,b){const c=a.split(":");let d=0;for(let e=0;e<c.length;e++)a=c[e],0<=a.indexOf("[]")&&(a=a.substring(0,a.length-2))&&(b[d]=!0),a&&(c[d++]=a);d<c.length&&(c.length=d);return 1<d?c:c[0]}function T(a,b){if(C(b))a=a[b];else for(let c=0;a&&c<b.length;c++)a=a[b[c]];return a}
function U(a,b,c,d,e){a=a[e];if(d===c.length-1)b[e]=a;else if(a)if(a.constructor===Array)for(b=b[e]=Array(a.length),e=0;e<a.length;e++)U(a,b,c,d,e);else b=b[e]||(b[e]=y()),e=c[++d],U(a,b,c,d,e)}function V(a,b,c,d,e,f,g,h){a=a[g];if(d===b.length-1){if(a.constructor===Array){if(c[d]){for(b=0;b<a.length;b++)e.add(f,a[b],!0,!0);return}a=a.join(" ")}e.add(f,a,h,!0)}else if(a)if(a.constructor===Array)for(g=0;g<a.length;g++)V(a,b,c,d,e,f,g,h);else g=b[++d],V(a,b,c,d,e,f,g,h)}r=R.prototype;
r.add=function(a,b,c){D(a)&&(b=a,a=T(b,this.key));if(b&&(a||0===a)){if(this.register[a])return this.update(a,b);for(let d=0,e,f;d<this.h.length;d++)f=this.h[d],e=this.L[d],C(e)&&(e=[e]),V(b,e,this.G,0,this.index[f],a,e[0],c);if(this.J){let d=T(b,this.J),e=y();C(d)&&(d=[d]);for(let f=0,g,h;f<d.length;f++)if(g=d[f],!e[g]&&(e[g]=1,h=this.l[g]||(this.l[g]=[]),!c||-1===h.indexOf(a)))if(h[h.length]=a,this.o){const l=this.register[a]||(this.register[a]=[]);l[l.length]=h}}if(this.store){let d;if(this.H){d=
y();for(let e=0,f;e<this.H.length;e++)f=this.H[e],C(f)?d[f]=b[f]:U(b,d,f,0,f[0])}this.store[a]=d||b}}return this};r.append=function(a,b){return this.add(a,b,!0)};r.update=function(a,b){return this.remove(a).add(a,b)};
r.remove=function(a){D(a)&&(a=T(a,this.key));if(this.register[a]){var b=this.o&&!this.m;for(var c=0;c<this.h.length&&(this.index[this.h[c]].remove(a,b),!b);c++);if(this.J&&!b)for(let d in this.l)b=this.l[d],c=b.indexOf(a),-1!==c&&(1<b.length?b.splice(c,1):delete this.l[d]);this.store&&delete this.store[a];delete this.register[a]}return this};
r.search=function(a,b,c,d){D(a)?(c=a,a=c.query):D(b)&&(c=b,b=0);let e=[],f=[],g,h,l,m,n,u,t=0;if(c)if(c.constructor===Array)l=c,c=null;else{l=(g=c.pluck)||c.index||c.field||c;m=c.tag;h=this.store&&c.enrich;n="and"===c.bool;b=c.limit||100;u=c.offset||0;if(m&&(C(m)&&(m=[m]),!a)){for(let k=0,p;k<m.length;k++)if(p=ya.call(this,m[k],b,u,h))e[e.length]=p,t++;return t?e:[]}C(l)?l=[l]:l.constructor===Array||(l=null)}l||(l=this.h);n=n&&(1<l.length||m&&1<m.length);const q=!d&&(this.m||this.async)&&[];for(let k=
0,p,x,z;k<l.length;k++){let A;x=l[k];C(x)||(A=x,x=x.field);if(q)q[k]=this.index[x].searchAsync(a,b,A||c);else{d?p=d[k]:p=this.index[x].search(a,b,A||c);z=p&&p.length;if(m&&z){const B=[];let G=0;n&&(B[0]=[p]);for(let W=0,pa,Q;W<m.length;W++)if(pa=m[W],z=(Q=this.l[pa])&&Q.length)G++,B[B.length]=n?[Q]:Q;G&&(p=n?ma(B,b||100,u||0):na(p,B),z=p.length)}if(z)f[t]=x,e[t++]=p;else if(n)return[]}}if(q){const k=this;return new Promise(function(p){Promise.all(q).then(function(x){p(k.search(a,b,c,x))})})}if(!t)return[];
if(g&&(!h||!this.store))return e[0];for(let k=0,p;k<f.length;k++){p=e[k];p.length&&h&&(p=za.call(this,p));if(g)return p;e[k]={field:f[k],result:p}}return e};function ya(a,b,c,d){let e=this.l[a],f=e&&e.length-c;if(f&&0<f){if(f>b||c)e=e.slice(c,c+b);d&&(e=za.call(this,e));return{tag:a,result:e}}}function za(a){const b=Array(a.length);for(let c=0,d;c<a.length;c++)d=a[c],b[c]={key:d,doc:this.store[d]};return b}r.contain=function(a){return!!this.register[a]};r.get=function(a){return this.store[a]};
r.set=function(a,b){this.store[a]=b;return this};r.searchCache=oa;r.export=function(a,b,c,d,e){e||(e=0);d||(d=0);if(d<this.h.length){const f=this.h[d],g=this.index[f];b=this;setTimeout(function(){g.export(a,b,e?f.replace(":","-"):"",d,e++)||(d++,e=1,b.export(a,b,f,d,e))})}else{let f;switch(e){case 1:c="tag";f=this.l;break;case 2:c="store";f=this.store;break;default:return}ra(a,this,c,d,e,f)}};
r.import=function(a,b){if(b)switch(C(b)&&(b=JSON.parse(b)),a){case "tag":this.l=b;break;case "reg":this.o=!1;this.register=b;for(let d=0,e;d<this.h.length;d++)e=this.index[this.h[d]],e.register=b,e.o=!1;break;case "store":this.store=b;break;default:a=a.split(".");const c=a[0];a=a[1];c&&a&&this.index[c].import(a,b)}};la(R.prototype);var Ba={encode:Aa,B:!1,C:""};const Ca=/[\W_]+/,Da=[F("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",F("[\u00e8\u00e9\u00ea\u00eb]"),"e",F("[\u00ec\u00ed\u00ee\u00ef]"),"i",F("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",F("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",F("[\u00fd\u0177\u00ff]"),"y",F("\u00f1"),"n",F("[\u00e7c]"),"k",F("\u00df"),"s",F(" & ")," and "];function Aa(a){return ja(this,ca(a).toLowerCase(),!a.normalize&&Da,Ca)};var Fa={encode:Ea,B:!1,C:"strict"};const Ga=/[^a-z0-9]+/,Ha={b:"p",v:"f",w:"f",z:"s",x:"s","\u00df":"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Ea(a){a=Aa.call(this,a).join(" ");const b=[];if(a){const c=a.split(Ga),d=c.length;for(let e=0,f,g=0;e<d;e++)if((a=c[e])&&(!this.filter||!this.filter[a])){f=a[0];let h=Ha[f]||f,l=h;for(let m=1;m<a.length;m++){f=a[m];const n=Ha[f]||f;n&&n!==l&&(h+=n,l=n)}b[g++]=h}}return b};var Ja={encode:Ia,B:!1,C:""};const Ka=[F("ae"),"a",F("oe"),"o",F("sh"),"s",F("th"),"t",F("ph"),"f",F("pf"),"f"];function Ia(a,b){a&&(a=Ea.call(this,a).join(" "),2<a.length&&(a=H(a,Ka)),b||(1<a.length&&(a=ea(a)),a&&(a=a.split(" "))));return a};var Ma={encode:La,B:!1,C:""};const Na=F("(?!\\b)[aeiouy]");function La(a){a&&(a=Ia.call(this,a,!0),1<a.length&&(a=a.replace(Na,"")),1<a.length&&(a=ea(a)),a&&(a=a.split(" ")));return a};I["latin:default"]=ha;I["latin:simple"]=Ba;I["latin:balance"]=Fa;I["latin:advanced"]=Ja;I["latin:extra"]=Ma;const X=self;let Y;const Z={Index:L,Document:R,Worker:O,registerCharset:function(a,b){I[a]=b},registerLanguage:function(a,b){ka[a]=b}};(Y=X.define)&&Y.amd?Y([],function(){return Z}):X.exports?X.exports=Z:X.FlexSearch=Z;}(this));
