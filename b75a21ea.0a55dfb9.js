(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,d=s["".concat(l,".").concat(b)]||s[b]||f[b]||a;return r?o.a.createElement(d,c(c({ref:t},u),{},{components:r})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(112)),l={slug:"hello-world",title:"Hello",author:"Steffen Vogel",author_title:"Maintainer of RIasC",author_url:"https://www.steffenvogel.de",author_image_url:"https://avatars.githubusercontent.com/u/285829?s=460&v=4",tags:["hello"]},c={permalink:"/blog/hello-world",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/blog/blog/2021-02-09-hello-world.md",source:"@site/blog/2021-02-09-hello-world.md",description:"Welcome to this blog. This is the new website of the RIasC project development in task JRA2.2 of the European H2020 project ERIGrid 2.0.",date:"2021-02-09T00:00:00.000Z",tags:[{label:"hello",permalink:"/blog/tags/hello"}],title:"Hello",readingTime:.18,truncated:!1},i=[],u={toc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to this blog. This is the new website of the RIasC project development in task JRA2.2 of the ",Object(a.b)("a",{parentName:"p",href:"https://erigrid2.eu"},"European H2020 project ERIGrid 2.0"),"."),Object(a.b)("p",null,"The documentation is currently under construction. Come back later for more details!"))}p.isMDXComponent=!0}}]);