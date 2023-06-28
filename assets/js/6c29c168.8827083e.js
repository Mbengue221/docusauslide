"use strict";(self.webpackChunkxlide=self.webpackChunkxlide||[]).push([[206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={title:"Sp\xe9cifier une option",sidebar_label:"xlidejs - Les options (suite)",sidebar_position:2},a=void 0,l={unversionedId:"xlidejs/options/configure",id:"xlidejs/options/configure",title:"Sp\xe9cifier une option",description:"Pour ajouter une option a votre slide vous utiliserez la methode addOption de votre objet xlide.",source:"@site/docs/xlidejs/options/configure.mdx",sourceDirName:"xlidejs/options",slug:"/xlidejs/options/configure",permalink:"/docs/xlidejs/options/configure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/xlidejs/options/configure.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Sp\xe9cifier une option",sidebar_label:"xlidejs - Les options (suite)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"xlidejs - Les options",permalink:"/docs/xlidejs/options/"}},p={},s=[],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pour ajouter une option a votre slide vous utiliserez la methode ",(0,o.kt)("inlineCode",{parentName:"p"},"addOption")," de votre objet ",(0,o.kt)("inlineCode",{parentName:"p"},"xlide"),".\nElle prend comme arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," (le nom de l'option) et ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," la valeur \xe0 assigner: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"slide.addOption(option,value)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Par exemple si je veux changer la duree entre deux transitions:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"slide.addOption('interval',3)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Notez que ",(0,o.kt)("inlineCode",{parentName:"em"},"value")," a pour valeur par defaut true"),", qu'importe l'option specifie, voyez le code ci-dessous")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"slide.addOption('previews',true)\n")),(0,o.kt)("p",null,"Il peut etre ecrit ainsi"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"slide.addOption('previews')\n")),(0,o.kt)("p",null,"Je peux aussi sp\xe9cifier plusieurs options en meme temps"))}d.isMDXComponent=!0}}]);