"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3,sidebar_label:"CSI \u63a5\u53e3"},i="CSI \u63a5\u53e3",o={unversionedId:"terminology/csi",id:"terminology/csi",title:"CSI \u63a5\u53e3",description:"CSI \u5373 Container Storage Interfaces\uff0c\u5bb9\u5668\u5b58\u50a8\u63a5\u53e3\u3002\u76ee\u524d\uff0cKubernetes \u4e2d\u7684\u5b58\u50a8\u5b50\u7cfb\u7edf\u4ecd\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\u3002\u5b58\u50a8\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u5728 Kubernetes \u6838\u5fc3\u5b58\u50a8\u5e93\u4e2d\u8fdb\u884c\u7ef4\u62a4\uff0c\u8fd9\u5f88\u96be\u6d4b\u8bd5\u3002Kubernetes \u8fd8\u9700\u8981\u6388\u4e88\u5b58\u50a8\u4f9b\u5e94\u5546\u8bb8\u53ef\uff0c\u4fbf\u4e8e\u5c06\u4ee3\u7801\u5d4c\u5165 Kubernetes \u6838\u5fc3\u5b58\u50a8\u5e93\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/06.terminology/02.csi.md",sourceDirName:"06.terminology",slug:"/terminology/csi",permalink:"/cn/docs/terminology/csi",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/06.terminology/02.csi.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"CSI \u63a5\u53e3"},sidebar:"tutorialSidebar",previous:{title:"CAS \u5b58\u50a8",permalink:"/cn/docs/terminology/cas"},next:{title:"CRD \u548c CR",permalink:"/cn/docs/terminology/crd"}},s={},u=[{value:"\u6269\u5c55 CSI \u548c Kubernetes",id:"\u6269\u5c55-csi-\u548c-kubernetes",level:2},{value:"\u6269\u5c55 CSI \u89c4\u8303",id:"\u6269\u5c55-csi-\u89c4\u8303",level:2},{value:"\u6269\u5c55 \u201cIn-Tree\u201d \u5377\u63d2\u4ef6",id:"\u6269\u5c55-in-tree-\u5377\u63d2\u4ef6",level:2},{value:"\u5b9e\u73b0\u5377\u9a71\u52a8\u7a0b\u5e8f",id:"\u5b9e\u73b0\u5377\u9a71\u52a8\u7a0b\u5e8f",level:3},{value:"\u5c55\u793a",id:"\u5c55\u793a",level:2}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"csi-\u63a5\u53e3"},"CSI \u63a5\u53e3"),(0,a.kt)("p",null,"CSI \u5373 Container Storage Interfaces\uff0c\u5bb9\u5668\u5b58\u50a8\u63a5\u53e3\u3002\u76ee\u524d\uff0cKubernetes \u4e2d\u7684\u5b58\u50a8\u5b50\u7cfb\u7edf\u4ecd\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\u3002\u5b58\u50a8\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u5728 Kubernetes \u6838\u5fc3\u5b58\u50a8\u5e93\u4e2d\u8fdb\u884c\u7ef4\u62a4\uff0c\u8fd9\u5f88\u96be\u6d4b\u8bd5\u3002Kubernetes \u8fd8\u9700\u8981\u6388\u4e88\u5b58\u50a8\u4f9b\u5e94\u5546\u8bb8\u53ef\uff0c\u4fbf\u4e8e\u5c06\u4ee3\u7801\u5d4c\u5165 Kubernetes \u6838\u5fc3\u5b58\u50a8\u5e93\u3002"),(0,a.kt)("p",null,"CSI \u65e8\u5728\u5b9a\u4e49\u884c\u4e1a\u6807\u51c6\uff0c\u8be5\u6807\u51c6\u5c06\u4f7f\u652f\u6301 CSI \u7684\u5b58\u50a8\u63d0\u4f9b\u5546\u80fd\u591f\u5728\u652f\u6301 CSI \u7684\u5bb9\u5668\u7f16\u6392\u7cfb\u7edf\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u63cf\u8ff0\u4e86\u4e00\u79cd\u4e0e CSI \u96c6\u6210\u7684\u9ad8\u7ea7 Kubernetes \u539f\u578b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CSI \u63a5\u53e3",src:n(8529).Z,width:"1198",height:"764"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f15\u5165\u4e86\u4e09\u4e2a\u65b0\u7684\u5916\u90e8\u7ec4\u4ef6\u4ee5\u89e3\u8026 Kubernetes \u548c\u5b58\u50a8\u63d0\u4f9b\u7a0b\u5e8f\u903b\u8f91"),(0,a.kt)("li",{parentName:"ul"},"\u84dd\u8272\u7bad\u5934\u8868\u793a\u9488\u5bf9 API \u670d\u52a1\u5668\u8fdb\u884c\u8c03\u7528\u7684\u5e38\u89c4\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u7ea2\u8272\u7bad\u5934\u663e\u793a gRPC \u4ee5\u9488\u5bf9 Volume Driver \u8fdb\u884c\u8c03\u7528")),(0,a.kt)("h2",{id:"\u6269\u5c55-csi-\u548c-kubernetes"},"\u6269\u5c55 CSI \u548c Kubernetes"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u5728 Kubernetes \u4e0a\u6269\u5c55\u5377\u7684\u529f\u80fd\uff0c\u5e94\u8be5\u6269\u5c55\u51e0\u4e2a\u7ec4\u4ef6\uff0c\u5305\u62ec CSI \u89c4\u8303\u3001\u201cin-tree\u201d \u5377\u63d2\u4ef6\u3001external-provisioner \u548c external-attacher\u3002"),(0,a.kt)("h2",{id:"\u6269\u5c55-csi-\u89c4\u8303"},"\u6269\u5c55 CSI \u89c4\u8303"),(0,a.kt)("p",null,"\u6700\u65b0\u7684 CSI 0.2.0 \u4ecd\u672a\u5b9a\u4e49\u6269\u5c55\u5377\u7684\u529f\u80fd\u3002\u5e94\u5f15\u5165\u65b0\u7684 3 \u4e2a RPC\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"RequiresFSResize"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"ControllerResizeVolume")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeResizeVolume"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jade"},"service Controller {\n  rpc CreateVolume (CreateVolumeRequest)\n    returns (CreateVolumeResponse) {}\n\u2026\u2026\n  rpc RequiresFSResize (RequiresFSResizeRequest)\n    returns (RequiresFSResizeResponse) {}\n  rpc ControllerResizeVolume (ControllerResizeVolumeRequest)\n    returns (ControllerResizeVolumeResponse) {}\n}\nservice Node {\n  rpc NodeStageVolume (NodeStageVolumeRequest)\n    returns (NodeStageVolumeResponse) {}\n\u2026\u2026\n  rpc NodeResizeVolume (NodeResizeVolumeRequest)\n    returns (NodeResizeVolumeResponse) {}\n}\n")),(0,a.kt)("h2",{id:"\u6269\u5c55-in-tree-\u5377\u63d2\u4ef6"},"\u6269\u5c55 \u201cIn-Tree\u201d \u5377\u63d2\u4ef6"),(0,a.kt)("p",null,"\u9664\u4e86\u6269\u5c55\u7684 CSI \u89c4\u8303\u4e4b\u5916\uff0cKubernetes \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"csiPlugin")," \u63a5\u53e3\u8fd8\u5e94\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"expandablePlugin"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"csiPlugin")," \u63a5\u53e3\u5c06\u6269\u5c55\u4ee3\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"ExpanderController")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jade"},"type ExpandableVolumePlugin interface {\nVolumePlugin\nExpandVolumeDevice(spec Spec, newSize resource.Quantity, oldSize resource.Quantity) (resource.Quantity, error)\nRequiresFSResize() bool\n}\n")),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u5377\u9a71\u52a8\u7a0b\u5e8f"},"\u5b9e\u73b0\u5377\u9a71\u52a8\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u4e3a\u4e86\u62bd\u8c61\u5316\u5b9e\u73b0\u7684\u590d\u6742\u6027\uff0c\u5e94\u5c06\u5355\u72ec\u7684\u5b58\u50a8\u63d0\u4f9b\u7a0b\u5e8f\u7ba1\u7406\u903b\u8f91\u786c\u7f16\u7801\u4e3a\u4ee5\u4e0b\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u5728 CSI \u89c4\u8303\u4e2d\u5df2\u660e\u786e\u5b9a\u4e49\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CreateVolume"),(0,a.kt)("li",{parentName:"ul"},"DeleteVolume"),(0,a.kt)("li",{parentName:"ul"},"ControllerPublishVolume"),(0,a.kt)("li",{parentName:"ul"},"ControllerUnpublishVolume"),(0,a.kt)("li",{parentName:"ul"},"ValidateVolumeCapabilities"),(0,a.kt)("li",{parentName:"ul"},"ListVolumes"),(0,a.kt)("li",{parentName:"ul"},"GetCapacity"),(0,a.kt)("li",{parentName:"ul"},"ControllerGetCapabilities"),(0,a.kt)("li",{parentName:"ul"},"RequiresFSResize"),(0,a.kt)("li",{parentName:"ul"},"ControllerResizeVolume")),(0,a.kt)("h2",{id:"\u5c55\u793a"},"\u5c55\u793a"),(0,a.kt)("p",null,"\u4ee5\u5177\u4f53\u7684\u7528\u6237\u6848\u4f8b\u6765\u6f14\u793a\u6b64\u529f\u80fd\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e3a CSI \u5b58\u50a8\u4f9b\u5e94\u5546\u521b\u5efa\u5b58\u50a8\u7c7b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"allowVolumeExpansion: true\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: csi-qcfs\nparameters:\n  csiProvisionerSecretName: orain-test\n  csiProvisionerSecretNamespace: default\nprovisioner: csi-qcfsplugin\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u90e8\u7f72\u5305\u62ec\u5b58\u50a8\u4f9b\u5e94\u5546 ",(0,a.kt)("inlineCode",{parentName:"p"},"csi-qcfsplugin")," \u5728\u5185\u7684 CSI \u5377\u9a71\u52a8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa PVC ",(0,a.kt)("inlineCode",{parentName:"p"},"qcfs-pvc"),"\uff0c\u5b83\u5c06\u7531\u5b58\u50a8\u7c7b ",(0,a.kt)("inlineCode",{parentName:"p"},"csi-qcfs")," \u52a8\u6001\u914d\u7f6e"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: qcfs-pvc\n  namespace: default\n....\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 300Gi\n  storageClassName: csi-qcfs\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa MySQL 5.7 \u5b9e\u4f8b\u4ee5\u4f7f\u7528 PVC ",(0,a.kt)("inlineCode",{parentName:"p"},"qcfs-pvc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u53cd\u6620\u5b8c\u5168\u76f8\u540c\u7684\u751f\u4ea7\u7ea7\u522b\u65b9\u6848\uff0c\u5b9e\u9645\u4e0a\u6709\u4e24\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6279\u91cf\u63d2\u5165\u4f7f MySQL \u6d88\u8017\u66f4\u591a\u7684\u6587\u4ef6\u7cfb\u7edf\u5bb9\u91cf"),(0,a.kt)("li",{parentName:"ul"},"\u6d6a\u6d8c\u67e5\u8be2\u8bf7\u6c42"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u7f16\u8f91 pvc ",(0,a.kt)("inlineCode",{parentName:"p"},"qcfs-pvc")," \u914d\u7f6e\u52a8\u6001\u6269\u5c55\u5377\u5bb9\u91cf"))))}c.isMDXComponent=!0},8529:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/csi-39c1b84e98a6cd90485e1b5c5627f45c.png"}}]);