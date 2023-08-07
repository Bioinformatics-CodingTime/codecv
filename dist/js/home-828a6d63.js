import{t as A}from"./config-dc250785.js";import{T as E}from"./typenet-5334c2a0.js";import{b as g,J as b,r as z,I,D as y,o as e,c as s,O as d,a as o,F as p,a6 as m,R as $,Q as k,U as h,V as v,W as w,u as l,L as f,T as F,ab as N,au as G,av as P}from"./@vue-7f8fdc6b.js";import{y as S,b as T,_ as x,v as V}from"./index-20918f34.js";import{m as X}from"./element-plus-c592b1e3.js";import{h as q}from"./@vueuse-b412bbba.js";import"./aos-80360ef4.js";import"./pinia-211e5b89.js";import"./picture-verification-code-77c40e50.js";import"./axios-93ecc7d0.js";import"./vue-router-7a0d620c.js";import"./dayjs-d3824421.js";import"./nprogress-6c9d9548.js";import"./lodash-es-c7fcb07d.js";import"./async-validator-604317c1.js";import"./@element-plus-4ef95e2d.js";import"./@popperjs-535f1f87.js";import"./@ctrl-aa1b1e70.js";import"./escape-html-7294f491.js";import"./normalize-wheel-es-5e9aec41.js";function M(){g(()=>{const n=document.querySelector(".typenet-text");(n==null?void 0:n.querySelector(".type-container"))==null&&new E(".typenet-text",{speed:10,style:"font-weight: bold; line-height: 28px"}).type(" \u4F7F\u7528",{style:"font-size: 40px;line-height: 60px"}).type(" CodeCV ",{style:"color: #ff7449; font-size: 40px;line-height: 60px"}).type("\u5FEB\u901F\u751F\u6210\u4F60\u7684\u91D1\u724C\u7B80\u5386",{style:"font-size: 40px;line-height: 60px"}).line().line().type("CodeCV \u652F\u6301\u4F60\u4F7F\u7528 Markdown \u8BED\u6CD5\u6765\u7F16\u5199\u4F60\u7684\u7B80\u5386\uFF0C\u53EF\u6269\u5C55\u6027\u6781\u9AD8\u3002\u4E14\u652F\u6301\u53CC\u7F16\u8F91\u6A21\u5F0F\uFF0C").type("Markdown\u6A21\u5F0F ",{style:"color: #ff7449"}).type("\u4EE5\u53CA").type(" \u5185\u5BB9\u6A21\u5F0F ",{style:"color: #ff7449"}).type("\u65E0\u7F1D\u5207\u6362\uFF0C\u591A\u79CD\u6A21\u677F\u9002\u914D\uFF0C\u7F16\u5199\u4E00\u5957\u7B80\u5386\u5185\u5BB9\u53EF\u9002\u914D\u591A\u4E2A\u7B80\u5386\u6A21\u677F\uFF0C\u4F60\u60F3\u8981\u7684\u8FD9\u91CC\u90FD\u6709\uFF5E").start()})}function O(){let a;const u=b(A.slice(2,7)),i=z(0),t=[{transform:`translateX(${-30}px) scale(${.7})`,zIndex:0},{transform:`translateX(${110+-30}px) scale(${.8})`,zIndex:1},{transform:`translateX(${110*2+-30}px) scale(${1})`,zIndex:2},{transform:`translateX(${110*3+-30}px) scale(${.8})`,zIndex:1},{transform:`translateX(${110*4+-30}px) scale(${.7})`,zIndex:0}];return g(()=>{a=setInterval(()=>{i.value=(i.value+1)%t.length,u.unshift(u.pop())},3e3)}),I(()=>clearInterval(a)),{styleConfig:t,presentationData:u,presentationIndex:i}}const H=[{name:"\u7B80\u5386\u5236\u4F5C",path:"/template",tooltip:!1},{name:"\u8BED\u6CD5\u52A9\u624B",path:"/syntax/helper",tooltip:!1},{name:"\u66F4\u65B0\u8BB0\u5F55",path:"/update/line",tooltip:!1}],L=[{name:"GitHub",path:"https://github.com/acmenlei/markdown-resume-to-pdf",icon:"iconfont icon-github"},{name:"Gitee",path:"https://gitee.com/codeleilei/markdown2pdf",icon:"iconfont icon-gitee",color:"#d90013"}],U={id:"header",class:"noto-serif-sc"},J={class:"nav","data-aos":"zoom-out-right"},Q=["onClick"],R={class:"operator","data-aos":"zoom-out-left"},W=y({__name:"header",setup(n){function c(a){window.location.href=a}return(a,u)=>{const i=N("router-link");return e(),s("div",U,[d(S),o("ul",J,[(e(!0),s(p,null,m(l(H),(t,_)=>(e(),s("li",{key:_},[t.tooltip?w("",!0):(e(),$(i,{key:0,to:t.path||""},{default:k(()=>[h(v(t.name),1)]),_:2},1032,["to"]))]))),128)),(e(!0),s(p,null,m(l(L),(t,_)=>(e(),s("li",{onClick:C=>c(t.path),key:_},[o("i",{class:f(t.icon),style:F({color:t.color})},null,6),h(" "+v(t.name),1)],8,Q))),128))]),o("div",R,[d(T)])])}}});const j=x(W,[["__scopeId","data-v-38b481a4"]]),K={class:"presentation"},Y=["src","alt","onClick"],Z={class:"presentation-indicator","data-aos":"zoom-in"},tt=y({__name:"presentation",setup(n){const{isDark:c}=V(),{presentationData:a,presentationIndex:u,styleConfig:i}=O();return(t,_)=>{const C=X;return e(),s(p,null,[o("div",K,[(e(!0),s(p,null,m(l(a),(r,D)=>(e(),$(C,{key:r.id,placement:"top",content:r.name},{default:k(()=>[o("img",{class:f({light:!l(c)}),style:F(l(i)[D]),src:r.img,alt:r.name,onClick:rt=>t.$router.push({path:"/editor",query:{type:r.type}})},null,14,Y)]),_:2},1032,["content"]))),128))]),o("ul",Z,[(e(!0),s(p,null,m(l(i).length,r=>(e(),s("li",{class:f({active:r-1===l(u),dark:l(c)}),key:r,style:F({left:`${100*r}px`})},null,6))),128))])],64)}}});const et=x(tt,[["__scopeId","data-v-92a863ea"]]),B=n=>(G("data-v-5bec7661"),n=n(),P(),n),ot={class:"introduce flex flex-space-around flex-align-around flex-align-center noto-serif-sc"},nt={class:"introduce-l","data-aos":"slide-right"},st=B(()=>o("div",{class:"typenet-text"},null,-1)),at=B(()=>o("i",{class:"iconfont icon-goto"},null,-1)),ut={class:"introduce-r"},it=y({__name:"home",setup(n){M();const c=q();return(a,u)=>(e(),s(p,null,[d(j),o("div",ot,[o("div",nt,[st,o("button",{onClick:u[0]||(u[0]=i=>a.$router.push("/template")),class:f(["start btn pointer",{"dark-start":l(c)}])},[h(" \u5FEB\u901F\u5F00\u59CB "),at],2)]),o("div",ut,[d(et)])])],64))}});const bt=x(it,[["__scopeId","data-v-5bec7661"]]);export{bt as default};
