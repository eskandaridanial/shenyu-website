"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[10007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94140:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Http \u793a\u4f8b",sidebar_position:1},l="HTTP \u65b9\u5f0f\u6ce8\u518c ShenYu \u7f51\u5173",i={unversionedId:"http",id:"version-1.0.0/http",isDocsHomePage:!1,title:"Http \u793a\u4f8b",description:"ASP.NET Core \u9879\u76ee",source:"@site/i18n/zh/docusaurus-plugin-content-docs-shenyuClientDotnet/version-1.0.0/http.md",sourceDirName:".",slug:"/http",permalink:"/zh/shenyuClientDotnet/http",version:"1.0.0",lastUpdatedBy:"Bird",lastUpdatedAt:1679639805,formattedLastUpdatedAt:"2023/3/24",sidebarPosition:1,frontMatter:{title:"Http \u793a\u4f8b",sidebar_position:1},sidebar:"version-1.0.0/tutorialSidebar",next:{title:"Zookeeper \u793a\u4f8b",permalink:"/zh/shenyuClientDotnet/zookeeper"}},p=[{value:"ASP.NET Core \u9879\u76ee",id:"aspnet-core-\u9879\u76ee",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-\u65b9\u5f0f\u6ce8\u518c-shenyu-\u7f51\u5173"},"HTTP \u65b9\u5f0f\u6ce8\u518c ShenYu \u7f51\u5173"),(0,a.kt)("h2",{id:"aspnet-core-\u9879\u76ee"},"ASP.NET Core \u9879\u76ee"),(0,a.kt)("p",null,"\u5bf9\u4e8e ASP.NET Core \u9879\u76ee\uff0c\u6211\u4eec\u53ef\u4ee5\u53c2\u8003\u8fd9\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-client-dotnet/tree/main/examples/AspNetCoreExample"},"example code"),"\u3002\u4f60\u9700\u8981\u505a\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06 ShenYu \u52a0\u5165\u5230 ASP.NET Core \u9879\u76ee\u4f9d\u8d56\u4e2d\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet add package <todo-shenyu-asp.net-core package>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Startup.ConfigureServices")," \u4e2d\u52a0\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"ShenyuRegister")," service\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},"public void ConfigureServices(IServiceCollection services)\n{\n    ...\n    services.AddShenyuRegister(this.Configuration);\n    ...\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"appsettings.json")," \u4e2d\u914d\u7f6e http \u4fe1\u606f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Shenyu": {\n    "Register": {\n      "RegisterType": "http",\n      "ServerList": "http://localhost:9095",\n      "Props": {\n        // your admin user name\n        "UserName": "admin",\n        // your admin password\n        "Password": "123456"\n      }\n    },\n    "Client": {\n      "AppName": "dotnet-example",\n      "ContextPath": "/dotnet",\n      "IsFull": false,\n      "ClientType": "http"\n    }\n  }\n}\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5f00\u542f\u5141\u8bb8\u901a\u8fc7 ip \u8bbf\u95ee")),(0,a.kt)("p",null,"\u5f53\u8fd0\u884c ASP.NET Core \u9879\u76ee\u65f6\uff0c\u9ed8\u8ba4\u53ea\u80fd\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," \u8bbf\u95ee\u3002\u60f3\u8981\u5141\u8bb8 ip \u8bbf\u95ee\uff0c\u9700\u8981\u8bbe\u7f6e\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"ASPNETCORE_URLS")," \u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export ASPNETCORE_URLS=http://+:5000\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8 application")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# build project\ndotnet build --configuration Release\n# start project\ncd examples/AspNetCoreExample/bin/Release/netcoreapp3.1\ndotnet AspNetCoreExample.dll\n")),(0,a.kt)("p",null,"\u81f3\u6b64\uff0c\u4f60\u5df2\u7ecf\u5b8c\u6210\u6240\u6709\u7684\u6b65\u9aa4\uff0c\u53ef\u4ee5\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u9875\u9762\u770b\u5230\u8fd9\u4e9b API \u5df2\u7ecf\u6ce8\u518c\u5230 ShenYu."))}u.isMDXComponent=!0}}]);