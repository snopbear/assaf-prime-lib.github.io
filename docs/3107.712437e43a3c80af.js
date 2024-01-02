"use strict";(self.webpackChunkprime_lib_doc=self.webpackChunkprime_lib_doc||[]).push([[3107],{3107:(C,r,n)=>{n.r(r),n.d(r,{DatatableInstallComponent:()=>_});var d=n(7979),l=n(665),i=n(4844),m=n(5619),u=n(3763),b=n(2338),p=n(7860),t=n(4946),f=n(5219),Z=n(622),g=n(6814);function h(a,c){if(1&a&&(t.TgZ(0,"h3",5),t._uU(1,"DataTable Properties"),t.qZA(),t._UZ(2,"assaf-data-table",6),t.TgZ(3,"h3",7),t._uU(4,"Search Input Properties"),t.qZA(),t._UZ(5,"assaf-data-table",6)),2&a){const e=t.oxw();t.xp6(2),t.Q6J("tableColumns",e._headers)("data",e._properties),t.xp6(3),t.Q6J("tableColumns",e._headers)("data",e._searchProperties)}}function T(a,c){if(1&a&&t._UZ(0,"assaf-data-table",6),2&a){const e=t.oxw();t.Q6J("tableColumns",e._generalHeaders)("data",e._events)}}function x(a,c){if(1&a&&(t.TgZ(0,"div")(1,"h3",8),t._uU(2,"<TableColumn> Interface"),t.qZA(),t._UZ(3,"assaf-data-table",6),t.TgZ(4,"p",9),t._uU(5,"* ? indicates optional parameter"),t.qZA()(),t.TgZ(6,"div",10)(7,"h3",8),t._uU(8,"<State> Interface"),t.qZA(),t._UZ(9,"assaf-data-table",6),t.TgZ(10,"p",9),t._uU(11,"* ? indicates optional parameter"),t.qZA()(),t.TgZ(12,"div",10)(13,"h3",8),t._uU(14,"<ButtonConfig> Interface"),t.qZA(),t._UZ(15,"assaf-data-table",6),t.TgZ(16,"p",9),t._uU(17,"* ? indicates optional parameter"),t.qZA()(),t.TgZ(18,"div",10)(19,"h3",8),t._uU(20,"<DropDownConfig> Interface"),t.qZA(),t._UZ(21,"assaf-data-table",6),t.TgZ(22,"p",9),t._uU(23,"* ? indicates optional parameter"),t.qZA()()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("tableColumns",e._generalHeaders)("data",e._interfaces.tableColumn),t.xp6(6),t.Q6J("tableColumns",e._generalHeaders)("data",e._interfaces.state),t.xp6(6),t.Q6J("tableColumns",e._generalHeaders)("data",e._interfaces.buttonConfig),t.xp6(6),t.Q6J("tableColumns",e._generalHeaders)("data",e._interfaces.dropdown)}}let v=(()=>{class a{constructor(){this._headers=(0,u._)(),this._isMobile=new m.X(0),this._generalHeaders=(0,b.a)()}onResize(e){this._isMobile.next(e.target?.innerWidth)}get _properties(){return(0,p.d)(l.GT)}get _searchProperties(){return l.Vw}get _events(){return(0,p.d)(l.j7)}get _interfaces(){return l.Q8}ngOnInit(){this._isMobile.next(window.innerWidth)}static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["assaf-documentation-datatable-properties"]],hostBindings:function(s,o){1&s&&t.NdJ("resize",function(A){return o.onResize(A)},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:8,vars:4,consts:[[3,"scrollable","styleClass"],["header","Properties","leftIcon","pi pi-cog"],["pTemplate","content"],["header","Events","leftIcon","pi pi-eject"],["header","Interfaces","leftIcon","pi-code pi"],[1,"font-bold","text-xl","mb-5"],[3,"tableColumns","data"],[1,"font-bold","text-xl","my-5"],[1,"font-bold","text-xl","mb-3"],[1,"text-gray-600","font-bold"],[1,"mt-10"]],template:function(s,o){1&s&&(t.TgZ(0,"p-tabView",0),t.ALo(1,"async"),t.TgZ(2,"p-tabPanel",1),t.YNc(3,h,6,4,"ng-template",2),t.qZA(),t.TgZ(4,"p-tabPanel",3),t.YNc(5,T,1,2,"ng-template",2),t.qZA(),t.TgZ(6,"p-tabPanel",4),t.YNc(7,x,24,8,"ng-template",2),t.qZA()()),2&s&&(t.s9C("styleClass",o._isMobile.value<=768?"center-tabview":""),t.Q6J("scrollable",t.lcZ(1,2,o._isMobile)<=425))},dependencies:[i.LU,i.xf,i.x4,f.jx,d.m,Z.Yo,g.Ov]})}return a})();var U=n(8558);let _=(()=>{class a{get install(){return l.GI}static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["assaf-documentation-datatable-install"]],standalone:!0,features:[t.jDz],decls:33,vars:4,consts:[[1,"p-5"],[1,"text-4xl","font-bold","mb-4"],[1,"text-gray-600"],[1,"mt-10"],[1,"text-xl","font-bold"],[1,"mt-5"],[1,"text-gray-600","mb-3"],[3,"tsText"],[1,"mt-10","mb-10"],[1,"text-[var(--orange-color)]","font-bold"],[3,"htmlText","tsText"],[3,"htmlText"]],template:function(s,o){1&s&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2,"Assaf-Datatable"),t.qZA(),t.TgZ(3,"p",2),t._uU(4,"Datatable displays data in tabular format"),t.qZA(),t.TgZ(5,"div",3)(6,"h2",4),t._uU(7,"Imports"),t.qZA(),t.TgZ(8,"div",5)(9,"p",6),t._uU(10," In your desired module add the below import: "),t.qZA(),t._UZ(11,"assaf-documentation-code-block",7),t.qZA()(),t.TgZ(12,"div",8)(13,"h2",4),t._uU(14,"Basic usage"),t.qZA(),t.TgZ(15,"div",5)(16,"p",6),t._uU(17," To start using assaf-datatable you need to "),t.TgZ(18,"span",9),t._uU(19,"provide two arrays"),t.qZA(),t._uU(20,"; one is the data that will be displayed & the other is responsible for table configuration "),t.qZA(),t._UZ(21,"assaf-documentation-code-block",10),t.qZA()(),t.TgZ(22,"div",8)(23,"h2",4),t._uU(24,"Search Input"),t.qZA(),t.TgZ(25,"div",5)(26,"p",6),t._uU(27," Search input is a special component made only for datatable to achieve global search based on "),t.TgZ(28,"span",9),t._uU(29,"filterKeys"),t.qZA(),t._uU(30," values "),t.qZA(),t._UZ(31,"assaf-documentation-code-block",11),t.qZA()(),t._UZ(32,"assaf-documentation-datatable-properties"),t.qZA()),2&s&&(t.xp6(11),t.Q6J("tsText",o.install.import),t.xp6(10),t.Q6J("htmlText",o.install.htmlUse)("tsText",o.install.tsUse),t.xp6(10),t.Q6J("htmlText",o.install.search))},dependencies:[d.m,U.P,v]})}return a})()}}]);