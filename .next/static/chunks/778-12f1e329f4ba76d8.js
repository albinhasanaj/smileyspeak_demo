(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{7056:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=i(9920),r=i(1452),o=i(7437),l=r._(i(2265)),a=n._(i(8321)),s=i(7103),d=i(3106),u=i(3938);i(2301);let c=i(8157);function f(e){return"/"===e[0]?e.slice(1):e}let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},p=new Set,m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let h=new Map([["default",function(e){let{config:t,src:i,width:n,quality:r}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:(0,c.normalizePathTrailingSlash)(t.path)+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+(r||75)}],["imgix",function(e){let{config:t,src:i,width:n,quality:r}=e,o=new URL(""+t.path+f(i)),l=o.searchParams;return l.set("auto",l.getAll("auto").join(",")||"format"),l.set("fit",l.get("fit")||"max"),l.set("w",l.get("w")||n.toString()),r&&l.set("q",r.toString()),o.href}],["cloudinary",function(e){let{config:t,src:i,width:n,quality:r}=e,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return""+t.path+o+f(i)}],["akamai",function(e){let{config:t,src:i,width:n}=e;return""+t.path+f(i)+"?imwidth="+n}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'+t+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}]]);function b(e){return void 0!==e.default}function y(e){let{config:t,src:i,unoptimized:n,layout:r,width:o,quality:l,sizes:a,loader:s}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:d,kind:u}=function(e,t,i,n){let{deviceSizes:r,allSizes:o}=e;if(n&&("fill"===i||"responsive"===i)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,r,a),c=d.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:d.map((e,n)=>s({config:t,src:i,quality:l,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:s({config:t,src:i,quality:l,width:d[c]})}}function w(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function v(e){var t;let i=(null==(t=e.config)?void 0:t.loader)||"default",n=h.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '+s.VALID_LOADERS.join(", ")+". Received: "+i)}function x(e,t,i,n,r,o){e&&e.src!==m&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentNode&&(p.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){let{naturalWidth:t,naturalHeight:i}=e;r.current({naturalWidth:t,naturalHeight:i})}}))}let A=e=>{let{imgAttributes:t,heightInt:i,widthInt:n,qualityInt:r,layout:a,className:s,imgStyle:d,blurStyle:u,isLazy:c,placeholder:f,loading:g,srcString:p,config:m,unoptimized:h,loader:b,onLoadingCompleteRef:w,setBlurComplete:v,setIntersection:A,onLoad:j,onError:k,isVisible:_,noscriptSizes:S,...I}=e;return g=c?"lazy":g,(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{...I,...t,decoding:"async","data-nimg":a,className:s,style:{...d,...u},ref:(0,l.useCallback)(e=>{A(e),(null==e?void 0:e.complete)&&x(e,p,a,f,w,v)},[A,p,a,f,w,v]),onLoad:e=>{x(e.currentTarget,p,a,f,w,v),j&&j(e)},onError:e=>{"blur"===f&&v(!0),k&&k(e)}}),(c||"blur"===f)&&(0,o.jsx)("noscript",{children:(0,o.jsx)("img",{...I,loading:g,decoding:"async","data-nimg":a,style:d,className:s,...y({config:m,src:p,unoptimized:h,layout:a,width:n,quality:r,sizes:S,loader:b})})})]})};function j(e){var t;let i,{src:n,sizes:r,unoptimized:c=!1,priority:f=!1,loading:h,lazyRoot:x=null,lazyBoundary:j,className:k,quality:_,width:S,height:I,style:z,objectFit:O,objectPosition:E,onLoadingComplete:M,placeholder:C="empty",blurDataURL:P,...R}=e,N=(0,l.useContext)(u.ImageConfigContext),q=(0,l.useMemo)(()=>{let e=g||N||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[N]),T=r?"responsive":"intrinsic";"layout"in R&&(R.layout&&(T=R.layout),delete R.layout);let D=v;if("loader"in R){if(R.loader){let e=R.loader;D=t=>{let{config:i,...n}=t;return e(n)}}delete R.loader}let W="";if("object"==typeof(t=n)&&(b(t)||void 0!==t.src)){let e=b(n)?n.default:n;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(P=P||e.blurDataURL,W=e.src,(!T||"fill"!==T)&&(I=I||e.height,S=S||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e))}let L=!f&&("lazy"===h||void 0===h);((n="string"==typeof n?n:W).startsWith("data:")||n.startsWith("blob:"))&&(c=!0,L=!1),"undefined"!=typeof window&&p.has(n)&&(L=!1),q.unoptimized&&(c=!0);let[B,G]=(0,l.useState)(!1),[U,H,V]=(0,d.useIntersection)({rootRef:x,rootMargin:j||"200px",disabled:!L}),F=!L||H,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X=!1,K=w(S),Y=w(I),Z=w(_),$=Object.assign({},z,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:E}),ee="blur"!==C||B?{}:{backgroundSize:O||"cover",backgroundPosition:E||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'+P+'")'};if("fill"===T)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if(void 0!==K&&void 0!==Y){let e=Y/K,t=isNaN(e)?"100%":""+100*e+"%";"responsive"===T?(J.display="block",J.position="relative",X=!0,Q.paddingTop=t):"intrinsic"===T?(J.display="inline-block",J.position="relative",J.maxWidth="100%",X=!0,Q.maxWidth="100%",i="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"+K+"%27%20height=%27"+Y+"%27/%3e"):"fixed"===T&&(J.display="inline-block",J.position="relative",J.width=K,J.height=Y)}let et={src:m,srcSet:void 0,sizes:void 0};F&&(et=y({config:q,src:n,unoptimized:c,layout:T,width:K,quality:Z,sizes:r,loader:D}));let ei=n,en={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:R.crossOrigin,referrerPolicy:R.referrerPolicy},er="undefined"==typeof window?l.default.useEffect:l.default.useLayoutEffect,eo=(0,l.useRef)(M),el=(0,l.useRef)(n);(0,l.useEffect)(()=>{eo.current=M},[M]),er(()=>{el.current!==n&&(V(),el.current=n)},[V,n]);let ea={isLazy:L,imgAttributes:et,heightInt:Y,widthInt:K,qualityInt:Z,layout:T,className:k,imgStyle:$,blurStyle:ee,loading:h,config:q,unoptimized:c,placeholder:C,loader:D,srcString:ei,onLoadingCompleteRef:eo,setBlurComplete:G,setIntersection:U,isVisible:F,noscriptSizes:r,...R};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{style:J,children:[X?(0,o.jsx)("span",{style:Q,children:i?(0,o.jsx)("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:i}):null}):null,(0,o.jsx)(A,{...ea})]}),f?(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",as:"image",href:et.srcSet?void 0:et.src,...en},"__nimg-"+et.src+et.srcSet+et.sizes)}):null]})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return i}});let i="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3106:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=i(2265),r=i(9189),o="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:i,disabled:s}=e,d=s||!o,[u,c]=(0,n.useState)(!1),f=(0,n.useRef)(null),g=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(d||u)return;let e=f.current;if(e&&e.tagName)return function(e,t,i){let{id:n,observer:r,elements:o}=function(e){let t;let i={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===i.root&&e.margin===i.margin);if(n&&(t=l.get(n)))return t;let r=new Map;return t={id:i,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:r},a.push(i),l.set(i,t),t}(i);return o.set(e,t),r.observe(e),function(){if(o.delete(e),r.unobserve(e),0===o.size){r.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:i})}else if(!u){let e=(0,r.requestIdleCallback)(()=>c(!0));return()=>(0,r.cancelIdleCallback)(e)}},[d,i,t,u,f.current]),[g,u,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5778:function(e,t,i){e.exports=i(7056)}}]);