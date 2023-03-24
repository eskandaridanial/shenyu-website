"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[98920],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),k=o,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=k;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},92323:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"Websocket\u670d\u52a1\u63a5\u5165",description:"Websocket\u670d\u52a1\u63a5\u5165"},i=void 0,s={unversionedId:"user-guide/proxy/websocket-proxy",id:"version-2.5.1/user-guide/proxy/websocket-proxy",isDocsHomePage:!1,title:"Websocket\u670d\u52a1\u63a5\u5165",description:"Websocket\u670d\u52a1\u63a5\u5165",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/user-guide/proxy/websocket-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/websocket-proxy",permalink:"/zh/docs/user-guide/proxy/websocket-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/user-guide/proxy/websocket-proxy.md",version:"2.5.1",frontMatter:{title:"Websocket\u670d\u52a1\u63a5\u5165",description:"Websocket\u670d\u52a1\u63a5\u5165"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Tars\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/user-guide/proxy/tars-proxy"},next:{title:"Context Path\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/http-process/contextpath-plugin"}},p=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 Websocket \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-websocket-\u63d2\u4ef6",children:[]},{value:"Websocket\u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"websocket\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],c={toc:p},l="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b64\u7bc7\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"Websocket")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Websocket")," \u63d2\u4ef6\u6765\u63a5\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"Websocket"),"\u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f ",(0,o.kt)("inlineCode",{parentName:"p"},"Websocket"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Websocket"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,o.kt)("a",{parentName:"p",href:"../quick-start/quick-start-websocket"},"Websocket\u5feb\u901f\u5f00\u59cb")," \u3002"),(0,o.kt)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,o.kt)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,o.kt)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-websocket-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 Websocket \u63d2\u4ef6"),(0,o.kt)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Websocket"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff0c\u9ed8\u8ba4\u5df2\u5f15\u5165\u8be5\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!--shenyu websocket plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-websocket</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u91cd\u542f\u4f60\u7684\u7f51\u5173\u670d\u52a1\u3002")),(0,o.kt)("h2",{id:"websocket\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"Websocket\u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u793a\u4f8b\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-websocket"},"shenyu-examples-websocket"),"\uff0c\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"annotation websocket"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"spring native websocket"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"spring reactive websocket"),"\u4e09\u79cd\u5b9e\u73b0\u65b9\u5f0f\u7684\u793a\u4f8b")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u7531 ",(0,o.kt)("inlineCode",{parentName:"li"},"Websocket"),"\u6784\u5efa\u7684\u670d\u52a1\u4e2d\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-websocket</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http\n    serverLists: http://localhost:9095 # shenyu-admin\u670d\u52a1\u7aef\u53e3\n    props:\n      username: admin\n      password: 123456\n  client:\n    websocket:\n      props:\n        contextPath: /ws-annotation\n        appName: ws-annotation\n        port: 8001 # \u9700\u8981\u548c\u670d\u52a1\u7aef\u53e3\u4fdd\u6301\u4e00\u81f4\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"Websocket"),"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0\u7c7b\u4e0a\u52a0\u4e0a ",(0,o.kt)("inlineCode",{parentName:"li"},"@ShenyuSpringWebSocketClient")," \u6ce8\u89e3\uff0c\u542f\u52a8\u4f60\u7684\u670d\u52a1\uff0c\u6210\u529f\u6ce8\u518c\u540e\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"\u7ba1\u7406\u7cfb\u7edf\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"li"},"\u63d2\u4ef6\u5217\u8868 -> Proxy -> Websocket"),"\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002")),(0,o.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@ShenyuSpringWebSocketClient("/myWs")\n@ServerEndpoint("/myWs")\npublic class WsServerEndpoint {\n    @OnOpen\n    public void onOpen(final Session session) {\n        LOG.info("connect successful");\n    }\n\n    @OnClose\n    public void onClose(final Session session) {\n        LOG.info("connect closed");\n    }\n\n    @OnMessage\n    public String onMsg(final String text) {\n        return "server send message\uff1a" + text;\n    }\n}\n')),(0,o.kt)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,o.kt)("p",null,"\u9700\u8981\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"ws")," \u534f\u8bae\u6765\u8bf7\u6c42\u4f60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Websocket"),"\u670d\u52a1\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u914d\u7f6e\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"contextPath"),"\u3002\u6bd4\u5982\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://localhost:9195/ws-annotation/myWs"),"\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u6b63\u5e38\u5efa\u7acb\u8fde\u63a5\u53d1\u9001\u548c\u63a5\u6536\u6d88\u606f\u3002"))}u.isMDXComponent=!0}}]);