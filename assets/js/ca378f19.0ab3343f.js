"use strict";(self.webpackChunkriasc=self.webpackChunkriasc||[]).push([[3831],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},172:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"network-monitoring",title:"Monitoring of network conditions",sidebar_label:"Network Monitoring",sidebar_position:6,slug:"/design/network-monitoring",partners:["rwth","uos"]},l=void 0,c={unversionedId:"design/network-monitoring",id:"design/network-monitoring",title:"Monitoring of network conditions",description:"Facts",source:"@site/docs/design/network-monitoring.md",sourceDirName:"design",slug:"/design/network-monitoring",permalink:"/docs/design/network-monitoring",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/design/network-monitoring.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"network-monitoring",title:"Monitoring of network conditions",sidebar_label:"Network Monitoring",sidebar_position:6,slug:"/design/network-monitoring",partners:["rwth","uos"]},sidebar:"docs",previous:{title:"Time Synchronization",permalink:"/docs/design/time-sync"},next:{title:"PSAL Code Generation",permalink:"/docs/design/code-generation"}},u=[{value:"Facts",id:"facts",children:[],level:2},{value:"Introduction",id:"introduction",children:[{value:"Relation to other RIasC services",id:"relation-to-other-riasc-services",children:[],level:3},{value:"Collected Metrics",id:"collected-metrics",children:[],level:3}],level:2},{value:"Employed technologies",id:"employed-technologies",children:[],level:2},{value:"Architecture",id:"architecture",children:[],level:2},{value:"Implementation details",id:"implementation-details",children:[],level:2},{value:"Further reading",id:"further-reading",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"facts"},"Facts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source Code:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Helm Chart:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ERIGrid2/charts/tree/master/charts/perfsonar"},"https://github.com/ERIGrid2/charts/tree/master/charts/perfsonar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"State:")," design phase")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"One of the objectives of RIasC is the facilitation of distributed experiments such as for example geographically distributed real-time simulation (GD-RTS).\nThis is enabled by the interconnection of research infrastructures between different universities, countries and even continents which host digital real-time simulators and/or controller/power hardware-in-the-loop (C/PHIL) setups."),(0,o.kt)("p",null,"Among other services, RIasC provides an transparent ",(0,o.kt)("a",{parentName:"p",href:"/docs/design/ip-overlay"},"overlay network")," to establish IP connectivity between the locations.\nThis IP overlay network is established via a peer-to-peer topology.\nMeaning, as long as permitted by network policies, traffic will be exchanged directly between each of the labs rather than beeing routed over a central VPN gateway.\nIn cases where direct communication is blocked, traffic is rerouted over a third party.\nHence, from a user perspective, all participating laboratories appear to connected to the same local network."),(0,o.kt)("p",null,"However, due to the geographical distances between them a considerable communication latency exists.\nTo compensate the effect of these increased communication latencies, an interface algorithm (IA) is required."),(0,o.kt)("p",null,"In most cases the IA requires the current communication network state as an input."),(0,o.kt)("p",null,"For this purpose, RIasC implements network monitoring which periodically monitors several network metrics such as bandwidth, latency, packet loss, etc."),(0,o.kt)("p",null,"The network monitoring feature of RIasC is based on the established perfSONAR tool suite and adapts it for its usage in a Kubernetes cluster.\nThis includes the deployment of perfSONAR core components in the cluster itself as well as the execution of perfSONAR testpoints on the agent nodes throughout the participating research infrastructures.\nLast but not least, a dedicated Kubernetes operator is used to manage test schedules by the means of Kubernetes Custom Resource Definitions (CRD)."),(0,o.kt)("h3",{id:"relation-to-other-riasc-services"},"Relation to other RIasC services"),(0,o.kt)("p",null,"The network monitoring service depends on two other RIasC services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IP Overlay Network:")," In order to perform actual network tests, an IP connectivity between the testing endpoints is required. This connectivity can either be provided by the existing local or wide-area networks (the Internet). However, in most cases testpoints are either not located within the same local network or their direct communication is prohibited by firewalls. In theses cases the network monitoring tests can utilize the overlay network to tunnel the execution of tests through the overlay network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Time-synchronization:")," Some network tests measure a one-way delay (OWD) between two testing endpoints. This is facilitated by sending a timestamp of the current time from one testpoint to another an calculating the difference upon receiption. However, this is only possible as long as both the local clocks of the sending and receiving endpoints are synchronized. ")),(0,o.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connectivity"),(0,o.kt)("li",{parentName:"ul"},"Latency"),(0,o.kt)("li",{parentName:"ul"},"Bandwidth")),(0,o.kt)("h2",{id:"employed-technologies"},"Employed technologies"),(0,o.kt)("p",null,"The network monitoring service largely depends on the following already established software projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.perfsonar.net/"},"perfSONAR")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io"},"Kubernetes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kopf.readthedocs.io/en/stable/"},"Kopf operator framework")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom Resources"))))),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The following figure shows the architecture of perfSONAR:"),(0,o.kt)("figure",{align:"center"},(0,o.kt)("img",{alt:"perfSONAR architecture",src:"/img/perfsonar_architecture.png",width:"90%"}),(0,o.kt)("figcaption",null,"perfSONAR architecture.")),(0,o.kt)("p",null,"It consists of several central components which are deployed once in a cluster.\nThese central components are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web-interfaces for visualization: Graphs, MaDDash"),(0,o.kt)("li",{parentName:"ul"},"Web-interfaces for configuration of testing schedules: pSConfig WebAdmin"),(0,o.kt)("li",{parentName:"ul"},"Archiving server for test results: esmond"),(0,o.kt)("li",{parentName:"ul"},"pSConfig Server")),(0,o.kt)("p",null,"These central components are deployed once within the Kubernetes cluster by the cluster operator."),(0,o.kt)("p",null,"In addition, the lower part of the figure shows the software components which are running on each of the testpoints.\nThey are all packaged within a single container image."),(0,o.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://https://www.perfsonar.net//"},"perfSONAR"))))}d.isMDXComponent=!0}}]);