"use strict";(self.webpackChunkOPS245=self.webpackChunkOPS245||[]).push([[27],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={id:"bash-shell-tips",title:"Bash Shell Tips",sidebar_position:3,description:"TBD"},s="Bash Shell Tips",o={unversionedId:"C-ExtraResources/bash-shell-tips",id:"C-ExtraResources/bash-shell-tips",title:"Bash Shell Tips",description:"TBD",source:"@site/docs/C-ExtraResources/bash-shell-tips.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/bash-shell-tips",permalink:"/OPS245-C7/C-ExtraResources/bash-shell-tips",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS245-C7/tree/main/docs/C-ExtraResources/bash-shell-tips.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"bash-shell-tips",title:"Bash Shell Tips",sidebar_position:3,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Scripting Exercise",permalink:"/OPS245-C7/C-ExtraResources/scripting-exercise"},next:{title:"Bash Shell Reference Guide",permalink:"/OPS245-C7/C-ExtraResources/bash-shell-reference-guide"}},l={},p=[{value:"For Lab 2 - Investigation 3 Part 3",id:"for-lab-2---investigation-3-part-3",level:2},{value:"Data Input",id:"data-input",level:3},{value:"Mathematical Expressions",id:"mathematical-expressions",level:3},{value:"For Lab 3 - Investigation 3 Part 3",id:"for-lab-3---investigation-3-part-3",level:2},{value:"Using sed to Manipulate Text",id:"using-sed-to-manipulate-text",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bash-shell-tips"},"Bash Shell Tips"),(0,r.kt)("h2",{id:"for-lab-2---investigation-3-part-3"},"For Lab 2 - Investigation 3 Part 3"),(0,r.kt)("h3",{id:"data-input"},"Data Input"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A shell can obtain data from a number of methods: ",(0,r.kt)("strong",{parentName:"li"},"reading input files"),", using ",(0,r.kt)("strong",{parentName:"li"},"arguments when issuing command")," (positional parameters), or ",(0,r.kt)("strong",{parentName:"li"},"prompting for data to store in a variable"),". The later method can be accomplished by using the ",(0,r.kt)("strong",{parentName:"li"},"read")," command."),(0,r.kt)("li",{parentName:"ul"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'read -p "Enter your name: " userName.\n')),(0,r.kt)("h3",{id:"mathematical-expressions"},"Mathematical Expressions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the bash shell, data is stored in variable as text, not other data types (ints, floats, chars, etc) like in compiled programs like C or Java. In order to have a shell perform ",(0,r.kt)("strong",{parentName:"li"},"mathematical operations"),", number or variable need to be surrounded by two sets of parenthesis ",(0,r.kt)("strong",{parentName:"li"},"((..))")," in order to convert a number stored as text to a binary number."),(0,r.kt)("li",{parentName:"ul"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'var1=5;var2=10\necho "$var1 + $var2 = $((var1+var2))"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": shell does not perform floating point calculations (like ",(0,r.kt)("strong",{parentName:"p"},"5/10"),"). Instead, other commands like ",(0,r.kt)("strong",{parentName:"p"},"awk")," or ",(0,r.kt)("strong",{parentName:"p"},"bc")," would be required for floating point calculations (decimals)"),(0,r.kt)("h2",{id:"for-lab-3---investigation-3-part-3"},"For Lab 3 - Investigation 3 Part 3"),(0,r.kt)("h3",{id:"using-sed-to-manipulate-text"},"Using sed to Manipulate Text"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Linux command ",(0,r.kt)("strong",{parentName:"li"},"sed")," stands for ",(0,r.kt)("strong",{parentName:"li"},"S"),"treaming ",(0,r.kt)("strong",{parentName:"li"},"Ed"),'itor which is an effective way to manipulate a text file, output sent from a command, or from within a "here document". This command can manipulate matching text on a variety of criteria (such as ',(0,r.kt)("strong",{parentName:"li"},"line number(s)"),", ",(0,r.kt)("strong",{parentName:"li"},"regular expression match"),", etc). Commands can then be used for manipulation such as ",(0,r.kt)("strong",{parentName:"li"},"omitting, printing, substituting, adding"),", and ",(0,r.kt)("strong",{parentName:"li"},"inserting")," text."),(0,r.kt)("li",{parentName:"ul"},"The sed option ",(0,r.kt)("strong",{parentName:"li"},"-n")," suppresses display of text so the print (",(0,r.kt)("strong",{parentName:"li"},"p"),") command can be used; otherwise, the text will be displayed (with edits via the sed command instructions)."),(0,r.kt)("li",{parentName:"ul"},"Results of text manipulation with sed can be stored in a variable using command substitution, or redirected to a file. ",(0,r.kt)("strong",{parentName:"li"},"NEVER redirect the stdout from a sed command to the same input file (or the input file will be destroyed)!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sed 's/|/ /g' <<+\nI|like|weekends!\n+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sed 's/$/\\n/g' <<+\nThis text\nshould be\ndouble-spaced!\n+\n")))}c.isMDXComponent=!0}}]);