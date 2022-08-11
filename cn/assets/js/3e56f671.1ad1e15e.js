"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,v=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:4,sidebar_label:"Uninstall"},o="Uninstall",s={unversionedId:"quick_start/2.4.uninstall",id:"quick_start/2.4.uninstall",title:"Uninstall",description:"Before uninstalling HwameiStor, make sure you have backed up all the data.",source:"@site/docs/2.quick_start/2.4.uninstall.md",sourceDirName:"2.quick_start",slug:"/quick_start/2.4.uninstall",permalink:"/cn/docs/quick_start/2.4.uninstall",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/2.quick_start/2.4.uninstall.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Uninstall"},sidebar:"tutorialSidebar",previous:{title:"Upgrade",permalink:"/cn/docs/quick_start/2.3.advanced_features/2.3.3.upgrade"},next:{title:"Overview",permalink:"/cn/docs/architecture_of_hwameistor/3.1.overview"}},i={},c=[{value:"Step 1: Delete helm instance",id:"step-1-delete-helm-instance",level:2},{value:"Step 2: Cleanup",id:"step-2-cleanup",level:2},{value:"Remove namespace",id:"remove-namespace",level:3},{value:"Remove CRDs",id:"remove-crds",level:3},{value:"Remove clusterRoles and roleBindings",id:"remove-clusterroles-and-rolebindings",level:3},{value:"Remove storageClass",id:"remove-storageclass",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uninstall"},"Uninstall"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Before uninstalling HwameiStor, make sure you have backed up all the data.")),(0,a.kt)("h2",{id:"step-1-delete-helm-instance"},"Step 1: Delete helm instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm delete \\\n    --namespace hwameistor \\\n    hwameistor\n")),(0,a.kt)("h2",{id:"step-2-cleanup"},"Step 2: Cleanup"),(0,a.kt)("h3",{id:"remove-namespace"},"Remove namespace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl delete ns hwameistor\n")),(0,a.kt)("h3",{id:"remove-crds"},"Remove CRDs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get crd -o name \\\n    | grep hwameistor \\\n    | xargs -t kubectl delete\n")),(0,a.kt)("h3",{id:"remove-clusterroles-and-rolebindings"},"Remove clusterRoles and roleBindings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get clusterrolebinding,clusterrole -o name \\\n    | grep hwameistor \\\n    | xargs -t kubectl delete\n")),(0,a.kt)("h3",{id:"remove-storageclass"},"Remove storageClass"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get sc -o name \\\n    | grep hwameistor-storage-lvm- \\\n    | xargs -t kubectl delete\n")))}p.isMDXComponent=!0}}]);