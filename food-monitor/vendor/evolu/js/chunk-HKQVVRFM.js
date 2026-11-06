var ZS=Object.defineProperty;var ky=(t,e)=>{for(var r in e)ZS(t,r,{get:e[r],enumerable:!0})};var Ho=t=>{if(Array.isArray(t))return"Array";if($e(t))return"Object";switch(Object.prototype.toString.call(t)){case"[object Date]":return"Date";case"[object Map]":return"Map";case"[object Set]":return"Set";case"[object Uint8Array]":return"Uint8Array";default:return"Unsupported"}},vy=Object.freeze(Object.create(null)),$e=t=>{if(t===null||typeof t!="object")return!1;let e=Object.getPrototypeOf(t);return e===null||e===vy?!0:e===Object.prototype?"hasOwnProperty"in e&&"isPrototypeOf"in e:Object.getPrototypeOf(e)===null&&(Object.hasOwn(e,"hasOwnProperty")&&Object.hasOwn(e,"isPrototypeOf")||Object.isFrozen(e)&&Reflect.ownKeys(e).length===0)},Ri=t=>typeof t=="function",wc=t=>t!=null&&typeof t[Symbol.iterator]=="function",kr=t=>Object.entries(t),zd=t=>Object.fromEntries(t),ev=(t,e)=>Object.fromEntries(t.map(r=>[r,e(r)])),Di=(t,e)=>{let r=Object.create(null);for(let o in t)r[o]=e(t[o],o);return r},Vd=(t,e)=>{let r={};for(let o of Object.getOwnPropertyNames(t)){if(!e(o))continue;let n=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(r,o,n)}return r},tv=(t,e,r)=>{if(r)return{...t};let{[e]:o,...n}=t;return n},_d=(t,e,r)=>{let o=new Map,n=(i,a)=>{if(Object.is(i,a))return i;if(Array.isArray(i)&&Array.isArray(a)){let c=i;return s(a,()=>{let l=r&&new Map(Array.from(c,f=>[r(f),f])),h=c.length===a.length,p=Array.from(a,(f,m)=>{let d=r?.(f),y=d===void 0?c[m]:l?.get(d),b=n(y,f);return Object.is(b,c[m])||(h=!1),b});return h?c:p})}if($e(i)&&$e(a))return s(a,()=>{let c=Sy(a),l=c.length===Sy(i).length,h=Object.fromEntries(c.map(p=>{let f=Object.prototype.propertyIsEnumerable.call(i,p),m=f?i[p]:void 0,d=n(m,a[p]);return(!f||!Object.is(d,m))&&(l=!1),[p,d]}));return l?i:h});if(i instanceof Uint8Array&&a instanceof Uint8Array){if(i.length!==a.length)return a;for(let c=0;c<i.length;c++)if(i[c]!==a[c])return a;return i}return a},s=(i,a)=>{if(o.has(i))return o.set(i,!0),i;o.set(i,!1);let c=a(),l=o.get(i);return o.delete(i),l?i:c};return n(t,e)},Sy=t=>{let e=Object.getOwnPropertySymbols(t);return e.length===0?Object.keys(t):[...Object.keys(t),...e.filter(r=>Object.prototype.propertyIsEnumerable.call(t,r))]};function pe(t){let e=Object.create(null);return t===void 0?e:Object.assign(e,t)}var Bi=Object.freeze(pe()),Mi=(t,e)=>Object.hasOwn(t,e)?t[e]:void 0,rv=t=>{let e=URL.createObjectURL(t);return{url:e,[Symbol.dispose]:()=>{URL.revokeObjectURL(e)}}};var $t=(t,e)=>Object.is(t,e),Kd=(t,e)=>t===e||Object.is(t,e),ss=$t,Pi=$t,ov=$t,nv=$t,sv=$t,iv=$t,av=t=>(e,r)=>t(e,r)===0,Qd=t=>(e,r)=>{if(e===r)return!0;if(e.length!==r.length)return!1;for(let o=0;o<e.length;o++)if(!t(e[o],r[o]))return!1;return!0},Jd=Qd($t),is=Qd(Pi),Nc=is,Wi=t=>(e,r)=>{if(e===r)return!0;for(let o in t)if(!t[o](e[o],r[o]))return!1;return!0};function as(t,e){let r=[],o=new Map,n=[{kind:"Compare",actual:t,expected:e}],s=[];for(;n.length>0;){let i=n.pop();if(i.kind==="Compare"){let c=i.actual,l=i.expected;if($t(c,l))continue;if(typeof c!=typeof l){n.push({kind:"Fail"});continue}if(typeof c!="object"||c===null||typeof l!="object"||l===null){n.push({kind:"Fail"});continue}let h=o.get(c);if(h?.has(l))continue;h===void 0?o.set(c,new Set([l])):h.add(l),r.push([c,l]);let p=Ho(c),f=Ho(l);if(p!==f){n.push({kind:"Fail"});continue}if(p==="Array"){let m=c,d=l;if(m.length!==d.length||Reflect.ownKeys(m).length!==m.length+1||Reflect.ownKeys(d).length!==d.length+1){n.push({kind:"Fail"});continue}let y=!0;for(let b=0;b<m.length;b++){let x=Object.getOwnPropertyDescriptor(m,b),w=Object.getOwnPropertyDescriptor(d,b);if(x===void 0||w===void 0||!("value"in x)||!("value"in w)){y=!1;break}n.push({kind:"Compare",actual:x.value,expected:w.value})}y||n.push({kind:"Fail"});continue}switch(p){case"Date":Object.is(Date.prototype.getTime.call(c),Date.prototype.getTime.call(l))||n.push({kind:"Fail"});continue;case"Uint8Array":Nc(c,l)||n.push({kind:"Fail"});continue;case"Set":{let m=c,d=l;if(Reflect.ownKeys(c).length!==0||Reflect.ownKeys(l).length!==0||m.size!==d.size){n.push({kind:"Fail"});continue}n.push({kind:"Set",actual:Array.from(m),actualIndex:0,unmatched:Array.from(d),candidateIndex:0});continue}case"Map":{let m=c,d=l;if(Reflect.ownKeys(c).length!==0||Reflect.ownKeys(l).length!==0||m.size!==d.size){n.push({kind:"Fail"});continue}n.push({kind:"Map",actual:Array.from(m),actualIndex:0,unmatched:Array.from(d),candidateIndex:0});continue}case"Object":{let m=Reflect.ownKeys(c),d=Reflect.ownKeys(l);if(m.length!==d.length){n.push({kind:"Fail"});continue}let y=!0;for(let b of m){if(typeof b!="string"){y=!1;break}let x=Object.getOwnPropertyDescriptor(c,b),w=Object.getOwnPropertyDescriptor(l,b);if(x===void 0||w===void 0||!("value"in x)||!("value"in w)||!x.enumerable||!w.enumerable){y=!1;break}n.push({kind:"Compare",actual:x.value,expected:w.value})}y||n.push({kind:"Fail"});continue}case"Unsupported":n.push({kind:"Fail"});continue}}if(i.kind==="Set"){if(i.actualIndex===i.actual.length)continue;if(i.candidateIndex===i.unmatched.length){n.push({kind:"Fail"});continue}s.push({pairsCheckpoint:r.length,frameCheckpoint:n.length,retry:{...i,candidateIndex:i.candidateIndex+1}}),n.push({kind:"Commit",match:i}),n.push({kind:"Compare",actual:i.actual[i.actualIndex],expected:i.unmatched[i.candidateIndex]});continue}if(i.kind==="Map"){if(i.actualIndex===i.actual.length)continue;if(i.candidateIndex===i.unmatched.length){n.push({kind:"Fail"});continue}let[c,l]=i.actual[i.actualIndex],[h,p]=i.unmatched[i.candidateIndex];s.push({pairsCheckpoint:r.length,frameCheckpoint:n.length,retry:{...i,candidateIndex:i.candidateIndex+1}}),n.push({kind:"Commit",match:i}),n.push({kind:"Compare",actual:l,expected:p}),n.push({kind:"Compare",actual:c,expected:h});continue}if(i.kind==="Commit"){s.pop(),i.match.unmatched.splice(i.match.candidateIndex,1),n.push({...i.match,actualIndex:i.match.actualIndex+1,candidateIndex:0});continue}let a=s.pop();if(a===void 0)return!1;for(;r.length>a.pairsCheckpoint;){let[c,l]=r.pop(),h=o.get(c);h.delete(l),h.size===0&&o.delete(c)}n.length=a.frameCheckpoint,n.push(a.retry)}return!0}var M=(t,e,r={})=>{if(t)return;let o=Object.hasOwn(r,"actual")?r.actual:t,n=Object.hasOwn(r,"expected")?r.expected:!0,s=r.operator??"==",i=r.stackStartFn??M;if(Ey!==void 0){let c=new Ey.AssertionError({message:e,actual:o,expected:n,operator:r.diff==="full"?"deepStrictEqual":s,diff:r.diff,stackStartFn:i});throw r.diff==="full"&&(c.operator=s),r.cause!==void 0&&Object.defineProperty(c,"cause",{configurable:!0,value:r.cause,writable:!0}),c}let a=Object.assign(new Error(e,r.cause===void 0?void 0:{cause:r.cause}),{name:"AssertionError",code:"ERR_ASSERTION",actual:o,expected:n,generatedMessage:!1,operator:s});throw Error.captureStackTrace?.(a,i),a},Ey=globalThis.process?.getBuiltinModule?.("node:assert/strict");function Ty(t){M(t===!0,"Expected true.",{actual:t,expected:!0,operator:"strictEqual",stackStartFn:Ty})}var Oy=t=>{M(t===!1,"Expected false.",{actual:t,expected:!1,operator:"strictEqual",stackStartFn:Oy})};async function tp(t,e,r=tp){for(let n=0;n<e;n++){let s=t();M(!s,`Expected condition to be false after ${n} microtasks.`,{actual:s,expected:!1,operator:"strictEqual",stackStartFn:r}),await Promise.resolve()}let o=t();M(o,`Expected condition to be true after exactly ${e} microtasks.`,{actual:o,expected:!0,operator:"strictEqual",stackStartFn:r})}var Cy=async(t,e)=>{let r=!1,o=()=>{r=!0};t.then(o,o),await cv(()=>r,e,Cy)},cv=tp;function kc(t,e){let r=rp(t,kc);if(typeof e=="function"){let o=e(r);M(o===void 0,"Expected the thrown value assertion to return undefined.",{actual:o,expected:void 0,operator:"strictEqual",stackStartFn:kc});return}M(cs(r,e),"Expected the thrown value to equal the expected value.",{actual:r,expected:e,operator:"eqData",diff:"full",stackStartFn:kc})}var Hd=(t,e)=>{let r=rp(t,Hd);M($t(r,e),"Expected the thrown value to be the same as the expected value.",{actual:r,expected:e,operator:"strictEqual",stackStartFn:Hd})},Gd=(t,e)=>{let r=rp(t,Gd);return M(r instanceof e,e.name===""?"Expected the thrown value to be an instance of the provided constructor.":`Expected the thrown value to be an instance of ${e.name}.`,{actual:r,expected:e,operator:"instanceof",stackStartFn:Gd}),r},rp=(t,e)=>{let r;try{r=t()}catch(o){return o}M(!1,"Expected function to throw.",{actual:r,expected:"throw",operator:"throws",stackStartFn:e})};async function Sc(t,e){let r=await op(t,Sc);if(typeof e=="function"){let o=e(r);M(o===void 0,"Expected the rejection assertion to return undefined.",{actual:o,expected:void 0,operator:"strictEqual",stackStartFn:Sc});return}M(cs(r,e),"Expected the rejection reason to equal the expected value.",{actual:r,expected:e,operator:"eqData",diff:"full",stackStartFn:Sc})}var Yd=async(t,e)=>{let r=await op(t,Yd);M($t(r,e),"Expected the rejection reason to be the same as the expected value.",{actual:r,expected:e,operator:"strictEqual",stackStartFn:Yd})},Xd=async(t,e)=>{let r=await op(t,Xd);return M(r instanceof e,e.name===""?"Expected the rejection reason to be an instance of the provided constructor.":`Expected the rejection reason to be an instance of ${e.name}.`,{actual:r,expected:e,operator:"instanceof",stackStartFn:Xd}),r},op=async(t,e)=>{let r;try{r=await t}catch(o){return o}M(!1,"Expected promise to reject.",{actual:r,expected:"rejection",operator:"rejects",stackStartFn:e})},Ay=(t,e)=>{M(t instanceof e,e.name===""?"Expected an instance of the provided constructor.":`Expected an instance of ${e.name}.`,{actual:t,expected:e,operator:"instanceof",stackStartFn:Ay})},ke=(t,e="Expected value to be non-nullable.")=>{M(t!=null,e,{actual:t,expected:null,operator:"!=",stackStartFn:ke})},Iy=(t,e="Expected value not to be null.")=>{M(t!==null,e,{actual:t,expected:null,operator:"notStrictEqual",stackStartFn:Iy})},to=(t,e="Expected value not to be undefined.")=>{M(t!==void 0,e,{actual:t,expected:void 0,operator:"notStrictEqual",stackStartFn:to})},Ry=(t,e)=>{M($t(t.length,e),`Expected value to have length ${e}.`,{actual:t.length,expected:e,operator:"strictEqual",stackStartFn:Ry})},vc=(t,e="Expected a non-empty array.")=>{M(t.length>0,e,{actual:t.length,expected:0,operator:">",stackStartFn:vc})},ko=(t,e="Expected a non-empty readonly array.")=>{M(t.length>0,e,{actual:t.length,expected:0,operator:">",stackStartFn:ko})},Go=t=>{M(!t.disposed,"Cannot use a disposed object.",{actual:t.disposed,expected:!1,operator:"==",stackStartFn:Go})},So=(t,e)=>{M($t(t,e),"Expected values to be the same.",{actual:t,expected:e,operator:"strictEqual",stackStartFn:So})},Ec=(t,e)=>{M(!$t(t,e),"Expected values not to be the same.",{actual:t,expected:e,operator:"notStrictEqual",stackStartFn:Ec})};function Dy(t,e){M(cs(t,e),"Expected values to be equal.",{actual:t,expected:e,operator:"eqData",diff:"full",stackStartFn:Dy})}var By=(t,e)=>{M(is(t,e),"Expected bytes to be equal.",{actual:t,expected:e,operator:"eqArrayNumber",diff:"full",stackStartFn:By})};function My(t,e){M(!cs(t,e),"Expected values not to be equal.",{actual:t,expected:e,operator:"notEqData",stackStartFn:My})}var cs=as;function Zd(t,...e){if(M(t.ok,"Expected an Ok result.",{actual:t.ok,expected:!0,operator:"strictEqual",stackStartFn:Zd}),e.length===0)return;let r=e[0];M((e[1]??cs)(t.value,r),"Expected the value to equal the expected value.",{actual:t.value,expected:r,operator:e[1]===void 0?"eqData":"Eq",diff:e[1]===void 0?"full":void 0,stackStartFn:Zd})}function ep(t,...e){if(M(!t.ok,"Expected an Err result.",{actual:t.ok,expected:!1,operator:"strictEqual",stackStartFn:ep}),e.length===0)return;let r=e[0];M((e[1]??cs)(t.error,r),"Expected the error to equal the expected error.",{actual:t.error,expected:r,operator:e[1]===void 0?"eqData":"Eq",diff:e[1]===void 0?"full":void 0,stackStartFn:ep})}var nt=t=>{throw new Error(`exhaustiveCheck unhandled case: ${JSON.stringify(t)}`)},ye=t=>t;function it(t,e=null){let r=t,o=e?.move()??new DisposableStack;for(let[n,s]of Object.entries(t))Ri(s)&&(r[n]=(...i)=>(Go(o),s(...i)));return o instanceof AsyncDisposableStack?t[Symbol.asyncDispose]=()=>o.disposeAsync():t[Symbol.dispose]=()=>o.dispose(),t}var lv=t=>typeof t!="object"||t===null?!1:Ri(t[Symbol.dispose])||Ri(t[Symbol.asyncDispose]),Li=t=>()=>t,ls=Li(!0),uv=Li(!1),dv=Li(null),Py=Li(void 0),Sr=Py,pv=()=>{throw new Error("not yet implemented")};var at=[],kt=t=>new Array(t);function fv(t,e){return typeof t=="number"?Array.from({length:t},(r,o)=>e(o)):Array.isArray(t)?t:[...t]}var hv=async t=>Array.fromAsync(t);function ut(t){return t.length>0}var Tc=(t,e)=>[...t,e],mv=(t,e)=>[e,...t];function vr(t,e){return t.map(e)}function yv(t,e=ye){return t.flatMap(e)}function gv(t,e){return[...t,...e]}function np(t,e){return t.filter(e)}function sp(t,e){if(e==null)return Array.from(new Set(t));let r=new Set;return t.filter(o=>{let n=e(o);return r.has(n)?!1:(r.add(n),!0)})}function bv(t,e){let r=[],o=[];for(let n=0;n<t.length;n++)e(t[n],n,t)?r.push(t[n]):o.push(t[n]);return[r,o]}function xv(t,e){return t.toSorted(e)}function wv(t){return t.toReversed()}var Nv=(t,e,r,...o)=>t.toSpliced(e,r,...o);function kv(t){if(t.length===0)return at;let e=Math.min(...vr(t,o=>o.length)),r=kt(e);for(let o=0;o<e;o++)r[o]=vr(t,n=>n[o]);return r}var Mr=t=>t[0],Sv=t=>t[t.length-1];function g(t){return t===void 0?vv:{ok:!0,value:t}}var vv={ok:!0,value:void 0},N=t=>({ok:!1,error:t}),Ev=t=>t.ok,Tv=t=>!t.ok,qi=t=>{if(t.ok)return t.value;throw new Error("getOrThrow",{cause:t.error})},us=t=>t.ok?t.value:null,$i=t=>t.value;function We(t,e){try{return g(t())}catch(r){return N(e?e(r):r)}}async function ro(t,e){try{return g(await t())}catch(r){return N(e?e(r):r)}}function ct(t){return{type:"Done",done:t}}var vo=(t,e)=>t.ok?e(t.value):t;function Ov(t,e,r){let o=typeof e=="function"?e:void 0;if(!(typeof e=="function"?r?.collect!==!1:e?.collect!==!1)){if(wc(t)){for(let c of t){let l=o?o(c):c;if(!l.ok)return l}return g()}let a=Object.keys(t);for(let c of a){let l=t[c],h=o?o(l):l;if(!h.ok)return h}return g()}if(Array.isArray(t)){let a=t.length;if(a===0)return g(at);let c=kt(a);for(let l=0;l<a;l++){let h=o?o(t[l]):t[l];if(!h.ok)return h;c[l]=h.value}return g(c)}if(wc(t)){let a=[];for(let c of t){let l=o?o(c):c;if(!l.ok)return l;a.push(l.value)}return g(a.length===0?at:a)}let s=Object.keys(t);if(s.length===0)return g(Bi);let i=pe();for(let a of s){let c=t[a],l=o?o(c):c;if(!l.ok)return l;i[a]=l.value}return g(i)}function Cv(t){let e=null;for(let r of t){if(r.ok)return r;e=r}return e}function ip(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in t&&t.BYTES_PER_ELEMENT===1}var Oc=t=>t?`"${t}" `:"";function Cc(t,e=""){if(typeof t!="boolean")throw new TypeError(Oc(e)+"expected boolean, got type="+typeof t);return t}function On(t,e=""){if(typeof t!="number")throw new TypeError(Oc(e)+"expected number, got "+typeof t);if(!Number.isSafeInteger(t)||t<0)throw new RangeError(Oc(e)+"expected integer >= 0, got "+t);return t}function Ye(t,e,r=""){if(ip(t)&&(e===void 0||t.length===e))return t;e!==void 0&&On(e,"length");let o=ip(t),n=e!==void 0?` of length ${e}`:"",s=o?`length=${t.length}`:`type=${typeof t}`,i=Oc(r)+"expected Uint8Array"+n+", got "+s;throw o?new RangeError(i):new TypeError(i)}var Wy=(t,e)=>{if(t===null||typeof t!="object"||Array.isArray(t))throw new TypeError(e==="object"?"expected valid options object":`"${e}" expected object, got type=${typeof t}`)};function ap(t,e=!0){if(t.destroyed)throw new Error("hash was destroyed");if(e&&t.finished)throw new Error("digest() was already called")}function qy(t,e){Ye(t,void 0,"output");let r=e.outputLen;if(!(t.length>=r))throw new RangeError('"output" expected length >= '+r)}function oo(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function or(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function Av(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}var Er=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Iv(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}function Rv(t){for(let e=0;e<t.length;e++)t[e]=Iv(t[e]);return t}var nr=Er?t=>t:Rv,$y=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Dv=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Ui(t){if(Ye(t),$y)return t.toHex();let e="";for(let r=0;r<t.length;r++)e+=Dv[t[r]];return e}function Ly(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:void 0}function ji(t){if(typeof t!="string")throw new TypeError("hex string expected, got "+typeof t);if($y)try{return Uint8Array.fromHex(t)}catch(n){throw n instanceof SyntaxError?new RangeError(n.message):n}let e=t.length,r=e/2;if(e%2)throw new RangeError("hex string expected, got unpadded hex of length "+e);let o=new Uint8Array(r);for(let n=0,s=0;n<r;n++,s+=2){let i=Ly(t.charCodeAt(s)),a=Ly(t.charCodeAt(s+1));if(i===void 0||a===void 0){let c=t[s]+t[s+1];throw new RangeError('hex string expected, got non-hex character "'+c+'" at index '+s)}o[n]=i*16+a}return o}function Ac(t){if(typeof t!="string")throw new TypeError("string expected");return new Uint8Array(new TextEncoder().encode(t))}function Uy(t){return new TextDecoder().decode(t)}function Bv(t,e){return!t.byteLength||!e.byteLength?!1:t.buffer===e.buffer&&t.byteOffset<e.byteOffset+e.byteLength&&e.byteOffset<t.byteOffset+t.byteLength}function jy(t,e){if(Bv(t,e)&&t.byteOffset<e.byteOffset)throw new Error("complex overlap of input and output is not supported")}function Ic(...t){let e=0;for(let o=0;o<t.length;o++){let n=t[o];Ye(n),e+=n.length}let r=new Uint8Array(e);for(let o=0,n=0;o<t.length;o++){let s=t[o];r.set(s,n),n+=s.length}return r}function Fy(t,e){return Wy(t,"defaults"),Wy(e,"opts"),Object.assign(t,e)}function zy(t,e){if(t=Ye(t),e=Ye(e),t.length!==e.length)return!1;let r=0;for(let o=0;o<t.length;o++)r|=t[o]^e[o];return r===0}function Vy(t,e,r){let o=e,n=r||(()=>[]),s=(a,c)=>o(c,...n(a)).update(a).digest(),i=o(new Uint8Array(t),...n(new Uint8Array(0)));return s.outputLen=i.outputLen,s.blockLen=i.blockLen,s.create=(a,...c)=>o(a,...c),s}var _y=(t,e)=>{function r(o,...n){if(Ye(o,void 0,"key"),t.nonceLength!==void 0){let p=n[0];Ye(p,t.varSizeNonce?void 0:t.nonceLength,"nonce")}let s=t.tagLength,i=t.nonceLength!==void 0?1:0;if(!t.withAAD){for(let p=i;p<n.length;p++)if(ip(n[p]))throw new Error("AAD not supported")}t.withAAD&&n[i]!==void 0&&Ye(n[i],void 0,"AAD");let a=e(o,...n),c=(p,f)=>{if(f!==void 0){if(p!==2)throw new Error("cipher output not supported");Ye(f,void 0,"output")}},l=!1;return{encrypt(p,f){if(l)throw new Error("cannot encrypt() twice with same key + nonce");return l=!0,Ye(p,void 0,"data"),c(a.encrypt.length,f),a.encrypt(p,f)},decrypt(p,f){if(Ye(p,void 0,"data"),s&&p.length<s)throw new Error('"ciphertext" expected length >= tagLength='+s);return c(a.decrypt.length,f),a.decrypt(p,f)}}}return Object.assign(r,t),r};function Fi(t,e,r=!0){if(e===void 0)return new Uint8Array(t);if(Ye(e,t,"output"),r&&!zi(e))throw new Error("invalid output, must be aligned");return e}function Ky(t,e,r){On(t),On(e),Cc(r);let o=new Uint8Array(16),n=Av(o);return n.setBigUint64(0,BigInt(e),r),n.setBigUint64(8,BigInt(t),r),o}function zi(t){return t.byteOffset%4===0}function ds(t){return Uint8Array.from(Ye(t))}var Jy=t=>Uint8Array.from(t.split(""),e=>e.charCodeAt(0)),Mv=nr(oo(Jy("expand 16-byte k"))),Pv=nr(oo(Jy("expand 32-byte k")));function Ae(t,e){return t<<e|t>>>32-e}var Vi=64,Wv=16,cp=2**32-1,Qy=Uint32Array.of();function Lv(t,e,r,o,n,s,i,a){let c=n.length,l=new Uint8Array(Vi),h=oo(l),p=Er&&zi(n)&&zi(s),f=p?oo(n):Qy,m=p?oo(s):Qy;if(!Er){for(let d=0;d<c;i++){if(t(e,r,o,h,i,a),nr(h),i>=cp)throw new Error("arx: counter overflow");let y=Math.min(Vi,c-d);for(let b=0,x;b<y;b++)x=d+b,s[x]=n[x]^l[b];d+=y}return}for(let d=0;d<c;i++){if(t(e,r,o,h,i,a),i>=cp)throw new Error("arx: counter overflow");let y=Math.min(Vi,c-d);if(p&&y===Vi){let b=d/4;if(d%4!==0)throw new Error("arx: invalid block position");for(let x=0,w;x<Wv;x++)w=b+x,m[w]=f[w]^h[x];d+=Vi;continue}for(let b=0,x;b<y;b++)x=d+b,s[x]=n[x]^l[b];d+=y}}function Hy(t,e){let{allowShortKeys:r,extendNonceFn:o,counterLength:n,counterRight:s,rounds:i}=Fy({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},e);if(typeof t!="function")throw new Error("core must be a function");return On(n),On(i),Cc(s),Cc(r),(a,c,l,h,p=0)=>{Ye(a,void 0,"key"),Ye(c,void 0,"nonce"),Ye(l,void 0,"data");let f=l.length,m=h!==void 0;if(h=Fi(f,h,!1),m&&jy(l,h),On(p),p<0||p>=cp)throw new Error("arx: counter overflow");let d=[],y=a.length,b,x;if(y===32)d.push(b=ds(a)),x=Pv;else if(y===16&&r)b=new Uint8Array(32),b.set(a),b.set(a,16),x=Mv,d.push(b);else throw Ye(a,32,"arx key"),new Error("invalid key size");(!Er||!zi(c))&&d.push(c=ds(c));let w=oo(b);if(o){if(c.length!==24)throw new Error("arx: extended nonce must be 24 bytes");let R=c.subarray(0,16);if(Er)o(x,w,oo(R),w);else{let I=nr(Uint32Array.from(x));o(I,w,oo(R),w),or(I),nr(w)}c=c.subarray(16)}else Er||nr(w);let C=16-n;if(C!==c.length)throw new Error(`arx: nonce must be ${C} or 16 bytes`);if(C!==12){let R=new Uint8Array(12);R.set(c,s?0:12-c.length),c=R,d.push(c)}let E=nr(oo(c));try{return Lv(t,x,w,E,l,h,p,i),h}finally{or(...d)}}}function Ct(t,e){return t[e++]&255|(t[e++]&255)<<8}var lp=class{blockLen=16;outputLen=16;buffer=new Uint8Array(16);r=new Uint16Array(10);h=new Uint16Array(10);pad=new Uint16Array(8);pos=0;finished=!1;destroyed=!1;constructor(e){e=ds(Ye(e,32,"key"));let r=Ct(e,0),o=Ct(e,2),n=Ct(e,4),s=Ct(e,6),i=Ct(e,8),a=Ct(e,10),c=Ct(e,12),l=Ct(e,14);this.r[0]=r&8191,this.r[1]=(r>>>13|o<<3)&8191,this.r[2]=(o>>>10|n<<6)&7939,this.r[3]=(n>>>7|s<<9)&8191,this.r[4]=(s>>>4|i<<12)&255,this.r[5]=i>>>1&8190,this.r[6]=(i>>>14|a<<2)&8191,this.r[7]=(a>>>11|c<<5)&8065,this.r[8]=(c>>>8|l<<8)&8191,this.r[9]=l>>>5&127;for(let h=0;h<8;h++)this.pad[h]=Ct(e,16+2*h)}process(e,r,o=!1){let n=o?0:2048,{h:s,r:i}=this,a=i[0],c=i[1],l=i[2],h=i[3],p=i[4],f=i[5],m=i[6],d=i[7],y=i[8],b=i[9],x=Ct(e,r+0),w=Ct(e,r+2),C=Ct(e,r+4),E=Ct(e,r+6),R=Ct(e,r+8),I=Ct(e,r+10),B=Ct(e,r+12),T=Ct(e,r+14),S=s[0]+(x&8191),L=s[1]+((x>>>13|w<<3)&8191),k=s[2]+((w>>>10|C<<6)&8191),v=s[3]+((C>>>7|E<<9)&8191),D=s[4]+((E>>>4|R<<12)&8191),P=s[5]+(R>>>1&8191),F=s[6]+((R>>>14|I<<2)&8191),O=s[7]+((I>>>11|B<<5)&8191),A=s[8]+((B>>>8|T<<8)&8191),_=s[9]+(T>>>5|n),W=0,Q=W+S*a+L*(5*b)+k*(5*y)+v*(5*d)+D*(5*m);W=Q>>>13,Q&=8191,Q+=P*(5*f)+F*(5*p)+O*(5*h)+A*(5*l)+_*(5*c),W+=Q>>>13,Q&=8191;let j=W+S*c+L*a+k*(5*b)+v*(5*y)+D*(5*d);W=j>>>13,j&=8191,j+=P*(5*m)+F*(5*f)+O*(5*p)+A*(5*h)+_*(5*l),W+=j>>>13,j&=8191;let U=W+S*l+L*c+k*a+v*(5*b)+D*(5*y);W=U>>>13,U&=8191,U+=P*(5*d)+F*(5*m)+O*(5*f)+A*(5*p)+_*(5*h),W+=U>>>13,U&=8191;let Z=W+S*h+L*l+k*c+v*a+D*(5*b);W=Z>>>13,Z&=8191,Z+=P*(5*y)+F*(5*d)+O*(5*m)+A*(5*f)+_*(5*p),W+=Z>>>13,Z&=8191;let ne=W+S*p+L*h+k*l+v*c+D*a;W=ne>>>13,ne&=8191,ne+=P*(5*b)+F*(5*y)+O*(5*d)+A*(5*m)+_*(5*f),W+=ne>>>13,ne&=8191;let Ne=W+S*f+L*p+k*h+v*l+D*c;W=Ne>>>13,Ne&=8191,Ne+=P*a+F*(5*b)+O*(5*y)+A*(5*d)+_*(5*m),W+=Ne>>>13,Ne&=8191;let me=W+S*m+L*f+k*p+v*h+D*l;W=me>>>13,me&=8191,me+=P*c+F*a+O*(5*b)+A*(5*y)+_*(5*d),W+=me>>>13,me&=8191;let ve=W+S*d+L*m+k*f+v*p+D*h;W=ve>>>13,ve&=8191,ve+=P*l+F*c+O*a+A*(5*b)+_*(5*y),W+=ve>>>13,ve&=8191;let Ke=W+S*y+L*d+k*m+v*f+D*p;W=Ke>>>13,Ke&=8191,Ke+=P*h+F*l+O*c+A*a+_*(5*b),W+=Ke>>>13,Ke&=8191;let $=W+S*b+L*y+k*d+v*m+D*f;W=$>>>13,$&=8191,$+=P*p+F*h+O*l+A*c+_*a,W+=$>>>13,$&=8191,W=(W<<2)+W|0,W=W+Q|0,Q=W&8191,W=W>>>13,j+=W,s[0]=Q,s[1]=j,s[2]=U,s[3]=Z,s[4]=ne,s[5]=Ne,s[6]=me,s[7]=ve,s[8]=Ke,s[9]=$}finalize(){let{h:e,pad:r}=this,o=new Uint16Array(10),n=e[1]>>>13;e[1]&=8191;for(let a=2;a<10;a++)e[a]+=n,n=e[a]>>>13,e[a]&=8191;e[0]+=n*5,n=e[0]>>>13,e[0]&=8191,e[1]+=n,n=e[1]>>>13,e[1]&=8191,e[2]+=n,o[0]=e[0]+5,n=o[0]>>>13,o[0]&=8191;for(let a=1;a<10;a++)o[a]=e[a]+n,n=o[a]>>>13,o[a]&=8191;o[9]-=8192;let s=(n^1)-1;for(let a=0;a<10;a++)o[a]&=s;s=~s;for(let a=0;a<10;a++)e[a]=e[a]&s|o[a];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let i=e[0]+r[0];e[0]=i&65535;for(let a=1;a<8;a++)i=(e[a]+r[a]|0)+(i>>>16)|0,e[a]=i&65535;or(o)}update(e){ap(this),Ye(e),e=ds(e);let{buffer:r,blockLen:o}=this,n=e.length;for(let s=0;s<n;){let i=Math.min(o-this.pos,n-s);if(i===o){for(;o<=n-s;s+=o)this.process(e,s);continue}r.set(e.subarray(s,s+i),this.pos),this.pos+=i,s+=i,this.pos===o&&(this.process(r,0,!1),this.pos=0)}return this}destroy(){this.destroyed=!0,or(this.h,this.r,this.buffer,this.pad)}digestInto(e){ap(this),qy(e,this),this.finished=!0;let{buffer:r,h:o}=this,{pos:n}=this;if(n){for(r[n++]=1;n<16;n++)r[n]=0;this.process(r,0,!0)}this.finalize();let s=0;for(let i=0;i<8;i++)e[s++]=o[i]>>>0,e[s++]=o[i]>>>8}digest(){let{buffer:e,outputLen:r}=this;this.digestInto(e);let o=e.slice(0,r);return this.destroy(),o}},Gy=Vy(32,t=>new lp(t));function Zy(t,e,r,o,n,s=20){let i=t[0],a=t[1],c=t[2],l=t[3],h=e[0],p=e[1],f=e[2],m=e[3],d=e[4],y=e[5],b=e[6],x=e[7],w=n,C=r[0],E=r[1],R=r[2],I=i,B=a,T=c,S=l,L=h,k=p,v=f,D=m,P=d,F=y,O=b,A=x,_=w,W=C,Q=E,j=R;for(let Z=0;Z<s;Z+=2)I=I+L|0,_=Ae(_^I,16),P=P+_|0,L=Ae(L^P,12),I=I+L|0,_=Ae(_^I,8),P=P+_|0,L=Ae(L^P,7),B=B+k|0,W=Ae(W^B,16),F=F+W|0,k=Ae(k^F,12),B=B+k|0,W=Ae(W^B,8),F=F+W|0,k=Ae(k^F,7),T=T+v|0,Q=Ae(Q^T,16),O=O+Q|0,v=Ae(v^O,12),T=T+v|0,Q=Ae(Q^T,8),O=O+Q|0,v=Ae(v^O,7),S=S+D|0,j=Ae(j^S,16),A=A+j|0,D=Ae(D^A,12),S=S+D|0,j=Ae(j^S,8),A=A+j|0,D=Ae(D^A,7),I=I+k|0,j=Ae(j^I,16),O=O+j|0,k=Ae(k^O,12),I=I+k|0,j=Ae(j^I,8),O=O+j|0,k=Ae(k^O,7),B=B+v|0,_=Ae(_^B,16),A=A+_|0,v=Ae(v^A,12),B=B+v|0,_=Ae(_^B,8),A=A+_|0,v=Ae(v^A,7),T=T+D|0,W=Ae(W^T,16),P=P+W|0,D=Ae(D^P,12),T=T+D|0,W=Ae(W^T,8),P=P+W|0,D=Ae(D^P,7),S=S+L|0,Q=Ae(Q^S,16),F=F+Q|0,L=Ae(L^F,12),S=S+L|0,Q=Ae(Q^S,8),F=F+Q|0,L=Ae(L^F,7);let U=0;o[U++]=i+I|0,o[U++]=a+B|0,o[U++]=c+T|0,o[U++]=l+S|0,o[U++]=h+L|0,o[U++]=p+k|0,o[U++]=f+v|0,o[U++]=m+D|0,o[U++]=d+P|0,o[U++]=y+F|0,o[U++]=b+O|0,o[U++]=x+A|0,o[U++]=w+_|0,o[U++]=C+W|0,o[U++]=E+Q|0,o[U++]=R+j|0}function qv(t,e,r,o){let n=Er?t:nr(t.slice(0,4)),s=Er?e:nr(e.slice(0,8)),i=Er?r:nr(r.slice(0,4)),a=new Uint32Array(16);Zy(n,s,i.subarray(1),a,i[0]);let c=0;o[c++]=a[0]-n[0]|0,o[c++]=a[1]-n[1]|0,o[c++]=a[2]-n[2]|0,o[c++]=a[3]-n[3]|0,o[c++]=a[12]-i[0]|0,o[c++]=a[13]-i[1]|0,o[c++]=a[14]-i[2]|0,o[c++]=a[15]-i[3]|0,nr(o),Er||or(n,s,i),or(a)}var $v=Hy(Zy,{counterRight:!1,counterLength:8,extendNonceFn:qv,allowShortKeys:!1});var Uv=new Uint8Array(16),Yy=(t,e)=>{t.update(e);let r=e.length%16;r&&t.update(Uv.subarray(r))},jv=new Uint8Array(32);function Xy(t,e,r,o,n){n!==void 0&&Ye(n,void 0,"AAD");let s=t(e,r,jv),i=Ky(o.length,n?n.length:0,!0),a=Gy.create(s);n&&Yy(a,n),Yy(a,o),a.update(i);let c=a.digest();return or(s,i),c}var Fv=t=>(e,r,o)=>({encrypt(s,i){let a=s.length;i=Fi(a+16,i,!1),i.set(s);let c=i.subarray(0,-16);t(e,r,c,c,1);let l=Xy(t,e,r,c,o);return i.set(l,a),or(l),i},decrypt(s,i){i=Fi(s.length-16,i,!1);let a=s.subarray(0,-16),c=s.subarray(-16),l=Xy(t,e,r,a,o);if(!zy(c,l))throw or(l),new Error("invalid tag");return i.set(s.subarray(0,-16)),t(e,r,i,i,1),or(l),i}});var Rc=_y({blockSize:64,nonceLength:24,tagLength:16,withAAD:!0},Fv($v));function eg(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in t&&t.BYTES_PER_ELEMENT===1}var up=t=>t?`"${t}" `:"";function _i(t,e=""){if(typeof t!="number")throw new TypeError(up(e)+"expected number, got "+typeof t);if(!Number.isSafeInteger(t)||t<0)throw new RangeError(up(e)+"expected integer >= 0, got "+t);return t}function Cn(t,e,r=""){if(eg(t)&&(e===void 0||t.length===e))return t;e!==void 0&&_i(e,"length");let o=eg(t),n=e!==void 0?` of length ${e}`:"",s=o?`length=${t.length}`:`type=${typeof t}`,i=up(r)+"expected Uint8Array"+n+", got "+s;throw o?new RangeError(i):new TypeError(i)}function rg(t){if(typeof t!="function"||typeof t.create!="function")throw new TypeError("expected hash wrapped by utils.createHasher");if(_i(t.outputLen),_i(t.blockLen),t.outputLen<1||t.blockLen<1)throw new Error("hash blockLen / outputLen must be >= 1")}var zv=(t,e)=>{if(t===null||typeof t!="object"||Array.isArray(t))throw new TypeError((e==="object"?"":`"${e}" `)+"expected object, got type="+typeof t)},tg=(t,e)=>{zv(t,e);let r=Object.getPrototypeOf(t);if(r!==Object.prototype&&r!==null)throw new TypeError(`"${e}" expected plain object`);if(Object.hasOwn(t,"__proto__"))throw new TypeError(`"${e}.__proto__" is not allowed`)};function ps(t,e=!0){if(t.destroyed)throw new Error("hash was destroyed");if(e&&t.finished)throw new Error("digest() was already called")}function Dc(t,e){Cn(t,void 0,"output");let r=e.outputLen;if(!(t.length>=r))throw new RangeError('"output" expected length >= '+r)}function Pr(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function Bc(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function Wr(t,e){return t<<32-e|t>>>e}function og(t,e){return t<<e|t>>>32-e>>>0}function dp(t){if(typeof t!="string")throw new TypeError("string expected");let e=new TextEncoder().encode(t);try{return new Uint8Array(e)}finally{Pr(e)}}function Vv(t,e,r="opts"){return tg(t,"defaults"),e!==void 0&&tg(e,r),Object.assign(Object.create(null),t,e)}function Ki(t,e={}){if(typeof t!="function")throw new TypeError('"hashCons" expected function, got type='+typeof t);e=Vv({},e,"info");let r=(n,s)=>t(s).update(n).digest(),o=t(void 0);return r.outputLen=o.outputLen,r.blockLen=o.blockLen,r.canXOF=o.canXOF,r.create=n=>t(n),Object.assign(r,e),Object.freeze(r)}function pp(t=32){_i(t,"bytesLength");let e=typeof globalThis=="object"?globalThis.crypto:null;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");if(t>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${t}`);return e.getRandomValues(new Uint8Array(t))}var fp=t=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,t])});var Mc=class{oHash;iHash;blockLen;outputLen;canXOF=!1;finished=!1;destroyed=!1;constructor(e,r){if(rg(e),Cn(r,void 0,"key"),this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("expected Hash instance");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let o=this.blockLen,n=new Uint8Array(o);n.set(r.length>o?e.create().update(r).digest():r);for(let s=0;s<n.length;s++)n[s]^=54;this.iHash.update(n),this.oHash=e.create();for(let s=0;s<n.length;s++)n[s]^=106;this.oHash.update(n),Pr(n)}update(e){return ps(this),this.iHash.update(e),this}digestInto(e){ps(this),Dc(e,this),this.finished=!0;let r=e.subarray(0,this.outputLen);this.iHash.digestInto(r),this.oHash.update(r),this.oHash.digestInto(r),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:r,iHash:o,finished:n,destroyed:s,blockLen:i,outputLen:a,canXOF:c}=this;return e=e,e.finished=n,e.destroyed=s,e.blockLen=i,e.outputLen=a,e.canXOF=c,e.oHash=r._cloneInto(e.oHash),e.iHash=o._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},hp=(()=>{let t=((e,r,o)=>new Mc(e,r).update(o).digest());return t.create=(e,r)=>new Mc(e,r),t})();var Pc=BigInt(4294967295),ng=BigInt(32);function _v(t,e=!1){return e?{h:Number(t&Pc),l:Number(t>>ng&Pc)}:{h:Number(t>>ng&Pc)|0,l:Number(t&Pc)|0}}function sg(t,e=!1){let r=t.length,o=new Uint32Array(r),n=new Uint32Array(r);for(let s=0;s<r;s++){let{h:i,l:a}=_v(t[s],e);[o[s],n[s]]=[i,a]}return[o,n]}var Kv=t=>t/2**32|0,Qv=t=>t>>>0;function ig(t,e,r,o){let n=Kv(r),s=Qv(r);t.setUint32(e,o?s:n,o),t.setUint32(e+4,o?n:s,o)}var mp=(t,e,r)=>t>>>r,yp=(t,e,r)=>t<<32-r|e>>>r,An=(t,e,r)=>t>>>r|e<<32-r,In=(t,e,r)=>t<<32-r|e>>>r,Qi=(t,e,r)=>t<<64-r|e>>>r-32,Ji=(t,e,r)=>t>>>r-32|e<<64-r;function no(t,e,r,o){let n=(e>>>0)+(o>>>0);return{h:t+r+(n/2**32|0)|0,l:n|0}}var ag=(t,e,r)=>(t>>>0)+(e>>>0)+(r>>>0),cg=(t,e,r,o)=>e+r+o+(t/2**32|0)|0,lg=(t,e,r,o)=>(t>>>0)+(e>>>0)+(r>>>0)+(o>>>0),ug=(t,e,r,o,n)=>e+r+o+n+(t/2**32|0)|0,dg=(t,e,r,o,n)=>(t>>>0)+(e>>>0)+(r>>>0)+(o>>>0)+(n>>>0),pg=(t,e,r,o,n,s)=>e+r+o+n+s+(t/2**32|0)|0;function Hi(t,e,r){return t&e^~t&r}function gp(t,e,r){return t&e^t&r^e&r}var Rn=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,r,o,n){this.blockLen=e,this.outputLen=r,this.padOffset=o,this.isLE=n,this.buffer=new Uint8Array(e),this.view=Bc(this.buffer)}update(e){ps(this),Cn(e);let{view:r,buffer:o,blockLen:n}=this,s=e.length,i=!1;for(let a=0;a<s;){let c=Math.min(n-this.pos,s-a);if(c===n){let l=Bc(e);for(;n<=s-a;a+=n)this.process(l,a);i=!0;continue}o.set(a===0&&c===s?e:e.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===n&&(this.process(r,0),this.pos=0,i=!0)}return this.length+=e.length,i&&this.roundClean(),this}digestInto(e){ps(this),Dc(e,this),this.finished=!0;let{buffer:r,view:o,blockLen:n,isLE:s}=this,{pos:i}=this;r[i++]=128,r.fill(0,i),this.padOffset>n-i&&(this.process(o,0),r.fill(0)),ig(o,n-8,this.length*8,s),this.process(o,0),this.roundClean();let a=e===r?o:Bc(e),c=this.outputLen,l=c/4,h=this.get();if(c%4||l>h.length)throw new Error("invalid outputLen");for(let p=0;p<l;p++)a.setUint32(4*p,h[p],s)}digest(){let{buffer:e,outputLen:r}=this;this.digestInto(e);let o=e.slice(0,r);return this.destroy(),o}_cloneIntoMeta(e){let{buffer:r,length:o,finished:n,destroyed:s,pos:i}=this;return e.destroyed=s,e.finished=n,e.length=o,e.pos=i,i&&e.buffer.set(r),e}clone(){return this._cloneInto()}},fg=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);var hg=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]);var Hv=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Yo=new Uint32Array(64),bp=class extends Rn{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,r){super(64,e,8,!1),this.A=r[0]|0,this.B=r[1]|0,this.C=r[2]|0,this.D=r[3]|0,this.E=r[4]|0,this.F=r[5]|0,this.G=r[6]|0,this.H=r[7]|0}get(){let{A:e,B:r,C:o,D:n,E:s,F:i,G:a,H:c}=this;return[e,r,o,n,s,i,a,c]}set(e,r,o,n,s,i,a,c){this.A=e|0,this.B=r|0,this.C=o|0,this.D=n|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,r){for(let p=0;p<16;p++,r+=4)Yo[p]=e.getUint32(r,!1);for(let p=16;p<64;p++){let f=Yo[p-15],m=Yo[p-2],d=Wr(f,7)^Wr(f,18)^f>>>3,y=Wr(m,17)^Wr(m,19)^m>>>10;Yo[p]=y+Yo[p-7]+d+Yo[p-16]|0}let{A:o,B:n,C:s,D:i,E:a,F:c,G:l,H:h}=this;for(let p=0;p<64;p++){let f=Wr(a,6)^Wr(a,11)^Wr(a,25),m=h+f+Hi(a,c,l)+Hv[p]+Yo[p]|0,y=(Wr(o,2)^Wr(o,13)^Wr(o,22))+gp(o,n,s)|0;h=l,l=c,c=a,a=i+m|0,i=s,s=n,n=o,o=m+y|0}o=o+this.A|0,n=n+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,h=h+this.H|0,this.set(o,n,s,i,a,c,l,h)}roundClean(){Pr(Yo)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),Pr(this.buffer)}},xp=class extends bp{constructor(){super(32,fg)}};var mg=sg(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Gv=mg[0],Yv=mg[1],Xo=new Uint32Array(80),Zo=new Uint32Array(80),wp=class extends Rn{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,r){super(128,e,16,!1),this.Ah=r[0]|0,this.Al=r[1]|0,this.Bh=r[2]|0,this.Bl=r[3]|0,this.Ch=r[4]|0,this.Cl=r[5]|0,this.Dh=r[6]|0,this.Dl=r[7]|0,this.Eh=r[8]|0,this.El=r[9]|0,this.Fh=r[10]|0,this.Fl=r[11]|0,this.Gh=r[12]|0,this.Gl=r[13]|0,this.Hh=r[14]|0,this.Hl=r[15]|0}get(){let{Ah:e,Al:r,Bh:o,Bl:n,Ch:s,Cl:i,Dh:a,Dl:c,Eh:l,El:h,Fh:p,Fl:f,Gh:m,Gl:d,Hh:y,Hl:b}=this;return[e,r,o,n,s,i,a,c,l,h,p,f,m,d,y,b]}set(e,r,o,n,s,i,a,c,l,h,p,f,m,d,y,b){this.Ah=e|0,this.Al=r|0,this.Bh=o|0,this.Bl=n|0,this.Ch=s|0,this.Cl=i|0,this.Dh=a|0,this.Dl=c|0,this.Eh=l|0,this.El=h|0,this.Fh=p|0,this.Fl=f|0,this.Gh=m|0,this.Gl=d|0,this.Hh=y|0,this.Hl=b|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,r){for(let C=0;C<16;C++,r+=4)Xo[C]=e.getUint32(r),Zo[C]=e.getUint32(r+=4);for(let C=16;C<80;C++){let E=Xo[C-15]|0,R=Zo[C-15]|0,I=An(E,R,1)^An(E,R,8)^mp(E,R,7),B=In(E,R,1)^In(E,R,8)^yp(E,R,7),T=Xo[C-2]|0,S=Zo[C-2]|0,L=An(T,S,19)^Qi(T,S,61)^mp(T,S,6),k=In(T,S,19)^Ji(T,S,61)^yp(T,S,6),v=lg(B,k,Zo[C-7],Zo[C-16]),D=ug(v,I,L,Xo[C-7],Xo[C-16]);Xo[C]=D|0,Zo[C]=v|0}let{Ah:o,Al:n,Bh:s,Bl:i,Ch:a,Cl:c,Dh:l,Dl:h,Eh:p,El:f,Fh:m,Fl:d,Gh:y,Gl:b,Hh:x,Hl:w}=this;for(let C=0;C<80;C++){let E=An(p,f,14)^An(p,f,18)^Qi(p,f,41),R=In(p,f,14)^In(p,f,18)^Ji(p,f,41),I=p&m^~p&y,B=f&d^~f&b,T=dg(w,R,B,Yv[C],Zo[C]),S=pg(T,x,E,I,Gv[C],Xo[C]),L=T|0,k=An(o,n,28)^Qi(o,n,34)^Qi(o,n,39),v=In(o,n,28)^Ji(o,n,34)^Ji(o,n,39),D=o&s^o&a^s&a,P=n&i^n&c^i&c;x=y|0,w=b|0,y=m|0,b=d|0,m=p|0,d=f|0,{h:p,l:f}=no(l|0,h|0,S|0,L|0),l=a|0,h=c|0,a=s|0,c=i|0,s=o|0,i=n|0;let F=ag(L,v,P);o=cg(F,S,k,D),n=F|0}({h:o,l:n}=no(this.Ah|0,this.Al|0,o|0,n|0)),{h:s,l:i}=no(this.Bh|0,this.Bl|0,s|0,i|0),{h:a,l:c}=no(this.Ch|0,this.Cl|0,a|0,c|0),{h:l,l:h}=no(this.Dh|0,this.Dl|0,l|0,h|0),{h:p,l:f}=no(this.Eh|0,this.El|0,p|0,f|0),{h:m,l:d}=no(this.Fh|0,this.Fl|0,m|0,d|0),{h:y,l:b}=no(this.Gh|0,this.Gl|0,y|0,b|0),{h:x,l:w}=no(this.Hh|0,this.Hl|0,x|0,w|0),this.set(o,n,s,i,a,c,l,h,p,f,m,d,y,b,x,w)}roundClean(){Pr(Xo,Zo)}destroy(){this.destroyed=!0,Pr(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Np=class extends wp{constructor(){super(64,hg)}};var fs=Ki(()=>new xp,fp(1));var Wc=Ki(()=>new Np,fp(3));var Xv=t=>t[0]==="\u3042\u3044\u3053\u304F\u3057\u3093";function yg(t){for(let e=0;e<t.length;e++){let r=t.charCodeAt(e);if(r>=55296&&r<=56319){if(e+1>=t.length)return!1;let o=t.charCodeAt(++e);if(o<56320||o>57343)return!1}else if(r>=56320&&r<=57343)return!1}return!0}function Zv(t){if(typeof t!="string")throw new TypeError("invalid mnemonic type: "+typeof t);if(!yg(t))throw new TypeError("expected well-formed Unicode string");return t.normalize("NFKD")}function eE(t){let e=Zv(t),r=e.split(" ");if(![12,15,18,21,24].includes(r.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:r}}function gg(t){if(Cn(t),![16,20,24,28,32].includes(t.length))throw new RangeError("invalid entropy length")}var bg=t=>{let e=8-t.length/4;return fs(t)[0]>>e<<e};function xg(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new TypeError("Wordlist: expected array of 2048 strings");t.forEach(e=>{if(typeof e!="string")throw new TypeError("wordlist: non-string element: "+e);if(!yg(e))throw new TypeError("wordlist: expected well-formed Unicode string")})}function tE(t,e){xg(e);let r=new Uint8Array(t.length+1);r.set(t),r[t.length]=bg(t);let o=[],n=0,s=0;for(let i of r)n=n<<8|i,s+=8,s>=11&&(s-=11,o.push(e[n>>>s&2047]),n&=(1<<s)-1);return o}function rE(t,e){xg(e);let r=t.length/3*4,o=new Uint8Array(r+1),n=0,s=0,i=0;for(let c of t){let l=e.indexOf(c);if(l===-1)throw new Error("Unknown word: "+c);for(n=n<<11|l,s+=11;s>=8;)s-=8,o[i++]=n>>>s&255;n&=(1<<s)-1}s>0&&(o[i]=n<<8-s);let a=o.subarray(0,r);if(o[r]!==bg(a))throw new Error("Invalid checksum");return Uint8Array.from(a)}function kp(t,e){let{words:r}=eE(t),o=rE(r,e);return gg(o),o}function wg(t,e){return gg(t),tE(t,e).join(Xv(e)?"\u3000":" ")}function Ng(t,e){try{kp(t,e)}catch{return!1}return!0}var Gi=Object.freeze(`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`));var Sp=(t,e=2166136261)=>{for(let r=0;r<t.length;r++)e=Math.imul(e^t[r],16777619);return e>>>0};var Sg="HermesInternal"in globalThis,oE=typeof document>"u",Lc=!1,qc=!Sg&&typeof globalThis.Buffer<"u",nE=()=>vg("uncaughtErrors"),sE=()=>vg("unhandledRejection"),vp=new Error("TestGlobalErrors.settle sentinel"),vg=t=>{let e=t==="uncaughtErrors"?"uncaughtException":"unhandledRejection",r=t==="uncaughtErrors"?"error":"unhandledrejection",o=t==="uncaughtErrors"?"error":"reason",n=t==="uncaughtErrors"?"uncaught-error":"unhandled-rejection",s=new DisposableStack,i=[],a=[],c=[],l=0,h=()=>{if(l<i.length){let d=i[l];return l+=1,Promise.resolve(d)}let m=Promise.withResolvers();return a.push(m.resolve),m.promise},p=m=>{if(m===vp){c.shift()?.();return}i.push(m);let d=a.shift();d&&(l+=1,d(m))},f=()=>{let m=Promise.withResolvers();return c.push(()=>{m.resolve(i)}),t==="unhandledRejection"?Promise.reject(vp):queueMicrotask(()=>{throw vp}),m.promise};if(typeof process=="object"&&typeof process.on=="function"&&typeof process.off=="function")process.on(e,p),s.defer(()=>{process.off(e,p)});else if(typeof globalThis.addEventListener=="function"){let m=d=>{d.preventDefault(),p(d[o])};globalThis.addEventListener(r,m),s.defer(()=>{globalThis.removeEventListener(r,m)})}else throw new Error(`Unsupported platform global ${n} reporting.`);return{errors:i,next:h,settle:f,[Symbol.dispose]:()=>{a.length=0,c.length=0,s.dispose()}}};var Tp=t=>{let e=Object.create(iE,{[Symbol.dispose]:{value:()=>{Yi.delete(e)}}});return Yi.set(e,t),e},iE={toString:()=>Ep,toJSON:()=>Ep,[Symbol.for("nodejs.util.inspect.custom")]:()=>Ep},Ep="<redacted>",Yi=new WeakMap,$c=t=>(M(Yi.has(t),"Redacted value was not in registry"),Yi.get(t)),Op=t=>Yi.has(t);var aE=t=>t.replaceAll(/[.*+?^${}()|[\]\\]/gu,"\\$&"),q=t=>{if(typeof t=="string")return JSON.stringify(t);if(t===null||typeof t!="object")return String(t);try{let e=JSON.stringify(t);if(typeof e=="string")return e}catch{}try{return String(t)}catch{return"[Unserializable value]"}};var cE=t=>({"~evolu/instance":t}),Cp=t=>e=>e!==null&&typeof e=="object"&&Object.hasOwn(e,"~evolu/instance")&&e["~evolu/instance"]===t,Ap=t=>typeof t?.then=="function";var hs=t=>`A value ${q(t.value)} is not a ${t.expected.toLowerCase()}.`,Eg=t=>t.kind==="NotObject"?`A value ${q(t.value)} is not an object.`:"The value is an object, but an Object Output must be a plain object or have a null prototype.",Tg=t=>`A value ${q(t.value)} is not valid for type Never.`,Og=hs,Cg=t=>`The value ${q(t.value)} does not match the template literal.`,Ag=hs,Ig=hs,Rg=hs,Dg=t=>`The value ${q(t.value)} is not a boolean. Use true or false.`,Bg=hs,Mg=hs,Pg=t=>`A value ${q(t.value)} is not an Evolu Type.`,Ip=t=>`A value ${q(t.value)} does not have the expected object tag ${q(t.expected)}.`,Wg=()=>"The Date is invalid.",Lg=t=>`A value ${q(t.value)} is not an instance of ${t.constructorName}.`,Rp=t=>`The value ${q(t.value)} is not strictly equal to the expected literal: ${String(t.expected)}.`,qg=()=>"A value does not match any allowed variant.",$g=t=>`The value ${q(t.value)} is not a canonical ISO date-time string.`,Ug=t=>`The value ${q(t.value)} is not a valid calendar date in the YYYY-MM-DD format.`,jg=()=>"The Date cannot be represented as DateIso.",Fg=t=>`The value ${q(t.value)} is not a supported RFC 3339 date-time. Use a value such as "2024-01-01T12:00:00Z".`,zg=t=>`The value ${q(t.value)} must be a canonical decimal string.`,Vg=t=>`The value ${q(t.value)} is not a valid signed 64-bit integer (Int64).`,_g=t=>`The value ${q(t.value)} is not a valid unsigned 64-bit integer (UInt64).`,Kg=t=>`The value ${q(t.value)} is not a valid Int64 string.`,Qg=t=>`The value ${q(t.value)} is not a ${t.casing} identifier.`,Jg=t=>`The value ${q(t.value)} must be capitalized.`,Hg=t=>`The value ${q(t.value)} must not start with an uppercase letter.`,Gg=t=>`The value ${q(t.value)} must be uppercased.`,Yg=t=>`The value ${q(t.value)} must be lowercased.`,Xg=t=>`The value ${q(t.value)} must be trimmed.`,Zg=t=>`The value ${q(t.value)} must be well-formed Unicode text.`,eb=t=>`The value ${q(t.value)} must be in Unicode normalization form ${t.form}.`,tb=t=>`The value ${q(t.value)} must start with ${q(t.prefix)}.`,rb=t=>`The value ${q(t.value)} must end with ${q(t.suffix)}.`,ob=t=>`The value ${q(t.value)} must contain ${q(t.substring)}.`,nb=t=>`The value ${q(t.value)} must not contain ${q(t.substring)}.`,sb=t=>`The value ${q(t.value)} does not meet the minimum length of ${t.min}.`,ib=t=>`The value ${q(t.value)} exceeds the maximum length of ${t.max}.`,ab=t=>`The value ${q(t.value)} exceeds the maximum UTF-8 byte length of ${t.max}.`,cb=t=>`The value ${q(t.value)} does not have the required length of ${t.exact}.`,lb=t=>`The value ${q(t.value)} does not match /${t.source}/${t.flags}.`,ub=t=>`The value ${q(t.value)} is not a valid Base64Url string.`,db=t=>`The value ${q(t.value)} is not a valid Base64 string.`,pb=t=>`The value ${q(t.value)} is not lowercase hexadecimal with an even number of digits.`,fb=t=>`The value ${q(t.value)} is not a color in the lowercase #rrggbb format.`,hb=t=>`The value ${q(t.value)} is not a valid Name.`,mb=t=>`The value ${q(t.value)} is not a valid email address.`,yb=t=>`The value ${q(t.value)} is not a valid lowercase hostname.`,gb=t=>`The value ${q(t.value)} is not a valid IPv4 address.`,bb=t=>`The value ${q(t.value)} is not a canonical IPv6 address.`,xb=t=>`The value ${q(t.value)} is not a valid IPv6 address.`,wb=t=>`The value ${q(t.value)} is not a valid IPv4 address or canonical IPv6 address.`,Nb=t=>`The value ${q(t.value)} is not a valid IP address.`,kb=t=>`The value ${q(t.value)} is not a canonical URL.`,Sb=t=>`The value ${q(t.value)} is not a valid URL.`,vb=t=>`The value ${q(t.value)} is not an HTTP or HTTPS URL.`,Eb=t=>`The value ${q(t.value)} is not a valid HTTP or HTTPS URL.`,Tb=t=>`The value ${q(t.value)} is not a phone number in E.164 format.`,Ob=t=>`The value ${q(t.value)} is not a valid IBAN in uppercase without spaces.`,Cb=t=>`The value ${q(t.value)} is not a valid 13-digit ISBN without hyphens.`,Ab=t=>{switch(t.reason){case"Untrimmed":return"The password must be trimmed.";case"TooLong":return"The password exceeds the maximum length of 64.";case"TooShort":return"The password does not meet the minimum length of 8."}},Ib=()=>"The value is not a valid English BIP39 mnemonic.",Rb=()=>"The secret must be a string.",Db=t=>`The value ${q(t.value)} is not a valid Id.`,Bb=t=>`The value ${q(t.value)} is not a valid Id for table ${t.table}.`,Mb=t=>`The value ${q(t.value)} is not a canonical lowercase UUID.`,Pb=t=>`The value ${q(t.value)} is not a version ${t.version} UUID.`,Wb=t=>`The value ${q(t.value)} is not a canonical uppercase ULID.`,Lb=t=>`The value ${q(t.value)} must be non-negative (>= 0).`,qb=t=>`The value ${q(t.value)} must be a non-negative decimal string.`,$b=t=>`The value ${q(t.value)} must be positive (> 0).`,Ub=t=>`The value ${q(t.value)} must be a positive decimal string.`,jb=t=>`The value ${q(t.value)} must be non-positive (<= 0).`,Fb=t=>`The value ${q(t.value)} must be a non-positive decimal string.`,zb=t=>`The value ${q(t.value)} must be negative (< 0).`,Vb=t=>`The value ${q(t.value)} must be a negative decimal string.`,_b=t=>`The value ${q(t.value)} must be a safe integer.`,Kb=t=>`The value ${q(t.value)} is not a decimal integer.`,Qb=t=>`The value ${q(t.value)} is not a decimal number.`,Jb=t=>`The value ${q(t.value)} must be greater than ${t.min}.`,Hb=t=>`The value ${q(t.value)} must be greater than or equal to ${t.min}.`,Gb=t=>`The value ${q(t.value)} must be less than ${t.max}.`,Yb=t=>`The value ${q(t.value)} must be less than or equal to ${t.max}.`,Xb=()=>"The value must not be NaN.",Zb=t=>`The value ${q(t.value)} must be finite.`,ex=t=>`The value ${q(t.value)} must be a multiple of ${t.divisor}.`,tx=t=>`The value ${q(t.value)} must be between ${t.min} and ${t.max}, inclusive.`,rx=t=>`The value ${q(t.value)} must be greater than ${t.min}.`,ox=t=>`The value ${q(t.value)} must be greater than or equal to ${t.min}.`,nx=t=>`The value ${q(t.value)} must be less than ${t.max}.`,sx=t=>`The value ${q(t.value)} must be less than or equal to ${t.max}.`,ix=t=>`The value ${q(t.value)} must be between ${t.min} and ${t.max}, inclusive.`,ax=t=>{if(t.reason.kind==="NotArray")return`A value ${q(t.reason.value)} is not an array.`;let e=t.reason.issues[0];switch(e.kind){case"Hole":return`An array element at index ${e.index} is missing.`;case"Accessor":return`An array element at index ${e.index} must be a data property.`;case"ExcessProperty":return"An excess Array property is not allowed. Remove it or use a different Type.";case"Element":return`An array element at index ${e.index} is invalid.`}},cx=t=>`The value ${q(t.value)} must contain at least one item.`,lx=t=>`The value ${q(t.value)} has equal items at indexes ${t.previousIndex} and ${t.index}.`,ux=t=>{if(t.reason.kind==="NotSet")return`A value ${q(t.reason.value)} is not a Set.`;let e=t.reason.issues[0];switch(e.kind){case"ExcessProperty":return`An excess Set property ${q(e.key)} is not allowed.`;case"Element":return`A Set element at index ${e.index} is invalid.`}},Dp=t=>{if(t.reason.kind==="NotMap")return`A value ${q(t.reason.value)} is not a Map.`;let e=t.reason.issues[0];switch(e.kind){case"ExcessProperty":return`An excess Map property ${q(e.key)} is not allowed.`;case"Key":return`A Map key at index ${e.index} is invalid.`;case"Value":return`A Map value at index ${e.index} is invalid.`;case"Collision":return`Map keys at indexes ${e.previousIndex} and ${e.index} decode to the same key ${q(e.outputKey)}.`}},dx=t=>`The size ${t.value.size} does not meet the minimum size of ${t.min}.`,px=t=>`The size ${t.value.size} exceeds the maximum size of ${t.max}.`,fx=t=>{if(t.reason.kind==="NotArray")return`A value ${q(t.reason.value)} is not a tuple.`;if(t.reason.kind==="InvalidLength")return`A Tuple must have length ${t.reason.expected}, but the value has length ${t.reason.actual}.`;let e=t.reason.issues[0];switch(e.kind){case"Hole":return`A Tuple element at index ${e.index} is missing.`;case"Accessor":return`A Tuple element at index ${e.index} must be a data property.`;case"ExcessProperty":return"An excess Tuple property is not allowed. Remove it or use a different Type.";case"Element":return`A Tuple element at index ${e.index} is invalid.`}},hx=t=>{if(t.reason.kind==="NotRecord")return`A value ${q(t.reason.value)} is not a Record.`;if(t.reason.kind==="NotPlainRecord")return"The value is an object, but a Record Output must be a plain object or have a null prototype.";let e=t.reason.issues[0];switch(e.kind){case"Key":return`Property key ${q(e.key)} is invalid.`;case"Value":return`The value of property ${q(e.key)} is invalid.`;case"Accessor":return`A Record property ${q(e.key)} must be a data property.`;case"NonEnumerable":return`A Record property ${q(e.key)} must be enumerable.`;case"Collision":return`Record keys ${q(e.previousKey)} and ${q(e.key)} decode to the same key ${q(e.outputKey)}.`}},mx=t=>`The value ${q(t.value)} does not meet the minimum entry count of ${t.min}.`,yx=t=>`The value ${q(t.value)} exceeds the maximum entry count of ${t.max}.`,Uc=t=>{if(t.reason.kind!=="Properties")return Eg(t.reason);let e=Reflect.ownKeys(t.reason.errors).at(0);ke(e);let r=t.reason.errors[e];if(ke(r),r.type==="ObjectPropertyAccess")switch(r.reason){case"Accessor":return"An Object property must be a data property. Materialize accessor values into plain data before using this Type or use a different Type.";case"NonEnumerable":return"An Object property must be enumerable. Make it enumerable or use a different Type."}return r.type==="ObjectMissingProperty"?`The required property ${q(e)} is missing.`:typeof e=="symbol"?"An Object property key must be a string. Remove the symbol property or use a different Type.":r.type==="ObjectExcessProperty"?`The property ${q(e)} is not allowed. Remove it or use a different Type.`:`The property ${q(e)} is invalid.`},gx=t=>{switch(t.reason.kind){case"Object":return Eg(t.reason.error.reason);case"PropertyAccess":{let e=`The discriminator property ${q(t.reason.key)}`;return t.reason.reason==="Accessor"?`${e} must be a data property.`:t.reason.reason==="Inherited"?`${e} must be an own property.`:`${e} must be enumerable.`}case"Discriminator":return`The discriminator property ${q(t.reason.key)} has an unexpected value ${q(t.reason.value)}.`;case"Member":return`The selected variant ${q(t.reason.discriminator)} is invalid.`}},bx=t=>{let e=t.reason.issues[0];switch(e.kind){case"InvalidType":return`A value ${q(e.value)} is not Data.`;case"UnexpectedPrototype":return`A Data ${e.container} has an unexpected prototype.`;case"Accessor":return"A Data property must be a data property. Materialize accessor values into plain data before using this Type or use a different Type.";case"NonEnumerable":return"A Data Object property must be enumerable. Remove it or use a different Type.";case"SymbolProperty":return"A Data Object property key must be a string. Remove the symbol property or use a different Type.";case"Hole":return"A Data Array element is missing.";case"InvalidUint8Array":return"A Data Uint8Array must have an attached, in-bounds ArrayBuffer.";case"ExcessProperty":return`A Data ${e.container} must not have excess own properties. Remove the property or use a different Type.`}},xx=t=>{let e=t.reason.issues[0];switch(e.kind){case"InvalidType":return`A value ${q(e.value)} is not a JSON value.`;case"NonFiniteNumber":return"A JSON number must be finite.";case"UnexpectedPrototype":return"The value is an object, but a JsonValue object must be a plain object or have a null prototype.";case"Accessor":return"A JSON property must be a data property. Materialize accessor values into plain data before using this Type or use a different Type.";case"NonEnumerable":return"A JSON object property must be enumerable. Remove it or use a different Type.";case"SymbolProperty":return"A JSON object property key must be a string. Remove the symbol property or use a different Type.";case"Hole":return"A JSON array element is missing.";case"ExcessProperty":return"An excess JSON array property is not allowed. Remove it or use a different Type.";case"CircularReference":return"A JsonValue must not contain circular references."}},wx=t=>`The value ${q(t.value)} cannot be parsed into a JsonValue.`,Nx=t=>`The value ${q(t.value)} is not a byte-size literal. Use a value such as "512KiB" or "1MiB".`,kx=()=>"The value -0 is not a byte length. Use 0 instead.",Sx=t=>`The value ${q(t.value)} is not a byte length. Use a number of bytes or a literal such as 10MiB.`,vx=t=>`The value ${q(t.value)} is not a duration literal. Use a value such as "500ms" or "1.5s".`,Ex=t=>`The value ${q(t.value)} is not a percentage literal. Use a value such as "50%" or "12.5%".`,Tx=t=>`The value ${q(t.value)} is not a WebSocket URL.`,Ox=t=>`The value ${q(t.value)} is not a valid WebSocket URL.`,Cx=t=>`The value ${q(t.value)} must be in leancase.`;var lE=(t,e)=>t[Be](e,"all",[]).map(o=>({path:o.path,message:ta(o)})),je=globalThis.Symbol(),Be=globalThis.Symbol(),Bn=(t,e)=>{let r=kt(t.length+1);for(let o=0;o<t.length;o++)r[o]=t[o];return r[t.length]=e,r},io=(t,e,r,o)=>[{name:t,error:e,path:o,formatError:r}],jp=(t,e,r,o)=>(n,s,i)=>{let a=n.reason;if(a.kind!==e)return io(t,n,r,i);let c=a.issues,l=s==="first"?1:c.length,h=[];for(let p=0;p<l;p++){let f=c[p],m=Bn(i,"key"in f?f.key:f.index);if(f.error===void 0){h.push({name:t,error:s==="first"?n:{type:t,reason:{kind:e,issues:[f]}},path:m,formatError:r});continue}let d=o(f)[Be](f.error,s,m);if(l===1)return d;for(let y of d)h.push(y)}return h},Fx=t=>t.formatError(t.error),ta=(t,e=Fx)=>{let r=e(t);if(t.alternatives===void 0)return r;for(let{index:o,name:n,issues:s}of t.alternatives)for(let i of s){let a="";for(let l of i.path)a+=typeof l=="string"?`[${JSON.stringify(l)}]`:`[${globalThis.String(l)}]`;let c=ta(i,e);r+=`
- ${o}: ${n}${a}: ${c.includes(`
`)?c.replaceAll(`
`,`
  `):c}`}return r};function Ut(t,e){if(t===void 0)return;let r=t,o=r[je](e);o.ok||M(!1,`Expected ${r.name}.`,{cause:o.error,stackStartFn:Ut})}var To=(t,e,r,o,n=ce)=>{if(e(o))return;let i=r(o,n).error;M(!1,`Expected ${t}.`,{cause:i})},uE=((t,e)=>{let r=Bp(t),o=Bp(e),n=pe();for(let s of o){let i=e[s],a=Bp(i),c=pe();for(let f of a)c[f]=i[f];let l=pe(),h=new WeakMap,p=f=>c[f.error.type==="TypeOf"?f.error.expected:f.name](f.error);for(let f of r){let m=t[f];l[f]=Fp(m,p,h)}n[s]=l}return n}),Bp=t=>{let e="localizeTypes maps must be plain objects with own enumerable string-keyed data properties.";M($e(t),e);let r=Reflect.ownKeys(t);for(let o of r){let n=globalThis.Object.getOwnPropertyDescriptor(t,o);M(typeof o=="string"&&"value"in n&&n.enumerable,e)}return r},Fp=(t,e,r)=>{let o=r.get(t);if(o)return o;let n=t.parent?Fp(t.parent,e,r):null,s=c=>({...c,formatError:()=>e(c),...c.alternatives===void 0?{}:{alternatives:c.alternatives.map(l=>({...l,issues:l.issues.map(s)}))}}),i=(c,l,h)=>t[Be](c,l,h).map(s),a=Ze(t.name,n,t.fromUnknown,t.is,t[je],t[dt],t[Ue].parent??t[Ue],i,{formatIssue:e,check:t[jt],refinements:t[ms]});globalThis.Object.assign(a,{from:t.from,orThrow:Vx(Xe(t.from),a.formatError),orNull:t.orNull}),r.set(t,a),Dn.has(t)&&Dn.add(a);for(let c of Reflect.ownKeys(t)){if(globalThis.Object.hasOwn(a,c))continue;let l=globalThis.Object.getOwnPropertyDescriptor(t,c);"value"in l&&(l.value=Wp(l.value,e,r)),globalThis.Object.defineProperty(a,c,l)}return a},Wp=(t,e,r)=>{if(t!==null&&typeof t=="object"&&globalThis.Object.hasOwn(t,"~evolu/instance")&&t["~evolu/instance"]==="Type")return Fp(t,e,r);if(Array.isArray(t))return t.map(n=>Wp(n,e,r));if(!$e(t))return t;let o=globalThis.Object.create(globalThis.Object.getPrototypeOf(t));for(let n of Reflect.ownKeys(t)){let s=t[n];o[n]=n==="value"&&globalThis.Object.hasOwn(t,tn)?s:Wp(s,e,r)}return o};function $r(t,e,r,o,n){if(typeof e=="function"){let s=Ax(e);return sr(t,s,r,{check:i=>{let a=s(i);return a.ok?void 0:a.error}})}return Vc(t,e,Ax(r),o,!1,n?.path)}var Ax=t=>e=>{let r=t(e);return r.ok&&M(globalThis.Object.is(r.value,e),"A Type refinement must return its input."),r},Pn=(t,e,r,o)=>{let n=e[jt];return sr(t,(s,i)=>{let a=e.fromUnknown(s,i);return a.ok?a:N(r(a.error,s))},o,{check:n&&((s,i)=>{let a=n(s,i);return a===void 0?void 0:r(a,s)})})},sr=(t,e,r,{getTypeIssues:o,isOutput:n,check:s}={})=>{let i=r,a=o??((f,m,d)=>io(f.type==="TypeOf"?t:f.type,f,i,d)),c=n??(s?f=>s(f,ce)===void 0:f=>e(f).ok),l=(f,m=ce)=>(To(t,c,e,f,m),g(f)),h=f=>(To(t,c,e,f),f);return{"~evolu/instance":"Type",name:t,parent:null,fromUnknown:e,formatError:r,is:c,from:l,to:h,orThrow:(f,m=ce)=>(To(t,c,e,f,m),f),orNull:h,"~standard":{version:1,vendor:"evolu",validate:f=>{let m=e(f,zx);return m.ok?{value:m.value}:{issues:a(m.error,"all",[]).map(d=>({message:ta(d),path:d.path}))}}},[je]:e,[dt]:g,[Ue]:ye,[Be]:a,[jt]:s,[ms]:void 0,[zp]:void 0,[Vp]:void 0}},Vc=(t,e,r,o,n=!1,s)=>{let i=e,a=o,c=o?(v,D,P)=>v.type===t?io(t,v,a,s?[...P,...s]:P):i[Be](v,D,P):i[Be],l=r,h=n?v=>{if(!v.ok)return v;let D=l(v.value);return D.ok?v:D}:v=>v.ok?l(v.value):v,p=i.fromUnknown,f=i[je],m=i[dt],d=(v,D=ce)=>h(m(v,D));m.parent&&(d.parent=en(m.parent,v=>Kc(v,h)));let y=At(d),b=n?i[ms]:void 0,x=b?[...b,l]:[l],w=x.length,C=i;if(n)for(;C[ms];)C=C.parent;let E=C.is,R=v=>{if(!E(v))return!1;for(let D=0;D<w;D++){let P=x[D];if(!P(v).ok)return!1}return!0},I=C[jt],B=I&&((v,D)=>{let P=I(v,D);if(P!==void 0)return P;for(let F=0;F<w;F++){let O=x[F],A=O(v);if(!A.ok)return A.error}}),T=C.fromUnknown,S=w>1?(v,D=ce)=>{let P=T(v,D);if(!P.ok)return P;for(let F=0;F<w;F++){let O=x[F],A=O(P.value);if(!A.ok)return A}return P}:(v,D=ce)=>h(p(v,D));return Ze(t,i,S,R,f===p?S:(v,D=ce)=>h(f(v,D)),y,ye,c,{check:B,refinements:n?x:void 0})};function Fe(t,e,r,{from:o,to:n},s){let i=e,a=r,c=Xe(a.from),l=(x,w)=>vo(o(x),C=>{let E=c(C,w);return E.ok?E:N({type:t,outputError:E.error})}),h=en(i[dt],x=>(w,C)=>vo(x(w,C),E=>l(E,C))),p=At(h),f=(x,w=ce)=>vo(i.fromUnknown(x,w),C=>l(C,w)),m=x=>{let w=n(a[Ue](x));return To(i.name,i.is,i[je],w),w},d=s,y=(x,w,C)=>x.type!==t?i[Be](x,w,C):"outputError"in x?a[Be](x.outputError,w,C):io(t,x,d,C),b=(x,w)=>{let C=a[je](x,w);return C.ok?C:N({type:t,outputError:C.error})};return Ze(t,i,f,a.is,b,p,m,y,{additionalProperties:{output:a}})}var ce={errors:"first"},zx={errors:"all"},Ue=globalThis.Symbol(),dt=globalThis.Symbol(),_c=globalThis.Symbol(),zp=globalThis.Symbol(),Vp=globalThis.Symbol(),jt=globalThis.Symbol(),ms=globalThis.Symbol(),ys=t=>(e,r=ce)=>{let o=t(e,r);return o===void 0?g(e):N(o)},_p=t=>{let e=[];for(let r of t){let o=r[jt];if(o===void 0)return;e.push(o)}return e},Kc=(t,e)=>(r,o=ce)=>e(t(r,o),o),Vx=(t,e)=>Kc(t,r=>{if(r.ok)return r.value;throw new Error(e(r.error),{cause:r.error})}),en=(t,e)=>{let r=e(t);return t.parent&&(r.parent=en(t.parent,e)),r},At=t=>{if(!t)return g;let e=r=>g(r);return e.parent=t,e},Ix=t=>t.fromUnknown,Rx=t=>t[je],_x=t=>t.is;function Xe(t){for(;t.parent!=null;)t=t.parent;return t}var Ze=(t,e,r,o,n,s,i,a,{additionalProperties:c,formatIssue:l=Fx,check:h,refinements:p}={})=>{let f=e,m=f?.[Ue],d=i;if(m){d=R=>m(i(R));let E=(R,I=ce)=>i(R,I);m.parent&&(E.parent=en(m.parent,R=>I=>R(i(I)))),d.parent=E}let y=f?.[Be]===a?f.formatError:E=>ta(a(E,"first",[])[0],l),b=(E,R=ce)=>(To(t,o,n,E,R),s(E,R));s.parent&&(b.parent=Kx(f,s.parent));let x=Xe(b),w=E=>(To(t,o,n,E),d(E));d.parent&&(w.parent=en(d.parent,E=>R=>(To(t,o,n,R),E(R))));let C={"~evolu/instance":"Type",name:t,parent:e,fromUnknown:r,formatError:y,is:o,from:b,to:w,orThrow:(E,R=ce)=>{let I=x(E,R);if(I.ok)return I.value;throw new Error(y(I.error),{cause:I.error})},orNull:(E,R=ce)=>us(x(E,R)),"~standard":{version:1,vendor:"evolu",validate:E=>{let R=r(E,zx);return R.ok?{value:R.value}:{issues:a(R.error,"all",[]).map(I=>({message:ta(I,l),path:I.path}))}}},[je]:n,[dt]:s,[Ue]:d,[Be]:a,[jt]:h,[ms]:p,[zp]:void 0,[Vp]:void 0};return c!==void 0&&globalThis.Object.assign(C,c),C},Kx=(t,e)=>{let{name:r,is:o}=t,n=t[je],s=(i,a=ce)=>(To(r,o,n,i,a),e(i,a));return e.parent&&(s.parent=Kx(t.parent,e.parent)),s},ir=sr("Unknown",g,ye,{isOutput:()=>!0,check:()=>{}}),dE=sr("Never",t=>N({type:"Never",value:t}),Tg,{isOutput:()=>!1,check:t=>({type:"Never",value:t})}),bs=(t,e)=>{let r=t.toLowerCase();return sr(t,o=>typeof o===r?g(o):N({type:"TypeOf",expected:t,value:o}),e,{isOutput:o=>typeof o===r,check:o=>typeof o===r?void 0:{type:"TypeOf",expected:t,value:o}})},Y=bs("String",Og),ra=bs("Number",Ag),Qc=bs("BigInt",Ig),xs=bs("Boolean",Rg),pE=Fe("BooleanFromString",Y,xs,{from:t=>t==="true"?g(!0):t==="false"?g(!1):N({type:"BooleanFromString",value:t}),to:t=>t?"true":"false"},Dg),fE=bs("Symbol",Bg),hE=bs("Function",Mg),oa=$r("EvoluType",t=>Cp("Type")(t)?g(t):N({type:"EvoluType",value:t}),Pg);function Jc(t,e){let r=`[object ${t}]`;return e===void 0?sr(t,o=>so(o,r)?g(o):N({type:"ObjectTag",expected:t,value:o}),Ip,{isOutput:o=>so(o,r),check:o=>so(o,r)?void 0:{type:"ObjectTag",expected:t,value:o}}):globalThis.Object.assign(Vc("ObjectTag",e,o=>so(o,r)?g(o):N({type:"ObjectTag",expected:t,value:o}),Ip),{expected:t})}var so=(t,e)=>t!==null&&(typeof t=="object"||typeof t=="function")&&globalThis.Object.prototype.toString.call(t)===e,Kp=Jc("Date"),mE=V("ValidDate",Kp,t=>globalThis.Number.isNaN(globalThis.Date.prototype.getTime.call(t))?N({type:"ValidDate",value:t}):g(),Wg),pt=Jc("Uint8Array"),Qp=Jc("ArrayBuffer"),yE=t=>{let e=t,r=e.name,o=s=>globalThis.Function.prototype[globalThis.Symbol.hasInstance].call(e,s),n=s=>o(s)?g(s):N({type:"InstanceOf",constructorName:r,value:s});return globalThis.Object.assign(sr("InstanceOf",n,Lg,{isOutput:o,check:s=>o(s)?void 0:{type:"InstanceOf",constructorName:r,value:s}}),{constructor:e})},ar=t=>{let e=t,r=typeof e=="string"?Y:typeof e=="number"?ra:typeof e=="bigint"?Qc:typeof e=="boolean"?xs:null;return globalThis.Object.assign(r?Vc("Literal",r,o=>o===e?g():N({type:"Literal",expected:e,value:o}),Rp,!0):sr("Literal",o=>o===e?g(o):N({type:"Literal",expected:e,value:o}),Rp,{isOutput:o=>o===e,check:o=>o===e?void 0:{type:"Literal",expected:e,value:o}}),{expected:e,[_c]:!0})},Jp=ar(void 0),na=ar(null);function ge(...t){let e=t.map(x=>x!==null&&typeof x=="object"?x:ar(x)),r=e.map(Xe),o=Mx(r),n=o?ys(o):Xi(r,Ix),s=Dx(e),i=Ze("Union",null,n,Bx(r),o?n:Xi(r,Rx),g,ye,Dx(r),{check:o}),a=t.every(x=>x===null||typeof x!="object"),c=x=>t.indexOf(x)!==-1,l=Mx(e),h=l&&a?(x,w)=>c(x)?void 0:l(x,w):l,p=h?ys(h):Xi(e,Ix),f=h?p:Xi(e,Rx),m=Xi(e,(x,w)=>{let C=Xe(x[dt]),E=r[w].is;return(R,I)=>E(R)?C(R,I):void 0}),d=x=>e.find(w=>w.is(x)),y=At(m),b=x=>{let w=d(x);return ke(w),w[Ue](x)};return Ze("Union",i,p,a?c:Bx(e),f,y,b,s,{additionalProperties:{members:e,[_c]:!0},check:h})}var Dx=t=>(e,r,o)=>[{name:"Union",error:e,path:o,formatError:qg,alternatives:e.errors.map(({index:n,error:s})=>({index:n,name:t[n].name,issues:t[n][Be](s,"all",[])}))}],Bx=t=>{if(t.length===2){let r=t[0].is,o=t[1].is;return n=>r(n)||o(n)}let e;return r=>{let o=e??=t.map(_x);for(let n=0;n<o.length;n++)if(o[n](r))return!0;return!1}},Mx=t=>{let e=_p(t);if(e!==void 0)return(r,o)=>{let n,s;for(let i=0;i<e.length;i++){let a=e[i](r,o);if(a===void 0)return;n===void 0?n={index:i,error:a}:o.errors==="all"&&(s??=[n]).push({index:i,error:a})}return ke(n),{type:"Union",errors:s??[n]}}},Xi=(t,e)=>{let r;return(o,n=ce)=>{let s=r??=t.map(e),i,a;for(let c=0;c<s.length;c++){let l=s[c](o,n);if(l!==void 0){if(l.ok)return l;i===void 0?i={index:c,error:l.error}:n.errors==="all"&&(a??=[i]).push({index:c,error:l.error})}}return ke(i),N({type:"Union",errors:a??[i]})}},gE=t=>ge(t,Jp),ao=t=>ge(t,na),bE=t=>ge(t,na,Jp),xE=t=>t.name==="Union"&&"members"in t&&Array.isArray(t.members),wE=(...t)=>Qx(t),Qx=t=>{let e=t.filter(E=>typeof E!="string"),r=e,o=Kw(...e),n=o,s={output:o,parts:t,[_c]:!0},i=NE(t),a=(E,R=ce)=>{let I=i(E);if(!I.ok)return I;let B=Lp(I.value,r,(T,S,L)=>T.fromUnknown(S,L),R,!1);return B.ok?B:N({type:"TemplateLiteral",outputError:B.error})},c=E=>{let R=n[Ue](E),I="",B=0;for(let T of t)I+=typeof T=="string"?T:R[B++];return I},l=(E,R)=>{let I=a(E,R);return I.ok?g(c(I.value)):I},h=(E,R=ce)=>{let I=Y.fromUnknown(E,R);if(!I.ok)return I;let B=l(I.value,R);return!B.ok||B.value===I.value?B:N({type:"TemplateLiteral",value:I.value})},p=(E,R,I)=>E.type!=="TemplateLiteral"?Y[Be](E,R,I):"outputError"in E?n[Be](E.outputError,R,I):io("TemplateLiteral",E,Cg,I),f=(E,R=ce)=>{let I=Y.fromUnknown(E,R);return I.ok?l(I.value,R):I},m=At((E,R=ce)=>l(E,R)),d=Ze("TemplateLiteral",Y,f,E=>h(E,ce).ok,h,m,ye,p,{additionalProperties:s}),y=(E,R=ce)=>{let I=Y.fromUnknown(E,R);return I.ok?a(I.value,R):I},b=(E,R=ce)=>{Y.from(E);let I=a(E,R);return(!I.ok||c(I.value)!==E)&&M(!1,"Expected TemplateLiteral.",{cause:I.ok?{type:"TemplateLiteral",value:E}:I.error}),I},x=(E,R=ce)=>(Y.from(E),a(E,R));b.parent=x;let w=At(b),C=Ze("TemplateLiteral",d,y,n.is,n[je],w,c,p,{additionalProperties:s});return C.from.parent=b,C},ee=(...t)=>Qx(t).parent,NE=t=>{let e=Jx,r=0,o=t.map(n=>{let s=Fc(n);return e=Hx(e,s),r+=s.width??0,[n,s.width]});return n=>{let s=Array.from(n),i=s.length-r;if(i<0)return N({type:"TemplateLiteral",value:n});let a=[],c=0;for(let[l,h]of o){let p=h??i,f=s.slice(c,c+p).join("");if(typeof l=="string"){if(f!==l)return N({type:"TemplateLiteral",value:n})}else a.push(f);c+=p}return c===s.length?g(a):N({type:"TemplateLiteral",value:n})}},Jx={width:0,canBeEmpty:!0,canStartWithLowSurrogate:!1,canEndWithHighSurrogate:!1},kE={width:null,canBeEmpty:!0,canStartWithLowSurrogate:!0,canEndWithHighSurrogate:!0},Hx=(t,e)=>(M(!(t.canEndWithHighSurrogate&&e.canStartWithLowSurrogate),"A TemplateLiteral cannot form a Unicode surrogate pair across part boundaries."),{width:t.width!==null&&e.width!==null?t.width+e.width:null,canBeEmpty:t.canBeEmpty&&e.canBeEmpty,canStartWithLowSurrogate:t.canStartWithLowSurrogate||t.canBeEmpty&&e.canStartWithLowSurrogate,canEndWithHighSurrogate:e.canEndWithHighSurrogate||e.canBeEmpty&&t.canEndWithHighSurrogate}),Px=t=>{let e=t.charCodeAt(0),r=t.charCodeAt(t.length-1);return{width:Array.from(t).length,canBeEmpty:t.length===0,canStartWithLowSurrogate:e>=56320&&e<=57343,canEndWithHighSurrogate:r>=55296&&r<=56319}},Fc=t=>{if(typeof t=="string")return Px(t);let e=t;if(e[_c]===!0){if(e.name==="Literal")return Px(e.expected);if(e.name==="Union"){let r=e.members.map(Fc),o=r[0].width;return{width:o!==null&&r.every(n=>n.width===o)?o:null,canBeEmpty:r.some(n=>n.canBeEmpty),canStartWithLowSurrogate:r.some(n=>n.canStartWithLowSurrogate),canEndWithHighSurrogate:r.some(n=>n.canEndWithHighSurrogate)}}if(e.name==="TemplateLiteral")return e.parts.reduce((r,o)=>Hx(r,Fc(o)),Jx)}return e.parent===null?kE:Fc(e.parent)};function V(t,e,r,o,n){return Vc(t,e,r??(()=>g()),o,!0,n?.path)}var Oo=V("DateIso",Y,t=>t.length===24&&new globalThis.Date(t).toJSON()===t?g():N({type:"DateIso",value:t}),$g),SE=V("PlainDateIso",Y,t=>{let e=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/u.exec(t);if(e!==null){let[,r,o,n]=e;if(globalThis.Number(n)<=Gx(globalThis.Number(r),globalThis.Number(o)))return g()}return N({type:"PlainDateIso",value:t})},Ug),Gx=(t,e)=>e===2?t%4===0&&(t%100!==0||t%400===0)?29:28:e===4||e===6||e===9||e===11?30:31,vE=Fe("DateIsoFromDate",Kp,Oo,{from:t=>We(()=>globalThis.Date.prototype.toISOString.call(t),()=>({type:"DateIsoFromDate",value:t})),to:t=>new globalThis.Date(t)},jg),EE=Fe("DateIsoFromRfc3339",Y,Oo,{from:t=>{let e=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.(\d{1,3})0*)?(Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)$/u.exec(t);if(e!==null){let[,r,o,n,s="",i]=e;if(globalThis.Number(n)<=Gx(globalThis.Number(r),globalThis.Number(o)))return g(new globalThis.Date(`${t.slice(0,19)}.${s.padEnd(3,"0")}${i}`).toISOString())}return N({type:"DateIsoFromRfc3339",value:t})},to:ye},Fg),Yx=V("Int64",Qc,t=>globalThis.BigInt.asIntN(64,t)===t?g():N({type:"Int64",value:t}),Vg),TE=V("UInt64",Qc,t=>globalThis.BigInt.asUintN(64,t)===t?g():N({type:"UInt64",value:t}),_g),ws=t=>e=>{let r=OE[t],o=CE[t];return V(r,e,n=>o.test(n)?g():N({type:r,value:n,casing:t}),Qg)},OE={camelCase:"CamelCaseIdentifier",PascalCase:"PascalCaseIdentifier",snake_case:"SnakeCaseIdentifier","kebab-case":"KebabCaseIdentifier",CONSTANT_CASE:"ConstantCaseIdentifier"},CE={camelCase:/^[a-z][a-zA-Z0-9]*$/u,PascalCase:/^[A-Z][a-zA-Z0-9]*$/u,snake_case:/^[a-z][a-z0-9]*(?:_[a-z][a-z0-9]*)*$/u,"kebab-case":/^[a-z][a-z0-9]*(?:-[a-z][a-z0-9]*)*$/u,CONSTANT_CASE:/^[A-Z][A-Z0-9]*(?:_[A-Z][A-Z0-9]*)*$/u},Ns=ws("camelCase")(Y),AE=ws("PascalCase")(Y),IE=ws("snake_case")(Y),RE=ws("kebab-case")(Y),sa=ws("CONSTANT_CASE")(Y),Hc=t=>t.charAt(0).toUpperCase()+t.slice(1),Gc=t=>t.replaceAll(/[A-Z]/gu,e=>`_${e.toLowerCase()}`),DE=t=>Zc(Gc(t)),Yc=t=>el(Gc(t)),Xx=t=>t.charAt(0).toLowerCase()+t.slice(1),Hp=t=>Gc(Xx(t)),BE=t=>Zc(Hp(t)),ME=t=>el(Hp(t)),Xc=t=>t.replaceAll(/_[a-z]/gu,e=>e.charAt(1).toUpperCase()),PE=t=>Hc(Xc(t)),Zc=t=>t.replaceAll("_","-"),el=t=>t.toUpperCase(),Zx=t=>Xc(Gp(t)),WE=t=>Hc(Zx(t)),Gp=t=>t.replaceAll("-","_"),LE=t=>el(Gp(t)),Yp=t=>Xc(Xp(t)),qE=Fe("CamelCaseIdentifierFromConstantCaseIdentifier",sa,Ns,{from:t=>g(Yp(t)),to:Yc}),$E=t=>Hc(Yp(t)),Xp=t=>t.toLowerCase(),UE=t=>Zc(Xp(t)),ew=t=>$r("Capitalized",t,e=>e===tw(e)?g(e):N({type:"Capitalized",value:e}),Jg),jE=ew(Y),tw=t=>{let[e=""]=t;return e.toUpperCase()+t.slice(e.length)},rw=t=>$r("Uncapitalized",t,e=>e===ow(e)?g(e):N({type:"Uncapitalized",value:e}),Hg),FE=rw(Y),ow=t=>{let[e=""]=t;return e.toLowerCase()+t.slice(e.length)},nw=t=>$r("Uppercased",t,e=>e===sw(e)?g(e):N({type:"Uppercased",value:e}),Gg),zE=nw(Y),sw=t=>t.toUpperCase(),iw=t=>$r("Lowercased",t,e=>e===aw(e)?g(e):N({type:"Lowercased",value:e}),Yg),VE=iw(Y),aw=t=>t.toLowerCase(),cw=t=>V("Trimmed",t,e=>e===e.trim()?g():N({type:"Trimmed",value:e}),Xg),lw=cw(Y),_E=t=>t.trim(),uw=t=>V("WellFormed",t,e=>{for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if((o&63488)===55296){if((o&64512)!==55296||(e.charCodeAt(r+1)&64512)!==56320)return N({type:"WellFormed",value:e});r++}}return g()},Zg),KE=uw(Y),QE=t=>{let e=`Normalized${t}`;return r=>V(e,r,o=>o.normalize(t)===o?g():N({type:e,value:o,form:t}),eb)},JE=(t,e)=>t.normalize(e),dw=t=>{let e=`StartsWith${t}`;return r=>V(e,r,o=>o.startsWith(t)?g():N({type:e,value:o,prefix:t}),tb)},HE=t=>e=>{let r=dw(t)(Y);return Fe(`Prefixed${t}`,r,e,{from:o=>g(o.slice(t.length)),to:o=>`${t}${o}`})},GE=t=>{let e=`EndsWith${t}`;return r=>V(e,r,o=>o.endsWith(t)?g():N({type:e,value:o,suffix:t}),rb)},YE=t=>{let e=`Includes${t}`;return r=>V(e,r,o=>o.includes(t)?g():N({type:e,value:o,substring:t}),ob)},XE=t=>{let e=`Excludes${t}`;return r=>V(e,r,o=>o.includes(t)?N({type:e,value:o,substring:t}):g(),nb)},pw=t=>e=>{let r=`MinLength${t}`;return V(r,e,o=>o.length>=t?g():N({type:r,value:o,min:t}),sb)},tl=pw(1)(lw),ia=t=>e=>{let r=`MaxLength${t}`;return V(r,e,o=>o.length<=t?g():N({type:r,value:o,max:t}),ib)},aa=ia(100)(tl),ZE=ia(1e3)(tl),eT=t=>{let e=`MaxUtf8ByteLength${t}`;return r=>V(e,r,o=>{let n=o.length;if(n<=t&&n*3>t){n=0;for(let s=0;s<o.length&&n<=t;s++){let i=o.charCodeAt(s);i<128?n+=1:i<2048?n+=2:(i&64512)===55296&&(o.charCodeAt(s+1)&64512)===56320?(n+=4,s++):n+=3}}return n<=t?g():N({type:e,value:o,max:t})},ab)},Or=t=>e=>{let r=`Length${t}`;return V(r,e,o=>o.length===t?g():N({type:r,value:o,exact:t}),cb)},rl=(t,e)=>{let r=t,o=e.source,n=e.flags,s=new RegExp(o,n);return i=>V(r,i,a=>(s.lastIndex=0,s.test(a)?g():N({type:r,value:a,source:o,flags:n})),lb)},ol=rl("UrlSafeString",/^[A-Za-z0-9_-]+$/u)(Y),fw={base64:{alphabet:"base64",omitPadding:!1},base64url:{alphabet:"base64url",omitPadding:!0}},nl=(t,e)=>{if(qc)return globalThis.Buffer.from(t).toString(e);if("toBase64"in globalThis.Uint8Array.prototype)return t.toBase64(fw[e]);let o=Array.from(t,s=>globalThis.String.fromCodePoint(s)).join(""),n=btoa(o);return e==="base64"?n:n.replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},sl=(t,e)=>{if(qc){let s=globalThis.Buffer.from(t,e);return new globalThis.Uint8Array(s)}if("fromBase64"in globalThis.Uint8Array)return globalThis.Uint8Array.fromBase64(t,fw[e]);let o=t;if(e==="base64url")for(o=t.replaceAll("-","+").replaceAll("_","/");o.length%4!==0;)o+="=";let n=atob(o);return globalThis.Uint8Array.from(n,s=>s.charCodeAt(0))},ca=V("Base64Url",Y,t=>{let e=We(()=>sl(t,"base64url"));return e.ok&&nl(e.value,"base64url")===t?g():N({type:"Base64Url",value:t})},ub),cr=t=>nl(t,"base64url"),la=t=>sl(t,"base64url"),tT=Fe("Uint8ArrayFromBase64Url",ca,pt,{from:t=>g(la(t)),to:cr}),hw=V("Base64",Y,t=>{let e=We(()=>sl(t,"base64"));return e.ok&&nl(e.value,"base64")===t?g():N({type:"Base64",value:t})},db),mw=t=>nl(t,"base64"),yw=t=>sl(t,"base64"),rT=Fe("Uint8ArrayFromBase64",hw,pt,{from:t=>g(yw(t)),to:mw}),gw=V("Hex",Y,t=>t.length%2===0&&/^[0-9a-f]*$/u.test(t)?g():N({type:"Hex",value:t}),pb),bw=t=>Ui(t),xw=t=>ji(t),oT=Fe("Uint8ArrayFromHex",gw,pt,{from:t=>g(xw(t)),to:bw}),nT=V("HexColor",Y,t=>/^#[0-9a-f]{6}$/u.test(t)?g():N({type:"HexColor",value:t}),fb),ww=V("Name",ol,t=>t.length<=64?g():N({type:"Name",value:t}),hb),sT=V("Email",Y,t=>/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/u.test(t)?g():N({type:"Email",value:t}),mb),iT=V("Hostname",Y,t=>t.length<=253&&/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/u.test(t)&&!/(?:^|\.)(?:\d+|0x[0-9a-f]*)$/u.test(t)?g():N({type:"Hostname",value:t}),yb),Zp=V("Ipv4Address",Y,t=>kw.test(t)?g():N({type:"Ipv4Address",value:t}),gb),ef=V("Ipv6Address",Y,t=>tf(t)===t?g():N({type:"Ipv6Address",value:t}),bb),aT=Fe("Ipv6AddressFromString",Y,ef,{from:t=>{let e=tf(t);return e===void 0?N({type:"Ipv6AddressFromString",value:t}):g(e)},to:t=>t},xb),Nw=$r("IpAddress",Y,t=>Zp.is(t)||ef.is(t)?g(t):N({type:"IpAddress",value:t}),wb),cT=Fe("IpAddressFromString",Y,Nw,{from:t=>{let e=t.includes(":")?tf(t):Zp.is(t)?t:void 0;return e===void 0?N({type:"IpAddressFromString",value:t}):g(e)},to:t=>t},Nb),kw=/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/u,tf=t=>{let e=t.lastIndexOf(":"),r=t.slice(e+1),o=t;if(r.includes(".")){if(!kw.test(r))return;let f=r.split(".").reduce((m,d)=>m*256+globalThis.Number(d),0);o=`${t.slice(0,e+1)}${(f>>>16).toString(16)}:${(f&65535).toString(16)}`}let n=o.split("::");if(n.length>2)return;let[s=[],i=[]]=n.map(f=>f===""?[]:f.split(":")),a=s.length+i.length;if((n.length===1?a!==8:a>7)||![...s,...i].every(f=>/^[0-9a-fA-F]{1,4}$/u.test(f)))return;let c=[...s,...Array.from({length:8-a},()=>"0"),...i].map(f=>globalThis.Number.parseInt(f,16));if(c.slice(0,5).every(f=>f===0)&&c[5]===65535)return`::ffff:${c[6]>>8}.${c[6]&255}.${c[7]>>8}.${c[7]&255}`;let l=0,h=1;for(let f=0;f<8;f++){let m=f;for(;c[m]===0;)m++;m-f>h&&(l=f,h=m-f)}let p=c.map(f=>f.toString(16));return h>1?`${p.slice(0,l).join(":")}::${p.slice(l+h).join(":")}`:p.join(":")},ua=V("Url",Y,t=>of(t)===t?g():N({type:"Url",value:t}),kb),rf=Fe("UrlFromString",Y,ua,{from:t=>{let e=of(t);return e===void 0?N({type:"UrlFromString",value:t}):g(e)},to:t=>t},Sb),Sw=V("HttpUrl",ua,t=>vw(t)?g():N({type:"HttpUrl",value:t}),vb),lT=Fe("HttpUrlFromString",Y,Sw,{from:t=>{let e=of(t);return e!==void 0&&vw(e)?g(e):N({type:"HttpUrlFromString",value:t})},to:t=>t},Eb),of=t=>{try{return new URL(t).href}catch{return}},vw=t=>t.startsWith("http://")||t.startsWith("https://"),uT=V("PhoneNumberE164",Y,t=>/^\+[1-9]\d{6,14}$/u.test(t)?g():N({type:"PhoneNumberE164",value:t}),Tb),dT=V("Iban",Y,t=>{if(!/^[A-Z]{2}(?!00|01|99)\d{2}[A-Z0-9]{11,30}$/u.test(t))return N({type:"Iban",value:t});let e=0;for(let r=4;r<t.length+4;r++){let o=t.charCodeAt(r%t.length);e=(o>=65?e*100+o-55:e*10+o-48)%97}return e===1?g():N({type:"Iban",value:t})},Ob),pT=V("Isbn",Y,t=>{if(!/^97(?:8\d|9[1-9])\d{9}$/u.test(t))return N({type:"Isbn",value:t});let e=0;for(let r=0;r<13;r++)e+=(t.charCodeAt(r)-48)*(r%2===0?1:3);return e%10===0?g():N({type:"Isbn",value:t})},Cb),nf=ww.orThrow("Name"),fT=$r("SimplePassword",Y,t=>t!==t.trim()?N({type:"SimplePassword",reason:"Untrimmed"}):t.length>64?N({type:"SimplePassword",reason:"TooLong"}):t.length<8?N({type:"SimplePassword",reason:"TooShort"}):g(t),Ab),hT=$r("Mnemonic",Y,t=>/^[a-z]+(?: [a-z]+)*$/u.test(t)&&Ng(t,Gi)?g(t):N({type:"Mnemonic"}),Ib),mT=t=>{let e=t,r=e,o=r[dt],n=Xe(o),s=r.is,i=r[Be],a=l=>l.ok?g(Tp(l.value)):l,c=l=>Op(l)&&s($c(l));return Ze("Redacted",r,(l,h)=>typeof l=="string"?a(n(l,h)):N({type:"Redacted"}),c,l=>c(l)?g(l):N({type:"Redacted"}),At(en(o,l=>Kc(l,a))),l=>$c(l),(l,h,p)=>l.type==="Redacted"?io("Redacted",l,Rb,p):i(l,h,p),{additionalProperties:{inner:e}})},co=V("Id",Y,t=>t.length===22&&ca.from.parent(t).ok?g():N({type:"Id",value:t}),Db),xt=(t,...e)=>cr(t.randomBytes.create(16)),Wn=(t,e,...r)=>{let o=Ac(t);return Ur(fs(e==null?o:Ic(lr(e),o)).slice(0,16))},yT=(t,...e)=>{let r=t.randomBytes.create(16),o=globalThis.BigInt(t.time.now());return r[0]=globalThis.Number(o>>40n&0xffn),r[1]=globalThis.Number(o>>32n&0xffn),r[2]=globalThis.Number(o>>24n&0xffn),r[3]=globalThis.Number(o>>16n&0xffn),r[4]=globalThis.Number(o>>8n&0xffn),r[5]=globalThis.Number(o&0xffn),r[6]=r[6]&15|112,r[8]=r[8]&63|128,cr(r)},ks=t=>{let e=t;return globalThis.Object.assign($r("TableId",Y,r=>co.from.parent(r).ok?g(r):N({type:"TableId",table:e,value:r}),Bb),{table:e})},sf=V("IdBytes",Or(16)(pt)),af=16,lr=t=>la(t),Ur=t=>cr(t),cf=V("Uuid",Y,t=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/u.test(t)?g():N({type:"Uuid",value:t}),Mb),gT=(t,...e)=>Ur(ji(t.replaceAll("-",""))),bT=t=>{let e=Ui(lr(t));return`${e.slice(0,8)}-${e.slice(8,12)}-${e.slice(12,16)}-${e.slice(16,20)}-${e.slice(20)}`},lf=t=>e=>{let r=`UuidV${t}`;return V(r,e,o=>o.charAt(14)===`${t}`&&"89ab".includes(o.charAt(19))?g():N({type:r,value:o,version:t}),Pb)},xT=lf(4)(cf),wT=lf(7)(cf),NT=V("Ulid",Y,t=>/^[0-7][0-9A-HJKMNP-TV-Z]{25}$/u.test(t)?g():N({type:"Ulid",value:t}),Wb),kT=(t,...e)=>{let r=new globalThis.Uint8Array(16),o=0,n=-2,s=0;for(let i of t)o=o<<5|Ew.indexOf(i),n+=5,n>=8&&(n-=8,r[s++]=o>>n,o&=(1<<n)-1);return Ur(r)},ST=t=>{let e="",r=0,o=2;for(let n of lr(t))for(r=r<<8|n,o+=8;o>=5;)o-=5,e+=Ew.charAt(r>>o),r&=(1<<o)-1;return e},Ew="0123456789ABCDEFGHJKMNPQRSTVWXYZ",Tw=V("Int64String",tl,t=>{let e=t.startsWith("-");if(t.length>(e?20:19)||!/^(?:0|-?[1-9]\d*)$/u.test(t))return N({type:"Int64String",value:t});let r=e?t.slice(1):t,o=e?"9223372036854775808":"9223372036854775807";return r.length<19||r<=o?g():N({type:"Int64String",value:t})},Kg),vT=Fe("Int64FromInt64String",Tw,Yx,{from:t=>g(globalThis.BigInt(t)),to:t=>globalThis.String(t)}),il=t=>V("NonNegative",t,e=>e>=0?g():N({type:"NonNegative",value:e}),Lb),Ow=il(ra),Ss=t=>V("Positive",t,e=>e>0?g():N({type:"Positive",value:e}),$b),ET=Ss(Ow),uf=t=>V("NonPositive",t,e=>e<=0?g():N({type:"NonPositive",value:e}),jb),Cw=uf(ra),df=t=>V("Negative",t,e=>e<0?g():N({type:"Negative",value:e}),zb),TT=df(Cw),Aw=t=>V("NonNaN",t,e=>globalThis.Number.isNaN(e)?N({type:"NonNaN",value:e}):g(),Xb),vs=Aw(ra),Iw=t=>V("Finite",t,e=>globalThis.Number.isFinite(e)?g():N({type:"Finite",value:e}),Zb),rn=Iw(vs),da=il(rn),OT=Ss(da),Rw=t=>V("Int",t,e=>globalThis.Number.isSafeInteger(e)?g():N({type:"Int",value:e}),_b),on=Rw(rn),Ee=il(on),Bt=Ee.orThrow(0),Jt=Ss(Ee),Dw=Fe("IntFromString",Y,on,{from:t=>/^-?\d+$/u.test(t)?g(globalThis.Number(t)):N({type:"IntFromString",value:t}),to:t=>globalThis.Object.is(t,-0)?"-0":globalThis.String(t)},Kb),CT=Fe("FiniteNumberFromString",Y,rn,{from:t=>/^-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/u.test(t)?g(globalThis.Number(t)):N({type:"FiniteNumberFromString",value:t}),to:t=>globalThis.Object.is(t,-0)?"-0":globalThis.String(t)},Qb),Ft=Jt.orThrow(1),AT=Jt.orThrow(9007199254740991),Bw=uf(on),IT=df(Bw),RT=t=>e=>{let r=`GreaterThan${t}`;return V(r,e,o=>o>t?g():N({type:r,value:o,min:t}),Jb)},DT=t=>e=>{let r=`GreaterThanOrEqualTo${t}`;return V(r,e,o=>o>=t?g():N({type:r,value:o,min:t}),Hb)},al=t=>e=>{let r=`LessThan${t}`;return V(r,e,o=>o<t?g():N({type:r,value:o,max:t}),Gb)},BT=V("Age",al(200)(Ee)),nn=t=>e=>{let r=`LessThanOrEqualTo${t}`;return V(r,e,o=>o<=t?g():N({type:r,value:o,max:t}),Yb)},Mw=V("Port",nn(65535)(Ee)),MT=Fe("PortFromString",Dw,Mw,{from:g,to:ye}),PT=V("Ratio",nn(1)(da)),pf=V("DecimalString",Y,t=>/^(?:0|-?(?:[1-9]\d*|(?:0|[1-9]\d*)\.\d*[1-9]))$/u.test(t)?g():N({type:"DecimalString",value:t}),zg),Pw=t=>V("NonNegativeDecimalString",t,e=>e[0]!=="-"?g():N({type:"NonNegativeDecimalString",value:e}),qb),Ww=Pw(pf),Lw=t=>V("PositiveDecimalString",t,e=>e!=="0"&&e[0]!=="-"?g():N({type:"PositiveDecimalString",value:e}),Ub),WT=Lw(Ww),qw=t=>V("NonPositiveDecimalString",t,e=>e==="0"||e[0]==="-"?g():N({type:"NonPositiveDecimalString",value:e}),Fb),$w=qw(pf),Uw=t=>V("NegativeDecimalString",t,e=>e[0]==="-"?g():N({type:"NegativeDecimalString",value:e}),Vb),LT=Uw($w),qT=t=>{let e=`MultipleOf${t}`,r=Wx(t);return o=>V(e,o,n=>{let s=!1;if(globalThis.Number.isFinite(n)){let i=Wx(n.toString()),a=Math.min(i.exponent,r.exponent),c=i.coefficient*10n**globalThis.BigInt(i.exponent-a),l=r.coefficient*10n**globalThis.BigInt(r.exponent-a);s=c%l===0n}return s?g():N({type:e,value:n,divisor:t})},ex)},Wx=t=>{let e=t.indexOf("e"),r=e===-1?t:t.slice(0,e),o=e===-1?0:globalThis.Number.parseInt(t.slice(e+1),10),n=r.indexOf("."),s=n===-1?0:r.length-n-1,i=globalThis.BigInt(r.replace(".","")),a=o-s;if(i===0n)return{coefficient:i,exponent:0};for(;i%10n===0n;)i/=10n,a++;return{coefficient:i,exponent:a}},pa=(t,e)=>r=>{let o=`Between${t}-${e}`;return V(o,r,n=>n>=t&&n<=e?g():N({type:o,value:n,min:t,max:e}),tx)},$T=V("Int32",pa(-2147483648,2147483647)(on)),UT=V("UInt32",nn(4294967295)(Ee)),jT=t=>e=>{let r=`GreaterThan${t}n`;return V(r,e,o=>o>t?g():N({type:r,value:o,min:t}),rx)},FT=t=>e=>{let r=`GreaterThanOrEqualTo${t}n`;return V(r,e,o=>o>=t?g():N({type:r,value:o,min:t}),ox)},zT=t=>e=>{let r=`LessThan${t}n`;return V(r,e,o=>o<t?g():N({type:r,value:o,max:t}),nx)},VT=t=>e=>{let r=`LessThanOrEqualTo${t}n`;return V(r,e,o=>o<=t?g():N({type:r,value:o,max:t}),sx)},_T=(t,e)=>r=>{let o=`Between${t}n-${e}n`;return V(o,r,n=>n>=t&&n<=e?g():N({type:o,value:n,min:t,max:e}),ix)},fa=t=>mf(t,GT),KT=new WeakMap,QT=(t,e,r)=>Array.isArray(t)?jw(t,e,r,!0):N({type:"Array",reason:{kind:"NotArray",value:t}}),JT=(t,e)=>{let r;for(let o=0;o<t.length;o++){let n=t[o],s=e(n);globalThis.Object.is(s,n)||(r??=ff(t,o)),r&&(r[o]=s)}return r??t},HT=(t,e)=>{if(!Array.isArray(t)||Reflect.ownKeys(t).length!==t.length+1)return!1;for(let r=0;r<t.length;r++){let o=globalThis.Object.getOwnPropertyDescriptor(t,r);if(o===void 0||!("value"in o)||!e(o.value))return!1}return!0},GT={name:"Array",typeSymbol:zp,typeByElement:KT,validate:QT,validateItems:(t,e,r)=>jw(t,e,r,!1),check:(t,e,r)=>Array.isArray(t)?zw("Array",t,e,r):{type:"Array",reason:{kind:"NotArray",value:t}},encode:JT,is:HT,formatError:ax},jw=(t,e,r,o)=>Fw("Array",t,e,r,o),Fw=(t,e,r,o,n)=>{let s=n?Vw(e,o):void 0,i;for(let a=0;(s===void 0||o.errors==="all")&&a<e.length;a++){let c;if(n){let h=globalThis.Object.getOwnPropertyDescriptor(e,a);if(h===void 0){if((s??=[]).push({kind:"Hole",index:a}),o.errors==="first")break;continue}if(!("value"in h)){if((s??=[]).push({kind:"Accessor",index:a}),o.errors==="first")break;continue}c=h.value}else c=e[a];let l=r(c,o,a);if(l.ok){if(s!==void 0)continue;globalThis.Object.is(l.value,c)||(i??=ff(e,a)),i&&(i[a]=l.value);continue}if((s??=[]).push({kind:"Element",index:a,error:l.error}),o.errors==="first")break}return s==null?g(i??e):N({type:t,reason:{kind:"Items",issues:s}})},zw=(t,e,r,o)=>{let n=Vw(e,o);for(let s=0;(n===void 0||o.errors==="all")&&s<e.length;s++){let i=globalThis.Object.getOwnPropertyDescriptor(e,s);if(i===void 0){if((n??=[]).push({kind:"Hole",index:s}),o.errors==="first")break;continue}if(!("value"in i)){if((n??=[]).push({kind:"Accessor",index:s}),o.errors==="first")break;continue}let a=r(i.value,o,s);if(a!==void 0&&((n??=[]).push({kind:"Element",index:s,error:a}),o.errors==="first"))break}return n===void 0?void 0:{type:t,reason:{kind:"Items",issues:n}}},Vw=(t,e)=>{let r,o=Reflect.ownKeys(t);for(let n=0;n<o.length;n++){let s=o[n];if(s!=="length"){if(typeof s=="string"){if(s===globalThis.String(n)&&n<t.length)continue;let i=globalThis.Number(s)>>>0;if(i<t.length&&globalThis.String(i)===s)continue}if((r??=[]).push({kind:"ExcessProperty",key:s}),e.errors==="first")break}}return r},ff=(t,e)=>{let r=kt(t.length);for(let o=0;o<e;o++)r[o]=t[o];return r},YT=t=>$r("NonEmptyArray",t,e=>e.length>0?g(e):N({type:"NonEmptyArray",value:e}),cx),XT=t=>V("Unique",t,e=>{let r=e,o=new Map,n=new Map;for(let s=0;s<r.length;s++){let i=r[s],a;if(typeof i=="object"&&i!==null){let c=Ho(i),l=c;if(c==="Uint8Array"){let p=i;l+=`${p.length},${Sp(p)}`}else if(c==="Array"){let p=i;for(let f=0;f<p.length;f++)l+=`,${Zi(p[f])}`}else if(c==="Set")for(let p of Array.from(i,Zi).toSorted())l+=`,${p}`;else if(c==="Map")for(let p of Array.from(i,([f,m])=>`${Zi(f)}:${Zi(m)}`).toSorted())l+=`,${p}`;else if(c==="Date")l+=globalThis.Date.prototype.getTime.call(i);else{let p=i;for(let f of globalThis.Object.keys(p).toSorted())l+=`,${f}:${Zi(p[f])}`}let h=n.get(l);a=h?.find(p=>as(r[p],i)),h===void 0?n.set(l,[s]):a===void 0&&h.push(s)}else{let c=globalThis.Object.is(i,-0)?ZT:i;a=o.get(c),a===void 0&&o.set(c,s)}if(a!==void 0)return N({type:"Unique",value:r,index:s,previousIndex:a})}return g()},lx),ZT=globalThis.Symbol(),Zi=t=>typeof t=="object"&&t!==null?Ho(t):globalThis.Object.is(t,-0)?"-0":`${typeof t}${globalThis.String(t)}`,hf=t=>mf(t,tO),mf=(t,e)=>{let r=t[e.typeSymbol],o=r!==void 0&&r.element===t?r:e.typeByElement.get(t);if(o)return o;let n=t[jt],s=n&&((y,b)=>e.check(y,n,b)),i=s?ys(s):(y,b=ce)=>e.validate(y,t.fromUnknown,b),a=s?i:(y,b=ce)=>e.validate(y,t[je],b),c=t.parent?mf(t.parent,e):null,l=t[dt].parent?en(t[dt].parent,y=>(b,x=ce)=>e.validateItems(b,y,x)):void 0,h=At(l),p=c?t[Ue].parent:t[Ue],f=p===ye?ye:y=>e.encode(y,p),m=jp(e.name,"Items",e.formatError,()=>t),d=Ze(e.name,c,i,y=>e.is(y,t.is),a,h,f,m,{additionalProperties:{element:t},check:s});return Reflect.set(t,e.typeSymbol,d)||e.typeByElement.set(t,d),d},eO=new WeakMap,tO={name:"Set",typeSymbol:Vp,typeByElement:eO,validate:(t,e,r)=>so(t,"[object Set]")?Lx(t,e,r,!0):N({type:"Set",reason:{kind:"NotSet",value:t}}),validateItems:(t,e,r)=>Lx(t,e,r,!1),check:(t,e,r)=>{if(!so(t,"[object Set]"))return{type:"Set",reason:{kind:"NotSet",value:t}};let o;for(let s of Reflect.ownKeys(t))if((o??=[]).push({kind:"ExcessProperty",key:s}),r.errors==="first")break;let n=0;for(let s of t){if(o!==void 0&&r.errors==="first")break;let i=e(s,r);i!==void 0&&(o??=[]).push({kind:"Element",index:n,error:i}),n++}return o===void 0?void 0:{type:"Set",reason:{kind:"Items",issues:o}}},encode:(t,e)=>{let r=!1,o=new Set;for(let n of t){let s=e(n);globalThis.Object.is(s,n)||(r=!0),o.add(s)}return r?o:t},is:(t,e)=>{if(!so(t,"[object Set]")||Reflect.ownKeys(t).length!==0)return!1;for(let r of t)if(!e(r))return!1;return!0},formatError:ux},Lx=(t,e,r,o)=>{let n,s=!1,i=new Set;if(o){for(let c of Reflect.ownKeys(t))if((n??=[]).push({kind:"ExcessProperty",key:c}),r.errors==="first")break}let a=0;for(let c of t){if(n!==void 0&&r.errors==="first")break;let l=e(c,r);l.ok?(globalThis.Object.is(l.value,c)||(s=!0),i.add(l.value)):(n??=[]).push({kind:"Element",index:a,error:l.error}),a++}return n===void 0?g(s?i:t):N({type:"Set",reason:{kind:"Items",issues:n}})},_w=(t,e)=>{let r=t,o=e,n=qx.get(r),s=n?.get(o);if(s)return s;let i=(B,T,S,L)=>so(B,"[object Map]")?$x(B,T,S,L,!0):N({type:"Map",reason:{kind:"NotMap",value:B}}),a=r[jt],c=o[jt],l=a&&c&&((B,T)=>{if(!so(B,"[object Map]"))return{type:"Map",reason:{kind:"NotMap",value:B}};let S=B,L,k=new Map;for(let D of Reflect.ownKeys(S))if((L??=[]).push({kind:"ExcessProperty",key:D}),T.errors==="first")break;let v=0;for(let[D,P]of S){if(L!==void 0&&T.errors==="first")break;let F=a(D,T);if(F!==void 0&&((L??=[]).push({kind:"Key",index:v,key:D,error:F}),T.errors==="first"))break;let O=c(P,T);if(O!==void 0&&((L??=[]).push({kind:"Value",index:v,key:D,error:O}),T.errors==="first"))break;if(F===void 0){let A=k.get(D);if(A===void 0)k.set(D,{index:v,key:D});else if((L??=[]).push({kind:"Collision",index:v,key:D,previousIndex:A.index,previousKey:A.key,outputKey:D}),T.errors==="first")break}v++}return L===void 0?void 0:{type:"Map",reason:{kind:"Entries",issues:L}}}),h=l?ys(l):(B,T=ce)=>i(B,r.fromUnknown,o.fromUnknown,T),p=l?h:(B,T=ce)=>i(B,r[je],o[je],T),f=Xe(r),m=Xe(o),d=f!==r||m!==o?_w(f,m):null,b=At(d?(B,T=ce)=>$x(B,Xe(r[dt]),Xe(o[dt]),T,!1):void 0),x=r[Ue],w=o[Ue],I=Ze("Map",d,h,B=>{if(!so(B,"[object Map]")||Reflect.ownKeys(B).length!==0)return!1;for(let[T,S]of B)if(!r.is(T)||!o.is(S))return!1;return!0},p,b,x===ye&&w===ye?ye:B=>{let T=new Map,S=!1;for(let[L,k]of B){let v=x(L),D=w(k);M(!T.has(v),"Map key Type encoding must not produce duplicate keys."),T.set(v,D),(!globalThis.Object.is(L,v)||!globalThis.Object.is(k,D))&&(S=!0)}return S?T:B},(B,T,S)=>{let L=B;if(L.reason.kind!=="Entries")return io("Map",B,Dp,S);let k=L.reason.issues,v=T==="first"?[k[0]]:k,D=[];for(let P of v){if(P.kind==="Key"||P.kind==="Value"){for(let F of(P.kind==="Key"?r:o)[Be](P.error,T,Bn(Bn(S,P.index),P.kind==="Key"?"key":"value")))D.push(F);continue}D.push({name:"Map",error:T==="first"?B:{type:"Map",reason:{kind:"Entries",issues:[P]}},path:Bn(S,P.kind==="ExcessProperty"?P.key:P.index),formatError:Dp})}return D},{additionalProperties:{key:r,value:o},check:l});return n===void 0&&(n=new WeakMap,qx.set(r,n)),n.set(o,I),I},qx=new WeakMap,$x=(t,e,r,o,n)=>{let s,i=new Map,a=new Map,c=!1;if(n){for(let h of Reflect.ownKeys(t))if((s??=[]).push({kind:"ExcessProperty",key:h}),o.errors==="first")break}let l=0;for(let[h,p]of t){if(s!==void 0&&o.errors==="first")break;let f=e(h,o);if(!f.ok&&((s??=[]).push({kind:"Key",index:l,key:h,error:f.error}),o.errors==="first"))break;let m=r(p,o);if(!m.ok&&((s??=[]).push({kind:"Value",index:l,key:h,error:m.error}),o.errors==="first"))break;if(!f.ok){l++;continue}let d=f.value,y=a.get(d);if(y!==void 0){if((s??=[]).push({kind:"Collision",index:l,key:h,previousIndex:y.index,previousKey:y.key,outputKey:d}),o.errors==="first")break;l++;continue}if(a.set(d,{index:l,key:h}),!m.ok){l++;continue}i.set(d,m.value),(!globalThis.Object.is(h,d)||!globalThis.Object.is(p,m.value))&&(c=!0),l++}return s===void 0?g(c?i:t):N({type:"Map",reason:{kind:"Entries",issues:s}})},rO=t=>e=>{let r=`MinSize${t}`;return V(r,e,o=>o.size>=t?g():N({type:r,value:o,min:t}),dx)},oO=t=>e=>{let r=`MaxSize${t}`;return V(r,e,o=>o.size<=t?g():N({type:r,value:o,max:t}),px)};function Kw(...t){return Qw(t)}var Qw=t=>{let e=t.length,r=(w,C,E)=>Array.isArray(w)?w.length!==e?N({type:"Tuple",reason:{kind:"InvalidLength",expected:e,actual:w.length}}):Lp(w,t,C,E,!0):N({type:"Tuple",reason:{kind:"NotArray",value:w}}),o=_p(t),n=o&&((w,C,E)=>o[E](w,C)),s=n&&((w,C)=>Array.isArray(w)?w.length!==e?{type:"Tuple",reason:{kind:"InvalidLength",expected:e,actual:w.length}}:zw("Tuple",w,n,C):{type:"Tuple",reason:{kind:"NotArray",value:w}}),i=s?ys(s):(w,C=ce)=>r(w,(E,R,I)=>E.fromUnknown(R,I),C),a=s?i:(w,C=ce)=>r(w,(E,R,I)=>E[je](R,I),C),c=t.map(Xe),h=c.some((w,C)=>w!==t[C])?Qw(c):null,p=t.map(w=>Xe(w[dt])),m=At(h?(w,C=ce)=>Lp(w,t,(E,R,I,B)=>p[B](R,I),C,!1):void 0),y=t.every(w=>w[Ue]===ye)?ye:w=>{let C;for(let E=0;E<e;E++){let R=w[E],I=t[E][Ue](R);globalThis.Object.is(I,R)||(C??=ff(w,E)),C&&(C[E]=I)}return C??w},b=w=>{if(!Array.isArray(w)||w.length!==e||Reflect.ownKeys(w).length!==e+1)return!1;for(let C=0;C<e;C++){let E=globalThis.Object.getOwnPropertyDescriptor(w,C);if(E===void 0||!("value"in E)||!t[C].is(E.value))return!1}return!0},x=jp("Tuple","Items",fx,w=>t[w.index]);return Ze("Tuple",h,i,b,a,m,y,x,{additionalProperties:{elements:t},check:s})},Lp=(t,e,r,o,n)=>Fw("Tuple",t,(s,i,a)=>r(e[a],s,i,a),o,n),de=ge("0","1","2","3","4","5","6","7","8","9"),fe=ge("1","2","3","4","5","6","7","8","9"),cl=ge("1","2","3","4","5","6"),ll=ge(fe,ee("1",de),ee("2",ge("0","1","2","3"))),ul=ge(fe,ee(ge("1","2","3","4"),de),ee("5",ge("0","1"))),Ln=ge(fe,ee(fe,de)),Es=ge(fe,ee(ge("1","2","3","4","5"),de)),yf=(t,e)=>(r,o,n)=>{let s=r;if(s.reason.kind!=="Properties")return io("Object",r,Uc,n);let i=s.reason.errors,a=Reflect.ownKeys(i);ke(a[0]);let c=o==="first"?1:a.length,l=[];for(let h=0;h<c;h++){let p=a[h],f=i[p],m=typeof p=="string"&&t!==void 0&&globalThis.Object.hasOwn(t,p)?t[p]:void 0;if(f.type==="ObjectPropertyAccess"||f.type==="ObjectMissingProperty"||f.type==="ObjectExcessProperty"||m===void 0&&e===void 0){let y=r;if(o==="all"){let b=pe();b[p]=f,y={type:"Object",reason:{kind:"Properties",errors:b}}}l.push({name:"Object",error:y,path:Bn(n,p),formatError:Uc});continue}let d=m===void 0?e[Be](f,o,n.slice()):Gw(m)[Be](f,o,Bn(n,p));if(c===1)return d;for(let y of d)l.push(y)}return l},qn=t=>{let e=globalThis.Object.getOwnPropertyNames(t);return globalThis.Object.getOwnPropertySymbols(t).length===0?e:Reflect.ownKeys(t)},Jw=t=>{let e=[];for(let r of Reflect.ownKeys(t)){if(typeof r!="string")break;e.push(r)}return e},Ux=(t,e)=>{if(t===null||typeof t!="object")return{type:"Object",reason:{kind:"NotObject",value:t}};if(!$e(t))return{type:"Object",reason:{kind:"UnexpectedPrototype",value:t}};let r;for(let o of qn(t)){let n;if(typeof o!="string")n={type:"ObjectExcessProperty"};else{let s=globalThis.Object.getOwnPropertyDescriptor(t,o);M(s!==void 0,"Object property descriptor is missing."),"value"in s?s.enumerable||(n={type:"ObjectPropertyAccess",reason:"NonEnumerable"}):n={type:"ObjectPropertyAccess",reason:"Accessor"}}if(n!==void 0&&(r??=pe(),r[o]=n,e.errors==="first"))break}return r===void 0?void 0:{type:"Object",reason:{kind:"Properties",errors:r}}},nO=sr("Object",(t,e=ce)=>{let r=Ux(t,e);return r===void 0?g(t):N(r)},Uc,{getTypeIssues:yf(),check:Ux});var Co=(t,e)=>{let r=t,o=e,n=(E,R,I,B)=>E===null||typeof E!="object"?N({type:"Record",reason:{kind:"NotRecord",value:E}}):$e(E)?jx(E,R,I,B):N({type:"Record",reason:{kind:"NotPlainRecord",value:E}}),s=r[jt],i=o[jt],a=s&&i&&((E,R)=>{if(E===null||typeof E!="object")return{type:"Record",reason:{kind:"NotRecord",value:E}};if(!$e(E))return{type:"Record",reason:{kind:"NotPlainRecord",value:E}};let I;for(let B of qn(E)){let T=s(B,R);if(T!==void 0&&((I??=[]).push({kind:"Key",key:B,error:T}),R.errors==="first"))break;let S=globalThis.Object.getOwnPropertyDescriptor(E,B);if(M(S!==void 0,"Record property descriptor is missing."),"value"in S){if(S.enumerable){let L=i(S.value,R);if(L!==void 0&&((I??=[]).push({kind:"Value",key:B,error:L}),R.errors==="first"))break}else if((I??=[]).push({kind:"NonEnumerable",key:B}),R.errors==="first")break}else if((I??=[]).push({kind:"Accessor",key:B}),R.errors==="first")break}return I===void 0?void 0:{type:"Record",reason:{kind:"Entries",issues:I}}}),c=a?ys(a):(E,R=ce)=>n(E,r.fromUnknown,o.fromUnknown,R),l=a?c:(E,R=ce)=>n(E,r[je],o[je],R),h=Xe(r),p=Xe(o),f=h!==r||p!==o?Co(h,p):null,d=At(f?(E,R=ce)=>jx(E,Xe(r[dt]),Xe(o[dt]),R):void 0),y=r[Ue],b=o[Ue],x=y===ye&&b===ye?ye:E=>{let R=pe(),I=!1;for(let B of globalThis.Object.keys(E)){let T=E[B],S=y(B),L=b(T);M(!globalThis.Object.hasOwn(R,S),"Record key Type encoding must not produce duplicate keys."),R[S]=L,(B!==S||!globalThis.Object.is(T,L))&&(I=!0)}return I?R:E},w=E=>{if(E===null||typeof E!="object"||!$e(E))return!1;let R=globalThis.Object.getOwnPropertySymbols(E).length!==0,I=R?Jw(E):globalThis.Object.getOwnPropertyNames(E);for(let B=0;B<I.length;B++){let T=I[B];if(!r.is(T))return!1;let S=globalThis.Object.getOwnPropertyDescriptor(E,T);if(S===void 0||!("value"in S)||!S.enumerable||!o.is(S.value))return!1}return!R},C=jp("Record","Entries",hx,E=>E.kind==="Key"?r:o);return Ze("Record",f,c,w,l,d,x,C,{additionalProperties:{key:r,value:o},check:a})},jx=(t,e,r,o)=>{let n,s=pe(),i=pe(),a=!1;for(let c of qn(t)){let l=e(c,o);if(!l.ok&&((n??=[]).push({kind:"Key",key:c,error:l.error}),o.errors==="first"))break;let h=globalThis.Object.getOwnPropertyDescriptor(t,c);M(h!==void 0,"Record property descriptor is missing.");let p,f=!1;if("value"in h){if(h.enumerable)p=h.value,f=!0;else if((n??=[]).push({kind:"NonEnumerable",key:c}),o.errors==="first")break}else if((n??=[]).push({kind:"Accessor",key:c}),o.errors==="first")break;let m=f?r(p,o):void 0;if(m!==void 0&&!m.ok&&((n??=[]).push({kind:"Value",key:c,error:m.error}),o.errors==="first"))break;if(!l.ok)continue;let d=l.value;if(globalThis.Object.hasOwn(i,d)){if((n??=[]).push({kind:"Collision",key:c,previousKey:i[d],outputKey:d}),o.errors==="first")break;continue}i[d]=c,!(!f||!m?.ok)&&(s[d]=m.value,(c!==d||!globalThis.Object.is(p,m.value))&&(a=!0))}return n==null?g(a?s:t):N({type:"Record",reason:{kind:"Entries",issues:n}})},sO=t=>e=>{let r=`MinEntries${t}`;return V(r,e,o=>{let n=o;return globalThis.Object.keys(n).length>=t?g():N({type:r,value:n,min:t})},mx)},iO=t=>e=>{let r=`MaxEntries${t}`;return V(r,e,o=>{let n=o;return globalThis.Object.keys(n).length<=t?g():N({type:r,value:n,max:t})},yx)},Hw=t=>gs(t),dl=globalThis.Symbol(),gs=t=>({type:t,[dl]:!0});function qp(t,e,{strategy:r}={}){let o=dl in t,n=o?t.type:t;M(n.is(e),`withDefault value must be an Output of ${n.name}.`);let s=new Set([...o?["missing"]:[],...n.is(null)?["null"]:[],...n.is(void 0)?["undefined"]:[]]),i=sr("DefaultSupplied",d=>r===void 0&&globalThis.Object.is(d,e)||d!=null&&n.is(d)?g(d):N({type:"DefaultValue"}),()=>"The value must be a non-nullish Output of its Type or, in replacement mode, the configured default."),a=sr("DefaultValue",d=>n.is(d)&&(globalThis.Object.is(d,e)||Up.is(e)&&Up.is(d)&&as(d,e))?g(d):N({type:"DefaultValue"}),()=>"A preserved default must equal the configured default value."),c=r===void 0?i:wf("defaultUsed",bt({value:i,defaultUsed:ar(!1)}),bt({value:a,defaultUsed:ar(!0),original:sr("DefaultOriginal",d=>typeof d=="string"&&s.has(d)?g(d):N({type:"DefaultOriginal"}),()=>"The original absence must be handled by this default declaration.")})),l=c[Be],p={output:{...c,[je]:(d,y)=>{let b=c[je](d,y);return b.ok?b:N({type:"WithDefault",outputError:b.error})},[Be]:(d,y,b)=>d.type==="WithDefault"&&"outputError"in d?l(d.outputError,y,b):n[Be](d,y,b),[jt]:void 0,[ms]:void 0},createObject:aO,partial:d=>gs(r==="preserve"?qp(d,e,{strategy:r}):qp(d,e)),decode:d=>{let y=d===zc?"missing":d===null?"null":d===void 0?"undefined":void 0,b=y===void 0?d:e;return r===void 0?b:y===void 0?{value:b,defaultUsed:!1}:{value:b,defaultUsed:!0,original:y}},encode:d=>{if(r===void 0)return d;let y=d;if(!y.defaultUsed)return y.value;switch(y.original){case"missing":return zc;case"null":return null;case"undefined":return}}};if(o)return{type:n,value:e,strategy:r??"replace",[tn]:p};let f=d=>g(p.decode(d)),m=en(n[dt],d=>(y,b)=>vo(d(y,b),f));return Ze("WithDefault",n,(d,y)=>vo(n.fromUnknown(d,y),f),p.output.is,p.output[je],At(m),p.encode,p.output[Be])}var tn=globalThis.Symbol(),zc=globalThis.Symbol();function bt(t,e){return Tr(pl(t),e)}var Tr=(t,e,r=globalThis.Object.keys(t))=>{let o=t,n=r.length,s=kt(n),i=kt(n);for(let k=0;k<n;k++){let v=o[r[k]];if(ha(v))return v[tn].createObject(t,e);let D=fl(v),P=D?v.type:v;s[k]=P,i[k]=D}let a=s.map(k=>k[jt]),c=e?.value[jt],l=!a.includes(void 0)&&(e===void 0||c!==void 0),h,p=(k,v,D)=>{if(k===null||typeof k!="object")return N({type:"Object",reason:{kind:"NotObject",value:k}});let P=k;if(!$e(P))return N({type:"Object",reason:{kind:"UnexpectedPrototype",value:P}});let F=qn(P),O=l?void 0:kt(n+F.length),A,_,W=F.length===n;for(let j=0;(A===void 0||v.errors!=="first")&&j<n;j++){let U=r[j];W&&F[j]!==U&&(W=!1);let Z=globalThis.Object.getOwnPropertyDescriptor(P,U);O!==void 0&&(O[j]=Z);let ne;if(Z===void 0){if(i[j])continue;ne={type:"ObjectMissingProperty"}}else if(!("value"in Z))ne={type:"ObjectPropertyAccess",reason:"Accessor"};else if(!Z.enumerable)ne={type:"ObjectPropertyAccess",reason:"NonEnumerable"};else{let Ne=Z.value,me=a[j];if(me!==void 0){let ve=me(Ne,v);if(ve===void 0){_!==void 0&&A===void 0&&(_[U]=Ne);continue}ne=ve}else{let ve=D?s[j][je](Ne,v):s[j].fromUnknown(Ne,v);if(ve.ok){if(A!==void 0||D)continue;if(_===void 0){if(globalThis.Object.is(ve.value,Ne))continue;_=f(O,F,j)}_[U]=ve.value;continue}ne=ve.error}}A??=pe(),A[U]=ne}let Q=W?0:F.length;for(let j=0;(A===void 0||v.errors!=="first")&&j<Q;j++){let U=F[j],Z=n+j;if(typeof U=="string"&&(j<n&&U===r[j]||globalThis.Object.hasOwn(o,U))){O!==void 0&&(O[Z]=void 0);continue}let ne=globalThis.Object.getOwnPropertyDescriptor(P,U);M(ne!==void 0,"Object property is missing."),O!==void 0&&(O[Z]=ne);let Ne;if(e===void 0)Ne={type:"ObjectExcessProperty"};else if(typeof U!="string")Ne=Mp({kind:"Key",key:U,error:{type:"TypeOf",expected:"String",value:U}});else if(!("value"in ne))Ne={type:"ObjectPropertyAccess",reason:"Accessor"};else if(!ne.enumerable)Ne={type:"ObjectPropertyAccess",reason:"NonEnumerable"};else{let me=ne.value,ve;if(c!==void 0){let Ke=c(me,v);if(Ke===void 0){_!==void 0&&A===void 0&&(_[U]=me);continue}ve=Ke}else{let Ke=D?e.value[je](me,v):e.value.fromUnknown(me,v);if(Ke.ok){if(A!==void 0||D)continue;if(_===void 0){if(globalThis.Object.is(Ke.value,me))continue;_=f(O,F,Z)}_[U]=Ke.value;continue}ve=Ke.error}Ne=Mp({kind:"Value",key:U,error:ve})}A??=pe(),A[U]=Ne}return A!==void 0?N({type:"Object",reason:{kind:"Properties",errors:A}}):_===void 0?void 0:g(_)},f=(k,v,D)=>{let P=globalThis.Object.create(null);for(let F=0;F<D;F++){let O=k[F];O!==void 0&&(P[F<n?r[F]:v[F-n]]=O.value)}return P},m=l?(k,v)=>{let D=p(k,v,!1);return D?.ok===!1?D.error:void 0}:void 0,d=(k,v=ce)=>p(k,v,!1)??g(k),y=l?d:(k,v=ce)=>p(k,v,!0)??g(k),b=!1,x=e===void 0||e.value[Ue]===ye;for(let k=0;k<n;k++){let v=s[k];v[Ue]!==ye&&(x=!1),v.parent!=null&&(b=!0)}let w=null;if(b||e?.parent){let k=pe();for(let v=0;v<n;v++){let D=Xe(s[v]);k[r[v]]=i[v]?Hw(D):D}w=Tr(k,e?.parent??e,r)}let C,E=e?Xe(e.value[dt]):void 0,I=At(w?(k,v=ce)=>{let D=C??=s.map(O=>Xe(O[dt])),P,F;for(let O=0;O<n;O++){let A=r[O];if(!globalThis.Object.hasOwn(k,A))continue;let _=k[A],W=D[O](_,v);if(W.ok){globalThis.Object.is(W.value,_)||((F??=pe(k))[A]=W.value);continue}if((P??=pe())[A]=W.error,v.errors==="first")break}if(E!==void 0&&(P===void 0||v.errors==="all"))for(let O of globalThis.Object.keys(k)){if(globalThis.Object.hasOwn(o,O))continue;let A=k[O],_=E(A,v);if(_.ok){globalThis.Object.is(_.value,A)||((F??=pe(k))[O]=_.value);continue}if((P??=pe())[O]=Mp({kind:"Value",key:O,error:_.error}),v.errors==="first")break}return P===void 0?g(F??k):N({type:"Object",reason:{kind:"Properties",errors:P}})}:void 0),B=x?ye:k=>{let v;for(let D=0;D<n;D++){let P=r[D];if(!globalThis.Object.hasOwn(k,P))continue;let F=k[P],O=s[D][Ue](F);globalThis.Object.is(O,F)||((v??=pe(k))[P]=O)}if(e)for(let D of globalThis.Object.keys(k)){if(globalThis.Object.hasOwn(o,D))continue;let P=k[D],F=e.value[Ue](P);globalThis.Object.is(P,F)||((v??=pe(k))[D]=F)}return v??k},T=k=>{let v=h??=s.map(_x);for(let D=0;D<n;D++){let P=globalThis.Object.getOwnPropertyDescriptor(k,r[D]);if(P===void 0){if(!i[D])return!1;continue}if(!("value"in P)||!P.enumerable||!v[D](P.value))return!1}return!0},S=e===void 0?k=>{if(k===null||typeof k!="object"||!$e(k)||!T(k))return!1;let v=globalThis.Object.getOwnPropertyNames(k);for(let D=0;D<v.length;D++){let P=v[D];if(!(D<n&&P===r[D])&&!globalThis.Object.hasOwn(o,P))return!1}return globalThis.Object.getOwnPropertySymbols(k).length===0}:k=>{if(k===null||typeof k!="object"||!$e(k)||!T(k))return!1;let v=globalThis.Object.getOwnPropertySymbols(k).length!==0,D=v?Jw(k):globalThis.Object.getOwnPropertyNames(k);for(let P=0;P<D.length;P++){let F=D[P];if(P<n&&F===r[P]||globalThis.Object.hasOwn(o,F))continue;let O=globalThis.Object.getOwnPropertyDescriptor(k,F);if(O===void 0||!("value"in O)||!O.enumerable||!e.value.is(O.value))return!1}return!v},L=yf(o,e);return Ze("Object",w,d,S,y,I,B,L,{additionalProperties:e?{props:o,record:e}:{props:o},check:m})},aO=(t,e)=>{let r=pe(),o=pe(),n=new Map;for(let[f,m]of globalThis.Object.entries(t))if(ha(m)){let d=m;r[f]=gs(d.type),o[f]=d[tn].output,n.set(f,d[tn])}else{r[f]=m;let d=Gw(m),y=sr(d.name,d[je],d.formatError,{getTypeIssues:d[Be]});o[f]=dl in m?gs(y):y}let s=Tr(r,e),i=Xe(s),a=Tr(o,e),c=f=>{let m=pe(f);for(let[d,y]of n)m[d]=y.decode(globalThis.Object.hasOwn(m,d)?m[d]:zc);return g(m)},l=Xe(s[dt]),h=(f,m)=>vo(l(f,m),c),p=f=>{let m=pe(f);for(let[d,y]of n){let b=y.encode(m[d]);b===zc?delete m[d]:m[d]=b}return s[Ue](m)};return Ze("Object",i,(f,m)=>vo(s.fromUnknown(f,m),c),a.is,a[je],At(h),p,yf(t,e),{additionalProperties:e?{props:t,record:e}:{props:t}})},pl=(t,e=pe())=>{let r="Object schema properties must be own string-keyed data properties.";M($e(t),r);for(let o of qn(t)){let n=globalThis.Object.getOwnPropertyDescriptor(t,o);M(typeof o=="string"&&n!==void 0&&"value"in n,r),e[o]=n.value}return e},fl=t=>dl in t,ha=t=>tn in t,Gw=t=>ha(t)?t[tn].output:fl(t)?t.type:t,Mp=t=>({type:"Record",reason:{kind:"Entries",issues:[t]}}),cO=(t,...e)=>{let r=pl(t),o=pe();for(let n of globalThis.Object.keys(r)){let s=r[n];o[n]=ha(s)?s[tn].partial(s.type):fl(s)?s:gs(s)}return Tr(o)},lO=(t,...e)=>{let r=pl(t),o=pe();for(let n of globalThis.Object.keys(r)){let s=r[n];if(fl(s)||ha(s)){o[n]=s;continue}o[n]=xE(s)&&s.members.some(i=>i.name==="Literal"&&"expected"in i&&i.expected===null)?gs(s):s}return Tr(o)},uO=(t,...e)=>{let r=pe(),o=t;for(let n of globalThis.Object.keys(t.props))e.includes(n)||(r[n]=t.props[n]);return Tr(r,o.record)},gf=t=>e=>{let r=t,o=e,n=pe(),s=new Map,i=new Map;for(let f of globalThis.Object.keys(e.props)){M(r.is(f),`Invalid object schema key ${q(f)} for ${t.name}.`);let m=r[Ue](f);M(!s.has(m),`Duplicate encoded object key ${q(m)}.`);let d=r.fromUnknown(m,ce);M(d.ok&&d.value===f,"An object key codec must decode its encoding to the declared key."),n[m]=e.props[f],s.set(m,f),i.set(f,m)}let a=Tr(n),c=(f,m=ce)=>{let d=a.fromUnknown(f,m);if(!d.ok)return N({type:"ObjectKeys",error:d.error});let y=pe();for(let[b,x]of globalThis.Object.entries(d.value))y[s.get(b)]=x;return g(y)},l=f=>{let m=o[Ue](f),d=pe();for(let[y,b]of globalThis.Object.entries(m))d[i.get(y)]=b;return d},h=(f,m)=>{let d=o[je](f,m);return d.ok?d:N({type:"ObjectKeys",outputError:d.error})},p=(f,m,d)=>"outputError"in f?o[Be](f.outputError,m,d):a[Be](f.error,m,d);return Ze("ObjectKeys",ir,c,o.is,h,At(c),l,p,{additionalProperties:{key:t,output:e}})};function bf(t,e){return wf("ok",Tr({ok:ar(!0),value:t}),Tr({ok:ar(!1),error:e}))}var xf=bf(ir,ir);function sn(t,e={},r){M(!globalThis.Object.hasOwn(e,"type"),'The "type" schema property is reserved by typed.');let o=pe();return o.type=ar(t),Tr(pl(e,o),r)}function Yw(t,e,r){let o=ge(e,Tr({type:ar("Done"),done:r}));return bf(t,o)}var dO=Yw(ir,ir,ir);function wf(...t){let e=typeof t[0]=="string",r=e?t[0]:"type",o=e?t.slice(1):t,n=[],s=new Map;for(let T of o){let S=T.props[r].expected;n.push(S),s.set(S,T)}let i=T=>{if(T===null||typeof T!="object")return N({type:"DiscriminatedUnion",reason:{kind:"Object",error:{type:"Object",reason:{kind:"NotObject",value:T}}}});if(!$e(T))return N({type:"DiscriminatedUnion",reason:{kind:"Object",error:{type:"Object",reason:{kind:"UnexpectedPrototype",value:T}}}});let S=T,L=globalThis.Object.getOwnPropertyDescriptor(S,r),k;if(L===void 0){if(r in S)return N({type:"DiscriminatedUnion",reason:{kind:"PropertyAccess",key:r,reason:"Inherited"}});k=void 0}else if("value"in L)if(L.enumerable)k=L.value;else return N({type:"DiscriminatedUnion",reason:{kind:"PropertyAccess",key:r,reason:"NonEnumerable"}});else return N({type:"DiscriminatedUnion",reason:{kind:"PropertyAccess",key:r,reason:"Accessor"}});let v=s.get(k);return v===void 0?N({type:"DiscriminatedUnion",reason:{kind:"Discriminator",key:r,value:k,expected:n}}):g(v)},a=(T,S)=>({type:"DiscriminatedUnion",reason:{kind:"Member",discriminator:T.props[r].expected,error:S}}),c=(T,S)=>S.ok?S:N(a(T,S.error)),l=(T,S=ce,L,k)=>{let v=i(T);if(!v.ok)return v;let D=v.value,P=L?D.parent:D;return c(D,k?P[je](T,S):P.fromUnknown(T,S))},h=T=>{if(T===null||typeof T!="object")return;let S=globalThis.Object.getOwnPropertyDescriptor(T,r);return S!==void 0&&"value"in S?s.get(S.value):void 0},p=T=>s.get(Reflect.get(T,r)),f=gx,m=(T,S,L)=>{let k=T;if(k.reason.kind==="Member"){let v=k.reason,D=s.get(v.discriminator);return ke(D),D[Be](v.error,S,L)}return k.reason.kind==="PropertyAccess"||k.reason.kind==="Discriminator"?io("DiscriminatedUnion",k,f,Bn(L,k.reason.key)):io("DiscriminatedUnion",T,f,L)},x=Ze("DiscriminatedUnion",null,(T,S)=>l(T,S,!0,!1),T=>h(T)?.parent.is(T)??!1,(T,S)=>l(T,S,!0,!0),g,T=>p(T).parent[Ue](T),m,{additionalProperties:{key:r,members:o}}),w=_p(o)&&((T,S)=>{let L=i(T);if(!L.ok)return L.error;let k=L.value,v=k[jt](T,S);return v===void 0?void 0:a(k,v)}),C=(T,S)=>l(T,S,!1,!1),E=(T,S)=>l(T,S,!1,!0),I=At((T,S=ce)=>{let L=p(T),k=L[dt].parent(T,S);return c(L,k)});return Ze("DiscriminatedUnion",x,C,T=>h(T)?.is(T)??!1,E,I,T=>p(T)[Ue](T),m,{additionalProperties:{key:r,members:o},check:w})}function pO(t){let e={state:"unresolved"},r=()=>{switch(e.state){case"resolved":return e;case"failed":throw e.error;case"resolving":M(!1,"A Lazy Type definition must not resolve itself while it is being created.");case"unresolved":{e={state:"resolving"};try{let h=t();M(!Dn.has(h),"A Lazy Type definition must return a non-Lazy Type.");let p=h;for(;p.parent;)p=p.parent,M(!Dn.has(p),"A Lazy Type definition must not use a Lazy Type in its parent chain.");$p(h);let f={state:"resolved",target:h,targetFromInput:Xe(h[dt]),root:p};return e=f,f}catch(h){throw e={state:"failed",error:h},h}}}},s=Ze("Lazy",null,(h,p=ce)=>r().root.fromUnknown(h,p),h=>r().root.is(h),(h,p)=>r().root[je](h,p),g,h=>r().root[Ue](h),(h,p,f)=>r().root[Be](h,p,f)),i=(h,p=ce)=>r().target.fromUnknown(h,p),c=At((h,p=ce)=>r().targetFromInput(h,p)),l=Ze("Lazy",s,i,h=>r().target.is(h),(h,p)=>r().target[je](h,p),c,h=>r().target[Ue](h),(h,p,f)=>r().target[Be](h,p,f));return Dn.add(s),Dn.add(l),l}var Dn=new WeakSet,$p=t=>{for(;;){if(M(!Dn.has(t),"A Lazy Type definition must place every Lazy Type behind a structural boundary."),"members"in t&&Array.isArray(t.members))for(let e of t.members)$p(e);if("output"in t&&$p(t.output),!t.parent)return;t=t.parent}},fO=globalThis.Object.freeze([]),Lr=t=>{if(t===null)return fO;let e=[],r=t;for(;r!==null;)e.push(r.key),r=r.parent;return e.reverse(),globalThis.Object.freeze(e)},Eo=(t,e)=>({parent:t,key:e}),jc=(t,e=ce)=>{let r=[{value:t,path:null}],o=new WeakSet,n,s=i=>((n??=[]).push(i),e.errors==="first");for(;r.length>0;){let i=r.pop(),{path:a,value:c}=i;if(c==null||typeof c=="string"||typeof c=="number"||typeof c=="bigint"||typeof c=="boolean")continue;if(typeof c!="object"){if(s({kind:"InvalidType",path:Lr(a),value:c}))break;continue}if(o.has(c))continue;let l=[],h=Ho(c);if(h==="Array"){let p=c,f=Reflect.ownKeys(p);for(let m=0;m<f.length;m++){let d=f[m];if(d!=="length"){if(typeof d=="string"){if(d===globalThis.String(m)&&m<p.length)continue;let y=globalThis.Number(d)>>>0;if(y<p.length&&globalThis.String(y)===d)continue}if(s({kind:"ExcessProperty",path:Lr(Eo(a,d)),container:"Array"}))break}}if(n!==void 0&&e.errors==="first")break;for(let m=0;m<p.length;m++){let d=Eo(a,m),y=globalThis.Object.getOwnPropertyDescriptor(p,m);if(y===void 0){if(s({kind:"Hole",path:Lr(d)}))break;continue}if(!("value"in y)){if(s({kind:"Accessor",path:Lr(d)}))break;continue}l.push({value:y.value,path:d})}}else if(h==="Object")for(let p of qn(c)){let f=Eo(a,p);if(typeof p=="symbol"){if(s({kind:"SymbolProperty",path:Lr(f)}))break;continue}let m=globalThis.Object.getOwnPropertyDescriptor(c,p);if(!("value"in m)){if(s({kind:"Accessor",path:Lr(f)}))break;continue}if(!m.enumerable){if(s({kind:"NonEnumerable",path:Lr(f)}))break;continue}l.push({value:m.value,path:f})}else if(h==="Date"){o.add(c);continue}else if(h==="Uint8Array"){try{globalThis.Uint8Array.prototype.values.call(c)}catch{if(s({kind:"InvalidUint8Array",path:Lr(a),value:c}))break}o.add(c);continue}else if(h==="Set"){for(let f of Reflect.ownKeys(c))if(s({kind:"ExcessProperty",path:Lr(Eo(a,f)),container:"Set"}))break;if(n!==void 0&&e.errors==="first")break;let p=0;for(let f of c)l.push({value:f,path:Eo(a,p++)})}else if(h==="Map"){for(let f of Reflect.ownKeys(c))if(s({kind:"ExcessProperty",path:Lr(Eo(a,f)),container:"Map"}))break;if(n!==void 0&&e.errors==="first")break;let p=0;for(let[f,m]of c){let d=Eo(a,p++);l.push({value:f,path:Eo(d,"key")}),l.push({value:m,path:Eo(d,"value")})}}else if(s({kind:"UnexpectedPrototype",path:Lr(a),container:"Object",value:c}))break;if(n!==void 0&&e.errors==="first")break;o.add(c);for(let p=l.length-1;p>=0;p--)r.push(l[p])}return n===void 0?g(t):N({type:"Data",reason:{kind:"Issues",issues:globalThis.Object.freeze(n)}})},hO=(t,e,r)=>{let o=t;return(e==="first"?[o.reason.issues[0]]:o.reason.issues).map(s=>({name:"Data",error:e==="first"?t:{type:"Data",reason:{kind:"Issues",issues:[s]}},path:r.length===0?s.path:[...r,...s.path],formatError:bx}))},Up=Ze("Data",null,jc,t=>jc(t).ok,jc,g,ye,hO,{check:(t,e)=>{let r=jc(t,e);return r.ok?void 0:r.error}}),mO=globalThis.Object.freeze([]),qr=t=>{if(t===null)return mO;let e=[],r=t;for(;r!==null;)e.push(r.key),r=r.parent;return e.reverse(),globalThis.Object.freeze(e)},Pp=(t,e)=>({parent:t,key:e}),ea=(t,e=ce)=>{let r=[{kind:"Value",value:t,path:null}],o=new WeakMap,n,s=i=>((n??=[]).push(i),e.errors==="first");for(;r.length>0;){let i=r.pop();if(i.kind==="Leave"){o.delete(i.value);continue}let{path:a,value:c}=i;if(c===null||typeof c=="string"||typeof c=="boolean")continue;if(typeof c=="number"){if(!globalThis.Number.isFinite(c)&&s({kind:"NonFiniteNumber",path:qr(a),value:c}))break;continue}if(typeof c!="object"){if(s({kind:"InvalidType",path:qr(a),value:c}))break;continue}let l=Array.isArray(c);if(!l&&!$e(c)){if(s({kind:"UnexpectedPrototype",path:qr(a),container:"Object",value:c}))break;continue}if(o.has(c)){if(s({kind:"CircularReference",path:qr(a),ancestorPath:qr(o.get(c))}))break;continue}let h=[];if(l){let p=Reflect.ownKeys(c);for(let f=0;f<p.length;f++){let m=p[f];if(m!=="length"){if(typeof m=="string"){if(m===globalThis.String(f)&&f<c.length)continue;let d=globalThis.Number(m)>>>0;if(d<c.length&&globalThis.String(d)===m)continue}if(s({kind:"ExcessProperty",path:qr(Pp(a,m))}))break}}if(n!==void 0&&e.errors==="first")break;for(let f=0;f<c.length;f++){let m=Pp(a,f),d=globalThis.Object.getOwnPropertyDescriptor(c,f);if(d===void 0){if(s({kind:"Hole",path:qr(m)}))break;continue}if(!("value"in d)){if(s({kind:"Accessor",path:qr(m)}))break;continue}h.push({kind:"Value",value:d.value,path:m})}}else for(let p of qn(c)){let f=Pp(a,p);if(typeof p=="symbol"){if(s({kind:"SymbolProperty",path:qr(f)}))break;continue}let m=globalThis.Object.getOwnPropertyDescriptor(c,p);if(!("value"in m)){if(s({kind:"Accessor",path:qr(f)}))break;continue}if(!m.enumerable){if(s({kind:"NonEnumerable",path:qr(f)}))break;continue}h.push({kind:"Value",value:m.value,path:f})}if(n!==void 0&&e.errors==="first")break;o.set(c,a),r.push({kind:"Leave",value:c});for(let p=h.length-1;p>=0;p--)r.push(h[p])}return n===void 0?g(t):N({type:"JsonValue",reason:{kind:"Issues",issues:globalThis.Object.freeze(n)}})},yO=(t,e,r)=>{let o=t;return(e==="first"?[o.reason.issues[0]]:o.reason.issues).map(s=>({name:"JsonValue",error:e==="first"?t:{type:"JsonValue",reason:{kind:"Issues",issues:[s]}},path:r.length===0?s.path:[...r,...s.path],formatError:xx}))},hl=t=>JSON.parse(t),Xw=t=>{let e=We(()=>hl(t));return e.ok&&ea(e.value).ok?g(e.value):N({type:"Json",value:t})},Zw=t=>{let e=[],r=[{kind:"Value",value:t}];for(;r.length>0;){let o=r.pop();if(o.kind==="Text"){e.push(o.value);continue}let n=o.value;if(n===null){e.push("null");continue}switch(typeof n){case"string":e.push(JSON.stringify(n));break;case"number":e.push(globalThis.Object.is(n,-0)?"-0":globalThis.String(n));break;case"boolean":e.push(n?"true":"false");break;case"object":{if(Array.isArray(n)){let a=n;e.push("["),r.push({kind:"Text",value:"]"});for(let c=a.length-1;c>=0;c--)r.push({kind:"Value",value:a[c]}),c>0&&r.push({kind:"Text",value:","});break}let s=n,i=globalThis.Object.keys(s);e.push("{"),r.push({kind:"Text",value:"}"});for(let a=i.length-1;a>=0;a--){let c=i[a];r.push({kind:"Value",value:s[c]}),r.push({kind:"Text",value:":"}),r.push({kind:"Text",value:JSON.stringify(c)}),a>0&&r.push({kind:"Text",value:","})}break}}}return e.join("")},ma=Ze("JsonValue",null,ea,t=>ea(t).ok,ea,g,ye,yO,{check:(t,e)=>{let r=ea(t,e);return r.ok?void 0:r.error}}),gO=fa(ma),bO=Co(Y,ma),Mn=V("Json",Y,t=>{let e=Xw(t);return e.ok?g():e},wx),Nf=t=>hl(t),e0=t=>Zw(ma.to(t)),xO=Fe("JsonValueFromJson",Mn,ma,{from:t=>g(hl(t)),to:Zw}),wO=(t,e,...r)=>{let o=t,n=(x,w,C)=>x.type===e?o[Be](x.error,w,C):Mn[Be](x,w,C),s=(x,w=ce)=>o.fromUnknown(hl(x),w),i=(x,w)=>{let C=Xw(x);if(!C.ok)return C;let E=o.fromUnknown(C.value,w);return E.ok?g(x):N({type:e,error:E.error})},a=(x,w=ce)=>typeof x=="string"?i(x,w):N({type:"TypeOf",expected:"String",value:x}),c=a,l=x=>a(x).ok,h=(x,w=ce)=>{typeof x!="string"&&Ut(Mn,x);let C=i(x,w);return!C.ok&&C.error.type==="Json"&&M(!1,"Expected Json.",{cause:C.error}),C},p=(x,w=ce)=>(Ut(Y,x),i(x,w));h.parent=p;let f=At(h),m=Ze(e,Mn,a,l,c,f,ye,n),d=(x,w=ce)=>(To(e,l,c,x,w),g(x));d.parent=h;let y=Xe(d),b={...m,from:d,orThrow:Vx(y,m.formatError),orNull:Kc(y,us)};return[b,x=>{let w=e0(o.to(x));return Ut(b,w),w},x=>qi(s(x))]};var Ts=V("Entropy",pt),ml=Or(16)(Ts),kf=Or(20)(Ts),Sf=Or(24)(Ts),vf=Or(28)(Ts),yl=Or(32)(Ts),NO=Or(64)(Ts),$n=()=>({create:pp}),Un=t=>({create:e=>globalThis.Uint8Array.from({length:e},()=>t.randomLib.int(0,255))}),Os=(t,e)=>{let r=hp(Wc,dp("Symmetric key seed"),t);for(let o of e){let n=typeof o=="number"?o.toString():o;r=t0(n,r)}return r.slice(32,64)},t0=(t,e)=>{let r=dp(t),o=new globalThis.Uint8Array(r.byteLength+1);return o[0]=0,o.set(r,1),hp(Wc,e.slice(0,32),o)},Ef=V("EncryptionKey",yl),Cs=24,kO=V("XChaCha20Poly1305Ciphertext",pt),SO=t=>(e,r)=>{let o=t.randomBytes.create(Cs);return[Rc(r,o).encrypt(e),o]},r0=(t,e,r)=>We(()=>Rc(r,e).decrypt(t),o=>({type:"DecryptWithXChaCha20Poly1305Error",error:o})),ya=()=>({encrypt:(t,e,r)=>Rc(r,e).encrypt(t),decrypt:r0}),o0=t=>{if(M(t<=2**53-2**46,"The length exceeds 2^53 - 2^46, whose padded length would exceed Number.MAX_SAFE_INTEGER."),t===0)return Bt;let e=Math.floor(t/2**32),r=e>0?63-Math.clz32(e):31-Math.clz32(t),o=32-Math.clz32(r),n=2**Math.max(0,r-o);return Math.ceil(t/n)*n},Tf=t=>{let r=o0(t)-t;return new globalThis.Uint8Array(r)};var ga=t=>{let e=t;return{get:()=>e,set:r=>{e=r},getAndSet:r=>{let o=e;return e=r,o},setAndGet:r=>(e=r,e),update:r=>{e=r(e)},getAndUpdate:r=>{let o=e;return e=r(e),o},updateAndGet:r=>(e=r(e),e),modify:r=>{let[o,n]=r(e);return e=n,o}}};var Ao=(t,e)=>{let r=e??Kd,o=ga(t),n=new Set,s=i=>{if(!r(i,o.get()))for(let a of n)a()};return{get:o.get,subscribe:i=>(n.add(i),()=>{n.delete(i)}),set:i=>{let a=o.get();o.set(i),s(a)},getAndSet:i=>{let a=o.getAndSet(i);return s(a),a},setAndGet:i=>{let a=o.get();return o.set(i),s(a),o.get()},update:i=>{let a=o.get();o.update(i),s(a)},getAndUpdate:i=>{let a=o.getAndUpdate(i);return s(a),a},updateAndGet:i=>{let a=o.get();return o.updateAndGet(i),s(a),o.get()},modify:i=>{let a=o.get(),c=o.modify(i);return s(a),c},[Symbol.dispose]:()=>{n.clear()}}};var ba=()=>{let t=Symbol("Time");function e(r){let o=Cf();return r==="DateIso"?Is(o):o}return{now:e,performance:{timeOrigin:performance.timeOrigin,now:()=>performance.now()},setTimeout:(r,o)=>vO(t,r,o),clearTimeout:r=>{n0(t,r)}}},vO=(t,e,r)=>{let o=ft(r),n=!1,s;if(o<=Of)s=setTimeout(()=>{n||(n=!0,e())},o);else{let i=Cf()+o,a=()=>{if(n)return;let c=i-Cf();if(c>0){s=setTimeout(a,Math.min(c,Of));return}n=!0,e()};s=setTimeout(a,Of)}return{owner:t,clear:()=>{n=!0,clearTimeout(s)}}},Of=2**31-1,Cf=()=>zt.orThrow(Date.now()),n0=(t,e)=>{let r=e;M(r.owner===t,"TimeoutId was created by another Time instance"),r.clear()},Af=t=>{let e=t?.startAt??ur,r=t?.autoIncrement,o=Symbol("TestTime"),n=e,s=1,i=!1,a=new Map,c=()=>{n=zt.orThrow(n+1)},l=()=>{let p=n;switch(r){case"sync":c();break;case"microtask":queueMicrotask(c);break;case void 0:break;default:nt(r)}return p};function h(p){let f=l();return p==="DateIso"?Is(f):f}return{now:h,performance:{timeOrigin:Number(e),now:()=>l()-e},setTimeout:(p,f)=>{let m=zt.orThrow(n+ft(f)),d=s++;return a.set(d,{callback:p,runAt:m}),{owner:o,clear:()=>{a.delete(d)}}},clearTimeout:p=>{n0(o,p)},advance:p=>{M(!i,"TestTime.advance cannot be called while advancing");let f=zt.orThrow(n+ft(p));i=!0;try{for(;a.size>0;){let m=null,d=Number.POSITIVE_INFINITY;for(let[b,x]of a)x.runAt<=f&&x.runAt<d&&(m=b,d=x.runAt);if(m===null)break;let y=a.get(m);a.delete(m),n=Math.max(n,d),y.callback()}n=Math.max(n,f)}finally{i=!1}}}},s0=0xffffffffffff,zt=V("Millis",al(s0)(Ee)),As=Ss(zt),ur=0,i0=s0-1,dr=t=>zt.orNull(Math.max(0,Math.round(t)))??i0,Is=t=>new Date(t).toISOString(),lo=(t,e)=>(M(e>=t,"Performance end time must not precede start time"),e-t),a0=ge(ee(fe,"ms"),ee(fe,de,"ms"),ee(fe,de,de,"ms")),c0=ge(ee(Es,"s"),ee(Es,".",fe,"s")),l0=ge(ee(Es,"m"),ee(Es,".",fe,"m")),u0=ge(ee(ll,"h"),ee(ll,".",fe,"h")),d0=ge(ee(cl,"d"),ee(cl,".",fe,"d")),p0=ge(ee(ul,"w"),ee(ul,".",fe,"w")),f0=ge(ee(Ln,"y"),ee(Ln,".",fe,"y")),EO=ge(a0,c0,l0,u0,d0,p0,f0),TO=Pn("DurationLiteral",EO,(t,e)=>({type:"DurationLiteral",value:e,cause:t}),vx);function ft(t){if(typeof t=="number")return t;let e=parseFloat(t),r=t.endsWith("ms")?"ms":t.at(-1);return M(r in Ht,`Unknown duration unit: ${r}`),zt.orThrow(Math.round(e*Ht[r]))}var Ht={ms:1,s:1e3,m:6e4,h:36e5,d:864e5,w:6048e5,y:31536e6},OO=16,CO=8,AO=50,If=t=>{let e=(t%Ht.m/Ht.s).toFixed(3);if(t<Ht.m)return`${e}s`;let r=Math.floor(t/Ht.m)%60;if(t<Ht.h)return`${r}m${e}s`;let o=Math.floor(t/Ht.h)%24;if(t<Ht.d)return`${o}h${r}m${e}s`;let n=Math.floor(t%Ht.y/Ht.d),s=n%7;if(t<Ht.w)return`${s}d${o}h${r}m${e}s`;let i=Math.floor(n/7);return t<Ht.y?`${i}w${s}d${o}h${r}m${e}s`:`${Math.floor(t/Ht.y)}y${i}w${s}d${o}h${r}m${e}s`},Rf=t=>{let e=new Date(t),r=e.getHours().toString().padStart(2,"0"),o=e.getMinutes().toString().padStart(2,"0"),n=e.getSeconds().toString().padStart(2,"0"),s=e.getMilliseconds().toString().padStart(3,"0");return`${r}:${o}:${n}.${s}`};var h0={trace:0,debug:1,log:2,info:3,warn:4,error:5,silent:6},an=({level:t="log",output:e=y0(),path:r=[],formatter:o}={})=>m0({getInheritedLevel:()=>t,output:e,path:r,formatter:o}),m0=({getInheritedLevel:t,output:e,path:r,formatter:o})=>{let n=null,s=()=>n??t(),i=c=>h0[c]>=h0[s()],a=c=>(...l)=>{i(c)&&e.write({method:c,path:r,args:l},o)};return{getLevel:s,setLevel:c=>{n=c},hasOwnLevel:()=>n!==null,child:c=>m0({getInheritedLevel:s,output:e,path:[...r,c],formatter:o}),trace:a("trace"),debug:a("debug"),log:a("log"),info:a("info"),warn:a("warn"),error:a("error"),write:c=>{i(c.method)&&e.write(c,o)}}},y0=()=>({write:(t,e)=>{let r=e?e(t):t.args;globalThis.console[t.method==="trace"?"debug":t.method](...r)}}),IO=({time:t=ba()}={})=>(e={})=>{let r=e.timestampFormat??"none",o=e.startTime;return n=>{let s=t.now();o??=s;let i;switch(r){case"none":i="";break;case"relative":i=`+${If(Math.max(0,s-o))}`;break;case"absolute":i=Rf(s);break;case"iso":i=new Date(s).toISOString();break}let a=n.path.length>0?n.path.map(l=>`[${l}]`).join(" "):"",c=i&&a?`${i} ${a}`:i||a;return c?[c,...n.args]:n.args}},Df=()=>{let t=Ao(null);return{write:t.set,entry:t}},g0=t=>({write:e=>{t.push(e)}}),RO=t=>({write:(e,r)=>{for(let o of t)o.write(e,r)}}),Bf=({level:t="trace"}={})=>{let e=[];return{...an({level:t,output:g0(e)}),getEntriesSnapshot:()=>{let o=[...e];return e.length=0,o},clearEntries:()=>{e.length=0}}};var Mf=t=>{if(typeof globalThis.FinalizationRegistry!="function")return gl;let e=b0(t),r=new globalThis.FinalizationRegistry(o=>{e(o)});return{track:(o,n,s)=>{r.register(o,{...n,stack:new Error().stack},s)},untrack:o=>{r.unregister(o)}}},gl={track:Sr,untrack:Sr},b0=t=>e=>e.isLeaked()?(t.console.warn(`${e.name} was garbage-collected without cleanup. Tracked at:`,e.stack),!0):!1,bl=t=>{let e=new Map,r=b0(t);return{track:(o,n,s)=>{let i=e.get(s)??[];e.set(s,[...i,{...n,stack:new Error().stack}])},untrack:o=>{e.delete(o)},collect:()=>{let o=0;for(let n of e.values())for(let s of n)r(s)&&o++;return e.clear(),o},getTrackedCount:({name:o}={})=>{let n=0;for(let s of e.values())for(let i of s)(o===void 0||i.name===o)&&n++;return n}}};var Vt=({lookup:t,entries:e})=>{let r=new Map,o={get size(){return r.size},has:n=>r.has(t(n)),get:n=>r.get(t(n))?.value,getOrInsert:(n,s)=>r.getOrInsert(t(n),{key:n,value:s}).value,getOrInsertComputed:(n,s)=>r.getOrInsertComputed(t(n),()=>({key:n,value:s(n)})).value,getKey:n=>r.get(t(n))?.key,set:(n,s)=>{let i=t(n),a=r.get(i);return r.set(i,{key:a?.key??n,value:s}),o},delete:n=>r.delete(t(n)),clear:()=>{r.clear()},keys:function*(){for(let n of r.values())yield n.key},values:function*(){for(let n of r.values())yield n.value},entries:function*(){for(let n of r.values())yield[n.key,n.value]},forEach:n=>{for(let s of r.values())n(s.value,s.key,o)},[Symbol.iterator]:function(){return o.entries()}};if(e)for(let[n,s]of e)o.set(n,s);return o},jn=({lookup:t,values:e})=>{let r=Vt({lookup:t}),o={get size(){return r.size},has:n=>r.has(n),get:n=>r.getKey(n),add:n=>(r.set(n,!0),o),delete:n=>r.delete(n),clear:()=>{r.clear()},keys:()=>r.keys(),values:()=>r.keys(),entries:function*(){for(let n of r.keys())yield[n,n]},forEach:n=>{for(let s of r.keys())n(s,s,o)},[Symbol.iterator]:function(){return o.keys()}};if(e)for(let n of e)o.add(n);return o},Gt=t=>Pf(t),x0=new WeakMap,Pf=(t,e=new Set)=>{switch(typeof t){case"string":return`s:${JSON.stringify(t)}`;case"number":return Number.isNaN(t)?"n:NaN":t===Number.POSITIVE_INFINITY?"n:Infinity":t===Number.NEGATIVE_INFINITY?"n:-Infinity":Object.is(t,-0)?"n:-0":`n:${t}`;case"boolean":return t?"b:true":"b:false";case"object":{if(t===null)return"l:null";let r=x0.get(t);if(r)return r;let o;return Array.isArray(t)?(M(!e.has(t),"Structural lookup keys must not contain cycles."),e.add(t),o=DO(t,e),e.delete(t)):$e(t)?(M(!e.has(t),"Structural lookup keys must not contain cycles."),e.add(t),o=BO(t,e),e.delete(t)):pt.is(t)?o=`u:${cr(t)}`:M(!1,"Structural lookup keys must be JSON-like values or Uint8Array."),x0.set(t,o),o}default:M(!1,"Structural lookup keys must be JSON-like values or Uint8Array.")}},DO=(t,e)=>`a:[${Array.from(t,r=>Pf(r,e)).join(",")}]`,BO=(t,e)=>{let r=t;return`o:{${Object.keys(r).toSorted().map(n=>{let s=r[n];return`${JSON.stringify(n)}:${Pf(s,e)}`}).join(",")}}`};var MO=ge("0%","100%",ee(Ln,"%"),ee(ge("0",Ln),".",fe,"%")),PO=Pn("PercentageLiteral",MO,(t,e)=>({type:"PercentageLiteral",value:e,cause:t}),Ex),Wf=t=>typeof t=="number"?t:Number.parseFloat(t)/100,uo=t=>t+1,Lf=t=>t-1,WO=(t,e)=>r=>Math.min(Math.max(r,t),e),LO=(t,e)=>r=>r>=t&&r<=e,xl=(...t)=>t.reduce((e,r)=>e<r?e:r),qf=(...t)=>t.reduce((e,r)=>e>r?e:r),$f=(t,e=16,r=2)=>{let o=e*r;if(M(Number.isSafeInteger(o),"numberOfBuckets times minNumberOfItemsPerBucket exceeds Number.MAX_SAFE_INTEGER."),t<o)return N(o);let n=[],s=Math.floor(t/e),i=t%e,a=0;for(let c=0;c<e;c++){let l=c<i,h=s+(l?1:0);a+=h,n.push(a)}return g(n)},Uf=V("FibonacciIndex",nn(78)(Jt)),jf=t=>{if(t<=2)return Ft;let e=1,r=1;for(let o=3;o<=t;o++)[e,r]=[r,e+r];return r};var wl=t=>({type:"Some",value:t}),Nl={type:"None"},qO=t=>t.type==="Some",$O=t=>t.type==="None",UO=t=>t==null?Nl:wl(t);var kl=class{};function xa(t){"@babel/helpers - typeof";return xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xa(t)}function jO(t,e){if(xa(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(xa(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function FO(t){var e=jO(t,"string");return xa(e)=="symbol"?e:e+""}function Mt(t,e,r){return(e=FO(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var zO=class v0 extends kl{constructor(e){super(),Mt(this,"_name",void 0),Mt(this,"_rngFn",void 0),this._name=e.name||"function",this._rngFn=e}get name(){return this._name}next(){return this._rngFn()}clone(){return new v0(this._rngFn)}},VO=9007199254740992,_O=67108864;function w0(t,e){return t<<e|t>>>32-e}function KO(t){let e=`${t}`,r=1779033703,o=3144134277,n=1013904242,s=2773480762;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);r=o^Math.imul(r^a,597399067),o=n^Math.imul(o^a,2869860233),n=s^Math.imul(n^a,951274213),s=r^Math.imul(s^a,2716044179)}return r=Math.imul(n^r>>>18,597399067),o=Math.imul(s^o>>>22,2869860233),n=Math.imul(r^n>>>17,951274213),s=Math.imul(o^s>>>19,2716044179),r^=o^n^s,o^=r,n^=r,s^=r,[r>>>0,o>>>0,n>>>0,s>>>0]}var QO=class E0 extends kl{constructor(e=crypto.randomUUID()){super(),Mt(this,"_seed",void 0),Mt(this,"s0",0),Mt(this,"s1",0),Mt(this,"s2",0),Mt(this,"s3",0),this._seed=e,this.setState(KO(e))}setState(e){this.s0=e[0],this.s1=e[1],this.s2=e[2],this.s3=e[3],(this.s0|this.s1|this.s2|this.s3)===0&&(this.s0=1831565813)}get name(){return"xoshiro128**"}next(){let e=this.nextUint32()>>>5,r=this.nextUint32()>>>6;return(e*_O+r)/VO}clone(){let e=new E0(this._seed);return e.setState([this.s0,this.s1,this.s2,this.s3]),e}nextUint32(){let e=Math.imul(w0(Math.imul(this.s1,5),7),9)>>>0,r=this.s1<<9;return this.s2^=this.s0,this.s3^=this.s1,this.s1^=this.s2,this.s0^=this.s3,this.s2^=r,this.s3=w0(this.s3,11),e}};function N0(t){switch(typeof t){case"object":if(t instanceof kl)return t;break;case"function":return new zO(t);case"number":case"string":case"undefined":return new QO(t)}throw new TypeError(`Invalid seed or RNG: ${String(t)}`)}function k0(t,e){for(let r=e.length-1;r>0;r-=1){let o=Math.floor(t.next()*(r+1)),n=e[r];e[r]=e[o],e[o]=n}}function S0(t,e,r){let o=new Map,n=e.length-1,s=Array.from({length:r});for(let i=0;i<r;i++){let a=n-i+1,c=Math.floor(t.next()*a);s[i]=e[o.get(c)??c],o.set(c,o.get(n-i)??n-i)}return s}var JO=class T0 extends kl{get name(){return"Math.random"}next(){return Math.random()}clone(){return new T0}};function pr(t){return new HO(t)}var HO=class{constructor(t){Mt(this,"n",void 0),Mt(this,"isInt",()=>{if(Number.isInteger(this.n))return this;throw new Error(`Expected number to be an integer, got ${this.n}`)}),Mt(this,"isPositive",()=>{if(this.n>0)return this;throw new Error(`Expected number to be positive, got ${this.n}`)}),Mt(this,"lessThan",e=>{if(this.n<e)return this;throw new Error(`Expected number to be less than ${e}, got ${this.n}`)}),Mt(this,"lessThanOrEqual",e=>{if(this.n<=e)return this;throw new Error(`Expected number to be less than or equal to ${e}, got ${this.n}`)}),Mt(this,"greaterThanOrEqual",e=>{if(this.n>=e)return this;throw new Error(`Expected number to be greater than or equal to ${e}, got ${this.n}`)}),Mt(this,"greaterThan",e=>{if(this.n>e)return this;throw new Error(`Expected number to be greater than ${e}, got ${this.n}`)}),this.n=t}};function GO(t,e=1){pr(e).isInt().isPositive();let r=t.irwinHall(e);return()=>r()/e}function YO(t,e=.5){return pr(e).greaterThanOrEqual(0).lessThanOrEqual(1),()=>Math.min(1,Math.floor(t.next()+e))}function XO(t,e=1,r=.5){return pr(e).isInt().isPositive(),pr(r).greaterThanOrEqual(0).lessThan(1),()=>{let o=0,n=0;for(;o++<e;)t.next()<r&&n++;return n}}function ZO(t,e=1){return pr(e).isPositive(),()=>-Math.log(1-t.next())/e}function eC(t,e=.5){pr(e).greaterThan(0).lessThan(1);let r=1/Math.log(1-e);return()=>Math.floor(1+Math.log(t.next())*r)}function tC(t,e=1){return pr(e).isInt().greaterThanOrEqual(0),()=>{let r=0;for(let o=0;o<e;++o)r+=t.next();return r}}function rC(t,e=0,r=1){let o=t.normal(e,r);return()=>Math.exp(o())}function oC(t,e=0,r=1){return()=>{let o,n,s;do o=t.next()*2-1,n=t.next()*2-1,s=o*o+n*n;while(!s||s>1);return e+r*n*Math.sqrt(-2*Math.log(s)/s)}}function nC(t,e=1){pr(e).greaterThanOrEqual(0);let r=1/e;return()=>1/Math.pow(1-t.next(),r)}var sC=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],iC=t=>sC[t],aC=.9189385332046727;function cC(t,e=1){if(pr(e).isPositive(),e<10){let r=Math.exp(-e);return()=>{let o=r,n=0,s=t.next();for(;s>o;)s=s-o,o=e*o/++n;return n}}else{let r=Math.sqrt(e),o=.931+2.53*r,n=-.059+.02483*o,s=1.1239+1.1328/(o-3.4),i=.9277-3.6224/(o-2);return()=>{for(;;){let a,c=t.next();if(c<=.86*i)return a=c/i-.43,Math.floor((2*n/(.5-Math.abs(a))+o)*a+e+.445);c>=i?a=t.next()-.5:(a=c/i-.93,a=(a<0?-.5:.5)-a,c=t.next()*i);let l=.5-Math.abs(a);if(l<.013&&c>l)continue;let h=Math.floor((2*n/l+o)*a+e+.445);if(c=c*s/(n/(l*l)+o),h>=10){let p=(h+.5)*Math.log(e/h)-e-aC+h-(.08333333333333333-(.002777777777777778-1/(1260*h*h))/(h*h))/h;if(Math.log(c*r)<=p)return h}else if(h>=0){let p=iC(h)??0;if(Math.log(c)<=h*Math.log(e)-e-p)return h}}}}}function lC(t,e,r){return r===void 0&&(r=e===void 0?1:e,e=0),e??(e=0),()=>t.next()*(r-e)+e}function uC(t){return()=>t.next()>=.5}function dC(t,e,r){return r===void 0&&(r=e===void 0?1:e,e=0),e??(e=0),pr(e).isInt(),pr(r).isInt(),()=>Math.floor(t.next()*(r-e+1)+e)}function pC(t,e,r){return pr(e).greaterThan(0),pr(r).greaterThan(0),()=>{let o=1-t.next();return e*Math.pow(-Math.log(o),1/r)}}var wa=class O0{constructor(e=new JO){Mt(this,"_rng",void 0),Mt(this,"_cache",{}),this._rng=N0(e)}get rng(){return this._rng}clone(e=this.rng.clone()){return new O0(e)}use(e){this._rng=N0(e),this._cache={}}next(){return this._rng.next()}float(e,r){return this.uniform(e,r)()}int(e,r){return this.uniformInt(e,r)()}integer(e,r){return this.uniformInt(e,r)()}bool(){return this.uniformBoolean()()}boolean(){return this.uniformBoolean()()}choice(e,r){if(!Array.isArray(e))throw new TypeError(`Random.choice expected input to be an array, got ${typeof e}`);let o=e.length;if(o===0)return;if(!r)return e[this.uniformInt(0,o-1)()];if(!Array.isArray(r))throw new TypeError(`Random.choice expected weights to be an array, got ${typeof r}`);if(r.length!==o)throw new Error(`Random.choice expected weights array length (${r.length}) to match array length (${o})`);for(let[a,c]of r.entries())if(typeof c!="number"||c<0||!Number.isFinite(c))throw new Error(`Random.choice expected all weights to be non-negative finite numbers, got ${c} at index ${a}`);let n=r.reduce((a,c)=>a+c,0);if(n===0)throw new Error("Random.choice expected at least one positive weight, got all zeros");let s=this.float(0,n),i=0;for(let a=0;a<o;a++)if(i+=r[a],s<=i)return e[a];return e[o-1]}sample(e,r){if(!Array.isArray(e))throw new TypeError(`Random.sample expected input to be an array, got ${typeof e}`);if(r<0||r>e.length)throw new Error(`Random.sample: k must be between 0 and array.length (${e.length}), got ${r}`);return S0(this.rng,e,r)}sampler(e,r){if(!Array.isArray(e))throw new TypeError(`Random.sampler expected input to be an array, got ${typeof e}`);if(r<0||r>e.length)throw new Error(`Random.sampler: k must be between 0 and array.length (${e.length}), got ${r}`);let o=this.rng;return()=>S0(o,e,r)}shuffle(e){if(!Array.isArray(e))throw new TypeError(`Random.shuffle expected input to be an array, got ${typeof e}`);let r=[...e];return k0(this.rng,r),r}shuffler(e){if(!Array.isArray(e))throw new TypeError(`Random.shuffler expected input to be an array, got ${typeof e}`);let r=this.rng,o=[...e];return()=>(k0(r,o),[...o])}uniform(e,r){return this._memoize("uniform",lC,e,r)}uniformInt(e,r){return this._memoize("uniformInt",dC,e,r)}uniformBoolean(){return this._memoize("uniformBoolean",uC)}normal(e,r){return oC(this,e,r)}logNormal(e,r){return rC(this,e,r)}bernoulli(e){return YO(this,e)}binomial(e,r){return XO(this,e,r)}geometric(e){return eC(this,e)}poisson(e){return cC(this,e)}exponential(e){return ZO(this,e)}irwinHall(e){return tC(this,e)}bates(e){return GO(this,e)}pareto(e){return nC(this,e)}weibull(e,r){return pC(this,e,r)}_memoize(e,r,...o){let n=`${o.join(";")}`,s=this._cache[e];return(s===void 0||s.key!==n)&&(s={key:n,distribution:r(this,...o)},this._cache[e]=s),s.distribution}},iB=new wa;var Ff=()=>({next:()=>Math.random()}),zf=(t="evolu")=>{let e=new wa(t);return{next:()=>e.next()}},fC=()=>new wa,Fn=(t="evolu")=>new wa(t);var Vf=new Set;function _f(t){return new Set(t)}var Kf=t=>t.size>0,hC=(t,e)=>{let r=new Set(t);return r.add(e),r},mC=(t,e)=>{let r=new Set(t);return r.delete(e),r};function yC(t,e){let r=new Set;for(let o of t)r.add(e(o));return r}function gC(t,e){let r=new Set,o=0;for(let n of t)e(n,o++)&&r.add(n);return r}var bC=t=>t.values().next().value;var Ds=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},Bs=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),I0=bt({type:Y},Co(Y,ir)),Cr=sn("AbortError",{reason:I0}),Rs=t=>({type:"AbortError",reason:t}),R0={type:"RunDisposedAbortReason"},xC=Rs(R0),Qf={type:"ExplicitAbortReason"},D0={type:"TestAbortReason"},wC=Rs(D0),B0=t=>({type:"PanicAbortReason",defect:t}),Hf=t=>{queueMicrotask(()=>{throw t})},M0=({console:t=an()}={})=>({console:t,leakDetector:Lc?Mf({console:t}):gl,nativeFetch:globalThis.fetch.bind(globalThis),randomBytes:$n(),random:Ff(),reportDefect:Hf,time:ba()}),El=t=>Yf({...M0(t),...t}),P0=()=>{let t=[],e=[],r=0;return Object.assign(a=>{t.push(a);let c=e.shift();c&&(r+=1,c(a))},{getDefects:()=>[...t],next:()=>{if(r<t.length){let c=t[r];return r+=1,Promise.resolve(c)}let a=Promise.withResolvers();return e.push(a.resolve),a.promise},getDefectsSnapshot:()=>{M(e.length===0,"getDefectsSnapshot must not be called while reportDefect.next() is pending");let a=[...t];return t.length=0,r=0,a},clearDefects:()=>{M(e.length===0,"clearDefects must not be called while reportDefect.next() is pending"),t.length=0,r=0}})},W0=t=>{let e=t?.seed??"evolu",r=Bf(),o=bl({console:r}),n=zf(e),s=Fn(e),i=Un({randomLib:s}),a=()=>{throw new Error("Provide a nativeFetch test double")},c=P0(),l=Af();return{console:r,leakDetector:o,nativeFetch:a,randomBytes:i,random:n,randomLib:s,reportDefect:c,time:l}};function Gf(t){let{console:e}=t??{};return Yf({...W0(),...e&&{leakDetector:bl({console:e})},...t})}var L0=globalThis,NC=globalThis,Sl=Symbol("evolu.Task.meta"),Jf=0,kC={type:"Running"},Yf=(t,e,r,o)=>{let n=o?.abortBehavior;n!==void 0&&n!=="unabortable"&&M(e?.restoreTokens.has(n.restoreToken)===!0,"restore is only valid inside the unabortableMask that created it");let s=e?.abortMask??Jf,i=n===void 0?s:n==="unabortable"?uo(s):n.abortMask,a=kC,c=a,l,h,p=new Map,f=new AbortController,m=new AbortController,d,y,b,x=k=>{try{t.reportDefect(k)}catch(v){Hf(new AggregateError([k,v],"ReportDefect failed while reporting a defect"))}},w=k=>{try{if(!t.runConfig?.eventsEnabled.get())return;let v={id:S.id,timestamp:L.deps.time.now(),data:k};for(let D=S;D;D=D.parent)try{D.onEvent?.(v)}catch(P){x(P)}}catch(v){x(v)}},C=()=>{c!==a&&(c=a,w({type:"StateChanged",state:a}))},E=()=>({request:f.signal.reason.reason,observed:m.signal.aborted?m.signal.reason.reason:null}),R=(k=Qf)=>{f.signal.aborted||(B(Rs(k),i===Jf),C())},I=k=>{if(l??=k,d)return d;let v=()=>(l??=g(g()),a={type:"Settled",abort:E(),exit:l},C(),l),D=y;D?d=Promise.all(p.values()).then(async()=>{try{await D.disposeAsync()}catch(O){b=C0(O)??L.panic(O),l??=N(b)}return v()}):d=Promise.all(p.values()).then(v);let P=l?.ok===!1?l.error:xC,{aborted:F}=m.signal;return B(P,!0),F||C(),d},B=(k,v)=>{f.signal.aborted||(a={type:"Aborted",abort:{request:k.reason,observed:null}},f.abort(k)),v&&!m.signal.aborted&&(a={type:"Aborted",abort:{request:f.signal.reason.reason,observed:k.reason}},m.abort(k))},T=k=>k===void 0?t:{console:t.console,leakDetector:t.leakDetector,nativeFetch:t.nativeFetch,randomBytes:t.randomBytes,random:t.random,reportDefect:t.reportDefect,time:t.time,...t.runConfig&&{runConfig:t.runConfig},...k},S=((k,v,{abortable:D=!1}={})=>{Go({disposed:!!d});let P=k[Sl],F=Yf(T(v),S,L,P),O=Promise.withResolvers();p.set(F,O.promise),w({type:"ChildAdded",childId:F.id});let A=()=>{F.requestAbort(S.requestAbortSignal.reason.reason)};S.requestAbortSignal.aborted?A():S.requestAbortSignal.addEventListener("abort",A,{once:!0,signal:F.requestAbortSignal});let W=(async()=>{let Q;try{let U=P?.abortBehavior==="unabortable"?F.requestAbortSignal:F.signal,Z=L0.scheduler,ne;P?.priority&&Z?.postTask?ne=await Z.postTask(()=>(U.throwIfAborted(),k(F)),{priority:P.priority,signal:U}):(U.throwIfAborted(),ne=await k(F)),M(Lc?xf.is(ne):typeof ne?.ok=="boolean","Task must return Result."),Q=g(ne)}catch(U){Q=N(C0(U)??L.panic(U))}let j=await F.dispose(Q);if(p.delete(F),w({type:"ChildRemoved",childId:F.id}),O.resolve(),j.ok)return j.value;if(D)return N(j.error);throw W.catch(Sr),j.error})();if(W.run=F,D){let Q=W;Q.abort=F.requestAbort,Q[Symbol.asyncDispose]=async()=>{Q.abort(),await Q}}return W}),L=r??S;return S.orThrow=(async(k,v)=>qi(await S(k,v))),S.ok=(async(k,v)=>$i(await S(k,v))),S.abortable=((k,v)=>S(k,v,{abortable:!0})),S.daemon=((k,v)=>(Go({disposed:!!d}),S.requestAbortSignal.throwIfAborted(),L.abortable(k,T(v)))),S.create=(k=>S.daemon(async v=>(await v.abortable(F0),g()),k).run),S.id=xt(t),S.parent=e??null,S.deps=t,S.signal=m.signal,S.requestAbortSignal=f.signal,S.onAbort=k=>{let v=()=>{try{k(S.signal.reason)}catch(D){L.panic(D)}};return S.signal.aborted?(v(),null):(S.signal.addEventListener("abort",v,{once:!0}),{[Symbol.dispose]:()=>{S.signal.removeEventListener("abort",v)}})},S.getState=()=>a,S.snapshot=()=>{let k=Array.from(p.keys(),v=>v.snapshot());return(h?.state!==a||!Jd(h.children,k))&&(h={id:S.id,state:a,children:k,abortMask:i}),h},S.onEvent=void 0,S.defer=k=>{Go({disposed:!!d}),(y??=new AsyncDisposableStack).defer(k)},S.abort=(k=Qf)=>{d||I(N(Rs(k)))},S.panic=k=>{let v=Rs(B0(k));return x(v),L.dispose(N(v)),v},S[Symbol.dispose]=()=>{I()},S[Symbol.asyncDispose]=async()=>{if(await I(),b)throw b},S.abortMask=i,S.restoreTokens=e?.restoreTokens??Vf,S.requestAbort=R,S.dispose=I,S},C0=t=>{try{let e=[t];for(;e.length>0;){let o=e.pop();if(A0(o))e.push(o.error,o.suppressed);else if(!Cr.is(o))return null}let r=t;for(;A0(r);)r=r.error;return r}catch{return null}},A0=t=>Object.prototype.toString.call(t)==="[object Error]"&&t.name==="SuppressedError",Xf=t=>e=>{let r=e;M(t.abortBehavior===void 0||r[Sl]?.abortBehavior===void 0,"abort behavior helpers cannot wrap the same Task");let o=s=>e(s),n=r[Sl];return o[Sl]=n?{...n,...t}:t,o};function SC(t,e,r){let o=typeof e=="function"?e:void 0,n=typeof e=="function"?r:e,s=n===void 0||!("collect"in n)||n.collect!==!1;return q0("all",o?$0(t,o):t,n,s)}function vC(t,e,r){let o=typeof e=="function"?e:void 0;return q0("allSettled",o?$0(t,o):t,typeof e=="function"?r:e)}var q0=(t,e,r,o=!0)=>async n=>{let s,i;if(Array.isArray(e)){if(!ut(e))return o?g(at):g();s=e,i=ye}else{let l=kr(e);if(!ut(l))return o?g(Bi):g();s=vr(l,([,h])=>h),i=h=>zd(l.map(([p],f)=>[p,h[f]]))}let a=o?[]:void 0,c;return await n(Ms(s,(l,h)=>t==="allSettled"?(a[h]=l,"continue"):l.ok?(a&&(a[h]=l.value),"continue"):(c=l,"stop"),r)),c??(a?g(i(a)):g())},$0=(t,e)=>Array.isArray(t)?vr(t,(r,o)=>e(r,o)):Di(t,e),Io=t=>e=>{let{promise:r,resolve:o,reject:n}=Promise.withResolvers(),s=t({run:e,resolve:o,reject:n});return e.onAbort(i=>{n(i),s?.()}),r},cn=t=>Io(({run:{deps:e},resolve:r})=>{let o=e.time.setTimeout(()=>r(g()),t);return()=>e.time.clearTimeout(o)}),EC=(t,e)=>j0([t,async r=>(await r.ok(cn(e)),N(U0))]),TC=sn("TimeoutError"),U0={type:"TimeoutError"},Zf=(t,e,{shouldRetry:r=ls,onRetry:o}={})=>async n=>{let s=e(n.deps),i=Ft,a=c=>({type:"RetryError",lastError:c,attempts:i});for(;;){let c=await n(t);if(c.ok||Cr.is(c.error))return c;let l=c.error;if(!r(l))return N(a(l));let h=s(l);if(!h.ok)return N(a(l));let[p,f]=h.value;o?.({error:l,attempt:i,output:p,delay:f}),i=uo(i),f>0&&await n.ok(cn(f))}},OC=(t,e,{shouldRepeat:r=ls,onRepeat:o}={})=>async n=>{let s=e(n.deps),i=Ft;for(;;){let a=await n(t);if(!a.ok||!r(a.value))return a;let c=s(a.value);if(!c.ok)return a;let[l,h]=c.value;o?.({value:a.value,attempt:i,output:l,delay:h}),i=uo(i),h>0&&await n.ok(cn(h))}},CC=(t,e)=>async r=>{let o,n,s=-1;return await r(Ms(t,(i,a)=>i.ok?(o=i,"stop"):(a>s&&(s=a,n=i),"continue"),e)),o||(ke(n),n)},j0=t=>async e=>{let r;return await e(Ms(t,o=>(r=o,"stop"),{concurrency:t.length})),ke(r),r},AC=(t,e,r)=>async o=>{let n=[];return await o(Ms(t,s=>(s.ok&&n.push(s.value),n.length<e?"continue":"stop"),r)),g(n)},IC=(t,e,r)=>async o=>{let n=[];return await o(Ms(t,s=>(n.push(s),n.length<e?"continue":"stop"),r)),g(n)},Ms=(t,e,r={})=>async o=>{let n={stack:[],error:void 0,hasError:!1};try{ko(t);let s=new Promise(Sr),i=Promise.withResolvers(),a=Ds(n,o.onAbort(i.reject),!1),c=!1,l=0,h=Math.min(r.concurrency??Ft,t.length),p=h,f=async()=>{try{for(;!c&&l<t.length;){let m=l;l+=1;let d=await o(t[m]);if(c)break;o.signal.throwIfAborted();let y=e(d,m);o.signal.throwIfAborted(),y==="stop"&&(c=!0,i.resolve())}}catch(m){throw c=!0,m}return p-=1,p===0&&i.resolve(),await s};return await Promise.race([...Array.from({length:h},f),i.promise]),g()}catch(s){n.error=s,n.hasError=!0}finally{Bs(n)}},RC=(t,e)=>Xf({priority:t})(e),DC=async t=>{let e=L0.scheduler;return e?.yield?await e.yield():await new Promise(r=>{let o=NC.setImmediate;o?o(r):setTimeout(r,0)}),t.signal.throwIfAborted(),g()},F0=async t=>{let e={stack:[],error:void 0,hasError:!1};try{let r=Promise.withResolvers(),o=Ds(e,t.onAbort(r.reject),!1);return await r.promise}catch(r){e.error=r,e.hasError=!0}finally{Bs(e)}},BC=t=>async e=>{let r={stack:[],error:void 0,hasError:!1};try{let o;try{o=e.daemon(t)}catch(i){if(Cr.is(i))return N(i);throw i}let n=Promise.withResolvers(),s=Ds(r,e.onAbort(i=>{o.abort(i.reason),n.resolve(N(i))}),!1);return await Promise.race([o,n.promise])}catch(o){r.error=o,r.hasError=!0}finally{Bs(r)}},Tl=Xf({abortBehavior:"unabortable"}),z0=t=>Tl(e=>{let r=e;M(r.abortMask>Jf,"unabortableMask requires a masked Run; use run(task), not a direct call");let o=Symbol("restore");return r.restoreTokens=new Set(r.restoreTokens).add(o),e(t(Xf({abortBehavior:{abortMask:Lf(r.abortMask),restoreToken:o}})))}),MC=(t,e,r)=>z0(o=>async n=>{let s=await n(t);if(!s.ok)return s;try{return await n(o(e(s.value)))}finally{await n.ok(r(s.value))}}),vl=()=>{let t,e=new Set;return{task:Io(({resolve:r})=>{if(t){r(t);return}return e.add(r),()=>{e.delete(r)}}),resolve:r=>{if(t)return!1;t=r;for(let o of e)o(r);return e.clear(),!0}}},PC=({isOpen:t=!1}={})=>{let e=vl();return t&&e.resolve(g()),{wait:r=>e.task(r),open:()=>t?!1:(t=!0,e.resolve(g()),!0),close:()=>t?(t=!1,e=vl(),!0):!1,release:()=>t?!1:(e.resolve(g()),e=vl(),!0),isOpen:()=>t}},eh=(t,{policy:e="fifo"}={})=>{let r=e==="greedy",o=Jt.orThrow(t),n=Bt,s=new Set,i=m=>n+m<=o,a=m=>i(m)&&(r||s.size===0),c=(m,d)=>{n=n+m;let y=!1,b={},x=()=>y?!1:(y=!0,d.untrack(b),n=n-m,l(),!0),w={permits:m,release:x,[Symbol.dispose]:x};return d.track(w,{name:"SemaphorePermit",isLeaked:()=>!y},b),w},l=()=>{for(let m of s){if(!i(m.permits)){if(!r)break;continue}s.delete(m),m.resolve(g(c(m.permits,m.leakDetector)))}},h=m=>Io(({run:{deps:d},resolve:y})=>{let b=Jt.orThrow(m);if(a(b)){y(g(c(b,d.leakDetector)));return}let x={permits:b,leakDetector:d.leakDetector,resolve:y};return s.add(x),()=>{s.delete(x)&&l()}}),p=m=>d=>async y=>{let b={stack:[],error:void 0,hasError:!1};try{let x=Ds(b,await y.ok(h(m)),!1);return await y(d)}catch(x){b.error=x,b.hasError=!0}finally{Bs(b)}};return{withPermit:m=>p(1)(m),withPermits:p,withPermitsIfAvailable:m=>d=>async y=>{let b={stack:[],error:void 0,hasError:!1};try{let x=Jt.orThrow(m);if(!a(x))return g(Nl);let w=Ds(b,c(x,y.deps.leakDetector),!1),C=await y(d);return C.ok?g(wl(C.value)):C}catch(x){b.error=x,b.hasError=!0}finally{Bs(b)}},take:h,resize:m=>{o=Jt.orThrow(m),l()},snapshot:()=>({policy:e,permits:o,taken:n,waiters:Array.from(s,({permits:m})=>({permits:m})),available:!r&&s.size>0?0:Math.max(0,o-n)}),isIdle:()=>n===0&&s.size===0}},zn=()=>{let t=eh(1);return{withLock:t.withPermit,snapshot:t.snapshot}};function V0(t,{lookup:e=ye}={}){let r=Vt({lookup:e}),o=s=>r.getOrInsertComputed(s,()=>eh(t)),n=(s,i)=>a=>async c=>{let l=o(s);try{let h={stack:[],error:void 0,hasError:!1};try{let p=Ds(h,await c.ok(l.take(i)),!1);return await c(a)}catch(p){h.error=p,h.hasError=!0}finally{Bs(h)}}finally{l.isIdle()&&r.delete(s)}};return{withPermit:(s,i)=>n(s,1)(i),withPermits:n,isIdle:s=>r.get(s)?.isIdle()??!0,snapshot:s=>r.get(s)?.snapshot()??null}}function Na({lookup:t=ye}={}){let e=V0(1,{lookup:t});return{withLock:(r,o)=>e.withPermit(r,o),isIdle:e.isIdle,snapshot:e.snapshot}}var WC=t=>{let e=ga(t),r=zn();return{get:r.withLock(()=>g(e.get())),set:o=>r.withLock(()=>(e.set(o),g())),getAndSet:o=>r.withLock(()=>g(e.getAndSet(o))),setAndGet:o=>r.withLock(()=>g(e.setAndGet(o))),update:o=>r.withLock(async n=>{let s=await n(o(e.get()));return s.ok?(e.set(s.value),g()):s}),getAndUpdate:o=>r.withLock(async n=>{let s=e.get(),i=await n(o(s));return i.ok?(e.set(i.value),g(s)):i}),updateAndGet:o=>r.withLock(async n=>{let s=await n(o(e.get()));return s.ok?(e.set(s.value),g(s.value)):s}),modify:o=>r.withLock(async n=>{let s=await n(o(e.get()));if(!s.ok)return s;let[i,a]=s.value;return e.set(a),g(i)}),snapshot:r.snapshot}};var LC=sn("UnknownError",{error:ir}),ht=t=>{let e=new Map,r=n=>{if(n instanceof Error)return o(n);if(Array.isArray(n)){let s=e.get(n);if(s!==void 0)return s;let i=[];e.set(n,i);for(let a of n)i.push(r(a));return i}try{return structuredClone(n),n}catch{return q(n)}},o=n=>{let s=e.get(n);if(s!==void 0)return s;let i={};e.set(n,i);for(let a of Object.getOwnPropertyNames(n)){let c=n[a];typeof c!="function"&&(i[a]=r(c))}for(let a of["name","message","stack"]){let c=n[a];c!==void 0&&!(a in i)&&(i[a]=c)}return i};if(t instanceof Error)return{type:"UnknownError",error:o(t)};try{return{type:"UnknownError",error:structuredClone(t)}}catch{try{return{type:"UnknownError",error:String(t)}}catch{return{type:"UnknownError",error:"[Unserializable Object]"}}}},ln=t=>{let e=Cr.is(t)&&t.reason.type==="PanicAbortReason"?t.reason.defect:t,r=Object.prototype.toString.call(e);if(r==="[object DOMException]"){let{name:o,message:n}=e;return new Error(`${o}: ${n}`,{cause:e})}return e instanceof Error||r==="[object Error]"?e:new Error(`Defect: ${q(e)}`,{cause:t})};var th=()=>{let t=0;return()=>g([t++,ur])},qC=()=>{let t=!1;return()=>t?N(ct()):(t=!0,g([0,ur]))},$C=t=>Cl(t)(th),_0=t=>()=>{let e=ft(t);return()=>g([e,e])},Ol=(t,e=2)=>(Ut(da,e),()=>{let r=ft(t),o=0;return()=>{o++;let n=r===0?ur:r*Math.pow(e,o-1),s=dr(n);return g([s,s])}}),UC=t=>()=>{let e=ft(t),r=0;return()=>{r++;let o=dr(e*r);return g([o,o])}},jC=t=>()=>{let e=ft(t),r=1;return()=>{let o=dr(e*jf(r));return r=Uf.orNull(uo(r))??r,g([o,o])}},FC=t=>e=>{let r=ft(t),o=Ps(e),n=0;return()=>{let{elapsed:s}=o(),i=(n+1)*r,a=r>0&&s>=i,c=r===0?0:s%r,l=r-c,h=a?0:l;return g([n++,h])}},Ps=t=>{let e=null,r=null;return()=>{let o=t.time.performance.now();e??=o;let n=dr(o-e),s=r===null?ur:dr(o-r);return r=o,{elapsed:n,elapsedSincePrevious:s}}},zC=t=>e=>{let r=ft(t),o=Ps(e),n=0;return()=>{let{elapsed:s}=o(),i=r===0?0:s%r,a=r===0?0:r-i;return g([n++,a])}},K0=t=>Cl(1)(_0(t)),VC=(...t)=>X0(...t.map(e=>K0(e))),Q0=t=>{let e=Ps(t);return()=>g([e().elapsed,ur])},_C=t=>rh(e=>e<=ft(t))(Q0),KC=t=>G0(()=>t)(th),QC=(t,e)=>()=>{let r=t;return()=>{let o=r;return r=e(r),g([o,ur])}},Cl=t=>e=>r=>{let o=e(r),n=0;return s=>(n++,n>t?N(ct()):o(s))},JC=t=>{let e=ft(t);return r=>o=>{let n=r(o),s=Ps(o),i=!1;return a=>{if(i)return N(ct());let{elapsed:c}=s();return c>=e?(i=!0,N(ct())):n(a)}}},Al=t=>{let e=ft(t);return r=>o=>{let n=r(o);return s=>{let i=n(s);if(!i.ok)return i;let[a,c]=i.value;return g([a,xl(c,e)])}}},Il=(t="50%",e="below")=>{let r=Wf(t);return HC(r,e==="around"?1+r:1)},HC=(t,e)=>r=>o=>{let n=r(o);return s=>{let i=n(s);if(!i.ok)return i;let[a,c]=i.value,l=1-t,h=c*(l+o.random.next()*(e-l));return g([a,dr(h)])}},GC=t=>{let e=ft(t);return r=>o=>{let n=r(o),s=!0;return i=>{let a=n(i);return a.ok&&s?(s=!1,g([a.value[0],e])):a}}},YC=t=>{let e=ft(t);return J0(r=>r+e)},J0=t=>e=>r=>{let o=e(r);return n=>{let s=o(n);if(!s.ok)return s;let[i,a]=s.value,c=t(a);return Ut(vs,c),g([i,dr(c)])}},XC=t=>e=>{let r=t(e),o=Ps(e),n=ur;return s=>{let{elapsedSincePrevious:i}=o(),a=r(s);if(!a.ok)return a;let[c,l]=a.value,h=dr(i-n),p=dr(l-h);return n=p,g([c,p])}},ZC=t=>e=>r=>{let o=e(r),n=!1;return s=>n?N(ct()):t(s)?o(s):(n=!0,N(ct()))},e1=t=>e=>r=>{let o=e(r),n=!1;return s=>n?N(ct()):t(s)?(n=!0,N(ct())):o(s)},rh=t=>e=>r=>{let o=e(r),n=!1;return s=>{if(n)return N(ct());let i=o(s);return i.ok?t(i.value[0])?i:(n=!0,N(ct())):i}},H0=t=>e=>r=>{let o=e(r),n=!1;return s=>{if(n)return N(ct());let i=o(s);return i.ok&&t(i.value[0])?(n=!0,N(ct())):i}},t1=t=>{let e=ft(t);return r=>o=>{let n=r(o),s=Ps(o),i=!1;return a=>{if(i)return N(ct());let{elapsedSincePrevious:c}=s();c>=e&&(n=r(o));let l=n(a);return l.ok||(i=!0),l}}},G0=t=>e=>r=>{let o=e(r);return n=>{let s=o(n);if(!s.ok)return s;let[i,a]=s.value;return g([t(i),a])}};function Y0(t){return t===void 0?()=>e=>g([e,ur]):e=>{let r=t(e);return o=>{let n=r(o);return n.ok?g([o,n.value[1]]):n}}}var oh=(t,e)=>r=>o=>{let n=r(o),s=t;return i=>{let a=n(i);if(!a.ok)return a;let[c,l]=a.value;return s=e(s,c),g([s,l])}},r1=t=>oh(-1,e=>e+1)(t),o1=t=>e=>{let r=t(e);return o=>{let n=r(o);if(!n.ok)return n;let[,s]=n.value;return g([s,s])}},Rl=t=>oh([],(e,r)=>[...e,r])(t),n1=t=>Rl(Y0(t)),s1=t=>e=>Rl(rh(t)(e)),i1=t=>e=>Rl(H0(t)(e)),X0=(...t)=>e=>{let r=0,o=t.length>0?t[0](e):null;return n=>{for(;o!==null;){let s=o(n);if(s.ok)return s;r++,o=r<t.length?t[r](e):null}return N(ct())}},a1=(t,e)=>r=>{let o=t(r),n=e(r),s=!1;return i=>{if(s)return N(ct());let a=o(i),c=n(i);if(!a.ok||!c.ok)return s=!0,N(ct());let[l,h]=a.value,[p,f]=c.value;return g([[l,p],qf(h,f)])}},c1=(t,e)=>r=>{let o=t(r),n=e(r);return s=>{if(o===null&&n===null)return N(ct());let i=o?.(s)??null,a=n?.(s)??null;if(i!==null&&!i.ok&&(o=null),a!==null&&!a.ok&&(n=null),!i?.ok)return a?.ok?a:N(ct());if(!a?.ok)return i;let[c,l]=i.value,[h,p]=a.value,f=xl(l,p);return l<=p?g([c,f]):g([h,f])}},l1=(t,e)=>r=>o=>{let n=r(o),s=e(o),i=!1;return a=>{if(i)return N(ct());let c=t(a)?s(a):n(a);return c.ok||(i=!0),c}},u1=t=>e=>r=>{let o=e(r);return n=>{let s=o(n);return s.ok&&t(s.value[0]),s}},d1=t=>e=>r=>{let o=e(r);return n=>(t(n),o(n))},p1=Il("100%")(Al("20s")(Cl(2)(Ol("50ms"))));var f1=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},h1=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),Z0=Il("100%")(Al("30s")(Ol("100ms"))),m1=ft("30s"),y1=(t,{protocols:e,binaryType:r,onOpen:o,onClose:n,shouldRetryOnClose:s=ls,onMessage:i,onError:a,schedule:c=Z0,healthyConnectionDuration:l=m1,WebSocketConstructor:h=globalThis.WebSocket}={})=>async p=>{let f={stack:[],error:void 0,hasError:!1};try{let m=f1(f,new AsyncDisposableStack,!0),d=ft(l),y=null,b=!1,x=null,w=!1,C=()=>{y&&(y.onopen=null,y.onclose=null,y.onmessage=null,y.onerror=null,y.readyState!==y.CLOSING&&y.readyState!==y.CLOSED&&y.close(),y=null)},E=Io(({resolve:T})=>{C(),x=T;let S=We(()=>new h(t,Y.is(e)?e:e&&[...e]));if(!S.ok){x=null,a?.({type:"WebSocketCreateError",error:S.error}),T(g());return}y=S.value,r&&(y.binaryType=r);let L=!1,k=null;return y.onopen=()=>{L=!0,k=p.deps.time.performance.now(),o?.()},y.onclose=v=>{k!==null&&lo(k,p.deps.time.performance.now())>=d&&(b=!0),n?.(v),s(v)?T(N({type:"WebSocketConnectionCloseError",event:v})):T(g())},y.onmessage=v=>{i?.(v.data)},y.onerror=v=>{let D=L?{type:"WebSocketConnectionError",event:v}:{type:"WebSocketConnectError",event:v};a?.(D),D.type==="WebSocketConnectError"&&T(N(D))},()=>{x=null,C()}}),R=T=>{let S=c(T);return L=>(b&&(b=!1,S=c(T)),S(L))};m.use(p.daemon(Zf(E,R))).then(T=>{w=!0,!T.ok&&T.error.type==="RetryError"&&a?.(T.error)});let B=m.move();return g({send:T=>!y||y.readyState===y.CONNECTING?N({type:"WebSocketSendError"}):(y.send(nh(T)),g()),getReadyState:()=>B.disposed||w?"closed":y?g1[y.readyState]:"connecting",isOpen:()=>!B.disposed&&y?.readyState===globalThis.WebSocket.OPEN,reconnect:()=>{let T=x;B.disposed||!T||!y||y.readyState!==y.CONNECTING&&y.readyState!==y.OPEN||(y.readyState===y.OPEN&&(b=!0),x=null,C(),T(N({type:"WebSocketReconnectError"})))},[Symbol.asyncDispose]:()=>B.disposeAsync()})}catch(m){f.error=m,f.hasError=!0}finally{let m=h1(f);m&&await m}},nh=t=>pt.is(t)?Qp.is(t.buffer)?t:new globalThis.Uint8Array(t):t,g1={[globalThis.WebSocket.CONNECTING]:"connecting",[globalThis.WebSocket.OPEN]:"open",[globalThis.WebSocket.CLOSING]:"closing",[globalThis.WebSocket.CLOSED]:"closed"},Dl=V("WebSocketUrl",ua,t=>eN(t)?g():N({type:"WebSocketUrl",value:t}),Tx),sh=Fe("WebSocketUrlFromString",Y,Dl,{from:t=>{let e=rf.fromUnknown(t);return e.ok&&eN(e.value)?g(e.value):N({type:"WebSocketUrlFromString",value:t})},to:t=>t},Ox),eN=t=>{if(!(t.startsWith("ws://")||t.startsWith("wss://"))||t.includes("#"))return!1;let{username:e,password:r,hostname:o,port:n,pathname:s,search:i}=new URL(t);if(e!==""||r!=="")return!1;let a=o.split(".");return a.at(-1)===""&&a.pop(),a.join(".").length<=253&&a.every(c=>c.length>=1&&c.length<=63)&&n!=="0"&&/^(?:\[[\d:a-f]+\]|[\w!$&'()*+,.;=~-]+)$/u.test(o)&&/^(?:[\w!$&'()*+,./:;=@~-]|%[\dA-Fa-f]{2})*$/u.test(s)&&/^(?:[\w!$&'()*+,./:;=?@[\]~-]|%[\dA-Fa-f]{2})*$/u.test(i)},b1=(t={})=>{let e=[],r=[],o=[],n=new Map,s=a=>{let c=n.get(a);return M(c,`Test WebSocket for ${a} does not exist.`),c};return Object.assign((a,c)=>()=>{if(t.throwOnCreate)throw new Error("testCreateWebSocket is configured to throw on create");e.push(a);let l={options:c,readyState:t.isOpen??!0?"open":"connecting",isDisposed:!1,isWaitingToRetry:!1};return n.set(a,l),g({send:h=>l.isDisposed||l.readyState!=="open"?N({type:"WebSocketSendError"}):(o.push({url:a,data:nh(h)}),g()),getReadyState:()=>l.isDisposed?"closed":l.readyState,isOpen:()=>!l.isDisposed&&l.readyState==="open",reconnect:()=>{l.isDisposed||l.readyState==="closed"||l.isWaitingToRetry||(l.readyState="connecting",l.isWaitingToRetry=!0,r.push(a))},[Symbol.asyncDispose]:()=>(l.isDisposed=!0,l.readyState="closed",Promise.resolve())})},{createdUrls:e,reconnectedUrls:r,sentMessages:o,message:(a,c)=>{let l=s(a);M(!l.isDisposed,`Test WebSocket for ${a} is disposed.`),l.options?.onMessage?.(c)},open:a=>{let c=s(a);M(!c.isDisposed,`Test WebSocket for ${a} is disposed.`),c.readyState="open",c.isWaitingToRetry=!1,c.options?.onOpen?.()},close:(a,c={})=>{let l=s(a);M(!l.isDisposed,`Test WebSocket for ${a} is disposed.`),l.readyState="closed",l.options?.onClose?.({code:1006,reason:"",wasClean:!1,...c}),queueMicrotask(()=>{l.readyState==="closed"&&!l.isDisposed&&(l.readyState="connecting",l.isWaitingToRetry=!0)})},error:(a,c)=>{let l=s(a);M(!l.isDisposed,`Test WebSocket for ${a} is disposed.`),l.options?.onError?.(c)}})},x1=async t=>{let e=new globalThis.WebSocket(t);return e.binaryType="arraybuffer",await new Promise((r,o)=>{let n=()=>{i(),r()},s=()=>{i(),e.close(),o(new Error("WebSocket connection failed"))},i=()=>{e.removeEventListener("open",n),e.removeEventListener("error",s)};e.addEventListener("open",n,{once:!0}),e.addEventListener("error",s,{once:!0})}),{socket:e,send:r=>{e.send(nh(r))},waitForMessage:()=>new Promise((r,o)=>{if(e.readyState===globalThis.WebSocket.CLOSED){o(new Error("WebSocket closed before message"));return}let n=a=>{if(i(),typeof a.data=="string"){r(a.data);return}r(new globalThis.Uint8Array(a.data))},s=()=>{i(),o(new Error("WebSocket closed before message"))},i=()=>{e.removeEventListener("message",n),e.removeEventListener("close",s)};e.addEventListener("message",n,{once:!0}),e.addEventListener("close",s,{once:!0})}),[Symbol.asyncDispose]:async()=>{if(e.readyState===globalThis.WebSocket.CLOSED)return;let r=new Promise(o=>{e.addEventListener("close",()=>o(),{once:!0})});e.close(),await r}}};var w1=(t=navigator.locks)=>{let e=xt({randomBytes:$n()}),r=o=>o.flatMap(n=>n.name?.endsWith(e)===!0?[{...n,name:n.name.slice(0,-e.length)}]:[]);return{request:(o,n,s)=>{let[i,a]=typeof n=="function"?[{},n]:[n,s];return t.request(`${o}${e}`,i,c=>a(c&&{mode:c.mode,name:o}))},query:async()=>{let o=await t.query();return{...o.held&&{held:r(o.held)},...o.pending&&{pending:r(o.pending)}}}}},Ro=t=>async e=>{let r=Promise.withResolvers(),o=Promise.withResolvers(),n=e.deps.lockManager.request(tN(t),{mode:"exclusive",signal:e.signal},async()=>{r.resolve(),await o.promise});return n.catch(r.reject),await r.promise,g({[Symbol.asyncDispose]:async()=>{o.resolve(),await n}})},ka=t=>(e,r)=>{let o=new AbortController,n=null;return t.lockManager.request(tN(e),{mode:"exclusive",signal:o.signal},async()=>{let i=Promise.withResolvers();n=i.resolve,r(),await i.promise}).catch(Sr),{[Symbol.dispose]:()=>{o.abort(),n?.()}}},tN=t=>`evolu-leaderlock-${t}`;function N1({lookupA:t=ye,lookupB:e=ye}={}){let r=Vt({lookup:t}),o=Vt({lookup:e}),n=0,s=(i,a)=>{let c=r.get(i);Bl(c),Bl(c.has(a)),c.delete(a),c.size===0&&r.delete(i);let l=o.get(a);Bl(l),Bl(l.has(i)),l.delete(i),l.size===0&&o.delete(a),n--};return{add:(i,a)=>{let c=r.getKey(i)??i,l=o.getKey(a)??a,h=r.get(c);if(h?.has(l))return!1;h||(h=jn({lookup:e}),r.set(c,h)),h.add(l);let p=o.get(l);return p||(p=jn({lookup:t}),o.set(l,p)),p.add(c),n++,!0},remove:(i,a)=>r.get(i)?.has(a)?(s(i,a),!0):!1,removeByA:i=>{let a=r.get(i);if(!a)return!1;for(let c of a.keys())s(i,c);return!0},removeByB:i=>{let a=o.get(i);if(!a)return!1;for(let c of a.keys())s(c,i);return!0},iterateA:i=>o.get(i)?.keys()??at.values(),iterateB:i=>r.get(i)?.keys()??at.values(),*[Symbol.iterator](){for(let[i,a]of r)for(let c of a.keys())yield[i,c]},has:(i,a)=>r.get(i)?.has(a)??!1,hasA:i=>r.has(i),hasB:i=>o.has(i),clear:()=>{r.clear(),o.clear(),n=0},aCount:()=>r.size,bCount:()=>o.size,bCountForA:i=>r.get(i)?.size??0,aCountForB:i=>o.get(i)?.size??0,size:()=>n}}var Bl=t=>{M(!!t,"Relation mapping inconsistency")};function Sa({lookupA:t=ye,lookupB:e=ye}={}){let r=Vt({lookup:t}),o=Vt({lookup:e});return{increment:(n,s)=>{let i=r.get(n),a=i?i.a:n,c=o.get(s),l=c?c.b:s;i||(i={a,countsByB:Vt({lookup:e})},r.set(a,i));let h=i.countsByB.get(l);if(h){let p=h+1;return i.countsByB.set(l,p),{a,b:l,count:p}}return i.countsByB.set(l,Ft),c?c.as.add(a):o.set(l,{b:l,as:jn({lookup:t,values:[a]})}),{a,b:l,count:Ft}},decrement:(n,s)=>{let i=r.get(n),a=o.get(s),c=i?.countsByB.get(s);M(i&&a&&c,"RefCountedRelation pair must exist before decrement.");let l=c-1;return l>0?i.countsByB.set(a.b,l):(i.countsByB.delete(a.b),i.countsByB.size===0&&r.delete(i.a),a.as.delete(i.a),a.as.size===0&&o.delete(a.b)),{a:i.a,b:a.b,count:l}},getCount:(n,s)=>r.get(n)?.countsByB.get(s)??Bt,getAs:n=>[...o.get(n)?.as??at],getBs:n=>[...r.get(n)?.countsByB.keys()??at],hasA:n=>r.has(n),hasB:n=>o.has(n),getEntries:()=>{let n=[];for(let{a:s,countsByB:i}of r.values())for(let[a,c]of i)n.push([s,a,c]);return n},clear:()=>{r.clear(),o.clear()}}}var Yt=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},Xt=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),rN=(t,{idleDisposeAfter:e,onDisposed:r}={})=>o=>{let n=o.create(),{leakDetector:s}=o.deps,i,a,c=new Set,l=zn(),h={},p=async()=>{let y={stack:[],error:void 0,hasError:!1};try{if(!i)return;let b=Yt(y,new AsyncDisposableStack,!0);r&&b.defer(r),b.use(i),i=void 0}catch(b){y.error=b,y.hasError=!0}finally{let b=Xt(y);b&&await b}},f=l.withLock(async()=>(a=void 0,c.size===0&&await p(),g()));n.defer(()=>{s.untrack(h)}),n.defer(p),n.defer(()=>{for(let y of c)s.untrack(y);c.clear()}),n.defer(()=>{a=void 0});let m=y=>{let b={};c.add(b);let x=()=>c.delete(b)?(s.untrack(b),c.size>0||n.getState().type!=="Running"||(e!==void 0?a=n.abortable(async C=>(await C.ok(cn(e)),C(f))):n.abortable(f)),!0):!1,w={resource:i,created:y,release:x,[Symbol.dispose]:()=>{x()}};return s.track(w,{name:"Lease",isLeaked:()=>c.has(b)},b),w},d={acquire:()=>n(l.withLock(async y=>{a&&(a.abort(),a=void 0);let b=i===void 0;return i??=await y.ok(t),y.signal.throwIfAborted(),g(m(b))})),acquireCurrent:()=>n(l.withLock(()=>i?(a&&(a.abort(),a=void 0),g(m(!1))):g(void 0))),use:y=>async b=>{let x={stack:[],error:void 0,hasError:!1};try{let w=Yt(x,await b.ok(d.acquire),!1);return await b(y(w.resource,w.created))}catch(w){x.error=w,x.hasError=!0}finally{Xt(x)}},snapshot:()=>({leaseCount:c.size,hasResource:i!==void 0,idleDisposePending:a!==void 0,mutex:l.snapshot()}),[Symbol.asyncDispose]:()=>n[Symbol.asyncDispose]()};return s.track(d,{name:"SharedResource",isLeaked:()=>n.getState().type==="Running"},h),g(d)},k1=t=>async e=>{let r={stack:[],error:void 0,hasError:!1};try{let{leakDetector:o}=e.deps,n,s=Yt(r,new AsyncDisposableStack,!0),i=s.use(e.create()),a=zn(),c={},l=f=>a.withLock(async m=>{if(n!==void 0&&n!==f)return g();let d=n;await h();let y=await m.ok(t);if(M(y!==d,"ResettableResource create must return a fresh object identity."),m.signal.aborted){let b={stack:[],error:void 0,hasError:!1};try{let x=Yt(b,y,!0)}catch(x){b.error=x,b.hasError=!0}finally{let x=Xt(b);x&&await x}}return m.signal.throwIfAborted(),n=y,g()}),h=async()=>{let f={stack:[],error:void 0,hasError:!1};try{let m=Yt(f,n,!0);n=void 0}catch(m){f.error=m,f.hasError=!0}finally{let m=Xt(f);m&&await m}};i.defer(()=>{o.untrack(c)}),i.defer(h),await i.ok(l(void 0)),e.signal.throwIfAborted();let p={get:()=>n,reset:f=>()=>i(l(f)),[Symbol.asyncDispose]:()=>i[Symbol.asyncDispose]()};return o.track(p,{name:"ResettableResource",isLeaked:()=>i.getState().type==="Running"},c),s.move(),g(p)}catch(o){r.error=o,r.hasError=!0}finally{let o=Xt(r);o&&await o}};function Ml(t,{idleDisposeAfter:e,lookup:r=ye,onDisposed:o}={}){return n=>{let s=n.create(),{leakDetector:i}=n.deps,a=Vt({lookup:r}),c=Na({lookup:r}),l=new AsyncDisposableStack,h={},p=(d,y)=>{l.disposed||(a.delete(d),s.getState().type==="Running"&&s.abortable(async()=>(await y[Symbol.asyncDispose](),g())))};l.defer(async()=>{let d={stack:[],error:void 0,hasError:!1};try{let y=Yt(d,new AsyncDisposableStack,!0);for(let b of a.values())y.use(b);a.clear()}catch(y){d.error=y,d.hasError=!0}finally{let y=Xt(d);y&&await y}}),l.use(s),s.defer(()=>{i.untrack(h)});let f=(d,y)=>{d.aborted&&(y?.release(),d.throwIfAborted())},m={acquire:d=>()=>s(c.withLock(d,async y=>{let b=a.get(d);b||(b=await y.ok(rN(t(d),{idleDisposeAfter:e,onDisposed:()=>{ke(b,"SharedResource must be assigned before its resource is disposed."),c.isIdle(d)&&p(d,b),o?.(d)}})),a.set(d,b));let x=await y.ok(b.acquire);return f(y.signal,x),g(x)})),acquireCurrent:d=>()=>s(c.withLock(d,async y=>{let b=a.get(d);if(!b)return g(void 0);let x=await y.ok(b.acquireCurrent);return f(y.signal,x),x||p(d,b),g(x)})),use:(d,y)=>async b=>{let x={stack:[],error:void 0,hasError:!1};try{let w=Yt(x,await b.ok(m.acquire(d)),!1);return await b(y(w.resource,w.created))}catch(w){x.error=w,x.hasError=!0}finally{Xt(x)}},forEachCurrent:d=>async y=>{let b={stack:[],error:void 0,hasError:!1};try{let x=Yt(b,new DisposableStack,!1),w=[];for(let[C]of[...a]){let E=await y.ok(m.acquireCurrent(C));E&&w.push([x.use(E),C]),y.signal.throwIfAborted()}for(let[C,E]of w)d(C.resource,E);return g()}catch(x){b.error=x,b.hasError=!0}finally{Xt(b)}},snapshot:()=>{let d=new Map;for(let[y,b]of a)d.set(y,b.snapshot());return{resourcesByKey:d}},[Symbol.asyncDispose]:()=>l.disposeAsync()};return i.track(m,{name:"SharedResourceByKey",isLeaked:()=>s.getState().type==="Running"},h),g(m)}}var ih=(t,{idleDisposeAfter:e,resourceLookup:r=ye,claimLookup:o=ye,onFirstClaimAdded:n,onLastClaimRemoved:s}={})=>async i=>{let a={stack:[],error:void 0,hasError:!1};try{let c=i.create(),{leakDetector:l}=i.deps,h=Sa({lookupA:o,lookupB:r}),p=Vt({lookup:r}),f=new Set,m={},d=(B,T,S)=>{try{s?.(B,T,S)}catch(L){c.panic(L)}},y=Yt(a,new AsyncDisposableStack,!0),b=y.use(new AsyncDisposableStack);y.use(c);let x=(B,T=!0)=>{let S={stack:[],error:void 0,hasError:!1};try{if(!f.delete(B))return!1;l.untrack(B);let L=Yt(S,B.resourceLeases,!1);for(let k of B.resourceKeys){let v=h.decrement(B.claim,k);if(v.count>0)continue;let D=p.get(v.b);ke(D,"Resource must exist while its claim-resource pair is retained."),T&&d(v.a,D,v.b),h.hasB(v.b)||p.delete(v.b)}return!0}catch(L){S.error=L,S.hasError=!0}finally{Xt(S)}},w=()=>{let B={stack:[],error:void 0,hasError:!1};try{let T=Yt(B,new DisposableStack,!1);T.defer(()=>{h.clear(),p.clear()});for(let S of f)T.defer(()=>{x(S,!1)})}catch(T){B.error=T,B.hasError=!0}finally{Xt(B)}};c.defer(()=>{l.untrack(m)}),c.defer(w);let C=b.use(await c.ok(Ml(t,{idleDisposeAfter:e,lookup:r})));i.signal.throwIfAborted();let E=y.move(),R=(B,T,S)=>()=>{let L=[T[0],...T.slice(1)];return c(async k=>{let v={stack:[],error:void 0,hasError:!1};try{M(jn({lookup:r,values:L}).size===L.length,"resourceKeys must not contain lookup duplicates.");let D=Yt(v,new DisposableStack,!1),[P,...F]=L,A=[[D.use(await k.ok(C.acquire(P))).resource,P]],_=[];for(let U of F){let Z=D.use(await k.ok(C.acquire(U)));A.push([Z.resource,U])}k.signal.throwIfAborted();for(let[U,Z]of A){let ne=h.increment(B,Z);p.getOrInsert(ne.b,U),ne.count===1&&_.push([ne.a,U,ne.b])}let W={claim:B,resourceKeys:L,resourceLeases:D.move()};f.add(W);let Q=()=>x(W),j={release:Q,[Symbol.dispose]:()=>{Q()}};l.track(j,{name:"ClaimLease",isLeaked:()=>f.has(W)},W);try{let U={stack:[],error:void 0,hasError:!1};try{let Z=!1,ne=Yt(U,new DisposableStack,!1);for(let[Ne,me,ve]of _)n?.(Ne,me,ve),ne.defer(()=>{Z||d(Ne,me,ve)});Z=!0}catch(Z){U.error=Z,U.hasError=!0}finally{Xt(U)}}catch(U){throw x(W,!1),U}return g(S(j,A))}catch(D){v.error=D,v.hasError=!0}finally{Xt(v)}})},I={claim:(B,T)=>R(B,T,S=>S),use:(B,T,S)=>async L=>{let k={stack:[],error:void 0,hasError:!1};try{let v=await L.ok(R(B,T,(P,F)=>({claimLease:P,resources:F}))),D=Yt(k,v.claimLease,!1);return await L(S(v.resources))}catch(v){k.error=v,k.hasError=!0}finally{Xt(k)}},getClaimsForResource:B=>new Set(h.getAs(B)),getResourceKeysForClaim:B=>new Set(h.getBs(B)),forEachResourceForClaim:(B,T)=>{let S=h.getBs(B).map(L=>{let k=p.get(L);return ke(k,"Resource must exist for every active claim-resource relation."),[k,L]});for(let[L,k]of S)T(L,k)},snapshot:()=>{let B=new Map;for(let[T,S,L]of h.getEntries())B.getOrInsertComputed(T,()=>new Map).set(S,L);return{claimLeaseCount:f.size,retainCountsByResourceKeyByClaim:B,resourcesByKey:C.snapshot().resourcesByKey}},[Symbol.asyncDispose]:()=>E.disposeAsync()};return l.track(I,{name:"SharedResourceByKeyWithClaims",isLeaked:()=>c.getState().type==="Running"},m),g(I)}catch(c){a.error=c,a.hasError=!0}finally{let c=Xt(a);c&&await c}};var Ws=V("OwnerId",co),oN=V("OwnerIdBytes",sf),jr=t=>lr(t),Do=t=>Ur(t),Pl=Ee.orThrow(16),Wl=V("OwnerEncryptionKey",Ef),Ll=V("OwnerWriteKey",ml),nN=t=>t.randomBytes.create(16),ql=V("OwnerSecret",ge(ml,kf,Sf,vf,yl)),ah=t=>t.randomBytes.create(32),ch=ah({randomBytes:Un({randomLib:Fn()})}),lh=t=>wg(t,Gi),sN=t=>kp(t,Gi),$l=t=>({id:Do(Os(t,["Evolu","OwnerIdBytes"]).slice(0,16)),encryptionKey:Os(t,["Evolu","OwnerEncryptionKey"]),writeKey:Os(t,["Evolu","OwnerWriteKey"]).slice(0,16)}),uh=t=>({...$l(t),type:"AppOwner",mnemonic:lh(t)}),iN=uh(ch),aN=t=>({...$l(t),type:"ShardOwner"}),cN=(t,e)=>{let r=Os(t.encryptionKey,e);return{...$l(r),type:"ShardOwner"}},lN=t=>({...$l(t),type:"SharedOwner"}),uN=t=>({type:"SharedReadonlyOwner",id:t.id,encryptionKey:t.encryptionKey}),va=3e4,dh=V("RelayUrl",Dl,t=>t.includes("?")?N({type:"RelayUrl",value:t}):g(),t=>`The value ${JSON.stringify(t.value)} is not a relay URL, which has no query.`),dN=Fe("RelayUrlFromString",Y,dh,{from:t=>{let e=sh.fromUnknown(t);return e.ok&&!e.value.includes("?")?g(e.value):N({type:"RelayUrlFromString",value:t})},to:t=>t},t=>`The value ${JSON.stringify(t.value)} is not a valid relay URL.`),pN=t=>({type:"WebSocket",url:`${t.url}?ownerId=${t.ownerId}`}),fN=t=>{let e=t.indexOf("?");if(e===-1)return null;let r=new URLSearchParams(t.slice(e+1)).getAll("ownerId");return r.length===1?us(Ws.fromUnknown(r[0])):null};var Kn=Ui,Ia=ji,wN=Ac,NN=Uy,S1=Ic,gh=t=>{let e=0;for(let n of t)e+=n.length;let r=new Uint8Array(e),o=0;for(let n of t)r.set(n,o),o+=n.length;return r},Re=class extends Error{constructor(e){super(e),this.name="BufferError"}},mt=t=>{let e=t?.length??0;_n(e,"arrayLike.length");let r=t?new Uint8Array(t):new Uint8Array(512),o=e;return{getCapacity:()=>r.length,getLength:()=>o,extend:s=>{let i=s.length;_n(i,"arg.length");let a=o+i;if(_n(a,"Buffer length"),r.length<a){let c=r,l=Math.max(r.length*2,a);r=new Uint8Array(l),r.set(c)}r.set(s,o),o=a},shift:()=>{bN(o,1);let s=r[0];return r=r.subarray(1),o--,s},shiftN:s=>{bN(o,s);let i=r.subarray(0,s);return r=r.subarray(s),o=o-s,i},truncate:s=>{if(s>o)throw new Re("Cannot truncate to a length greater than current");o=s},reset:()=>{o=0},unwrap:()=>r.length===o?r:r.subarray(0,o)}},zl=(t,e)=>{Ql(t,e)},Vl=t=>{let e=Jl(t);if(typeof e!="number")throw new Re("Expected an encoded number.");return e},bh=(t,e)=>{let r=0;for(let o=0;o<e.length&&o<8;o++)e[o]&&(r|=1<<o);t.extend([r])},xh=(t,e)=>{let r=t.shift(),o=Math.min(e,8),n=new Array(o);for(let s=0;s<o;s++)n[s]=(r&1<<s)!==0;return n},_e=(t,e)=>{if(e===0){t.extend([0]);return}let r=BigInt(e),o=[];for(;r!==0n;){let n=Number(r&127n);o.push(n),r>>=7n}for(let n=0;n<o.length-1;n++)o[n]|=128;t.extend(o)},Zt=t=>{let e=0n,r=0n,o=0;for(let s=0;s<8&&(o=t.shift(),e|=BigInt(o&127)<<r,(o&128)!==0);s++)r+=7n;if((o&128)!==0)throw new Re("Variable-length quantity must terminate within 8 bytes.");let n=Number(e);return _n(n,"Decoded integer"),n},Wo=(t,e)=>{_n(e.length,"Array-like length"),_e(t,e.length)},Lo=Zt,Ra=(t,e)=>{let r=wN(e);Wo(t,r),t.extend(r)},Da=t=>{let e=Lo(t),r=t.shiftN(e),o=NN(r);return r[0]===239&&r[1]===187&&r[2]===191?`\uFEFF${o}`:o},_l=t=>{let e=mt(),r=0,o=null,n=0;return{add:s=>{Object.is(s,o)?(n++,e.truncate(r)):(o=s,n=1),r=e.getLength(),t(e,s),_e(e,n)},getLength:()=>e.getLength(),unwrap:()=>e.unwrap(),checkpoint:()=>{let s=r,i=o,a=n;return()=>{e.truncate(s),r=s,o=i,n=a,n>0&&(t(e,o),_e(e,n))}}}},Kl=(t,e,r)=>{let o=new Array(e),n=0;for(;n<e;){let s=r(),i=Zt(t);if(i===0)throw new Re("Invalid RLE encoding: runLength must be positive");let a=e-n;if(i>a)throw new Re(`Invalid RLE encoding: runLength ${i} exceeds remaining ${a}`);for(let c=0;c<i;c++)o[n]=s,n++}return o},kN=4096,v1=32,$s=1e3,E1=1024*1024,we=new Uint8Array(8192),fr=new DataView(we.buffer),le=0,Ea=0,ph=!1,wh=new Uint8Array(0),SN=new DataView(wh.buffer),ze=wh,po=SN,se=0,Vn=0,jl=0,It=globalThis.String.fromCharCode,hN=Array.from({length:kN},()=>{}),Ql=(t,e)=>{if(ph)throw new Re("Reentrant JSON encoding is not supported.");ph=!0,le=0;try{yh(e),t.extend(we.subarray(0,le))}finally{le=0,Ea=0,ph=!1,we.length>E1&&(we=new Uint8Array(8192),fr=new DataView(we.buffer))}},Jl=t=>{let e=t.unwrap();ze=e,po=new DataView(e.buffer,e.byteOffset,e.byteLength),se=0,jl=e.length;try{let r=Fl();return t.shiftN(se),r}catch(r){throw r instanceof Re?r:new Re("Invalid MessagePack data")}finally{ze=wh,po=SN,se=0,Vn=0,jl=0}},yh=t=>{if(t===null){Ta(192);return}switch(typeof t){case"string":mN(t);return;case"number":{if(Object.is(t,-0)){Ar(9),we[le++]=203,fr.setFloat64(le,t),le+=8;return}if(t>>>0===t){t<128?Ta(t):t<256?(Ar(2),we[le++]=204,we[le++]=t):t<65536?(Ar(3),we[le++]=205,fr.setUint16(le,t),le+=2):(Ar(5),we[le++]=206,fr.setUint32(le,t),le+=4);return}if(Number.isInteger(t)&&t>=-2147483648&&t<0){t>=-32?Ta(256+t):t>=-128?(Ar(2),we[le++]=208,fr.setInt8(le++,t)):t>=-32768?(Ar(3),we[le++]=209,fr.setInt16(le,t),le+=2):(Ar(5),we[le++]=210,fr.setInt32(le,t),le+=4);return}Ar(9),we[le++]=203,fr.setFloat64(le,t),le+=8;return}case"boolean":Ta(t?195:194);return;case"object":{if(Ea>=$s)throw new Re(`JSON nesting exceeds the maximum depth of ${$s}.`);if(Ea++,Array.isArray(t)){let o=t,n=o.length;yN(n,144,220,221);for(let s of o)yh(s);Ea--;return}let e=t,r=Object.keys(e);yN(r.length,128,222,223);for(let o of r)mN(o),yh(e[o]);Ea--}}},mN=t=>{let e=t.length,r=e<32?1:e<256?2:e<65536?3:5;Ar(5+e*3);let o=le;le+=r;for(let s=0;s<e;s++){let i=t.charCodeAt(s);if(i<128)we[le++]=i;else if(i<2048)we[le++]=i>>6|192,we[le++]=i&63|128;else if((i&64512)===55296&&(t.charCodeAt(s+1)&64512)===56320){let a=t.charCodeAt(++s);i=65536+((i&1023)<<10)+(a&1023),we[le++]=i>>18|240,we[le++]=i>>12&63|128,we[le++]=i>>6&63|128,we[le++]=i&63|128}else we[le++]=i>>12|224,we[le++]=i>>6&63|128,we[le++]=i&63|128}let n=le-o-r;if(vN(n,"String byte length"),n<32){we[o]=160|n;return}if(n<256){r===1&&(we.copyWithin(o+2,o+1,le),le++),we[o]=217,we[o+1]=n;return}if(n<65536){if(r<3){let s=3-r;we.copyWithin(o+3,o+r,le),le+=s}we[o]=218,fr.setUint16(o+1,n);return}if(r<5){let s=5-r;we.copyWithin(o+5,o+r,le),le+=s}we[o]=219,fr.setUint32(o+1,n)},yN=(t,e,r,o)=>{vN(t,"Collection length"),t<16?Ta(e|t):t<65536?(Ar(3),we[le++]=r,fr.setUint16(le,t),le+=2):(Ar(5),we[le++]=o,fr.setUint32(le,t),le+=4)},Ta=t=>{Ar(1),we[le++]=t},Ar=t=>{let e=le+t;if(_n(e,"Encoded JSON value length"),e<=we.length)return;let r=Math.max(we.length*2,e);_n(r,"JSON encoder capacity");let o=we;we=new Uint8Array(r),we.set(o.subarray(0,le)),fr=new DataView(we.buffer)},vN=(t,e)=>{if(t>4294967295)throw new Re(`${e} exceeds the MessagePack uint32 limit.`)},Fl=()=>{let t=Aa();if(t<=127)return t;if(t<=143)return hh(t-128);if(t<=159)return fh(t-144);if(t<=191)return qs(t-160);if(t>=224)return t-256;switch(t){case 192:return null;case 194:return!1;case 195:return!0;case 202:return gN(4);case 203:return gN(8);case 204:return Aa();case 205:return Oa();case 206:return Ca();case 208:return Bo(1),po.getInt8(se++);case 209:{Bo(2);let e=po.getInt16(se);return se+=2,e}case 210:{Bo(4);let e=po.getInt32(se);return se+=4,e}case 217:return qs(Aa());case 218:return qs(Oa());case 219:return qs(Ca());case 220:return fh(Oa());case 221:return fh(Ca());case 222:return hh(Oa());case 223:return hh(Ca());default:throw new Re(`Unsupported MessagePack marker 0x${t.toString(16).padStart(2,"0")}.`)}},gN=t=>{Bo(t);let e=t===4?po.getFloat32(se):po.getFloat64(se);if(se+=t,!Number.isFinite(e))throw new Re("A decoded JSON number must be finite.");return e},qs=t=>{Bo(t);e:if(t<16){if(t===0)return"";let n=se,s=ze[se++];if((s&128)!==0){se=n;break e}if(t===1)return It(s);let i=ze[se++];if((i&128)!==0){se=n;break e}if(t===2)return It(s,i);let a=ze[se++];if((a&128)!==0){se=n;break e}if(t===3)return It(s,i,a);let c=ze[se++];if((c&128)!==0){se=n;break e}if(t===4)return It(s,i,a,c);let l=ze[se++];if((l&128)!==0){se=n;break e}if(t===5)return It(s,i,a,c,l);let h=ze[se++];if((h&128)!==0){se=n;break e}if(t===6)return It(s,i,a,c,l,h);let p=ze[se++];if((p&128)!==0){se=n;break e}if(t===7)return It(s,i,a,c,l,h,p);let f=ze[se++];if((f&128)!==0){se=n;break e}if(t===8)return It(s,i,a,c,l,h,p,f);let m=ze[se++];if((m&128)!==0){se=n;break e}if(t===9)return It(s,i,a,c,l,h,p,f,m);let d=ze[se++];if((d&128)!==0){se=n;break e}if(t===10)return It(s,i,a,c,l,h,p,f,m,d);let y=ze[se++];if((y&128)!==0){se=n;break e}if(t===11)return It(s,i,a,c,l,h,p,f,m,d,y);let b=ze[se++];if((b&128)!==0){se=n;break e}if(t===12)return It(s,i,a,c,l,h,p,f,m,d,y,b);let x=ze[se++];if((x&128)!==0){se=n;break e}if(t===13)return It(s,i,a,c,l,h,p,f,m,d,y,b,x);let w=ze[se++];if((w&128)!==0){se=n;break e}if(t===14)return It(s,i,a,c,l,h,p,f,m,d,y,b,x,w);let C=ze[se++];if((C&128)!==0){se=n;break e}return It(s,i,a,c,l,h,p,f,m,d,y,b,x,w,C)}let e=se+t,r=[],o="";for(;se<e;){let n=ze[se++];if(n<128)r.push(n);else if(n>=194&&n<=223){mh(e,1);let s=Ls();r.push((n&31)<<6|s)}else if(n>=224&&n<=239){mh(e,2);let s=ze[se];if(n===224&&s<160)throw new Re("Invalid UTF-8 string encoding.");let i=Ls(),a=Ls();r.push((n&15)<<12|i<<6|a)}else if(n>=240&&n<=244){mh(e,3);let s=ze[se];if(n===240&&s<144||n===244&&s>143)throw new Re("Invalid UTF-8 string encoding.");let i=Ls(),a=Ls(),c=Ls(),h=((n&7)<<18|i<<12|a<<6|c)-65536;r.push(55296|h>>10,56320|h&1023)}else throw new Re("Invalid UTF-8 string encoding.");r.length>=4096&&(o+=It(...r),r.length=0)}return r.length>0&&(o+=It(...r)),o},fh=t=>{if(Vn>=$s)throw new Re(`JSON nesting exceeds the maximum depth of ${$s}.`);if(t>jl)throw new Re("Buffer parse ended prematurely");jl-=t;let e=new Array(t);Vn++;for(let r=0;r<t;r++)e[r]=Fl();return Vn--,e},hh=t=>{if(Vn>=$s)throw new Re(`JSON nesting exceeds the maximum depth of ${$s}.`);if(t>(ze.length-se)/2)throw new Re("Buffer parse ended prematurely");let e={};Vn++;for(let r=0;r<t;r++){let o=Aa(),n;if(o>=160&&o<=191)n=Ul(o-160);else if(o===217)n=Ul(Aa());else if(o===218)n=Ul(Oa());else if(o===219)n=Ul(Ca());else throw se--,Fl(),new Re("A decoded JSON object key must be a string.");let s=Fl();n==="__proto__"?Object.defineProperty(e,n,{value:s,configurable:!0,enumerable:!0,writable:!0}):e[n]=s}return Vn--,e},Ul=t=>{if(t>v1)return qs(t);Bo(t);let e=se,r=e+t,o=t>1?po.getUint16(e):t===1?ze[e]:0,n=(t<<5^o)&kN-1,s=hN[n];if(s?.bytes.length===t){let a=0;for(;a<t&&s.bytes[a]===ze[e+a];)a++;if(a===t)return se=r,s.value}let i=qs(t);return hN[n]={bytes:ze.slice(e,r),value:i},i},Ls=()=>{let t=ze[se++];if((t&192)!==128)throw new Re("Invalid UTF-8 string encoding.");return t&63},mh=(t,e)=>{if(t-se<e)throw new Re("Invalid UTF-8 string encoding.")},Aa=()=>(Bo(1),ze[se++]),Oa=()=>{Bo(2);let t=po.getUint16(se);return se+=2,t},Ca=()=>{Bo(4);let t=po.getUint32(se);return se+=4,t},Bo=t=>{if(ze.length-se<t)throw new Re("Buffer parse ended prematurely")},_n=(t,e)=>{if(!Number.isSafeInteger(t)||t<0)throw new Re(`${e} must be a non-negative safe integer.`)},bN=(t,e)=>{if(t<e)throw new Re("Buffer parse ended prematurely")},Nh=V("ByteLength",Ee,t=>Object.is(t,-0)?N({type:"ByteLength",value:t}):g(),kx),Mo=ge("0","1"),Po=ge("0","1","2","3"),EN=ge(ee(de,"B"),ee(fe,de,"B"),ee(fe,de,de,"B"),ee("10",Mo,de,"B"),ee("102",Po,"B")),TN=ge(ee(fe,"KiB"),ee(fe,de,"KiB"),ee(fe,de,de,"KiB"),ee("10",Mo,de,"KiB"),ee("102",Po,"KiB"),ee(fe,".5KiB"),ee(fe,de,".5KiB"),ee(fe,de,de,".5KiB"),ee("10",Mo,de,".5KiB"),ee("102",Po,".5KiB")),ON=ge(ee(fe,"MiB"),ee(fe,de,"MiB"),ee(fe,de,de,"MiB"),ee("10",Mo,de,"MiB"),ee("102",Po,"MiB"),ee(fe,".5MiB"),ee(fe,de,".5MiB"),ee(fe,de,de,".5MiB"),ee("10",Mo,de,".5MiB"),ee("102",Po,".5MiB")),CN=ge(ee(fe,"GiB"),ee(fe,de,"GiB"),ee(fe,de,de,"GiB"),ee("10",Mo,de,"GiB"),ee("102",Po,"GiB"),ee(fe,".5GiB"),ee(fe,de,".5GiB"),ee(fe,de,de,".5GiB"),ee("10",Mo,de,".5GiB"),ee("102",Po,".5GiB")),AN=ge(ee(fe,"TiB"),ee(fe,de,"TiB"),ee(fe,de,de,"TiB"),ee("10",Mo,de,"TiB"),ee("102",Po,"TiB"),ee(fe,".5TiB"),ee(fe,de,".5TiB"),ee(fe,de,de,".5TiB"),ee("10",Mo,de,".5TiB"),ee("102",Po,".5TiB")),T1=ge(EN,TN,ON,CN,AN),IN=Pn("ByteSizeLiteral",T1,(t,e)=>({type:"ByteSizeLiteral",value:e,cause:t}),Nx),xN={B:1,KiB:1024,MiB:1024**2,GiB:1024**3,TiB:1024**4},RN=t=>{if(typeof t=="number")return t;let e=t.endsWith("iB")?t.slice(-3):"B";return M(e in xN,`Unknown byte length unit: ${e}`),Nh.orThrow(Number.parseFloat(t)*xN[e])},O1=Fe("ByteLengthFromString",Y,Nh,{from:t=>{if(IN.is(t))return g(RN(t));if(/^\d+$/u.test(t)){let e=Number(t);if(Number.isSafeInteger(e))return g(e)}return N({type:"ByteLengthFromString",value:t})},to:t=>globalThis.String(t)},Sx);var Hl=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},Gl=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),Yl=ge(rn,na,Y,pt),kh=fa(Yl),Sh=(t,e)=>pt.is(t)&&pt.is(e)?Nc(t,e):t===e,vh=t=>{let e=t.parameters.map(o=>pt.is(o)?["b",Kn(o)]:["j",o]),r=t.options?kr(t.options).toSorted(([o],[n])=>o.localeCompare(n)):[];return JSON.stringify([t.sql,e,r])},Eh=t=>{let[e,r,o]=JSON.parse(t),n=r.map(([i,a])=>i==="b"?Ia(a):a),s=o.length?Object.fromEntries(o):void 0;return{sql:e,parameters:n,...s!==void 0&&{options:s}}},Xl=(t,e)=>async r=>{let o={stack:[],error:void 0,hasError:!1};try{let{createSqliteDriver:n,time:s}=r.deps,i=r.deps.console.child("sql"),a=Hl(o,new AsyncDisposableStack,!0),c=a.use(await r.ok(n(t,e)));i.debug("SQLite driver created");let l=new Map,h=new Map;a.defer(()=>{let m={stack:[],error:void 0,hasError:!1};try{let d=Hl(m,new DisposableStack,!1);d.defer(()=>{l.clear(),h.clear()});for(let y of l.values())d.use(y);for(let y of h.values())for(let{statement:b}of y.values())d.use(b)}catch(d){m.error=d,m.hasError=!0}finally{Gl(m)}});let p=(m,d)=>{let y=l.get(m);return y===void 0&&(y=c.prepare(m),l.set(m,y)),y.exec(d)},f=(m,d)=>{i.trace({query:m});let y=m.options?.logQueryExecutionTime===!0?s.performance.now():null,b=d();if(y!==null){let x=lo(y,s.performance.now());i.log("[logQueryExecutionTime]",{query:m,duration:`${x.toFixed(3)}ms`})}if(m.options?.logExplainQueryPlan){let x=c.exec({...m,sql:`EXPLAIN QUERY PLAN ${m.sql}`});i.log("[logExplainQueryPlan]",m),i.log(A1(x.rows))}return b};return g(it({exec:m=>{let d=f(m,()=>m.options?.prepare===!0?p(m.sql,m.parameters):c.exec(m));return i.trace({result:d}),d},prepared:(m,...d)=>{let y=[],b="";for(let E=0;E<d.length;E++){let R=d[E];typeof R=="object"&&R!=null&&"type"in R?b+=`${E}:${R.sql.length}:${R.sql}`:y.push(typeof R=="number"?rn.orThrow(R):R)}let x=h.get(m),w=x?.get(b);if(w===void 0){let E=te(m,...d).sql;w={sql:E,statement:c.prepare(E)},x===void 0&&(x=new Map,h.set(m,x)),x.set(b,w)}i.trace({query:{sql:w.sql,parameters:y}});let C=w.statement.exec(y);return i.trace({result:C}),C},iterate:(m,d)=>{f(m,()=>{c.iterate(m,d)})},transaction:(m=>{let d={stack:[],error:void 0,hasError:!1};try{i.trace("begin"),p("begin;",[]);let y=Hl(d,new DisposableStack,!1),b=!0;y.defer(()=>{b&&(i.trace("rollback"),p("rollback;",[]))});let x=m();return x!=null&&!x.ok||(i.trace("commit"),p("commit;",[]),b=!1),x}catch(y){d.error=y,d.hasError=!0}finally{Gl(d)}}),export:()=>c.export()},a))}catch(n){o.error=n,o.hasError=!0}finally{let n=Gl(o);n&&await n}},C1=async t=>{let e={stack:[],error:void 0,hasError:!1};try{let r=Hl(e,new AsyncDisposableStack,!0),o=r.use(Gf(t)),n=r.use(await o.ok(Xl(nf,{mode:"memory"}))),s=r.use(o.create({...o.deps,sqlite:n})),i=r.move();return{run:s,sqlite:n,[Symbol.asyncDispose]:()=>i.disposeAsync()}}catch(r){e.error=r,e.hasError=!0}finally{let r=Gl(e);r&&await r}},A1=t=>t.map(e=>{let r=e.parent,o=0;do{let n=t.find(s=>s.id===r);if(!n)break;r=n.parent,o++}while(!0);return`${"  ".repeat(o)}${e.detail}`}).join(`
`),te=(t,...e)=>{let r="",o=[];for(let n=0;n<t.length;n++)if(r+=t[n],n<e.length){let s=e[n];typeof s=="object"&&s!=null&&"type"in s?r+=s.sql:(r+="?",o.push(typeof s=="number"?rn.orThrow(s):s))}return{sql:r.trim(),parameters:o}};te.identifier=t=>({type:"SqlIdentifier",sql:`"${t.replaceAll('"','""')}"`});te.raw=t=>({type:"RawSql",sql:t});var DN=bt({name:Y,sql:Y}),Zl=Wi({name:ss,sql:ss}),I1=bt({tables:Co(Y,hf(Y)),indexes:fa(DN)}),eu=t=>({excludeIndexNamePrefix:e}={})=>{let r=pe();t.sqlite.exec(te`
      select
        sqlite_master.name as tableName,
        table_info.name as columnName
      from sqlite_master
      join pragma_table_info(sqlite_master.name) as table_info;
    `).rows.forEach(({tableName:c,columnName:l})=>{(r[c]??=new Set).add(l)});let n=e?.replaceAll("'","''"),s=n!=null?` and substr(name, 1, length('${n}')) <> '${n}'`:"",a=t.sqlite.exec(te`
        select name, sql
        from sqlite_master
        where
          type = 'index'
          and substr(name, 1, 7) <> 'sqlite_'
          ${te.raw(s)};
      `).rows.map(c=>({name:c.name,sql:c.sql.replace("CREATE INDEX","create index").replace("CREATE UNIQUE INDEX","create unique index")}));return{tables:r,indexes:a}},R1=t=>{let e=eu(t)(),r=[];for(let o in e.tables){let n=t.sqlite.exec(te`
      select * from ${te.identifier(o)};
    `);r.push({name:o,rows:n.rows})}return{schema:e,tables:r}},un=ge(0,1),Th=1,BN=0,Oh=t=>t?Th:BN,Ba=t=>t===Th;function hr(t){return typeof t>"u"||t===void 0}function he(t){return typeof t=="string"}function dn(t){return typeof t=="number"}function Qn(t){return typeof t=="boolean"}function Us(t){return t===null}function MN(t){return t instanceof Date}function js(t){return typeof t=="bigint"}function Qe(t){return typeof t=="function"}function wt(t){return typeof t=="object"&&t!==null}function u(t){return Object.freeze(t)}function Ma(t){return Pt(t)?t:[t]}function Pt(t){return Array.isArray(t)}function St(t){return t}function PN(t){return t instanceof Error?t.message:String(t)}var Te=u({is(t){return t.kind==="AlterTableNode"},create(t){return u({kind:"AlterTableNode",table:t})},cloneWithTableProps(t,e){return u({...t,...e})},cloneWithColumnAlteration(t,e){return u({...t,columnAlterations:t.columnAlterations?[...t.columnAlterations,e]:[e]})}});var ae=u({is(t){return t.kind==="IdentifierNode"},create(t){return u({kind:"IdentifierNode",name:t})}});var Fr=u({is(t){return t.kind==="CreateIndexNode"},create(t){return u({kind:"CreateIndexNode",name:ae.create(t)})},cloneWith(t,e){return u({...t,...e})},cloneWithColumns(t,e){return u({...t,columns:[...t.columns||[],...e]})}});var tu=u({is(t){return t.kind==="CreateSchemaNode"},create(t,e){return u({kind:"CreateSchemaNode",schema:ae.create(t),...e})},cloneWith(t,e){return u({...t,...e})}});var WN=["preserve rows","delete rows","drop"],vt=u({is(t){return t.kind==="CreateTableNode"},create(t){return u({kind:"CreateTableNode",table:t,columns:u([])})},cloneWithColumn(t,e){return u({...t,columns:u([...t.columns,e])})},cloneWithConstraint(t,e){return u({...t,constraints:t.constraints?u([...t.constraints,e]):u([e])})},cloneWithIndex(t,e){return u({...t,indexes:t.indexes?u([...t.indexes,e]):u([e])})},cloneWithFrontModifier(t,e){return u({...t,frontModifiers:t.frontModifiers?u([...t.frontModifiers,e]):u([e])})},cloneWithEndModifier(t,e){return u({...t,endModifiers:t.endModifiers?u([...t.endModifiers,e]):u([e])})},cloneWith(t,e){return u({...t,...e})}});var Wt=u({is(t){return t.kind==="SchemableIdentifierNode"},create(t){return u({kind:"SchemableIdentifierNode",identifier:ae.create(t)})},createWithSchema(t,e){return u({kind:"SchemableIdentifierNode",schema:ae.create(t),identifier:ae.create(e)})}});var pn=u({is(t){return t.kind==="DropIndexNode"},create(t,e){return u({kind:"DropIndexNode",name:Wt.create(t),...e})},cloneWith(t,e){return u({...t,...e})}});var Pa=u({is(t){return t.kind==="DropSchemaNode"},create(t,e){return u({kind:"DropSchemaNode",schema:ae.create(t),...e})},cloneWith(t,e){return u({...t,...e})}});var Fs=u({is(t){return t.kind==="DropTableNode"},create(t,e){return u({kind:"DropTableNode",table:t,...e})},cloneWith(t,e){return u({...t,...e})}});var yt=u({is(t){return t.kind==="AliasNode"},create(t,e){return u({kind:"AliasNode",node:t,alias:e})}});var Lt=u({is(t){return t.kind==="TableNode"},create(t){return u({kind:"TableNode",table:Wt.create(t)})},createWithSchema(t,e){return u({kind:"TableNode",table:Wt.createWithSchema(t,e)})}});function Me(t){return wt(t)&&Qe(t.toOperationNode)}function ru(t){return wt(t)&&"expressionType"in t&&Me(t)}function LN(t){return wt(t)&&"expression"in t&&he(t.alias)&&Me(t)}var fo=u({is(t){return t.kind==="SelectModifierNode"},create(t,e){return u({kind:"SelectModifierNode",modifier:t,of:e})},createWithExpression(t){return u({kind:"SelectModifierNode",rawModifier:t})}});var er=u({is(t){return t.kind==="AndNode"},create(t,e){return u({kind:"AndNode",left:t,right:e})}});var zr=u({is(t){return t.kind==="OrNode"},create(t,e){return u({kind:"OrNode",left:t,right:e})}});var ou=u({is(t){return t.kind==="OnNode"},create(t){return u({kind:"OnNode",on:t})},cloneWithOperation(t,e,r){return u({...t,on:e==="And"?er.create(t.on,r):zr.create(t.on,r)})}});var Vr=u({is(t){return t.kind==="JoinNode"},create(t,e){return u({kind:"JoinNode",joinType:t,table:e,on:void 0})},createWithOn(t,e,r){return u({kind:"JoinNode",joinType:t,table:e,on:ou.create(r)})},cloneWithOn(t,e){return u({...t,on:t.on?ou.cloneWithOperation(t.on,"And",e):ou.create(e)})}});var fn=u({is(t){return t.kind==="BinaryOperationNode"},create(t,e,r){return u({kind:"BinaryOperationNode",leftOperand:t,operator:e,rightOperand:r})}});var qN=u({"=":!0,"==":!0,"!=":!0,"<>":!0,">":!0,">=":!0,"<":!0,"<=":!0,in:!0,"not in":!0,is:!0,"is not":!0,like:!0,"not like":!0,match:!0,ilike:!0,"not ilike":!0,"@>":!0,"<@":!0,"^@":!0,"&&":!0,"?":!0,"?&":!0,"?|":!0,"!<":!0,"!>":!0,"<=>":!0,"!~":!0,"~":!0,"~*":!0,"!~*":!0,"@@":!0,"@@@":!0,"!!":!0,"<->":!0,regexp:!0,"is distinct from":!0,"is not distinct from":!0}),LP=Object.keys(qN),$N=u({"+":!0,"-":!0,"*":!0,"/":!0,"%":!0,"^":!0,"&":!0,"|":!0,"#":!0,"<<":!0,">>":!0}),qP=Object.keys($N),UN=u({"->":!0,"->>":!0}),D1=Object.keys(UN),jN=u({...qN,...$N,"||":!0}),B1=Object.keys(jN),FN=u({exists:!0,"not exists":!0}),$P=Object.keys(FN),zN=u({...FN,"-":!0,not:!0}),M1=Object.keys(zN),UP=[...B1,...D1,...M1,"between","between symmetric"],mr=u({is(t){return t.kind==="OperatorNode"},create(t){return u({kind:"OperatorNode",operator:t})}});function VN(t){return he(t)&&jN[t]}function _N(t){return he(t)&&UN[t]}function KN(t){return he(t)&&zN[t]}var be=u({is(t){return t.kind==="ColumnNode"},create(t){return u({kind:"ColumnNode",column:ae.create(t)})}});var zs=u({is(t){return t.kind==="SelectAllNode"},create(){return u({kind:"SelectAllNode"})}});var qo=u({is(t){return t.kind==="ReferenceNode"},create(t,e){return u({kind:"ReferenceNode",table:e,column:t})},createSelectAll(t){return u({kind:"ReferenceNode",table:t,column:zs.create()})}});var nu=class{#e;get dynamicReference(){return this.#e}get refType(){}constructor(e){this.#e=e}toOperationNode(){return Ch(this.#e)}};function su(t){return wt(t)&&Me(t)&&he(t.dynamicReference)}var _r=u({is(t){return t.kind==="OrderByItemNode"},create(t,e){return u({kind:"OrderByItemNode",orderBy:t,direction:e})},cloneWith(t,e){return u({...t,...e})}});var Ie=u({is(t){return t.kind==="RawNode"},create(t,e){return u({kind:"RawNode",sqlFragments:u(t),parameters:u(e)})},createWithSql(t){return Ie.create([t],[])},createWithChild(t){return Ie.create(["",""],[t])},createWithChildren(t){return Ie.create(new Array(t.length+1).fill(""),t)}});var QN=u({is(t){return t.kind==="CollateNode"},create(t){return u({kind:"CollateNode",collation:ae.create(t)})}});var iu=class t{#e;constructor(e){this.#e=u(e)}desc(){return new t({node:_r.cloneWith(this.#e.node,{direction:Ie.createWithSql("desc")})})}asc(){return new t({node:_r.cloneWith(this.#e.node,{direction:Ie.createWithSql("asc")})})}nullsLast(){return new t({node:_r.cloneWith(this.#e.node,{nulls:"last"})})}nullsFirst(){return new t({node:_r.cloneWith(this.#e.node,{nulls:"first"})})}collate(e){return new t({node:_r.cloneWith(this.#e.node,{collation:QN.create(e)})})}toOperationNode(){return this.#e.node}};var JN=new Set;function Vs(t){JN.has(t)||(JN.add(t),console.log(t))}function Ih(t){return t==="asc"||t==="desc"}function yr(t){if(t.length===2)return[Ah(t[0],t[1])];if(t.length===1){let[e]=t;return Array.isArray(e)?(Vs("orderBy(array) is deprecated, use multiple orderBy calls instead."),e.map(r=>Ah(r))):[Ah(e)]}throw new Error(`Invalid number of arguments at order by! expected 1-2, received ${t.length}`)}function Ah(t,e){let r=P1(t);if(_r.is(r)){if(e)throw new Error("Cannot specify direction twice!");return r}return HN(r,e)}function P1(t){if($o(t))return Et(t);if(su(t))return t.toOperationNode();let[e,r]=t.split(" ");return r?(Vs("`orderBy('column asc')` is deprecated. Use `orderBy('column', 'asc')` instead."),HN(tr(e),r)):tr(t)}function HN(t,e){if(typeof e=="string"){if(!Ih(e))throw new Error(`Invalid order by direction: ${e}`);return _r.create(t,Ie.createWithSql(e))}if(ru(e))return Vs("`orderBy(..., expr)` is deprecated. Use `orderBy(..., 'asc')` or `orderBy(..., (ob) => ...)` instead."),_r.create(t,e.toOperationNode());let r=_r.create(t);return e?e(new iu({node:r})).toOperationNode():r}var _s=u({is(t){return t.kind==="JSONReferenceNode"},create(t,e){return u({kind:"JSONReferenceNode",reference:t,traversal:e})},cloneWithTraversal(t,e){return u({...t,traversal:e})}});var au=u({is(t){return t.kind==="JSONOperatorChainNode"},create(t){return u({kind:"JSONOperatorChainNode",operator:t,values:u([])})},cloneWithValue(t,e){return u({...t,values:u([...t.values,e])})}});var hn=u({is(t){return t.kind==="JSONPathNode"},create(t){return u({kind:"JSONPathNode",inOperator:t,pathLegs:u([])})},cloneWithLeg(t,e){return u({...t,pathLegs:u([...t.pathLegs,e])})}});function Ch(t){return he(t)?tr(t):t.toOperationNode()}function Uo(t){return Pt(t)?t.map(e=>gt(e)):[gt(t)]}function gt(t){return $o(t)?Et(t):Ch(t)}function GN(t,e){if(_N(e))return _s.create(tr(t),au.create(mr.create(e)));if(e==="->$"||e==="->>$")return _s.create(tr(t),hn.create(mr.create(e.slice(0,-1))));throw new Error(`Invalid JSON operator: ${e}`)}function tr(t){if(!t.includes("."))return qo.create(be.create(t));let r=t.split(".").map(Dh);if(r.length===3)return W1(r);if(r.length===2)return L1(r);throw new Error(`invalid column reference ${t}`)}function YN(t){let e=" as ";if(t.includes(e)){let[r,o]=t.split(e).map(Dh);return yt.create(tr(r),ae.create(o))}else return tr(t)}function Rh(t){return be.create(t)}function Ks(t){if(t.includes(" ")){let[r,o]=t.split(" ").map(Dh);if(!Ih(o))throw new Error(`invalid order direction "${o}" next to "${r}"`);return yr([r,o])[0]}else return Rh(t)}function W1(t){let[e,r,o]=t;return qo.create(be.create(o),Lt.createWithSchema(e,r))}function L1(t){let[e,r]=t;return qo.create(be.create(r),Lt.create(e))}function Dh(t){return t.trim()}var cu=u({is(t){return t.kind==="PrimitiveValueListNode"},create(t){return u({kind:"PrimitiveValueListNode",values:u([...t])})}});var mn=u({is(t){return t.kind==="ValueListNode"},create(t){return u({kind:"ValueListNode",values:u(t)})}});var Le=u({is(t){return t.kind==="ValueNode"},create(t){return u({kind:"ValueNode",value:t})},createImmediate(t){return u({kind:"ValueNode",value:t,immediate:!0})}});function XN(t){return Pt(t)?q1(t):Pe(t)}function Pe(t){return $o(t)?Et(t):Le.create(t)}function lu(t){return dn(t)||Qn(t)||Us(t)}function Wa(t){if(!lu(t))throw new Error(`unsafe immediate value ${JSON.stringify(t)}`);return Le.createImmediate(t)}function q1(t){return t.some($o)?mn.create(t.map(e=>Pe(e))):cu.create(t)}var gr=u({is(t){return t.kind==="ParensNode"},create(t){return u({kind:"ParensNode",node:t})}});function qe(t){if(t.length===3)return uu(t[0],t[1],t[2]);if(t.length===1)return Pe(t[0]);throw new Error(`invalid arguments: ${JSON.stringify(t)}`)}function uu(t,e,r){return $1(e)&&ek(r)?fn.create(gt(t),Bh(e),Le.createImmediate(r)):fn.create(gt(t),Bh(e),XN(r))}function lt(t,e,r){return fn.create(gt(t),Bh(e),gt(r))}function Mh(t,e){return Qs(Object.entries(t).filter(([,r])=>!hr(r)).map(([r,o])=>uu(r,ek(o)?"is":"=",o)),e)}function Qs(t,e,r=!0){let o=e==="and"?er.create:zr.create;if(t.length===0)return fn.create(Le.createImmediate(1),mr.create("="),Le.createImmediate(e==="and"?1:0));let n=ZN(t[0]);for(let s=1;s<t.length;++s)n=o(n,ZN(t[s]));return t.length>1&&r?gr.create(n):n}function $1(t){return t==="is"||t==="is not"}function ek(t){return Us(t)||Qn(t)}function Bh(t){if(VN(t))return mr.create(t);if(Me(t))return t.toOperationNode();throw new Error(`invalid operator ${JSON.stringify(t)}`)}function ZN(t){return Me(t)?t.toOperationNode():t}var jo=u({is(t){return t.kind==="OrderByNode"},create(t){return u({kind:"OrderByNode",items:u([...t])})},cloneWithItems(t,e){return u({...t,items:u([...t.items,...e])})}});var Ph=u({is(t){return t.kind==="PartitionByNode"},create(t){return u({kind:"PartitionByNode",items:u(t)})},cloneWithItems(t,e){return u({...t,items:u([...t.items,...e])})}});var La=u({is(t){return t.kind==="OverNode"},create(){return u({kind:"OverNode"})},cloneWithOrderByItems(t,e){return u({...t,orderBy:t.orderBy?jo.cloneWithItems(t.orderBy,e):jo.create(e)})},cloneWithPartitionByItems(t,e){return u({...t,partitionBy:t.partitionBy?Ph.cloneWithItems(t.partitionBy,e):Ph.create(e)})}});var Jn=u({is(t){return t.kind==="FromNode"},create(t){return u({kind:"FromNode",froms:u(t)})},cloneWithFroms(t,e){return u({...t,froms:u([...t.froms,...e])})}});var Wh=u({is(t){return t.kind==="GroupByNode"},create(t){return u({kind:"GroupByNode",items:u(t)})},cloneWithItems(t,e){return u({...t,items:u([...t.items,...e])})}});var Lh=u({is(t){return t.kind==="HavingNode"},create(t){return u({kind:"HavingNode",having:t})},cloneWithOperation(t,e,r){return u({...t,having:e==="And"?er.create(t.having,r):zr.create(t.having,r)})}});var et=u({is(t){return t.kind==="InsertQueryNode"},create(t,e,r){return u({kind:"InsertQueryNode",into:t,...e&&{with:e},replace:r})},createWithoutInto(){return u({kind:"InsertQueryNode"})},cloneWith(t,e){return u({...t,...e})}});var du=u({is(t){return t.kind==="ListNode"},create(t){return u({kind:"ListNode",items:u(t)})}});var ho=u({is(t){return t.kind==="UpdateQueryNode"},create(t,e){return u({kind:"UpdateQueryNode",table:t.length===1?t[0]:du.create(t),...e&&{with:e}})},createWithoutTable(){return u({kind:"UpdateQueryNode"})},cloneWithFromItems(t,e){return u({...t,from:t.from?Jn.cloneWithFroms(t.from,e):Jn.create(e)})},cloneWithUpdates(t,e){return u({...t,updates:t.updates?u([...t.updates,...e]):e})},cloneWithLimit(t,e){return u({...t,limit:e})}});var qa=u({is(t){return t.kind==="UsingNode"},create(t){return u({kind:"UsingNode",tables:u(t)})},cloneWithTables(t,e){return u({...t,tables:u([...t.tables,...e])})}});var yn=u({is(t){return t.kind==="DeleteQueryNode"},create(t,e){return u({kind:"DeleteQueryNode",from:Jn.create(t),...e&&{with:e}})},cloneWithOrderByItems:(t,e)=>X.cloneWithOrderByItems(t,e),cloneWithoutOrderBy:t=>X.cloneWithoutOrderBy(t),cloneWithLimit(t,e){return u({...t,limit:e})},cloneWithoutLimit(t){return u({...t,limit:void 0})},cloneWithUsing(t,e){return u({...t,using:t.using!==void 0?qa.cloneWithTables(t.using,e):qa.create(e)})}});var Rt=u({is(t){return t.kind==="WhereNode"},create(t){return u({kind:"WhereNode",where:t})},cloneWithOperation(t,e,r){return u({...t,where:e==="And"?er.create(t.where,r):zr.create(t.where,r)})}});var qh=u({is(t){return t.kind==="ReturningNode"},create(t){return u({kind:"ReturningNode",selections:u(t)})},cloneWithSelections(t,e){return u({...t,selections:t.selections?u([...t.selections,...e]):u(e)})}});var tk=u({is(t){return t.kind==="ExplainNode"},create(t,e){return u({kind:"ExplainNode",format:t,options:e})}});var rr=u({is(t){return t.kind==="WhenNode"},create(t){return u({kind:"WhenNode",condition:t})},cloneWithResult(t,e){return u({...t,result:e})}});var br=u({is(t){return t.kind==="MergeQueryNode"},create(t,e){return u({kind:"MergeQueryNode",into:t,...e&&{with:e}})},cloneWithUsing(t,e){return u({...t,using:e})},cloneWithWhen(t,e){return u({...t,whens:t.whens?u([...t.whens,e]):u([e])})},cloneWithThen(t,e){return u({...t,whens:t.whens?u([...t.whens.slice(0,-1),rr.cloneWithResult(t.whens[t.whens.length-1],e)]):void 0})}});var $h=u({is(t){return t.kind==="OutputNode"},create(t){return u({kind:"OutputNode",selections:u(t)})},cloneWithSelections(t,e){return u({...t,selections:t.selections?u([...t.selections,...e]):u(e)})}});var X=u({is(t){return De.is(t)||et.is(t)||ho.is(t)||yn.is(t)||br.is(t)},cloneWithEndModifier(t,e){return u({...t,endModifiers:t.endModifiers?u([...t.endModifiers,e]):u([e])})},cloneWithWhere(t,e){return u({...t,where:t.where?Rt.cloneWithOperation(t.where,"And",e):Rt.create(e)})},cloneWithJoin(t,e){return u({...t,joins:t.joins?u([...t.joins,e]):u([e])})},cloneWithReturning(t,e){return u({...t,returning:t.returning?qh.cloneWithSelections(t.returning,e):qh.create(e)})},cloneWithoutReturning(t){return u({...t,returning:void 0})},cloneWithoutWhere(t){return u({...t,where:void 0})},cloneWithExplain(t,e,r){return u({...t,explain:tk.create(e,r?.toOperationNode())})},cloneWithTop(t,e){return u({...t,top:e})},cloneWithOutput(t,e){return u({...t,output:t.output?$h.cloneWithSelections(t.output,e):$h.create(e)})},cloneWithOrderByItems(t,e){return u({...t,orderBy:t.orderBy?jo.cloneWithItems(t.orderBy,e):jo.create(e)})},cloneWithoutOrderBy(t){return u({...t,orderBy:void 0})}});var De=u({is(t){return t.kind==="SelectQueryNode"},create(t){return u({kind:"SelectQueryNode",...t&&{with:t}})},createFrom(t,e){return u({kind:"SelectQueryNode",from:Jn.create(t),...e&&{with:e}})},cloneWithSelections(t,e){return u({...t,selections:t.selections?u([...t.selections,...e]):u(e)})},cloneWithDistinctOn(t,e){return u({...t,distinctOn:t.distinctOn?u([...t.distinctOn,...e]):u(e)})},cloneWithFrontModifier(t,e){return u({...t,frontModifiers:t.frontModifiers?u([...t.frontModifiers,e]):u([e])})},cloneWithOrderByItems:(t,e)=>X.cloneWithOrderByItems(t,e),cloneWithGroupByItems(t,e){return u({...t,groupBy:t.groupBy?Wh.cloneWithItems(t.groupBy,e):Wh.create(e)})},cloneWithLimit(t,e){return u({...t,limit:e})},cloneWithOffset(t,e){return u({...t,offset:e})},cloneWithFetch(t,e){return u({...t,fetch:e})},cloneWithHaving(t,e){return u({...t,having:t.having?Lh.cloneWithOperation(t.having,"And",e):Lh.create(e)})},cloneWithSetOperations(t,e){return u({...t,setOperations:t.setOperations?u([...t.setOperations,...e]):u([...e])})},cloneWithoutSelections(t){return u({...t,selections:[]})},cloneWithoutLimit(t){return u({...t,limit:void 0})},cloneWithoutOffset(t){return u({...t,offset:void 0})},cloneWithoutOrderBy:t=>X.cloneWithoutOrderBy(t),cloneWithoutGroupBy(t){return u({...t,groupBy:void 0})}});var pu=class t{#e;constructor(e){this.#e=u(e)}on(...e){return new t({...this.#e,joinNode:Vr.cloneWithOn(this.#e.joinNode,qe(e))})}onRef(e,r,o){return new t({...this.#e,joinNode:Vr.cloneWithOn(this.#e.joinNode,lt(e,r,o))})}onTrue(){return new t({...this.#e,joinNode:Vr.cloneWithOn(this.#e.joinNode,Ie.createWithSql("true"))})}$call(e){return e(this)}toOperationNode(){return this.#e.joinNode}};var rk=u({is(t){return t.kind==="PartitionByItemNode"},create(t){return u({kind:"PartitionByItemNode",partitionBy:t})}});function ok(t){return Uo(t).map(rk.create)}var fu=class t{#e;constructor(e){this.#e=u(e)}orderBy(...e){return new t({overNode:La.cloneWithOrderByItems(this.#e.overNode,yr(e))})}clearOrderBy(){return new t({overNode:X.cloneWithoutOrderBy(this.#e.overNode)})}partitionBy(e){return new t({overNode:La.cloneWithPartitionByItems(this.#e.overNode,ok(e))})}$call(e){return e(this)}toOperationNode(){return this.#e.overNode}};var Js=u({is(t){return t.kind==="SelectionNode"},create(t){return u({kind:"SelectionNode",selection:t})},createSelectAll(){return u({kind:"SelectionNode",selection:zs.create()})},createSelectAllFromTable(t){return u({kind:"SelectionNode",selection:qo.createSelectAll(t)})}});function Nt(t){return Qe(t)?Nt(t(Kr())):Pt(t)?t.map(e=>nk(e)):[nk(t)]}function nk(t){return he(t)?Js.create(YN(t)):su(t)?Js.create(t.toOperationNode()):Js.create(hu(t))}function Tt(t){return t?Array.isArray(t)?t.map(sk):[sk(t)]:[Js.createSelectAll()]}function sk(t){if(he(t))return Js.createSelectAllFromTable(Oe(t));throw new Error(`invalid value selectAll expression: ${JSON.stringify(t)}`)}var ik=u({is(t){return t.kind==="ValuesNode"},create(t){return u({kind:"ValuesNode",values:u(t)})}});var ak=u({is(t){return t.kind==="DefaultInsertValueNode"},create(){return u({kind:"DefaultInsertValueNode"})}});function mu(t){let e=Qe(t)?t(Kr()):t,r=Pt(e)?e:u([e]);return U1(r)}function U1(t){let e=j1(t);return[u([...e.keys()].map(be.create)),ik.create(t.map(r=>F1(r,e)))]}function j1(t){let e=new Map;for(let r of t){let o=Object.keys(r);for(let n of o)!e.has(n)&&r[n]!==void 0&&e.set(n,e.size)}return e}function F1(t,e){let r=Object.keys(t),o=Array.from({length:e.size}),n=!1,s=r.length;for(let a of r){let c=e.get(a);if(hr(c)){s--;continue}let l=t[a];(hr(l)||$o(l))&&(n=!0),o[c]=l}if(s<e.size||n){let a=ak.create();return mn.create(o.map(c=>hr(c)?a:Pe(c)))}return cu.create(o)}var Uh=u({is(t){return t.kind==="ColumnUpdateNode"},create(t,e){return u({kind:"ColumnUpdateNode",column:t,value:e})}});function ck(...t){return t.length===2?[Uh.create(gt(t[0]),Pe(t[1]))]:$a(t[0])}function $a(t){let e=Qe(t)?t(Kr()):t;return Object.entries(e).filter(([r,o])=>o!==void 0).map(([r,o])=>Uh.create(be.create(r),Pe(o)))}var lk=u({is(t){return t.kind==="OnDuplicateKeyNode"},create(t){return u({kind:"OnDuplicateKeyNode",updates:t})}});var yu=class{insertId;numInsertedOrUpdatedRows;constructor(e,r){this.insertId=e,this.numInsertedOrUpdatedRows=r}};var Ir=class extends Error{node;constructor(e){super("no result"),this.node=e}};function mo(t){return Object.prototype.hasOwnProperty.call(t,"prototype")}var _t=u({is(t){return t.kind==="OnConflictNode"},create(){return u({kind:"OnConflictNode"})},cloneWith(t,e){return u({...t,...e})},cloneWithIndexWhere(t,e){return u({...t,indexWhere:t.indexWhere?Rt.cloneWithOperation(t.indexWhere,"And",e):Rt.create(e)})},cloneWithIndexOrWhere(t,e){return u({...t,indexWhere:t.indexWhere?Rt.cloneWithOperation(t.indexWhere,"Or",e):Rt.create(e)})},cloneWithUpdateWhere(t,e){return u({...t,updateWhere:t.updateWhere?Rt.cloneWithOperation(t.updateWhere,"And",e):Rt.create(e)})},cloneWithUpdateOrWhere(t,e){return u({...t,updateWhere:t.updateWhere?Rt.cloneWithOperation(t.updateWhere,"Or",e):Rt.create(e)})},cloneWithoutIndexWhere(t){return u({...t,indexWhere:void 0})},cloneWithoutUpdateWhere(t){return u({...t,updateWhere:void 0})}});var gu=class t{#e;constructor(e){this.#e=u(e)}column(e){let r=be.create(e);return new t({...this.#e,onConflictNode:_t.cloneWith(this.#e.onConflictNode,{columns:this.#e.onConflictNode.columns?u([...this.#e.onConflictNode.columns,r]):u([r])})})}columns(e){let r=e.map(be.create);return new t({...this.#e,onConflictNode:_t.cloneWith(this.#e.onConflictNode,{columns:this.#e.onConflictNode.columns?u([...this.#e.onConflictNode.columns,...r]):u(r)})})}constraint(e){return new t({...this.#e,onConflictNode:_t.cloneWith(this.#e.onConflictNode,{constraint:ae.create(e)})})}expression(e){return new t({...this.#e,onConflictNode:_t.cloneWith(this.#e.onConflictNode,{indexExpression:e.toOperationNode()})})}where(...e){return new t({...this.#e,onConflictNode:_t.cloneWithIndexWhere(this.#e.onConflictNode,qe(e))})}whereRef(e,r,o){return new t({...this.#e,onConflictNode:_t.cloneWithIndexWhere(this.#e.onConflictNode,lt(e,r,o))})}clearWhere(){return new t({...this.#e,onConflictNode:_t.cloneWithoutIndexWhere(this.#e.onConflictNode)})}doNothing(){return new jh({...this.#e,onConflictNode:_t.cloneWith(this.#e.onConflictNode,{doNothing:!0})})}doUpdateSet(e){return new Fh({...this.#e,onConflictNode:_t.cloneWith(this.#e.onConflictNode,{updates:$a(e)})})}$call(e){return e(this)}},jh=class{#e;constructor(e){this.#e=u(e)}toOperationNode(){return this.#e.onConflictNode}},Fh=class t{#e;constructor(e){this.#e=u(e)}where(...e){return new t({...this.#e,onConflictNode:_t.cloneWithUpdateWhere(this.#e.onConflictNode,qe(e))})}whereRef(e,r,o){return new t({...this.#e,onConflictNode:_t.cloneWithUpdateWhere(this.#e.onConflictNode,lt(e,r,o))})}clearWhere(){return new t({...this.#e,onConflictNode:_t.cloneWithoutUpdateWhere(this.#e.onConflictNode)})}$call(e){return e(this)}toOperationNode(){return this.#e.onConflictNode}};var uk=u({is(t){return t.kind==="TopNode"},create(t,e){return u({kind:"TopNode",expression:t,modifiers:e})}});function Qr(t,e){if(!dn(t)&&!js(t))throw new Error(`Invalid top expression: ${t}`);if(!hr(e)&&!z1(e))throw new Error(`Invalid top modifiers: ${e}`);return uk.create(t,e)}function z1(t){return t==="percent"||t==="with ties"||t==="percent with ties"}var Hn=u({is(t){return t.kind==="OrActionNode"},create(t){return u({kind:"OrActionNode",action:t})}});var Ua=class t{#e;constructor(e){this.#e=u(e)}values(e){let[r,o]=mu(e);return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{columns:r,values:o})})}columns(e){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{columns:u(e.map(be.create))})})}expression(e){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{values:Et(e)})})}defaultValues(){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{defaultValues:!0})})}modifyEnd(e){return new t({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,e.toOperationNode())})}ignore(){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{orAction:Hn.create("ignore")})})}orIgnore(){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{orAction:Hn.create("ignore")})})}orAbort(){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{orAction:Hn.create("abort")})})}orFail(){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{orAction:Hn.create("fail")})})}orReplace(){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{orAction:Hn.create("replace")})})}orRollback(){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{orAction:Hn.create("rollback")})})}top(e,r){return new t({...this.#e,queryNode:X.cloneWithTop(this.#e.queryNode,Qr(e,r))})}onConflict(e){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{onConflict:e(new gu({onConflictNode:_t.create()})).toOperationNode()})})}onDuplicateKeyUpdate(e){return new t({...this.#e,queryNode:et.cloneWith(this.#e.queryNode,{onDuplicateKey:lk.create($a(e))})})}returning(e){return new t({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Nt(e))})}returningAll(){return new t({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Tt())})}output(e){return new t({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Nt(e))})}outputAll(e){return new t({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Tt(e))})}clearReturning(){return new t({...this.#e,queryNode:X.cloneWithoutReturning(this.#e.queryNode)})}$call(e){return e(this)}$if(e,r){return e?r(this):new t({...this.#e})}$castTo(){return new t(this.#e)}$narrowType(){return new t(this.#e)}$assertType(){return new t(this.#e)}withPlugin(e){return new t({...this.#e,executor:this.#e.executor.withPlugin(e)})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let r=this.compile(),o=await this.#e.executor.executeQuery(r,e),{adapter:n}=this.#e.executor,s=r.query;return s.returning&&n.supportsReturning||s.output&&n.supportsOutput?o.rows:[new yu(o.insertId,o.numAffectedRows??BigInt(0))]}async executeTakeFirst(e){let[r]=await this.execute(e);return r}async executeTakeFirstOrThrow(e){typeof e=="function"&&(e={errorConstructor:e});let r=await this.executeTakeFirst(e);if(r===void 0){let o=e?.errorConstructor??Ir;throw mo(o)?new o(this.toOperationNode()):o(this.toOperationNode())}return r}async*stream(e){typeof e!="object"&&(e={chunkSize:e});let r=this.compile(),o=this.#e.executor.stream(r,e.chunkSize??100,e);for await(let n of o)yield*n.rows}async explain(e,r){return await new t({...this.#e,queryNode:X.cloneWithExplain(this.#e.queryNode,e,r)}).execute()}};var bu=class{numDeletedRows;constructor(e){this.numDeletedRows=e}};var Hs=u({is(t){return t.kind==="LimitNode"},create(t){return u({kind:"LimitNode",limit:t})}});var tt,ja=class{#e;constructor(e){this.#e=u(e)}where(...e){return new tt({...this.#e,queryNode:X.cloneWithWhere(this.#e.queryNode,qe(e))})}whereRef(e,r,o){return new tt({...this.#e,queryNode:X.cloneWithWhere(this.#e.queryNode,lt(e,r,o))})}clearWhere(){return new tt({...this.#e,queryNode:X.cloneWithoutWhere(this.#e.queryNode)})}top(e,r){return new tt({...this.#e,queryNode:X.cloneWithTop(this.#e.queryNode,Qr(e,r))})}using(e){return new tt({...this.#e,queryNode:yn.cloneWithUsing(this.#e.queryNode,Jr(e))})}innerJoin(...e){return this.#t("InnerJoin",e)}leftJoin(...e){return this.#t("LeftJoin",e)}rightJoin(...e){return this.#t("RightJoin",e)}fullJoin(...e){return this.#t("FullJoin",e)}#t(e,r){return new tt({...this.#e,queryNode:X.cloneWithJoin(this.#e.queryNode,gn(e,r))})}returning(e){return new tt({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Nt(e))})}returningAll(e){return new tt({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Tt(e))})}output(e){return new tt({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Nt(e))})}outputAll(e){return new tt({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Tt(e))})}clearReturning(){return new tt({...this.#e,queryNode:X.cloneWithoutReturning(this.#e.queryNode)})}clearLimit(){return new tt({...this.#e,queryNode:yn.cloneWithoutLimit(this.#e.queryNode)})}orderBy(...e){return new tt({...this.#e,queryNode:X.cloneWithOrderByItems(this.#e.queryNode,yr(e))})}clearOrderBy(){return new tt({...this.#e,queryNode:X.cloneWithoutOrderBy(this.#e.queryNode)})}limit(e){return new tt({...this.#e,queryNode:yn.cloneWithLimit(this.#e.queryNode,Hs.create(Pe(e)))})}modifyEnd(e){return new tt({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,e.toOperationNode())})}$call(e){return e(this)}$if(e,r){return e?r(this):new tt({...this.#e})}$castTo(){return new tt(this.#e)}$narrowType(){return new tt(this.#e)}$assertType(){return new tt(this.#e)}withPlugin(e){return new tt({...this.#e,executor:this.#e.executor.withPlugin(e)})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let r=this.compile(),o=await this.#e.executor.executeQuery(r,e),{adapter:n}=this.#e.executor,s=r.query;return s.returning&&n.supportsReturning||s.output&&n.supportsOutput?o.rows:[new bu(o.numAffectedRows??BigInt(0))]}async executeTakeFirst(e){let[r]=await this.execute(e);return r}async executeTakeFirstOrThrow(e){typeof e=="function"&&(e={errorConstructor:e});let r=await this.executeTakeFirst(e);if(r===void 0){let o=e?.errorConstructor??Ir;throw mo(o)?new o(this.toOperationNode()):o(this.toOperationNode())}return r}async*stream(e){typeof e!="object"&&(e={chunkSize:e});let r=this.compile(),o=this.#e.executor.stream(r,e.chunkSize??100,e);for await(let n of o)yield*n.rows}async explain(e,r){return await new tt({...this.#e,queryNode:X.cloneWithExplain(this.#e.queryNode,e,r)}).execute()}};tt=ja;var xu=class{numUpdatedRows;numChangedRows;constructor(e,r){this.numUpdatedRows=e,this.numChangedRows=r}};var rt,Gn=class{#e;constructor(e){this.#e=u(e)}where(...e){return new rt({...this.#e,queryNode:X.cloneWithWhere(this.#e.queryNode,qe(e))})}whereRef(e,r,o){return new rt({...this.#e,queryNode:X.cloneWithWhere(this.#e.queryNode,lt(e,r,o))})}clearWhere(){return new rt({...this.#e,queryNode:X.cloneWithoutWhere(this.#e.queryNode)})}top(e,r){return new rt({...this.#e,queryNode:X.cloneWithTop(this.#e.queryNode,Qr(e,r))})}from(e){return new rt({...this.#e,queryNode:ho.cloneWithFromItems(this.#e.queryNode,Jr(e))})}innerJoin(...e){return this.#t("InnerJoin",e)}leftJoin(...e){return this.#t("LeftJoin",e)}rightJoin(...e){return this.#t("RightJoin",e)}fullJoin(...e){return this.#t("FullJoin",e)}#t(e,r){return new rt({...this.#e,queryNode:X.cloneWithJoin(this.#e.queryNode,gn(e,r))})}orderBy(...e){return new rt({...this.#e,queryNode:X.cloneWithOrderByItems(this.#e.queryNode,yr(e))})}clearOrderBy(){return new rt({...this.#e,queryNode:X.cloneWithoutOrderBy(this.#e.queryNode)})}limit(e){return new rt({...this.#e,queryNode:ho.cloneWithLimit(this.#e.queryNode,Hs.create(Pe(e)))})}set(...e){return new rt({...this.#e,queryNode:ho.cloneWithUpdates(this.#e.queryNode,ck(...e))})}returning(e){return new rt({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Nt(e))})}returningAll(e){return new rt({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Tt(e))})}output(e){return new rt({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Nt(e))})}outputAll(e){return new rt({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Tt(e))})}modifyEnd(e){return new rt({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,e.toOperationNode())})}clearReturning(){return new rt({...this.#e,queryNode:X.cloneWithoutReturning(this.#e.queryNode)})}$call(e){return e(this)}$if(e,r){return e?r(this):new rt({...this.#e})}$castTo(){return new rt(this.#e)}$narrowType(){return new rt(this.#e)}$assertType(){return new rt(this.#e)}withPlugin(e){return new rt({...this.#e,executor:this.#e.executor.withPlugin(e)})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let r=this.compile(),o=await this.#e.executor.executeQuery(r,e),{adapter:n}=this.#e.executor,s=r.query;return s.returning&&n.supportsReturning||s.output&&n.supportsOutput?o.rows:[new xu(o.numAffectedRows??BigInt(0),o.numChangedRows)]}async executeTakeFirst(e){let[r]=await this.execute(e);return r}async executeTakeFirstOrThrow(e){typeof e=="function"&&(e={errorConstructor:e});let r=await this.executeTakeFirst(e);if(r===void 0){let o=e?.errorConstructor??Ir;throw mo(o)?new o(this.toOperationNode()):o(this.toOperationNode())}return r}async*stream(e){typeof e!="object"&&(e={chunkSize:e});let r=this.compile(),o=this.#e.executor.stream(r,e.chunkSize??100,e);for await(let n of o)yield*n.rows}async explain(e,r){return await new rt({...this.#e,queryNode:X.cloneWithExplain(this.#e.queryNode,e,r)}).execute()}};rt=Gn;var zh=u({is(t){return t.kind==="CommonTableExpressionNameNode"},create(t,e){return u({kind:"CommonTableExpressionNameNode",table:Lt.create(t),columns:e?u(e.map(be.create)):void 0})}});var Gs=u({is(t){return t.kind==="CommonTableExpressionNode"},create(t,e){return u({kind:"CommonTableExpressionNode",name:t,expression:e})},cloneWith(t,e){return u({...t,...e})}});var wu=class t{#e;constructor(e){this.#e=u(e)}materialized(){return new t({...this.#e,node:Gs.cloneWith(this.#e.node,{materialized:!0})})}notMaterialized(){return new t({...this.#e,node:Gs.cloneWith(this.#e.node,{materialized:!1})})}toOperationNode(){return this.#e.node}};function Vh(t,e){let r=Me(e)?e.toOperationNode():e(pk()).toOperationNode();return Qe(t)?t(V1(r)).toOperationNode():Gs.create(dk(t),r)}function V1(t){return e=>new wu({node:Gs.create(dk(e),t)})}function dk(t){if(t.includes("(")){let e=t.split(/[\(\)]/),r=e[0],o=e[1].split(",").map(n=>n.trim());return zh.create(r,o)}else return zh.create(t)}var Fa=u({is(t){return t.kind==="WithNode"},create(t,e){return u({kind:"WithNode",expressions:u([t]),...e})},cloneWithExpression(t,e){return u({...t,expressions:u([...t.expressions,e])})}});var fk=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];function hk(t){let e="";for(let r=0;r<t;++r)e+=_1();return e}function _1(){return fk[~~(Math.random()*fk.length)]}function Se(){return new _h}var _h=class{#e;get queryId(){return this.#e===void 0&&(this.#e=hk(8)),this.#e}};var Ys=class{nodeStack=[];#e=u({AliasNode:this.transformAlias.bind(this),ColumnNode:this.transformColumn.bind(this),IdentifierNode:this.transformIdentifier.bind(this),SchemableIdentifierNode:this.transformSchemableIdentifier.bind(this),RawNode:this.transformRaw.bind(this),ReferenceNode:this.transformReference.bind(this),SelectQueryNode:this.transformSelectQuery.bind(this),SelectionNode:this.transformSelection.bind(this),TableNode:this.transformTable.bind(this),FromNode:this.transformFrom.bind(this),SelectAllNode:this.transformSelectAll.bind(this),AndNode:this.transformAnd.bind(this),OrNode:this.transformOr.bind(this),ValueNode:this.transformValue.bind(this),ValueListNode:this.transformValueList.bind(this),PrimitiveValueListNode:this.transformPrimitiveValueList.bind(this),ParensNode:this.transformParens.bind(this),JoinNode:this.transformJoin.bind(this),OperatorNode:this.transformOperator.bind(this),WhereNode:this.transformWhere.bind(this),InsertQueryNode:this.transformInsertQuery.bind(this),DeleteQueryNode:this.transformDeleteQuery.bind(this),ReturningNode:this.transformReturning.bind(this),CreateTableNode:this.transformCreateTable.bind(this),AddColumnNode:this.transformAddColumn.bind(this),ColumnDefinitionNode:this.transformColumnDefinition.bind(this),DropTableNode:this.transformDropTable.bind(this),DataTypeNode:this.transformDataType.bind(this),OrderByNode:this.transformOrderBy.bind(this),OrderByItemNode:this.transformOrderByItem.bind(this),GroupByNode:this.transformGroupBy.bind(this),GroupByItemNode:this.transformGroupByItem.bind(this),UpdateQueryNode:this.transformUpdateQuery.bind(this),ColumnUpdateNode:this.transformColumnUpdate.bind(this),LimitNode:this.transformLimit.bind(this),OffsetNode:this.transformOffset.bind(this),OnConflictNode:this.transformOnConflict.bind(this),OnDuplicateKeyNode:this.transformOnDuplicateKey.bind(this),CreateIndexNode:this.transformCreateIndex.bind(this),DropIndexNode:this.transformDropIndex.bind(this),ListNode:this.transformList.bind(this),PrimaryKeyConstraintNode:this.transformPrimaryKeyConstraint.bind(this),UniqueConstraintNode:this.transformUniqueConstraint.bind(this),ReferencesNode:this.transformReferences.bind(this),CheckConstraintNode:this.transformCheckConstraint.bind(this),WithNode:this.transformWith.bind(this),CommonTableExpressionNode:this.transformCommonTableExpression.bind(this),CommonTableExpressionNameNode:this.transformCommonTableExpressionName.bind(this),HavingNode:this.transformHaving.bind(this),CreateSchemaNode:this.transformCreateSchema.bind(this),DropSchemaNode:this.transformDropSchema.bind(this),AlterTableNode:this.transformAlterTable.bind(this),DropColumnNode:this.transformDropColumn.bind(this),RenameColumnNode:this.transformRenameColumn.bind(this),AlterColumnNode:this.transformAlterColumn.bind(this),ModifyColumnNode:this.transformModifyColumn.bind(this),AddConstraintNode:this.transformAddConstraint.bind(this),DropConstraintNode:this.transformDropConstraint.bind(this),RenameConstraintNode:this.transformRenameConstraint.bind(this),ForeignKeyConstraintNode:this.transformForeignKeyConstraint.bind(this),CreateViewNode:this.transformCreateView.bind(this),RefreshMaterializedViewNode:this.transformRefreshMaterializedView.bind(this),DropViewNode:this.transformDropView.bind(this),GeneratedNode:this.transformGenerated.bind(this),DefaultValueNode:this.transformDefaultValue.bind(this),OnNode:this.transformOn.bind(this),ValuesNode:this.transformValues.bind(this),SelectModifierNode:this.transformSelectModifier.bind(this),CreateTypeNode:this.transformCreateType.bind(this),DropTypeNode:this.transformDropType.bind(this),ExplainNode:this.transformExplain.bind(this),DefaultInsertValueNode:this.transformDefaultInsertValue.bind(this),AggregateFunctionNode:this.transformAggregateFunction.bind(this),OverNode:this.transformOver.bind(this),PartitionByNode:this.transformPartitionBy.bind(this),PartitionByItemNode:this.transformPartitionByItem.bind(this),SetOperationNode:this.transformSetOperation.bind(this),BinaryOperationNode:this.transformBinaryOperation.bind(this),UnaryOperationNode:this.transformUnaryOperation.bind(this),UsingNode:this.transformUsing.bind(this),FunctionNode:this.transformFunction.bind(this),CaseNode:this.transformCase.bind(this),WhenNode:this.transformWhen.bind(this),JSONReferenceNode:this.transformJSONReference.bind(this),JSONPathNode:this.transformJSONPath.bind(this),JSONPathLegNode:this.transformJSONPathLeg.bind(this),JSONOperatorChainNode:this.transformJSONOperatorChain.bind(this),TupleNode:this.transformTuple.bind(this),MergeQueryNode:this.transformMergeQuery.bind(this),MatchedNode:this.transformMatched.bind(this),AddIndexNode:this.transformAddIndex.bind(this),CastNode:this.transformCast.bind(this),FetchNode:this.transformFetch.bind(this),TopNode:this.transformTop.bind(this),OutputNode:this.transformOutput.bind(this),OrActionNode:this.transformOrAction.bind(this),CollateNode:this.transformCollate.bind(this),AlterTypeNode:this.transformAlterType.bind(this),AddValueNode:this.transformAddValue.bind(this),RenameValueNode:this.transformRenameValue.bind(this)});transformNode(e,r){if(!e)return e;this.nodeStack.push(e);let o=this.transformNodeImpl(e,r);return this.nodeStack.pop(),u(o)}transformNodeImpl(e,r){return this.#e[e.kind](e,r)}transformNodeList(e,r){return e&&u(e.map(o=>this.transformNode(o,r)))}transformSelectQuery(e,r){return{kind:"SelectQueryNode",from:this.transformNode(e.from,r),selections:this.transformNodeList(e.selections,r),distinctOn:this.transformNodeList(e.distinctOn,r),joins:this.transformNodeList(e.joins,r),groupBy:this.transformNode(e.groupBy,r),orderBy:this.transformNode(e.orderBy,r),where:this.transformNode(e.where,r),frontModifiers:this.transformNodeList(e.frontModifiers,r),endModifiers:this.transformNodeList(e.endModifiers,r),limit:this.transformNode(e.limit,r),offset:this.transformNode(e.offset,r),with:this.transformNode(e.with,r),having:this.transformNode(e.having,r),explain:this.transformNode(e.explain,r),setOperations:this.transformNodeList(e.setOperations,r),fetch:this.transformNode(e.fetch,r),top:this.transformNode(e.top,r)}}transformSelection(e,r){return{kind:"SelectionNode",selection:this.transformNode(e.selection,r)}}transformColumn(e,r){return{kind:"ColumnNode",column:this.transformNode(e.column,r)}}transformAlias(e,r){return{kind:"AliasNode",node:this.transformNode(e.node,r),alias:this.transformNode(e.alias,r)}}transformTable(e,r){return{kind:"TableNode",table:this.transformNode(e.table,r)}}transformFrom(e,r){return{kind:"FromNode",froms:this.transformNodeList(e.froms,r)}}transformReference(e,r){return{kind:"ReferenceNode",column:this.transformNode(e.column,r),table:this.transformNode(e.table,r)}}transformAnd(e,r){return{kind:"AndNode",left:this.transformNode(e.left,r),right:this.transformNode(e.right,r)}}transformOr(e,r){return{kind:"OrNode",left:this.transformNode(e.left,r),right:this.transformNode(e.right,r)}}transformValueList(e,r){return{kind:"ValueListNode",values:this.transformNodeList(e.values,r)}}transformParens(e,r){return{kind:"ParensNode",node:this.transformNode(e.node,r)}}transformJoin(e,r){return{kind:"JoinNode",joinType:e.joinType,table:this.transformNode(e.table,r),on:this.transformNode(e.on,r)}}transformRaw(e,r){return{kind:"RawNode",sqlFragments:u([...e.sqlFragments]),parameters:this.transformNodeList(e.parameters,r)}}transformWhere(e,r){return{kind:"WhereNode",where:this.transformNode(e.where,r)}}transformInsertQuery(e,r){return{kind:"InsertQueryNode",into:this.transformNode(e.into,r),columns:this.transformNodeList(e.columns,r),values:this.transformNode(e.values,r),returning:this.transformNode(e.returning,r),onConflict:this.transformNode(e.onConflict,r),onDuplicateKey:this.transformNode(e.onDuplicateKey,r),endModifiers:this.transformNodeList(e.endModifiers,r),with:this.transformNode(e.with,r),orAction:this.transformNode(e.orAction,r),replace:e.replace,explain:this.transformNode(e.explain,r),defaultValues:e.defaultValues,top:this.transformNode(e.top,r),output:this.transformNode(e.output,r)}}transformValues(e,r){return{kind:"ValuesNode",values:this.transformNodeList(e.values,r)}}transformDeleteQuery(e,r){return{kind:"DeleteQueryNode",from:this.transformNode(e.from,r),using:this.transformNode(e.using,r),joins:this.transformNodeList(e.joins,r),where:this.transformNode(e.where,r),returning:this.transformNode(e.returning,r),endModifiers:this.transformNodeList(e.endModifiers,r),with:this.transformNode(e.with,r),orderBy:this.transformNode(e.orderBy,r),limit:this.transformNode(e.limit,r),explain:this.transformNode(e.explain,r),top:this.transformNode(e.top,r),output:this.transformNode(e.output,r)}}transformReturning(e,r){return{kind:"ReturningNode",selections:this.transformNodeList(e.selections,r)}}transformCreateTable(e,r){return{kind:"CreateTableNode",table:this.transformNode(e.table,r),columns:this.transformNodeList(e.columns,r),constraints:this.transformNodeList(e.constraints,r),indexes:this.transformNodeList(e.indexes,r),temporary:e.temporary,ifNotExists:e.ifNotExists,onCommit:e.onCommit,frontModifiers:this.transformNodeList(e.frontModifiers,r),endModifiers:this.transformNodeList(e.endModifiers,r),selectQuery:this.transformNode(e.selectQuery,r)}}transformColumnDefinition(e,r){return{kind:"ColumnDefinitionNode",column:this.transformNode(e.column,r),dataType:this.transformNode(e.dataType,r),references:this.transformNode(e.references,r),primaryKey:e.primaryKey,autoIncrement:e.autoIncrement,unique:e.unique,notNull:e.notNull,unsigned:e.unsigned,defaultTo:this.transformNode(e.defaultTo,r),check:this.transformNode(e.check,r),generated:this.transformNode(e.generated,r),frontModifiers:this.transformNodeList(e.frontModifiers,r),endModifiers:this.transformNodeList(e.endModifiers,r),nullsNotDistinct:e.nullsNotDistinct,identity:e.identity,ifNotExists:e.ifNotExists}}transformAddColumn(e,r){return{kind:"AddColumnNode",column:this.transformNode(e.column,r)}}transformDropTable(e,r){return{kind:"DropTableNode",table:this.transformNode(e.table,r),ifExists:e.ifExists,cascade:e.cascade,temporary:e.temporary}}transformOrderBy(e,r){return{kind:"OrderByNode",items:this.transformNodeList(e.items,r)}}transformOrderByItem(e,r){return{kind:"OrderByItemNode",orderBy:this.transformNode(e.orderBy,r),direction:this.transformNode(e.direction,r),collation:this.transformNode(e.collation,r),nulls:e.nulls}}transformGroupBy(e,r){return{kind:"GroupByNode",items:this.transformNodeList(e.items,r)}}transformGroupByItem(e,r){return{kind:"GroupByItemNode",groupBy:this.transformNode(e.groupBy,r)}}transformUpdateQuery(e,r){return{kind:"UpdateQueryNode",table:this.transformNode(e.table,r),from:this.transformNode(e.from,r),joins:this.transformNodeList(e.joins,r),where:this.transformNode(e.where,r),updates:this.transformNodeList(e.updates,r),returning:this.transformNode(e.returning,r),endModifiers:this.transformNodeList(e.endModifiers,r),with:this.transformNode(e.with,r),explain:this.transformNode(e.explain,r),limit:this.transformNode(e.limit,r),top:this.transformNode(e.top,r),output:this.transformNode(e.output,r),orderBy:this.transformNode(e.orderBy,r)}}transformColumnUpdate(e,r){return{kind:"ColumnUpdateNode",column:this.transformNode(e.column,r),value:this.transformNode(e.value,r)}}transformLimit(e,r){return{kind:"LimitNode",limit:this.transformNode(e.limit,r)}}transformOffset(e,r){return{kind:"OffsetNode",offset:this.transformNode(e.offset,r)}}transformOnConflict(e,r){return{kind:"OnConflictNode",columns:this.transformNodeList(e.columns,r),constraint:this.transformNode(e.constraint,r),indexExpression:this.transformNode(e.indexExpression,r),indexWhere:this.transformNode(e.indexWhere,r),updates:this.transformNodeList(e.updates,r),updateWhere:this.transformNode(e.updateWhere,r),doNothing:e.doNothing}}transformOnDuplicateKey(e,r){return{kind:"OnDuplicateKeyNode",updates:this.transformNodeList(e.updates,r)}}transformCreateIndex(e,r){return{kind:"CreateIndexNode",name:this.transformNode(e.name,r),table:this.transformNode(e.table,r),columns:this.transformNodeList(e.columns,r),unique:e.unique,using:this.transformNode(e.using,r),ifNotExists:e.ifNotExists,where:this.transformNode(e.where,r),nullsNotDistinct:e.nullsNotDistinct}}transformList(e,r){return{kind:"ListNode",items:this.transformNodeList(e.items,r)}}transformDropIndex(e,r){return{kind:"DropIndexNode",name:this.transformNode(e.name,r),table:this.transformNode(e.table,r),ifExists:e.ifExists,cascade:e.cascade}}transformPrimaryKeyConstraint(e,r){return{kind:"PrimaryKeyConstraintNode",columns:this.transformNodeList(e.columns,r),name:this.transformNode(e.name,r),deferrable:e.deferrable,initiallyDeferred:e.initiallyDeferred}}transformUniqueConstraint(e,r){return{kind:"UniqueConstraintNode",columns:this.transformNodeList(e.columns,r),name:this.transformNode(e.name,r),nullsNotDistinct:e.nullsNotDistinct,deferrable:e.deferrable,initiallyDeferred:e.initiallyDeferred}}transformForeignKeyConstraint(e,r){return{kind:"ForeignKeyConstraintNode",columns:this.transformNodeList(e.columns,r),references:this.transformNode(e.references,r),name:this.transformNode(e.name,r),onDelete:e.onDelete,onUpdate:e.onUpdate,deferrable:e.deferrable,initiallyDeferred:e.initiallyDeferred}}transformSetOperation(e,r){return{kind:"SetOperationNode",operator:e.operator,expression:this.transformNode(e.expression,r),all:e.all}}transformReferences(e,r){return{kind:"ReferencesNode",table:this.transformNode(e.table,r),columns:this.transformNodeList(e.columns,r),onDelete:e.onDelete,onUpdate:e.onUpdate}}transformCheckConstraint(e,r){return{kind:"CheckConstraintNode",expression:this.transformNode(e.expression,r),name:this.transformNode(e.name,r)}}transformWith(e,r){return{kind:"WithNode",expressions:this.transformNodeList(e.expressions,r),recursive:e.recursive}}transformCommonTableExpression(e,r){return{kind:"CommonTableExpressionNode",name:this.transformNode(e.name,r),materialized:e.materialized,expression:this.transformNode(e.expression,r)}}transformCommonTableExpressionName(e,r){return{kind:"CommonTableExpressionNameNode",table:this.transformNode(e.table,r),columns:this.transformNodeList(e.columns,r)}}transformHaving(e,r){return{kind:"HavingNode",having:this.transformNode(e.having,r)}}transformCreateSchema(e,r){return{kind:"CreateSchemaNode",schema:this.transformNode(e.schema,r),ifNotExists:e.ifNotExists}}transformDropSchema(e,r){return{kind:"DropSchemaNode",schema:this.transformNode(e.schema,r),ifExists:e.ifExists,cascade:e.cascade}}transformAlterTable(e,r){return{kind:"AlterTableNode",table:this.transformNode(e.table,r),renameTo:this.transformNode(e.renameTo,r),setSchema:this.transformNode(e.setSchema,r),columnAlterations:this.transformNodeList(e.columnAlterations,r),addConstraint:this.transformNode(e.addConstraint,r),dropConstraint:this.transformNode(e.dropConstraint,r),renameConstraint:this.transformNode(e.renameConstraint,r),addIndex:this.transformNode(e.addIndex,r),dropIndex:this.transformNode(e.dropIndex,r)}}transformDropColumn(e,r){return{kind:"DropColumnNode",column:this.transformNode(e.column,r),ifExists:e.ifExists}}transformRenameColumn(e,r){return{kind:"RenameColumnNode",column:this.transformNode(e.column,r),renameTo:this.transformNode(e.renameTo,r)}}transformAlterColumn(e,r){return{kind:"AlterColumnNode",column:this.transformNode(e.column,r),dataType:this.transformNode(e.dataType,r),dataTypeExpression:this.transformNode(e.dataTypeExpression,r),setDefault:this.transformNode(e.setDefault,r),dropDefault:e.dropDefault,setNotNull:e.setNotNull,dropNotNull:e.dropNotNull}}transformModifyColumn(e,r){return{kind:"ModifyColumnNode",column:this.transformNode(e.column,r)}}transformAddConstraint(e,r){return{kind:"AddConstraintNode",constraint:this.transformNode(e.constraint,r)}}transformDropConstraint(e,r){return{kind:"DropConstraintNode",constraintName:this.transformNode(e.constraintName,r),ifExists:e.ifExists,modifier:e.modifier}}transformRenameConstraint(e,r){return{kind:"RenameConstraintNode",oldName:this.transformNode(e.oldName,r),newName:this.transformNode(e.newName,r)}}transformCreateView(e,r){return{kind:"CreateViewNode",name:this.transformNode(e.name,r),temporary:e.temporary,orReplace:e.orReplace,ifNotExists:e.ifNotExists,materialized:e.materialized,columns:this.transformNodeList(e.columns,r),as:this.transformNode(e.as,r)}}transformRefreshMaterializedView(e,r){return{kind:"RefreshMaterializedViewNode",name:this.transformNode(e.name,r),concurrently:e.concurrently,withNoData:e.withNoData}}transformDropView(e,r){return{kind:"DropViewNode",name:this.transformNode(e.name,r),ifExists:e.ifExists,materialized:e.materialized,cascade:e.cascade}}transformGenerated(e,r){return{kind:"GeneratedNode",byDefault:e.byDefault,always:e.always,identity:e.identity,stored:e.stored,expression:this.transformNode(e.expression,r)}}transformDefaultValue(e,r){return{kind:"DefaultValueNode",defaultValue:this.transformNode(e.defaultValue,r)}}transformOn(e,r){return{kind:"OnNode",on:this.transformNode(e.on,r)}}transformSelectModifier(e,r){return{kind:"SelectModifierNode",modifier:e.modifier,rawModifier:this.transformNode(e.rawModifier,r),of:this.transformNodeList(e.of,r)}}transformCreateType(e,r){return{kind:"CreateTypeNode",name:this.transformNode(e.name,r),enum:this.transformNode(e.enum,r)}}transformDropType(e,r){return{kind:"DropTypeNode",name:this.transformNode(e.name,r),additionalNames:this.transformNodeList(e.additionalNames,r),cascade:e.cascade,ifExists:e.ifExists}}transformExplain(e,r){return{kind:"ExplainNode",format:e.format,options:this.transformNode(e.options,r)}}transformSchemableIdentifier(e,r){return{kind:"SchemableIdentifierNode",schema:this.transformNode(e.schema,r),identifier:this.transformNode(e.identifier,r)}}transformAggregateFunction(e,r){return{kind:"AggregateFunctionNode",func:e.func,aggregated:this.transformNodeList(e.aggregated,r),distinct:e.distinct,orderBy:this.transformNode(e.orderBy,r),withinGroup:this.transformNode(e.withinGroup,r),filter:this.transformNode(e.filter,r),over:this.transformNode(e.over,r)}}transformOver(e,r){return{kind:"OverNode",orderBy:this.transformNode(e.orderBy,r),partitionBy:this.transformNode(e.partitionBy,r)}}transformPartitionBy(e,r){return{kind:"PartitionByNode",items:this.transformNodeList(e.items,r)}}transformPartitionByItem(e,r){return{kind:"PartitionByItemNode",partitionBy:this.transformNode(e.partitionBy,r)}}transformBinaryOperation(e,r){return{kind:"BinaryOperationNode",leftOperand:this.transformNode(e.leftOperand,r),operator:this.transformNode(e.operator,r),rightOperand:this.transformNode(e.rightOperand,r)}}transformUnaryOperation(e,r){return{kind:"UnaryOperationNode",operator:this.transformNode(e.operator,r),operand:this.transformNode(e.operand,r)}}transformUsing(e,r){return{kind:"UsingNode",tables:this.transformNodeList(e.tables,r)}}transformFunction(e,r){return{kind:"FunctionNode",func:e.func,arguments:this.transformNodeList(e.arguments,r)}}transformCase(e,r){return{kind:"CaseNode",value:this.transformNode(e.value,r),when:this.transformNodeList(e.when,r),else:this.transformNode(e.else,r),isStatement:e.isStatement}}transformWhen(e,r){return{kind:"WhenNode",condition:this.transformNode(e.condition,r),result:this.transformNode(e.result,r)}}transformJSONReference(e,r){return{kind:"JSONReferenceNode",reference:this.transformNode(e.reference,r),traversal:this.transformNode(e.traversal,r)}}transformJSONPath(e,r){return{kind:"JSONPathNode",inOperator:this.transformNode(e.inOperator,r),pathLegs:this.transformNodeList(e.pathLegs,r)}}transformJSONPathLeg(e,r){return{kind:"JSONPathLegNode",type:e.type,value:e.value}}transformJSONOperatorChain(e,r){return{kind:"JSONOperatorChainNode",operator:this.transformNode(e.operator,r),values:this.transformNodeList(e.values,r)}}transformTuple(e,r){return{kind:"TupleNode",values:this.transformNodeList(e.values,r)}}transformMergeQuery(e,r){return{kind:"MergeQueryNode",into:this.transformNode(e.into,r),using:this.transformNode(e.using,r),whens:this.transformNodeList(e.whens,r),with:this.transformNode(e.with,r),top:this.transformNode(e.top,r),endModifiers:this.transformNodeList(e.endModifiers,r),output:this.transformNode(e.output,r),returning:this.transformNode(e.returning,r)}}transformMatched(e,r){return{kind:"MatchedNode",not:e.not,bySource:e.bySource}}transformAddIndex(e,r){return{kind:"AddIndexNode",name:this.transformNode(e.name,r),columns:this.transformNodeList(e.columns,r),unique:e.unique,using:this.transformNode(e.using,r),ifNotExists:e.ifNotExists}}transformCast(e,r){return{kind:"CastNode",expression:this.transformNode(e.expression,r),dataType:this.transformNode(e.dataType,r)}}transformFetch(e,r){return{kind:"FetchNode",rowCount:this.transformNode(e.rowCount,r),modifier:e.modifier}}transformTop(e,r){return{kind:"TopNode",expression:e.expression,modifiers:e.modifiers}}transformOutput(e,r){return{kind:"OutputNode",selections:this.transformNodeList(e.selections,r)}}transformAlterType(e,r){return{kind:"AlterTypeNode",name:this.transformNode(e.name,r),addValue:this.transformNode(e.addValue,r),renameTo:this.transformNode(e.renameTo,r),renameValue:this.transformNode(e.renameValue,r),setSchema:this.transformNode(e.setSchema,r)}}transformAddValue(e,r){return{kind:"AddValueNode",value:this.transformNode(e.value,r),ifNotExists:e.ifNotExists,isBefore:e.isBefore,neighborValue:this.transformNode(e.neighborValue,r)}}transformRenameValue(e,r){return{kind:"RenameValueNode",oldValue:this.transformNode(e.oldValue,r),newValue:this.transformNode(e.newValue,r)}}transformDataType(e,r){return e}transformSelectAll(e,r){return e}transformIdentifier(e,r){return e}transformValue(e,r){return e}transformPrimitiveValueList(e,r){return e}transformOperator(e,r){return e}transformDefaultInsertValue(e,r){return e}transformOrAction(e,r){return e}transformCollate(e,r){return e}};function mk(t){return wt(t)&&he(t.kind)}var K1={AlterTableNode:!0,AlterTypeNode:!0,CreateIndexNode:!0,CreateSchemaNode:!0,CreateTableNode:!0,CreateTypeNode:!0,CreateViewNode:!0,DeleteQueryNode:!0,DropIndexNode:!0,DropSchemaNode:!0,DropTableNode:!0,DropTypeNode:!0,RefreshMaterializedViewNode:!0,DropViewNode:!0,InsertQueryNode:!0,RawNode:!0,SelectQueryNode:!0,UpdateQueryNode:!0,MergeQueryNode:!0};function yk(t){return mk(t)&&K1[t.kind]===!0}var Q1=u({json_agg:!0,to_json:!0}),Nu=class extends Ys{#e;#t=new Set;#r=new Set;constructor(e){super(),this.#e=e}transformNodeImpl(e,r){if(!yk(e))return super.transformNodeImpl(e,r);let o=this.#a(e);for(let i of o)this.#r.add(i);let n=this.#s(e);for(let i of n)this.#t.add(i);let s=super.transformNodeImpl(e,r);for(let i of n)this.#t.delete(i);for(let i of o)this.#r.delete(i);return s}transformSchemableIdentifier(e,r){let o=super.transformSchemableIdentifier(e,r);return o.schema||!this.#t.has(e.identifier.name)?o:{...o,schema:ae.create(this.#e)}}transformReferences(e,r){let o=super.transformReferences(e,r);return o.table.table.schema?o:{...o,table:Lt.createWithSchema(this.#e,o.table.table.identifier.name)}}transformAggregateFunction(e,r){return{...super.transformAggregateFunction({...e,aggregated:[]},r),aggregated:this.#n(e,r,"aggregated")}}transformFunction(e,r){return{...super.transformFunction({...e,arguments:[]},r),arguments:this.#n(e,r,"arguments")}}transformSelectModifier(e,r){return{...super.transformSelectModifier({...e,of:void 0},r),of:e.of?.map(o=>Lt.is(o)&&!o.table.schema?{...o,table:this.transformIdentifier(o.table.identifier,r)}:this.transformNode(o,r))}}#n(e,r,o){return Q1[e.func]?e[o].map(n=>!Lt.is(n)||n.table.schema?this.transformNode(n,r):{...n,table:this.transformIdentifier(n.table.identifier,r)}):this.transformNodeList(e[o],r)}#s(e){let r=new Set;if("name"in e&&e.name&&Wt.is(e.name)&&this.#i(e.name,r),"from"in e&&e.from)for(let o of e.from.froms)this.#o(o,r);if("into"in e&&e.into&&this.#o(e.into,r),"table"in e&&e.table&&this.#o(e.table,r),"joins"in e&&e.joins)for(let o of e.joins)this.#o(o.table,r);return"using"in e&&e.using&&(Vr.is(e.using)?this.#o(e.using.table,r):this.#o(e.using,r)),r}#a(e){let r=new Set;return"with"in e&&e.with&&this.#c(e.with,r),r}#o(e,r){if(Lt.is(e))return this.#i(e.table,r);if(yt.is(e)&&Lt.is(e.node))return this.#i(e.node.table,r);if(du.is(e)){for(let o of e.items)this.#o(o,r);return}if(qa.is(e)){for(let o of e.tables)this.#o(o,r);return}}#i(e,r){let o=e.identifier.name;!this.#t.has(o)&&!this.#r.has(o)&&r.add(o)}#c(e,r){for(let o of e.expressions){let n=o.name.table.table.identifier.name;this.#r.has(n)||r.add(n)}}};var yo=class{#e;constructor(e){this.#e=new Nu(e)}transformQuery(e){return this.#e.transformNode(e.node,e.queryId)}async transformResult(e){return e.result}};var gk=u({is(t){return t.kind==="MatchedNode"},create(t,e=!1){return u({kind:"MatchedNode",not:t,bySource:e})}});function Kh(t,e,r){return rr.create(Qs([gk.create(!t.isMatched,t.bySource),...e&&e.length>0?[e.length===3&&r?lt(e[0],e[1],e[2]):qe(e)]:[]],"and",!1))}function Xs(t){return he(t)?Ie.create([t],[]):Me(t)?t.toOperationNode():t}var go=class{#e;#t;#r;constructor(){this.#e=new Promise((e,r)=>{this.#r=r,this.#t=e})}get promise(){return this.#e}resolve=e=>{this.#t?.(e),this.#t=this.#r=void 0};reject=e=>{this.#r?.(e),this.#r=this.#t=void 0}};async function Zs(t,e){let r=new go,o=new go;return t.provideConnection(async n=>(r.resolve(n),await o.promise),e).catch(n=>r.reject(n)),u({connection:await r.promise,release:o.resolve})}function xk(t="ignore query",e,r){if(t!=="ignore query"){if(t==="cancel query"){let o=e.cancelQuery;return o||(r(),bk(t,e.killSession?"kill session":void 0)),o.bind(e)}if(t==="kill session"){let o=e.killSession;return o||(r(),bk(t,e.cancelQuery?"cancel query":void 0)),o.bind(e)}throw r(),new Error(`Unexpected \`inflightQueryAbortStrategy\`: "${t}"`)}}function bk(t,e){throw new Error(`This dialect doesn't support \`inflightQueryAbortStrategy\` "${t}". Use "ignore query"${e?` or "${e}"`:""} instead.`)}function Fo(t,e,r){t?.aborted&&(r?.(),bn(t.reason,e))}function bn(t,e){throw J1(t,e),t}var xr={};async function ei(t,e,r,o){if(!e)return t;Fo(e,`before ${r}`,o);let{promise:n,resolve:s}=new go,i=()=>s(xr);e.addEventListener("abort",i);try{Fo(e,`before ${r}`,o);let a=await Promise.race([t,n]);if(a!==xr)return a;o?.(),bn(e.reason,`during ${r}`)}finally{e.removeEventListener("abort",i),s(xr)}}function bo(t){return e=>console.error(`\`${t}\` failed in the background after abortion: ${PN(e)}`)}function J1(t,e){t!==null&&typeof t=="object"&&!Object.isFrozen(t)&&Object.defineProperty(t,"__kysely_timing__",{configurable:!0,enumerable:!1,value:e,writable:!1})}var H1=u([]),ti=class{#e;constructor(e=H1){this.#e=e}get plugins(){return this.#e}transformQuery(e,r){for(let o of this.#e){let n=o.transformQuery({node:e,queryId:r});if(n.kind===e.kind)e=n;else throw new Error(["KyselyPlugin.transformQuery must return a node","of the same kind that was given to it.",`The plugin was given a ${e.kind}`,`but it returned a ${n.kind}`].join(" "))}return e}async executeQuery(e,r){let{inflightQueryAbortStrategy:o="ignore query",signal:n}=r||{};if(!n){let p=await this.provideConnection(async f=>await f.executeQuery(e),r);return await this.#t(p,e.queryId)}Fo(n,"before query execution"),r=u({signal:n});let{connection:s,release:i}=await Zs(this,r),a=this.provideConnection.bind(this),{promise:c,resolve:l}=new go,h=()=>l(xr);n.addEventListener("abort",h,{once:!0});try{Fo(n,"before query execution",i);let p=xk(o,s,i);if(p&&s.collectSessionInfo){Fo(n,"before query execution",i);let b=s.collectSessionInfo();await Promise.race([c,b]).catch(w=>{throw i(),w})===xr&&(b.catch(bo("collectSessionInfo")).finally(i),bn(n.reason,"before query execution"))}let f=s.executeQuery(e,r),m=await Promise.race([c,f]).catch(b=>{throw i(),b});m===xr?(Promise.allSettled([f.catch(bo("query")),p?.(a).catch(bo("inflightQueryAbortHandler"))]).finally(i),bn(n.reason,"during query execution")):i();let d=this.#t(m,e.queryId,r),y=await Promise.race([c,d]);return y===xr&&(d.catch(bo("plugins.transformResult")),bn(n.reason,"during result transformation")),y}finally{l(xr),n.removeEventListener("abort",h)}}async*stream(e,r,o){let{signal:n}=o||{};if(!n){let{connection:m,release:d}=await Zs(this);try{for await(let y of m.streamQuery(e,r))yield await this.#t(y,e.queryId,o)}finally{d()}return}o=u({signal:n}),Fo(n,"before connection acquisition");let{connection:s,release:i}=await Zs(this,o),{promise:a,resolve:c}=new go,l=()=>c(xr);n.addEventListener("abort",l,{once:!0});let h,p;Fo(n,"before query streaming",i);let{queryId:f}=e;try{for(h=s.streamQuery(e,r,o);;){Fo(n,"during query streaming");let m=h.next(),d=await Promise.race([a,m]);if(d===xr&&(p=m.catch(bo("iterator.next")),bn(n.reason,"during query streaming")),d.done)break;let y=this.#t(d.value,f,o),b=await Promise.race([a,y]);b===xr&&(p=y.catch(bo("plugins.transformResult")),bn(n.reason,"during result transformation")),yield b}}finally{c(xr),n.removeEventListener("abort",l);let m=(h?.return?.()||Promise.resolve()).finally(()=>p).finally(i);p||await m}}async#t(e,r,o){let{signal:n}=o||{};for(let s of this.#e)e=await s.transformResult(u({queryId:r,result:e,signal:n}));return e}};var Qh=class t extends ti{get adapter(){throw new Error("this query cannot be compiled to SQL")}compileQuery(){throw new Error("this query cannot be compiled to SQL")}provideConnection(){throw new Error("this query cannot be executed")}withConnectionProvider(){throw new Error("this query cannot have a connection provider")}withPlugin(e){return new t([...this.plugins,e])}withPlugins(e){return new t([...this.plugins,...e])}withPluginAtFront(e){return new t([e,...this.plugins])}withoutPlugins(){return new t([])}},xn=new Qh;var ku=class{numChangedRows;constructor(e){this.numChangedRows=e}};var Su=class t{#e;constructor(e){this.#e=u(e)}modifyEnd(e){return new t({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,e.toOperationNode())})}top(e,r){return new t({...this.#e,queryNode:X.cloneWithTop(this.#e.queryNode,Qr(e,r))})}using(...e){return new wn({...this.#e,queryNode:br.cloneWithUsing(this.#e.queryNode,gn("Using",e))})}returning(e){return new t({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Nt(e))})}returningAll(e){return new t({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Tt(e))})}output(e){return new t({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Nt(e))})}outputAll(e){return new t({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Tt(e))})}},wn=class t{#e;constructor(e){this.#e=u(e)}modifyEnd(e){return new t({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,e.toOperationNode())})}top(e,r){return new t({...this.#e,queryNode:X.cloneWithTop(this.#e.queryNode,Qr(e,r))})}whenMatched(){return this.#t([])}whenMatchedAnd(...e){return this.#t(e)}whenMatchedAndRef(e,r,o){return this.#t([e,r,o],!0)}#t(e,r){return new vu({...this.#e,queryNode:br.cloneWithWhen(this.#e.queryNode,Kh({isMatched:!0},e,r))})}whenNotMatched(){return this.#r([])}whenNotMatchedAnd(...e){return this.#r(e)}whenNotMatchedAndRef(e,r,o){return this.#r([e,r,o],!0)}whenNotMatchedBySource(){return this.#r([],!1,!0)}whenNotMatchedBySourceAnd(...e){return this.#r(e,!1,!0)}whenNotMatchedBySourceAndRef(e,r,o){return this.#r([e,r,o],!0,!0)}returning(e){return new t({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Nt(e))})}returningAll(e){return new t({...this.#e,queryNode:X.cloneWithReturning(this.#e.queryNode,Tt(e))})}output(e){return new t({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Nt(e))})}outputAll(e){return new t({...this.#e,queryNode:X.cloneWithOutput(this.#e.queryNode,Tt(e))})}#r(e,r=!1,o=!1){let n={...this.#e,queryNode:br.cloneWithWhen(this.#e.queryNode,Kh({isMatched:!1,bySource:o},e,r))},s=o?vu:Jh;return new s(n)}$call(e){return e(this)}$if(e,r){return e?r(this):new t({...this.#e})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let r=this.compile(),o=await this.#e.executor.executeQuery(r,e),{adapter:n}=this.#e.executor,s=r.query;return s.returning&&n.supportsReturning||s.output&&n.supportsOutput?o.rows:[new ku(o.numAffectedRows)]}async executeTakeFirst(e){let[r]=await this.execute(e);return r}async executeTakeFirstOrThrow(e){typeof e=="function"&&(e={errorConstructor:e});let r=await this.executeTakeFirst(e);if(r===void 0){let o=e?.errorConstructor??Ir;throw mo(o)?new o(this.toOperationNode()):o(this.toOperationNode())}return r}},vu=class{#e;constructor(e){this.#e=u(e)}thenDelete(){return new wn({...this.#e,queryNode:br.cloneWithThen(this.#e.queryNode,Xs("delete"))})}thenDoNothing(){return new wn({...this.#e,queryNode:br.cloneWithThen(this.#e.queryNode,Xs("do nothing"))})}thenUpdate(e){return new wn({...this.#e,queryNode:br.cloneWithThen(this.#e.queryNode,Xs(e(new Gn({queryId:this.#e.queryId,executor:xn,queryNode:ho.createWithoutTable()}))))})}thenUpdateSet(...e){return this.thenUpdate(r=>r.set(...e))}},Jh=class{#e;constructor(e){this.#e=u(e)}thenDoNothing(){return new wn({...this.#e,queryNode:br.cloneWithThen(this.#e.queryNode,Xs("do nothing"))})}thenInsertValues(e){let[r,o]=mu(e);return new wn({...this.#e,queryNode:br.cloneWithThen(this.#e.queryNode,Xs(et.cloneWith(et.createWithoutInto(),{columns:r,values:o})))})}};var ri=class t{#e;constructor(e){this.#e=u(e)}selectFrom(e){return za({queryId:Se(),executor:this.#e.executor,queryNode:De.createFrom(Jr(e),this.#e.withNode)})}selectNoFrom(e){return za({queryId:Se(),executor:this.#e.executor,queryNode:De.cloneWithSelections(De.create(this.#e.withNode),Nt(e))})}insertInto(e){return new Ua({queryId:Se(),executor:this.#e.executor,queryNode:et.create(Oe(e),this.#e.withNode)})}replaceInto(e){return new Ua({queryId:Se(),executor:this.#e.executor,queryNode:et.create(Oe(e),this.#e.withNode,!0)})}deleteFrom(e){return new ja({queryId:Se(),executor:this.#e.executor,queryNode:yn.create(Jr(e),this.#e.withNode)})}updateTable(e){return new Gn({queryId:Se(),executor:this.#e.executor,queryNode:ho.create(Jr(e),this.#e.withNode)})}mergeInto(e){return new Su({queryId:Se(),executor:this.#e.executor,queryNode:br.create(Hh(e),this.#e.withNode)})}with(e,r){let o=Vh(e,r);return new t({...this.#e,withNode:this.#e.withNode?Fa.cloneWithExpression(this.#e.withNode,o):Fa.create(o)})}withRecursive(e,r){let o=Vh(e,r);return new t({...this.#e,withNode:this.#e.withNode?Fa.cloneWithExpression(this.#e.withNode,o):Fa.create(o,{recursive:!0})})}withPlugin(e){return new t({...this.#e,executor:this.#e.executor.withPlugin(e)})}withoutPlugins(){return new t({...this.#e,executor:this.#e.executor.withoutPlugins()})}withSchema(e){return new t({...this.#e,executor:this.#e.executor.withPluginAtFront(new yo(e))})}};function pk(){return new ri({executor:xn})}function wk(t,e){return new pu({joinNode:Vr.create(t,Yn(e))})}function Nk(){return new fu({overNode:La.create()})}function gn(t,e){if(e.length===3)return Y1(t,e[0],e[1],e[2]);if(e.length===2)return G1(t,e[0],e[1]);if(e.length===1)return X1(t,e[0]);throw new Error("not implemented")}function G1(t,e,r){return r(wk(t,e)).toOperationNode()}function Y1(t,e,r,o){return Vr.createWithOn(t,Yn(e),lt(r,"=",o))}function X1(t,e){return Vr.create(t,Yn(e))}var kk=u({is(t){return t.kind==="OffsetNode"},create(t){return u({kind:"OffsetNode",offset:t})}});var Sk=u({is(t){return t.kind==="GroupByItemNode"},create(t){return u({kind:"GroupByItemNode",groupBy:t})}});function vk(t){return t=Qe(t)?t(Kr()):t,Uo(t).map(Sk.create)}var Eu=u({is(t){return t.kind==="SetOperationNode"},create(t,e,r){return u({kind:"SetOperationNode",operator:t,expression:e,all:r})}});function Xn(t,e,r){return Qe(e)&&(e=e(Gh())),Pt(e)||(e=[e]),e.map(o=>Eu.create(t,Et(o),r))}var Ce=class t{#e;constructor(e){this.#e=e}get expressionType(){}as(e){return new Va(this,e)}or(...e){return new Yh(zr.create(this.#e,qe(e)))}and(...e){return new Xh(er.create(this.#e,qe(e)))}$castTo(){return new t(this.#e)}$notNull(){return new t(this.#e)}toOperationNode(){return this.#e}},Va=class{#e;#t;constructor(e,r){this.#e=e,this.#t=r}get expression(){return this.#e}get alias(){return this.#t}toOperationNode(){return yt.create(this.#e.toOperationNode(),Me(this.#t)?this.#t.toOperationNode():ae.create(this.#t))}},Yh=class t{#e;constructor(e){this.#e=e}get expressionType(){}as(e){return new Va(this,e)}or(...e){return new t(zr.create(this.#e,qe(e)))}$castTo(){return new t(this.#e)}toOperationNode(){return gr.create(this.#e)}},Xh=class t{#e;constructor(e){this.#e=e}get expressionType(){}as(e){return new Va(this,e)}and(...e){return new t(er.create(this.#e,qe(e)))}$castTo(){return new t(this.#e)}toOperationNode(){return gr.create(this.#e)}};var Ek=u({is(t){return t.kind==="FetchNode"},create(t,e){return{kind:"FetchNode",rowCount:Le.create(t),modifier:e}}});function Tk(t,e){if(!dn(t)&&!js(t))throw new Error(`Invalid fetch row count: ${t}`);if(!Z1(e))throw new Error(`Invalid fetch modifier: ${e}`);return Ek.create(t,e)}function Z1(t){return t==="only"||t==="with ties"}var xe,Tu=class{#e;constructor(e){this.#e=u(e)}get expressionType(){}get isSelectQueryBuilder(){return!0}where(...e){return new xe({...this.#e,queryNode:X.cloneWithWhere(this.#e.queryNode,qe(e))})}whereRef(e,r,o){return new xe({...this.#e,queryNode:X.cloneWithWhere(this.#e.queryNode,lt(e,r,o))})}having(...e){return new xe({...this.#e,queryNode:De.cloneWithHaving(this.#e.queryNode,qe(e))})}havingRef(e,r,o){return new xe({...this.#e,queryNode:De.cloneWithHaving(this.#e.queryNode,lt(e,r,o))})}select(e){return new xe({...this.#e,queryNode:De.cloneWithSelections(this.#e.queryNode,Nt(e))})}distinctOn(e){return new xe({...this.#e,queryNode:De.cloneWithDistinctOn(this.#e.queryNode,Uo(e))})}modifyFront(e){return new xe({...this.#e,queryNode:De.cloneWithFrontModifier(this.#e.queryNode,fo.createWithExpression(e.toOperationNode()))})}modifyEnd(e){return new xe({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,fo.createWithExpression(e.toOperationNode()))})}distinct(){return new xe({...this.#e,queryNode:De.cloneWithFrontModifier(this.#e.queryNode,fo.create("Distinct"))})}forUpdate(e){return new xe({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,fo.create("ForUpdate",e?Ma(e).map(Oe):void 0))})}forShare(e){return new xe({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,fo.create("ForShare",e?Ma(e).map(Oe):void 0))})}forKeyShare(e){return new xe({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,fo.create("ForKeyShare",e?Ma(e).map(Oe):void 0))})}forNoKeyUpdate(e){return new xe({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,fo.create("ForNoKeyUpdate",e?Ma(e).map(Oe):void 0))})}skipLocked(){return new xe({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,fo.create("SkipLocked"))})}noWait(){return new xe({...this.#e,queryNode:X.cloneWithEndModifier(this.#e.queryNode,fo.create("NoWait"))})}selectAll(e){return new xe({...this.#e,queryNode:De.cloneWithSelections(this.#e.queryNode,Tt(e))})}innerJoin(...e){return this.#t("InnerJoin",e)}leftJoin(...e){return this.#t("LeftJoin",e)}rightJoin(...e){return this.#t("RightJoin",e)}fullJoin(...e){return this.#t("FullJoin",e)}crossJoin(...e){return this.#t("CrossJoin",e)}innerJoinLateral(...e){return this.#t("LateralInnerJoin",e)}leftJoinLateral(...e){return this.#t("LateralLeftJoin",e)}crossJoinLateral(...e){return this.#t("LateralCrossJoin",e)}crossApply(...e){return this.#t("CrossApply",e)}outerApply(...e){return this.#t("OuterApply",e)}#t(e,r){return new xe({...this.#e,queryNode:X.cloneWithJoin(this.#e.queryNode,gn(e,r))})}orderBy(...e){return new xe({...this.#e,queryNode:X.cloneWithOrderByItems(this.#e.queryNode,yr(e))})}groupBy(e){return new xe({...this.#e,queryNode:De.cloneWithGroupByItems(this.#e.queryNode,vk(e))})}limit(e){return new xe({...this.#e,queryNode:De.cloneWithLimit(this.#e.queryNode,Hs.create(Pe(e)))})}offset(e){return new xe({...this.#e,queryNode:De.cloneWithOffset(this.#e.queryNode,kk.create(Pe(e)))})}fetch(e,r="only"){return new xe({...this.#e,queryNode:De.cloneWithFetch(this.#e.queryNode,Tk(e,r))})}top(e,r){return new xe({...this.#e,queryNode:X.cloneWithTop(this.#e.queryNode,Qr(e,r))})}union(e){return new xe({...this.#e,queryNode:De.cloneWithSetOperations(this.#e.queryNode,Xn("union",e,!1))})}unionAll(e){return new xe({...this.#e,queryNode:De.cloneWithSetOperations(this.#e.queryNode,Xn("union",e,!0))})}intersect(e){return new xe({...this.#e,queryNode:De.cloneWithSetOperations(this.#e.queryNode,Xn("intersect",e,!1))})}intersectAll(e){return new xe({...this.#e,queryNode:De.cloneWithSetOperations(this.#e.queryNode,Xn("intersect",e,!0))})}except(e){return new xe({...this.#e,queryNode:De.cloneWithSetOperations(this.#e.queryNode,Xn("except",e,!1))})}exceptAll(e){return new xe({...this.#e,queryNode:De.cloneWithSetOperations(this.#e.queryNode,Xn("except",e,!0))})}as(e){return new Zh(this,e)}clearSelect(){return new xe({...this.#e,queryNode:De.cloneWithoutSelections(this.#e.queryNode)})}clearWhere(){return new xe({...this.#e,queryNode:X.cloneWithoutWhere(this.#e.queryNode)})}clearLimit(){return new xe({...this.#e,queryNode:De.cloneWithoutLimit(this.#e.queryNode)})}clearOffset(){return new xe({...this.#e,queryNode:De.cloneWithoutOffset(this.#e.queryNode)})}clearOrderBy(){return new xe({...this.#e,queryNode:X.cloneWithoutOrderBy(this.#e.queryNode)})}clearGroupBy(){return new xe({...this.#e,queryNode:De.cloneWithoutGroupBy(this.#e.queryNode)})}$call(e){return e(this)}$if(e,r){return e?r(this):new xe({...this.#e})}$castTo(){return new xe(this.#e)}$narrowType(){return new xe(this.#e)}$assertType(){return new xe(this.#e)}$asTuple(){return new Ce(this.toOperationNode())}$asScalar(){return new Ce(this.toOperationNode())}withPlugin(e){return new xe({...this.#e,executor:this.#e.executor.withPlugin(e)})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let r=this.compile();return(await this.#e.executor.executeQuery(r,e)).rows}async executeTakeFirst(e){let[r]=await this.execute(e);return r}async executeTakeFirstOrThrow(e){typeof e=="function"&&(e={errorConstructor:e});let r=await this.executeTakeFirst(e);if(r===void 0){let o=e?.errorConstructor??Ir;throw mo(o)?new o(this.toOperationNode()):o(this.toOperationNode())}return r}async*stream(e){typeof e!="object"&&(e={chunkSize:e});let r=this.compile(),o=this.#e.executor.stream(r,e.chunkSize??100,e);for await(let n of o)yield*n.rows}async explain(e,r){return await new xe({...this.#e,queryNode:X.cloneWithExplain(this.#e.queryNode,e,r)}).execute()}};xe=Tu;function za(t){return new Tu(t)}var Zh=class{#e;#t;constructor(e,r){this.#e=e,this.#t=r}get expression(){return this.#e}get alias(){return this.#t}get isAliasedSelectQueryBuilder(){return!0}toOperationNode(){return yt.create(this.#e.toOperationNode(),ae.create(this.#t))}};var xo=u({is(t){return t.kind==="AggregateFunctionNode"},create(t,e=[]){return u({kind:"AggregateFunctionNode",func:t,aggregated:e})},cloneWithDistinct(t){return u({...t,distinct:!0})},cloneWithOrderBy(t,e,r=!1){let o=r?"withinGroup":"orderBy";return u({...t,[o]:t[o]?jo.cloneWithItems(t[o],e):jo.create(e)})},cloneWithFilter(t,e){return u({...t,filter:t.filter?Rt.cloneWithOperation(t.filter,"And",e):Rt.create(e)})},cloneWithOrFilter(t,e){return u({...t,filter:t.filter?Rt.cloneWithOperation(t.filter,"Or",e):Rt.create(e)})},cloneWithOver(t,e){return u({...t,over:e})}});var em=u({is(t){return t.kind==="FunctionNode"},create(t,e){return u({kind:"FunctionNode",func:t,arguments:e})}});var oi=class t{#e;constructor(e){this.#e=u(e)}get expressionType(){}as(e){return new tm(this,e)}distinct(){return new t({...this.#e,aggregateFunctionNode:xo.cloneWithDistinct(this.#e.aggregateFunctionNode)})}orderBy(...e){return new t({...this.#e,aggregateFunctionNode:X.cloneWithOrderByItems(this.#e.aggregateFunctionNode,yr(e))})}clearOrderBy(){return new t({...this.#e,aggregateFunctionNode:X.cloneWithoutOrderBy(this.#e.aggregateFunctionNode)})}withinGroupOrderBy(...e){return new t({...this.#e,aggregateFunctionNode:xo.cloneWithOrderBy(this.#e.aggregateFunctionNode,yr(e),!0)})}filterWhere(...e){return new t({...this.#e,aggregateFunctionNode:xo.cloneWithFilter(this.#e.aggregateFunctionNode,qe(e))})}filterWhereRef(e,r,o){return new t({...this.#e,aggregateFunctionNode:xo.cloneWithFilter(this.#e.aggregateFunctionNode,lt(e,r,o))})}over(e){let r=Nk();return new t({...this.#e,aggregateFunctionNode:xo.cloneWithOver(this.#e.aggregateFunctionNode,(e?e(r):r).toOperationNode())})}$call(e){return e(this)}$castTo(){return new t(this.#e)}$notNull(){return new t(this.#e)}toOperationNode(){return this.#e.aggregateFunctionNode}},tm=class{#e;#t;constructor(e,r){this.#e=e,this.#t=r}get expression(){return this.#e}get alias(){return this.#t}toOperationNode(){return yt.create(this.#e.toOperationNode(),ae.create(this.#t))}};function Ou(){let t=(r,o)=>new Ce(em.create(r,Uo(o??[]))),e=(r,o)=>new oi({aggregateFunctionNode:xo.create(r,o?Uo(o):void 0)});return Object.assign(t,{agg:e,avg(r){return e("avg",[r])},coalesce(...r){return t("coalesce",r)},count(r){return e("count",[r])},countAll(r){return new oi({aggregateFunctionNode:xo.create("count",Tt(r))})},max(r){return e("max",[r])},min(r){return e("min",[r])},sum(r){return e("sum",[r])},any(r){return t("any",[r])},jsonAgg(r){return new oi({aggregateFunctionNode:xo.create("json_agg",[he(r)?Oe(r):r.toOperationNode()])})},toJson(r){return new Ce(em.create("to_json",[he(r)?Oe(r):r.toOperationNode()]))}})}var Ok=u({is(t){return t.kind==="UnaryOperationNode"},create(t,e){return u({kind:"UnaryOperationNode",operator:t,operand:e})}});function Ck(t,e){if(KN(t))return Ok.create(mr.create(t),gt(e));throw new Error(`invalid unary operator ${JSON.stringify(t)}`)}var Dt=u({is(t){return t.kind==="CaseNode"},create(t){return u({kind:"CaseNode",value:t})},cloneWithWhen(t,e){return u({...t,when:u(t.when?[...t.when,e]:[e])})},cloneWithThen(t,e){return u({...t,when:t.when?u([...t.when.slice(0,-1),rr.cloneWithResult(t.when[t.when.length-1],e)]):void 0})},cloneWith(t,e){return u({...t,...e})}});var ni=class{#e;constructor(e){this.#e=u(e)}when(...e){return new si({...this.#e,node:Dt.cloneWithWhen(this.#e.node,rr.create(qe(e)))})}whenRef(e,r,o){return new si({...this.#e,node:Dt.cloneWithWhen(this.#e.node,rr.create(lt(e,r,o)))})}},si=class{#e;constructor(e){this.#e=u(e)}then(e){return new Cu({...this.#e,node:Dt.cloneWithThen(this.#e.node,lu(e)?Wa(e):Pe(e))})}thenRef(e){return new Cu({...this.#e,node:Dt.cloneWithThen(this.#e.node,gt(e))})}},Cu=class{#e;constructor(e){this.#e=u(e)}when(...e){return new si({...this.#e,node:Dt.cloneWithWhen(this.#e.node,rr.create(qe(e)))})}whenRef(e,r,o){return new si({...this.#e,node:Dt.cloneWithWhen(this.#e.node,rr.create(lt(e,r,o)))})}else(e){return new Au({...this.#e,node:Dt.cloneWith(this.#e.node,{else:lu(e)?Wa(e):Pe(e)})})}elseRef(e){return new Au({...this.#e,node:Dt.cloneWith(this.#e.node,{else:gt(e)})})}end(){return new Ce(Dt.cloneWith(this.#e.node,{isStatement:!1}))}endCase(){return new Ce(Dt.cloneWith(this.#e.node,{isStatement:!0}))}},Au=class{#e;constructor(e){this.#e=u(e)}end(){return new Ce(Dt.cloneWith(this.#e.node,{isStatement:!1}))}endCase(){return new Ce(Dt.cloneWith(this.#e.node,{isStatement:!0}))}};var rm=u({is(t){return t.kind==="JSONPathLegNode"},create(t,e){return u({kind:"JSONPathLegNode",type:t,value:e})}});var eA=/^#-\d+$/,ii=class{#e;constructor(e){this.#e=e}at(e){if(typeof e!="number"&&typeof e!="string"||typeof e=="number"&&!Number.isInteger(e)||typeof e=="string"&&e!=="last"&&!eA.test(e))throw new Error(`Unexpected index value in .at(...): ${e}`);return this.#t("ArrayLocation",e)}key(e){return this.#t("Member",e)}#t(e,r){return _s.is(this.#e)?new Iu(_s.cloneWithTraversal(this.#e,hn.is(this.#e.traversal)?hn.cloneWithLeg(this.#e.traversal,rm.create(e,r)):au.cloneWithValue(this.#e.traversal,Le.createImmediate(r)))):new Iu(hn.cloneWithLeg(this.#e,rm.create(e,r)))}},Iu=class t extends ii{#e;constructor(e){super(e),this.#e=e}get expressionType(){}as(e){return new om(this,e)}$castTo(){return new t(this.#e)}$notNull(){return new t(this.#e)}toOperationNode(){return this.#e}},om=class{#e;#t;constructor(e,r){this.#e=e,this.#t=r}get expression(){return this.#e}get alias(){return this.#t}toOperationNode(){return yt.create(this.#e.toOperationNode(),Me(this.#t)?this.#t.toOperationNode():ae.create(this.#t))}};var nm=u({is(t){return t.kind==="TupleNode"},create(t){return u({kind:"TupleNode",values:u(t)})}});var tA=u({bigint:!0,bigserial:!0,binary:!0,blob:!0,boolean:!0,bytea:!0,char:!0,date:!0,datemultirange:!0,daterange:!0,datetime:!0,datetime2:!0,decimal:!0,"double precision":!0,float4:!0,float8:!0,int2:!0,int4:!0,int4multirange:!0,int4range:!0,int8:!0,int8multirange:!0,int8range:!0,integer:!0,json:!0,jsonb:!0,numeric:!0,nummultirange:!0,numrange:!0,real:!0,serial:!0,smallint:!0,text:!0,time:!0,timestamp:!0,timestamptz:!0,timetz:!0,tsmultirange:!0,tsrange:!0,tstzmultirange:!0,tstzrange:!0,uuid:!0,varbinary:!0,varchar:!0}),rA=u([/^varchar\(\d+\)$/,/^char\(\d+\)$/,/^decimal\(\d+, \d+\)$/,/^numeric\(\d+, \d+\)$/,/^binary\(\d+\)$/,/^datetime\(\d+\)$/,/^time\(\d+\)$/,/^timetz\(\d+\)$/,/^timestamp\(\d+\)$/,/^timestamptz\(\d+\)$/,/^datetime2\(\d+\)$/,/^varbinary\(\d+\)$/]),Ak=u({is(t){return t.kind==="DataTypeNode"},create(t){return u({kind:"DataTypeNode",dataType:t})}});function Ik(t){return tA[t]||rA.some(e=>e.test(t))}function Hr(t){if(Me(t))return t.toOperationNode();if(Ik(t))return Ak.create(t);throw new Error(`invalid column data type ${JSON.stringify(t)}`)}var Rk=u({is(t){return t.kind==="CastNode"},create(t,e){return u({kind:"CastNode",expression:t,dataType:e})}});function Gh(t=xn){function e(n,s,i){return new Ce(uu(n,s,i))}function r(n,s){return new Ce(Ck(n,s))}let o=Object.assign(e,{fn:void 0,eb:void 0,selectFrom(n){return za({queryId:Se(),executor:t,queryNode:De.createFrom(Jr(n))})},case(n){return new ni({node:Dt.create(hr(n)?void 0:gt(n))})},ref(n,s){return hr(s)?new Ce(tr(n)):new ii(GN(n,s))},jsonPath(){return new ii(hn.create())},table(n){return new Ce(Oe(n))},val(n){return new Ce(Pe(n))},refTuple(...n){return new Ce(nm.create(n.map(gt)))},tuple(...n){return new Ce(nm.create(n.map(Pe)))},lit(n){return new Ce(Wa(n))},unary:r,not(n){return r("not",n)},exists(n){return r("exists",n)},neg(n){return r("-",n)},between(n,s,i){return new Ce(fn.create(gt(n),mr.create("between"),er.create(Pe(s),Pe(i))))},betweenSymmetric(n,s,i){return new Ce(fn.create(gt(n),mr.create("between symmetric"),er.create(Pe(s),Pe(i))))},and(n){return Pt(n)?new Ce(Qs(n,"and")):new Ce(Mh(n,"and"))},or(n){return Pt(n)?new Ce(Qs(n,"or")):new Ce(Mh(n,"or"))},parens(...n){let s=qe(n);return gr.is(s)?new Ce(s):new Ce(gr.create(s))},cast(n,s){return new Ce(Rk.create(gt(n),Hr(s)))}});return o.fn=Ou(),o.eb=o,o}function Kr(t){return Gh()}function Et(t){if(Me(t))return t.toOperationNode();if(Qe(t))return t(Kr()).toOperationNode();throw new Error(`invalid expression: ${JSON.stringify(t)}`)}function hu(t){if(Me(t))return t.toOperationNode();if(Qe(t))return t(Kr()).toOperationNode();throw new Error(`invalid aliased expression: ${JSON.stringify(t)}`)}function $o(t){return ru(t)||LN(t)||Qe(t)}var Ru=class{#e;get table(){return this.#e}constructor(e){this.#e=e}as(e){return new sm(this.#e,e)}},sm=class{#e;#t;get table(){return this.#e}get alias(){return this.#t}constructor(e,r){this.#e=e,this.#t=r}toOperationNode(){return yt.create(Oe(this.#e),ae.create(this.#t))}};function Dk(t){return wt(t)&&Me(t)&&he(t.table)&&he(t.alias)}function Jr(t){return Pt(t)?t.map(e=>Yn(e)):[Yn(t)]}function Yn(t){return he(t)?Hh(t):Dk(t)?t.toOperationNode():hu(t)}function Hh(t){let e=" as ";if(t.includes(e)){let[r,o]=t.split(e).map(Bk);return yt.create(Oe(r),ae.create(o))}else return Oe(t)}function Oe(t){if(t.includes(".")){let[r,o]=t.split(".").map(Bk);return Lt.createWithSchema(r,o)}else return Lt.create(t)}function Bk(t){return t.trim()}var im=u({is(t){return t.kind==="AddColumnNode"},create(t){return u({kind:"AddColumnNode",column:t})}});var Ve=u({is(t){return t.kind==="ColumnDefinitionNode"},create(t,e){return u({kind:"ColumnDefinitionNode",column:be.create(t),dataType:e})},cloneWithFrontModifier(t,e){return u({...t,frontModifiers:t.frontModifiers?u([...t.frontModifiers,e]):[e]})},cloneWithEndModifier(t,e){return u({...t,endModifiers:t.endModifiers?u([...t.endModifiers,e]):[e]})},cloneWith(t,e){return u({...t,...e})}});var _a=u({is(t){return t.kind==="DropColumnNode"},create(t){return u({kind:"DropColumnNode",column:be.create(t)})},cloneWith(t,e){return u({...t,...e})}});var am=u({is(t){return t.kind==="RenameColumnNode"},create(t,e){return u({kind:"RenameColumnNode",column:be.create(t),renameTo:be.create(e)})}});var ai=u({is(t){return t.kind==="CheckConstraintNode"},create(t,e){return u({kind:"CheckConstraintNode",expression:t,name:e?ae.create(e):void 0})}});var Mk=u({cascade:!0,"no action":!0,restrict:!0,"set default":!0,"set null":!0}),_3=Object.keys(Mk),ci=u({is(t){return t.kind==="ReferencesNode"},create(t,e){return u({kind:"ReferencesNode",table:t,columns:u([...e])})},cloneWithOnDelete(t,e){return u({...t,onDelete:e})},cloneWithOnUpdate(t,e){return u({...t,onUpdate:e})}});function Pk(t){return he(t)&&Mk[t]}function Du(t){return Me(t)?t.toOperationNode():Le.createImmediate(t)}var Ka=u({is(t){return t.kind==="GeneratedNode"},create(t){return u({kind:"GeneratedNode",...t})},createWithExpression(t){return u({kind:"GeneratedNode",always:!0,expression:t})},cloneWith(t,e){return u({...t,...e})}});var Wk=u({is(t){return t.kind==="DefaultValueNode"},create(t){return u({kind:"DefaultValueNode",defaultValue:t})}});function li(t){if(Pk(t))return t;throw new Error(`invalid OnModifyForeignAction ${t}`)}var zo=class t{#e;constructor(e){this.#e=e}autoIncrement(){return new t(Ve.cloneWith(this.#e,{autoIncrement:!0}))}identity(){return new t(Ve.cloneWith(this.#e,{identity:!0}))}primaryKey(){return new t(Ve.cloneWith(this.#e,{primaryKey:!0}))}references(e){let r=tr(e);if(!r.table||zs.is(r.column))throw new Error(`invalid call references('${e}'). The reference must have format table.column or schema.table.column`);return new t(Ve.cloneWith(this.#e,{references:ci.create(r.table,[r.column])}))}onDelete(e){if(!this.#e.references)throw new Error("on delete constraint can only be added for foreign keys");return new t(Ve.cloneWith(this.#e,{references:ci.cloneWithOnDelete(this.#e.references,li(e))}))}onUpdate(e){if(!this.#e.references)throw new Error("on update constraint can only be added for foreign keys");return new t(Ve.cloneWith(this.#e,{references:ci.cloneWithOnUpdate(this.#e.references,li(e))}))}unique(){return new t(Ve.cloneWith(this.#e,{unique:!0}))}notNull(){return new t(Ve.cloneWith(this.#e,{notNull:!0}))}unsigned(){return new t(Ve.cloneWith(this.#e,{unsigned:!0}))}defaultTo(e){return new t(Ve.cloneWith(this.#e,{defaultTo:Wk.create(Du(e))}))}check(e){return new t(Ve.cloneWith(this.#e,{check:ai.create(e.toOperationNode())}))}generatedAlwaysAs(e){return new t(Ve.cloneWith(this.#e,{generated:Ka.createWithExpression(e.toOperationNode())}))}generatedAlwaysAsIdentity(){return new t(Ve.cloneWith(this.#e,{generated:Ka.create({identity:!0,always:!0})}))}generatedByDefaultAsIdentity(){return new t(Ve.cloneWith(this.#e,{generated:Ka.create({identity:!0,byDefault:!0})}))}stored(){if(!this.#e.generated)throw new Error("stored() can only be called after generatedAlwaysAs");return new t(Ve.cloneWith(this.#e,{generated:Ka.cloneWith(this.#e.generated,{stored:!0})}))}modifyFront(e){return new t(Ve.cloneWithFrontModifier(this.#e,e.toOperationNode()))}nullsNotDistinct(){return new t(Ve.cloneWith(this.#e,{nullsNotDistinct:!0}))}ifNotExists(){return new t(Ve.cloneWith(this.#e,{ifNotExists:!0}))}modifyEnd(e){return new t(Ve.cloneWithEndModifier(this.#e,e.toOperationNode()))}$call(e){return e(this)}toOperationNode(){return this.#e}};var cm=u({is(t){return t.kind==="ModifyColumnNode"},create(t){return u({kind:"ModifyColumnNode",column:t})}});var Gr=u({is(t){return t.kind==="ForeignKeyConstraintNode"},create(t,e,r,o){return u({kind:"ForeignKeyConstraintNode",columns:t,references:ci.create(e,r),name:o?ae.create(o):void 0})},cloneWith(t,e){return u({...t,...e})}});var ui=class t{#e;constructor(e){this.#e=e}onDelete(e){return new t(Gr.cloneWith(this.#e,{onDelete:li(e)}))}onUpdate(e){return new t(Gr.cloneWith(this.#e,{onUpdate:li(e)}))}deferrable(){return new t(Gr.cloneWith(this.#e,{deferrable:!0}))}notDeferrable(){return new t(Gr.cloneWith(this.#e,{deferrable:!1}))}initiallyDeferred(){return new t(Gr.cloneWith(this.#e,{initiallyDeferred:!0}))}initiallyImmediate(){return new t(Gr.cloneWith(this.#e,{initiallyDeferred:!1}))}$call(e){return e(this)}toOperationNode(){return this.#e}};var di=u({is(t){return t.kind==="AddConstraintNode"},create(t){return u({kind:"AddConstraintNode",constraint:t})}});var wo=u({is(t){return t.kind==="UniqueConstraintNode"},create(t,e,r){return he(t.at(0))&&(Vs("`UniqueConstraintNode.create(columns: string[], ...)` is deprecated - pass `ColumnNode[]` instead."),t=t.map(be.create)),u({kind:"UniqueConstraintNode",columns:u(t),name:e?ae.create(e):void 0,nullsNotDistinct:r})},cloneWith(t,e){return u({...t,...e})}});var pi=u({is(t){return t.kind==="DropConstraintNode"},create(t){return u({kind:"DropConstraintNode",constraintName:ae.create(t)})},cloneWith(t,e){return u({...t,...e})}});var fi=u({is(t){return t.kind==="AlterColumnNode"},create(t,e,r){return u({kind:"AlterColumnNode",column:be.create(t),[e]:r})}});var Qa=class{#e;constructor(e){this.#e=e}setDataType(e){return new Zn(fi.create(this.#e,"dataType",Hr(e)))}setDefault(e){return new Zn(fi.create(this.#e,"setDefault",Du(e)))}dropDefault(){return new Zn(fi.create(this.#e,"dropDefault",!0))}setNotNull(){return new Zn(fi.create(this.#e,"setNotNull",!0))}dropNotNull(){return new Zn(fi.create(this.#e,"dropNotNull",!0))}$call(e){return e(this)}},Zn=class{#e;constructor(e){this.#e=e}toOperationNode(){return this.#e}};var Vo=class{#e;constructor(e){this.#e=u(e)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var Bu=class t{#e;constructor(e){this.#e=u(e)}onDelete(e){return new t({...this.#e,constraintBuilder:this.#e.constraintBuilder.onDelete(e)})}onUpdate(e){return new t({...this.#e,constraintBuilder:this.#e.constraintBuilder.onUpdate(e)})}deferrable(){return new t({...this.#e,constraintBuilder:this.#e.constraintBuilder.deferrable()})}notDeferrable(){return new t({...this.#e,constraintBuilder:this.#e.constraintBuilder.notDeferrable()})}initiallyDeferred(){return new t({...this.#e,constraintBuilder:this.#e.constraintBuilder.initiallyDeferred()})}initiallyImmediate(){return new t({...this.#e,constraintBuilder:this.#e.constraintBuilder.initiallyImmediate()})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(Te.cloneWithTableProps(this.#e.node,{addConstraint:di.create(this.#e.constraintBuilder.toOperationNode())}),this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var Ja=class t{#e;constructor(e){this.#e=u(e)}ifExists(){return new t({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{dropConstraint:pi.cloneWith(this.#e.node.dropConstraint,{ifExists:!0})})})}cascade(){return new t({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{dropConstraint:pi.cloneWith(this.#e.node.dropConstraint,{modifier:"cascade"})})})}restrict(){return new t({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{dropConstraint:pi.cloneWith(this.#e.node.dropConstraint,{modifier:"restrict"})})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var _o=u({is(t){return t.kind==="PrimaryKeyConstraintNode"},create(t,e){return u({kind:"PrimaryKeyConstraintNode",columns:u(t.map(be.create)),name:e?ae.create(e):void 0})},cloneWith(t,e){return u({...t,...e})}});var wr=u({is(t){return t.kind==="AddIndexNode"},create(t){return u({kind:"AddIndexNode",name:ae.create(t)})},cloneWith(t,e){return u({...t,...e})},cloneWithColumns(t,e){return u({...t,columns:[...t.columns||[],...e]})}});var Mu=class t{#e;constructor(e){this.#e=u(e)}unique(){return new t({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{addIndex:wr.cloneWith(this.#e.node.addIndex,{unique:!0})})})}column(e){return new t({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{addIndex:wr.cloneWithColumns(this.#e.node.addIndex,[he(e)?Ks(e):e.toOperationNode()])})})}columns(e){return new t({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{addIndex:wr.cloneWithColumns(this.#e.node.addIndex,e.map(r=>he(r)?Ks(r):r.toOperationNode()))})})}expression(e){return new t({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{addIndex:wr.cloneWithColumns(this.#e.node.addIndex,[e.toOperationNode()])})})}using(e){return new t({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{addIndex:wr.cloneWith(this.#e.node.addIndex,{using:Ie.createWithSql(e)})})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var hi=class t{#e;constructor(e){this.#e=e}nullsNotDistinct(){return new t(wo.cloneWith(this.#e,{nullsNotDistinct:!0}))}deferrable(){return new t(wo.cloneWith(this.#e,{deferrable:!0}))}notDeferrable(){return new t(wo.cloneWith(this.#e,{deferrable:!1}))}initiallyDeferred(){return new t(wo.cloneWith(this.#e,{initiallyDeferred:!0}))}initiallyImmediate(){return new t(wo.cloneWith(this.#e,{initiallyDeferred:!1}))}$call(e){return e(this)}toOperationNode(){return this.#e}};var mi=class t{#e;constructor(e){this.#e=e}deferrable(){return new t(_o.cloneWith(this.#e,{deferrable:!0}))}notDeferrable(){return new t(_o.cloneWith(this.#e,{deferrable:!1}))}initiallyDeferred(){return new t(_o.cloneWith(this.#e,{initiallyDeferred:!0}))}initiallyImmediate(){return new t(_o.cloneWith(this.#e,{initiallyDeferred:!1}))}$call(e){return e(this)}toOperationNode(){return this.#e}};var yi=class{#e;constructor(e){this.#e=e}$call(e){return e(this)}toOperationNode(){return this.#e}};var Lk=u({is(t){return t.kind==="RenameConstraintNode"},create(t,e){return u({kind:"RenameConstraintNode",oldName:ae.create(t),newName:ae.create(e)})}});var Ha=class t{#e;constructor(e){this.#e=u({...e})}ifExists(){return new t({...this.#e,node:_a.cloneWith(this.#e.node,{ifExists:!0})})}toOperationNode(){return this.#e.node}};var Pu=class{#e;constructor(e){this.#e=u(e)}renameTo(e){return new Vo({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{renameTo:Oe(e)})})}setSchema(e){return new Vo({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{setSchema:ae.create(e)})})}alterColumn(e,r){let o=r(new Qa(e));return new es({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,o.toOperationNode())})}dropColumn(e,r=St){let o=r(new Ha({node:_a.create(e)}));return new es({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,o.toOperationNode())})}renameColumn(e,r){return new es({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,am.create(e,r))})}addColumn(e,r,o=St){let n=o(new zo(Ve.create(e,Hr(r))));return new es({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,im.create(n.toOperationNode()))})}modifyColumn(e,r,o=St){let n=o(new zo(Ve.create(e,Hr(r))));return new es({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,cm.create(n.toOperationNode()))})}addUniqueConstraint(e,r,o=St){let n=o(new hi(wo.create(r.map(s=>he(s)?be.create(s):Et(s)),e)));return new Vo({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{addConstraint:di.create(n.toOperationNode())})})}addCheckConstraint(e,r,o=St){let n=o(new yi(ai.create(r.toOperationNode(),e)));return new Vo({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{addConstraint:di.create(n.toOperationNode())})})}addForeignKeyConstraint(e,r,o,n,s=St){let i=s(new ui(Gr.create(r.map(be.create),Oe(o),n.map(be.create),e)));return new Bu({...this.#e,constraintBuilder:i})}addPrimaryKeyConstraint(e,r,o=St){let n=o(new mi(_o.create(r,e)));return new Vo({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{addConstraint:di.create(n.toOperationNode())})})}dropConstraint(e){return new Ja({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{dropConstraint:pi.create(e)})})}renameConstraint(e,r){return new Ja({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{renameConstraint:Lk.create(e,r)})})}addIndex(e){return new Mu({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{addIndex:wr.create(e)})})}dropIndex(e){return new Vo({...this.#e,node:Te.cloneWithTableProps(this.#e.node,{dropIndex:pn.create(e)})})}$call(e){return e(this)}},es=class t{#e;constructor(e){this.#e=u(e)}alterColumn(e,r){let o=r(new Qa(e));return new t({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,o.toOperationNode())})}dropColumn(e,r=St){let o=r(new Ha({node:_a.create(e)}));return new t({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,o.toOperationNode())})}renameColumn(e,r){return new t({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,am.create(e,r))})}addColumn(e,r,o=St){let n=o(new zo(Ve.create(e,Hr(r))));return new t({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,im.create(n.toOperationNode()))})}modifyColumn(e,r,o=St){let n=o(new zo(Ve.create(e,Hr(r))));return new t({...this.#e,node:Te.cloneWithColumnAlteration(this.#e.node,cm.create(n.toOperationNode()))})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var gi=class extends Ys{transformPrimitiveValueList(e){return mn.create(e.values.map(Le.createImmediate))}transformValue(e){return Le.createImmediate(e.value)}};var Wu=class t{#e;constructor(e){this.#e=u(e)}ifNotExists(){return new t({...this.#e,node:Fr.cloneWith(this.#e.node,{ifNotExists:!0})})}unique(){return new t({...this.#e,node:Fr.cloneWith(this.#e.node,{unique:!0})})}nullsNotDistinct(){return new t({...this.#e,node:Fr.cloneWith(this.#e.node,{nullsNotDistinct:!0})})}on(e){return new t({...this.#e,node:Fr.cloneWith(this.#e.node,{table:Oe(e)})})}column(e){return new t({...this.#e,node:Fr.cloneWithColumns(this.#e.node,[he(e)?Ks(e):e.toOperationNode()])})}columns(e){return new t({...this.#e,node:Fr.cloneWithColumns(this.#e.node,e.map(r=>he(r)?Ks(r):r.toOperationNode()))})}expression(e){return new t({...this.#e,node:Fr.cloneWithColumns(this.#e.node,[e.toOperationNode()])})}using(e){return new t({...this.#e,node:Fr.cloneWith(this.#e.node,{using:Ie.createWithSql(e)})})}where(...e){let r=new gi;return new t({...this.#e,node:X.cloneWithWhere(this.#e.node,r.transformNode(qe(e),this.#e.queryId))})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var Lu=class t{#e;constructor(e){this.#e=u(e)}ifNotExists(){return new t({...this.#e,node:tu.cloneWith(this.#e.node,{ifNotExists:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};function qk(t){if(WN.includes(t))return t;throw new Error(`invalid OnCommitAction ${t}`)}var qu=class t{#e;constructor(e){this.#e=e}using(e){return new t(wr.cloneWith(this.#e,{using:Ie.createWithSql(e)}))}$call(e){return e(this)}toOperationNode(){return this.#e}};var $u=class t{#e;constructor(e){this.#e=u(e)}temporary(){return new t({...this.#e,node:vt.cloneWith(this.#e.node,{temporary:!0})})}onCommit(e){return new t({...this.#e,node:vt.cloneWith(this.#e.node,{onCommit:qk(e)})})}ifNotExists(){return new t({...this.#e,node:vt.cloneWith(this.#e.node,{ifNotExists:!0})})}addColumn(e,r,o=St){let n=o(new zo(Ve.create(e,Hr(r))));return new t({...this.#e,node:vt.cloneWithColumn(this.#e.node,n.toOperationNode())})}addPrimaryKeyConstraint(e,r,o=St){let n=o(new mi(_o.create(r,e)));return new t({...this.#e,node:vt.cloneWithConstraint(this.#e.node,n.toOperationNode())})}addUniqueConstraint(e,r,o=St){let n=o(new hi(wo.create(r.map(s=>he(s)?be.create(s):Et(s)),e)));return new t({...this.#e,node:vt.cloneWithConstraint(this.#e.node,n.toOperationNode())})}addIndex(e,r,o=St){let n=o(new qu(wr.cloneWithColumns(wr.create(e),r.map(s=>he(s)?be.create(s):Et(s)))));return new t({...this.#e,node:vt.cloneWithIndex(this.#e.node,n.toOperationNode())})}addCheckConstraint(e,r,o=St){let n=o(new yi(ai.create(r.toOperationNode(),e)));return new t({...this.#e,node:vt.cloneWithConstraint(this.#e.node,n.toOperationNode())})}addForeignKeyConstraint(e,r,o,n,s=St){let i=s(new ui(Gr.create(r.map(be.create),Oe(o),n.map(be.create),e)));return new t({...this.#e,node:vt.cloneWithConstraint(this.#e.node,i.toOperationNode())})}modifyFront(e){return new t({...this.#e,node:vt.cloneWithFrontModifier(this.#e.node,e.toOperationNode())})}modifyEnd(e){return new t({...this.#e,node:vt.cloneWithEndModifier(this.#e.node,e.toOperationNode())})}as(e){return new t({...this.#e,node:vt.cloneWith(this.#e.node,{selectQuery:Et(e)})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var Uu=class t{#e;constructor(e){this.#e=u(e)}on(e){return new t({...this.#e,node:pn.cloneWith(this.#e.node,{table:Oe(e)})})}ifExists(){return new t({...this.#e,node:pn.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new t({...this.#e,node:pn.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var ju=class t{#e;constructor(e){this.#e=u(e)}ifExists(){return new t({...this.#e,node:Pa.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new t({...this.#e,node:Pa.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var Fu=class t{#e;constructor(e){this.#e=u(e)}temporary(){return new t({...this.#e,node:Fs.cloneWith(this.#e.node,{temporary:!0})})}ifExists(){return new t({...this.#e,node:Fs.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new t({...this.#e,node:Fs.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var Yr=u({is(t){return t.kind==="CreateViewNode"},create(t){return u({kind:"CreateViewNode",name:Wt.create(t)})},cloneWith(t,e){return u({...t,...e})}});var zu=class{#e=new gi;transformQuery(e){return this.#e.transformNode(e.node,e.queryId)}transformResult(e){return Promise.resolve(e.result)}};var Vu=class t{#e;constructor(e){this.#e=u(e)}temporary(){return new t({...this.#e,node:Yr.cloneWith(this.#e.node,{temporary:!0})})}materialized(){return new t({...this.#e,node:Yr.cloneWith(this.#e.node,{materialized:!0})})}ifNotExists(){return new t({...this.#e,node:Yr.cloneWith(this.#e.node,{ifNotExists:!0})})}orReplace(){return new t({...this.#e,node:Yr.cloneWith(this.#e.node,{orReplace:!0})})}columns(e){return new t({...this.#e,node:Yr.cloneWith(this.#e.node,{columns:e.map(Rh)})})}as(e){let r=e.withPlugin(new zu).toOperationNode();return new t({...this.#e,node:Yr.cloneWith(this.#e.node,{as:r})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var bi=u({is(t){return t.kind==="DropViewNode"},create(t){return u({kind:"DropViewNode",name:Wt.create(t)})},cloneWith(t,e){return u({...t,...e})}});var _u=class t{#e;constructor(e){this.#e=u(e)}materialized(){return new t({...this.#e,node:bi.cloneWith(this.#e.node,{materialized:!0})})}ifExists(){return new t({...this.#e,node:bi.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new t({...this.#e,node:bi.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var Ku=u({is(t){return t.kind==="CreateTypeNode"},create(t){return u({kind:"CreateTypeNode",name:t})},cloneWithEnum(t,e){return u({...t,enum:mn.create(e.map(Le.createImmediate))})}});var Qu=class t{#e;constructor(e){this.#e=u(e)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}asEnum(e){return new t({...this.#e,node:Ku.cloneWithEnum(this.#e.node,e)})}$call(e){return e(this)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var Ga=u({is(t){return t.kind==="DropTypeNode"},create(t){return Array.isArray(t)||(t=[t]),u({kind:"DropTypeNode",name:t[0],additionalNames:t.slice(1)})},cloneWith(t,e){return u({...t,...e})}});var Ju=class t{#e;constructor(e){this.#e=u(e)}ifExists(){return new t({...this.#e,node:Ga.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new t({...this.#e,node:Ga.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};function Hu(t){if(t.includes(".")){let r=t.split(".").map(oA);if(r.length===2)return Wt.createWithSchema(r[0],r[1]);throw new Error(`invalid schemable identifier ${t}`)}else return Wt.create(t)}function $k(t){return Array.isArray(t)||(t=[t]),t.map(Hu)}function oA(t){return t.trim()}var xi=u({is(t){return t.kind==="RefreshMaterializedViewNode"},create(t){return u({kind:"RefreshMaterializedViewNode",name:Wt.create(t)})},cloneWith(t,e){return u({...t,...e})}});var Gu=class t{#e;constructor(e){this.#e=u(e)}concurrently(){return new t({...this.#e,node:xi.cloneWith(this.#e.node,{concurrently:!0,withNoData:!1})})}withData(){return new t({...this.#e,node:xi.cloneWith(this.#e.node,{withNoData:!1})})}withNoData(){return new t({...this.#e,node:xi.cloneWith(this.#e.node,{withNoData:!0,concurrently:!1})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};var No=u({is(t){return t.kind==="AlterTypeNode"},create(t){return u({kind:"AlterTypeNode",name:t})},cloneWith(t,e){return u({...t,...e})}});var Ya=u({is(t){return t.kind==="AddValueNode"},create(t){return u({kind:"AddValueNode",value:t})},cloneWith(t,e){return u({...t,...e})}});var Nn=class{#e;constructor(e){this.#e=u(e)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){return await this.#e.executor.executeQuery(this.compile(),e)}};var lm,Xa=class extends Nn{#e;constructor(e){super(e),this.#e=e}ifNotExists(){return new lm({...this.#e,node:No.cloneWith(this.#e.node,{addValue:Ya.cloneWith(this.#e.node.addValue,{ifNotExists:!0})})})}before(e){return this.#t(e,!0)}after(e){return this.#t(e,!1)}#t(e,r){return new lm({...this.#e,node:No.cloneWith(this.#e.node,{addValue:Ya.cloneWith(this.#e.node.addValue,{isBefore:r,neighborValue:Le.createImmediate(e)})})})}};lm=Xa;var Uk=u({is(t){return t.kind==="RenameValueNode"},create(t,e){return u({kind:"RenameValueNode",oldValue:t,newValue:e})}});var Yu=class{#e;constructor(e){this.#e=u(e)}addValue(e){return new Xa({...this.#e,node:No.cloneWith(this.#e.node,{addValue:Ya.create(Le.createImmediate(e))})})}renameTo(e){return new Nn({...this.#e,node:No.cloneWith(this.#e.node,{renameTo:ae.create(e)})})}renameValue(e,r){return new Nn({...this.#e,node:No.cloneWith(this.#e.node,{renameValue:Uk.create(Le.createImmediate(e),Le.createImmediate(r))})})}setSchema(e){return new Nn({...this.#e,node:No.cloneWith(this.#e.node,{setSchema:ae.create(e)})})}};var Xu=class t{#e;constructor(e){this.#e=e}createTable(e){return new $u({queryId:Se(),executor:this.#e,node:vt.create(Oe(e))})}dropTable(e){return new Fu({queryId:Se(),executor:this.#e,node:Fs.create(Oe(e))})}createIndex(e){return new Wu({queryId:Se(),executor:this.#e,node:Fr.create(e)})}dropIndex(e){return new Uu({queryId:Se(),executor:this.#e,node:pn.create(e)})}createSchema(e){return new Lu({queryId:Se(),executor:this.#e,node:tu.create(e)})}dropSchema(e){return new ju({queryId:Se(),executor:this.#e,node:Pa.create(e)})}alterTable(e){return new Pu({queryId:Se(),executor:this.#e,node:Te.create(Oe(e))})}createView(e){return new Vu({queryId:Se(),executor:this.#e,node:Yr.create(e)})}refreshMaterializedView(e){return new Gu({queryId:Se(),executor:this.#e,node:xi.create(e)})}dropView(e){return new _u({queryId:Se(),executor:this.#e,node:bi.create(e)})}createType(e){return new Qu({queryId:Se(),executor:this.#e,node:Ku.create(Hu(e))})}alterType(e){return new Yu({executor:this.#e,node:No.create(Hu(e)),queryId:Se()})}dropType(e){return new Ju({queryId:Se(),executor:this.#e,node:Ga.create($k(e))})}withPlugin(e){return new t(this.#e.withPlugin(e))}withoutPlugins(){return new t(this.#e.withoutPlugins())}withSchema(e){return new t(this.#e.withPluginAtFront(new yo(e)))}};var Zu=class{ref(e){return new nu(e)}table(e){return new Ru(e)}};var ed=class{#e;constructor(e){this.#e=e}async provideConnection(e,r){let o=await this.#e.acquireConnection(r);try{return await e(o)}finally{await this.#e.releaseConnection(o,r)}}};var td=class t extends ti{#e;#t;#r;constructor(e,r,o,n=[]){super(n),this.#e=e,this.#t=r,this.#r=o}get adapter(){return this.#t}compileQuery(e,r){return this.#e.compileQuery(e,r)}provideConnection(e,r){return this.#r.provideConnection(e,r)}withPlugins(e){return new t(this.#e,this.#t,this.#r,[...this.plugins,...e])}withPlugin(e){return new t(this.#e,this.#t,this.#r,[...this.plugins,e])}withPluginAtFront(e){return new t(this.#e,this.#t,this.#r,[e,...this.plugins])}withConnectionProvider(e){return new t(this.#e,this.#t,e,[...this.plugins])}withoutPlugins(){return new t(this.#e,this.#t,this.#r,[])}};function rd(){return typeof performance<"u"&&Qe(performance.now)?performance.now():Date.now()}var od=class{#e;#t;async obtainLock(){for(;this.#e;)await this.#e;this.#e=new Promise(e=>{this.#t=e})}releaseLock(){let e=this.#t;this.#e=void 0,this.#t=void 0,e?.()}};var nd=class{#e;#t;#r;#n;#s;#a=new WeakSet;#o;constructor(e,r,o){this.#e=e,this.#n=!1,this.#t=o,r.supportsMultipleConnections===!1&&(this.#o=new od)}async init(e){if(this.#s)throw new Error("driver has already been destroyed");this.#r??=this.#e.init(e).then(()=>{this.#n=!0}).catch(r=>{throw this.#r=void 0,r}),await ei(this.#r,e?.signal,"init")}async acquireConnection(e){if(this.#s)throw new Error("driver has already been destroyed");if(this.#n||await this.init(e),this.#o){let n=this.#o.obtainLock();await ei(n,e?.signal,"acquireConnection:mutex",()=>n.then(()=>this.#o?.releaseLock()))}let r=this.#e.acquireConnection(e),o=await ei(r,e?.signal,"acquireConnection:acquire",()=>r?.then(n=>this.releaseConnection(n).catch(bo("driver.releaseConnection"))).catch(bo("driver.acquireConnection")));return this.#a.has(o)||(this.#i()&&this.#c(o),this.#a.add(o)),o}async releaseConnection(e,r){await this.#e.releaseConnection(e,r),this.#o?.releaseLock()}async beginTransaction(e,r){return await this.#e.beginTransaction(e,r)}async commitTransaction(e){return await this.#e.commitTransaction(e)}async rollbackTransaction(e){return await this.#e.rollbackTransaction(e)}async savepoint(e,r,o){if(this.#e.savepoint)return await this.#e.savepoint(e,r,o);throw new Error("The `savepoint` method is not supported by this driver")}async rollbackToSavepoint(e,r,o){if(this.#e.rollbackToSavepoint)return await this.#e.rollbackToSavepoint(e,r,o);throw new Error("The `rollbackToSavepoint` method is not supported by this driver")}async releaseSavepoint(e,r,o){if(this.#e.releaseSavepoint)return await this.#e.releaseSavepoint(e,r,o);throw new Error("The `releaseSavepoint` method is not supported by this driver")}async destroy(e){this.#r&&(await ei(this.#r,e?.signal,"destroy:initPromise"),this.#s??=this.#e.destroy(e).catch(r=>{throw this.#s=void 0,r}),await ei(this.#s,e?.signal,"destroy"))}#i(){return this.#t.isLevelEnabled("query")||this.#t.isLevelEnabled("error")}#c(e){let r=e.executeQuery,o=e.streamQuery,n=this;e.executeQuery=async(s,i)=>{let a,c=rd();try{return await r.call(e,s,i)}catch(l){throw a=l,await n.#l(l,s,c),l}finally{a||await n.#u(s,c)}},e.streamQuery=async function*(s,i,a){let c,l=rd();try{for await(let h of o.call(e,s,i,a))yield h}catch(h){throw c=h,await n.#l(h,s,l),h}finally{c||await n.#u(s,l,!0)}}}async#l(e,r,o){await this.#t.error(()=>({level:"error",error:e,query:r,queryDurationMillis:this.#d(o)}))}async#u(e,r,o=!1){await this.#t.query(()=>({level:"query",isStream:o,query:e,queryDurationMillis:this.#d(r)}))}#d(e){return rd()-e}};var nA=()=>{},wi=class{#e;#t;constructor(e){this.#e=e}async provideConnection(e){for(;this.#t;)await this.#t.catch(nA);return this.#t=this.#r(e).finally(()=>{this.#t=void 0}),this.#t}async#r(e){return await e(this.#e)}};var sA=["read only","read write"],iA=["read uncommitted","read committed","repeatable read","serializable","snapshot"];function um(t){if(t.accessMode&&!sA.includes(t.accessMode))throw new Error(`invalid transaction access mode ${t.accessMode}`);if(t.isolationLevel&&!iA.includes(t.isolationLevel))throw new Error(`invalid transaction isolation level ${t.isolationLevel}`)}var aA=["query","error"],_V=u(aA),sd=class{#e;#t;constructor(e){Qe(e)?(this.#t=e,this.#e=u({query:!0,error:!0})):(this.#t=cA,this.#e=u({query:e.includes("query"),error:e.includes("error")}))}isLevelEnabled(e){return this.#e[e]}async query(e){this.#e.query&&await this.#t(e())}async error(e){this.#e.error&&await this.#t(e())}};function cA(t){if(t.level==="query"){let e=`kysely:query:${t.isStream?"stream:":""}`;console.log(`${e} ${t.query.sql}`),console.log(`${e} duration: ${t.queryDurationMillis.toFixed(1)}ms`)}else t.level==="error"&&(t.error instanceof Error?console.error(`kysely:error: ${t.error.stack??t.error.message}`):console.error(`kysely:error: ${JSON.stringify({error:t.error,query:t.query.sql,queryDurationMillis:t.queryDurationMillis})}`))}function jk(t){return wt(t)&&Qe(t.compile)}Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");var Ni=class t extends ri{#e;constructor(e){let r,o;if(lA(e))r={executor:e.executor},o={...e};else{let n=e.dialect,s=n.createDriver(),i=n.createQueryCompiler(),a=n.createAdapter(),c=new sd(e.log??[]),l=new nd(s,a,c),h=new ed(l),p=new td(i,a,h,e.plugins??[]);r={executor:p},o={config:e,executor:p,dialect:n,driver:l}}super(r),this.#e=u(o)}get schema(){return new Xu(this.#e.executor)}get dynamic(){return new Zu}get introspection(){return this.#e.dialect.createIntrospector(this.withoutPlugins())}case(e){return new ni({node:Dt.create(hr(e)?void 0:Et(e))})}get fn(){return Ou()}transaction(){return new pm({...this.#e})}startTransaction(){return new fm({...this.#e})}connection(){return new dm({...this.#e})}withPlugin(e){return new t({...this.#e,executor:this.#e.executor.withPlugin(e)})}withoutPlugins(){return new t({...this.#e,executor:this.#e.executor.withoutPlugins()})}withSchema(e){return new t({...this.#e,executor:this.#e.executor.withPluginAtFront(new yo(e))})}$extendTables(){return new t({...this.#e})}$omitTables(){return new t({...this.#e})}$pickTables(){return new t({...this.#e})}withTables(){return this.$extendTables()}async destroy(){await this.#e.driver.destroy()}get isTransaction(){return!1}getExecutor(){return this.#e.executor}async executeQuery(e,r){let o=jk(e)?e.compile():e;return await this.#e.executor.executeQuery(o,r)}async[Symbol.asyncDispose](){await this.destroy()}},ad=class t extends Ni{#e;constructor(e){super(e),this.#e=e}get isTransaction(){return!0}transaction(){throw new Error("calling the transaction method for a Transaction is not supported")}startTransaction(){throw new Error("calling the controlled transaction method for a Transaction is not supported")}connection(){throw new Error("calling the connection method for a Transaction is not supported")}destroy(){throw new Error("calling the destroy method for a Transaction is not supported")}withPlugin(e){return new t({...this.#e,executor:this.#e.executor.withPlugin(e)})}withoutPlugins(){return new t({...this.#e,executor:this.#e.executor.withoutPlugins()})}withSchema(e){return new t({...this.#e,executor:this.#e.executor.withPluginAtFront(new yo(e))})}withTables(){return new t({...this.#e})}$extendTables(){return new t({...this.#e})}$omitTables(){return new t({...this.#e})}$pickTables(){return new t({...this.#e})}};function lA(t){return wt(t)&&wt(t.config)&&wt(t.driver)&&wt(t.executor)&&wt(t.dialect)}var dm=class{#e;constructor(e){this.#e=u(e)}async execute(e,r){return this.#e.executor.provideConnection(async o=>{let n=this.#e.executor.withConnectionProvider(new wi(o)),s=new Ni({...this.#e,executor:n});return await e(s)},u({signal:r?.signal}))}},pm=class t{#e;constructor(e){this.#e=u(e)}setAccessMode(e){return new t({...this.#e,accessMode:e})}setIsolationLevel(e){return new t({...this.#e,isolationLevel:e})}async execute(e){let{isolationLevel:r,accessMode:o,...n}=this.#e,s={isolationLevel:r,accessMode:o};return um(s),this.#e.executor.provideConnection(async i=>{let a={isCommitted:!1,isRolledBack:!1},c=new cd(this.#e.executor.withConnectionProvider(new wi(i)),a),l=new ad({...n,executor:c}),h=!1;try{await this.#e.driver.beginTransaction(i,s),h=!0;let p=await e(l);return await this.#e.driver.commitTransaction(i),a.isCommitted=!0,p}catch(p){throw h&&(await this.#e.driver.rollbackTransaction(i),a.isRolledBack=!0),p}})}},fm=class t{#e;constructor(e){this.#e=u(e)}setAccessMode(e){return new t({...this.#e,accessMode:e})}setIsolationLevel(e){return new t({...this.#e,isolationLevel:e})}async execute(){let{isolationLevel:e,accessMode:r,...o}=this.#e,n={isolationLevel:e,accessMode:r};um(n);let s=await Zs(this.#e.executor);try{await this.#e.driver.beginTransaction(s.connection,n)}catch(i){throw s.release(),i}return new hm({...o,connection:s,state:{isCommitted:!1,isRolledBack:!1},executor:this.#e.executor.withConnectionProvider(new wi(s.connection))})}},hm=class t extends ad{#e;#t;constructor(e){e={...e,executor:new cd(e.executor,e.state)};let{connection:r,state:o,...n}=e;super(n),this.#e=u(e);let s=Se();this.#t=i=>e.executor.compileQuery(i,s)}get isCommitted(){return this.#e.state.isCommitted}get isRolledBack(){return this.#e.state.isRolledBack}commit(){return new ts(async()=>{await this.#e.executor.provideConnection(async e=>{await this.#e.driver.commitTransaction(e),this.#e.state.isCommitted=!0,this.#e.connection.release()})})}rollback(){return new ts(async()=>{await this.#e.executor.provideConnection(async e=>{try{await this.#e.driver.rollbackTransaction(e)}finally{this.#e.state.isRolledBack=!0,this.#e.connection.release()}})})}savepoint(e){return new ts(async()=>(await this.#e.executor.provideConnection(async r=>{await this.#e.driver.savepoint?.(r,e,this.#t)}),new t({...this.#e})))}rollbackToSavepoint(e){return new ts(async()=>(await this.#e.executor.provideConnection(async r=>{await this.#e.driver.rollbackToSavepoint?.(r,e,this.#t)}),new t({...this.#e})))}releaseSavepoint(e){return new ts(async()=>(await this.#e.executor.provideConnection(async r=>{await this.#e.driver.releaseSavepoint?.(r,e,this.#t)}),new t({...this.#e})))}withPlugin(e){return new t({...this.#e,executor:this.#e.executor.withPlugin(e)})}withoutPlugins(){return new t({...this.#e,executor:this.#e.executor.withoutPlugins()})}withSchema(e){return new t({...this.#e,executor:this.#e.executor.withPluginAtFront(new yo(e))})}withTables(){return new t({...this.#e})}$extendTables(){return new t({...this.#e})}$omitTables(){return new t({...this.#e})}$pickTables(){return new t({...this.#e})}},ts=class{#e;constructor(e){this.#e=e}async execute(){return await this.#e()}};function id(t){if(t.isCommitted)throw new Error("Transaction is already committed");if(t.isRolledBack)throw new Error("Transaction is already rolled back")}var cd=class t{#e;#t;constructor(e,r){this.#e=e instanceof t?e.#e:e,this.#t=r}get adapter(){return this.#e.adapter}get plugins(){return this.#e.plugins}transformQuery(e,r){return this.#e.transformQuery(e,r)}compileQuery(e,r){return this.#e.compileQuery(e,r)}provideConnection(e,r){return id(this.#t),this.#e.provideConnection(async o=>(id(this.#t),await e(o)),r)}executeQuery(e,r){return id(this.#t),this.#e.withConnectionProvider(this).executeQuery(e,r)}stream(e,r,o){return id(this.#t),this.#e.withConnectionProvider(this).stream(e,r,o)}withConnectionProvider(e){return new t(this.#e.withConnectionProvider(e),this.#t)}withPlugin(e){return new t(this.#e.withPlugin(e),this.#t)}withPlugins(e){return new t(this.#e.withPlugins(e),this.#t)}withPluginAtFront(e){return new t(this.#e.withPluginAtFront(e),this.#t)}withoutPlugins(){return new t(this.#e.withoutPlugins(),this.#t)}};var mm=class t{#e;constructor(e){this.#e=u(e)}get expressionType(){}get isRawBuilder(){return!0}as(e){return new ym(this,e)}$castTo(){return new t({...this.#e})}$notNull(){return new t(this.#e)}withPlugin(e){return new t({...this.#e,plugins:this.#e.plugins!==void 0?u([...this.#e.plugins,e]):u([e])})}toOperationNode(){return this.#r(this.#t())}compile(e){return this.#n(this.#t(e))}async execute(e,r){let o=this.#t(e);return o.executeQuery(this.#n(o),r)}#t(e){let r=e!==void 0?e.getExecutor():xn;return this.#e.plugins!==void 0?r.withPlugins(this.#e.plugins):r}#r(e){return e.transformQuery(this.#e.rawNode,this.#e.queryId)}#n(e){return e.compileQuery(this.#r(e),this.#e.queryId)}};function Ko(t){return new mm(t)}var ym=class{#e;#t;constructor(e,r){this.#e=e,this.#t=r}get expression(){return this.#e}get alias(){return this.#t}get rawBuilder(){return this.#e}toOperationNode(){return yt.create(this.#e.toOperationNode(),Me(this.#t)?this.#t.toOperationNode():ae.create(this.#t))}};var qt=Object.assign((t,...e)=>Ko({queryId:Se(),rawNode:Ie.create(t,e?.map(Fk)??[])}),{ref(t){return Ko({queryId:Se(),rawNode:Ie.createWithChild(tr(t))})},val(t){return Ko({queryId:Se(),rawNode:Ie.createWithChild(Pe(t))})},table(t){return Ko({queryId:Se(),rawNode:Ie.createWithChild(Oe(t))})},id(...t){let e=new Array(t.length+1).fill(".");return e[0]="",e[e.length-1]="",Ko({queryId:Se(),rawNode:Ie.create(e,t.map(ae.create))})},lit(t){return Ko({queryId:Se(),rawNode:Ie.createWithChild(Le.createImmediate(t))})},raw(t){return Ko({queryId:Se(),rawNode:Ie.createWithSql(t)})},join(t,e=qt`, `){let r=new Array(Math.max(2*t.length-1,0)),o=e.toOperationNode();for(let n=0;n<t.length;++n)r[2*n]=Fk(t[n]),n!==t.length-1&&(r[2*n+1]=o);return Ko({queryId:Se(),rawNode:Ie.createWithChildren(r)})}});function Fk(t){return Me(t)?t.toOperationNode():Pe(t)}var ld=class{nodeStack=[];get parentNode(){return this.nodeStack[this.nodeStack.length-2]}#e=u({AliasNode:this.visitAlias.bind(this),ColumnNode:this.visitColumn.bind(this),IdentifierNode:this.visitIdentifier.bind(this),SchemableIdentifierNode:this.visitSchemableIdentifier.bind(this),RawNode:this.visitRaw.bind(this),ReferenceNode:this.visitReference.bind(this),SelectQueryNode:this.visitSelectQuery.bind(this),SelectionNode:this.visitSelection.bind(this),TableNode:this.visitTable.bind(this),FromNode:this.visitFrom.bind(this),SelectAllNode:this.visitSelectAll.bind(this),AndNode:this.visitAnd.bind(this),OrNode:this.visitOr.bind(this),ValueNode:this.visitValue.bind(this),ValueListNode:this.visitValueList.bind(this),PrimitiveValueListNode:this.visitPrimitiveValueList.bind(this),ParensNode:this.visitParens.bind(this),JoinNode:this.visitJoin.bind(this),OperatorNode:this.visitOperator.bind(this),WhereNode:this.visitWhere.bind(this),InsertQueryNode:this.visitInsertQuery.bind(this),DeleteQueryNode:this.visitDeleteQuery.bind(this),ReturningNode:this.visitReturning.bind(this),CreateTableNode:this.visitCreateTable.bind(this),AddColumnNode:this.visitAddColumn.bind(this),ColumnDefinitionNode:this.visitColumnDefinition.bind(this),DropTableNode:this.visitDropTable.bind(this),DataTypeNode:this.visitDataType.bind(this),OrderByNode:this.visitOrderBy.bind(this),OrderByItemNode:this.visitOrderByItem.bind(this),GroupByNode:this.visitGroupBy.bind(this),GroupByItemNode:this.visitGroupByItem.bind(this),UpdateQueryNode:this.visitUpdateQuery.bind(this),ColumnUpdateNode:this.visitColumnUpdate.bind(this),LimitNode:this.visitLimit.bind(this),OffsetNode:this.visitOffset.bind(this),OnConflictNode:this.visitOnConflict.bind(this),OnDuplicateKeyNode:this.visitOnDuplicateKey.bind(this),CreateIndexNode:this.visitCreateIndex.bind(this),DropIndexNode:this.visitDropIndex.bind(this),ListNode:this.visitList.bind(this),PrimaryKeyConstraintNode:this.visitPrimaryKeyConstraint.bind(this),UniqueConstraintNode:this.visitUniqueConstraint.bind(this),ReferencesNode:this.visitReferences.bind(this),CheckConstraintNode:this.visitCheckConstraint.bind(this),WithNode:this.visitWith.bind(this),CommonTableExpressionNode:this.visitCommonTableExpression.bind(this),CommonTableExpressionNameNode:this.visitCommonTableExpressionName.bind(this),HavingNode:this.visitHaving.bind(this),CreateSchemaNode:this.visitCreateSchema.bind(this),DropSchemaNode:this.visitDropSchema.bind(this),AlterTableNode:this.visitAlterTable.bind(this),DropColumnNode:this.visitDropColumn.bind(this),RenameColumnNode:this.visitRenameColumn.bind(this),AlterColumnNode:this.visitAlterColumn.bind(this),ModifyColumnNode:this.visitModifyColumn.bind(this),AddConstraintNode:this.visitAddConstraint.bind(this),DropConstraintNode:this.visitDropConstraint.bind(this),RenameConstraintNode:this.visitRenameConstraint.bind(this),ForeignKeyConstraintNode:this.visitForeignKeyConstraint.bind(this),CreateViewNode:this.visitCreateView.bind(this),RefreshMaterializedViewNode:this.visitRefreshMaterializedView.bind(this),DropViewNode:this.visitDropView.bind(this),GeneratedNode:this.visitGenerated.bind(this),DefaultValueNode:this.visitDefaultValue.bind(this),OnNode:this.visitOn.bind(this),ValuesNode:this.visitValues.bind(this),SelectModifierNode:this.visitSelectModifier.bind(this),CreateTypeNode:this.visitCreateType.bind(this),DropTypeNode:this.visitDropType.bind(this),ExplainNode:this.visitExplain.bind(this),DefaultInsertValueNode:this.visitDefaultInsertValue.bind(this),AggregateFunctionNode:this.visitAggregateFunction.bind(this),OverNode:this.visitOver.bind(this),PartitionByNode:this.visitPartitionBy.bind(this),PartitionByItemNode:this.visitPartitionByItem.bind(this),SetOperationNode:this.visitSetOperation.bind(this),BinaryOperationNode:this.visitBinaryOperation.bind(this),UnaryOperationNode:this.visitUnaryOperation.bind(this),UsingNode:this.visitUsing.bind(this),FunctionNode:this.visitFunction.bind(this),CaseNode:this.visitCase.bind(this),WhenNode:this.visitWhen.bind(this),JSONReferenceNode:this.visitJSONReference.bind(this),JSONPathNode:this.visitJSONPath.bind(this),JSONPathLegNode:this.visitJSONPathLeg.bind(this),JSONOperatorChainNode:this.visitJSONOperatorChain.bind(this),TupleNode:this.visitTuple.bind(this),MergeQueryNode:this.visitMergeQuery.bind(this),MatchedNode:this.visitMatched.bind(this),AddIndexNode:this.visitAddIndex.bind(this),CastNode:this.visitCast.bind(this),FetchNode:this.visitFetch.bind(this),TopNode:this.visitTop.bind(this),OutputNode:this.visitOutput.bind(this),OrActionNode:this.visitOrAction.bind(this),CollateNode:this.visitCollate.bind(this),AlterTypeNode:this.visitAlterType.bind(this),AddValueNode:this.visitAddValue.bind(this),RenameValueNode:this.visitRenameValue.bind(this)});visitNode=e=>{this.nodeStack.push(e),this.#e[e.kind](e),this.nodeStack.pop()}};var uA=/'/g,dA=/['"]/g,ud=class extends ld{#e="";#t=[];get numParameters(){return this.#t.length}compileQuery(e,r){return this.#e="",this.#t=[],this.nodeStack.splice(0,this.nodeStack.length),this.visitNode(e),u({query:e,queryId:r,sql:this.getSql(),parameters:[...this.#t]})}getSql(){return this.#e}visitSelectQuery(e){let r=this.parentNode!==void 0&&!gr.is(this.parentNode)&&!et.is(this.parentNode)&&!vt.is(this.parentNode)&&!Yr.is(this.parentNode)&&!Eu.is(this.parentNode);this.parentNode===void 0&&e.explain&&(this.visitNode(e.explain),this.append(" ")),r&&this.append("("),e.with&&(this.visitNode(e.with),this.append(" ")),this.append("select"),e.distinctOn&&(this.append(" "),this.compileDistinctOn(e.distinctOn)),e.frontModifiers?.length&&(this.append(" "),this.compileList(e.frontModifiers," ")),e.top&&(this.append(" "),this.visitNode(e.top)),e.selections&&(this.append(" "),this.compileList(e.selections)),e.from&&(this.append(" "),this.visitNode(e.from)),e.joins&&(this.append(" "),this.compileList(e.joins," ")),e.where&&(this.append(" "),this.visitNode(e.where)),e.groupBy&&(this.append(" "),this.visitNode(e.groupBy)),e.having&&(this.append(" "),this.visitNode(e.having)),e.setOperations&&(this.append(" "),this.compileList(e.setOperations," ")),e.orderBy&&(this.append(" "),this.visitNode(e.orderBy)),e.limit&&(this.append(" "),this.visitNode(e.limit)),e.offset&&(this.append(" "),this.visitNode(e.offset)),e.fetch&&(this.append(" "),this.visitNode(e.fetch)),e.endModifiers?.length&&(this.append(" "),this.compileList(this.sortSelectModifiers(e.endModifiers)," ")),r&&this.append(")")}visitFrom(e){this.append("from "),this.compileList(e.froms)}visitSelection(e){this.visitNode(e.selection)}visitColumn(e){this.visitNode(e.column)}compileDistinctOn(e){this.append("distinct on ("),this.compileList(e),this.append(")")}compileList(e,r=", "){let o=e.length-1;for(let n=0;n<=o;n++)this.visitNode(e[n]),n<o&&this.append(r)}visitWhere(e){this.append("where "),this.visitNode(e.where)}visitHaving(e){this.append("having "),this.visitNode(e.having)}visitInsertQuery(e){let r=this.parentNode!==void 0&&!gr.is(this.parentNode)&&!Ie.is(this.parentNode)&&!rr.is(this.parentNode);this.parentNode===void 0&&e.explain&&(this.visitNode(e.explain),this.append(" ")),r&&this.append("("),e.with&&(this.visitNode(e.with),this.append(" ")),this.append(e.replace?"replace":"insert"),e.orAction&&(this.append(" "),this.visitNode(e.orAction)),e.top&&(this.append(" "),this.visitNode(e.top)),e.into&&(this.append(" into "),this.visitNode(e.into)),e.columns&&(this.append(" ("),this.compileList(e.columns),this.append(")")),e.output&&(this.append(" "),this.visitNode(e.output)),e.values&&(this.append(" "),this.visitNode(e.values)),e.defaultValues&&(this.append(" "),this.append("default values")),e.onConflict&&(this.append(" "),this.visitNode(e.onConflict)),e.onDuplicateKey&&(this.append(" "),this.visitNode(e.onDuplicateKey)),e.returning&&(this.append(" "),this.visitNode(e.returning)),r&&this.append(")"),e.endModifiers?.length&&(this.append(" "),this.compileList(e.endModifiers," "))}visitValues(e){this.append("values "),this.compileList(e.values)}visitDeleteQuery(e){let r=this.parentNode!==void 0&&!gr.is(this.parentNode)&&!Ie.is(this.parentNode);this.parentNode===void 0&&e.explain&&(this.visitNode(e.explain),this.append(" ")),r&&this.append("("),e.with&&(this.visitNode(e.with),this.append(" ")),this.append("delete "),e.top&&(this.visitNode(e.top),this.append(" ")),this.visitNode(e.from),e.output&&(this.append(" "),this.visitNode(e.output)),e.using&&(this.append(" "),this.visitNode(e.using)),e.joins&&(this.append(" "),this.compileList(e.joins," ")),e.where&&(this.append(" "),this.visitNode(e.where)),e.returning&&(this.append(" "),this.visitNode(e.returning)),e.orderBy&&(this.append(" "),this.visitNode(e.orderBy)),e.limit&&(this.append(" "),this.visitNode(e.limit)),r&&this.append(")"),e.endModifiers?.length&&(this.append(" "),this.compileList(e.endModifiers," "))}visitReturning(e){this.append("returning "),this.compileList(e.selections)}visitAlias(e){this.visitNode(e.node),this.append(" as "),this.visitNode(e.alias)}visitReference(e){e.table&&(this.visitNode(e.table),this.append(".")),this.visitNode(e.column)}visitSelectAll(e){this.append("*")}visitIdentifier(e){this.append(this.getLeftIdentifierWrapper()),this.compileUnwrappedIdentifier(e),this.append(this.getRightIdentifierWrapper())}compileUnwrappedIdentifier(e){if(!he(e.name))throw new Error("a non-string identifier was passed to compileUnwrappedIdentifier.");this.append(this.sanitizeIdentifier(e.name))}visitAnd(e){this.visitNode(e.left),this.append(" and "),this.visitNode(e.right)}visitOr(e){this.visitNode(e.left),this.append(" or "),this.visitNode(e.right)}visitValue(e){e.immediate?this.appendImmediateValue(e.value):this.appendValue(e.value)}visitValueList(e){this.append("("),this.compileList(e.values),this.append(")")}visitTuple(e){this.append("("),this.compileList(e.values),this.append(")")}visitPrimitiveValueList(e){this.append("(");let{values:r}=e;for(let o=0;o<r.length;++o)this.appendValue(r[o]),o!==r.length-1&&this.append(", ");this.append(")")}visitParens(e){this.append("("),this.visitNode(e.node),this.append(")")}visitJoin(e){this.append(fA[e.joinType]),this.append(" "),this.visitNode(e.table),e.on&&(this.append(" "),this.visitNode(e.on))}visitOn(e){this.append("on "),this.visitNode(e.on)}visitRaw(e){let{sqlFragments:r,parameters:o}=e;for(let n=0;n<r.length;++n)this.append(r[n]),o.length>n&&this.visitNode(o[n])}visitOperator(e){this.append(e.operator)}visitTable(e){this.visitNode(e.table)}visitSchemableIdentifier(e){e.schema&&(this.visitNode(e.schema),this.append(".")),this.visitNode(e.identifier)}visitCreateTable(e){this.append("create "),e.frontModifiers?.length&&(this.compileList(e.frontModifiers," "),this.append(" ")),e.temporary&&this.append("temporary "),this.append("table "),e.ifNotExists&&this.append("if not exists "),this.visitNode(e.table),e.selectQuery||(this.append(" ("),this.compileList([...e.columns,...e.constraints??[],...e.indexes??[]]),this.append(")")),e.onCommit&&(this.append(" on commit "),this.append(e.onCommit)),e.endModifiers?.length&&(this.append(" "),this.compileList(e.endModifiers," ")),e.selectQuery&&(this.append(" as "),this.visitNode(e.selectQuery))}visitColumnDefinition(e){e.ifNotExists&&this.append("if not exists "),this.visitNode(e.column),this.append(" "),this.visitNode(e.dataType),e.unsigned&&this.append(" unsigned"),e.frontModifiers&&e.frontModifiers.length>0&&(this.append(" "),this.compileList(e.frontModifiers," ")),e.generated&&(this.append(" "),this.visitNode(e.generated)),e.identity&&this.append(" identity"),e.defaultTo&&(this.append(" "),this.visitNode(e.defaultTo)),e.notNull&&this.append(" not null"),e.unique&&this.append(" unique"),e.nullsNotDistinct&&this.append(" nulls not distinct"),e.primaryKey&&this.append(" primary key"),e.autoIncrement&&(this.append(" "),this.append(this.getAutoIncrement())),e.references&&(this.append(" "),this.visitNode(e.references)),e.check&&(this.append(" "),this.visitNode(e.check)),e.endModifiers&&e.endModifiers.length>0&&(this.append(" "),this.compileList(e.endModifiers," "))}getAutoIncrement(){return"auto_increment"}visitReferences(e){this.append("references "),this.visitNode(e.table),this.append(" ("),this.compileList(e.columns),this.append(")"),e.onDelete&&(this.append(" on delete "),this.append(e.onDelete)),e.onUpdate&&(this.append(" on update "),this.append(e.onUpdate))}visitDropTable(e){this.append("drop "),e.temporary&&this.append("temporary "),this.append("table "),e.ifExists&&this.append("if exists "),this.visitNode(e.table),e.cascade&&this.append(" cascade")}visitDataType(e){this.append(e.dataType)}visitOrderBy(e){this.append("order by "),this.compileList(e.items)}visitOrderByItem(e){this.visitNode(e.orderBy),e.collation&&(this.append(" "),this.visitNode(e.collation)),e.direction&&(this.append(" "),this.visitNode(e.direction)),e.nulls&&(this.append(" nulls "),this.append(e.nulls))}visitGroupBy(e){this.append("group by "),this.compileList(e.items)}visitGroupByItem(e){this.visitNode(e.groupBy)}visitUpdateQuery(e){let r=this.parentNode!==void 0&&!gr.is(this.parentNode)&&!Ie.is(this.parentNode)&&!rr.is(this.parentNode);if(this.parentNode===void 0&&e.explain&&(this.visitNode(e.explain),this.append(" ")),r&&this.append("("),e.with&&(this.visitNode(e.with),this.append(" ")),this.append("update "),e.top&&(this.visitNode(e.top),this.append(" ")),e.table&&(this.visitNode(e.table),this.append(" ")),this.append("set "),e.updates&&this.compileList(e.updates),e.output&&(this.append(" "),this.visitNode(e.output)),e.from&&(this.append(" "),this.visitNode(e.from)),e.joins){if(!e.from)throw new Error("Joins in an update query are only supported as a part of a PostgreSQL 'update set from join' query. If you want to create a MySQL 'update join set' query, see https://kysely.dev/docs/examples/update/my-sql-joins");this.append(" "),this.compileList(e.joins," ")}e.where&&(this.append(" "),this.visitNode(e.where)),e.returning&&(this.append(" "),this.visitNode(e.returning)),e.orderBy&&(this.append(" "),this.visitNode(e.orderBy)),e.limit&&(this.append(" "),this.visitNode(e.limit)),r&&this.append(")"),e.endModifiers?.length&&(this.append(" "),this.compileList(e.endModifiers," "))}visitColumnUpdate(e){this.visitNode(e.column),this.append(" = "),this.visitNode(e.value)}visitLimit(e){this.append("limit "),this.visitNode(e.limit)}visitOffset(e){this.append("offset "),this.visitNode(e.offset)}visitOnConflict(e){this.append("on conflict"),e.columns?(this.append(" ("),this.compileList(e.columns),this.append(")")):e.constraint?(this.append(" on constraint "),this.visitNode(e.constraint)):e.indexExpression&&(this.append(" ("),this.visitNode(e.indexExpression),this.append(")")),e.indexWhere&&(this.append(" "),this.visitNode(e.indexWhere)),e.doNothing===!0?this.append(" do nothing"):e.updates&&(this.append(" do update set "),this.compileList(e.updates),e.updateWhere&&(this.append(" "),this.visitNode(e.updateWhere)))}visitOnDuplicateKey(e){this.append("on duplicate key update "),this.compileList(e.updates)}visitCreateIndex(e){this.append("create "),e.unique&&this.append("unique "),this.append("index "),e.ifNotExists&&this.append("if not exists "),this.visitNode(e.name),e.table&&(this.append(" on "),this.visitNode(e.table)),e.using&&(this.append(" using "),this.visitNode(e.using)),e.columns&&(this.append(" ("),this.compileList(e.columns),this.append(")")),e.nullsNotDistinct&&this.append(" nulls not distinct"),e.where&&(this.append(" "),this.visitNode(e.where))}visitDropIndex(e){this.append("drop index "),e.ifExists&&this.append("if exists "),this.visitNode(e.name),e.table&&(this.append(" on "),this.visitNode(e.table)),e.cascade&&this.append(" cascade")}visitCreateSchema(e){this.append("create schema "),e.ifNotExists&&this.append("if not exists "),this.visitNode(e.schema)}visitDropSchema(e){this.append("drop schema "),e.ifExists&&this.append("if exists "),this.visitNode(e.schema),e.cascade&&this.append(" cascade")}visitPrimaryKeyConstraint(e){e.name&&(this.append("constraint "),this.visitNode(e.name),this.append(" ")),this.append("primary key ("),this.compileList(e.columns),this.append(")"),this.buildDeferrable(e)}buildDeferrable(e){e.deferrable!==void 0&&(e.deferrable?this.append(" deferrable"):this.append(" not deferrable")),e.initiallyDeferred!==void 0&&(e.initiallyDeferred?this.append(" initially deferred"):this.append(" initially immediate"))}visitUniqueConstraint(e){e.name&&(this.append("constraint "),this.visitNode(e.name),this.append(" ")),this.append("unique"),e.nullsNotDistinct&&this.append(" nulls not distinct"),this.append(" ("),this.compileList(e.columns),this.append(")"),this.buildDeferrable(e)}visitCheckConstraint(e){e.name&&(this.append("constraint "),this.visitNode(e.name),this.append(" ")),this.append("check ("),this.visitNode(e.expression),this.append(")")}visitForeignKeyConstraint(e){e.name&&(this.append("constraint "),this.visitNode(e.name),this.append(" ")),this.append("foreign key ("),this.compileList(e.columns),this.append(") "),this.visitNode(e.references),e.onDelete&&(this.append(" on delete "),this.append(e.onDelete)),e.onUpdate&&(this.append(" on update "),this.append(e.onUpdate)),this.buildDeferrable(e)}visitList(e){this.compileList(e.items)}visitWith(e){this.append("with "),e.recursive&&this.append("recursive "),this.compileList(e.expressions)}visitCommonTableExpression(e){this.visitNode(e.name),this.append(" as "),Qn(e.materialized)&&(e.materialized||this.append("not "),this.append("materialized ")),this.visitNode(e.expression)}visitCommonTableExpressionName(e){this.visitNode(e.table),e.columns&&(this.append("("),this.compileList(e.columns),this.append(")"))}visitAlterTable(e){this.append("alter table "),this.visitNode(e.table),this.append(" "),e.renameTo&&(this.append("rename to "),this.visitNode(e.renameTo)),e.setSchema&&(this.append("set schema "),this.visitNode(e.setSchema)),e.addConstraint&&this.visitNode(e.addConstraint),e.dropConstraint&&this.visitNode(e.dropConstraint),e.renameConstraint&&this.visitNode(e.renameConstraint),e.columnAlterations&&this.compileColumnAlterations(e.columnAlterations),e.addIndex&&this.visitNode(e.addIndex),e.dropIndex&&this.visitNode(e.dropIndex)}visitAddColumn(e){this.append("add column "),this.visitNode(e.column)}visitRenameColumn(e){this.append("rename column "),this.visitNode(e.column),this.append(" to "),this.visitNode(e.renameTo)}visitDropColumn(e){this.append("drop column "),e.ifExists&&this.append("if exists "),this.visitNode(e.column)}visitAlterColumn(e){this.append("alter column "),this.visitNode(e.column),this.append(" "),e.dataType&&(this.announcesNewColumnDataType()&&this.append("type "),this.visitNode(e.dataType),e.dataTypeExpression&&(this.append("using "),this.visitNode(e.dataTypeExpression))),e.setDefault&&(this.append("set default "),this.visitNode(e.setDefault)),e.dropDefault&&this.append("drop default"),e.setNotNull&&this.append("set not null"),e.dropNotNull&&this.append("drop not null")}visitModifyColumn(e){this.append("modify column "),this.visitNode(e.column)}visitAddConstraint(e){this.append("add "),this.visitNode(e.constraint)}visitDropConstraint(e){this.append("drop constraint "),e.ifExists&&this.append("if exists "),this.visitNode(e.constraintName),e.modifier==="cascade"?this.append(" cascade"):e.modifier==="restrict"&&this.append(" restrict")}visitRenameConstraint(e){this.append("rename constraint "),this.visitNode(e.oldName),this.append(" to "),this.visitNode(e.newName)}visitSetOperation(e){this.append(e.operator),this.append(" "),e.all&&this.append("all "),this.visitNode(e.expression)}visitCreateView(e){this.append("create "),e.orReplace&&this.append("or replace "),e.materialized&&this.append("materialized "),e.temporary&&this.append("temporary "),this.append("view "),e.ifNotExists&&this.append("if not exists "),this.visitNode(e.name),this.append(" "),e.columns&&(this.append("("),this.compileList(e.columns),this.append(") ")),e.as&&(this.append("as "),this.visitNode(e.as))}visitRefreshMaterializedView(e){this.append("refresh materialized view "),e.concurrently&&this.append("concurrently "),this.visitNode(e.name),e.withNoData?this.append(" with no data"):this.append(" with data")}visitDropView(e){this.append("drop "),e.materialized&&this.append("materialized "),this.append("view "),e.ifExists&&this.append("if exists "),this.visitNode(e.name),e.cascade&&this.append(" cascade")}visitGenerated(e){this.append("generated "),e.always&&this.append("always "),e.byDefault&&this.append("by default "),this.append("as "),e.identity&&this.append("identity"),e.expression&&(this.append("("),this.visitNode(e.expression),this.append(")")),e.stored&&this.append(" stored")}visitDefaultValue(e){this.append("default "),this.visitNode(e.defaultValue)}visitSelectModifier(e){e.rawModifier?this.visitNode(e.rawModifier):this.append(pA[e.modifier]),e.of&&(this.append(" of "),this.compileList(e.of,", "))}visitCreateType(e){this.append("create type "),this.visitNode(e.name),e.enum&&(this.append(" as enum "),this.visitNode(e.enum))}visitDropType(e){this.append("drop type "),e.ifExists&&this.append("if exists "),this.visitNode(e.name),e.additionalNames?.length&&(this.append(", "),this.compileList(e.additionalNames)),e.cascade&&this.append(" cascade")}visitAlterType(e){this.append("alter type "),this.visitNode(e.name),this.append(" "),e.addValue?this.visitNode(e.addValue):e.renameTo?(this.append("rename to "),this.visitNode(e.renameTo)):e.renameValue?this.visitNode(e.renameValue):e.setSchema&&(this.append("set schema "),this.visitNode(e.setSchema))}visitAddValue(e){this.append("add value "),e.ifNotExists&&this.append("if not exists "),this.visitNode(e.value),e.neighborValue&&(this.append(e.isBefore?" before ":" after "),this.visitNode(e.neighborValue))}visitRenameValue(e){this.append("rename value "),this.visitNode(e.oldValue),this.append(" to "),this.visitNode(e.newValue)}visitExplain(e){this.append("explain"),(e.options||e.format)&&(this.append(" "),this.append(this.getLeftExplainOptionsWrapper()),e.options&&(this.visitNode(e.options),e.format&&this.append(this.getExplainOptionsDelimiter())),e.format&&(this.append("format"),this.append(this.getExplainOptionAssignment()),this.append(e.format)),this.append(this.getRightExplainOptionsWrapper()))}visitDefaultInsertValue(e){this.append("default")}visitAggregateFunction(e){this.append(e.func),this.append("("),e.distinct&&this.append("distinct "),this.compileList(e.aggregated),e.orderBy&&(this.append(" "),this.visitNode(e.orderBy)),this.append(")"),e.withinGroup&&(this.append(" within group ("),this.visitNode(e.withinGroup),this.append(")")),e.filter&&(this.append(" filter("),this.visitNode(e.filter),this.append(")")),e.over&&(this.append(" "),this.visitNode(e.over))}visitOver(e){this.append("over("),e.partitionBy&&(this.visitNode(e.partitionBy),e.orderBy&&this.append(" ")),e.orderBy&&this.visitNode(e.orderBy),this.append(")")}visitPartitionBy(e){this.append("partition by "),this.compileList(e.items)}visitPartitionByItem(e){this.visitNode(e.partitionBy)}visitBinaryOperation(e){this.visitNode(e.leftOperand),this.append(" "),this.visitNode(e.operator),this.append(" "),this.visitNode(e.rightOperand)}visitUnaryOperation(e){this.visitNode(e.operator),this.isMinusOperator(e.operator)||this.append(" "),this.visitNode(e.operand)}isMinusOperator(e){return mr.is(e)&&e.operator==="-"}visitUsing(e){this.append("using "),this.compileList(e.tables)}visitFunction(e){this.append(e.func),this.append("("),this.compileList(e.arguments),this.append(")")}visitCase(e){this.append("case"),e.value&&(this.append(" "),this.visitNode(e.value)),e.when&&(this.append(" "),this.compileList(e.when," ")),e.else&&(this.append(" else "),this.visitNode(e.else)),this.append(" end"),e.isStatement&&this.append(" case")}visitWhen(e){this.append("when "),this.visitNode(e.condition),e.result&&(this.append(" then "),this.visitNode(e.result))}visitJSONReference(e){this.visitNode(e.reference),this.visitNode(e.traversal)}visitJSONPath(e){e.inOperator&&this.visitNode(e.inOperator),this.append("'$");for(let r of e.pathLegs)this.visitNode(r);this.append("'")}visitJSONPathLeg(e){let r=e.type==="ArrayLocation",o=String(e.value);r?(this.append("["),this.append(this.sanitizeStringLiteral(o)),this.append("]")):(this.append('."'),this.append(this.sanitizeJSONPathMemberValue(o)),this.append('"'))}visitJSONOperatorChain(e){for(let r=0,o=e.values.length;r<o;r++)r===o-1?this.visitNode(e.operator):this.append("->"),this.visitNode(e.values[r])}visitMergeQuery(e){e.with&&(this.visitNode(e.with),this.append(" ")),this.append("merge "),e.top&&(this.visitNode(e.top),this.append(" ")),this.append("into "),this.visitNode(e.into),e.using&&(this.append(" "),this.visitNode(e.using)),e.whens&&(this.append(" "),this.compileList(e.whens," ")),e.returning&&(this.append(" "),this.visitNode(e.returning)),e.output&&(this.append(" "),this.visitNode(e.output)),e.endModifiers?.length&&(this.append(" "),this.compileList(e.endModifiers," "))}visitMatched(e){e.not&&this.append("not "),this.append("matched"),e.bySource&&this.append(" by source")}visitAddIndex(e){(!this.parentNode||!vt.is(this.parentNode))&&this.append("add "),e.unique&&this.append("unique "),this.append("index "),this.visitNode(e.name),e.columns&&(this.append(" ("),this.compileList(e.columns),this.append(")")),e.using&&(this.append(" using "),this.visitNode(e.using))}visitCast(e){this.append("cast("),this.visitNode(e.expression),this.append(" as "),this.visitNode(e.dataType),this.append(")")}visitFetch(e){this.append("fetch next "),this.visitNode(e.rowCount),this.append(` rows ${e.modifier}`)}visitOutput(e){this.append("output "),this.compileList(e.selections)}visitTop(e){this.append(`top(${e.expression})`),e.modifiers&&this.append(` ${e.modifiers}`)}visitOrAction(e){this.append(e.action)}visitCollate(e){this.append("collate "),this.visitNode(e.collation)}append(e){this.#e+=e}appendValue(e){this.addParameter(e),this.append(this.getCurrentParameterPlaceholder())}getLeftIdentifierWrapper(){return'"'}getRightIdentifierWrapper(){return'"'}getCurrentParameterPlaceholder(){return"$"+this.numParameters}getLeftExplainOptionsWrapper(){return"("}getExplainOptionAssignment(){return" "}getExplainOptionsDelimiter(){return", "}getRightExplainOptionsWrapper(){return")"}sanitizeIdentifier(e){let r=this.getLeftIdentifierWrapper(),o=this.getRightIdentifierWrapper(),n="";for(let s of e)n+=s,s===r?n+=r:s===o&&(n+=o);return n}sanitizeStringLiteral(e){return e.replace(uA,"''")}sanitizeJSONPathMemberValue(e){return e.replace(dA,r=>r==="'"?"''":'\\"')}addParameter(e){this.#t.push(e)}appendImmediateValue(e){if(he(e))this.appendStringLiteral(e);else if(dn(e)||Qn(e)||js(e))this.append(e.toString());else if(Us(e))this.append("null");else if(MN(e))this.appendImmediateValue(e.toISOString());else throw new Error(`invalid immediate value ${e}`)}appendStringLiteral(e){this.append("'"),this.append(this.sanitizeStringLiteral(e)),this.append("'")}sortSelectModifiers(e){return u(e.toSorted((r,o)=>r.modifier&&o.modifier?zk[r.modifier]-zk[o.modifier]:1))}compileColumnAlterations(e){this.compileList(e)}announcesNewColumnDataType(){return!0}},pA=u({ForKeyShare:"for key share",ForNoKeyUpdate:"for no key update",ForUpdate:"for update",ForShare:"for share",NoWait:"nowait",SkipLocked:"skip locked",Distinct:"distinct"}),zk=u({ForKeyShare:1,ForNoKeyUpdate:1,ForUpdate:1,ForShare:1,NoWait:2,SkipLocked:2,Distinct:0}),fA=u({InnerJoin:"inner join",LeftJoin:"left join",RightJoin:"right join",FullJoin:"full join",CrossJoin:"cross join",LateralInnerJoin:"inner join lateral",LateralLeftJoin:"left join lateral",LateralCrossJoin:"cross join lateral",OuterApply:"outer apply",CrossApply:"cross apply",Using:"using"});var dd=class{async init(){}async acquireConnection(){return new gm}async beginTransaction(){}async commitTransaction(){}async rollbackTransaction(){}async releaseConnection(){}async destroy(){}async releaseSavepoint(){}async rollbackToSavepoint(){}async savepoint(){}},gm=class{async executeQuery(){return{rows:[]}}async*streamQuery(){}};var pd=class{get supportsCreateIfNotExists(){return!0}get supportsMultipleConnections(){return!0}get supportsTransactionalDdl(){return!1}get supportsReturning(){return!1}get supportsOutput(){return!1}};var hA=/"/g,mA=/[\\'"]/g,fd=class extends ud{visitOrAction(e){this.append("or "),this.append(e.action)}getCurrentParameterPlaceholder(){return"?"}getLeftExplainOptionsWrapper(){return""}getRightExplainOptionsWrapper(){return""}getLeftIdentifierWrapper(){return'"'}getRightIdentifierWrapper(){return'"'}getAutoIncrement(){return"autoincrement"}sanitizeIdentifier(e){return e.replace(hA,'""')}sanitizeJSONPathMemberValue(e){return e.replace(mA,r=>r==="\\"?"\\\\":r==="'"?"''":'\\"')}visitDefaultInsertValue(e){this.append("null")}};var hd=class extends pd{get supportsMultipleConnections(){return!1}get supportsTransactionalDdl(){return!1}get supportsReturning(){return!0}async acquireMigrationLock(e,r){}async releaseMigrationLock(e,r){}};var md=t=>(e,r)=>e===r?0:t(e,r)?-1:1,yA=t=>(e,r)=>t(r,e),bm=md((t,e)=>t<e),yd=md((t,e)=>t<e),gA=md((t,e)=>t<e),xm=(t,e)=>{if(t.byteLength>e.byteLength)return 1;if(t.byteLength<e.byteLength)return-1;for(let r=0;r<t.byteLength;r++){if(t[r]<e[r])return-1;if(t[r]>e[r])return 1}return 0};var wm=300*1e3,xd=V("Counter",nn(65535)(Ee)),gd=0,wd=65535,Vk=rl("NodeId",/^[a-f0-9]{16}$/u)(Y),Nm="0000000000000000",km="ffffffffffffffff",bA=V("NodeIdBytes",Or(8)(pt)),ki=Ee.orThrow(8),Nd=t=>Ia(t),kd=t=>Kn(t),Sm=bt({millis:zt,counter:xd,nodeId:Vk}),vm=Wi({millis:Pi,counter:Pi,nodeId:ss}),Si=(t,e)=>yd(t.millis,e.millis)||yd(t.counter,e.counter)||bm(t.nodeId,e.nodeId),vi=({millis:t=ur,counter:e=gd,nodeId:r=Nm}={})=>({millis:t,counter:e,nodeId:r}),ec=t=>{let e=Kn(t.randomBytes.create(8));return vi({nodeId:e})},Sd=t=>(e,r)=>{let o=Math.max(r,e.millis),n=o===e.millis?uo(e.counter):gd;n>wd&&(o=zt.orThrow(uo(o)),n=gd);let s={millis:o,counter:n,nodeId:e.nodeId};return tc(t)(o,r)?N({type:"TimestampDriftError",timestamp:s,cause:"local",now:r}):g(s)},vd=t=>(e,r,o)=>{if(tc(t)(r.millis,o))return N({type:"TimestampDriftError",timestamp:r,cause:"remote",now:o});let n=Si(e,r)>=0?e:r;return Sd(t)({...n,nodeId:e.nodeId},o)},tc=t=>(e,r)=>e-r>t.timestampConfig.maxDrift,Em=V("TimestampBytes",Or(16)(pt),t=>t[0]===255&&t[1]===255&&t[2]===255&&t[3]===255&&t[4]===255&&t[5]===255?N({type:"TimestampBytes",value:t}):g(),t=>`The millis part of ${Kn(t.value)} is 2^48 - 1, which Millis reserves for infinity.`),Tm=Ee.orThrow(16),bd=Nm,Za=new globalThis.Uint8Array(ki),Kt=t=>{let{millis:e,counter:r,nodeId:o}=t,n=new globalThis.Uint8Array(16),s=Math.floor(e/2**32);return n[0]=s>>8&255,n[1]=s&255,n[2]=e>>>24&255,n[3]=e>>>16&255,n[4]=e>>>8&255,n[5]=e&255,n[6]=r>>8&255,n[7]=r&255,o!==bd&&(Za=Nd(o),bd=o),n.set(Za,8),n},Rr=t=>{let e=(t[0]<<8|t[1])*4294967296+((t[2]<<24|t[3]<<16|t[4]<<8|t[5])>>>0),r=t[6]<<8|t[7],o=0;for(;o<ki&&t[8+o]===Za[o];)o++;return o<ki&&(Za=new globalThis.Uint8Array(t.subarray(8,16)),bd=kd(Za)),{millis:e,counter:r,nodeId:bd}},Ed=xm,xA=t=>new Date(t.millis).toISOString();var kn=t=>t.startsWith("_"),rc=ks("Todo"),Om=rc.orThrow(Wn("testTodo")),Ei=ks("Project"),Cm=Ei.orThrow(Wn("testProject")),Am={todo:{id:rc,title:aa,isCompleted:ao(un),projectId:ao(Ei)},project:{id:Ei,name:aa}},Im={_appOwner:{id:Ws,encryptionKey:Wl,writeKey:Ll,secret:ao(ql),name:ao(aa)}},Dr={Schema:0,TimestampDrift:1},Sn={LocalMutation:0,ReceivedMessage:1},_k=bt({createdAt:Oo,updatedAt:ao(Oo),isDeleted:ao(un),ownerId:Ws}),oc=new Set(Object.keys(_k.props)),Rm=[...oc,"id"],Dm=(t,e)=>{let o=Di(t,s=>new Set(Object.keys(s).filter(i=>i!=="id"))),n=e?e(wA).map(s=>{let i=s.toOperationNode();return M(!i.name.name.startsWith("evolu_"),"Index names starting with evolu_ are reserved for Evolu."),M(!i.unique,"Unique indexes are not supported because they can prevent synchronization."),{name:i.name.name,sql:s.compile().sql}}):[];return{tables:o,indexes:n}},Bm=t=>(r,o)=>{let n=r(Td).compile();Ut(kh,n.parameters);let s={sql:n.sql,parameters:n.parameters,...o&&{options:o}};return vh(s)},Mm=t=>(e,r)=>{let o=[];r??=Kk(t)();for(let[n,s]of Object.entries(e.tables)){ke(s);let i=Mi(r.tables,n);if(!i)o.push(NA(n,s));else for(let a of s.difference(i))o.push(te`
            alter table ${te.identifier(n)}
            add column ${te.identifier(a)} any;
          `);o.push(te`
        create index if not exists ${te.identifier(`evolu_${n}_id`)}
        on ${te.identifier(n)} ("id");
      `)}r.indexes.filter(n=>!e.indexes.some(s=>Zl(s,n))).forEach(n=>{o.push(te`drop index ${te.identifier(n.name)};`)}),e.indexes.filter(n=>!r.indexes.some(s=>Zl(n,s))).forEach(n=>{o.push({sql:`${n.sql};`,parameters:[]})});for(let n of o)t.sqlite.exec(n)},Kk=t=>()=>eu(t)({excludeIndexNamePrefix:"evolu_"}),Td=new Ni({dialect:{createAdapter:()=>new hd,createDriver:()=>new dd,createIntrospector(){throw new Error("Not implemeneted")},createQueryCompiler:()=>new fd}}),wA=Td.schema.createIndex.bind(Td.schema),NA=(t,e)=>te`
  create table ${te.identifier(t)} (
    "id" text,
    ${te.raw([...oc,...e].map(r=>`${te.identifier(r).sql} any`).join(", "))},
    primary key ("ownerId", "id")
  )
  without rowid, strict;
`;var rs=Ee.orThrow(12),Lm=new Uint8Array(rs),Nr=Symbol("evolu.local-first.Storage.InfiniteUpperBound"),Je={Fingerprint:1,Skip:0,Timestamps:2},kA=(t,e,r)=>({timestamp:vi({millis:zt.orThrow(e),counter:0}),change:Qo.orThrow({table:"testTable",id:t,values:{name:r},isInsert:!0,isDelete:!1})}),Qk=Co(Y,Yl),Jk=V("ValidDbChangeValues",Qk,t=>{let e=Rm.filter(r=>r in t);return e.length>0?N({type:"ValidDbChangeValues",value:t,invalidColumns:e}):g()},t=>`DbChange values contain reserved system columns: ${t.invalidColumns.join(", ")}.`),Qo=bt({table:Y,id:co,values:Jk,isInsert:xs,isDelete:ao(xs)}),nc=t=>({insertTimestamp:(e,r)=>{let o=vA(t),{rows:n}=t.sqlite.prepared`
      select evolu_skiplist_insert(
        ${e},
        ${r},
        ${o}
      ) as inserted;
    `;return n[0].inserted===1},getExistingTimestamps:(e,r)=>{let o=gh(r);return t.sqlite.prepared`
      with recursive
        split_timestamps(timestampBytes, pos) as (
          select
            substr(${o}, 1, 16),
            17 as pos
          union all
          select
            substr(${o}, pos, 16),
            pos + 16
          from split_timestamps
          where pos <= length(${o})
        )
      select s.timestampBytes
      from split_timestamps s
      cross join evolu_timestamp t
        on t.ownerId = ${e} and s.timestampBytes = t.t;
    `.rows.map(s=>s.timestampBytes)},getSize:e=>{let{rows:r}=t.sqlite.prepared`
      select evolu_skiplist_size(${e}) as size;
    `;return r[0].size},fingerprint:(e,r,o)=>(Pm(r,o),OA(t)(e,r,o)),fingerprintRanges:Wm(t),findLowerBound:(e,r,o,n)=>{if(Pm(r,o),o===0||r===o||n===Nr)return o;let{rows:s}=t.sqlite.prepared`
      select evolu_skiplist_lower_bound(
        ${e},
        ${n}
      ) as lowerBound;
    `;return s[0].lowerBound??o},iterate:(e,r,o,n)=>{Pm(r,o);let s=o-r;if(s===0)return;let i=Gk(t)(e,r);if(!n(i,r)||s===1)return;let a=r;t.sqlite.iterate(te`
        select t
        from evolu_timestamp
        where ownerId = ${e} and t > ${i}
        order by t
        limit ${s-1};
      `,c=>(a++,n(c.t,a)))},deleteOwner:e=>{t.sqlite.exec(te`
      delete from evolu_timestamp where ownerId = ${e};
    `),t.sqlite.exec(te`
      delete from evolu_usage where ownerId = ${e};
    `)}}),Pm=(t,e)=>{M(t<=e,"invalid begin or end")},qm=t=>{for(let e of[te`
      create table evolu_timestamp (
        "ownerId" blob not null,
        "t" blob not null,
        "h1" integer,
        "h2" integer,
        "c" integer,
        "l" integer not null,
        primary key ("ownerId", "t")
      )
      strict;
    `,te`
      create index evolu_timestamp_index
      on evolu_timestamp ("ownerId", "l", "t", "h1", "h2", "c");
    `,te`
      create table evolu_usage (
        "ownerId" blob primary key,
        "storedBytes" integer not null,
        "firstTimestamp" blob,
        "lastTimestamp" blob
      )
      strict;
    `])t.sqlite.exec(e)},sc=(t,e,r)=>Ed(t,r)===1?[e,t]:Ed(t,e)===-1?[t,r]:[e,r],Hk=t=>fs(t).slice(0,rs),SA=t=>t.map(Hk).reduce((e,r)=>Uint8Array.from(e,(o,n)=>o^r[n]),Lm),vA=t=>{let e=1;for(;t.random.next()<=EA&&e<TA;)e+=1;return e},EA=.25,TA=10,OA=t=>(e,r,o)=>o-r===0?Lm:r===0?Wm(t)(e,[o])[0].fingerprint:Wm(t)(e,[r,o])[1].fingerprint,Wm=t=>(e,r,o=Nr)=>{let n=new Uint8Array(r.length*8),s=new DataView(n.buffer);for(let[c,l]of r.entries())s.setBigUint64(c*8,BigInt(l));let{rows:i}=t.sqlite.prepared`
      select evolu_skiplist_fingerprints(
        ${e},
        ${n}
      ) as ranges;
    `,{ranges:a}=i[0];return r.map((c,l)=>({type:Je.Fingerprint,upperBound:l===r.length-1?o:a.slice(l*28+12,l*28+28),fingerprint:a.slice(l*28,l*28+12)}))},Gk=t=>(e,r)=>{let{rows:o}=t.sqlite.prepared`
      select evolu_skiplist_timestamp_at(${e}, ${r}) as t;
    `,{t:n}=o[0];return M(n,"index out of range"),n},ic=t=>(e,r)=>{let o=t.sqlite.prepared`
      select storedBytes, firstTimestamp, lastTimestamp
      from evolu_usage
      where ownerId = ${e};
    `;if(!ut(o.rows))return{storedBytes:null,firstTimestamp:r,lastTimestamp:r};let n=Mr(o.rows);return ke(n.firstTimestamp),ke(n.lastTimestamp),{storedBytes:n.storedBytes,firstTimestamp:n.firstTimestamp,lastTimestamp:n.lastTimestamp}},ac=t=>(e,r,o,n)=>{t.sqlite.prepared`
      insert into evolu_usage
        ("ownerId", "storedBytes", "firstTimestamp", "lastTimestamp")
      values
        (${e}, ${r}, ${o}, ${n})
      on conflict (ownerId) do update
        set
          storedBytes = ${r},
          firstTimestamp = ${o},
          lastTimestamp = ${n};
    `};var tS=1e6,CA=1e8,rS=1e5,AA=pa(tS,CA)(on),cc=tS,IA=pa(3e3,rS)(on),oS=3e4,lc=Ft,ot={Request:0,Response:1,Broadcast:2},jm=t=>{try{return g(DA(mt(t)))}catch(e){return N({type:"ProtocolInvalidDataError",error:e})}},Br={None:0,Subscribe:1,Unsubscribe:2},Ge={NoError:0,WriteKeyError:1,WriteError:2,QuotaError:3,SyncError:4},Fm=t=>(e,r,o)=>{let n=Xr(e.id,{messageType:ot.Request,totalMaxSize:o??cc,writeKey:e.writeKey});for(let s of r){let i=uc(t)(s,e.encryptionKey),a={timestamp:s.timestamp,change:i};if(!n.tryWrite(()=>{n.addMessage(a)})){let c=t.randomBytes.create(rs);n.addRange({type:Je.Fingerprint,upperBound:Nr,fingerprint:c});break}}return n.unwrap()},zm=t=>(e,r,o=cc)=>{let n=[],s=Xr(e.id,{messageType:ot.Broadcast,totalMaxSize:o});for(let i of r){let a={timestamp:i.timestamp,change:uc(t)(i,e.encryptionKey)},c=s;c.tryWrite(()=>{c.addMessage(a)})||(s=Xr(e.id,{messageType:ot.Broadcast,totalMaxSize:o}),s.addMessage(a),n.push(c.unwrap()))}return n.push(s.unwrap()),vc(n),n},Vm=t=>(e,r)=>{let o=Xr(e,{messageType:ot.Request,subscriptionFlag:r??Br.None}),n=jr(e),s=t.storage.getSize(n),i=cS(t)(n,Bt,s,Nr);for(let a of i)o.addRange(a);return o.unwrap()},_m=t=>Xr(t,{messageType:ot.Request,subscriptionFlag:Br.Unsubscribe}).unwrap(),Xr=(t,e)=>{let{totalMaxSize:r=cc,rangesMaxSize:o=oS,version:n=lc}=e,s={header:mt(),messages:{timestamps:Ti(),dbChangeLengths:mt()},ranges:{timestamps:Ti(),types:mt(),payloads:mt()}};if(_e(s.header,n),s.header.extend(jr(t)),s.header.extend([e.messageType]),e.messageType===ot.Request){e.writeKey?(s.header.extend([1]),s.header.extend(e.writeKey)):s.header.extend([0]);let m=e.subscriptionFlag??Br.None;s.header.extend([m])}else e.messageType===ot.Response&&s.header.extend([e.errorCode]);let i=[],a=0,c=!1,l=!1,h=()=>p()<=r,p=()=>s.header.getLength()+s.messages.timestamps.getLength()+s.messages.dbChangeLengths.getLength()+a+f(),f=()=>s.ranges.timestamps.getCount()>0?s.ranges.timestamps.getLength()+s.ranges.types.getLength()+s.ranges.payloads.getLength():0;return{addMessage:m=>{s.messages.timestamps.add(m.timestamp),Wo(s.messages.dbChangeLengths,m.change),i.push(m.change),a+=m.change.length,M(l||h(),"the message is too big")},addRange:m=>{switch(M(e.messageType!==ot.Broadcast,"Cannot add a range into broadcast message"),M(!c,"Cannot add a range after an InfiniteUpperBound range"),c=m.upperBound===Nr,m.upperBound!==Nr?s.ranges.timestamps.add(Rr(m.upperBound)):s.ranges.timestamps.addInfinite(),_e(s.ranges.types,m.type),m.type){case Je.Skip:break;case Je.Fingerprint:s.ranges.payloads.extend(m.fingerprint);break;case Je.Timestamps:{m.timestamps.append(s.ranges.payloads);break}}M(l||h(),`the range ${m.type} is too big`)},tryWrite:(m,d=Bt)=>{let y=s.messages.timestamps.checkpoint(),b=s.messages.dbChangeLengths.getLength(),x=i.length,w=a,C=s.ranges.timestamps.checkpoint(),E=s.ranges.types.getLength(),R=s.ranges.payloads.getLength(),I=c,B=l,T=!1;l=!0;try{m();let S=s.ranges.timestamps.getCount()+1;for(;S%128===0;)S/=128;let k=(e.messageType===ot.Broadcast||c?0:1+rs+(S===1?1:0))+d;T=p()+k<=r&&f()+k<=o}finally{l=B,T||(y(),s.messages.dbChangeLengths.truncate(b),i.length=x,a=w,C(),s.ranges.types.truncate(E),s.ranges.payloads.truncate(R),c=I)}return T},unwrap:()=>{s.ranges.timestamps.getCount()>0&&M(c,"The last range's upperBound must be InfiniteUpperBound");let m=new Uint8Array(p());m.set(s.header.unwrap());let d=s.header.getLength(),y=mt();s.messages.timestamps.append(y),m.set(y.unwrap(),d),d+=y.getLength();let b=s.messages.dbChangeLengths.unwrap(),x=0;for(let w of i){do m[d++]=b[x];while(b[x++]>=128);m.set(w,d),d+=w.length}if(s.ranges.timestamps.getCount()>0){let w=mt();s.ranges.timestamps.append(w),w.extend(s.ranges.types.unwrap()),w.extend(s.ranges.payloads.unwrap()),m.set(w.unwrap(),d),d+=w.getLength()}return M(d===m.length,"the frame size is exact"),m},getSize:p}},Ti=()=>{let t=Bt,e=mt(),r=()=>{e.reset(),_e(e,t)};r();let o=mt(),n=0,s=_l((a,c)=>{_e(a,c)}),i=_l((a,c)=>{a.extend(Nd(c))});return{add:a=>{let c=a.millis-n;Ut(Ee,c),t++,r(),n=a.millis,_e(o,c),s.add(a.counter),i.add(a.nodeId)},addInfinite:()=>{t++,r()},getCount:()=>t,getLength:()=>e.getLength()+o.getLength()+s.getLength()+i.getLength(),append:a=>{a.extend(e.unwrap()),a.extend(o.unwrap()),a.extend(s.unwrap()),a.extend(i.unwrap())},checkpoint:()=>{let a=t,c=o.getLength(),l=n,h=s.checkpoint(),p=i.checkpoint();return()=>{t=a,r(),o.truncate(c),n=l,h(),p()}}}},Km=(t,e={})=>async r=>{let{storage:o}=r.deps,n=e.version??lc,s=nS(t,n);if(!s.ok)return s;let i=s.value;if(i.type==="OtherVersion")return N({type:"ProtocolVersionError",version:i.version,isInitiator:n<i.version,ownerId:i.ownerId});if(i.type==="Request")return N({type:"ProtocolInvalidDataError",error:new st("Expected a Response or a Broadcast")});let{ownerId:a}=i;if(i.type==="ErrorResponse")switch(i.errorCode){case Ge.WriteKeyError:return N({type:"ProtocolWriteKeyError",ownerId:a});case Ge.WriteError:return N({type:"ProtocolWriteError",ownerId:a});case Ge.QuotaError:return N({type:"ProtocolQuotaError",ownerId:a});case Ge.SyncError:return N({type:"ProtocolSyncError",ownerId:a})}let{messages:c}=i,l=jr(a);if(ut(c))try{let b=await r(o.writeMessages(l,c));if(!b.ok)return b}catch(b){if(Cr.is(b))throw b;return r.deps.console.error(b),g({type:"Failed",cause:"Write"})}if(i.type==="Broadcast")return g({type:"Broadcast"});let h=e.writeKey;if(h==null)return g({type:"Readonly"});let{ranges:p}=i;if(!ut(p))return g({type:"Converged"});let f=()=>Xr(a,{messageType:ot.Request,writeKey:h,rangesMaxSize:e.rangesMaxSize}),m=f(),d,y=aS(r.deps)(p,m,l,{createEmptyOutput:f,onChangeTooLarge:e.onChangeTooLarge??r.deps.console.warn,onMessage:b=>{d??=Xr(a,{messageType:ot.Broadcast}),d.addMessage(b)}});return y.ok?y.value?g({type:"Response",message:m.unwrap(),...d&&{broadcast:d.unwrap()}}):g({type:"Converged"}):g({type:"Failed",cause:"Sync"})},RA=(t,e={},r=lc)=>async o=>{let{storage:n}=o.deps;if(t.length>(e.totalMaxSize??cc))return N({type:"ProtocolInvalidDataError",error:new st("Request is too large")});let s=nS(t,r);if(!s.ok)return s;let i=s.value;if(i.type==="OtherVersion"){let b=mt();return _e(b,r),b.extend(jr(i.ownerId)),g({type:"Response",message:b.unwrap()})}if(i.type!=="Request")return N({type:"ProtocolInvalidDataError",error:new st("Expected a Request")});let{ownerId:a,writeKey:c,messages:l,ranges:h}=i,p=jr(a),f=b=>({type:"Response",message:Xr(a,{messageType:ot.Response,errorCode:b}).unwrap()});switch(i.subscriptionFlag){case Br.Subscribe:e.subscribe?.(a);break;case Br.Unsubscribe:e.unsubscribe?.(a);break;case Br.None:break;default:nt(i.subscriptionFlag)}if(ut(l)){if(!c)return g(f(Ge.WriteKeyError));try{let b=await o(n.writeMessages(p,c,l));if(!b.ok)return b.error.type==="UnknownError"&&o.deps.console.error(b.error),g(f(b.error.type==="StorageQuotaError"?Ge.QuotaError:b.error.type==="StorageWriteKeyError"?Ge.WriteKeyError:Ge.WriteError))}catch(b){if(Cr.is(b))throw b;return o.deps.console.error(b),g(f(Ge.WriteError))}if(e.broadcast){let b=Xr(a,{messageType:ot.Broadcast,totalMaxSize:e.totalMaxSize,rangesMaxSize:e.rangesMaxSize,version:r});for(let x of l)b.addMessage(x);e.broadcast(a,b.unwrap())}}else if(c){let b;try{b=n.validateWriteKey(p,c)}catch(x){return o.deps.console.error(x),g(f(Ge.WriteError))}if(!b)return g(f(Ge.WriteKeyError))}let m=()=>Xr(a,{messageType:ot.Response,errorCode:Ge.NoError,totalMaxSize:e.totalMaxSize,rangesMaxSize:e.rangesMaxSize}),d=m();if(!ut(h))return g({type:"Response",message:d.unwrap()});let y=aS(o.deps)(h,d,p,{createEmptyOutput:m,onChangeTooLarge:o.deps.console.warn});return g(y.ok?{type:"Response",message:d.unwrap()}:f(y.error))},nS=(t,e)=>{try{let r=mt(t),[o,n]=sS(r);if(o!==e)return g({type:"OtherVersion",version:o,ownerId:n});switch(iS(r)){case ot.Request:{let s=r.shift();if(s>1)throw new st(`Invalid hasWriteKey: ${s}`);let i=s===1?r.shiftN(Pl):null,a=r.shift();switch(a){case Br.None:case Br.Subscribe:case Br.Unsubscribe:break;default:throw new st(`Invalid SubscriptionFlag: ${a}`)}let c=$m(r);for(let{change:h}of c)if(h.length<BA)throw new st("EncryptedDbChange is too short");let l=eS(r);return g({type:"Request",ownerId:n,writeKey:i,subscriptionFlag:a,messages:c,ranges:l})}case ot.Response:{let s=r.shift();switch(s){case Ge.NoError:{let i=$m(r),a=eS(r);return g({type:"Response",ownerId:n,messages:i,ranges:a})}case Ge.WriteKeyError:case Ge.WriteError:case Ge.QuotaError:case Ge.SyncError:return g({type:"ErrorResponse",ownerId:n,errorCode:s});default:throw new st(`Invalid ProtocolErrorCode: ${s}`)}}case ot.Broadcast:return g({type:"Broadcast",ownerId:n,messages:$m(r)})}}catch(r){return N({type:"ProtocolInvalidDataError",error:r})}},sS=t=>{let e=Zt(t),r=Qm(t);return[e,r]},DA=t=>{let[e,r]=sS(t);if(e!==lc)return{type:"ProtocolHeader",version:e,ownerId:r};let o=iS(t);return{type:"ProtocolHeader",version:e,ownerId:r,messageType:o}},iS=t=>{let e=t.shift();switch(e){case ot.Request:case ot.Response:case ot.Broadcast:return e;default:throw new st("Invalid MessageType")}},st=class extends Error{constructor(e){super(e),this.name="ProtocolDecodeError"}},$m=t=>{let e=Um(t),r=kt(e.length);for(let o=0;o<e.length;o++){let n=e[o],s=Lo(t),i=t.shiftN(s);r[o]={timestamp:n,change:i}}return r},BA=Cs+1+16,MA=8192,aS=t=>(e,r,o,{createEmptyOutput:n,onChangeTooLarge:s,onMessage:i})=>{let a=r.getSize(),c;try{c=t.storage.getSize(o)}catch(E){return t.console.error(E),N(Ge.SyncError)}let l=null,h=Bt,p=Bt,f=!1,m=!1,d=0,y=(E=1)=>d+E>MA?!1:(d+=E,!0),b=E=>{m&&E.upperBound===Nr?r.addRange({type:Je.Skip,upperBound:Nr}):f=!0},x=(E,R)=>{let I=r.tryWrite(()=>{f&&(ke(l,"prevUpperBound is null"),r.addRange({type:Je.Skip,upperBound:l})),R()});return I&&(f=!1,m=!0,p=E),I},w=()=>{let E;try{E=t.storage.fingerprint(o,p,c)}catch(R){return t.console.error(R),N(Ge.SyncError)}return r.addRange({type:Je.Fingerprint,upperBound:Nr,fingerprint:E}),g(!0)};for(let E of e){let R=E.upperBound;if(h<c&&R!==Nr&&!y())return w();let I=h,B;try{B=t.storage.findLowerBound(o,h,c,R)}catch(T){return t.console.error(T),N(Ge.SyncError)}switch(E.type){case Je.Skip:{b(E);break}case Je.Fingerprint:{if(I<B&&!y())return w();let T;try{T=t.storage.fingerprint(o,I,B)}catch(k){return t.console.error(k),N(Ge.SyncError)}if(is(E.fingerprint,T)){b(E);break}if(B-I>=32&&!y(16))return w();let S;try{S=cS(t)(o,I,B,R)}catch(k){if(Cr.is(k))throw k;return t.console.error(k),N(Ge.SyncError)}if(!x(B,()=>{for(let k of S)r.addRange(k)}))return w();break}case Je.Timestamps:{if(I<B&&!y())return w();let T=R,S=new Map(E.timestamps.map(A=>[A.join(),!0])),L=Ti(),k=!1,v=!1,D=f,P=null,F=[];try{t.storage.iterate(o,I,B,(A,_)=>{try{if(_>I&&(_-I)%32===0&&!y())return k=!0,T=A,B=_,!1;let W=A.join(),Q=Rr(A),j=null;if(S.has(W))S.delete(W);else try{j={timestamp:Q,change:t.storage.readDbChange(o,A)}}catch(Z){return t.console.error(Z),v=!0,!1}let U=L.checkpoint();if(L.add(Q),r.tryWrite(()=>{j&&r.addMessage(j)},Xk(L,D)))return j&&i?.(j),!0;if(U(),j){let Z=n(),ne=Ti();if(ne.add(j.timestamp),!Z.tryWrite(()=>{Z.addMessage(j)},Xk(ne,!0))&&y(Math.ceil(j.change.length/131072)))return F.push({type:"ProtocolChangeTooLargeError",timestamp:Q,size:j.change.length}),!0}return k=!0,T=A,B=_,!1}catch(W){return P={error:W},!1}})}catch(A){t.console.error(A),v=!0}if(P)throw P.error;for(let A of F)s(A);if(v)return N(Ge.SyncError);let O=()=>x(B,()=>{r.addRange({type:Je.Timestamps,upperBound:T,timestamps:L})});if(k)return O(),w();if(S.size>0){if(!O())return w()}else b(E);break}}h=B,l=R}let C=r.getSize()>a;return g(C)},Yk=22,Xk=(t,e)=>t.getLength()+Yk+(e?Yk:0),cS=t=>(e,r,o,n)=>{let s=Ee.orThrow(o-r),i=$f(s);if(!i.ok){let l={type:Je.Timestamps,upperBound:n,timestamps:Ti()};return t.storage.iterate(e,r,o,h=>(l.timestamps.add(Rr(h)),!0)),[l]}let a=r===0?i.value:[r,...i.value.map(l=>l+r)],c=t.storage.fingerprintRanges(e,a,n);return r>0?c.slice(1):c},Zk=2*rS,eS=t=>{if(t.getLength()>Zk)throw new st(`Ranges section exceeds ${Zk} bytes`);if(t.getLength()===0)return[];let e=Zt(t);if(e===0)return[];let r=e-1,o=Um(t,r);for(let i=1;i<o.length;i++)if(Si(o[i-1],o[i])>0)throw new st("Range upper bounds must be non-decreasing");let n=kt(e);for(let i=0;i<e;i++){let a=Zt(t);switch(a){case Je.Fingerprint:case Je.Skip:case Je.Timestamps:n[i]=a;break;default:throw new st(`Invalid RangeType: ${a}`)}}let s=kt(e);for(let i=0;i<e;i++){let a=i<r?Kt(o[i]):Nr;switch(n[i]){case Je.Skip:s[i]={type:Je.Skip,upperBound:a};break;case Je.Fingerprint:{let l=t.shiftN(rs);s[i]={type:Je.Fingerprint,upperBound:a,fingerprint:l};break}case Je.Timestamps:{let l=Um(t).map(Kt);s[i]={type:Je.Timestamps,upperBound:a,timestamps:l};break}}}return s},Um=(t,e)=>{if(e??=Zt(t),e>t.getLength())throw new st("Invalid timestamps count");let r=0,o=kt(e);for(let a=0;a<e;a++){let c=Zt(t),l=zt.fromUnknown(r+c);if(!l.ok)throw new st(l.error.type);o[a]=l.value,r=l.value}let n=Kl(t,e,()=>{let a=xd.fromUnknown(Zt(t));if(!a.ok)throw new st(a.error.type);return a.value}),s=Kl(t,e,()=>kd(t.shiftN(ki))),i=kt(e);for(let a=0;a<e;a++)i[a]={millis:o[a],counter:n[a],nodeId:s[a]};return i},Qm=t=>{let e=t.shiftN(af);return Ur(e)},lS=Ft,uc=t=>(e,r)=>{let o=mt();Od(o,e),o.extend(Tf(o.getLength()));let n=t.randomBytes.create(Cs),s=t.xChaCha20Poly1305.encrypt(o.unwrap(),n,r);return o.reset(),o.extend(n),Wo(o,s),o.extend(s),o.unwrap()},Od=(t,e)=>{_e(t,lS),t.extend(Kt(e.timestamp)),bh(t,[e.change.isInsert,e.change.isDelete!=null,e.change.isDelete??!1]),Ra(t,e.change.table),t.extend(lr(e.change.id));let r=kr(e.change.values);Wo(t,r);for(let[o,n]of r)Ra(t,o),uS(t,n)},Jm=t=>(e,r)=>{try{let o=mt(e.change),n=o.shiftN(Cs),s=o.shiftN(Lo(o)),i=t.xChaCha20Poly1305.decrypt(s,n,r);if(!i.ok)return i;if(o.reset(),o.extend(i.value),Zt(o)>lS)throw new st("Unsupported EncryptedDbChange version");let a=Em.fromUnknown(o.shiftN(Tm));if(!a.ok)throw new st(a.error.type);let c=Rr(a.value);if(!vm(c,e.timestamp))return N({type:"ProtocolTimestampMismatchError",expected:e.timestamp,timestamp:c});let l=xh(o,3),h=Da(o),p=Qm(o),f=Lo(o),m=pe();for(let y=0;y<f;y++){let b=Da(o),x=dS(o);m[b]=x}let d=Qo.fromUnknown({table:h,id:p,values:m,isInsert:l[0],isDelete:l[1]?l[2]:null});if(!d.ok)throw new st("Invalid DbChange");return g(d.value)}catch(o){return N({type:"ProtocolInvalidDataError",error:o})}},He={String:Ee.orThrow(20),Number:Ee.orThrow(21),Null:Ee.orThrow(22),Bytes:Ee.orThrow(23),NonNegativeInt:Ee.orThrow(30),EmptyString:Ee.orThrow(31),Base64Url:Ee.orThrow(32),Id:Ee.orThrow(33),Json:Ee.orThrow(34),DateIsoWithNonNegativeTime:Ee.orThrow(35),DateIsoWithNegativeTime:Ee.orThrow(36)},uS=(t,e)=>{if(e===null){_e(t,He.Null);return}switch(typeof e){case"string":{if(e===""){_e(t,He.EmptyString);return}let r=Oo.from.parent(e);if(r.ok){let c=new Date(r.value).getTime();Ee.is(c)?(_e(t,He.DateIsoWithNonNegativeTime),_e(t,c)):(_e(t,He.DateIsoWithNegativeTime),zl(t,c));return}let o=co.from.parent(e);if(o.ok){_e(t,He.Id),t.extend(lr(o.value));return}let n=e[0],s=e[e.length-1],i=n==='"'&&s==='"'||n==="["&&s==="]"||n==="{"&&s==="}"||(n==="-"||n>="0"&&n<="9")&&s>="0"&&s<="9"||e==="true"||e==="false"||e==="null"?Mn.from.parent(e):null;if(i?.ok&&!e.includes("\\ud")){let c=Nf(i.value),l=mt();try{if(Ql(l,c),JSON.stringify(c)===e){let h=l.unwrap();_e(t,He.Json),Wo(t,h),t.extend(h);return}}catch(h){if(!(h instanceof Re))throw h}}let a=ca.from.parent(e);if(a.ok){_e(t,He.Base64Url);let c=la(a.value);Wo(t,c),t.extend(c);return}_e(t,He.String),Ra(t,e);return}case"number":{if(!Object.is(e,-0)&&Ee.is(e)){if(pS(e)){_e(t,e);return}_e(t,He.NonNegativeInt),_e(t,e);return}_e(t,He.Number),zl(t,e);return}}_e(t,He.Bytes),Wo(t,e),t.extend(e)},dS=t=>{let e=Zt(t);if(pS(e))return e;switch(e){case He.String:return Da(t);case He.Number:return Vl(t);case He.Null:return null;case He.Bytes:{let r=Lo(t);return t.shiftN(r)}case He.Id:return Qm(t);case He.NonNegativeInt:return Zt(t);case He.Json:{let r=Lo(t),o=mt(t.shiftN(r)),n=Jl(o);if(o.getLength()!==0)throw new st("Invalid JSON MessagePack length");return JSON.stringify(n)}case He.DateIsoWithNonNegativeTime:case He.DateIsoWithNegativeTime:{let r=e===He.DateIsoWithNonNegativeTime?Zt(t):Vl(t),o=Oo.from.parent(new Date(r).toISOString());if(!o.ok)throw new st(o.error.type);return o.value}case He.EmptyString:return"";case He.Base64Url:{let r=Lo(t),o=t.shiftN(r);return cr(o)}default:throw new st("invalid ProtocolValueType")}},pS=t=>t>=0&&t<20;function Ym(t){return qt`(select ${qt.lit(Oi)} || coalesce(json_group_array(json_object(${qt.join(fS(t.toOperationNode(),"agg"))})), '[]') from ${t} as agg)`}function Xm(t){return qt`(select ${qt.lit(Oi)} || json_object(${qt.join(fS(t.toOperationNode(),"obj"))}) from ${t} as obj)`}function Zm(t){return qt`${qt.lit(Oi)} || json_object(${qt.join(Object.keys(t).flatMap(e=>[qt.lit(e),t[e]]))})`}var Ad=(t,e)=>{let r=[];for(let{selection:o}of t.selections??[])if(qo.is(o)&&be.is(o.column))r.push(Hm(o.column.column.name),Gm(e,o.column.column.name));else if(be.is(o))r.push(Hm(o.column.name),Gm(e,o.column.name));else if(yt.is(o)&&ae.is(o.alias))r.push(Hm(o.alias.name),Gm(e,o.alias.name));else throw new Error("can't extract column names from the select query node");return r},ey=(t,e)=>{if(t===void 0)return[{op:"replaceAll",value:e}];if(t.length!==e.length)return[{op:"replaceAll",value:e}];let r=t.length,o=[];for(let n=0;n<r;n++){let s=t[n],i=e[n];for(let a in s)if(!Sh(s[a],i[a])){o.push({op:"replaceAt",value:i,index:n});break}}return r>0&&o.length===r?[{op:"replaceAll",value:e}]:o},ty=(t,e)=>t.reduce((r,o)=>{switch(o.op){case"replaceAll":return Cd(o.value);case"replaceAt":{let n=Cd([o.value])[0];return r.toSpliced(o.index,1,n)}}},e),Oi=xt({randomBytes:$n()}),fS=(t,e)=>{try{return Ad(t,e)}catch{throw new Error("SQLite evoluJsonArrayFrom and evoluJsonObjectFrom can only handle explicit selections due to limitations of the json_object function. selectAll() is not allowed in the subquery.")}},Cd=t=>{let e=kt(t.length);for(let r=0;r<t.length;++r)e[r]=ry(t[r]);return e},ry=t=>Y.is(t)&&t.startsWith(Oi)?ry(JSON.parse(t.slice(Oi.length))):Array.isArray(t)?Cd(t):$e(t)?PA(t):t,PA=t=>{let e=pe();for(let r in t)e[r]=ry(t[r]);return e},Hm=t=>new Ce(Le.createImmediate(t)),Gm=(t,e)=>new Ce(qo.create(be.create(e),Lt.create(t)));var Id=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},Rd=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),Ai="evolu:console-entry-or-error",Bd=(t,e)=>{We(()=>t.postMessage({type:"ConsoleEntry",entry:e})).ok||t.postMessage({type:"ConsoleEntry",entry:{...e,args:e.args.map(o=>We(()=>structuredClone(o)).ok?o:o instanceof Error?ht(o).error:q(o))}})},gS=ks("SharedWorker"),WA="evolu:builds",LA=bt({type:ar("BuildWaiting"),workerId:gS}),qA=bt({type:ar("BuildWaitingRequest")}),$A=(t,e,r)=>{let o=null,n=null,s=!1,i=!1,a=!1;for(let l of bS(t,e,r)){let{route:h}=l;h.type==="Pending"&&h.failure&&(!o||h.failure.at>o.at)&&(o=h.failure),h.type!=="Complete"&&h.skippedError&&(!n||h.skippedError.at>n.at)&&(n=h.skippedError);let p=xS(l);switch(p.type){case"Error":break;case"Syncing":s=!0;break;case"Synced":i=!0;break;case"Disconnected":a=!0;break;default:nt(p)}}let c=o??n;return c?sy(c):s?wS:i?NS:a?kS:UA},bS=(t,e,r)=>{let o=t?.tenants.find(s=>s.name===e);if(!t||o?.type!=="Active")return at;let n=o.owners.find(s=>s.ownerId===r);return n?.type!=="Writable"?at:n.routes.map(s=>{let i=t.transports.find(({id:a})=>a===s.transportId);return ke(i),{transport:i,route:s}})},xS=({transport:t,route:e})=>{switch(e.type){case"Complete":return NS;case"Settled":return sy(e.skippedError);case"Pending":{let r=e.failure??e.skippedError;return r?sy(r):t.connection.type==="Disconnected"?kS:wS}}},UA={type:"NoRelays"},wS={type:"Syncing"},NS={type:"Synced"},kS={type:"Disconnected"},hS=new WeakMap,sy=t=>{let e=hS.get(t);return e||(e={type:"Error",error:t},hS.set(t,e)),e},Dd=As.orThrow(9e4),jA=As.orThrow(16*Dd),FA=As.orThrow(Dd+va),zA=5e3,mS=As.orThrow(5e3),VA={type:"Connecting"},oy=(t,e,r)=>{switch(t.type){case"Connecting":return{type:"Disconnected",disconnectedAt:e,openedAt:null,error:r};case"Open":return{type:"Disconnected",disconnectedAt:e,openedAt:t.openedAt,error:r??t.error};case"Disconnected":return r?{...t,error:r}:t}},Ci={type:"AllTransports"},dc=(t,e)=>t.type==="AllTransports"||t.key===Gt(e),pc=t=>{switch(t.type){case"Pending":return t;case"Settled":case"Complete":return{type:"Pending",roundRequired:!1,failure:null,skip:t.type==="Settled"?{error:t.skippedError,isRechecking:!1}:null,completeAt:t.completeAt}}},ny=(t,e)=>t.type==="ProtocolInvalidDataError"||t.type==="DecryptWithXChaCha20Poly1305Error"?{...t,error:ht(t.error),at:e}:{...t,at:e},yS=(t,e)=>({...pc(t),roundRequired:!0,failure:e}),_A="3s",KA=t=>async e=>{let r={stack:[],error:void 0,hasError:!1};try{let{deps:o}=e,n=o.console.child("SharedWorker"),s=Id(r,new AsyncDisposableStack,!0),i=s.use(Ao(null)),a=s.use(o.createBroadcastChannel(Ai)),c=O=>{a.postMessage(O)},l=xt(o),h=`evolu:sync-state:${l}`,p=s.use(o.createBroadcastChannel(h)),f=Promise.withResolvers(),m=s.use(new DisposableStack),d=[],y=!1,b=O=>{O.postMessage({type:"Error",error:{type:"OtherBuildRunningError"}})},x=o.time.setTimeout(()=>{y=!0;for(let O of d)b(O)},_A);m.defer(()=>{o.time.clearTimeout(x)}),t.onConnect=O=>{m.disposed||(O.postMessage({type:"Waiting",workerId:l}),d.push(O),y&&b(O)),f.promise.then(()=>{O.onMessage=A=>{switch(A.type){case"AnnounceTabLeader":{o.console.setLevel(A.consoleLevel),i.set(O),n.info("tabLeaderAnnounced");break}case"RequestSyncState":{I();break}case"CreateEvolu":{P(async _=>{let W=await _.ok(Tl(F.acquire(A)));return W.resource.addInstance(A,O,()=>{W.release()}),g()});break}default:n.error("Unknown shared worker input",A)}},O.postMessage({type:"Connected",workerId:l,syncStateChannelName:h})})},s.use(await e.ok(Ro(l))),s.use(await e.ok(Ro("tab"))),m.dispose(),s.defer(o.consoleStoreOutputEntry.subscribe(()=>{let O=o.consoleStoreOutputEntry.get();O&&Bd(a,O)}));let w=new Map,C=new Map,E=!1;s.defer(()=>{E=!0});let R=!1,I=()=>{E||R||(R=!0,queueMicrotask(()=>{if(R=!1,E)return;let O=[...C.values()].map(({id:W,label:Q,connection:j})=>({type:"WebSocket",id:W,label:Q,connection:j})),A=[...w.values()].map(W=>W.getSyncTenant()),_=new Set;for(let W of A)if(W.type==="Active"){for(let Q of W.owners)if(Q.type==="Writable")for(let j of Q.routes)j.type==="Pending"&&_.add(j.transportId)}for(let W of C.values())W.outstandingByOwnerId.size===0&&!_.has(W.id)&&(W.timeout=Dd);p.postMessage({transports:O,tenants:A})}))},B=()=>{for(let O of w.values())O.refreshSyncRoutes()},T=O=>{O.liveness!==null&&(o.time.clearTimeout(O.liveness.timeoutId),O.liveness=null)},S=(O,A)=>{let _=o.time.performance.now(),W=o.time.now()-_,Q=W-A.clockOffset;if(Q>=zA){k(O,"Sleep",Q);return}A.clockOffset=W;let j=mS;if(O.outstandingByOwnerId.size>0)for(let{silentSince:U}of O.outstandingByOwnerId.values()){let Z=lo(U,_),ne=O.timeout-Z;if(ne<=0){L(O),k(O,"Request",Z);return}j=Math.min(j,ne)}else if(A.lastFrameAt!==null){let U=lo(A.lastFrameAt,_),Z=FA+A.idleJitter-U;if(Z<=0){L(O),k(O,"Idle",U);return}j=Math.min(j,Z)}A.timeoutId=o.time.setTimeout(()=>{S(O,A)},Math.ceil(j))},L=O=>{O.timeout=Math.min(O.timeout*2,jA)},k=(O,A,_)=>{n.debug("transportReplaced",{rule:A,gap:_,label:O.label}),T(O),O.socket?.reconnect(),O.connection=oy(O.connection,o.time.now(),null),B(),I()},v={send:(O,A,_,W)=>{let Q=C.get(A);ke(Q),ke(Q.socket);let j=Q.outstandingByOwnerId.get(O);j?j.sender===W&&j.waiting.length===0?(Q.socket.send(_),j.count++):j.waiting.push({sender:W,message:_}):(Q.socket.send(_),Q.outstandingByOwnerId.set(O,{sender:W,count:1,silentSince:o.time.performance.now(),waiting:[]})),I()},hasOutstanding:(O,A)=>C.get(A)?.outstandingByOwnerId.has(O)??!1},D=s.use(await e.ok(ih(O=>async A=>{let _={stack:[],error:void 0,hasError:!1};try{let W=Gt(O),Q={type:"Transport",key:W},j=O.url.indexOf("?"),U={id:xt(A.deps),label:j===-1?O.url:O.url.slice(0,j),outstandingByOwnerId:new Map,timeout:Dd,socket:null,connection:VA,liveness:null},Z=Id(_,new AsyncDisposableStack,!0);Z.defer(()=>{C.delete(W),I()}),C.set(W,U),I();let ne=await A.ok(o.createWebSocket(O.url,{binaryType:"arraybuffer",onOpen:()=>{U.outstandingByOwnerId.clear(),T(U);let me={clockOffset:A.deps.time.now()-A.deps.time.performance.now(),lastFrameAt:null,idleJitter:Math.floor(A.deps.random.next()*va),timeoutId:A.deps.time.setTimeout(()=>{S(U,me)},mS)};U.liveness=me,U.connection={type:"Open",openedAt:A.deps.time.now(),error:U.connection.type==="Connecting"?null:U.connection.error},I();let ve=D.getClaimsForResource(O);n.debug("transportOpen",{url:O.url,ownerIds:[...ve]});for(let Ke of w.values())Ke.requestCreateSyncMessages(ve,Q);B()},onClose:me=>{n.debug("transportClose",{url:O.url,code:me.code,wasClean:me.wasClean}),U.connection=oy(U.connection,A.deps.time.now(),null),T(U),B(),I()},onError:me=>{n.debug("transportError",{url:O.url,type:me.type});let ve=A.deps.time.now();U.connection=oy(U.connection,ve,{type:me.type,at:ve}),T(U),B(),I()},onMessage:me=>{let{liveness:ve}=U;if(ve!==null&&(ve.lastFrameAt!==null||typeof me=="string")&&(ve.lastFrameAt=A.deps.time.performance.now()),!(me instanceof ArrayBuffer))return;let Ke=new Uint8Array(me),$=jm(Ke);if(!$.ok){n.debug("transportInvalidProtocolMessage",{url:O.url,byteLength:Ke.byteLength});return}n.debug("transportProtocolMessage",{url:O.url,ownerId:$.value.ownerId,byteLength:Ke.byteLength});let{ownerId:H,messageType:J}=$.value,K=J===ot.Response||J===void 0,G=null;if(K){let z=U.outstandingByOwnerId.get(H);if(z&&(G=z.sender,z.silentSince=A.deps.time.performance.now(),z.count--,z.count===0)){let{waiting:oe}=z,re=oe.at(0);if(re){let ue=oe.findIndex(eo=>eo.sender===null!=(re.sender===null)),ie=ue===-1?oe.length:ue,Qt=[],Ot=0;for(let eo of oe.slice(0,ie))eo.sender===re.sender?Qt.push(eo):oe[Ot++]=eo;oe.splice(Ot,ie-Ot);for(let eo of Qt)U.socket?.send(eo.message);z.sender=re.sender,z.count=Qt.length}else U.outstandingByOwnerId.delete(H)}I()}for(let[z,oe]of w)oe.requestApplySyncMessage(H,Ke,Q,!K||z===G);B()}}));Z.use(ne),Z.defer(()=>{T(U),U.socket=null});let Ne=Z.move();return U.socket=ne,g(it(ne,Ne))}catch(W){_.error=W,_.hasError=!0}finally{let W=Rd(_);W&&await W}},{onFirstClaimAdded:(O,A,_)=>{if(A.isOpen()){let W={type:"Transport",key:Gt(_)};for(let Q of w.values())Q.requestCreateSyncMessages(new Set([O]),W)}B()},onLastClaimRemoved:(O,A,_)=>{A.isOpen()&&v.send(O,Gt(_),_m(O),null),B()},idleDisposeAfter:"3s",resourceLookup:Gt}))),P=s.use(e.create({...o,getSyncTransportId:O=>{let A=C.get(O);return ke(A),A.id},postConsoleEntryOrError:c,publishSyncState:I,refreshAllSyncRoutes:B,syncRequests:v,tabLeaderPortStore:i,transports:D,xChaCha20Poly1305:o.xChaCha20Poly1305??ya()})),F=s.use(await P.ok(Ml(O=>QA(O,w,l),{idleDisposeAfter:"3s",lookup:O=>O.name})));return f.resolve(),g(s.move())}catch(o){r.error=o,r.hasError=!0}finally{let o=Rd(r);o&&await o}},QA=(t,e,r)=>async o=>{let n={stack:[],error:void 0,hasError:!1};try{let s=Id(n,new AsyncDisposableStack,!0),i=s.use(o.create()),{deps:a}=o,{name:c}=t,l=a.console.child(c).child("SharedWorker"),h=({consoleLevel:$,sqliteSchema:H,encryptionKey:J,memoryOnly:K})=>({nodeId:ec(a).nodeId,consoleLevel:$,sqliteSchema:H,encryptionKey:J,memoryOnly:K}),p=h(t);l.setLevel(p.consoleLevel);let f=s.adopt(new Map,async $=>{let H={stack:[],error:void 0,hasError:!1};try{let J=Id(H,new AsyncDisposableStack,!0);for(let K of $.values())J.use(K)}catch(J){H.error=J,H.hasError=!0}finally{let J=Rd(H);J&&await J}}),m=Promise.withResolvers(),d={type:"Starting"},y=[],b=new Map,x=new Map,w=new Map,C=Sa(),E=new WeakSet,R=new Map;s.defer(()=>{d.type==="Leading"&&d.port.postMessage({type:"Dispose"}),d.type!=="Refused"&&d.type!=="Deleted"&&(d={type:"Disposed"})});let I=()=>{let $=a.tabLeaderPortStore.get();if(d.type==="Refused"||d.type==="Deleted"||!$)return;let H=p,J=a.createMessageChannel(),K=J.port2;K.onMessage=G=>{switch(G.type){case"LeaderAcquired":{let z=d;if(z.type==="Leading"&&Ec(z.port,K),H!==p||z.type==="Deleted"){K.postMessage({type:"Discard"}),K[Symbol.dispose]();break}if(z.type==="Refused"||z.type==="Disposed"){K.postMessage({type:"Dispose"}),K[Symbol.dispose]();break}z.type==="Leading"&&z.port[Symbol.dispose]();let oe=z.type==="Leading"||z.type==="Replacing"?z:null;d={type:"Leading",port:K,clock:B(oe?.clock??null,G.clock),activeDispatch:null},oe&&(T(),me(new Set(O().map(({ownerId:re})=>re)),Ci)),l.info("leaderAcquired"),m.resolve(),D();break}case"LeaderRefused":{if(l.info("leaderRefused",G.error),d.type==="Refused"||d.type==="Deleted"||H!==p){K[Symbol.dispose]();break}d.type==="Leading"&&d.port!==K&&(d.port.postMessage({type:"Dispose"}),d.port[Symbol.dispose]()),K[Symbol.dispose]();for(let z of y)z.type==="Read"&&z.request.message.type==="DeleteOwner"&&f.get(z.request.id)?.port.postMessage({type:"OnDeleteOwnerFailed",error:G.error});y.length=0,b.clear(),x.clear(),w.clear(),C.clear(),d={type:"Refused",error:G.error},a.publishSyncState();for(let z of f.values())v(z.tabPort,G.error);m.resolve();break}case"DatabaseDeleted":{if(K[Symbol.dispose](),d.type==="Disposed"){d={type:"Deleted"};break}if(d.type==="Refused")break;let z=d;M(z.type==="Leading"&&z.port===K&&z.activeDispatch?.entry.type==="Read"&&z.activeDispatch.entry.request.message.type==="DeleteDatabase","Only the leader deletes, when the deletion is dispatched."),y.length=0,b.clear(),x.clear(),w.clear(),C.clear(),d={type:"Deleted"},l.info("databaseDeleted");for(let oe of[...f.values()])oe.port.postMessage({type:"OnDatabaseDeleted"}),oe[Symbol.asyncDispose]();break}case"OnQueuedResponse":{let z=d;if(z.type!=="Leading"||z.activeDispatch?.attemptId!==G.attemptId)return;let{entry:oe}=z.activeDispatch,{response:re}=G;switch((re.message.type==="Mutate"||re.message.type==="ApplySyncMessage")&&(z.clock=B(z.clock,re.message.clock)),oe.type){case"Read":case"Write":So(re.type,"ForEvolu"),P(re,oe.request);break;case"CreateSyncMessages":case"ApplySyncMessage":So(re.type,"ForSharedWorker"),_(re,oe);break;default:nt(oe)}let ue=y.shift();ke(ue),L(ue,-1),z.activeDispatch=null,re.message.type==="DeleteDatabaseFailed"&&(K[Symbol.dispose](),d={type:"Replacing",clock:z.clock},I()),re.message.type==="DeleteOwnerFailed"&&oe.type==="Read"&&oe.request.message.type==="DeleteOwner"&&me(new Set([oe.request.message.ownerId]),Ci),A(),oe.type==="Write"&&oe.replicatedOwnerIds.size>0&&a.publishSyncState(),D();break}default:nt(G)}},$.postMessage({type:"DbWorkerInit",name:c,consoleLevel:p.consoleLevel,sqliteSchema:p.sqliteSchema,encryptionKey:p.encryptionKey,memoryOnly:p.memoryOnly,sharedWorkerId:r,port:J.port1.native},[J.port1.native])},B=($,H)=>{let J={...H,nodeId:p.nodeId};return $&&Si(J,$)<=0?$:J},T=$=>{for(let[H,J]of f)H!==$&&J.port.postMessage({type:"RefreshQueries"})},S=($,H,J)=>{let K=($.get(H)??0)+J;M(K>=0,"Pending queue count must not become negative"),K===0?$.delete(H):$.set(H,K)},L=($,H)=>{switch($.type){case"Read":$.request.message.type==="DeleteOwner"&&S(w,$.request.message.ownerId,H);break;case"CreateSyncMessages":break;case"Write":for(let J of $.replicatedOwnerIds)S(b,J,H);break;case"ApplySyncMessage":{let J=$.request.message.owner.id;$.source.type==="Local"?S(x,J,H):H===1?C.increment(J,$.source.key):C.decrement(J,$.source.key);break}default:nt($)}},k=$=>{L($,1),y.push($)},v=($,H)=>{E.has($)||(E.add($),$.postMessage({type:"Error",error:H}))},D=()=>{if(d.type!=="Leading"||d.activeDispatch||!ut(y))return;let $=Mr(y),H=xt(o.deps);d.activeDispatch={entry:$,attemptId:H},$.type==="Write"||$.type==="ApplySyncMessage"?($.capturedInputs??={clock:d.clock,now:o.deps.time.now()},d.port.postMessage({type:"Request",attemptId:H,request:$.request,...$.capturedInputs})):d.port.postMessage({type:"Request",attemptId:H,request:$.request})},P=($,H)=>{let J=f.get($.id);switch($.message.type){case"Mutate":case"Query":{if(J){let K=new Map;for(let[G,z]of $.message.rowsByQuery){if(!z.ok){K.set(G,z);continue}K.set(G,g(ey(J.rowsByQuery.get(G),z.value))),J.rowsByQuery.set(G,z.value)}J.port.postMessage({type:"OnPatchesByQuery",patchesByQuery:K,onCompleteIds:H.message.type==="Mutate"?H.message.onCompleteIds:at})}if($.message.type==="Mutate"){T($.id);let K=new Map,G=ne(new Set($.message.messagesByOwnerId.keys()));for(let[z,oe]of $.message.messagesByOwnerId){let re=G.get(z);re&&(Z(z,Ci)&&K.set(z,Fm(o.deps)(re,oe)),[...e].some(([ue,ie])=>ue!==c&&ie.isApplyingOwner(z))&&W(z,zm(o.deps)(re,oe),Ci))}Q(K,Ci)}break}case"MutateFailed":{let{error:K}=$.message;J?(So(H.message.type,"Mutate"),J.tabPort.postMessage({type:"Error",error:K}),J.port.postMessage({type:"OnMutateFailed",onCompleteIds:H.message.onCompleteIds})):a.postConsoleEntryOrError({type:"Error",error:K});break}case"Export":J?.port.postMessage({type:"OnExport",file:$.message.file},[$.message.file.buffer]);break;case"ExportFailed":J?.port.postMessage({type:"OnExportFailed",error:$.message.error});break;case"DeleteDatabaseFailed":J?.port.postMessage({type:"OnDeleteDatabaseFailed",error:$.message.error});break;case"OwnerDeleted":{So(H.message.type,"DeleteOwner");let{ownerId:K}=H.message;for(let{ownerRegistrations:G,ownerIdByQueuedRegistrationId:z}of f.values()){for(let[oe,{syncOwner:re,lease:ue}]of G)re.owner.id===K&&(ue?.release(),G.delete(oe));for(let[oe,re]of z)re===K&&z.delete(oe)}a.refreshAllSyncRoutes(),a.publishSyncState(),T();for(let[G,{port:z}]of f)z.postMessage({type:"OnOwnerDeleted",ownerId:K,isAnswer:G===$.id});break}case"DeleteOwnerFailed":J?.port.postMessage({type:"OnDeleteOwnerFailed",error:$.message.error});break;default:nt($.message)}},F=($,H)=>R.getOrInsertComputed(H,()=>new Map).getOrInsertComputed($,()=>({progress:{type:"Pending",roundRequired:!0,failure:null,skip:null,completeAt:null},lastSentAt:null,lastReceivedAt:null})),O=()=>{let $=new Map;for(let H of f.values())for(let{syncOwner:{owner:J}}of H.ownerRegistrations.values()){let K=$.get(J.id)??{writable:!1};K.writable||="writeKey"in J,$.set(J.id,K)}return[...$].map(([H,{writable:J}])=>({ownerId:H,writable:J,transportKeys:U(H)}))},A=()=>{let $=O(),H=new Map($.map(J=>[J.ownerId,J]));for(let[J,K]of R){for(let G of K.keys()){let z=H.get(G);(!z?.writable||!z.transportKeys.includes(J))&&K.delete(G)}K.size===0&&R.delete(J)}for(let{ownerId:J,writable:K,transportKeys:G}of $)if(K)for(let z of G){let oe=F(J,z),re=Z(J,{type:"Transport",key:z}),ue=x.has(J)||C.getCount(J,z)>0,ie=b.has(J),Qt=re&&!a.syncRequests.hasOutstanding(J,z)&&!ue&&!ie&&!w.has(J),Ot=pc(oe.progress);oe.progress=!Qt||Ot.roundRequired?Ot:Ot.skip&&!Ot.skip.isRechecking?{type:"Settled",skippedError:Ot.skip.error,completeAt:Ot.completeAt}:oe.progress.type==="Complete"?oe.progress:{type:"Complete",completeAt:a.time.now()}}},_=($,H)=>{switch(H.type){case"CreateSyncMessages":{So($.message.type,"CreateSyncMessages"),Q($.message.protocolMessagesByOwnerId,H.target,{isRound:!0});let{failedOwnerIds:J}=$.message;if(J.size===0)break;let K=a.time.now();for(let G of J)a.transports.forEachResourceForClaim(G,(z,oe)=>{if(!dc(H.target,oe))return;let re=R.get(Gt(oe))?.get(G);re&&(re.progress=yS(re.progress,{type:"SyncFailed",at:K}))});a.publishSyncState();break}case"ApplySyncMessage":{So($.message.type,"ApplySyncMessage");let{source:J}=H,K=J.type==="Local"?J.uploadTarget:J,{ownerId:G,result:z}=$.message,oe=z.ok?null:z.error,{skippedError:re}=$.message,ue=null;if(oe!==null?ue=oe:z.ok&&z.value.type==="Failed"&&(ue={type:z.value.cause==="Write"?"WriteFailed":"SyncFailed"}),J.type==="Transport"){let ie=R.get(J.key)?.get(G);if(ie){let Qt=a.time.now();if(ie.lastReceivedAt=Qt,re!==null&&(ie.progress={...pc(ie.progress),skip:{error:ny(re,Qt),isRechecking:!1}}),ue!==null){let Ot=ie.progress.type!=="Pending"||ie.progress.failure===null;ie.progress=yS(ie.progress,ny(ue,Qt)),Ot&&me(new Set([G]),J)}}}else if(ue!==null||re!==null){let ie=oe!==null?ue:re;ie!==null&&a.postConsoleEntryOrError({type:"Error",error:ht(ny(ie,a.time.now()))}),j(G,{except:null,afterQueuedWrites:!0})}if($.message.didWriteMessages&&(T(),j(G,{except:K,afterQueuedWrites:!1})),z.ok)switch(z.value.type){case"Response":z.value.broadcast&&W(G,[z.value.broadcast],K),Q(new Map([[G,z.value.message]]),K);break;case"Broadcast":case"Converged":case"Readonly":case"Failed":break;default:nt(z.value)}a.publishSyncState();break}default:nt(H)}},W=($,H,J)=>{for(let[K,G]of e)if(K!==c)for(let z of H)G.requestApplySyncMessage($,z,{type:"Local",uploadTarget:J},!0)},Q=($,H,{isRound:J=!1}={})=>{for(let[K,G]of $)a.transports.forEachResourceForClaim(K,(z,oe)=>{if(!dc(H,oe)||!z.isOpen())return;l.debug("sendProtocolMessage",{ownerId:K,url:oe.url,byteLength:G.byteLength});let re=Gt(oe);a.syncRequests.send(K,re,G,c);let ue=F(K,re);ue.lastSentAt=a.time.now(),J&&(ue.progress={...pc(ue.progress),roundRequired:!1})});$.size>0&&a.refreshAllSyncRoutes()},j=($,{except:H,afterQueuedWrites:J})=>{let K=[];a.transports.forEachResourceForClaim($,(G,z)=>{if(H&&dc(H,z))return;let oe=Gt(z),re=R.get(oe)?.get($);if(re?.progress.type!=="Settled"){if(re?.progress.type==="Pending"&&re.progress.skip){re.progress={...re.progress,skip:{...re.progress.skip,isRechecking:!1}};return}K.push(oe)}});for(let G of K)me(new Set([$]),{type:"Transport",key:G},{afterQueuedWrites:J})},U=$=>[...a.transports.getResourceKeysForClaim($)].map(Gt),Z=($,H)=>{let J=!1;return a.transports.forEachResourceForClaim($,(K,G)=>{dc(H,G)&&K.isOpen()&&(J=!0)}),J},ne=$=>{let H=new Map;for(let J of f.values())for(let{syncOwner:{owner:K}}of J.ownerRegistrations.values())!$.has(K.id)||!("writeKey"in K)||H.set(K.id,K);return H},Ne=$=>d.type==="Refused"||w.has($)?void 0:ne(new Set([$])).get($),me=($,H,{afterQueuedWrites:J=!0}={})=>{if(d.type==="Refused")return;let K=ne(new Set([...$].filter(ie=>!w.has(ie))));for(let ie of K.keys())a.transports.forEachResourceForClaim(ie,(Qt,Ot)=>{if(!dc(H,Ot))return;let eo=F(ie,Gt(Ot)),Fd=pc(eo.progress);eo.progress={...Fd,roundRequired:!0,skip:Fd.skip&&{...Fd.skip,isRechecking:!0}}});A(),a.publishSyncState();let G=[...K.values()].filter(({id:ie})=>Z(ie,H));if(!ut(G))return;let z=new Set(G.map(({id:ie})=>ie)),oe=J?y.findLastIndex(({type:ie})=>ie==="Write"||ie==="ApplySyncMessage"):-1,re=d.type==="Leading"?d.activeDispatch?.entry:void 0,ue=y.some((ie,Qt)=>Qt>oe&&ie!==re&&ie.type==="CreateSyncMessages"&&(ie.target.type==="AllTransports"||H.type==="Transport"&&ie.target.key===H.key)&&ie.request.message.owners.length===z.size&&ie.request.message.owners.every(({id:Ot})=>z.has(Ot)));l.debug("requestCreateSyncMessages",{ownerIds:[...z],target:H,isQueued:ue}),!ue&&(k({type:"CreateSyncMessages",request:{type:"ForSharedWorker",message:{type:"CreateSyncMessages",owners:G}},target:H}),D())},ve=($,H)=>async J=>{if(H.action==="add"){let{id:K,owner:G}=H;if(!$.ownerIdByQueuedRegistrationId.delete(K))return g();let z=G.owner.id,oe="writeKey"in G.owner&&!ne(new Set([z])).has(z),re=U(z),ue={syncOwner:G,lease:null};$.ownerRegistrations.set(K,ue),A();try{let ie=await J.ok(a.transports.claim(z,G.transports));if($.ownerRegistrations.get(K)!==ue)return ie.release(),a.publishSyncState(),g();ue.lease=ie}finally{ue.lease===null&&$.ownerRegistrations.get(K)===ue&&$.ownerRegistrations.delete(K),a.refreshAllSyncRoutes()}if(oe)for(let ie of re)me(new Set([z]),{type:"Transport",key:ie})}else{let K=$.ownerRegistrations.get(H.id);if(!K)return g();ke(K.lease),K.lease.release(),$.ownerRegistrations.delete(H.id)}return a.refreshAllSyncRoutes(),a.publishSyncState(),g()};s.defer(a.tabLeaderPortStore.subscribe(I)),I(),a.tabLeaderPortStore.get()&&await m.promise,s.defer(()=>{e.delete(c),a.publishSyncState()});let Ke=it({getSyncTenant:()=>d.type==="Refused"?{type:"Refused",name:c,error:d.error}:{type:"Active",name:c,owners:O().map(({ownerId:$,writable:H,transportKeys:J})=>H?{type:"Writable",ownerId:$,routes:J.map(K=>{let G=R.get(K)?.get($);to(G);let z=a.getSyncTransportId(K),{progress:oe,lastSentAt:re,lastReceivedAt:ue}=G;return oe.type==="Pending"?{type:"Pending",transportId:z,failure:oe.failure,skippedError:oe.skip?.error??null,completeAt:oe.completeAt,lastSentAt:re,lastReceivedAt:ue}:(ke(re),oe.type==="Complete"?{type:"Complete",transportId:z,completeAt:oe.completeAt,lastSentAt:re,lastReceivedAt:ue}:(ke(ue),{type:"Settled",transportId:z,skippedError:oe.skippedError,completeAt:oe.completeAt,lastSentAt:re,lastReceivedAt:ue}))})}:{type:"Readonly",ownerId:$,transportIds:J.map(a.getSyncTransportId)})},isApplyingOwner:$=>Ne($)!==void 0,refreshSyncRoutes:A,addInstance:($,H,J)=>{d.type==="Deleted"&&(p=h($),l.setLevel(p.consoleLevel),d={type:"Starting"},I());let K=new AsyncDisposableStack,G={id:$.id,ownerRegistrations:new Map,ownerIdByQueuedRegistrationId:new Map,port:a.createMessagePort($.evoluPort),tabPort:H,rowsByQuery:new Map,[Symbol.asyncDispose]:()=>K.disposeAsync()};f.set(G.id,G),K.defer(J),K.defer(()=>{for(let{lease:re}of G.ownerRegistrations.values())re?.release();G.ownerRegistrations.clear(),a.refreshAllSyncRoutes(),a.publishSyncState()});let z=K.use(i.create()),oe=zn();K.defer(()=>{f.delete(G.id),A(),l.info("evoluDispose",{name:c,id:G.id})}),K.use(G.port),K.defer(()=>{G.port.onMessage=null}),z.abortable(Ro($.id)).then(re=>{if(re.ok)return K.use(re.value),G[Symbol.asyncDispose]()}),G.port.onMessage=re=>{if(d.type==="Refused"){re.type==="DeleteOwner"&&G.port.postMessage({type:"OnDeleteOwnerFailed",error:d.error});return}switch(re.type){case"Query":case"Export":case"DeleteDatabase":case"DeleteOwner":{k({type:"Read",request:{type:"ForEvolu",id:G.id,message:re}}),re.type==="DeleteOwner"&&(A(),a.publishSyncState()),D();break}case"Mutate":{let ue=new Set;for(let ie of re.changes)kn(ie.table)||ue.add(ie.ownerId);k({type:"Write",request:{type:"ForEvolu",id:G.id,message:re},replicatedOwnerIds:ue}),ue.size>0&&(A(),a.publishSyncState()),D();break}case"UseOwner":{for(let ue of re.actions)ue.action==="add"&&G.ownerIdByQueuedRegistrationId.set(ue.id,ue.owner.owner.id);z(oe.withLock(async ue=>{for(let ie of re.actions)switch(ie.action){case"sync":l.debug("requestSync",{id:G.id,ownerId:ie.ownerId}),me(new Set([ie.ownerId]),Ci);break;case"add":l.debug("useOwner",{id:G.id,action:ie.action,registrationId:ie.id,ownerId:ie.owner.owner.id,transportUrls:ie.owner.transports.map(({url:Qt})=>Qt)}),await ue(ve(G,ie));break;case"remove":l.debug("useOwner",{id:G.id,action:ie.action,registrationId:ie.id}),await ue(ve(G,ie));break;default:nt(ie)}return g()}));break}default:nt(re)}},d.type==="Refused"&&v(G.tabPort,d.error)},requestCreateSyncMessages:me,requestApplySyncMessage:($,H,J,K)=>{let G=Ne($);if(!G)return;l.debug("requestApplySyncMessage",{ownerId:$,source:J,byteLength:H.byteLength}),k({type:"ApplySyncMessage",request:{type:"ForSharedWorker",message:{type:"ApplySyncMessage",owner:G,inputMessage:H,continues:K}},source:J}),A(),a.publishSyncState(),D()}},s);return e.set(c,Ke),a.publishSyncState(),g(Ke)}catch(s){n.error=s,n.hasError=!0}finally{let s=Rd(n);s&&await s}};var _I={};ky(_I,{AbortError:()=>Cr,AbortReason:()=>I0,Age:()=>BT,AppName:()=>$d,ArrayBuffer:()=>Qp,Base64:()=>hw,Base64Url:()=>ca,BigInt:()=>Qc,Boolean:()=>xs,BooleanFromString:()=>pE,BufferError:()=>Re,ByteLength:()=>Nh,ByteLengthFromString:()=>O1,ByteSizeLiteral:()=>IN,ByteSizeLiteralBytes:()=>EN,ByteSizeLiteralGiB:()=>CN,ByteSizeLiteralKiB:()=>TN,ByteSizeLiteralMiB:()=>ON,ByteSizeLiteralTiB:()=>AN,CamelCaseIdentifier:()=>Ns,CamelCaseIdentifierFromConstantCaseIdentifier:()=>qE,CapitalizedString:()=>jE,ConstantCaseIdentifier:()=>sa,Data:()=>Up,DatabaseFileHeldError:()=>AS,Date:()=>Kp,DateIso:()=>Oo,DateIsoFromDate:()=>vE,DateIsoFromRfc3339:()=>EE,DecimalString:()=>pf,Digit:()=>de,Digit1To23:()=>ll,Digit1To51:()=>ul,Digit1To59:()=>Es,Digit1To6:()=>cl,Digit1To9:()=>fe,Digit1To99:()=>Ln,DurationLiteral:()=>TO,DurationLiteralDays:()=>d0,DurationLiteralHours:()=>u0,DurationLiteralMilliseconds:()=>a0,DurationLiteralMinutes:()=>l0,DurationLiteralSeconds:()=>c0,DurationLiteralWeeks:()=>p0,DurationLiteralYears:()=>f0,Email:()=>sT,EncryptionKey:()=>Ef,Entropy16:()=>ml,Entropy20:()=>kf,Entropy24:()=>Sf,Entropy28:()=>vf,Entropy32:()=>yl,Entropy64:()=>NO,EnvName:()=>ay,EvoluType:()=>oa,FibonacciIndex:()=>Uf,FiniteNumber:()=>rn,FiniteNumberFromString:()=>CT,Function:()=>hE,Hex:()=>gw,HexColor:()=>nT,Hostname:()=>iT,HttpUrl:()=>Sw,HttpUrlFromString:()=>lT,Iban:()=>dT,Id:()=>co,IdBytes:()=>sf,Int:()=>on,Int32:()=>$T,Int64:()=>Yx,Int64FromInt64String:()=>vT,Int64String:()=>Tw,IntFromString:()=>Dw,IpAddress:()=>Nw,IpAddressFromString:()=>cT,Ipv4Address:()=>Zp,Ipv6Address:()=>ef,Ipv6AddressFromString:()=>aT,Isbn:()=>pT,Json:()=>Mn,JsonArray:()=>gO,JsonObject:()=>bO,JsonValue:()=>ma,JsonValueFromJson:()=>xO,KebabCaseIdentifier:()=>RE,LeancasedString:()=>lI,LowercasedString:()=>VE,Millis:()=>zt,Mnemonic:()=>hT,Name:()=>ww,NegativeDecimalString:()=>LT,NegativeInt:()=>IT,NegativeNumber:()=>TT,Never:()=>dE,NonEmptyTrimmedString:()=>tl,NonEmptyTrimmedString100:()=>aa,NonEmptyTrimmedString1000:()=>ZE,NonNaNNumber:()=>vs,NonNegativeDecimalString:()=>Ww,NonNegativeFiniteNumber:()=>da,NonNegativeInt:()=>Ee,NonNegativeNumber:()=>Ow,NonPositiveDecimalString:()=>$w,NonPositiveInt:()=>Bw,NonPositiveNumber:()=>Cw,Null:()=>na,Number:()=>ra,Object:()=>nO,OwnerEncryptionKey:()=>Wl,OwnerId:()=>Ws,OwnerIdBytes:()=>oN,OwnerSecret:()=>ql,OwnerWriteKey:()=>Ll,PascalCaseIdentifier:()=>AE,PercentageLiteral:()=>PO,PhoneNumberE164:()=>uT,PlainDateIso:()=>SE,Port:()=>Mw,PortFromString:()=>MT,PositiveDecimalString:()=>WT,PositiveFiniteNumber:()=>OT,PositiveInt:()=>Jt,PositiveMillis:()=>As,PositiveNumber:()=>ET,QuarantineOrigin:()=>Sn,QuarantineReason:()=>Dr,Ratio:()=>PT,RelayUrl:()=>dh,RelayUrlFromString:()=>dN,SimplePassword:()=>fT,SnakeCaseIdentifier:()=>IE,SqliteBoolean:()=>un,SqliteIndex:()=>DN,SqliteQueryParameters:()=>kh,SqliteSchema:()=>I1,SqliteValue:()=>Yl,String:()=>Y,Symbol:()=>fE,TestProjectId:()=>Ei,TestTodoId:()=>rc,TimeoutError:()=>TC,Timestamp:()=>Sm,TrimmedString:()=>lw,UInt32:()=>UT,UInt64:()=>TE,Uint8Array:()=>pt,Uint8ArrayFromBase64:()=>rT,Uint8ArrayFromBase64Url:()=>tT,Uint8ArrayFromHex:()=>oT,Ulid:()=>NT,UncapitalizedString:()=>FE,Undefined:()=>Jp,Unknown:()=>ir,UnknownError:()=>LC,UnknownNextResult:()=>dO,UnknownResult:()=>xf,UppercasedString:()=>zE,Url:()=>ua,UrlFromString:()=>rf,UrlSafeString:()=>ol,Uuid:()=>cf,UuidV4:()=>xT,UuidV7:()=>wT,ValidDate:()=>mE,WebSocketUrl:()=>Dl,WebSocketUrlFromString:()=>sh,WellFormedString:()=>KE,XChaCha20Poly1305Ciphertext:()=>kO,acquireLeaderLock:()=>Ro,acquireLeaderLockCallback:()=>ka,acquireUseRelease:()=>MC,addDelay:()=>YC,addToSet:()=>hC,all:()=>SC,allResult:()=>Ov,allSettled:()=>vC,always:()=>KC,any:()=>CC,anyResult:()=>Cv,appendToArray:()=>Tc,array:()=>fa,arrayFrom:()=>fv,arrayFromAsync:()=>hv,assert:()=>M,assertConditionAfterMicrotasks:()=>tp,assertContinuationAfterMicrotasks:()=>Cy,assertEqual:()=>Dy,assertEqualBytes:()=>By,assertErr:()=>ep,assertFalse:()=>Oy,assertInstanceOf:()=>Ay,assertLength:()=>Ry,assertNonEmptyArray:()=>vc,assertNonEmptyReadonlyArray:()=>ko,assertNonNullable:()=>ke,assertNotDisposed:()=>Go,assertNotEqual:()=>My,assertNotNull:()=>Iy,assertNotSame:()=>Ec,assertNotUndefined:()=>to,assertOk:()=>Zd,assertRejects:()=>Sc,assertRejectsInstanceOf:()=>Xd,assertRejectsSame:()=>Yd,assertSame:()=>So,assertThrows:()=>kc,assertThrowsInstanceOf:()=>Gd,assertThrowsSame:()=>Hd,assertTrue:()=>Ty,assertType:()=>Ut,base64ToUint8Array:()=>yw,base64UrlToUint8Array:()=>la,between:()=>pa,betweenBigInt:()=>_T,booleanToSqliteBoolean:()=>Oh,brand:()=>V,byteSizeToByteLength:()=>RN,bytesToHex:()=>Kn,bytesToUtf8:()=>NN,callback:()=>Io,camelCaseToConstantCase:()=>Yc,camelCaseToKebabCase:()=>DE,camelCaseToPascalCase:()=>Hc,camelCaseToSnakeCase:()=>Gc,capitalize:()=>tw,capitalized:()=>ew,clamp:()=>WO,clampBigInt:()=>GA,collectAllScheduleOutputs:()=>Rl,collectScheduleInputs:()=>n1,collectUntilScheduleOutput:()=>i1,collectWhileScheduleOutput:()=>s1,compensate:()=>XC,computeBalancedBuckets:()=>$f,concatArrays:()=>gv,concatByteArrays:()=>gh,concatBytes:()=>S1,constFalse:()=>uv,constNull:()=>dv,constTrue:()=>ls,constUndefined:()=>Py,constVoid:()=>Sr,constant:()=>Li,constantCaseToCamelCase:()=>Yp,constantCaseToKebabCase:()=>UE,constantCaseToPascalCase:()=>$E,constantCaseToSnakeCase:()=>Xp,createAbortError:()=>Rs,createAppOwner:()=>uh,createBroadcastChannel:()=>PS,createBuffer:()=>mt,createCallbacks:()=>iy,createConsole:()=>an,createConsoleArrayOutput:()=>g0,createConsoleFormatter:()=>IO,createConsoleStoreOutput:()=>Df,createDeferred:()=>vl,createEqArrayLike:()=>Qd,createEqObject:()=>Wi,createEvolu:()=>xy,createGate:()=>PC,createId:()=>xt,createIdAsUuidv7:()=>yT,createIdFromString:()=>Wn,createIdenticon:()=>cI,createLeakDetector:()=>Mf,createLookupMap:()=>Vt,createLookupSet:()=>jn,createLruCache:()=>XA,createMessageChannel:()=>qd,createMessagePort:()=>MS,createMicrotaskBatch:()=>fc,createMultiOutput:()=>RO,createMutableArray:()=>kt,createMutableRecord:()=>pe,createMutex:()=>zn,createMutexByKey:()=>Na,createMutexRef:()=>WC,createNativeConsoleOutput:()=>y0,createNativeSqliteDriver:()=>vI,createObjectURL:()=>rv,createOrder:()=>md,createOwnerSecret:()=>ah,createOwnerWebSocketTransport:()=>pN,createOwnerWriteKey:()=>nN,createPadmePaddedLength:()=>o0,createPadmePadding:()=>Tf,createPanicAbortReason:()=>B0,createQueryBuilder:()=>Bm,createRandom:()=>Ff,createRandomBytes:()=>$n,createRandomLib:()=>fC,createRedacted:()=>Tp,createRef:()=>ga,createRefCount:()=>RS,createRefCountByKey:()=>hy,createRefCountedRelation:()=>Sa,createRelation:()=>N1,createResettableResource:()=>k1,createRun:()=>El,createRunDefaultDeps:()=>M0,createRunLengthEncoder:()=>_l,createSemaphore:()=>eh,createSemaphoreByKey:()=>V0,createSet:()=>_f,createShardOwner:()=>aN,createSharedOwner:()=>lN,createSharedReadonlyOwner:()=>uN,createSharedResource:()=>rN,createSharedResourceByKey:()=>Ml,createSharedResourceByKeyWithClaims:()=>ih,createSharedWorker:()=>AI,createSlip21:()=>Os,createSqlite:()=>Xl,createStore:()=>Ao,createTime:()=>ba,createType:()=>$r,createTypeWithError:()=>Pn,createUnknownError:()=>ht,createWebSocket:()=>y1,createWorker:()=>BS,createXChaCha20Poly1305:()=>ya,daemon:()=>BC,decodeFlags:()=>xh,decodeJsonValue:()=>Jl,decodeLength:()=>Lo,decodeNonNegativeInt:()=>Zt,decodeNumber:()=>Vl,decodeRle:()=>Kl,decodeString:()=>Da,decrement:()=>Lf,decrementBigInt:()=>HA,decryptWithXChaCha20Poly1305:()=>r0,dedupeArray:()=>sp,defectToError:()=>ln,delayed:()=>GC,delays:()=>o1,deleteFromSet:()=>mC,deriveShardOwner:()=>cN,deriveSlip21Node:()=>t0,discriminatedUnion:()=>wf,disposable:()=>it,done:()=>ct,durationToMillis:()=>ft,during:()=>_C,each:()=>Ms,elapsed:()=>Q0,emptyArray:()=>at,emptyPrototype:()=>vy,emptyRecord:()=>Bi,emptySet:()=>Vf,encodeFlags:()=>bh,encodeJsonValue:()=>Ql,encodeLength:()=>Wo,encodeNonNegativeInt:()=>_e,encodeNumber:()=>zl,encodeString:()=>Ra,encryptWithXChaCha20Poly1305:()=>SO,endsWith:()=>GE,env:()=>ZA,eqArrayNumber:()=>is,eqArraySameValue:()=>Jd,eqBigInt:()=>ov,eqBoolean:()=>nv,eqData:()=>as,eqFromOrder:()=>av,eqNull:()=>iv,eqNumber:()=>Pi,eqSameValue:()=>$t,eqSameValueZero:()=>Kd,eqSqliteIndex:()=>Zl,eqSqliteValue:()=>Sh,eqString:()=>ss,eqUint8Array:()=>Nc,eqUndefined:()=>sv,err:()=>N,escapeRegExp:()=>aE,evoluJsonArrayFrom:()=>Ym,evoluJsonBuildObject:()=>Zm,evoluJsonObjectFrom:()=>Xm,excludeProp:()=>tv,excludes:()=>XE,exhaustiveCheck:()=>nt,explicitAbortReason:()=>Qf,exponential:()=>Ol,fetch:()=>tI,fibonacci:()=>jC,fibonacciAt:()=>jf,filterArray:()=>np,filterObjectKeys:()=>Vd,filterSet:()=>gC,finite:()=>Iw,firstInArray:()=>Mr,firstInSet:()=>bC,firstN:()=>AC,firstNSettled:()=>IC,fixed:()=>FC,flatMapArray:()=>yv,flatMapResult:()=>vo,fnv1a32:()=>Sp,foldSchedule:()=>oh,forever:()=>th,formatMillisAsClockTime:()=>Rf,formatMillisAsDuration:()=>If,fromDelay:()=>K0,fromDelays:()=>VC,fromNullable:()=>UO,getJsonObjectArgs:()=>Ad,getObjectKind:()=>Ho,getOk:()=>$i,getOrNull:()=>us,getOrThrow:()=>qi,getOwnProp:()=>Mi,getSqliteSchema:()=>eu,getSqliteSnapshot:()=>R1,greaterThan:()=>RT,greaterThanBigInt:()=>jT,greaterThanOrEqualTo:()=>DT,greaterThanOrEqualToBigInt:()=>FT,hasNodeBuffer:()=>qc,hexToBytes:()=>Ia,hexToUint8Array:()=>xw,id:()=>ks,idBytesToId:()=>Ur,idBytesTypeValueLength:()=>af,idToIdBytes:()=>lr,idToUlid:()=>ST,idToUuid:()=>bT,identifier:()=>ws,identity:()=>ye,includes:()=>YE,increment:()=>uo,incrementBigInt:()=>JA,instance:()=>cE,instanceOf:()=>yE,int:()=>Rw,intersectSchedules:()=>a1,isBetween:()=>LO,isBetweenBigInt:()=>YA,isDev:()=>Lc,isDisposable:()=>lv,isErr:()=>Tv,isFunction:()=>Ri,isHermes:()=>Sg,isInstance:()=>Cp,isIterable:()=>wc,isNonEmptyArray:()=>ut,isNonEmptySet:()=>Kf,isNone:()=>$O,isOk:()=>Ev,isPlainObject:()=>$e,isPromiseLike:()=>Ap,isRedacted:()=>Op,isServer:()=>oE,isSome:()=>qO,jitter:()=>Il,json:()=>wO,jsonToJsonValue:()=>Nf,jsonValueToJson:()=>e0,kebabCaseToCamelCase:()=>Zx,kebabCaseToConstantCase:()=>LE,kebabCaseToPascalCase:()=>WE,kebabCaseToSnakeCase:()=>Gp,kyselySql:()=>qt,lastInArray:()=>Sv,lazy:()=>pO,leancase:()=>TS,leancased:()=>ES,length:()=>Or,lessThan:()=>al,lessThanBigInt:()=>zT,lessThanOrEqualTo:()=>nn,lessThanOrEqualToBigInt:()=>VT,linear:()=>UC,literal:()=>ar,localizeTypes:()=>uE,lowercase:()=>aw,lowercased:()=>iw,map:()=>_w,mapArray:()=>vr,mapObject:()=>Di,mapSchedule:()=>G0,mapSet:()=>yC,max:()=>qf,maxDelay:()=>Al,maxElapsed:()=>JC,maxEntries:()=>iO,maxLength:()=>ia,maxMillis:()=>i0,maxMutationSize:()=>bc,maxPositiveInt:()=>AT,maxSize:()=>oO,maxUtf8ByteLength:()=>eT,millisToDateIso:()=>Is,min:()=>xl,minEntries:()=>sO,minLength:()=>pw,minMillis:()=>ur,minSize:()=>rO,mnemonicToOwnerSecret:()=>sN,modifyDelay:()=>J0,ms120fps:()=>CO,ms60fps:()=>OO,msLongTask:()=>AO,multipleOf:()=>qT,negative:()=>df,negativeDecimalString:()=>Uw,nextResult:()=>Yw,nonEmptyArray:()=>YT,nonNaN:()=>Aw,nonNegative:()=>il,nonNegativeDecimalString:()=>Pw,nonPositive:()=>uf,nonPositiveDecimalString:()=>qw,none:()=>Nl,noopLeakDetector:()=>gl,normalize:()=>JE,normalized:()=>QE,nullOr:()=>ao,nullableToOptional:()=>lO,nullishOr:()=>bE,object:()=>bt,objectFrom:()=>ev,objectFromEntries:()=>zd,objectKeys:()=>gf,objectTag:()=>Jc,objectToEntries:()=>kr,ok:()=>g,omit:()=>uO,once:()=>qC,onePositiveInt:()=>Ft,optional:()=>Hw,orderBigInt:()=>gA,orderNumber:()=>yd,orderString:()=>bm,orderUint8Array:()=>xm,ownerIdBytesToOwnerId:()=>Do,ownerIdToOwnerIdBytes:()=>jr,ownerSecretToMnemonic:()=>lh,ownerWriteKeyLength:()=>Pl,parseOwnerIdFromOwnerWebSocketTransportUrl:()=>fN,partial:()=>cO,partitionArray:()=>bv,pascalCaseToCamelCase:()=>Xx,pascalCaseToConstantCase:()=>ME,pascalCaseToKebabCase:()=>BE,pascalCaseToSnakeCase:()=>Hp,passthrough:()=>Y0,percentageToRatio:()=>Wf,performanceDurationBetween:()=>lo,positive:()=>Ss,positiveDecimalString:()=>Lw,prefixed:()=>HE,prependToArray:()=>mv,prioritized:()=>RC,race:()=>j0,record:()=>Co,recurs:()=>$C,redacted:()=>mT,regex:()=>rl,relayHeartbeatInterval:()=>va,repeat:()=>OC,repetitions:()=>r1,reportDefectAfterMicrotask:()=>Hf,resetScheduleAfter:()=>t1,result:()=>bf,retry:()=>Zf,retryStrategyAws:()=>p1,retryWhileHeld:()=>IS,revealRedacted:()=>$c,reverseArray:()=>wv,reverseOrder:()=>yA,runDisposedAbortReason:()=>R0,safelyStringifyUnknownValue:()=>q,saturateMillis:()=>dr,sequenceSchedules:()=>X0,set:()=>hf,shareStructure:()=>_d,sleep:()=>cn,snakeCaseToCamelCase:()=>Xc,snakeCaseToConstantCase:()=>el,snakeCaseToKebabCase:()=>Zc,snakeCaseToPascalCase:()=>PE,some:()=>wl,sortArray:()=>xv,spaced:()=>_0,spliceArray:()=>Nv,sql:()=>te,sqliteBooleanToBoolean:()=>Ba,sqliteFalse:()=>BN,sqliteQueryStringToSqliteQuery:()=>Eh,sqliteQueryToSqliteQueryString:()=>vh,sqliteTrue:()=>Th,startsWith:()=>dw,structuralLookup:()=>Gt,take:()=>Cl,tapScheduleInput:()=>d1,tapScheduleOutput:()=>u1,templateLiteral:()=>ee,templateLiteralParser:()=>wE,testAbortError:()=>wC,testAbortReason:()=>D0,testAppName:()=>by,testAppOwner:()=>iN,testCreateBroadcastChannel:()=>MI,testCreateConsole:()=>Bf,testCreateDeps:()=>W0,testCreateFs:()=>eI,testCreateId:()=>CI,testCreateLeakDetector:()=>bl,testCreateLockManager:()=>w1,testCreateMessageChannel:()=>DI,testCreateMessagePort:()=>BI,testCreateNativeFetch:()=>rI,testCreateNativeFetchErroringBody:()=>oI,testCreateRandom:()=>zf,testCreateRandomBytes:()=>Un,testCreateRandomLib:()=>Fn,testCreateReportDefect:()=>P0,testCreateRun:()=>Gf,testCreateSharedWorker:()=>RI,testCreateTime:()=>Af,testCreateWebSocket:()=>b1,testCreateWorker:()=>II,testEvoluSchema:()=>Am,testGlobalUncaughtErrors:()=>nE,testGlobalUnhandledRejections:()=>sE,testLocalOnlyEvoluSchema:()=>Im,testName:()=>nf,testOwnerSecret:()=>ch,testProjectId:()=>Cm,testSetupSqlite:()=>C1,testSetupWebSocket:()=>x1,testStubGlobal:()=>OI,testTodoId:()=>Om,testWaitForWorkerMessage:()=>PI,timeout:()=>EC,timeoutError:()=>U0,timestampBytesToTimestamp:()=>Rr,timestampToTimestampBytes:()=>Kt,todo:()=>pv,transform:()=>Fe,trim:()=>_E,trimmed:()=>cw,tryAsync:()=>ro,trySync:()=>We,tuple:()=>Kw,typeErrorToIssues:()=>lE,typed:()=>sn,uint8ArrayToBase64:()=>mw,uint8ArrayToBase64Url:()=>cr,uint8ArrayToHex:()=>bw,ulidToId:()=>kT,unabortable:()=>Tl,unabortableMask:()=>z0,uncapitalize:()=>ow,uncapitalized:()=>rw,undefinedOr:()=>gE,unfoldSchedule:()=>QC,union:()=>ge,unionSchedules:()=>c1,unique:()=>XT,untilScheduleInput:()=>e1,untilScheduleOutput:()=>H0,uppercase:()=>sw,uppercased:()=>nw,utf8ToBytes:()=>wN,uuidToId:()=>gT,uuidVersion:()=>lf,waitForAbort:()=>F0,webSocketReconnectSchedule:()=>Z0,wellFormed:()=>uw,whenInput:()=>l1,whileScheduleInput:()=>ZC,whileScheduleOutput:()=>rh,windowed:()=>zC,withDefault:()=>qp,xChaCha20Poly1305NonceLength:()=>Cs,yieldNow:()=>DC,zeroNonNegativeInt:()=>Bt,zipArray:()=>kv});var JA=t=>t+1n,HA=t=>t-1n,GA=(t,e)=>r=>r<t?t:r>e?e:r,YA=(t,e)=>r=>r>=t&&r<=e;var XA=t=>{let e=new Map;return{has:r=>e.has(r),get:r=>{let o=e.get(r);if(o!==void 0)return e.delete(r),e.set(r,o),o},set:(r,o)=>{if(e.has(r))e.delete(r);else if(e.size===t){let n=e.keys().next().value;e.delete(n)}e.set(r,o)},delete:r=>{e.delete(r)},map:e}};var iy=t=>{let e=new Map;return{register:o=>{let n=xt(t);return e.set(n,o),n},execute:((o,...n)=>{let s=e.get(o);s&&(e.delete(o),n.length===0?s():s(n[0]))}),unregister:o=>{e.delete(o)},[Symbol.dispose]:()=>{e.clear()}}};var ay=ia(255)(sa),ZA=(t,...e)=>{M($e(t),"Environment properties must be a plain object.");let r=pe(),o=new Map,n=new Map,s=[],i=new Set;for(let p of Reflect.ownKeys(t)){let f=Object.getOwnPropertyDescriptor(t,p);M(typeof p=="string"&&f.enumerable&&"value"in f,"Environment properties must be enumerable string data properties.");let m=sa.is(p);M(m||Ns.is(p),`Invalid environment schema name ${JSON.stringify(p)}. Expected a camelCase field or CONSTANT_CASE namespace.`);let d=f.value,y=m?d:{[p]:d};M($e(y)&&!oa.is(y),"Environment groups must be plain objects containing fields."),m&&(M(ay.is(p+"_A"),`Invalid environment namespace ${JSON.stringify(p)}. Names must fit within 255 characters.`),s.push(p+"_"));for(let b of Reflect.ownKeys(y)){let x=Object.getOwnPropertyDescriptor(y,b);M(typeof b=="string"&&x.enumerable&&"value"in x,"Environment fields must be enumerable string data properties."),M(Ns.is(b),`Invalid environment field ${JSON.stringify(b)}. Expected a camelCase identifier; groups cannot be nested.`),M(!o.has(b),`Duplicate environment field ${JSON.stringify(b)}.`);let w=(m?p+"_":"")+Yc(b);M(ay.is(w),`Invalid environment schema name ${JSON.stringify(w)}. Expected a CONSTANT_CASE identifier of at most 255 characters.`),M(!n.has(w),`Duplicate environment variable ${JSON.stringify(w)}.`);let C=x.value,E=oa.is(C)?C:$e(C)?Object.getOwnPropertyDescriptor(C,"type")?.value:void 0;M(oa.is(E),`Invalid environment field ${JSON.stringify(b)}. Expected a Type or optional/defaulted property; groups must use CONSTANT_CASE names.`),r[b]=C,o.set(b,w),n.set(w,b),m||i.add(w)}}let a=bt(r),c=Fe("EnvKey",Y,Ns,{from:p=>g(n.get(p)??p),to:p=>o.get(p)??p}),l=gf(c)(a);return Fe("Env",ir,l,{from:p=>typeof p!="object"||p===null?g(p):g(Vd(p,f=>i.has(f)||s.some(m=>f.toUpperCase().startsWith(m)))),to:p=>p})};var eI=(t={})=>({readFile:Zr("readFile"),writeFile:Zr("writeFile"),readDirectory:Zr("readDirectory"),createDirectory:Zr("createDirectory"),copy:Zr("copy"),copyFile:Zr("copyFile"),rename:Zr("rename"),remove:Zr("remove"),getMetadata:Zr("getMetadata"),exists:Zr("exists"),createTempDirectory:Zr("createTempDirectory"),...t}),Zr=t=>()=>()=>{throw new Error(`Unexpected Fs.${t} call`)};function tI(t,e,r){return async o=>{let{signal:n}=o,s=c=>(n.throwIfAborted(),c),i=await ro(()=>o.deps.nativeFetch(t,{...r,signal:n}),s),a;if(!i.ok)a=N({type:"FetchTransportError",error:i.error});else{let c=i.value;if(n.aborted&&(await ro(()=>c.body?.cancel()),n.throwIfAborted()),typeof e=="function"){let l=await ro(()=>e(c),s);if(!l.ok)throw l.error;a=l.value}else if(e==="headers")await ro(()=>c.body?.cancel(),s),a=g(c);else if(!c.ok)a=N({type:"FetchStatusError",response:c,body:await ro(()=>c.text(),s)});else{let l=await ro(()=>{switch(e){case"text":return c.text();case"json":return c.json();case"bytes":return c.bytes()}},s);a=l.ok?l:N({type:"FetchBodyError",response:c,error:l.error})}}return a.ok||n.throwIfAborted(),a}}var rI=(...t)=>{let e=[],r=[...t];return Object.assign((o,n)=>{e.push({input:o,init:n});let s=r.shift();if(!s)throw new Error("Unexpected NativeFetch call");return Promise.resolve(s(o,n))},{calls:e,handle:o=>{r.push(o)}})},oI=(t=new Error("stream failed"))=>new ReadableStream({pull:e=>{e.error(t)}});var nI=Uint32Array.from([1732584193,4023233417,2562383102,271733878,3285377520]);var sI=Math.pow(2,32),iI=Array.from({length:64},(t,e)=>Math.floor(sI*Math.abs(Math.sin(e+1)))),Md=nI.slice(0,4),cy=new Uint32Array(16),aI=(()=>{let t=[[7,12,17,22],[5,9,14,20],[4,11,16,23],[6,10,15,21]];return Uint8Array.from({length:64},(e,r)=>t[Math.floor(r/16)][r%4])})(),ly=class extends Rn{A=Md[0]|0;B=Md[1]|0;C=Md[2]|0;D=Md[3]|0;constructor(){super(64,16,8,!0)}get(){let{A:e,B:r,C:o,D:n}=this;return[e,r,o,n]}set(e,r,o,n){this.A=e|0,this.B=r|0,this.C=o|0,this.D=n|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,r){for(let a=0;a<16;a++,r+=4)cy[a]=e.getUint32(r,!0);let{A:o,B:n,C:s,D:i}=this;for(let a=0;a<64;a++){let c,l;a<16?(c=Hi(n,s,i),l=a):a<32?(c=Hi(i,n,s),l=(5*a+1)%16):a<48?(c=n^s^i,l=(3*a+5)%16):(c=s^(n|~i),l=7*a%16),c=c+o+iI[a]+cy[l],o=i,i=s,s=n,n=n+og(c,aI[a])}o=o+this.A|0,n=n+this.B|0,s=s+this.C|0,i=i+this.D|0,this.set(o,n,s,i)}roundClean(){Pr(cy)}destroy(){this.destroyed=!0,this.set(0,0,0,0),Pr(this.buffer)}},SS=Ki(()=>new ly);var cI=(t,e="github")=>{let r=lr(t);switch(e){case"github":{let o=SS(r),n=(m,d,y,b,x)=>(m-d)*(x-b)/(y-d)+b,s=(o[12]&15)<<8|o[13],i=n(s,0,4095,0,360),a=65-n(o[14],0,255,0,20),c=75-n(o[15],0,255,0,20),l=`hsl(${i},${a}%,${c}%)`,p=`<rect width="5" height="5" fill="${`hsl(${i},${a}%,90%)`}"/>`,f=0;for(let m=2;m>=0;m--)for(let d=0;d<5;d++){let y=o[Math.floor(f/2)],x=(f%2===0?y>>4:y&15)%2===0;if(f++,x){p+=`<rect x="${m}" y="${d}" width="1" height="1" fill="${l}"/>`;let w=4-m;w!==m&&(p+=`<rect x="${w}" y="${d}" width="1" height="1" fill="${l}"/>`)}}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5" shape-rendering="crispEdges">${p}</svg>`}case"quadrant":{let o=s=>s.toString(16).padStart(2,"0"),n="";for(let s=0;s<4;s++){let i=s%2,a=Math.floor(s/2),c=r[s*3],l=r[s*3+1],h=r[s*3+2],p=`#${o(c)}${o(l)}${o(h)}`;n+=`<rect x="${i}" y="${a}" width="1" height="1" fill="${p}"/>`}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2">${n}</svg>`}case"gradient":{let o=p=>p.toString(16).padStart(2,"0"),n=`#${o(r[0])}${o(r[1])}${o(r[2])}`,s=`#${o(r[3])}${o(r[4])}${o(r[5])}`,i=`#${o(r[6])}${o(r[7])}${o(r[8])}`,a="",c="";a+=`<linearGradient id="grad1-${t}" x1="0%" y1="0%" x2="0%" y2="100%">`,a+=`<stop offset="0%" style="stop-color:${n};stop-opacity:1" />`,a+=`<stop offset="100%" style="stop-color:${s};stop-opacity:1" />`,a+="</linearGradient>",a+=`<linearGradient id="grad2-${t}" x1="0%" y1="0%" x2="0%" y2="100%">`,a+=`<stop offset="0%" style="stop-color:${s};stop-opacity:1" />`,a+=`<stop offset="100%" style="stop-color:${i};stop-opacity:1" />`,a+="</linearGradient>",c+=`<rect width="100" height="100" fill="url(#grad1-${t})"/>`;let l=15+r[9]/255*20,h=30+r[10]/255*60;return c+=`<rect x="20" y="-50" width="${l}" height="200" fill="url(#grad2-${t})" transform="rotate(${h} 50 50)" opacity="0.7"/>`,c+=`<rect x="60" y="-50" width="${l}" height="200" fill="url(#grad2-${t})" transform="rotate(${h} 50 50)" opacity="0.5"/>`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs>${a}</defs>${c}</svg>`}case"sutnar":{let o=r[0]/255*360,n=60+r[1]/255*30,s=35+r[2]/255*20,i=(y,b,x)=>`hsl(${y},${b}%,${x}%)`,a=i(o,n,s),c=i((o+120)%360,n,s),l=i((o+240)%360,n,s),h=i(o,n*.5,s*.6),p=i(o,n*.5,Math.min(s*1.3,60)),f=[a,c,l,h,p],m=r[3]%3,d="";if(d+=`<rect width="100" height="100" fill="${i(o,10,95)}"/>`,m===0){let y=f[r[4]%f.length],b=f[(r[4]+1)%f.length];d+=`<circle cx="30" cy="50" r="22" fill="${y}"/>`,d+=`<rect x="60" y="40" width="35" height="20" fill="${b}"/>`}else if(m===1){let y=f[r[5]%f.length],b=f[(r[5]+1)%f.length];d+=`<rect x="15" y="10" width="18" height="80" fill="${y}"/>`,d+=`<circle cx="70" cy="50" r="15" fill="${b}"/>`}else{let y=f[r[6]%f.length],b=f[(r[6]+1)%f.length];d+=`<rect x="20" y="20" width="30" height="30" fill="${y}"/>`,d+=`<circle cx="70" cy="70" r="18" fill="${b}"/>`}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${d}</svg>`}}};var ES=t=>V("Leancased",t,e=>e===TS(e)?g():N({type:"Leancased",value:e}),Cx),lI=ES(Y),TS=t=>{let e=t.split(uI),r="",o=0;for(let[n,s]of e.entries())n%2===1?r+=s:o>0?((pI.exec(s)?.[1]?.length??0)>=o&&(o=0),r+=s):(o=dI.exec(s)?.[1]?.length??0,r+=o>0?s:hI(s));return r},uI=/(\r\n|\n|\r)/u,dI=/^ {0,3}(`{3,})[^`]*$/u,pI=/^ {0,3}(`{3,})[ \t]*$/u,fI=/[\p{L}\p{M}\p{N}_]$/u,Pd=/[@#][\p{L}\p{M}\p{N}_]+/uy,uy=/[a-z][a-z\d+-]*:\/\/[^\s<>`]*/iuy,dy=/[a-z][a-z\d+-]*/iuy,hI=t=>{let e=mI(t),r="",o=0,n=0;for(;n<t.length;){let s=t.charAt(n),i;if(s==="`"){if(i=e.get(n),i===void 0){n+=OS(t,n);continue}}else if(s==="@"||s==="#"){let a=t.slice(Math.max(0,n-2),n);Pd.lastIndex=n,!fI.test(a)&&Pd.test(t)&&!t.startsWith("://",Pd.lastIndex)&&(i=Pd.lastIndex,t.startsWith("._",i)&&(i+=1))}else if(i=bI(t,n),dy.lastIndex=n,i===void 0&&dy.test(t)){n=dy.lastIndex;continue}i===void 0?n+=1:(r+=t.slice(o,n).toLowerCase()+t.slice(n,i),n=o=i)}return r+NI(t.slice(o),o>0).toLowerCase()},OS=(t,e)=>{let r=e;for(;t.charAt(r)==="`";)r+=1;return r-e},mI=t=>{let e=[];for(let n=t.indexOf("`");n!==-1;){let s=OS(t,n);e.push([n,s]),n=t.indexOf("`",n+s)}let r=new Map,o=new Map;for(let[n,s]of e.toReversed()){let i=o.get(s);i!==void 0&&r.set(n,i),o.set(s,n+s)}return r},yI=`.,:;!?"'\u201D\u2019*_~`,gI=new Map([[")","("],["]","["],["}","{"]]),bI=(t,e)=>{if(uy.lastIndex=e,!uy.test(t))return;let r=t.slice(e,uy.lastIndex),o=new Map([...gI].map(([s,i])=>[s,vS(r,s)-vS(r,i)])),n=r.length;for(;;){let s=r.charAt(n-1),i=o.get(s)??0;if(yI.includes(s))n-=1;else if(i>0)o.set(s,i-1),n-=1;else return e+n}},vS=(t,e)=>t.split(e).length-1,xI=/[.\s)\]"'”’*_]/u,wI=/(?<!\.)\.(?!\.)/gu,NI=(t,e)=>{let r=t.length;for(;r>0&&xI.test(t.charAt(r-1));)r-=1;return r===0&&!e?t:t.slice(0,r)+t.slice(r).replaceAll(wI,"")};var kI=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},SI=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),fc=t=>{let e={stack:[],error:void 0,hasError:!1};try{let r=kI(e,new DisposableStack,!1),o=null;r.defer(()=>{o=null});let n=()=>{if(o==null)return;let s=o;o=null,t(s)};return it({push:s=>{if(o==null){o=[s],queueMicrotask(n);return}o.push(s)},flushNow:()=>{n()}},r)}catch(r){e.error=r,e.hasError=!0}finally{SI(e)}};var py=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},fy=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),AS=sn("DatabaseFileHeldError"),vI=t=>(e,r)=>async o=>{let n={stack:[],error:void 0,hasError:!1};try{let{nativeSqlite:s}=t,i=t.databasePath(e),a=py(n,new DisposableStack,!1),c=await o(IS(()=>{try{switch(r?.mode){case"memory":return g(s.openMemory());case"encrypted":return g(s.openEncryptedFile(i,r.encryptionKey));case void 0:return g(s.openFile(i))}}catch(f){if(f instanceof Error&&AS.is(f.cause))return N(f);throw f}}));if(!c.ok)throw c.error;let l=c.value;a.defer(()=>{l.close()});let h=new Set;a.defer(()=>{let f={stack:[],error:void 0,hasError:!1};try{let m=py(f,new DisposableStack,!1);for(let d of h)m.use(d)}catch(m){f.error=m,f.hasError=!0}finally{fy(f)}});let p=a.move();return g({exec:f=>CS(l.run(f.sql,f.parameters)),prepare:f=>{let m={stack:[],error:void 0,hasError:!1};try{let d=l.prepare(f),y=py(m,new DisposableStack,!1);y.defer(()=>{h.delete(b),d.finalize()});let b=it({exec:x=>CS(d.run(x))},y);return h.add(b),b}catch(d){m.error=d,m.hasError=!0}finally{fy(m)}},iterate:(f,m)=>{let d=l.prepare(f.sql);try{for(d.bind(f.parameters);;){let y=d.step();if(y===null||!m(y))break}}catch(y){throw We(()=>{d.finalize()}),y}d.finalize()},export:()=>new Uint8Array(l.export()),deleteDatabase:()=>{p.dispose(),r?.mode!=="memory"&&s.deleteFile(i)},[Symbol.dispose]:()=>{p.dispose()}})}catch(s){n.error=s,n.hasError=!0}finally{fy(n)}},CS=t=>typeof t=="number"?{rows:[],changes:t}:Array.isArray(t)?{rows:t,changes:0}:t,IS=t=>async e=>{let{time:r}=e.deps,o=r.performance.now(),n=t();for(let s=50;!n.ok&&lo(o,r.performance.now())<1e4;s=Math.min(s*2,1e3))await e.ok(cn(s)),n=t();return n};var EI=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},TI=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),RS=()=>{let t=Bt;return it({increment:()=>{let e=t+1;return t=e,e},decrement:()=>(M(t>0,"RefCount must not be decremented below zero."),t=t-1,t),getCount:()=>t})};function hy({lookup:t=ye}={}){let e={stack:[],error:void 0,hasError:!1};try{let r=EI(e,new DisposableStack,!1),o=Vt({lookup:t});return r.defer(()=>{o.clear()}),it({increment:n=>o.getOrInsertComputed(n,RS).increment(),decrement:n=>{let s=o.get(n);M(s,"RefCount must not be decremented for an untracked key.");let i=s.decrement();return i===0&&(o.delete(n),s[Symbol.dispose]()),i},getCount:n=>o.get(n)?.getCount()??Bt,has:n=>o.has(n),keys:()=>new Set(o.keys())},r)}catch(r){e.error=r,e.hasError=!0}finally{TI(e)}}var OI=(t,e)=>{let r=Object.getOwnPropertyDescriptor(globalThis,t);Object.defineProperty(globalThis,t,{configurable:!0,value:e,writable:!0});let o=new DisposableStack;return o.defer(()=>{r===void 0?Reflect.deleteProperty(globalThis,t):Object.defineProperty(globalThis,t,r)}),o},CI=()=>{let t=Un({randomLib:Fn()});return(()=>xt({randomBytes:t}))};var yc=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},gc=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),BS=t=>{let{worker:e,self:r}=WI();return t(r),e},AI=t=>{let{worker:e,self:r,connect:o}=WS();return t(r),o(),e},qd=()=>{let t={stack:[],error:void 0,hasError:!1};try{let e={handler:null,queue:[],flushScheduled:!1,flushTask:null,ownerCount:0,pendingTransferCount:0},r={handler:null,queue:[],flushScheduled:!1,flushTask:null,ownerCount:0,pendingTransferCount:0},o=DS(),n=DS(),s={receive:e,peerReceive:r,native:o},i={receive:r,peerReceive:e,native:n},a=yc(t,new DisposableStack,!1),c=a.use(my(s)),l=a.use(my(i)),h=a.move();return mc.set(o,s),mc.set(n,i),{port1:c,port2:l,[Symbol.dispose]:()=>h.dispose()}}catch(e){t.error=e,t.hasError=!0}finally{gc(t)}},MS=t=>{let e=mc.get(t);return M(e,"Unknown native port \u2014 did you transfer it?"),my(e)},PS=t=>{let e={stack:[],error:void 0,hasError:!1};try{let r=null,o=a=>{r?.(a)},n=Wd.get(t);n||(n=new Set,Wd.set(t,n)),n.add(o);let s=yc(e,new DisposableStack,!1),i=!1;return s.defer(()=>{i=!0,r=null,n.delete(o),n.size===0&&Wd.delete(t)}),it({postMessage:a=>{let c=Wd.get(t);to(c);for(let l of c)l!==o&&LS(()=>{c.has(l)&&l(a)})},get onMessage(){return i?null:r},set onMessage(a){i||(r=a)}},s)}catch(r){e.error=r,e.hasError=!0}finally{gc(e)}},Wd=new Map,II=()=>{let t,e=BS(r=>{t=r});return Object.assign(e,{self:t})},RI=()=>{let{worker:t,self:e,connect:r}=WS();return Object.assign(t,{self:e,connect:r})},DI=()=>{let t={stack:[],error:void 0,hasError:!1};try{let e=yc(t,new DisposableStack,!1),r=e.use(qd()),o=e.move();return{port1:r.port1,port2:r.port2,isDisposed:()=>o.disposed,[Symbol.dispose]:()=>o.dispose()}}catch(e){t.error=e,t.hasError=!0}finally{gc(t)}},BI=t=>MS(t),MI=t=>{let e={stack:[],error:void 0,hasError:!1};try{let r=yc(e,new DisposableStack,!1),o=r.use(PS(t)),n=r.move();return{postMessage:s=>{o.postMessage(structuredClone(s))},get onMessage(){return o.onMessage},set onMessage(s){o.onMessage=s},isDisposed:()=>n.disposed,[Symbol.dispose]:()=>n.dispose()}}catch(r){e.error=r,e.hasError=!0}finally{gc(e)}},PI=()=>new Promise(t=>{Ld.add(t),gy()}),WI=()=>{let t=qd(),e={postMessage:t.port2.postMessage,get onMessage(){return t.port2.onMessage},set onMessage(o){t.port2.onMessage=o},native:t.port2.native,[Symbol.dispose]:()=>{t.port2[Symbol.dispose]()}};return{worker:{postMessage:t.port1.postMessage,get onMessage(){return t.port1.onMessage},set onMessage(o){t.port1.onMessage=o},native:t.port1.native,[Symbol.dispose]:()=>{t[Symbol.dispose]()}},self:e}},WS=()=>{let t=qd(),e={onConnect:null,[Symbol.dispose]:()=>{e.onConnect=null}};return{worker:{port:t.port1,[Symbol.dispose]:()=>{t[Symbol.dispose]()}},self:e,connect:()=>{M(e.onConnect,"onConnect must be set before receiving connections"),e.onConnect(t.port2)}}},LI=({receive:t,peerReceive:e,native:r})=>{let o={stack:[],error:void 0,hasError:!1};try{let n=yc(o,new DisposableStack,!1);t.pendingTransferCount>0?t.pendingTransferCount-=1:t.ownerCount+=1,n.defer(()=>{t.ownerCount-=1,!(t.ownerCount>0)&&(mc.delete(r),t.flushTask!=null&&(UI(t.flushTask),t.flushTask=null),t.handler=null,t.flushScheduled=!1,t.queue.length=0)});let s=n.move(),i=a=>{a.flushScheduled||a.ownerCount===0||(a.flushScheduled=!0,a.flushTask=LS(()=>{if(a.flushTask=null,a.flushScheduled=!1,!(a.ownerCount===0||!a.handler))for(let l of a.queue.splice(0)){let h=a.handler;if(!h)return;h(l)}}))};return{postMessage:(a,c)=>{if(!(s.disposed||t.ownerCount===0||e.ownerCount===0)){for(let l of c??[]){if(l instanceof ArrayBuffer)continue;let h=mc.get(l);h&&(h.receive.ownerCount+=1,h.receive.pendingTransferCount+=1)}e.queue.push(a),i(e)}},get onMessage(){return s.disposed?null:t.handler},set onMessage(a){s.disposed||t.ownerCount===0||(t.handler=a,a&&i(t))},native:r,[Symbol.dispose]:()=>s.dispose()}}catch(n){o.error=n,o.hasError=!0}finally{gc(o)}},qI=globalThis,os=new Set,Jo=null,hc=new Map,Ld=new Set,Ii,LS=t=>{Ii!=null&&(clearTimeout(Ii),Ii=void 0);let e={callback:t},r=qI.nativeRuntimeScheduler;if(r)os.add(e),Jo||yy(r);else{let o=setTimeout(()=>{hc.delete(e),qS(e)},0);hc.set(e,o)}return e},yy=t=>{Jo={scheduler:t,task:t.unstable_scheduleCallback(t.unstable_NormalPriority,()=>{Jo=null;let e=os.values().next().value;to(e),os.delete(e),os.size>0&&yy(t);try{qS(e)}catch(r){throw queueMicrotask($I),r}})}},$I=()=>{if(!Jo)return;let{scheduler:t,task:e}=Jo;t.unstable_cancelCallback(e),yy(t)},qS=t=>{try{t.callback()}finally{queueMicrotask(gy)}},UI=t=>{let e=hc.get(t);e===void 0?(os.delete(t),os.size===0&&(M(Jo,"A queued hop has a scheduled task."),Jo.scheduler.unstable_cancelCallback(Jo.task),Jo=null)):(clearTimeout(e),hc.delete(t)),queueMicrotask(gy)},gy=()=>{os.size>0||hc.size>0||Ld.size===0||Ii!=null||(Ii=setTimeout(()=>{Ii=void 0;for(let t of Ld)t();Ld.clear()},0))},my=t=>LI(t),DS=()=>({}),mc=new WeakMap;var US=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},jS=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),$d=V("AppName",ol,t=>t.length<=41?g():N({type:"AppName",value:t}),t=>`The value ${JSON.stringify(t.value)} is not between 1 and 41 characters.`),by=$d.orThrow("AppName"),bc=Jt.orThrow(64e4),$S=t=>{let e=mt();return Od(e,{timestamp:vi(),change:t}),e.getLength()},jI=co.orThrow("A".repeat(22)),FI=t=>{let e={stack:[],error:void 0,hasError:!1};try{let{createBroadcastChannel:r,sharedWorker:o}=t,n=t.console??an(),s=null,i=null,a=US(e,new DisposableStack,!1);a.use(o);let c=a.use(Ao(null)),l=a.use(Ao(null));a.defer(()=>{s?.[Symbol.dispose]()});let h=a.use(r(Ai)),p=f=>{c.get()?.type!=="UnsupportedDbVersionError"&&c.set(f)};return h.onMessage=f=>{switch(f.type){case"ConsoleEntry":n.write(f.entry),f.entry.method==="error"&&p(ht(f.entry.args));break;case"Error":{f.error.type==="UnknownError"&&p(f.error),n.error(f.error);break}default:nt(f)}},o.port.onMessage=f=>{switch(f.type){case"DbWorkerInit":t.createDbWorker().postMessage(f,[f.port]);break;case"Error":p(f.error),n.error(f.error);break;case"Waiting":break;case"Connected":{M(!s,"The shared worker connects once."),c.get()?.type==="OtherBuildRunningError"&&c.set(null),s=r(f.syncStateChannelName),s.onMessage=m=>{let d=l.get();l.set(d?_d(d,m,zI):m)},o.port.postMessage({type:"RequestSyncState"}),i=ka(t)(`tab-${f.workerId}`,()=>{o.port.postMessage({type:"AnnounceTabLeader",consoleLevel:n.getLevel()})});break}default:nt(f)}},a.defer(()=>{i?.[Symbol.dispose]()}),it({...t,console:n,evoluError:c,syncState:l},a)}catch(r){e.error=r,e.hasError=!0}finally{jS(e)}},zI=t=>$e(t)?t.id??t.name??t.ownerId??t.transportId:void 0,xy=(t,e)=>async r=>{let o={stack:[],error:void 0,hasError:!1};try{let{appName:n,appOwner:s,transports:i=[{type:"WebSocket",url:"wss://free.evoluhq.com/"}]}=e,a=e.memoryOnly?"NotPersisted":await r.deps.getDevicePersistence(),c=a==="NotPersisted",l=`${n}-${c?Wn("MemoryDatabase",s.id):Wn(s.id)}`,h=r.deps.console.child(l).child("Evolu");h.info("createEvolu");let p=US(o,new AsyncDisposableStack,!0),f=p.use(Ao(new Map)),m=p.use(hy()),d=p.adopt(new Map,O=>{for(let A of O.values())A.promise.status==="pending"&&y(A,g(at));O.clear()}),y=(O,A)=>{O.promise.status==="pending"?A.ok?O.resolve(A.value):O.reject(A.error):A.ok?O.promise=Promise.resolve(A.value):(O.promise=Promise.reject(A.error),O.promise.catch(Sr)),Object.assign(O.promise,A.ok?{status:"fulfilled",value:A.value}:{status:"rejected",reason:A.error})},b=()=>{for(let[O,A]of d)m.has(O)||(A.promise.status!=="pending"?d.delete(O):A.releaseOnSettle=!0)},x=p.use(iy(r.deps)),w=null;p.defer(()=>{w?.reject({type:"EvoluDisposedError"}),w=null});let C=null;p.defer(()=>{C?.resolve(N({type:"EvoluDisposedError"})),C=null});let E=[];p.defer(()=>{for(let O of E)O.resolve(N({type:"EvoluDisposedError"}));E.length=0});let R=!1,I;{let O=xt(r.deps),{createMessageChannel:A,sharedWorker:_}=r.deps;p.use(await r.ok(Ro(O)));let W=p.use(A());W.port1.onMessage=Q=>{switch(Q.type){case"OnPatchesByQuery":{h.debug("onPatchesByQuery",{queryCount:Q.patchesByQuery.size,onCompleteCount:Q.onCompleteIds.length});let j=f.get(),U=new Map(j);for(let[Z,ne]of Q.patchesByQuery){if(!ne.ok){m.has(Z)&&U.set(Z,[...j.get(Z)??at]);continue}U.set(Z,ty(ne.value,j.get(Z)??at))}for(let[Z,ne]of Q.patchesByQuery){let Ne=d.get(Z);if(Ne){if(ne.ok){let me=U.get(Z);to(me),y(Ne,g(me))}else y(Ne,ne);Ne.releaseOnSettle&&d.delete(Z)}}r.deps.flushSync&&Q.onCompleteIds.length>0?r.deps.flushSync(()=>{f.set(U)}):f.set(U);for(let Z of Q.onCompleteIds)x.execute(Z);break}case"RefreshQueries":{b();let j=new Set(m.keys());Kf(j)&&I({type:"Query",queries:j});break}case"OnExport":{M(w,"OnExport received without pending export."),w.resolve(Q.file),w=null;break}case"OnExportFailed":{M(w,"OnExportFailed received without pending export."),w.reject(Q.error),w=null;break}case"OnMutateFailed":{for(let j of Q.onCompleteIds)x.unregister(j);break}case"OnDatabaseDeleted":{FS.add(F),d.clear();try{f.set(new Map),C?.resolve(g()),C=null,e.onDatabaseDeleted?e.onDatabaseDeleted():r.deps.reloadApp()}finally{F[Symbol.asyncDispose]()}break}case"OnDeleteDatabaseFailed":{M(C,"OnDeleteDatabaseFailed received without pending deletion."),C.resolve(N(Q.error)),C=null;break}case"OnOwnerDeleted":{if(Q.isAnswer){let j=E.shift();M(j,"OnOwnerDeleted answered no pending owner deletion."),j.resolve(g())}e.onOwnerDeleted?.(Q.ownerId);break}case"OnDeleteOwnerFailed":{let j=E.shift();M(j,"OnDeleteOwnerFailed received without pending owner deletion."),j.resolve(N(Q.error));break}default:nt(Q)}},_.port.postMessage({type:"CreateEvolu",name:l,id:O,consoleLevel:h.getLevel(),sqliteSchema:Dm(t,e.indexes),encryptionKey:s.encryptionKey,memoryOnly:c,evoluPort:W.port2.native},[W.port2.native]),I=W.port1.postMessage}let B=p.use(fc(O=>{P||(h.debug("mutateBatch",{changeCount:O.length}),b(),I({type:"Mutate",changes:vr(O,A=>A.change),onCompleteIds:O.flatMap(A=>A.onComplete?[x.register(A.onComplete)]:[]),subscribedQueries:m.keys()}))})),T=p.use(fc(O=>{if(P)return;let A=_f(O);h.debug("queryBatch",{queryCount:A.size}),I({type:"Query",queries:A})})),S=p.use(fc(O=>{P||I({type:"UseOwner",actions:O})})),L=O=>(A,_,W)=>{let{id:Q=xt(r.deps),isDeleted:j,...U}=_,Z={table:A,id:Q,values:U,isInsert:O==="insert"||O==="upsert",isDelete:un.is(j)?Ba(j):null};if(!Qo.is(Z)){let ne=Object.keys(U).find(Ne=>U[Ne]===void 0);throw new Error(ne===void 0?`Invalid DbChange for table '${String(A)}'.`:`Column '${ne}' of table '${String(A)}' is undefined. Omit it instead. TypeScript reports this only with exactOptionalPropertyTypes, which Evolu requires.`)}for(let[ne,Ne]of kr(Z.values))typeof Ne=="object"&&Ne!==null&&(U[ne]=new Uint8Array(Ne));if(!kn(Z.table)){let ne=$S(Z);M(ne<=bc,`The mutation of table '${Z.table}' is ${ne} bytes, over maxMutationSize (${bc}). Bound the Types of its columns or check it with evolu.getMutationSize.`)}return R||(R=!0,a==="Unknown"&&r.deps.requestPersistentStorage?.()),b(),B.push({change:{...Z,ownerId:W?.owner?.id??s.id},onComplete:W?.onComplete}),{id:Q}},k=O=>{let A=d.get(O);if(A)return A.promise;let{promise:_,resolve:W,reject:Q}=Promise.withResolvers(),j=_;return j.status="pending",d.set(O,{promise:j,resolve:W,reject:Q,releaseOnSettle:!1}),T.push(O),j},v=O=>f.get().get(O)??at,D=(O,A)=>{let _=A??i;ko(_,"useOwner requires explicit non-empty transports when config.transports is empty."),M(new Set(_.map(ne=>Gt(ne))).size===_.length,"useOwner requires distinct transports.");let{id:W,encryptionKey:Q}=O,j={owner:"writeKey"in O?{id:W,encryptionKey:Q,writeKey:O.writeKey}:{id:W,encryptionKey:Q},transports:_},U=xt(r.deps);S.push({action:"add",id:U,owner:j});let Z=!0;return()=>{P||(M(Z,"UnuseOwner can be called only once."),Z=!1,S.push({action:"remove",id:U}))}},P=!1;p.defer(()=>{P=!0,h.info("disposeEvolu")}),ut(i)&&D(s),r.signal.throwIfAborted();let F=it({name:l,appOwner:s,devicePersistence:Promise.resolve(a),insert:L("insert"),update:L("update"),upsert:L("upsert"),getMutationSize:(O,A)=>{let _=pe();for(let[W,Q]of kr(A))Q!==void 0&&W!=="id"&&W!=="isDeleted"&&(_[W]=Q);return $S(Qo.orThrow({table:String(O),id:jI,values:_,isInsert:!0,isDelete:null}))},loadQuery:k,loadQueries:O=>O.map(A=>k(A)),subscribeQuery:O=>A=>{if(P)return Sr;m.increment(O);let _=!0,W=null,Q=f.subscribe(()=>{let U=v(O);W!==U&&(W=U,A())}),j=d.get(O);if(j?.releaseOnSettle)j.releaseOnSettle=!1,T.push(O);else if(!j){let U=f.get().get(O);if(U){k(O);let Z=d.get(O);to(Z),y(Z,g(U))}}return()=>{M(_,"subscribeQuery unsubscribe can be called only once."),_=!1,W=null,!P&&(Q(),m.decrement(O))}},getQueryRows:v,exportDatabase:()=>(w||(w=Promise.withResolvers(),I({type:"Export"})),w.promise),deleteDatabase:()=>(C||(C=Promise.withResolvers(),S.flushNow(),B.flushNow(),T.flushNow(),I({type:"DeleteDatabase"})),C.promise),deleteOwner:O=>{M(O.id!==s.id,"deleteOwner cannot delete an owner with the AppOwner's ID, which names the database. Use deleteDatabase.");let A=Promise.withResolvers();return E.push(A),S.flushNow(),B.flushNow(),T.flushNow(),I({type:"DeleteOwner",ownerId:O.id}),A.promise},useOwner:D,requestSync:O=>{S.flushNow(),B.flushNow(),S.push({action:"sync",ownerId:O})}},p);return g(F)}catch(n){o.error=n,o.hasError=!0}finally{let n=jS(o);n&&await n}},FS=new WeakSet,VI=t=>FS.has(t);var KI=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},QI=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),xc=Jt.orThrow(2),JI=t=>async e=>{let r={stack:[],error:void 0,hasError:!1};try{let o=KI(r,new AsyncDisposableStack,!0);o.use(t);let{deps:n}=e,s=await e.ok(Io(({resolve:a})=>{t.onMessage=c=>a(g(c))})),i=o.use(n.createMessagePort(s.port));try{n.console.setLevel(s.consoleLevel==="silent"?"error":s.consoleLevel);let a=o.use(n.createBroadcastChannel(Ai));if(o.defer(n.consoleStoreOutputEntry.subscribe(()=>{let w=n.consoleStoreOutputEntry.get();w&&Bd(a,w)})),o.use(await e.ok(Ro(s.name))),!s.memoryOnly&&n.waitForDatabaseRelease){let w=await e(n.waitForDatabaseRelease(s.name));if(!w.ok)return i.postMessage({type:"LeaderRefused",error:w.error}),g()}let c=o.use(await e.ok(Xl(s.name,s.memoryOnly?{mode:"memory"}:{mode:"encrypted",encryptionKey:s.encryptionKey}))),l=nc({sqlite:c,...n}),h={...n,sqlite:c,sqliteSchema:s.sqliteSchema,baseSqliteStorage:l,timestampConfig:{maxDrift:wm}},p=c.transaction(()=>{let{rows:w}=c.exec(te`
            select "name" from pragma_table_info('evolu_version');
          `),C=new Set(w.map(I=>I.name)),E;if(C.size===0)E=ec(h),YI(h)(E);else{let I=HI(h)(C);if(!I.ok)return I;let{rows:B}=c.exec(te`
              select "clock" from evolu_config limit 1;
            `);ko(B),E=Rr(Mr(B).clock)}Mm(h)(s.sqliteSchema);let R=ZI(h)(E);return R&&(E=R,wy(h)(R)),XI(h),g({clock:E,created:C.size===0})});if(!p.ok)return i.postMessage({type:"LeaderRefused",error:p.error}),g();let{clock:f,created:m}=p.value,d=tR({...h,xChaCha20Poly1305:n.xChaCha20Poly1305??ya()}),y=o.use(e.create({storage:d}));i.postMessage({type:"LeaderAcquired",clock:f});let b=await e.ok(Io(({resolve:w,reject:C})=>{i.onMessage=R=>{try{if(R.type==="Dispose"||R.type==="Discard"){w(g(R));return}let{attemptId:I}=R,B=S=>{i.postMessage({type:"OnQueuedResponse",attemptId:I,response:S},S.type==="ForEvolu"&&S.message.type==="Export"?[S.message.file.buffer]:void 0)};if("clock"in R){let{clock:S,now:L}=R,k=S,v={now:L,clock:{get:()=>k,set:P=>{k=P}}},D=R.request;if(D.type==="ForSharedWorker"){let{owner:P,inputMessage:F,continues:O}=D.message;y(async A=>{d.setRequestContext(P.encryptionKey,v);let _=await A(Km(F,{...O&&{writeKey:P.writeKey},onChangeTooLarge:d.onChangeTooLarge}));return B({type:"ForSharedWorker",message:{type:"ApplySyncMessage",clock:v.clock.get(),ownerId:P.id,didWriteMessages:d.didWriteMessages(),skippedError:d.skippedError(),result:_}}),g()})}else{let P=We(()=>rR({...h,clock:v.clock})(D.message,L),ht);B({type:"ForEvolu",id:D.id,message:P.ok?P.value:{type:"MutateFailed",error:P.error}})}return}let T=R.request;if(T.type==="ForSharedWorker"){let S=new Map,L=new Set;for(let k of T.message.owners){d.setRequestContext(k.encryptionKey);try{S.set(k.id,Vm({storage:d})(k.id,Br.Subscribe))}catch(v){n.console.error(v),L.add(k.id)}}B({type:"ForSharedWorker",message:{type:"CreateSyncMessages",protocolMessagesByOwnerId:S,failedOwnerIds:L}});return}if(T.message.type==="Query"){We(()=>c.prepared`begin;`);let S=QS(h)(T.message.queries);We(()=>c.prepared`commit;`),B({type:"ForEvolu",id:T.id,message:{type:"Query",rowsByQuery:S}});return}if(T.message.type==="Export"){let S=We(()=>c.export(),ht);B({type:"ForEvolu",id:T.id,message:S.ok?{type:"Export",file:S.value}:{type:"ExportFailed",error:S.error}});return}if(T.message.type==="DeleteOwner"){let{ownerId:S}=T.message,L=We(()=>{let k=jr(S);c.transaction(()=>{let{rows:v}=c.exec(te`
                      select m.name
                      from sqlite_master as m
                      join pragma_table_info(m.name) as c on c.name = 'ownerId'
                      where
                        m.type = 'table'
                        and m.name not in
                          (
                            'evolu_history',
                            'evolu_message_quarantine',
                            'evolu_timestamp',
                            'evolu_usage'
                          );
                    `);for(let{name:D}of v)c.exec(te`
                        delete from ${te.identifier(D)}
                        where "ownerId" = ${S};
                      `);c.exec(te`
                      delete from evolu_history
                      where "ownerId" = ${k};
                    `),c.exec(te`
                      delete from evolu_message_quarantine
                      where "ownerId" = ${k};
                    `),l.deleteOwner(k)})},ht);B({type:"ForEvolu",id:T.id,message:L.ok?{type:"OwnerDeleted"}:{type:"DeleteOwnerFailed",error:L.error}});return}if(T.message.type==="DeleteDatabase"){w(g({type:"DeleteDatabase",attemptId:I,id:T.id}));return}nt(T.message)}catch(I){C(I)}};let E=ka(n)(s.sharedWorkerId,()=>w(g({type:"Dispose"})));return()=>{i.onMessage=null,E[Symbol.dispose]()}})),x=async()=>{let w=await ro(()=>c[Symbol.asyncDispose](),ht);return!w.ok||s.memoryOnly?w:e(n.deleteDatabaseFiles(s.name))};switch(b.type){case"Dispose":break;case"Discard":{if(!m||s.memoryOnly)break;let w=await x();w.ok||n.console.info("discardFailed",w.error);break}case"DeleteDatabase":{let w=await x();i.postMessage(w.ok?{type:"DatabaseDeleted"}:{type:"OnQueuedResponse",attemptId:b.attemptId,response:{type:"ForEvolu",id:b.id,message:{type:"DeleteDatabaseFailed",error:w.error}}});break}default:nt(b)}return g()}catch(a){throw(!Cr.is(a)||a.reason.type==="PanicAbortReason")&&i.postMessage({type:"LeaderRefused",error:ht(ln(a))}),a}}catch(o){r.error=o,r.hasError=!0}finally{let o=QI(r);o&&await o}},wy=t=>e=>{let r=Kt(e);t.sqlite.prepared`
      update evolu_config
      set "clock" = ${r}
      where "clock" < ${r};
    `},HI=({sqlite:t})=>e=>{e.has("dbVersion")||t.exec(te`
        alter table evolu_version
        rename column "protocolVersion" to "dbVersion";
      `);let{rows:r}=t.exec(te`
      select "dbVersion" from evolu_version;
    `),o=r[0].dbVersion;return o>xc?N({type:"UnsupportedDbVersionError",storedVersion:o,supportedVersion:xc}):(o<xc&&(o<2&&GI({sqlite:t}),t.exec(te`update evolu_version set "dbVersion" = ${xc};`)),g())},GI=({sqlite:t})=>{for(let e of[te`
      alter table evolu_message_quarantine
      add column "reason" integer not null default ${te.raw(String(Dr.Schema))};
    `,te`
      alter table evolu_message_quarantine
      add column "origin" integer not null default ${te.raw(String(Sn.ReceivedMessage))};
    `,te`
      alter table evolu_message_quarantine
      add column "quarantinedAt" integer;
    `,te`
      create index evolu_message_quarantine_reason_timestamp
      on evolu_message_quarantine ("reason", "timestamp");
    `])t.exec(e)},YI=({sqlite:t})=>e=>{for(let r of[te`
        create table evolu_version (
          "dbVersion" integer not null
        )
        strict;
      `,te`
        insert into evolu_version ("dbVersion")
        values (${xc});
      `,te`
        create table evolu_config (
          "clock" blob not null
        )
        strict;
      `,te`
        insert into evolu_config ("clock")
        values (${Kt(e)});
      `,te`
        create table evolu_history (
          "ownerId" blob not null,
          "table" text not null,
          "id" blob not null,
          "column" text not null,
          "timestamp" blob not null,
          "value" any
        )
        strict;
      `,te`
        create index evolu_history_ownerId_timestamp
        on evolu_history ("ownerId", "timestamp");
      `,te`
        create unique index evolu_history_ownerId_table_id_column_timestampDesc
        on evolu_history ("ownerId", "table", "id", "column", "timestamp" desc);
      `,te`
        create table evolu_message_quarantine (
          "ownerId" blob not null,
          "timestamp" blob not null,
          "table" text not null,
          "id" blob not null,
          "column" text not null,
          "value" any,
          "reason" integer not null default ${te.raw(String(Dr.Schema))},
          "origin" integer not null default ${te.raw(String(Sn.ReceivedMessage))},
          "quarantinedAt" integer,
          primary key ("ownerId", "timestamp", "table", "id", "column")
        )
        strict;
      `])t.exec(r);qm({sqlite:t}),t.exec(te`
      create index evolu_message_quarantine_reason_timestamp
      on evolu_message_quarantine ("reason", "timestamp");
    `)},XI=t=>{let{rows:e}=t.sqlite.exec(te`
    select "ownerId", "timestamp", "table", "id", "column", "value"
    from evolu_message_quarantine
    where "reason" = ${Dr.Schema};
  `);for(let r of e)zS(t)(r.table,r.column,r.value)&&(VS(t)(r.ownerId,Do(r.ownerId),r.table,r.id,Ur(r.id),r.column,r.value,r.timestamp),t.sqlite.prepared`
      delete from evolu_message_quarantine
      where
        "ownerId" = ${r.ownerId}
        and "timestamp" = ${r.timestamp}
        and "table" = ${r.table}
        and "id" = ${r.id}
        and "column" = ${r.column};
    `)},ZI=t=>e=>{let r=t.time.now(),o=r+Math.floor(t.timestampConfig.maxDrift);Ut(vs,o);let n=Kt({millis:dr(o),counter:wd,nodeId:km}),{rows:s}=t.sqlite.exec(te`
      select distinct "timestamp"
      from evolu_message_quarantine
      where
        "reason" = ${Dr.TimestampDrift}
        and "timestamp" <= ${n}
      order by "timestamp";
    `);if(s.length===0)return null;let i=vd(t),a=e;for(let{timestamp:c}of s){let l=Rr(c),h=i(a,l,r);h.ok?a=h.value:(M(h.error.cause==="local","The query bound excludes remote drift at the captured time."),a=h.error.timestamp)}return t.sqlite.exec(te`
      update evolu_message_quarantine
      set "reason" = ${Dr.Schema}
      where
        "reason" = ${Dr.TimestampDrift}
        and "timestamp" <= ${n};
    `),a},zS=t=>(e,r,o)=>{if(kn(e))return!1;let n=Mi(t.sqliteSchema.tables,e);return n!=null&&(eR.has(r)||n.has(r))},eR=oc.difference(new Set(["ownerId"])),VS=t=>(e,r,o,n,s,i,a,c)=>{let l=i==="createdAt"||i==="updatedAt";l||t.sqlite.prepared`
        with
          existingTimestamp as (
            select 1
            from evolu_history
            where
              "ownerId" = ${e}
              and "table" = ${o}
              and "id" = ${n}
              and "column" = ${i}
              and "timestamp" >= ${c}
            limit 1
          )
        insert into ${te.identifier(o)}
          ("ownerId", "id", ${te.identifier(i)})
        select ${r}, ${s}, ${a}
        where not exists (select 1 from existingTimestamp)
        on conflict ("ownerId", "id") do update
          set ${te.identifier(i)} = ${a}
          where not exists (select 1 from existingTimestamp);
      `,t.sqlite.prepared`
      insert into evolu_history
        ("ownerId", "table", "id", "column", "value", "timestamp")
      values
        (
          ${e},
          ${o},
          ${n},
          ${i},
          ${a},
          ${c}
        )
      on conflict do nothing;
    `,l&&t.sqlite.prepared`
        with
          firstChange as (
            select *
            from (
              select *
              from (
                select "timestamp", "value"
                from evolu_history
                where
                  "ownerId" = ${e}
                  and "table" = ${o}
                  and "id" = ${n}
                  and "column" = 'createdAt'
                order by "timestamp"
                limit 1
              )
              union all
              select *
              from (
                select "timestamp", "value"
                from evolu_history
                where
                  "ownerId" = ${e}
                  and "table" = ${o}
                  and "id" = ${n}
                  and "column" = 'updatedAt'
                order by "timestamp"
                limit 1
              )
            )
            order by "timestamp"
            limit 1
          ),
          lastChange as (
            select *
            from (
              select *
              from (
                select "timestamp", "value"
                from evolu_history
                where
                  "ownerId" = ${e}
                  and "table" = ${o}
                  and "id" = ${n}
                  and "column" = 'createdAt'
                order by "timestamp" desc
                limit 1
              )
              union all
              select *
              from (
                select "timestamp", "value"
                from evolu_history
                where
                  "ownerId" = ${e}
                  and "table" = ${o}
                  and "id" = ${n}
                  and "column" = 'updatedAt'
                order by "timestamp" desc
                limit 1
              )
            )
            order by "timestamp" desc
            limit 1
          )
        insert into ${te.identifier(o)}
          ("ownerId", "id", "createdAt", "updatedAt")
        select
          ${r},
          ${s},
          firstChange."value",
          case
            when lastChange."timestamp" = firstChange."timestamp" then null
            else lastChange."value"
          end
        from
          firstChange,
          lastChange
        where true
        on conflict ("ownerId", "id") do update
          set
            "createdAt" = excluded."createdAt",
            "updatedAt" = excluded."updatedAt";
      `},tR=t=>{let e=null,r=!1,o=null,n,s=()=>(ke(e,"ClientStorage encryption key must be set"),e);return{...t.baseSqliteStorage,setRequestContext:(i,a)=>{e=i,n=a,r=!1,o=null},didWriteMessages:()=>r,skippedError:()=>o,onChangeTooLarge:i=>{o??=i},writeMessages:(i,a)=>()=>{let c=[],l=s();for(let b of a){let x=Jm(t)(b,l);if(!x.ok){o??=x.error;continue}c.push({timestamp:b.timestamp,change:x.value})}if(!ut(c))return g();ke(n);let{clock:h,now:p}=n,f=h.get(),m=vd(t);for(let b of c){let x=m(f,b.timestamp,p);if(x.ok)f=x.value;else{if(x.error.cause==="remote")continue;f=x.error.timestamp}}let d=!1,y=We(()=>{t.sqlite.transaction(()=>{d=_S(t)(Do(i),c,Sn.ReceivedMessage,p),wy(t)(f)})},ht);return y.ok?(h.set(f),d&&(r=!0),g()):y},readDbChange:(i,a)=>{let c=t.sqlite.prepared`
        select "table", "id", "column", "value"
        from evolu_history
        where "ownerId" = ${i} and "timestamp" = ${a}
        union all
        select "table", "id", "column", "value"
        from evolu_message_quarantine
        where "ownerId" = ${i} and "timestamp" = ${a};
      `,{rows:l}=c;ko(l,"Every timestamp must have rows");let h=Mr(l),p=pe(),f=!1,m=null;for(let y of l)switch(y.column){case"createdAt":f=!0;break;case"updatedAt":f=!1;break;case"isDeleted":Ut(un,y.value),m=Ba(y.value);break;default:p[y.column]=y.value}let d={timestamp:Rr(a),change:Qo.orThrow({table:h.table,id:Ur(h.id),values:p,isInsert:f,isDelete:m})};return uc(t)(d,s())}}},rR=t=>(e,r)=>$i(t.sqlite.transaction(()=>{let o=new Map,n=t.clock.get();for(let s of e.changes){if(kn(s.table)){oR(t)(s,r);continue}let i=Sd(t)(n,r);n=i.ok?i.value:i.error.timestamp;let{ownerId:a,...c}=s,l={timestamp:n,change:c},h=o.get(a);h?h.push(l):o.set(a,[l])}for(let[s,i]of o)_S(t)(s,i,Sn.LocalMutation,r);return o.size>0&&wy(t)(n),g({type:"Mutate",clock:n,messagesByOwnerId:o,rowsByQuery:QS(t)(e.subscribedQueries)})})),oR=t=>(e,r)=>{let o=te.identifier(e.table),{ownerId:n,id:s}=e;if(e.isDelete)t.sqlite.prepared`
        delete from ${o}
        where "ownerId" = ${n} and "id" = ${s};
      `;else{let i=Is(r);t.sqlite.prepared`
        insert into ${o} ("ownerId", "id", "createdAt")
        values (${n}, ${s}, ${i})
        on conflict ("ownerId", "id") do update
          set
            "createdAt" = coalesce("createdAt", "updatedAt", ${i}),
            "updatedAt" = case
              when "createdAt" = ${i} then "updatedAt"
              else ${i}
            end;
      `;for(let[a,c]of KS(e))t.sqlite.prepared`
          update ${o}
          set ${te.identifier(a)} = ${c}
          where "ownerId" = ${n} and "id" = ${s};
        `}},_S=t=>(e,r,o,n)=>{let s=jr(e),i=!1,{firstTimestamp:a,lastTimestamp:c}=ic(t)(s,Kt(Mr(r).timestamp));for(let{timestamp:l,change:h}of r){let p=Kt(l);if([a,c]=sc(p,a,c),!t.baseSqliteStorage.insertTimestamp(s,p))continue;i=!0;let m=tc(t)(l.millis,n),d=Tc(KS(h),[h.isInsert?"createdAt":"updatedAt",Is(l.millis)]),y=lr(h.id);for(let[b,x]of d)!m&&zS(t)(h.table,b,x)?VS(t)(s,e,h.table,y,h.id,b,x,p):t.sqlite.prepared`
            insert into evolu_message_quarantine
              (
                "ownerId",
                "timestamp",
                "table",
                "id",
                "column",
                "value",
                "reason",
                "origin",
                "quarantinedAt"
              )
            values
              (
                ${s},
                ${p},
                ${h.table},
                ${y},
                ${b},
                ${x},
                ${m?Dr.TimestampDrift:Dr.Schema},
                ${o},
                ${n}
              )
            on conflict do nothing;
          `}return i&&ac(t)(s,Ft,a,c),i},KS=t=>{let e=kr(t.values);return t.isDelete==null?e:Tc(e,["isDeleted",Oh(t.isDelete)])},QS=t=>e=>{let r=new Map;for(let o of e)r.set(o,We(()=>t.sqlite.exec(Eh(o)).rows,ht));return r};var iR={};ky(iR,{AppName:()=>$d,BuildWaiting:()=>LA,BuildWaitingRequest:()=>qA,Counter:()=>xd,DbChange:()=>Qo,DbChangeValues:()=>Qk,InfiniteUpperBound:()=>Nr,MessageType:()=>ot,NodeId:()=>Vk,NodeIdBytes:()=>bA,OwnerEncryptionKey:()=>Wl,OwnerId:()=>Ws,OwnerIdBytes:()=>oN,OwnerSecret:()=>ql,OwnerWriteKey:()=>Ll,ProtocolErrorCode:()=>Ge,ProtocolMessageMaxSize:()=>AA,ProtocolMessageRangesMaxSize:()=>IA,ProtocolValueType:()=>He,QuarantineOrigin:()=>Sn,QuarantineReason:()=>Dr,RangeType:()=>Je,RelayUrl:()=>dh,RelayUrlFromString:()=>dN,SharedWorkerId:()=>gS,SubscriptionFlags:()=>Br,SystemColumns:()=>_k,TestProjectId:()=>Ei,TestTodoId:()=>rc,Timestamp:()=>Sm,TimestampBytes:()=>Em,ValidDbChangeValues:()=>Jk,applyPatches:()=>ty,applyProtocolMessageAsClient:()=>Km,applyProtocolMessageAsRelay:()=>RA,buildsBroadcastChannelName:()=>WA,consoleEntryOrErrorBroadcastChannelName:()=>Ai,createAppOwner:()=>uh,createBaseSqliteStorage:()=>nc,createBaseSqliteStorageTables:()=>qm,createEvolu:()=>xy,createEvoluDeps:()=>FI,createInitialTimestamp:()=>ec,createOwnerSecret:()=>ah,createOwnerWebSocketTransport:()=>pN,createOwnerWriteKey:()=>nN,createProtocolBroadcastMessagesFromCrdtMessages:()=>zm,createProtocolMessageBuffer:()=>Xr,createProtocolMessageForSync:()=>Vm,createProtocolMessageForUnsubscribe:()=>_m,createProtocolMessageFromCrdtMessages:()=>Fm,createQueryBuilder:()=>Bm,createRelaySqliteStorage:()=>nR,createRelayStorageTables:()=>sR,createShardOwner:()=>aN,createSharedOwner:()=>lN,createSharedReadonlyOwner:()=>uN,createTimestamp:()=>vi,createTimestampsBuffer:()=>Ti,decodeSqliteValue:()=>dS,decryptAndDecodeDbChange:()=>Jm,defaultProtocolMessageMaxSize:()=>cc,defaultProtocolMessageRangesMaxSize:()=>oS,defaultTimestampMaxDrift:()=>wm,deriveShardOwner:()=>cN,encodeAndEncryptDbChange:()=>uc,encodeDbChange:()=>Od,encodeSqliteValue:()=>uS,ensureSqliteSchema:()=>Mm,eqTimestamp:()=>vm,evoluJsonArrayFrom:()=>Ym,evoluJsonBuildObject:()=>Zm,evoluJsonObjectFrom:()=>Xm,evoluSchemaToSqliteSchema:()=>Dm,extendTimestampBounds:()=>sc,fingerprintSize:()=>rs,getEvoluSqliteSchema:()=>Kk,getJsonObjectArgs:()=>Ad,getTimestampByIndex:()=>Gk,initSharedWorker:()=>KA,isDatabaseDeleted:()=>VI,isLocalOnlyTable:()=>kn,isTimestampBeyondMaxDrift:()=>tc,kysely:()=>Td,kyselyJsonIdentifier:()=>Oi,kyselySql:()=>qt,makePatches:()=>ey,maxCounter:()=>wd,maxMutationSize:()=>bc,maxNodeId:()=>km,minCounter:()=>gd,minNodeId:()=>Nm,mnemonicToOwnerSecret:()=>sN,nodeIdBytesLength:()=>ki,nodeIdBytesToNodeId:()=>kd,nodeIdToNodeIdBytes:()=>Nd,orderTimestamp:()=>Si,orderTimestampBytes:()=>Ed,ownerIdBytesToOwnerId:()=>Do,ownerIdToOwnerIdBytes:()=>jr,ownerSecretToMnemonic:()=>lh,ownerWriteKeyLength:()=>Pl,parseOwnerIdFromOwnerWebSocketTransportUrl:()=>fN,parseProtocolHeader:()=>jm,parseSqliteJsonArray:()=>Cd,postConsoleEntry:()=>Bd,protocolVersion:()=>lc,readOwnerUsageOrDefault:()=>ic,receiveTimestamp:()=>vd,relayHeartbeatInterval:()=>va,relaySyncStateToStatus:()=>xS,sendTimestamp:()=>Sd,startDbWorker:()=>JI,syncStateToOwnerSyncStatus:()=>$A,syncStateToRelaySyncStates:()=>bS,systemColumns:()=>oc,systemColumnsWithId:()=>Rm,testAppName:()=>by,testAppOwner:()=>iN,testCreateCrdtMessage:()=>kA,testEvoluSchema:()=>Am,testFingerprintTimestamps:()=>SA,testLocalOnlyEvoluSchema:()=>Im,testOwnerSecret:()=>ch,testProjectId:()=>Cm,testTodoId:()=>Om,timestampBytesLength:()=>Tm,timestampBytesToFingerprint:()=>Hk,timestampBytesToTimestamp:()=>Rr,timestampToDateIso:()=>xA,timestampToTimestampBytes:()=>Kt,updateOwnerUsage:()=>ac,zeroFingerprint:()=>Lm});var nR=t=>e=>{let r=nc(t),o=Na(),n=s=>t.sqlite.prepared`
        select writeKey
        from evolu_writeKey
        where ownerId = ${s};
      `.rows.at(0)?.writeKey??null;return{...r,validateWriteKey:(s,i)=>{let a=n(s);return a===null||t.timingSafeEqual(a,i)},writeMessages:(s,i,a)=>async c=>{let l=Do(s),h=sp(vr(a,p=>({timestamp:Kt(p.timestamp),change:p.change})),p=>cr(p.timestamp));return c(o.withLock(l,async()=>{let p=We(()=>n(s),ht);if(!p.ok)return p;if(p.value!==null&&!t.timingSafeEqual(p.value,i))return N({type:"StorageWriteKeyError",ownerId:l});let f=We(()=>{let R=r.getExistingTimestamps(s,vr(h,S=>S.timestamp)),I=new Set(vr(R,cr)),B=np(h,S=>!I.has(cr(S.timestamp)));if(!ut(B))return null;let T=ic(t)(s,Mr(B).timestamp);return{newMessages:B,usage:T}},ht);if(!f.ok)return f;if(f.value===null)return g();let{newMessages:m,usage:d}=f.value,y=m.reduce((R,I)=>R+I.change.length,0),b=(d.storedBytes??0)+y,x=e.isOwnerWithinQuota(l,b);if(!(Ap(x)?await x:x))return N({type:"StorageQuotaError",ownerId:l});let{firstTimestamp:C,lastTimestamp:E}=d;return We(()=>{t.sqlite.transaction(()=>{p.value===null&&t.sqlite.prepared`
                    insert into evolu_writeKey (ownerId, writeKey)
                    values (${s}, ${i});
                  `;for(let{timestamp:R,change:I}of m)[C,E]=sc(R,C,E),r.insertTimestamp(s,R),t.sqlite.prepared`
                    insert into evolu_message
                      ("ownerId", "timestamp", "change")
                    values (${s}, ${R}, ${I})
                    on conflict do nothing;
                  `;ac(t)(s,b,C,E)})},ht)}))},readDbChange:(s,i)=>{let c=t.sqlite.prepared`
          select "change"
          from evolu_message
          where "ownerId" = ${s} and "timestamp" = ${i};
        `.rows.at(0);return M(c,"Every timestamp must have a change"),c.change},deleteOwner:s=>o.withLock(Do(s),()=>We(()=>{t.sqlite.transaction(()=>{t.sqlite.exec(te`
                delete from evolu_writeKey where ownerId = ${s};
              `),t.sqlite.exec(te`
                delete from evolu_message where ownerId = ${s};
              `),r.deleteOwner(s)})},ht))}},sR=t=>{for(let e of[te`
      create table evolu_writeKey (
        "ownerId" blob not null,
        "writeKey" blob not null,
        primary key ("ownerId")
      )
      strict;
    `,te`
      create table evolu_message (
        "ownerId" blob not null,
        "timestamp" blob not null,
        "change" blob not null,
        primary key ("ownerId", "timestamp")
      )
      strict;
    `])t.sqlite.exec(e)};var WJ=()=>{aR(),dR()},aR=()=>{cR();let t=JS("dispose","Symbol.dispose"),e=JS("asyncDispose","Symbol.asyncDispose");typeof globalThis.DisposableStack!="function"&&En(globalThis,"DisposableStack",lR(t)),typeof globalThis.AsyncDisposableStack!="function"&&En(globalThis,"AsyncDisposableStack",uR(t,e))},HS="An error was suppressed during disposal.",vn=(t,e)=>`Cannot call ${t}.prototype.${e} on an already-disposed DisposableStack`,En=(t,e,r)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})},GS=(t,e,r)=>{En(t,e,Object.getOwnPropertyDescriptor(t,r)?.value)},Tn=(t,e)=>{if(t)throw new ReferenceError(e)},YS=(t,e)=>new globalThis.SuppressedError(t,e,HS),XS=t=>{if((typeof t!="object"||t===null)&&typeof t!="function")throw new TypeError("Disposable value must be an object or function.");return t},Ny=(t,e)=>{let r=t[e];if(r!==void 0){if(typeof r!="function")throw new TypeError("Disposable method must be a function.");return r}},JS=(t,e)=>{let r=globalThis.Symbol,o=Object.getOwnPropertyDescriptor(r,t)?.value,n=typeof o=="symbol"?o:void 0;if(n!=null)return n;let s=Symbol(e);return Object.defineProperty(r,t,{configurable:!1,enumerable:!1,writable:!1,value:s}),s},cR=()=>{if(typeof globalThis.SuppressedError=="function")return;class t extends Error{error;suppressed;constructor(r,o,n){super(n??HS),this.name="SuppressedError",this.error=r,this.suppressed=o}}En(globalThis,"SuppressedError",t)},lR=t=>{class e{#e=!1;#t=[];get disposed(){return this.#e}use(o){if(Tn(this.#e,vn("DisposableStack","use")),o==null)return o;let n=XS(o),s=Ny(n,t);if(s==null)throw new TypeError("Resource does not implement Symbol.dispose.");return this.#t.push({dispose:()=>{s.call(n)}}),o}adopt(o,n){if(Tn(this.#e,vn("DisposableStack","adopt")),typeof n!="function")throw new TypeError("onDispose must be a function.");return this.#t.push({dispose:()=>{n(o)}}),o}defer(o){if(Tn(this.#e,vn("DisposableStack","defer")),typeof o!="function")throw new TypeError("onDispose must be a function.");this.#t.push({dispose:()=>{o()}})}move(){Tn(this.#e,vn("DisposableStack","move"));let o=new e;return o.#t=this.#t,this.#t=[],this.#e=!0,o}dispose(){if(this.#e)return;this.#e=!0;let o=this.#t;this.#t=[];let n,s=!1;for(let i=o.length-1;i>=0;i--)try{o[i].dispose()}catch(a){n=s?YS(a,n):a,s=!0}if(s)throw n}}return GS(e.prototype,t,"dispose"),Object.defineProperty(e.prototype,Symbol.toStringTag,{configurable:!0,enumerable:!1,writable:!1,value:"DisposableStack"}),e},uR=(t,e)=>{class r{#e=!1;#t=[];get disposed(){return this.#e}use(n){if(Tn(this.#e,vn("AsyncDisposableStack","use")),n==null)return n;let s=XS(n),i=Ny(s,e);if(i!=null)return this.#t.push({dispose:async()=>{await i.call(s)}}),n;let a=Ny(s,t);if(a!=null)return this.#t.push({dispose:()=>Promise.resolve().then(()=>{a.call(s)})}),n;throw new TypeError("Resource does not implement Symbol.asyncDispose or Symbol.dispose.")}adopt(n,s){if(Tn(this.#e,vn("AsyncDisposableStack","adopt")),typeof s!="function")throw new TypeError("onDisposeAsync must be a function.");return this.#t.push({dispose:()=>Promise.resolve().then(()=>s(n))}),n}defer(n){if(Tn(this.#e,vn("AsyncDisposableStack","defer")),typeof n!="function")throw new TypeError("onDisposeAsync must be a function.");this.#t.push({dispose:()=>Promise.resolve().then(()=>n())})}move(){Tn(this.#e,vn("AsyncDisposableStack","move"));let n=new r;return n.#t=this.#t,this.#t=[],this.#e=!0,n}async disposeAsync(){if(this.#e)return;this.#e=!0;let n=this.#t;this.#t=[];let s,i=!1;for(let a=n.length-1;a>=0;a--)try{await n[a].dispose()}catch(c){s=i?YS(c,s):c,i=!0}if(i)throw s}}return GS(r.prototype,e,"disposeAsync"),Object.defineProperty(r.prototype,Symbol.toStringTag,{configurable:!0,enumerable:!1,writable:!1,value:"AsyncDisposableStack"}),r},dR=()=>{let t=function(r,o){return this.has(r)||this.set(r,o),this.get(r)},e=function(r,o){return this.has(r)||this.set(r,o(r)),this.get(r)};typeof Map.prototype.getOrInsert!="function"&&En(Map.prototype,"getOrInsert",t),typeof Map.prototype.getOrInsertComputed!="function"&&En(Map.prototype,"getOrInsertComputed",e),typeof WeakMap.prototype.getOrInsert!="function"&&En(WeakMap.prototype,"getOrInsert",t),typeof WeakMap.prototype.getOrInsertComputed!="function"&&En(WeakMap.prototype,"getOrInsertComputed",e)};var Ud=function(t,e,r){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],r&&(n=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:o,async:r})}else r&&t.stack.push({async:!0});return e},jd=(function(t){return function(e){function r(i){e.error=e.hasError?new t(i,e.error,"An error was suppressed during disposal."):i,e.hasError=!0}var o,n=0;function s(){for(;o=e.stack.pop();)try{if(!o.async&&n===1)return n=0,e.stack.push(o),Promise.resolve().then(s);if(o.dispose){var i=o.dispose.call(o.value);if(o.async)return n|=2,Promise.resolve(i).then(s,function(a){return r(a),s()})}else n|=1}catch(a){r(a)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,r){var o=new Error(r);return o.name="SuppressedError",o.error=t,o.suppressed=e,o}),$J=t=>ns(t),UJ=()=>{typeof globalThis.SharedWorker!="function"&&Object.defineProperty(globalThis,"SharedWorker",{configurable:!0,writable:!0,value:class{port;constructor(t,e){this.port=new globalThis.Worker(t,e)}}})},jJ=t=>{let e=ns(t.port);return{port:e,[Symbol.dispose]:e[Symbol.dispose]}},pR=()=>{let t={stack:[],error:void 0,hasError:!1};try{let e=new globalThis.MessageChannel,r=Ud(t,new DisposableStack,!1),o=r.use(ns(e.port1)),n=r.use(ns(e.port2)),s=r.move();return{port1:o,port2:n,[Symbol.dispose]:()=>s.dispose()}}catch(e){t.error=e,t.hasError=!0}finally{jd(t)}},fR=t=>ns(t),hR=t=>{let e={stack:[],error:void 0,hasError:!1};try{let r=new globalThis.BroadcastChannel(t),o=Ud(e,new DisposableStack,!1),n=!1;o.defer(()=>{n=!0,r.onmessage=null,r.close()});let s=null;return it({postMessage:i=>{r.postMessage(i)},get onMessage(){return n?null:s},set onMessage(i){n||(s=i,r.onmessage=i?a=>{i(a.data)}:null)}},o)}catch(r){e.error=r,e.hasError=!0}finally{jd(e)}},FJ=t=>ns(t),zJ=t=>{let e={onConnect:null,[Symbol.dispose]:()=>{t.onconnect=null,t.close()}};return t.onconnect=r=>{ke(e.onConnect,"onConnect must be set before receiving connections"),e.onConnect(ns(r.ports[0]))},e},VJ=t=>{let e={stack:[],error:void 0,hasError:!1};try{let r=Ud(e,new DisposableStack,!1),o=null,n=null,s=[],i=!1;r.defer(()=>{s.length=0,o=null,n=null,t.onmessage=null,t.close()});let a=r.move();t.onmessage=p=>{if(a.disposed)return;let f=n;f?f(p.data):s.push(p.data)};let c=()=>{for(let p of s.splice(0)){let f=n;if(!f)return;f(p)}},l={postMessage:(p,f)=>{a.disposed||(f==null?t.postMessage(p):t.postMessage(p,[...f]))},get onMessage(){return a.disposed?null:n},set onMessage(p){a.disposed||(n=p,p&&c())},native:t,[Symbol.dispose]:()=>a.dispose()},h=()=>{i||!o||(i=!0,o(l))};return{get onConnect(){return o},set onConnect(p){a.disposed||(o=p,h())},[Symbol.dispose]:()=>a.dispose()}}catch(r){e.error=r,e.hasError=!0}finally{jd(e)}},_J=(t,e)=>{let r={stack:[],error:void 0,hasError:!1};try{let o=Ud(r,new DisposableStack,!1),{signal:n}=o.adopt(new AbortController,s=>{s.abort()});return t.addEventListener("error",s=>{e(ln(s.error))},{signal:n}),t.addEventListener("unhandledrejection",s=>{e(ln(s.reason))},{signal:n}),it({},o)}catch(o){r.error=o,r.hasError=!0}finally{jd(r)}},KJ=()=>{let t=Df();return{console:an({output:t}),consoleStoreOutputEntry:t.entry,createBroadcastChannel:hR,createMessageChannel:pR,createMessagePort:fR}},ns=t=>{let e=null;return{postMessage:(r,o)=>{o==null?t.postMessage(r):t.postMessage(r,[...o])},get onMessage(){return e},set onMessage(r){e=r,r?t.onmessage=o=>{r(o.data)}:t.onmessage=null},native:t,[Symbol.dispose]:()=>{t.onmessage=null,"terminate"in t?t.terminate():t.close()}}};function GJ(t){let e=r=>{reportError(ln(r))};return t===void 0?El({reportDefect:e}):El({reportDefect:e,...t})}export{ky as a,vy as b,Di as c,Nc as d,M as e,nt as f,it as g,Sr as h,ut as i,vr as j,kv as k,g as l,N as m,We as n,ro as o,Sp as p,q,Y as r,V as s,Jt as t,lo as u,ft as v,$n as w,Hf as x,cn as y,F0 as z,ht as A,y1 as B,Ai as C,WA as D,LA as E,qA as F,KA as G,FI as H,_I as I,JI as J,iR as K,WJ as L,$J as M,UJ as N,jJ as O,pR as P,fR as Q,hR as R,FJ as S,zJ as T,VJ as U,_J as V,KJ as W,GJ as X};
/*! Bundled license information:

@noble/ciphers/utils.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)

@scure/bip39/index.js:
  (*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) *)
*/
