(()=>{var e={};e.id=980,e.ids=[980],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3803:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>m}),s(9568),s(5780),s(5866),s(181);var a=s(3191),r=s(8716),n=s(7922),o=s.n(n),l=s(5231),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);s.d(t,i);let m=["",{children:["(comment)",{children:["createcomment",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9568)),"C:\\Users\\albinhasanaj.blom\\Desktop\\smileyspeak_demo\\app\\(comment)\\createcomment\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,5780)),"C:\\Users\\albinhasanaj.blom\\Desktop\\smileyspeak_demo\\app\\(comment)\\createcomment\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,181)),"C:\\Users\\albinhasanaj.blom\\Desktop\\smileyspeak_demo\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\albinhasanaj.blom\\Desktop\\smileyspeak_demo\\app\\(comment)\\createcomment\\page.tsx"],d="/(comment)/createcomment/page",x={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(comment)/createcomment/page",pathname:"/createcomment",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:m}})},9783:(e,t,s)=>{Promise.resolve().then(s.bind(s,8029))},8996:(e,t,s)=>{Promise.resolve().then(s.bind(s,5643)),Promise.resolve().then(s.bind(s,732)),Promise.resolve().then(s.bind(s,381))},4866:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},5303:()=>{},8029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(326),r=s(6226),n=s(7577),o=s(7862),l=s(381),i=s(732),m=s(5047);let c=()=>{let{isAuthenticated:e,setIsAuthenticated:t}=(0,i.a)(),s=(0,m.useRouter)();(0,n.useEffect)(()=>{e||s.push("/login")},[e,s]);let[c,d]=(0,n.useState)({commentext:"",tags:""}),x=e=>{d({...c,[e.target.name]:e.target.value}),console.log(c)},p=async e=>{e.preventDefault(),l.ZP.error("This feature is not available in demo mode")};return(0,a.jsxs)("form",{onSubmit:p,className:"w-[300px] sm:w-[350px] h-auto md:w-[450px] py-8 md:py-16 lg:w-[600px] rounded-[50px] bg-[#C4C4C4] border-black border-[1px] flex flex-col items-center gap-12 justify-center",children:[a.jsx("div",{className:"size-[64px] lg:size-[128px] relative",children:a.jsx(r.default,{src:"/images/smileylogo.png",alt:"SmileySpeak Logo",layout:"fill",objectFit:"cover",sizes:"100%"})}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 md:gap-8 items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("label",{htmlFor:"comment",children:"Comment"}),a.jsx("textarea",{id:"comment",name:"comment",className:"md:w-[300px] lg:w-[400px] h-[100px] md:h-[150px] rounded-[5px] box-shadow focus:outline-none p-4",placeholder:"Remember when I said I'd never try yoga?...",maxLength:250,onChange:x})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("label",{htmlFor:"tags",children:"Tags (max 3)"}),a.jsx("input",{type:"text",id:"tags",name:"tags",className:"md:w-[300px] lg:w-[400px] h-[35px] md:h-[50px] rounded-[5px] box-shadow focus:outline-none p-4",placeholder:"Funny, YogaLaughs, haha",onChange:x})]}),a.jsx(o.Z,{text:"Create Comment"})]})]})}},7862:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(326),r=s(5047),n=s(732),o=s(381);let l=({text:e,redirect:t})=>{let s=(0,r.useRouter)(),{setIsAuthenticated:l}=(0,n.a)(),i=async()=>{if("Log Out"==e&&(l(!1),o.ZP.success("Logged out successfully")),t)return s.push("home"===e.toLowerCase()?"/":`/${e.toLowerCase().replace(" ","")}`)};return a.jsx("button",{className:"px-8 py-4 text-[16px] md:text-[20px] bg-white rounded-[5px] box-shadow hover:bg-[#F0F0F0] text-black",onClick:i,children:e})}},5643:(e,t,s)=>{"use strict";s.d(t,{default:()=>h});var a=s(326),r=s(7577),n=s(6226),o=s(7862),l=s(5047),i=s(732),m=s(381);let c=({text:e})=>{let t=(0,l.useRouter)(),{setIsAuthenticated:s}=(0,i.a)(),r=async()=>{if("Log Out"==e)return m.ZP.success("Logged out"),s(!1),t.push("/");t.push("home"===e.toLowerCase()?"/":`/${e.toLowerCase().replace(" ","")}`)};return a.jsx("li",{onClick:r,className:"cursor-pointer",children:e})};var d=s(6462),x=s(7688);let p={open:{x:0,opacity:1,transition:{type:"spring",stiffness:120,damping:20,mass:.75}},closed:{x:"100%",opacity:0,transition:{type:"spring",stiffness:120,damping:20,mass:.75}}},u=(e,t)=>t?e?.includes("/createcomment")?["Home","Settings"]:e?.includes("/settings")?["Home","Log Out"]:["Create Comment","Settings"]:e?.includes("/login")?["Home","Sign Up"]:e?.includes("/signup")?["Home","Log In"]:["Sign Up","Log In"],h=()=>{let[e,t]=(0,r.useState)(!1),[s,m]=(0,r.useState)(!0),h=(0,l.useRouter)(),g=(0,l.usePathname)(),{isAuthenticated:b}=(0,i.a)(),f=u(g,b);return(0,a.jsxs)("nav",{className:"flex flex-col items-center mx-12 md:mx-0",children:[(0,a.jsxs)("div",{className:"hidden md:flex w-full items-center justify-around",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 cursor-pointer",onClick:()=>h.push("/"),children:[a.jsx(n.default,{src:"/images/smileylogo.png",alt:"SmileySpeak Logo",width:64,height:64,onLoadingComplete:()=>m(!1)}),a.jsx("h2",{className:"md:text-[32px] lg:text-[48px] text-black",children:"SMILEY SPEAK"})]}),a.jsx("div",{className:"flex gap-4",children:f.map((e,t)=>a.jsx(o.Z,{text:s?"Loading...":e,redirect:!0},t))})]}),(0,a.jsxs)("div",{className:"md:hidden w-full flex flex-col items-end relative",children:[a.jsx(n.default,{src:e?"icons/cross.svg":"/icons/hamburger.svg",alt:"Hamburger Menu",width:64,height:64,onClick:()=>t(e=>!e),className:"cursor-pointer"}),a.jsx(d.M,{children:e&&a.jsx(x.E.div,{initial:"closed",animate:"open",exit:"closed",variants:p,className:"absolute top-full right-[-1.25rem] py-8 px-6 bg-[#C4C4C4] rounded-[15px] z-[99]",children:a.jsx("ul",{className:"flex flex-col gap-2",children:f.map((e,t)=>a.jsx(c,{text:e},t))})})})]})]})}},732:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>o,a:()=>l});var a=s(326),r=s(7577);let n=(0,r.createContext)(void 0),o=({children:e})=>{let[t,s]=(0,r.useState)(!1);return a.jsx(n.Provider,{value:{isAuthenticated:t,setIsAuthenticated:s},children:e})},l=()=>{let e=(0,r.useContext)(n);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},5780:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(9510);s(1159);let r=({children:e})=>a.jsx("main",{className:"w-full h-[calc(100vh-136px)] flex justify-center items-center",children:e})},9568:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var a=s(8570);let r=(0,a.createProxy)(String.raw`C:\Users\albinhasanaj.blom\Desktop\smileyspeak_demo\app\(comment)\createcomment\page.tsx`),{__esModule:n,$$typeof:o}=r;r.default;let l=(0,a.createProxy)(String.raw`C:\Users\albinhasanaj.blom\Desktop\smileyspeak_demo\app\(comment)\createcomment\page.tsx#default`)},181:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var a=s(9510),r=s(2621),n=s.n(r);s(7272);var o=s(8570);let l=(0,o.createProxy)(String.raw`C:\Users\albinhasanaj.blom\Desktop\smileyspeak_demo\components\Navbar.tsx`),{__esModule:i,$$typeof:m}=l;l.default;let c=(0,o.createProxy)(String.raw`C:\Users\albinhasanaj.blom\Desktop\smileyspeak_demo\components\Navbar.tsx#default`);var d=s(9125);let x=(0,o.createProxy)(String.raw`C:\Users\albinhasanaj.blom\Desktop\smileyspeak_demo\context\AuthContext.tsx`),{__esModule:p,$$typeof:u}=x;x.default;let h=(0,o.createProxy)(String.raw`C:\Users\albinhasanaj.blom\Desktop\smileyspeak_demo\context\AuthContext.tsx#AuthProvider`);(0,o.createProxy)(String.raw`C:\Users\albinhasanaj.blom\Desktop\smileyspeak_demo\context\AuthContext.tsx#useAuth`);let g=({children:e})=>a.jsx("html",{lang:"en",children:a.jsx(h,{children:(0,a.jsxs)("body",{className:`${n().className} bg-[#DDD]`,children:[a.jsx("header",{className:"w-full py-8",children:a.jsx(c,{})}),e,a.jsx(d.x7,{})]})})})},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[957],()=>s(3803));module.exports=a})();