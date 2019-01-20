App.loadBundle("mlzro24n",["exports"],function(e){var t=window.App.h,n=function(){function e(){}return e.prototype.render=function(){return t("div",null,t("div",{class:"demo-card__image"},t("a",{target:"_blank",rel:"noopener",href:this.demoUrl},t("img",{src:this.imgPath+".png",srcSet:this.imgPath+".png 1x, "+this.imgPath+"@2x.png 2x"}))),t("h3",null,this.name),t("p",null,this.description),t("p",null,t("a",{target:"_blank",rel:"noopener",href:this.demoUrl,class:"text-link text-link--primary"},"Demo"),"  ",t("a",{target:"_blank",rel:"noopener",href:this.sourceUrl,class:"text-link text-link--secondary"},"Source")))},Object.defineProperty(e,"is",{get:function(){return"demo-card"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{demoUrl:{type:String,attr:"demo-url"},description:{type:String,attr:"description"},imgPath:{type:String,attr:"img-path"},name:{type:String,attr:"name"},SourceBufferList:{type:String,attr:"source-buffer-list"},sourceUrl:{type:String,attr:"source-url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".demo-card-list{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:46px;margin-bottom:100px}\@media screen and (max-width:768px){.demo-card-list{grid-template-columns:repeat(2,1fr);grid-gap:36px}}\@media screen and (max-width:480px){.demo-card-list{grid-template-columns:repeat(1,1fr)}}demo-card{padding-bottom:20px}demo-card h3,demo-card p{margin-bottom:0}demo-card p{margin-top:8px;line-height:1.5}.demo-card__image{overflow:hidden;background:var(--color-white);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);border-radius:15%;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.09);box-shadow:0 2px 4px 0 rgba(0,0,0,.09)}.demo-card__image img{width:100%;vertical-align:bottom}"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){this.demos=[{title:"Stenciljs.com",description:"Yep, this site is built as a PWA!",imgPath:"/assets/img/demos/demo-stenciljs",demoUrl:"https://stenciljs.com/",sourceUrl:"https://github.com/ionic-team/stencil-site"},{title:"IonicHN",description:"Hacker News PWA built with @stencil/core and @ionic/core",imgPath:"/assets/img/demos/demo-ionichn",demoUrl:"https://corehacker-10883.firebaseapp.com/",sourceUrl:"https://github.com/ionic-team/ionic-stencil-hn-app"},{title:"Stencil Fiber demo",description:"This showcases the runtime performance of stencil using our async rendering",imgPath:"/assets/img/demos/demo-fiber",demoUrl:"https://stencil-fiber-demo.firebaseapp.com/",sourceUrl:"https://github.com/ionic-team/stencil-fiber-demo"}],document.title="PWAs"}return e.prototype.render=function(){return t("div",null,t("div",{class:"measure-xl"},t("img",{src:"/assets/img/pwa-toolkit-logo.png",srcSet:"/assets/img/pwa-toolkit-logo.png 1x, /assets/img/pwa-toolkit-logo@2x.png 2x"}),t("h1",null,"Everything you need to easily build fast, production ready Progressive Web Apps")),t("ul",{class:"list--unstyled list--icon list--columns"},t("li",null,t("app-icon",{name:"checkmark"})," Push notifications"),t("li",null,t("app-icon",{name:"checkmark"})," Routing"),t("li",null,t("app-icon",{name:"checkmark"})," Pre-rendering"),t("li",null,t("app-icon",{name:"checkmark"})," Update toasts"),t("li",null,t("app-icon",{name:"checkmark"})," Unit Tests"),t("li",null,t("app-icon",{name:"checkmark"})," Zero config lazy loading"),t("li",null,t("app-icon",{name:"checkmark"})," Zero config code splitting"),t("li",null,t("app-icon",{name:"checkmark"})," ES6 by default"),t("li",null,t("app-icon",{name:"checkmark"})," Selective polyfills"),t("li",null,t("app-icon",{name:"checkmark"})," Lazy image loading"),t("li",null,t("app-icon",{name:"checkmark"})," Everything needed for an add to homescreen PWA")),t("div",{class:"measure-lg"},t("h3",null,"Getting started with the Ionic PWA Toolkit"),t("ol",{class:"list--numbered-badge"},t("li",null,t("span",null,"In your terminal, run: ",t("br",null),t("code",null,"git clone https://github.com/ionic-team/ionic-pwa-toolkit my-pwa"))),t("li",null,t("span",null,"Run ",t("code",null,"npm install"))),t("li",null,t("span",null,"Run ",t("code",null,"npm run build")))),t("p",null,"And with just those three commands you now have a great looking PWA that scores 100 on lighthouse right out of the box."),t("img",{class:"screenshot",src:"/assets/img/pwa-lighthouse-score.png",srcSet:"/assets/img/pwa-lighthouse-score.png 1x, /assets/img/pwa-lighthouse-score@2x.png 2x"}),t("h3",{class:"push"},"Under the hood"),t("h4",null,"Ionic"),t("p",null,"The Ionic PWA Toolkit uses an early release of Ionic 4. Ionic 4 is built completely out of web components using Stencil. This means that you can use Ionic 4 just like any other Stencil collection and you will be able to use any of the Ionic components with minimal to no overhead."),t("h4",null,"Routing"),t("p",null,"The Ionic PWA Toolkit uses the Stencil Router.",t("stencil-route-link",{url:"/docs/routing",class:"block"},"Read more about the Stencil Router")),t("h4",null,"Service Worker"),t("p",null,"When you run ",t("code",null,"npm run build")," we automatically generate a Service Worker for you using ",t("a",{href:"https://workboxjs.org/"},"Workbox")," that handles pre-caching your assets.",t("stencil-route-link",{url:"/docs/service-workers",class:"block"},"Read more about Service Workers")),t("h4",null,"Web Manifest"),t("p",null,"By default we include a Web Manifest that has all the neccessary entries to get the Add to Homescreen prompt. You can see that web manifest ",t("a",{href:"https://github.com/ionic-team/ionic-pwa-toolkit/blob/master/src/manifest.json"},"here"),".")),t("h3",{class:"push"},"PWAs built with Stencil"),t("div",{class:"demo-card-list"},this.demos.map(function(e){return t("demo-card",{name:e.title,description:e.description,imgPath:e.imgPath,demoUrl:e.demoUrl,sourceUrl:e.sourceUrl})})))},Object.defineProperty(e,"is",{get:function(){return"pwas-page"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"pwas-page h3+.demo-card-list{margin-top:32px}\@media screen and (max-width:768px){pwas-page .measure-xl{text-align:center}}"},enumerable:!0,configurable:!0}),e}();e.DemoCard=n,e.PwasPage=i,Object.defineProperty(e,"__esModule",{value:!0})});