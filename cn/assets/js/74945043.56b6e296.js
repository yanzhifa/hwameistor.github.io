"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=m(a),d=l,u=k["".concat(o,".").concat(d)]||k[d]||c[d]||r;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:3,sidebar_label:"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668"},i="\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668",p={unversionedId:"components/local-disk-manager",id:"components/local-disk-manager",title:"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668",description:"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668 (Local Disk Manager, LDM) \u662f HwameiStor \u7cfb\u7edf\u7684\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\u6a21\u5757\u3002LDM \u65e8\u5728\u7b80\u5316\u7ba1\u7406\u8282\u70b9\u4e0a\u7684\u78c1\u76d8\u3002\u5b83\u5c06\u78c1\u76d8\u62bd\u8c61\u6210\u4e00\u79cd\u53ef\u4ee5\u88ab\u7ba1\u7406\u548c\u76d1\u63a7\u7684\u8d44\u6e90\u3002\u5b83\u672c\u8eab\u662f\u4e00\u79cd DaemonSet \u5bf9\u8c61\uff0c\u96c6\u7fa4\u4e2d\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u4f1a\u8fd0\u884c\u8be5\u670d\u52a1\uff0c\u901a\u8fc7\u8be5\u670d\u52a1\u68c0\u6d4b\u5b58\u5728\u7684\u78c1\u76d8\u5e76\u5c06\u5176\u8f6c\u6362\u6210\u76f8\u5e94\u7684 LocalDisk \u8d44\u6e90\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/04.components/01.local-disk-manager.md",sourceDirName:"04.components",slug:"/components/local-disk-manager",permalink:"/cn/docs/components/local-disk-manager",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/04.components/01.local-disk-manager.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u5b58\u50a8",permalink:"/cn/docs/components/local-storage"},next:{title:"DRBD \u5b89\u88c5\u5668",permalink:"/cn/docs/components/DRBD"}},o={},m=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u5b89\u88c5\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668",id:"\u5b89\u88c5\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668",level:2},{value:"\u8def\u7ebf\u89c4\u5212\u56fe",id:"\u8def\u7ebf\u89c4\u5212\u56fe",level:2},{value:"\u53cd\u9988",id:"\u53cd\u9988",level:2}],s={toc:m};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668"},"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668"),(0,l.kt)("p",null,"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668 (Local Disk Manager, LDM) \u662f HwameiStor \u7cfb\u7edf\u7684\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\u6a21\u5757\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"LDM")," \u65e8\u5728\u7b80\u5316\u7ba1\u7406\u8282\u70b9\u4e0a\u7684\u78c1\u76d8\u3002\u5b83\u5c06\u78c1\u76d8\u62bd\u8c61\u6210\u4e00\u79cd\u53ef\u4ee5\u88ab\u7ba1\u7406\u548c\u76d1\u63a7\u7684\u8d44\u6e90\u3002\u5b83\u672c\u8eab\u662f\u4e00\u79cd DaemonSet \u5bf9\u8c61\uff0c\u96c6\u7fa4\u4e2d\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u4f1a\u8fd0\u884c\u8be5\u670d\u52a1\uff0c\u901a\u8fc7\u8be5\u670d\u52a1\u68c0\u6d4b\u5b58\u5728\u7684\u78c1\u76d8\u5e76\u5c06\u5176\u8f6c\u6362\u6210\u76f8\u5e94\u7684 LocalDisk \u8d44\u6e90\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"LDM \u67b6\u6784\u56fe",src:a(1105).Z,width:"1210",height:"481"})),(0,l.kt)("p",null,"\u76ee\u524d LDM \u8fd8\u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"alpha")," \u9636\u6bb5\u3002"),(0,l.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"LocalDisk(LD)"),": \u8fd9\u662f LDM \u62bd\u8c61\u7684\u78c1\u76d8\u8d44\u6e90\uff0c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"LD")," \u4ee3\u8868\u4e86\u8282\u70b9\u4e0a\u7684\u4e00\u5757\u7269\u7406\u78c1\u76d8\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"LocalDiskClaim (LDC)"),": \u8fd9\u662f\u7cfb\u7edf\u4f7f\u7528\u78c1\u76d8\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"LDC")," \u5bf9\u8c61\u6765\u5411\u7cfb\u7edf\u7533\u8bf7\u78c1\u76d8\u3002\u7528\u6237\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e9b\u5bf9\u78c1\u76d8\u7684\u63cf\u8ff0\u6765\u9009\u62e9\u78c1\u76d8\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\uff0cLDC \u652f\u6301\u4ee5\u4e0b\u5bf9\u78c1\u76d8\u7684\u63cf\u8ff0\u9009\u9879\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"NodeName"),(0,l.kt)("li",{parentName:"ul"},"Capacity"),(0,l.kt)("li",{parentName:"ul"},"DiskType(e.g. HDD/SSD)"))),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u5b8c\u6574\u5730\u90e8\u7f72 HwameiStor\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/cn/docs/installation/helm-chart"},"\u4f7f\u7528 Helm Chart \u5b89\u88c5\u90e8\u7f72"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u53ea\u60f3\u5355\u72ec\u90e8\u7f72 LDM\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u6b65\u9aa4\u8fdb\u884c\u5b89\u88c5\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668"},"\u5b89\u88c5\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u514b\u9686  repo \u5230\u672c\u673a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/hwameistor/local-disk-manager.git\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fdb\u5165 repo \u5bf9\u5e94\u7684\u76ee\u5f55"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd deploy\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5 CRDs \u548c \u8fd0\u884c LocalDiskManager"),(0,l.kt)("p",{parentName:"li"},"3.1 \u5b89\u88c5 LocalDisk \u548c LocalDiskClaim \u7684 CRD"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f deploy/crds/\n")),(0,l.kt)("p",{parentName:"li"},"3.2 \u5b89\u88c5\u6743\u9650\u8ba4\u8bc1\u7684 CR \u4ee5\u53ca LDM \u7684 Operators"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f deploy/\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b LocalDisk \u4fe1\u606f"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get localdisk\n10-6-118-11-sda    10-6-118-11                             Unclaimed\n10-6-118-11-sdb    10-6-118-11                             Unclaimed\n")))),(0,l.kt)("p",null,"\u8be5\u547d\u4ee4\u7528\u4e8e\u83b7\u53d6\u96c6\u7fa4\u4e2d\u78c1\u76d8\u8d44\u6e90\u4fe1\u606f\uff0c\u83b7\u53d6\u7684\u4fe1\u606f\u603b\u5171\u6709\u56db\u5217\uff0c\u542b\u4e49\u5206\u522b\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NAME\uff1a")," \u4ee3\u8868\u78c1\u76d8\u5728\u96c6\u7fa4\u4e2d\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NODEMATCH\uff1a")," \u8868\u660e\u78c1\u76d8\u6240\u5728\u7684\u8282\u70b9\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CLAIM\uff1a")," \u8868\u660e\u8fd9\u4e2a\u78c1\u76d8\u662f\u88ab\u54ea\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"Claim")," \u6240\u5f15\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"PHASE\uff1a")," \u8868\u660e\u8fd9\u4e2a\u78c1\u76d8\u5f53\u524d\u7684\u72b6\u6001\u3002")),(0,l.kt)("p",null,"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"kuebctl get localdisk <name> -o yaml")," \u67e5\u770b\u66f4\u591a\u5173\u4e8e\u67d0\u5757\u78c1\u76d8\u7684\u4fe1\u606f\u3002"),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7533\u8bf7\u53ef\u7528\u78c1\u76d8"),(0,l.kt)("p",{parentName:"li"},"5.1 \u521b\u5efa LocalDiskClaim"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f deploy/samples/hwameistor.io_v1alpha1_localdiskclaim_cr.yaml\n")),(0,l.kt)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u78c1\u76d8\u4f7f\u7528\u7684\u7533\u8bf7\u8bf7\u6c42\u3002\u5728\u8fd9\u4e2a yaml \u6587\u4ef6\u91cc\u9762\uff0c\u60a8\u53ef\u4ee5\u5728 description \u5b57\u6bb5\u6dfb\u52a0\u5bf9\u7533\u8bf7\u78c1\u76d8\u7684\u63cf\u8ff0\uff0c\u6bd4\u5982\u78c1\u76d8\u7c7b\u578b\u3001\u78c1\u76d8\u7684\u5bb9\u91cf\u7b49\u7b49\u3002"),(0,l.kt)("p",{parentName:"li"},"5.2 \u67e5\u770b LocalDiskClaim \u4fe1\u606f"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get localdiskclaim <name>\n")))),(0,l.kt)("p",null,"\u67e5\u770b ",(0,l.kt)("inlineCode",{parentName:"p"},"Claim")," \u7684 Status \u5b57\u6bb5\u4fe1\u606f\u3002\u5982\u679c\u5b58\u5728\u53ef\u7528\u7684\u78c1\u76d8\uff0c\u60a8\u5c06\u4f1a\u770b\u5230\u8be5\u5b57\u6bb5\u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Bound"),"\u3002"),(0,l.kt)("h2",{id:"\u8def\u7ebf\u89c4\u5212\u56fe"},"\u8def\u7ebf\u89c4\u5212\u56fe"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u529f\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CSI for disk volume"),(0,l.kt)("td",{parentName:"tr",align:null},"Planed"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disk")," \u6a21\u5f0f\u4e0b\u521b\u5efa\u6570\u636e\u5377\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"CSI")," \u63a5\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Disk management"),(0,l.kt)("td",{parentName:"tr",align:null},"Planed"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u78c1\u76d8\u7ba1\u7406\u3001\u78c1\u76d8\u5206\u914d\u3001\u78c1\u76d8\u4e8b\u4ef6\u611f\u77e5\u5904\u7406")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Disk health management"),(0,l.kt)("td",{parentName:"tr",align:null},"Planed"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u78c1\u76d8\u5065\u5eb7\u7ba1\u7406\uff0c\u5305\u62ec\u6545\u969c\u9884\u6d4b\u548c\u72b6\u6001\u4e0a\u62a5\u7b49\u7b49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HA disk Volume"),(0,l.kt)("td",{parentName:"tr",align:null},"Planed"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Disk \u6570\u636e\u5377\u7684\u9ad8\u53ef\u7528")))),(0,l.kt)("h2",{id:"\u53cd\u9988"},"\u53cd\u9988"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u7684\u7591\u95ee\u548c\u5efa\u8bae\uff0c\u8bf7\u53cd\u9988\u81f3 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hwameistor/local-disk-manager/issues"},"Issues")))}c.isMDXComponent=!0},1105:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ldm-b9dcc807d2b395c426569e542d4f5983.png"}}]);