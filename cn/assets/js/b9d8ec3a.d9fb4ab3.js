"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,sidebar_label:"Local Disk Manager"},i="Local Disk Manager",o={unversionedId:"architecture_of_hwameistor/3.2.modules/3.2.1.local_disk_manager",id:"architecture_of_hwameistor/3.2.modules/3.2.1.local_disk_manager",title:"Local Disk Manager",description:"Local Disk Manager (LDM) is one of the modules of HwameiStor. LDM is used to simplify the management of disks on nodes. It can abstract the disk on a node into a resource for monitoring and management purposes. It's a daemon that will be deployed on each node, then detect the disk on the node, abstract it into local disk (LD) resources and save it to kubernetes.",source:"@site/docs/3.architecture_of_hwameistor/3.2.modules/3.2.1.local_disk_manager.md",sourceDirName:"3.architecture_of_hwameistor/3.2.modules",slug:"/architecture_of_hwameistor/3.2.modules/3.2.1.local_disk_manager",permalink:"/cn/docs/architecture_of_hwameistor/3.2.modules/3.2.1.local_disk_manager",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/3.architecture_of_hwameistor/3.2.modules/3.2.1.local_disk_manager.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Local Disk Manager"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cn/docs/architecture_of_hwameistor/3.1.overview"},next:{title:"Local Storage",permalink:"/cn/docs/architecture_of_hwameistor/3.2.modules/3.2.2.local_storage"}},s={},p=[{value:"Concepts",id:"concepts",level:2},{value:"Usage",id:"usage",level:2},{value:"Install Local Disk Manager",id:"install-local-disk-manager",level:2},{value:"Roadmap",id:"roadmap",level:2}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-disk-manager"},"Local Disk Manager"),(0,r.kt)("p",null,"Local Disk Manager (LDM) is one of the modules of HwameiStor. ",(0,r.kt)("inlineCode",{parentName:"p"},"LDM")," is used to simplify the management of disks on nodes. It can abstract the disk on a node into a resource for monitoring and management purposes. It's a daemon that will be deployed on each node, then detect the disk on the node, abstract it into local disk (LD) resources and save it to kubernetes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LDM \u67b6\u6784\u56fe",src:a(8485).Z,width:"1210",height:"481"})),(0,r.kt)("p",null,"At present, the LDM project is still in the ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," stage."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"LocalDisk (LD): LDM abstracts disk resources into objects in kubernetes. An ",(0,r.kt)("inlineCode",{parentName:"p"},"LD")," resource object represents the disk resources on the host."),(0,r.kt)("p",null,"LocalDiskClaim (LDC): This is a way to use disks. A user can add the disk description to select a disk for use."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At present, LDC supports the following options to describe disk:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"NodeName"),(0,r.kt)("li",{parentName:"ul"},"Capacity"),(0,r.kt)("li",{parentName:"ul"},"DiskType (such as HDD/SSD/NVMe)"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"If you want to entirely deploy HwameiStor, refer to ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/quick_start/2.1.installation/2.1.2.deploy_helm_charts"},"Usage with Helm Chart"),"."),(0,r.kt)("p",null,"If you just want to deploy LDM separately, refer to the following installation procedure."),(0,r.kt)("h2",{id:"install-local-disk-manager"},"Install Local Disk Manager"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the repo to your machine."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/hwameistor/local-disk-manager.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change to the deploy directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd deploy\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy CRDs and run local-disk-manager."),(0,r.kt)("p",{parentName:"li"},"3.1 Deploy LD and LDC CRDs."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f deploy/crds/\n")),(0,r.kt)("p",{parentName:"li"},"3.2. Deploy RBAC CRs and operators."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f deploy/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the LocalDisk information."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localdisk\n10-6-118-11-sda    10-6-118-11                             Unclaimed\n10-6-118-11-sdb    10-6-118-11                             Unclaimed\n")))),(0,r.kt)("p",null,"Get locally discovered disk resource information with four columns displayed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NAME:")," represents how this disk is displayed in the cluster resources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NODEMATCH:")," indicates which host this disk is on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CLAIM:")," indicates which ",(0,r.kt)("inlineCode",{parentName:"li"},"Claim")," statement this disk is used by."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PHASE:")," represents the current state of the disk.")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"kuebctl get localdisk <name> -o yaml")," to view more information about disks."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Claim available disks."),(0,r.kt)("p",{parentName:"li"},"5.1 Apply a LocalDiskClaim."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f deploy/samples/hwameistor.io_v1alpha1_localdiskclaim_cr.yaml\n")),(0,r.kt)("p",{parentName:"li"},"Allocate available disks by issuing a disk usage request. In the request description, you can add more requirements about the disk, such as disk type and capacity."),(0,r.kt)("p",{parentName:"li"},"5.2 Get the LocalDiskClaim infomation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localdiskclaim <name>\n")),(0,r.kt)("p",{parentName:"li"},"Check the status of ",(0,r.kt)("inlineCode",{parentName:"p"},"Claim"),". If a disk is available, you will find that the status is changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Bound"),", the localdisk status will be Claimed, and it points to the claim that references the disk."))),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Release"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CSI for disk volume"),(0,r.kt)("td",{parentName:"tr",align:null},"Planed"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CSI")," driver for provisioning Local PVs with bare ",(0,r.kt)("inlineCode",{parentName:"td"},"Disk"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk management"),(0,r.kt)("td",{parentName:"tr",align:null},"Planed"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Disk management, disk allocation, disk event aware processing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk health management"),(0,r.kt)("td",{parentName:"tr",align:null},"Planed"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Disk health management")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HA disk Volume"),(0,r.kt)("td",{parentName:"tr",align:null},"Planed"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"HA disk Volume")))))}d.isMDXComponent=!0},8485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ldm-b9dcc807d2b395c426569e542d4f5983.png"}}]);