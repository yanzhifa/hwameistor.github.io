"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||c;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const c={sidebar_position:4,sidebar_label:"DRBD \u5b89\u88c5\u5668"},i="DRBD \u5b89\u88c5\u5668",a={unversionedId:"components/DRBD",id:"components/DRBD",title:"DRBD \u5b89\u88c5\u5668",description:"DRBD (Distributed Replicated Block Device) \u901a\u8fc7 Linux \u5185\u6838\u6a21\u5757\u548c\u76f8\u5173\u811a\u672c\u6784\u6210\uff0c\u7528\u4ee5\u6784\u5efa\u9ad8\u53ef\u7528\u6027\u7684\u96c6\u7fa4\u3002\u5176\u5b9e\u73b0\u65b9\u5f0f\u662f\u901a\u8fc7\u7f51\u7edc\u6765\u955c\u50cf\u6574\u4e2a\u8bbe\u5907\uff0c\u53ef\u4ee5\u628a\u5b83\u770b\u4f5c\u662f\u4e00\u79cd\u7f51\u7edc RAID\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/04.components/03.DRBD.md",sourceDirName:"04.components",slug:"/components/DRBD",permalink:"/cn/docs/components/DRBD",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/04.components/03.DRBD.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"DRBD \u5b89\u88c5\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668",permalink:"/cn/docs/components/local-disk-manager"},next:{title:"\u8c03\u5ea6\u5668",permalink:"/cn/docs/components/scheduler"}},p={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"drbd-\u5b89\u88c5\u5668"},"DRBD \u5b89\u88c5\u5668"),(0,o.kt)("p",null,"DRBD (Distributed Replicated Block Device) \u901a\u8fc7 Linux \u5185\u6838\u6a21\u5757\u548c\u76f8\u5173\u811a\u672c\u6784\u6210\uff0c\u7528\u4ee5\u6784\u5efa\u9ad8\u53ef\u7528\u6027\u7684\u96c6\u7fa4\u3002\u5176\u5b9e\u73b0\u65b9\u5f0f\u662f\u901a\u8fc7\u7f51\u7edc\u6765\u955c\u50cf\u6574\u4e2a\u8bbe\u5907\uff0c\u53ef\u4ee5\u628a\u5b83\u770b\u4f5c\u662f\u4e00\u79cd\u7f51\u7edc RAID\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u5b89\u88c5\u5668\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5 DRBD \u5230\u5bb9\u5668\u96c6\u7fa4\uff0c\u76ee\u524d\u8be5\u6a21\u5757\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u7528\u9014\u3002"),(0,o.kt)("p",null,"\u5173\u4e8e DRBD \u7684\u5546\u4e1a\u5316\u4ea7\u54c1\uff0c\u8bf7\u8054\u7cfb ",(0,o.kt)("a",{parentName:"p",href:"https://linbit.com/contact-us/"},"Linbit"),"\u3002"))}u.isMDXComponent=!0}}]);