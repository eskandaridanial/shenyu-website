"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[816],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,d=m["".concat(u,".").concat(h)]||m[h]||c[h]||r;return a?n.createElement(d,l(l({ref:t},s),{},{components:a})):n.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3909:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:3,title:"Selector Detailed Explanation",keywords:["soul"],description:"detailed explanation of selector and rule"},l=void 0,o={unversionedId:"admin/selector-and-rule",id:"version-2.3.0-Legacy/admin/selector-and-rule",isDocsHomePage:!1,title:"Selector Detailed Explanation",description:"detailed explanation of selector and rule",source:"@site/versioned_docs/version-2.3.0-Legacy/admin/selector-and-rule.md",sourceDirName:"admin",slug:"/admin/selector-and-rule",permalink:"/docs/2.3.0-Legacy/admin/selector-and-rule",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/admin/selector-and-rule.md",version:"2.3.0-Legacy",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Selector Detailed Explanation",keywords:["soul"],description:"detailed explanation of selector and rule"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Plugin Handle Explanation",permalink:"/docs/2.3.0-Legacy/admin/plugin-handle-explanation"},next:{title:"Environment Setup",permalink:"/docs/2.3.0-Legacy/users-guide/soul-set-up"}},u=[{value:"Features",id:"features",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Selector",id:"selector",children:[]},{value:"Rule",id:"rule",children:[]},{value:"Condition Explanation",id:"condition-explanation",children:[]}],p={toc:u};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Selector and rule are the key point of soul gateway, you can manage any request with it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This chapter is mainly focus on the concepts of selector and rule and how to use it."))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One plugin has many selector and a selector has many rules, selector is the first filter of request, and the rule is the final filter."),(0,i.kt)("li",{parentName:"ul"},"Please consider this, it would be perfect when the plugin executes the request until it reached the config value."),(0,i.kt)("li",{parentName:"ul"},"Selector and rule are designed to execute only when the request meet the specific condition."),(0,i.kt)("li",{parentName:"ul"},"Please refer to the previous data structure ",(0,i.kt)("a",{parentName:"li",href:"../design/database-design"},"database design"),".")),(0,i.kt)("h2",{id:"selector"},"Selector"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/selector.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"selector detailed explanation\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"name\uff1acreate your selector with a distinguish name."),(0,i.kt)("li",{parentName:"ul"},"type\uff1acustom flow is customized request, full flow is full request. customized request will be handled by the conditions as below, while  full request won't. "),(0,i.kt)("li",{parentName:"ul"},"match method: you can combine these conditions with 'and' , 'or' operators."),(0,i.kt)("li",{parentName:"ul"},"condition\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"uri: filter request with uri method and support fuzzy matching (/**)."),(0,i.kt)("li",{parentName:"ul"},"header: filter request with request header."),(0,i.kt)("li",{parentName:"ul"},"query: filter request with query string."),(0,i.kt)("li",{parentName:"ul"},"ip: filter request with your real ip."),(0,i.kt)("li",{parentName:"ul"},"host: filter request with your real host."),(0,i.kt)("li",{parentName:"ul"},"post: not recommend to use."),(0,i.kt)("li",{parentName:"ul"},"condition match:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"match : fuzzy string matching\uff0crecommend to combine with uri\uff0csupport restful matching.\uff08/test/**)."),(0,i.kt)("li",{parentName:"ul"},"= : if the values are the same, then they match."),(0,i.kt)("li",{parentName:"ul"},"regEx : regex matching\uff0cmatch characters in regex expression."),(0,i.kt)("li",{parentName:"ul"},"like : string fuzzy matching."))))),(0,i.kt)("li",{parentName:"ul"},"open option\uff1aonly work with enabled."),(0,i.kt)("li",{parentName:"ul"},"print log\uff1ait will print the matching log with the open option enabled."),(0,i.kt)("li",{parentName:"ul"},"execution order\uff1athe smaller will have high priorty to execute among multi-selectors."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the above picture means: when the prefix of the request uri is ",(0,i.kt)("inlineCode",{parentName:"p"},"/test")," and the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"module")," in",(0,i.kt)("inlineCode",{parentName:"p"},"header")," is",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", it will redirect to this service ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1:8080"),".   ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"selector advice : combine ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," conditon and ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," prefix\uff08/contextPath\uff09as the first request filter."))),(0,i.kt)("h2",{id:"rule"},"Rule"),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/rule.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"when the request was passed by the seletor, then it will be processed by the rule, the final filter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rule is the final confirmation about how to execute request logically.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rule detailed explanation\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"name\uff1acreate your rule with a distinguish name."),(0,i.kt)("li",{parentName:"ul"},"match method: you can combine these conditions with 'and' , 'or' operators."),(0,i.kt)("li",{parentName:"ul"},"condition\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"uri: filter request with uri method and support fuzzy matching (/**)."),(0,i.kt)("li",{parentName:"ul"},"header: filter request with request header."),(0,i.kt)("li",{parentName:"ul"},"query: filter request with query string."),(0,i.kt)("li",{parentName:"ul"},"ip: filter request with your real ip."),(0,i.kt)("li",{parentName:"ul"},"host: filter request with your real host."),(0,i.kt)("li",{parentName:"ul"},"post: not recommend to use."),(0,i.kt)("li",{parentName:"ul"},"condition match:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"match : fuzzy string matching\uff0crecommend to combine with uri\uff0csupport restful matching.\uff08/test/**\uff09"),(0,i.kt)("li",{parentName:"ul"},"= : if the values are the same, then they match."),(0,i.kt)("li",{parentName:"ul"},"regEx : regex matching\uff0cmatch characters in regex expression."),(0,i.kt)("li",{parentName:"ul"},"like : string fuzzy matching."))))),(0,i.kt)("li",{parentName:"ul"},"open option\uff1aonly work with enabled."),(0,i.kt)("li",{parentName:"ul"},"print log\uff1ait will print the matching log with the open option enabled."),(0,i.kt)("li",{parentName:"ul"},"execution order\uff1athe smaller will have high priorty to execute among multi-rules."),(0,i.kt)("li",{parentName:"ul"},"handle: different plugin has different execution method, pls refer to the specific one."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"above picture means: when the request ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," equals to ",(0,i.kt)("inlineCode",{parentName:"p"},"/http/order/save"),", it will execute based on this rule\uff0cload strategy is ",(0,i.kt)("inlineCode",{parentName:"p"},"random"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"combine selector means \uff1awhen the request ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"/http/order/save"),", it will be redicted to ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1:8080")," by ",(0,i.kt)("inlineCode",{parentName:"p"},"random")," method.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rule advice: combine ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," condition with ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," the real ",(0,i.kt)("inlineCode",{parentName:"p"},"uri path")," condition as the final filter.\n"))),(0,i.kt)("h2",{id:"condition-explanation"},"Condition Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"uri matching \uff08recommend\uff09"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"uri matching is based on your request uri, the frontend won't change anything before accessing the gateway.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," filter method is the same with",(0,i.kt)("inlineCode",{parentName:"p"},"springmvc")," fuzzy matching.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"in selector\uff0cwe recommend to match with the prefix of uri, and use the specific path in rule.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"when changing the match method, the matching field name can be filled randomly, but make sure the match value must be correct.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"header matching"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"header matches with your ",(0,i.kt)("inlineCode",{parentName:"li"},"http")," request header value."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"query matching"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it matches the query string in your uri, such as: /test?a=1&&b=2."),(0,i.kt)("li",{parentName:"ul"},"so you can add a new condition, choose query method: a   =  1."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ip matching"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"it matches the ip of the http caller.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"especially in the waf plugin, if you find some ip is unsafe, you can add a match condition with this ip, then it can't access any more.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"if you use nginx proxy before soul, you can get the right ip with refering to ",(0,i.kt)("a",{parentName:"p",href:"../developer-guide/custom-parsing-ip-and-host"},"parsing-ip-and-host"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"host matching"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it matches the host of http caller."),(0,i.kt)("li",{parentName:"ul"},"especially in waf plugin, if you find some host is unsafe, you can add a match condition with this host, then it can't access any more."),(0,i.kt)("li",{parentName:"ul"},"if you use nginx proxy before soul, you can get the right ip with refering to ",(0,i.kt)("a",{parentName:"li",href:"../developer-guide/custom-parsing-ip-and-host"},"parsing-ip-and-host")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"post matching"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"not recommend to use.")))))}s.isMDXComponent=!0}}]);