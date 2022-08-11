"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4,sidebar_label:"CRD and CR"},a="CRD and CR",s={unversionedId:"terminologies/6.4.crd_and_cr",id:"terminologies/6.4.crd_and_cr",title:"CRD and CR",description:"CRD",source:"@site/docs/6.terminologies/6.4.crd_and_cr.md",sourceDirName:"6.terminologies",slug:"/terminologies/6.4.crd_and_cr",permalink:"/cn/docs/terminologies/6.4.crd_and_cr",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/6.terminologies/6.4.crd_and_cr.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"CRD and CR"},sidebar:"tutorialSidebar",previous:{title:"CSI",permalink:"/cn/docs/terminologies/6.3.csi"},next:{title:"Volume",permalink:"/cn/docs/terminologies/6.5.volume"}},l={},c=[{value:"CRD",id:"crd",level:2},{value:"CR",id:"cr",level:2},{value:"CRDs + Controllers",id:"crds--controllers",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crd-and-cr"},"CRD and CR"),(0,o.kt)("h2",{id:"crd"},"CRD"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CRD")," is the abbreviation of ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Resource Definition"),", and is a resource type natively provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes"),". It is the definition of Custom Resource (CR) to describe what a custom resource is."),(0,o.kt)("p",null,"A CRD can register a new resource with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," cluster to extend the capabilities of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," cluster. With ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD"),", you can define the abstraction of the underlying infrastructure, customize resource types based on business needs, and use the existing resources and capabilities of ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," to define higher-level abstractions through a Lego-like building blocks."),(0,o.kt)("h2",{id:"cr"},"CR"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CR")," is the abbreviation of ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Resource"),". In practice, it is an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD"),", a resource description that matches with the field format in ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD"),"."),(0,o.kt)("h2",{id:"crds--controllers"},"CRDs + Controllers"),(0,o.kt)("p",null,"We all know that ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," has powerful scalability, but only ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD")," is not useful. It also needs the support of controller (",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Controller"),") to reflect the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Controller")," can listen ",(0,o.kt)("inlineCode",{parentName:"p"},"CRUD")," events of ",(0,o.kt)("inlineCode",{parentName:"p"},"CR")," to implement custom business logic."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CRDs + Controllers = Everything"),"."),(0,o.kt)("p",null,"See also the official documentation provided by Kubernetes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"CustomResource")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"},"CustomResourceDefinition"))))}u.isMDXComponent=!0}}]);