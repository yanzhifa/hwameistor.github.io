"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||n;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:8,sidebar_label:"FAQs"},i="FAQs",l={unversionedId:"faqs",id:"faqs",title:"FAQs",description:"Q1: How does HwameiStor scheduler work in a Kubernetes platform?",source:"@site/docs/8.faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/cn/docs/faqs",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/8.faqs.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"FAQs"},sidebar:"tutorialSidebar",previous:{title:"Community",permalink:"/cn/docs/community"}},s={},c=[{value:"Q1: How does HwameiStor scheduler work in a Kubernetes platform?",id:"q1-how-does-hwameistor-scheduler-work-in-a-kubernetes-platform",level:3},{value:"Q2: How does HwameiStor schedule applications with multi-replicas workloads and what are the differences compared to the traditional shared storage (NFS / block)?",id:"q2-how-does-hwameistor-schedule-applications-with-multi-replicas-workloads-and-what-are-the-differences-compared-to-the-traditional-shared-storage-nfs--block",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faqs"},"FAQs"),(0,a.kt)("h3",{id:"q1-how-does-hwameistor-scheduler-work-in-a-kubernetes-platform"},"Q1: How does HwameiStor scheduler work in a Kubernetes platform?"),(0,a.kt)("p",null,"The HwameiStor scheduler is deployed as a pod in the HwameiStor namespace."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:r(8841).Z,width:"553",height:"196"})),(0,a.kt)("p",null,"Once the applications (Deployment or StatefulSet) are created, the pod will be scheduled to the worker nodes on which HwameiStor is already configured."),(0,a.kt)("h3",{id:"q2-how-does-hwameistor-schedule-applications-with-multi-replicas-workloads-and-what-are-the-differences-compared-to-the-traditional-shared-storage-nfs--block"},"Q2: How does HwameiStor schedule applications with multi-replicas workloads and what are the differences compared to the traditional shared storage (NFS / block)?"),(0,a.kt)("p",null,"We strongly recommend using StatefulSet for applications with multi-replica workloads."),(0,a.kt)("p",null,"StatefulSet will deploy replicas on the same worker node with the original pod, and will also create a PV data volume for each replica. If you need to deploy replicas on different worker nodes, you shall manually configure them with ",(0,a.kt)("inlineCode",{parentName:"p"},"pod affinity"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:r(2933).Z,width:"1382",height:"426"})),(0,a.kt)("p",null,"We suggest using a single pod for deployment because the block data volumes can not be shared."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For the traditional shared storage:")),(0,a.kt)("p",null,"StatefulSet will deploy replicas to other worker nodes for workload distribution and will also create a PV data volume for each replica."),(0,a.kt)("p",null,"Deployment will also deploy replicas to other worker nodes for workload distribution but will share the same PV data volume (only for NFS). We suggest using a single pod for block storage because the block data volumes can not be shared."))}p.isMDXComponent=!0},8841:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/clip_image002-ab1b7f5938d19fde9eee9c8e334a392e.png"},2933:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/clip_image004-ea219969be0d9d975904a119d3135ff1.png"}}]);