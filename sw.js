(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"352c92bb5b1e7dfa515431a6d550475a","url":"404.html"},{"revision":"064916a8fe85308159e06e98fbb16d9d","url":"A-Labs/lab1.html"},{"revision":"888a3e53f6dec4516bdfd5d9ab64760a","url":"A-Labs/lab2.html"},{"revision":"7df5d0050cc9c145f1da7dde779ef6fe","url":"A-Labs/lab3.html"},{"revision":"aac68ca5a6563220ac3a899b1d2ffa0a","url":"A-Labs/lab4.html"},{"revision":"4b3228f3fa9a2389a145c6497c6dc1e0","url":"A-Labs/lab5.html"},{"revision":"b19ed9736127ecc1a038427c3b6df412","url":"A-Labs/lab6.html"},{"revision":"7722bb6f660a8e3680253ffa50389bdc","url":"A-Labs/lab7.html"},{"revision":"e6b1433b179b928c674c55aa791f4222","url":"A-Labs/lab8.html"},{"revision":"4a30e0992a6a9401f7f666bf4fc5df74","url":"assets/css/styles.099fe1a9.css"},{"revision":"39dfb9be315c0e2fae001a49615261ea","url":"assets/js/131.d5164acf.js"},{"revision":"a556981206fb551ecc1d86b8f0e5c3fe","url":"assets/js/17896441.17a7c943.js"},{"revision":"b4c3a37db4a497f1c60a97757abca650","url":"assets/js/1be78505.9c6640f7.js"},{"revision":"0fd4a8c2dcc45c622da6a574bc1c7071","url":"assets/js/20d773fc.931b9494.js"},{"revision":"ecf55527f63f107da04bb7ab4c56f295","url":"assets/js/283.7e2ddd41.js"},{"revision":"6d632b41ed7dbf18fe6ee29199bb660e","url":"assets/js/30eb2287.ed2f27ed.js"},{"revision":"a185b1d8534b4a6025f0a3916e4153a8","url":"assets/js/33746618.220fe76c.js"},{"revision":"ca1a903ad185c58e5dfaee3daebb72da","url":"assets/js/539.ad0f3fc7.js"},{"revision":"f6b2c51eea286908437ce7098affcfa8","url":"assets/js/59490aaf.0ebceda5.js"},{"revision":"f0eab2fd79a7f9e5e64932e9888d3542","url":"assets/js/5f827bca.0527734c.js"},{"revision":"487969b31de675f48917e6e81edce634","url":"assets/js/61c5f690.14a9e06b.js"},{"revision":"e4d47b2ef55b20959f6963dcf801f8ce","url":"assets/js/66689c68.c21fb488.js"},{"revision":"ddc22ce24ae3f2b47f911223d49cd69d","url":"assets/js/7ca83706.fca29c70.js"},{"revision":"e84b3169727de7e8579134238aedae8f","url":"assets/js/8661af7e.f91323de.js"},{"revision":"a719f0e986c14a4186eccdb1cbf4c563","url":"assets/js/9310cf6f.4cb87d2d.js"},{"revision":"1b5eeadf0edb59d866048e807cc777e1","url":"assets/js/935f2afb.96c1dfc3.js"},{"revision":"f7d00fc444b530c9620000ec2d2ca87c","url":"assets/js/972.7ed9e175.js"},{"revision":"23f120dc2e2ce87610c44b3e998b0311","url":"assets/js/9af68f33.038ee3e8.js"},{"revision":"b4f31620824d3e23e010d19c1d158fd6","url":"assets/js/ae58fe3c.1abe5418.js"},{"revision":"4e683969f0f937612382bdfcefee6d6d","url":"assets/js/b5a834d3.781bbe6a.js"},{"revision":"dea9d9c46b142abe2314715bde08131d","url":"assets/js/b9232272.b7a45598.js"},{"revision":"10e35c5b251d313fe23d19991328489a","url":"assets/js/c0e20c00.e48205bf.js"},{"revision":"4eada0a633d36e9695de4712bd3d58e3","url":"assets/js/c396239e.368f42b8.js"},{"revision":"b7a1add01ea019e623ed58ba687b2e73","url":"assets/js/ea934244.077b9d6c.js"},{"revision":"a68bee1b7ebe31b688cc1f14ce9b0336","url":"assets/js/eb6a5da1.016cd018.js"},{"revision":"c640ac01fbc898b2dfbd082b7f58e6c0","url":"assets/js/ebee8391.7b77f5d9.js"},{"revision":"333547b4b151445883ba4e6cf4db8f61","url":"assets/js/main.dd2dd023.js"},{"revision":"77d7a9665b8a8077d253aada54bf0b39","url":"assets/js/runtime~main.27764e72.js"},{"revision":"b1be5833d51f8626b866f89f44e4a112","url":"B-Assignments/assignment1.html"},{"revision":"897ffefcf5f3773ea4984bce41902e20","url":"B-Assignments/assignment2.html"},{"revision":"7b27e79caf356f6bb904dbf7f661f3ee","url":"C-ExtraResources/bash-shell-reference-guide.html"},{"revision":"807deb151badf9673de07a5b92de1c9b","url":"C-ExtraResources/bash-shell-scripting-tips.html"},{"revision":"fe6f18b2be2f7555c789cb171a42f319","url":"C-ExtraResources/bash-shell-tips.html"},{"revision":"9693dbcd6159a92eeaaf3cad0df4a493","url":"C-ExtraResources/python-scripting-tips.html"},{"revision":"adfbfbaeb9c65cc27860a14c62f9d5ca","url":"C-ExtraResources/scripting-exercise.html"},{"revision":"d7ffc3b50908905dc88ce3ad3d697fbe","url":"C-ExtraResources/tips.html"},{"revision":"c1b7122352c0ab2549294f18f8bb4ce4","url":"index.html"},{"revision":"2524df02c6e551be5aef857403777080","url":"manifest.json"},{"revision":"389e1a93620c19c8b29691828b80bce4","url":"weekly-schedule.html"},{"revision":"0574d8c5f844066b1a6c64e8721802cb","url":"assets/images/Add_virtual_disk-9ea3ce4c1b80d74a3e5d06530de872f3.png"},{"revision":"d710471700766a0a27fe0577e10a7df8","url":"assets/images/Andrew-afbdf155316d22a98680668976929d4b.jpg"},{"revision":"c74c206538eae814ebdc9bd4485caf1f","url":"assets/images/Ataur-RTN-09bf4971c2634af1200294f214d1cbfc.jpg"},{"revision":"cf5d8d13f8f7d0a37ef76d8ea74d4571","url":"assets/images/Chains-85c8540e54b680d4e983ce44177a7a27.png"},{"revision":"9356ecd601209f73865224240a0a8e9a","url":"assets/images/Cinnamon-2-245-3409ad34a5c5a81fae82533ff7ea3b81.png"},{"revision":"4283f2470ad131a08339d040fe5b94ac","url":"assets/images/Completed-b00b1861b1f36b3d155485aa40205b51.png"},{"revision":"e63f4b9f1dbcbf243dfe822efefbc804","url":"assets/images/Crontab-eed842dff3680778b52aea1ec19ad84e.png"},{"revision":"9f3cf4ee692f03d01a1a146bef9ebc53","url":"assets/images/Desk_flip-421c45a0c59b297140d88dd5a57d6aa5.png"},{"revision":"b76426be5dc9a9d42ea459e686454489","url":"assets/images/Dhcp-config-bcc68e5ad6191311657e6a0c2be814e5.png"},{"revision":"ebc24e8de480873fbedeb7df626a6334","url":"assets/images/Dhcp-pic-a50a5e1b51324c506011084bccdf7fe2.png"},{"revision":"aba75460b59fbe11656f5faa667e7936","url":"assets/images/Disk_usage-773714d42a001a7c75336b072280b450.png"},{"revision":"0caafa10167b650efea400b1aa46ddba","url":"assets/images/Dora-67a1e54f9f13a472b7173ed2b1ac73b9.png"},{"revision":"6dde2592011dafd00dea727a0e1d30d5","url":"assets/images/Firewall-47ee633533b09162d89becea33f4d978.png"},{"revision":"4b5fe89d949b71e2480f5b09d15ab9eb","url":"assets/images/Format_ExFAT-30d42c25bc240178fb1826d93ec60f92.png"},{"revision":"f4db3afdfdb58a0646fe39cbbc64150e","url":"assets/images/Fullscreen-mode-7b43563eca6a48f7bdc32bccedd76837.png"},{"revision":"41ee72e40a868b1f563a3dea8643527d","url":"assets/images/Group-add-638a7951df4c322d4b0e65dce6a1aebe.png"},{"revision":"3a8b447fa152a43f117dc85aeca4254d","url":"assets/images/Installation_summary-659db221ac555f0fe3d6f5408fce5e20.png"},{"revision":"f99993171ec32a52ded28e1a707b8e94","url":"assets/images/JasonCarman-62b72df6c15f0bd02b87e18d0499c822.jpg"},{"revision":"6674102f2b6632cbc67cc100aaa67029","url":"assets/images/Kvm-warning-eb5f02bff6fee0781dd21ae469defe5a.jpg"},{"revision":"20f2c36f5765b616547180aed02e45b8","url":"assets/images/Lab1_signoff-47670882e67f73a9892a972332c76cb6.png"},{"revision":"0fb52e87bafa6a2d2d3920e83ad7631f","url":"assets/images/Lbreakout2-0b816ed33542853de167100c85bf7ae1.png"},{"revision":"2f7fec674a94e64ed6f99d7862dd6b87","url":"assets/images/Manage-service-e592e8a58098c1bc0e16e2c878bc10b7.png"},{"revision":"e8a1e3dc158b8bda4acef059b80f3b01","url":"assets/images/Mount-62e8a23f5188445a30063dbb135125dd.png"},{"revision":"7ee830ad8b76f4ac7c8f010cb4cc85b2","url":"assets/images/My-network-6dda78825fb0ed51c882ba6656cea939.png"},{"revision":"f8e258c79f50c2c8fb818ffff9a43e16","url":"assets/images/Network-config-centos-c8e0040e6fbd2d2e62cd38095c78725b.png"},{"revision":"e72c221078d8590b0b60f5b3e0e99e11","url":"assets/images/Network-scripts-72748ca439071c0bea894422f987f8cb.png"},{"revision":"b93863c498c769bb4fd9ba3e4075fa95","url":"assets/images/New_network_dialog-61c5c4f4192d6aee0d7c0b159550d62a.png"},{"revision":"3c11e3b84d60ad50d5bbdbc111fb013e","url":"assets/images/New-network-config-2a93dc2496fd116ff7b7d3a48ced7968.png"},{"revision":"3843628efb4a7ffd0b7bef8350091ee3","url":"assets/images/Partition_verification-936dcac5413bd055b0ddee3cf91b26b2.png"},{"revision":"88713f2b177634edf59be6854098c87d","url":"assets/images/Passwd-file-1daf9dfed5c1484a9966af672d2a99cf.png"},{"revision":"d181eb061fcf8ac87e9ae62d277a9b6e","url":"assets/images/Software-ad583618dfc81275bab4da7518b86eb8.png"},{"revision":"b1d193f44c2add93418aa94b1a31cc27","url":"assets/images/Spoof-33a214307013854d9d325b6da862c8c2.png"},{"revision":"bc19732a7bfacba678a2a1d41fa57acc","url":"assets/images/Ssm-b324e192cc2f91a9ed6c88a8f6cc0803.png"},{"revision":"7d6952fe3f7f5b25926d1997c1d572e6","url":"assets/images/Taskbar-f1287d66b0ffa38f82ac164304d6506b.png"},{"revision":"b18cf70d21eabbd45664757a8aae804e","url":"assets/images/Tunel-gedit-2a25774ddccb5f1d6776e9d42f2c4ab3.png"},{"revision":"423a919aa294d2642ef9ca44c3884175","url":"assets/images/User-management-44b0b5ee06a2908fb38a67d3b9c24fd9.png"},{"revision":"a3aac111e540f58aae3226da9a17c98d","url":"assets/images/Vmware-1a-48b7c30cf594bca7d12e55f986a3ea5e.png"},{"revision":"dda7d6c759082ea2f089711cb0aa7e0a","url":"assets/images/Vmware-2-40ff21f305fd0c97c1bf3f8f0d0a48f6.png"},{"revision":"74ecc00e625db0da6d86be8626e23f0a","url":"assets/images/Window-mode-64f1360972b2133adfb945699279b3cb.png"},{"revision":"0574d8c5f844066b1a6c64e8721802cb","url":"img/Add_virtual_disk.png"},{"revision":"d710471700766a0a27fe0577e10a7df8","url":"img/Andrew.jpg"},{"revision":"c74c206538eae814ebdc9bd4485caf1f","url":"img/Ataur-RTN.jpg"},{"revision":"cf5d8d13f8f7d0a37ef76d8ea74d4571","url":"img/Chains.png"},{"revision":"9356ecd601209f73865224240a0a8e9a","url":"img/Cinnamon-2-245.png"},{"revision":"d7e3179946ffbe47a9c75841554ff91f","url":"img/commit-changes.png"},{"revision":"972a5a5d918a2c2a708e929c2ee801cc","url":"img/commit-dialog.png"},{"revision":"4283f2470ad131a08339d040fe5b94ac","url":"img/Completed.png"},{"revision":"e63f4b9f1dbcbf243dfe822efefbc804","url":"img/Crontab.png"},{"revision":"9f3cf4ee692f03d01a1a146bef9ebc53","url":"img/Desk_flip.png"},{"revision":"b76426be5dc9a9d42ea459e686454489","url":"img/Dhcp-config.png"},{"revision":"ebc24e8de480873fbedeb7df626a6334","url":"img/Dhcp-pic.png"},{"revision":"aba75460b59fbe11656f5faa667e7936","url":"img/Disk_usage.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"0caafa10167b650efea400b1aa46ddba","url":"img/Dora.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"6dde2592011dafd00dea727a0e1d30d5","url":"img/Firewall.png"},{"revision":"4b5fe89d949b71e2480f5b09d15ab9eb","url":"img/Format_ExFAT.png"},{"revision":"f4db3afdfdb58a0646fe39cbbc64150e","url":"img/Fullscreen-mode.png"},{"revision":"7685ba4492fa1eb5044c77f38028f109","url":"img/github-actions-extension.png"},{"revision":"bdf6c435a6b835dff58f3938c7040c14","url":"img/github-actions.png"},{"revision":"5b54abe425c5d5e06a722956d91e901e","url":"img/github-check_change.png"},{"revision":"afe774d7fc75aad0ef523c8a96724076","url":"img/github-codespace-2.png"},{"revision":"4ce3488bede3244a0d5aef1c87a601a5","url":"img/github-codespace-source_control.png"},{"revision":"5e73303160820994caca80683d5dddac","url":"img/github-codespace.png"},{"revision":"951098320b22ccff79c540ada9c08fa3","url":"img/github-error_pass.png"},{"revision":"481afa959ff562582cda513a3635a072","url":"img/github-error.png"},{"revision":"ae4c1bbce0b6578dc4038c91247c492b","url":"img/github-error2.png"},{"revision":"dc6528b7f1d0fed414a50e056608574d","url":"img/github-error3.png"},{"revision":"a21c8c59f0853557677c2c4789fffa27","url":"img/github-highlighted_files-unedited.png"},{"revision":"53a9e32d807abf39af5c54b544679f22","url":"img/github-highlighted_files.png"},{"revision":"8e1ff443c6e9db1cdaf9fc97ac36341b","url":"img/github-pr_and_issues-extension.png"},{"revision":"2f3e44e1b18c7af8f144c976fb48087b","url":"img/github-prettier-extension.png"},{"revision":"d4f552517d661c60bd05073a96a1dd08","url":"img/github-repo.png"},{"revision":"41ee72e40a868b1f563a3dea8643527d","url":"img/Group-add.png"},{"revision":"500ff8235a8ae6b46097121c3145fd1d","url":"img/Grub1.png"},{"revision":"07fff2f39bc8d41d0ba8bebffd8c7ed3","url":"img/Grub2_1.png"},{"revision":"3404b63d4d85cad893529a2416a6557f","url":"img/Grub2_3.png"},{"revision":"3a8b447fa152a43f117dc85aeca4254d","url":"img/Installation_summary.png"},{"revision":"f99993171ec32a52ded28e1a707b8e94","url":"img/JasonCarman.jpg"},{"revision":"6674102f2b6632cbc67cc100aaa67029","url":"img/Kvm-warning.jpg"},{"revision":"20f2c36f5765b616547180aed02e45b8","url":"img/Lab1_signoff.png"},{"revision":"0fb52e87bafa6a2d2d3920e83ad7631f","url":"img/Lbreakout2.png"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"2f7fec674a94e64ed6f99d7862dd6b87","url":"img/Manage-service.png"},{"revision":"e8a1e3dc158b8bda4acef059b80f3b01","url":"img/Mount.png"},{"revision":"7ee830ad8b76f4ac7c8f010cb4cc85b2","url":"img/My-network.png"},{"revision":"f8e258c79f50c2c8fb818ffff9a43e16","url":"img/Network-config-centos.png"},{"revision":"e72c221078d8590b0b60f5b3e0e99e11","url":"img/Network-scripts.png"},{"revision":"b93863c498c769bb4fd9ba3e4075fa95","url":"img/New_network_dialog.png"},{"revision":"3c11e3b84d60ad50d5bbdbc111fb013e","url":"img/New-network-config.png"},{"revision":"3843628efb4a7ffd0b7bef8350091ee3","url":"img/Partition_verification.png"},{"revision":"88713f2b177634edf59be6854098c87d","url":"img/Passwd-file.png"},{"revision":"0020d25f88161f6378144e7a0b53cfdc","url":"img/Petercallaghan.jpg"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"d181eb061fcf8ac87e9ae62d277a9b6e","url":"img/Software.png"},{"revision":"b1d193f44c2add93418aa94b1a31cc27","url":"img/Spoof.png"},{"revision":"bc19732a7bfacba678a2a1d41fa57acc","url":"img/Ssm.png"},{"revision":"7d6952fe3f7f5b25926d1997c1d572e6","url":"img/Taskbar.png"},{"revision":"b18cf70d21eabbd45664757a8aae804e","url":"img/Tunel-gedit.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"423a919aa294d2642ef9ca44c3884175","url":"img/User-management.png"},{"revision":"a3aac111e540f58aae3226da9a17c98d","url":"img/Vmware-1a.png"},{"revision":"dda7d6c759082ea2f089711cb0aa7e0a","url":"img/Vmware-2.png"},{"revision":"a7651195e5149cb6d1b6b4ccb14ea70b","url":"img/vscode-extensions.png"},{"revision":"5b25494591002e58af37b866714f89f7","url":"img/vscode-file_explorer.png"},{"revision":"44c0fac4733884f86d2e3bb02dc3a085","url":"img/vscode-source_control.png"},{"revision":"74ecc00e625db0da6d86be8626e23f0a","url":"img/Window-mode.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();