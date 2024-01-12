"use strict";(self.webpackChunkprime_lib_doc=self.webpackChunkprime_lib_doc||[]).push([[9862],{9862:(Be,ce,m)=>{m.d(ce,{JF:()=>Fe,eN:()=>G});var c=m(4946),X=m(2096),ue=m(7715),le=m(5592),de=m(6328),he=m(2181),O=m(7398),B=m(4716),pe=m(4664),A=m(6814);class S{}class M{}class E{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const n=t.slice(0,r),i=n.toLowerCase(),o=t.slice(r+1).trim();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof E?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new E;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof E?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);const n=("a"===e.op?this.headers.get(t):void 0)||[];n.push(...r),this.headers.set(t,n);break;case"d":const i=e.value;if(i){let o=this.headers.get(t);if(!o)return;o=o.filter(l=>-1===i.indexOf(l)),0===o.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(e,t){const r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),n=e.toLowerCase();this.headers.set(n,r),this.maybeSetNormalizedName(e,n)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class fe{encodeKey(e){return z(e)}encodeValue(e){return z(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const me=/%(\d[a-f0-9])/gi,Ee={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function z(s){return encodeURIComponent(s).replace(me,(e,t)=>Ee[t]??e)}function N(s){return`${s}`}class g{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new fe,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ye(s,e){const t=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const i=n.indexOf("="),[o,l]=-1==i?[e.decodeKey(n),""]:[e.decodeKey(n.slice(0,i)),e.decodeValue(n.slice(i+1))],a=t.get(o)||[];a.push(l),t.set(o,a)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const r=e.fromObject[t],n=Array.isArray(r)?r.map(N):[N(r)];this.map.set(t,n)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(r=>{const n=e[r];Array.isArray(n)?n.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:n,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new g({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(N(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const n=r.indexOf(N(e.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class ge{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function q(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function W(s){return typeof Blob<"u"&&s instanceof Blob}function K(s){return typeof FormData<"u"&&s instanceof FormData}class P{constructor(e,t,r,n){let i;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function be(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,i=n):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new E),this.context||(this.context=new ge),this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=t;else{const l=t.indexOf("?");this.urlWithParams=t+(-1===l?"?":l<t.length-1?"&":"")+o}}else this.params=new g,this.urlWithParams=t}serializeBody(){return null===this.body?null:q(this.body)||W(this.body)||K(this.body)||function Te(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof g?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||K(this.body)?null:W(this.body)?this.body.type||null:q(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof g?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,r=e.url||this.url,n=e.responseType||this.responseType,i=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,l=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let a=e.headers||this.headers,p=e.params||this.params;const R=e.context??this.context;return void 0!==e.setHeaders&&(a=Object.keys(e.setHeaders).reduce((f,y)=>f.set(y,e.setHeaders[y]),a)),e.setParams&&(p=Object.keys(e.setParams).reduce((f,y)=>f.set(y,e.setParams[y]),p)),new P(t,r,i,{params:p,headers:a,context:R,reportProgress:l,responseType:n,withCredentials:o})}}var w=function(s){return s[s.Sent=0]="Sent",s[s.UploadProgress=1]="UploadProgress",s[s.ResponseHeader=2]="ResponseHeader",s[s.DownloadProgress=3]="DownloadProgress",s[s.Response=4]="Response",s[s.User=5]="User",s}(w||{});class I{constructor(e,t=200,r="OK"){this.headers=e.headers||new E,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class L extends I{constructor(e={}){super(e),this.type=w.ResponseHeader}clone(e={}){return new L({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class C extends I{constructor(e={}){super(e),this.type=w.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new C({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class V extends I{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function F(s,e){return{body:e,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let G=(()=>{class s{constructor(t){this.handler=t}request(t,r,n={}){let i;if(t instanceof P)i=t;else{let a,p;a=n.headers instanceof E?n.headers:new E(n.headers),n.params&&(p=n.params instanceof g?n.params:new g({fromObject:n.params})),i=new P(t,r,void 0!==n.body?n.body:null,{headers:a,context:n.context,params:p,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const o=(0,X.of)(i).pipe((0,de.b)(a=>this.handler.handle(a)));if(t instanceof P||"events"===n.observe)return o;const l=o.pipe((0,he.h)(a=>a instanceof C));switch(n.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe((0,O.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return l.pipe((0,O.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return l.pipe((0,O.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return l.pipe((0,O.U)(a=>a.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new g).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,n={}){return this.request("PATCH",t,F(n,r))}post(t,r,n={}){return this.request("POST",t,F(n,r))}put(t,r,n={}){return this.request("PUT",t,F(n,r))}static#e=this.\u0275fac=function(r){return new(r||s)(c.LFG(S))};static#t=this.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac})}return s})();function Z(s,e){return e(s)}function we(s,e){return(t,r)=>e.intercept(t,{handle:n=>s(n,r)})}const Re=new c.OlP(""),_=new c.OlP(""),Q=new c.OlP("");function Pe(){let s=null;return(e,t)=>{null===s&&(s=((0,c.f3M)(Re,{optional:!0})??[]).reduceRight(we,Z));const r=(0,c.f3M)(c.HDt),n=r.add();return s(e,t).pipe((0,B.x)(()=>r.remove(n)))}}let ee=(()=>{class s extends S{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=(0,c.f3M)(c.HDt)}handle(t){if(null===this.chain){const n=Array.from(new Set([...this.injector.get(_),...this.injector.get(Q,[])]));this.chain=n.reduceRight((i,o)=>function Ce(s,e,t){return(r,n)=>t.runInContext(()=>e(r,i=>s(i,n)))}(i,o,this.injector),Z)}const r=this.pendingTasks.add();return this.chain(t,n=>this.backend.handle(n)).pipe((0,B.x)(()=>this.pendingTasks.remove(r)))}static#e=this.\u0275fac=function(r){return new(r||s)(c.LFG(M),c.LFG(c.lqb))};static#t=this.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac})}return s})();const Se=/^\)\]\}',?\n/;let se=(()=>{class s{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new c.vHH(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,ue.D)(r.\u0275loadImpl()):(0,X.of)(null)).pipe((0,pe.w)(()=>new le.y(i=>{const o=r.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((u,d)=>o.setRequestHeader(u,d.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const u=t.detectContentTypeHeader();null!==u&&o.setRequestHeader("Content-Type",u)}if(t.responseType){const u=t.responseType.toLowerCase();o.responseType="json"!==u?u:"text"}const l=t.serializeBody();let a=null;const p=()=>{if(null!==a)return a;const u=o.statusText||"OK",d=new E(o.getAllResponseHeaders()),v=function Me(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(o)||t.url;return a=new L({headers:d,status:o.status,statusText:u,url:v}),a},R=()=>{let{headers:u,status:d,statusText:v,url:U}=p(),h=null;204!==d&&(h=typeof o.response>"u"?o.responseText:o.response),0===d&&(d=h?200:0);let D=d>=200&&d<300;if("json"===t.responseType&&"string"==typeof h){const ae=h;h=h.replace(Se,"");try{h=""!==h?JSON.parse(h):null}catch(J){h=ae,D&&(D=!1,h={error:J,text:h})}}D?(i.next(new C({body:h,headers:u,status:d,statusText:v,url:U||void 0})),i.complete()):i.error(new V({error:h,headers:u,status:d,statusText:v,url:U||void 0}))},f=u=>{const{url:d}=p(),v=new V({error:u,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});i.error(v)};let y=!1;const j=u=>{y||(i.next(p()),y=!0);let d={type:w.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(d.total=u.total),"text"===t.responseType&&o.responseText&&(d.partialText=o.responseText),i.next(d)},x=u=>{let d={type:w.UploadProgress,loaded:u.loaded};u.lengthComputable&&(d.total=u.total),i.next(d)};return o.addEventListener("load",R),o.addEventListener("error",f),o.addEventListener("timeout",f),o.addEventListener("abort",f),t.reportProgress&&(o.addEventListener("progress",j),null!==l&&o.upload&&o.upload.addEventListener("progress",x)),o.send(l),i.next({type:w.Sent}),()=>{o.removeEventListener("error",f),o.removeEventListener("abort",f),o.removeEventListener("load",R),o.removeEventListener("timeout",f),t.reportProgress&&(o.removeEventListener("progress",j),null!==l&&o.upload&&o.upload.removeEventListener("progress",x)),o.readyState!==o.DONE&&o.abort()}})))}static#e=this.\u0275fac=function(r){return new(r||s)(c.LFG(A.JF))};static#t=this.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac})}return s})();const H=new c.OlP("XSRF_ENABLED"),re=new c.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),ne=new c.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class oe{}let De=(()=>{class s{constructor(t,r,n){this.doc=t,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,A.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}static#e=this.\u0275fac=function(r){return new(r||s)(c.LFG(A.K0),c.LFG(c.Lbi),c.LFG(re))};static#t=this.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac})}return s})();function Ae(s,e){const t=s.url.toLowerCase();if(!(0,c.f3M)(H)||"GET"===s.method||"HEAD"===s.method||t.startsWith("http://")||t.startsWith("https://"))return e(s);const r=(0,c.f3M)(oe).getToken(),n=(0,c.f3M)(ne);return null!=r&&!s.headers.has(n)&&(s=s.clone({headers:s.headers.set(n,r)})),e(s)}var b=function(s){return s[s.Interceptors=0]="Interceptors",s[s.LegacyInterceptors=1]="LegacyInterceptors",s[s.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",s[s.NoXsrfProtection=3]="NoXsrfProtection",s[s.JsonpSupport=4]="JsonpSupport",s[s.RequestsMadeViaParent=5]="RequestsMadeViaParent",s[s.Fetch=6]="Fetch",s}(b||{});function Ie(...s){const e=[G,se,ee,{provide:S,useExisting:ee},{provide:M,useExisting:se},{provide:_,useValue:Ae,multi:!0},{provide:H,useValue:!0},{provide:oe,useClass:De}];for(const t of s)e.push(...t.\u0275providers);return(0,c.MR2)(e)}const ie=new c.OlP("LEGACY_INTERCEPTOR_FN");function Le(){return function T(s,e){return{\u0275kind:s,\u0275providers:e}}(b.LegacyInterceptors,[{provide:ie,useFactory:Pe},{provide:_,useExisting:ie,multi:!0}])}let Fe=(()=>{class s{static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275mod=c.oAB({type:s});static#s=this.\u0275inj=c.cJS({providers:[Ie(Le())]})}return s})()}}]);