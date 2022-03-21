"use strict";(self.webpackChunkriasc=self.webpackChunkriasc||[]).push([[7522],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60228:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={id:"rpi-image",title:"Create SD Image for Raspberry Pi Agent",sidebar_label:"RPi Image",slug:"/development/rpi-image"},p=void 0,c={unversionedId:"development/rpi-image",id:"development/rpi-image",title:"Create SD Image for Raspberry Pi Agent",description:"This page documents the procedure for creating a Raspberry Pi SD card image which can be used to provising a new RIasC node.",source:"@site/docs/development/rpi-image.md",sourceDirName:"development",slug:"/development/rpi-image",permalink:"/docs/development/rpi-image",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/development/rpi-image.md",tags:[],version:"current",frontMatter:{id:"rpi-image",title:"Create SD Image for Raspberry Pi Agent",sidebar_label:"RPi Image",slug:"/development/rpi-image"},sidebar:"docs",previous:{title:"Demo 3",permalink:"/docs/examples/erigrid2/demo3"},next:{title:"\ud83d\udcda Further Reading",permalink:"/docs/further-reading"}},s={},u=[{value:"Steps",id:"steps",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page documents the procedure for creating a Raspberry Pi SD card image which can be used to provising a new RIasC node."),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the required dependencies",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Debian/Ubuntu: ",(0,a.kt)("inlineCode",{parentName:"li"},"apt-get install wget libguestfs-tools")),(0,a.kt)("li",{parentName:"ul"},"Fedora/CentOS/RHEL: ",(0,a.kt)("inlineCode",{parentName:"li"},"dnf install libguestfs-tools wget zip")))),(0,a.kt)("li",{parentName:"ol"},"Clone the riasc-provisioning Git repository:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/ERIGrid2/riasc-provisioning")))),(0,a.kt)("li",{parentName:"ol"},"Create image:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd riasc-provisioning/rpi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bash create_image.sh"))))))}d.isMDXComponent=!0}}]);