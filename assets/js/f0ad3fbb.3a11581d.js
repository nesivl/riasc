/*! For license information please see f0ad3fbb.3a11581d.js.LICENSE.txt */
(self.webpackChunkriasc=self.webpackChunkriasc||[]).push([[8612],{6383:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var c=n(7462),r=n(7294),s=n(2434),o=n(8084),i=n(9548),u=n(2933);var a=function(e){var t=(0,i.If)().isDarkTheme,n=(0,o.usePluginData)("docusaurus-theme-redoc"),c=n.lightTheme,s=n.darkTheme,a=n.redocOptions,l=t?s:c,p=e.spec,d=e.specUrl,f=(0,r.useMemo)((function(){return p?new u.AppStore(p,d,Object.assign({},a,{theme:l})):null}),[p,d,a,l]);return r.createElement("div",{className:"redocusaurus"},f?r.createElement(u.Redoc,{store:f}):r.createElement(u.RedocStandalone,{spec:p,specUrl:d,options:Object.assign({},a,{theme:l})}))};var l=function(e){var t=e.layoutProps,n=e.spec,o=t||{},i=o.title,u=void 0===i?"API Docs":i,l=o.description,p=void 0===l?"Open API Reference Docs for the API":l,d="object"===n.type?n.content:void 0,f="url"===n.type?n.content:void 0;return r.createElement(s.Z,(0,c.Z)({},t,{title:u,description:p}),r.createElement(a,{spec:d,specUrl:f||n.specUrl}))}},5101:function(){},2116:function(){},3197:function(){}}]);