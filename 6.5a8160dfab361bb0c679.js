(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Uu63:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),i=function(){return function(){}}(),e=t("pMnS"),c=t("21Lb"),a=t("OzfB"),r=t("lzlj"),o=t("FVSy"),b=t("Fzqc"),s=t("Ip0R"),f=function(){function l(){}return l.prototype.transform=function(l,n){return l&&n?l.filter(function(l){return!!(l.EquipmentFamily&&l.EquipmentFamily.toLowerCase().match(n.toLowerCase())||l.EquipmentModel&&l.EquipmentModel.toLowerCase().match(n.toLowerCase())||l.EquipmentNick&&l.EquipmentNick.toLowerCase().match(n.toLowerCase())||l.EquipmetSerial&&l.EquipmetSerial.toLowerCase().match(n.toLowerCase()))}):l},l}(),m=t("tct4"),x=t("wbvY"),p=function(){function l(l,n,t,u){this.cdr=l,this.service=n,this.afs=t,this.title=u,this.searchTerm=""}return l.prototype.ngOnInit=function(){var l=this;this.temp=this.afs.collection("Equipment"),this.carList=this.temp.valueChanges(),this.sub=this.service.getSearchTerm().subscribe(function(n){l.searchTerm=n,l.cdr.markForCheck()})},l.prototype.ngOnDestroy=function(){this.searchTerm="",this.sub.unsubscribe(),this.cdr.markForCheck()},l}(),d=t("ZYjt"),g=u.qb({encapsulation:0,styles:[[".main-container[_ngcontent-%COMP%]{margin:16px}@media screen and (max-width:600px){.main-container[_ngcontent-%COMP%]{margin:8px}}.card-holder[_ngcontent-%COMP%]{padding:8px}.card-holder[_ngcontent-%COMP%]   .car-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.car-icon[_ngcontent-%COMP%]{text-align:center}.car-details[_ngcontent-%COMP%]{color:rgba(0,0,0,.77)}.car-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0}"]],data:{}});function A(l){return u.Lb(0,[(l()(),u.sb(0,0,null,null,0,"img",[["alt","car image"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,u.ub(1,"",null==n.parent.context.$implicit?null:n.parent.context.$implicit.EquipmentIcon,""))})}function h(l){return u.Lb(0,[(l()(),u.sb(0,0,null,null,0,"img",[["alt","car image"],["src","./assets/images/logo.png"],["style","width: 50%;"]],null,null,null,null,null))],null,null)}function L(l){return u.Lb(0,[(l()(),u.sb(0,0,null,null,24,"div",[["class","card-holder"],["fxFill",""]],null,null,null,null,null)),u.rb(1,671744,null,0,c.e,[u.k,a.i,c.f,a.f],null,null),(l()(),u.sb(2,0,null,null,22,"mat-card",[["class","car-card mat-card"],["fxLayout","row"],["fxLayout.lt-md","column"],["fxLayoutAlign","start center"],["fxLayoutAlign.lt-sm","center center"],["fxLayoutGap","24px"]],null,null,null,r.b,r.a)),u.rb(3,49152,null,0,o.a,[],null,null),u.rb(4,671744,null,0,c.c,[u.k,a.i,[2,c.k],a.f],{fxLayout:[0,"fxLayout"],"fxLayout.lt-md":[1,"fxLayout.lt-md"]},null),u.rb(5,1720320,null,0,c.d,[u.k,u.A,b.b,a.i,[2,c.j],a.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),u.rb(6,671744,null,0,c.b,[u.k,a.i,[2,c.i],a.f],{fxLayoutAlign:[0,"fxLayoutAlign"],"fxLayoutAlign.lt-sm":[1,"fxLayoutAlign.lt-sm"]},null),(l()(),u.sb(7,0,null,0,5,"div",[["class","car-icon"],["fxFlex","60"],["fxFlex.lt-md","100"]],null,null,null,null,null)),u.rb(8,671744,null,0,c.a,[u.k,a.i,a.e,c.h,a.f],{fxFlex:[0,"fxFlex"],"fxFlex.lt-md":[1,"fxFlex.lt-md"]},null),(l()(),u.jb(16777216,null,null,1,null,A)),u.rb(10,16384,null,0,s.k,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,null,1,null,h)),u.rb(12,16384,null,0,s.k,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.sb(13,0,null,0,11,"div",[["class","car-details"],["fxFlex","40"],["fxFlex.lt-md","100"],["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),u.rb(14,671744,null,0,c.c,[u.k,a.i,[2,c.k],a.f],{fxLayout:[0,"fxLayout"]},null),u.rb(15,671744,null,0,c.b,[u.k,a.i,[2,c.i],a.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),u.rb(16,671744,null,0,c.a,[u.k,a.i,a.e,c.h,a.f],{fxFlex:[0,"fxFlex"],"fxFlex.lt-md":[1,"fxFlex.lt-md"]},null),(l()(),u.sb(17,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Jb(18,null,["Family: ",""])),(l()(),u.sb(19,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Jb(20,null,["Model: ",""])),(l()(),u.sb(21,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Jb(22,null,["Nick: ",""])),(l()(),u.sb(23,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Jb(24,null,["Serial: ",""]))],function(l,n){l(n,4,0,"row","column"),l(n,5,0,"24px"),l(n,6,0,"start center","center center"),l(n,8,0,"60","100"),l(n,10,0,null==n.context.$implicit?null:n.context.$implicit.EquipmentIcon),l(n,12,0,!(null!=n.context.$implicit&&n.context.$implicit.EquipmentIcon)),l(n,14,0,"column"),l(n,15,0,"center center"),l(n,16,0,"40","100")},function(l,n){l(n,18,0,null==n.context.$implicit?null:n.context.$implicit.EquipmentFamily),l(n,20,0,null==n.context.$implicit?null:n.context.$implicit.EquipmentModel),l(n,22,0,null==n.context.$implicit?null:n.context.$implicit.EquipmentNick),l(n,24,0,null==n.context.$implicit?null:n.context.$implicit.EquipmetSerial)})}function y(l){return u.Lb(2,[u.Db(0,f,[]),(l()(),u.sb(1,0,null,null,6,"div",[["class","main-container"],["fxLayout","column"],["fxLayoutAlign","start center"]],null,null,null,null,null)),u.rb(2,671744,null,0,c.c,[u.k,a.i,[2,c.k],a.f],{fxLayout:[0,"fxLayout"]},null),u.rb(3,671744,null,0,c.b,[u.k,a.i,[2,c.i],a.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),u.jb(16777216,null,null,3,null,L)),u.rb(5,278528,null,0,s.j,[u.Q,u.N,u.t],{ngForOf:[0,"ngForOf"]},null),u.Db(131072,s.b,[u.h]),u.Fb(7,2)],function(l,n){var t=n.component;l(n,2,0,"column"),l(n,3,0,"start center");var i=u.Kb(n,5,0,l(n,7,0,u.Cb(n,0),u.Kb(n,5,0,u.Cb(n,6).transform(t.carList)),t.searchTerm));l(n,5,0,i)},null)}function C(l){return u.Lb(0,[(l()(),u.sb(0,0,null,null,1,"app-car-list",[],null,null,null,y,g)),u.rb(1,245760,null,0,p,[u.h,x.a,m.a,d.i],null,null)],function(l,n){l(n,1,0)},null)}var k=u.ob("app-car-list",p,C,{},{},[]),F=t("xYTU"),w=t("M2Lx"),q=t("Wf4p"),M=t("eDkP"),v=t("mVsa"),E=t("ZYCi"),O={title:"Car List"},$=function(){return function(){}}(),P=t("dWZg"),j=t("UodH"),N=t("qAlS"),_=t("Nsh5"),I=t("8mMr"),S=t("SMsm"),J=t("LC5p"),T=t("seP3"),Y=t("de3e"),z=t("/VYK"),D=t("b716"),G=t("4c35"),Q=t("vARd"),U=t("NA4g"),V=t("hUWP"),K=t("3pJQ"),W=t("V9q+");t.d(n,"CarListModuleNgFactory",function(){return Z});var Z=u.pb(i,[],function(l){return u.zb([u.Ab(512,u.j,u.db,[[8,[e.a,k,F.a,F.b]],[3,u.j],u.y]),u.Ab(4608,s.m,s.l,[u.v,[2,s.w]]),u.Ab(4608,w.c,w.c,[]),u.Ab(4608,q.a,q.a,[]),u.Ab(4608,M.a,M.a,[M.g,M.c,u.j,M.f,M.d,u.r,u.A,s.d,b.b,[2,s.g]]),u.Ab(5120,M.h,M.i,[M.a]),u.Ab(5120,v.a,v.c,[M.a]),u.Ab(5120,u.b,function(l,n){return[a.j(l,n)]},[s.d,u.C]),u.Ab(1073742336,s.c,s.c,[]),u.Ab(1073742336,E.n,E.n,[[2,E.t],[2,E.k]]),u.Ab(1073742336,$,$,[]),u.Ab(1073742336,b.a,b.a,[]),u.Ab(1073742336,q.e,q.e,[[2,q.b],[2,d.g]]),u.Ab(1073742336,P.b,P.b,[]),u.Ab(1073742336,q.g,q.g,[]),u.Ab(1073742336,j.c,j.c,[]),u.Ab(1073742336,o.c,o.c,[]),u.Ab(1073742336,N.c,N.c,[]),u.Ab(1073742336,_.h,_.h,[]),u.Ab(1073742336,I.b,I.b,[]),u.Ab(1073742336,S.c,S.c,[]),u.Ab(1073742336,J.b,J.b,[]),u.Ab(1073742336,w.d,w.d,[]),u.Ab(1073742336,T.d,T.d,[]),u.Ab(1073742336,Y.c,Y.c,[]),u.Ab(1073742336,z.c,z.c,[]),u.Ab(1073742336,D.b,D.b,[]),u.Ab(1073742336,G.f,G.f,[]),u.Ab(1073742336,M.e,M.e,[]),u.Ab(1073742336,v.b,v.b,[]),u.Ab(1073742336,Q.e,Q.e,[]),u.Ab(1073742336,U.a,U.a,[]),u.Ab(1073742336,a.c,a.c,[]),u.Ab(1073742336,c.g,c.g,[]),u.Ab(1073742336,V.b,V.b,[]),u.Ab(1073742336,K.a,K.a,[]),u.Ab(1073742336,W.a,W.a,[[2,a.g],u.C]),u.Ab(1073742336,i,i,[]),u.Ab(1024,E.i,function(){return[[{path:"",component:p,data:O}]]},[])])})}}]);