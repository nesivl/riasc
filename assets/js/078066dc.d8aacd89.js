"use strict";(self.webpackChunkriasc=self.webpackChunkriasc||[]).push([[4556],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6759:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={id:"ip-gateway",title:"IP-Gateway/NAT for cluster-external devices",sidebar_label:"IP-Gateway/NAT",sidebar_position:3,slug:"/design/ip-gateway",partners:["rwth"]},c=void 0,s={unversionedId:"design/ip-gateway",id:"design/ip-gateway",title:"IP-Gateway/NAT for cluster-external devices",description:"Facts",source:"@site/docs/design/ip-gateway.md",sourceDirName:"design",slug:"/design/ip-gateway",permalink:"/docs/design/ip-gateway",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/design/ip-gateway.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"ip-gateway",title:"IP-Gateway/NAT for cluster-external devices",sidebar_label:"IP-Gateway/NAT",sidebar_position:3,slug:"/design/ip-gateway",partners:["rwth"]},sidebar:"docs",previous:{title:"Overlay Network",permalink:"/docs/design/ip-overlay"},next:{title:"Network Emulation",permalink:"/docs/design/network-emulation"}},u=[{value:"Facts",id:"facts",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Employed technologies",id:"employed-technologies",children:[],level:2},{value:"Architecture",id:"architecture",children:[],level:2},{value:"Implementation details",id:"implementation-details",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"facts"},"Facts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Git Repo:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Helm Chart:")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ERIGrid2/charts/tree/master/charts/multus"},"https://github.com/ERIGrid2/charts/tree/master/charts/multus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State:")," in design phase")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"As outlined in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/ip-overlay"},"IP overlay network")," design document, Kubernetes networking only facilicates communication between containers inside the cloud.\nThe ",(0,a.kt)("em",{parentName:"p"},"IP gateway")," component extends the Kubernetes networking concept to enable IP communication with cluster-external devices and services.\nThis is implemented by allocating a cluster-internal IP address to each external device.\nNetwork address translation is then used to establish the link between cluster-internal and -external addresses."),(0,a.kt)("h2",{id:"employed-technologies"},"Employed technologies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus CNI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Network_address_translation"},"Network Address Translation"))),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"))}p.isMDXComponent=!0}}]);