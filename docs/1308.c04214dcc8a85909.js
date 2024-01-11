"use strict";(self.webpackChunkprime_lib_doc=self.webpackChunkprime_lib_doc||[]).push([[1308],{4897:(u,r,t)=>{t.d(r,{$:()=>i});const i=(p,d,n,m)=>({defaultValue:m,description:n,type:d,name:p})},1308:(u,r,t)=>{t.r(r),t.d(r,{PhoneNumberInstallComponent:()=>Z});var i=t(7979);const d={import:(0,t(5384).s)([{import:"AssafPhoneNumber",from:"assaf-prime-lib/@components/@phone-number"}]),htmlUse:'<form [formGroup]="form">\n   <assaf-phonenumber controlName="phoneNumber"></assaf-phonenumber>\n</form>',tsUse:'<p><span style="color: #b96ad9;">import</span>  {<span style="color: #169179;"> FormBuilder, FormGroup </span>} <span style="color: #b96ad9;">from</span> <span style="color: #e03e2d;"> \'@angular/forms\'</span>;\n<span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span>\n...\n<span style="color: #b96ad9;">})</span>\n<span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span>  <span style="color: #169179;">YourComponent</span> {\n<p><span style="color: #b96ad9;">    constructor (private </span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span>\n    <span style="color: #169179;">  this.form</span> = this._fb.group({\n      phoneNumber: [],\n      });\n    }\n}'};var n=t(4897);const m=[(0,n.$)("controlName","string","Form control name for data binding (need to be provided otherwise an exception is thrown)","undefined"),(0,n.$)("customPlaceholder","string","Sets custom placeholder, when provided auto placeholder gets disabled","undefined"),(0,n.$)("styleClass","string","External styling class/es","undefined"),(0,n.$)("inputStyleClass","string","External styling class/es for phone input section","undefined"),(0,n.$)("dropdownStyleClass","string","External styling class/es for phone dropdown section","undefined"),(0,n.$)("pereferedCountry","CountryCode","Sets country to be selected on initial render","CountryCode.Egypt"),(0,n.$)("controlErrors","FormInputErrors","Control errors messages, validations are automatically added in Validators.pattern","undefined"),(0,n.$)("label","string","Sets input label text","undefined"),(0,n.$)("labelStyleClass","string","External styling class for label (not when floatLabel is active)","undefined"),(0,n.$)("onlyValidate","CountryCode[ ]","Enables validation for countries in array only","undefined")];var b=t(3763),f=t(7860),h=t(5619),e=t(4946),c=t(4844),y=t(5219),g=t(622),v=t(6814);function C(o,P){if(1&o&&e._UZ(0,"assaf-data-table",3),2&o){const a=e.oxw();e.Q6J("tableColumns",a._headers)("data",a.properties)}}let x=(()=>{class o{constructor(){this._headers=(0,b._)(),this._isMobile=new h.X(0)}get properties(){return(0,f.d)(m)}onResize(a){this._isMobile.next(a.target?.innerWidth)}ngOnInit(){this._isMobile.next(window.innerWidth)}static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["assaf-documentation-phone-number-table"]],hostBindings:function(s,l){1&s&&e.NdJ("resize",function(N){return l.onResize(N)},!1,e.Jf7)},standalone:!0,features:[e.jDz],decls:4,vars:4,consts:[[3,"scrollable","styleClass"],["header","Properties","leftIcon","pi pi-cog"],["pTemplate","content"],[3,"tableColumns","data"]],template:function(s,l){1&s&&(e.TgZ(0,"p-tabView",0),e.ALo(1,"async"),e.TgZ(2,"p-tabPanel",1),e.YNc(3,C,1,2,"ng-template",2),e.qZA()()),2&s&&(e.s9C("styleClass",l._isMobile.value<=768?"center-tabview":""),e.Q6J("scrollable",e.lcZ(1,2,l._isMobile)<=425))},dependencies:[i.m,c.xf,c.x4,y.jx,g.Yo,v.Ov]})}return o})();var T=t(8558);let Z=(()=>{class o{get install(){return d}get htmlUse(){}static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["assaf-documentation-phone-number-install"]],standalone:!0,features:[e.jDz],decls:22,vars:3,consts:[[1,"p-5"],[1,"text-4xl","font-bold","mb-4"],[1,"text-gray-600"],[1,"mt-10"],[1,"text-xl","font-bold"],[1,"mt-5"],[1,"text-gray-600","mb-3"],[3,"tsText"],[1,"mt-10","mb-10"],[1,"text-[var(--orange-color)]","font-bold"],[3,"htmlText","tsText"]],template:function(s,l){1&s&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Assaf-Phone Number"),e.qZA(),e._UZ(3,"p",2),e.TgZ(4,"div",3)(5,"h2",4),e._uU(6,"Imports"),e.qZA(),e.TgZ(7,"div",5)(8,"p",6),e._uU(9," In your desired module add the below import: "),e.qZA(),e._UZ(10,"assaf-documentation-code-block",7),e.qZA()(),e.TgZ(11,"div",8)(12,"h2",4),e._uU(13,"Basic usage"),e.qZA(),e.TgZ(14,"div",5)(15,"p",6),e._uU(16," To start using just pass value to the "),e.TgZ(17,"span",9),e._uU(18,"value"),e.qZA(),e._uU(19," attribute to be shown "),e.qZA(),e._UZ(20,"assaf-documentation-code-block",10),e.qZA()(),e._UZ(21,"assaf-documentation-phone-number-table"),e.qZA()),2&s&&(e.xp6(10),e.Q6J("tsText",l.install.import),e.xp6(10),e.Q6J("htmlText",l.install.htmlUse)("tsText",l.install.tsUse))},dependencies:[i.m,T.P,x]})}return o})()}}]);