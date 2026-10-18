(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="160",Sd=0,gh=1,bd=2,hf=1,uf=2,Ai=3,fs=0,dn=1,pe=2,os=0,br=1,ce=2,vh=3,_h=4,wd=5,As=100,Ed=101,Td=102,xh=103,yh=104,Ad=200,Cd=201,Rd=202,Pd=203,ac=204,oc=205,Ld=206,Dd=207,Id=208,Ud=209,Nd=210,Fd=211,Od=212,zd=213,Bd=214,kd=0,Gd=1,Hd=2,Ro=3,Vd=4,Wd=5,Xd=6,qd=7,ff=0,$d=1,Yd=2,ls=0,jd=1,Zd=2,Jd=3,df=4,Kd=5,Qd=6,pf=300,Pr=301,Lr=302,lc=303,cc=304,Ko=306,Fi=1e3,jn=1001,hc=1002,bn=1003,Mh=1004,pl=1005,Gn=1006,tp=1007,ma=1008,cs=1009,ep=1010,np=1011,Fc=1012,mf=1013,ss=1014,rs=1015,ga=1016,gf=1017,vf=1018,Is=1020,ip=1021,Zn=1023,sp=1024,rp=1025,Us=1026,Dr=1027,ap=1028,_f=1029,op=1030,xf=1031,yf=1033,ml=33776,gl=33777,vl=33778,_l=33779,Sh=35840,bh=35841,wh=35842,Eh=35843,Mf=36196,Th=37492,Ah=37496,Ch=37808,Rh=37809,Ph=37810,Lh=37811,Dh=37812,Ih=37813,Uh=37814,Nh=37815,Fh=37816,Oh=37817,zh=37818,Bh=37819,kh=37820,Gh=37821,xl=36492,Hh=36494,Vh=36495,lp=36283,Wh=36284,Xh=36285,qh=36286,Sf=3e3,Ns=3001,cp=3200,hp=3201,bf=0,up=1,Vn="",_e="srgb",Oi="srgb-linear",Oc="display-p3",Qo="display-p3-linear",Po="linear",Pe="srgb",Lo="rec709",Do="p3",Qs=7680,$h=519,fp=512,dp=513,pp=514,wf=515,mp=516,gp=517,vp=518,_p=519,uc=35044,Yh=35048,jh="300 es",fc=1035,Li=2e3,Io=2001;class Gr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zh=1234567;const ca=Math.PI/180,va=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function hn(i,t,e){return Math.max(t,Math.min(e,i))}function zc(i,t){return(i%t+t)%t}function xp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yp(i,t,e){return i!==t?(e-i)/(t-i):0}function ha(i,t,e){return(1-e)*i+e*t}function Mp(i,t,e,n){return ha(i,t,1-Math.exp(-e*n))}function Sp(i,t=1){return t-Math.abs(zc(i,t*2)-t)}function bp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ep(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Tp(i,t){return i+Math.random()*(t-i)}function Ap(i){return i*(.5-Math.random())}function Cp(i){i!==void 0&&(Zh=i);let t=Zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rp(i){return i*ca}function Pp(i){return i*va}function dc(i){return(i&i-1)===0&&i!==0}function Lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yl={DEG2RAD:ca,RAD2DEG:va,generateUUID:fi,clamp:hn,euclideanModulo:zc,mapLinear:xp,inverseLerp:yp,lerp:ha,damp:Mp,pingpong:Sp,smoothstep:bp,smootherstep:wp,randInt:Ep,randFloat:Tp,randFloatSpread:Ap,seededRandom:Cp,degToRad:Rp,radToDeg:Pp,isPowerOfTwo:dc,ceilPowerOfTwo:Lp,floorPowerOfTwo:Uo,setQuaternionFromProperEuler:Dp,normalize:Se,denormalize:hi};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(hn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,n,s,r,a,o,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],v=s[4],y=s[7],R=s[2],b=s[5],E=s[8];return r[0]=a*x+o*_+l*R,r[3]=a*m+o*v+l*b,r[6]=a*p+o*y+l*E,r[1]=c*x+h*_+u*R,r[4]=c*m+h*v+u*b,r[7]=c*p+h*y+u*E,r[2]=d*x+f*_+g*R,r[5]=d*m+f*v+g*b,r[8]=d*p+f*y+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ml.makeScale(t,e)),this}rotate(t){return this.premultiply(Ml.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ml=new se;function Ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function No(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ip(){const i=No("canvas");return i.style.display="block",i}const Jh={};function ua(i){i in Jh||(Jh[i]=!0,console.warn(i))}const Kh=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qh=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[Oi]:{transfer:Po,primaries:Lo,toReference:i=>i,fromReference:i=>i},[_e]:{transfer:Pe,primaries:Lo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qo]:{transfer:Po,primaries:Do,toReference:i=>i.applyMatrix3(Qh),fromReference:i=>i.applyMatrix3(Kh)},[Oc]:{transfer:Pe,primaries:Do,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qh),fromReference:i=>i.applyMatrix3(Kh).convertLinearToSRGB()}},Up=new Set([Oi,Qo]),be={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Up.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Oa[t].toReference,s=Oa[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Oa[i].primaries},getTransfer:function(i){return i===Vn?Po:Oa[i].transfer}};function wr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let tr;class Tf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{tr===void 0&&(tr=No("canvas")),tr.width=t.width,tr.height=t.height;const n=tr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=tr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=No("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wr(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wr(e[n]/255)*255):e[n]=wr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Np=0;class Af{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bl(s[a].image)):r.push(bl(s[a]))}else r=bl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fp=0;class Cn extends Gr{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=jn,s=jn,r=Gn,a=ma,o=Zn,l=cs,c=Cn.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=fi(),this.name="",this.source=new Af(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ns?_e:Vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fi:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fi:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?Ns:Sf}set encoding(t){ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ns?_e:Vn}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=pf;Cn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(f+1)/2,R=(p+1)/2,b=(h+d)/4,E=(u+x)/4,D=(g+m)/4;return v>y&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=E/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=D/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends Gr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ns?_e:Vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Af(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends Op{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cf extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zp extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,p*_);m=Math.sin(m*b)/R,o=Math.sin(o*b)/R}const y=o*_;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(hn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wl.copy(this).projectOnVector(t),this.sub(wl)}reflect(t){return this.sub(wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(hn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wl=new A,tu=new Jn;class qs{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(t.matrixWorld),this.union(za)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),Ba.subVectors(this.max,Kr),er.subVectors(t.a,Kr),nr.subVectors(t.b,Kr),ir.subVectors(t.c,Kr),Yi.subVectors(nr,er),ji.subVectors(ir,nr),Ms.subVectors(er,ir);let e=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-Ms.z,Ms.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,Ms.z,0,-Ms.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-Ms.y,Ms.x,0];return!El(e,er,nr,ir,Ba)||(e=[1,0,0,0,1,0,0,0,1],!El(e,er,nr,ir,Ba))?!1:(ka.crossVectors(Yi,ji),e=[ka.x,ka.y,ka.z],El(e,er,nr,ir,Ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Si=[new A,new A,new A,new A,new A,new A,new A,new A],qn=new A,za=new qs,er=new A,nr=new A,ir=new A,Yi=new A,ji=new A,Ms=new A,Kr=new A,Ba=new A,ka=new A,Ss=new A;function El(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ss.fromArray(i,r);const o=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=t.dot(Ss),c=e.dot(Ss),h=n.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Bp=new qs,Qr=new A,Tl=new A;class Hr{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);const e=Qr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(Tl)),this.expandByPoint(Qr.copy(t.center).sub(Tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new A,Al=new A,Ga=new A,Zi=new A,Cl=new A,Ha=new A,Rl=new A;class Bc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Al.copy(t).add(e).multiplyScalar(.5),Ga.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(Al);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ga),o=Zi.dot(this.direction),l=-Zi.dot(Ga),c=Zi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Al).addScaledVector(Ga,d),f}intersectSphere(t,e){bi.subVectors(t.center,this.origin);const n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,s,r){Cl.subVectors(e,t),Ha.subVectors(n,t),Rl.crossVectors(Cl,Ha);let a=this.direction.dot(Rl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,t);const l=o*this.direction.dot(Ha.crossVectors(Zi,Ha));if(l<0)return null;const c=o*this.direction.dot(Cl.cross(Zi));if(c<0||l+c>a)return null;const h=-o*Zi.dot(Rl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/sr.setFromMatrixColumn(t,0).length(),r=1/sr.setFromMatrixColumn(t,1).length(),a=1/sr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kp,t,Gp)}lookAt(t,e,n){const s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ji.crossVectors(n,Dn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ji.crossVectors(n,Dn)),Ji.normalize(),Va.crossVectors(Dn,Ji),s[0]=Ji.x,s[4]=Va.x,s[8]=Dn.x,s[1]=Ji.y,s[5]=Va.y,s[9]=Dn.y,s[2]=Ji.z,s[6]=Va.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],v=n[7],y=n[11],R=n[15],b=s[0],E=s[4],D=s[8],M=s[12],w=s[1],N=s[5],H=s[9],nt=s[13],I=s[2],z=s[6],W=s[10],Q=s[14],J=s[3],K=s[7],et=s[11],ht=s[15];return r[0]=a*b+o*w+l*I+c*J,r[4]=a*E+o*N+l*z+c*K,r[8]=a*D+o*H+l*W+c*et,r[12]=a*M+o*nt+l*Q+c*ht,r[1]=h*b+u*w+d*I+f*J,r[5]=h*E+u*N+d*z+f*K,r[9]=h*D+u*H+d*W+f*et,r[13]=h*M+u*nt+d*Q+f*ht,r[2]=g*b+x*w+m*I+p*J,r[6]=g*E+x*N+m*z+p*K,r[10]=g*D+x*H+m*W+p*et,r[14]=g*M+x*nt+m*Q+p*ht,r[3]=_*b+v*w+y*I+R*J,r[7]=_*E+v*N+y*z+R*K,r[11]=_*D+v*H+y*W+R*et,r[15]=_*M+v*nt+y*Q+R*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,v=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,b=e*_+n*v+s*y+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=_*E,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*E,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*E,t[4]=v*E,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*E,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*E,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*E,t[8]=y*E,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*E,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=R*E,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*E,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,_=l*c,v=l*h,y=l*u,R=n.x,b=n.y,E=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+y)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(d+p))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(g+v)*E,s[9]=(m-_)*E,s[10]=(1-(d+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=sr.set(s[0],s[1],s[2]).length();const a=sr.set(s[4],s[5],s[6]).length(),o=sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);const c=1/r,h=1/a,u=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Li){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===Li)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Io)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Li){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let g,x;if(o===Li)g=(a+r)*u,x=-2*u;else if(o===Io)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const sr=new A,$n=new Re,kp=new A(0,0,0),Gp=new A(1,1,1),Ji=new A,Va=new A,Dn=new A,eu=new Re,nu=new Jn;class La{constructor(t=0,e=0,n=0,s=La.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nu.setFromEuler(this),this.setFromQuaternion(nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hp=0;const iu=new A,rr=new Jn,wi=new Re,Wa=new A,ta=new A,Vp=new A,Wp=new Jn,su=new A(1,0,0),ru=new A(0,1,0),au=new A(0,0,1),Xp={type:"added"},qp={type:"removed"};class Ve extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new A,e=new La,n=new Jn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new se}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.multiply(rr),this}rotateOnWorldAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.premultiply(rr),this}rotateX(t){return this.rotateOnAxis(su,t)}rotateY(t){return this.rotateOnAxis(ru,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(su,t)}translateY(t){return this.translateOnAxis(ru,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wa.copy(t):Wa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(ta,Wa,this.up):wi.lookAt(Wa,ta,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(wi),this.quaternion.premultiply(rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t,Vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new A(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new A,Ei=new A,Pl=new A,Ti=new A,ar=new A,or=new A,ou=new A,Ll=new A,Dl=new A,Il=new A;let Xa=!1;class Hn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),Ei.subVectors(n,e),Pl.subVectors(t,e);const a=Yn.dot(Yn),o=Yn.dot(Ei),l=Yn.dot(Pl),c=Ei.dot(Ei),h=Ei.dot(Pl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(t,e,n,s,r,a,o,l){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),Ei.subVectors(t,e),Yn.cross(Ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Yn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),Hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ar.subVectors(s,n),or.subVectors(r,n),Ll.subVectors(t,n);const l=ar.dot(Ll),c=or.dot(Ll);if(l<=0&&c<=0)return e.copy(n);Dl.subVectors(t,s);const h=ar.dot(Dl),u=or.dot(Dl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ar,a);Il.subVectors(t,r);const f=ar.dot(Il),g=or.dot(Il);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(or,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ou.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(ou,o);const p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Ul(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=zc(t,1),e=hn(e,0,1),n=hn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ul(a,r,t+1/3),this.g=Ul(a,r,t),this.b=Ul(a,r,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){const n=Rf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}copyLinearToSRGB(t){return this.r=Sl(t.r),this.g=Sl(t.g),this.b=Sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return be.fromWorkingColorSpace(mn.copy(this),t),Math.round(hn(mn.r*255,0,255))*65536+Math.round(hn(mn.g*255,0,255))*256+Math.round(hn(mn.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=_e){be.fromWorkingColorSpace(mn.copy(this),t);const e=mn.r,n=mn.g,s=mn.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(qa);const n=ha(Ki.h,qa.h,e),s=ha(Ki.s,qa.s,e),r=ha(Ki.l,qa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Gt;Gt.NAMES=Rf;let $p=0;class $s extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=br,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==oc&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ge extends $s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new A,$a=new ct;class _n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$a.fromBufferAttribute(this,e),$a.applyMatrix3(t),this.setXY(e,$a.x,$a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}}class Pf extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lf extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yp=0;const kn=new Re,Nl=new Ve,lr=new A,In=new qs,ea=new qs,on=new A;class ze extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ef(t)?Lf:Pf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(In.min,ea.min),In.expandByPoint(on),on.addVectors(In.max,ea.max),In.expandByPoint(on)):(In.expandByPoint(ea.min),In.expandByPoint(ea.max))}In.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(lr.fromBufferAttribute(t,c),on.add(lr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new A,h[w]=new A;const u=new A,d=new A,f=new A,g=new ct,x=new ct,m=new ct,p=new A,_=new A;function v(w,N,H){u.fromArray(s,w*3),d.fromArray(s,N*3),f.fromArray(s,H*3),g.fromArray(a,w*2),x.fromArray(a,N*2),m.fromArray(a,H*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);const nt=1/(x.x*m.y-m.x*x.y);isFinite(nt)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(nt),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(nt),c[w].add(p),c[N].add(p),c[H].add(p),h[w].add(_),h[N].add(_),h[H].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,N=y.length;w<N;++w){const H=y[w],nt=H.start,I=H.count;for(let z=nt,W=nt+I;z<W;z+=3)v(n[z+0],n[z+1],n[z+2])}const R=new A,b=new A,E=new A,D=new A;function M(w){E.fromArray(r,w*3),D.copy(E);const N=c[w];R.copy(N),R.sub(E.multiplyScalar(E.dot(N))).normalize(),b.crossVectors(D,N);const nt=b.dot(h[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=nt}for(let w=0,N=y.length;w<N;++w){const H=y[w],nt=H.start,I=H.count;for(let z=nt,W=nt+I;z<W;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new _n(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new Re,bs=new Bc,Ya=new Hr,cu=new A,cr=new A,hr=new A,ur=new A,Fl=new A,ja=new A,Za=new ct,Ja=new ct,Ka=new ct,hu=new A,uu=new A,fu=new A,Qa=new A,to=new A;class B extends Ve{constructor(t=new ze,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Fl.fromBufferAttribute(u,t),a?ja.addScaledVector(Fl,h):ja.addScaledVector(Fl.sub(e),h))}e.add(ja)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),bs.copy(t.ray).recast(t.near),!(Ya.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ya,cu)===null||bs.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(lu.copy(r).invert(),bs.copy(t.ray).applyMatrix4(lu),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=v;y<R;y+=3){const b=o.getX(y),E=o.getX(y+1),D=o.getX(y+2);s=eo(this,p,t,n,c,h,u,b,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=eo(this,a,t,n,c,h,u,_,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=v;y<R;y+=3){const b=y,E=y+1,D=y+2;s=eo(this,p,t,n,c,h,u,b,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=m,v=m+1,y=m+2;s=eo(this,a,t,n,c,h,u,_,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function jp(i,t,e,n,s,r,a,o){let l;if(t.side===dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===fs,o),l===null)return null;to.copy(o),to.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,cr),i.getVertexPosition(l,hr),i.getVertexPosition(c,ur);const h=jp(i,t,e,n,cr,hr,ur,Qa);if(h){s&&(Za.fromBufferAttribute(s,o),Ja.fromBufferAttribute(s,l),Ka.fromBufferAttribute(s,c),h.uv=Hn.getInterpolation(Qa,cr,hr,ur,Za,Ja,Ka,new ct)),r&&(Za.fromBufferAttribute(r,o),Ja.fromBufferAttribute(r,l),Ka.fromBufferAttribute(r,c),h.uv1=Hn.getInterpolation(Qa,cr,hr,ur,Za,Ja,Ka,new ct),h.uv2=h.uv1),a&&(hu.fromBufferAttribute(a,o),uu.fromBufferAttribute(a,l),fu.fromBufferAttribute(a,c),h.normal=Hn.getInterpolation(Qa,cr,hr,ur,hu,uu,fu,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new A,materialIndex:0};Hn.getNormal(cr,hr,ur,u.normal),h.face=u}return h}class Tn extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(x,m,p,_,v,y,R,b,E,D,M){const w=y/E,N=R/D,H=y/2,nt=R/2,I=b/2,z=E+1,W=D+1;let Q=0,J=0;const K=new A;for(let et=0;et<W;et++){const ht=et*N-nt;for(let ut=0;ut<z;ut++){const q=ut*w-H;K[x]=q*_,K[m]=ht*v,K[p]=I,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=b>0?1:-1,h.push(K.x,K.y,K.z),u.push(ut/E),u.push(1-et/D),Q+=1}}for(let et=0;et<D;et++)for(let ht=0;ht<E;ht++){const ut=d+ht+z*et,q=d+ht+z*(et+1),at=d+(ht+1)+z*(et+1),St=d+(ht+1)+z*et;l.push(ut,q,St),l.push(q,at,St),J+=6}o.addGroup(f,J,M),f+=J,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ir(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Sn(i){const t={};for(let e=0;e<i.length;e++){const n=Ir(i[e]);for(const s in n)t[s]=n[s]}return t}function Zp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Df(i){return i.getRenderTarget()===null?i.outputColorSpace:be.workingColorSpace}const Jp={clone:Ir,merge:Sn};var Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends $s{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=Zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class If extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class On extends If{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return va*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ca*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fr=-90,dr=1;class t0 extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new On(fr,dr,t,e);s.layers=this.layers,this.add(s);const r=new On(fr,dr,t,e);r.layers=this.layers,this.add(r);const a=new On(fr,dr,t,e);a.layers=this.layers,this.add(a);const o=new On(fr,dr,t,e);o.layers=this.layers,this.add(o);const l=new On(fr,dr,t,e);l.layers=this.layers,this.add(l);const c=new On(fr,dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uf extends Cn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pr,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class e0 extends Gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ns?_e:Vn),this.texture=new Uf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Tn(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:os});r.uniforms.tEquirect.value=e;const a=new B(s,r),o=e.minFilter;return e.minFilter===ma&&(e.minFilter=Gn),new t0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ol=new A,n0=new A,i0=new se;class ts{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ol.subVectors(n,e).cross(n0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||i0.getNormalMatrix(t),s=this.coplanarPoint(Ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Hr,no=new A;class Gc{constructor(t=new ts,e=new ts,n=new ts,s=new ts,r=new ts,a=new ts){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+_).normalize(),n[3].setComponents(l-a,d-h,m-g,y-_).normalize(),n[4].setComponents(l-o,d-u,m-x,y-v).normalize(),e===Li)n[5].setComponents(l+o,d+u,m+x,y+v).normalize();else if(e===Io)n[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(no.x=s.normal.x>0?t.max.x:t.min.x,no.y=s.normal.y>0?t.max.y:t.min.y,no.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function s0(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){const p=g[x];e?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Fn extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const _=p*d-a;for(let v=0;v<c;v++){const y=v*u-r;g.push(y,-_,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const v=_+c*p,y=_+c*(p+1),R=_+1+c*(p+1),b=_+1+c*p;f.push(v,y,b),f.push(y,R,b)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.width,t.height,t.widthSegments,t.heightSegments)}}var r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,C0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",F0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,O0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ym=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:r0,alphahash_pars_fragment:a0,alphamap_fragment:o0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:f0,batching_pars_vertex:d0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:v0,iridescence_fragment:_0,bumpmap_pars_fragment:x0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:M0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:b0,color_fragment:w0,color_pars_fragment:E0,color_pars_vertex:T0,color_vertex:A0,common:C0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:P0,displacementmap_pars_vertex:L0,displacementmap_vertex:D0,emissivemap_fragment:I0,emissivemap_pars_fragment:U0,colorspace_fragment:N0,colorspace_pars_fragment:F0,envmap_fragment:O0,envmap_common_pars_fragment:z0,envmap_pars_fragment:B0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:K0,envmap_vertex:G0,fog_vertex:H0,fog_pars_vertex:V0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:q0,lightmap_fragment:$0,lightmap_pars_fragment:Y0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:Z0,lights_pars_begin:J0,lights_toon_fragment:Q0,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:am,lights_fragment_end:om,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:um,map_fragment:fm,map_pars_fragment:dm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:vm,morphcolor_vertex:_m,morphnormal_vertex:xm,morphtarget_pars_vertex:ym,morphtarget_vertex:Mm,normal_fragment_begin:Sm,normal_fragment_maps:bm,normal_pars_fragment:wm,normal_pars_vertex:Em,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Lm,opaque_fragment:Dm,packing:Im,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Gm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Vm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:$m,specularmap_fragment:Ym,specularmap_pars_fragment:jm,tonemapping_fragment:Zm,tonemapping_pars_fragment:Jm,transmission_fragment:Km,transmission_pars_fragment:Qm,uv_pars_fragment:tg,uv_pars_vertex:eg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:ag,backgroundCube_frag:og,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:fg,distanceRGBA_frag:dg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:vg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:Mg,meshmatcap_vert:Sg,meshmatcap_frag:bg,meshnormal_vert:wg,meshnormal_frag:Eg,meshphong_vert:Tg,meshphong_frag:Ag,meshphysical_vert:Cg,meshphysical_frag:Rg,meshtoon_vert:Pg,meshtoon_frag:Lg,points_vert:Dg,points_frag:Ig,shadow_vert:Ug,shadow_frag:Ng,sprite_vert:Fg,sprite_frag:Og},gt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ci={basic:{uniforms:Sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:Sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:Sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:Sn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:Sn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:Sn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:Sn([gt.points,gt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:Sn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:Sn([gt.common,gt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:Sn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:Sn([gt.sprite,gt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:Sn([gt.common,gt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:Sn([gt.lights,gt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ci.physical={uniforms:Sn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const io={r:0,b:0,g:0};function zg(i,t,e,n,s,r,a){const o=new Gt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),_=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ko)?(h===void 0&&(h=new B(new Tn(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Ir(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=be.getTransfer(v.colorSpace)!==Pe,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new B(new Fn(2,2),new di({name:"BackgroundMaterial",uniforms:Ir(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=be.getTransfer(v.colorSpace)!==Pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(io,Df(i)),n.buffers.color.setClear(io.r,io.g,io.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function Bg(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(I,z,W,Q,J){let K=!1;if(a){const et=x(Q,W,z);c!==et&&(c=et,f(c.object)),K=p(I,Q,W,J),K&&_(I,Q,W,J)}else{const et=z.wireframe===!0;(c.geometry!==Q.id||c.program!==W.id||c.wireframe!==et)&&(c.geometry=Q.id,c.program=W.id,c.wireframe=et,K=!0)}J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,D(I,z,W,Q),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,z,W){const Q=W.wireframe===!0;let J=o[I.id];J===void 0&&(J={},o[I.id]=J);let K=J[z.id];K===void 0&&(K={},J[z.id]=K);let et=K[Q];return et===void 0&&(et=m(d()),K[Q]=et),et}function m(I){const z=[],W=[],Q=[];for(let J=0;J<s;J++)z[J]=0,W[J]=0,Q[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:Q,object:I,attributes:{},index:null}}function p(I,z,W,Q){const J=c.attributes,K=z.attributes;let et=0;const ht=W.getAttributes();for(const ut in ht)if(ht[ut].location>=0){const at=J[ut];let St=K[ut];if(St===void 0&&(ut==="instanceMatrix"&&I.instanceMatrix&&(St=I.instanceMatrix),ut==="instanceColor"&&I.instanceColor&&(St=I.instanceColor)),at===void 0||at.attribute!==St||St&&at.data!==St.data)return!0;et++}return c.attributesNum!==et||c.index!==Q}function _(I,z,W,Q){const J={},K=z.attributes;let et=0;const ht=W.getAttributes();for(const ut in ht)if(ht[ut].location>=0){let at=K[ut];at===void 0&&(ut==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),ut==="instanceColor"&&I.instanceColor&&(at=I.instanceColor));const St={};St.attribute=at,at&&at.data&&(St.data=at.data),J[ut]=St,et++}c.attributes=J,c.attributesNum=et,c.index=Q}function v(){const I=c.newAttributes;for(let z=0,W=I.length;z<W;z++)I[z]=0}function y(I){R(I,0)}function R(I,z){const W=c.newAttributes,Q=c.enabledAttributes,J=c.attributeDivisors;W[I]=1,Q[I]===0&&(i.enableVertexAttribArray(I),Q[I]=1),J[I]!==z&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),J[I]=z)}function b(){const I=c.newAttributes,z=c.enabledAttributes;for(let W=0,Q=z.length;W<Q;W++)z[W]!==I[W]&&(i.disableVertexAttribArray(W),z[W]=0)}function E(I,z,W,Q,J,K,et){et===!0?i.vertexAttribIPointer(I,z,W,J,K):i.vertexAttribPointer(I,z,W,Q,J,K)}function D(I,z,W,Q){if(n.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const J=Q.attributes,K=W.getAttributes(),et=z.defaultAttributeValues;for(const ht in K){const ut=K[ht];if(ut.location>=0){let q=J[ht];if(q===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){const at=q.normalized,St=q.itemSize,Pt=e.get(q);if(Pt===void 0)continue;const Tt=Pt.buffer,Ht=Pt.type,jt=Pt.bytesPerElement,Lt=n.isWebGL2===!0&&(Ht===i.INT||Ht===i.UNSIGNED_INT||q.gpuType===mf);if(q.isInterleavedBufferAttribute){const Xt=q.data,P=Xt.stride,dt=q.offset;if(Xt.isInstancedInterleavedBuffer){for(let Z=0;Z<ut.locationSize;Z++)R(ut.location+Z,Xt.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let Z=0;Z<ut.locationSize;Z++)y(ut.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let Z=0;Z<ut.locationSize;Z++)E(ut.location+Z,St/ut.locationSize,Ht,at,P*jt,(dt+St/ut.locationSize*Z)*jt,Lt)}else{if(q.isInstancedBufferAttribute){for(let Xt=0;Xt<ut.locationSize;Xt++)R(ut.location+Xt,q.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Xt=0;Xt<ut.locationSize;Xt++)y(ut.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let Xt=0;Xt<ut.locationSize;Xt++)E(ut.location+Xt,St/ut.locationSize,Ht,at,St*jt,St/ut.locationSize*Xt*jt,Lt)}}else if(et!==void 0){const at=et[ht];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(ut.location,at);break;case 3:i.vertexAttrib3fv(ut.location,at);break;case 4:i.vertexAttrib4fv(ut.location,at);break;default:i.vertexAttrib1fv(ut.location,at)}}}}b()}function M(){H();for(const I in o){const z=o[I];for(const W in z){const Q=z[W];for(const J in Q)g(Q[J].object),delete Q[J];delete z[W]}delete o[I]}}function w(I){if(o[I.id]===void 0)return;const z=o[I.id];for(const W in z){const Q=z[W];for(const J in Q)g(Q[J].object),delete Q[J];delete z[W]}delete o[I.id]}function N(I){for(const z in o){const W=o[z];if(W[I.id]===void 0)continue;const Q=W[I.id];for(const J in Q)g(Q[J].object),delete Q[J];delete W[I.id]}}function H(){nt(),h=!0,c!==l&&(c=l,f(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:nt,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function kg(i,t,e,n){const s=n.isWebGL2;let r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Gg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=a||t.has("OES_texture_float"),R=v&&y,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:b}}function Hg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ts,o=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,v=_*4;let y=p.clippingState||null;l.value=y,y=h(g,d,v,f);for(let R=0;R!==v;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==x;++v,y+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Vg(i){let t=new WeakMap;function e(a,o){return o===lc?a.mapping=Pr:o===cc&&(a.mapping=Lr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===lc||o===cc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new e0(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ff extends If{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const yr=4,du=[.125,.215,.35,.446,.526,.582],Cs=20,zl=new Ff,pu=new Gt;let Bl=null,kl=0,Gl=0;const Es=(1+Math.sqrt(5))/2,pr=1/Es,mu=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Es,pr),new A(0,Es,-pr),new A(pr,0,Es),new A(-pr,0,Es),new A(Es,pr,0),new A(-Es,pr,0)];class gu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,kl,Gl),t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pr||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:ga,format:Zn,colorSpace:Oi,depthBuffer:!1},s=vu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=Xg(r,t,e)}return s}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,zl)}_sceneToCubeUV(t,e,n,s){const o=new On(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pu),h.toneMapping=ls,h.autoClear=!1;const f=new ge({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new B(new Tn,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(pu),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;so(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Pr||t.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new B(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;so(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,zl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mu[(s-1)%mu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new B(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Cs;m>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const p=[];let _=0;for(let E=0;E<Cs;++E){const D=E/x,M=Math.exp(-D*D/2);p.push(M),E===0?_+=M:E<m&&(_+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[s],R=3*y*(s>v-yr?s-v+yr:0),b=4*(this._cubeSize-y);so(e,R,b,3*y,2*y),l.setRenderTarget(e),l.render(u,zl)}}function Wg(i){const t=[],e=[],n=[];let s=i;const r=i-yr+1+du.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-yr?l=du[a-i+yr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,D=b>2?0:-1,M=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];_.set(M,x*g*b),v.set(d,m*g*b);const w=[b,b,b,b,b,b];y.set(w,p*g*b)}const R=new ze;R.setAttribute("position",new _n(_,x)),R.setAttribute("uv",new _n(v,m)),R.setAttribute("faceIndex",new _n(y,p)),t.push(R),s>yr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vu(i,t,e){const n=new Gs(i,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xg(i,t,e){const n=new Float32Array(Cs),s=new A(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function _u(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function xu(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===lc||l===cc,h=l===Pr||l===Lr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new gu(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new gu(i));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $g(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yg(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){const R=_[v+0],b=_[v+1],E=_[v+2];d.push(R,b,b,E,E,R)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const R=v+0,b=v+1,E=v+2;d.push(R,b,b,E,E,R)}}else return;const m=new(Ef(d)?Lf:Pf)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jg(i,t,e,n){const s=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*l),e.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,x),e.update(g,r,x)}function d(f,g,x){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,x);let p=0;for(let _=0;_<x;_++)p+=g[_];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Zg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jg(i,t){return i[0]-t[0]}function Kg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Qg(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new Fe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==x){let z=function(){nt.dispose(),r.delete(h),h.removeEventListener("dispose",z)};var f=z;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),R===!0&&(M=3);let w=h.attributes.position.count*M,N=1;w>t.maxTextureSize&&(N=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const H=new Float32Array(w*N*4*x),nt=new Cf(H,w,N,x);nt.type=rs,nt.needsUpdate=!0;const I=M*4;for(let W=0;W<x;W++){const Q=b[W],J=E[W],K=D[W],et=w*N*4*W;for(let ht=0;ht<Q.count;ht++){const ut=ht*I;v===!0&&(a.fromBufferAttribute(Q,ht),H[et+ut+0]=a.x,H[et+ut+1]=a.y,H[et+ut+2]=a.z,H[et+ut+3]=0),y===!0&&(a.fromBufferAttribute(J,ht),H[et+ut+4]=a.x,H[et+ut+5]=a.y,H[et+ut+6]=a.z,H[et+ut+7]=0),R===!0&&(a.fromBufferAttribute(K,ht),H[et+ut+8]=a.x,H[et+ut+9]=a.y,H[et+ut+10]=a.z,H[et+ut+11]=K.itemSize===4?a.w:1)}}m={count:x,texture:nt,size:new ct(w,N)},r.set(h,m),h.addEventListener("dispose",z)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let x=n[h.id];if(x===void 0||x.length!==g){x=[];for(let y=0;y<g;y++)x[y]=[y,0];n[h.id]=x}for(let y=0;y<g;y++){const R=x[y];R[0]=y,R[1]=d[y]}x.sort(Kg);for(let y=0;y<8;y++)y<g&&x[y][1]?(o[y][0]=x[y][0],o[y][1]=x[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Jg);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const R=o[y],b=R[0],E=R[1];b!==Number.MAX_SAFE_INTEGER&&E?(m&&h.getAttribute("morphTarget"+y)!==m[b]&&h.setAttribute("morphTarget"+y,m[b]),p&&h.getAttribute("morphNormal"+y)!==p[b]&&h.setAttribute("morphNormal"+y,p[b]),s[y]=E,_+=E):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const v=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function tv(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Of extends Cn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Us,h!==Us&&h!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=ss),n===void 0&&h===Dr&&(n=Is),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zf=new Cn,Bf=new Of(1,1);Bf.compareFunction=wf;const kf=new Cf,Gf=new zp,Hf=new Uf,yu=[],Mu=[],Su=new Float32Array(16),bu=new Float32Array(9),wu=new Float32Array(4);function Vr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=yu[s];if(r===void 0&&(r=new Float32Array(s),yu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tl(i,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ev(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function rv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;wu.set(n),i.uniformMatrix2fv(this.addr,!1,wu),nn(e,n)}}function av(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;bu.set(n),i.uniformMatrix3fv(this.addr,!1,bu),nn(e,n)}}function ov(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Su.set(n),i.uniformMatrix4fv(this.addr,!1,Su),nn(e,n)}}function lv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function fv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function mv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function gv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Bf:zf;e.setTexture2D(t||r,s)}function vv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gf,s)}function _v(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hf,s)}function xv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kf,s)}function yv(i){switch(i){case 5126:return ev;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return av;case 35676:return ov;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return fv;case 36294:return dv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}function Mv(i,t){i.uniform1fv(this.addr,t)}function Sv(i,t){const e=Vr(t,this.size,2);i.uniform2fv(this.addr,e)}function bv(i,t){const e=Vr(t,this.size,3);i.uniform3fv(this.addr,e)}function wv(i,t){const e=Vr(t,this.size,4);i.uniform4fv(this.addr,e)}function Ev(i,t){const e=Vr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tv(i,t){const e=Vr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Av(i,t){const e=Vr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cv(i,t){i.uniform1iv(this.addr,t)}function Rv(i,t){i.uniform2iv(this.addr,t)}function Pv(i,t){i.uniform3iv(this.addr,t)}function Lv(i,t){i.uniform4iv(this.addr,t)}function Dv(i,t){i.uniform1uiv(this.addr,t)}function Iv(i,t){i.uniform2uiv(this.addr,t)}function Uv(i,t){i.uniform3uiv(this.addr,t)}function Nv(i,t){i.uniform4uiv(this.addr,t)}function Fv(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||zf,r[a])}function Ov(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gf,r[a])}function zv(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hf,r[a])}function Bv(i,t,e){const n=this.cache,s=t.length,r=tl(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||kf,r[a])}function kv(i){switch(i){case 5126:return Mv;case 35664:return Sv;case 35665:return bv;case 35666:return wv;case 35674:return Ev;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return Cv;case 35667:case 35671:return Rv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Iv;case 36295:return Uv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Bv}}class Gv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yv(e.type)}}class Hv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kv(e.type)}}class Vv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function Eu(i,t){i.seq.push(t),i.map[t.id]=t}function Wv(i,t,e){const n=i.name,s=n.length;for(Hl.lastIndex=0;;){const r=Hl.exec(n),a=Hl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Eu(e,c===void 0?new Gv(o,i,t):new Hv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Vv(o),Eu(e,u)),e=u}}}class xo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Wv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Tu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Xv=37297;let qv=0;function $v(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Yv(i){const t=be.getPrimaries(be.workingColorSpace),e=be.getPrimaries(i);let n;switch(t===e?n="":t===Do&&e===Lo?n="LinearDisplayP3ToLinearSRGB":t===Lo&&e===Do&&(n="LinearSRGBToLinearDisplayP3"),i){case Oi:case Qo:return[n,"LinearTransferOETF"];case _e:case Oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Au(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$v(i.getShaderSource(t),a)}else return s}function jv(i,t){const e=Yv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zv(i,t){let e;switch(t){case jd:e="Linear";break;case Zd:e="Reinhard";break;case Jd:e="OptimizedCineon";break;case df:e="ACESFilmic";break;case Qd:e="AgX";break;case Kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Jv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function Kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Mr).join(`
`)}function Qv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function t_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Mr(i){return i!==""}function Cu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(e_,i_)}const n_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function i_(i,t){let e=ie[t];if(e===void 0){const n=n_.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(i){return i.replace(s_,r_)}function r_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function a_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===uf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function o_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pr:case Lr:t="ENVMAP_TYPE_CUBE";break;case Ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function c_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ff:t="ENVMAP_BLENDING_MULTIPLY";break;case $d:t="ENVMAP_BLENDING_MIX";break;case Yd:t="ENVMAP_BLENDING_ADD";break}return t}function h_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function u_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=a_(e),c=o_(e),h=l_(e),u=c_(e),d=h_(e),f=e.isWebGL2?"":Jv(e),g=Kv(e),x=Qv(r),m=s.createProgram();let p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Mr).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Mr).join(`
`),_.length>0&&(_+=`
`)):(p=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),_=[f,Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ls?"#define TONE_MAPPING":"",e.toneMapping!==ls?ie.tonemapping_pars_fragment:"",e.toneMapping!==ls?Zv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,jv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=pc(a),a=Cu(a,e),a=Ru(a,e),o=pc(o),o=Cu(o,e),o=Ru(o,e),a=Pu(a),o=Pu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+p+a,R=v+_+o,b=Tu(s,s.VERTEX_SHADER,y),E=Tu(s,s.FRAGMENT_SHADER,R);s.attachShader(m,b),s.attachShader(m,E),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(H){if(i.debug.checkShaderErrors){const nt=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(b).trim(),z=s.getShaderInfoLog(E).trim();let W=!0,Q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,E);else{const J=Au(s,b,"vertex"),K=Au(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+J+`
`+K)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(I===""||z==="")&&(Q=!1);Q&&(H.diagnostics={runnable:W,programLog:nt,vertexShader:{log:I,prefix:p},fragmentShader:{log:z,prefix:_}})}s.deleteShader(b),s.deleteShader(E),M=new xo(s,m),w=t_(s,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,Xv)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qv++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=E,this}let f_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new p_(t),e.set(t,n)),n}}class p_{constructor(t){this.id=f_++,this.code=t,this.usedTimes=0}}function m_(i,t,e,n,s,r,a){const o=new kc,l=new d_,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,w,N,H,nt){const I=H.fog,z=nt.geometry,W=M.isMeshStandardMaterial?H.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),J=Q&&Q.mapping===Ko?Q.image.height:null,K=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ht=et!==void 0?et.length:0;let ut=0;z.morphAttributes.position!==void 0&&(ut=1),z.morphAttributes.normal!==void 0&&(ut=2),z.morphAttributes.color!==void 0&&(ut=3);let q,at,St,Pt;if(K){const rn=ci[K];q=rn.vertexShader,at=rn.fragmentShader}else q=M.vertexShader,at=M.fragmentShader,l.update(M),St=l.getVertexShaderID(M),Pt=l.getFragmentShaderID(M);const Tt=i.getRenderTarget(),Ht=nt.isInstancedMesh===!0,jt=nt.isBatchedMesh===!0,Lt=!!M.map,Xt=!!M.matcap,P=!!Q,dt=!!M.aoMap,Z=!!M.lightMap,tt=!!M.bumpMap,$=!!M.normalMap,It=!!M.displacementMap,Mt=!!M.emissiveMap,T=!!M.metalnessMap,S=!!M.roughnessMap,F=M.anisotropy>0,ot=M.clearcoat>0,lt=M.iridescence>0,it=M.sheen>0,Ct=M.transmission>0,pt=F&&!!M.anisotropyMap,wt=ot&&!!M.clearcoatMap,Nt=ot&&!!M.clearcoatNormalMap,qt=ot&&!!M.clearcoatRoughnessMap,rt=lt&&!!M.iridescenceMap,oe=lt&&!!M.iridescenceThicknessMap,ne=it&&!!M.sheenColorMap,Vt=it&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,Et=!!M.specularColorMap,Jt=!!M.specularIntensityMap,le=Ct&&!!M.transmissionMap,xe=Ct&&!!M.thicknessMap,Kt=!!M.gradientMap,mt=!!M.alphaMap,L=M.alphaTest>0,vt=!!M.alphaHash,ft=!!M.extensions,Bt=!!z.attributes.uv1,Ut=!!z.attributes.uv2,me=!!z.attributes.uv3;let fe=ls;return M.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(fe=i.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:at,defines:M.defines,customVertexShaderID:St,customFragmentShaderID:Pt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:jt,instancing:Ht,instancingColor:Ht&&nt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Oi,map:Lt,matcap:Xt,envMap:P,envMapMode:P&&Q.mapping,envMapCubeUVHeight:J,aoMap:dt,lightMap:Z,bumpMap:tt,normalMap:$,displacementMap:d&&It,emissiveMap:Mt,normalMapObjectSpace:$&&M.normalMapType===up,normalMapTangentSpace:$&&M.normalMapType===bf,metalnessMap:T,roughnessMap:S,anisotropy:F,anisotropyMap:pt,clearcoat:ot,clearcoatMap:wt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:qt,iridescence:lt,iridescenceMap:rt,iridescenceThicknessMap:oe,sheen:it,sheenColorMap:ne,sheenRoughnessMap:Vt,specularMap:Rt,specularColorMap:Et,specularIntensityMap:Jt,transmission:Ct,transmissionMap:le,thicknessMap:xe,gradientMap:Kt,opaque:M.transparent===!1&&M.blending===br,alphaMap:mt,alphaTest:L,alphaHash:vt,combine:M.combine,mapUv:Lt&&x(M.map.channel),aoMapUv:dt&&x(M.aoMap.channel),lightMapUv:Z&&x(M.lightMap.channel),bumpMapUv:tt&&x(M.bumpMap.channel),normalMapUv:$&&x(M.normalMap.channel),displacementMapUv:It&&x(M.displacementMap.channel),emissiveMapUv:Mt&&x(M.emissiveMap.channel),metalnessMapUv:T&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:pt&&x(M.anisotropyMap.channel),clearcoatMapUv:wt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&x(M.sheenRoughnessMap.channel),specularMapUv:Rt&&x(M.specularMap.channel),specularColorMapUv:Et&&x(M.specularColorMap.channel),specularIntensityMapUv:Jt&&x(M.specularIntensityMap.channel),transmissionMapUv:le&&x(M.transmissionMap.channel),thicknessMapUv:xe&&x(M.thicknessMap.channel),alphaMapUv:mt&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&($||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Bt,vertexUv2s:Ut,vertexUv3s:me,pointsUvs:nt.isPoints===!0&&!!z.attributes.uv&&(Lt||mt),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:ut,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&M.map.isVideoTexture===!0&&be.getTransfer(M.map.colorSpace)===Pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pe,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ft&&M.extensions.derivatives===!0,extensionFragDepth:ft&&M.extensions.fragDepth===!0,extensionDrawBuffers:ft&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(_(w,M),v(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const w=g[M.type];let N;if(w){const H=ci[w];N=Jp.clone(H.uniforms)}else N=M.uniforms;return N}function R(M,w){let N;for(let H=0,nt=c.length;H<nt;H++){const I=c[H];if(I.cacheKey===w){N=I,++N.usedTimes;break}}return N===void 0&&(N=new u_(i,w,M,r),c.push(N)),N}function b(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:D}}function g_(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function v_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Du(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Iu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||v_),n.length>1&&n.sort(d||Du),s.length>1&&s.sort(d||Du)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function __(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Iu,i.set(n,[a])):s>=r.length?(a=new Iu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function x_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Gt};break;case"SpotLight":e={position:new A,direction:new A,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function y_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let M_=0;function S_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b_(i,t){const e=new x_,n=y_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new A);const r=new A,a=new Re,o=new Re;function l(h,u){let d=0,f=0,g=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let x=0,m=0,p=0,_=0,v=0,y=0,R=0,b=0,E=0,D=0,M=0;h.sort(S_);const w=u===!0?Math.PI:1;for(let H=0,nt=h.length;H<nt;H++){const I=h[H],z=I.color,W=I.intensity,Q=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=z.r*W*w,f+=z.g*W*w,g+=z.b*W*w;else if(I.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(I.sh.coefficients[K],W);M++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const et=I.shadow,ht=n.get(I);ht.shadowBias=et.bias,ht.shadowNormalBias=et.normalBias,ht.shadowRadius=et.radius,ht.shadowMapSize=et.mapSize,s.directionalShadow[x]=ht,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=I.shadow.matrix,y++}s.directional[x]=K,x++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(z).multiplyScalar(W*w),K.distance=Q,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,s.spot[p]=K;const et=I.shadow;if(I.map&&(s.spotLightMap[E]=I.map,E++,et.updateMatrices(I),I.castShadow&&D++),s.spotLightMatrix[p]=et.matrix,I.castShadow){const ht=n.get(I);ht.shadowBias=et.bias,ht.shadowNormalBias=et.normalBias,ht.shadowRadius=et.radius,ht.shadowMapSize=et.mapSize,s.spotShadow[p]=ht,s.spotShadowMap[p]=J,b++}p++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(z).multiplyScalar(W),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),s.rectArea[_]=K,_++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*w),K.distance=I.distance,K.decay=I.decay,I.castShadow){const et=I.shadow,ht=n.get(I);ht.shadowBias=et.bias,ht.shadowNormalBias=et.normalBias,ht.shadowRadius=et.radius,ht.shadowMapSize=et.mapSize,ht.shadowCameraNear=et.camera.near,ht.shadowCameraFar=et.camera.far,s.pointShadow[m]=ht,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=I.shadow.matrix,R++}s.point[m]=K,m++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(W*w),K.groundColor.copy(I.groundColor).multiplyScalar(W*w),s.hemi[v]=K,v++}}_>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==_||N.hemiLength!==v||N.numDirectionalShadows!==y||N.numPointShadows!==R||N.numSpotShadows!==b||N.numSpotMaps!==E||N.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=b+E-D,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=_,N.hemiLength=v,N.numDirectionalShadows=y,N.numPointShadows=R,N.numSpotShadows=b,N.numSpotMaps=E,N.numLightProbes=M,s.version=M_++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0;const p=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){const y=h[_];if(y.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(y.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const R=s.rectArea[x];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const R=s.point[f];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Uu(i,t){const e=new b_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function w_(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Uu(i,t),e.set(r,[l])):a>=o.length?(l=new Uu(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class E_ extends $s{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T_ extends $s{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R_(i,t,e){let n=new Gc;const s=new ct,r=new ct,a=new Fe,o=new E_({depthPacking:hp}),l=new T_,c={},h=e.maxTextureSize,u={[fs]:dn,[dn]:fs,[pe]:pe},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:A_,fragmentShader:C_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new B(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let p=this.type;this.render=function(b,E,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),H=i.state;H.setBlending(os),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const nt=p!==Ai&&this.type===Ai,I=p===Ai&&this.type!==Ai;for(let z=0,W=b.length;z<W;z++){const Q=b[z],J=Q.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const K=J.getFrameExtents();if(s.multiply(K),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,J.mapSize.y=r.y)),J.map===null||nt===!0||I===!0){const ht=this.type!==Ai?{minFilter:bn,magFilter:bn}:{};J.map!==null&&J.map.dispose(),J.map=new Gs(s.x,s.y,ht),J.map.texture.name=Q.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const et=J.getViewportCount();for(let ht=0;ht<et;ht++){const ut=J.getViewport(ht);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),H.viewport(a),J.updateMatrices(Q,ht),n=J.getFrustum(),y(E,D,J.camera,Q,this.type)}J.isPointLightShadow!==!0&&this.type===Ai&&_(J,D),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,w,N)};function _(b,E){const D=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gs(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,D,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,D,f,x,null)}function v(b,E,D,M){let w=null;const N=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)w=N;else if(w=D.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=w.uuid,nt=E.uuid;let I=c[H];I===void 0&&(I={},c[H]=I);let z=I[nt];z===void 0&&(z=w.clone(),I[nt]=z,E.addEventListener("dispose",R)),w=z}if(w.visible=E.visible,w.wireframe=E.wireframe,M===Ai?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=i.properties.get(w);H.light=D}return w}function y(b,E,D,M,w){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Ai)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const nt=t.update(b),I=b.material;if(Array.isArray(I)){const z=nt.groups;for(let W=0,Q=z.length;W<Q;W++){const J=z[W],K=I[J.materialIndex];if(K&&K.visible){const et=v(b,K,M,w);b.onBeforeShadow(i,b,E,D,nt,et,J),i.renderBufferDirect(D,null,nt,et,b,J),b.onAfterShadow(i,b,E,D,nt,et,J)}}}else if(I.visible){const z=v(b,I,M,w);b.onBeforeShadow(i,b,E,D,nt,z,null),i.renderBufferDirect(D,null,nt,z,b,null),b.onAfterShadow(i,b,E,D,nt,z,null)}}const H=b.children;for(let nt=0,I=H.length;nt<I;nt++)y(H[nt],E,D,M,w)}function R(b){b.target.removeEventListener("dispose",R);for(const D in c){const M=c[D],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function P_(i,t,e){const n=e.isWebGL2;function s(){let L=!1;const vt=new Fe;let ft=null;const Bt=new Fe(0,0,0,0);return{setMask:function(Ut){ft!==Ut&&!L&&(i.colorMask(Ut,Ut,Ut,Ut),ft=Ut)},setLocked:function(Ut){L=Ut},setClear:function(Ut,me,fe,Ye,rn){rn===!0&&(Ut*=Ye,me*=Ye,fe*=Ye),vt.set(Ut,me,fe,Ye),Bt.equals(vt)===!1&&(i.clearColor(Ut,me,fe,Ye),Bt.copy(vt))},reset:function(){L=!1,ft=null,Bt.set(-1,0,0,0)}}}function r(){let L=!1,vt=null,ft=null,Bt=null;return{setTest:function(Ut){Ut?jt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(Ut){vt!==Ut&&!L&&(i.depthMask(Ut),vt=Ut)},setFunc:function(Ut){if(ft!==Ut){switch(Ut){case kd:i.depthFunc(i.NEVER);break;case Gd:i.depthFunc(i.ALWAYS);break;case Hd:i.depthFunc(i.LESS);break;case Ro:i.depthFunc(i.LEQUAL);break;case Vd:i.depthFunc(i.EQUAL);break;case Wd:i.depthFunc(i.GEQUAL);break;case Xd:i.depthFunc(i.GREATER);break;case qd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Ut}},setLocked:function(Ut){L=Ut},setClear:function(Ut){Bt!==Ut&&(i.clearDepth(Ut),Bt=Ut)},reset:function(){L=!1,vt=null,ft=null,Bt=null}}}function a(){let L=!1,vt=null,ft=null,Bt=null,Ut=null,me=null,fe=null,Ye=null,rn=null;return{setTest:function(ye){L||(ye?jt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ye){vt!==ye&&!L&&(i.stencilMask(ye),vt=ye)},setFunc:function(ye,an,wn){(ft!==ye||Bt!==an||Ut!==wn)&&(i.stencilFunc(ye,an,wn),ft=ye,Bt=an,Ut=wn)},setOp:function(ye,an,wn){(me!==ye||fe!==an||Ye!==wn)&&(i.stencilOp(ye,an,wn),me=ye,fe=an,Ye=wn)},setLocked:function(ye){L=ye},setClear:function(ye){rn!==ye&&(i.clearStencil(ye),rn=ye)},reset:function(){L=!1,vt=null,ft=null,Bt=null,Ut=null,me=null,fe=null,Ye=null,rn=null}}}const o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,v=null,y=null,R=null,b=null,E=null,D=null,M=new Gt(0,0,0),w=0,N=!1,H=null,nt=null,I=null,z=null,W=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(et)[1]),J=K>=1):et.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),J=K>=2);let ht=null,ut={};const q=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),St=new Fe().fromArray(q),Pt=new Fe().fromArray(at);function Tt(L,vt,ft,Bt){const Ut=new Uint8Array(4),me=i.createTexture();i.bindTexture(L,me),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<ft;fe++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(vt,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(vt+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return me}const Ht={};Ht[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ht[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ht[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ht[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),jt(i.DEPTH_TEST),l.setFunc(Ro),Mt(!1),T(gh),jt(i.CULL_FACE),$(os);function jt(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Lt(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Xt(L,vt){return f[L]!==vt?(i.bindFramebuffer(L,vt),f[L]=vt,n&&(L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=vt),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=vt)),!0):!1}function P(L,vt){let ft=x,Bt=!1;if(L)if(ft=g.get(vt),ft===void 0&&(ft=[],g.set(vt,ft)),L.isWebGLMultipleRenderTargets){const Ut=L.texture;if(ft.length!==Ut.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let me=0,fe=Ut.length;me<fe;me++)ft[me]=i.COLOR_ATTACHMENT0+me;ft.length=Ut.length,Bt=!0}}else ft[0]!==i.COLOR_ATTACHMENT0&&(ft[0]=i.COLOR_ATTACHMENT0,Bt=!0);else ft[0]!==i.BACK&&(ft[0]=i.BACK,Bt=!0);Bt&&(e.isWebGL2?i.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function dt(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const Z={[As]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};if(n)Z[xh]=i.MIN,Z[yh]=i.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(Z[xh]=L.MIN_EXT,Z[yh]=L.MAX_EXT)}const tt={[Ad]:i.ZERO,[Cd]:i.ONE,[Rd]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[Nd]:i.SRC_ALPHA_SATURATE,[Id]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[Ud]:i.ONE_MINUS_DST_COLOR,[Dd]:i.ONE_MINUS_DST_ALPHA,[Fd]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[zd]:i.CONSTANT_ALPHA,[Bd]:i.ONE_MINUS_CONSTANT_ALPHA};function $(L,vt,ft,Bt,Ut,me,fe,Ye,rn,ye){if(L===os){p===!0&&(Lt(i.BLEND),p=!1);return}if(p===!1&&(jt(i.BLEND),p=!0),L!==wd){if(L!==_||ye!==N){if((v!==As||b!==As)&&(i.blendEquation(i.FUNC_ADD),v=As,b=As),ye)switch(L){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ce:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ce:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _h:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,R=null,E=null,D=null,M.set(0,0,0),w=0,_=L,N=ye}return}Ut=Ut||vt,me=me||ft,fe=fe||Bt,(vt!==v||Ut!==b)&&(i.blendEquationSeparate(Z[vt],Z[Ut]),v=vt,b=Ut),(ft!==y||Bt!==R||me!==E||fe!==D)&&(i.blendFuncSeparate(tt[ft],tt[Bt],tt[me],tt[fe]),y=ft,R=Bt,E=me,D=fe),(Ye.equals(M)===!1||rn!==w)&&(i.blendColor(Ye.r,Ye.g,Ye.b,rn),M.copy(Ye),w=rn),_=L,N=!1}function It(L,vt){L.side===pe?Lt(i.CULL_FACE):jt(i.CULL_FACE);let ft=L.side===dn;vt&&(ft=!ft),Mt(ft),L.blending===br&&L.transparent===!1?$(os):$(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Bt=L.stencilWrite;c.setTest(Bt),Bt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?jt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(L){H!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),H=L)}function T(L){L!==Sd?(jt(i.CULL_FACE),L!==nt&&(L===gh?i.cullFace(i.BACK):L===bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),nt=L}function S(L){L!==I&&(J&&i.lineWidth(L),I=L)}function F(L,vt,ft){L?(jt(i.POLYGON_OFFSET_FILL),(z!==vt||W!==ft)&&(i.polygonOffset(vt,ft),z=vt,W=ft)):Lt(i.POLYGON_OFFSET_FILL)}function ot(L){L?jt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function lt(L){L===void 0&&(L=i.TEXTURE0+Q-1),ht!==L&&(i.activeTexture(L),ht=L)}function it(L,vt,ft){ft===void 0&&(ht===null?ft=i.TEXTURE0+Q-1:ft=ht);let Bt=ut[ft];Bt===void 0&&(Bt={type:void 0,texture:void 0},ut[ft]=Bt),(Bt.type!==L||Bt.texture!==vt)&&(ht!==ft&&(i.activeTexture(ft),ht=ft),i.bindTexture(L,vt||Ht[L]),Bt.type=L,Bt.texture=vt)}function Ct(){const L=ut[ht];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(L){St.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),St.copy(L))}function le(L){Pt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Pt.copy(L))}function xe(L,vt){let ft=u.get(vt);ft===void 0&&(ft=new WeakMap,u.set(vt,ft));let Bt=ft.get(L);Bt===void 0&&(Bt=i.getUniformBlockIndex(vt,L.name),ft.set(L,Bt))}function Kt(L,vt){const Bt=u.get(vt).get(L);h.get(vt)!==Bt&&(i.uniformBlockBinding(vt,Bt,L.__bindingPointIndex),h.set(vt,Bt))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ht=null,ut={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,v=null,y=null,R=null,b=null,E=null,D=null,M=new Gt(0,0,0),w=0,N=!1,H=null,nt=null,I=null,z=null,W=null,St.set(0,0,i.canvas.width,i.canvas.height),Pt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:jt,disable:Lt,bindFramebuffer:Xt,drawBuffers:P,useProgram:dt,setBlending:$,setMaterial:It,setFlipSided:Mt,setCullFace:T,setLineWidth:S,setPolygonOffset:F,setScissorTest:ot,activeTexture:lt,bindTexture:it,unbindTexture:Ct,compressedTexImage2D:pt,compressedTexImage3D:wt,texImage2D:Rt,texImage3D:Et,updateUBOMapping:xe,uniformBlockBinding:Kt,texStorage2D:ne,texStorage3D:Vt,texSubImage2D:Nt,texSubImage3D:qt,compressedTexSubImage2D:rt,compressedTexSubImage3D:oe,scissor:Jt,viewport:le,reset:mt}}function L_(i,t,e,n,s,r,a){const o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return f?new OffscreenCanvas(T,S):No("canvas")}function x(T,S,F,ot){let lt=1;if((T.width>ot||T.height>ot)&&(lt=ot/Math.max(T.width,T.height)),lt<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const it=S?Uo:Math.floor,Ct=it(lt*T.width),pt=it(lt*T.height);u===void 0&&(u=g(Ct,pt));const wt=F?g(Ct,pt):u;return wt.width=Ct,wt.height=pt,wt.getContext("2d").drawImage(T,0,0,Ct,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ct+"x"+pt+")."),wt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return dc(T.width)&&dc(T.height)}function p(T){return o?!1:T.wrapS!==jn||T.wrapT!==jn||T.minFilter!==bn&&T.minFilter!==Gn}function _(T,S){return T.generateMipmaps&&S&&T.minFilter!==bn&&T.minFilter!==Gn}function v(T){i.generateMipmap(T)}function y(T,S,F,ot,lt=!1){if(o===!1)return S;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let it=S;if(S===i.RED&&(F===i.FLOAT&&(it=i.R32F),F===i.HALF_FLOAT&&(it=i.R16F),F===i.UNSIGNED_BYTE&&(it=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(it=i.R8UI),F===i.UNSIGNED_SHORT&&(it=i.R16UI),F===i.UNSIGNED_INT&&(it=i.R32UI),F===i.BYTE&&(it=i.R8I),F===i.SHORT&&(it=i.R16I),F===i.INT&&(it=i.R32I)),S===i.RG&&(F===i.FLOAT&&(it=i.RG32F),F===i.HALF_FLOAT&&(it=i.RG16F),F===i.UNSIGNED_BYTE&&(it=i.RG8)),S===i.RGBA){const Ct=lt?Po:be.getTransfer(ot);F===i.FLOAT&&(it=i.RGBA32F),F===i.HALF_FLOAT&&(it=i.RGBA16F),F===i.UNSIGNED_BYTE&&(it=Ct===Pe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function R(T,S,F){return _(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==bn&&T.minFilter!==Gn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function b(T){return T===bn||T===Mh||T===pl?i.NEAREST:i.LINEAR}function E(T){const S=T.target;S.removeEventListener("dispose",E),M(S),S.isVideoTexture&&h.delete(S)}function D(T){const S=T.target;S.removeEventListener("dispose",D),N(S)}function M(T){const S=n.get(T);if(S.__webglInit===void 0)return;const F=T.source,ot=d.get(F);if(ot){const lt=ot[S.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(T),Object.keys(ot).length===0&&d.delete(F)}n.remove(T)}function w(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const F=T.source,ot=d.get(F);delete ot[S.__cacheKey],a.memory.textures--}function N(T){const S=T.texture,F=n.get(T),ot=n.get(S);if(ot.__webglTexture!==void 0&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(F.__webglFramebuffer[lt]))for(let it=0;it<F.__webglFramebuffer[lt].length;it++)i.deleteFramebuffer(F.__webglFramebuffer[lt][it]);else i.deleteFramebuffer(F.__webglFramebuffer[lt]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[lt])}else{if(Array.isArray(F.__webglFramebuffer))for(let lt=0;lt<F.__webglFramebuffer.length;lt++)i.deleteFramebuffer(F.__webglFramebuffer[lt]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let lt=0;lt<F.__webglColorRenderbuffer.length;lt++)F.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[lt]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let lt=0,it=S.length;lt<it;lt++){const Ct=n.get(S[lt]);Ct.__webglTexture&&(i.deleteTexture(Ct.__webglTexture),a.memory.textures--),n.remove(S[lt])}n.remove(S),n.remove(T)}let H=0;function nt(){H=0}function I(){const T=H;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),H+=1,T}function z(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function W(T,S){const F=n.get(T);if(T.isVideoTexture&&It(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const ot=T.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(F,T,S);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function Q(T,S){const F=n.get(T);if(T.version>0&&F.__version!==T.version){St(F,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function J(T,S){const F=n.get(T);if(T.version>0&&F.__version!==T.version){St(F,T,S);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function K(T,S){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Pt(F,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}const et={[Fi]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[hc]:i.MIRRORED_REPEAT},ht={[bn]:i.NEAREST,[Mh]:i.NEAREST_MIPMAP_NEAREST,[pl]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[tp]:i.LINEAR_MIPMAP_NEAREST,[ma]:i.LINEAR_MIPMAP_LINEAR},ut={[fp]:i.NEVER,[_p]:i.ALWAYS,[dp]:i.LESS,[wf]:i.LEQUAL,[pp]:i.EQUAL,[vp]:i.GEQUAL,[mp]:i.GREATER,[gp]:i.NOTEQUAL};function q(T,S,F){if(F?(i.texParameteri(T,i.TEXTURE_WRAP_S,et[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,et[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,et[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[S.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==jn||S.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,b(S.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==bn&&S.minFilter!==Gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===bn||S.minFilter!==pl&&S.minFilter!==ma||S.type===rs&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===ga&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(T,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function at(T,S){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",E));const ot=S.source;let lt=d.get(ot);lt===void 0&&(lt={},d.set(ot,lt));const it=z(S);if(it!==T.__cacheKey){lt[it]===void 0&&(lt[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),lt[it].usedTimes++;const Ct=lt[T.__cacheKey];Ct!==void 0&&(lt[T.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(S)),T.__cacheKey=it,T.__webglTexture=lt[it].texture}return F}function St(T,S,F){let ot=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=i.TEXTURE_3D);const lt=at(T,S),it=S.source;e.bindTexture(ot,T.__webglTexture,i.TEXTURE0+F);const Ct=n.get(it);if(it.version!==Ct.__version||lt===!0){e.activeTexture(i.TEXTURE0+F);const pt=be.getPrimaries(be.workingColorSpace),wt=S.colorSpace===Vn?null:be.getPrimaries(S.colorSpace),Nt=S.colorSpace===Vn||pt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const qt=p(S)&&m(S.image)===!1;let rt=x(S.image,qt,!1,s.maxTextureSize);rt=Mt(S,rt);const oe=m(rt)||o,ne=r.convert(S.format,S.colorSpace);let Vt=r.convert(S.type),Rt=y(S.internalFormat,ne,Vt,S.colorSpace,S.isVideoTexture);q(ot,S,oe);let Et;const Jt=S.mipmaps,le=o&&S.isVideoTexture!==!0&&Rt!==Mf,xe=Ct.__version===void 0||lt===!0,Kt=R(S,rt,oe);if(S.isDepthTexture)Rt=i.DEPTH_COMPONENT,o?S.type===rs?Rt=i.DEPTH_COMPONENT32F:S.type===ss?Rt=i.DEPTH_COMPONENT24:S.type===Is?Rt=i.DEPTH24_STENCIL8:Rt=i.DEPTH_COMPONENT16:S.type===rs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Us&&Rt===i.DEPTH_COMPONENT&&S.type!==Fc&&S.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ss,Vt=r.convert(S.type)),S.format===Dr&&Rt===i.DEPTH_COMPONENT&&(Rt=i.DEPTH_STENCIL,S.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Is,Vt=r.convert(S.type))),xe&&(le?e.texStorage2D(i.TEXTURE_2D,1,Rt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,rt.width,rt.height,0,ne,Vt,null));else if(S.isDataTexture)if(Jt.length>0&&oe){le&&xe&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,Jt[0].width,Jt[0].height);for(let mt=0,L=Jt.length;mt<L;mt++)Et=Jt[mt],le?e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Et.width,Et.height,ne,Vt,Et.data):e.texImage2D(i.TEXTURE_2D,mt,Rt,Et.width,Et.height,0,ne,Vt,Et.data);S.generateMipmaps=!1}else le?(xe&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,ne,Vt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,rt.width,rt.height,0,ne,Vt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){le&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,Rt,Jt[0].width,Jt[0].height,rt.depth);for(let mt=0,L=Jt.length;mt<L;mt++)Et=Jt[mt],S.format!==Zn?ne!==null?le?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Et.width,Et.height,rt.depth,ne,Et.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Rt,Et.width,Et.height,rt.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Et.width,Et.height,rt.depth,ne,Vt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Rt,Et.width,Et.height,rt.depth,0,ne,Vt,Et.data)}else{le&&xe&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,Jt[0].width,Jt[0].height);for(let mt=0,L=Jt.length;mt<L;mt++)Et=Jt[mt],S.format!==Zn?ne!==null?le?e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Et.width,Et.height,ne,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Et.width,Et.height,ne,Vt,Et.data):e.texImage2D(i.TEXTURE_2D,mt,Rt,Et.width,Et.height,0,ne,Vt,Et.data)}else if(S.isDataArrayTexture)le?(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ne,Vt,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,rt.width,rt.height,rt.depth,0,ne,Vt,rt.data);else if(S.isData3DTexture)le?(xe&&e.texStorage3D(i.TEXTURE_3D,Kt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ne,Vt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,rt.width,rt.height,rt.depth,0,ne,Vt,rt.data);else if(S.isFramebufferTexture){if(xe)if(le)e.texStorage2D(i.TEXTURE_2D,Kt,Rt,rt.width,rt.height);else{let mt=rt.width,L=rt.height;for(let vt=0;vt<Kt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Rt,mt,L,0,ne,Vt,null),mt>>=1,L>>=1}}else if(Jt.length>0&&oe){le&&xe&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,Jt[0].width,Jt[0].height);for(let mt=0,L=Jt.length;mt<L;mt++)Et=Jt[mt],le?e.texSubImage2D(i.TEXTURE_2D,mt,0,0,ne,Vt,Et):e.texImage2D(i.TEXTURE_2D,mt,Rt,ne,Vt,Et);S.generateMipmaps=!1}else le?(xe&&e.texStorage2D(i.TEXTURE_2D,Kt,Rt,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,Vt,rt)):e.texImage2D(i.TEXTURE_2D,0,Rt,ne,Vt,rt);_(S,oe)&&v(ot),Ct.__version=it.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Pt(T,S,F){if(S.image.length!==6)return;const ot=at(T,S),lt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const it=n.get(lt);if(lt.version!==it.__version||ot===!0){e.activeTexture(i.TEXTURE0+F);const Ct=be.getPrimaries(be.workingColorSpace),pt=S.colorSpace===Vn?null:be.getPrimaries(S.colorSpace),wt=S.colorSpace===Vn||Ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Nt=S.isCompressedTexture||S.image[0].isCompressedTexture,qt=S.image[0]&&S.image[0].isDataTexture,rt=[];for(let mt=0;mt<6;mt++)!Nt&&!qt?rt[mt]=x(S.image[mt],!1,!0,s.maxCubemapSize):rt[mt]=qt?S.image[mt].image:S.image[mt],rt[mt]=Mt(S,rt[mt]);const oe=rt[0],ne=m(oe)||o,Vt=r.convert(S.format,S.colorSpace),Rt=r.convert(S.type),Et=y(S.internalFormat,Vt,Rt,S.colorSpace),Jt=o&&S.isVideoTexture!==!0,le=it.__version===void 0||ot===!0;let xe=R(S,oe,ne);q(i.TEXTURE_CUBE_MAP,S,ne);let Kt;if(Nt){Jt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Et,oe.width,oe.height);for(let mt=0;mt<6;mt++){Kt=rt[mt].mipmaps;for(let L=0;L<Kt.length;L++){const vt=Kt[L];S.format!==Zn?Vt!==null?Jt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,L,0,0,vt.width,vt.height,Vt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,L,Et,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,L,0,0,vt.width,vt.height,Vt,Rt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,L,Et,vt.width,vt.height,0,Vt,Rt,vt.data)}}}else{Kt=S.mipmaps,Jt&&le&&(Kt.length>0&&xe++,e.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Et,rt[0].width,rt[0].height));for(let mt=0;mt<6;mt++)if(qt){Jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,rt[mt].width,rt[mt].height,Vt,Rt,rt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Et,rt[mt].width,rt[mt].height,0,Vt,Rt,rt[mt].data);for(let L=0;L<Kt.length;L++){const ft=Kt[L].image[mt].image;Jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,L+1,0,0,ft.width,ft.height,Vt,Rt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,L+1,Et,ft.width,ft.height,0,Vt,Rt,ft.data)}}else{Jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Vt,Rt,rt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Et,Vt,Rt,rt[mt]);for(let L=0;L<Kt.length;L++){const vt=Kt[L];Jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,L+1,0,0,Vt,Rt,vt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,L+1,Et,Vt,Rt,vt.image[mt])}}}_(S,ne)&&v(i.TEXTURE_CUBE_MAP),it.__version=lt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Tt(T,S,F,ot,lt,it){const Ct=r.convert(F.format,F.colorSpace),pt=r.convert(F.type),wt=y(F.internalFormat,Ct,pt,F.colorSpace);if(!n.get(S).__hasExternalTextures){const qt=Math.max(1,S.width>>it),rt=Math.max(1,S.height>>it);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,wt,qt,rt,S.depth,0,Ct,pt,null):e.texImage2D(lt,it,wt,qt,rt,0,Ct,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),$(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,lt,n.get(F).__webglTexture,0,tt(S)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,lt,n.get(F).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(T,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let ot=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||$(S)){const lt=S.depthTexture;lt&&lt.isDepthTexture&&(lt.type===rs?ot=i.DEPTH_COMPONENT32F:lt.type===ss&&(ot=i.DEPTH_COMPONENT24));const it=tt(S);$(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,ot,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,it,ot,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ot,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const ot=tt(S);F&&$(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,i.DEPTH24_STENCIL8,S.width,S.height):$(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const ot=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let lt=0;lt<ot.length;lt++){const it=ot[lt],Ct=r.convert(it.format,it.colorSpace),pt=r.convert(it.type),wt=y(it.internalFormat,Ct,pt,it.colorSpace),Nt=tt(S);F&&$(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,wt,S.width,S.height):$(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,wt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,wt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function jt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const ot=n.get(S.depthTexture).__webglTexture,lt=tt(S);if(S.depthTexture.format===Us)$(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(S.depthTexture.format===Dr)$(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Lt(T){const S=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");jt(S.__webglFramebuffer,T)}else if(F){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]=i.createRenderbuffer(),Ht(S.__webglDepthbuffer[ot],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ht(S.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(T,S,F){const ot=n.get(T);S!==void 0&&Tt(ot.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Lt(T)}function P(T){const S=T.texture,F=n.get(T),ot=n.get(S);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=S.version,a.memory.textures++);const lt=T.isWebGLCubeRenderTarget===!0,it=T.isWebGLMultipleRenderTargets===!0,Ct=m(T)||o;if(lt){F.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[pt]=[];for(let wt=0;wt<S.mipmaps.length;wt++)F.__webglFramebuffer[pt][wt]=i.createFramebuffer()}else F.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)F.__webglFramebuffer[pt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(it)if(s.drawBuffers){const pt=T.texture;for(let wt=0,Nt=pt.length;wt<Nt;wt++){const qt=n.get(pt[wt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&$(T)===!1){const pt=it?S:[S];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let wt=0;wt<pt.length;wt++){const Nt=pt[wt];F.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[wt]);const qt=r.convert(Nt.format,Nt.colorSpace),rt=r.convert(Nt.type),oe=y(Nt.internalFormat,qt,rt,Nt.colorSpace,T.isXRRenderTarget===!0),ne=tt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,oe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,F.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),q(i.TEXTURE_CUBE_MAP,S,Ct);for(let pt=0;pt<6;pt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Tt(F.__webglFramebuffer[pt][wt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,wt);else Tt(F.__webglFramebuffer[pt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);_(S,Ct)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const pt=T.texture;for(let wt=0,Nt=pt.length;wt<Nt;wt++){const qt=pt[wt],rt=n.get(qt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),q(i.TEXTURE_2D,qt,Ct),Tt(F.__webglFramebuffer,T,qt,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),_(qt,Ct)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?pt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,ot.__webglTexture),q(pt,S,Ct),o&&S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Tt(F.__webglFramebuffer[wt],T,S,i.COLOR_ATTACHMENT0,pt,wt);else Tt(F.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,pt,0);_(S,Ct)&&v(pt),e.unbindTexture()}T.depthBuffer&&Lt(T)}function dt(T){const S=m(T)||o,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ot=0,lt=F.length;ot<lt;ot++){const it=F[ot];if(_(it,S)){const Ct=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pt=n.get(it).__webglTexture;e.bindTexture(Ct,pt),v(Ct),e.unbindTexture()}}}function Z(T){if(o&&T.samples>0&&$(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,ot=T.height;let lt=i.COLOR_BUFFER_BIT;const it=[],Ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(T),wt=T.isWebGLMultipleRenderTargets===!0;if(wt)for(let Nt=0;Nt<S.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Nt=0;Nt<S.length;Nt++){it.push(i.COLOR_ATTACHMENT0+Nt),T.depthBuffer&&it.push(Ct);const qt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(qt===!1&&(T.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),wt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Nt]),qt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ct]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ct])),wt){const rt=n.get(S[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,F,ot,0,0,F,ot,lt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let Nt=0;Nt<S.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Nt]);const qt=n.get(S[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function tt(T){return Math.min(s.maxSamples,T.samples)}function $(T){const S=n.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function Mt(T,S){const F=T.colorSpace,ot=T.format,lt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===fc||F!==Oi&&F!==Vn&&(be.getTransfer(F)===Pe?o===!1?t.has("EXT_sRGB")===!0&&ot===Zn?(T.format=fc,T.minFilter=Gn,T.generateMipmaps=!1):S=Tf.sRGBToLinear(S):(ot!==Zn||lt!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=I,this.resetTextureUnits=nt,this.setTexture2D=W,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=Xt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=$}function D_(i,t,e){const n=e.isWebGL2;function s(r,a=Vn){let o;const l=be.getTransfer(a);if(r===cs)return i.UNSIGNED_BYTE;if(r===gf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===vf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ep)return i.BYTE;if(r===np)return i.SHORT;if(r===Fc)return i.UNSIGNED_SHORT;if(r===mf)return i.INT;if(r===ss)return i.UNSIGNED_INT;if(r===rs)return i.FLOAT;if(r===ga)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ip)return i.ALPHA;if(r===Zn)return i.RGBA;if(r===sp)return i.LUMINANCE;if(r===rp)return i.LUMINANCE_ALPHA;if(r===Us)return i.DEPTH_COMPONENT;if(r===Dr)return i.DEPTH_STENCIL;if(r===fc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ap)return i.RED;if(r===_f)return i.RED_INTEGER;if(r===op)return i.RG;if(r===xf)return i.RG_INTEGER;if(r===yf)return i.RGBA_INTEGER;if(r===ml||r===gl||r===vl||r===_l)if(l===Pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ml)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_l)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ml)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_l)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sh||r===bh||r===wh||r===Eh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Sh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Th||r===Ah)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Th)return l===Pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ah)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ch||r===Rh||r===Ph||r===Lh||r===Dh||r===Ih||r===Uh||r===Nh||r===Fh||r===Oh||r===zh||r===Bh||r===kh||r===Gh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ch)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ph)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ih)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gh)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xl||r===Hh||r===Vh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===xl)return l===Pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lp||r===Wh||r===Xh||r===qh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===xl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Wh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Is?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class I_ extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zt extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U_={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class N_ extends Gr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=e.getContextAttributes();let m=null,p=null;const _=[],v=[],y=new ct;let R=null;const b=new On;b.layers.enable(1),b.viewport=new Fe;const E=new On;E.layers.enable(2),E.viewport=new Fe;const D=[b,E],M=new I_;M.layers.enable(1),M.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let at=_[q];return at===void 0&&(at=new Vl,_[q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(q){let at=_[q];return at===void 0&&(at=new Vl,_[q]=at),at.getGripSpace()},this.getHand=function(q){let at=_[q];return at===void 0&&(at=new Vl,_[q]=at),at.getHandSpace()};function H(q){const at=v.indexOf(q.inputSource);if(at===-1)return;const St=_[at];St!==void 0&&(St.update(q.inputSource,q.frame,c||a),St.dispatchEvent({type:q.type,data:q.inputSource}))}function nt(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",I);for(let q=0;q<_.length;q++){const at=v[q];at!==null&&(v[q]=null,_[q].disconnect(at))}w=null,N=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Gs(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:cs,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let at=null,St=null,Pt=null;x.depth&&(Pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=x.stencil?Dr:Us,St=x.stencil?Is:ss);const Tt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Gs(d.textureWidth,d.textureHeight,{format:Zn,type:cs,depthTexture:new Of(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Ht=t.properties.get(p);Ht.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(q){for(let at=0;at<q.removed.length;at++){const St=q.removed[at],Pt=v.indexOf(St);Pt>=0&&(v[Pt]=null,_[Pt].disconnect(St))}for(let at=0;at<q.added.length;at++){const St=q.added[at];let Pt=v.indexOf(St);if(Pt===-1){for(let Ht=0;Ht<_.length;Ht++)if(Ht>=v.length){v.push(St),Pt=Ht;break}else if(v[Ht]===null){v[Ht]=St,Pt=Ht;break}if(Pt===-1)break}const Tt=_[Pt];Tt&&Tt.connect(St)}}const z=new A,W=new A;function Q(q,at,St){z.setFromMatrixPosition(at.matrixWorld),W.setFromMatrixPosition(St.matrixWorld);const Pt=z.distanceTo(W),Tt=at.projectionMatrix.elements,Ht=St.projectionMatrix.elements,jt=Tt[14]/(Tt[10]-1),Lt=Tt[14]/(Tt[10]+1),Xt=(Tt[9]+1)/Tt[5],P=(Tt[9]-1)/Tt[5],dt=(Tt[8]-1)/Tt[0],Z=(Ht[8]+1)/Ht[0],tt=jt*dt,$=jt*Z,It=Pt/(-dt+Z),Mt=It*-dt;at.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Mt),q.translateZ(It),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const T=jt+It,S=Lt+It,F=tt-Mt,ot=$+(Pt-Mt),lt=Xt*Lt/S*T,it=P*Lt/S*T;q.projectionMatrix.makePerspective(F,ot,lt,it,T,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,at){at===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(at.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=E.near=b.near=q.near,M.far=E.far=b.far=q.far,(w!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,N=M.far);const at=q.parent,St=M.cameras;J(M,at);for(let Pt=0;Pt<St.length;Pt++)J(St[Pt],at);St.length===2?Q(M,b,E):M.projectionMatrix.copy(b.projectionMatrix),K(q,M,at)};function K(q,at,St){St===null?q.matrix.copy(at.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(at.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=va*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let et=null;function ht(q,at){if(h=at.getViewerPose(c||a),g=at,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Pt=!1;St.length!==M.cameras.length&&(M.cameras.length=0,Pt=!0);for(let Tt=0;Tt<St.length;Tt++){const Ht=St[Tt];let jt=null;if(f!==null)jt=f.getViewport(Ht);else{const Xt=u.getViewSubImage(d,Ht);jt=Xt.viewport,Tt===0&&(t.setRenderTargetTextures(p,Xt.colorTexture,d.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(p))}let Lt=D[Tt];Lt===void 0&&(Lt=new On,Lt.layers.enable(Tt),Lt.viewport=new Fe,D[Tt]=Lt),Lt.matrix.fromArray(Ht.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Ht.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(jt.x,jt.y,jt.width,jt.height),Tt===0&&(M.matrix.copy(Lt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Pt===!0&&M.cameras.push(Lt)}}for(let St=0;St<_.length;St++){const Pt=v[St],Tt=_[St];Pt!==null&&Tt!==void 0&&Tt.update(Pt,at,c||a)}et&&et(q,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const ut=new Nf;ut.setAnimationLoop(ht),this.setAnimationLoop=function(q){et=q},this.dispose=function(){}}}function F_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Df(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O_(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const y=v.program;n.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(_,R);const b=t.render.frame;r[_.id]!==b&&(d(_),r[_.id]=b)}function h(_){const v=u();_.__bindingPointIndex=v;const y=i.createBuffer(),R=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=s[_.id],y=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,E=y.length;b<E;b++){const D=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,w=D.length;M<w;M++){const N=D[M];if(f(N,b,M,R)===!0){const H=N.__offset,nt=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let z=0;z<nt.length;z++){const W=nt[z],Q=x(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+I,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,I),I+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,y,R){const b=_.value,E=v+"_"+y;if(R[E]===void 0)return typeof b=="number"||typeof b=="boolean"?R[E]=b:R[E]=b.clone(),!0;{const D=R[E];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return R[E]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(_){const v=_.uniforms;let y=0;const R=16;for(let E=0,D=v.length;E<D;E++){const M=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,N=M.length;w<N;w++){const H=M[w],nt=Array.isArray(H.value)?H.value:[H.value];for(let I=0,z=nt.length;I<z;I++){const W=nt[I],Q=x(W),J=y%R;J!==0&&R-J<Q.boundary&&(y+=R-J),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Q.storage}}}const b=y%R;return b>0&&(y+=R-b),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Vf{constructor(t={}){const{canvas:e=Ip(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=ls,this.toneMappingExposure=1;const v=this;let y=!1,R=0,b=0,E=null,D=-1,M=null;const w=new Fe,N=new Fe;let H=null;const nt=new Gt(0);let I=0,z=e.width,W=e.height,Q=1,J=null,K=null;const et=new Fe(0,0,z,W),ht=new Fe(0,0,z,W);let ut=!1;const q=new Gc;let at=!1,St=!1,Pt=null;const Tt=new Re,Ht=new ct,jt=new A,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xt(){return E===null?Q:1}let P=n;function dt(C,U){for(let G=0;G<C.length;G++){const X=C[G],k=e.getContext(X,U);if(k!==null)return k}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",vt,!1),P===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),P=dt(U,C),P===null)throw dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Z,tt,$,It,Mt,T,S,F,ot,lt,it,Ct,pt,wt,Nt,qt,rt,oe,ne,Vt,Rt,Et,Jt,le;function xe(){Z=new $g(P),tt=new Gg(P,Z,t),Z.init(tt),Et=new D_(P,Z,tt),$=new P_(P,Z,tt),It=new Zg(P),Mt=new g_,T=new L_(P,Z,$,Mt,tt,Et,It),S=new Vg(v),F=new qg(v),ot=new s0(P,tt),Jt=new Bg(P,Z,ot,tt),lt=new Yg(P,ot,It,Jt),it=new tv(P,lt,ot,It),ne=new Qg(P,tt,T),qt=new Hg(Mt),Ct=new m_(v,S,F,Z,tt,Jt,qt),pt=new F_(v,Mt),wt=new __,Nt=new w_(Z,tt),oe=new zg(v,S,F,$,it,d,l),rt=new R_(v,it,tt),le=new O_(P,It,tt,$),Vt=new kg(P,Z,It,tt),Rt=new jg(P,Z,It,tt),It.programs=Ct.programs,v.capabilities=tt,v.extensions=Z,v.properties=Mt,v.renderLists=wt,v.shadowMap=rt,v.state=$,v.info=It}xe();const Kt=new N_(v,P);this.xr=Kt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=Z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(z,W,!1))},this.getSize=function(C){return C.set(z,W)},this.setSize=function(C,U,G=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,W=U,e.width=Math.floor(C*Q),e.height=Math.floor(U*Q),G===!0&&(e.style.width=C+"px",e.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(z*Q,W*Q).floor()},this.setDrawingBufferSize=function(C,U,G){z=C,W=U,Q=G,e.width=Math.floor(C*G),e.height=Math.floor(U*G),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(et)},this.setViewport=function(C,U,G,X){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,U,G,X),$.viewport(w.copy(et).multiplyScalar(Q).floor())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,U,G,X){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,U,G,X),$.scissor(N.copy(ht).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){$.setScissorTest(ut=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(C=!0,U=!0,G=!0){let X=0;if(C){let k=!1;if(E!==null){const xt=E.texture.format;k=xt===yf||xt===xf||xt===_f}if(k){const xt=E.texture.type,Dt=xt===cs||xt===ss||xt===Fc||xt===Is||xt===gf||xt===vf,kt=oe.getClearColor(),Wt=oe.getClearAlpha(),Qt=kt.r,$t=kt.g,te=kt.b;Dt?(f[0]=Qt,f[1]=$t,f[2]=te,f[3]=Wt,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Qt,g[1]=$t,g[2]=te,g[3]=Wt,P.clearBufferiv(P.COLOR,0,g))}else X|=P.COLOR_BUFFER_BIT}U&&(X|=P.DEPTH_BUFFER_BIT),G&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),wt.dispose(),Nt.dispose(),Mt.dispose(),S.dispose(),F.dispose(),it.dispose(),Jt.dispose(),le.dispose(),Ct.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",rn),Kt.removeEventListener("sessionend",ye),Pt&&(Pt.dispose(),Pt=null),an.stop()};function mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=It.autoReset,U=rt.enabled,G=rt.autoUpdate,X=rt.needsUpdate,k=rt.type;xe(),It.autoReset=C,rt.enabled=U,rt.autoUpdate=G,rt.needsUpdate=X,rt.type=k}function vt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ft(C){const U=C.target;U.removeEventListener("dispose",ft),Bt(U)}function Bt(C){Ut(C),Mt.remove(C)}function Ut(C){const U=Mt.get(C).programs;U!==void 0&&(U.forEach(function(G){Ct.releaseProgram(G)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,G,X,k,xt){U===null&&(U=Lt);const Dt=k.isMesh&&k.matrixWorld.determinant()<0,kt=Yr(C,U,G,X,k);$.setMaterial(X,Dt);let Wt=G.index,Qt=1;if(X.wireframe===!0){if(Wt=lt.getWireframeAttribute(G),Wt===void 0)return;Qt=2}const $t=G.drawRange,te=G.attributes.position;let Ue=$t.start*Qt,fn=($t.start+$t.count)*Qt;xt!==null&&(Ue=Math.max(Ue,xt.start*Qt),fn=Math.min(fn,(xt.start+xt.count)*Qt)),Wt!==null?(Ue=Math.max(Ue,0),fn=Math.min(fn,Wt.count)):te!=null&&(Ue=Math.max(Ue,0),fn=Math.min(fn,te.count));const Be=fn-Ue;if(Be<0||Be===1/0)return;Jt.setup(k,X,kt,G,Wt);let Bn,Me=Vt;if(Wt!==null&&(Bn=ot.get(Wt),Me=Rt,Me.setIndex(Bn)),k.isMesh)X.wireframe===!0?($.setLineWidth(X.wireframeLinewidth*Xt()),Me.setMode(P.LINES)):Me.setMode(P.TRIANGLES);else if(k.isLine){let ee=X.linewidth;ee===void 0&&(ee=1),$.setLineWidth(ee*Xt()),k.isLineSegments?Me.setMode(P.LINES):k.isLineLoop?Me.setMode(P.LINE_LOOP):Me.setMode(P.LINE_STRIP)}else k.isPoints?Me.setMode(P.POINTS):k.isSprite&&Me.setMode(P.TRIANGLES);if(k.isBatchedMesh)Me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Me.renderInstances(Ue,Be,k.count);else if(G.isInstancedBufferGeometry){const ee=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jr=Math.min(G.instanceCount,ee);Me.renderInstances(Ue,Be,jr)}else Me.render(Ue,Be)};function me(C,U,G){C.transparent===!0&&C.side===pe&&C.forceSinglePass===!1?(C.side=dn,C.needsUpdate=!0,Wi(C,U,G),C.side=fs,C.needsUpdate=!0,Wi(C,U,G),C.side=pe):Wi(C,U,G)}this.compile=function(C,U,G=null){G===null&&(G=C),m=Nt.get(G),m.init(),_.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),C!==G&&C.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(v._useLegacyLights);const X=new Set;return C.traverse(function(k){const xt=k.material;if(xt)if(Array.isArray(xt))for(let Dt=0;Dt<xt.length;Dt++){const kt=xt[Dt];me(kt,G,k),X.add(kt)}else me(xt,G,k),X.add(xt)}),_.pop(),m=null,X},this.compileAsync=function(C,U,G=null){const X=this.compile(C,U,G);return new Promise(k=>{function xt(){if(X.forEach(function(Dt){Mt.get(Dt).currentProgram.isReady()&&X.delete(Dt)}),X.size===0){k(C);return}setTimeout(xt,10)}Z.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let fe=null;function Ye(C){fe&&fe(C)}function rn(){an.stop()}function ye(){an.start()}const an=new Nf;an.setAnimationLoop(Ye),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(C){fe=C,Kt.setAnimationLoop(C),C===null?an.stop():an.start()},Kt.addEventListener("sessionstart",rn),Kt.addEventListener("sessionend",ye),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(U),U=Kt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,U,E),m=Nt.get(C,_.length),m.init(),_.push(m),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Tt),St=this.localClippingEnabled,at=qt.init(this.clippingPlanes,St),x=wt.get(C,p.length),x.init(),p.push(x),wn(C,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(J,K),this.info.render.frame++,at===!0&&qt.beginShadows();const G=m.state.shadowsArray;if(rt.render(G,C,U),at===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(x,C),m.setupLights(v._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let k=0,xt=X.length;k<xt;k++){const Dt=X[k];Vi(x,C,Dt,Dt.viewport)}}else Vi(x,C,U);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,U),Jt.resetDefaultState(),D=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function wn(C,U,G,X){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){X&&jt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Tt);const Dt=it.update(C),kt=C.material;kt.visible&&x.push(C,Dt,kt,G,jt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Dt=it.update(C),kt=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),jt.copy(C.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),jt.copy(Dt.boundingSphere.center)),jt.applyMatrix4(C.matrixWorld).applyMatrix4(Tt)),Array.isArray(kt)){const Wt=Dt.groups;for(let Qt=0,$t=Wt.length;Qt<$t;Qt++){const te=Wt[Qt],Ue=kt[te.materialIndex];Ue&&Ue.visible&&x.push(C,Dt,Ue,G,jt.z,te)}}else kt.visible&&x.push(C,Dt,kt,G,jt.z,null)}}const xt=C.children;for(let Dt=0,kt=xt.length;Dt<kt;Dt++)wn(xt[Dt],U,G,X)}function Vi(C,U,G,X){const k=C.opaque,xt=C.transmissive,Dt=C.transparent;m.setupLightsView(G),at===!0&&qt.setGlobalState(v.clippingPlanes,G),xt.length>0&&xs(k,xt,U,G),X&&$.viewport(w.copy(X)),k.length>0&&Ln(k,U,G),xt.length>0&&Ln(xt,U,G),Dt.length>0&&Ln(Dt,U,G),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function xs(C,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const xt=tt.isWebGL2;Pt===null&&(Pt=new Gs(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?ga:cs,minFilter:ma,samples:xt?4:0})),v.getDrawingBufferSize(Ht),xt?Pt.setSize(Ht.x,Ht.y):Pt.setSize(Uo(Ht.x),Uo(Ht.y));const Dt=v.getRenderTarget();v.setRenderTarget(Pt),v.getClearColor(nt),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const kt=v.toneMapping;v.toneMapping=ls,Ln(C,G,X),T.updateMultisampleRenderTarget(Pt),T.updateRenderTargetMipmap(Pt);let Wt=!1;for(let Qt=0,$t=U.length;Qt<$t;Qt++){const te=U[Qt],Ue=te.object,fn=te.geometry,Be=te.material,Bn=te.group;if(Be.side===pe&&Ue.layers.test(X.layers)){const Me=Be.side;Be.side=dn,Be.needsUpdate=!0,ys(Ue,G,X,fn,Be,Bn),Be.side=Me,Be.needsUpdate=!0,Wt=!0}}Wt===!0&&(T.updateMultisampleRenderTarget(Pt),T.updateRenderTargetMipmap(Pt)),v.setRenderTarget(Dt),v.setClearColor(nt,I),v.toneMapping=kt}function Ln(C,U,G){const X=U.isScene===!0?U.overrideMaterial:null;for(let k=0,xt=C.length;k<xt;k++){const Dt=C[k],kt=Dt.object,Wt=Dt.geometry,Qt=X===null?Dt.material:X,$t=Dt.group;kt.layers.test(G.layers)&&ys(kt,U,G,Wt,Qt,$t)}}function ys(C,U,G,X,k,xt){C.onBeforeRender(v,U,G,X,k,xt),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(v,U,G,X,C,xt),k.transparent===!0&&k.side===pe&&k.forceSinglePass===!1?(k.side=dn,k.needsUpdate=!0,v.renderBufferDirect(G,U,X,k,C,xt),k.side=fs,k.needsUpdate=!0,v.renderBufferDirect(G,U,X,k,C,xt),k.side=pe):v.renderBufferDirect(G,U,X,k,C,xt),C.onAfterRender(v,U,G,X,k,xt)}function Wi(C,U,G){U.isScene!==!0&&(U=Lt);const X=Mt.get(C),k=m.state.lights,xt=m.state.shadowsArray,Dt=k.state.version,kt=Ct.getParameters(C,k.state,xt,U,G),Wt=Ct.getProgramCacheKey(kt);let Qt=X.programs;X.environment=C.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(C.isMeshStandardMaterial?F:S).get(C.envMap||X.environment),Qt===void 0&&(C.addEventListener("dispose",ft),Qt=new Map,X.programs=Qt);let $t=Qt.get(Wt);if($t!==void 0){if(X.currentProgram===$t&&X.lightsStateVersion===Dt)return $r(C,kt),$t}else kt.uniforms=Ct.getUniforms(C),C.onBuild(G,kt,v),C.onBeforeCompile(kt,v),$t=Ct.acquireProgram(kt,Wt),Qt.set(Wt,$t),X.uniforms=kt.uniforms;const te=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=qt.uniform),$r(C,kt),X.needsLights=Fa(C),X.lightsStateVersion=Dt,X.needsLights&&(te.ambientLightColor.value=k.state.ambient,te.lightProbe.value=k.state.probe,te.directionalLights.value=k.state.directional,te.directionalLightShadows.value=k.state.directionalShadow,te.spotLights.value=k.state.spot,te.spotLightShadows.value=k.state.spotShadow,te.rectAreaLights.value=k.state.rectArea,te.ltc_1.value=k.state.rectAreaLTC1,te.ltc_2.value=k.state.rectAreaLTC2,te.pointLights.value=k.state.point,te.pointLightShadows.value=k.state.pointShadow,te.hemisphereLights.value=k.state.hemi,te.directionalShadowMap.value=k.state.directionalShadowMap,te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,te.spotShadowMap.value=k.state.spotShadowMap,te.spotLightMatrix.value=k.state.spotLightMatrix,te.spotLightMap.value=k.state.spotLightMap,te.pointShadowMap.value=k.state.pointShadowMap,te.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=$t,X.uniformsList=null,$t}function Zs(C){if(C.uniformsList===null){const U=C.currentProgram.getUniforms();C.uniformsList=xo.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function $r(C,U){const G=Mt.get(C);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Yr(C,U,G,X,k){U.isScene!==!0&&(U=Lt),T.resetTextureUnits();const xt=U.fog,Dt=X.isMeshStandardMaterial?U.environment:null,kt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Oi,Wt=(X.isMeshStandardMaterial?F:S).get(X.envMap||Dt),Qt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$t=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),te=!!G.morphAttributes.position,Ue=!!G.morphAttributes.normal,fn=!!G.morphAttributes.color;let Be=ls;X.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Be=v.toneMapping);const Bn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=Bn!==void 0?Bn.length:0,ee=Mt.get(X),jr=m.state.lights;if(at===!0&&(St===!0||C!==M)){const yn=C===M&&X.id===D;qt.setState(X,C,yn)}let Ee=!1;X.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==jr.state.version||ee.outputColorSpace!==kt||k.isBatchedMesh&&ee.batching===!1||!k.isBatchedMesh&&ee.batching===!0||k.isInstancedMesh&&ee.instancing===!1||!k.isInstancedMesh&&ee.instancing===!0||k.isSkinnedMesh&&ee.skinning===!1||!k.isSkinnedMesh&&ee.skinning===!0||k.isInstancedMesh&&ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ee.instancingColor===!1&&k.instanceColor!==null||ee.envMap!==Wt||X.fog===!0&&ee.fog!==xt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==qt.numPlanes||ee.numIntersection!==qt.numIntersection)||ee.vertexAlphas!==Qt||ee.vertexTangents!==$t||ee.morphTargets!==te||ee.morphNormals!==Ue||ee.morphColors!==fn||ee.toneMapping!==Be||tt.isWebGL2===!0&&ee.morphTargetsCount!==Me)&&(Ee=!0):(Ee=!0,ee.__version=X.version);let si=ee.currentProgram;Ee===!0&&(si=Wi(X,U,k));let Zr=!1,ri=!1,Jr=!1;const je=si.getUniforms(),ai=ee.uniforms;if($.useProgram(si.program)&&(Zr=!0,ri=!0,Jr=!0),X.id!==D&&(D=X.id,ri=!0),Zr||M!==C){je.setValue(P,"projectionMatrix",C.projectionMatrix),je.setValue(P,"viewMatrix",C.matrixWorldInverse);const yn=je.map.cameraPosition;yn!==void 0&&yn.setValue(P,jt.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&je.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&je.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,ri=!0,Jr=!0)}if(k.isSkinnedMesh){je.setOptional(P,k,"bindMatrix"),je.setOptional(P,k,"bindMatrixInverse");const yn=k.skeleton;yn&&(tt.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),je.setValue(P,"boneTexture",yn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(je.setOptional(P,k,"batchingTexture"),je.setValue(P,"batchingTexture",k._matricesTexture,T));const Xi=G.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0&&tt.isWebGL2===!0)&&ne.update(k,G,si),(ri||ee.receiveShadow!==k.receiveShadow)&&(ee.receiveShadow=k.receiveShadow,je.setValue(P,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ai.envMap.value=Wt,ai.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ri&&(je.setValue(P,"toneMappingExposure",v.toneMappingExposure),ee.needsLights&&Mi(ai,Jr),xt&&X.fog===!0&&pt.refreshFogUniforms(ai,xt),pt.refreshMaterialUniforms(ai,X,Q,W,Pt),xo.upload(P,Zs(ee),ai,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(xo.upload(P,Zs(ee),ai,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&je.setValue(P,"center",k.center),je.setValue(P,"modelViewMatrix",k.modelViewMatrix),je.setValue(P,"normalMatrix",k.normalMatrix),je.setValue(P,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const yn=X.uniformsGroups;for(let Js=0,dl=yn.length;Js<dl;Js++)if(tt.isWebGL2){const Ks=yn[Js];le.update(Ks,si),le.bind(Ks,si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return si}function Mi(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function Fa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,U,G){Mt.get(C.texture).__webglTexture=U,Mt.get(C.depthTexture).__webglTexture=G;const X=Mt.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,U){const G=Mt.get(C);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,G=0){E=C,R=U,b=G;let X=!0,k=null,xt=!1,Dt=!1;if(C){const Wt=Mt.get(C);Wt.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(P.FRAMEBUFFER,null),X=!1):Wt.__webglFramebuffer===void 0?T.setupRenderTarget(C):Wt.__hasExternalTextures&&T.rebindTextures(C,Mt.get(C.texture).__webglTexture,Mt.get(C.depthTexture).__webglTexture);const Qt=C.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Dt=!0);const $t=Mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[U])?k=$t[U][G]:k=$t[U],xt=!0):tt.isWebGL2&&C.samples>0&&T.useMultisampledRTT(C)===!1?k=Mt.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?k=$t[G]:k=$t,w.copy(C.viewport),N.copy(C.scissor),H=C.scissorTest}else w.copy(et).multiplyScalar(Q).floor(),N.copy(ht).multiplyScalar(Q).floor(),H=ut;if($.bindFramebuffer(P.FRAMEBUFFER,k)&&tt.drawBuffers&&X&&$.drawBuffers(C,k),$.viewport(w),$.scissor(N),$.setScissorTest(H),xt){const Wt=Mt.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Wt.__webglTexture,G)}else if(Dt){const Wt=Mt.get(C.texture),Qt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wt.__webglTexture,G||0,Qt)}D=-1},this.readRenderTargetPixels=function(C,U,G,X,k,xt,Dt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(kt=kt[Dt]),kt){$.bindFramebuffer(P.FRAMEBUFFER,kt);try{const Wt=C.texture,Qt=Wt.format,$t=Wt.type;if(Qt!==Zn&&Et.convert(Qt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const te=$t===ga&&(Z.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Z.has("EXT_color_buffer_float"));if($t!==cs&&Et.convert($t)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===rs&&(tt.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-X&&G>=0&&G<=C.height-k&&P.readPixels(U,G,X,k,Et.convert(Qt),Et.convert($t),xt)}finally{const Wt=E!==null?Mt.get(E).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,Wt)}}},this.copyFramebufferToTexture=function(C,U,G=0){const X=Math.pow(2,-G),k=Math.floor(U.image.width*X),xt=Math.floor(U.image.height*X);T.setTexture2D(U,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,C.x,C.y,k,xt),$.unbindTexture()},this.copyTextureToTexture=function(C,U,G,X=0){const k=U.image.width,xt=U.image.height,Dt=Et.convert(G.format),kt=Et.convert(G.type);T.setTexture2D(G,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,X,C.x,C.y,k,xt,Dt,kt,U.image.data):U.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,X,C.x,C.y,U.mipmaps[0].width,U.mipmaps[0].height,Dt,U.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,X,C.x,C.y,Dt,kt,U.image),X===0&&G.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(C,U,G,X,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=C.max.x-C.min.x+1,Dt=C.max.y-C.min.y+1,kt=C.max.z-C.min.z+1,Wt=Et.convert(X.format),Qt=Et.convert(X.type);let $t;if(X.isData3DTexture)T.setTexture3D(X,0),$t=P.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),$t=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment);const te=P.getParameter(P.UNPACK_ROW_LENGTH),Ue=P.getParameter(P.UNPACK_IMAGE_HEIGHT),fn=P.getParameter(P.UNPACK_SKIP_PIXELS),Be=P.getParameter(P.UNPACK_SKIP_ROWS),Bn=P.getParameter(P.UNPACK_SKIP_IMAGES),Me=G.isCompressedTexture?G.mipmaps[k]:G.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,C.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,C.min.z),G.isDataTexture||G.isData3DTexture?P.texSubImage3D($t,k,U.x,U.y,U.z,xt,Dt,kt,Wt,Qt,Me.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D($t,k,U.x,U.y,U.z,xt,Dt,kt,Wt,Me.data)):P.texSubImage3D($t,k,U.x,U.y,U.z,xt,Dt,kt,Wt,Qt,Me),P.pixelStorei(P.UNPACK_ROW_LENGTH,te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue),P.pixelStorei(P.UNPACK_SKIP_PIXELS,fn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bn),k===0&&X.generateMipmaps&&P.generateMipmap($t),$.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){R=0,b=0,E=null,$.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Oc?"display-p3":"srgb",e.unpackColorSpace=be.workingColorSpace===Qo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?Ns:Sf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ns?_e:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class z_ extends Vf{}z_.prototype.isWebGL1Renderer=!0;class Vc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Vc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class B_ extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class k_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new A;class Fo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new _n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xn extends $s{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let mr;const na=new A,gr=new A,vr=new A,_r=new ct,ia=new ct,Wf=new Re,ro=new A,sa=new A,ao=new A,Nu=new ct,Wl=new ct,Fu=new ct;class Kn extends Ve{constructor(t=new Xn){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new k_(e,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new Fo(n,3,0,!1)),mr.setAttribute("uv",new Fo(n,2,3,!1))}this.geometry=mr,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),Wf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-vr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;oo(ro.set(-.5,-.5,0),vr,a,gr,s,r),oo(sa.set(.5,-.5,0),vr,a,gr,s,r),oo(ao.set(.5,.5,0),vr,a,gr,s,r),Nu.set(0,0),Wl.set(1,0),Fu.set(1,1);let o=t.ray.intersectTriangle(ro,sa,ao,!1,na);if(o===null&&(oo(sa.set(-.5,.5,0),vr,a,gr,s,r),Wl.set(0,1),o=t.ray.intersectTriangle(ro,ao,sa,!1,na),o===null))return;const l=t.ray.origin.distanceTo(na);l<t.near||l>t.far||e.push({distance:l,point:na.clone(),uv:Hn.getInterpolation(na,ro,sa,ao,Nu,Wl,Fu,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function oo(i,t,e,n,s,r){_r.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ia.x=r*_r.x-s*_r.y,ia.y=s*_r.x+r*_r.y):ia.copy(_r),i.copy(t),i.x+=ia.x,i.y+=ia.y,i.applyMatrix4(Wf)}class Ou extends _n{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xr=new Re,zu=new Re,lo=[],Bu=new qs,G_=new Re,ra=new B,aa=new Hr;class mc extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ou(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,G_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xr),Bu.copy(t.boundingBox).applyMatrix4(xr),this.boundingBox.union(Bu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xr),aa.copy(t.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(aa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),t.ray.intersectsSphere(aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xr),zu.multiplyMatrices(n,xr),ra.matrixWorld=zu,ra.raycast(t,lo);for(let a=0,o=lo.length;a<o;a++){const l=lo[a];l.instanceId=r,l.object=this,e.push(l)}lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ou(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class yo extends $s{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ku=new Re,gc=new Bc,co=new Hr,ho=new A;class Xl extends Ve{constructor(t=new ze,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,t.ray.intersectsSphere(co)===!1)return;ku.copy(s).invert(),gc.copy(t.ray).applyMatrix4(ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);ho.fromBufferAttribute(u,m),Gu(ho,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)ho.fromBufferAttribute(u,g),Gu(ho,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gu(i,t,e,n,s,r,a){const o=gc.distanceSqToPoint(i);if(o<e){const l=new A;gc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class ln extends Cn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],a=[],o=new A,l=new Re;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(hn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(hn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wc extends _i{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new ct,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class H_ extends Wc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const uo=new A,ql=new Xc,$l=new Xc,Yl=new Xc;class zi extends _i{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),c=uo);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ql.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),$l.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Yl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ql.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$l.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Yl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ql.calc(l),$l.calc(l),Yl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function V_(i,t){const e=1-i;return e*e*t}function W_(i,t){return 2*(1-i)*i*t}function X_(i,t){return i*i*t}function fa(i,t,e,n){return V_(i,t)+W_(i,e)+X_(i,n)}function q_(i,t){const e=1-i;return e*e*e*t}function $_(i,t){const e=1-i;return 3*e*e*i*t}function Y_(i,t){return 3*(1-i)*i*i*t}function j_(i,t){return i*i*i*t}function da(i,t,e,n,s){return q_(i,t)+$_(i,e)+Y_(i,n)+j_(i,s)}class Xf extends _i{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(t,s.x,r.x,a.x,o.x),da(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Z_ extends _i{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(t,s.x,r.x,a.x,o.x),da(t,s.y,r.y,a.y,o.y),da(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qf extends _i{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J_ extends _i{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $f extends _i{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(t,s.x,r.x,a.x),fa(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yf extends _i{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(t,s.x,r.x,a.x),fa(t,s.y,r.y,a.y),fa(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jf extends _i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Hu(o,l.x,c.x,h.x,u.x),Hu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Oo=Object.freeze({__proto__:null,ArcCurve:H_,CatmullRomCurve3:zi,CubicBezierCurve:Xf,CubicBezierCurve3:Z_,EllipseCurve:Wc,LineCurve:qf,LineCurve3:J_,QuadraticBezierCurve:$f,QuadraticBezierCurve3:Yf,SplineCurve:jf});class K_ extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Oo[s.type]().fromJSON(s))}return this}}class vc extends K_{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qf(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new $f(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Xf(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new jf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Wc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qc extends ze{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=hn(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new A,d=new ct,f=new A,g=new A,x=new A;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){const v=n+_*h*s,y=Math.sin(v),R=Math.cos(v);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*y,u.y=t[b].y,u.z=t[b].x*R,a.push(u.x,u.y,u.z),d.x=_/e,d.y=b/(t.length-1),o.push(d.x,d.y);const E=l[3*b+0]*y,D=l[3*b+1],M=l[3*b+0]*R;c.push(E,D,M)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){const y=v+_*t.length,R=y,b=y+t.length,E=y+t.length+1,D=y+1;r.push(R,b,D),r.push(E,D,b)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.points,t.segments,t.phiStart,t.phiLength)}}class $c extends qc{constructor(t=1,e=1,n=4,s=8){const r=new vc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new $c(t.radius,t.length,t.capSegments,t.radialSegments)}}class Da extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new A,h=new ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Le extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function _(){const y=new A,R=new A;let b=0;const E=(e-t)/n;for(let D=0;D<=r;D++){const M=[],w=D/r,N=w*(e-t)+t;for(let H=0;H<=s;H++){const nt=H/s,I=nt*l+o,z=Math.sin(I),W=Math.cos(I);R.x=N*z,R.y=-w*n+m,R.z=N*W,u.push(R.x,R.y,R.z),y.set(z,E,W).normalize(),d.push(y.x,y.y,y.z),f.push(nt,1-w),M.push(g++)}x.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){const w=x[M][D],N=x[M+1][D],H=x[M+1][D+1],nt=x[M][D+1];h.push(w,N,nt),h.push(N,H,nt),b+=6}c.addGroup(p,b,0),p+=b}function v(y){const R=g,b=new ct,E=new A;let D=0;const M=y===!0?t:e,w=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const N=g;for(let H=0;H<=s;H++){const I=H/s*l+o,z=Math.cos(I),W=Math.sin(I);E.x=M*W,E.y=m*w,E.z=M*z,u.push(E.x,E.y,E.z),d.push(0,w,0),b.x=z*.5+.5,b.y=W*.5*w+.5,f.push(b.x,b.y),g++}for(let H=0;H<s;H++){const nt=R+H,I=N+H;y===!0?h.push(I,I+1,nt):h.push(I+1,I,nt),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qn extends Le{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class el extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const v=new A,y=new A,R=new A;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],y),f(e[b+2],R),l(v,y,R,_)}function l(_,v,y,R){const b=R+1,E=[];for(let D=0;D<=b;D++){E[D]=[];const M=_.clone().lerp(y,D/b),w=v.clone().lerp(y,D/b),N=b-D;for(let H=0;H<=N;H++)H===0&&D===b?E[D][H]=M:E[D][H]=M.clone().lerp(w,H/N)}for(let D=0;D<b;D++)for(let M=0;M<2*(b-D)-1;M++){const w=Math.floor(M/2);M%2===0?(d(E[D][w+1]),d(E[D+1][w]),d(E[D][w])):(d(E[D][w+1]),d(E[D+1][w+1]),d(E[D+1][w]))}}function c(_){const v=new A;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const _=new A;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const y=m(_)/2/Math.PI+.5,R=p(_)/Math.PI+.5;a.push(y,1-R)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){const v=a[_+0],y=a[_+2],R=a[_+4],b=Math.max(v,y,R),E=Math.min(v,y,R);b>.9&&E<.1&&(v<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),R<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){const y=_*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const _=new A,v=new A,y=new A,R=new A,b=new ct,E=new ct,D=new ct;for(let M=0,w=0;M<r.length;M+=9,w+=6){_.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(a[w+0],a[w+1]),E.set(a[w+2],a[w+3]),D.set(a[w+4],a[w+5]),R.copy(_).add(v).add(y).divideScalar(3);const N=m(R);x(b,w+0,_,N),x(E,w+2,v,N),x(D,w+4,y,N)}}function x(_,v,y,R){R<0&&_.x===1&&(a[v]=_.x-1),y.x===0&&y.z===0&&(a[v]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.vertices,t.indices,t.radius,t.details)}}class Yc extends el{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yc(t.radius,t.detail)}}class ei extends vc{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new vc().fromJSON(s))}return this}}const Q_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Zf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=sx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return _a(r,a,e,o,l,f,0),a}};function Zf(i,t,e,n,s){let r,a;if(s===mx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Vu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Vu(r,i[r],i[r+1],a);return a&&nl(a,a.next)&&(ya(a),a=a.next),a}function Hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(nl(e,e.next)||ke(e.prev,e,e.next)===0)){if(ya(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _a(i,t,e,n,s,r,a){if(!i)return;!a&&r&&cx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?ex(i,n,s,r):tx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ya(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=nx(Hs(i),t,e),_a(i,t,e,n,s,r,2)):a===2&&ix(i,t,e,n,s,r):_a(Hs(i),t,e,n,s,r,1);break}}}function tx(i){const t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Sr(s,o,r,l,a,c,g.x,g.y)&&ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ex(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ke(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=_c(f,g,t,e,n),_=_c(x,m,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=p&&y&&y.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Sr(o,h,l,u,c,d,v.x,v.y)&&ke(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Sr(o,h,l,u,c,d,y.x,y.y)&&ke(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Sr(o,h,l,u,c,d,v.x,v.y)&&ke(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Sr(o,h,l,u,c,d,y.x,y.y)&&ke(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function nx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!nl(s,r)&&Jf(s,n,n.next,r)&&xa(s,r)&&xa(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ya(n),ya(n.next),n=i=r),n=n.next}while(n!==i);return Hs(n)}function ix(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fx(a,o)){let l=Kf(a,o);a=Hs(a,a.next),l=Hs(l,l.next),_a(a,t,e,n,s,r,0),_a(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function sx(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Zf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(ux(c));for(s.sort(rx),r=0;r<s.length;r++)e=ax(s[r],e);return e}function rx(i,t){return i.x-t.x}function ax(i,t){const e=ox(i,t);if(!e)return t;const n=Kf(e,i);return Hs(n,n.next),Hs(e,e.next)}function ox(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Sr(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),xa(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&lx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function lx(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function cx(i,t,e,n){let s=i;do s.z===0&&(s.z=_c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hx(s)}function hx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function _c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ux(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Sr(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function fx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dx(i,t)&&(xa(i,t)&&xa(t,i)&&px(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||nl(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function nl(i,t){return i.x===t.x&&i.y===t.y}function Jf(i,t,e,n){const s=po(ke(i,t,e)),r=po(ke(i,t,n)),a=po(ke(e,n,i)),o=po(ke(e,n,t));return!!(s!==r&&a!==o||s===0&&fo(i,e,t)||r===0&&fo(i,n,t)||a===0&&fo(e,i,n)||o===0&&fo(e,t,n))}function fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function po(i){return i>0?1:i<0?-1:0}function dx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Jf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xa(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function px(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kf(i,t){const e=new xc(i.i,i.x,i.y),n=new xc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vu(i,t,e,n){const s=new xc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class hs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return hs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wu(t),Xu(n,t);let a=t.length;e.forEach(Wu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Xu(n,e[l]);const o=Q_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Wu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class il extends ze{constructor(t=new ei([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:gx;let v,y=!1,R,b,E,D;p&&(v=p.getSpacedPoints(h),y=!0,d=!1,R=p.computeFrenetFrames(h,!1),b=new A,E=new A,D=new A),d||(m=0,f=0,g=0,x=0);const M=o.extractPoints(c);let w=M.shape;const N=M.holes;if(!hs.isClockWise(w)){w=w.reverse();for(let P=0,dt=N.length;P<dt;P++){const Z=N[P];hs.isClockWise(Z)&&(N[P]=Z.reverse())}}const nt=hs.triangulateShape(w,N),I=w;for(let P=0,dt=N.length;P<dt;P++){const Z=N[P];w=w.concat(Z)}function z(P,dt,Z){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(dt,Z)}const W=w.length,Q=nt.length;function J(P,dt,Z){let tt,$,It;const Mt=P.x-dt.x,T=P.y-dt.y,S=Z.x-P.x,F=Z.y-P.y,ot=Mt*Mt+T*T,lt=Mt*F-T*S;if(Math.abs(lt)>Number.EPSILON){const it=Math.sqrt(ot),Ct=Math.sqrt(S*S+F*F),pt=dt.x-T/it,wt=dt.y+Mt/it,Nt=Z.x-F/Ct,qt=Z.y+S/Ct,rt=((Nt-pt)*F-(qt-wt)*S)/(Mt*F-T*S);tt=pt+Mt*rt-P.x,$=wt+T*rt-P.y;const oe=tt*tt+$*$;if(oe<=2)return new ct(tt,$);It=Math.sqrt(oe/2)}else{let it=!1;Mt>Number.EPSILON?S>Number.EPSILON&&(it=!0):Mt<-Number.EPSILON?S<-Number.EPSILON&&(it=!0):Math.sign(T)===Math.sign(F)&&(it=!0),it?(tt=-T,$=Mt,It=Math.sqrt(ot)):(tt=Mt,$=T,It=Math.sqrt(ot/2))}return new ct(tt/It,$/It)}const K=[];for(let P=0,dt=I.length,Z=dt-1,tt=P+1;P<dt;P++,Z++,tt++)Z===dt&&(Z=0),tt===dt&&(tt=0),K[P]=J(I[P],I[Z],I[tt]);const et=[];let ht,ut=K.concat();for(let P=0,dt=N.length;P<dt;P++){const Z=N[P];ht=[];for(let tt=0,$=Z.length,It=$-1,Mt=tt+1;tt<$;tt++,It++,Mt++)It===$&&(It=0),Mt===$&&(Mt=0),ht[tt]=J(Z[tt],Z[It],Z[Mt]);et.push(ht),ut=ut.concat(ht)}for(let P=0;P<m;P++){const dt=P/m,Z=f*Math.cos(dt*Math.PI/2),tt=g*Math.sin(dt*Math.PI/2)+x;for(let $=0,It=I.length;$<It;$++){const Mt=z(I[$],K[$],tt);Tt(Mt.x,Mt.y,-Z)}for(let $=0,It=N.length;$<It;$++){const Mt=N[$];ht=et[$];for(let T=0,S=Mt.length;T<S;T++){const F=z(Mt[T],ht[T],tt);Tt(F.x,F.y,-Z)}}}const q=g+x;for(let P=0;P<W;P++){const dt=d?z(w[P],ut[P],q):w[P];y?(E.copy(R.normals[0]).multiplyScalar(dt.x),b.copy(R.binormals[0]).multiplyScalar(dt.y),D.copy(v[0]).add(E).add(b),Tt(D.x,D.y,D.z)):Tt(dt.x,dt.y,0)}for(let P=1;P<=h;P++)for(let dt=0;dt<W;dt++){const Z=d?z(w[dt],ut[dt],q):w[dt];y?(E.copy(R.normals[P]).multiplyScalar(Z.x),b.copy(R.binormals[P]).multiplyScalar(Z.y),D.copy(v[P]).add(E).add(b),Tt(D.x,D.y,D.z)):Tt(Z.x,Z.y,u/h*P)}for(let P=m-1;P>=0;P--){const dt=P/m,Z=f*Math.cos(dt*Math.PI/2),tt=g*Math.sin(dt*Math.PI/2)+x;for(let $=0,It=I.length;$<It;$++){const Mt=z(I[$],K[$],tt);Tt(Mt.x,Mt.y,u+Z)}for(let $=0,It=N.length;$<It;$++){const Mt=N[$];ht=et[$];for(let T=0,S=Mt.length;T<S;T++){const F=z(Mt[T],ht[T],tt);y?Tt(F.x,F.y+v[h-1].y,v[h-1].x+Z):Tt(F.x,F.y,u+Z)}}}at(),St();function at(){const P=s.length/3;if(d){let dt=0,Z=W*dt;for(let tt=0;tt<Q;tt++){const $=nt[tt];Ht($[2]+Z,$[1]+Z,$[0]+Z)}dt=h+m*2,Z=W*dt;for(let tt=0;tt<Q;tt++){const $=nt[tt];Ht($[0]+Z,$[1]+Z,$[2]+Z)}}else{for(let dt=0;dt<Q;dt++){const Z=nt[dt];Ht(Z[2],Z[1],Z[0])}for(let dt=0;dt<Q;dt++){const Z=nt[dt];Ht(Z[0]+W*h,Z[1]+W*h,Z[2]+W*h)}}n.addGroup(P,s.length/3-P,0)}function St(){const P=s.length/3;let dt=0;Pt(I,dt),dt+=I.length;for(let Z=0,tt=N.length;Z<tt;Z++){const $=N[Z];Pt($,dt),dt+=$.length}n.addGroup(P,s.length/3-P,1)}function Pt(P,dt){let Z=P.length;for(;--Z>=0;){const tt=Z;let $=Z-1;$<0&&($=P.length-1);for(let It=0,Mt=h+m*2;It<Mt;It++){const T=W*It,S=W*(It+1),F=dt+tt+T,ot=dt+$+T,lt=dt+$+S,it=dt+tt+S;jt(F,ot,lt,it)}}}function Tt(P,dt,Z){l.push(P),l.push(dt),l.push(Z)}function Ht(P,dt,Z){Lt(P),Lt(dt),Lt(Z);const tt=s.length/3,$=_.generateTopUV(n,s,tt-3,tt-2,tt-1);Xt($[0]),Xt($[1]),Xt($[2])}function jt(P,dt,Z,tt){Lt(P),Lt(dt),Lt(tt),Lt(dt),Lt(Z),Lt(tt);const $=s.length/3,It=_.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);Xt(It[0]),Xt(It[1]),Xt(It[3]),Xt(It[1]),Xt(It[2]),Xt(It[3])}function Lt(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function Xt(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oo[s.type]().fromJSON(s)),new il(n,t.options)}}const gx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,a),new ct(o,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ct(a,1-l),new ct(c,1-u),new ct(d,1-g),new ct(x,1-p)]:[new ct(o,1-l),new ct(h,1-u),new ct(f,1-g),new ct(m,1-p)]}};function vx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sl extends el{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sl(t.radius,t.detail)}}class zo extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new A,g=new ct;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const _=p+m,v=_,y=_+n+1,R=_+n+2,b=_+1;o.push(v,y,b),o.push(y,R,b)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Bi extends ze{constructor(t=new ei([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(a,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;hs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];hs.isClockWise(_)===!0&&(g[m]=_.reverse())}const x=hs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=x.length;m<p;m++){const _=x[m],v=_[0]+u,y=_[1]+u,R=_[2]+u;n.push(v,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return _x(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Bi(n,t.curveSegments)}}function _x(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ue extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new A,d=new A,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const _=[],v=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const b=R/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+y,1-v),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const v=h[p][_+1],y=h[p][_],R=h[p+1][_],b=h[p+1][_+1];(p!==0||a>0)&&f.push(v,y,b),(p!==n-1||l<Math.PI)&&f.push(y,R,b)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ne extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;a.push(x,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ki extends ze{constructor(t=new Yf(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,l=new A,c=new ct;let h=new A;const u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),_(),p()}function m(v){h=t.getPointAt(v/e,h);const y=a.normals[v],R=a.binormals[v];for(let b=0;b<=s;b++){const E=b/s*Math.PI*2,D=Math.sin(E),M=-Math.cos(E);l.x=M*y.x+D*R.x,l.y=M*y.y+D*R.y,l.z=M*y.z+D*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){const R=(s+1)*(v-1)+(y-1),b=(s+1)*v+(y-1),E=(s+1)*v+y,D=(s+1)*(v-1)+y;g.push(R,b,D),g.push(b,E,D)}}function _(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)c.x=v/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ki(new Oo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ft extends $s{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rl extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class xx extends rl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jl=new Re,qu=new A,$u=new A;class Qf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(qu),$u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($u),e.updateMatrixWorld(),jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yu=new Re,oa=new A,Zl=new A;class yx extends Qf{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),oa.setFromMatrixPosition(t.matrixWorld),n.position.copy(oa),Zl.copy(n.position),Zl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zl),n.updateMatrixWorld(),s.makeTranslation(-oa.x,-oa.y,-oa.z),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu)}}class Mo extends rl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mx extends Qf{constructor(){super(new Ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jl extends rl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Mx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sx extends rl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class bx{constructor(t,e,n=0,s=1/0){this.ray=new Bc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return yc(t,this,n,e),n.sort(ju),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)yc(t[s],this,n,e);return n.sort(ju),n}}function ju(i,t){return i.distance-t.distance}function yc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)yc(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);const tn={clown:{id:"clown",name:"小丑鱼",latin:"Amphiprion ocellaris",value:2,stars:1,rarity:"常见",rarityColor:"#a6dfc9",chance:.34,size:.92,speed:[2.5,3.6],depth:[1.4,4.6],school:[3,5],desc:"珊瑚丛里最热闹的小家伙。成群游动，最适合练手和续连击。",body:["#ff7a20","#ff9e38"],accent:"#fff2dc",pattern:"clown",shape:"oval",icon:{c1:"#ff8b2f",c2:"#ff5f18",stripe:"#fff0d5"}},snapper:{id:"snapper",name:"红杉鱼",latin:"Lutjanus erythropterus",value:3,stars:1,rarity:"常见",rarityColor:"#a6dfc9",chance:.285,size:1.16,speed:[2.1,3.1],depth:[1.6,4.4],school:[2,4],desc:"披一身朱红鳞片，喜欢贴着礁石巡游。游速不快，别让它溜走。",body:["#f45a55","#dd3148"],accent:"#ffd2b0",pattern:"scales",shape:"oval",icon:{c1:"#ff6f67",c2:"#c9273f",stripe:"#ffb07c"}},tang:{id:"tang",name:"蓝刀鱼",latin:"Paracanthurus hepatus",value:5,stars:2,rarity:"常见",rarityColor:"#a6dfc9",chance:.225,size:1.2,speed:[3.4,4.5],depth:[1.8,5.2],school:[2,4],desc:"像一柄掠过水面的蓝刃，速度极快。瞄准它亮黄色的尾鳍。",body:["#227edb","#1553b8"],accent:"#ffe56a",pattern:"tang",shape:"disc",icon:{c1:"#3b9cff",c2:"#1746aa",stripe:"#ffd84a"}},lantern:{id:"lantern",name:"灯笼鱼",latin:"Myctophum punctatum",value:8,stars:2,rarity:"少见",rarityColor:"#67e8d0",chance:.17,size:1.35,speed:[1.9,2.8],depth:[2.2,6.1],school:[2,3],desc:"从黑暗海沟升上来的提灯者。发光器一亮，值钱的机会就来了。",body:["#19323e","#325a63"],accent:"#74ffe3",pattern:"lantern",shape:"torpedo",glowing:!0,icon:{c1:"#3c777e",c2:"#142c38",stripe:"#7bffe7"}},turtle:{id:"turtle",name:"海龟",latin:"Chelonia mydas",value:12,stars:2,rarity:"少见",rarityColor:"#67e8d0",chance:.12,size:2.05,speed:[1.05,1.5],depth:[1.6,4.1],school:[1,1],desc:"慢悠悠的老海龟，背甲像一块沉在海底的翡翠。打头与四肢更灵。",body:["#3f8e65","#245d4b"],accent:"#d9c076",pattern:"turtle",shape:"turtle",icon:{c1:"#69b47d",c2:"#205542",stripe:"#d6bb71"}},angel:{id:"angel",name:"神仙鱼",latin:"Pterophyllum scalare",value:18,stars:3,rarity:"稀有",rarityColor:"#f0c763",chance:.096,size:1.64,speed:[2,2.9],depth:[2,5.6],school:[1,2],desc:"长鳍如旗，游姿端庄。它贴边游走时，往往把背后留给聪明的渔夫。",body:["#eadb9a","#c59e5d"],accent:"#fff5d2",pattern:"angel",shape:"disc",icon:{c1:"#f5e8ae",c2:"#bf914a",stripe:"#5c4c36"}},puffer:{id:"puffer",name:"河豚",latin:"Arothron meleagris",value:28,stars:3,rarity:"稀有",rarityColor:"#f0c763",chance:.075,size:1.52,speed:[.95,1.5],depth:[1.6,3.8],school:[1,1],desc:"圆滚滚的一肚子气。挨打会鼓成一枚带刺的金币，但可不好收网。",body:["#e5c157","#b98238"],accent:"#f8f0c9",pattern:"spots",shape:"puffer",icon:{c1:"#efd06b",c2:"#a76e2f",stripe:"#fff4ce"}},butterfly:{id:"butterfly",name:"蝴蝶鱼",latin:"Chaetodon auriga",value:38,stars:3,rarity:"珍稀",rarityColor:"#ff9a62",chance:.061,size:1.86,speed:[2.35,3.15],depth:[2.2,5.5],school:[1,2],desc:"身披晚霞与黑缎，在礁石间穿花。值钱，也极其警觉。",body:["#f6b64b","#e46a3e"],accent:"#1f3d46",pattern:"butterfly",shape:"disc",icon:{c1:"#ffd16b",c2:"#df673d",stripe:"#283c43"}},manta:{id:"manta",name:"魔鬼鱼",latin:"Mobula birostris",value:68,stars:4,rarity:"珍稀",rarityColor:"#ff9a62",chance:.037,size:3.15,speed:[.95,1.45],depth:[2.8,7.1],school:[1,1],desc:"双翼展开像夜的斗篷。据说在它翅膀完全张开时下网，运气最好。",body:["#2e536b","#142d3d"],accent:"#d9f6ee",pattern:"manta",shape:"manta",icon:{c1:"#466f86",c2:"#162b3b",stripe:"#e4f8f1"}},shark:{id:"shark",name:"鲨鱼",latin:"Carcharhinus longimanus",value:150,stars:4,rarity:"头奖",rarityColor:"#ff7263",chance:.0165,size:3.75,speed:[1.5,2.1],depth:[2.6,6],school:[1,1],desc:"深海的阴影，渔夫的勋章。出没时鱼群会四散，炮口要稳。",body:["#527383","#263b48"],accent:"#eef5e9",pattern:"shark",shape:"shark",icon:{c1:"#6e8e9c",c2:"#263a46",stripe:"#edf2e6"}},golden:{id:"golden",name:"金龙鱼",latin:"Scleropages aureus",value:300,stars:5,rarity:"传说",rarityColor:"#ffe27b",chance:.011,size:2.7,speed:[2.2,2.9],depth:[2.4,5.5],school:[1,1],desc:"龙宫库房的看守者，一身鳞甲比晚霞更亮。遇见即是运气，捕获便是传说。",body:["#ffc744","#e88418"],accent:"#fff2a6",pattern:"golden",shape:"dragon",glowing:!0,icon:{c1:"#ffdf6e",c2:"#db7715",stripe:"#fff6c8"}},boss:{id:"boss",name:"黄金鲨王",latin:"Carcharodon regalis",value:600,stars:5,rarity:"王",rarityColor:"#ffe27b",chance:0,size:5.8,speed:[1.15,1.5],depth:[3.2,6],school:[1,1],boss:!0,hp:52,desc:"龙宫最深处的巡海王。它的王冠由沉船的黄金铸成，鱼群在它面前也要绕道。",body:["#9a7435","#3b3a32"],accent:"#ffe57c",pattern:"boss",shape:"shark",glowing:!0,icon:{c1:"#aa8645",c2:"#30342f",stripe:"#ffe17a"}}},Ur=[{id:"shallow",name:"初涉浅湾",sub:"新手渔场 · 鱼群温顺",level:"01",startCoins:5e3,power:1,tint:4962222,fog:670531,mix:["clown","snapper","tang","clown","snapper","turtle","angel","lantern","butterfly","puffer","manta"],bossEvery:110,desc:"丰饶的珊瑚浅湾，水暖鱼多，适合熟悉炮台与走位。"},{id:"palace",name:"深海龙宫",sub:"正选渔场 · 头奖常驻",level:"02",startCoins:12e3,power:3,tint:3047054,fog:270123,mix:["clown","snapper","tang","lantern","turtle","angel","puffer","butterfly","manta","shark","golden","angel","butterfly"],bossEvery:85,desc:"沉没的龙宫正殿，珍稀鱼群环绕金柱。老渔夫都在这片水域下网。"},{id:"abyss",name:"王座深渊",sub:"高阶渔场 · 巨物出没",level:"03",startCoins:5e4,power:5,tint:2053740,fog:134680,mix:["lantern","turtle","angel","puffer","butterfly","manta","shark","golden","manta","shark","butterfly","angel"],bossEvery:62,desc:"龙宫王座下的断崖。水流湍急，巨物巡游，一炮千金。"}],Ze=[{level:1,bet:10,label:"×10",name:"铜炮"},{level:2,bet:20,label:"×20",name:"铁炮"},{level:3,bet:50,label:"×50",name:"银炮"},{level:4,bet:100,label:"×100",name:"金炮"},{level:5,bet:200,label:"×200",name:"玉炮"},{level:6,bet:500,label:"×500",name:"龙炮"},{level:7,bet:1e3,label:"×1000",name:"神炮"}],ds=[{id:"freeze",key:"1",name:"冰封",full:"冰封海域",desc:"冻结全场鱼群 6 秒，期间捕获率提升 30%",cooldown:34,color:"#8ff4ff",charges:"潮汐"},{id:"thunder",key:"2",name:"天雷",full:"九霄天雷",desc:"雷击最多 9 条鱼，每条有 55% 机会直接落网",cooldown:42,color:"#ffe680",charges:"雷符"},{id:"magnet",key:"3",name:"磁力",full:"金龙磁引",desc:"8 秒内炮弹追踪目标，暴击率提升至 28%",cooldown:38,color:"#ffc85c",charges:"龙珠"},{id:"nuke",key:"4",name:"核爆",full:"深海核爆",desc:"重创全场，小鱼有 80% 机会落网，鲨王受到 12 点伤害",cooldown:64,color:"#ff7d62",charges:"禁术"}],jc=[{id:"catch",name:"满舱而归",desc:"累计捕获 12 条鱼",target:12,reward:888},{id:"combo",name:"一气呵成",desc:"达成一次 5 连击",target:5,reward:1288},{id:"boss",name:"屠龙渔夫",desc:"击败 1 条黄金鲨王",target:1,reward:3888}],td=[{name:"海风咸咸",tag:"龙宫常客",avatar:"风",color:"#64c7b6",base:8600},{name:"一网情深",tag:"十级渔夫",avatar:"网",color:"#e3b85e",base:7300},{name:"珊瑚小七",tag:"夜航员",avatar:"七",color:"#e7846f",base:6400},{name:"浪里白条",tag:"老船长",avatar:"浪",color:"#7aa9d7",base:5100},{name:"夜潜三千米",tag:"深海猎手",avatar:"潜",color:"#9d8cd6",base:3900}],wx=[{keys:["鼠标移动","A / D","← / →"],label:"转动炮口",tone:"core"},{keys:["左键","空格"],label:"开炮 · 按住连发",tone:"core"},{keys:["滚轮","W / S","↑ / ↓"],label:"升降炮台 / 押注",tone:"core"},{keys:["右键"],label:"锁定准星下的鱼",tone:"core"},{keys:["1","2","3","4"],label:"冰封 · 天雷 · 磁力 · 核爆",tone:"skill"},{keys:["F"],label:"自动开火",tone:"system"},{keys:["C"],label:"切换镜头",tone:"system"},{keys:["Tab"],label:"渔获榜",tone:"system"},{keys:["M"],label:"声音开关",tone:"system"},{keys:["V"],label:"全屏",tone:"system"},{keys:["H"],label:"操作说明",tone:"system"},{keys:["Esc / P"],label:"暂停",tone:"system"},{keys:["触屏"],label:"拖动水面瞄准 · 按住开炮 · 点按技能",tone:"system"}],Ge={minFireInterval:.145,maxFishDesktop:36,maxFishMobile:20,comboWindow:4,captureFreezeBonus:.3,magnetDuration:8,freezeDuration:6,rescueAmount:1500};class Ex{constructor(){this.ctx=null,this.ready=!1,this.muted=!1,this.paused=!1,this.lastCannon=0,this.musicTimer=null,this.ambientTimer=null,this.master=null,this.musicBus=null,this.sfxBus=null,this.ambientBus=null,this.noiseBuffer=null,this.brownBuffer=null,this.phraseStep=0,this.startedAt=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.startedAt=e.currentTime,this.master=e.createGain(),this.master.gain.value=this.muted?0:.82;const n=e.createDynamicsCompressor();n.threshold.value=-12,n.knee.value=18,n.ratio.value=8,n.attack.value=.004,n.release.value=.18,this.master.connect(n).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=.26,this.sfxBus=e.createGain(),this.sfxBus.gain.value=.9,this.ambientBus=e.createGain(),this.ambientBus.gain.value=.42;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=1800;const r=e.createConvolver();r.buffer=this.makeImpulse(2.6,2.8);const a=e.createGain();a.gain.value=.28,this.musicBus.connect(s).connect(this.master),this.musicBus.connect(r).connect(a).connect(this.master),this.sfxBus.connect(this.master),this.ambientBus.connect(this.master),this.noiseBuffer=this.makeNoise(2.2,!1),this.brownBuffer=this.makeNoise(4,!0),this.ready=!0,this.startAmbience(),this.schedulePhrase(1.2),this.ctx.resume()}makeNoise(t,e){const n=this.ctx,s=Math.floor(n.sampleRate*t),r=n.createBuffer(1,s,n.sampleRate),a=r.getChannelData(0);let o=0;for(let l=0;l<s;l++){const c=Math.random()*2-1;e?(o=(o+.018*c)/1.018,a[l]=o*3.2):a[l]=c}return r}makeImpulse(t,e){const n=this.ctx,s=Math.floor(n.sampleRate*t),r=n.createBuffer(2,s,n.sampleRate);for(let a=0;a<2;a++){const o=r.getChannelData(a);for(let l=0;l<s;l++)o[l]=(Math.random()*2-1)*Math.pow(1-l/s,e)}return r}startAmbience(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.brownBuffer,e.loop=!0;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=210,n.Q.value=.6;const s=t.createGain();s.gain.value=.14;const r=t.createOscillator();r.frequency.value=.055;const a=t.createGain();a.gain.value=.055,r.connect(a).connect(s.gain),e.connect(n).connect(s).connect(this.ambientBus),e.start(),r.start();const o=t.createGain();o.gain.value=.038;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=420,[73.42,110,146.83,174.61].forEach((h,u)=>{const d=t.createOscillator();d.type=u%2?"sine":"triangle",d.frequency.value=h,d.detune.value=(u-1.5)*4+Math.random()*3;const f=t.createGain();f.gain.value=[.34,.22,.13,.08][u],d.connect(f).connect(l),d.start();const g=t.createOscillator();g.frequency.value=.021+u*.007;const x=t.createGain();x.gain.value=1.8,g.connect(x).connect(d.detune),g.start()}),l.connect(o).connect(this.ambientBus);const c=()=>{if(this.ready){if(!this.paused&&!this.muted&&Math.random()>.4){const h=t.currentTime,u=t.createOscillator();u.type="sine";const d=140+Math.random()*120;u.frequency.setValueAtTime(d,h),u.frequency.exponentialRampToValueAtTime(d*1.55,h+.9),u.frequency.exponentialRampToValueAtTime(d*.8,h+2.7);const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=d*1.2,f.Q.value=4;const g=t.createGain();g.gain.setValueAtTime(1e-4,h),g.gain.exponentialRampToValueAtTime(.018,h+.7),g.gain.exponentialRampToValueAtTime(1e-4,h+3),u.connect(f).connect(g).connect(this.ambientBus),u.start(h),u.stop(h+3.1)}this.ambientTimer=setTimeout(c,16e3+Math.random()*16e3)}};this.ambientTimer=setTimeout(c,9e3)}schedulePhrase(t=0){clearTimeout(this.musicTimer),this.musicTimer=setTimeout(()=>{this.ready&&(!this.paused&&!this.muted&&this.playPhrase(),this.schedulePhrase(5200+Math.random()*2600))},t*1e3)}playPhrase(){const e=this.ctx.currentTime+.05,n=[293.66,349.23,392,440,523.25,587.33],s=[[0,2,3,4,3,2],[3,4,5,4,2,0],[0,1,2,3,2,4],[4,3,2,0,2,3]],r=s[this.phraseStep%s.length];this.phraseStep++;const a=.48+Math.random()*.09;r.forEach((o,l)=>{if(Math.random()<.12)return;const c=n[o]*(l===r.length-1?.5:1);this.pluck(e+l*a,c,.026,1.7),l===0&&this.pluck(e,c/2,.02,2.8)})}pluck(t,e,n=.03,s=1.4){if(!this.ready)return;const r=this.ctx,a=r.createOscillator(),o=r.createOscillator(),l=r.createGain(),c=r.createBiquadFilter();a.type="triangle",o.type="sine",a.frequency.value=e,o.frequency.value=e*2.003,c.type="lowpass",c.frequency.setValueAtTime(2600,t),c.frequency.exponentialRampToValueAtTime(500,t+s),c.Q.value=1.2,l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(n,t+.012),l.gain.exponentialRampToValueAtTime(1e-4,t+s),a.connect(c),o.connect(c),c.connect(l).connect(this.musicBus),a.start(t),o.start(t),a.stop(t+s+.1),o.stop(t+s+.1)}noise(t,e,{type:n="lowpass",freq:s=800,q:r=.7,vol:a=.15,attack:o=.005,bus:l=null}={}){if(!this.ready)return;const c=this.ctx,h=c.createBufferSource();h.buffer=this.brownBuffer;const u=c.createBiquadFilter();u.type=n,u.frequency.value=s,u.Q.value=r;const d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(a,t+o),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(l||this.sfxBus),h.start(t),h.stop(t+e+.05)}tone(t,e,n,{type:s="sine",vol:r=.08,endFreq:a=null,attack:o=.004,bus:l=null}={}){if(!this.ready)return;const c=this.ctx,h=c.createOscillator(),u=c.createGain();h.type=s,h.frequency.setValueAtTime(e,t),a&&h.frequency.exponentialRampToValueAtTime(Math.max(20,a),t+n),u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(r,t+o),u.gain.exponentialRampToValueAtTime(1e-4,t+n),h.connect(u).connect(l||this.sfxBus),h.start(t),h.stop(t+n+.04)}coinNote(t,e,n=.045){this.tone(t,e,.36,{type:"triangle",vol:n,attack:.002}),this.tone(t,e*2.002,.26,{type:"sine",vol:n*.55,attack:.002})}cannon(t=1,e=!1){if(!this.ready)return;const n=this.ctx.currentTime;if(n-this.lastCannon<.05)return;this.lastCannon=n;const s=.75+t*.035;this.noise(n,.24,{type:"lowpass",freq:900+t*110,vol:.11*s}),this.tone(n,138+t*7,.23,{type:"sine",vol:.15*s,endFreq:46}),this.tone(n,380+t*30,.09,{type:"triangle",vol:.045,endFreq:210}),e&&this.tone(n+.03,860,.2,{type:"sine",vol:.035,endFreq:1240})}hit(){if(!this.ready)return;const t=this.ctx.currentTime;this.tone(t,170,.12,{type:"sine",vol:.05,endFreq:72}),this.noise(t,.09,{type:"bandpass",freq:1200,q:1.1,vol:.035})}miss(){if(!this.ready)return;const t=this.ctx.currentTime;this.tone(t,320,.2,{type:"sine",vol:.02,endFreq:110})}catchFish(t=2,e=1,n=!1){if(!this.ready)return;const s=this.ctx.currentTime,r=t>=60?6:t>=18?4:3,a=[523.25,659.25,783.99,1046.5,1318.5,1568];for(let o=0;o<r;o++)this.coinNote(s+o*.055,a[o%a.length]*(n?1.12:1),.036);this.noise(s+.02,.26,{type:"highpass",freq:2200,vol:.03}),this.tone(s,196,.35,{type:"sine",vol:.06,endFreq:98}),e>=3&&this.tone(s+.18,880+e*45,.22,{type:"triangle",vol:.024})}jackpot(){if(!this.ready)return;const t=this.ctx.currentTime;[392,523.25,659.25,783.99,1046.5,1318.5,1568,2093].forEach((e,n)=>{this.coinNote(t+n*.07,e,.055)}),this.noise(t+.1,.7,{type:"bandpass",freq:2600,q:.6,vol:.04})}skillFreeze(){if(!this.ready)return;const t=this.ctx.currentTime;this.noise(t,1,{type:"highpass",freq:1600,vol:.06,attack:.02}),[1760,2093,2637,3136,3520].forEach((e,n)=>{this.tone(t+n*.045,e,1.25-n*.08,{type:"sine",vol:.028,attack:.01})}),this.tone(t,220,.7,{type:"sine",vol:.05,endFreq:110})}skillThunder(){if(!this.ready)return;const t=this.ctx.currentTime;this.noise(t,.18,{type:"highpass",freq:1e3,vol:.12,attack:.001}),this.noise(t+.055,1.2,{type:"lowpass",freq:580,vol:.16,attack:.004}),this.tone(t,74,1.1,{type:"sawtooth",vol:.055,endFreq:38});for(let e=0;e<6;e++)this.tone(t+.04+e*.025,1200+Math.random()*2e3,.14,{type:"square",vol:.012})}skillNuke(){if(!this.ready)return;const t=this.ctx.currentTime;this.noise(t,.28,{type:"highpass",freq:700,vol:.14,attack:.002}),this.noise(t+.03,2,{type:"lowpass",freq:320,vol:.22,attack:.004}),this.tone(t+.01,98,1.6,{type:"sine",vol:.18,endFreq:28}),this.tone(t+.1,58,2.2,{type:"triangle",vol:.11,endFreq:24})}skillMagnet(){if(!this.ready)return;const t=this.ctx.currentTime;for(let e=0;e<5;e++)this.tone(t+e*.06,440*Math.pow(1.25,e),.6,{type:"triangle",vol:.03,attack:.01});this.tone(t,110,.8,{type:"sine",vol:.05,endFreq:220})}lock(){if(!this.ready)return;const t=this.ctx.currentTime;this.tone(t,880,.08,{type:"square",vol:.018}),this.tone(t+.08,1320,.14,{type:"sine",vol:.028})}ui(t="tap"){if(!this.ready)return;const e=this.ctx.currentTime;t==="tap"?this.tone(e,540,.08,{type:"triangle",vol:.022,endFreq:720}):t==="coin"?this.coinNote(e,1046.5,.035):t==="error"?this.tone(e,180,.18,{type:"square",vol:.022,endFreq:120}):t==="open"?(this.noise(e,.25,{type:"bandpass",freq:1600,q:.8,vol:.03}),this.tone(e,320,.18,{type:"sine",vol:.025,endFreq:640})):t==="close"&&this.tone(e,480,.14,{type:"sine",vol:.02,endFreq:260})}bossRoar(){if(!this.ready)return;const t=this.ctx.currentTime;this.noise(t,2.1,{type:"lowpass",freq:160,vol:.18,attack:.2}),this.tone(t+.1,48,2,{type:"sawtooth",vol:.06,endFreq:32,attack:.4}),this.tone(t+.2,82,1.6,{type:"sine",vol:.085,endFreq:41,attack:.25})}wave(){if(!this.ready)return;const t=this.ctx.currentTime;[146.83,220,293.66,440].forEach((n,s)=>this.tone(t+s*.12,n,1.8,{type:"triangle",vol:.026,attack:.08})),this.noise(t,1.4,{type:"lowpass",freq:380,vol:.04,attack:.2})}levelUp(){if(!this.ready)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((e,n)=>this.coinNote(t+n*.08,e,.036))}rescue(){if(!this.ready)return;const t=this.ctx.currentTime;[392,493.88,587.33,783.99].forEach((e,n)=>this.coinNote(t+n*.09,e,.04))}setMuted(t){this.muted=t,this.master&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.linearRampToValueAtTime(t?0:.82,this.ctx.currentTime+.2))}setPaused(t){if(this.paused=t,!this.ready)return;const e=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.linearRampToValueAtTime(t?.08:.26,e+.35),this.ambientBus.gain.cancelScheduledValues(e),this.ambientBus.gain.linearRampToValueAtTime(t?.18:.42,e+.35)}setUnderwaterFocus(t){if(!this.ready)return;const e=this.ctx.currentTime;this.ambientBus.gain.linearRampToValueAtTime(t?.16:.42,e+.6)}dispose(){clearTimeout(this.musicTimer),clearTimeout(this.ambientTimer),this.ctx&&this.ctx.close()}}function Wr(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ze;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Zu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);const g=Zu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Zu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const a=new t(r);let o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;const l=new _n(a,e,n);return s!==void 0&&(l.gpuType=s),l}const Ae=Math.PI*2;function Ia(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Ma=Ia(19781224),st=(i=0,t=1)=>i+(t-i)*Ma(),Ju=i=>i[Math.floor(Ma()*i.length)];function al(i){const t=document.createElement("canvas");return t.width=i,t.height=i,[t,t.getContext("2d")]}function Kl(i,t=1,e=1,n=!0){const s=new ln(i);return s.wrapS=Fi,s.wrapT=Fi,s.repeat.set(t,e),n&&(s.colorSpace=_e),s.anisotropy=4,s}function Tx(){const[t,e]=al(1024),n=e.createLinearGradient(0,0,1024,1024);n.addColorStop(0,"#a7996e"),n.addColorStop(.42,"#8a8664"),n.addColorStop(.7,"#6f7b60"),n.addColorStop(1,"#4e6656"),e.fillStyle=n,e.fillRect(0,0,1024,1024);for(let s=0;s<80;s++){const r=st(0,1024),a=st(0,1024),o=st(30,210),l=e.createRadialGradient(r,a,0,r,a,o),c=Ma()>.5;l.addColorStop(0,c?`rgba(209,198,154,${st(.025,.075)})`:`rgba(35,80,70,${st(.025,.09)})`),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.fillRect(r-o,a-o,o*2,o*2)}e.lineCap="round";for(let s=0;s<110;s++){e.beginPath();const r=st(0,1024),a=st(2,11),o=st(.006,.025);for(let l=-20;l<=1044;l+=8){const c=r+Math.sin(l*o+s)*a+Math.sin(l*.055)*2;l===-20?e.moveTo(l,c):e.lineTo(l,c)}e.strokeStyle=`rgba(211,205,167,${st(.015,.055)})`,e.lineWidth=st(.6,3.2),e.stroke()}for(let s=0;s<5200;s++){const r=st(0,1024),a=st(0,1024),o=st(.3,2.6),l=Ma()>.55;e.fillStyle=l?`rgba(226,218,180,${st(.06,.24)})`:`rgba(38,65,55,${st(.05,.24)})`,e.beginPath(),e.ellipse(r,a,o,o*st(.4,1),st(0,Ae),0,Ae),e.fill()}for(let s=0;s<160;s++){const r=st(0,1024),a=st(0,1024),o=st(2,7);e.fillStyle=`rgba(40,64,54,${st(.08,.2)})`,e.beginPath(),e.ellipse(r,a,o,o*.58,st(0,Ae),0,Ae),e.fill()}return t}function Ku(i=12){const[e,n]=al(1024);n.clearRect(0,0,1024,1024);const s=Ia(i),r=(a,o)=>a+(o-a)*s();n.globalCompositeOperation="lighter",n.lineCap="round";for(let a=0;a<44;a++){const o=r(0,1024),l=r(0,1024),c=r(38,185),h=9;for(let u=0;u<2;u++){n.beginPath();for(let d=0;d<=h;d++){const f=d/h*Ae,g=Math.sin(f*3+a)*c*.2,x=o+Math.cos(f)*(c+g)+r(-8,8),m=l+Math.sin(f)*(c+g)+r(-8,8);d===0?n.moveTo(x,m):n.quadraticCurveTo(o+Math.cos(f-.2)*c*1.08,l+Math.sin(f-.2)*c*1.08,x,m)}n.closePath(),n.strokeStyle=u===0?"rgba(113,255,230,0.11)":"rgba(255,248,205,0.07)",n.lineWidth=u===0?r(6,20):r(1,4),n.shadowColor="rgba(125,255,230,0.55)",n.shadowBlur=u===0?14:2,n.stroke()}}for(let a=0;a<180;a++){const o=r(0,1024),l=r(0,1024),c=r(1,3.2),h=n.createRadialGradient(o,l,0,o,l,c*5);h.addColorStop(0,"rgba(190,255,235,0.4)"),h.addColorStop(1,"rgba(100,255,220,0)"),n.fillStyle=h,n.fillRect(o-c*5,l-c*5,c*10,c*10)}return e}function Ax(){const[t,e]=al(128);e.clearRect(0,0,128,128);const n=e.createRadialGradient(128*.4,128*.35,2,128*.5,128*.5,128*.48);return n.addColorStop(0,"rgba(255,255,255,0.75)"),n.addColorStop(.18,"rgba(167,255,246,0.14)"),n.addColorStop(.72,"rgba(130,230,228,0.08)"),n.addColorStop(1,"rgba(166,255,248,0.72)"),e.fillStyle=n,e.beginPath(),e.arc(128/2,128/2,128*.44,0,Ae),e.fill(),e.strokeStyle="rgba(210,255,250,0.65)",e.lineWidth=2,e.beginPath(),e.arc(128/2,128/2,128*.4,0,Ae),e.stroke(),e.fillStyle="rgba(255,255,255,0.9)",e.beginPath(),e.ellipse(128*.36,128*.33,7,4,-.6,0,Ae),e.fill(),t}function mo(){const[t,e]=al(128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.22,"rgba(255,235,167,0.7)"),n.addColorStop(.55,"rgba(255,197,88,0.18)"),n.addColorStop(1,"rgba(255,180,60,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),t}function Cx(){const e=document.createElement("canvas");e.width=256,e.height=1024;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,1024);s.addColorStop(0,"rgba(160,255,245,0.54)"),s.addColorStop(.17,"rgba(136,247,233,0.25)"),s.addColorStop(.6,"rgba(100,234,220,0.055)"),s.addColorStop(1,"rgba(64,198,190,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(256*.37,0),n.lineTo(256*.65,0),n.lineTo(256,1024),n.lineTo(0,1024),n.closePath(),n.fill();const r=n.createLinearGradient(0,0,256,0);return r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.22,"rgba(0,0,0,0)"),r.addColorStop(.78,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),n.globalCompositeOperation="destination-out",n.fillStyle=r,n.fillRect(0,0,256,1024),e}function Rx(){const e=document.createElement("canvas");e.width=512,e.height=640;const n=e.getContext("2d");n.clearRect(0,0,512,640),n.fillStyle="#7d7864",n.beginPath(),n.moveTo(38,70),n.quadraticCurveTo(210,10,470,110),n.lineTo(414,560),n.quadraticCurveTo(250,510,80,600),n.closePath(),n.fill(),n.globalCompositeOperation="destination-out";for(let s=0;s<50;s++){const r=st(40,480),a=st(50,610),o=st(2,30),l=st(3,24);n.beginPath(),n.ellipse(r,a,o,l,st(0,Ae),0,Ae),n.fill()}n.globalCompositeOperation="source-over",n.strokeStyle="rgba(52,48,38,0.35)",n.lineWidth=2;for(let s=110;s<600;s+=44)n.beginPath(),n.moveTo(45,s),n.quadraticCurveTo(250,s-30,460,s+6),n.stroke();return e}function Ri(i,t,e=!0){const n=Wr(i,!1);i.forEach(r=>r.dispose());const s=new B(n,t);return s.castShadow=e,s.receiveShadow=!0,s}function Px(i,t=1,e=0){const n=new Yc(i,t),s=n.attributes.position,r=Ia(e+4);for(let a=0;a<s.count;a++){const o=s.getX(a),l=s.getY(a),c=s.getZ(a),h=.78+r()*.4;s.setXYZ(a,o*h,l*(.5+r()*.45),c*h)}return n.computeVertexNormals(),n}function ed(i,t,e,n=5){const s=new A().subVectors(t,i),r=s.length(),a=new Le(e*.64,e,r,n,1);a.translate(0,r/2,0);const o=new Jn().setFromUnitVectors(new A(0,1,0),s.clone().normalize());return a.applyQuaternion(o),a.translate(i.x,i.y,i.z),a}function Lx(i=1,t=11030115,e=1){const n=Ia(e),s=(c,h)=>c+(h-c)*n(),r=[],a=new A(0,0,0),o=(c,h,u,d,f)=>{const g=c.clone().addScaledVector(h,u);if(r.push(ed(c,g,d,4)),f<=0)return;const x=f>2?2:s(1,3)|0;for(let m=0;m<x;m++){const p=h.clone();p.x+=s(-.55,.55),p.z+=s(-.35,.35),p.y+=s(-.1,.22),p.normalize(),o(g,p,u*s(.58,.8),d*.66,f-1)}};for(let c=0;c<3;c++){const h=new A(s(-.35,.35),1,s(-.3,.3)).normalize();o(a,h,s(1.1,1.6)*i,.075*i,4)}const l=new Ft({color:t,roughness:.82,metalness:.02,emissive:new Gt(t).multiplyScalar(.08),side:pe});return Ri(r.map(c=>c),l)}function Dx(i,t,e){const n=[];for(let r=0;r<6;r++){const a=new ue(st(.55,.9)*i,12,8);a.scale(1,st(.42,.62),1),a.translate(st(-.55,.55)*i,st(.2,.42)*i,st(-.45,.45)*i),n.push(a)}const s=new Ft({color:t,roughness:.9,metalness:0,flatShading:!1});return Ri(n,s)}function Ix(i=6,t=.6,e=1){const s=new Fn(t,i,1,13),r=s.attributes.position;for(let l=0;l<r.count;l++){const c=r.getY(l)+i/2,h=c/i,u=r.getX(l),d=Math.sin(h*3.2+e)*(.6+h*1.6)*(u>0?1.1:.7);r.setX(l,u+d),r.setZ(l,Math.sin(h*4.3+e)*.2),r.setY(l,c)}s.computeVertexNormals();const a=new Ft({color:new Gt().setHSL(.38+e%7*.006,.43,.22+e%3*.025),roughness:.92,side:pe,transparent:!0,opacity:.92,emissive:new Gt(402716)}),o=new B(s,a);return o.castShadow=!0,o.userData.swaySeed=e,o}function Ux(i,t,e="high"){const n=new zt;n.name="sunken-palace",i.add(n);const s=e==="low",r={kelp:[],rays:[],causticLayers:[],bubblePoints:null,bubbleVel:null,snow:null,fanGlows:[],goldLights:[]};i.fog=new Vc(338487,.0168),i.background=new Gt(269607);const a=new xx(10682354,465957,1.72);i.add(a);const o=new Sx(3834257,.55);i.add(o);const l=new Jl(13041656,3.45);l.position.set(-8,22,-6),l.castShadow=!1,l.shadow.mapSize.set(s?512:1024,s?512:1024),l.shadow.camera.left=-23,l.shadow.camera.right=23,l.shadow.camera.top=21,l.shadow.camera.bottom=-23,l.shadow.camera.near=1,l.shadow.camera.far=50,l.shadow.bias=-6e-4,l.shadow.normalBias=.035,i.add(l),i.add(l.target),l.target.position.set(0,0,-3);const c=new Jl(3844044,1.28);c.position.set(13,9,9),i.add(c);const h=new Jl(16764817,.72);h.position.set(11,7,13),i.add(h);const u=new Mo(16759385,18,14,2);u.position.set(-11.6,2.2,3.6),i.add(u),r.goldLights.push(u);const d=new Mo(5832688,9,19,2);d.position.set(0,6.5,-17.5),i.add(d),r.gateLight=d;const f=new Mo(16743817,6,12,2);f.position.set(14,2.8,-5.8),i.add(f);const g=new ue(74,32,22),x=new di({side:dn,depthWrite:!1,fog:!1,uniforms:{uDeep:{value:new Gt(135447)},uMid:{value:new Gt(673107)},uTop:{value:new Gt(4170912)}},vertexShader:`
      varying vec3 vWorld;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uDeep; uniform vec3 uMid; uniform vec3 uTop;
      varying vec3 vWorld;
      void main() {
        float h = clamp(normalize(vWorld).y * 1.55 + 0.36, 0.0, 1.0);
        vec3 col = mix(uDeep, uMid, smoothstep(0.0, 0.55, h));
        col = mix(col, uTop, smoothstep(0.55, 1.0, h) * 0.58);
        float glow = pow(max(0.0, dot(normalize(vWorld), normalize(vec3(-0.25, 0.9, -0.45)))), 18.0);
        col += vec3(0.24, 0.55, 0.52) * glow * 0.5;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),m=new B(g,x);m.frustumCulled=!1,i.add(m);const p=document.createElement("canvas");p.width=16,p.height=256;const _=p.getContext("2d"),v=_.createLinearGradient(0,0,0,256);v.addColorStop(0,"rgba(54,161,160,0.4)"),v.addColorStop(.4,"rgba(19,92,104,0.22)"),v.addColorStop(1,"rgba(2,26,34,0)"),_.fillStyle=v,_.fillRect(0,0,16,256);const y=new ln(p);y.colorSpace=_e;const R=new B(new Fn(110,48),new ge({map:y,transparent:!0,depthWrite:!1,fog:!0,opacity:.8}));R.position.set(0,14,-39),i.add(R);const b=Kl(Tx(),4.2,3.4),E=new Fn(92,78,66,56);E.rotateX(-Math.PI/2);const D=E.attributes.position;for(let O=0;O<D.count;O++){const Y=D.getX(O),j=D.getZ(O),yt=Math.min(1,Math.max(0,(Math.abs(Y)-14)/22+(Math.abs(j)-13)/25)),At=Math.sin(Y*.27+j*.11)*.22+Math.cos(j*.31-Y*.09)*.17+Math.sin(Y*.9)*.025+Math.max(0,Math.sin(Y*.13)+Math.cos(j*.17))*.2;D.setY(O,At*(.7+yt*.8))}E.computeVertexNormals();const M=new Ft({color:13681563,map:b,roughness:.96,metalness:.02}),w=new B(E,M);w.receiveShadow=!0,w.position.z=-6,n.add(w);const N=Kl(Ku(3),4.8,4.2),H=Kl(Ku(8),3.5,3.2);for(let O=0;O<2;O++){const Y=O===0?N:H,j=new ge({map:Y,transparent:!0,opacity:O===0?.36:.15,blending:ce,depthWrite:!1,side:pe,toneMapped:!1}),yt=new B(new Fn(92,76),j);yt.rotation.x=-Math.PI/2,yt.position.set(0,.56+O*.02,-6),yt.renderOrder=2,n.add(yt),r.causticLayers.push({mesh:yt,map:Y,speed:O===0?.012:-.008,turn:O===0?.004:-.003})}const nt=[];for(let O=0;O<6;O++)for(let Y=-2;Y<=2;Y++){if(Ma()<.16)continue;const j=new Tn(2.25,.18,1.65);j.rotateY(st(-.08,.08)),j.translate(Y*2.55+st(-.15,.15),.13,-11.4-O*1.85),nt.push(j)}const I=new Ft({color:7108459,roughness:.9,metalness:.02}),z=Ri(nt,I);z.receiveShadow=!0,n.add(z);const W=new Ft({color:2510158,roughness:.98,flatShading:!0}),Q=new Ft({color:1522238,roughness:.99,flatShading:!0});[{x:-18.5,z:-4,n:4,s:2.6},{x:19,z:-8,n:5,s:3.1},{x:-13.8,z:-15.4,n:4,s:2.2},{x:10.8,z:-16.7,n:3,s:2.4},{x:-22,z:4.5,n:2,s:1.9},{x:22.5,z:1.8,n:3,s:2}].forEach((O,Y)=>{const j=[],yt=[];for(let At=0;At<O.n;At++){const Zt=Px(st(.7,1.55)*O.s,1,Y*20+At);Zt.scale(st(.55,1.2),st(.7,1.5),st(.55,1.25)),Zt.rotateY(st(0,Ae)),Zt.translate(O.x+st(-2,2),st(.15,.9),O.z+st(-1.8,1.8)),(At%2?yt:j).push(Zt)}j.length&&n.add(Ri(j,W)),yt.length&&n.add(Ri(yt,Q))});const K=new Ft({color:3429973,roughness:.76,metalness:.03});[[-21,-11,1.5],[22,-13,1.7],[-7.4,-18.5,1.3],[7.7,-19.2,1.5],[24,5,1.2]].forEach(([O,Y,j],yt)=>{const At=new ue(j,18,12);At.scale(1.3,.75,1.1);const Zt=new B(At,K);Zt.position.set(O,j*.25,Y),Zt.rotation.y=st(0,Ae),Zt.castShadow=!0,Zt.receiveShadow=!0,n.add(Zt)});const et=[11159135,13074504,9006243,13854043,4689272];[[-16.5,-3.5,1.5],[-14,-2.5,1.1],[18.5,-3.2,1.3],[15.2,-1.4,.9],[13.8,-9.7,1.2],[-12,-11.5,1],[-7.6,-15.5,.8],[8.2,-15.2,.95],[-21,2,.8],[21,3.2,.7]].forEach(([O,Y,j],yt)=>{const At=Lx(j,et[yt%et.length],30+yt*5);At.position.set(O,.25,Y),At.rotation.y=st(-.4,.4),At.scale.set(1,st(.9,1.5),1),n.add(At),r.fanGlows.push(At)}),[[-15.3,-2.5,1.4,13203563],[17.2,-4.5,1.2,12093258],[14.2,-8.5,.9,8225433],[-11.4,-10.6,.9,12345695],[9.4,-14,.8,12488275]].forEach(([O,Y,j,yt],At)=>{const Zt=Dx(j,yt);Zt.position.set(O,.2,Y),n.add(Zt)});const q=new Ft({color:9129564,roughness:.8,emissive:2426379}),at=[];for(let O=0;O<5;O++){const Y=[-17,16.5,12.5,-10.5,19][O],j=[-4.5,-6.2,-12.2,-13.2,1.8][O],yt=14;for(let At=0;At<yt;At++){const Zt=st(.5,1.9),de=new Le(st(.09,.17),st(.16,.28),Zt,7,1);de.translate(Y+st(-1.1,1.1),Zt/2,j+st(-.8,.8)),de.rotateY(st(0,Ae)),at.push(de)}}n.add(Ri(at,q)),[[-24,-16,7.5],[-22.6,-14.8,5.8],[-20.4,-18.4,8.3],[24,-16,7],[22.3,-13.8,6.1],[20.6,-18.2,8.8],[-18.5,-9,5.2],[19,-11,5.5],[-25,2,6],[25,4,5.4],[-6,-22,9.2],[6.5,-22.4,8.7]].forEach(([O,Y,j],yt)=>{const At=Ix(j,st(.4,.75),yt+1);At.position.set(O,.2,Y),At.rotation.y=st(0,Ae),n.add(At),r.kelp.push(At)});const Pt=new Ft({color:7658687,emissive:748382,emissiveIntensity:1.1,roughness:.58,transparent:!0,opacity:.9});[[-12.6,2.2],[20.4,-2.6],[-5.8,-14.8],[11.7,-7.7]].forEach(([O,Y],j)=>{const yt=[];for(let At=0;At<32;At++){const Zt=new Le(.015,.06,st(.5,1.3),4,1),de=At/32*Ae+st(-.1,.1);Zt.rotateZ(st(.15,.75)),Zt.rotateY(de),Zt.translate(O+Math.cos(de)*st(.05,.5),.38,Y+Math.sin(de)*st(.05,.5)),yt.push(Zt)}n.add(Ri(yt,Pt,!1))});const Ht=new Ft({color:1191221,roughness:.65,metalness:.1});[[-13,1.1],[16.8,-1.5],[-9,-12.5],[17.7,-11.5]].forEach(([O,Y],j)=>{const yt=[],At=new ue(.38,10,6);At.scale(1,.7,1),At.translate(O,.3,Y),yt.push(At);for(let Zt=0;Zt<18;Zt++){const de=st(0,Ae),qi=st(.25,1.25),oi=new A(Math.cos(de)*Math.cos(qi),Math.sin(qi),Math.sin(de)*Math.cos(qi)),En=st(.55,1.2),$i=new A(O,.3,Y).addScaledVector(oi,En);yt.push(ed(new A(O,.3,Y),$i,.035,3))}n.add(Ri(yt,Ht,!1))});const Lt=new Ft({color:13135181,roughness:.8,flatShading:!0}),Xt=[[-11.2,5.6,.55],[13.5,4.2,.72],[-19.2,6.4,.45],[18.8,6.9,.6]],P=new ei;for(let O=0;O<10;O++){const Y=O/10*Ae-Math.PI/2,j=O%2?.16:.42;O===0?P.moveTo(Math.cos(Y)*j,Math.sin(Y)*j):P.lineTo(Math.cos(Y)*j,Math.sin(Y)*j)}P.closePath();const dt=new il(P,{depth:.06,bevelEnabled:!0,bevelSize:.03,bevelSegments:1,bevelThickness:.03});dt.rotateX(-Math.PI/2),Xt.forEach(([O,Y,j])=>{const yt=new B(dt,Lt);yt.position.set(O,.22,Y),yt.scale.setScalar(j),yt.rotation.y=st(0,Ae),n.add(yt)});const Z=new Ft({color:13281417,roughness:.72,side:pe});for(let O=0;O<24;O++){const Y=Ju([st(-24,-9),st(9,24),st(-8,8)]),j=Ju([st(-20,-9),st(2,8)]),yt=new ue(st(.09,.26),10,6,0,Math.PI);yt.scale(1,.36,.8);const At=new B(yt,Z);At.position.set(Y,.18,j),At.rotation.set(st(-.1,.1),st(0,Ae),st(-.1,.1)),n.add(At)}const tt=new zt;tt.position.set(0,0,-18.5),n.add(tt);const $=new Ft({color:5270371,roughness:.92,metalness:.06,emissive:202003}),It=new Ft({color:7176818,roughness:.88}),Mt=new Ft({color:2068351,roughness:.28,metalness:.18,emissive:681307,emissiveIntensity:1.3}),T=new Ft({color:12098133,roughness:.4,metalness:.5,emissive:3351051}),S=[];for(let O=0;O<4;O++){const Y=new Tn(15-O*1.4,.35,1.8);Y.translate(0,.18+O*.32,1.9-O*1.2),S.push(Y)}tt.add(Ri(S,$)),[-6.2,6.2].forEach(O=>{const Y=new B(new Le(1.25,1.55,.6,8),It);Y.position.set(O,.3,0),tt.add(Y);const j=new B(new Le(.8,.98,7.5,10),$);j.position.set(O,4.25,0),j.castShadow=!0,tt.add(j);for(let Zt=0;Zt<4;Zt++){const de=new B(new Ne(.92,.09,6,20),T);de.rotation.x=Math.PI/2,de.position.set(O,1.4+Zt*1.5,0),tt.add(de)}const yt=new B(new Tn(2.4,.5,2),It);yt.position.set(O,8.1,0),tt.add(yt);const At=new B(new Qn(.25,1.5,5),T);At.position.set(O+(O>0?.8:-.8),8.9,0),At.rotation.z=O>0?-.35:.35,tt.add(At)});const F=new B(new Ne(4.45,.38,14,58),$);F.position.set(0,5.55,-.25),F.castShadow=!0,tt.add(F);const ot=new B(new Ne(4.45,.1,8,58),T);ot.position.set(0,5.55,-.18),ot.rotation.z=.002,tt.add(ot);const lt=new B(new Ne(3.55,.075,6,52),Mt);lt.position.set(0,5.55,-.32),tt.add(lt);const it=new di({transparent:!0,depthWrite:!1,side:pe,blending:ce,uniforms:{uTime:{value:0},uColorA:{value:new Gt(473918)},uColorB:{value:new Gt(4896941)}},vertexShader:`
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform float uTime; uniform vec3 uColorA; uniform vec3 uColorB;
      varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      void main(){
        vec2 p = vUv - 0.5;
        float r = length(p);
        float a = atan(p.y, p.x);
        float swirl = sin(r*22.0 - uTime*0.85 + a*3.0 + noise(vUv*5.0)*2.0) * 0.5 + 0.5;
        float mask = smoothstep(0.49, 0.29, r);
        float alpha = mask * (0.1 + swirl*0.13 + smoothstep(0.45,0.15,r)*0.16);
        vec3 col = mix(uColorA, uColorB, swirl*0.55 + (0.5-r)*0.25);
        col *= 0.75;
        gl_FragColor = vec4(col, alpha * 0.8);
      }
    `}),Ct=new B(new Da(4,48),it);Ct.position.set(0,5.55,-.55),tt.add(Ct),r.portalMat=it;const pt=new zt;pt.position.set(0,5.55,-.05),tt.add(pt);const wt=new Ft({color:16773836,roughness:.12,metalness:.25,emissive:13212491,emissiveIntensity:1.32}),Nt=new B(new ue(1.18,30,20),wt);Nt.castShadow=!0,pt.add(Nt);const qt=new Kn(new Xn({map:new ln(mo()),color:16769699,transparent:!0,opacity:.44,blending:ce,depthWrite:!1}));qt.scale.set(10,10,1),pt.add(qt);const rt=new B(new Ne(1.85,.024,4,48),new ge({color:16768147,transparent:!0,opacity:.4,blending:ce,depthWrite:!1}));rt.rotation.set(1.22,.12,.35),pt.add(rt);const oe=new B(new Ne(2.22,.015,4,52),new ge({color:9699312,transparent:!0,opacity:.26,blending:ce,depthWrite:!1}));oe.rotation.set(.82,.4,-.2),pt.add(oe),r.pearl=Nt,r.pearlGroup=pt,r.pearlAura=qt,r.pearlRingA=rt,r.pearlRingB=oe;for(let O=0;O<14;O++){const Y=O/14*Ae,j=new B(new Tn(.5,.18,.14),O%3===0?Mt:T);j.position.set(Math.cos(Y)*4.45,5.55+Math.sin(Y)*4.45,.16),j.rotation.z=Y,tt.add(j)}const ne=new Ft({color:4088669,roughness:.75,metalness:.08});[-6.2,6.2].forEach((O,Y)=>{const j=[];for(let oi=0;oi<20;oi++){const En=oi/19;j.push(new A(O+Math.cos(En*Math.PI*4+Y)*.95,1.2+En*6.1,Math.sin(En*Math.PI*4+Y)*.95))}const yt=new zi(j),At=new ki(yt,48,.26,6,!1),Zt=new B(At,ne);Zt.castShadow=!0,tt.add(Zt);const de=new B(new ue(.5,10,8),ne);de.scale.set(1.25,.82,1.15),de.position.set(O+Math.cos(Math.PI*4+Y)*.95,7.3,Math.sin(Math.PI*4+Y)*.95),tt.add(de);const qi=new ge({color:9240548,toneMapped:!1});[-.18,.18].forEach(oi=>{const En=new B(new ue(.055,6,5),qi);En.position.copy(de.position).add(new A(oi,.12,.4)),tt.add(En)})});const Vt=new B(new Fn(15,.2),new ge({color:7602145,transparent:!0,opacity:.45,blending:ce,depthWrite:!1,toneMapped:!1}));Vt.rotation.x=-Math.PI/2,Vt.position.set(0,.6,1.4),tt.add(Vt);const Rt=new zt;Rt.position.set(14.5,.15,-22.5),Rt.rotation.set(.03,-.6,.06),n.add(Rt);const Et=new Ft({color:5063218,roughness:.93,metalness:.02,side:pe}),Jt=new Ft({color:3025701,roughness:.96,side:pe}),le=new B(new Le(2.8,1.7,11,12,1,!0,Math.PI,Math.PI),Jt);le.rotation.z=Math.PI/2,le.rotation.y=.1,le.position.y=1.3,le.castShadow=!0,Rt.add(le);for(let O=0;O<7;O++){const Y=new B(new Ne(2.65-O*.12,.07,5,18,Math.PI),Et);Y.rotation.set(Math.PI/2,0,Math.PI/2),Y.position.set(-4.5+O*1.5,1.2,0),Rt.add(Y)}const xe=new B(new Le(.14,.22,10.5,7),Et);xe.position.set(.4,5.4,.2),xe.rotation.z=-.28,xe.rotation.x=.15,xe.castShadow=!0,Rt.add(xe);const Kt=new B(new Le(.08,.1,5.6,6),Et);Kt.position.set(-.55,8.2,.7),Kt.rotation.z=-.28+Math.PI/2,Rt.add(Kt);const mt=Rx(),L=new ln(mt);L.colorSpace=_e;const vt=new B(new Fn(4.4,5.6,5,6),new Ft({map:L,transparent:!0,alphaTest:.08,side:pe,roughness:1,color:10459261}));vt.position.set(-.3,6.2,.5),vt.rotation.set(-.2,-.4,.18),Rt.add(vt);for(let O=0;O<3;O++){const Y=new B(new Tn(1.1,.9,1.1),Et);Y.position.set(-3+O*2.1,.55,2.7+st(-.4,.6)),Y.rotation.set(st(-.1,.1),st(0,Ae),st(-.1,.1)),Rt.add(Y)}const ft=new zt;ft.position.set(-11.7,.2,3.8),ft.rotation.y=.55,n.add(ft);const Bt=new Ft({color:6109473,roughness:.7,metalness:.05}),Ut=new Ft({color:15972687,roughness:.24,metalness:.9,emissive:6171908,emissiveIntensity:.4}),me=new B(new Tn(2.2,1.1,1.35),Bt);me.position.y=.65,me.castShadow=!0,ft.add(me);const fe=new B(new Tn(2.3,.5,1.45),Bt);fe.position.set(0,1.35,-.6),fe.rotation.x=-.55,fe.castShadow=!0,ft.add(fe),[-.9,0,.9].forEach(O=>{const Y=new B(new Tn(.14,1.36,1.48),Ut);Y.position.set(O,.72,-.03),ft.add(Y)});const Ye=new B(new Tn(.36,.5,.12),Ut);Ye.position.set(0,.8,.75),ft.add(Ye);const rn=new Le(.13,.13,.035,10),ye=Ut,an=50,wn=new mc(rn,ye,an),Vi=new Ve;for(let O=0;O<an;O++)Vi.position.set(st(-1,1),st(.95,1.8),st(-.4,.55)),Vi.rotation.set(st(0,Ae),st(0,Ae),st(0,Ae)),Vi.scale.setScalar(st(.6,1.25)),Vi.updateMatrix(),wn.setMatrixAt(O,Vi.matrix);wn.castShadow=!0,ft.add(wn);for(let O=0;O<15;O++){const Y=new B(rn,Ut);Y.position.set(st(-2,2),.23,st(.4,2.4)),Y.rotation.set(st(0,Ae),st(0,Ae),Math.PI/2),ft.add(Y)}const xs=new Kn(new Xn({map:new ln(mo()),color:16761182,transparent:!0,opacity:.85,blending:ce,depthWrite:!1,toneMapped:!1}));xs.scale.set(7,7,1),xs.position.set(0,1.3,0),ft.add(xs);const Ln=new zt;Ln.position.set(12.3,.2,5.7),Ln.rotation.set(0,.8,.15);const ys=new Ft({color:2833468,roughness:.62,metalness:.55}),Wi=new B(new Le(.12,.16,4.5,7),ys);Wi.rotation.z=.48,Wi.position.y=2.1,Ln.add(Wi);const Zs=new B(new Le(.08,.08,2.6,6),ys);Zs.rotation.z=Math.PI/2-.25,Zs.position.set(.45,3.7,0),Ln.add(Zs);const $r=new B(new Ne(.36,.07,6,16),ys);$r.position.set(-.95,4.4,0),Ln.add($r);const Yr=new B(new Ne(1.1,.12,7,18,Math.PI*1.1),ys);Yr.position.set(.05,.2,0),Yr.rotation.set(0,0,-1.3),Ln.add(Yr),Ln.traverse(O=>{O.isMesh&&(O.castShadow=!0)}),n.add(Ln);const Mi=new zt;Mi.position.set(6.5,.25,-14.8),Mi.rotation.y=-.25,n.add(Mi);const Fa=new Ft({color:8288616,roughness:.72,side:pe}),C=new ue(1.8,18,10,0,Math.PI);C.scale(1.45,.36,1);const U=new B(C,Fa);U.rotation.x=-Math.PI/2,U.position.y=.35,Mi.add(U);const G=new B(C,Fa);G.rotation.x=-Math.PI/2,G.rotation.z=.52,G.position.set(0,.72,-.15),Mi.add(G);const X=new Ft({color:16773578,roughness:.14,metalness:.18,emissive:8350522,emissiveIntensity:1}),k=new B(new ue(.4,18,12),X);k.position.set(.1,.83,0),Mi.add(k);const xt=new Kn(new Xn({map:new ln(mo()),color:16771517,transparent:!0,opacity:.8,blending:ce,depthWrite:!1,toneMapped:!1}));xt.scale.set(2.6,2.6,1),xt.position.copy(k.position),Mi.add(xt);const Dt=[];[{x:-18.5,y:10.4,z:-13.2,s:1,color:10480093,phase:.2},{x:15.5,y:12.2,z:-16.5,s:.78,color:12642528,phase:2.1},{x:4.2,y:11.6,z:-24,s:1.35,color:10477276,phase:4.4},{x:-7.5,y:8.9,z:-9.5,s:.52,color:13034972,phase:1.1}].forEach(O=>{const Y=new zt;Y.position.set(O.x,O.y,O.z),Y.scale.setScalar(O.s);const j=new Ft({color:O.color,transparent:!0,opacity:.34,roughness:.3,metalness:.05,emissive:O.color,emissiveIntensity:.55,side:pe,depthWrite:!1}),yt=new B(new ue(.82,18,10,0,Math.PI*2,0,Math.PI*.58),j);yt.scale.set(1,.66,.92),Y.add(yt);const At=new B(new ue(.26,12,8),new ge({color:14942199,transparent:!0,opacity:.16,blending:ce,depthWrite:!1}));At.position.y=.11,Y.add(At);const Zt=[],de=Ia(400+Math.floor(O.x*7));for(let En=0;En<9;En++){const $i=En/9*Math.PI*2+de()*.2,Md=new zi([new A(Math.cos($i)*.38,-.05,Math.sin($i)*.38),new A(Math.cos($i)*(.45+de()*.25),-.95,Math.sin($i)*(.4+de()*.25)),new A(Math.cos($i)*(.3+de()*.5),-1.8-de()*.8,Math.sin($i)*(.3+de()*.5))]);Zt.push(new ki(Md,10,.013,3,!1))}const qi=new B(Wr(Zt,!1),new ge({color:O.color,transparent:!0,opacity:.23,blending:ce,depthWrite:!1}));Zt.forEach(En=>En.dispose()),Y.add(qi);const oi=new Kn(new Xn({map:new ln(mo()),color:O.color,transparent:!0,opacity:.18,blending:ce,depthWrite:!1}));oi.scale.set(4.2,4.2,1),Y.add(oi),n.add(Y),Dt.push({jelly:Y,bell:yt,tentacles:qi,phase:O.phase,baseY:O.y})});const Wt=new ge({color:7203293,transparent:!0,opacity:.035,blending:ce,depthWrite:!1,side:pe}),Qt=[];[[-7,17,-12,1.1,.04],[8,16,-18,1.4,-.03]].forEach(([O,Y,j,yt,At])=>{const Zt=new B(new Le(2.2*yt,7.2*yt,26,24,1,!0),Wt.clone());Zt.position.set(O,Y,j),Zt.rotation.z=At,n.add(Zt),Qt.push(Zt)});const $t=new ln(Cx());$t.colorSpace=_e,[{x:-13,z:-10,w:10,h:34,rot:.1,o:.26},{x:-2,z:-16,w:13,h:38,rot:-.14,o:.22},{x:9,z:-8,w:9,h:30,rot:.2,o:.23},{x:18,z:-17,w:11,h:34,rot:-.08,o:.16},{x:-22,z:-1,w:8,h:27,rot:.06,o:.15},{x:3,z:-4,w:7,h:25,rot:.16,o:.12},{x:-8,z:2,w:6,h:21,rot:-.12,o:.1}].forEach((O,Y)=>{const j=new zt;j.position.set(O.x,4,O.z),j.rotation.z=O.rot;const yt=new ge({map:$t,transparent:!0,opacity:O.o,blending:ce,depthWrite:!1,side:pe,toneMapped:!1,fog:!1}),At=new Fn(O.w,O.h),Zt=new B(At,yt);Zt.rotation.y=.2;const de=new B(At,yt.clone());de.rotation.y=Math.PI/2+.2,de.material.opacity=O.o*.55,j.add(Zt,de),j.position.y=17.5,n.add(j),r.rays.push({group:j,mat:yt,mat2:de.material,base:O.o,phase:Y*1.7})});const Ue=new di({transparent:!0,side:pe,depthWrite:!1,blending:ce,uniforms:{uTime:{value:0},uColor:{value:new Gt(9437162)}},vertexShader:"varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
      uniform float uTime; uniform vec3 uColor; varying vec2 vUv;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
      void main(){
        float n = noise(vUv*7.0 + vec2(uTime*0.035, uTime*0.018));
        float n2 = noise(vUv*17.0 - vec2(uTime*0.02, uTime*0.04));
        float v = smoothstep(0.42,0.9,n*0.65+n2*0.35);
        gl_FragColor = vec4(uColor, v*0.13 + 0.018);
      }
    `}),fn=new B(new Fn(75,55),Ue);fn.rotation.x=-Math.PI/2,fn.position.set(0,22,-8),n.add(fn),r.surfaceMat=Ue;const Be=s?90:190,Bn=new ze,Me=new Float32Array(Be*3),ee=new Float32Array(Be);for(let O=0;O<Be;O++)Me[O*3]=st(-25,25),Me[O*3+1]=st(.2,12),Me[O*3+2]=st(-26,8),ee[O]=st(.25,.9);Bn.setAttribute("position",new _n(Me,3));const jr=new yo({map:new ln(Ax()),color:12255219,size:s?.17:.145,sizeAttenuation:!0,transparent:!0,opacity:.68,depthWrite:!1,blending:ce}),Ee=new Xl(Bn,jr);Ee.frustumCulled=!1,i.add(Ee),r.bubblePoints=Ee,r.bubbleVel=ee,r.bubbleCount=Be;const si=s?180:420,Zr=new ze,ri=new Float32Array(si*3);for(let O=0;O<si;O++)ri[O*3]=st(-30,30),ri[O*3+1]=st(.2,14),ri[O*3+2]=st(-28,10);Zr.setAttribute("position",new _n(ri,3));const Jr=new yo({color:10213836,size:.055,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1,blending:ce}),je=new Xl(Zr,Jr);je.frustumCulled=!1,i.add(je),r.snow=je;const ai=new ze,Xi=new Float32Array(120*3);for(let O=0;O<120;O++){const Y=st(0,Ae),j=st(4,14);Xi[O*3]=Math.cos(Y)*j,Xi[O*3+1]=st(.5,5),Xi[O*3+2]=-16+Math.sin(Y)*j*.5}ai.setAttribute("position",new _n(Xi,3));const yn=new Xl(ai,new yo({color:6684641,size:.085,transparent:!0,opacity:.6,depthWrite:!1,blending:ce}));n.add(yn),r.plankton=yn,performance.now();let Js=0;new A;function dl(O,Y){Js=Y;for(const j of r.causticLayers)j.map.offset.x=(j.map.offset.x+O*j.speed)%1,j.map.offset.y=(j.map.offset.y+O*j.speed*.45)%1;for(let j=0;j<r.kelp.length;j++){const yt=r.kelp[j];yt.rotation.z=Math.sin(Y*.55+j*1.2)*.075+Math.sin(Y*.21+j)*.04,yt.rotation.x=Math.cos(Y*.4+j*.8)*.025}for(const j of Dt){j.jelly.position.y=j.baseY+Math.sin(Y*.42+j.phase)*.42,j.jelly.rotation.y=Math.sin(Y*.17+j.phase)*.15;const yt=1+Math.sin(Y*1.35+j.phase)*.045;j.bell.scale.set(yt,.66/yt,yt),j.tentacles.rotation.x=Math.sin(Y*.32+j.phase)*.05,j.tentacles.rotation.z=Math.cos(Y*.27+j.phase)*.045}Qt.forEach((j,yt)=>{j.material.opacity=.025+Math.sin(Y*.15+yt)*.012});for(const j of r.rays)j.mat.opacity=j.base*(.7+Math.sin(Y*.22+j.phase)*.24),j.mat2.opacity=j.base*(.35+Math.cos(Y*.19+j.phase)*.15),j.group.rotation.z=Math.sin(Y*.045+j.phase)*.02;if(r.portalMat&&(r.portalMat.uniforms.uTime.value=Y),r.pearl&&(r.pearlGroup.position.y=5.55+Math.sin(Y*.45)*.2,r.pearl.rotation.y+=O*.08,r.pearlAura.material.opacity=.32+Math.sin(Y*.8)*.1,r.pearlRingA.rotation.z+=O*.055,r.pearlRingB.rotation.z-=O*.037,r.pearlRingB.rotation.y+=O*.02),r.surfaceMat&&(r.surfaceMat.uniforms.uTime.value=Y),r.bubblePoints){const j=r.bubblePoints.geometry.attributes.position.array;for(let yt=0;yt<r.bubbleCount;yt++){const At=yt*3;j[At+1]+=r.bubbleVel[yt]*O,j[At]+=Math.sin(Y*.7+yt*.37)*O*.12,j[At+2]+=Math.cos(Y*.6+yt*.52)*O*.07,j[At+1]>14&&(j[At+1]=st(.1,1.2),j[At]=st(-25,25),j[At+2]=st(-26,8))}r.bubblePoints.geometry.attributes.position.needsUpdate=!0}if(r.snow){const j=r.snow.geometry.attributes.position.array;for(let yt=0;yt<j.length/3;yt++){const At=yt*3;j[At+1]-=O*.08,j[At]+=Math.sin(Y*.18+yt)*O*.025,j[At+1]<.1&&(j[At+1]=st(8,14),j[At]=st(-30,30),j[At+2]=st(-28,10))}r.snow.geometry.attributes.position.needsUpdate=!0}r.plankton&&(r.plankton.rotation.y=Math.sin(Y*.05)*.02,r.plankton.material.opacity=.45+Math.sin(Y*.5)*.12),r.goldLights[0]&&(r.goldLights[0].intensity=16+Math.sin(Y*1.4)*3.2),r.gateLight&&(r.gateLight.intensity=8.2+Math.sin(Y*.8)*1.6),xs&&(xs.material.opacity=.62+Math.sin(Y*1.8)*.16),xt&&(xt.material.opacity=.55+Math.sin(Y*1.15)*.2),Ks&&m.position.copy(Ks.position)}let Ks=null;function xd(O){Ks=O}function mh(O){i.fog.color.set(O.fog),i.background.set(O.fog),x.uniforms.uMid&&x.uniforms.uMid.value.set(O.tint).multiplyScalar(.46),x.uniforms.uTop&&x.uniforms.uTop.value.set(O.tint).multiplyScalar(.82),d.color.set(O.tint).lerp(new Gt(9306086),.55)}function yd(O){const Y=O==="low";i.fog.density=Y?.03:.022,Ee.visible=!0,je.visible=!Y,t.shadowMap.enabled=!Y,r.rays.forEach(j=>{j.group.visible=!Y})}return mh({fog:270123,tint:3047054}),{group:n,update:dl,attachCamera:xd,setRoom:mh,setQuality:yd,sun:l,hemi:a,goldLight:u,gateLight:d,elapsed:Js}}const Er=Math.PI*2,Qu=(i,t,e)=>Math.max(t,Math.min(e,i)),Te=(i,t)=>i+Math.random()*(t-i);function Nx(i="rgba(255,255,255,1)",t="rgba(255,211,120,0.55)"){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.18,t),s.addColorStop(1,"rgba(255,186,70,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);const r=new ln(e);return r.colorSpace=_e,r}function Fx(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.clearRect(0,0,512,512),e.translate(512/2,512/2),e.strokeStyle="rgba(255,234,172,0.7)",e.shadowColor="rgba(255,208,100,0.9)",e.shadowBlur=7,e.lineWidth=2;const n=6;for(let o=1;o<=n;o++){e.beginPath();const l=o/n*(512*.46);for(let c=0;c<=64;c++){const h=c/64*Er,u=1+Math.sin(h*7+o*1.7)*.025,d=Math.cos(h)*l*u,f=Math.sin(h)*l*u;c===0?e.moveTo(d,f):e.lineTo(d,f)}e.strokeStyle=o===n?"rgba(255,244,197,0.85)":"rgba(244,226,174,0.42)",e.lineWidth=o===n?4:1.4,e.stroke()}const s=16;for(let o=0;o<s;o++){const l=o/s*Er+.06;e.beginPath(),e.moveTo(Math.cos(l)*512*.09,Math.sin(l)*512*.09),e.lineTo(Math.cos(l)*512*.455,Math.sin(l)*512*.455),e.strokeStyle="rgba(236,217,164,0.33)",e.lineWidth=1.1,e.stroke()}const r=e.createRadialGradient(0,0,2,0,0,70);r.addColorStop(0,"rgba(255,255,238,0.8)"),r.addColorStop(.35,"rgba(255,219,124,0.18)"),r.addColorStop(1,"rgba(255,195,70,0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,70,0,Er),e.fill();const a=new ln(t);return a.colorSpace=_e,a}const Ox=Nx(),zx=Fx();class Bx{constructor(t,e){this.scene=t,this.camera=e,this.items=[],this.coins=[],this.coinMesh=null,this.sparkPool=[],this.initCoins(),this.initSparks(),this.initFishShadows()}initFishShadows(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,2,64,64,61);s.addColorStop(0,"rgba(0,10,13,0.62)"),s.addColorStop(.5,"rgba(0,10,13,0.34)"),s.addColorStop(1,"rgba(0,10,13,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);const r=new ln(e);r.colorSpace=_e;const a=new Fn(1,1);a.rotateX(-Math.PI/2);const o=new ge({map:r,transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1});this.fishShadowMesh=new mc(a,o,48),this.fishShadowMesh.instanceMatrix.setUsage(Yh),this.fishShadowMesh.frustumCulled=!1,this.fishShadowMesh.renderOrder=1,this.scene.add(this.fishShadowMesh),this.fishShadowDummy=new Ve}updateFishShadows(t){if(!this.fishShadowMesh)return;let e=0;for(const n of t){if(n.state!=="alive"||n.dead)continue;if(e>=48)break;const s=n.baseScale*n.designLength,r=n.root.position.y,a=s*(.4+Math.min(.5,r*.045));this.fishShadowDummy.position.set(n.root.position.x,.6,n.root.position.z),this.fishShadowDummy.scale.set(a*.75,1,a*.48),this.fishShadowDummy.rotation.set(0,0,0),this.fishShadowDummy.updateMatrix(),this.fishShadowMesh.setMatrixAt(e++,this.fishShadowDummy.matrix)}this.fishShadowMesh.count=e,this.fishShadowMesh.instanceMatrix.needsUpdate=!0}initCoins(){const t=new Le(.13,.13,.035,9),e=new Ft({color:16762442,roughness:.22,metalness:.8,emissive:7026183,emissiveIntensity:.6});this.coinMesh=new mc(t,e,180),this.coinMesh.instanceMatrix.setUsage(Yh),this.coinMesh.frustumCulled=!1,this.coinMesh.castShadow=!1,this.scene.add(this.coinMesh),this.coinDummy=new Ve,this.coinData=[];for(let n=0;n<180;n++)this.coinData.push({active:!1,pos:new A,vel:new A,spin:new A,life:0,maxLife:1,scale:1}),this.coinDummy.position.set(0,-50,0),this.coinDummy.updateMatrix(),this.coinMesh.setMatrixAt(n,this.coinDummy.matrix);this.coinCursor=0}initSparks(){const t=new Xn({map:Ox,color:16771240,blending:ce,transparent:!0,depthWrite:!1,opacity:0,toneMapped:!1});for(let e=0;e<16;e++){const n=new Kn(t.clone());n.visible=!1,n.scale.setScalar(.6),this.scene.add(n),this.sparkPool.push({sprite:n,life:0,maxLife:1,velocity:new A,scale:1})}this.sparkCursor=0}coinBurst(t,e=10,n=!1){const s=Math.min(e,36);for(let r=0;r<s;r++){const a=this.coinCursor++%this.coinData.length,o=this.coinData[a];o.active=!0,o.life=Te(.7,1.35),o.maxLife=o.life,o.scale=Te(.55,1.25)*(n?1.3:1),o.pos.set(t.x+Te(-.3,.3),t.y+Te(-.1,.4),t.z+Te(-.3,.3)),o.vel.set(Te(-3.5,3.5),Te(2.4,7.5)*(n?1.3:1),Te(-2.8,2.8)),o.spin.set(Te(-10,10),Te(-10,10),Te(-10,10)),o.rotation=new La(Te(0,Er),Te(0,Er),Te(0,Er))}}spark(t,e=16769952,n=1.1){const s=this.sparkPool[this.sparkCursor++%this.sparkPool.length];s.life=.32,s.maxLife=.32,s.scale=n,s.sprite.position.copy(t),s.sprite.material.color.set(e),s.sprite.material.opacity=.9,s.sprite.visible=!0,s.sprite.scale.setScalar(n*.35),s.velocity.set(Te(-.8,.8),Te(-.4,.8),Te(-.8,.8))}net(t,e=!1,n=16766581){const s=new zt;s.position.copy(t);const r=new ge({map:zx,color:n,transparent:!0,opacity:.95,depthWrite:!1,blending:ce,side:pe,toneMapped:!1}),a=new B(new Fn(1,1),r);s.add(a);const o=new ge({color:16774338,transparent:!0,opacity:.7,blending:ce,depthWrite:!1,side:pe,toneMapped:!1}),l=new B(new Ne(.46,.012,5,42),o);s.add(l),s.scale.setScalar(.4),this.scene.add(s),this.items.push({type:"net",object:s,mats:[r,o],life:0,maxLife:.78,size:e?4.8:2.4,billboard:!0})}splash(t){const e=new ge({color:10551280,transparent:!0,opacity:.46,blending:ce,depthWrite:!1,side:pe,toneMapped:!1}),n=new zo(.12,.23,28),s=new B(n,e);s.position.copy(t),s.rotation.x=-Math.PI/2,this.scene.add(s),this.items.push({type:"splash",object:s,mats:[e],life:0,maxLife:.55,floor:!0}),this.bubbles(t,4,.4)}bubbles(t,e=6,n=.5){for(let s=0;s<e;s++)this.spark(new A(t.x+Te(-n,n),t.y+Te(-.1,n),t.z+Te(-n,n)),10485745,Te(.35,.9))}shockwave(t,e=16758108,n=1.1){const s=new ge({color:e,transparent:!0,opacity:.8,blending:ce,depthWrite:!1,side:pe,toneMapped:!1}),r=new B(new zo(.38,.55,48),s);r.rotation.x=-Math.PI/2,r.position.copy(t),this.scene.add(r),this.items.push({type:"shockwave",object:r,mats:[s],life:0,maxLife:n,floor:!0})}explosion(t){const e=new ge({color:16769953,transparent:!0,opacity:.85,blending:ce,depthWrite:!1,side:dn,toneMapped:!1}),n=new B(new ue(1,24,16),e);n.position.copy(t),this.scene.add(n),this.items.push({type:"explosion",object:n,mats:[e],life:0,maxLife:1.2}),this.shockwave(new A(t.x,.25,t.z),16765581,1.4),this.bubbles(t,22,1.3),this.spark(t,16760433,4.5),this.coinBurst(t,12,!0)}lightning(t){const e=new zt,n=[];for(let s=0;s<Math.min(t.length,10);s++){const r=t[s].position||t[s],a=new A(r.x+Te(-3.5,3.5),r.y+Te(6,11),r.z+Te(-2.5,2.5)),o=[a.clone()],l=7;for(let x=1;x<l;x++){const m=x/l;o.push(new A(yl.lerp(a.x,r.x,m)+Te(-.45,.45),yl.lerp(a.y,r.y,m)+Te(-.15,.15),yl.lerp(a.z,r.z,m)+Te(-.45,.45)))}o.push(new A(r.x,r.y,r.z));const c=new zi(o),h=new ki(c,22,.026,5,!1),u=new ge({color:13631477,transparent:!0,opacity:.95,blending:ce,depthWrite:!1,toneMapped:!1}),d=new B(h,u);e.add(d),n.push(u);const f=new ki(c,22,.085,5,!1),g=new ge({color:6225894,transparent:!0,opacity:.16,blending:ce,depthWrite:!1,toneMapped:!1});e.add(new B(f,g)),n.push(g),this.spark(r,12451829,1.8)}this.scene.add(e),this.items.push({type:"lightning",object:e,mats:n,life:0,maxLife:.52}),this.shockwave(new A(t[0]?.position?.x||0,.2,t[0]?.position?.z||0),10485745,.8)}update(t,e){for(let n=0;n<this.coinData.length;n++){const s=this.coinData[n];if(!s.active){n<3&&(this.coinDummy.position.set(0,-50,0),this.coinDummy.updateMatrix(),this.coinMesh.setMatrixAt(n,this.coinDummy.matrix));continue}if(s.life-=t,s.life<=0){s.active=!1,this.coinDummy.position.set(0,-50,0),this.coinDummy.updateMatrix(),this.coinMesh.setMatrixAt(n,this.coinDummy.matrix);continue}s.vel.y-=15*t,s.pos.addScaledVector(s.vel,t),s.pos.y<.22&&(s.pos.y=.22,s.vel.y*=-.28,s.vel.x*=.7,s.vel.z*=.7),s.rotation.x+=s.spin.x*t,s.rotation.y+=s.spin.y*t,s.rotation.z+=s.spin.z*t;const r=Qu(s.life/s.maxLife,0,1);this.coinDummy.position.copy(s.pos),this.coinDummy.rotation.copy(s.rotation);const a=s.scale*(.25+.75*Math.min(1,r*1.6));this.coinDummy.scale.setScalar(a),this.coinDummy.updateMatrix(),this.coinMesh.setMatrixAt(n,this.coinDummy.matrix)}this.coinMesh.instanceMatrix.needsUpdate=!0;for(const n of this.sparkPool){if(n.life<=0)continue;if(n.life-=t,n.life<=0){n.sprite.visible=!1;continue}const s=n.life/n.maxLife;n.sprite.position.addScaledVector(n.velocity,t),n.sprite.material.opacity=s*.85,n.sprite.scale.setScalar(n.scale*(.45+(1-s)*1.8))}for(let n=this.items.length-1;n>=0;n--){const s=this.items[n];s.life+=t;const r=Qu(s.life/s.maxLife,0,1);if(s.type==="net"){s.billboard&&s.object.quaternion.copy(this.camera.quaternion);const a=s.size*(.24+Math.pow(r,.5)*1.1);s.object.scale.setScalar(a),s.mats[0].opacity=(1-r)*.95,s.mats[1].opacity=(1-r)*.7}else if(s.type==="splash"){const a=1+r*5;s.object.scale.setScalar(a),s.mats[0].opacity=(1-r)*.44}else if(s.type==="shockwave"){const a=1+Math.pow(r,.45)*13;s.object.scale.setScalar(a),s.mats[0].opacity=(1-r)*.7}else if(s.type==="explosion"){const a=.4+Math.pow(r,.32)*6;s.object.scale.setScalar(a),s.mats[0].opacity=(1-r)*.8}else s.type==="lightning"&&(s.mats.forEach(a=>{a.opacity*=Math.pow(8e-4,t)}),r>.75&&(s.object.visible=Math.random()>.4));r>=1&&(this.scene.remove(s.object),s.object.traverse(a=>{a.geometry&&a.geometry.dispose()}),s.mats.forEach(a=>a.dispose()),this.items.splice(n,1))}}}new A(1,0,0);new A(0,1,0);const kx=new A(0,0,1),Gx=(i,t,e)=>Math.max(t,Math.min(e,i)),Ts=(i,t)=>i+Math.random()*(t-i);function Hx(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,239,169,0.82)"),e.addColorStop(.5,"rgba(255,183,65,0.18)"),e.addColorStop(1,"rgba(255,160,40,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new ln(i);return n.colorSpace=_e,n}function Vx(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,256,256);e.addColorStop(0,"#f4db92"),e.addColorStop(.35,"#c99845"),e.addColorStop(.7,"#f1cc6e"),e.addColorStop(1,"#9a692b"),t.fillStyle=e,t.fillRect(0,0,256,256);for(let s=0;s<256;s+=18)for(let r=0;r<256;r+=22)t.beginPath(),t.arc(r+Math.floor(s/18)%2*11,s,10,Math.PI*1.04,Math.PI*1.96),t.strokeStyle="rgba(80,48,12,0.28)",t.lineWidth=1.2,t.stroke(),t.beginPath(),t.arc(r+Math.floor(s/18)%2*11,s+2,7,Math.PI*1.08,Math.PI*1.92),t.strokeStyle="rgba(255,245,200,0.28)",t.lineWidth=1,t.stroke();const n=new ln(i);return n.wrapS=Fi,n.wrapT=Fi,n.repeat.set(2,2),n.colorSpace=_e,n}function Wx(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,256,256);e.addColorStop(0,"#0e8174"),e.addColorStop(.35,"#0a5b52"),e.addColorStop(.7,"#1ca18d"),e.addColorStop(1,"#063e3b"),t.fillStyle=e,t.fillRect(0,0,256,256);for(let s=0;s<80;s++){t.strokeStyle=`rgba(160,255,228,${.02+Math.random()*.08})`,t.lineWidth=.5+Math.random()*2.4,t.beginPath();const r=Math.random()*256,a=Math.random()*256;t.moveTo(r,a),t.bezierCurveTo(r+Ts(-30,30),a+Ts(-30,30),r+Ts(-50,50),a+Ts(-50,50),r+Ts(-60,60),a+Ts(-60,60)),t.stroke()}const n=new ln(i);return n.colorSpace=_e,n}function Xx(i,t,e){const n=new ei;for(let r=0;r<t*2;r++){const a=r/(t*2)*Math.PI*2,o=r%2?i*.82:i,l=Math.cos(a)*o,c=Math.sin(a)*o;r===0?n.moveTo(l,c):n.lineTo(l,c)}n.closePath();const s=new il(n,{depth:e,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:1});return s.rotateX(-Math.PI/2),s}class qx{constructor(t,e,n,s){this.scene=t,this.camera=e,this.effects=n,this.audio=s,this.group=new zt,this.group.name="pearl-cannon",this.group.position.set(0,.4,7),this.group.scale.setScalar(1.14),this.aimOrigin=new A(0,2.18,7),t.add(this.group),this.bullets=[],this.aimTarget=new A(0,3,-6),this.aimFish=null,this.powerLevel=3,this.recoil=0,this.idle=0,this.lastShotAt=0,this.muzzleFlashT=0,this.shotCount=0,this.glowTex=Hx(),this.build(),this.barrelYaw=0,this.barrelPitch=.12}build(){const t=Vx(),e=Wx();this.materials={gold:new Ft({map:t,color:16768914,roughness:.3,metalness:.78,emissive:4071686,emissiveIntensity:.32}),goldBright:new Ft({color:16771492,roughness:.22,metalness:.86,emissive:5976584,emissiveIntensity:.5}),jade:new Ft({map:e,color:4568994,roughness:.25,metalness:.15,emissive:412226,emissiveIntensity:.55}),jadeBright:new Ft({color:6288337,roughness:.16,metalness:.2,emissive:755317,emissiveIntensity:1.25}),lacquer:new Ft({color:9316388,roughness:.34,metalness:.18,emissive:2228994,emissiveIntensity:.4}),darkMetal:new Ft({color:1585455,roughness:.45,metalness:.65}),pearl:new Ft({color:16775132,roughness:.12,metalness:.34,emissive:9136943,emissiveIntensity:.85})};const n=new B(new Le(2.05,2.35,.46,28),this.materials.darkMetal);n.position.y=.22,n.castShadow=!0,n.receiveShadow=!0,this.group.add(n);const s=new B(Xx(2.12,18,.18),this.materials.gold);s.position.y=.48,s.castShadow=!0,this.group.add(s);const r=new B(new Le(1.6,1.9,.42,28),this.materials.jade);r.position.y=.72,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);const a=new B(new Ne(1.66,.09,8,44),this.materials.goldBright);a.rotation.x=Math.PI/2,a.position.y=.96,this.group.add(a);const o=new ue(.32,10,6);o.scale(.6,.15,1.7);for(let b=0;b<12;b++){const E=b/12*Math.PI*2,D=new B(o,b%2?this.materials.gold:this.materials.jade);D.position.set(Math.cos(E)*1.57,.85,Math.sin(E)*1.57),D.rotation.y=-E,D.rotation.z=.1,this.group.add(D)}const l=new B(new Le(1.25,1.55,.55,24,1,!0),this.materials.gold);l.position.y=1.12,l.castShadow=!0,this.group.add(l);const c=new B(new Le(1.04,1.24,.36,24,1,!0),this.materials.lacquer);c.position.y=1.38,this.group.add(c),this.studs=[];for(let b=0;b<7;b++){const E=b/7*Math.PI*2-Math.PI*.5,D=new B(new ue(.075,8,6),this.materials.jadeBright.clone());D.position.set(Math.cos(E)*1.43,1.13,Math.sin(E)*1.43),D.material.emissiveIntensity=.15,this.group.add(D),this.studs.push(D)}this.turret=new zt,this.turret.position.y=1.55,this.group.add(this.turret);const h=new B(new ue(.9,22,12,0,Math.PI*2,0,Math.PI*.58),this.materials.jade);h.scale.set(1,.75,1),h.castShadow=!0,h.rotation.x=-.1,this.turret.add(h);const u=new B(new Ne(.86,.07,6,28),this.materials.goldBright);u.rotation.x=Math.PI/2,u.position.y=.08,this.turret.add(u);const d=new ei;d.moveTo(0,.08),d.bezierCurveTo(.7,.5,1.55,.48,2.25,.08),d.bezierCurveTo(1.68,-.14,1.2,-.55,1.85,-.88),d.bezierCurveTo(1,-.74,.42,-.34,0,-.08),d.closePath();const f=new Bi(d,12);for(const b of[-1,1]){const E=new B(f,this.materials.jade);E.scale.x=b,E.position.set(b*.48,.3,.22),E.rotation.y=b*-.46,E.rotation.z=b*-.08,this.turret.add(E);const D=new B(f,this.materials.goldBright);D.scale.set(b*.82,.82,1),D.position.set(b*.48,.34,.235),D.rotation.y=b*-.46,D.rotation.z=b*-.08,this.turret.add(D)}for(let b=0;b<3;b++){const E=new B(new Qn(.055,.36+b*.08,4),this.materials.goldBright);E.position.set((b-1)*.19,1.32,.03),E.rotation.z=(b-1)*.22,this.turret.add(E)}for(const b of[-1,1]){const E=new B(new ue(.38,12,8),this.materials.lacquer);E.scale.set(1.15,.7,.55),E.position.set(b*.62,.32,.15),this.turret.add(E);const D=new B(new Le(.03,.055,.95,5),this.materials.goldBright);D.position.set(b*.78,.59,-.1),D.rotation.z=b*.72,D.rotation.x=.2,this.turret.add(D)}this.pitchGroup=new zt,this.pitchGroup.position.y=.72,this.turret.add(this.pitchGroup);const g=new B(new Le(.34,.57,3.2,18),this.materials.gold);g.rotation.x=-Math.PI/2,g.position.z=-1.52,g.castShadow=!0,this.barrel=g,this.pitchGroup.add(g);const x=new B(new Ne(.51,.11,8,24),this.materials.goldBright);x.position.z=-3.12,this.pitchGroup.add(x);const m=new B(new Ne(.37,.08,7,24),this.materials.jadeBright);m.position.z=-3.18,this.pitchGroup.add(m);for(let b=0;b<8;b++){const E=b/8*Math.PI*2,D=new B(new Qn(.075,.4,4),this.materials.goldBright);D.position.set(Math.cos(E)*.65,Math.sin(E)*.65,-3.05),D.rotation.x=Math.PI/2,D.rotation.z=E,this.pitchGroup.add(D)}for(let b=0;b<3;b++){const E=new B(new Ne(.46+b*.035,.05,6,22),b===1?this.materials.jadeBright:this.materials.lacquer);E.position.z=-.28-b*.82,this.pitchGroup.add(E)}const p=new zi([new A(.28,.34,-.2),new A(-.16,.43,-1.05),new A(.18,.38,-1.9),new A(-.1,.32,-2.8)]),_=new B(new ki(p,24,.026,4,!1),this.materials.goldBright);this.pitchGroup.add(_),this.core=new B(new ue(.2,16,12),this.materials.pearl),this.core.position.set(0,1.05,0),this.turret.add(this.core),this.coreGlow=new Kn(new Xn({map:this.glowTex,color:16770469,transparent:!0,opacity:.7,blending:ce,depthWrite:!1,toneMapped:!1})),this.coreGlow.scale.set(1.7,1.7,1),this.coreGlow.position.copy(this.core.position),this.turret.add(this.coreGlow),this.muzzle=new Ve,this.muzzle.position.z=-3.3,this.pitchGroup.add(this.muzzle);const v=new B(new ue(.22,14,10),this.materials.jadeBright);v.position.z=-3.18,this.pitchGroup.add(v),this.muzzleCore=v,this.muzzleCoreGlow=new Kn(new Xn({map:this.glowTex,color:9306087,transparent:!0,opacity:.52,blending:ce,depthWrite:!1,toneMapped:!1})),this.muzzleCoreGlow.scale.set(1.4,1.4,1),this.muzzleCoreGlow.position.z=-3.16,this.pitchGroup.add(this.muzzleCoreGlow),this.muzzleFlash=new Kn(new Xn({map:this.glowTex,color:16771488,transparent:!0,opacity:0,blending:ce,depthWrite:!1,toneMapped:!1})),this.muzzleFlash.scale.set(2.4,2.4,1),this.muzzleFlash.position.z=-3.45,this.pitchGroup.add(this.muzzleFlash),this.muzzleLight=new Mo(16761699,0,9,2),this.muzzleLight.position.z=-3.4,this.pitchGroup.add(this.muzzleLight);const y=new zt;y.position.set(-.9,.95,.45);const R=new B(new Ne(.18,.026,5,14),this.materials.goldBright);R.rotation.y=Math.PI/2,y.add(R);for(let b=0;b<7;b++){const E=new B(new Le(.012,.02,.7,4),this.materials.lacquer);E.position.set(-.04+b*.014,-.45,.03*Math.sin(b)),E.rotation.z=Ts(-.16,.16),y.add(E)}this.tassel=y,this.group.add(y)}setPowerLevel(t){this.powerLevel=t,this.studs.forEach((n,s)=>{const r=s<t;n.material.emissiveIntensity=r?1.6:.12,n.material.color.set(r?9306084:1983551)});const e=.9+t*.045;this.barrel.scale.set(e,e,1+t*.022),this.materials.jadeBright.emissiveIntensity=.9+t*.12}getAimPoint(){return this.aimFish&&this.aimFish.state==="alive"&&!this.aimFish.dead?new A(this.aimFish.position.x,this.aimFish.position.y+.25,this.aimFish.position.z):this.aimTarget.clone()}aimAt(t){t&&(t.position?(this.aimFish=t,this.aimTarget.copy(t.position)):(this.aimFish=null,this.aimTarget.copy(t)))}updateAim(t,e){const n=this.getAimPoint(),s=this.aimOrigin,r=n.x-s.x,a=n.z-s.z,o=Math.hypot(r,a),l=Math.atan2(-r,-a),c=Gx(Math.atan2(n.y-s.y,o),-.05,.72),h=1-Math.exp(-t*8.5);this.barrelYaw+=this._shortAngle(l-this.barrelYaw)*h,this.barrelPitch+=(c-this.barrelPitch)*h,this.turret.rotation.y=this.barrelYaw,this.pitchGroup.rotation.x=this.barrelPitch,this.pitchGroup.position.z=this.recoil*.3,this.recoil=Math.max(0,this.recoil-t*4.6),this.idle+=t,this.core.position.y=1.05+Math.sin(e*1.9)*.035,this.coreGlow.position.y=this.core.position.y,this.coreGlow.material.opacity=.56+Math.sin(e*1.9)*.12,this.muzzleCoreGlow&&(this.muzzleCoreGlow.material.opacity=.42+Math.sin(e*2.4+1)*.1),this.tassel.rotation.z=Math.sin(e*1.25)*.05,this.tassel.rotation.x=Math.cos(e*.9)*.03,this.muzzleFlash.material.opacity=Math.max(0,this.muzzleFlash.material.opacity-t*8),this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-t*90)}_shortAngle(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}fire(t,e){this.recoil=1,this.shotCount++,this.muzzleFlash.material.opacity=1,this.muzzleLight.intensity=22;const n=new A;this.muzzle.getWorldPosition(n);const s=this.aimFish&&this.aimFish.state==="alive"&&!this.aimFish.dead?this.aimFish:null,r=this.getAimPoint(),a=new zt;a.position.copy(n),a.scale.setScalar(.72+t*.05);const o=new Ft({color:16768130,roughness:.2,metalness:.7,emissive:12084753,emissiveIntensity:.9}),l=new B(new ue(.17,10,8),o);a.add(l);const c=new B(new Ne(.32,.025,5,18),new ge({color:16770727,transparent:!0,opacity:.9,blending:ce,depthWrite:!1,toneMapped:!1}));a.add(c);const h=new Kn(new Xn({map:this.glowTex,color:16765038,transparent:!0,opacity:.9,blending:ce,depthWrite:!1,toneMapped:!1}));h.scale.set(1.9,1.9,1),a.add(h),this.scene.add(a);const u=44+t*2.4;this.bullets.push({group:a,targetFish:s,targetPoint:r.clone(),currentTarget:r.clone(),origin:n.clone(),powerLevel:t,speed:u,life:0,onImpact:e,shellMat:o,ringMat:c.material,glintMat:h.material,shells:[l.geometry],ringGeometry:c.geometry,direction:new A})}update(t,e){this.updateAim(t,e);for(let n=this.bullets.length-1;n>=0;n--){const s=this.bullets[n];s.life+=t,s.targetFish&&s.targetFish.state==="alive"&&!s.targetFish.dead&&s.currentTarget.set(s.targetFish.position.x,s.targetFish.position.y+.28,s.targetFish.position.z);const r=new A().subVectors(s.currentTarget,s.group.position),a=r.length(),o=s.speed*t;if(a<=Math.max(.55,o*1.15)||s.life>2.2){this.impact(s,s.currentTarget,s.targetFish),this.bullets.splice(n,1);continue}r.normalize(),s.group.position.addScaledVector(r,o),s.group.quaternion.setFromUnitVectors(kx,r);const l=1+Math.sin(s.life*40)*.1;s.group.scale.multiplyScalar(l>1?1.003:.998)}}impact(t,e,n){this.scene.remove(t.group),t.shellMat.dispose(),t.ringMat.dispose(),t.glintMat.dispose(),t.shells.forEach(s=>s.dispose()),t.ringGeometry?.dispose(),this.effects.spark(e,16766332,1.25+t.powerLevel*.03),t.onImpact&&t.onImpact({fish:n,position:e.clone(),powerLevel:t.powerLevel})}}const cn=Math.PI*2,Ql=new A(1,0,0),tc=(i,t,e)=>Math.max(t,Math.min(e,i));function Zc(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Tr(i=512,t=256){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function So(i,t=1,e=1){const n=new ln(i);return n.colorSpace=_e,n.anisotropy=4,n.wrapS=Fi,n.wrapT=Fi,n.repeat.set(t,e),n}function ec(i,t,e){const n=new Gt(i),s=new Gt(t);return`#${n.lerp(s,e).getHexString()}`}function Jc(i,t,e,n="oval",s=.6){const r=n==="disc"?20:18,a=34,o=[],l=[],c=[];for(let u=0;u<=a;u++){const d=u/a;let f;n==="shark"?(f=Math.pow(Math.sin(Math.PI*Math.pow(d,.82)),.58),f*=.9+d*.32):n==="disc"?f=Math.pow(Math.sin(Math.PI*Math.pow(d,.78)),.32):n==="dragon"?f=Math.pow(Math.sin(Math.PI*Math.pow(d,.86)),.46)*(.82+d*.34):(f=Math.pow(Math.sin(Math.PI*d),s),f*=.92+d*.16);const g=i*(.5-d),x=1+Math.sin(Math.PI*d)*.06-d*.08;for(let m=0;m<=r;m++){const p=m/r,_=p*cn,v=Math.cos(_)*t*f*x,y=Math.sin(_)*e*f;o.push(g,v,y),l.push(d,p)}}for(let u=0;u<a;u++)for(let d=0;d<r;d++){const f=u*(r+1)+d,g=f+r+1;c.push(f,g,f+1,g,g+1,f+1)}const h=new ze;return h.setAttribute("position",new re(o,3)),h.setAttribute("uv",new re(l,2)),h.setIndex(c),h.computeVertexNormals(),h.computeBoundingSphere(),h}const Ar=new Map;function $x(i){if(Ar.has(i))return Ar.get(i);const t=tn[i],[e,n]=Tr(640,320),s=640,r=320,a=t.body[0],o=t.body[1];t.accent;const l=i==="shark"||i==="boss",c=i==="lantern",h=i==="boss"?"#b99e54":l?"#f0f3e7":ec(a,"#fff4d0",.58),u=n.createLinearGradient(0,0,0,r);u.addColorStop(0,ec(o,"#02161b",.36)),u.addColorStop(.18,o),u.addColorStop(.38,a),u.addColorStop(.5,h),u.addColorStop(.62,a),u.addColorStop(.82,o),u.addColorStop(1,ec(o,"#02161b",.36)),n.fillStyle=u,n.fillRect(0,0,s,r);const d=Zc(i.charCodeAt(0)*117+i.length*31+8),f=(_,v)=>_+(v-_)*d();for(let _=0;_<3800;_++)n.fillStyle=d()>.5?`rgba(255,255,255,${f(.008,.035)})`:`rgba(0,15,18,${f(.008,.03)})`,n.beginPath(),n.arc(f(0,s),f(0,r),f(.3,1.15),0,cn),n.fill();if(!l&&!c)for(let _=20;_<r;_+=16){const v=Math.floor(_/16)%2*9;for(let y=v;y<s;y+=18)n.beginPath(),n.arc(y,_,f(7,10),Math.PI*1.06,Math.PI*1.94),n.strokeStyle=`rgba(255,247,215,${f(.03,.115)})`,n.lineWidth=.8,n.stroke(),n.beginPath(),n.arc(y+1,_+1.5,f(7,10),Math.PI*1.06,Math.PI*1.94),n.strokeStyle="rgba(0,22,28,0.06)",n.stroke()}function g(_,v,y,R="rgba(7,24,28,0.8)",b=12){n.save(),n.beginPath();for(let E=-10;E<=r+10;E+=8){const D=_+Math.sin(E*.045+_)*b;E===-10?n.moveTo(D,E):n.lineTo(D,E)}for(let E=r+10;E>=-10;E-=8){const D=_+v+Math.sin(E*.045+_+1)*b;n.lineTo(D,E)}n.closePath(),n.fillStyle=y,n.fill(),n.strokeStyle=R,n.lineWidth=3.5,n.stroke(),n.restore()}if(i==="clown")g(s*.14,s*.055,"#fff1d8","rgba(24,20,20,0.92)",9),g(s*.45,s*.075,"#fff7e6","rgba(24,20,20,0.92)",12),g(s*.79,s*.055,"#fff0d4","rgba(24,20,20,0.9)",8),n.fillStyle="rgba(255,215,120,0.12)",n.fillRect(0,r*.35,s,r*.12);else if(i==="snapper"){for(let _=0;_<70;_++){const v=f(0,s),y=f(r*.2,r*.82);n.strokeStyle=`rgba(255,204,144,${f(.03,.14)})`,n.lineWidth=f(.5,1.8),n.beginPath(),n.moveTo(v,y),n.lineTo(v+f(8,28),y+f(-3,3)),n.stroke()}n.fillStyle="rgba(255,220,160,0.1)",n.fillRect(s*.08,r*.42,s*.84,r*.16)}else if(i==="tang")n.fillStyle="rgba(8,41,101,0.65)",n.beginPath(),n.moveTo(s*.03,r*.36),n.bezierCurveTo(s*.24,r*.22,s*.42,r*.34,s*.58,r*.52),n.bezierCurveTo(s*.38,r*.61,s*.18,r*.64,s*.03,r*.55),n.closePath(),n.fill(),n.strokeStyle="#111c36",n.lineWidth=12,n.beginPath(),n.moveTo(s*.77,0),n.bezierCurveTo(s*.68,r*.25,s*.73,r*.7,s*.9,r),n.stroke(),n.fillStyle="rgba(255,221,74,0.75)",n.beginPath(),n.moveTo(s*.5,r*.06),n.bezierCurveTo(s*.72,r*.08,s*.9,r*.2,s*.98,r*.32),n.lineTo(s*.98,r*.18),n.lineTo(s*.42,r*.035),n.closePath(),n.fill();else if(i==="lantern"){for(let _=0;_<55;_++){const v=f(0,s),y=f(0,r);n.strokeStyle=`rgba(174,255,240,${f(.02,.08)})`,n.beginPath(),n.arc(v,y,f(7,14),Math.PI*1.05,Math.PI*1.95),n.stroke()}n.fillStyle="rgba(4,20,26,0.58)",n.fillRect(0,r*.22,s,r*.56);for(let _=80;_<s-20;_+=46){const v=r*.5+Math.sin(_*.05)*4,y=n.createRadialGradient(_,v,0,_,v,19);y.addColorStop(0,"rgba(212,255,246,1)"),y.addColorStop(.3,"rgba(100,255,229,0.85)"),y.addColorStop(1,"rgba(27,255,218,0)"),n.fillStyle=y,n.fillRect(_-20,v-20,40,40)}}else if(i==="angel")g(s*.24,s*.08,"rgba(41,39,35,0.88)","rgba(31,28,24,0.9)",14),g(s*.52,s*.07,"rgba(41,39,35,0.88)","rgba(31,28,24,0.9)",12),g(s*.78,s*.055,"rgba(51,46,38,0.82)","rgba(31,28,24,0.9)",10),n.fillStyle="rgba(255,247,204,0.18)",n.fillRect(0,r*.4,s,r*.2);else if(i==="puffer"){for(let _=0;_<32;_++){const v=f(40,s-30),y=f(r*.18,r*.82),R=f(5,13);n.fillStyle=`rgba(55,42,28,${f(.12,.45)})`,n.beginPath(),n.arc(v,y,R,0,cn),n.fill(),n.fillStyle="rgba(255,241,193,0.22)",n.beginPath(),n.arc(v-R*.22,y-R*.24,R*.34,0,cn),n.fill()}n.fillStyle="rgba(255,236,172,0.18)",n.beginPath(),n.ellipse(s*.2,r*.5,s*.13,r*.24,0,0,cn),n.fill()}else if(i==="butterfly"){g(s*.5,s*.16,"rgba(34,55,61,0.88)","rgba(21,37,43,0.9)",16),n.fillStyle="rgba(255,224,120,0.3)",n.fillRect(0,r*.34,s,r*.32);const _=n.createRadialGradient(s*.84,r*.47,2,s*.84,r*.47,36);_.addColorStop(0,"rgba(14,28,34,0.9)"),_.addColorStop(.68,"rgba(35,60,63,0.75)"),_.addColorStop(1,"rgba(255,205,95,0)"),n.fillStyle=_,n.fillRect(s*.78,r*.3,52,70)}else if(l){for(let _=0;_<72;_++){const v=f(0,s),y=f(0,r);n.strokeStyle=`rgba(238,247,235,${f(.015,.06)})`,n.lineWidth=f(.4,1.6),n.beginPath(),n.moveTo(v,y),n.lineTo(v+f(-34,34),y+f(-8,8)),n.stroke()}if(i==="shark"){for(let _=0;_<5;_++)n.strokeStyle=`rgba(9,28,36,${.35-_*.035})`,n.lineWidth=2.2,n.beginPath(),n.moveTo(s*.15+_*8,r*.26),n.quadraticCurveTo(s*.13+_*8,r*.39,s*.17+_*8,r*.48),n.stroke();n.fillStyle="rgba(247,248,236,0.17)",n.fillRect(s*.02,r*.46,s*.62,r*.09)}else{for(let _=0;_<24;_++){n.strokeStyle=`rgba(255,202,89,${f(.12,.36)})`,n.lineWidth=f(1,4.5),n.beginPath();const v=f(s*.1,s),y=f(r*.1,r*.9);n.moveTo(v,y),n.bezierCurveTo(v+f(-40,15),y+f(-22,22),v+f(-50,30),y+f(-28,28),v+f(-70,10),y+f(-32,32)),n.stroke()}n.fillStyle="rgba(255,190,63,0.2)",n.fillRect(0,r*.44,s,r*.12);for(let _=0;_<10;_++){const v=f(s*.12,s*.92),y=f(r*.16,r*.4);n.fillStyle=`rgba(255,223,137,${f(.2,.55)})`,n.beginPath(),n.arc(v,y,f(1,3.2),0,cn),n.fill()}}}else if(i==="golden"){for(let _=0;_<440;_++){const v=f(0,s),y=Math.sin(v*.025)*25+r*.5+f(-r*.38,r*.38);n.strokeStyle=`rgba(255,242,172,${f(.06,.22)})`,n.lineWidth=f(.5,1.5),n.beginPath(),n.arc(v,y,f(5,11),Math.PI*1.08,Math.PI*1.92),n.stroke()}n.fillStyle="rgba(255,242,175,0.16)",n.fillRect(0,r*.43,s,r*.15);for(let _=0;_<10;_++){const v=f(s*.06,s*.95);n.fillStyle=`rgba(179,51,21,${f(.08,.25)})`,n.beginPath(),n.ellipse(v,f(r*.2,r*.75),f(1.5,5),f(.8,2),f(-.3,.3),0,cn),n.fill()}}const x=n.createLinearGradient(0,0,0,r*.2);x.addColorStop(0,"rgba(220,255,247,0.17)"),x.addColorStop(1,"rgba(220,255,247,0)"),n.fillStyle=x,n.fillRect(0,0,s,r*.2);const p={map:So(e),emissiveMap:null};if(c||i==="golden"||i==="boss"){const[_,v]=Tr(640,320);if(v.fillStyle="#000",v.fillRect(0,0,s,r),c){for(let y=80;y<s-20;y+=46){const R=r*.5+Math.sin(y*.05)*4,b=v.createRadialGradient(y,R,0,y,R,22);b.addColorStop(0,"rgba(190,255,246,1)"),b.addColorStop(.25,"rgba(62,255,224,0.8)"),b.addColorStop(1,"rgba(0,60,50,0)"),v.fillStyle=b,v.fillRect(y-24,R-24,48,48)}for(let y=0;y<24;y++){const R=f(0,s),b=f(0,r);v.fillStyle=`rgba(62,255,219,${f(.05,.25)})`,v.beginPath(),v.arc(R,b,f(1,3),0,cn),v.fill()}}else{const[y,R]=Tr(640,320);R.fillStyle="#000",R.fillRect(0,0,s,r),R.globalCompositeOperation="lighter";for(let b=0;b<120;b++){const E=f(0,s),D=f(r*.18,r*.82),M=R.createRadialGradient(E,D,0,E,D,f(3,16));M.addColorStop(0,`rgba(255,${i==="boss"?170:220},70,${f(.15,.7)})`),M.addColorStop(1,"rgba(0,0,0,0)"),R.fillStyle=M,R.fillRect(E-18,D-18,36,36)}p.emissiveMap=So(y)}c&&(p.emissiveMap=So(_))}return Ar.set(i,p),p}function Yx(){if(Ar.has("shell"))return Ar.get("shell");const[i,t]=Tr(512,512),e=Zc(613),n=t.createLinearGradient(0,0,512,512);n.addColorStop(0,"#456f4d"),n.addColorStop(.5,"#75824e"),n.addColorStop(1,"#2d5a45"),t.fillStyle=n,t.fillRect(0,0,512,512),t.strokeStyle="rgba(27,50,35,0.7)",t.lineWidth=5;for(let r=0;r<5;r++)for(let a=0;a<7;a++){const o=a*82+r%2*41-20,l=r*95-30;t.beginPath(),t.moveTo(o+42,l+4),t.lineTo(o+77,l+30),t.lineTo(o+72,l+66),t.lineTo(o+34,l+72),t.lineTo(o+5,l+43),t.lineTo(o+12,l+14),t.closePath(),t.stroke(),t.fillStyle=`rgba(${e()>.5?"190,175,110":"30,60,44"},${.04+e()*.1})`,t.fill()}for(let r=0;r<1800;r++)t.fillStyle=e()>.5?`rgba(220,200,130,${.03+e()*.12})`:`rgba(9,36,29,${.02+e()*.1})`,t.beginPath(),t.arc(e()*512,e()*512,e()*2.6,0,cn),t.fill();const s=So(i);return Ar.set("shell",s),s}const un={eye:new Ft({color:198923,roughness:.08,metalness:.35}),eyeWhite:new ge({color:15400952,toneMapped:!1}),shadowDark:new Ft({color:1979706,roughness:.85}),gold:new Ft({color:15777109,roughness:.28,metalness:.7,emissive:3809543,emissiveIntensity:.5}),tooth:new Ft({color:16774620,roughness:.5}),glowCyan:new ge({color:8257513,toneMapped:!1}),glowGold:new ge({color:16767858,toneMapped:!1}),glowWarm:new ge({color:16752974,toneMapped:!1}),turtleSkin:new Ft({color:6132581,roughness:.55,metalness:.02}),turtleSkinDark:new Ft({color:3629897,roughness:.62}),manta:new Ft({color:3562092,roughness:.58,metalness:.08,side:pe}),mantaBelly:new Ft({color:14542555,roughness:.65,side:pe}),wood:new Ft({color:5126435,roughness:.9})},nd=(()=>{const[i,t]=Tr(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.16,"rgba(255,235,162,0.55)"),e.addColorStop(.5,"rgba(255,202,98,0.12)"),e.addColorStop(1,"rgba(255,181,64,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new ln(i)})();function jx(i){const t=$x(i),e=i==="lantern"?3801044:i==="golden"?8208646:i==="boss"?6240524:0;return new Ft({map:t.map,emissiveMap:t.emissiveMap||null,emissive:new Gt(e),emissiveIntensity:i==="lantern"?1.45:i==="golden"?1.3:i==="boss"?1.15:.015,color:16777215,roughness:i==="shark"||i==="boss"?.46:.29,metalness:i==="golden"?.3:i==="shark"||i==="boss"?.06:.1})}const nc=new Map;function Kc(i){return nc.has(i)||nc.set(i,jx(i)),nc.get(i)}function gn(i,t=.9,e=0){return new Ft({color:i,roughness:.4,metalness:.03,transparent:!0,opacity:t,side:pe,depthWrite:!1,emissive:e,emissiveIntensity:.75})}const Zx={clown:16757821,snapper:16747367,tang:16767052,lantern:5177307,angel:15915152,puffer:15254381,butterfly:16761164,golden:16763727};function Bo(i,t,e=.7){const n=new ei;return n.moveTo(0,.03),n.bezierCurveTo(-i*.2,t*.34,-i*(.55+e*.2),t*.9,-i,t*.7),n.quadraticCurveTo(-i*(.64+e*.1),0,-i,-t*.7),n.bezierCurveTo(-i*(.55+e*.2),-t*.9,-i*.2,-t*.34,0,-.03),n.closePath(),new Bi(n,12)}function us(i,t){const e=new ei;e.moveTo(0,0),e.bezierCurveTo(-i*.24,t*.42,-i*.74,t*1.15,-i,t),e.quadraticCurveTo(-i*.58,t*.28,-i*.86,0),e.quadraticCurveTo(-i*.42,-t*.2,0,0);const n=new Bi(e,10);return n.rotateX(-Math.PI/2),n}function tf(i,t,e="classic"){const n=new ei;return e==="disc"?(n.moveTo(-i*.42,0),n.bezierCurveTo(-i*.38,t*.95,-i*.1,t*1.15,i*.05,t*.89),n.quadraticCurveTo(i*.26,t*.55,i*.3,0)):(n.moveTo(-i*.36,0),n.bezierCurveTo(-i*.23,t*.6,-i*.06,t*.9,i*.16,t*.76),n.quadraticCurveTo(i*.22,t*.5,i*.31,0)),n.closePath(),new Bi(n,10)}const ef=(()=>{const[i,t]=Tr(128,128),e=t.createRadialGradient(54,50,4,64,64,52);e.addColorStop(0,"#fff7d3"),e.addColorStop(.6,"#efd58b"),e.addColorStop(.88,"#b88b3b"),e.addColorStop(1,"rgba(73,49,17,.35)"),t.fillStyle=e,t.beginPath(),t.arc(64,64,49,0,cn),t.fill(),t.strokeStyle="rgba(24,32,28,.8)",t.lineWidth=5,t.stroke();const n=t.createRadialGradient(57,58,2,64,64,27);n.addColorStop(0,"#263a3e"),n.addColorStop(.45,"#071418"),n.addColorStop(1,"#020809"),t.fillStyle=n,t.beginPath(),t.arc(65,65,27,0,cn),t.fill(),t.fillStyle="rgba(255,255,238,.92)",t.beginPath(),t.ellipse(56,52,7.2,5.6,-.5,0,cn),t.fill(),t.fillStyle="rgba(255,255,255,.35)",t.beginPath(),t.arc(77,76,3.4,0,cn),t.fill();const s=new ln(i);s.colorSpace=_e;const r=new Da(1,18),a=new ge({map:s,transparent:!0,depthWrite:!1,side:pe});return{geo:r,mat:a}})();function vi(i,t,e,n,s,r=!1){const a=Math.sign(n)||1,o=new B(ef.geo,ef.mat);o.position.set(t,e,n+a*s*.15),o.scale.setScalar(s*2.05),o.rotation.y=a>0?.15:Math.PI-.15,o.renderOrder=3,i.add(o)}function pa(i,t,e,n=.65){const s=new Kn(new Xn({map:nd,color:t,transparent:!0,opacity:n,blending:ce,depthWrite:!1,toneMapped:!1}));return s.scale.set(e,e,1),i.add(s),s}function Jx(i){const t=tn[i],e=t.shape==="disc",n=t.shape==="dragon",s=e?1.9:n?3.1:t.shape==="torpedo"?2.5:2.25,r=e?1.5:n?.72:t.shape==="torpedo"?.58:.68,a=e?.27:.38,o=new zt,l=new zt;l.name="model",o.add(l);const c=new B(Jc(s,r,a,e?"disc":n?"dragon":"oval"),Kc(i));c.name="body",c.castShadow=!0,c.receiveShadow=!0,l.add(c);const h=n?16765018:Zx[i]||t.body[0];t.accent;const u=n?5912072:i==="lantern"?742731:0,d=new zt;d.name="tail",d.position.x=-s*.48,l.add(d);const f=new B(Bo(e?.9:n?1.45:1.12,e?.84:n?.8:.56),gn(h,n?.96:.94,u));f.castShadow=!1,d.add(f);const g=new zt;g.name="dorsal",g.position.set(0,r*.48,0),l.add(g);const x=new B(tf(e?1.62:n?1.45:1.2,e?1.12:n?.9:.68,e?"disc":"classic"),gn(h,e?.82:.88,u));g.add(x);const m=new zt;m.position.set(0,-r*.45,0),m.scale.y=-1,l.add(m);const p=new B(tf(e?1.34:.8,e?.88:.34,e?"disc":"classic"),gn(h,e?.68:.63,u));m.add(p),m.name="anal";const _=new zt;_.name="finL",_.position.set(s*.1,-r*.08,a*.6);const v=new B(us(1,.37),gn(h,.82,u));_.add(v),l.add(_);const y=new zt;y.name="finR",y.position.set(s*.1,-r*.08,-a*.6);const R=new B(us(1,.37),gn(h,.82,u));R.scale.z=-1,y.add(R),l.add(y),vi(l,s*.27,r*.2,a*.9,e?.13:.105,i==="golden"),vi(l,s*.27,r*.2,-a*.9,e?.13:.105,i==="golden");const b=new B(new Ne(e?.07:.05,.012,4,10,Math.PI*.8),un.shadowDark);if(b.position.set(s*.47,-r*.12,0),b.rotation.set(Math.PI/2,.3,0),l.add(b),i==="lantern"){const E=[];for(let nt=0;nt<10;nt++){const I=s*.34-nt*(s*.066);for(const z of[-1,1]){const W=new ue(.035,6,4);W.translate(I,-r*.48+Math.sin(nt*1.4)*.035,a*.62*z),E.push(W)}}const D=new B(Wr(E,!1),un.glowCyan);E.forEach(nt=>nt.dispose()),l.add(D);const M=new zt;M.name="lure",M.position.set(s*.32,r*.55,.05);const w=new B(new Le(.022,.035,.8,5),un.shadowDark);w.position.y=.38,w.rotation.z=-.35,M.add(w);const N=new B(new ue(.105,10,8),un.glowCyan);N.position.set(-.27,.75,0),M.add(N);const H=new Kn(new Xn({map:nd,color:8257513,transparent:!0,opacity:.8,blending:ce,depthWrite:!1,toneMapped:!1}));H.scale.set(.9,.9,1),H.position.copy(N.position),M.add(H),l.add(M)}if(n){const E=gn(16768888,.9,7028232);for(const M of[-1,1]){const w=new zi([new A(s*.43,-r*.1,M*a*.32),new A(s*.65,-r*.16,M*a*.45),new A(s*.5,-r*.45,M*a*.55)]),N=new B(new ki(w,12,.022,4,!1),E);l.add(N);const H=new B(new ue(.035,6,4),un.glowGold);H.position.copy(w.getPoint(1)),l.add(H)}for(let M=0;M<4;M++){const w=new B(Bo(.55+M*.15,.4-M*.06,.4),gn(16764758,.28+M*.04,4992261));w.position.set(-s*.38+M*.08,r*.7+M*.05,0),w.rotation.z=.4,l.add(w)}const D=pa(l,16762970,s*2.6,.55);D.name="aura"}return t.glowing&&i!=="golden"&&pa(l,16765034,s*1.2,.24),{group:o,designLength:s,tail:"tail",nodes:["tail","dorsal","anal","finL","finR","lure"],kind:"generic"}}function Kx(i){const t=i==="boss",e=3.4,n=.74,s=.44,r=new zt,a=new zt;a.name="model",r.add(a);const o=new B(Jc(e,n,s,"shark"),Kc(i));o.name="body",o.castShadow=!0,o.receiveShadow=!0,a.add(o);const l=new B(new ue(.47,12,8),new Ft({color:t?9139012:14673623,roughness:.6}));l.name="jaw",l.scale.set(1.3,.28,.7),l.position.set(e*.27,-n*.48,0),a.add(l);const c=new B(new Ne(.36,.035,5,14,Math.PI*.95),new ge({color:792088}));c.position.set(e*.38,-n*.52,0),c.rotation.set(Math.PI/2,0,-.15),a.add(c);const h=[];for(let R=0;R<7;R++){const b=new Qn(.035,.11,4);b.rotateX(Math.PI),b.translate(e*.38+Math.cos(R/6*Math.PI)*.25,-n*.54,-.14+R/6*.28),h.push(b)}const u=new B(Wr(h,!1),un.tooth);h.forEach(R=>R.dispose()),a.add(u);const d=new ei;d.moveTo(-.34,0),d.bezierCurveTo(-.38,.7,-.25,.98,0,1.18),d.bezierCurveTo(.2,.82,.43,.38,.46,0),d.closePath();const f=new B(new Bi(d,12),gn(t?10781511:7706016,.94,t?3810309:466212));f.position.set(-.05,n*.55,0),f.castShadow=!1,a.add(f);const g=new zt;g.name="finL",g.position.set(e*.12,-n*.3,s*.5);const x=new B(us(1.36,.44),gn(7837858,.9));g.add(x),a.add(g);const m=new zt;m.name="finR",m.position.set(e*.12,-n*.3,-s*.5);const p=new B(us(1.36,.44),gn(7837858,.9));p.scale.z=-1,m.add(p),a.add(m);const _=new B(Bo(.36,.25,.1),gn(7837858,.85));_.rotation.z=Math.PI/2,_.position.set(-e*.3,n*.24,0),a.add(_),[[.36,1],[.36,-1]].forEach(([R,b])=>{const E=new B(us(.5,.2),gn(7837858,.8));E.position.set(-e*R,-n*.34,b*s*.45),E.scale.z=b,a.add(E)});const v=new zt;v.name="tail",v.position.x=-e*.48;const y=new B((()=>{const R=new ei;return R.moveTo(0,.05),R.bezierCurveTo(-.25,.5,-.85,1.25,-1.35,1.55),R.quadraticCurveTo(-.96,.5,-.9,0),R.quadraticCurveTo(-.96,-.5,-1.35,-1.55),R.bezierCurveTo(-.85,-1.25,-.25,-.5,0,-.05),R.closePath(),new Bi(R,14)})(),gn(t?11045192:7311772,.95,t?3679239:466212));if(v.add(y),a.add(v),vi(a,e*.34,n*.13,s*.86,t?.13:.085,t),vi(a,e*.34,n*.13,-s*.86,t?.13:.085,t),t){const R=new zt;R.name="crown",R.position.set(e*.26,n*.58,0),R.scale.setScalar(1.65);const b=new B(new Ne(.27,.055,6,18),un.gold);b.rotation.x=Math.PI/2,R.add(b);for(let w=0;w<5;w++){const N=w/5*cn,H=new B(new Qn(.075,.42+w%2*.14,4),un.gold);H.position.set(Math.cos(N)*.25,.24,Math.sin(N)*.25),H.rotation.z=Math.cos(N)*.2,H.rotation.x=Math.sin(N)*.2,R.add(H)}a.add(R);for(let w=0;w<5;w++){const N=new B(new Qn(.1,.3,4),un.gold);N.position.set(e*.34-w*.3,n*.5-w*.03,0),N.rotation.z=Math.PI/2+.4,a.add(N)}const E=pa(a,16762712,e*1.45,.72);E.name="aura",pa(a,16765034,.68,.85).position.set(e*.34,n*.11,s*.86),pa(a,16765034,.68,.85).position.set(e*.34,n*.11,-s*.86)}return{group:r,designLength:e,nodes:["tail","jaw","finL","finR","crown"],kind:t?"boss":"shark"}}function Qx(){const i=new zt,t=new zt;t.name="model",i.add(t);const e=new ue(1.15,28,16,0,cn,0,Math.PI*.53);e.scale(1.08,.56,1);const n=new Ft({map:Yx(),color:12760972,roughness:.58,metalness:.04,emissive:1518357,emissiveIntensity:.4}),s=new B(e,n);s.name="shell",s.position.y=.18,s.castShadow=!0,s.receiveShadow=!0,t.add(s);const r=new B(new Ne(1.22,.09,8,40),un.turtleSkinDark);r.rotation.x=Math.PI/2,r.scale.set(1.02,.86,1),r.position.y=.19,t.add(r);const a=new B(new ue(1.07,20,10,0,cn,Math.PI*.5,Math.PI*.5),new Ft({color:13155725,roughness:.72}));a.scale.set(1.06,.28,1),a.rotation.x=Math.PI,a.position.y=.1,t.add(a);const o=new B(new Le(.24,.34,.85,10),un.turtleSkin);o.rotation.z=-Math.PI/2,o.position.set(1.17,.24,0),o.castShadow=!0,t.add(o);const l=new B(new ue(.34,16,12),un.turtleSkin);l.scale.set(1.35,.85,.9),l.position.set(1.67,.27,0),l.castShadow=!0,t.add(l);const c=new B(new Qn(.17,.28,7),un.turtleSkinDark);c.rotation.z=-Math.PI/2,c.position.set(2.03,.22,0),t.add(c),vi(t,1.74,.38,.23,.07),vi(t,1.74,.38,-.23,.07);const h=us(.95,.3);[{name:"flipperFL",x:.62,z:.82,rot:-.35},{name:"flipperFR",x:.62,z:-.82,rot:.35},{name:"flipperBL",x:-.62,z:.72,rot:-.5},{name:"flipperBR",x:-.62,z:-.72,rot:.5}].forEach(f=>{const g=new zt;g.name=f.name,g.position.set(f.x,.07,f.z),g.rotation.y=f.rot+(f.z>0?Math.PI:0);const x=new B(h,un.turtleSkin);x.scale.set(1,1,1.25),g.add(x),t.add(g)});const d=new B(new Qn(.12,.5,6),un.turtleSkinDark);return d.rotation.z=Math.PI/2,d.position.set(-1.14,.22,0),d.name="tail",t.add(d),{group:i,designLength:2.65,nodes:["flipperFL","flipperFR","flipperBL","flipperBR","tail"],kind:"turtle"}}function t1(){const i=new zt,t=new zt;t.name="model",i.add(t);const e=un.manta,n=new ei;n.moveTo(.6,.05),n.bezierCurveTo(.9,.95,.58,1.82,.1,2.06),n.bezierCurveTo(-.35,1.7,-.7,.8,-.58,.08),n.quadraticCurveTo(0,-.22,.6,.05);const s=new Bi(n,22);s.rotateX(-Math.PI/2);const r=new zt;r.name="wingL";const a=new B(s,e);a.castShadow=!0,r.add(a),t.add(r);const o=new zt;o.name="wingR";const l=new B(s,e);l.scale.z=-1,l.castShadow=!0,o.add(l),t.add(o);const c=new ge({color:13890023,transparent:!0,opacity:.32,depthWrite:!1}),h=[[.28,.62,.1],[.5,1.25,.075],[-.1,1.5,.09],[-.28,.8,.055],[.02,1.05,.045]];[r,o].forEach((m,p)=>{const _=h.map(([y,R,b])=>{const E=new Da(b,10);return E.rotateX(-Math.PI/2),E.translate(y,.035,p===0?R:-R),E}),v=Wr(_,!1);_.forEach(y=>y.dispose()),m.add(new B(v,c))});const u=new B(new ue(.72,20,12),e);u.scale.set(1.5,.28,.5),u.position.x=.1,u.castShadow=!0,t.add(u);for(const m of[-1,1]){const p=new B(new $c(.07,.3,4,6),e);p.rotation.z=Math.PI/2.2,p.position.set(1.03,.02,m*.23),t.add(p)}const d=new B(new ue(.16,10,6),un.mantaBelly);d.scale.set(.9,.2,.65),d.position.set(1.1,-.05,0),t.add(d),vi(t,.85,.1,.3,.06),vi(t,.85,.1,-.3,.06);const f=new zt;f.name="tail",f.position.set(-.9,0,0);const g=new zi([new A(0,0,0),new A(-1.15,.03,.1),new A(-2.4,.08,-.08),new A(-3.25,.02,.16)]),x=new B(new ki(g,24,.035,4,!1),e);return f.add(x),t.add(f),{group:i,designLength:4.05,nodes:["wingL","wingR","tail"],kind:"manta"}}function e1(){const i=new zt,t=new zt;t.name="model",i.add(t);const e=1.95,n=1.12,s=.98,r=new B(Jc(e,n,s,"puffer",.34),Kc("puffer"));r.name="body",r.castShadow=!0,t.add(r);const a=[],o=Zc(98);for(let _=0;_<48;_++){const v=.15+o()*.72,y=o()*cn,R=e*(.5-v),b=Math.pow(Math.sin(Math.PI*v),.34)*(.92+v*.16),E=new A(0,Math.cos(y),Math.sin(y)).normalize(),D=new A(R,E.y*n*b*1.02,E.z*s*b*1.02),M=new Qn(.055,.24,5);M.translate(0,.12,0);const w=new Jn().setFromUnitVectors(new A(0,1,0),E);M.applyQuaternion(w),M.translate(D.x,D.y,D.z),a.push(M)}const l=new zt;l.name="spikes";const c=new Ft({color:14927747,roughness:.5,metalness:.06}),h=Wr(a,!1);a.forEach(_=>_.dispose());const u=new B(h,c);l.add(u),t.add(l);const d=new zt;d.name="tail",d.position.x=-e*.47;const f=new B(Bo(.55,.38),gn(15517292,.9));d.add(f),t.add(d);const g=new zt;g.name="finL",g.position.set(.26,0,s*.78),g.add(new B(us(.42,.2),gn(15517292,.85))),t.add(g);const x=new zt;x.name="finR",x.position.set(.26,0,-s*.78);const m=new B(us(.42,.2),gn(15517292,.85));m.scale.z=-1,x.add(m),t.add(x);const p=new B(new Ne(.1,.04,6,12),un.shadowDark);return p.position.set(e*.49,-.13,0),p.rotation.y=Math.PI/2,t.add(p),vi(t,e*.23,n*.3,s*.82,.135),vi(t,e*.23,n*.3,-s*.82,.135),{group:i,designLength:e,nodes:["tail","finL","finR","spikes"],kind:"puffer"}}const ic=new Map;function n1(i){if(ic.has(i))return ic.get(i);let t;i==="turtle"?t=Qx():i==="manta"?t=t1():i==="puffer"?t=e1():i==="shark"||i==="boss"?t=Kx(i):t=Jx(i);const e={};return t.group.traverse(n=>{n.name&&(e[n.name]=n)}),t.nodeMap=e,ic.set(i,t),t}const i1={clown:1.65,snapper:1.95,tang:1.9,lantern:2.2,turtle:2.85,angel:2.55,puffer:2.15,butterfly:2.4,manta:4.9,shark:4.6,golden:3.8,boss:7.4},s1=new ue(1,10,8),r1=new ge({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),a1=new sl(1,1),o1=new Ft({color:11071487,transparent:!0,opacity:.3,roughness:.22,metalness:.1,depthWrite:!1,side:pe,emissive:3844031,emissiveIntensity:.85}),l1=new sl(1,2);class c1{constructor(t,e={}){this.speciesId=t,this.species=tn[t],this.value=this.species.value,this.curve=e.curve,this.curveLength=e.curveLength||this.curve.getLength(),this.progress=e.progress??0,this.speed=e.speed??this.species.speed[0],this.baseSpeed=this.speed,this.lane=new A(e.laneX||0,0,e.laneZ||0),this.phase=e.phase??Math.random()*cn,this.isBoss=!!this.species.boss,this.bossHP=this.isBoss?this.species.hp:0,this.bossMaxHP=this.bossHP,this.state="alive",this.dead=!1,this.captured=!1,this.frozen=!1,this.freezeT=0,this.hitFlash=0,this.flinch=0,this.captureT=0,this.rewardMultiplier=1,this.animTime=Math.random()*6,this.spawnedAt=performance.now(),this.golden=t==="golden",this.bosses=this.isBoss;const n=n1(t);this.kit=n,this.designLength=n.designLength,this.displayScale=i1[t]*(e.sizeJitter||1)/n.designLength,this.baseScale=this.displayScale,this.root=new zt,this.root.name=`fish-${t}`,this.root.scale.setScalar(this.baseScale),this.tilt=new zt,this.tilt.name="tilt",this.root.add(this.tilt),this.model=n.group.clone(!0),this.tilt.add(this.model),this.nodes={};for(const r of Object.keys(n.nodeMap)){const a=this.model.getObjectByName(r);a&&(this.nodes[r]=a)}const s=this.isBoss?1.6:this.speciesId==="manta"?1.3:.9;this.hitProxy=new B(s1,r1),this.hitProxy.scale.set(s*(this.isBoss?1.2:1),this.isBoss?.9:this.speciesId==="manta"?.55:.72,this.speciesId==="manta"?1.8:.85),this.hitProxy.userData.fish=this,this.root.add(this.hitProxy),this.flashMat=new ge({color:16766071,transparent:!0,opacity:0,blending:ce,depthWrite:!1,side:dn,toneMapped:!1}),this.flashShell=new B(l1,this.flashMat),this.flashShell.scale.set(1,.72,.65),this.root.add(this.flashShell),this.iceShell=new B(a1,o1),this.iceShell.scale.set(1.12,.85,.8),this.iceShell.visible=!1,this.iceShell.renderOrder=4,this.root.add(this.iceShell),this.root.userData.fish=this,e.scaleOverride&&(this.baseScale=e.scaleOverride/n.designLength,this.root.scale.setScalar(this.baseScale)),this.setProgress(this.progress)}get position(){return this.root.position}setProgress(t){this.progress=t;const e=tc(t,0,1),n=this.curve.getPointAt(e),s=this.curve.getTangentAt(e);this.root.position.copy(n),this.root.position.x+=this.lane.x,this.root.position.z+=this.lane.z,this.root.position.y+=Math.sin(this.phase)*.08,this.orient(s),this.lastYaw=this.root.rotation.y}orient(t){const e=new Jn().setFromUnitVectors(Ql,t.clone().normalize());this.root.quaternion.copy(e);const n=new A(0,1,0).applyQuaternion(this.root.quaternion);if(n.y<.2){const s=new Jn().setFromUnitVectors(n,new A(0,1,0).applyQuaternion(new Jn().setFromUnitVectors(Ql,new A(t.x,0,t.z).normalize())));this.root.quaternion.premultiply(s)}}tickAnimation(t,e,n=!1){const s=n?.22:1,r=this.isBoss?.75:this.species.shape==="disc"?1.15:1;this.animTime+=t*s*r*(this.state==="caught"?1.6:1);const a=this.animTime,o=this.nodes,l=this.flinch>0?Math.sin(this.flinch*50)*this.flinch*.12:0;if(o.tail)if(this.kit.kind==="turtle")o.tail.rotation.y=Math.sin(a*2.1)*.18;else{const c=this.isBoss?.22:.38;o.tail.rotation.y=Math.sin(a*(this.isBoss?3.2:6.6))*c}if(o.flipperFL){const c=Math.sin(a*2.3);o.flipperFL.rotation.x=-.18+c*.48,o.flipperFR.rotation.x=-.18+Math.sin(a*2.3+.4)*.48,o.flipperBL.rotation.x=.16+Math.sin(a*2.3+1.4)*.28,o.flipperBR.rotation.x=.16+Math.sin(a*2.3+1.8)*.28}if(o.wingL){const c=Math.sin(a*1.6)*.2;o.wingL.rotation.x=-.03+c,o.wingR.rotation.x=-.03-c}if(o.finL&&(o.finL.rotation.x=-.25+Math.sin(a*3.4+.5)*.18+l,o.finR.rotation.x=-.25-Math.sin(a*3.4+.5)*.18-l),o.lure&&(o.lure.rotation.z=-.12+Math.sin(a*1.4)*.1,o.lure.rotation.x=Math.sin(a*.7)*.06),o.jaw&&this.hitFlash>.45?o.jaw.rotation.z=-.2:o.jaw&&(o.jaw.rotation.z*=.92),o.spikes){const c=this.flinch>0?1.08:1;o.spikes.scale.setScalar(c)}this.flinch>0&&(this.flinch=Math.max(0,this.flinch-t*2.5)),this.tilt.rotation.z=Math.sin(a*(this.isBoss?1.1:2))*(this.isBoss?.012:.03)+l*.6,this.tilt.rotation.y=Math.sin(a*(this.isBoss?.7:1.4)+1.2)*.012,this.tilt.position.y=Math.sin(a*1.8+this.phase)*.035,this.flashMat&&(this.flashMat.opacity=Math.max(0,this.flashMat.opacity-t*2.6))}update(t,e,n=!1){if(this.dead)return;if(this.frozen=n||this.freezeT>0,this.freezeT>0&&(this.freezeT=Math.max(0,this.freezeT-t),this.frozen=!0),this.iceShell.visible=this.frozen&&this.state==="alive",this.state==="caught"){this.captureT+=t;const c=tc(this.captureT/.72,0,1),h=1-Math.pow(1-c,3),u=this.baseScale*(1-h*.94);this.root.scale.setScalar(Math.max(1e-4,u)),this.root.position.y+=t*(.8+h*1.2),this.root.rotation.y+=t*(2+h*5),this.tilt.rotation.z+=t*3,this.flashMat.opacity=Math.max(this.flashMat.opacity,(1-c)*.22),this.tickAnimation(t,e,this.frozen),c>=1&&(this.dead=!0,this.root.visible=!1);return}if(!this.frozen||this.state!=="alive"){const c=this.flinch>0?.45:1;this.progress+=this.speed*c*t/this.curveLength}const s=tc(this.progress,0,1),r=this.curve.getPointAt(s),a=this.curve.getTangentAt(s),o=Math.sin(e*1.35+this.phase)*(this.frozen?.035:.11);this.root.position.set(r.x+this.lane.x,r.y+this.lane.y+o,r.z+this.lane.z);const l=new Jn().setFromUnitVectors(Ql,a.clone().normalize());this.root.quaternion.slerp(l,1-Math.exp(-t*4.5)),this.flinch>.62&&(this.root.position.x+=Math.sin(e*55)*this.flinch*.1,this.root.position.y+=Math.cos(e*46)*this.flinch*.07),this.tickAnimation(t,e,this.frozen),this.hitFlash=Math.max(0,this.hitFlash-t*2.2),this.progress>=1.005&&(this.dead=!0,this.root.visible=!1)}hit(){this.state==="alive"&&(this.flinch=1,this.hitFlash=1,this.flashMat.opacity=.36)}catch(){return this.state!=="alive"?!1:(this.state="caught",this.captured=!0,this.captureT=0,this.iceShell.visible=!1,!0)}freeze(t){this.freezeT=Math.max(this.freezeT,t)}get worldPosition(){return this.root.position}dispose(t){t.remove(this.root),this.flashMat.dispose()}}window.__sceneErrors=[];window.addEventListener("error",i=>{window.__sceneErrors.push(String(i.message||i.error||"unknown error"))});window.addEventListener("unhandledrejection",i=>{window.__sceneErrors.push(String(i.reason||"unhandled rejection"))});const V=(i,t=document)=>t.querySelector(i),Wn=(i,t=document)=>[...t.querySelectorAll(i)],we=(i,t,e)=>Math.max(t,Math.min(e,i)),h1=(i,t,e)=>i+(t-i)*e,_t=(i=0,t=1)=>i+Math.random()*(t-i),ol=(i,t)=>Math.floor(_t(i,t+1)),ko=i=>i[Math.floor(Math.random()*i.length)],sn=i=>Math.max(0,Math.floor(i)).toLocaleString("zh-CN"),Ps=()=>performance.now(),nf=navigator,bo=matchMedia("(prefers-reduced-motion: reduce)").matches,u1=["clown","snapper","tang","lantern","turtle","angel","puffer","butterfly","manta","shark","golden","boss"],f1={freeze:"#i-snow",thunder:"#i-bolt",magnet:"#i-magnet",nuke:"#i-bomb"},id={shallow:.54,palace:1,abyss:2.6},d1={shallow:"水深 860 拓",palace:"水深 3,200 拓",abyss:"水深 7,600 拓"},sd="deep-palace-fisher-v1";let es={};try{es=JSON.parse(localStorage.getItem(sd)||"{}")||{}}catch{es={}}const Oe={best:Number(es.best)||0,room:Ur.some(i=>i.id===es.room)?es.room:"palace",muted:!!es.muted,runs:Number(es.runs)||0,bestCombo:Number(es.bestCombo)||0};function Nr(){try{localStorage.setItem(sd,JSON.stringify(Oe))}catch{}}let p1=0;function Mc(i,t=""){const e=tn[i],n=`fish-art-${++p1}`,s=e.icon.c1,r=e.icon.c2,a=e.icon.stripe,o=`
    <defs>
      <linearGradient id="${n}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${s}"/>
        <stop offset=".56" stop-color="${r}"/>
        <stop offset="1" stop-color="${s}"/>
      </linearGradient>
      <linearGradient id="${n}-tail" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${a}" stop-opacity=".9"/>
        <stop offset="1" stop-color="${r}" stop-opacity=".55"/>
      </linearGradient>
    </defs>`,l=(h=44,u=42)=>`
    <circle cx="${h}" cy="${u}" r="3.2" fill="#071b20"/>
    <circle cx="${h-1}" cy="${u-1.2}" r=".95" fill="rgba(255,255,240,.9)"/>`;let c="";if(i==="shark"||i==="boss"){const h=i==="boss"?`
      <path d="M84 23l5-13 7 9 9-11 5 15-9 4z" fill="${a}" opacity=".92" stroke="rgba(54,36,9,.5)" stroke-width=".8"/>
      <path d="M87 23h25" stroke="rgba(67,42,8,.7)" stroke-width="1.2"/>`:"";c=`
      ${o}
      <path d="M12 50C37 32 82 25 121 32c9 2 19 8 28 15l19-21-6 25 9 19-23-10c-8 8-20 14-35 15-31 1-65-9-101-27Z" fill="url(#${n})" stroke="rgba(4,20,25,.55)" stroke-width="1.1"/>
      <path d="M83 31c8-12 18-18 25-17 5 7 5 15 3 20-9-2-17-2-28-3Z" fill="${r}" opacity=".9"/>
      <path d="M74 50c-4 11-8 21-20 28 2-12 5-20 11-26Z" fill="${r}" opacity=".82"/>
      <path d="M16 50c6-8 13-14 21-19" stroke="rgba(255,255,255,.18)" fill="none" stroke-width="1.4"/>
      ${l(43,43)}
      ${h}
      ${i==="boss"?`<path d="M109 38c11 2 18 6 25 14" stroke="${a}" stroke-width="2" fill="none" opacity=".7"/><circle cx="128" cy="53" r="1.5" fill="${a}"/>`:""}
    `}else if(i==="manta")c=`
      ${o}
      <path d="M89 19c10 6 25 24 57 31-26 8-43 4-57 4-14 0-32 4-58-4 32-7 47-25 58-31Z" fill="url(#${n})" stroke="rgba(4,20,25,.55)" stroke-width="1.1"/>
      <path d="M89 47c2 11 4 19 10 29-6-2-10-8-13-16-3 8-7 14-13 16 6-10 8-18 10-29Z" fill="${r}" opacity=".82"/>
      <path d="M39 49c-8-4-14-8-19-14M59 43c-4-5-7-9-9-14M38 58c-11 2-19 2-26 0M59 53c-7 4-12 9-15 15" stroke="rgba(235,255,246,.19)" fill="none" stroke-width="1"/>
      <circle cx="89" cy="33" r="3" fill="#071b20"/><circle cx="88" cy="32" r=".9" fill="#f5fff8"/>
      <circle cx="74" cy="40" r="1.5" fill="${a}" opacity=".65"/><circle cx="105" cy="41" r="1.2" fill="${a}" opacity=".45"/>
    `;else if(i==="turtle")c=`
      ${o}
      <ellipse cx="91" cy="45" rx="47" ry="27" fill="${r}" opacity=".8"/>
      <ellipse cx="90" cy="42" rx="37" ry="23" fill="url(#${n})" stroke="${a}" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="M90 22v40M68 25c10 12 13 24 13 35M112 25c-10 12-13 24-13 35M57 34c12 6 20 8 33 8M123 34c-12 6-20 8-33 8" fill="none" stroke="${a}" stroke-opacity=".32" stroke-width="1.6"/>
      <path d="M126 35c8-7 16-8 22-4 5 4 6 12 1 17-6 6-16 2-23-4Z" fill="#71a477" stroke="rgba(4,20,25,.35)" stroke-width=".8"/>
      <circle cx="142" cy="37" r="2.1" fill="#071b20"/><path d="M148 45c2 2 2 4 0 5" fill="none" stroke="rgba(20,46,30,.7)" stroke-width="1"/>
      <path d="M49 41c-10-8-21-12-28-9 3 9 12 16 26 18Z" fill="#4c8466"/>
      <path d="M51 51c-12 7-19 15-17 20 8-2 17-8 24-15Z" fill="#4c8466"/>
      <path d="M130 51c8 8 13 16 10 21-7 0-14-7-20-14Z" fill="#4c8466"/>
      <path d="M45 47c-7 2-12 4-16 7" stroke="${a}" stroke-width="1" opacity=".45"/>
    `;else if(i==="puffer")c=`
      ${o}
      <g fill="${r}">
        <path d="M91 14l4 10-8-1zM137 31l-9 5 4-9zM137 61l-10-3 6-7zM72 16l4 10-9-1zM44 28l10 7-10 4zM44 64l10-6-8-5zM68 71l4-10-8 2zM113 72l-3-10 9 2z"/>
      </g>
      <circle cx="91" cy="45" r="33" fill="url(#${n})" stroke="rgba(4,20,25,.55)" stroke-width="1.2"/>
      <circle cx="80" cy="34" r="2.2" fill="${a}" opacity=".35"/><circle cx="104" cy="54" r="3" fill="${a}" opacity=".3"/><circle cx="64" cy="51" r="1.8" fill="${a}" opacity=".35"/><circle cx="104" cy="30" r="1.6" fill="${a}" opacity=".45"/>
      <path d="M112 48c4-5 9-9 15-11-2 7-5 12-10 16Z" fill="${a}" opacity=".85"/>
      <path d="M61 38c3-1 5 0 6 2" fill="none" stroke="#fff6d5" stroke-opacity=".55" stroke-width="1.6"/>
      ${l(76,38)}
      <circle cx="65" cy="45" r="2" fill="none" stroke="rgba(59,43,24,.6)" stroke-width="1"/>
    `;else if(i==="lantern")c=`
      ${o}
      <path d="M17 47C35 23 90 15 120 39c8-4 19-9 29-11-4 5-5 9-3 15 6 2 9 5 11 8-12 0-24 2-35-2-16 19-56 26-86 12-8-4-14-8-19-14Z" fill="rgba(8,25,31,.95)" stroke="rgba(132,255,231,.24)" stroke-width="1.1"/>
      <path d="M79 22c7-11 17-13 24-7-3 7-11 12-20 13Z" fill="${r}"/>
      <path d="M17 47c20-7 42-8 66 0" fill="none" stroke="rgba(157,255,238,.18)"/>
      <g fill="#99ffea">
        <circle cx="49" cy="48" r="2.2"/><circle cx="63" cy="52" r="1.7"/><circle cx="78" cy="54" r="2"/><circle cx="93" cy="52" r="1.5"/><circle cx="105" cy="47" r="1.9"/>
        <circle cx="67" cy="43" r="1.2"/><circle cx="84" cy="44" r="1.1"/><circle cx="100" cy="42" r="1.3"/>
      </g>
      <path d="M82 16c5-9 12-12 18-8" fill="none" stroke="${a}" stroke-width="1.1" opacity=".65"/>
      <circle cx="101" cy="7" r="3.4" fill="#c9fff5" opacity=".9"/>
      <circle cx="101" cy="7" r="6.5" fill="#7dffe9" opacity=".12"/>
      ${l(42,40)}
    `;else{let h="",u=`
      <path d="M124 39c11-8 23-12 33-8-4 7-8 12-8 18 3 3 5 6 6 9-13-1-23-5-32-12Z" fill="url(#${n}-tail)" opacity=".9"/>
      <path d="M122 39c9 1 17 4 24 9M122 47c8 0 15-3 23-8" fill="none" stroke="rgba(3,20,23,.35)" stroke-width=".8"/>`,d="";i==="clown"?h=`
        <g clip-path="url(#${n}-clip)">
          <path d="M50 18c4 18 4 37-2 56h11c-3-20-3-37 2-56Z" fill="#fff4df" stroke="#1c2020" stroke-width="1.1"/>
          <path d="M88 16c4 20 2 40-4 60h13c-4-21-3-40 3-60Z" fill="#fff4df" stroke="#1c2020" stroke-width="1.1"/>
        </g>`:i==="snapper"?h=`<g clip-path="url(#${n}-clip)" opacity=".55"><path d="M36 31c22 6 49 8 79 3M30 48c26 5 55 5 89 0M41 61c23 3 43 2 65-2" fill="none" stroke="#ffd8a0" stroke-width=".7"/></g>`:i==="tang"?h=`
        <g clip-path="url(#${n}-clip)">
          <path d="M30 48c16-14 34-13 45 1 11 14 28 12 41 1v13c-14 12-32 13-47-1-12-12-26-9-39-2Z" fill="#0a285d" opacity=".82"/>
          <path d="M28 32c18 3 36 4 55 1" stroke="${a}" stroke-width="3" opacity=".7"/>
        </g>`:i==="angel"?h=`
        <path d="M81 14c10-12 24-14 31-3-6 8-14 12-24 13Z" fill="${a}" opacity=".65"/>
        <path d="M91 71c10 12 22 13 30 4-5-8-14-12-23-14Z" fill="${a}" opacity=".55"/>
        <g clip-path="url(#${n}-clip)">
          <path d="M54 18c4 15 5 38 1 55h8c-1-19-1-38 3-55Z" fill="${a}" opacity=".62"/>
          <path d="M96 15c3 18 3 42-2 62h10c-2-20-1-43 3-62Z" fill="${a}" opacity=".56"/>
        </g>`:i==="butterfly"?h=`
        <path d="M81 14c9-10 20-12 28-3-7 7-16 12-25 13Z" fill="${a}" opacity=".52"/>
        <path d="M94 70c9 11 18 12 25 4-5-7-12-11-21-13Z" fill="${a}" opacity=".45"/>
        <g clip-path="url(#${n}-clip)">
          <path d="M79 17c-12 14-17 36-6 57 8 1 16-1 22-5-8-20-9-37-7-52Z" fill="${a}" opacity=".62"/>
          <circle cx="112" cy="43" r="9" fill="${a}" opacity=".5"/>
        </g>`:i==="golden"?(h=`
        <g clip-path="url(#${n}-clip)" opacity=".65">
          <path d="M29 36c24 5 50 5 83-3M29 47c27 4 57 4 94-2M34 58c24 3 48 2 72-2" fill="none" stroke="#fff0a0" stroke-width=".8"/>
          <circle cx="61" cy="36" r="1.3" fill="#fff3af"/><circle cx="83" cy="52" r="1.2" fill="#fff3af"/><circle cx="104" cy="37" r="1.4" fill="#fff3af"/>
        </g>`,u=`<path d="M121 39c18-14 40-19 56-14-8 8-13 14-14 20 4 4 8 8 11 13-19-1-38-7-53-19Z" fill="${a}" opacity=".85"/>
        <path d="M126 36c14-2 26-8 36-16M128 44c14 0 27 4 39 10" fill="none" stroke="#a65a12" stroke-opacity=".35" stroke-width="1"/>`,d=`
        <path d="M79 19c3-13 12-19 20-18 7 1 12 6 13 13-8 0-16 2-23 8Z" fill="${a}" opacity=".8"/>
        <path d="M96 30c8-8 14-11 18-9M91 32c-4-9-5-15-3-19" fill="none" stroke="#fff0a0" stroke-width="1.2" opacity=".6"/>
        <circle cx="118" cy="13" r="1.8" fill="#fff5bf" opacity=".85"/>`):(i==="tube"||i==="lanternX")&&(h=""),c=`
      ${o}
      <clipPath id="${n}-clip"><path d="M17 46C34 22 89 14 121 38c8-4 19-9 29-11-4 5-5 10-3 15 6 2 9 5 11 9-13 0-25 2-36-2-15 20-55 28-85 14-8-4-14-9-20-17Z"/></clipPath>
      ${u}
      <path d="M78 20c8-14 21-16 29-5-8 7-17 11-28 12Z" fill="${s}" opacity=".7"/>
      <path d="M77 53c8 9 12 17 12 24-8-3-15-9-21-18Z" fill="${r}" opacity=".55"/>
      <path d="M17 46C34 22 89 14 121 38c8-4 19-9 29-11-4 5-5 10-3 15 6 2 9 5 11 9-13 0-25 2-36-2-15 20-55 28-85 14-8-4-14-9-20-17Z" fill="url(#${n})" stroke="rgba(4,20,25,.5)" stroke-width="1.1"/>
      ${h}
      <path d="M28 40c16-11 45-16 73-11" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="1.4"/>
      ${d}
      ${l(44,41)}
      <path d="M25 50c4 1 7 3 9 6" fill="none" stroke="rgba(3,18,22,.45)" stroke-width="1.2" stroke-linecap="round"/>
    `}return`<svg class="${t}" viewBox="0 0 180 90" role="img" aria-label="${e.name}图样">${c}</svg>`}let qe=Ur.find(i=>i.id===Oe.room)||Ur[1],m1=Object.fromEntries(Ur.map(i=>[i.id,i])),Go=[],Pn=!1,Fr="board",ve=null,Fs=!1,Ho=!1;function g1(){const i=V("#room-select");i.innerHTML="",Ur.forEach((t,e)=>{const n=document.createElement("button");n.type="button",n.className="room-option",n.dataset.room=t.id,n.setAttribute("role","radio"),n.setAttribute("aria-checked","false"),n.innerHTML=`
      <span class="room-number">${t.level}</span>
      <span class="room-name">${t.name}</span>
      <span class="room-sub">${t.sub}</span>
      <span class="room-coin"><svg><use href="#i-coin"/></svg>${sn(t.startCoins)} 准入</span>
    `,n.addEventListener("click",()=>{bt==="menu"&&(Qe("tap"),bc(t.id,!0))}),i.appendChild(n)}),bc(qe.id,!1)}function Sc(i){return Ze[we(i.power-1,0,Ze.length-1)]||Ze[0]}function bc(i,t){const e=m1[i]||Ur[1];qe=e,Oe.room=e.id,Nr(),Wn(".room-option").forEach(a=>{const o=a.dataset.room===e.id;a.classList.toggle("is-selected",o),a.setAttribute("aria-checked",String(o))}),V("#room-meta").textContent=`${d1[e.id]} · ${e.sub.split(" · ")[0]}`,V("#pass-room-name").textContent=e.name,V("#pass-room-desc").textContent=e.desc,V("#pass-coins").textContent=sn(e.startCoins),V("#pass-power").textContent=Sc(e).label,V("#pass-boss").textContent=`约 ${e.bossEvery} 秒`,V("#pass-serial").textContent=`0${e.level}${e.id.length}${e.startCoins.toString().slice(-2)}`,V("#menu-cannon-label").textContent=Sc(e).label;const n=e.id==="shallow"?"clown":e.id==="abyss"?"boss":"golden";V("#pass-crest").innerHTML=`<div class="crest-ornament"></div>${Mc(n,"crest-fish")}<div class="crest-orbit"></div>`;const s=[];e.mix.forEach(a=>{a!=="boss"&&!s.includes(a)&&s.push(a)});const r=s.slice(0,5);V("#pass-roster").innerHTML=r.map(a=>`<span class="pass-fish" title="${tn[a].name}">${Mc(a,"roster-icon")}<small>×${tn[a].value}</small></span>`).join("")+(s.length>5?`<span class="pass-fish more">+${s.length-5}</span>`:""),Sa?.setRoom(e),Rn?.setPowerLevel(e.power),ll(e),Hi(),t&&Xe(`<b>${e.name}</b><small>${e.sub} · 准入 ${sn(e.startCoins)} 金币</small>`,2400)}function v1(){const i=V("#skill-row");i.innerHTML="",ds.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="skill-button",e.dataset.skill=t.id,e.dataset.ready="false",e.style.setProperty("--skill-color",t.color),e.setAttribute("aria-label",`${t.full}，冷却 ${t.cooldown} 秒`),e.innerHTML=`
      <svg><use href="${f1[t.id]}"/></svg>
      <span class="skill-key">${t.key}</span>
      <span class="skill-cd">${t.cooldown}</span>
      <span class="skill-name">${t.name}</span>
    `,e.addEventListener("click",()=>uh(t.id)),e.addEventListener("pointerenter",()=>sf(e,t)),e.addEventListener("pointerleave",Vo),e.addEventListener("focus",()=>sf(e,t)),e.addEventListener("blur",Vo),i.appendChild(e)})}let ns=null;function _1(){return ns||(ns=document.createElement("div"),ns.className="skill-tip",document.body.appendChild(ns),ns)}function sf(i,t){if(!matchMedia("(pointer:fine)").matches)return;const e=_1();e.innerHTML=`<b>${t.full}<em>冷却 ${t.cooldown}s</em></b>${t.desc}<br/><span style="color:rgba(230,207,158,.35)">快捷键 ${t.key}</span>`;const n=i.getBoundingClientRect();e.classList.add("is-visible");const s=220;e.style.left=`${we(n.left+n.width/2-s/2,10,innerWidth-s-10)}px`,e.style.top=`${Math.max(10,n.top-e.offsetHeight-12)}px`}function Vo(){ns&&ns.classList.remove("is-visible")}function x1(){const i=V("#power-track");i.innerHTML="",Ze.forEach((t,e)=>{const n=document.createElement("button");n.type="button",n.className="power-segment",n.dataset.index=String(e),n.style.setProperty("--seg-color",e>4?"#ef9a51":e>2?"#ddb65e":"#7dd5bd"),n.setAttribute("aria-label",`炮台 ${t.label}，每炮 ${t.bet} 金币`),n.title=`${t.name} ${t.label} · 每炮 ${t.bet} 金币`,n.addEventListener("click",()=>pd(e)),i.appendChild(n)})}function y1(){const i=V("#control-grid");i.innerHTML=wx.map(t=>`
    <div class="control-row">
      <div class="control-keys">${t.keys.map(e=>`<kbd>${e}</kbd>`).join("")}</div>
      <span class="control-label">${t.label}</span>
    </div>
  `).join("")}function rd(i){let t="";for(let e=0;e<5;e++)t+=`<svg class="${e<i?"":"dim"}"><use href="#i-star"/></svg>`;return t}function M1(){const i=V("#codex-grid");i.innerHTML=u1.map(t=>{const e=tn[t];return`
      <article class="codex-entry" style="--rarity-color:${e.rarityColor}">
        <div class="entry-head">
          <div class="entry-name">${e.name}<small>${e.latin.toUpperCase()}</small></div>
          <div class="entry-value"><span>×</span>${e.value}</div>
        </div>
        <div class="codex-art">${Mc(t)}</div>
        <div class="entry-bottom">
          <span class="entry-stars">${rd(e.stars)}</span>
          <span class="entry-rarity">${e.rarity}</span>
        </div>
        <p class="entry-desc">${e.desc}</p>
      </article>
    `}).join("")}function S1(){const i=V("#quota-list");i.innerHTML=jc.map(t=>`
    <div class="quota-card" data-mission-card="${t.id}">
      <div class="quota-title"><span>${t.name}</span><em>+${sn(t.reward)}</em></div>
      <div class="quota-desc"><span>${t.desc}</span><b data-progress="${t.id}">0 / ${t.target}</b></div>
      <div class="quota-progress"><i data-progress-bar="${t.id}"></i></div>
      <div class="quota-reward">
        <span>渔汛赏金</span>
        <button class="claim-button" type="button" data-claim="${t.id}" disabled>未完成</button>
      </div>
    </div>
  `).join(""),i.addEventListener("click",t=>{const e=t.target.closest("[data-claim]");e&&b1(e.dataset.claim)})}function Ua(){const i={catch:he.catches,combo:he.maxCombo,boss:he.bossKills};let t=0;jc.forEach(n=>{const s=Math.min(i[n.id]||0,n.target),r=we(s/n.target,0,1)*100,a=V(`[data-progress="${n.id}"]`),o=V(`[data-progress-bar="${n.id}"]`),l=V(`[data-claim="${n.id}"]`),c=V(`[data-mission-card="${n.id}"]`);if(a&&(a.textContent=`${s} / ${n.target}`),o&&(o.style.width=`${r}%`),l){const h=s>=n.target,u=$o.claimed[n.id];l.disabled=!h||u,l.textContent=u?"已领取":h?"领取赏金":"未完成",h&&!u&&t++,c?.classList.toggle("is-done",h)}});const e=V("#quota-badge");e&&(e.textContent=String(t),e.style.display=t?"":"none"),V("#quota-dot")?.classList.toggle("is-on",t>0)}function b1(i){const t=jc.find(n=>n.id===i);!t||$o.claimed[i]||({catch:he.catches,combo:he.maxCombo,boss:he.bossKills}[i]||0)<t.target||($o.claimed[i]=!0,$e+=t.reward,he.bonusEarned+=t.reward,Ot.ui("coin"),ni(!0),Ua(),Hi(),Xe(`<b>渔汛赏金入账</b><small>${t.name} · +${sn(t.reward)} 金币</small>`,3e3),cd(4),Pn&&nh())}function ll(i=qe){const t=i.startCoins/12e3;Go=td.map(e=>({...e,score:Math.round(e.base*t*_t(.82,1.18))}))}const Gi=V("#scene");let xn;try{xn=new Vf({canvas:Gi,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch(i){throw window.__sceneErrors.push(`WebGL unavailable: ${i}`),document.body.insertAdjacentHTML("beforeend",'<div class="noscript">这片龙宫需要 WebGL。请开启硬件加速后重新下潜。</div>'),i}const ps=matchMedia("(pointer: coarse)").matches,w1=innerWidth<=860;let Qc=w1||ps?"low":"high";const gs=new B_,De=new On(42,innerWidth/innerHeight,.1,150),Wo=Math.min(devicePixelRatio||1,Qc==="low"?1:1.25);let Ci=1,Un={frames:0,elapsed:0,stable:0};xn.setPixelRatio(Wo);xn.setSize(innerWidth,innerHeight);xn.outputColorSpace=_e;xn.toneMapping=df;xn.toneMappingExposure=1.18;xn.shadowMap.enabled=!1;xn.shadowMap.type=uf;const Sa=Ux(gs,xn,Qc);Sa.attachCamera(De);const He=new Bx(gs,De),Ot=new Ex;Ot.muted=Oe.muted;const Rn=new qx(gs,De,He,Ot);Rn.group.visible=!1;const E1={position:new A(0,19.2,24.6),look:new A(0,2.45,-2.35),fov:38},T1={position:new A(0,23.6,29),look:new A(0,1.75,-3.2),fov:35},th={position:new A(1.4,10.9,23.5),look:new A(.2,4.2,-4.2),fov:39},wo=th.look.clone();De.position.copy(th.position);De.lookAt(wo);let as="menu",Eo="default",Rs=0,Nn=0,rf=performance.now(),bt="loading",$e=qe.startCoins,vn=we(qe.power-1,0,Ze.length-1),Yt=0,Os=1,wc=-10,vs=!1,is=!1,zs=!1,ti=!1,ba=!1,Je=null,ae=null,Ce={x:innerWidth*.5,y:innerHeight*.54},pi=!1,Pi=new ct,Xo=new bx,qo=new ct;const A1=new ts(new A(0,1,0),-2.4);let Or=new A(0,2.4,-6),Ie=[],We=null,ms=null,Ii=1.4,Vs=0,_s=0,Xr=0,Ec=0,wa=0,Ls=0,Bs=0,zr=0,ui=0,Cr=0,af=0,of=0,Tc=0,sc=0,mi={},$o={claimed:{}},he={catches:0,maxCombo:0,bossKills:0,earned:0,bonusEarned:0,shots:0,crits:0,startedAt:0},An=0,Br=-99,Rr=0,Di=1;const C1=Object.fromEntries(ds.map(i=>[i.id,i])),zn=new A;new A;function gi(){return Ze[vn].bet}function go(){return vn+1}function R1(){return 1+Math.min(Math.max(An-1,0),8)*.1}function Ac(i){return 50+(i-1)*45}function ni(i=!1){const t=V("#coin-count");t.textContent=sn($e),i&&(t.classList.remove("is-pulsing"),t.offsetWidth,t.classList.add("is-pulsing"),clearTimeout(ni.timer),ni.timer=setTimeout(()=>t.classList.remove("is-pulsing"),220)),V("#shot-cost").textContent=sn(gi()),V("#shot-cost").classList.toggle("is-poor",$e<gi())}function cl(){const i=Ze[vn];V("#wager-value").textContent=i.label,V("#shot-cost").textContent=sn(i.bet),V("#wager-value").classList.toggle("is-poor",$e<i.bet),V("#shot-cost").classList.toggle("is-poor",$e<i.bet),Wn(".power-segment").forEach((t,e)=>{t.classList.toggle("is-on",e<=vn),t.classList.toggle("is-current",e===vn)}),Rn.setPowerLevel(vn+1),V("#menu-cannon-label").textContent=i.label}function eh(){V("#player-level").textContent=String(Di).padStart(2,"0");const i=Ac(Di);V("#xp-bar").style.width=`${we(Rr/i*100,0,100)}%`,ni(!1),cl()}function ad(){V("#hud-room-name").textContent=qe.name,V("#hud-wave").textContent=`第 ${Os} 潮`}function ii(){V("#auto-btn").setAttribute("aria-pressed",String(ti)),V("#auto-state").classList.toggle("is-on",ti),V("#auto-state span").textContent=ti?"自动开火中":"手动瞄准",V("#lock-btn").setAttribute("aria-pressed",String(!!ae)),V("#lock-btn span").textContent=ae?"已锁定":"锁鱼"}function Ys(){const i=V("#boss-hud");if(!We||We.state!=="alive"){i.classList.remove("is-active");return}const t=we(We.bossHP/We.bossMaxHP*100,0,100);V("#boss-hp").style.width=`${t}%`,V("#boss-hp-text").textContent=`${Math.max(0,Math.ceil(We.bossHP))}`,V("#boss-reward").textContent=`×${We.value}`,V("#boss-status").textContent=t<30?"濒死":t<70?"负伤":"巡海",i.classList.add("is-active")}function Yo(){const i=V("#combo-meter"),t=An>=2&&bt==="playing";if(i.classList.toggle("is-active",t),!t)return;V("#combo-count").textContent=`×${An}`;const e=Yt-Br,n=we(1-e/Ge.comboWindow,0,1);i.style.setProperty("--combo-progress",n.toFixed(3))}function Ws(){ds.forEach(i=>{const t=V(`[data-skill="${i.id}"]`);if(!t)return;const e=mi[i.id]&&bt==="playing"?Math.max(0,mi[i.id]-Yt):0,n=e<=0;t.dataset.ready=String(n),t.setAttribute("aria-disabled",String(!n));const s=V(".skill-cd",t);s&&(s.textContent=n?"":String(Math.ceil(e)));const r=we(1-e/i.cooldown,0,1);t.style.setProperty("--cd-angle",`${r*360}deg`)})}function jo(){const i=Ce.x,t=Ce.y,e=V("#crosshair");e.style.left=`${i}px`,e.style.top=`${t}px`,e.classList.toggle("is-on-target",!!Je),e.classList.toggle("is-locked",!!ae),e.style.opacity=pi&&bt==="playing"&&!Pn&&!ve?"1":"0";const n=V("#target-card"),s=Je||ae;if(s&&bt==="playing"&&!Pn&&!ve){V("#target-name").textContent=s.species.name,V("#target-latin").textContent=s.species.latin.toUpperCase(),V("#target-value").textContent=`×${s.value}`,V("#target-stars").innerHTML=rd(s.species.stars),n.classList.add("is-active"),n.classList.toggle("is-legendary",s.isBoss||s.value>=150),n.setAttribute("aria-hidden","false");const r=n.offsetWidth||170,a=n.offsetHeight||70,o=i+r+40>innerWidth?i-r-26:i+26,l=we(t-a-18,78,innerHeight-a-20);n.style.left=`${we(o,10,innerWidth-r-10)}px`,n.style.top=`${l}px`}else n.classList.remove("is-active"),n.setAttribute("aria-hidden","true")}function Cc(){const i=V("#lock-reticle");if(ae&&ae.state==="alive")if(zn.copy(ae.root.position),zn.project(De),zn.z<1){const t=(zn.x*.5+.5)*innerWidth,e=(-zn.y*.5+.5)*innerHeight;i.style.left=`${t}px`,i.style.top=`${e}px`,i.classList.add("is-active"),i.setAttribute("aria-hidden","false")}else i.classList.remove("is-active");else i.classList.remove("is-active"),i.setAttribute("aria-hidden","true");ae&&(ae.state!=="alive"||ae.dead)&&(ae=null,ii())}function od(){if(We&&We.state==="alive"){V("#stage-clock").textContent="鱼王巡海 · 收网要快";return}const i=Math.max(0,_s-Yt),t=Math.floor(i/60),e=Math.floor(i%60);V("#stage-clock").textContent=`下一尾鱼王 ${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function Xe(i,t=2600){const e=V("#toast");e.innerHTML=i,e.classList.add("is-showing"),clearTimeout(of),of=setTimeout(()=>e.classList.remove("is-showing"),t)}function kr(i,t,e,n=2700,s=!1){const r=V("#wave-banner");V("#banner-kicker").textContent=i,V("#banner-title").textContent=t,V("#banner-sub").textContent=e,r.classList.toggle("is-boss",s),r.classList.add("is-showing"),clearTimeout(af),af=setTimeout(()=>r.classList.remove("is-showing"),n)}function ks(i="cold"){if(bo)return;const t=V("#screen-flash");t.className="screen-flash",t.offsetWidth,t.classList.add(`flash-${i}`),setTimeout(()=>t.classList.remove(`flash-${i}`),1100)}function Ui(i,t,e,n,s,r=!1){const a=V("#event-feed");for(;a.children.length>=3;)a.firstElementChild.remove();const o=document.createElement("div");o.className=`feed-item${r?" mine":""}`,o.innerHTML=`<span class="feed-avatar">${t}</span><span><b>${i}</b> ${e}</span>${n?`<span>${n}</span>`:""}${s?`<em>+${sn(s)}</em>`:""}`,a.appendChild(o),setTimeout(()=>{o.classList.add("is-leaving"),setTimeout(()=>o.remove(),380)},8500)}function Hi(){const i=V("#leaderboard-list");if(!i)return;const t=[...Go.map(e=>({...e,player:!1})),{name:"阿满（你）",tag:`Lv.${Di} 龙宫渔夫`,avatar:"满",color:"#65e3c8",score:he.earned,player:!0}].sort((e,n)=>n.score-e.score);i.innerHTML=t.map((e,n)=>`
    <li class="leaderboard-row${e.player?" is-player":""}">
      <span class="rank">${String(n+1).padStart(2,"0")}</span>
      <span class="fisher">
        <span class="fisher-avatar" style="--fisher-color:${e.color}">${e.avatar}</span>
        <span class="fisher-name">${e.name}<small>${e.tag}</small></span>
      </span>
      <span class="score">${sn(e.score)}</span>
    </li>
  `).join("")}function nh(){Fr==="board"?Hi():Ua()}function ih(i){Fr=i,Wn("[data-board-tab]").forEach(t=>{const e=t.dataset.boardTab===i;t.classList.toggle("is-active",e),t.setAttribute("aria-selected",String(e))}),V("#board-view").classList.toggle("is-hidden",i!=="board"),V("#quota-view").classList.toggle("is-hidden",i!=="quota"),nh()}function sh(i="board"){bt!=="playing"&&bt!=="paused"||(Pn=!0,vs=!1,Vo(),V("#board-panel").classList.add("is-open"),ih(i),nh(),xi())}function js(){Pn=!1,V("#board-panel").classList.remove("is-open"),xi()}function Rc(i=Fr){Pn&&Fr===i?js():Pn?ih(i):sh(i)}function xi(){const i=bt==="playing"&&!Pn&&!ve;V("#hud").classList.toggle("is-active",i),document.body.classList.toggle("is-playing",i)}function yi(i){bt=i,xi()}function Na(){vs=!1,is=!1,zs=!1,V("#fire-btn")?.classList.remove("is-firing")}function hl(i){const t=document.getElementById(i);t&&(Wn(".overlay").forEach(e=>{e!==t&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"))}),t.classList.add("is-open"),t.setAttribute("aria-hidden","false"),ve=i,Na(),xi())}function Ea(i){const t=document.getElementById(i);t&&(t.classList.remove("is-open"),t.setAttribute("aria-hidden","true")),ve===i&&(ve=null),xi()}function Ta(){const i=ve;if(i){if(Ea(i),Ho){Ho=!1,hl("pause-overlay");return}Fs&&bt==="paused"&&(Fs=!1,yi("playing"),Ot.setPaused(!1)),Fs=!1}}function li(i){bt==="playing"?(Fs=!0,Na(),yi("paused"),Ot.setPaused(!0)):ve==="pause-overlay"&&(Ho=!0),hl(i)}function Zo(){bt==="playing"&&(Na(),yi("paused"),js(),Ot.setPaused(!0),V("#pause-earned").textContent=sn(he.earned),V("#pause-catches").textContent=String(he.catches),V("#pause-combo").textContent=String(he.maxCombo),hl("pause-overlay"))}function To(){bt==="paused"&&(ve==="pause-overlay"&&Ea("pause-overlay"),Fs&&(Fs=!1),yi("playing"),Ot.setPaused(!1),xi(),Xe("<b>潮水继续</b><small>炮口仍在你手中</small>",1700))}function rh(){bt!=="wreck"&&(yi("wreck"),Na(),Ot.setPaused(!0),Ea(ve),V("#wreck-earned").textContent=sn(he.earned),V("#wreck-fish").textContent=String(he.catches),hl("wreck-overlay"),he.earned>Oe.best&&(Oe.best=he.earned,Nr()))}function ah(){Wn(".overlay").forEach(i=>{i.classList.remove("is-open"),i.setAttribute("aria-hidden","true")}),ve=null,Fs=!1,Ho=!1}function Aa(){bt==="loading"||bt==="playing"||(ve&&(ve==="help-overlay"||ve==="codex-overlay"?Ta():ah()),js(),ld(),Ot.setPaused(!1),bt="playing",Un={frames:0,elapsed:0,stable:0},$e=qe.startCoins,An=0,Br=-99,Yt=0,Os=1,vn=we(qe.power-1,0,Ze.length-1),he={catches:0,maxCombo:0,bossKills:0,earned:0,bonusEarned:0,shots:0,crits:0,startedAt:Ps()},$o={claimed:{}},Ls=0,Bs=0,zr=0,ui=0,Di=1,Rr=0,We=null,Cr=0,ms=null,ae=null,ti=!1,document.getElementById("game-root").classList.remove("is-frozen","is-magnet"),V("#boss-hud").classList.remove("is-active"),mi={},ds.forEach((i,t)=>{mi[i.id]=Yt+[3.5,7,11,16][t]}),_s=Math.min(75,qe.bossEvery*.66),Xr=24,Vs=30,Ec=6,wa=8,Ii=.6,ll(qe),hh(),L1(),V("#menu").classList.add("is-hidden"),V("#menu").classList.remove("is-ready"),V("#hud").classList.remove("is-hidden"),Rn.group.visible=!0,yi("playing"),as="game",V("#coin-count").textContent=sn($e),eh(),ad(),Yo(),Ys(),Ws(),ii(),od(),Ua(),Hi(),V("#event-feed").innerHTML="",V("#tutorial-strip").classList.remove("is-hidden"),clearTimeout(Tc),Tc=setTimeout(()=>V("#tutorial-strip").classList.add("is-hidden"),9e3),document.body.classList.remove("is-menu"),kr("TIDE I · 龙宫开潮","下网",`${qe.name} · 第 1 潮`,2600),Ui("潮汐司","潮","敲响开渔铜锣","鱼群正从四面涌来",0),Ot.wave(),Qe("open"),xi())}function Pc(){yi("menu"),ah(),js(),Na(),Vo(),ti=!1,ae=null,We=null,ii(),V("#hud").classList.add("is-hidden"),V("#hud").classList.remove("is-active"),Rn.group.visible=!1,V("#menu").classList.remove("is-hidden"),requestAnimationFrame(()=>V("#menu").classList.add("is-ready")),document.body.classList.remove("is-playing"),document.body.classList.add("is-menu"),as="menu",Ot.setPaused(!1),hh(),ch(),Vs=1/0,_s=1/0,Xr=1/0,Ii=1.3,V("#menu-cannon-label").textContent=Sc(qe).label,Oe.runs+=1,he.earned>Oe.best&&(Oe.best=he.earned),he.maxCombo>Oe.bestCombo&&(Oe.bestCombo=he.maxCombo),Nr(),V("#high-score").textContent=sn(Oe.best),ll(qe),Hi(),ni(!1)}function oh(){ah(),bt==="wreck"&&yi("menu"),Aa()}function ld(){Ot.ready||(Ot.init(),Ot.setMuted(Oe.muted)),Ot.setPaused(!1)}function Qe(i="tap"){Ot.ui(i)}function cd(i=2){Ot.ready&&Ot.catchFish(i,An,!1)}function Ao(){if(!Ot.ready){ld(),Oe.muted=!1,Ot.setMuted(!1),Nr(),Lc(),Xe("<b>海潮声已开启</b><small>炮声、鱼群与铜钱，都在水下了</small>",2200),Ot.ui("open");return}Oe.muted=!Ot.muted,Ot.setMuted(Oe.muted),Nr(),Lc(),Oe.muted||Qe("tap"),Xe(Oe.muted?"<b>已静音</b><small>潮水暂时退到画面之外</small>":"<b>声音已恢复</b><small>听见金币落袋的声音了吗</small>",1800)}function Lc(){const i=Oe.muted;Wn('#menu-sound-btn, [data-action="sound"], #pause-sound-btn').forEach(t=>{const e=V("use",t);e&&e.setAttribute("href",i?"#i-muted":"#i-volume"),t.setAttribute("aria-pressed",String(!i)),t.setAttribute("aria-label",i?"开启声音":"声音开关")})}async function Co(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Xe("<b>无法进入全屏</b><small>浏览器拦住了这次请求</small>",2200)}}function hd(){const i=!!document.fullscreenElement;Wn('#menu-fullscreen-btn, #menu-fullscreen-inline, [data-action="fullscreen"]').forEach(t=>{t.setAttribute("aria-pressed",String(i)),t.id==="menu-fullscreen-inline"?t.textContent=i?"退出全屏":"全屏撒网":t.title=i?"退出全屏 (V)":"全屏 (V)"})}const P1={shallow:{clown:22,snapper:18,tang:13,lantern:12,turtle:10,angel:8,puffer:6,butterfly:5,manta:2.5,golden:.3,shark:.2},palace:{clown:16,snapper:13,tang:9,lantern:13,turtle:11,angel:10,puffer:8,butterfly:8,manta:4.5,shark:2,golden:.6},abyss:{lantern:17,turtle:14,angel:12,puffer:11,butterfly:11,manta:10,shark:7,clown:8,snapper:5,tang:4,golden:3}};function ul(i=qe){const t=P1[i.id];let e=0;for(const s of Object.keys(t))e+=t[s];let n=Math.random()*e;for(const s of Object.keys(t))if(n-=t[s],n<=0)return s;return"clown"}function Xs(i={}){const t=i.side??(Math.random()<.5?1:-1),e=i.y??_t(2.4,6.2),n=i.z??_t(-18,2.2),s=i.zEnd??_t(-18,2.2),r=(n+s)*.5,a=[new A(t*30,e,n),new A(t*15+_t(-4,4),e+_t(-.8,.9),n+_t(-5,5)),new A(-t*2+_t(-4,4),e+_t(-.7,.9),r+_t(-5,5)),new A(-t*18+_t(-3,3),e+_t(-.6,.8),s+_t(-5,5)),new A(-t*30,e+_t(-.4,.5),s)];return a.forEach(o=>{o.y=we(o.y,2.1,7.5),o.z=we(o.z,-20,3)}),new zi(a,!1,"catmullrom",.38)}function Ni(i,t={}){const e=bt==="menu"?15:ps?Ge.maxFishMobile:Ge.maxFishDesktop;if(Ie.length>=e&&i!=="boss"&&i!=="golden"||!tn[i])return null;const n=tn[i],s=t.curve||Xs({side:t.side,z:t.z,y:t.y}),r=s.getLength();let a=t.progress??0,o=t.speed??_t(n.speed[0],n.speed[1]);bt!=="menu"&&(o*=1+Math.min(Os-1,5)*.025);const l=new c1(i,{curve:s,curveLength:r,progress:a,speed:o,laneX:t.laneX??0,laneZ:t.laneZ??0,laneY:t.laneY??0,sizeJitter:t.sizeJitter??_t(.9,1.08),phase:_t(0,Math.PI*2),scaleOverride:t.scaleOverride});return l.spawnedAt=Ps(),l.missStacks=0,l.hitCount=0,gs.add(l.root),Ie.push(l),i==="boss"&&(We=l,_s=1/0,V("#boss-reward").textContent=`×${l.value}`,Ys(),He.shockwave(new A(l.position.x,.25,l.position.z),16762970,1.2),Ot.bossRoar(),kr("LEVIATHAN · 深海鱼王","黄金鲨王","王冠现世 · 收网可得 ×600",3400,!0),ks("gold"),Ui("潮汐司","潮","敲响镇海钟","黄金鲨王现身龙宫",0),wa=Math.min(wa,Yt+4)),i==="golden"&&(ms=l,Xr=Yt+_t(36,56),Xe("<b>金龙鱼现世</b><small>鳞片映亮整片龙宫 · 头奖鱼种出没</small>",2800),Ui("潮汐司","金","发现一道金色鱼影","金龙鱼正掠过金柱",0),cd(68)),l}function lh(i=!1){const t=i?15:ps?Ge.maxFishMobile:Ge.maxFishDesktop;if(Ie.length>=t)return;const e=ul(),n=tn[e];if(n.boss)return;let s=n.school[1]>1?ol(n.school[0],n.school[1]):1;if(s=Math.min(s,t-Ie.length),(e==="golden"||e==="shark"||e==="manta")&&(s=1),i&&(e==="golden"||e==="shark"))return;const r=Math.random()<.5?1:-1,a=Xs({side:r,y:_t(...n.depth)});a.getLength();const o=_t(n.speed[0],n.speed[1]);for(let l=0;l<s;l++){const c=s>1?(l-(s-1)/2)*_t(.7,1.5):_t(-.8,.8);if(Ni(e,{curve:a,side:r,progress:i?_t(.03,.9):_t(0,.018),speed:o*_t(.92,1.08),laneZ:c+_t(-.3,.3),laneY:_t(-.1,.1),sizeJitter:_t(.87,1.1)}),Ie.length>=t)break}}function ch(){hh();for(let i=0;i<14;i++){const t=Xs({y:_t(2.2,6.4)}),e=ul(qe);if((e==="golden"||e==="shark"||e==="manta")&&Math.random()>.32){i--;continue}if(!Ni(e,{curve:t,progress:_t(.04,.82),speed:_t(tn[e].speed[0],tn[e].speed[1])*.72,laneZ:_t(-1,1)}))break}}function L1(){const i=ps?Ge.maxFishMobile:Ge.maxFishDesktop,t=ps?12:19;["turtle","manta","angel","lantern","puffer","butterfly","tang","clown"].forEach((s,r)=>{const a=tn[s],o=_t(...a.depth);Ni(s,{curve:Xs({y:o}),progress:_t(.06,.72),speed:_t(a.speed[0],a.speed[1]),laneZ:_t(-1.1,1.1),sizeJitter:_t(.92,1.06),side:r%2?-1:1})});let n=0;for(;Ie.length<t&&n++<40;){const s=ul(),r=tn[s];if(s==="golden"||s==="boss")continue;const a=Xs({y:_t(...r.depth)});if(r.school[1]>1){const o=Math.min(ol(r.school[0],r.school[1]),i-Ie.length);for(let l=0;l<o;l++)Ni(s,{curve:a,progress:_t(.02,.7),speed:_t(r.speed[0],r.speed[1]),laneZ:(l-(o-1)/2)*1.15,laneY:_t(-.15,.15),sizeJitter:_t(.9,1.08)})}else Ni(s,{curve:a,progress:_t(.02,.72),speed:_t(r.speed[0],r.speed[1]),laneZ:_t(-1,1)})}}function ud(){if(bt!=="playing"||We)return;const i=Math.random()<.5?-1:1,t=new zi([new A(i*32,4.2,-1.5),new A(i*16,4.6,-5.5),new A(i*2,4.2,-7),new A(-i*15,4.8,-4),new A(-i*33,4.1,-1)],!1,"catmullrom",.32);Ni("boss",{curve:t,progress:0,speed:1.15,laneZ:0,sizeJitter:1}),Cr=0,Vs=Math.min(Vs,Yt+18)}function fd(){if(bt!=="playing"||ms)return;const i=Xs({y:_t(3.4,5.5),z:_t(-8,1),zEnd:_t(-8,0)});Ni("golden",{curve:i,progress:0,speed:_t(2.2,2.8),laneZ:0,sizeJitter:1})}function hh(){for(const i of Ie)i.root.parent&&i.root.parent.remove(i.root),i.flashMat?.dispose();Ie=[],We=null,ms=null,ae=null,Je=null,Ys()}function dd(){for(let i=Ie.length-1;i>=0;i--){const t=Ie[i];t.dead&&(t.isBoss&&We===t&&D1(),t.speciesId==="golden"&&ms===t&&(ms=null),ae===t&&(ae=null,ii()),Je===t&&(Je=null),t.dispose(gs),Ie.splice(i,1))}}function D1(){We&&(We=null,V("#boss-hud").classList.remove("is-active"),_s=Yt+qe.bossEvery,kr("THE KING RETREATS","鲨王遁入深渊","下一尾鱼王 · 稍后巡海",2500,!0),Ui("潮汐司","潮","叹了口气","黄金鲨王潜入深渊",0))}function I1(i){Rr+=i;let t=!1;for(;Rr>=Ac(Di);)Rr-=Ac(Di),Di++,t=!0;t&&(Ot.levelUp(),Xe(`<b>渔夫等级提升 · Lv.${String(Di).padStart(2,"0")}</b><small>网更稳了，眼也更毒了</small>`,2600),ks("gold")),eh()}function Dc(i,t,e="shot"){!i||i.state!=="alive"||(i.bossHP=Math.max(0,i.bossHP-t),i.hit(),He.spark(i.position,16762717,2.2),Ot.hit(),Ys(),i.bossHP<=0?Ca(i,{bet:gi(),crit:!1}):i.bossHP<i.bossMaxHP*.3&&(V("#boss-status").textContent="濒死"))}function U1(i,t={}){if(!i||i.state!=="alive"||!i.catch())return 0;const e=t.bet??gi(),n=i.isBoss,s=!!t.crit,r=Yt;r-Br<=Ge.comboWindow?An=Math.min(An+1,30):An=1,Br=r,he.maxCombo=Math.max(he.maxCombo,An);let a=i.value*e*R1();s&&(a*=2,he.crits++),n&&(a=i.value*e),a=Math.round(a),$e+=a,he.earned+=a,he.catches++,n&&he.bossKills++;const o=Math.max(2,Math.round(i.value*.8));if(I1(o),ni(!0),Yo(),xi(),Ua(),Pn&&Hi(),i.speciesId==="golden")ms=null,Xr=Yt+_t(38,58),Ot.jackpot(),ks("gold"),kr("GOLDEN CATCH","金龙落网",`身价 ×${i.value} · 满舱生辉`,3e3,!0),Ui("你","满","捕获了传说中的","金龙鱼",a,!0);else if(n){const c=We;We=null,_s=Yt+qe.bossEvery,Cr=Yt+2.5,Ot.jackpot(),ks("gold"),kr("THE KING IS CAUGHT","鲨王落网",`黄金鲨王 · 赏金 ×${i.value}`,3600,!0),Ui("你","满","收网捕获了","黄金鲨王",a,!0),He.coinBurst(i.position,32,!0),He.shockwave(new A(i.position.x,.25,i.position.z),16765830,1.8),he.earned+=Math.round(a*.1),$e+=Math.round(a*.1),ni(!0),setTimeout(()=>{c&&Ys()},2600)}else{const c=i.value>=38;t.sound!==!1&&(c?Ot.jackpot():Ot.catchFish(i.value,An,s)),(c||An>=4)&&Ui("你","满","捕获了",i.species.name,a,!0)}n&&Ot.jackpot();const l=tn[i.speciesId].rarityColor;return He.net(i.position,n||i.value>=38,l),He.coinBurst(i.position,n?30:i.value>=38?18:7,n||i.value>=38),N1(i,a,s,n),ae===i&&(ae=null,ii()),Je===i&&(Je=null),Oe.best=Math.max(Oe.best,he.earned),he.earned>Oe.best&&(Oe.best=he.earned,Nr()),a}function N1(i,t,e,n){zn.copy(i.position),zn.project(De);const s=(zn.x*.5+.5)*innerWidth,r=(-zn.y*.5+.5)*innerHeight,a=document.createElement("div");a.className=`float-reward${n||t>=4e3?" is-big":""}${e?" is-crit":""}`,a.innerHTML=`<span>+${sn(t)}</span><small>金币 · ${i.species.name}</small>`,a.style.left=`${we(s,60,innerWidth-60)}px`,a.style.top=`${we(r-20,90,innerHeight-80)}px`,V("#float-layer").appendChild(a),setTimeout(()=>a.remove(),1350)}function Ca(i,t={}){return U1(i,t)}function F1(i,t,e){if(!i||i.state!=="alive"){He.splash(Or),Ot.miss();return}if(i.isBoss){const l=Math.random()<(Yt<Bs?.28:.05),c=1+Math.floor(e/3)+(l?1:0);Dc(i,c),l&&He.spark(i.position,16773296,2.8);return}i.hitCount=(i.hitCount||0)+1;const n=Yt<Ls?1+Ge.captureFreezeBonus:1,s=1+Math.min(i.missStacks||0,10)*.18,r=.92+e*.018,a=we(i.species.chance*n*s*r,.006,.82),o=Math.random()<(Yt<Bs?.28:.05);Math.random()<a?Ca(i,{bet:t,crit:o,sound:!0}):(i.missStacks=(i.missStacks||0)+1,i.hit(),He.spark(i.position,16764803,1.15),Ot.hit())}function O1(i){if(bt!=="playing")return;const t=i.fish,e=Ze[we(i.powerLevel-1,0,Ze.length-1)].bet;if(!t){He.splash(i.position),Ot.miss();return}F1(t,e,i.powerLevel)}function uh(i){if(bt!=="playing")return;const t=C1[i];if(!t)return;const e=(mi[i]||0)-Yt;if(e>0){Ot.ui("error"),Xe(`<b>${t.full}还在蓄势</b><small>还需 ${Math.ceil(e)} 秒</small>`,1500);return}const n=Ie.filter(s=>s.state==="alive");if(!n.length&&i!=="magnet"){Ot.ui("error"),Xe("<b>潮水里还没有鱼</b><small>等下一群影子游进来</small>",1600);return}if(mi[i]=Yt+t.cooldown,Ws(),i==="freeze")Ls=Yt+Ge.freezeDuration,n.forEach(s=>s.freeze(Ge.freezeDuration)),ks("cold"),Ot.skillFreeze(),document.getElementById("game-root").classList.add("is-frozen"),setTimeout(()=>document.getElementById("game-root").classList.remove("is-frozen"),Ge.freezeDuration*1e3),Xe("<b>冰封海域</b><small>六秒之内，整片龙宫都慢了下来</small>",2200);else if(i==="thunder"){const s=n.slice().sort((a,o)=>(o.isBoss?9999:o.value)-(a.isBoss?9999:a.value)).slice(0,9);He.lightning(s),ks("bolt"),Ot.skillThunder();let r=0;s.forEach((a,o)=>{if(a.isBoss){Dc(a,6);return}Math.random()<.55?(Ca(a,{bet:gi(),sound:o===0}),r++):(a.hit(),a.missStacks=(a.missStacks||0)+1)}),Xe(`<b>九霄天雷</b><small>${r?`云雷收走 ${r} 尾鱼`:"鱼群四散，雷声扑了个空"}</small>`,2300)}else if(i==="magnet")Bs=Yt+Ge.magnetDuration,Ot.skillMagnet(),document.getElementById("game-root").classList.add("is-magnet"),setTimeout(()=>document.getElementById("game-root").classList.remove("is-magnet"),Ge.magnetDuration*1e3),Xe("<b>金龙磁引</b><small>八秒内炮弹追鱼，金钩暴击率提升至 28%</small>",2400),He.shockwave(new A(0,.25,4),16763492,1.2);else if(i==="nuke"){ks("nuke"),Ot.skillNuke(),Rs=Math.max(Rs,.65);const s=new A(0,2.4,-4);He.explosion(s);for(let a=0;a<5;a++)He.shockwave(new A(_t(-11,11),.22,_t(-13,2)),16759143,_t(.7,1.2));let r=0;n.forEach((a,o)=>{if(a.isBoss){Dc(a,12);return}const l=a.value<=20?.8:a.value<=68?.45:.22;Math.random()<l?(Ca(a,{bet:gi(),sound:!1}),r++):a.hit()}),r&&Ot.jackpot(),Xe(`<b>深海核爆</b><small>${r} 尾鱼被冲击波卷进网里</small>`,2600)}Ws()}function Ra(i,t="key"){if(bt!=="playing")return;const e=we(vn+i,0,Ze.length-1);if(e===vn){Ot.ui("error");return}vn=e,cl(),Qe("tap");const n=Ze[vn];Xe(`<b>炮台 · ${n.name} ${n.label}</b><small>每炮 ${sn(n.bet)} 金币 · ${n.level} 档火力</small>`,1700)}function pd(i){if(bt!=="playing")return;const t=we(i,0,Ze.length-1);t!==vn&&(vn=t,cl(),Qe("tap"))}function fh(){if(!De||Ie.length===0)return null;qo.set(Ce.x/innerWidth*2-1,-(Ce.y/innerHeight)*2+1),Xo.setFromCamera(qo,De);const i=[];for(const e of Ie)e.state!=="alive"||e.dead||(e.root.updateWorldMatrix(!0,!1),i.push(e.hitProxy));if(!i.length)return null;const t=Xo.intersectObjects(i,!1);return t.length&&t[0].object.userData.fish||null}function Ic(){qo.set(Ce.x/innerWidth*2-1,-(Ce.y/innerHeight)*2+1),Xo.setFromCamera(qo,De);const i=new A;return Xo.ray.intersectPlane(A1,i)?(i.x=we(i.x,-25,25),i.z=we(i.z,-23,7),i.y=2.45,i):Or.clone()}function z1(){if(ae&&ae.state==="alive")return ae;if(Je&&Je.state==="alive")return Je;let i=null,t=1/0;for(const e of Ie){if(e.state!=="alive"||e.dead||(zn.copy(e.root.position).project(De),zn.z>1))continue;const n=(zn.x*.5+.5)*innerWidth,s=(-zn.y*.5+.5)*innerHeight,r=Math.hypot(n-Ce.x,s-Ce.y),a=e.isBoss?-180:e.value*1.1,o=r-a;o<t&&(t=o,i=e)}return i}function qr(){return bt==="playing"&&!Pn&&!ve}function Pa(i=!1){if(!qr()||Yt-wc<md())return;let t=gi();if($e<t){let r=-1;for(let a=Ze.length-1;a>=0;a--)if(Ze[a].bet<=$e){r=a;break}if(r>=0&&r!==vn)vn=r,cl(),Xe(`<b>银钱不够，炮台降了一档</b><small>现在每炮 ${sn(gi())} 金币</small>`,1800),t=gi();else if($e<Ze[0].bet){Jo();return}else return}let e=ae&&ae.state==="alive"?ae:null;if(!e){const r=fh();r&&r.state==="alive"&&(Je=r,e=r)}!e&&Je&&Je.state==="alive"&&(e=Je),ti&&!e&&(e=z1()),e?Rn.aimAt(e):(Or.copy(Ic()),Rn.aimAt(Or)),wc=Yt,$e-=t,he.shots++,ni(!0),Rn.fire(go(),O1),Ot.cannon(go(),go()>=5),nf&&nf.vibrate?.(go()>=5?14:6);const n=V("#crosshair");n.classList.remove("is-firing"),n.offsetWidth,n.classList.add("is-firing");const s=V("#fire-btn");s.classList.add("is-firing"),setTimeout(()=>s.classList.remove("is-firing"),140),$e<Ze[0].bet&&Jo()}function md(){const i=.17+vn/6*.14;return Math.max(Ge.minFireInterval,i)}function Jo(){if(!(bt!=="playing"||ui)){if(zr>=5){ui=Yt+1.2,setTimeout(()=>{bt==="playing"&&$e<Ze[0].bet&&(ui=0,rh())},1200);return}ui=Yt+1.1,Xe("<b>炮台哑了火</b><small>码头账房正在送一袋救急金过来…</small>",1600)}}function B1(){ui=0,!($e>=Ze[0].bet)&&(zr++,$e+=Ge.rescueAmount,ni(!0),Ot.rescue(),Xe(`<b>码头账房送来救急金</b><small>+${sn(Ge.rescueAmount)} 金币 · 今日第 ${zr} 次赊账</small>`,3200),Ui("码头账房","账","赊给你一袋碎银","先下网，再算账",Ge.rescueAmount,!0))}function gd(){bt==="playing"&&(ti=!ti,ii(),Qe("tap"),Xe(ti?"<b>自动开火已开启</b><small>炮口会自己寻找最近的鱼</small>":"<b>自动开火已关闭</b><small>回到手动瞄准</small>",1800))}function dh(){if(!qr())return;if(ae){ae=null,ii(),Ot.ui("tap");return}const i=fh()||Je;i?(ae=i,ii(),Ot.lock(),Xe(`<b>已锁定 · ${i.species.name}</b><small>炮弹将追踪目标 · 再按右键解除</small>`,1800)):(Ot.ui("error"),Xe("<b>准星下没有鱼</b><small>把网口对准游动的影子</small>",1300))}const Ds=new Set;let vo=0,lf=0;function fl(){return!!(Pn||ve||bt!=="playing")}function k1(i){const t=Gi.getBoundingClientRect(),e=we(i.clientX-t.left,12,t.width-12),n=we(i.clientY-t.top,60,t.height-12);return{x:e,y:n}}function Uc(i){const t=k1(i);Ce.x=t.x,Ce.y=ph(t.y),Pi.set(Ce.x/innerWidth*2-1,-(Ce.y/innerHeight)*2+1),ba=!1,pi=!0}function ph(i){const t=V(".bottom-dock")?.getBoundingClientRect(),e=t?t.top:innerHeight-150;return we(i,64,Math.max(100,e-26))}Gi.addEventListener("pointerenter",i=>{bt==="playing"&&i.pointerType==="mouse"&&(pi=!0)});Gi.addEventListener("pointerleave",()=>{vs=!1,ba||(pi=!1),bt==="playing"&&(Je=null,jo())});Gi.addEventListener("pointermove",i=>{bt==="playing"&&Uc(i)});Gi.addEventListener("pointerdown",i=>{if(!(bt!=="playing"||fl())){if(i.button===2){i.preventDefault(),Uc(i),dh();return}i.button===0&&(i.preventDefault(),Uc(i),vs=!0,pi=!0,Pa())}});Gi.addEventListener("pointerup",i=>{i.button===0&&(vs=!1)});Gi.addEventListener("pointercancel",()=>{vs=!1,is=!1});Gi.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("keydown",i=>{if(i.metaKey||i.ctrlKey||i.altKey)return;const t=i.code;if(!(i.target&&/INPUT|TEXTAREA|SELECT/.test(i.target.tagName))){if(t==="Escape"){if(i.preventDefault(),ve==="help-overlay"||ve==="codex-overlay")Ta();else if(ve==="pause-overlay")To();else{if(ve==="wreck-overlay")return;Pn?js():bt==="playing"&&Zo()}return}if(t==="Enter"){if(ve==="help-overlay"||ve==="codex-overlay")i.preventDefault(),Ta();else if(ve==="pause-overlay")i.preventDefault(),To();else if(ve==="wreck-overlay")i.preventDefault(),oh();else if(bt==="menu"){const e=document.activeElement;e&&e!==document.body&&e.closest("button, a, input, select")||(i.preventDefault(),Aa())}return}if(t==="KeyM"){i.preventDefault(),Ao();return}if(t==="KeyV"){i.preventDefault(),Co();return}if(t==="KeyH"){i.preventDefault(),(bt==="menu"||bt==="playing"||bt==="paused")&&li("help-overlay");return}if(t==="KeyC"){bt==="playing"&&(i.preventDefault(),Eo=Eo==="default"?"wide":"default",Xe(Eo==="wide"?"<b>俯瞰渔场</b><small>整片龙宫尽收眼底</small>":"<b>标准镜头</b><small>回到熟悉的炮位视角</small>",1800),Qe("tap"));return}if(t==="Tab"){!ve&&(bt==="playing"||bt==="paused")&&(i.preventDefault(),Rc("board"));return}if(t==="KeyP"){i.preventDefault(),bt==="playing"?Zo():bt==="paused"&&ve==="pause-overlay"&&To();return}if(!(bt!=="playing"||fl())){if(t==="Space"){i.preventDefault(),i.repeat||(zs=!0,pi=!0,Pa());return}if(t==="ArrowUp"||t==="KeyW"){i.preventDefault(),Ps()-vo>130&&(vo=Ps(),Ra(1));return}if(t==="ArrowDown"||t==="KeyS"){i.preventDefault(),Ps()-vo>130&&(vo=Ps(),Ra(-1));return}if(t==="ArrowLeft"||t==="KeyA"||t==="ArrowRight"||t==="KeyD"){i.preventDefault(),Ds.add(t),ba=!0,pi=!0;return}if(t==="KeyF"){i.preventDefault(),gd();return}if(/^Digit[1-4]$/.test(t)){i.preventDefault();const e=Number(t.slice(-1))-1,n=ds[e];n&&uh(n.id)}}}});window.addEventListener("keyup",i=>{i.code==="Space"&&(zs=!1),Ds.delete(i.code)});window.addEventListener("wheel",i=>{if(bt!=="playing"||fl()||i.target.closest(".overlay, .board-panel"))return;i.preventDefault();const t=Ps();t-lf<80||(lf=t,Ra(i.deltaY<0?1:-1))},{passive:!1});function G1(){V("#menu-sound-btn").addEventListener("click",Ao),V('[data-action="sound"]').addEventListener("click",Ao),V("#pause-sound-btn").addEventListener("click",Ao),V("#menu-fullscreen-btn").addEventListener("click",Co),V("#menu-fullscreen-inline").addEventListener("click",Co),V('[data-action="fullscreen"]').addEventListener("click",Co),V("#start-btn").addEventListener("click",Aa),V("#menu-help-btn").addEventListener("click",()=>{Qe("open"),li("help-overlay")}),V("#menu-codex-btn").addEventListener("click",()=>{Qe("open"),li("codex-overlay")}),V("#pass-codex-btn").addEventListener("click",()=>{Qe("open"),li("codex-overlay")}),Wn('[data-action="board"]').forEach(i=>i.addEventListener("click",()=>{bt!=="menu"&&(Qe("open"),Rc("board"))})),V('[data-action="quota"]').addEventListener("click",()=>{bt!=="menu"&&(Qe("open"),Rc("quota"))}),V('[data-action="codex"]').addEventListener("click",()=>{bt!=="menu"&&(Qe("open"),li("codex-overlay"))}),V('[data-action="help"]').addEventListener("click",()=>{if(bt==="menu"){li("help-overlay");return}Qe("open"),li("help-overlay")}),Wn('[data-action="pause"]').forEach(i=>i.addEventListener("click",Zo)),V("#board-tab").addEventListener("click",()=>{Qe("open"),sh("board")}),V("#board-close").addEventListener("click",()=>{Qe("close"),js()}),Wn("[data-board-tab]").forEach(i=>i.addEventListener("click",()=>{Qe("tap"),ih(i.dataset.boardTab)})),V("#power-down").addEventListener("click",()=>Ra(-1)),V("#power-up").addEventListener("click",()=>Ra(1)),V("#fire-btn").addEventListener("pointerdown",i=>{bt!=="playing"||fl()||(i.preventDefault(),is=!0,Pa())}),V("#fire-btn").addEventListener("pointerup",()=>{is=!1}),V("#fire-btn").addEventListener("pointercancel",()=>{is=!1}),V("#fire-btn").addEventListener("pointerleave",()=>{is=!1}),V("#fire-btn").addEventListener("click",i=>{i.detail===0&&Pa()}),V("#auto-btn").addEventListener("click",gd),V("#lock-btn").addEventListener("click",dh),V("#tutorial-close").addEventListener("click",()=>{V("#tutorial-strip").classList.add("is-hidden"),clearTimeout(Tc),Qe("close")}),V("#resume-btn").addEventListener("click",To),V("#pause-help-btn").addEventListener("click",()=>li("help-overlay")),V("#leave-btn").addEventListener("click",()=>{Qe("close"),Pc()}),V("#wreck-restart-btn").addEventListener("click",oh),V("#wreck-menu-btn").addEventListener("click",()=>{Qe("close"),Pc()}),Wn("[data-close-overlay]").forEach(i=>{i.addEventListener("click",t=>{const n=t.target.closest(".overlay")?.id;n==="help-overlay"||n==="codex-overlay"?Ta():n&&Ea(n)})}),Wn(".overlay-backdrop[data-close-overlay]").forEach(i=>{i.addEventListener("click",()=>{ve==="help-overlay"||ve==="codex-overlay"?Ta():ve&&Ea(ve)})}),document.addEventListener("fullscreenchange",hd),document.addEventListener("visibilitychange",()=>{document.hidden&&bt==="playing"&&Zo()}),window.addEventListener("blur",()=>{vs=!1,is=!1,zs=!1,Ds.clear()}),window.addEventListener("resize",cf),window.addEventListener("orientationchange",()=>setTimeout(cf,300)),document.addEventListener("contextmenu",i=>{qr()&&!i.target.closest("input, textarea")&&i.target.closest("#hud, #scene")&&i.preventDefault()})}function cf(){const i=innerWidth,t=innerHeight;De.aspect=i/t,De.updateProjectionMatrix(),xn.setPixelRatio(Wo*Ci),xn.setSize(i,t),Ce.x=we(Ce.x,12,i-12),Ce.y=ph(Ce.y),i>860&&!ps&&(Qc="high"),xi()}const Qi=new A,la=new A,_o=new ct;function H1(i){const t=as==="menu"?th:Eo==="wide"?T1:E1;Qi.copy(t.position),la.copy(t.look);const e=Nn;as==="menu"&&!bo&&(Qi.x+=Math.sin(e*.085)*1.4,Qi.y+=Math.cos(e*.11)*.35,la.x+=Math.sin(e*.07)*.9,la.y+=Math.sin(e*.09)*.2),as==="menu"?_o.lerp(new ct(Pi.x*.5,bo?0:Pi.y*.25),.025):(Qi.x+=Pi.x*.65,Qi.y+=Pi.y*.32,la.x+=Pi.x*.35,_o.lerp(new ct(Pi.x*.7,Pi.y*.2),.04)),Qi.x+=_o.x,Qi.y+=_o.y;const n=1-Math.exp(-i*(as==="menu"?1.2:2.6));De.position.lerp(Qi,n),wo.lerp(la,n),Rs>.001&&!bo&&(De.position.x+=_t(-1,1)*Rs,De.position.y+=_t(-1,1)*Rs*.5,wo.x+=_t(-1,1)*Rs*.4,Rs*=Math.exp(-i*6)),De.fov=h1(De.fov,t.fov,n),De.updateProjectionMatrix(),De.lookAt(wo),De.updateMatrixWorld()}function rc(i){if(!qr()){pi=!1,Je=null,jo(),Cc();return}(Ds.has("ArrowLeft")||Ds.has("KeyA"))&&(Ce.x=we(Ce.x-560*i,12,innerWidth-12),ba=!0,pi=!0),(Ds.has("ArrowRight")||Ds.has("KeyD"))&&(Ce.x=we(Ce.x+560*i,12,innerWidth-12),ba=!0,pi=!0),Ce.y=ph(Ce.y),Pi.set(Ce.x/innerWidth*2-1,-(Ce.y/innerHeight)*2+1),Je=fh(),ae&&(ae.state!=="alive"||ae.dead)&&(ae=null,ii());const t=ae&&ae.state==="alive"?ae:Je||Ic();Or.copy(Ic()),t&&t.position?Rn.aimAt(t):Rn.aimAt(Or),jo(),Cc()}function V1(i){Yt+=i,Ls&&Yt>Ls&&(Ls=0),Bs&&Yt>Bs&&(Bs=0),$e<Ze[0].bet&&!ui&&Jo(),ui&&Yt>=ui&&(zr>=5?(ui=0,$e<Ze[0].bet&&rh()):B1());const t=Yt<Ls;for(const e of Ie)e.update(i,Nn,t),e.speciesId==="golden"&&e.state==="alive"&&Math.random()<i*15&&He.spark(new A(e.position.x+_t(-.7,.7),e.position.y+_t(-.3,.5),e.position.z+_t(-.6,.6)),16766833,_t(.7,1.5)),e.isBoss&&We===e&&e.state==="alive"&&Math.random()<i*3&&He.spark(new A(e.position.x+_t(-1.2,1.2),e.position.y-.6,e.position.z+_t(-1,1)),16760153,_t(.5,1.4));if(dd(),He.updateFishShadows(Ie),(vs||zs||is||ti)&&Yt-wc>=md()&&Pa(),zs&&!qr()&&(zs=!1),Ii-=i,Ii<=0){const e=ps?Ge.maxFishMobile:Ge.maxFishDesktop;Ie.length<e-2&&lh(!1),Ii=_t(1.1,2.3)}Yt>=Vs&&!We&&W1(),Yt>=_s&&!We&&ud(),Yt>=Xr&&!ms&&fd(),Yt>=Ec&&(X1(),Ec=Yt+_t(4.5,9)),Yt>=wa&&(q1(),wa=Yt+_t(8,17)),Cr&&Yt>Cr&&(Cr=0,V("#boss-hud").classList.remove("is-active")),Br>0&&Yt-Br>Ge.comboWindow&&An!==0&&(An=0,Yo()),Yo(),od(),Ys(),sc+=i,sc>.1&&(sc=0,Ws()),Pn&&Fr==="board"&&Math.floor(Yt*2)!==Math.floor((Yt-i)*2)&&Hi()}function W1(){Os++,Vs=Yt+_t(30,38),ad();const i=ps?Ge.maxFishMobile:Ge.maxFishDesktop,t="第 "+Os+" 潮",e=["鱼群回旋","金色潮汐","珊瑚起浪","深水涌潮","群鳞掠影"];kr(`TIDE ${String(Os).padStart(2,"0")} · 龙宫汛期`,ko(e),`${qe.name} · ${t}`,2800),Ot.wave();let n=0;for(let s=0;s<4&&!(Ie.length>=i);s++){const r=Xs({y:_t(2.4,5.8)}),a=ul();if(a==="boss"||a==="golden"||tn[a].school[1]<=1)continue;const o=Math.random()<.5?1:-1,l=ol(3,6);for(let c=0;c<l;c++)Ni(a,{curve:r,progress:.01+c*.008,speed:_t(tn[a].speed[0],tn[a].speed[1])*1.04,laneZ:(c-(l-1)/2)*1.05,side:o}),n++}n===0&&lh(!1)}function X1(){if(!Go.length)return;const i=ko(Go),t=id[qe.id]||1;i.score+=Math.round(_t(90,760)*t*(1+Os*.06)),i.score>he.earned+12e3*t&&(i.score-=Math.round(_t(60,160)*t)),Pn&&Fr==="board"&&Hi()}function q1(){if(!qr()&&bt!=="paused")return;const i=ko(td),t=qe.mix.filter(s=>s!=="boss"),e=tn[ko(t)],n=Math.round(_t(120,2600)*(id[qe.id]||1));Ui(i.name,i.avatar,"捕获了",e.name,n),Ot.ready&&Math.random()<.35&&Ot.catchFish(e.value,1,!1)}function $1(i){if(!(bt!=="menu"&&bt!=="loading")&&bt!=="loading"){for(const t of Ie)t.update(i,Nn,!1);dd(),He.updateFishShadows(Ie),Ii-=i,Ii<=0&&Ie.length<14&&(lh(!0),Ii=_t(1.4,2.8)),Rn.aimAt(new A(Math.sin(Nn*.19)*2.2,3.1,-4.5))}}function Y1(){xn.render(gs,De)}function vd(i){requestAnimationFrame(vd);const t=(i-rf)/1e3;rf=i;const e=we(t||.016,.001,.05);if(Nn+=e,bt==="playing"&&!document.hidden&&(Un.frames++,Un.elapsed+=t,Un.elapsed>2)){const n=Un.frames/Un.elapsed;n<48&&Ci>.72?(Ci=Math.max(.72,Ci-(n<30?.14:.08)),xn.setPixelRatio(Wo*Ci),Un.stable=0):n>58.5&&Ci<.999?(Un.stable++,Un.stable>=2&&(Ci=Math.min(1,Ci+.05),xn.setPixelRatio(Wo*Ci),Un.stable=0)):Un.stable=0,Un.frames=0,Un.elapsed=0}bt==="playing"?(V1(e),rc(e),Rn.update(e,Nn),He.update(e,Nn)):bt==="menu"?($1(e),rc(e),Rn.update(e,Nn),He.update(e,Nn)):bt==="loading"?(rc(e),He.update(e*.4,Nn)):bt==="wreck"&&He.update(e*.3,Nn),bt==="playing"||bt==="menu"?Sa.update(e,Nn):Sa.update(e*.35,Nn),H1(e),bt==="playing"&&(Cc(),ae&&Je&&ae===Je&&jo()),Y1()}function j1(){g1(),v1(),x1(),y1(),M1(),S1(),G1(),Lc(),hd(),eh(),ii(),Ua(),ll(qe),Hi(),V("#high-score").textContent=sn(Oe.best),V("#boss-reward").textContent=`×${tn.boss.value}`,Ys(),ch(),as="menu",document.body.classList.add("is-menu"),yi("loading"),De.updateMatrixWorld(),xn.compile(gs,De),requestAnimationFrame(vd);let i=0;const t=["校准潮汐与炮座","打捞珊瑚与断柱","往龙宫点一盏鲸油灯","把鱼群赶进网里","烫一壶船长的茶"],e=()=>{i=Math.min(100,i+ol(8,19)),V("#loading-bar").style.width=`${i}%`,V("#loading-percent").textContent=String(i).padStart(2,"0"),V("#loading-status").textContent=t[Math.min(t.length-1,Math.floor(i/21))],i<100?setTimeout(e,_t(90,170)):setTimeout(Z1,380)};setTimeout(e,250),ds.forEach(n=>{mi[n.id]=0}),Ws()}function Z1(){V("#loading").classList.add("is-done"),V("#menu").classList.remove("is-hidden"),yi("menu"),as="menu",ch(),xi(),requestAnimationFrame(()=>{V("#menu").classList.add("is-ready"),setTimeout(()=>{bt!=="loading"&&(V("#loading").style.display="none")},1100)}),Vs=1/0,_s=1/0,Xr=1/0,Ii=1.7}window.__FISHING__={get phase(){return bt},get coins(){return $e},get fishCount(){return Ie.filter(i=>i.state==="alive").length},get boss(){return We},get stats(){return{...he,combo:An,level:Di,xp:Rr}},get skills(){return ds.map(i=>({id:i.id,remaining:Math.max(0,(mi[i.id]||0)-Yt)}))},startGame:Aa,returnToMenu:Pc,restartGame:oh,selectRoom:bc,setPowerIndex:pd,spawnBoss:ud,spawnGolden:fd,openBoard:(i="board")=>{sh(i)},closeBoard:js,openOverlay:i=>li(i),activateSkill:uh,grantCoins:i=>{$e+=i,ni(!0)},get rescueUses(){return zr},triggerWreck:rh,triggerRescue:Jo,setCoins:i=>{$e=Math.max(0,Number(i)||0),ni(!0)},catchAll:()=>{const i=Ie.filter(t=>t.state==="alive");return i.forEach(t=>Ca(t,{bet:gi(),crit:!1,sound:!1})),i.length},addFish:(i,t={})=>Ni(i,t),renderer:xn,scene:gs,camera:De,environment:Sa,cannon:Rn,audio:Ot,get aimScreen(){return{...Ce}},setAim:(i,t)=>{Ce.x=i,Ce.y=t},setAutoFire:i=>{ti=!!i,ii()},readySkills:()=>{ds.forEach(i=>{mi[i.id]=Yt}),Ws()},clearCooldown:i=>{i&&(mi[i]=Yt),Ws()},toggleLock:dh};j1();const _d=document.createElement("style");_d.textContent=`
  #scene { cursor: default; }
  body.is-playing #scene { cursor: none; }
  .crest-fish { width: 100%; height: auto; position: relative; z-index: 2; filter: drop-shadow(0 16px 22px rgba(0,0,0,.35)) drop-shadow(0 0 25px rgba(231,188,106,.16)); }
  .crest-ornament { position: absolute; inset: 12% 6%; border: 1px solid rgba(231,188,106,.14); border-radius: 50%; }
  .crest-ornament::before, .crest-ornament::after { content:''; position:absolute; inset: 10%; border:1px solid rgba(231,188,106,.08); border-radius:50%; }
  .crest-ornament::after { inset: 20%; border-color: rgba(99,231,204,.08); }
  .crest-orbit { position: absolute; left: 8%; right: 8%; top: 50%; height: 1px; background: linear-gradient(90deg, transparent, rgba(231,188,106,.22), transparent); }
  .roster-icon { width: 35px; height: 24px; }
  .is-poor { color: #ff8c70 !important; }
  .wave-banner.is-boss strong { color: #ffd787; text-shadow: 0 0 30px rgba(255,178,64,.35), 0 4px 25px rgba(0,0,0,.7); }
  .wave-banner.is-boss small { color: rgba(255,213,134,.65); }
  #game-root.is-frozen::after { content:''; position:fixed; inset:0; z-index:8; pointer-events:none; opacity:0; background: radial-gradient(ellipse at 50% 50%, transparent 38%, rgba(164,246,255,.10) 70%, rgba(175,251,255,.24) 100%); animation: frost-bloom .7s ease forwards; }
  #game-root.is-frozen::before { content:''; position:fixed; inset:0; z-index:8; pointer-events:none; background: repeating-linear-gradient(128deg, transparent 0 80px, rgba(174,255,250,.03) 82px 84px), linear-gradient(180deg, rgba(169,251,255,.06), transparent 40%); mix-blend-mode: screen; }
  @keyframes frost-bloom { from { opacity:0; } to { opacity:1; } }
  #game-root.is-magnet::after { content:''; position:fixed; inset:0; z-index:7; pointer-events:none; background: radial-gradient(ellipse at 50% 82%, rgba(255,197,95,.20), transparent 38%), radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(255,190,84,.055) 100%); mix-blend-mode: screen; }
  .crosshair.is-firing { animation: crosshair-kick .16s ease; }
  .overlay .primary-button, .overlay .secondary-button { pointer-events: auto; }
  #board-panel.is-open ~ .board-tab { opacity: 0; pointer-events: none; }
`;document.head.appendChild(_d);
