(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},"01b4":function(t,e){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=n},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?s(t,e):function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ru})),n.d(e,"b",(function(){return Cc})),n.d(e,"c",(function(){return pc})),n.d(e,"d",(function(){return rc})),n.d(e,"e",(function(){return cu})),n.d(e,"f",(function(){return kc})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return Dc})),n.d(e,"i",(function(){return uu})),n.d(e,"j",(function(){return lu})),n.d(e,"k",(function(){return U})),n.d(e,"l",(function(){return Mu})),n.d(e,"m",(function(){return Ha})),n.d(e,"n",(function(){return at})),n.d(e,"o",(function(){return G})),n.d(e,"p",(function(){return Ja})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return Q})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return Wa})),n.d(e,"u",(function(){return Wu})),n.d(e,"v",(function(){return il})),n.d(e,"w",(function(){return rl})),n.d(e,"x",(function(){return _c})),n.d(e,"y",(function(){return oc})),n.d(e,"z",(function(){return ac})),n.d(e,"A",(function(){return nc})),n.d(e,"B",(function(){return Gu})),n.d(e,"C",(function(){return el})),n.d(e,"D",(function(){return Ic})),n.d(e,"E",(function(){return cc})),n.d(e,"F",(function(){return vc})),n.d(e,"G",(function(){return bc})),n.d(e,"H",(function(){return Tc})),n.d(e,"I",(function(){return ku})),n.d(e,"J",(function(){return xu})),n.d(e,"K",(function(){return mc})),n.d(e,"L",(function(){return Yu})),n.d(e,"M",(function(){return Fu})),n.d(e,"N",(function(){return Vu})),n.d(e,"O",(function(){return qu})),n.d(e,"P",(function(){return Bu})),n.d(e,"Q",(function(){return $u})),n.d(e,"R",(function(){return zu})),n.d(e,"S",(function(){return sl})),n.d(e,"T",(function(){return _u})),n.d(e,"U",(function(){return Eu})),n.d(e,"V",(function(){return Sc})),n.d(e,"W",(function(){return Ac})),n.d(e,"X",(function(){return Qu})),n.d(e,"Y",(function(){return Xu})),n.d(e,"Z",(function(){return bu})),n.d(e,"ab",(function(){return gu})),n.d(e,"bb",(function(){return lc})),n.d(e,"cb",(function(){return uc})),n.d(e,"db",(function(){return tl})),n.d(e,"eb",(function(){return nl})),n.d(e,"fb",(function(){return Hu})),n.d(e,"gb",(function(){return f})),n.d(e,"hb",(function(){return du})),n.d(e,"ib",(function(){return Su})),n.d(e,"jb",(function(){return Iu})),n.d(e,"kb",(function(){return Ku})),n.d(e,"lb",(function(){return Ec})),n.d(e,"mb",(function(){return yu}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
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
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
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
let l="9.6.1";
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
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t){h.setLogLevel(t)}function p(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(y);h.debug(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(y);h.error(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(y);h.warn(`Firestore (${l}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function b(t,e){t||v()}function w(t,e){t||v()}function _(t,e){return t}
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class I{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
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
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class x{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(b("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(null===t||"string"==typeof t),new u(t)}}class C{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class O{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(b("string"==typeof t.token),new D(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */
class R{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
 */function P(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */R.I=-1;class L{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=P(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function M(t,e){return t<e?-1:t>e?1:0}function j(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}function F(t){return t+"\0"}
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
 */class U{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return U.fromMillis(Date.now())}static fromDate(t){return U.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new U(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?M(this.nanoseconds,t.nanoseconds):M(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class V{constructor(t){this.timestamp=t}static fromTimestamp(t){return new V(t)}static min(){return new V(new U(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function q(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function B(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class z{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===z.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof z?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends z{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new H(e)}static emptyPath(){return new H([])}}const K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends z{construct(t,e,n){return new G(t,e,n)}static isValidIdentifier(t){return K.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new G(e)}static emptyPath(){return new G([])}}
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
 */class W{constructor(t){this.fields=t,t.sort(G.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return j(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
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
 */function Q(){return"undefined"!=typeof atob}
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
 */class X{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new X(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new X(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return M(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}X.EMPTY_BYTE_STRING=new X("");const Y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function J(t){if(b(!!t),"string"==typeof t){let e=0;const n=Y.exec(t);if(b(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Z(t.seconds),nanos:Z(t.nanos)}}function Z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function tt(t){return"string"==typeof t?X.fromBase64String(t):X.fromUint8Array(t)}
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
 */function et(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function nt(t){const e=t.mapValue.fields.__previous_value__;return et(e)?nt(e):e}function rt(t){const e=J(t.mapValue.fields.__local_write_time__.timestampValue);return new U(e.seconds,e.nanos)}
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
 */function it(t){return null==t}function st(t){return 0===t&&1/t==-1/0}function ot(t){return"number"==typeof t&&Number.isInteger(t)&&!st(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class at{constructor(t){this.path=t}static fromPath(t){return new at(H.fromString(t))}static fromName(t){return new at(H.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===H.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new at(new H(t.slice()))}}
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
 */function ct(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?et(t)?4:10:v()}function ut(t,e){const n=ct(t);if(n!==ct(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rt(t).isEqual(rt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=J(t.timestampValue),r=J(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return tt(t.bytesValue).isEqual(tt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Z(t.geoPointValue.latitude)===Z(e.geoPointValue.latitude)&&Z(t.geoPointValue.longitude)===Z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Z(t.integerValue)===Z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Z(t.doubleValue),r=Z(e.doubleValue);return n===r?st(n)===st(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return j(t.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(q(n)!==q(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ut(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function lt(t,e){return void 0!==(t.values||[]).find(t=>ut(t,e))}function ht(t,e){const n=ct(t),r=ct(e);if(n!==r)return M(n,r);switch(n){case 0:return 0;case 1:return M(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Z(t.integerValue||t.doubleValue),r=Z(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return dt(t.timestampValue,e.timestampValue);case 4:return dt(rt(t),rt(e));case 5:return M(t.stringValue,e.stringValue);case 6:return function(t,e){const n=tt(t),r=tt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=M(n[i],r[i]);if(0!==t)return t}return M(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=M(Z(t.latitude),Z(e.latitude));return 0!==n?n:M(Z(t.longitude),Z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ht(n[i],r[i]);if(t)return t}return M(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=M(r[o],s[o]);if(0!==t)return t;const e=ht(n[r[o]],i[s[o]]);if(0!==e)return e}return M(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function dt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return M(t,e);const n=J(t),r=J(e),i=M(n.seconds,r.seconds);return 0!==i?i:M(n.nanos,r.nanos)}function ft(t){return pt(t)}function pt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=J(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?tt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,at.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=pt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${pt(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function gt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mt(t){return!!t&&"integerValue"in t}function yt(t){return!!t&&"arrayValue"in t}function vt(t){return!!t&&"nullValue"in t}function bt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wt(t){return!!t&&"mapValue"in t}function _t(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return B(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=_t(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_t(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!wt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_t(e)}setAll(t){let e=G.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=_t(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());wt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];wt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){B(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new Et(_t(this.value))}}function Tt(t){const e=[];return B(t.fields,(t,n)=>{const r=new G([t]);if(wt(n)){const t=Tt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new W(e)
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
 */}class It{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new It(t,0,V.min(),Et.empty(),0)}static newFoundDocument(t,e,n){return new It(t,1,e,n,0)}static newNoDocument(t,e){return new It(t,2,e,Et.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,Et.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new It(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class St{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function At(t,e=null,n=[],r=[],i=null,s=null,o=null){return new St(t,e,n,r,i,s,o)}function xt(t){const e=_(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Nt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),it(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Bt(e.startAt)),e.endAt&&(t+="|ub:",t+=Bt(e.endAt)),e.R=t}return e.R}function kt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ft(e.value)}`;var e}).join(", ")}]`),it(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Bt(t.startAt)),t.endAt&&(e+=", endAt: "+Bt(t.endAt)),`Target(${e})`}function Ct(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!zt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ut(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kt(t.startAt,e.startAt)&&Kt(t.endAt,e.endAt)}function Ot(t){return at.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Dt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new Rt(t,e,n):"array-contains"===e?new jt(t,n):"in"===e?new Ft(t,n):"not-in"===e?new Ut(t,n):"array-contains-any"===e?new Vt(t,n):new Dt(t,e,n)}static P(t,e,n){return"in"===e?new Pt(t,n):new Lt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ht(e,this.value)):null!==e&&ct(this.value)===ct(e)&&this.v(ht(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Nt(t){return t.field.canonicalString()+t.op.toString()+ft(t.value)}class Rt extends Dt{constructor(t,e,n){super(t,e,n),this.key=at.fromName(n.referenceValue)}matches(t){const e=at.comparator(t.key,this.key);return this.v(e)}}class Pt extends Dt{constructor(t,e){super(t,"in",e),this.keys=Mt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Lt extends Dt{constructor(t,e){super(t,"not-in",e),this.keys=Mt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Mt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>at.fromName(t.referenceValue))}class jt extends Dt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return yt(e)&&lt(e.arrayValue,this.value)}}class Ft extends Dt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&lt(this.value.arrayValue,e)}}class Ut extends Dt{constructor(t,e){super(t,"not-in",e)}matches(t){if(lt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!lt(this.value.arrayValue,e)}}class Vt extends Dt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!yt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>lt(this.value.arrayValue,t))}}class qt{constructor(t,e){this.position=t,this.before=e}}function Bt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ft(t)).join(",")}`}class $t{constructor(t,e="asc"){this.field=t,this.dir=e}}function zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ht(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?at.comparator(at.fromName(o.referenceValue),n.key):ht(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Kt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ut(t.position[n],e.position[n]))return!1;return!0}
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
 */class Gt{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Wt(t,e,n,r,i,s,o,a){return new Gt(t,e,n,r,i,s,o,a)}function Qt(t){return new Gt(t)}function Xt(t){return!it(t.limit)&&"F"===t.limitType}function Yt(t){return!it(t.limit)&&"L"===t.limitType}function Jt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zt(t){for(const e of t.filters)if(e.V())return e.field;return null}function te(t){return null!==t.collectionGroup}function ee(t){const e=_(t);if(null===e.S){e.S=[];const t=Zt(e),n=Jt(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new $t(t)),e.S.push(new $t(G.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new $t(G.keyField(),t))}}}return e.S}function ne(t){const e=_(t);if(!e.D)if("F"===e.limitType)e.D=At(e.path,e.collectionGroup,ee(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ee(e)){const e="desc"===i.dir?"asc":"desc";t.push(new $t(i.field,e))}const n=e.endAt?new qt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new qt(e.startAt.position,!e.startAt.before):null;e.D=At(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.D}function re(t,e,n){return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ie(t,e){return Ct(ne(t),ne(e))&&t.limitType===e.limitType}function se(t){return`${xt(ne(t))}|lt:${t.limitType}`}function oe(t){return`Query(target=${kt(ne(t))}; limitType=${t.limitType})`}function ae(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):at.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Ht(t.startAt,ee(t),e))&&(!t.endAt||!Ht(t.endAt,ee(t),e))}(t,e)}function ce(t){return(e,n)=>{let r=!1;for(const i of ee(t)){const t=ue(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ue(t,e,n){const r=t.field.isKeyField()?at.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ht(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
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
 */function le(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:st(e)?"-0":e}}function he(t){return{integerValue:""+t}}function de(t,e){return ot(e)?he(e):le(t,e)}
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
 */class fe{constructor(){this._=void 0}}function pe(t,e,n){return t instanceof ye?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ve?be(t,e):t instanceof we?_e(t,e):function(t,e){const n=me(t,e),r=Te(n)+Te(t.N);return mt(n)&&mt(t.N)?he(r):le(t.k,r)}(t,e)}function ge(t,e,n){return t instanceof ve?be(t,e):t instanceof we?_e(t,e):n}function me(t,e){return t instanceof Ee?mt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ye extends fe{}class ve extends fe{constructor(t){super(),this.elements=t}}function be(t,e){const n=Ie(e);for(const r of t.elements)n.some(t=>ut(t,r))||n.push(r);return{arrayValue:{values:n}}}class we extends fe{constructor(t){super(),this.elements=t}}function _e(t,e){let n=Ie(e);for(const r of t.elements)n=n.filter(t=>!ut(t,r));return{arrayValue:{values:n}}}class Ee extends fe{constructor(t,e){super(),this.k=t,this.N=e}}function Te(t){return Z(t.integerValue||t.doubleValue)}function Ie(t){return yt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Se{constructor(t,e){this.field=t,this.transform=e}}function Ae(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ve&&e instanceof ve||t instanceof we&&e instanceof we?j(t.elements,e.elements,ut):t instanceof Ee&&e instanceof Ee?ut(t.N,e.N):t instanceof ye&&e instanceof ye}(t.transform,e.transform)}class xe{constructor(t,e){this.version=t,this.transformResults=e}}class ke{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ke}static exists(t){return new ke(void 0,t)}static updateTime(t){return new ke(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ce(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Oe{}function De(t,e,n){t instanceof Me?function(t,e,n){const r=t.value.clone(),i=Ue(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof je?function(t,e,n){if(!Ce(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ue(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Fe(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ne(t,e,n){t instanceof Me?function(t,e,n){if(!Ce(t.precondition,e))return;const r=t.value.clone(),i=Ve(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Le(e),r).setHasLocalMutations()}(t,e,n):t instanceof je?function(t,e,n){if(!Ce(t.precondition,e))return;const r=Ve(t.fieldTransforms,n,e),i=e.data;i.setAll(Fe(t)),i.setAll(r),e.convertToFoundDocument(Le(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Ce(t.precondition,e)&&e.convertToNoDocument(V.min())}(t,e)}function Re(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=me(r.transform,t||null);null!=i&&(null==n&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Pe(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&j(t,e,(t,e)=>Ae(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Le(t){return t.isFoundDocument()?t.version:V.min()}class Me extends Oe{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class je extends Oe{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Fe(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ue(t,e,n){const r=new Map;b(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ge(o,a,n[i]))}return r}function Ve(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,pe(t,s,e))}return r}class qe extends Oe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Be extends Oe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class $e{constructor(t){this.count=t}}
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
 */var ze,He;function Ke(t){switch(t){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Ge(t){if(void 0===t)return g("GRPC error has no .code"),E.UNKNOWN;switch(t){case ze.OK:return E.OK;case ze.CANCELLED:return E.CANCELLED;case ze.UNKNOWN:return E.UNKNOWN;case ze.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ze.INTERNAL:return E.INTERNAL;case ze.UNAVAILABLE:return E.UNAVAILABLE;case ze.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ze.NOT_FOUND:return E.NOT_FOUND;case ze.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ze.ABORTED:return E.ABORTED;case ze.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ze.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(He=ze||(ze={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";
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
class We{constructor(t,e){this.comparator=t,this.root=e||Xe.EMPTY}insert(t,e){return new We(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new We(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qe(this.root,t,this.comparator,!0)}}class Qe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Xe.RED,this.left=null!=r?r:Xe.EMPTY,this.right=null!=i?i:Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Xe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Xe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1,Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ye{constructor(t){this.comparator=t,this.data=new We(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Je(this.data.getIterator())}getIteratorFrom(t){return new Je(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ye))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ye(this.comparator);return e.data=t,e}}class Je{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Ze=new We(at.comparator);function tn(){return Ze}const en=new We(at.comparator);function nn(){return en}const rn=new We(at.comparator);function sn(){return rn}const on=new Ye(at.comparator);function an(...t){let e=on;for(const n of t)e=e.add(n);return e}const cn=new Ye(M);function un(){return cn}
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
 */class ln{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,hn.createSynthesizedTargetChangeForCurrentChange(t,e)),new ln(V.min(),n,un(),tn(),an())}}class hn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new hn(X.EMPTY_BYTE_STRING,e,an(),an(),an())}}
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
 */class dn{constructor(t,e,n,r){this.$=t,this.removedTargetIds=e,this.key=n,this.F=r}}class fn{constructor(t,e){this.targetId=t,this.O=e}}class pn{constructor(t,e,n=X.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class gn{constructor(){this.M=0,this.L=vn(),this.B=X.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=an(),e=an(),n=an();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new hn(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=vn()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class mn{constructor(t){this.et=t,this.nt=new Map,this.st=tn(),this.it=yn(),this.rt=new Ye(M)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.O.count,r=this.wt(e);if(r){const t=r.target;if(Ot(t))if(0===n){const n=new at(t.path);this.ct(e,n,It.newNoDocument(n,V.min()))}else b(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Ot(i.target)){const e=new at(i.target.path);null!==this.st.get(e)||this.yt(r,e)||this.ct(r,e,It.newNoDocument(e,t))}n.j&&(e.set(r,n.G()),n.H())}});let n=an();this.it.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new ln(t,e,this.rt,this.st,n);return this.st=tn(),this.it=yn(),this.rt=new Ye(M),r}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const r=this.ht(t);this.yt(t,e)?r.J(e,1):r.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new gn,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Ye(M),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new gn),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function yn(){return new We(at.comparator)}function vn(){return new We(at.comparator)}
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
 */const bn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),wn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class _n{constructor(t,e){this.databaseId=t,this.C=e}}function En(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tn(t,e){return t.C?e.toBase64():e.toUint8Array()}function In(t,e){return En(t,e.toTimestamp())}function Sn(t){return b(!!t),V.fromTimestamp(function(t){const e=J(t);return new U(e.seconds,e.nanos)}(t))}function An(t,e){return function(t){return new H(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function xn(t){const e=H.fromString(t);return b(er(e)),e}function kn(t,e){return An(t.databaseId,e.path)}function Cn(t,e){const n=xn(e);if(n.get(1)!==t.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new at(Rn(n))}function On(t,e){return An(t.databaseId,e)}function Dn(t){const e=xn(t);return 4===e.length?H.emptyPath():Rn(e)}function Nn(t){return new H(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rn(t){return b(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Pn(t,e,n){return{name:kn(t,e),fields:n.value.mapValue.fields}}function Ln(t,e,n){const r=Cn(t,e.name),i=Sn(e.updateTime),s=new Et({mapValue:{fields:e.fields}}),o=It.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Mn(t,e){return"found"in e?function(t,e){b(!!e.found),e.found.name,e.found.updateTime;const n=Cn(t,e.found.name),r=Sn(e.found.updateTime),i=new Et({mapValue:{fields:e.found.fields}});return It.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){b(!!e.missing),b(!!e.readTime);const n=Cn(t,e.missing),r=Sn(e.readTime);return It.newNoDocument(n,r)}(t,e):v()}function jn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.C?(b(void 0===e||"string"==typeof e),X.fromBase64String(e||"")):(b(void 0===e||e instanceof Uint8Array),X.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?E.UNKNOWN:Ge(t.code);return new T(e,t.message||"")}(o);n=new pn(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cn(t,r.document.name),s=Sn(r.document.updateTime),o=new Et({mapValue:{fields:r.document.fields}}),a=It.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new dn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cn(t,r.document),s=r.readTime?Sn(r.readTime):V.min(),o=It.newNoDocument(i,s),a=r.removedTargetIds||[];n=new dn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cn(t,r.document),s=r.removedTargetIds||[];n=new dn([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new $e(r),s=t.targetId;n=new fn(s,i)}}return n}function Fn(t,e){let n;if(e instanceof Me)n={update:Pn(t,e.key,e.value)};else if(e instanceof qe)n={delete:kn(t,e.key)};else if(e instanceof je)n={update:Pn(t,e.key,e.data),updateMask:tr(e.fieldMask)};else{if(!(e instanceof Be))return v();n={verify:kn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ye)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ve)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof we)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ee)return{fieldPath:e.field.canonicalString(),increment:n.N};throw v()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:In(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function Un(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?ke.updateTime(Sn(t.updateTime)):void 0!==t.exists?ke.exists(t.exists):ke.none()}(e.currentDocument):ke.none(),r=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)b("REQUEST_TIME"===e.setToServerValue),n=new ye;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new ve(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new we(t)}else"increment"in e?n=new Ee(t,e.increment):v();const r=G.fromServerFormat(e.fieldPath);return new Se(r,n)}(t,e)):[];if(e.update){e.update.name;const i=Cn(t,e.update.name),s=new Et({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new W(e.map(t=>G.fromServerFormat(t)))}(e.updateMask);return new je(i,s,t,n,r)}return new Me(i,s,n,r)}if(e.delete){const r=Cn(t,e.delete);return new qe(r,n)}if(e.verify){const r=Cn(t,e.verify);return new Be(r,n)}return v()}function Vn(t,e){return t&&t.length>0?(b(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Sn(t.updateTime):Sn(e);return n.isEqual(V.min())&&(n=Sn(e)),new xe(n,t.transformResults||[])}(t,e))):[]}function qn(t,e){return{documents:[On(t,e.path)]}}function Bn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=On(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=On(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(bt(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NAN"}};if(vt(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(bt(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NOT_NAN"}};if(vt(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xn(t.field),op:Qn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Xn(t.field),direction:Wn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.C||it(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Kn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Kn(e.endAt)),n}function $n(t){let e=Dn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Hn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new $t(Yn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,it(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Gn(n.startAt));let u=null;return n.endAt&&(u=Gn(n.endAt)),Wt(e,i,o,s,a,"F",c,u)}function zn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Hn(t){return t?void 0!==t.unaryFilter?[Zn(t)]:void 0!==t.fieldFilter?[Jn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Hn(t)).reduce((t,e)=>t.concat(e)):v():[]}function Kn(t){return{before:t.before,values:t.position}}function Gn(t){const e=!!t.before,n=t.values||[];return new qt(n,e)}function Wn(t){return bn[t]}function Qn(t){return wn[t]}function Xn(t){return{fieldPath:t.canonicalString()}}function Yn(t){return G.fromServerFormat(t.fieldPath)}function Jn(t){return Dt.create(Yn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}function Zn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Yn(t.unaryFilter.field);return Dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Yn(t.unaryFilter.field);return Dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yn(t.unaryFilter.field);return Dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yn(t.unaryFilter.field);return Dt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function tr(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function er(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function nr(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ir(e)),e=rr(t.get(n),e);return ir(e)}function rr(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function ir(t){return t+""}function sr(t){const e=t.length;if(b(e>=2),2===e)return b(""===t.charAt(0)&&""===t.charAt(1)),H.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>n)&&v(),t.charAt(e+1)){case"":const n=t.substring(s,e);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=t.substring(s,e),i+="\0";break;case"":i+=t.substring(s,e+1);break;default:v()}s=e+2}return new H(r)}
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
 */class or{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class ar{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}ar.store="owner",ar.key="owner";class cr{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}cr.store="mutationQueues",cr.keyPath="userId";class ur{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ur.store="mutations",ur.keyPath="batchId",ur.userMutationsIndex="userMutationsIndex",ur.userMutationsKeyPath=["userId","batchId"];class lr{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,nr(e)]}static key(t,e,n){return[t,nr(e),n]}}lr.store="documentMutations",lr.PLACEHOLDER=new lr;class hr{constructor(t,e){this.path=t,this.readTime=e}}class dr{constructor(t,e){this.path=t,this.version=e}}class fr{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}fr.store="remoteDocuments",fr.readTimeIndex="readTimeIndex",fr.readTimeIndexPath="readTime",fr.collectionReadTimeIndex="collectionReadTimeIndex",fr.collectionReadTimeIndexPath=["parentPath","readTime"];class pr{constructor(t){this.byteSize=t}}pr.store="remoteDocumentGlobal",pr.key="remoteDocumentGlobalKey";class gr{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}gr.store="targets",gr.keyPath="targetId",gr.queryTargetsIndexName="queryTargetsIndex",gr.queryTargetsKeyPath=["canonicalId","targetId"];class mr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}mr.store="targetDocuments",mr.keyPath=["targetId","path"],mr.documentTargetsIndex="documentTargetsIndex",mr.documentTargetsKeyPath=["path","targetId"];class yr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}yr.key="targetGlobalKey",yr.store="targetGlobal";class vr{constructor(t,e){this.collectionId=t,this.parent=e}}vr.store="collectionParents",vr.keyPath=["collectionId","parent"];class br{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}br.store="clientMetadata",br.keyPath="clientId";class wr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}wr.store="bundles",wr.keyPath="bundleId";class _r{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}_r.store="namedQueries",_r.keyPath="name";const Er=[cr.store,ur.store,lr.store,fr.store,gr.store,ar.store,yr.store,mr.store,br.store,pr.store,vr.store,wr.store,_r.store],Tr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ir{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
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
 */class Sr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Sr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Sr?e:Sr.resolve(e)}catch(t){return Sr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Sr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Sr.reject(e)}static resolve(t){return new Sr((e,n)=>{e(t)})}static reject(t){return new Sr((e,n)=>{n(t)})}static waitFor(t){return new Sr((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Sr.resolve(!1);for(const n of t)e=e.next(t=>t?Sr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
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
 */class Ar{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.It=new I,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{e.error?this.It.reject(new Cr(t,e.error)):this.It.resolve()},this.transaction.onerror=e=>{const n=Pr(e.target.error);this.It.reject(new Cr(t,n))}}static open(t,e,n,r){try{return new Ar(e,t.transaction(r,n))}catch(t){throw new Cr(e,t)}}get At(){return this.It.promise}abort(t){t&&this.It.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new Dr(e)}}class xr{constructor(t,e,n){this.name=t,this.version=e,this.Rt=n,12.2===xr.Pt(Object(o["j"])())&&g("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),Nr(window.indexedDB.deleteDatabase(t)).toPromise()}static bt(){if(!Object(o["o"])())return!1;if(xr.vt())return!0;const t=Object(o["j"])(),e=xr.Pt(t),n=0<e&&e<10,r=xr.Vt(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static vt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({NODE_ENV:"production",VUE_APP_FIREBASE_APIKEY:"AIzaSyA2VETiMU4LsgdWu0XdtEvQJ8MMT28FU5M",VUE_APP_FIREBASE_AUTHDOMAIN:"mbtimap-dad6b.firebaseapp.com",VUE_APP_FIREBASE_PROJECTID:"mbtimap-dad6b",VUE_APP_FIREBASE_STORAGEBUCKET:"mbtimap-dad6b.appspot.com",VUE_APP_FIREABSE_MESSAGINGSENDERID:"457163912484",VUE_APP_FIREBASE_APPID:"1:457163912484:web:61fed987eff1c57d3defb1",BASE_URL:"/mbti-map/"}))||void 0===e?void 0:e.St)}static Dt(t,e){return t.store(e)}static Pt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Cr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new T(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Cr(t,r))},r.onupgradeneeded=t=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.Rt.Nt(e,r.transaction,t.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=t=>this.kt(t)),this.db}xt(t){this.kt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const i="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.Ct(t);const e=Ar.open(this.db,t,i?"readonly":"readwrite",n),s=r(e).catch(t=>(e.abort(t),Sr.reject(t))).toPromise();return s.catch(()=>{}),await e.At,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class kr{constructor(t){this.$t=t,this.Ft=!1,this.Ot=null}get isDone(){return this.Ft}get Mt(){return this.Ot}set cursor(t){this.$t=t}done(){this.Ft=!0}Lt(t){this.Ot=t}delete(){return Nr(this.$t.delete())}}class Cr extends T{constructor(t,e){super(E.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Or(t){return"IndexedDbTransactionError"===t.name}class Dr{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(p("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Nr(n)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),Nr(this.store.add(t))}get(t){return Nr(this.store.get(t)).next(e=>(void 0===e&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),Nr(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),Nr(this.store.count())}Bt(t,e){const n=this.cursor(this.options(t,e)),r=[];return this.Ut(n,(t,e)=>{r.push(e)}).next(()=>r)}qt(t,e){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.Kt=!1;const r=this.cursor(n);return this.Ut(r,(t,e,n)=>n.delete())}jt(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.Ut(r,e)}Qt(t){const e=this.cursor({});return new Sr((n,r)=>{e.onerror=t=>{const e=Pr(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next(t=>{t?r.continue():n()}):n()}})}Ut(t,e){const n=[];return new Sr((r,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{const i=t.target.result;if(!i)return void r();const s=new kr(i),o=e(i.primaryKey,i.value,s);if(o instanceof Sr){const t=o.catch(t=>(s.done(),Sr.reject(t)));n.push(t)}s.isDone?r():null===s.Mt?i.continue():i.continue(s.Mt)}}).next(()=>Sr.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Kt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Nr(t){return new Sr((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Pr(t.target.error);n(e)}})}let Rr=!1;function Pr(t){const e=xr.Pt(Object(o["j"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Rr||(Rr=!0,setTimeout(()=>{throw t},0)),t}}return t}
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
 */class Lr extends Ir{constructor(t,e){super(),this.Wt=t,this.currentSequenceNumber=e}}function Mr(t,e){const n=_(t);return xr.Dt(n.Wt,e)}
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
 */class jr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&De(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ne(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ne(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(V.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),an())}isEqual(t){return this.batchId===t.batchId&&j(this.mutations,t.mutations,(t,e)=>Pe(t,e))&&j(this.baseMutations,t.baseMutations,(t,e)=>Pe(t,e))}}class Fr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){b(t.mutations.length===n.length);let r=sn();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Fr(t,e,n,r)}}
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
 */class Ur{constructor(t,e,n,r,i=V.min(),s=V.min(),o=X.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Ur(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Vr{constructor(t){this.Gt=t}}function qr(t,e){if(e.document)return Ln(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=at.fromSegments(e.noDocument.path),n=Kr(e.noDocument.readTime),r=It.newNoDocument(t,n);return e.hasCommittedMutations?r.setHasCommittedMutations():r}if(e.unknownDocument){const t=at.fromSegments(e.unknownDocument.path),n=Kr(e.unknownDocument.version);return It.newUnknownDocument(t,n)}return v()}function Br(t,e,n){const r=$r(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:kn(t,e.key),fields:e.data.value.mapValue.fields,updateTime:En(t,e.version.toTimestamp())}}(t.Gt,e),s=e.hasCommittedMutations;return new fr(null,null,n,s,r,i)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=Hr(e.version),s=e.hasCommittedMutations;return new fr(null,new hr(t,n),null,s,r,i)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=Hr(e.version);return new fr(new dr(t,n),null,null,!0,r,i)}return v()}function $r(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function zr(t){const e=new U(t[0],t[1]);return V.fromTimestamp(e)}function Hr(t){const e=t.toTimestamp();return new or(e.seconds,e.nanoseconds)}function Kr(t){const e=new U(t.seconds,t.nanoseconds);return V.fromTimestamp(e)}function Gr(t,e){const n=(e.baseMutations||[]).map(e=>Un(t.Gt,e));for(let s=0;s<e.mutations.length-1;++s){const t=e.mutations[s];if(s+1<e.mutations.length&&void 0!==e.mutations[s+1].transform){const n=e.mutations[s+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(e=>Un(t.Gt,e)),i=U.fromMillis(e.localWriteTimeMs);return new jr(e.batchId,i,n,r)}function Wr(t){const e=Kr(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Kr(t.lastLimboFreeSnapshotVersion):V.min();let r;var i;return void 0!==t.query.documents?(b(1===(i=t.query).documents.length),r=ne(Qt(Dn(i.documents[0])))):r=function(t){return ne($n(t))}(t.query),new Ur(r,t.targetId,0,t.lastListenSequenceNumber,e,n,X.fromBase64String(t.resumeToken))}function Qr(t,e){const n=Hr(e.snapshotVersion),r=Hr(e.lastLimboFreeSnapshotVersion);let i;i=Ot(e.target)?qn(t.Gt,e.target):Bn(t.Gt,e.target);const s=e.resumeToken.toBase64();return new gr(e.targetId,xt(e.target),n,s,e.sequenceNumber,r,i)}function Xr(t){const e=$n({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?re(e,e.limit,"L"):e}
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
 */class Yr{getBundleMetadata(t,e){return Jr(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:Kr(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Jr(t).put({bundleId:(n=e).id,createTime:Hr(Sn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Zr(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Xr(e.bundledQuery),readTime:Kr(e.readTime)};var e})}saveNamedQuery(t,e){return Zr(t).put(function(t){return{name:t.name,readTime:Hr(Sn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Jr(t){return Mr(t,wr.store)}function Zr(t){return Mr(t,_r.store)}
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
 */class ti{constructor(){this.zt=new ei}addToCollectionParentIndex(t,e){return this.zt.add(e),Sr.resolve()}getCollectionParents(t,e){return Sr.resolve(this.zt.getEntries(e))}}class ei{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ye(H.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ye(H.comparator)).toArray()}}
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
 */class ni{constructor(){this.Ht=new ei}addToCollectionParentIndex(t,e){if(!this.Ht.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.Ht.add(e)});const i={collectionId:n,parent:nr(r)};return ri(t).put(i)}return Sr.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[F(e),""],!1,!0);return ri(t).Bt(r).next(t=>{for(const r of t){if(r.collectionId!==e)break;n.push(sr(r.parent))}return n})}}function ri(t){return Mr(t,vr.store)}
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
 */const ii={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class si{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new si(t,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */function oi(t,e,n){const r=t.store(ur.store),i=t.store(lr.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.jt({range:o},(t,e,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const t=lr.key(e,l.key.path,n.batchId);s.push(i.delete(t)),u.push(l.key)}return Sr.waitFor(s).next(()=>u)}function ai(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw v();e=t.noDocument}return JSON.stringify(e).length}
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
 */si.DEFAULT_COLLECTION_PERCENTILE=10,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,si.DEFAULT=new si(41943040,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),si.DISABLED=new si(-1,0,0);class ci{constructor(t,e,n,r){this.userId=t,this.k=e,this.Jt=n,this.referenceDelegate=r,this.Yt={}}static Xt(t,e,n,r){b(""!==t.uid);const i=t.isAuthenticated()?t.uid:"";return new ci(i,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return li(t).jt({index:ur.userMutationsIndex,range:n},(t,n,r)=>{e=!1,r.done()}).next(()=>e)}addMutationBatch(t,e,n,r){const i=hi(t),s=li(t);return s.add({}).next(o=>{b("number"==typeof o);const a=new jr(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map(e=>Fn(t.Gt,e)),i=n.mutations.map(e=>Fn(t.Gt,e));return new ur(e,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.k,this.userId,a),u=[];let l=new Ye((t,e)=>M(t.canonicalString(),e.canonicalString()));for(const t of r){const e=lr.key(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),u.push(s.put(c)),u.push(i.put(e,lr.PLACEHOLDER))}return l.forEach(e=>{u.push(this.Jt.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Yt[o]=a.keys()}),Sr.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return li(t).get(e).next(t=>t?(b(t.userId===this.userId),Gr(this.k,t)):null)}Zt(t,e){return this.Yt[e]?Sr.resolve(this.Yt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Yt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return li(t).jt({index:ur.userMutationsIndex,range:r},(t,e,r)=>{e.userId===this.userId&&(b(e.batchId>=n),i=Gr(this.k,e)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return li(t).jt({index:ur.userMutationsIndex,range:e,reverse:!0},(t,e,r)=>{n=e.batchId,r.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return li(t).Bt(ur.userMutationsIndex,e).next(t=>t.map(t=>Gr(this.k,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=lr.prefixForPath(this.userId,e.path),r=IDBKeyRange.lowerBound(n),i=[];return hi(t).jt({range:r},(n,r,s)=>{const[o,a,c]=n,u=sr(a);if(o===this.userId&&e.path.isEqual(u))return li(t).get(c).next(t=>{if(!t)throw v();b(t.userId===this.userId),i.push(Gr(this.k,t))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ye(M);const r=[];return e.forEach(e=>{const i=lr.prefixForPath(this.userId,e.path),s=IDBKeyRange.lowerBound(i),o=hi(t).jt({range:s},(t,r,i)=>{const[s,o,a]=t,c=sr(o);s===this.userId&&e.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Sr.waitFor(r).next(()=>this.te(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,i=lr.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Ye(M);return hi(t).jt({range:s},(t,e,i)=>{const[s,a,c]=t,u=sr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.te(t,o))}te(t,e){const n=[],r=[];return e.forEach(e=>{r.push(li(t).get(e).next(t=>{if(null===t)throw v();b(t.userId===this.userId),n.push(Gr(this.k,t))}))}),Sr.waitFor(r).next(()=>n)}removeMutationBatch(t,e){return oi(t.Wt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ee(e.batchId)}),Sr.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}ee(t){delete this.Yt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return Sr.resolve();const n=IDBKeyRange.lowerBound(lr.prefixForUser(this.userId)),r=[];return hi(t).jt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=sr(t[1]);r.push(e)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(t,e){return ui(t,this.userId,e)}ne(t){return di(t).get(this.userId).next(t=>t||new cr(this.userId,-1,""))}}function ui(t,e,n){const r=lr.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return hi(t).jt({range:s,Kt:!0},(t,n,r)=>{const[s,a,c]=t;s===e&&a===i&&(o=!0),r.done()}).next(()=>o)}function li(t){return Mr(t,ur.store)}function hi(t){return Mr(t,lr.store)}function di(t){return Mr(t,cr.store)}
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
 */class fi{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new fi(0)}static re(){return new fi(-1)}}
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
 */class pi{constructor(t,e){this.referenceDelegate=t,this.k=e}allocateTargetId(t){return this.oe(t).next(e=>{const n=new fi(e.highestTargetId);return e.highestTargetId=n.next(),this.ae(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.oe(t).next(t=>V.fromTimestamp(new U(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.oe(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.oe(t).next(r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.ae(t,r)))}addTargetData(t,e){return this.ce(t,e).next(()=>this.oe(t).next(n=>(n.targetCount+=1,this.ue(e,n),this.ae(t,n))))}updateTargetData(t,e){return this.ce(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>gi(t).delete(e.targetId)).next(()=>this.oe(t)).next(e=>(b(e.targetCount>0),e.targetCount-=1,this.ae(t,e)))}removeTargets(t,e,n){let r=0;const i=[];return gi(t).jt((s,o)=>{const a=Wr(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(t,a)))}).next(()=>Sr.waitFor(i)).next(()=>r)}forEachTarget(t,e){return gi(t).jt((t,n)=>{const r=Wr(n);e(r)})}oe(t){return mi(t).get(yr.key).next(t=>(b(null!==t),t))}ae(t,e){return mi(t).put(yr.key,e)}ce(t,e){return gi(t).put(Qr(this.k,e))}ue(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.oe(t).next(t=>t.targetCount)}getTargetData(t,e){const n=xt(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return gi(t).jt({range:r,index:gr.queryTargetsIndexName},(t,n,r)=>{const s=Wr(n);Ct(e,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(t,e,n){const r=[],i=yi(t);return e.forEach(e=>{const s=nr(e.path);r.push(i.put(new mr(n,s))),r.push(this.referenceDelegate.addReference(t,n,e))}),Sr.waitFor(r)}removeMatchingKeys(t,e,n){const r=yi(t);return Sr.forEach(e,e=>{const i=nr(e.path);return Sr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=yi(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=yi(t);let i=an();return r.jt({range:n,Kt:!0},(t,e,n)=>{const r=sr(t[1]),s=new at(r);i=i.add(s)}).next(()=>i)}containsKey(t,e){const n=nr(e.path),r=IDBKeyRange.bound([n],[F(n)],!1,!0);let i=0;return yi(t).jt({index:mr.documentTargetsIndex,Kt:!0,range:r},([t,e],n,r)=>{0!==t&&(i++,r.done())}).next(()=>i>0)}Et(t,e){return gi(t).get(e).next(t=>t?Wr(t):null)}}function gi(t){return Mr(t,gr.store)}function mi(t){return Mr(t,yr.store)}function yi(t){return Mr(t,mr.store)}
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
 */async function vi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Tr)throw t;p("LocalStore","Unexpectedly lost primary lease")}
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
 */function bi([t,e],[n,r]){const i=M(t,n);return 0===i?M(e,r):i}class wi{constructor(t){this.he=t,this.buffer=new Ye(bi),this.le=0}fe(){return++this.le}de(t){const e=[t,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();bi(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class _i{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.we=!1,this._e=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(t)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(t){const e=this.we?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this._e=null,this.we=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Or(t)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await vi(t)}await this.me(t)})}}class Ei{constructor(t,e){this.ge=t,this.params=e}calculateTargetCount(t,e){return this.ge.ye(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Sr.resolve(R.I);const n=new wi(e);return this.ge.forEachTarget(t,t=>n.de(t.sequenceNumber)).next(()=>this.ge.pe(t,t=>n.de(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.ge.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.ge.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Sr.resolve(ii)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ii):this.Te(t,e))}getCacheSize(t){return this.ge.getCacheSize(t)}Te(t,e){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,o=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Sr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}
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
 */class Ti{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new Ei(t,e)}(this,e)}ye(t){const e=this.Ee(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Ee(t){let e=0;return this.pe(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pe(t,e){return this.Ie(t,(t,n)=>e(n))}addReference(t,e,n){return Ii(t,n)}removeReference(t,e,n){return Ii(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Ii(t,e)}Ae(t,e){return function(t,e){let n=!1;return di(t).Qt(r=>ui(t,r,e).next(t=>(t&&(n=!0),Sr.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ie(t,(s,o)=>{if(o<=e){const e=this.Ae(t,s).next(e=>{if(!e)return i++,n.getEntry(t,s).next(()=>(n.removeEntry(s),yi(t).delete([0,nr(s.path)])))});r.push(e)}}).next(()=>Sr.waitFor(r)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Ii(t,e)}Ie(t,e){const n=yi(t);let r,i=R.I;return n.jt({index:mr.documentTargetsIndex},([t,n],{path:s,sequenceNumber:o})=>{0===t?(i!==R.I&&e(new at(sr(r)),i),i=o,r=s):i=R.I}).next(()=>{i!==R.I&&e(new at(sr(r)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ii(t,e){return yi(t).put(function(t,e){return new mr(0,nr(t.path),e)}(e,t.currentSequenceNumber))}
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
 */class Si{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){B(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return $(this.inner)}}
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
 */class Ai{constructor(){this.changes=new Si(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:V.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:It.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Sr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */class xi{constructor(t,e){this.k=t,this.Jt=e}addEntry(t,e,n){return Oi(t).put(Di(e),n)}removeEntry(t,e){const n=Oi(t),r=Di(e);return n.delete(r)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Re(t,n)))}getEntry(t,e){return Oi(t).get(Di(e)).next(t=>this.Pe(e,t))}be(t,e){return Oi(t).get(Di(e)).next(t=>({document:this.Pe(e,t),size:ai(t)}))}getEntries(t,e){let n=tn();return this.ve(t,e,(t,e)=>{const r=this.Pe(t,e);n=n.insert(t,r)}).next(()=>n)}Ve(t,e){let n=tn(),r=new We(at.comparator);return this.ve(t,e,(t,e)=>{const i=this.Pe(t,e);n=n.insert(t,i),r=r.insert(t,ai(e))}).next(()=>({documents:n,Se:r}))}ve(t,e,n){if(e.isEmpty())return Sr.resolve();const r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),i=e.getIterator();let s=i.getNext();return Oi(t).jt({range:r},(t,e,r)=>{const o=at.fromSegments(t);for(;s&&at.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,e),s=i.hasNext()?i.getNext():null),s?r.Lt(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(t,e,n){let r=tn();const i=e.path.length+1,s={};if(n.isEqual(V.min())){const t=e.path.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),r=$r(n);s.range=IDBKeyRange.lowerBound([t,r],!0),s.index=fr.collectionReadTimeIndex}return Oi(t).jt(s,(t,n,s)=>{if(t.length!==i)return;const o=qr(this.k,n);e.path.isPrefixOf(o.key.path)?ae(e,o)&&(r=r.insert(o.key,o)):s.done()}).next(()=>r)}newChangeBuffer(t){return new ki(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return Ci(t).get(pr.key).next(t=>(b(!!t),t))}Re(t,e){return Ci(t).put(pr.key,e)}Pe(t,e){if(e){const t=qr(this.k,e);if(!t.isNoDocument()||!t.version.isEqual(V.min()))return t}return It.newInvalidDocument(t)}}class ki extends Ai{constructor(t,e){super(),this.De=t,this.trackRemovals=e,this.Ce=new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,r=new Ye((t,e)=>M(t.canonicalString(),e.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Ce.get(i);if(s.document.isValidDocument()){const a=Br(this.De.k,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=ai(a);n+=c-o,e.push(this.De.addEntry(t,i,a))}else if(n-=o,this.trackRemovals){const n=Br(this.De.k,It.newNoDocument(i,V.min()),this.getReadTime(i));e.push(this.De.addEntry(t,i,n))}else e.push(this.De.removeEntry(t,i))}),r.forEach(n=>{e.push(this.De.Jt.addToCollectionParentIndex(t,n))}),e.push(this.De.updateMetadata(t,n)),Sr.waitFor(e)}getFromCache(t,e){return this.De.be(t,e).next(t=>(this.Ce.set(e,t.size),t.document))}getAllFromCache(t,e){return this.De.Ve(t,e).next(({documents:t,Se:e})=>(e.forEach((t,e)=>{this.Ce.set(t,e)}),t))}}function Ci(t){return Mr(t,pr.store)}function Oi(t){return Mr(t,fr.store)}function Di(t){return t.path.toArray()}
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
 */class Ni{constructor(t){this.k=t}Nt(t,e,n,r){b(n<r&&n>=0&&r<=11);const i=new Ar("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore(ar.store)}(t),function(t){t.createObjectStore(cr.store,{keyPath:cr.keyPath}),t.createObjectStore(ur.store,{keyPath:ur.keyPath,autoIncrement:!0}).createIndex(ur.userMutationsIndex,ur.userMutationsKeyPath,{unique:!0}),t.createObjectStore(lr.store)}(t),Ri(t),function(t){t.createObjectStore(fr.store)}(t));let s=Sr.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(mr.store),t.deleteObjectStore(gr.store),t.deleteObjectStore(yr.store)}(t),Ri(t)),s=s.next(()=>function(t){const e=t.store(yr.store),n=new yr(0,0,V.min().toTimestamp(),0);return e.put(yr.key,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(t,e){return e.store(ur.store).Bt().next(n=>{t.deleteObjectStore(ur.store),t.createObjectStore(ur.store,{keyPath:ur.keyPath,autoIncrement:!0}).createIndex(ur.userMutationsIndex,ur.userMutationsKeyPath,{unique:!0});const r=e.store(ur.store),i=n.map(t=>r.put(t));return Sr.waitFor(i)})}(t,i))),s=s.next(()=>{!function(t){t.createObjectStore(br.store,{keyPath:br.keyPath})}(t)})),n<5&&r>=5&&(s=s.next(()=>this.Ne(i))),n<6&&r>=6&&(s=s.next(()=>(function(t){t.createObjectStore(pr.store)}(t),this.ke(i)))),n<7&&r>=7&&(s=s.next(()=>this.xe(i))),n<8&&r>=8&&(s=s.next(()=>this.$e(t,i))),n<9&&r>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(fr.store);e.createIndex(fr.readTimeIndex,fr.readTimeIndexPath,{unique:!1}),e.createIndex(fr.collectionReadTimeIndex,fr.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&r>=10&&(s=s.next(()=>this.Fe(i))),n<11&&r>=11&&(s=s.next(()=>{!function(t){t.createObjectStore(wr.store,{keyPath:wr.keyPath})}(t),function(t){t.createObjectStore(_r.store,{keyPath:_r.keyPath})}
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
 */(t)})),s}ke(t){let e=0;return t.store(fr.store).jt((t,n)=>{e+=ai(n)}).next(()=>{const n=new pr(e);return t.store(pr.store).put(pr.key,n)})}Ne(t){const e=t.store(cr.store),n=t.store(ur.store);return e.Bt().next(e=>Sr.forEach(e,e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Bt(ur.userMutationsIndex,r).next(n=>Sr.forEach(n,n=>{b(n.userId===e.userId);const r=Gr(this.k,n);return oi(t,e.userId,r).next(()=>{})}))}))}xe(t){const e=t.store(mr.store),n=t.store(fr.store);return t.store(yr.store).get(yr.key).next(t=>{const r=[];return n.jt((n,i)=>{const s=new H(n),o=function(t){return[0,nr(t)]}(s);r.push(e.get(o).next(n=>n?Sr.resolve():(n=>e.put(new mr(0,nr(n),t.highestListenSequenceNumber)))(s)))}).next(()=>Sr.waitFor(r))})}$e(t,e){t.createObjectStore(vr.store,{keyPath:vr.keyPath});const n=e.store(vr.store),r=new ei,i=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:nr(r)})}};return e.store(fr.store).jt({Kt:!0},(t,e)=>{const n=new H(t);return i(n.popLast())}).next(()=>e.store(lr.store).jt({Kt:!0},([t,e,n],r)=>{const s=sr(e);return i(s.popLast())}))}Fe(t){const e=t.store(gr.store);return e.jt((t,n)=>{const r=Wr(n),i=Qr(this.k,r);return e.put(i)})}}function Ri(t){t.createObjectStore(mr.store,{keyPath:mr.keyPath}).createIndex(mr.documentTargetsIndex,mr.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(gr.store,{keyPath:gr.keyPath}).createIndex(gr.queryTargetsIndexName,gr.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(yr.store)}const Pi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Li{constructor(t,e,n,r,i,s,o,a,c,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Me=c,this.Le=u,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=t=>Promise.resolve(),!Li.bt())throw new T(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ti(this,r),this.Ge=e+"main",this.k=new Vr(a),this.ze=new xr(this.Ge,11,new Ni(this.k)),this.He=new pi(this.referenceDelegate,this.k),this.Jt=new ni,this.Je=function(t,e){return new xi(t,e)}(this.k,this.Jt),this.Ye=new Yr,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===u&&g("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,Pi);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.He.getHighestSequenceNumber(t))}).then(t=>{this.Be=new R(t,this.Me)}).then(()=>{this.Ue=!0}).catch(t=>(this.ze&&this.ze.close(),Promise.reject(t)))}sn(t){return this.We=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ze.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>ji(t).put(new br(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(t).next(t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(t)).next(e=>this.isPrimary&&!e?this.an(t).next(()=>!1):!!e&&this.cn(t).next(()=>!0))).catch(t=>{if(Or(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Oe.enqueueRetryable(()=>this.We(t)),this.isPrimary=t})}rn(t){return Mi(t).get(ar.key).next(t=>Sr.resolve(this.un(t)))}hn(t){return ji(t).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Mr(t,br.store);return e.Bt().next(t=>{const n=this.dn(t,18e5),r=t.filter(t=>-1===n.indexOf(t));return Sr.forEach(r,t=>e.delete(t.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Xe)for(const e of t)this.Xe.removeItem(this.wn(e.clientId))}}nn(){this.je=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(t){return!!t&&t.ownerId===this.clientId}on(t){return this.Le?Sr.resolve(!0):Mi(t).get(ar.key).next(e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)){if(this.un(e)&&this.networkEnabled)return!0;if(!this.un(e)){if(!e.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,Pi);return!1}}return!(!this.networkEnabled||!this.inForeground)||ji(t).Bt().next(t=>void 0===this.dn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&p("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[ar.store,br.store],t=>{const e=new Lr(t,R.I);return this.an(e).next(()=>this.hn(e))}),this.ze.close(),this.pn()}dn(t,e){return t.filter(t=>this.fn(t.updateTimeMs,e)&&!this._n(t.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",t=>ji(t).Bt().next(t=>this.dn(t,18e5).map(t=>t.clientId)))}get started(){return this.Ue}getMutationQueue(t){return ci.Xt(t,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite";let i;return this.ze.runTransaction(t,r,Er,r=>(i=new Lr(r,this.Be?this.Be.next():R.I),"readwrite-primary"===e?this.rn(i).next(t=>!!t||this.on(i)).next(e=>{if(!e)throw g(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)),new T(E.FAILED_PRECONDITION,Tr);return n(i)}).next(t=>this.cn(i).next(()=>t)):this.En(i).next(()=>n(i)))).then(t=>(i.raiseOnCommittedEvent(),t))}En(t){return Mi(t).get(ar.key).next(t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)&&!this.un(t)&&!(this.Le||this.allowTabSynchronization&&t.allowTabSynchronization))throw new T(E.FAILED_PRECONDITION,Pi)})}cn(t){const e=new ar(this.clientId,this.allowTabSynchronization,Date.now());return Mi(t).put(ar.key,e)}static bt(){return xr.bt()}an(t){const e=Mi(t);return e.get(ar.key).next(t=>this.un(t)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete(ar.key)):Sr.resolve())}fn(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(g(`Detected an update time that is in the future: ${t} > ${n}`),!1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.qe=()=>{this.mn(),Object(o["r"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(t){var e;try{const n=null!==(null===(e=this.Xe)||void 0===e?void 0:e.getItem(this.wn(t)));return p("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return g("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(t){g("Failed to set zombie client id.",t)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(t){}}wn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Mi(t){return Mr(t,ar.store)}function ji(t){return Mr(t,br.store)}function Fi(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
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
 */}class Ui{constructor(t,e){this.progress=t,this.In=e}}
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
 */class Vi{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Pn(t,e,n))}Pn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return at.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):te(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new at(e)).next(t=>{let e=nn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const r=e.collectionGroup;let i=nn();return this.Jt.getCollectionParents(t,r).next(s=>Sr.forEach(s,s=>{const o=function(t,e){return new Gt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Cn(t,e,n){let r,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Nn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=It.newInvalidDocument(n),r=r.insert(n,i)),Ne(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{ae(e,n)||(r=r.remove(t))}),r))}Nn(t,e,n){let r=an();for(const s of e)for(const t of s.mutations)t instanceof je&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
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
 */class qi{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=r}static $n(t,e){let n=an(),r=an();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new qi(t,e.fromCache,n,r)}}
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
 */class Bi{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(V.min())?this.Mn(t,e):this.On.vn(t,r).next(i=>{const o=this.Ln(e,i);return(Xt(e)||Yt(e))&&this.Bn(e.limitType,o,r,n)?this.Mn(t,e):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),oe(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new Ye(ce(t));return e.forEach((e,r)=>{ae(t,r)&&(n=n.add(r))}),n}Bn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(t,e){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",oe(e)),this.On.getDocumentsMatchingQuery(t,e,V.min())}}
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
 */class $i{constructor(t,e,n,r){this.persistence=t,this.Un=e,this.k=r,this.qn=new We(M),this.Kn=new Si(t=>xt(t),Ct),this.jn=V.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Vi(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function zi(t,e,n,r){return new $i(t,e,n,r)}async function Hi(t,e){const n=_(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.An.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Vi(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=an();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function Ki(t,e){const n=_(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Sr.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);b(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.An.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,r))})}function Gi(t){const e=_(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function Wi(t,e){const n=_(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.He.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return b(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.He.updateTargetData(t,u))}});let a=tn();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Qi(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(V.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Sr.waitFor(o).next(()=>s.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=i,t))}function Qi(t,e,n,r,i){let s=an();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=tn();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(V.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Xi(t,e){const n=_(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e)))}function Yi(t,e){const n=_(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.He.getTargetData(t,e).next(i=>i?(r=i,Sr.resolve(r)):n.He.allocateTargetId(t).next(i=>(r=new Ur(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.qn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function Ji(t,e,n){const r=_(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Or(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function Zi(t,e,n){const r=_(t);let i=V.min(),s=an();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=_(t),i=r.Kn.get(n);return void 0!==i?Sr.resolve(r.qn.get(i)):r.He.getTargetData(e,n)}(r,t,ne(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Un.getDocumentsMatchingQuery(t,e,n?i:V.min(),n?s:an())).next(t=>({documents:t,zn:s})))}function ts(t,e){const n=_(t),r=_(n.He),i=n.qn.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",t=>r.Et(t,e).next(t=>t?t.target:null))}function es(t){const e=_(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,n){const r=_(t);let i=tn(),s=$r(n);const o=Oi(e),a=IDBKeyRange.lowerBound(s,!0);return o.jt({index:fr.readTimeIndex,range:a},(t,e)=>{const n=qr(r.k,e);i=i.insert(n.key,n),s=e.readTime}).next(()=>({In:i,readTime:zr(s)}))}(e.Qn,t,e.jn)).then(({In:t,readTime:n})=>(e.jn=n,t))}async function ns(t){const e=_(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=Oi(t);let n=V.min();return e.jt({index:fr.readTimeIndex,reverse:!0},(t,e,r)=>{e.readTime&&(n=zr(e.readTime)),r.done()}).next(()=>n)}(t)).then(t=>{e.jn=t})}async function rs(t,e,n,r){const i=_(t);let s=an(),o=tn(),a=sn();for(const l of n){const t=e.Hn(l.metadata.name);l.document&&(s=s.add(t)),o=o.insert(t,e.Jn(l)),a=a.insert(t,e.Yn(l.metadata.readTime))}const c=i.Qn.newChangeBuffer({trackRemovals:!0}),u=await Yi(i,function(t){return ne(Qt(H.fromString("__bundle__/docs/"+t)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",t=>Qi(t,c,o,V.min(),a).next(e=>(c.apply(t),e)).next(e=>i.He.removeMatchingKeysForTargetId(t,u.targetId).next(()=>i.He.addMatchingKeys(t,s,u.targetId)).next(()=>i.Wn.Vn(t,e)).next(()=>e)))}async function is(t,e,n=an()){const r=await Yi(t,ne(Xr(e.bundledQuery))),i=_(t);return i.persistence.runTransaction("Save named query","readwrite",t=>{const s=Sn(e.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ye.saveNamedQuery(t,e);const o=r.withResumeToken(X.EMPTY_BYTE_STRING,s);return i.qn=i.qn.insert(o.targetId,o),i.He.updateTargetData(t,o).next(()=>i.He.removeMatchingKeysForTargetId(t,r.targetId)).next(()=>i.He.addMatchingKeys(t,n,r.targetId)).next(()=>i.Ye.saveNamedQuery(t,e))})}
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
 */class ss{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Sr.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:Sn(n.createTime)}),Sr.resolve()}getNamedQuery(t,e){return Sr.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:Xr(t.bundledQuery),readTime:Sn(t.readTime)}}(e)),Sr.resolve()}}
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
 */class os{constructor(){this.ts=new Ye(as.es),this.ns=new Ye(as.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new as(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new as(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new at(new H([])),n=new as(e,t),r=new as(e,t+1),i=[];return this.ns.forEachInRange([n,r],t=>{this.os(t),i.push(t.key)}),i}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new at(new H([])),n=new as(e,t),r=new as(e,t+1);let i=an();return this.ns.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new as(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class as{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return at.comparator(t.key,e.key)||M(t.fs,e.fs)}static ss(t,e){return M(t.fs,e.fs)||at.comparator(t.key,e.key)}}
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
 */class cs{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Ye(as.es)}checkEmpty(t){return Sr.resolve(0===this.An.length)}addMutationBatch(t,e,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new jr(i,e,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new as(o.key,i)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return Sr.resolve(s)}lookupMutationBatch(t,e){return Sr.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.gs(n),i=r<0?0:r;return Sr.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Sr.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Sr.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new as(e,0),r=new as(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],t=>{const e=this._s(t.fs);i.push(e)}),Sr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ye(M);return e.forEach(t=>{const e=new as(t,0),r=new as(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,r],t=>{n=n.add(t.fs)})}),Sr.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;at.isDocumentKey(i)||(i=i.child(""));const s=new as(new at(i),0);let o=new Ye(M);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.fs)),!0)},s),Sr.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){b(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Sr.forEach(e.mutations,r=>{const i=new as(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new as(e,0),r=this.ws.firstAfterOrEqual(n);return Sr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.An.length,Sr.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
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
 */class us{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new We(at.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Sr.resolve(n?n.document.clone():It.newInvalidDocument(e))}getEntries(t,e){let n=tn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():It.newInvalidDocument(t))}),Sr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=tn();const i=new at(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||ae(e,i)&&(r=r.insert(i.key,i.clone()))}return Sr.resolve(r)}Es(t,e){return Sr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new ls(this)}getSize(t){return Sr.resolve(this.size)}}class ls extends Ai{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.De.addEntry(t,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),Sr.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
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
 */class hs{constructor(t){this.persistence=t,this.Is=new Si(t=>xt(t),Ct),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.As=0,this.Rs=new os,this.targetCount=0,this.Ps=fi.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),Sr.resolve()}getLastRemoteSnapshotVersion(t){return Sr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Sr.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Sr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Sr.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new fi(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Sr.resolve()}updateTargetData(t,e){return this.ce(e),Sr.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Sr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Sr.waitFor(i).next(()=>r)}getTargetCount(t){return Sr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Sr.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Sr.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Sr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Sr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Sr.resolve(n)}containsKey(t,e){return Sr.resolve(this.Rs.containsKey(e))}}
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
 */class ds{constructor(t,e){this.bs={},this.Be=new R(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new hs(this),this.Jt=new ti,this.Je=function(t,e){return new us(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Vr(e),this.Ye=new ss(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new cs(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new fs(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(t=>this.referenceDelegate.Ss(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ds(t,e){return Sr.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class fs extends Ir{constructor(t){super(),this.currentSequenceNumber=t}}class ps{constructor(t){this.persistence=t,this.Cs=new os,this.Ns=null}static ks(t){return new ps(t)}get xs(){if(this.Ns)return this.Ns;throw v()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Sr.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Sr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Sr.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Sr.forEach(this.xs,n=>{const r=at.fromPath(n);return this.$s(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return Sr.or([()=>Sr.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
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
 */function gs(t,e){return`firestore_clients_${t}_${e}`}function ms(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+="_"+e.uid),r}function ys(t,e){return`firestore_targets_${t}_${e}`}class vs{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static Fs(t,e,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new T(r.error.code,r.error.message))),s?new vs(t,e,r.state,i):(g("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class bs{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Fs(t,e){const n=JSON.parse(e);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new T(n.error.code,n.error.message))),i?new bs(t,n.state,r):(g("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ws{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Fs(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=un();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ot(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new ws(t,i):(g("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class _s{constructor(t,e){this.clientId=t,this.onlineState=e}static Fs(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new _s(e.clientId,e.onlineState):(g("SharedClientState","Failed to parse online state: "+t),null)}}class Es{constructor(){this.activeTargetIds=un()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ts{constructor(t,e,n,r,i){this.window=t,this.Oe=e,this.persistenceKey=n,this.Bs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new We(M),this.started=!1,this.js=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Qs=gs(this.persistenceKey,this.Bs),this.Ws=function(t){return"firestore_sequence_number_"+t}
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
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new Es),this.Gs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Js=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Ys=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static bt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Tn();for(const n of t){if(n===this.Bs)continue;const t=this.getItem(gs(this.persistenceKey,n));if(t){const e=ws.Fs(n,t);e&&(this.Ks=this.Ks.insert(e.clientId,e))}}this.Xs();const e=this.storage.getItem(this.Js);if(e){const t=this.Zs(e);t&&this.ti(t)}for(const n of this.js)this.qs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ws,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(t){let e=!1;return this.Ks.forEach((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ni(t,"pending")}updateMutationState(t,e,n){this.ni(t,e,n),this.si(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(ys(this.persistenceKey,t));if(n){const r=bs.Fs(t,n);r&&(e=r.state)}}return this.ii.Ms(t),this.Xs(),e}removeLocalQueryTarget(t){this.ii.Ls(t),this.Xs()}isLocalQueryTarget(t){return this.ii.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(ys(this.persistenceKey,t))}updateQueryState(t,e,n){this.ri(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.si(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.oi(t)}notifyBundleLoaded(){this.ai()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}qs(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Qs)return void g("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Gs.test(e.key)){if(null==e.newValue){const t=this.ci(e.key);return this.ui(t,null)}{const t=this.hi(e.key,e.newValue);if(t)return this.ui(t.clientId,t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.li(e.key,e.newValue);if(t)return this.fi(t)}}else if(this.Hs.test(e.key)){if(null!==e.newValue){const t=this.di(e.key,e.newValue);if(t)return this.wi(t)}}else if(e.key===this.Js){if(null!==e.newValue){const t=this.Zs(e.newValue);if(t)return this.ti(t)}}else if(e.key===this.Ws){const t=function(t){let e=R.I;if(null!=t)try{const n=JSON.parse(t);b("number"==typeof n),e=n}catch(t){g("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==R.I&&this.sequenceNumberHandler(t)}else if(e.key===this.Ys)return this.syncEngine._i()}else this.js.push(e)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Os())}ni(t,e,n){const r=new vs(this.currentUser,t,e,n),i=ms(this.persistenceKey,this.currentUser,t);this.setItem(i,r.Os())}si(t){const e=ms(this.persistenceKey,this.currentUser,t);this.removeItem(e)}oi(t){const e={clientId:this.Bs,onlineState:t};this.storage.setItem(this.Js,JSON.stringify(e))}ri(t,e,n){const r=ys(this.persistenceKey,t),i=new bs(t,e,n);this.setItem(r,i.Os())}ai(){this.setItem(this.Ys,"value-not-used")}ci(t){const e=this.Gs.exec(t);return e?e[1]:null}hi(t,e){const n=this.ci(t);return ws.Fs(n,e)}li(t,e){const n=this.zs.exec(t),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return vs.Fs(new u(i),r,e)}di(t,e){const n=this.Hs.exec(t),r=Number(n[1]);return bs.Fs(r,e)}Zs(t){return _s.Fs(t)}async fi(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.mi(t.batchId,t.state,t.error);p("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}wi(t){return this.syncEngine.gi(t.targetId,t.state,t.error)}ui(t,e){const n=e?this.Ks.insert(t,e):this.Ks.remove(t),r=this.ei(this.Ks),i=this.ei(n),s=[],o=[];return i.forEach(t=>{r.has(t)||s.push(t)}),r.forEach(t=>{i.has(t)||o.push(t)}),this.syncEngine.yi(s,o).then(()=>{this.Ks=n})}ti(t){this.Ks.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ei(t){let e=un();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class Is{constructor(){this.pi=new Es,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Es,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class Ss{Ei(t){}shutdown(){}}
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
 */class As{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const xs={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class ks{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
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
 */class Cs extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,r,i){const s=this.Ui(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(t,s,o,n).then(t=>(p("RestConnection","Received: ",t),t),e=>{throw m("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}ji(t,e,n,r,i){return this.Bi(t,e,n,r,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=xs[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(t.status);s(new T(e,t.message))}else s(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["p"])()||Object(o["q"])()||Object(o["m"])()||Object(o["n"])()||Object(o["s"])()||Object(o["l"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const f=new ks({Vi:t=>{d?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",t),l.send(t))},Si:()=>l.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(l,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),g(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.Fi())}),g(l,a["f"].EventType.ERROR,t=>{d||(d=!0,m("Connection","WebChannel transport errored:",t),f.Fi(new T(E.UNAVAILABLE,"The operation could not be completed")))}),g(l,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];b(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=ze[t];if(void 0!==e)return Ge(e)}(t),n=i.message;void 0===e&&(e=E.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,f.Fi(new T(e,n)),l.close()}else p("Connection","WebChannel received:",n),f.Oi(n)}}),g(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}
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
 */function Os(){return"undefined"!=typeof window?window:null}function Ds(){return"undefined"!=typeof document?document:null}
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
 */function Ns(t){return new _n(t,!0)}class Rs{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
 */class Ps{constructor(t,e,n,r,i,s,o,a){this.Oe=t,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Rs(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new T(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return p("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget(()=>this.rr===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ls extends Ps{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=jn(this.k,t),n=function(t){if(!("targetChange"in t))return V.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?V.min():e.readTime?Sn(e.readTime):V.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=Nn(this.k),e.addTarget=function(t,e){let n;const r=e.target;return n=Ot(r)?{documents:qn(t,r)}:{query:Bn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Tn(t,e.resumeToken):e.snapshotVersion.compareTo(V.min())>0&&(n.readTime=En(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=zn(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=Nn(this.k),e.removeTarget=t,this.gr(e)}}class Ms extends Ps{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=Vn(t.writeResults,t.commitTime),n=Sn(t.commitTime);return this.listener.Cr(n,e)}return b(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=Nn(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Fn(this.k,t))};this.gr(e)}}
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
 */class js extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())})}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class Fs{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(g(e),this.Lr=!1):p("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
 */class Us{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Ws(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_(t);e.Gr.add(4),await qs(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Vs(e)}(this))})}),this.Jr=new Fs(n,r)}}async function Vs(t){if(Ws(t))for(const e of t.zr)await e(!0)}async function qs(t){for(const e of t.zr)await e(!1)}function Bs(t,e){const n=_(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Gs(n)?Ks(n):ho(n).lr()&&zs(n,e))}function $s(t,e){const n=_(t),r=ho(n);n.Wr.delete(e),r.lr()&&Hs(n,e),0===n.Wr.size&&(r.lr()?r._r():Ws(n)&&n.Jr.set("Unknown"))}function zs(t,e){t.Yr.X(e.targetId),ho(t).br(e)}function Hs(t,e){t.Yr.X(e),ho(t).vr(e)}function Ks(t){t.Yr=new mn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),ho(t).start(),t.Jr.Br()}function Gs(t){return Ws(t)&&!ho(t).hr()&&t.Wr.size>0}function Ws(t){return 0===_(t).Gr.size}function Qs(t){t.Yr=void 0}async function Xs(t){t.Wr.forEach((e,n)=>{zs(t,e)})}async function Ys(t,e){Qs(t),Gs(t)?(t.Jr.Kr(e),Ks(t)):t.Jr.set("Unknown")}async function Js(t,e,n){if(t.Jr.set("Online"),e instanceof pn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Wr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Wr.delete(r),t.Yr.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Zs(t,n)}else if(e instanceof dn?t.Yr.ot(e):e instanceof fn?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(V.min()))try{const e=await Gi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(r);i&&t.Wr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(X.EMPTY_BYTE_STRING,n.snapshotVersion)),Hs(t,e);const r=new Ur(n.target,e,1,n.sequenceNumber);zs(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await Zs(t,e)}}async function Zs(t,e,n){if(!Or(e))throw e;t.Gr.add(1),await qs(t),t.Jr.set("Offline"),n||(n=()=>Gi(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Vs(t)})}function to(t,e){return e().catch(n=>Zs(t,n,e))}async function eo(t){const e=_(t),n=fo(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;no(e);)try{const t=await Xi(e.localStore,r);if(null===t){0===e.Qr.length&&n._r();break}r=t.batchId,ro(e,t)}catch(t){await Zs(e,t)}io(e)&&so(e)}function no(t){return Ws(t)&&t.Qr.length<10}function ro(t,e){t.Qr.push(e);const n=fo(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function io(t){return Ws(t)&&!fo(t).hr()&&t.Qr.length>0}function so(t){fo(t).start()}async function oo(t){fo(t).kr()}async function ao(t){const e=fo(t);for(const n of t.Qr)e.Dr(n.mutations)}async function co(t,e,n){const r=t.Qr.shift(),i=Fr.from(r,e,n);await to(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await eo(t)}async function uo(t,e){e&&fo(t).Sr&&await async function(t,e){if(n=e.code,Ke(n)&&n!==E.ABORTED){const n=t.Qr.shift();fo(t).wr(),await to(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await eo(t)}var n}(t,e),io(t)&&so(t)}async function lo(t,e){const n=_(t);e?(n.Gr.delete(2),await Vs(n)):e||(n.Gr.add(2),await qs(n),n.Jr.set("Unknown"))}function ho(t){return t.Xr||(t.Xr=function(t,e,n){const r=_(t);return r.Fr(),new Ls(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
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
 */}(t.datastore,t.asyncQueue,{Di:Xs.bind(null,t),Ni:Ys.bind(null,t),Pr:Js.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Gs(t)?Ks(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Qs(t))})),t.Xr}function fo(t){return t.Zr||(t.Zr=function(t,e,n){const r=_(t);return r.Fr(),new Ms(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(t.datastore,t.asyncQueue,{Di:oo.bind(null,t),Ni:uo.bind(null,t),Nr:ao.bind(null,t),Cr:co.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await eo(t)):(await t.Zr.stop(),t.Qr.length>0&&(p("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr
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
 */}class po{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new po(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function go(t,e){if(g("AsyncQueue",`${e}: ${t}`),Or(t))return new T(E.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class mo{constructor(t){this.comparator=t?(e,n)=>t(e,n)||at.comparator(e.key,n.key):(t,e)=>at.comparator(t.key,e.key),this.keyedMap=nn(),this.sortedSet=new We(this.comparator)}static emptySet(t){return new mo(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof mo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new mo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class yo{constructor(){this.eo=new We(at.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):v():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class vo{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new vo(t,e,mo.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ie(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class bo{constructor(){this.so=void 0,this.listeners=[]}}class wo{constructor(){this.queries=new Si(t=>se(t),ie),this.onlineState="Unknown",this.io=new Set}}async function _o(t,e){const n=_(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new bo),i)try{s.so=await n.onListen(r)}catch(t){const n=go(t,`Initialization of query '${oe(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&So(n)}async function Eo(t,e){const n=_(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function To(t,e){const n=_(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(i)&&(r=!0);e.so=i}}r&&So(n)}function Io(t,e,n){const r=_(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function So(t){t.io.forEach(t=>{t.next()})}class Ao{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new vo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=vo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
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
 */class xo{constructor(t,e){this.payload=t,this.byteLength=e}_o(){return"metadata"in this.payload}}
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
 */class ko{constructor(t){this.k=t}Hn(t){return Cn(this.k,t)}Jn(t){return t.metadata.exists?Ln(this.k,t.document,!1):It.newNoDocument(this.Hn(t.metadata.name),this.Yn(t.metadata.readTime))}Yn(t){return Sn(t)}}class Co{constructor(t,e,n){this.mo=t,this.localStore=e,this.k=n,this.queries=[],this.documents=[],this.progress=Oo(t)}yo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}po(t){const e=new Map,n=new ko(this.k);for(const r of t)if(r.metadata.queries){const t=n.Hn(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||an()).add(t);e.set(n,r)}}return e}async complete(){const t=await rs(this.localStore,new ko(this.k),this.documents,this.mo.id),e=this.po(this.documents);for(const n of this.queries)await is(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new Ui(Object.assign({},this.progress),t)}}function Oo(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
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
 */class Do{constructor(t){this.key=t}}class No{constructor(t){this.key=t}}class Ro{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=an(),this.mutatedKeys=an(),this.Ao=ce(t),this.Ro=new mo(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new yo,r=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Xt(this.query)&&r.size===this.query.limit?r.last():null,c=Yt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=ae(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ao(l,a)>0||c&&this.Ao(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Xt(this.query)||Yt(this.query))for(;s.size>this.query.limit;){const t=Xt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new vo(this.query,t.Ro,r,i,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new yo,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=an(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new No(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new Do(n))}),e}ko(t){this.To=t.zn,this.Io=an();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return vo.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Po{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Lo{constructor(t){this.key=t,this.$o=!1}}class Mo{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new Si(t=>se(t),ie),this.Mo=new Map,this.Lo=new Set,this.Bo=new We(at.comparator),this.Uo=new Map,this.qo=new os,this.Ko={},this.jo=new Map,this.Qo=fi.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function jo(t,e){const n=da(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await Yi(n.localStore,ne(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Fo(n,e,r,"current"===s),n.isPrimaryClient&&Bs(n.remoteStore,t)}return i}async function Fo(t,e,n,r){t.Go=(e,n,r)=>async function(t,e,n,r){let i=e.view.bo(n);i.Bn&&(i=await Zi(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Yo(t,e.targetId,o.Co),o.snapshot}(t,e,n,r);const i=await Zi(t.localStore,e,!0),s=new Ro(e,i.zn),o=s.bo(i.documents),a=hn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Yo(t,n,c.Co);const u=new Po(e,n,s);return t.Oo.set(e,u),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function Uo(t,e){const n=_(t),r=n.Oo.get(e),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(t=>!ie(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ji(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$s(n.remoteStore,r.targetId),Qo(n,r.targetId)}).catch(vi)):(Qo(n,r.targetId),await Ji(n.localStore,r.targetId,!0))}async function Vo(t,e,n){const r=fa(t);try{const t=await function(t,e){const n=_(t),r=U.now(),i=e.reduce((t,e)=>t.add(e.key),an());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Wn.vn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=Re(t,s.get(t.key));null!=e&&o.push(new je(t.key,e,Tt(e.value.mapValue),ke.exists(!0)))}return n.An.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ko[t.currentUser.toKey()];r||(r=new We(M)),r=r.insert(e,n),t.Ko[t.currentUser.toKey()]=r}(r,t.batchId,n),await ta(r,t.changes),await eo(r.remoteStore)}catch(t){const e=go(t,"Failed to persist write");n.reject(e)}}async function qo(t,e){const n=_(t);try{const t=await Wi(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Uo.get(e);r&&(b(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.$o=!0:t.modifiedDocuments.size>0?b(r.$o):t.removedDocuments.size>0&&(b(r.$o),r.$o=!1))}),await ta(n,t,e)}catch(t){await vi(t)}}function Bo(t,e,n){const r=_(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const i=r.view.ro(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=_(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.ro(e)&&(r=!0)}),r&&So(n)}(r.eventManager,e),t.length&&r.Fo.Pr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $o(t,e,n){const r=_(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let t=new We(at.comparator);t=t.insert(s,It.newNoDocument(s,V.min()));const n=an().add(s),i=new ln(V.min(),new Map,new Ye(M),t,n);await qo(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(e),Zo(r)}else await Ji(r.localStore,e,!1).then(()=>Qo(r,e,n)).catch(vi)}async function zo(t,e){const n=_(t),r=e.batch.batchId;try{const t=await Ki(n.localStore,e);Wo(n,r,null),Go(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,t)}catch(t){await vi(t)}}async function Ho(t,e,n){const r=_(t);try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.An.lookupMutationBatch(t,e).next(e=>(b(null!==e),r=e.keys(),n.An.removeMutationBatch(t,e))).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,r))})}(r.localStore,e);Wo(r,e,n),Go(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,t)}catch(n){await vi(n)}}async function Ko(t,e){const n=_(t);Ws(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=_(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.An.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const r=n.jo.get(t)||[];r.push(e),n.jo.set(t,r)}catch(t){const n=go(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Go(t,e){(t.jo.get(e)||[]).forEach(t=>{t.resolve()}),t.jo.delete(e)}function Wo(t,e,n){const r=_(t);let i=r.Ko[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function Qo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||Xo(t,e)})}function Xo(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&($s(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Zo(t))}function Yo(t,e,n){for(const r of n)r instanceof Do?(t.qo.addReference(r.key,e),Jo(t,r)):r instanceof No?(p("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Xo(t,r.key)):v()}function Jo(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(p("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Zo(t))}function Zo(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new at(H.fromString(e)),r=t.Qo.next();t.Uo.set(r,new Lo(n)),t.Bo=t.Bo.insert(n,r),Bs(t.remoteStore,new Ur(ne(Qt(n.path)),r,2,R.I))}}async function ta(t,e,n){const r=_(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Go(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=qi.$n(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(t,e){const n=_(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Sr.forEach(e,e=>Sr.forEach(e.kn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Sr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Or(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function ea(t,e){const n=_(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Hi(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new T(E.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ta(n,t.Gn)}}function na(t,e){const n=_(t),r=n.Uo.get(e);if(r&&r.$o)return an().add(r.key);{let t=an();const r=n.Mo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Po)}return t}}async function ra(t,e){const n=_(t),r=await Zi(n.localStore,e.query,!0),i=e.view.ko(r);return n.isPrimaryClient&&Yo(n,e.targetId,i.Co),i}async function ia(t){const e=_(t);return es(e.localStore).then(t=>ta(e,t))}async function sa(t,e,n,r){const i=_(t),s=await function(t,e){const n=_(t),r=_(n.An);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>r.Zt(t,e).next(e=>e?n.Wn.vn(t,e):Sr.resolve(null)))}(i.localStore,e);null!==s?("pending"===n?await eo(i.remoteStore):"acknowledged"===n||"rejected"===n?(Wo(i,e,r||null),Go(i,e),function(t,e){_(_(t).An).ee(e)}(i.localStore,e)):v(),await ta(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+e)}async function oa(t,e){const n=_(t);if(da(n),fa(n),!0===e&&!0!==n.Wo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await aa(n,t.toArray());n.Wo=!0,await lo(n.remoteStore,!0);for(const r of e)Bs(n.remoteStore,r)}else if(!1===e&&!1!==n.Wo){const t=[];let e=Promise.resolve();n.Mo.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?t.push(i):e=e.then(()=>(Qo(n,i),Ji(n.localStore,i,!0))),$s(n.remoteStore,i)}),await e,await aa(n,t),function(t){const e=_(t);e.Uo.forEach((t,n)=>{$s(e.remoteStore,n)}),e.qo.hs(),e.Uo=new Map,e.Bo=new We(at.comparator)}(n),n.Wo=!1,await lo(n.remoteStore,!1)}}async function aa(t,e,n){const r=_(t),i=[],s=[];for(const o of e){let t;const e=r.Mo.get(o);if(e&&0!==e.length){t=await Yi(r.localStore,ne(e[0]));for(const t of e){const e=r.Oo.get(t),n=await ra(r,e);n.snapshot&&s.push(n.snapshot)}}else{const e=await ts(r.localStore,o);t=await Yi(r.localStore,e),await Fo(r,ca(e),o,!1)}i.push(t)}return r.Fo.Pr(s),i}function ca(t){return Wt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function ua(t){const e=_(t);return _(_(e.localStore).persistence).Tn()}async function la(t,e,n,r){const i=_(t);if(i.Wo)p("SyncEngine","Ignoring unexpected query state notification.");else if(i.Mo.has(e))switch(n){case"current":case"not-current":{const t=await es(i.localStore),r=ln.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await ta(i,t,r);break}case"rejected":await Ji(i.localStore,e,!0),Qo(i,e,r);break;default:v()}}async function ha(t,e,n){const r=da(t);if(r.Wo){for(const t of e){if(r.Mo.has(t)){p("SyncEngine","Adding an already active target "+t);continue}const e=await ts(r.localStore,t),n=await Yi(r.localStore,e);await Fo(r,ca(e),n.targetId,!1),Bs(r.remoteStore,n)}for(const t of n)r.Mo.has(t)&&await Ji(r.localStore,t,!1).then(()=>{$s(r.remoteStore,t),Qo(r,t)}).catch(vi)}}function da(t){const e=_(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=na.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$o.bind(null,e),e.Fo.Pr=To.bind(null,e.eventManager),e.Fo.zo=Io.bind(null,e.eventManager),e}function fa(t){const e=_(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ho.bind(null,e),e}function pa(t,e,n){const r=_(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=_(t),r=Sn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Ye.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(r)>=0)}(t.localStore,r))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r));n._updateProgress(Oo(r));const i=new Co(r,t.localStore,e.k);let s=await e.Ho();for(;s;){const t=await i.yo(s);t&&n._updateProgress(t),s=await e.Ho()}const o=await i.complete();await ta(t,o.In,void 0),await function(t,e){const n=_(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Ye.saveBundleMetadata(t,e))}(t.localStore,r),n._completeWith(o.progress)}catch(t){m("SyncEngine","Loading bundle failed with "+t),n._failWith(t)}}
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
 */)(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class ga{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Ns(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return zi(this.persistence,new Bi,t.initialUser,this.k)}Yo(t){return new ds(ps.ks,this.k)}Jo(t){return new Is}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ma extends ga{constructor(t,e,n){super(),this.ta=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await ns(this.localStore),await this.ta.initialize(this,t),await fa(this.ta.syncEngine),await eo(this.ta.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(t){return zi(this.persistence,new Bi,t.initialUser,this.k)}Xo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new _i(e,t.asyncQueue)}Yo(t){const e=Fi(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?si.withCacheSize(this.cacheSizeBytes):si.DEFAULT;return new Li(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Os(),Ds(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(t){return new Is}}class ya extends ma{constructor(t,e){super(t,e,!1),this.ta=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.ta.syncEngine;this.sharedClientState instanceof Ts&&(this.sharedClientState.syncEngine={mi:sa.bind(null,e),gi:la.bind(null,e),yi:ha.bind(null,e),Tn:ua.bind(null,e),_i:ia.bind(null,e)},await this.sharedClientState.start()),await this.persistence.sn(async t=>{await oa(this.ta.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Jo(t){const e=Os();if(!Ts.bt(e))throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Fi(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Ts(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class va{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Bo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ea.bind(null,this.syncEngine),await lo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new wo}createDatastore(t){const e=Ns(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Cs(r));var r;return function(t,e,n,r){return new js(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Bo(this.syncEngine,t,0),s=As.bt()?new As:new Ss,new Us(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Mo(t,e,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_(t);p("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await qs(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
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
 */function ba(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
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
 */class wa{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
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
 */class _a{constructor(t,e){this.sa=t,this.k=e,this.metadata=new I,this.buffer=new Uint8Array,this.ia=new TextDecoder("utf-8"),this.ra().then(t=>{t&&t._o()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.sa.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.ra()}async ra(){const t=await this.oa();if(null===t)return null;const e=this.ia.decode(t),n=Number(e);isNaN(n)&&this.aa(`length string (${e}) is not valid number`);const r=await this.ca(n);return new xo(JSON.parse(r),t.length+n)}ua(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async oa(){for(;this.ua()<0;)if(await this.ha())break;if(0===this.buffer.length)return null;const t=this.ua();t<0&&this.aa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ca(t){for(;this.buffer.length<t;)await this.ha()&&this.aa("Reached the end of bundle when more is expected.");const e=this.ia.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}aa(t){throw this.sa.cancel(),new Error("Invalid bundle format: "+t)}async ha(){const t=await this.sa.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
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
 */class Ea{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=_(t),r=Nn(n.k)+"/documents",i={documents:e.map(t=>kn(n.k,t))},s=await n.ji("BatchGetDocuments",r,i),o=new Map;s.forEach(t=>{const e=Mn(n.k,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());b(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new qe(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=at.fromPath(e);this.mutations.push(new Be(n,this.precondition(n)))}),await async function(t,e){const n=_(t),r=Nn(n.k)+"/documents",i={writes:e.map(t=>Fn(n.k,t))};await n.Bi("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw v();e=V.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?ke.updateTime(e):ke.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(V.min()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ke.updateTime(e)}return ke.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
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
 */class Ta{constructor(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.la=5,this.ur=new Rs(this.asyncQueue,"transaction_retry")}run(){this.la-=1,this.fa()}fa(){this.ur.Zi(async()=>{const t=new Ea(this.datastore),e=this.da(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.wa(t)}))}).catch(t=>{this.wa(t)})})}da(t){try{const e=this.updateFunction(t);return!it(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}wa(t){this.la>0&&this._a(t)?(this.la-=1,this.asyncQueue.enqueueAndForget(()=>(this.fa(),Promise.resolve()))):this.deferred.reject(t)}_a(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!Ke(e)}return!1}}
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
 */class Ia{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=L.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=go(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Sa(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Hi(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Aa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xa(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=_(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Ws(n);n.Gr.add(3),await qs(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Vs(n)}(e.remoteStore,t)),t.onlineComponents=e}async function xa(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Sa(t,new ga)),t.offlineComponents}async function ka(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Aa(t,new va)),t.onlineComponents}function Ca(t){return xa(t).then(t=>t.persistence)}function Oa(t){return xa(t).then(t=>t.localStore)}function Da(t){return ka(t).then(t=>t.remoteStore)}function Na(t){return ka(t).then(t=>t.syncEngine)}async function Ra(t){const e=await ka(t),n=e.eventManager;return n.onListen=jo.bind(null,e.syncEngine),n.onUnlisten=Uo.bind(null,e.syncEngine),n}function Pa(t){return t.asyncQueue.enqueue(async()=>{const e=await Ca(t),n=await Da(t);return e.setNetworkEnabled(!0),function(t){const e=_(t);return e.Gr.delete(0),Vs(e)}(n)})}function La(t){return t.asyncQueue.enqueue(async()=>{const e=await Ca(t),n=await Da(t);return e.setNetworkEnabled(!1),async function(t){const e=_(t);e.Gr.add(0),await qs(e),e.Jr.set("Offline")}(n)})}function Ma(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await function(t,e){const n=_(t);return n.persistence.runTransaction("read document","readonly",t=>n.Wn.Rn(t,e))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=go(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await Oa(t),e,n)),n.promise}function ja(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new wa({next:s=>{e.enqueueAndForget(()=>Eo(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Ao(Qt(n.path),s,{includeMetadataChanges:!0,wo:!0});return _o(t,o)}(await Ra(t),t.asyncQueue,e,n,r)),r.promise}function Fa(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await Zi(t,e,!0),i=new Ro(e,r.zn),s=i.bo(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const r=go(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await Oa(t),e,n)),n.promise}function Ua(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new wa({next:n=>{e.enqueueAndForget(()=>Eo(t,o)),n.fromCache&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ao(n,s,{includeMetadataChanges:!0,wo:!0});return _o(t,o)}(await Ra(t),t.asyncQueue,e,n,r)),r.promise}function Va(t,e){const n=new wa(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).io.add(e),e.next()}(await Ra(t),n)),()=>{n.na(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).io.delete(e)}(await Ra(t),n))}}function qa(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(t){return ka(t).then(t=>t.datastore)}(t);new Ta(t.asyncQueue,r,e,n).run()}),n.promise}function Ba(t,e,n,r){const i=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new _a(t,e)}(function(t,e){if(t instanceof Uint8Array)return ba(t,e);if(t instanceof ArrayBuffer)return ba(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
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
 */(n,Ns(e));t.asyncQueue.enqueueAndForget(async()=>{pa(await Na(t),i,r)})}function $a(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=_(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Ye.getNamedQuery(t,e))}(await Oa(t),e))}class za{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ha{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ha&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Ka=new Map;
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
 */function Ga(t,e,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wa(t,e,n,r){if(!0===e&&!0===r)throw new T(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qa(t){if(!at.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xa(t){if(at.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ya(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function Ja(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(t);throw new T(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Za(t,e){if(e<=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
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
 */class tc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Wa("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class ec{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tc({}),this._settingsFrozen=!1,t instanceof Ha?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new A;switch(t.type){case"gapi":const e=t.client;return b(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new O(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ka.get(t);e&&(p("ComponentProvider","Removing Datastore"),Ka.delete(t),e.terminate())}(this),Promise.resolve()}}function nc(t,e,n,r={}){var i;const s=(t=Ja(t,ec))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(o["e"])(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._authCredentials=new x(new S(e,n))}}
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
 */class rc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rc(this.firestore,t,this._key)}}class ic{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ic(this.firestore,t,this._query)}}class sc extends ic{constructor(t,e,n){super(t,e,Qt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rc(this.firestore,null,new at(t))}withConverter(t){return new sc(this.firestore,t,this._path)}}function oc(t,e,...n){if(t=Object(o["i"])(t),Ga("collection","path",e),t instanceof ec){const r=H.fromString(e,...n);return Xa(r),new sc(t,null,r)}{if(!(t instanceof rc||t instanceof sc))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(H.fromString(e,...n));return Xa(r),new sc(t.firestore,null,r)}}function ac(t,e){if(t=Ja(t,ec),Ga("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ic(t,null,function(t){return new Gt(H.emptyPath(),t)}(e))}function cc(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=L.A()),Ga("doc","path",e),t instanceof ec){const r=H.fromString(e,...n);return Qa(r),new rc(t,null,new at(r))}{if(!(t instanceof rc||t instanceof sc))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(H.fromString(e,...n));return Qa(r),new rc(t.firestore,t instanceof sc?t.converter:null,new at(r))}}function uc(t,e){return t=Object(o["i"])(t),e=Object(o["i"])(e),(t instanceof rc||t instanceof sc)&&(e instanceof rc||e instanceof sc)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function lc(t,e){return t=Object(o["i"])(t),e=Object(o["i"])(e),t instanceof ic&&e instanceof ic&&t.firestore===e.firestore&&ie(t._query,e._query)&&t.converter===e.converter
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
 */}class hc{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Rs(this,"async_queue_retry"),this.Ra=()=>{const t=Ds();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Ds();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Ds();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise(()=>{});const e=new I;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ga.push(t),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Or(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(t){const e=this.ma.then(()=>(this.Ea=!0,t().catch(t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw g("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ea=!1,t))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const r=po.createAndSchedule(this,t,e,n,t=>this.Va(t));return this.pa.push(r),r}Pa(){this.Ta&&v()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then(()=>{this.pa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()})}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}function dc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(t,["next","error","complete"])}class fc{constructor(){this._progressObserver={},this._taskCompletionResolver=new I,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
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
 */const pc=-1;class gc extends ec{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new hc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yc(this),this._firestoreClient.terminate()}}function mc(t){return t._firestoreClient||yc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yc(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new za(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ia(t._authCredentials,t._appCheckCredentials,t._queue,r)}function vc(t,e){xc(t=Ja(t,gc));const n=mc(t),r=t._freezeSettings(),i=new va;return wc(n,i,new ma(i,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function bc(t){xc(t=Ja(t,gc));const e=mc(t),n=t._freezeSettings(),r=new va;return wc(e,r,new ya(r,n.cacheSizeBytes))}function wc(t,e,n){const r=new I;return t.asyncQueue.enqueue(async()=>{try{await Sa(t,n),await Aa(t,e),r.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}}).then(()=>r.promise)}function _c(t){if(t._initialized&&!t._terminated)throw new T(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new I;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!xr.bt())return Promise.resolve();const e=t+"main";await xr.delete(e)}(Fi(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Ec(t){return function(t){const e=new I;return t.asyncQueue.enqueueAndForget(async()=>Ko(await Na(t),e)),e.promise}(mc(t=Ja(t,gc)))}function Tc(t){return Pa(mc(t=Ja(t,gc)))}function Ic(t){return La(mc(t=Ja(t,gc)))}function Sc(t,e){const n=mc(t=Ja(t,gc)),r=new fc;return Ba(n,t._databaseId,e,r),r}function Ac(t,e){return $a(mc(t=Ja(t,gc)),e).then(e=>e?new ic(t,null,e.query):null)}function xc(t){if(t._initialized||t._terminated)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
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
 */class kc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Cc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Cc(X.fromBase64String(t))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Cc(X.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Oc{constructor(t){this._methodName=t}}
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
 */class Dc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return M(this._lat,t._lat)||M(this._long,t._long)}}
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
 */const Nc=/^__.*__$/;class Rc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new je(t,this.data,this.fieldMask,e,this.fieldTransforms):new Me(t,this.data,e,this.fieldTransforms)}}class Pc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new je(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Lc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Mc{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new Mc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.Ma(t),r}La(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return nu(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Lc(this.xa)&&Nc.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class jc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Ns(t)}ja(t,e,n,r=!1){return new Mc({xa:t,methodName:e,Ka:n,path:G.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Fc(t){const e=t._freezeSettings(),n=Ns(t._databaseId);return new jc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Uc(t,e,n,r,i,s={}){const o=t.ja(s.merge||s.mergeFields?2:0,e,n,i);Jc("Data must be an object, but it was:",o,r);const a=Xc(r,o);let c,u;if(s.merge)c=new W(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Zc(e,r,n);if(!o.contains(i))throw new T(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ru(t,i)||t.push(i)}c=new W(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Rc(new Et(a),c,u)}class Vc extends Oc{_toFieldTransform(t){if(2!==t.xa)throw 1===t.xa?t.Ua(this._methodName+"() can only appear at the top level of your update data"):t.Ua(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vc}}function qc(t,e,n){return new Mc({xa:3,Ka:e.settings.Ka,methodName:t._methodName,Oa:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class Bc extends Oc{_toFieldTransform(t){return new Se(t.path,new ye)}isEqual(t){return t instanceof Bc}}class $c extends Oc{constructor(t,e){super(t),this.Qa=e}_toFieldTransform(t){const e=qc(this,t,!0),n=this.Qa.map(t=>Qc(t,e)),r=new ve(n);return new Se(t.path,r)}isEqual(t){return this===t}}class zc extends Oc{constructor(t,e){super(t),this.Qa=e}_toFieldTransform(t){const e=qc(this,t,!0),n=this.Qa.map(t=>Qc(t,e)),r=new we(n);return new Se(t.path,r)}isEqual(t){return this===t}}class Hc extends Oc{constructor(t,e){super(t),this.Wa=e}_toFieldTransform(t){const e=new Ee(t.k,de(t.k,this.Wa));return new Se(t.path,e)}isEqual(t){return this===t}}function Kc(t,e,n,r){const i=t.ja(1,e,n);Jc("Data must be an object, but it was:",i,r);const s=[],a=Et.empty();B(r,(t,r)=>{const c=eu(e,t,n);r=Object(o["i"])(r);const u=i.La(c);if(r instanceof Vc)s.push(c);else{const t=Qc(r,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new W(s);return new Pc(a,c,i.fieldTransforms)}function Gc(t,e,n,r,i,s){const a=t.ja(1,e,n),c=[Zc(e,r,n)],u=[i];if(s.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Zc(e,s[o])),u.push(s[o+1]);const l=[],h=Et.empty();for(let f=c.length-1;f>=0;--f)if(!ru(l,c[f])){const t=c[f];let e=u[f];e=Object(o["i"])(e);const n=a.La(t);if(e instanceof Vc)l.push(t);else{const r=Qc(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new W(l);return new Pc(h,d,a.fieldTransforms)}function Wc(t,e,n,r=!1){return Qc(n,t.ja(r?4:3,e))}function Qc(t,e){if(Yc(t=Object(o["i"])(t)))return Jc("Unsupported field value:",e,t),Xc(t,e);if(t instanceof Oc)return function(t,e){if(!Lc(e.xa))throw e.Ua(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Ua(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&4!==e.xa)throw e.Ua("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Qc(i,e.Ba(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return de(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=U.fromDate(t);return{timestampValue:En(e.k,n)}}if(t instanceof U){const n=new U(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:En(e.k,n)}}if(t instanceof Dc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Cc)return{bytesValue:Tn(e.k,t._byteString)};if(t instanceof rc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:An(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ua("Unsupported field value: "+Ya(t))}(t,e)}function Xc(t,e){const n={};return $(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):B(t,(t,r)=>{const i=Qc(r,e.Fa(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Yc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof U||t instanceof Dc||t instanceof Cc||t instanceof rc||t instanceof Oc)}function Jc(t,e,n){if(!Yc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ya(n);throw"an object"===r?e.Ua(t+" a custom object"):e.Ua(t+" "+r)}}function Zc(t,e,n){if((e=Object(o["i"])(e))instanceof kc)return e._internalPath;if("string"==typeof e)return eu(t,e);throw nu("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const tu=new RegExp("[~\\*/\\[\\]]");function eu(t,e,n){if(e.search(tu)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kc(...e.split("."))._internalPath}catch(r){throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new T(E.INVALID_ARGUMENT,a+t+c)}function ru(t,e){return t.some(t=>t.isEqual(e))}
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
 */class iu{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new su(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ou("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class su extends iu{data(){return super.data()}}function ou(t,e){return"string"==typeof e?eu(t,e):e instanceof kc?e._internalPath:e._delegate._internalPath}
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
 */class au{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cu extends iu{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ou("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class uu extends cu{data(t={}){return super.data(t)}}class lu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new au(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new uu(this._firestore,this._userDataWriter,n.key,n,new au(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new uu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new au(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new uu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new au(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:hu(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function hu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}function du(t,e){return t instanceof cu&&e instanceof cu?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof lu&&e instanceof lu&&t._firestore===e._firestore&&lc(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
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
 */function fu(t){if(Yt(t)&&0===t.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pu{}function gu(t,...e){for(const n of e)t=n._apply(t);return t}class mu extends pu{constructor(t,e,n){super(),this.Ga=t,this.za=e,this.Ha=n,this.type="where"}_apply(t){const e=Fc(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Du(o,s);const e=[];for(const n of o)e.push(Ou(r,t,n));a={arrayValue:{values:e}}}else a=Ou(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Du(o,s),a=Wc(n,e,o,"in"===s||"not-in"===s);const c=Dt.create(i,s,a);return function(t,e){if(e.V()){const n=Zt(t);if(null!==n&&!n.isEqual(e.field))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Jt(t);null!==r&&Nu(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ga,this.za,this.Ha);return new ic(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function yu(t,e,n){const r=e,i=ou("where",t);return new mu(i,r,n)}class vu extends pu{constructor(t,e){super(),this.Ga=t,this.Ja=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new $t(e,n);return function(t,e){if(null===Jt(t)){const n=Zt(t);null!==n&&Nu(t,n,e.field)}}(t,r),r}(t._query,this.Ga,this.Ja);return new ic(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Gt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function bu(t,e="asc"){const n=e,r=ou("orderBy",t);return new vu(r,n)}class wu extends pu{constructor(t,e,n){super(),this.type=t,this.Ya=e,this.Xa=n}_apply(t){return new ic(t.firestore,t.converter,re(t._query,this.Ya,this.Xa))}}function _u(t){return Za("limit",t),new wu("limit",t,"F")}function Eu(t){return Za("limitToLast",t),new wu("limitToLast",t,"L")}class Tu extends pu{constructor(t,e,n){super(),this.type=t,this.Za=e,this.tc=n}_apply(t){const e=Cu(t,this.type,this.Za,this.tc);return new ic(t.firestore,t.converter,function(t,e){return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Iu(...t){return new Tu("startAt",t,!0)}function Su(...t){return new Tu("startAfter",t,!1)}class Au extends pu{constructor(t,e,n){super(),this.type=t,this.Za=e,this.tc=n}_apply(t){const e=Cu(t,this.type,this.Za,this.tc);return new ic(t.firestore,t.converter,function(t,e){return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function xu(...t){return new Au("endBefore",t,!0)}function ku(...t){return new Au("endAt",t,!1)}function Cu(t,e,n,r){if(n[0]=Object(o["i"])(n[0]),n[0]instanceof iu)return function(t,e,n,r,i){if(!r)throw new T(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of ee(t))if(o.field.isKeyField())s.push(gt(e,r.key));else{const t=r.data.field(o.field);if(et(t))throw new T(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new T(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new qt(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Fc(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new T(E.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new T(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!te(t)&&-1!==s.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(H.fromString(s));if(!at.isDocumentKey(n))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new at(n);a.push(gt(e,i))}else{const t=Wc(n,r,s);a.push(t)}}return new qt(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Ou(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!te(e)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(H.fromString(n));if(!at.isDocumentKey(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gt(t,new at(r))}if(n instanceof rc)return gt(t,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ya(n)}.`)}function Du(t,e){if(!Array.isArray(t)||0===t.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Nu(t,e,n){if(!n.isEqual(e))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class Ru{convertValue(t,e="none"){switch(ct(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(tt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return B(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Dc(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=nt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(rt(t));default:return null}}convertTimestamp(t){const e=J(t);return new U(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);b(er(n));const r=new Ha(n.get(1),n.get(3)),i=new at(n.popFirst(5));return r.isEqual(e)||g(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function Pu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Lu extends Ru{constructor(t){super(),this.firestore=t}convertBytes(t){return new Cc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rc(this.firestore,null,e)}}
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
 */class Mu{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Fc(t)}set(t,e,n){this._verifyNotCommitted();const r=ju(t,this._firestore),i=Pu(r.converter,e,n),s=Uc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,ke.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=ju(t,this._firestore);let s;return s="string"==typeof(e=Object(o["i"])(e))||e instanceof kc?Gc(this._dataReader,"WriteBatch.update",i._key,e,n,r):Kc(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(s.toMutation(i._key,ke.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ju(t,this._firestore);return this._mutations=this._mutations.concat(new qe(e._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ju(t,e){if((t=Object(o["i"])(t)).firestore!==e)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
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
 */function Fu(t){t=Ja(t,rc);const e=Ja(t.firestore,gc);return ja(mc(e),t._key).then(n=>Ju(e,t,n))}class Uu extends Ru{constructor(t){super(),this.firestore=t}convertBytes(t){return new Cc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rc(this.firestore,null,e)}}function Vu(t){t=Ja(t,rc);const e=Ja(t.firestore,gc),n=mc(e),r=new Uu(e);return Ma(n,t._key).then(n=>new cu(e,r,t._key,n,new au(null!==n&&n.hasLocalMutations,!0),t.converter))}function qu(t){t=Ja(t,rc);const e=Ja(t.firestore,gc);return ja(mc(e),t._key,{source:"server"}).then(n=>Ju(e,t,n))}function Bu(t){t=Ja(t,ic);const e=Ja(t.firestore,gc),n=mc(e),r=new Uu(e);return fu(t._query),Ua(n,t._query).then(n=>new lu(e,r,t,n))}function $u(t){t=Ja(t,ic);const e=Ja(t.firestore,gc),n=mc(e),r=new Uu(e);return Fa(n,t._query).then(n=>new lu(e,r,t,n))}function zu(t){t=Ja(t,ic);const e=Ja(t.firestore,gc),n=mc(e),r=new Uu(e);return Ua(n,t._query,{source:"server"}).then(n=>new lu(e,r,t,n))}function Hu(t,e,n){t=Ja(t,rc);const r=Ja(t.firestore,gc),i=Pu(t.converter,e,n);return Yu(r,[Uc(Fc(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ke.none())])}function Ku(t,e,n,...r){t=Ja(t,rc);const i=Ja(t.firestore,gc),s=Fc(i);let a;return a="string"==typeof(e=Object(o["i"])(e))||e instanceof kc?Gc(s,"updateDoc",t._key,e,n,r):Kc(s,"updateDoc",t._key,e),Yu(i,[a.toMutation(t._key,ke.exists(!0))])}function Gu(t){return Yu(Ja(t.firestore,gc),[new qe(t._key,ke.none())])}function Wu(t,e){const n=Ja(t.firestore,gc),r=cc(t),i=Pu(t.converter,e);return Yu(n,[Uc(Fc(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,ke.exists(!1))]).then(()=>r)}function Qu(t,...e){var n,r,i;t=Object(o["i"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||dc(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(dc(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof rc)l=Ja(t.firestore,gc),h=Qt(t._key.path),u={next:n=>{e[a]&&e[a](Ju(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Ja(t,ic);l=Ja(n.firestore,gc),h=n._query;const r=new Uu(l);u={next:t=>{e[a]&&e[a](new lu(l,r,n,t))},error:e[a+1],complete:e[a+2]},fu(t._query)}return function(t,e,n,r){const i=new wa(r),s=new Ao(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>_o(await Ra(t),s)),()=>{i.na(),t.asyncQueue.enqueueAndForget(async()=>Eo(await Ra(t),s))}}(mc(l),h,c,u)}function Xu(t,e){return Va(mc(t=Ja(t,gc)),dc(e)?e:{next:e})}function Yu(t,e){return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>Vo(await Na(t),e,n)),n.promise}(mc(t),e)}function Ju(t,e,n){const r=n.docs.get(e._key),i=new Uu(t);return new cu(t,i,e._key,r,new au(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */class Zu extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Fc(t)}get(t){const e=ju(t,this._firestore),n=new Lu(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return v();const r=t[0];if(r.isFoundDocument())return new iu(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new iu(this._firestore,n,e._key,null,e.converter);throw v()})}set(t,e,n){const r=ju(t,this._firestore),i=Pu(r.converter,e,n),s=Uc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=ju(t,this._firestore);let s;return s="string"==typeof(e=Object(o["i"])(e))||e instanceof kc?Gc(this._dataReader,"Transaction.update",i._key,e,n,r):Kc(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=ju(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ju(t,this._firestore),n=new Uu(this._firestore);return super.get(t).then(t=>new cu(this._firestore,n,e._key,t._document,new au(!1,!1),e.converter))}}function tl(t,e){return qa(mc(t=Ja(t,gc)),n=>e(new Zu(t,n)))}
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
 */function el(){return new Vc("deleteField")}function nl(){return new Bc("serverTimestamp")}function rl(...t){return new $c("arrayUnion",t)}function il(...t){return new zc("arrayRemove",t)}function sl(t){return new Hc("increment",t)}
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
 */!function(t,e=!0){!function(t){l=t}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new gc(r,new k(t.getProvider("auth-internal")),new N(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.4.1",t),Object(r["registerVersion"])(c,"3.4.1","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,s(e)&&(e===u||i(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d3b":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("c430"),o=i("iterator");t.exports=!r((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,n="";return t.pathname="c%20d",e.forEach((function(t,r){e["delete"]("b"),n+=r+t})),s&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;t.exports=r((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("825a"),o=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var r=i(n,t,e);return null!==r&&s(r),r}if("RegExp"===a(t))return i(c,t,e);throw u("RegExp#exec called on incompatible receiver")}},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},1862:function(t,e,n){"use strict";var r=n("7ded"),i=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.1.10";
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
function u(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
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
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(t){this._delegate=t}static fromBase64String(t){return h(),new d(i["b"].fromBase64String(t))}static fromUint8Array(t){return l(),new d(i["b"].fromUint8Array(t))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
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
 */function f(t){return p(t,["next","error","complete"])}function p(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"===typeof n[r])return!0;return!1}
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
 */class g{enableIndexedDbPersistence(t,e){return Object(i["F"])(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(i["G"])(t._delegate)}clearIndexedDbPersistence(t){return Object(i["x"])(t._delegate)}}class m{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof i["m"]||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(i["A"])(this._delegate,t,e,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(t){return Object(i["Y"])(this._delegate,t)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new D(this,Object(i["y"])(this._delegate,t))}catch(e){throw T(e,"collection()","Firestore.collection()")}}doc(t){try{return new E(this,Object(i["E"])(this._delegate,t))}catch(e){throw T(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new k(this,Object(i["z"])(this._delegate,t))}catch(e){throw T(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(i["db"])(this._delegate,e=>t(new b(this,e)))}batch(){return Object(i["K"])(this._delegate),new w(new i["l"](this._delegate,t=>Object(i["L"])(this._delegate,t)))}loadBundle(t){return Object(i["V"])(this._delegate,t)}namedQuery(t){return Object(i["W"])(this._delegate,t).then(t=>t?new k(this,t):null)}}class y extends i["a"]{constructor(t){super(),this.firestore=t}convertBytes(t){return new d(new i["b"](t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return E.forKey(e,this.firestore,null)}}function v(t){Object(i["gb"])(t)}class b{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new y(t)}get(t){const e=N(t);return this._delegate.get(e).then(t=>new A(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const r=N(t);return n?(u("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=N(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=N(t);return this._delegate.delete(e),this}}class w{constructor(t){this._delegate=t}set(t,e,n){const r=N(t);return n?(u("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=N(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=N(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class _{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new i["i"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new x(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=_.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let i=r.get(e);return i||(i=new _(t,new y(t),e),r.set(e,i)),i}}_.INSTANCES=new WeakMap;class E{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new y(t)}static forPath(t,e,n){if(t.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new E(e,new i["d"](e._delegate,n,new i["n"](t)))}static forKey(t,e,n){return new E(e,new i["d"](e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new D(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new D(this.firestore,Object(i["y"])(this._delegate,t))}catch(e){throw T(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=Object(s["i"])(t),t instanceof i["d"]&&Object(i["cb"])(this._delegate,t)}set(t,e){e=u("DocumentReference.set",e);try{return e?Object(i["fb"])(this._delegate,t,e):Object(i["fb"])(this._delegate,t)}catch(n){throw T(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,t):Object(i["kb"])(this._delegate,t,e,...n)}catch(r){throw T(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...t){const e=I(t),n=S(t,t=>new A(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i["N"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),e.then(t=>new A(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new E(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function T(t,e,n){return t.message=t.message.replace(e,n),t}function I(t){for(const e of t)if("object"===typeof e&&!f(e))return e;return{}}function S(t,e){var n,r;let i;return i=f(t[0])?t[0]:f(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{i.next&&i.next(e(t))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class A{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new E(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(i["hb"])(this._delegate,t._delegate)}}class x extends A{data(t){const e=this._delegate.data(t);return Object(i["q"])(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class k{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new y(t)}where(t,e,n){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(t,e,n)))}catch(r){throw T(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(t,e)))}catch(n){throw T(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(t)))}catch(e){throw T(e,"limit()","Query.limit()")}}limitToLast(t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(t)))}catch(e){throw T(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...t)))}catch(e){throw T(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...t)))}catch(e){throw T(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...t)))}catch(e){throw T(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...t)))}catch(e){throw T(e,"endAt()","Query.endAt()")}}isEqual(t){return Object(i["bb"])(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i["Q"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),e.then(t=>new O(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=I(t),n=S(t,t=>new O(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(i["X"])(this._delegate,e,n)}withConverter(t){return new k(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class C{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new x(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class O{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new k(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new x(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new C(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new x(this._firestore,n))})}isEqual(t){return Object(i["hb"])(this._delegate,t._delegate)}}class D extends k{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new E(this.firestore,t):null}doc(t){try{return new E(this.firestore,void 0===t?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,t))}catch(e){throw T(e,"doc()","CollectionReference.doc()")}}add(t){return Object(i["u"])(this._delegate,t).then(t=>new E(this.firestore,t))}isEqual(t){return Object(i["cb"])(this._delegate,t._delegate)}withConverter(t){return new D(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function N(t){return Object(i["p"])(t,i["d"])}
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
 */class R{constructor(...t){this._delegate=new i["f"](...t)}static documentId(){return new R(i["o"].keyField().canonicalString())}isEqual(t){return t=Object(s["i"])(t),t instanceof i["f"]&&this._delegate._internalPath.isEqual(t._internalPath)}}
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
 */class P{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(i["eb"])();return t._methodName="FieldValue.serverTimestamp",new P(t)}static delete(){const t=Object(i["C"])();return t._methodName="FieldValue.delete",new P(t)}static arrayUnion(...t){const e=Object(i["w"])(...t);return e._methodName="FieldValue.arrayUnion",new P(e)}static arrayRemove(...t){const e=Object(i["v"])(...t);return e._methodName="FieldValue.arrayRemove",new P(e)}static increment(t){const e=Object(i["S"])(t);return e._methodName="FieldValue.increment",new P(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
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
 */const L={Firestore:m,GeoPoint:i["h"],Timestamp:i["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:E,DocumentSnapshot:A,Query:k,QueryDocumentSnapshot:x,QuerySnapshot:O,CollectionReference:D,FieldPath:R,FieldValue:P,setLogLevel:v,CACHE_SIZE_UNLIMITED:i["c"]};function M(t,e){t.INTERNAL.registerComponent(new o["a"]("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(n,r)},"PUBLIC").setServiceProps(Object.assign({},L)))}
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
 */function j(t){M(t,(t,e)=>new m(t,e,new g)),t.registerVersion(a,c)}j(r["a"])},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw s("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return I})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return D})),n.d(e,"g",(function(){return C})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return L})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return g})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return v})),n.d(e,"n",(function(){return b})),n.d(e,"o",(function(){return E})),n.d(e,"p",(function(){return f})),n.d(e,"q",(function(){return y})),n.d(e,"r",(function(){return _})),n.d(e,"s",(function(){return w}));
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
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
 */function c(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&u(n)&&(t[n]=c(t[n],e[n]));return t}function u(t){return"__proto__"!==t}
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
 */class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
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
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
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
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function p(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function m(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return d().indexOf("Electron/")>=0}function b(){const t=d();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w(){return d().indexOf("MSAppHost/")>=0}function _(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){return"object"===typeof indexedDB}
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
const T="FirebaseError";class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=T,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?A(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new I(r,o,n);return a}}function A(t,e){return t.replace(x,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const x=/\{\$([^}]+)}/g;
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
function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function C(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(O(n)&&O(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O(t){return null!==t&&"object"===typeof t}
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
 */function D(t,e){const n=new N(t,e);return n.subscribe.bind(n)}class N{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=R(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function P(){}
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
function L(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,g=function(t,e){this.stopped=t,this.result=e},m=g.prototype;t.exports=function(t,e,n){var r,y,v,b,w,_,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),x=i(e,T),k=function(t){return r&&f(r,"normal",t),new g(!0,t)},C=function(t){return I?(o(t),A?x(t[0],t[1],k):x(t[0],t[1])):A?x(t,k):x(t)};if(S)r=t;else{if(y=d(t),!y)throw p(a(t)+" is not iterable");if(c(y)){for(v=0,b=u(t);b>v;v++)if(w=C(t[v]),w&&l(m,w))return w;return new g(!1)}r=h(t,y)}_=r.next;while(!(E=s(_,r)).done){try{w=C(E.value)}catch(O){f(r,"throw",O)}if("object"==typeof w&&w&&l(m,w))return w}return new g(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const s="[DEFAULT]";
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"24ee":function(t,e,n){"use strict";var r=n("7ded"),i=n("589b"),s=n("1fd5"),o=n("22e5");
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
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5;class h extends s["c"]{constructor(t,e){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function p(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function g(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function y(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function b(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new h("canceled","User canceled the upload/download.")}function _(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function E(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function T(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function I(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function A(){return new h("no-download-url","The given file does not have any download URLs.")}function x(t){return new h("invalid-argument",t)}function k(){return new h("app-deleted","The Firebase app was deleted.")}function C(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function D(t){throw new h("internal-error","Internal error: "+t)}
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
 */class N{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=N.makeFromUrl(t,e)}catch(r){return new N(t,"")}if(""===n.path)return n;throw E(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=e===a?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",y=new RegExp(`^https?://${g}/${r}/${m}`,"i"),v={bucket:1,path:2},b=[{regex:o,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let a=0;a<b.length;a++){const e=b[a],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new N(t,i),e.postModify(n);break}}if(null==n)throw _(t);return n}}class R{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function P(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout(()=>{i=null,t(f,c())},e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function L(t){t(!1)}
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
 */function M(t){return void 0!==t}function j(t){return"function"===typeof t}function F(t){return"object"===typeof t&&!Array.isArray(t)}function U(t){return"string"===typeof t||t instanceof String}function V(t){return q()&&t instanceof Blob}function q(){return"undefined"!==typeof Blob}function B(t,e,n,r){if(r<e)throw x(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw x(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function $(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function z(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
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
 */var H;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(H||(H={}));
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
class K{constructor(t,e,n,r,i,s,o,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===H.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===H.ABORT;return void t(!1,new G(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new G(s,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());M(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=f();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?k():w();r(t)}else{const t=b();r(t)}};this.canceled_?e(!1,new G(!1,null,!0)):this.backoffId_=P(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i}}class G{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function W(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function X(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function J(t,e,n,r,i,s){const o=z(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return X(c,e),W(c,n),Q(c,s),Y(c,r),new K(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
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
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(q())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
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
 */function nt(t){return atob(t)}
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
 */const rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class it{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case rt.RAW:return new it(ot(e));case rt.BASE64:case rt.BASE64URL:return new it(ct(t,e));case rt.DATA_URL:return new it(lt(e),ht(e))}throw f()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw O(rt.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case rt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw O(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case rt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw O(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(i){throw O(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw O(rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function lt(t){const e=new ut(t);return e.base64?ct(rt.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ut(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
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
 */class ft{constructor(t,e){let n=0,r="";V(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(V(this.data_)){const n=this.data_,r=et(n,t,e);return null===r?null:new ft(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(q()){const e=t.map(t=>t instanceof ft?t.data_:t);return new ft(tt.apply(null,e))}{const e=t.map(t=>U(t)?st(rt.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const r=new Uint8Array(n);let i=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]}),new ft(r,!0)}}uploadData(){return this.data_}}
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
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return F(e)?e:null}
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
 */function gt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function vt(t,e){return e}class bt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||vt}}let wt=null;function _t(t){return!U(t)||t.length<2?t:yt(t)}function Et(){if(wt)return wt;const t=[];function e(t,e){return _t(e)}t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));const n=new bt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),wt=t,wt}function Tt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new N(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function It(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return Tt(r,t),r}function St(t,e,n){const r=pt(e);if(null===r)return null;const i=r;return It(t,i,n)}function At(t,e,n,r){const i=pt(e);if(null===i)return null;if(!U(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=$(a,n,r),u=z({alt:"media",token:e});return c+u});return c[0]}function xt(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
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
 */const kt="prefixes",Ct="items";function Ot(t,e,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[kt])for(const i of n[kt]){const n=i.replace(/\/$/,""),s=t._makeStorageReference(new N(e,n));r.prefixes.push(s)}if(n[Ct])for(const i of n[Ct]){const n=t._makeStorageReference(new N(e,i["name"]));r.items.push(n)}return r}function Dt(t,e,n){const r=pt(n);if(null===r)return null;const i=r;return Ot(t,e,i)}class Nt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Rt(t){if(!t)throw f()}function Pt(t,e){function n(n,r){const i=St(t,r,e);return Rt(null!==i),i}return n}function Lt(t,e){function n(n,r){const i=Dt(t,e,r);return Rt(null!==i),i}return n}function Mt(t,e){function n(n,r){const i=St(t,r,e);return Rt(null!==i),At(i,r,t.host,t._protocol)}return n}function jt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?y():m():402===e.getStatus()?g(t.bucket):403===e.getStatus()?v(t.path):n,r.serverResponse=n.serverResponse,r}return e}function Ft(t){const e=jt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=p(t.path)),i.serverResponse=r.serverResponse,i}return n}function Ut(t,e,n){const r=e.fullServerUrl(),i=$(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Nt(i,s,Pt(t,n),o);return a.errorHandler=Ft(e),a}function Vt(t,e,n,r,i){const s={};e.isRoot?s["prefix"]="":s["prefix"]=e.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=e.bucketOnlyServerUrl(),a=$(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new Nt(a,c,Lt(t,e.bucket),u);return l.urlParams=s,l.errorHandler=jt(e),l}function qt(t,e,n){const r=e.fullServerUrl(),i=$(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Nt(i,s,Mt(t,n),o);return a.errorHandler=Ft(e),a}function Bt(t,e,n,r){const i=e.fullServerUrl(),s=$(i,t.host,t._protocol),o="PATCH",a=xt(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new Nt(s,o,Pt(t,r),u);return l.headers=c,l.body=a,l.errorHandler=Ft(e),l}function $t(t,e){const n=e.fullServerUrl(),r=$(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new Nt(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Ft(e),a}function zt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Ht(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=zt(null,e)),r}function Kt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Ht(e,r,i),l=xt(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ft.getBlob(h,r,d);if(null===f)throw I();const p={name:u["fullPath"]},g=$(s,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,v=new Nt(g,m,Pt(t,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=jt(e),v}class Gt{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function Wt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){Rt(!1)}const r=e||["active"];return Rt(!!n&&-1!==r.indexOf(n)),n}function Qt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Ht(e,r,i),a={name:o["fullPath"]},c=$(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=xt(o,n),d=t.maxUploadRetryTime;function f(t){let e;Wt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Rt(!1)}return Rt(U(e)),e}const p=new Nt(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=jt(e),p}function Xt(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(t){const e=Wt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Rt(!1)}n||Rt(!1);const i=Number(n);return Rt(!isNaN(i)),new Gt(i,r.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new Nt(n,o,s,a);return c.headers=i,c.errorHandler=jt(e),c}const Yt=262144;function Jt(t,e,n,r,i,s,o,a){const c=new Gt(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw S();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},g=r.slice(h,d);if(null===g)throw I();function m(t,n){const i=Wt(t,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?Pt(e,s)(t,n):null,new Gt(o,a,"final"===i,u)}const y="POST",v=e.maxUploadRetryTime,b=new Nt(n,y,m,v);return b.headers=p,b.body=g.uploadData(),b.progressCallback=a||null,b.errorHandler=jt(t),b}
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
 */const Zt={STATE_CHANGED:"state_changed"},te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(t){switch(t){case"running":case"pausing":case"canceling":return te.RUNNING;case"paused":return te.PAUSED;case"success":return te.SUCCESS;case"canceled":return te.CANCELED;case"error":return te.ERROR;default:return te.ERROR}}
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
 */class ne{constructor(t,e,n){const r=j(t)||null!=e||null!=n;if(r)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
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
 */function re(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}
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
 */let ie=null;class se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=H.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=H.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw D("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw D("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw D("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw D("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw D("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class oe extends se{initXhr(){this.xhr_.responseType="text"}}function ae(){return ie?ie():new oe}
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
class ce{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=Et(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise((t,e)=>{this._resolve=t,this._reject=e,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const n=Qt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ae,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,n)=>{const r=Xt(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,ae,e,n);this._request=i,i.getPromise().then(t=>{t=t,this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Yt*this._chunkMultiplier,e=new Gt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=Jt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ae,r,i);this._request=o,o.getPromise().then(t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const t=Yt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const n=Ut(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ae,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const n=Kt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ae,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=w(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=ee(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const i=new ne(e||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(ee(this._state)){case te.SUCCESS:re(this._resolve.bind(null,this.snapshot))();break;case te.CANCELED:case te.ERROR:const e=this._reject;re(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=ee(this._state);switch(e){case te.RUNNING:case te.PAUSED:t.next&&re(t.next.bind(t,this.snapshot))();break;case te.SUCCESS:t.complete&&re(t.complete.bind(t))();break;case te.CANCELED:case te.ERROR:t.error&&re(t.error.bind(t,this._error))();break;default:t.error&&re(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
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
 */class ue{constructor(t,e){this._service=t,this._location=e instanceof N?e:N.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ue(t,e)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=gt(this._location.path);if(null===t)return null;const e=new N(this._location.bucket,t);return new ue(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw C(t)}}function le(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ce(t,new ft(e),n)}function he(t){const e={prefixes:[],items:[]};return de(t,e).then(()=>e)}async function de(t,e,n){const r={pageToken:n},i=await fe(t,r);e.prefixes.push(...i.prefixes),e.items.push(...i.items),null!=i.nextPageToken&&await de(t,e,i.nextPageToken)}function fe(t,e){null!=e&&"number"===typeof e.maxResults&&B("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Vt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ae)}function pe(t){t._throwIfRoot("getMetadata");const e=Ut(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,ae)}function ge(t,e){t._throwIfRoot("updateMetadata");const n=Bt(t.storage,t._location,e,Et());return t.storage.makeRequestWithTokens(n,ae)}function me(t){t._throwIfRoot("getDownloadURL");const e=qt(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,ae).then(t=>{if(null===t)throw A();return t})}function ye(t){t._throwIfRoot("deleteObject");const e=$t(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ae)}function ve(t,e){const n=mt(t._location.path,e),r=new N(t._location.bucket,n);return new ue(t.storage,r)}
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
 */function be(t){return/^[A-Za-z]+:\/\//.test(t)}function we(t,e){return new ue(t,e)}function _e(t,e){if(t instanceof Se){const n=t;if(null==n._bucket)throw T();const r=new ue(n,n._bucket);return null!=e?_e(r,e):r}return void 0!==e?ve(t,e):t}function Ee(t,e){if(e&&be(e)){if(t instanceof Se)return we(t,e);throw x("To use ref(service, url), the first argument must be a Storage instance.")}return _e(t,e)}function Te(t,e){const n=null===e||void 0===e?void 0:e[c];return null==n?null:N.makeFromBucketSpec(n,t)}function Ie(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken="string"===typeof i?i:Object(s["e"])(i,t.app.options.projectId))}class Se{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):Te(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=Te(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){B("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){B("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ue(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new R(k());{const i=J(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Ae="@firebase/storage",xe="0.9.0",ke="storage";function Ce(t,e,n){return t=Object(s["i"])(t),le(t,e,n)}function Oe(t){return t=Object(s["i"])(t),pe(t)}function De(t,e){return t=Object(s["i"])(t),ge(t,e)}function Ne(t,e){return t=Object(s["i"])(t),fe(t,e)}function Re(t){return t=Object(s["i"])(t),he(t)}function Pe(t){return t=Object(s["i"])(t),me(t)}function Le(t){return t=Object(s["i"])(t),ye(t)}function Me(t,e){return t=Object(s["i"])(t),Ee(t,e)}function je(t,e){return ve(t,e)}function Fe(t,e,n,r={}){Ie(t,e,n,r)}
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
 */function Ue(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Se(n,r,s,e,i["SDK_VERSION"])}function Ve(){Object(i["_registerComponent"])(new o["a"](ke,Ue,"PUBLIC").setMultipleInstances(!0)),Object(i["registerVersion"])(Ae,xe,""),Object(i["registerVersion"])(Ae,xe,"esm2017")}Ve();
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
class qe{constructor(t,e,n){this._delegate=t,this.task=e,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
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
 */class Be{constructor(t,e){this._delegate=t,this._ref=e,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new qe(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then(e=>{if(t)return t(new qe(e,this,this._ref))},e)}on(t,e,n,r){let i=void 0;return e&&(i="function"===typeof e?t=>e(new qe(t,this,this._ref)):{next:e.next?t=>e.next(new qe(t,this,this._ref)):void 0,complete:e.complete||void 0,error:e.error||void 0}),this._delegate.on(t,i,n||void 0,r||void 0)}}class $e{constructor(t,e){this._delegate=t,this._service=e}get prefixes(){return this._delegate.prefixes.map(t=>new ze(t,this._service))}get items(){return this._delegate.items.map(t=>new ze(t,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e){this._delegate=t,this.storage=e}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(t){const e=je(this._delegate,t);return new ze(e,this.storage)}get root(){return new ze(this._delegate.root,this.storage)}get parent(){const t=this._delegate.parent;return null==t?null:new ze(t,this.storage)}put(t,e){return this._throwIfRoot("put"),new Be(Ce(this._delegate,t,e),this)}putString(t,e=rt.RAW,n){this._throwIfRoot("putString");const r=st(e,t),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new Be(new ce(this._delegate,new ft(r.data,!0),i),this)}listAll(){return Re(this._delegate).then(t=>new $e(t,this.storage))}list(t){return Ne(this._delegate,t||void 0).then(t=>new $e(t,this.storage))}getMetadata(){return Oe(this._delegate)}updateMetadata(t){return De(this._delegate,t)}getDownloadURL(){return Pe(this._delegate)}delete(){return this._throwIfRoot("delete"),Le(this._delegate)}_throwIfRoot(t){if(""===this._delegate._location.path)throw C(t)}}
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
 */class He{constructor(t,e){this.app=t,this._delegate=e}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(t){if(Ke(t))throw x("ref() expected a child path but got a URL, use refFromURL instead.");return new ze(Me(this._delegate,t),this)}refFromURL(t){if(!Ke(t))throw x("refFromURL() expected a full URL but got a child path, use ref() instead.");try{N.makeFromUrl(t,this._delegate.host)}catch(e){throw x("refFromUrl() expected a valid full URL but got an invalid one.")}return new ze(Me(this._delegate,t),this)}setMaxUploadRetryTime(t){this._delegate.maxUploadRetryTime=t}setMaxOperationRetryTime(t){this._delegate.maxOperationRetryTime=t}useEmulator(t,e,n={}){Fe(this._delegate,t,e,n)}}function Ke(t){return/^[A-Za-z]+:\/\//.test(t)}const Ge="@firebase/storage-compat",We="0.1.8",Qe="storage-compat";function Xe(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e}),i=new He(n,r);return i}function Ye(t){const e={TaskState:te,TaskEvent:Zt,StringFormat:rt,Storage:He,Reference:ze};t.INTERNAL.registerComponent(new o["a"](Qe,Xe,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Ge,We)}Ye(r["a"])},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function s(t){return!0===t}function o(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}m("slot,component",!0);var y=m("key,ref,slot,slot-scope,is");function v(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var E=/-(\w)/g,T=_((function(t){return t.replace(E,(function(t,e){return e?e.toUpperCase():""}))})),I=_((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),S=/\B([A-Z])/g,A=_((function(t){return t.replace(S,"-$1").toLowerCase()}));function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function k(t,e){return t.bind(e)}var C=Function.prototype.bind?k:x;function O(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function D(t,e){for(var n in e)t[n]=e[n];return t}function N(t){for(var e={},n=0;n<t.length;n++)t[n]&&D(e,t[n]);return e}function R(t,e,n){}var P=function(t,e,n){return!1},L=function(t){return t};function M(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return M(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return M(t[n],e[n])}))}catch(u){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U="data-server-rendered",V=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:R,parsePlatformTagName:L,mustUseProp:P,async:!0,_lifecycleHooks:q},$=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^"+$.source+".$_\\d]");function G(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,Q="__proto__"in{},X="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=Y&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===J),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),st={}.watch,ot=!1;if(X)try{var at={};Object.defineProperty(at,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,at)}catch(Io){}var ct=function(){return void 0===W&&(W=!X&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},ut=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=R,pt=0,gt=function(){this.id=pt++,this.subs=[]};gt.prototype.addSub=function(t){this.subs.push(t)},gt.prototype.removeSub=function(t){v(this.subs,t)},gt.prototype.depend=function(){gt.target&&gt.target.addDep(this)},gt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},gt.target=null;var mt=[];function yt(t){mt.push(t),gt.target=t}function vt(){mt.pop(),gt.target=mt[mt.length-1]}var bt=function(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var _t=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Et(t){return new bt(void 0,void 0,void 0,String(t))}function Tt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var It=Array.prototype,St=Object.create(It),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach((function(t){var e=It[t];H(St,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var xt=Object.getOwnPropertyNames(St),kt=!0;function Ct(t){kt=t}var Ot=function(t){this.value=t,this.dep=new gt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(Q?Dt(t,St):Nt(t,St,xt),this.observeArray(t)):this.walk(t)};function Dt(t,e){t.__proto__=e}function Nt(t,e,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];H(t,s,e[s])}}function Rt(t,e){var n;if(c(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof Ot?n=t.__ob__:kt&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ot(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,r,i){var s=new gt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Rt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return gt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&jt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Rt(e),s.notify())}})}}function Lt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Pt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function jt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&jt(e)}Ot.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},Ot.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Rt(t[e])};var Ft=B.optionMergeStrategies;function Ut(t,e){if(!e)return t;for(var n,r,i,s=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(r=t[n],i=e[n],w(t,n)?r!==i&&l(r)&&l(i)&&Ut(r,i):Lt(t,n,i));return t}function Vt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Ut(r,i):i}:e?t?function(){return Ut("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function qt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Bt(n):n}function Bt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function $t(t,e,n,r){var i=Object.create(t||null);return e?D(i,e):i}Ft.data=function(t,e,n){return n?Vt(t,e,n):e&&"function"!==typeof e?t:Vt(t,e)},q.forEach((function(t){Ft[t]=qt})),V.forEach((function(t){Ft[t+"s"]=$t})),Ft.watch=function(t,e,n,r){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var s in D(i,t),e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return D(i,t),e&&D(i,e),i},Ft.provide=Vt;var zt=function(t,e){return void 0===e?t:e};function Ht(t,e){var n=t.props;if(n){var r,i,s,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(s=T(i),o[s]={type:null})}else if(l(n))for(var a in n)i=n[a],s=T(a),o[s]=l(i)?i:{type:i};else 0;t.props=o}}function Kt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var s in n){var o=n[s];r[s]=l(o)?D({from:s},o):{from:o}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Wt(t,e,n){if("function"===typeof e&&(e=e.options),Ht(e,n),Kt(e,n),Gt(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Wt(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)w(t,s)||a(s);function a(r){var i=Ft[r]||zt;o[r]=i(t[r],e[r],n,r)}return o}function Qt(t,e,n,r){if("string"===typeof n){var i=t[e];if(w(i,n))return i[n];var s=T(n);if(w(i,s))return i[s];var o=I(s);if(w(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Xt(t,e,n,r){var i=e[t],s=!w(n,t),o=n[t],a=ee(Boolean,i.type);if(a>-1)if(s&&!w(i,"default"))o=!1;else if(""===o||o===A(t)){var c=ee(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Yt(r,i,t);var u=kt;Ct(!0),Rt(o),Ct(u)}return o}function Yt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Jt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Jt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){yt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(Io){ie(Io,r,"errorCaptured hook")}}}ie(t,e,n)}finally{vt()}}function re(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(t){return ne(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(Io){ne(Io,r,i)}return s}function ie(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(Io){Io!==t&&se(Io,null,"config.errorHandler")}se(t,e,n)}function se(t,e,n){if(!X&&!Y||"undefined"===typeof console)throw t;console.error(t)}var oe,ae=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var he=Promise.resolve();oe=function(){he.then(le),rt&&setTimeout(R)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())oe="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var de=1,fe=new MutationObserver(le),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),oe=function(){de=(de+1)%2,pe.data=String(de)},ae=!0}function ge(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Io){ne(Io,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,oe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var me=new ht;function ye(t){ve(t,me),me.clear()}function ve(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(i){n=t.length;while(n--)ve(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ve(t[r[n]],e)}}}var be=_((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function we(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)re(i[s],null,t,e,"v-on handler")}return n.fns=t,n}function _e(t,e,n,i,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=be(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=we(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(h=be(c),i(h.name,e[c],h.capture))}function Ee(t,e,n){var o;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),v(o.fns,c)}r(a)?o=we([c]):i(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=we([a,c]),o.merged=!0,t[e]=o}function Te(t,e,n){var s=e.options.props;if(!r(s)){var o={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in s){var l=A(u);Ie(o,c,u,l,!0)||Ie(o,a,u,l,!1)}return o}}function Ie(t,e,n,r,s){if(i(e)){if(w(e,n))return t[n]=e[n],s||delete e[n],!0;if(w(e,r))return t[n]=e[r],s||delete e[r],!0}return!1}function Se(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ae(t){return a(t)?[Et(t)]:Array.isArray(t)?ke(t):void 0}function xe(t){return i(t)&&i(t.text)&&o(t.isComment)}function ke(t,e){var n,o,c,u,l=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(c=l.length-1,u=l[c],Array.isArray(o)?o.length>0&&(o=ke(o,(e||"")+"_"+n),xe(o[0])&&xe(u)&&(l[c]=Et(u.text+o[0].text),o.shift()),l.push.apply(l,o)):a(o)?xe(u)?l[c]=Et(u.text+o):""!==o&&l.push(Et(o)):xe(o)&&xe(u)?l[c]=Et(u.text+o.text):(s(t._isVList)&&i(o.tag)&&r(o.key)&&i(e)&&(o.key="__vlist"+e+"_"+n+"__"),l.push(o)));return l}function Ce(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=De(t.$options.inject,t);e&&(Ct(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),Ct(!0))}function De(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ne(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Re)&&delete n[u];return n}function Re(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t){return t.isComment&&t.asyncFactory}function Le(t,e,r){var i,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&a===r.$key&&!s&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Me(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=je(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),H(i,"$stable",o),H(i,"$key",a),H(i,"$hasNormal",s),i}function Me(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ae(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Pe(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function je(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,s,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,s=t.length;r<s;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,s=o.length;r<s;r++)a=o[r],n[r]=e(t[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Ue(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=D(D({},r),n)),i=s(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function Ve(t){return Qt(this.$options,"filters",t,!0)||L}function qe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Be(t,e,n,r,i){var s=B.keyCodes[e]||n;return i&&r&&!B.keyCodes[e]?qe(i,r):s?qe(s,t):r?A(r)!==e:void 0===t}function $e(t,e,n,r,i){if(n)if(c(n)){var s;Array.isArray(n)&&(n=N(n));var o=function(o){if("class"===o||"style"===o||y(o))s=t;else{var a=t.attrs&&t.attrs.type;s=r||B.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=T(o),u=A(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],i)){var l=t.on||(t.on={});l["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ke(r,"__static__"+t,!1)),r}function He(t,e,n){return Ke(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ke(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ge(t[r],e+"_"+r,n);else Ge(t,e,n)}function Ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function We(t,e){if(e)if(l(e)){var n=t.on=t.on?D({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function Qe(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?Qe(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ye(t,e){return"string"===typeof t?e+t:t}function Je(t){t._o=He,t._n=g,t._s=p,t._l=Fe,t._t=Ue,t._q=M,t._i=j,t._m=ze,t._f=Ve,t._k=Be,t._b=$e,t._v=Et,t._e=_t,t._u=Qe,t._g=We,t._d=Xe,t._p=Ye}function Ze(t,e,r,i,o){var a,c=this,u=o.options;w(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=De(u.inject,i),this.slots=function(){return c.$slots||Le(t.scopedSlots,c.$slots=Ne(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Le(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Le(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var s=fn(a,t,e,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(t,e,n,r){return fn(a,t,e,n,r,h)}}function tn(t,e,r,s,o){var a=t.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Xt(l,u,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Ze(r,c,o,s,t),d=a.render.call(null,h._c,h);if(d instanceof bt)return en(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=Ae(d)||[],p=new Array(f.length),g=0;g<f.length;g++)p[g]=en(f[g],r,h.parent,a,h);return p}}function en(t,e,n,r,i){var s=Tt(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function nn(t,e){for(var n in e)t[T(n)]=e[n]}Je(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=an(t,Dn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Mn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Vn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Un(e,!0):e.$destroy())}},sn=Object.keys(rn);function on(t,e,n,o,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=Tn(l,u),void 0===t))return En(l,e,n,o,a);e=e||{},Er(t),i(e.model)&&ln(t.options,e);var h=Te(e,t,a);if(s(t.options.functional))return tn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||a,g=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:o},l);return g}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<sn.length;n++){var r=sn[n],i=e[r],s=rn[r];i===s||i&&i._merged||(e[r]=i?un(s,i):s)}}function un(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),o=s[r],a=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[r]=[a].concat(o)):s[r]=a}var hn=1,dn=2;function fn(t,e,n,r,i,o){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),s(o)&&(i=dn),pn(t,e,n,r,i)}function pn(t,e,n,r,s){if(i(n)&&i(n.__ob__))return _t();if(i(n)&&i(n.is)&&(e=n.is),!e)return _t();var o,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===dn?r=Ae(r):s===hn&&(r=Se(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),o=B.isReservedTag(e)?new bt(B.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Qt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):on(c,n,t,r,e)):o=on(e,n,t,r);return Array.isArray(o)?o:i(o)?(i(a)&&gn(o,a),i(n)&&mn(n),o):_t()}function gn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var o=0,a=t.children.length;o<a;o++){var c=t.children[o];i(c.tag)&&(r(c.ns)||s(n)&&"svg"!==c.tag)&&gn(c,e,n)}}function mn(t){c(t.style)&&ye(t.style),c(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Ne(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return fn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return fn(t,e,n,r,i,!0)};var s=r&&r.data;Pt(t,"$attrs",s&&s.attrs||n,null,!0),Pt(t,"$listeners",e._parentListeners||n,null,!0)}var vn,bn=null;function wn(t){Je(t.prototype),t.prototype.$nextTick=function(t){return ge(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Le(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Io){ne(Io,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=_t()),t.parent=i,t}}function _n(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function En(t,e,n,r,i){var s=_t();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function Tn(t,e){if(s(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=bn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var o=t.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return v(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){t.resolved=_n(n,e),a?o.length=0:h(!0)})),p=F((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),g=t(d,p);return c(g)&&(f(g)?r(t.resolved)&&g.then(d,p):f(g.component)&&(g.component.then(d,p),i(g.error)&&(t.errorComp=_n(g.error,e)),i(g.loading)&&(t.loadingComp=_n(g.loading,e),0===g.delay?t.loading=!0:u=setTimeout((function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),g.delay||200)),i(g.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&p(null)}),g.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function In(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||Pe(n)))return n}}function Sn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Cn(t,e)}function An(t,e){vn.$on(t,e)}function xn(t,e){vn.$off(t,e)}function kn(t,e){var n=vn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Cn(t,e,n){vn=t,_e(e,n||{},An,xn,kn,t),vn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,s=t.length;i<s;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?O(n):n;for(var r=O(arguments,1),i='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)re(n[s],e,r,e,i)}return e}}var Dn=null;function Nn(t){var e=Dn;return Dn=t,function(){Dn=e}}function Rn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=Nn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Vn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||v(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Vn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Ln(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=_t),Vn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,R,{before:function(){t._isMounted&&!t._isDestroyed&&Vn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Vn(t,"mounted")),t}function Mn(t,e,r,i,s){var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=s,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ct(!1);for(var l=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;l[f]=Xt(f,p,e,t)}Ct(!0),t.$options.propsData=e}r=r||n;var g=t.$options._parentListeners;t.$options._parentListeners=r,Cn(t,r,g),u&&(t.$slots=Ne(s,i.context),t.$forceUpdate())}function jn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,jn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Vn(t,"activated")}}function Un(t,e){if((!e||(t._directInactive=!0,!jn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Un(t.$children[n]);Vn(t,"deactivated")}}function Vn(t,e){yt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,s=n.length;i<s;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),vt()}var qn=[],Bn=[],$n={},zn=!1,Hn=!1,Kn=0;function Gn(){Kn=qn.length=Bn.length=0,$n={},zn=Hn=!1}var Wn=0,Qn=Date.now;if(X&&!tt){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Qn()>document.createEvent("Event").timeStamp&&(Qn=function(){return Xn.now()})}function Yn(){var t,e;for(Wn=Qn(),Hn=!0,qn.sort((function(t,e){return t.id-e.id})),Kn=0;Kn<qn.length;Kn++)t=qn[Kn],t.before&&t.before(),e=t.id,$n[e]=null,t.run();var n=Bn.slice(),r=qn.slice();Gn(),tr(n),Jn(r),ut&&B.devtools&&ut.emit("flush")}function Jn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Vn(r,"updated")}}function Zn(t){t._inactive=!1,Bn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function er(t){var e=t.id;if(null==$n[e]){if($n[e]=!0,Hn){var n=qn.length-1;while(n>Kn&&qn[n].id>t.id)n--;qn.splice(n+1,0,t)}else qn.push(t);zn||(zn=!0,ge(Yn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Io){if(!this.user)throw Io;ne(Io,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),vt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:R,set:R};function sr(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function or(t){t._watchers=[];var e=t.$options;e.props&&ar(t,e.props),e.methods&&gr(t,e.methods),e.data?cr(t):Rt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==st&&mr(t,e.watch)}function ar(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||Ct(!1);var o=function(s){i.push(s);var o=Xt(s,e,n,t);Pt(r,s,o),s in t||sr(t,"_props",s)};for(var a in e)o(a);Ct(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?ur(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&w(r,s)||z(s)||sr(t,"_data",s)}Rt(e,!0)}function ur(t,e){yt();try{return t.call(e,e)}catch(Io){return ne(Io,e,"data()"),{}}finally{vt()}}var lr={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var s=e[i],o="function"===typeof s?s:s.get;0,r||(n[i]=new rr(t,o||R,R,lr)),i in t||dr(t,i,s)}}function dr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?fr(e):pr(n),ir.set=R):(ir.get=n.get?r&&!1!==n.cache?fr(e):pr(n.get):R,ir.set=n.set||R),Object.defineProperty(t,e,ir)}function fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),gt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function gr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:C(e[n],t)}function mr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(t,n,r[i]);else yr(t,n,r)}}function yr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function vr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return yr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+i.expression+'"';yt(),re(e,r,[i.value],r,s),vt()}return function(){i.teardown()}}}var br=0;function wr(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?_r(e,t):e.$options=Wt(Er(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Rn(e),Sn(e),yn(e),Vn(e,"beforeCreate"),Oe(e),or(e),Ce(e),Vn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function _r(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Er(t){var e=t.options;if(t.super){var n=Er(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Tr(t);i&&D(t.extendOptions,i),e=t.options=Wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Tr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Ir(t){this._init(t)}function Sr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ar(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function xr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Wt(n.options,t),o["super"]=n,o.options.props&&kr(o),o.options.computed&&Cr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,V.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=D({},o.options),i[r]=o,o}}function kr(t){var e=t.options.props;for(var n in e)sr(t.prototype,"_props",n)}function Cr(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function Or(t){V.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Dr(t){return t&&(t.Ctor.options.name||t.tag)}function Nr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Rr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Pr(n,s,r,i)}}}function Pr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,v(n,e)}wr(Ir),vr(Ir),On(Ir),Pn(Ir),wn(Ir);var Lr=[String,RegExp,Array],Mr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:Dr(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&Pr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Pr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Rr(t,(function(t){return Nr(e,t)}))})),this.$watch("exclude",(function(e){Rr(t,(function(t){return!Nr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=In(t),n=e&&e.componentOptions;if(n){var r=Dr(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!Nr(s,r))||o&&r&&Nr(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,v(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:Mr};function Fr(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:D,mergeOptions:Wt,defineReactive:Pt},t.set=Lt,t.delete=Mt,t.nextTick=ge,t.observable=function(t){return Rt(t),t},t.options=Object.create(null),V.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,D(t.options.components,jr),Sr(t),Ar(t),xr(t),Or(t)}Fr(Ir),Object.defineProperty(Ir.prototype,"$isServer",{get:ct}),Object.defineProperty(Ir.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ir,"FunctionalRenderContext",{value:Ze}),Ir.version="2.6.14";var Ur=m("style,class"),Vr=m("input,textarea,option,select,progress"),qr=function(t,e,n){return"value"===n&&Vr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Br=m("contenteditable,draggable,spellcheck"),$r=m("events,caret,typing,plaintext-only"),zr=function(t,e){return Qr(e)||"false"===e?"false":"contenteditable"===t&&$r(e)?e:"true"},Hr=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Kr="http://www.w3.org/1999/xlink",Gr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Wr=function(t){return Gr(t)?t.slice(6,t.length):""},Qr=function(t){return null==t||!1===t};function Xr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Yr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Yr(e,n.data));return Jr(e.staticClass,e.class)}function Yr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Jr(t,e){return i(t)||i(e)?Zr(t,ti(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,s=t.length;r<s;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),si=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oi=function(t){return ii(t)||si(t)};function ai(t){return si(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function ui(t){if(!X)return!0;if(oi(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var li=m("text,number,password,search,email,tel,url");function hi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function gi(t){return document.createComment(t)}function mi(t,e,n){t.insertBefore(e,n)}function yi(t,e){t.removeChild(e)}function vi(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function wi(t){return t.nextSibling}function _i(t){return t.tagName}function Ei(t,e){t.textContent=e}function Ti(t,e){t.setAttribute(e,"")}var Ii=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:gi,insertBefore:mi,removeChild:yi,appendChild:vi,parentNode:bi,nextSibling:wi,tagName:_i,setTextContent:Ei,setStyleScope:Ti}),Si={create:function(t,e){Ai(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ai(t,!0),Ai(e))},destroy:function(t){Ai(t,!0)}};function Ai(t,e){var n=t.data.ref;if(i(n)){var r=t.context,s=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?v(o[n],s):o[n]===s&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var xi=new bt("",{},[]),ki=["create","activate","update","remove","destroy"];function Ci(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Oi(t,e)||s(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Oi(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,s=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===s||li(r)&&li(s)}function Di(t,e,n){var r,s,o={};for(r=e;r<=n;++r)s=t[r].key,i(s)&&(o[s]=r);return o}function Ni(t){var e,n,o={},c=t.modules,u=t.nodeOps;for(e=0;e<ki.length;++e)for(o[ki[e]]=[],n=0;n<c.length;++n)i(c[n][ki[e]])&&o[ki[e]].push(c[n][ki[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function f(t,e,n,r,o,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=Tt(t)),t.isRootInsert=!o,!p(t,e,n,r)){var l=t.data,h=t.children,d=t.tag;i(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),E(t),b(t,h,e),i(l)&&_(t,e),v(n,t.elm,r)):s(t.isComment)?(t.elm=u.createComment(t.text),v(n,t.elm,r)):(t.elm=u.createTextNode(t.text),v(n,t.elm,r))}}function p(t,e,n,r){var o=t.data;if(i(o)){var a=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1),i(t.componentInstance))return g(t,e),v(n,t.elm,r),s(a)&&y(t,e,n,r),!0}}function g(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(_(t,e),E(t)):(Ai(t),e.push(t))}function y(t,e,n,r){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,i(s=a.data)&&i(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](xi,a);e.push(a);break}v(n,t.elm,r)}function v(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function _(t,n){for(var r=0;r<o.create.length;++r)o.create[r](xi,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(xi,t),i(e.insert)&&n.push(t))}function E(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}i(e=Dn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function T(t,e,n,r,i,s){for(;r<=i;++r)f(n[r],s,t,e,!1,n,r)}function I(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)I(t.children[n])}function S(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(A(r),I(r)):d(r.elm))}}function A(t,e){if(i(e)||i(t.data)){var n,r=o.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&A(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else d(t.elm)}function x(t,e,n,s,o){var a,c,l,h,d=0,p=0,g=e.length-1,m=e[0],y=e[g],v=n.length-1,b=n[0],w=n[v],_=!o;while(d<=g&&p<=v)r(m)?m=e[++d]:r(y)?y=e[--g]:Ci(m,b)?(C(m,b,s,n,p),m=e[++d],b=n[++p]):Ci(y,w)?(C(y,w,s,n,v),y=e[--g],w=n[--v]):Ci(m,w)?(C(m,w,s,n,v),_&&u.insertBefore(t,m.elm,u.nextSibling(y.elm)),m=e[++d],w=n[--v]):Ci(y,b)?(C(y,b,s,n,p),_&&u.insertBefore(t,y.elm,m.elm),y=e[--g],b=n[++p]):(r(a)&&(a=Di(e,d,g)),c=i(b.key)?a[b.key]:k(b,e,d,g),r(c)?f(b,s,t,m.elm,!1,n,p):(l=e[c],Ci(l,b)?(C(l,b,s,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,m.elm)):f(b,s,t,m.elm,!1,n,p)),b=n[++p]);d>g?(h=r(n[v+1])?null:n[v+1].elm,T(t,h,n,p,v,s)):p>v&&S(e,d,g)}function k(t,e,n,r){for(var s=n;s<r;s++){var o=e[s];if(i(o)&&Ci(t,o))return s}}function C(t,e,n,a,c,l){if(t!==e){i(e.elm)&&i(a)&&(e=a[c]=Tt(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?N(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,g=e.children;if(i(f)&&w(e)){for(d=0;d<o.update.length;++d)o.update[d](t,e);i(d=f.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(g)?p!==g&&x(h,p,g,n,l):i(g)?(i(t.text)&&u.setTextContent(h,""),T(h,null,g,0,g.length-1,n)):i(p)?S(p,0,p.length-1):i(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(t,e)}}}function O(t,e,n){if(s(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var D=m("attrs,class,staticClass,staticStyle,key");function N(t,e,n,r){var o,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,s(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(o=c.hook)&&i(o=o.init)&&o(e,!0),i(o=e.componentInstance)))return g(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(o=c)&&i(o=o.domProps)&&i(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!N(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(i(c)){var f=!1;for(var p in c)if(!D(p)){f=!0,_(e,n);break}!f&&c["class"]&&ye(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,f(e,h);else{var d=i(t.nodeType);if(!d&&Ci(t,e))C(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(U)&&(t.removeAttribute(U),n=!0),s(n)&&N(t,e,h))return O(e,h,!0),t;t=l(t)}var p=t.elm,g=u.parentNode(p);if(f(e,h,p._leaveCb?null:g,u.nextSibling(p)),i(e.parent)){var m=e.parent,y=w(e);while(m){for(var v=0;v<o.destroy.length;++v)o.destroy[v](m);if(m.elm=e.elm,y){for(var b=0;b<o.create.length;++b)o.create[b](xi,m);var _=m.data.hook.insert;if(_.merged)for(var E=1;E<_.fns.length;E++)_.fns[E]()}else Ai(m);m=m.parent}}i(g)?S([t],0,0):i(t.tag)&&I(t)}}return O(e,h,c),e.elm}i(t)&&I(t)}}var Ri={create:Pi,update:Pi,destroy:function(t){Pi(t,xi)}};function Pi(t,e){(t.data.directives||e.data.directives)&&Li(t,e)}function Li(t,e){var n,r,i,s=t===xi,o=e===xi,a=ji(t.data.directives,t.context),c=ji(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Ui(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Ui(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Ui(u[n],"inserted",e,t)};s?Ee(e,"insert",h):h()}if(l.length&&Ee(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Ui(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Ui(a[n],"unbind",t,t,o)}var Mi=Object.create(null);function ji(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Mi),i[Fi(r)]=r,r.def=Qt(e.$options,"directives",r.name,!0);return i}function Fi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Ui(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(Io){ne(Io,n.context,"directive "+t.name+" "+e+" hook")}}var Vi=[Si,Ri];function qi(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var s,o,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(s in i(l.__ob__)&&(l=e.data.attrs=D({},l)),l)o=l[s],a=u[s],a!==o&&Bi(c,s,o,e.data.pre);for(s in(tt||nt)&&l.value!==u.value&&Bi(c,"value",l.value),u)r(l[s])&&(Gr(s)?c.removeAttributeNS(Kr,Wr(s)):Br(s)||c.removeAttribute(s))}}function Bi(t,e,n,r){r||t.tagName.indexOf("-")>-1?$i(t,e,n):Hr(e)?Qr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Br(e)?t.setAttribute(e,zr(e,n)):Gr(e)?Qr(n)?t.removeAttributeNS(Kr,Wr(e)):t.setAttributeNS(Kr,e,n):$i(t,e,n)}function $i(t,e,n){if(Qr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var zi={create:qi,update:qi};function Hi(t,e){var n=e.elm,s=e.data,o=t.data;if(!(r(s.staticClass)&&r(s.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Xr(e),c=n._transitionClasses;i(c)&&(a=Zr(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Ki,Gi={create:Hi,update:Hi},Wi="__r",Qi="__c";function Xi(t){if(i(t[Wi])){var e=tt?"change":"input";t[e]=[].concat(t[Wi],t[e]||[]),delete t[Wi]}i(t[Qi])&&(t.change=[].concat(t[Qi],t.change||[]),delete t[Qi])}function Yi(t,e,n){var r=Ki;return function i(){var s=e.apply(null,arguments);null!==s&&ts(t,i,n,r)}}var Ji=ae&&!(it&&Number(it[1])<=53);function Zi(t,e,n,r){if(Ji){var i=Wn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Ki.addEventListener(t,e,ot?{capture:n,passive:r}:n)}function ts(t,e,n,r){(r||Ki).removeEventListener(t,e._wrapper||e,n)}function es(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Ki=e.elm,Xi(n),_e(n,i,Zi,ts,Yi,e.context),Ki=void 0}}var ns,rs={create:es,update:es};function is(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,s,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=D({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=r(s)?"":String(s);ss(o,u)&&(o.value=u)}else if("innerHTML"===n&&si(o.tagName)&&r(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var l=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(Io){}}}}function ss(t,e){return!t.composing&&("OPTION"===t.tagName||os(t,e)||as(t,e))}function os(t,e){var n=!0;try{n=document.activeElement!==t}catch(Io){}return n&&t.value!==e}function as(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var cs={create:is,update:is},us=_((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ls(t){var e=hs(t.style);return t.staticStyle?D(t.staticStyle,e):e}function hs(t){return Array.isArray(t)?N(t):"string"===typeof t?us(t):t}function ds(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=ls(i.data))&&D(r,n)}(n=ls(t.data))&&D(r,n);var s=t;while(s=s.parent)s.data&&(n=ls(s.data))&&D(r,n);return r}var fs,ps=/^--/,gs=/\s*!important$/,ms=function(t,e,n){if(ps.test(e))t.style.setProperty(e,n);else if(gs.test(n))t.style.setProperty(A(e),n.replace(gs,""),"important");else{var r=vs(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},ys=["Webkit","Moz","ms"],vs=_((function(t){if(fs=fs||document.createElement("div").style,t=T(t),"filter"!==t&&t in fs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ys.length;n++){var r=ys[n]+e;if(r in fs)return r}}));function bs(t,e){var n=e.data,s=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(s.staticStyle)&&r(s.style))){var o,a,c=e.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=hs(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?D({},d):d;var f=ds(e,!0);for(a in h)r(f[a])&&ms(c,a,"");for(a in f)o=f[a],o!==h[a]&&ms(c,a,null==o?"":o)}}var ws={create:bs,update:bs},_s=/\s+/;function Es(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ts(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Is(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&D(e,Ss(t.name||"v")),D(e,t),e}return"string"===typeof t?Ss(t):void 0}}var Ss=_((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),As=X&&!et,xs="transition",ks="animation",Cs="transition",Os="transitionend",Ds="animation",Ns="animationend";As&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Cs="WebkitTransition",Os="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ds="WebkitAnimation",Ns="webkitAnimationEnd"));var Rs=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ps(t){Rs((function(){Rs(t)}))}function Ls(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Es(t,e))}function Ms(t,e){t._transitionClasses&&v(t._transitionClasses,e),Ts(t,e)}function js(t,e,n){var r=Us(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===xs?Os:Ns,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var Fs=/\b(transform|all)(,|$)/;function Us(t,e){var n,r=window.getComputedStyle(t),i=(r[Cs+"Delay"]||"").split(", "),s=(r[Cs+"Duration"]||"").split(", "),o=Vs(i,s),a=(r[Ds+"Delay"]||"").split(", "),c=(r[Ds+"Duration"]||"").split(", "),u=Vs(a,c),l=0,h=0;e===xs?o>0&&(n=xs,l=o,h=s.length):e===ks?u>0&&(n=ks,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?xs:ks:null,h=n?n===xs?s.length:c.length:0);var d=n===xs&&Fs.test(r[Cs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Vs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return qs(e)+qs(t[n])})))}function qs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Bs(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Is(t.data.transition);if(!r(s)&&!i(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,m=s.beforeEnter,y=s.enter,v=s.afterEnter,b=s.enterCancelled,w=s.beforeAppear,_=s.appear,E=s.afterAppear,T=s.appearCancelled,I=s.duration,S=Dn,A=Dn.$vnode;while(A&&A.parent)S=A.context,A=A.parent;var x=!S._isMounted||!t.isRootInsert;if(!x||_||""===_){var k=x&&d?d:u,C=x&&p?p:h,O=x&&f?f:l,D=x&&w||m,N=x&&"function"===typeof _?_:y,R=x&&E||v,P=x&&T||b,L=g(c(I)?I.enter:I);0;var M=!1!==o&&!et,j=Hs(N),U=n._enterCb=F((function(){M&&(Ms(n,O),Ms(n,C)),U.cancelled?(M&&Ms(n,k),P&&P(n)):R&&R(n),n._enterCb=null}));t.data.show||Ee(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,U)})),D&&D(n),M&&(Ls(n,k),Ls(n,C),Ps((function(){Ms(n,k),U.cancelled||(Ls(n,O),j||(zs(L)?setTimeout(U,L):js(n,a,U)))}))),t.data.show&&(e&&e(),N&&N(n,U)),M||j||U()}}}function $s(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Is(t.data.transition);if(r(s)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var o=s.css,a=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,m=s.leaveCancelled,y=s.delayLeave,v=s.duration,b=!1!==o&&!et,w=Hs(f),_=g(c(v)?v.leave:v);0;var E=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Ms(n,l),Ms(n,h)),E.cancelled?(b&&Ms(n,u),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));y?y(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(Ls(n,u),Ls(n,h),Ps((function(){Ms(n,u),E.cancelled||(Ls(n,l),w||(zs(_)?setTimeout(E,_):js(n,a,E)))}))),f&&f(n,E),b||w||E())}}function zs(t){return"number"===typeof t&&!isNaN(t)}function Hs(t){if(r(t))return!1;var e=t.fns;return i(e)?Hs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ks(t,e){!0!==e.data.show&&Bs(e)}var Gs=X?{create:Ks,activate:Ks,remove:function(t,e){!0!==t.data.show?$s(t,e):e()}}:{},Ws=[zi,Gi,rs,cs,ws,Gs],Qs=Ws.concat(Vi),Xs=Ni({nodeOps:Ii,modules:Qs});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&io(t,"input")}));var Ys={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Ee(n,"postpatch",(function(){Ys.componentUpdated(t,e,n)})):Js(t,e,n.context),t._vOptions=[].map.call(t.options,eo)):("textarea"===n.tag||li(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",no),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Js(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,eo);if(i.some((function(t,e){return!M(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return to(t,i)})):e.value!==e.oldValue&&to(e.value,i);s&&io(t,"change")}}}};function Js(t,e,n){Zs(t,e,n),(tt||nt)&&setTimeout((function(){Zs(t,e,n)}),0)}function Zs(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=j(r,eo(o))>-1,o.selected!==s&&(o.selected=s);else if(M(eo(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function to(t,e){return e.every((function(e){return!M(e,t)}))}function eo(t){return"_value"in t?t._value:t.value}function no(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,io(t.target,"input"))}function io(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function so(t){return!t.componentInstance||t.data&&t.data.transition?t:so(t.componentInstance._vnode)}var oo={bind:function(t,e,n){var r=e.value;n=so(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Bs(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?Bs(n,(function(){t.style.display=t.__vOriginalDisplay})):$s(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},ao={model:Ys,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(In(e.children)):t}function lo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var s in i)e[T(s)]=i[s];return e}function ho(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function po(t,e){return e.key===t.key&&e.tag===t.tag}var go=function(t){return t.tag||Pe(t)},mo=function(t){return"show"===t.name},yo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(go),n.length)){0;var r=this.mode;0;var i=n[0];if(fo(this.$vnode))return i;var s=uo(i);if(!s)return i;if(this._leaving)return ho(t,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=lo(this),u=this._vnode,l=uo(u);if(s.data.directives&&s.data.directives.some(mo)&&(s.data.show=!0),l&&l.data&&!po(s,l)&&!Pe(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=D({},c);if("out-in"===r)return this._leaving=!0,Ee(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ho(t,i);if("in-out"===r){if(Pe(s))return u;var d,f=function(){d()};Ee(c,"afterEnter",f),Ee(c,"enterCancelled",f),Ee(h,"delayLeave",(function(t){d=t}))}}return i}}},vo=D({tag:String,moveClass:String},co);delete vo.mode;var bo={props:vo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Nn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=lo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wo),t.forEach(_o),t.forEach(Eo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Ls(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Os,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Os,t),n._moveCb=null,Ms(n,e))})}})))},methods:{hasMove:function(t,e){if(!As)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ts(n,t)})),Es(n,e),n.style.display="none",this.$el.appendChild(n);var r=Us(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function wo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function _o(t){t.data.newPos=t.elm.getBoundingClientRect()}function Eo(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var To={Transition:yo,TransitionGroup:bo};Ir.config.mustUseProp=qr,Ir.config.isReservedTag=oi,Ir.config.isReservedAttr=Ur,Ir.config.getTagNamespace=ai,Ir.config.isUnknownElement=ui,D(Ir.options.directives,ao),D(Ir.options.components,To),Ir.prototype.__patch__=X?Xs:R,Ir.prototype.$mount=function(t,e){return t=t&&X?hi(t):void 0,Ln(this,t,e)},X&&setTimeout((function(){B.devtools&&ut&&ut.emit("init",Ir)}),0),e["a"]=Ir}).call(this,n("c8ba"))},"2b3d":function(t,e,n){"use strict";n("3ca3");var r,i=n("23e7"),s=n("83ab"),o=n("0d3b"),a=n("da84"),c=n("0366"),u=n("e330"),l=n("37e8"),h=n("6eeb"),d=n("19aa"),f=n("1a2d"),p=n("60da"),g=n("4df4"),m=n("4dae"),y=n("6547").codeAt,v=n("5fb2"),b=n("577e"),w=n("d44e"),_=n("9861"),E=n("69f3"),T=E.set,I=E.getterFor("URL"),S=_.URLSearchParams,A=_.getState,x=a.URL,k=a.TypeError,C=a.parseInt,O=Math.floor,D=Math.pow,N=u("".charAt),R=u(/./.exec),P=u([].join),L=u(1..toString),M=u([].pop),j=u([].push),F=u("".replace),U=u([].shift),V=u("".split),q=u("".slice),B=u("".toLowerCase),$=u([].unshift),z="Invalid authority",H="Invalid scheme",K="Invalid host",G="Invalid port",W=/[a-z]/i,Q=/[\d+-.a-z]/i,X=/\d/,Y=/^0x/i,J=/^[0-7]+$/,Z=/^\d+$/,tt=/^[\da-f]+$/i,et=/[\0\t\n\r #%/:<>?@[\\\]^|]/,nt=/[\0\t\n\r #/:<>?@[\\\]^|]/,rt=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,it=/[\t\n\r]/g,st=function(t){var e,n,r,i,s,o,a,c=V(t,".");if(c.length&&""==c[c.length-1]&&c.length--,e=c.length,e>4)return t;for(n=[],r=0;r<e;r++){if(i=c[r],""==i)return t;if(s=10,i.length>1&&"0"==N(i,0)&&(s=R(Y,i)?16:8,i=q(i,8==s?1:2)),""===i)o=0;else{if(!R(10==s?Z:8==s?J:tt,i))return t;o=C(i,s)}j(n,o)}for(r=0;r<e;r++)if(o=n[r],r==e-1){if(o>=D(256,5-e))return null}else if(o>255)return null;for(a=M(n),r=0;r<n.length;r++)a+=n[r]*D(256,3-r);return a},ot=function(t){var e,n,r,i,s,o,a,c=[0,0,0,0,0,0,0,0],u=0,l=null,h=0,d=function(){return N(t,h)};if(":"==d()){if(":"!=N(t,1))return;h+=2,u++,l=u}while(d()){if(8==u)return;if(":"!=d()){e=n=0;while(n<4&&R(tt,d()))e=16*e+C(d(),16),h++,n++;if("."==d()){if(0==n)return;if(h-=n,u>6)return;r=0;while(d()){if(i=null,r>0){if(!("."==d()&&r<4))return;h++}if(!R(X,d()))return;while(R(X,d())){if(s=C(d(),10),null===i)i=s;else{if(0==i)return;i=10*i+s}if(i>255)return;h++}c[u]=256*c[u]+i,r++,2!=r&&4!=r||u++}if(4!=r)return;break}if(":"==d()){if(h++,!d())return}else if(d())return;c[u++]=e}else{if(null!==l)return;h++,u++,l=u}}if(null!==l){o=u-l,u=7;while(0!=u&&o>0)a=c[u],c[u--]=c[l+o-1],c[l+--o]=a}else if(8!=u)return;return c},at=function(t){for(var e=null,n=1,r=null,i=0,s=0;s<8;s++)0!==t[s]?(i>n&&(e=r,n=i),r=null,i=0):(null===r&&(r=s),++i);return i>n&&(e=r,n=i),e},ct=function(t){var e,n,r,i;if("number"==typeof t){for(e=[],n=0;n<4;n++)$(e,t%256),t=O(t/256);return P(e,".")}if("object"==typeof t){for(e="",r=at(t),n=0;n<8;n++)i&&0===t[n]||(i&&(i=!1),r===n?(e+=n?":":"::",i=!0):(e+=L(t[n],16),n<7&&(e+=":")));return"["+e+"]"}return t},ut={},lt=p({},ut,{" ":1,'"':1,"<":1,">":1,"`":1}),ht=p({},lt,{"#":1,"?":1,"{":1,"}":1}),dt=p({},ht,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),ft=function(t,e){var n=y(t,0);return n>32&&n<127&&!f(e,t)?t:encodeURIComponent(t)},pt={ftp:21,file:null,http:80,https:443,ws:80,wss:443},gt=function(t,e){var n;return 2==t.length&&R(W,N(t,0))&&(":"==(n=N(t,1))||!e&&"|"==n)},mt=function(t){var e;return t.length>1&&gt(q(t,0,2))&&(2==t.length||"/"===(e=N(t,2))||"\\"===e||"?"===e||"#"===e)},yt=function(t){return"."===t||"%2e"===B(t)},vt=function(t){return t=B(t),".."===t||"%2e."===t||".%2e"===t||"%2e%2e"===t},bt={},wt={},_t={},Et={},Tt={},It={},St={},At={},xt={},kt={},Ct={},Ot={},Dt={},Nt={},Rt={},Pt={},Lt={},Mt={},jt={},Ft={},Ut={},Vt=function(t,e,n){var r,i,s,o=b(t);if(e){if(i=this.parse(o),i)throw k(i);this.searchParams=null}else{if(void 0!==n&&(r=new Vt(n,!0)),i=this.parse(o,null,r),i)throw k(i);s=A(new S),s.bindURL(this),this.searchParams=s}};Vt.prototype={type:"URL",parse:function(t,e,n){var i,s,o,a,c=this,u=e||bt,l=0,h="",d=!1,p=!1,y=!1;t=b(t),e||(c.scheme="",c.username="",c.password="",c.host=null,c.port=null,c.path=[],c.query=null,c.fragment=null,c.cannotBeABaseURL=!1,t=F(t,rt,"")),t=F(t,it,""),i=g(t);while(l<=i.length){switch(s=i[l],u){case bt:if(!s||!R(W,s)){if(e)return H;u=_t;continue}h+=B(s),u=wt;break;case wt:if(s&&(R(Q,s)||"+"==s||"-"==s||"."==s))h+=B(s);else{if(":"!=s){if(e)return H;h="",u=_t,l=0;continue}if(e&&(c.isSpecial()!=f(pt,h)||"file"==h&&(c.includesCredentials()||null!==c.port)||"file"==c.scheme&&!c.host))return;if(c.scheme=h,e)return void(c.isSpecial()&&pt[c.scheme]==c.port&&(c.port=null));h="","file"==c.scheme?u=Nt:c.isSpecial()&&n&&n.scheme==c.scheme?u=Et:c.isSpecial()?u=At:"/"==i[l+1]?(u=Tt,l++):(c.cannotBeABaseURL=!0,j(c.path,""),u=jt)}break;case _t:if(!n||n.cannotBeABaseURL&&"#"!=s)return H;if(n.cannotBeABaseURL&&"#"==s){c.scheme=n.scheme,c.path=m(n.path),c.query=n.query,c.fragment="",c.cannotBeABaseURL=!0,u=Ut;break}u="file"==n.scheme?Nt:It;continue;case Et:if("/"!=s||"/"!=i[l+1]){u=It;continue}u=xt,l++;break;case Tt:if("/"==s){u=kt;break}u=Mt;continue;case It:if(c.scheme=n.scheme,s==r)c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=m(n.path),c.query=n.query;else if("/"==s||"\\"==s&&c.isSpecial())u=St;else if("?"==s)c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=m(n.path),c.query="",u=Ft;else{if("#"!=s){c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=m(n.path),c.path.length--,u=Mt;continue}c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=m(n.path),c.query=n.query,c.fragment="",u=Ut}break;case St:if(!c.isSpecial()||"/"!=s&&"\\"!=s){if("/"!=s){c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,u=Mt;continue}u=kt}else u=xt;break;case At:if(u=xt,"/"!=s||"/"!=N(h,l+1))continue;l++;break;case xt:if("/"!=s&&"\\"!=s){u=kt;continue}break;case kt:if("@"==s){d&&(h="%40"+h),d=!0,o=g(h);for(var v=0;v<o.length;v++){var w=o[v];if(":"!=w||y){var _=ft(w,dt);y?c.password+=_:c.username+=_}else y=!0}h=""}else if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&c.isSpecial()){if(d&&""==h)return z;l-=g(h).length+1,h="",u=Ct}else h+=s;break;case Ct:case Ot:if(e&&"file"==c.scheme){u=Pt;continue}if(":"!=s||p){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&c.isSpecial()){if(c.isSpecial()&&""==h)return K;if(e&&""==h&&(c.includesCredentials()||null!==c.port))return;if(a=c.parseHost(h),a)return a;if(h="",u=Lt,e)return;continue}"["==s?p=!0:"]"==s&&(p=!1),h+=s}else{if(""==h)return K;if(a=c.parseHost(h),a)return a;if(h="",u=Dt,e==Ot)return}break;case Dt:if(!R(X,s)){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&c.isSpecial()||e){if(""!=h){var E=C(h,10);if(E>65535)return G;c.port=c.isSpecial()&&E===pt[c.scheme]?null:E,h=""}if(e)return;u=Lt;continue}return G}h+=s;break;case Nt:if(c.scheme="file","/"==s||"\\"==s)u=Rt;else{if(!n||"file"!=n.scheme){u=Mt;continue}if(s==r)c.host=n.host,c.path=m(n.path),c.query=n.query;else if("?"==s)c.host=n.host,c.path=m(n.path),c.query="",u=Ft;else{if("#"!=s){mt(P(m(i,l),""))||(c.host=n.host,c.path=m(n.path),c.shortenPath()),u=Mt;continue}c.host=n.host,c.path=m(n.path),c.query=n.query,c.fragment="",u=Ut}}break;case Rt:if("/"==s||"\\"==s){u=Pt;break}n&&"file"==n.scheme&&!mt(P(m(i,l),""))&&(gt(n.path[0],!0)?j(c.path,n.path[0]):c.host=n.host),u=Mt;continue;case Pt:if(s==r||"/"==s||"\\"==s||"?"==s||"#"==s){if(!e&&gt(h))u=Mt;else if(""==h){if(c.host="",e)return;u=Lt}else{if(a=c.parseHost(h),a)return a;if("localhost"==c.host&&(c.host=""),e)return;h="",u=Lt}continue}h+=s;break;case Lt:if(c.isSpecial()){if(u=Mt,"/"!=s&&"\\"!=s)continue}else if(e||"?"!=s)if(e||"#"!=s){if(s!=r&&(u=Mt,"/"!=s))continue}else c.fragment="",u=Ut;else c.query="",u=Ft;break;case Mt:if(s==r||"/"==s||"\\"==s&&c.isSpecial()||!e&&("?"==s||"#"==s)){if(vt(h)?(c.shortenPath(),"/"==s||"\\"==s&&c.isSpecial()||j(c.path,"")):yt(h)?"/"==s||"\\"==s&&c.isSpecial()||j(c.path,""):("file"==c.scheme&&!c.path.length&&gt(h)&&(c.host&&(c.host=""),h=N(h,0)+":"),j(c.path,h)),h="","file"==c.scheme&&(s==r||"?"==s||"#"==s))while(c.path.length>1&&""===c.path[0])U(c.path);"?"==s?(c.query="",u=Ft):"#"==s&&(c.fragment="",u=Ut)}else h+=ft(s,ht);break;case jt:"?"==s?(c.query="",u=Ft):"#"==s?(c.fragment="",u=Ut):s!=r&&(c.path[0]+=ft(s,ut));break;case Ft:e||"#"!=s?s!=r&&("'"==s&&c.isSpecial()?c.query+="%27":c.query+="#"==s?"%23":ft(s,ut)):(c.fragment="",u=Ut);break;case Ut:s!=r&&(c.fragment+=ft(s,lt));break}l++}},parseHost:function(t){var e,n,r;if("["==N(t,0)){if("]"!=N(t,t.length-1))return K;if(e=ot(q(t,1,-1)),!e)return K;this.host=e}else if(this.isSpecial()){if(t=v(t),R(et,t))return K;if(e=st(t),null===e)return K;this.host=e}else{if(R(nt,t))return K;for(e="",n=g(t),r=0;r<n.length;r++)e+=ft(n[r],ut);this.host=e}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return f(pt,this.scheme)},shortenPath:function(){var t=this.path,e=t.length;!e||"file"==this.scheme&&1==e&&gt(t[0],!0)||t.length--},serialize:function(){var t=this,e=t.scheme,n=t.username,r=t.password,i=t.host,s=t.port,o=t.path,a=t.query,c=t.fragment,u=e+":";return null!==i?(u+="//",t.includesCredentials()&&(u+=n+(r?":"+r:"")+"@"),u+=ct(i),null!==s&&(u+=":"+s)):"file"==e&&(u+="//"),u+=t.cannotBeABaseURL?o[0]:o.length?"/"+P(o,"/"):"",null!==a&&(u+="?"+a),null!==c&&(u+="#"+c),u},setHref:function(t){var e=this.parse(t);if(e)throw k(e);this.searchParams.update()},getOrigin:function(){var t=this.scheme,e=this.port;if("blob"==t)try{return new qt(t.path[0]).origin}catch(n){return"null"}return"file"!=t&&this.isSpecial()?t+"://"+ct(this.host)+(null!==e?":"+e:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(t){this.parse(b(t)+":",bt)},getUsername:function(){return this.username},setUsername:function(t){var e=g(b(t));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var n=0;n<e.length;n++)this.username+=ft(e[n],dt)}},getPassword:function(){return this.password},setPassword:function(t){var e=g(b(t));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var n=0;n<e.length;n++)this.password+=ft(e[n],dt)}},getHost:function(){var t=this.host,e=this.port;return null===t?"":null===e?ct(t):ct(t)+":"+e},setHost:function(t){this.cannotBeABaseURL||this.parse(t,Ct)},getHostname:function(){var t=this.host;return null===t?"":ct(t)},setHostname:function(t){this.cannotBeABaseURL||this.parse(t,Ot)},getPort:function(){var t=this.port;return null===t?"":b(t)},setPort:function(t){this.cannotHaveUsernamePasswordPort()||(t=b(t),""==t?this.port=null:this.parse(t,Dt))},getPathname:function(){var t=this.path;return this.cannotBeABaseURL?t[0]:t.length?"/"+P(t,"/"):""},setPathname:function(t){this.cannotBeABaseURL||(this.path=[],this.parse(t,Lt))},getSearch:function(){var t=this.query;return t?"?"+t:""},setSearch:function(t){t=b(t),""==t?this.query=null:("?"==N(t,0)&&(t=q(t,1)),this.query="",this.parse(t,Ft)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var t=this.fragment;return t?"#"+t:""},setHash:function(t){t=b(t),""!=t?("#"==N(t,0)&&(t=q(t,1)),this.fragment="",this.parse(t,Ut)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var qt=function(t){var e=d(this,Bt),n=arguments.length>1?arguments[1]:void 0,r=T(e,new Vt(t,!1,n));s||(e.href=r.serialize(),e.origin=r.getOrigin(),e.protocol=r.getProtocol(),e.username=r.getUsername(),e.password=r.getPassword(),e.host=r.getHost(),e.hostname=r.getHostname(),e.port=r.getPort(),e.pathname=r.getPathname(),e.search=r.getSearch(),e.searchParams=r.getSearchParams(),e.hash=r.getHash())},Bt=qt.prototype,$t=function(t,e){return{get:function(){return I(this)[t]()},set:e&&function(t){return I(this)[e](t)},configurable:!0,enumerable:!0}};if(s&&l(Bt,{href:$t("serialize","setHref"),origin:$t("getOrigin"),protocol:$t("getProtocol","setProtocol"),username:$t("getUsername","setUsername"),password:$t("getPassword","setPassword"),host:$t("getHost","setHost"),hostname:$t("getHostname","setHostname"),port:$t("getPort","setPort"),pathname:$t("getPathname","setPathname"),search:$t("getSearch","setSearch"),searchParams:$t("getSearchParams"),hash:$t("getHash","setHash")}),h(Bt,"toJSON",(function(){return I(this).serialize()}),{enumerable:!0}),h(Bt,"toString",(function(){return I(this).serialize()}),{enumerable:!0}),x){var zt=x.createObjectURL,Ht=x.revokeObjectURL;zt&&h(qt,"createObjectURL",c(zt,x)),Ht&&h(qt,"revokeObjectURL",c(Ht,x))}w(qt,"URL"),i({global:!0,forced:!o,sham:!s},{URL:qt})},"2ba4":function(t,e){var n=Function.prototype,r=n.apply,i=n.bind,s=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?s.bind(r):function(){return s.apply(r,arguments)})},"2cf4":function(t,e,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("1cdc"),y=n("605d"),v=a.setImmediate,b=a.clearImmediate,w=a.process,_=a.Dispatch,E=a.Function,T=a.MessageChannel,I=a.String,S=0,A={},x="onreadystatechange";try{r=a.location}catch(N){}var k=function(t){if(h(A,t)){var e=A[t];delete A[t],e()}},C=function(t){return function(){k(t)}},O=function(t){k(t.data)},D=function(t){a.postMessage(I(t),r.protocol+"//"+r.host)};v&&b||(v=function(t){var e=p(arguments,1);return A[++S]=function(){c(l(t)?t:E(t),void 0,e)},i(S),S},b=function(t){delete A[t]},y?i=function(t){w.nextTick(C(t))}:_&&_.now?i=function(t){_.now(C(t))}:T&&!m?(s=new T,o=s.port2,s.port1.onmessage=O,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(D)?(i=D,a.addEventListener("message",O,!1)):i=x in g("script")?function(t){f.appendChild(g("script"))[x]=function(){f.removeChild(this),k(t)}}:function(t){setTimeout(C(t),0)}),t.exports={set:v,clear:b}},"2d00":function(t,e,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||s[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("fc6a"),a=n("df75");t.exports=r?Object.defineProperties:function(t,e){s(t);var n,r=o(e),c=a(e),u=c.length,l=0;while(u>l)i.f(t,n=c[l++],r[n]);return t}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"408a":function(t,e,n){var r=n("e330");t.exports=r(1..valueOf)},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},"466d":function(t,e,n){"use strict";var r=n("c65b"),i=n("d784"),s=n("825a"),o=n("50c4"),a=n("577e"),c=n("1d80"),u=n("dc4a"),l=n("8aa5"),h=n("14c3");i("match",(function(t,e,n){return[function(e){var n=c(this),i=void 0==e?void 0:u(e,t);return i?r(i,e,n):new RegExp(e)[t](a(n))},function(t){var r=s(this),i=a(t),c=n(e,r,i);if(c.done)return c.value;if(!r.global)return h(r,i);var u=r.unicode;r.lastIndex=0;var d,f=[],p=0;while(null!==(d=h(r,i))){var g=a(d[0]);f[p]=g,""===g&&(r.lastIndex=l(i,o(r.lastIndex),u)),p++}return 0===p?null:f}]}))},4840:function(t,e,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!o(r=i(n,t)))return r;if(s(n=t.valueOf)&&!o(r=i(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!o(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),s=n("07fa"),o=n("8418"),a=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=s(t),u=i(e,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)o(h,d,t[u]);return h.length=d,h}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("7b0b"),a=n("9bdd"),c=n("e95a"),u=n("68ee"),l=n("07fa"),h=n("8418"),d=n("9a1f"),f=n("35a1"),p=r.Array;t.exports=function(t){var e=o(t),n=u(this),r=arguments.length,g=r>1?arguments[1]:void 0,m=void 0!==g;m&&(g=i(g,r>2?arguments[2]:void 0));var y,v,b,w,_,E,T=f(e),I=0;if(!T||this==p&&c(T))for(y=l(e),v=n?new this(y):p(y);y>I;I++)E=m?g(e[I],I):e[I],h(v,I,E);else for(w=d(e,T),_=w.next,v=n?new this:[];!(b=s(_,w)).done;I++)E=m?a(w,g,[b.value,I],!0):b.value,h(v,I,E);return v.length=I,v}},"4f60":function(t,e,n){"use strict";var r=n("7ded");n.d(e,"a",(function(){return r["a"]}));var i="firebase",s="9.6.1";
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
r["a"].registerVersion(i,s,"app-compat")},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),s=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(t,e,n){"use strict";n.r(e),n.d(e,"SDK_VERSION",(function(){return Q})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return M})),n.d(e,"_addComponent",(function(){return V})),n.d(e,"_addOrOverwriteComponent",(function(){return q})),n.d(e,"_apps",(function(){return F})),n.d(e,"_clearComponents",(function(){return H})),n.d(e,"_components",(function(){return U})),n.d(e,"_getProvider",(function(){return $})),n.d(e,"_registerComponent",(function(){return B})),n.d(e,"_removeServiceInstance",(function(){return z})),n.d(e,"deleteApp",(function(){return Z})),n.d(e,"getApp",(function(){return Y})),n.d(e,"getApps",(function(){return J})),n.d(e,"initializeApp",(function(){return X})),n.d(e,"onLog",(function(){return et})),n.d(e,"registerVersion",(function(){return tt})),n.d(e,"setLogLevel",(function(){return nt}));var r=n("22e5"),i=n("e691"),s=n("1fd5");n.d(e,"FirebaseError",(function(){return s["c"]}));
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
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.11",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",I="@firebase/messaging",S="@firebase/messaging-compat",A="@firebase/performance",x="@firebase/performance-compat",k="@firebase/remote-config",C="@firebase/remote-config-compat",O="@firebase/storage",D="@firebase/storage-compat",N="@firebase/firestore",R="@firebase/firestore-compat",P="firebase",L="9.6.1",M="[DEFAULT]",j={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[I]:"fire-fcm",[S]:"fire-fcm-compat",[A]:"fire-perf",[x]:"fire-perf-compat",[k]:"fire-rc",[C]:"fire-rc-compat",[O]:"fire-gcs",[D]:"fire-gcs-compat",[N]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},F=new Map,U=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function q(t,e){t.container.addOrOverwriteComponent(e)}function B(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())V(n,t);return!0}function $(t,e){return t.container.getProvider(e)}function z(t,e,n=M){$(t,e).clearInstance(n)}function H(){U.clear()}
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
 */const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new s["b"]("app","Firebase",K);
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
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
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
 */const Q=L;function X(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["g"])(t,o.options)&&Object(s["g"])(n,o.config))return o;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new W(t,n,a);return F.set(i,c),c}function Y(t=M){const e=F.get(t);if(!e)throw G.create("no-app",{appName:t});return e}function J(){return Array.from(F.values())}async function Z(t){const e=t.name;F.has(e)&&(F.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function tt(t,e,n){var i;let s=null!==(i=j[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw G.create("invalid-log-argument");Object(i["d"])(t,e)}function nt(t){Object(i["c"])(t)}
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
 */function rt(t){B(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),tt(c,u,t),tt(c,u,"esm2017"),tt("fire-js","")}rt("")},"58a8":function(t,e,n){var r=n("e330"),i=n("1d80"),s=n("577e"),o=n("5899"),a=r("".replace),c="["+o+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(t){return function(e){var n=s(i(e));return 1&t&&(n=a(n,u,"")),2&t&&(n=a(n,l,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5fb2":function(t,e,n){"use strict";var r=n("da84"),i=n("e330"),s=2147483647,o=36,a=1,c=26,u=38,l=700,h=72,d=128,f="-",p=/[^\0-\u007E]/,g=/[.\u3002\uFF0E\uFF61]/g,m="Overflow: input needs wider integers to process",y=o-a,v=r.RangeError,b=i(g.exec),w=Math.floor,_=String.fromCharCode,E=i("".charCodeAt),T=i([].join),I=i([].push),S=i("".replace),A=i("".split),x=i("".toLowerCase),k=function(t){var e=[],n=0,r=t.length;while(n<r){var i=E(t,n++);if(i>=55296&&i<=56319&&n<r){var s=E(t,n++);56320==(64512&s)?I(e,((1023&i)<<10)+(1023&s)+65536):(I(e,i),n--)}else I(e,i)}return e},C=function(t){return t+22+75*(t<26)},O=function(t,e,n){var r=0;t=n?w(t/l):t>>1,t+=w(t/e);while(t>y*c>>1)t=w(t/y),r+=o;return w(r+(y+1)*t/(t+u))},D=function(t){var e=[];t=k(t);var n,r,i=t.length,u=d,l=0,p=h;for(n=0;n<t.length;n++)r=t[n],r<128&&I(e,_(r));var g=e.length,y=g;g&&I(e,f);while(y<i){var b=s;for(n=0;n<t.length;n++)r=t[n],r>=u&&r<b&&(b=r);var E=y+1;if(b-u>w((s-l)/E))throw v(m);for(l+=(b-u)*E,u=b,n=0;n<t.length;n++){if(r=t[n],r<u&&++l>s)throw v(m);if(r==u){var S=l,A=o;while(1){var x=A<=p?a:A>=p+c?c:A-p;if(S<x)break;var D=S-x,N=o-x;I(e,_(C(x+D%N))),S=w(D/N),A+=o}I(e,_(C(S))),p=O(l,E,y==g),l=0,y++}}l++,u++}return T(e,"")};t.exports=function(t){var e,n,r=[],i=A(S(x(t),g,"."),".");for(e=0;e<i.length;e++)n=i[e],I(r,b(p,n)?"xn--"+D(n):n);return T(r,".")}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);t.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=d({},t)[n]||a(d({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,o=1,d=c.f,f=u.f;while(i>o){var g,m=h(arguments[o++]),y=d?p(a(m),d(m)):a(m),v=y.length,b=0;while(v>b)g=y[b++],r&&!s(f,m,g)||(n[g]=m[g])}return n}:d},6547:function(t,e,n){var r=n("e330"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,h=s(o(e)),d=i(n),f=h.length;return d<0||d>=f?t?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?t?a(h,d):r:t?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),g=function(t){if(!s(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},m=function(t){if(!s(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(t))}catch(e){return!0}};m.sham=!0,t.exports=!h||i((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?m:g},"69f3":function(t,e,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,y=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var w=d.state||(d.state=new y),_=c(w.get),E=c(w.has),T=c(w.set);r=function(t,e){if(E(w,t))throw new m(g);return e.facade=t,T(w,t,e),e},i=function(t){return _(w,t)||{}},s=function(t){return E(w,t)}}else{var I=f("state");p[I]=!0,r=function(t,e){if(h(t,I))throw new m(g);return e.facade=t,l(t,I,e),e},i=function(t){return h(t,I)?t[I]:{}},s=function(t){return h(t,I)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:b}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==m)&&o(n,"name",m),u=d(n),u.source||(u.source=f.join("string"==typeof m?m:""))),t!==r?(h?!g&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7156:function(t,e,n){var r=n("1626"),i=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;t.exports=s===Object.prototype?void 0:s},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),s=r.Object;t.exports=function(t){return s(i(t))}},"7c73":function(t,e,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return d+p+h+t+d+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?v(r):b():v(r);var t=o.length;while(t--)delete w[f][o[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[g]=t):n=w(),void 0===e?n:s(n,e)}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,s=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),g=n("3f8c"),m=n("ae93"),y=o.PROPER,v=o.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,_=p("iterator"),E="keys",T="values",I="entries",S=function(){return this};t.exports=function(t,e,n,o,p,m,A){c(n,e,o);var x,k,C,O=function(t){if(t===p&&L)return L;if(!w&&t in R)return R[t];switch(t){case E:return function(){return new n(this,t)};case T:return function(){return new n(this,t)};case I:return function(){return new n(this,t)}}return function(){return new n(this)}},D=e+" Iterator",N=!1,R=t.prototype,P=R[_]||R["@@iterator"]||p&&R[p],L=!w&&P||O(p),M="Array"==e&&R.entries||P;if(M&&(x=u(M.call(new t)),x!==Object.prototype&&x.next&&(s||u(x)===b||(l?l(x,b):a(x[_])||f(x,_,S)),h(x,D,!0,!0),s&&(g[D]=S))),y&&p==T&&P&&P.name!==T&&(!s&&v?d(R,"name",T):(N=!0,L=function(){return i(P,this)})),p)if(k={values:O(T),keys:m?L:O(E),entries:O(I)},A)for(C in k)(w||N||!(C in R))&&f(R,C,k[C]);else r({target:e,proto:!0,forced:w||N},k);return s&&!A||R[_]===L||f(R,_,L,{name:p}),g[e]=L,k}},"7ded":function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
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
class a{constructor(t,e){this._delegate=t,this.firebase=e,Object(s["_addComponent"])(t,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(t,e=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(s["_addComponent"])(this._delegate,t)}_addOrOverwriteComponent(t){Object(s["_addOrOverwriteComponent"])(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
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
function l(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(t){delete e[t]}function o(t){if(t=t||s["_DEFAULT_ENTRY_NAME"],!Object(r["d"])(e,t))throw u.create("no-app",{appName:t});return e[t]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["d"])(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map(t=>e[t])}function l(e){const i=e.name,a=i.replace("-compat","");if(s["_registerComponent"](e)&&"PUBLIC"===e.type){const s=(t=o())=>{if("function"!==typeof t[a])throw u.create("invalid-app-argument",{appName:i});return t[a]()};void 0!==e.serviceProps&&Object(r["h"])(s,e.serviceProps),n[a]=s,t.prototype[a]=function(...t){const n=this._getService.bind(this,i);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
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
 */function h(){const t=l(a);function e(e){Object(r["h"])(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:r["f"],ErrorFactory:r["b"],deepExtend:r["h"]}),t}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",g="0.1.12";
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
function m(t){Object(s["registerVersion"])(p,g,t)}
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
 */if(Object(r["k"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;m()},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return kr})),n.d(e,"b",(function(){return Or})),n.d(e,"c",(function(){return Cr})),n.d(e,"d",(function(){return Nr})),n.d(e,"e",(function(){return Dr})),n.d(e,"f",(function(){return Rr})),n.d(e,"g",(function(){return Pr})),n.d(e,"h",(function(){return Ar})),n.d(e,"i",(function(){return xr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete _[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function I(t){t:{var e=Bn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function x(t){return/^[\s\xa0]*$/.test(t)}var k,C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return-1!=t.indexOf(e)}function D(t,e){return t<e?-1:t>e?1:0}t:{var N=a.navigator;if(N){var R=N.userAgent;if(R){k=R;break t}}k=""}function P(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function U(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var V,q=O(k,"Opera"),B=O(k,"Trident")||O(k,"MSIE"),$=O(k,"Edge"),z=$||B,H=O(k,"Gecko")&&!(O(k.toLowerCase(),"webkit")&&!O(k,"Edge"))&&!(O(k,"Trident")||O(k,"MSIE"))&&!O(k,"Edge"),K=O(k.toLowerCase(),"webkit")&&!O(k,"Edge");function G(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=k;return H?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),B){var X=G();if(null!=X&&X>parseFloat(W)){V=String(X);break t}}V=W}var Y,J={};function Z(){return U((function(){let t=0;const e=C(String(V)).split("."),n=C("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&B){var tt=G();Y=tt||(parseInt(V,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{F(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=E(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[ft]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=St(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[ft],t instanceof lt?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function At(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function xt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),j(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=kt(o,r,!0,e)&&i}if(o=e.g=t,i=kt(o,r,!0,e)&&i,i=kt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=kt(o,r,!1,e)&&i}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(At,b),At.prototype[ot]=!0,At.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},At.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=a.JSON.stringify;function Ot(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Dt{constructor(){this.h=this.g=null}add(t,e){const n=Rt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,Rt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Pt,t=>t.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){a.setTimeout(()=>{throw t},0)}function Mt(t,e){Nt||jt(),Ft||(Nt(),Ft=!0),Ut.add(t,e)}function jt(){var t=a.Promise.resolve(void 0);Nt=function(){t.then(Vt)}}var Ft=!1,Ut=new Dt;function Vt(){for(var t;t=Ot();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Rt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function qt(t,e){At.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function zt(t){t.g=$t(()=>{t.g=null,t.i&&(t.i=!1,zt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(qt,At),r=qt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xt(this,"tick"),this.da&&(Bt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qt.Z.M.call(this),Bt(this),delete this.g};class Ht extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(t){b.call(this),this.h=t,this.g={}}v(Kt,b);var Gt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Gt[0]=n.toString()),n=Gt);for(var i=0;i<n.length;i++){var s=gt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qt(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ct(n)}catch(a){return e}}Kt.prototype.M=function(){Kt.Z.M.call(this),Qt(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new At}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();xt(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();xt(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(se,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Kt(this),this.P=Te,t=z?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(be,rt),v(we,fe),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Te=45e3,Ie={},Se={};function Ae(t,e,n){t.K=1,t.v=Ye(He(e)),t.s=n,t.U=!0,xe(t,null)}function xe(t,e){t.F=Date.now(),De(t),t.A=He(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ht(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ce(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Oe(t,n),r==Se){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ie){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}ke(t)&&r!=Se&&r!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),Pe(t))}function Oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Ie:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function De(t){t.Y=Date.now()+t.P,Ne(t,t.P)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function Re(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Pe(t){0==t.l.G||t.I||pr(t.l,t)}function Le(t){Re(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||_n(n.i,t)))if(n.I=t.N,!t.J&&_n(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&fr(n),!x(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(O(t,"spdy")||O(t,"quic")||O(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(En(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Re(a),De(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function je(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=je(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ue)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ve(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];qe(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],qe(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=_e.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Wn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||z||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),Re(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var r=Qn(this.g);t="";var i=r.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),Pe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Le(this),Pe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.U?(Ce(this,h,o),z&&this.i&&3==h&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==h&&Le(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,De(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),Pe(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(Re(this),Ce(this,t,e),this.i&&4!=t&&De(this))}},r.cancel=function(){this.I=!0,Le(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Le(this),this.o=2,Pe(this)):Ne(this,this.Y-t)},r=Ue.prototype,r.R=function(){Ve(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ve(this),this.g.concat()},r.get=function(t,e){return qe(this.h,t)?this.h[t]:e},r.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ze(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ze){this.g=void 0!==e?e:t.g,Ke(this,t.j),this.s=t.s,Ge(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.g=!!e,Ke(this,n[1]||"",!0),this.s=tn(n[2]||""),Ge(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function He(t){return new ze(t)}function Ke(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof ze?He(t):new ze(t,void 0)}function Ze(t,e,n,r){var i=new ze(null,void 0);return t&&Ke(i,t),e&&Ge(i,e),n&&We(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ue,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ve(t)))}function dn(t,e){return ln(t),e=pn(t,e),qe(t.g.h,e)}function fn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),A(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=S(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function _n(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Sn(){}function An(){this.g=new Sn}function xn(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;l(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function kn(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=y(Cn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(Cn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(Cn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(Cn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Cn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function On(t){this.l=t.$b||null,this.j=t.ib||!1}function Dn(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(On,fe),On.prototype.g=function(){return new Dn(this.l,this.j)},On.prototype.i=function(t){return function(){return t}}({}),v(Dn,At);var Nn=0;function Rn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Pn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ln(t)}function Ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Dn.prototype,r.open=function(t,e){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ln(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Nn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pn(this):Ln(this),3==this.readyState&&Rn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Pn(this))},r.Ta=function(t){this.g&&(this.response=t,Pn(this))},r.ha=function(){this.g&&Pn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Mn=a.JSON.parse;function jn(t){At.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}v(jn,At);var Fn="",Un=/^https?$/i,Vn=["POST","PUT"];function qn(t){return B&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Bn(t){return"content-type"==t.toLowerCase()}function $n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zn(t),Kn(t)}function zn(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}function Hn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))$t(t.Fa,0,t);else if(xt(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(Be)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",zn(t)}}finally{Kn(t)}}}function Kn(t,e){if(t.g){Gn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||xt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Gn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=He(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new _e(t,t.h,e,void 0),e.K=2,e.v=Ye(He(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),De(e)}yr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Mt(t.Ha,t),t.C=0)}function sr(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=He(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Yn(r,t.o,t.s),n=new _e(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),Ae(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{xn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Mt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new _e(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(He(e)),n.s=null,n.U=!0,xe(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),hr(t),t.g=null;var r=2}else{if(!_n(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),xt(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new ze("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ke(n,"https"),Ye(n)),kn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Je(n);if(""!=r.i)e&&Ge(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&P(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new jn(new On({ib:!0})):new jn(t.qa),e.L=t.H,e}function wr(){}function _r(){if(B&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Er(t,e){At.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}function Tr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ir(){be.call(this),this.status=1}function Sr(t){this.g=t}r=jn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void $n(this,s)}t=n||"";const i=new Ue(this.headers);r&&Fe(r,(function(t,e){i.set(e,t)})),r=I(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=E(Vn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=$t(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){$n(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Kn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),jn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},r.cb=function(){Hn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new _e(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=L(s),j(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=He(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Yn(n,this.o,s),En(this.i,i),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),i.$=!0,Ae(i,n,null)):Ae(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(t,e){return new Er(t,e)},v(Er,At),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),ir(t)},Er.prototype.close=function(){tr(this.g)},Er.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=Ct(t),rr(this.g,e)):rr(this.g,t)},Er.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Er.Z.M.call(this)},v(Tr,ve),v(Ir,be),v(Sr,wr),Sr.prototype.xa=function(){xt(this.g,"a")},Sr.prototype.wa=function(t){xt(this.g,new Tr(t))},Sr.prototype.va=function(t){xt(this.g,new Ir(t))},Sr.prototype.ua=function(){xt(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",At.prototype.listen=At.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Ar=s.createWebChannelTransport=function(){return new _r},xr=s.getStatEventTarget=function(){return ie()},kr=s.ErrorCode=he,Cr=s.EventType=de,Or=s.Event=ne,Dr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nr=s.FetchXmlHttpFactory=On,Rr=s.WebChannel=ge,Pr=s.XhrIo=jn}).call(this,n("c8ba"))},"90e3":function(t,e,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),s=n("577e"),o=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),y=i("".indexOf),v=i("".replace),b=i("".slice),w=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),_=a.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],T=w||E||_||h||d;T&&(g=function(t){var e,n,i,a,c,h,d,T=this,I=l(T),S=s(t),A=I.raw;if(A)return A.lastIndex=T.lastIndex,e=r(g,A,S),T.lastIndex=A.lastIndex,e;var x=I.groups,k=_&&T.sticky,C=r(o,T),O=T.source,D=0,N=S;if(k&&(C=v(C,"y",""),-1===y(C,"g")&&(C+="g"),N=b(S,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==m(S,T.lastIndex-1))&&(O="(?: "+O+")",N=" "+N,D++),n=new RegExp("^(?:"+O+")",C)),E&&(n=new RegExp("^"+O+"$(?!\\s)",C)),w&&(i=T.lastIndex),a=r(p,k?n:T,N),k?a?(a.input=b(a.input,D),a[0]=b(a[0],D),a.index=T.lastIndex,T.lastIndex+=a[0].length):T.lastIndex=0:w&&a&&(T.lastIndex=T.global?a.index+a[0].length:i),E&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&x)for(a.groups=h=u(null),c=0;c<x.length;c++)d=x[c],h[d[0]]=a[d[1]];return a}),t.exports=g},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},9861:function(t,e,n){"use strict";n("e260");var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("c65b"),a=n("e330"),c=n("0d3b"),u=n("6eeb"),l=n("e2cc"),h=n("d44e"),d=n("9ed3"),f=n("69f3"),p=n("19aa"),g=n("1626"),m=n("1a2d"),y=n("0366"),v=n("f5df"),b=n("825a"),w=n("861d"),_=n("577e"),E=n("7c73"),T=n("5c6c"),I=n("9a1f"),S=n("35a1"),A=n("b622"),x=n("addb"),k=A("iterator"),C="URLSearchParams",O=C+"Iterator",D=f.set,N=f.getterFor(C),R=f.getterFor(O),P=s("fetch"),L=s("Request"),M=s("Headers"),j=L&&L.prototype,F=M&&M.prototype,U=i.RegExp,V=i.TypeError,q=i.decodeURIComponent,B=i.encodeURIComponent,$=a("".charAt),z=a([].join),H=a([].push),K=a("".replace),G=a([].shift),W=a([].splice),Q=a("".split),X=a("".slice),Y=/\+/g,J=Array(4),Z=function(t){return J[t-1]||(J[t-1]=U("((?:%[\\da-f]{2}){"+t+"})","gi"))},tt=function(t){try{return q(t)}catch(e){return t}},et=function(t){var e=K(t,Y," "),n=4;try{return q(e)}catch(r){while(n)e=K(e,Z(n--),tt);return e}},nt=/[!'()~]|%20/g,rt={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},it=function(t){return rt[t]},st=function(t){return K(B(t),nt,it)},ot=function(t,e){if(t<e)throw V("Not enough arguments")},at=d((function(t,e){D(this,{type:O,iterator:I(N(t).entries),kind:e})}),"Iterator",(function(){var t=R(this),e=t.kind,n=t.iterator.next(),r=n.value;return n.done||(n.value="keys"===e?r.key:"values"===e?r.value:[r.key,r.value]),n}),!0),ct=function(t){this.entries=[],this.url=null,void 0!==t&&(w(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===$(t,0)?X(t,1):t:_(t)))};ct.prototype={type:C,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var e,n,r,i,s,a,c,u=S(t);if(u){e=I(t,u),n=e.next;while(!(r=o(n,e)).done){if(i=I(b(r.value)),s=i.next,(a=o(s,i)).done||(c=o(s,i)).done||!o(s,i).done)throw V("Expected sequence with length 2");H(this.entries,{key:_(a.value),value:_(c.value)})}}else for(var l in t)m(t,l)&&H(this.entries,{key:l,value:_(t[l])})},parseQuery:function(t){if(t){var e,n,r=Q(t,"&"),i=0;while(i<r.length)e=r[i++],e.length&&(n=Q(e,"="),H(this.entries,{key:et(G(n)),value:et(z(n,"="))}))}},serialize:function(){var t,e=this.entries,n=[],r=0;while(r<e.length)t=e[r++],H(n,st(t.key)+"="+st(t.value));return z(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var ut=function(){p(this,lt);var t=arguments.length>0?arguments[0]:void 0;D(this,new ct(t))},lt=ut.prototype;if(l(lt,{append:function(t,e){ot(arguments.length,2);var n=N(this);H(n.entries,{key:_(t),value:_(e)}),n.updateURL()},delete:function(t){ot(arguments.length,1);var e=N(this),n=e.entries,r=_(t),i=0;while(i<n.length)n[i].key===r?W(n,i,1):i++;e.updateURL()},get:function(t){ot(arguments.length,1);for(var e=N(this).entries,n=_(t),r=0;r<e.length;r++)if(e[r].key===n)return e[r].value;return null},getAll:function(t){ot(arguments.length,1);for(var e=N(this).entries,n=_(t),r=[],i=0;i<e.length;i++)e[i].key===n&&H(r,e[i].value);return r},has:function(t){ot(arguments.length,1);var e=N(this).entries,n=_(t),r=0;while(r<e.length)if(e[r++].key===n)return!0;return!1},set:function(t,e){ot(arguments.length,1);for(var n,r=N(this),i=r.entries,s=!1,o=_(t),a=_(e),c=0;c<i.length;c++)n=i[c],n.key===o&&(s?W(i,c--,1):(s=!0,n.value=a));s||H(i,{key:o,value:a}),r.updateURL()},sort:function(){var t=N(this);x(t.entries,(function(t,e){return t.key>e.key?1:-1})),t.updateURL()},forEach:function(t){var e,n=N(this).entries,r=y(t,arguments.length>1?arguments[1]:void 0),i=0;while(i<n.length)e=n[i++],r(e.value,e.key,this)},keys:function(){return new at(this,"keys")},values:function(){return new at(this,"values")},entries:function(){return new at(this,"entries")}},{enumerable:!0}),u(lt,k,lt.entries,{name:"entries"}),u(lt,"toString",(function(){return N(this).serialize()}),{enumerable:!0}),h(ut,C),r({global:!0,forced:!c},{URLSearchParams:ut}),!c&&g(M)){var ht=a(F.has),dt=a(F.set),ft=function(t){if(w(t)){var e,n=t.body;if(v(n)===C)return e=t.headers?new M(t.headers):new M,ht(e,"content-type")||dt(e,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),E(t,{body:T(0,_(n)),headers:T(0,e)})}return t};if(g(P)&&r({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return P(t,arguments.length>1?ft(arguments[1]):{})}}),g(L)){var pt=function(t){return p(this,j),new L(t,arguments.length>1?ft(arguments[1]):{})};j.constructor=pt,pt.prototype=j,r({global:!0,forced:!0},{Request:pt})}}t.exports={URLSearchParams:ut,getState:N}},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(s(n))return o(i(n,t));throw u(a(t)+" is not iterable")}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;e.f=i?u:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:s(+!u,n)}),o(t,l,!1,!0),a[l]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp,o=r((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),c=o||r((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:o}},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("23cb"),o=n("5926"),a=n("07fa"),c=n("7b0b"),u=n("65f0"),l=n("8418"),h=n("1dde"),d=h("splice"),f=i.TypeError,p=Math.max,g=Math.min,m=9007199254740991,y="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,r,i,h,d,v,b=c(this),w=a(b),_=s(t,w),E=arguments.length;if(0===E?n=r=0:1===E?(n=0,r=w-_):(n=E-2,r=g(p(o(e),0),w-_)),w+n-r>m)throw f(y);for(i=u(b,r),h=0;h<r;h++)d=_+h,d in b&&l(i,h,b[d]);if(i.length=r,n<r){for(h=_;h<w-r;h++)d=h+r,v=h+n,d in b?b[v]=b[d]:delete b[v];for(h=w;h>w-r+n;h--)delete b[h-1]}else if(n>r)for(h=w-r;h>_;h--)d=h+r-1,v=h+n-1,d in b?b[v]=b[d]:delete b[v];for(h=0;h<n;h++)b[h+_]=arguments[h+2];return b.length=w-r+n,i}})},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),s=n("e330"),o=n("94ca"),a=n("6eeb"),c=n("1a2d"),u=n("7156"),l=n("3a9b"),h=n("d9b5"),d=n("c04e"),f=n("d039"),p=n("241c").f,g=n("06cf").f,m=n("9bf2").f,y=n("408a"),v=n("58a8").trim,b="Number",w=i[b],_=w.prototype,E=i.TypeError,T=s("".slice),I=s("".charCodeAt),S=function(t){var e=d(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,n,r,i,s,o,a,c,u=d(t,"number");if(h(u))throw E("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=v(u),e=I(u,0),43===e||45===e){if(n=I(u,2),88===n||120===n)return NaN}else if(48===e){switch(I(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(s=T(u,2),o=s.length,a=0;a<o;a++)if(c=I(s,a),c<48||c>i)return NaN;return parseInt(s,r)}return+u};if(o(b,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var x,k=function(t){var e=arguments.length<1?0:w(S(t)),n=this;return l(_,n)&&f((function(){y(n)}))?u(Object(e),n,k):e},C=r?p(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;C.length>O;O++)c(w,x=C[O])&&!c(k,x)&&m(k,x,g(w,x));k.prototype=_,_.constructor=k,a(i,b,k)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},addb:function(t,e,n){var r=n("4dae"),i=Math.floor,s=function(t,e){var n=t.length,c=i(n/2);return n<8?o(t,e):a(t,s(r(t,0,c),e),s(r(t,c),e),e)},o=function(t,e){var n,r,i=t.length,s=1;while(s<i){r=s,n=t[s];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==s++&&(t[r]=n)}return t},a=function(t,e,n,r){var i=e.length,s=n.length,o=0,a=0;while(o<i||a<s)t[o+a]=o<i&&a<s?r(e[o],n[a])<=0?e[o++]:n[a++]:o<i?e[o++]:n[a++];return t};t.exports=s},ae93:function(t,e,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var t={};return r[f].call(t)!==t}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(u.exec),h="name";r&&!i&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),y=n("a4b4"),v=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,_=h.process,E=h.Promise,T=f(h,"queueMicrotask"),I=T&&T.value;I||(r=function(){var t,e;v&&(t=_.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?o():s=void 0,n}}s=void 0,t&&t.enter()},g||v||y||!b||!w?!m&&E&&E.resolve?(u=E.resolve(void 0),u.constructor=E,l=d(u.then,u),o=function(){l(r)}):v?o=function(){_.nextTick(r)}:(p=d(p,h),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=I||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},b727:function(t,e,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,d=7==t,f=5==t||h;return function(p,g,m,y){for(var v,b,w=o(p),_=s(w),E=r(g,m),T=a(_),I=0,S=y||c,A=e?S(p,T):n||d?S(p,0):void 0;T>I;I++)if((f||I in _)&&(v=_[I],b=E(v,I,w),t))if(e)A[I]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return I;case 2:u(A,v)}else switch(t){case 4:return!1;case 7:u(A,v)}return h?-1:i||l?l:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},c740:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,s=n("44d2"),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),s=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),s=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,o)&&r(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),s=n("9263"),o=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;t.exports=function(t,e,n,h){var d=a(t),f=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=f&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!f||!p||n){var g=r(/./[d]),m=e(d,""[t],(function(t,e,n,i,o){var a=r(t),c=e.exec;return c===s||c===l.exec?f&&!o?{done:!0,value:g(e,n,i)}:{done:!0,value:a(n,e,i)}:{done:!1}}));i(String.prototype,t,m[0]),i(l,d,m[1])}h&&c(l[d],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,s=n("1dde"),o=s("map");r({target:"Array",proto:!0,forced:!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&o(e.prototype,c(t))}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=o.values,d=function(t,e){if(t){if(t[u]!==h)try{a(t,u,h)}catch(r){t[u]=h}if(t[l]||a(t,l,e),i[e])for(var n in o)if(t[n]!==o[n])try{a(t,n,o[n])}catch(r){t[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(i(e,u))return e[u];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=o.set,f=o.getterFor(h);t.exports=c(Array,"Array",(function(t,e){d(this,{type:h,target:r(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e330:function(t,e){var n=Function.prototype,r=n.bind,i=n.call,s=r&&r.bind(i);t.exports=r?function(t){return t&&s(i,t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
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
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),g=n("d2bb"),m=n("d44e"),y=n("2626"),v=n("59ed"),b=n("1626"),w=n("861d"),_=n("19aa"),E=n("8925"),T=n("2266"),I=n("1c7e"),S=n("4840"),A=n("2cf4").set,x=n("b575"),k=n("cdf9"),C=n("44de"),O=n("f069"),D=n("e667"),N=n("01b4"),R=n("69f3"),P=n("94ca"),L=n("b622"),M=n("6069"),j=n("605d"),F=n("2d00"),U=L("species"),V="Promise",q=R.getterFor(V),B=R.set,$=R.getterFor(V),z=d&&d.prototype,H=d,K=z,G=u.TypeError,W=u.document,Q=u.process,X=O.f,Y=X,J=!!(W&&W.createEvent&&u.dispatchEvent),Z=b(u.PromiseRejectionEvent),tt="unhandledrejection",et="rejectionhandled",nt=0,rt=1,it=2,st=1,ot=2,at=!1,ct=P(V,(function(){var t=E(H),e=t!==String(H);if(!e&&66===F)return!0;if(c&&!K["finally"])return!0;if(F>=51&&/native code/.test(t))return!1;var n=new H((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[U]=r,at=n.then((function(){}))instanceof r,!at||!e&&M&&!Z})),ut=ct||!I((function(t){H.all(t)["catch"]((function(){}))})),lt=function(t){var e;return!(!w(t)||!b(e=t.then))&&e},ht=function(t,e){var n,r,i,s=e.value,o=e.state==rt,a=o?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{a?(o||(e.rejection===ot&&mt(e),e.rejection=st),!0===a?n=s:(l&&l.enter(),n=a(s),l&&(l.exit(),i=!0)),n===t.promise?u(G("Promise-chain cycle")):(r=lt(n))?h(r,n,c,u):c(n)):u(s)}catch(d){l&&!i&&l.exit(),u(d)}},dt=function(t,e){t.notified||(t.notified=!0,x((function(){var n,r=t.reactions;while(n=r.get())ht(n,t);t.notified=!1,e&&!t.rejection&&pt(t)})))},ft=function(t,e,n){var r,i;J?(r=W.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Z&&(i=u["on"+t])?i(r):t===tt&&C("Unhandled promise rejection",n)},pt=function(t){h(A,u,(function(){var e,n=t.facade,r=t.value,i=gt(t);if(i&&(e=D((function(){j?Q.emit("unhandledRejection",r,n):ft(tt,n,r)})),t.rejection=j||gt(t)?ot:st,e.error))throw e.value}))},gt=function(t){return t.rejection!==st&&!t.parent},mt=function(t){h(A,u,(function(){var e=t.facade;j?Q.emit("rejectionHandled",e):ft(et,e,t.value)}))},yt=function(t,e,n){return function(r){t(e,r,n)}},vt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=it,dt(t,!0))},bt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw G("Promise can't be resolved itself");var r=lt(e);r?x((function(){var n={done:!1};try{h(r,e,yt(bt,n,t),yt(vt,n,t))}catch(i){vt(n,i,t)}})):(t.value=e,t.state=rt,dt(t,!1))}catch(i){vt({done:!1},i,t)}}};if(ct&&(H=function(t){_(this,K),v(t),h(r,this);var e=q(this);try{t(yt(bt,e),yt(vt,e))}catch(n){vt(e,n)}},K=H.prototype,r=function(t){B(this,{type:V,done:!1,notified:!1,parent:!1,reactions:new N,rejection:!1,state:nt,value:void 0})},r.prototype=p(K,{then:function(t,e){var n=$(this),r=X(S(this,H));return n.parent=!0,r.ok=!b(t)||t,r.fail=b(e)&&e,r.domain=j?Q.domain:void 0,n.state==nt?n.reactions.add(r):x((function(){ht(r,n)})),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=q(t);this.promise=t,this.resolve=yt(bt,e),this.reject=yt(vt,e)},O.f=X=function(t){return t===H||t===s?new i(t):Y(t)},!c&&b(d)&&z!==Object.prototype)){o=z.then,at||(f(z,"then",(function(t,e){var n=this;return new H((function(t,e){h(o,n,t,e)})).then(t,e)}),{unsafe:!0}),f(z,"catch",K["catch"],{unsafe:!0}));try{delete z.constructor}catch(wt){}g&&g(z,K)}a({global:!0,wrap:!0,forced:ct},{Promise:H}),m(H,V,!1,!0),y(V),s=l(V),a({target:V,stat:!0,forced:ct},{reject:function(t){var e=X(this);return h(e.reject,void 0,t),e.promise}}),a({target:V,stat:!0,forced:c||ct},{resolve:function(t){return k(c&&this===s?H:this,t)}}),a({target:V,stat:!0,forced:ut},{all:function(t){var e=this,n=X(e),r=n.resolve,i=n.reject,s=D((function(){var n=v(e.resolve),s=[],o=0,a=1;T(t,(function(t){var c=o++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,s[c]=t,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(t){var e=this,n=X(e),r=n.reject,i=D((function(){var i=v(e.resolve);T(t,(function(t){h(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&s(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;t.exports=r((function(){var t=s(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.ca8b410d.js.map