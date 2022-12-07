"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[41556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55901:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Tars Plugin",keywords:["Tars"],description:"Tars Plugin"},l="1. Overview",o={unversionedId:"plugin-center/proxy/tars-plugin",id:"version-2.5.0/plugin-center/proxy/tars-plugin",isDocsHomePage:!1,title:"Tars Plugin",description:"Tars Plugin",source:"@site/versioned_docs/version-2.5.0/plugin-center/proxy/tars-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/tars-plugin",permalink:"/docs/plugin-center/proxy/tars-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/plugin-center/proxy/tars-plugin.md",version:"2.5.0",frontMatter:{title:"Tars Plugin",keywords:["Tars"],description:"Tars Plugin"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Spring Cloud Plugin",permalink:"/docs/plugin-center/proxy/spring-cloud-plugin"},next:{title:"Websocket Plugin",permalink:"/docs/plugin-center/proxy/websocket-plugin"}},s=[{value:"1.1 Plugin name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added since which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Configure in the client project",id:"23-configure-in-the-client-project",children:[]},{value:"2.4 Enable plugin",id:"24-enable-plugin",children:[]},{value:"2.5 Config plugin",id:"25-config-plugin",children:[{value:"2.5.1 Config plugin",id:"251-config-plugin",children:[]},{value:"2.5.2 Selector config",id:"252-selector-config",children:[]},{value:"2.5.3 Rule Config",id:"253-rule-config",children:[]},{value:"2.5.4 Metadata config",id:"254-metadata-config",children:[]}]},{value:"2.6 Examples",id:"26-examples",children:[{value:"2.6.1 Using ShenYu to access the Tars service",id:"261-using-shenyu-to-access-the-tars-service",children:[]}]}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-overview"},"1. Overview"),(0,i.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin name"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tars plugin")),(0,i.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate scenario"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Protocol conversion, a plugin that converts http protocol requests into the Tars framework protocol"),(0,i.kt)("li",{parentName:"ul"},"Service Load Balancing.")),(0,i.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Converting http protocol requests to Tars framework protocol.")),(0,i.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core Module ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-tars")),(0,i.kt)("li",{parentName:"ul"},"Core Class ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.tars.TarsPlugin"))),(0,i.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added since which shenyu version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2.3.0")),(0,i.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,i.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221206221707914",src:n(75286).Z})),(0,i.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-tars</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,i.kt)("h2",{id:"23-configure-in-the-client-project"},"2.3 Configure in the client project"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure the Tars configuration in application.yml.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    tars:\n      props:\n        contextPath: /tars\n        appName: tars\n        port: 21715\n        host: 192.168.41.103 # client IP\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"@ShenyuTarsService")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"@ShenyuTarsClient")," and  annotation to the interface.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@TarsServant("HelloObj")\n@ShenyuTarsService(serviceName = "ShenyuExampleServer.ShenyuExampleApp.HelloObj")\npublic class HelloServantImpl implements HelloServant {\n  \n    @Override\n    @ShenyuTarsClient("/hello")\n    public String hello(final int no, final String name) {\n        return String.format("hello no=%s, name=%s, time=%s", no, name, System.currentTimeMillis());\n    }\n}\n')),(0,i.kt)("h2",{id:"24-enable-plugin"},"2.4 Enable plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"tars")," set Status enabled.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"enable_tars_en",src:n(83797).Z})),(0,i.kt)("h2",{id:"25-config-plugin"},"2.5 Config plugin"),(0,i.kt)("h3",{id:"251-config-plugin"},"2.5.1 Config plugin"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"plugin_config_en",src:n(12407).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiSelectorHandle"),"\uff1aSet to enable multiple selector processing, multiple selector processing services can be configured in the selector list."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiRuleHandle"),"\uff1aSet to multiple rules processing, configure multiple processing rules in the rule list, it is recommended to configure as single rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"threadpool"),"\uff1aThere are five types of business thread pools: ",(0,i.kt)("inlineCode",{parentName:"li"},"fixed"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"eager"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cached"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"limited")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"shared"),". The first 4 types correspond to the thread pools officially provided by dubbo. Let's talk about ",(0,i.kt)("inlineCode",{parentName:"li"},"shared"),", as its name implies, ",(0,i.kt)("inlineCode",{parentName:"li"},"all proxy plugins")," share a ",(0,i.kt)("inlineCode",{parentName:"li"},"shared")," thread pool, the advantage of this is that it can reduce the number of thread pools, thereby reducing memory and improving resource utilization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"corethreads"),"\uff1aThe number of core threads in the business thread pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"threads"),"\uff1aThe maximum number of threads in the business thread pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queues"),"\uff1aThe length of the blocking queue of the business thread pool, 0 means ",(0,i.kt)("inlineCode",{parentName:"li"},"unbounded blocking queue"),".")),(0,i.kt)("h3",{id:"252-selector-config"},"2.5.2 Selector config"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Flow needs to be matched by selector.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"selector_config_en",src:n(66981).Z})),(0,i.kt)("p",null,"Automatically configure the selectors with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ShenyuTarsClient")," annotation."),(0,i.kt)("h3",{id:"253-rule-config"},"2.5.3 Rule Config"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After the traffic has been successfully matched by the selector, it will enter the rules for the final traffic matching.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rule_config_en",src:n(99620).Z})),(0,i.kt)("p",null,"Automatically configure the rules with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ShenyuTarsClient")," annotation."),(0,i.kt)("h3",{id:"254-metadata-config"},"2.5.4 Metadata config"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tars")," application client accesses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will be automatically registered, and can be viewed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," backend management system's basic configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"--\x3e")," metadata management, each ",(0,i.kt)("inlineCode",{parentName:"p"},"Tars")," interface method, will correspond to a metadata.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"metadata_config_en",src:n(47789).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Path: http request path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcExpand: other configurations of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tars")," interface, which support the ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," format."),(0,i.kt)("p",{parentName:"li"},"examples\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},'{"loadbalance":"hash","retries":3,"timeout":-1}')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loadbalance"),"\uff1aLoad balancing policy, currently supports roundRobin, random and hash."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retries"),"\uff1aNumber of retries to call client timeout failures."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),"\uff1aCalling the client's timeout time."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface: The fully qualified class name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tars")," interface.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcType\uff1aAuto-registration defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"Tars"),"."))),(0,i.kt)("h2",{id:"26-examples"},"2.6 Examples"),(0,i.kt)("h3",{id:"261-using-shenyu-to-access-the-tars-service"},"2.6.1 Using ShenYu to access the Tars service"),(0,i.kt)("h4",{id:"2611-preparation"},"2.6.1.1 Preparation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start ",(0,i.kt)("inlineCode",{parentName:"li"},"ShenYu Admin"),"."),(0,i.kt)("li",{parentName:"ul"},"Start ",(0,i.kt)("inlineCode",{parentName:"li"},"Shenyu Bootstrap"),".")),(0,i.kt)("h4",{id:"2612-plugin-config"},"2.6.1.2 Plugin Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"tars")," set Status enabled, And adjust the registry configuration as needed."),(0,i.kt)("li",{parentName:"ul"},"Adjust to the actual situation ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-tars"},"shenyu-examples-tars")," application.yml configuration in the project and start it.")),(0,i.kt)("h4",{id:"2626-request-service-and-check-result"},"2.6.2.6 Request service and check result"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"check_request_zh",src:n(5335).Z})),(0,i.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"tars")," set Status disable.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"close_tars_en",src:n(43225).Z})))}u.isMDXComponent=!0},5335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/check_request_zh-bbfa76e720e865629981ab1e65739eeb.png"},43225:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/close_tars_en-17311011e6bc29d7156f65ec9073e859.png"},83797:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable_tars_en-adbf5589ad2bbb3d15136b87ddc0398c.png"},47789:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metadata_config_en-55b4de23e1b38626a9b401003ae6c018.png"},12407:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plugin_config_en-bdb93d3db24b39ce654594ab25e41d0e.png"},75286:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/produce_chart_en-2efaa216b9aca95860902c4e62dac10e.png"},99620:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rule_config_en-f235fadf861a283cb385c641139ab56a.png"},66981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selector_config_en-480ebdaf7d31b5e65c74225ba58424a3.png"}}]);