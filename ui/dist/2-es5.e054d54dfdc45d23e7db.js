!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,o){if(!t)return;if("string"==typeof t)return e(t,o);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,o)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{EsSE:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return a}));var n=function(){function t(e){o(this,t),Object.assign(this,e)}return i(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this}}]),t}(),c=function(){function t(e){o(this,t),Object.assign(this,e)}return i(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this}}]),t}(),a=function(){function t(e){o(this,t),Object.assign(this,e)}return i(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this.profiles=t.profiles.map((function(t){return new l(Object.assign({},t)).deserialize(t)})),this}}]),t}(),l=function(){function t(e){o(this,t),Object.assign(this,e)}return i(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this.status=t.status.map((function(t){return new n(Object.assign({},t)).deserialize(t)})),this.technologies=t.technologies.map((function(t){return new c(Object.assign({},t)).deserialize(t)})),this.projects=t.projects.map((function(t){return new a(Object.assign({},t)).deserialize(t)})),this}}]),t}()},NEos:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var n=r("fXoL"),c=r("Rtfg"),a=r("dJ3e"),l=r("ofXK"),s=r("tyNb"),b=r("lR5k"),u=r("O09W"),f=function(t){return{"projects__project--rjust":t}},p=function(t){return{"background-image":t}},d=function(t){return[t]};function g(t,e){if(1&t&&(n.Ob(0,"div",5),n.Kb(1,"div",6),n.Ob(2,"a",7),n.Ob(3,"h3",8),n.tc(4),n.Nb(),n.Nb(),n.Ob(5,"h4",9),n.tc(6),n.Nb(),n.Kb(7,"markdown",10),n.Ob(8,"a",11),n.Kb(9,"app-icon",12),n.Nb(),n.Nb()),2&t){var o=e.$implicit,r=e.index,i=n.Zb();n.cc("ngClass",n.ec(8,f,r%2==0)),n.zb(1),n.cc("ngStyle",n.ec(10,p,"url("+o.image_url.substring(0,o.image_url.length-4)+"png)")),n.zb(1),n.cc("routerLink",n.ec(12,d,i.getProjectUrl(o.id,o.name))),n.zb(2),n.uc(o.name),n.zb(2),n.uc(o.tagline),n.zb(1),n.cc("data",o.description.split(" ").slice(0,36).join(" ")),n.zb(1),n.cc("href",o.link_url,n.lc),n.zb(1),n.cc("name",o.link_name)}}var m=function(){var t=function(){function t(e,r,i){o(this,t),this.authService=e,this.seoService=r,this.trackingService=i}return i(t,[{key:"ngOnInit",value:function(){}},{key:"getProjectUrl",value:function(t,e){return"portfolio/projects/"+this.seoService.getCanonicalUrl(t,e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(n.Jb(c.c),n.Jb(a.d),n.Jb(a.e))},t.\u0275cmp=n.Db({type:t,selectors:[["app-portfolio-project-collection"]],inputs:{projects:"projects"},decls:6,vars:2,consts:[[1,"section","projects"],[1,"projects__header"],[1,"projects__line-divider","line-divider"],[1,"container","projects__project-container"],["class","projects__project",3,"ngClass",4,"ngFor","ngForOf","ngForTrackBy"],[1,"projects__project",3,"ngClass"],[1,"projects__project-background",3,"ngStyle"],[1,"projects__project-anchor-wrapper",3,"routerLink"],[1,"projects__project-name","projects__project-name--link"],[1,"projects__project-tagline"],[1,"projects__project-description",3,"data"],["aria-label","Link to project's external URL","target","_blank","rel","noopener noreferrer",1,"projects__project-link",3,"href"],[1,"projects__project-link-icon",3,"name"]],template:function(t,e){1&t&&(n.Ob(0,"div",0),n.Ob(1,"h2",1),n.tc(2,"Projects"),n.Nb(),n.Kb(3,"div",2),n.Ob(4,"div",3),n.rc(5,g,10,14,"div",4),n.Nb(),n.Nb()),2&t&&(n.zb(5),n.cc("ngForOf",e.projects)("ngForTrackBy",e.trackingService.objectById))},directives:[l.i,l.h,l.k,s.c,b.a,u.a],styles:[".projects__project[_ngcontent-%COMP%]{background-color:#242830;border:1px solid #000;box-sizing:border-box;height:auto;position:relative}.projects__project-background[_ngcontent-%COMP%]{background-color:#333944;background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:cover;height:100%;opacity:.15;pointer-events:none;position:absolute;width:100%}.projects__project-description[_ngcontent-%COMP%], .projects__project-name[_ngcontent-%COMP%], .projects__project-tagline[_ngcontent-%COMP%], .projects__project[_ngcontent-%COMP%]   markdown[_ngcontent-%COMP%]     p{padding:1rem 2rem}.projects__project-name[_ngcontent-%COMP%]{color:#aec6f1;padding-top:2rem}.projects__project-tagline[_ngcontent-%COMP%]{color:#fcfdff}.projects__project-description[_ngcontent-%COMP%]{color:#acb5c7}.projects__project-link[_ngcontent-%COMP%]{display:block;padding:2rem;transition:transform .2s ease}.projects__project--rjust-description[_ngcontent-%COMP%], .projects__project--rjust-link[_ngcontent-%COMP%], .projects__project--rjust-name[_ngcontent-%COMP%], .projects__project--rjust-tagline[_ngcontent-%COMP%]{text-align:right}.projects__project--rjust-link[_ngcontent-%COMP%]{align-self:flex-end}.projects__project--rjust[_ngcontent-%COMP%]   .projects__project-description[_ngcontent-%COMP%], .projects__project--rjust[_ngcontent-%COMP%]   .projects__project-link[_ngcontent-%COMP%], .projects__project--rjust[_ngcontent-%COMP%]   .projects__project-name[_ngcontent-%COMP%], .projects__project--rjust[_ngcontent-%COMP%]   .projects__project-tagline[_ngcontent-%COMP%], .projects__project--rjust[_ngcontent-%COMP%]   markdown[_ngcontent-%COMP%]     p{text-align:right}@media only screen and (min-width:768px){.projects__project-link[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}.projects__project-name--link[_ngcontent-%COMP%]:hover, markdown[_ngcontent-%COMP%]     p a:hover{text-decoration:underline}}"],changeDetection:0}),t}()},O09W:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("fXoL"),c=r("ofXK");function a(t,e){1&t&&(n.Mb(0),n.Yb(),n.Ob(1,"svg",1),n.Ob(2,"title"),n.tc(3,"Google Drive"),n.Nb(),n.Kb(4,"path",2),n.Nb(),n.Lb())}function l(t,e){1&t&&(n.Mb(0),n.Yb(),n.Ob(1,"svg",3),n.Ob(2,"title"),n.tc(3,"Green Foot"),n.Nb(),n.Kb(4,"path",4),n.Kb(5,"path",5),n.Kb(6,"path",6),n.Kb(7,"path",7),n.Kb(8,"path",8),n.Kb(9,"path",9),n.Nb(),n.Lb())}function s(t,e){1&t&&(n.Mb(0),n.Yb(),n.Ob(1,"svg",10),n.Ob(2,"title"),n.tc(3,"GitHub"),n.Nb(),n.Kb(4,"path",11),n.Nb(),n.Lb())}function b(t,e){1&t&&(n.Mb(0),n.Yb(),n.Ob(1,"svg",12),n.Ob(2,"title"),n.tc(3,"Itch.io"),n.Nb(),n.Kb(4,"path",13),n.Nb(),n.Lb())}var u=function(){var t=function(){function t(){o(this,t)}return i(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Db({type:t,selectors:[["app-icon"]],inputs:{name:"name"},decls:4,vars:4,consts:[[4,"ngIf"],["version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 550.801 550.801",0,"xml","space","preserve",1,"svg-icon","drive-svg-icon",2,"enable-background","new 0 0 550.801 550.801"],["d","M538.051,339.15L362.1,33.15H188.7l0,0l175.951,306H538.051z M216.75,364.65l-86.7,153H464.1l86.701-153H216.75z\n                M165.75,71.4L0,364.65l86.7,153L255,224.4L165.75,71.4z"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 512 512",1,"svg-icon","foot-svg-icon"],["d","M158.31 194.212c-8.284-122.46 182.466-34.243 171.417 23.982-10.67 56.167-45.691 65.905-69.97 100.004 0 0-16.916 50.197-11.151 70.236 18.964 66.058-78.541 125.798-103.926 48.558 0 0-12.196-52.439 36.126-88.299 19.169-24.494-15.657-53.433-22.498-154.481z"],["d","M211.425 73.954c3.031 21.617-7.332 40.98-23.142 43.223-15.79 2.181-31.078-13.537-34.099-35.205-3.042-21.657 7.311-40.96 23.101-43.182 15.841-2.233 31.119 13.486 34.14 35.164z"],["d","M270.807 95.632c-2.755 13.742-13.752 23.081-24.586 20.941-10.864-2.181-17.398-15.022-14.663-28.784 2.734-13.763 13.752-23.102 24.596-20.941 10.844 2.212 17.387 15.073 14.654 28.785z"],["d","M315.024 120.873c-4.199 11.203-14.776 17.644-23.634 14.295-8.817-3.318-12.606-15.043-8.407-26.276 4.199-11.203 14.756-17.603 23.603-14.285 8.827 3.349 12.606 15.084 8.438 26.266z"],["d","M348.938 155.453c-5.56 9.022-15.841 12.78-22.958 8.376-7.096-4.382-8.366-15.216-2.796-24.258 5.55-9.063 15.831-12.779 22.938-8.376 7.106 4.423 8.397 15.237 2.816 24.258z"],["d","M366.745 191.959c-3.512 6.584-10.578 9.656-15.78 6.881-5.212-2.765-6.564-10.363-3.051-16.937 3.502-6.584 10.567-9.677 15.769-6.922 5.202 2.816 6.564 10.373 3.062 16.978z"],["role","img","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"svg-icon","github-svg-icon"],["d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"],["role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",1,"svg-icon","itch-svg-icon"],["d","M3.129 1.338c-1.047 0.622-3.109 2.991-3.129 3.612v1.029c0 1.304 1.219 2.45 2.325 2.45 1.329 0 2.436-1.101 2.436-2.408 0 1.307 1.069 2.408 2.398 2.408s2.364-1.101 2.364-2.408c0 1.307 1.137 2.408 2.466 2.408h0.024c1.329 0 2.466-1.101 2.466-2.408 0 1.307 1.035 2.408 2.364 2.408s2.398-1.101 2.398-2.408c0 1.307 1.107 2.408 2.436 2.408 1.107 0 2.325-1.146 2.325-2.45v-1.029c-0.020-0.621-2.082-2.991-3.129-3.612-3.254-0.114-5.51-0.134-8.871-0.133s-7.945 0.053-8.871 0.133zM9.506 7.815c-0.133 0.23-0.288 0.428-0.467 0.601l-0.001 0.001c-0.502 0.49-1.189 0.794-1.947 0.794-0.001 0-0.002 0-0.003 0-0.759 0-1.447-0.303-1.949-0.795l0 0c-0.182-0.178-0.32-0.368-0.446-0.59l-0.001 0c-0.126 0.222-0.302 0.412-0.485 0.59-0.502 0.491-1.19 0.794-1.949 0.794-0.001 0-0.002 0-0.003 0h0c-0.091 0-0.186-0.025-0.263-0.052-0.107 1.112-0.152 2.175-0.168 2.95l-0 0.004c-0.002 0.394-0.004 0.717-0.006 1.167 0.021 2.334-0.231 7.564 1.029 8.849 1.953 0.455 5.546 0.663 9.151 0.664h0.001c3.605-0.001 7.198-0.209 9.151-0.664 1.26-1.285 1.008-6.516 1.029-8.849-0.002-0.45-0.004-0.773-0.006-1.167l-0-0.004c-0.016-0.775-0.061-1.838-0.168-2.95-0.077 0.026-0.172 0.052-0.263 0.052-0.001 0-0.002 0-0.002 0-0.759 0-1.447-0.303-1.949-0.795l0.001 0c-0.182-0.178-0.358-0.368-0.485-0.59l-0.001-0c-0.127 0.222-0.265 0.412-0.446 0.59-0.502 0.491-1.19 0.795-1.948 0.795-0.001 0-0.002 0-0.003 0h0c-0.758 0-1.445-0.304-1.947-0.795-0.179-0.174-0.334-0.372-0.461-0.589l-0.007-0.013c-0.132 0.23-0.286 0.428-0.463 0.602l-0 0c-0.502 0.491-1.19 0.795-1.949 0.795-0.001 0-0.002 0-0.003 0h0c-0.026 0-0.053-0.001-0.079-0.002h-0.001c-0.026 0.001-0.053 0.002-0.080 0.002-0.001 0-0.002 0-0.003 0-0.759 0-1.447-0.303-1.949-0.795l0.001 0c-0.178-0.174-0.331-0.372-0.456-0.589l-0.007-0.013zM7.502 10.406l-0 0.001h0.001c0.794 0.002 1.498 0 2.372 0.953 0.687-0.072 1.406-0.108 2.125-0.107h0.001c0.719-0.001 1.437 0.035 2.125 0.107 0.873-0.953 1.578-0.952 2.372-0.953h0.001l-0-0.001c0.375 0 1.875 0 2.92 2.935l1.122 4.026c0.832 2.995-0.266 3.069-1.636 3.071-2.031-0.076-3.156-1.551-3.156-3.026-1.124 0.184-2.436 0.276-3.748 0.276h-0.001c-1.312 0-2.624-0.092-3.748-0.276 0 1.475-1.125 2.95-3.156 3.026-1.37-0.003-2.468-0.076-1.636-3.071l1.123-4.026c1.045-2.935 2.545-2.935 2.92-2.935zM12 12.713v0.001c-0.002 0.002-2.138 1.964-2.523 2.662l1.399-0.056v1.22c0 0.057 0.561 0.034 1.123 0.008h0.001c0.562 0.026 1.123 0.049 1.123-0.008v-1.22l1.399 0.056c-0.384-0.698-2.523-2.662-2.523-2.662v-0.001l-0 0z"]],template:function(t,e){1&t&&(n.rc(0,a,5,0,"ng-container",0),n.rc(1,l,10,0,"ng-container",0),n.rc(2,s,5,0,"ng-container",0),n.rc(3,b,5,0,"ng-container",0)),2&t&&(n.cc("ngIf","Google Drive"===e.name),n.zb(1),n.cc("ngIf","Green Foot"===e.name),n.zb(1),n.cc("ngIf","GitHub"===e.name),n.zb(1),n.cc("ngIf","Itch.io"===e.name))},directives:[c.j],styles:["[_nghost-%COMP%]{fill:#aec6f1;display:inline-block;height:42px;width:42px;transform:perspective(1px) translateZ(0);transition-duration:.06s;transition-property:transform;-webkit-transform:perspective(1px) translateZ(0);-webkit-transform-duration:.06s;-webkit-transition-property:transform}[_nghost-%COMP%]:active{transform:scale(.95)}[_nghost-%COMP%]   .svg-icon[_ngcontent-%COMP%]{all:inherit;display:inline-block}[_nghost-%COMP%]   .svg-icon--inactive[_ngcontent-%COMP%]{fill:#acb5c7}"]}),t}()},pZC5:function(e,r,n){"use strict";n.r(r),n.d(r,"PortfolioModule",(function(){return V}));var c,a=n("ofXK"),l=n("3Pt+"),s=n("lR5k"),b=n("pKmL"),u=n("7of8"),f=n("tyNb"),p=n("fXoL"),d=((c=function(){function t(){o(this,t)}return i(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=p.Db({type:c,selectors:[["app-portfolio"]],decls:1,vars:0,template:function(t,e){1&t&&p.Kb(0,"router-outlet")},directives:[f.e],encapsulation:2}),c),g=n("EsSE"),m=n("Rtfg"),h=n("dJ3e"),v=n("+5rw"),_=n("jhN1"),j=n("QibW"),O=n("bSwM"),k=n("4E6C");function y(t,e){if(1&t&&(p.Ob(0,"mat-radio-button",19),p.tc(1),p.Nb()),2&t){var o=e.$implicit;p.cc("value",o.status),p.zb(1),p.uc(o.status)}}function P(t,e){if(1&t&&(p.Ob(0,"div",20),p.Ob(1,"mat-checkbox",21),p.tc(2),p.Nb(),p.Kb(3,"br"),p.Nb()),2&t){var o=e.index,r=p.Zb(2);p.zb(1),p.cc("formControlName",o),p.zb(1),p.uc(r.projectData[o].name)}}function w(t,e){if(1&t){var o=p.Pb();p.Ob(0,"button",27),p.Vb("click",(function(){p.jc(o);var t=p.Zb().index;return p.Zb(2).changeTechnologyDisplayOrder(t,t-1)})),p.tc(1,"\u25b2"),p.Nb()}}function C(t,e){if(1&t){var o=p.Pb();p.Ob(0,"button",28),p.Vb("click",(function(){p.jc(o);var t=p.Zb().index;return p.Zb(2).changeTechnologyDisplayOrder(t,t+1)})),p.tc(1,"\u25bc"),p.Nb()}}var N=function(t){return{"btn--inactive":t}};function M(t,e){if(1&t){var o=p.Pb();p.Ob(0,"div",22),p.Kb(1,"input",23),p.rc(2,w,2,0,"button",24),p.rc(3,C,2,0,"button",25),p.Ob(4,"button",26),p.Vb("click",(function(){p.jc(o);var t=e.index;return p.Zb(2).removeTechnology(t)})),p.tc(5,"\u2715"),p.Nb(),p.Nb()}if(2&t){var r=e.index,i=p.Zb(2);p.zb(1),p.cc("formControlName",r),p.zb(1),p.cc("ngIf",0!==r),p.zb(1),p.cc("ngIf",r!==i.profileForm.controls.technologies.controls.length-1),p.zb(1),p.cc("ngClass",p.ec(5,N,1===i.profileForm.controls.technologies.controls.length))("disabled",1===i.profileForm.controls.technologies.controls.length)}}function S(t,e){if(1&t){var o=p.Pb();p.Ob(0,"div",2),p.Ob(1,"h1",3),p.tc(2,"Profile Editor"),p.Nb(),p.Kb(3,"div",4),p.Ob(4,"form",5),p.Vb("ngSubmit",(function(){return p.jc(o),p.Zb().onSubmit()})),p.Ob(5,"div",6),p.Ob(6,"label",7),p.tc(7,"Name"),p.Nb(),p.Kb(8,"br"),p.Kb(9,"br"),p.Kb(10,"input",8),p.Nb(),p.Ob(11,"div",6),p.Ob(12,"label",7),p.tc(13,"Status"),p.Nb(),p.Kb(14,"br"),p.Kb(15,"br"),p.Ob(16,"mat-radio-group",9),p.rc(17,y,2,2,"mat-radio-button",10),p.Nb(),p.Nb(),p.Ob(18,"div",6),p.Ob(19,"label",7),p.tc(20,"Projects"),p.Nb(),p.Kb(21,"br"),p.Kb(22,"br"),p.rc(23,P,4,2,"div",11),p.Nb(),p.Ob(24,"div",6),p.Ob(25,"label",7),p.tc(26,"Tagline"),p.Nb(),p.Kb(27,"br"),p.Kb(28,"br"),p.Kb(29,"input",12),p.Nb(),p.Ob(30,"div",6),p.Ob(31,"label",7),p.tc(32,"Landing"),p.Nb(),p.Kb(33,"br"),p.Kb(34,"br"),p.Kb(35,"input",13),p.Nb(),p.Ob(36,"div",6),p.Ob(37,"label",7),p.tc(38,"About"),p.Nb(),p.Kb(39,"br"),p.Kb(40,"br"),p.Kb(41,"input",14),p.Nb(),p.Ob(42,"div",6),p.Ob(43,"label",7),p.tc(44,"Technologies"),p.Nb(),p.Kb(45,"br"),p.Kb(46,"br"),p.rc(47,M,6,7,"div",15),p.Kb(48,"br"),p.Ob(49,"button",16),p.Vb("click",(function(){return p.jc(o),p.Zb().addTechnologyToForm()})),p.tc(50,"+"),p.Nb(),p.Kb(51,"br"),p.Nb(),p.Ob(52,"div",6),p.Ob(53,"label",7),p.tc(54,"Image URL"),p.Nb(),p.Kb(55,"br"),p.Kb(56,"br"),p.Kb(57,"input",17),p.Nb(),p.Ob(58,"button",18),p.tc(59," Submit "),p.Nb(),p.Nb(),p.Nb()}if(2&t){var r=p.Zb();p.zb(4),p.cc("formGroup",r.profileForm),p.zb(13),p.cc("ngForOf",r.statusData)("ngForTrackBy",r.trackingService.objectById),p.zb(6),p.cc("ngForOf",r.profileForm.controls.projects.controls)("ngForTrackBy",r.trackingService.objectById),p.zb(24),p.cc("ngForOf",r.profileForm.controls.technologies.controls)("ngForTrackBy",r.trackingService.objectById),p.zb(11),p.cc("ngClass",p.ec(9,N,!r.profileForm.valid))("disabled",!r.profileForm.valid)}}function D(t,e){1&t&&p.Kb(0,"ui-loading-spinner")}var x,F=((x=function(){function e(t,r,i,n,c,a,l,s,b,u,f,p){o(this,e),this.router=t,this.changeDetectionRef=r,this.formBuilder=i,this.authService=n,this.notificationService=c,this.portfolioApiService=a,this.portfolioComparisonService=l,this.portfolioEditorService=s,this.portfolioProfileService=b,this.titleService=u,this.trackingService=f,this.validationService=p,this.projectData=[],this.statusData=[],this.technologyData=[],this.isLoaded=!1}return i(e,[{key:"ngOnDestroy",value:function(){this.portfolioEditorService.setProfile(null)}},{key:"ngOnInit",value:function(){this.titleService.setTitle("Portfolio Profile Editor | Matthew Maxwell"),this.checkForAdmin(),this.setPageHideEvent(),this.initProfileForm(),this.isLoaded=!0}},{key:"checkForAdmin",value:function(){this.authService.isLoggedIn()||this.router.navigate([""])}},{key:"setPageHideEvent",value:function(){var t=this;window.onpagehide=function(){t.portfolioEditorService.setProfile(null)}}},{key:"initProfileForm",value:function(){this.loadProfileData(),this.loadProjectData(),this.loadStatusData(),this.loadTechnologyData(),this.buildProfileForm()}},{key:"loadProfileData",value:function(){this.profileData=this.portfolioEditorService.getProfile(),console.log(this.profileData)}},{key:"loadProjectData",value:function(){var t=this;this.portfolioApiService.getProjects().subscribe((function(e){t.projectData=e.sort(t.portfolioComparisonService.projects),t.setProjectControls(t.profileData?t.profileData.projects.map((function(t){return t.id})):[]),t.isLoaded=!0}))}},{key:"setProjectControls",value:function(t){var e=this;this.projectData.forEach((function(o){var r=e.formBuilder.control(t.includes(o.id));e.profileForm.controls.projects.push(r)}))}},{key:"loadStatusData",value:function(){var t=this;this.portfolioApiService.getProfileStatuses().subscribe((function(e){t.statusData=e}))}},{key:"loadTechnologyData",value:function(){this.profileData&&(this.technologyData=this.profileData.technologies.sort(this.portfolioComparisonService.profileTechnologies))}},{key:"buildProfileForm",value:function(){this.profileForm=this.formBuilder.group(this.profileData?{name:this.formBuilder.control(this.profileData.name,[l.p.required]),status:this.formBuilder.control(this.profileData.status.status,[l.p.required]),projects:this.formBuilder.array(this.projectData,[this.validationService.hasMinElements(1)]),tagline:this.formBuilder.control(this.profileData.tagline,[l.p.required]),landing:this.formBuilder.control(this.profileData.landing,[l.p.required]),about:this.formBuilder.control(this.profileData.about,[l.p.required]),technologies:this.formBuilder.array(this.technologyData.map((function(t){return t.name})),[l.p.required]),image_url:this.formBuilder.control(this.profileData.image_url,[l.p.required])}:{name:this.formBuilder.control("",[l.p.required]),status:this.formBuilder.control("ACTIVE",[l.p.required]),projects:this.formBuilder.array([],[this.validationService.hasMinElements(1)]),tagline:this.formBuilder.control("",[l.p.required]),landing:this.formBuilder.control("",[l.p.required]),about:this.formBuilder.control("",[l.p.required]),technologies:this.formBuilder.array([""],[l.p.required]),image_url:this.formBuilder.control("",[l.p.required])})}},{key:"onSubmit",value:function(){var t=this,e=this.buildFormProfileData();"ACTIVE"===e.status.status&&this.portfolioProfileService.setActiveProfile(e),void 0===e.id?this.portfolioApiService.createProfile(e).subscribe((function(e){t.notificationService.createNotification("Successfully created new profile!"),t.router.navigate(["admin"])})):this.portfolioApiService.updateProfile(e).subscribe((function(e){t.notificationService.createNotification("Successfully updated existing profile!"),t.router.navigate(["admin"])}))}},{key:"buildFormProfileData",value:function(){var t=this.buildFormProjectData(),e=this.buildFormStatusData(),o=this.buildFormTechnologyData();return new g.a(Object.assign(Object.assign({},this.profileForm.value),{id:this.profileData?this.profileData.id:void 0,projects:t,status:e,technologies:o}))}},{key:"buildFormProjectData",value:function(){var t=this;return this.profileForm.value.projects.map((function(e,o){if(e)return t.projectData[o]})).filter((function(t){return void 0!==t}))}},{key:"buildFormStatusData",value:function(){var t=this;return this.statusData.find((function(e){return e.status===t.profileForm.value.status}))}},{key:"buildFormTechnologyData",value:function(){return this.profileForm.value.technologies.map((function(t,e){return new g.c({name:t,display_order:e+1})}))}},{key:"addTechnologyToForm",value:function(){var t=this.formBuilder.control("",[l.p.required]);this.profileForm.controls.technologies.push(t),this.changeDetectionRef.detectChanges()}},{key:"changeTechnologyDisplayOrder",value:function(e,o){var r,i=this.profileForm.get("technologies"),n=t(i.value);r=[n[o],n[e]],n[e]=r[0],n[o]=r[1],i.setValue(n)}},{key:"removeTechnology",value:function(t){this.profileForm.controls.technologies.removeAt(t)}}]),e}()).\u0275fac=function(t){return new(t||x)(p.Jb(f.a),p.Jb(p.h),p.Jb(l.d),p.Jb(m.c),p.Jb(h.c),p.Jb(v.a),p.Jb(v.b),p.Jb(v.c),p.Jb(v.d),p.Jb(_.c),p.Jb(h.e),p.Jb(h.f))},x.\u0275cmp=p.Db({type:x,selectors:[["app-portfolio-profile-editor"]],decls:3,vars:2,consts:[["class","section editor",4,"ngIf","ngIfElse"],["loading",""],[1,"section","editor"],[1,"editor__header"],[1,"line-divider"],[1,"editor__form",3,"formGroup","ngSubmit"],[1,"form-field","editor__form-field"],[1,"form-field-label","editor__form-field-label"],["formControlName","name","required","","autofocus",""],["formControlName","status","name","status","required",""],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],["class","form__checkbox-item","formArrayName","projects",4,"ngFor","ngForOf","ngForTrackBy"],["formControlName","tagline","required","","autofocus",""],["formControlName","landing","required","","autofocus",""],["formControlName","about","required","","autofocus",""],["class","editor__profile-btn-row","formArrayName","technologies",4,"ngFor","ngForOf","ngForTrackBy"],["aria-label","Add technology","type","button",1,"btn","editor__profile-btn--add","btn--go",3,"click"],["formControlName","image_url","required","","autofocus",""],["aria-label","Submit profile",1,"btn","editor__form-btn","editor__form-btn--submit",3,"ngClass","disabled"],[3,"value"],["formArrayName","projects",1,"form__checkbox-item"],[3,"formControlName"],["formArrayName","technologies",1,"editor__profile-btn-row"],["required","","autofocus","",1,"editor__profile-form-field",3,"formControlName"],["aria-label","Move technology up","class","btn editor__profile-btn--edit","type","button",3,"click",4,"ngIf"],["aria-label","Move technology down","class","btn editor__profile-btn--edit","type","button",3,"click",4,"ngIf"],["aria-label","Delete technology","type","button",1,"btn","editor__profile-btn--warn","btn--warn",3,"ngClass","disabled","click"],["aria-label","Move technology up","type","button",1,"btn","editor__profile-btn--edit",3,"click"],["aria-label","Move technology down","type","button",1,"btn","editor__profile-btn--edit",3,"click"]],template:function(t,e){if(1&t&&(p.rc(0,S,60,11,"div",0),p.rc(1,D,1,0,"ng-template",null,1,p.sc)),2&t){var o=p.hc(2);p.cc("ngIf",e.isLoaded)("ngIfElse",o)}},directives:[a.j,l.q,l.k,l.f,l.b,l.j,l.e,l.o,j.b,a.i,a.h,j.a,l.c,O.a,k.a],encapsulation:2}),x);function K(t,e){if(1&t&&(p.Ob(0,"div",18),p.Ob(1,"mat-checkbox",19),p.tc(2),p.Nb(),p.Kb(3,"br"),p.Nb()),2&t){var o=e.index,r=p.Zb(2);p.zb(1),p.cc("formControlName",o),p.zb(1),p.uc(r.profileData[o].name)}}n("NEos");var z=function(t){return{"btn--inactive":t}};function B(t,e){if(1&t){var o=p.Pb();p.Ob(0,"div",2),p.Ob(1,"h1",3),p.tc(2,"Project Editor"),p.Nb(),p.Kb(3,"div",4),p.Ob(4,"form",5),p.Vb("ngSubmit",(function(){return p.jc(o),p.Zb().onSubmit()})),p.Ob(5,"div",6),p.Ob(6,"label",7),p.tc(7,"Name"),p.Nb(),p.Kb(8,"br"),p.Kb(9,"br"),p.Kb(10,"input",8),p.Nb(),p.Ob(11,"div",6),p.Ob(12,"label",7),p.tc(13,"Profiles"),p.Nb(),p.Kb(14,"br"),p.Kb(15,"br"),p.rc(16,K,4,2,"div",9),p.Nb(),p.Ob(17,"div",6),p.Ob(18,"label",7),p.tc(19,"Tagline"),p.Nb(),p.Kb(20,"br"),p.Kb(21,"br"),p.Kb(22,"input",10),p.Nb(),p.Ob(23,"div",11),p.Ob(24,"label",7),p.tc(25,"Description"),p.Nb(),p.Kb(26,"br"),p.Kb(27,"br"),p.Kb(28,"textarea",12),p.Nb(),p.Ob(29,"div",6),p.Ob(30,"label",7),p.tc(31,"Image URL"),p.Nb(),p.Kb(32,"br"),p.Kb(33,"br"),p.Kb(34,"input",13),p.Nb(),p.Ob(35,"div",6),p.Ob(36,"label",7),p.tc(37,"Link"),p.Nb(),p.Kb(38,"br"),p.Kb(39,"br"),p.Ob(40,"label",14),p.tc(41,"Name"),p.Nb(),p.Kb(42,"br"),p.Kb(43,"br"),p.Kb(44,"input",15),p.Kb(45,"br"),p.Kb(46,"br"),p.Ob(47,"label",14),p.tc(48,"URL"),p.Nb(),p.Kb(49,"br"),p.Kb(50,"br"),p.Kb(51,"input",16),p.Nb(),p.Ob(52,"button",17),p.tc(53," Submit "),p.Nb(),p.Nb(),p.Nb()}if(2&t){var r=p.Zb();p.zb(4),p.cc("formGroup",r.projectForm),p.zb(12),p.cc("ngForOf",r.projectForm.controls.profiles.controls)("ngForTrackBy",r.trackingService.objectById),p.zb(36),p.cc("ngClass",p.ec(5,z,!r.projectForm.valid))("disabled",!r.projectForm.valid)}}function I(t,e){1&t&&p.Kb(0,"ui-loading-spinner")}var E,q=((E=function(){function t(e,r,i,n,c,a,l,s,b,u,f,p){o(this,t),this.authService=e,this.cdRef=r,this.notificationService=i,this.portfolioApiService=n,this.portfolioComparisonService=c,this.portfolioEditorService=a,this.seoService=l,this.titleService=s,this.trackingService=b,this.validationService=u,this.formBuilder=f,this.router=p,this.profileData=[],this.isLoaded=!1}return i(t,[{key:"ngOnDestroy",value:function(){this.portfolioEditorService.setProject(null)}},{key:"ngOnInit",value:function(){this.titleService.setTitle("Portfolio Project Editor | Matthew Maxwell"),this.checkForAdmin(),this.setPageHideEvent(),this.initProjectForm()}},{key:"checkForAdmin",value:function(){this.authService.isLoggedIn()||this.router.navigate([""])}},{key:"setPageHideEvent",value:function(){var t=this;window.onpagehide=function(){t.portfolioEditorService.setProject(null)}}},{key:"initProjectForm",value:function(){this.loadProjectData(),this.loadProfileData(),this.buildProjectForm()}},{key:"loadProjectData",value:function(){this.projectData=this.portfolioEditorService.getProject()}},{key:"loadProfileData",value:function(){var t=this;this.portfolioApiService.getProfiles().subscribe((function(e){t.profileData=e.sort(t.portfolioComparisonService.profiles),t.setProfileControls(t.projectData?t.projectData.profiles.map((function(t){return t.id})):[]),t.isLoaded=!0}))}},{key:"setProfileControls",value:function(t){var e=this;this.profileData.forEach((function(o){var r=e.formBuilder.control(t.includes(o.id));e.projectForm.controls.profiles.push(r)}))}},{key:"buildProjectForm",value:function(){this.projectForm=this.formBuilder.group(this.projectData?{name:this.formBuilder.control(this.projectData.name,[l.p.required]),profiles:this.formBuilder.array(this.profileData,[this.validationService.hasMinElements()]),tagline:this.formBuilder.control(this.projectData.tagline,[l.p.required]),description:this.formBuilder.control(this.projectData.description,[l.p.required]),image_url:this.formBuilder.control(this.projectData.image_url,[l.p.required]),link_name:this.formBuilder.control(this.projectData.link_name,[l.p.required]),link_url:this.formBuilder.control(this.projectData.link_url,[l.p.required])}:{name:this.formBuilder.control("",[l.p.required]),profiles:this.formBuilder.array([],[this.validationService.hasMinElements()]),tagline:this.formBuilder.control("",[l.p.required]),description:this.formBuilder.control("",[l.p.required]),image_url:this.formBuilder.control("",[l.p.required]),link_name:this.formBuilder.control("",[l.p.required]),link_url:this.formBuilder.control("",[l.p.required])})}},{key:"onSubmit",value:function(){var t=this,e=this.buildFormProjectData();void 0===e.id?this.portfolioApiService.createProject(e).subscribe((function(e){t.notificationService.createNotification("Successfully created new portfolio project!"),t.router.navigate(["projects/"+t.seoService.getCanonicalUrl(e.id,e.name)])})):this.portfolioApiService.updateProject(e).subscribe((function(e){t.notificationService.createNotification("Successfully updated existing portfolio project!"),t.router.navigate(["projects/"+t.seoService.getCanonicalUrl(e.id,e.name)])}))}},{key:"buildFormProjectData",value:function(){var t=this.buildFormProfileData();return new g.d(Object.assign(Object.assign({},this.projectForm.value),{id:this.projectData?this.projectData.id:void 0,profiles:t}))}},{key:"buildFormProfileData",value:function(){var t=this;return this.projectForm.value.profiles.map((function(e,o){if(e)return t.profileData[o]})).filter((function(t){return void 0!==t}))}}]),t}()).\u0275fac=function(t){return new(t||E)(p.Jb(m.c),p.Jb(p.h),p.Jb(h.c),p.Jb(v.a),p.Jb(v.b),p.Jb(v.c),p.Jb(h.d),p.Jb(_.c),p.Jb(h.e),p.Jb(h.f),p.Jb(l.d),p.Jb(f.a))},E.\u0275cmp=p.Db({type:E,selectors:[["app-portfolio-project-editor"]],decls:3,vars:2,consts:[["class","section editor",4,"ngIf","ngIfElse"],["loading",""],[1,"section","editor"],[1,"editor__header"],[1,"line-divider"],[1,"editor__form",3,"formGroup","ngSubmit"],[1,"form-field","editor__form-field"],[1,"form-field-label","editor__form-field-label"],["formControlName","name","required","","autofocus",""],["class","form__checkbox-item","formArrayName","profiles",4,"ngFor","ngForOf","ngForTrackBy"],["formControlName","tagline","required",""],[1,"form-field","form-field--large","editor__form-field"],["formControlName","description","required",""],["formControlName","image_url","required",""],[1,"form-field-label--small","editor__form-field-label--small"],["formControlName","link_name","required",""],["formControlName","link_url","required",""],["aria-label","Submit project",1,"btn","editor__form-btn","editor__form-btn--submit",3,"ngClass","disabled"],["formArrayName","profiles",1,"form__checkbox-item"],[3,"formControlName"]],template:function(t,e){if(1&t&&(p.rc(0,B,54,7,"div",0),p.rc(1,I,1,0,"ng-template",null,1,p.sc)),2&t){var o=p.hc(2);p.cc("ngIf",e.isLoaded)("ngIfElse",o)}},directives:[a.j,l.q,l.k,l.f,l.b,l.j,l.e,l.o,a.i,a.h,l.c,O.a,k.a],encapsulation:2}),E),A=n("O09W");function J(t,e){if(1&t){var o=p.Pb();p.Ob(0,"div",17),p.Ob(1,"a",18),p.Vb("click",(function(){return p.jc(o),p.Zb(2).sendProjectToEditor()})),p.tc(2," \u270f "),p.Nb(),p.Ob(3,"a",19),p.Vb("click",(function(){return p.jc(o),p.Zb(2).deleteProject()})),p.tc(4," \u2715 "),p.Nb(),p.Nb()}}function L(t,e){if(1&t&&(p.Ob(0,"div",2),p.Ob(1,"h1",3),p.tc(2),p.Nb(),p.Ob(3,"h2",4),p.tc(4),p.Nb(),p.rc(5,J,5,0,"div",5),p.Kb(6,"p",6),p.Ob(7,"div",7),p.Ob(8,"a",8),p.Kb(9,"app-icon",9),p.Nb(),p.Nb(),p.Kb(10,"div",10),p.Ob(11,"div",11),p.Ob(12,"a",12),p.Ob(13,"picture"),p.Kb(14,"source",13),p.Kb(15,"source",14),p.Kb(16,"img",15),p.Nb(),p.Nb(),p.Nb(),p.Kb(17,"markdown",16),p.Nb()),2&t){var o=p.Zb();p.zb(2),p.uc(o.project.name),p.zb(2),p.uc(o.project.tagline),p.zb(1),p.cc("ngIf",o.isAdmin),p.zb(1),p.cc("innerHtml","Updated: "+o.seoService.getFormattedDate(o.project.updated_at),p.kc),p.zb(2),p.cc("href",o.project.link_url,p.lc),p.zb(1),p.cc("name",o.project.link_name),p.zb(3),p.cc("href",o.project.link_url,p.lc),p.zb(2),p.cc("srcset",o.project.image_url,p.lc),p.zb(1),p.cc("srcset",o.project.image_url.substring(0,o.project.image_url.length-4)+"png",p.lc),p.zb(1),p.cc("src",o.project.image_url.substring(0,o.project.image_url.length-4)+"png",p.lc)("alt",o.project.name+"image"),p.zb(1),p.cc("data",o.project.description)}}function T(t,e){1&t&&p.Kb(0,"ui-loading-spinner")}var Z,H,U,G=[{path:"",component:d,children:[{path:"profiles/editor",component:F},{path:"projects/editor",component:q},{path:"projects/:id/:uri",component:(Z=function(){function t(e,r,i,n,c,a,l){o(this,t),this.authService=e,this.notificationService=r,this.portfolioProjectApiService=i,this.portfolioProjectEditorService=n,this.seoService=c,this.titleService=a,this.router=l,this.isAdmin=!1,this.isLoaded=!1}return i(t,[{key:"ngOnInit",value:function(){var t=this;this.isAdmin=this.authService.isLoggedIn();var e=this.seoService.getIdFromUrl(this.router.url);if(!e)return this.notificationService.createNotification("Unable to find portfolio project ID."),void this.router.navigate([""]);this.portfolioProjectApiService.getProject(e).subscribe((function(e){t.project=e,t.titleService.setTitle("".concat(e.name," - ").concat(e.tagline," | Portfolio | Matthew Maxwell")),t.isLoaded=!0}),(function(e){t.notificationService.createNotification(e.error.message),t.router.navigate([""])}))}},{key:"sendProjectToEditor",value:function(){this.portfolioProjectEditorService.setProject(this.project)}},{key:"deleteProject",value:function(){var t=this;this.portfolioProjectApiService.deleteProject(this.project.id).subscribe((function(e){t.notificationService.createNotification("Successfully deleted the project!"),t.router.navigate([""])}))}}]),t}(),Z.\u0275fac=function(t){return new(t||Z)(p.Jb(m.c),p.Jb(h.c),p.Jb(v.a),p.Jb(v.c),p.Jb(h.d),p.Jb(_.c),p.Jb(f.a))},Z.\u0275cmp=p.Db({type:Z,selectors:[["app-portfolio-project-view"]],decls:3,vars:2,consts:[["class","section project",4,"ngIf","ngIfElse"],["loading",""],[1,"section","project"],[1,"project__name"],[1,"project__tagline"],["class","project__btn-container",4,"ngIf"],[1,"project__date",3,"innerHtml"],[1,"project__external-container"],["target","_blank","rel","noopener noreferrer",1,"icon","project__external-icon",3,"href"],[3,"name"],[1,"line-divider"],[1,"project__image-link-container"],["target","_blank","rel","noopener noreferrer",1,"project__image-link",3,"href"],["type","image/webp",3,"srcset"],["type","image/png",3,"srcset"],["height","150",1,"project__image",3,"src","alt"],[3,"data"],[1,"project__btn-container"],["routerLink","/portfolio/projects/editor",1,"btn","project__btn",3,"click"],["routerLink","",1,"btn","project__btn","btn--warn",3,"click"]],template:function(t,e){if(1&t&&(p.rc(0,L,18,12,"div",0),p.rc(1,T,1,0,"ng-template",null,1,p.sc)),2&t){var o=p.hc(2);p.cc("ngIf",e.isLoaded)("ngIfElse",o)}},directives:[a.j,A.a,s.a,f.c,k.a],styles:["markdown[_ngcontent-%COMP%]     h1, markdown[_ngcontent-%COMP%]     h2, markdown[_ngcontent-%COMP%]     h3, markdown[_ngcontent-%COMP%]     h4, markdown[_ngcontent-%COMP%]     h5, markdown[_ngcontent-%COMP%]     h6{margin:calc(2rem * 1.25) 0 calc(2rem * .75)}markdown[_ngcontent-%COMP%]     img, markdown[_ngcontent-%COMP%]     p{margin:1rem 0}markdown[_ngcontent-%COMP%]     pre{margin:calc(1rem * 1) 0 calc(1rem * 1.5)}markdown[_ngcontent-%COMP%]     a{color:#aec6f1;display:inline-block}markdown[_ngcontent-%COMP%]     div img{box-sizing:border-box}markdown[_ngcontent-%COMP%]     div img, markdown[_ngcontent-%COMP%]     img{border:1px solid #000;text-align:center;width:100%}markdown[_ngcontent-%COMP%]     img{height:auto}markdown[_ngcontent-%COMP%]     p code{background-color:#4e5d74;box-sizing:border-box;color:#fcfdff;margin:0 calc(.5rem / 2);padding:calc(.5rem / 4) calc(.5rem / 2)}markdown[_ngcontent-%COMP%]     .text--note{color:#aec6f1}markdown[_ngcontent-%COMP%]     .text--note-paragraph{color:#e1edff}markdown[_ngcontent-%COMP%]     .text--caution{color:#ffe7a0}markdown[_ngcontent-%COMP%]     .text--caution-paragraph{color:#ffefd3}markdown[_ngcontent-%COMP%]     .text--warn{color:#ffa0b6}markdown[_ngcontent-%COMP%]     .text--warn-paragraph{color:#ffd6dc}markdown[_ngcontent-%COMP%]     .text--tip{color:#9bec8f}markdown[_ngcontent-%COMP%]     .text--tip-paragraph{color:#d7ffd5}@media only screen and (min-width:768px){markdown[_ngcontent-%COMP%]     a:hover{text-decoration:underline}markdown[_ngcontent-%COMP%]     img{width:64%}}.project[_ngcontent-%COMP%]{min-height:calc(100vh - 8vh - 6vh * 2 - 15vh)}.project__name[_ngcontent-%COMP%]{margin-bottom:1rem}.project__tagline[_ngcontent-%COMP%]{color:#acb5c7;font-style:italic;font-weight:500;margin-bottom:2rem}.project__btn-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start}.project__btn[_ngcontent-%COMP%]{font-size:130%;height:36px;line-height:36px;margin:0 .5rem 2rem 0;width:64px}.project__date[_ngcontent-%COMP%]{font-style:italic;margin-bottom:1rem}.project__external-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.project__external-icon[_ngcontent-%COMP%]{margin:.5rem 0 0;transition:transform .2s ease}.project__image-link[_ngcontent-%COMP%], .project__image-link-container[_ngcontent-%COMP%]{text-align:center;width:100%}.project__image[_ngcontent-%COMP%]{height:auto;margin-bottom:2rem;width:100%}@media only screen and (min-width:768px){.project__external-icon[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}.project__image[_ngcontent-%COMP%]{width:64%}}"]}),Z)}]}],R=((U=function t(){o(this,t)}).\u0275mod=p.Hb({type:U}),U.\u0275inj=p.Gb({factory:function(t){return new(t||U)},imports:[[f.d.forChild(G)],f.d]}),U),V=((H=function t(){o(this,t)}).\u0275mod=p.Hb({type:H}),H.\u0275inj=p.Gb({factory:function(t){return new(t||H)},providers:[v.a,v.b],imports:[[a.b,b.a,s.b.forRoot(),u.a,R,l.n]]}),H)}}])}();