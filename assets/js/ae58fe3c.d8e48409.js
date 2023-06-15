"use strict";(self.webpackChunkOPS245=self.webpackChunkOPS245||[]).push([[430],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3004:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(3117),a=(r(7294),r(3905));const i={id:"bash-shell-scripting-tips",title:"Bash Shell Scripting Tips",sidebar_position:6,description:"Bash Shell Scripting Tips"},o="Bash Shell Scripting Tips",s={unversionedId:"C-ExtraResources/bash-shell-scripting-tips",id:"C-ExtraResources/bash-shell-scripting-tips",title:"Bash Shell Scripting Tips",description:"Bash Shell Scripting Tips",source:"@site/docs/C-ExtraResources/bash-shell-scripting-tips.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/bash-shell-scripting-tips",permalink:"/OPS245/C-ExtraResources/bash-shell-scripting-tips",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS245/tree/main/docs/C-ExtraResources/bash-shell-scripting-tips.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"bash-shell-scripting-tips",title:"Bash Shell Scripting Tips",sidebar_position:6,description:"Bash Shell Scripting Tips"},sidebar:"courseNotesSidebar",previous:{title:"Python Scripting Tips",permalink:"/OPS245/C-ExtraResources/python-scripting-tips"}},l={},c=[{value:"For Lab 5 Investigation 1 Part 2",id:"for-lab-5-investigation-1-part-2",level:2},{value:"Using awk to Manipulate Text",id:"using-awk-to-manipulate-text",level:3},{value:"Crontab (Chronograph Tables)",id:"crontab-chronograph-tables",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bash-shell-scripting-tips"},"Bash Shell Scripting Tips"),(0,a.kt)("h2",{id:"for-lab-5-investigation-1-part-2"},"For Lab 5 Investigation 1 Part 2"),(0,a.kt)("h3",{id:"using-awk-to-manipulate-text"},"Using awk to Manipulate Text"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Very useful command for report generation, text file repair, or text and floating-point decimal manipulation. The command mimics a C program, with braces ",(0,a.kt)("strong",{parentName:"li"},"{ }")," that surround the action to perform based on records from a database file matching either test conditions, regular expressions, etc. Fields appear as numbers with $."),(0,a.kt)("li",{parentName:"ul"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"awk '{print}' data-file.txt\nawk -F\";\" '{print $5,$3}' data-file.txt\nawk -F\",\" '$4 >= 10000 {print $1, $2}' salary.txt\n")),(0,a.kt)("h3",{id:"crontab-chronograph-tables"},"Crontab (Chronograph Tables)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Used to automatically run (as opposed to manually run) scripts, programs, or commands. There are many tables (files), but the main one is: ",(0,a.kt)("strong",{parentName:"li"},"/etc/cron"),". The ",(0,a.kt)("strong",{parentName:"li"},"crontab")," command can be used to ",(0,a.kt)("em",{parentName:"li"},"list"),", ",(0,a.kt)("em",{parentName:"li"},"create"),", ",(0,a.kt)("em",{parentName:"li"},"modify")," or ",(0,a.kt)("em",{parentName:"li"},"remove")," scheduled jobs in the file."),(0,a.kt)("li",{parentName:"ul"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crontab -e -u user # create/modify\ncrontab -r -u user-name # remove specific user's crontab\ncrontab -l -u username #List current schedules\n")))}u.isMDXComponent=!0}}]);