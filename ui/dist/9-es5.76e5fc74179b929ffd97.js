!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var i=c(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r(this,n)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{iydT:function(e,r,c){"use strict";c.r(r),c.d(r,"HomeModule",(function(){return U}));var a,l,s=c("ofXK"),g=c("pKmL"),p=c("X6tI"),b=c("pZC5"),u=c("tyNb"),h=c("fXoL"),f=c("Rtfg"),d=c("AytR"),m=c("vAmI"),_=c("tk/3"),v=((a=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(c,e);var r=i(c);function c(e){return t(this,c),r.call(this,e)}return n(c,[{key:"getHomepage",value:function(){return this.http.get(d.a.API_URL+"/homepage")}}]),c}(m.a)).\u0275fac=function(t){return new(t||a)(h.Sb(_.b))},a.\u0275prov=h.Fb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),y=c("dJ3e"),w=c("+5rw"),O=c("jhN1"),P=((l=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}},{key:"constructEmail",value:function(t,e){return"".concat(t,"@").concat(e,".com")}}]),e}()).\u0275fac=function(t){return new(t||l)},l.\u0275cmp=h.Db({type:l,selectors:[["app-home-landing"]],inputs:{tagline:"tagline",landing:"landing"},decls:13,vars:3,consts:[[1,"section","landing"],[1,"landing__header"],[1,"landing__header--highlight"],[1,"landing__tagline"],[1,"landing__landing"],[1,"btn","landing__contact-btn",3,"href"]],template:function(t,e){1&t&&(h.Ob(0,"div",0),h.Ob(1,"h1",1),h.tc(2," Hi, my name is "),h.Kb(3,"br"),h.Ob(4,"span",2),h.tc(5,"Matthew Maxwell."),h.Nb(),h.Nb(),h.Ob(6,"h2",3),h.tc(7),h.Nb(),h.Ob(8,"p",4),h.tc(9),h.Nb(),h.Kb(10,"br"),h.Ob(11,"a",5),h.tc(12,"Contact Me"),h.Nb(),h.Nb()),2&t&&(h.zb(7),h.uc(e.tagline),h.zb(2),h.uc(e.landing),h.zb(2),h.cc("href","mailto:"+e.constructEmail("maxwellmattryan","gmail"),h.lc))},styles:[".landing[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:92vh;justify-content:center}.landing__header[_ngcontent-%COMP%]{color:#aec6f1;font-weight:300;margin-bottom:2rem}.landing__header--highlight[_ngcontent-%COMP%]{color:#fcfdff;font-weight:700}.landing__tagline[_ngcontent-%COMP%]{color:#acb5c7;font-weight:500;margin-bottom:2rem}.landing__landing[_ngcontent-%COMP%]{color:#acb5c7;font-weight:400;margin-bottom:2rem}.landing__contact-btn[_ngcontent-%COMP%]{font-size:120%;height:56px;line-height:56px;width:176px}@media only screen and (min-width:768px){.landing__header--highlight[_ngcontent-%COMP%]{font-size:180%}.landing__contact-btn[_ngcontent-%COMP%]{height:76px;line-height:76px}}"],changeDetection:0}),l);function x(t,e){if(1&t&&(h.Ob(0,"li",14),h.tc(1),h.Nb()),2&t){var n=e.$implicit;h.zb(1),h.vc(" ",n.name," ")}}var M,C=((M=function(){function e(n){t(this,e),this.trackingService=n}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||M)(h.Jb(y.e))},M.\u0275cmp=h.Db({type:M,selectors:[["app-home-about"]],inputs:{paragraph:"paragraph",technologies:"technologies",imageUrl:"imageUrl"},decls:23,vars:6,consts:[[1,"section","about"],[1,"about__header"],[1,"about__line-divider","line-divider"],[1,"about__container"],[1,"about__description-text"],[1,"about__description"],["href","https://github.com/maxwellmattryan","target","_blank","rel","noopener noreferrer",1,"text-link","about__description--link"],["href","https://github.com/maxwellmattryan/mattmaxwell","target","_blank","rel","noopener noreferrer",1,"text-link","about__description--link"],[1,"about__technology-list"],["class","about__technology-list-item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"about__portrait-container"],["type","image/webp",3,"srcset"],["type","image/png",3,"srcset"],["alt","Profile image",1,"about__portrait",3,"src"],[1,"about__technology-list-item"]],template:function(t,e){1&t&&(h.Ob(0,"div",0),h.Ob(1,"h2",1),h.tc(2,"About"),h.Nb(),h.Kb(3,"div",2),h.Ob(4,"div",3),h.Ob(5,"div",4),h.Ob(6,"p",5),h.tc(7),h.Nb(),h.Ob(8,"p",5),h.tc(9," To get a better idea of the work that I do, please feel free to checkout my "),h.Ob(10,"a",6),h.tc(11," GitHub "),h.Nb(),h.tc(12," or even the "),h.Ob(13,"a",7),h.tc(14," repository "),h.Nb(),h.tc(15," behind this application. Otherwise, here are some of the technologies that I work with: "),h.Nb(),h.Ob(16,"ul",8),h.rc(17,x,2,1,"li",9),h.Nb(),h.Nb(),h.Ob(18,"div",10),h.Ob(19,"picture"),h.Kb(20,"source",11),h.Kb(21,"source",12),h.Kb(22,"img",13),h.Nb(),h.Nb(),h.Nb(),h.Nb()),2&t&&(h.zb(7),h.vc(" ",e.paragraph," "),h.zb(10),h.cc("ngForOf",e.technologies)("ngForTrackBy",e.trackingService.objectById),h.zb(3),h.cc("srcset",e.imageUrl,h.lc),h.zb(1),h.cc("srcset",e.imageUrl.substring(0,e.imageUrl.length-4)+"png",h.lc),h.zb(1),h.cc("src",e.imageUrl.substring(0,e.imageUrl.length-4)+"png",h.lc))},directives:[s.i],styles:['.about__container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"text" "portrait"}.about__description-text[_ngcontent-%COMP%]{grid-area:text}.about__portrait-container[_ngcontent-%COMP%]{grid-area:portrait}.about__description[_ngcontent-%COMP%]{color:#acb5c7;margin-bottom:2rem}.about__technology-list[_ngcontent-%COMP%]{display:grid;grid-column-gap:2rem;grid-template-columns:1fr 1fr;margin-bottom:2rem}.about__technology-list-item[_ngcontent-%COMP%]{margin-bottom:1rem}.about__portrait[_ngcontent-%COMP%]{border:1px solid #000;box-shadow:0 0 5px #333944;max-height:720px;max-width:100%;width:auto}@media only screen and (min-width:768px){.about__container[_ngcontent-%COMP%]{grid-template-areas:"text portrait"}.about__container[_ngcontent-%COMP%]   .about__description-text[_ngcontent-%COMP%]{margin-right:2rem}.about__technology-list[_ngcontent-%COMP%]{margin-bottom:0}}'],changeDetection:0}),M),k=c("NEos"),N=c("2X3A"),j=c("4E6C");function z(t,e){if(1&t&&(h.Ob(0,"div",2),h.Kb(1,"app-home-landing",3),h.Kb(2,"app-home-about",4),h.Kb(3,"div",5),h.Kb(4,"app-portfolio-project-collection",6),h.Kb(5,"div",5),h.Kb(6,"app-blog-post-collection",7),h.Nb()),2&t){var n=h.Zb();h.zb(1),h.cc("tagline",n.homepage.profile.tagline)("landing",n.homepage.profile.landing),h.zb(1),h.cc("paragraph",n.homepage.profile.about)("technologies",n.homepage.profile.technologies)("imageUrl",n.homepage.profile.image_url),h.zb(2),h.cc("projects",n.homepage.profile.projects),h.zb(2),h.cc("posts",n.homepage.posts)("showTopics",!0)("showPreview",!0)("showReadmore",!0)}}function K(t,e){1&t&&h.Kb(0,"app-loading-spinner")}var S,I,R,J=[{path:"",component:(S=function(){function e(n,o,i,r,c,a){t(this,e),this.authService=n,this.homeApiService=o,this.notificationService=i,this.portfolioComparisonService=r,this.portfolioProfileService=c,this.titleService=a,this.isLoaded=!1}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.homeApiService.getHomepage().subscribe((function(e){t.homepage=e,t.homepage.profile.technologies=e.profile.technologies.sort(t.portfolioComparisonService.profileTechnologies),t.portfolioProfileService.setActiveProfile(t.homepage.profile),t.titleService.setTitle(t.homepage.profile.name+" Blog & Portfolio | Matthew Maxwell"),t.isLoaded=!0}))}}]),e}(),S.\u0275fac=function(t){return new(t||S)(h.Jb(f.c),h.Jb(v),h.Jb(y.c),h.Jb(w.b),h.Jb(w.d),h.Jb(O.c))},S.\u0275cmp=h.Db({type:S,selectors:[["app-home"]],decls:3,vars:2,consts:[["class","section-container home-view",4,"ngIf","ngIfElse"],["loading",""],[1,"section-container","home-view"],[3,"tagline","landing"],[3,"paragraph","technologies","imageUrl"],[1,"section-divider"],[3,"projects"],[3,"posts","showTopics","showPreview","showReadmore"]],template:function(t,e){if(1&t&&(h.rc(0,z,7,10,"div",0),h.rc(1,K,1,0,"ng-template",null,1,h.sc)),2&t){var n=h.hc(2);h.cc("ngIf",e.isLoaded)("ngIfElse",n)}},directives:[s.j,P,C,k.a,N.a,j.a],encapsulation:2}),S)}],T=((R=function e(){t(this,e)}).\u0275mod=h.Hb({type:R}),R.\u0275inj=h.Gb({factory:function(t){return new(t||R)},imports:[[u.d.forChild(J)],u.d]}),R),U=((I=function e(){t(this,e)}).\u0275mod=h.Hb({type:I}),I.\u0275inj=h.Gb({factory:function(t){return new(t||I)},providers:[v],imports:[[s.b,g.a,T,p.BlogModule,b.PortfolioModule]]}),I)}}])}();