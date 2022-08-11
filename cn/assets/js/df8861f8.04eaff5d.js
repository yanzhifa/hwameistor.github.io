"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1758],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var s=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,o=function(e,t){if(null==e)return{};var r,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=s.createContext({}),l=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||n;return r?s.createElement(f,a(a({ref:t},u),{},{components:r})):s.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<n;l++)a[l]=r[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=r(7462),o=(r(7294),r(3905));const n={sidebar_position:7,sidebar_label:"PV and PVC"},a="PV and PVC",i={unversionedId:"terminologies/6.7.pv_and_pvc",id:"terminologies/6.7.pv_and_pvc",title:"PV and PVC",description:"The PersistentVolume subsystem provides an API for users and administrators that abstracts details of how storage is provided from how it is consumed. To do this, we introduce two new API resources: PersistentVolume (PV) and PersistentVolumeClaim (PVC). A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource. PVs are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system.",source:"@site/docs/6.terminologies/6.7.pv_and_pvc.md",sourceDirName:"6.terminologies",slug:"/terminologies/6.7.pv_and_pvc",permalink:"/cn/docs/terminologies/6.7.pv_and_pvc",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/6.terminologies/6.7.pv_and_pvc.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"PV and PVC"},sidebar:"tutorialSidebar",previous:{title:"LVM",permalink:"/cn/docs/terminologies/6.6.lvm"},next:{title:"Community",permalink:"/cn/docs/community"}},c={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pv-and-pvc"},"PV and PVC"),(0,o.kt)("p",null,"The PersistentVolume subsystem provides an API for users and administrators that abstracts details of how storage is provided from how it is consumed. To do this, we introduce two new API resources: PersistentVolume (PV) and PersistentVolumeClaim (PVC). A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource. PVs are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system."),(0,o.kt)("p",null,"A PersistentVolumeClaim (PVC) is a request for storage by a user. It is similar to a Pod. Pods consume node resources and PVCs consume PV resources. Pods can request specific levels of resources (CPU and Memory). Claims can request specific size and access modes (e.g., they can be mounted ReadWriteOnce, ReadOnlyMany or ReadWriteMany, see AccessModes)."),(0,o.kt)("p",null,"While PersistentVolumeClaims allow a user to consume abstract storage resources, it is common that users need PersistentVolumes with varying properties, such as performance, for different problems. Cluster administrators need to be able to offer a variety of PersistentVolumes that differ in more ways than size and access modes, without exposing users to the details of how those volumes are implemented. For these needs, there is the StorageClass resource. It is used to mark storage resources and performance, and dynamically provision appropriate PV resources based on PVC demand. After the mechanism of StorageClass and dynamic provisioning developed for storage resources, the on-demand creation of volumes is realized, which is an important step in the automatic management process of shared storage."),(0,o.kt)("p",null,"See also the official documentation provided by Kubernetes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/"},"Persistent Volume")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/storage/storage-classes/"},"StorageClass")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/storage/dynamic-provisioning/"},"Dynamic Volume Provisioning"))))}d.isMDXComponent=!0}}]);