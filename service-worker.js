// Import Workbox (https://developers.google.com/web/tools/workbox/)
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

/*
  Precache Manifest
  Change revision as soon as file content changed
*/
function(){"use strict";try{self["workbox:sw:5.0.0"]&&_()}catch(t){}const t="https://storage.googleapis.com/workbox-cdn/releases/5.0.0",e={backgroundSync:"background-sync",broadcastUpdate:"broadcast-update",cacheableResponse:"cacheable-response",core:"core",expiration:"expiration",googleAnalytics:"offline-ga",navigationPreload:"navigation-preload",precaching:"precaching",rangeRequests:"range-requests",routing:"routing",strategies:"strategies",streams:"streams"};self.workbox=new class{constructor(){return this.v={},this.t={debug:"localhost"===self.location.hostname,modulePathPrefix:null,modulePathCb:null},this.s=this.t.debug?"dev":"prod",this.o=!1,new Proxy(this,{get(t,s){if(t[s])return t[s];const o=e[s];return o&&t.loadModule(`workbox-${o}`),t[s]}})}setConfig(t={}){if(this.o)throw new Error("Config must be set before accessing workbox.* modules");Object.assign(this.t,t),this.s=this.t.debug?"dev":"prod"}loadModule(t){const e=this.i(t);try{importScripts(e),this.o=!0}catch(s){throw console.error(`Unable to import module '${t}' from '${e}'.`),s}}i(e){if(this.t.modulePathCb)return this.t.modulePathCb(e,this.t.debug);let s=[t];const o=`${e}.${this.s}.js`,r=this.t.modulePathPrefix;return r&&""===(s=r.split("/"))[s.length-1]&&s.splice(s.length-1,1),s.push(o),s.join("/")}}}();
//# sourceMappingURL=workbox-sw.js.map

self.__WB_MANIFEST = [
  {
    revision: '1',
    url: 'framework7/css/framework7.bundle.min.css'
  },
  {
    revision: '1',
    url: 'framework7/js/framework7.bundle.min.js'
  },
  {
    revision: '1',
    url: 'css/app.css'
  },
  {
    revision: '1',
    url: 'css/icons.css'
  },
  {
    revision: '1',
    url: 'js/routes.js'
  },
  {
    revision: '1',
    url: 'js/app.js'
  },
  // Fonts
  {
    revision: '1',
    url: 'fonts/Framework7Icons-Regular.woff2'
  },
  {
    revision: '1',
    url: 'fonts/Framework7Icons-Regular.woff'
  },
  {
    revision: '1',
    url: 'fonts/Framework7Icons-Regular.eot'
  },
  {
    revision: '1',
    url: 'fonts/Framework7Icons-Regular.ttf'
  },
  {
    revision: '1',
    url: 'fonts/MaterialIcons-Regular.woff2'
  },
  {
    revision: '1',
    url: 'fonts/MaterialIcons-Regular.woff'
  },
  {
    revision: '1',
    url: 'fonts/MaterialIcons-Regular.ttf'
  },
  {
    revision: '1',
    url: 'fonts/MaterialIcons-Regular.eot'
  },
  // HTML
  {
    revision: '1',
    url: './index.html'
  },
  // Icons
  {
    revision: '1',
    url: 'assets/icons/128x128.png'
  },
  {
    revision: '1',
    url: 'assets/icons/144x144.png'
  },
  {
    revision: '1',
    url: 'assets/icons/152x152.png'
  },
  {
    revision: '1',
    url: 'assets/icons/192x192.png'
  },
  {
    revision: '1',
    url: 'assets/icons/256x256.png'
  },
  {
    revision: '1',
    url: 'assets/icons/512x512.png'
  },
  {
    revision: '1',
    url: 'assets/icons/favicon.png'
  },
  {
    revision: '1',
    url: 'assets/icons/apple-touch-icon.png'
  },
];

/*
  Enable precaching
  It is better to comment next line during development
  
*/
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
