"use strict";(self.webpackChunkprime_lib_doc=self.webpackChunkprime_lib_doc||[]).push([[180],{8527:(w,b,i)=>{i.d(b,{w:()=>e});const e=(h,u,m)=>{let f="";return h?.map(p=>{f+=`<p><span style="color: #b96ad9;">import</span> { <span style="color: rgb(0, 168, 133);">${p.import}</span> } <span style="color: rgb(185, 106, 217);">from</span> <span style="color: rgb(224, 62, 45);">'${p.from}'</span>;</p>`}),f+=`<p><span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span><br>&nbsp; &nbsp; ...<br><span style="color: #b96ad9;">})</span><br><span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span> <span style="color: #169179;">YourComponent</span>${m?'<span> <span style="color: rgb(85, 57, 130);">implements </span>'+m+"</span>":""} {<br>${u}<br>}</p>`,f}},4897:(w,b,i)=>{i.d(b,{$:()=>e});const e=(h,u,m,f)=>({defaultValue:f,description:m,type:u,name:h})},5939:(w,b,i)=>{i.d(b,{t:()=>f});var e=i(4946),h=i(8193),u=i(8558);const m=["*"];let f=(()=>{class p{static#e=this.\u0275fac=function(g){return new(g||p)};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["assaf-documentation-example-container"]],inputs:{title:"title",html:"html",ts:"ts",otherText:"otherText",styleClass:"styleClass"},ngContentSelectors:m,decls:5,vars:7,consts:[[1,"flex","flex-col","h-full"],["align","left",3,"label"],[3,"htmlText","tsText","otherText"]],template:function(g,_){1&g&&(e.F$t(),e.TgZ(0,"div",0),e._UZ(1,"assaf-divider",1),e.TgZ(2,"div"),e.Hsn(3),e._UZ(4,"assaf-documentation-code-block",2),e.qZA()()),2&g&&(e.xp6(1),e.Q6J("label",_.title),e.xp6(1),e.Gre("",_.styleClass," h-full max-h-full"),e.xp6(2),e.Q6J("htmlText",_.html)("tsText",_.ts)("otherText",_.otherText))},dependencies:[h.A,u.P]})}return p})()},3338:(w,b,i)=>{i.r(b),i.d(b,{CheckboxExampleComponent:()=>X});var e=i(4946),h=i(6814),u=i(95),m=i(5219),f=i(2591),p=i(2332);const y=["input"];function I(n,r){if(1&n&&e._UZ(0,"span",10),2&n){const t=e.oxw(3);e.Q6J("ngClass",t.checkboxIcon),e.uIk("data-pc-section","icon")}}function g(n,r){1&n&&e._UZ(0,"CheckIcon",11),2&n&&(e.Q6J("styleClass","p-checkbox-icon"),e.uIk("data-pc-section","icon"))}function _(n,r){if(1&n&&(e.ynx(0),e.YNc(1,I,1,2,"span",8),e.YNc(2,g,1,2,"CheckIcon",9),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.checkboxIcon),e.xp6(1),e.Q6J("ngIf",!t.checkboxIcon)}}function x(n,r){}function l(n,r){1&n&&e.YNc(0,x,0,0,"ng-template")}function a(n,r){if(1&n&&(e.TgZ(0,"span",12),e.YNc(1,l,1,0,null,13),e.qZA()),2&n){const t=e.oxw(2);e.uIk("data-pc-section","icon"),e.xp6(1),e.Q6J("ngTemplateOutlet",t.checkboxIconTemplate)}}function c(n,r){if(1&n&&(e.ynx(0),e.YNc(1,_,3,2,"ng-container",5),e.YNc(2,a,2,2,"span",7),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.checkboxIconTemplate),e.xp6(1),e.Q6J("ngIf",t.checkboxIconTemplate)}}const k=function(n,r,t){return{"p-checkbox-label":!0,"p-checkbox-label-active":n,"p-disabled":r,"p-checkbox-label-focus":t}};function v(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"label",14),e.NdJ("click",function(s){e.CHM(t);const d=e.oxw();return e.KtG(d.onClick(s))}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.Tol(t.labelStyleClass),e.Q6J("ngClass",e.kEZ(6,k,t.checked(),t.disabled,t.focused)),e.uIk("for",t.inputId)("data-pc-section","label"),e.xp6(1),e.hij(" ",t.label,"")}}const M=function(n,r,t){return{"p-checkbox p-component":!0,"p-checkbox-checked":n,"p-checkbox-disabled":r,"p-checkbox-focused":t}},Z=function(n,r,t){return{"p-highlight":n,"p-disabled":r,"p-focus":t}},B={provide:u.JU,useExisting:(0,e.Gpc)(()=>A),multi:!0};let A=(()=>{class n{cd;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;trueValue=!0;falseValue=!1;onChange=new e.vpe;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(t){this.cd=t}ngAfterContentInit(){this.templates.forEach(t=>{"icon"===t.getType()&&(this.checkboxIconTemplate=t.template)})}onClick(t){if(!this.disabled&&!this.readonly){let o;this.inputViewChild.nativeElement.focus(),this.binary?(o=this.checked()?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(o=this.checked()?this.model.filter(s=>!p.gb.equals(s,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this.onChange.emit({checked:o,originalEvent:t})}}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:p.gb.contains(this.value,this.model)}static \u0275fac=function(o){return new(o||n)(e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["p-checkbox"]],contentQueries:function(o,s,d){if(1&o&&e.Suo(d,m.jx,4),2&o){let C;e.iGM(C=e.CRH())&&(s.templates=C)}},viewQuery:function(o,s){if(1&o&&e.Gf(y,5),2&o){let d;e.iGM(d=e.CRH())&&(s.inputViewChild=d.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e._Bn([B])],decls:7,vars:35,consts:[[3,"ngStyle","ngClass","click"],[1,"p-hidden-accessible"],["type","checkbox",3,"value","checked","disabled","readonly","focus","blur"],["input",""],[1,"p-checkbox-box",3,"ngClass"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0),e.NdJ("click",function(C){return s.onClick(C)}),e.TgZ(1,"div",1)(2,"input",2,3),e.NdJ("focus",function(){return s.onFocus()})("blur",function(){return s.onBlur()}),e.qZA()(),e.TgZ(4,"div",4),e.YNc(5,c,3,2,"ng-container",5),e.qZA()(),e.YNc(6,v,2,10,"label",6)),2&o&&(e.Tol(s.styleClass),e.Q6J("ngStyle",s.style)("ngClass",e.kEZ(27,M,s.checked(),s.disabled,s.focused)),e.uIk("data-pc-name","checkbox")("data-pc-section","root"),e.xp6(1),e.uIk("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),e.xp6(1),e.Q6J("value",s.value)("checked",s.checked())("disabled",s.disabled)("readonly",s.readonly),e.uIk("id",s.inputId)("name",s.name)("tabindex",s.tabindex)("required",s.required)("aria-labelledby",s.ariaLabelledBy)("aria-label",s.ariaLabel)("aria-checked",s.checked())("data-pc-section","hiddenInput"),e.xp6(2),e.Q6J("ngClass",e.kEZ(31,Z,s.checked(),s.disabled,s.focused)),e.uIk("data-p-highlight",s.checked())("data-p-disabled",s.disabled)("data-p-focused",s.focused)("data-pc-section","input"),e.xp6(1),e.Q6J("ngIf",s.checked()),e.xp6(1),e.Q6J("ngIf",s.label))},dependencies:function(){return[h.mk,h.O5,h.tP,h.PC,f.n]},styles:["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"],encapsulation:2,changeDetection:0})}return n})(),V=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[h.ez,f.n,m.m8]})}return n})();function S(n,r){if(1&n&&(e.ynx(0,3),e._UZ(1,"p-checkbox",4),e.BQk()),2&n){const t=e.oxw();e.Q6J("formGroup",t._form),e.xp6(1),e.Q6J("label",t.label)("formControl",t.control)("value",t.controlValue)("styleClass",t.styleClass)("binary",!t.controlValue)("labelStyleClass",t.labelStyleClass)}}function O(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"p-checkbox",5),e.NdJ("ngModelChange",function(s){e.CHM(t);const d=e.oxw();return e.KtG(d.value=s)})("ngModelChange",function(s){e.CHM(t);const d=e.oxw();return e.KtG(d.onChange(s))}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("label",t.label)("ngModel",t.value)("styleClass",t.styleClass)("labelStyleClass",t.labelStyleClass)("binary",!0)}}function F(n,r){if(1&n&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit,o=e.oxw(2);e.xp6(1),e.hij(" ",o.controlErrors[t]," ")}}function N(n,r){if(1&n&&(e.ynx(0),e.YNc(1,F,2,1,"p",7),e.BQk()),2&n){const t=r.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==o.control||null==o.control.errors?null:o.control.errors[t])}}function Y(n,r){if(1&n&&(e.ynx(0),e.YNc(1,N,2,1,"ng-container",6),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t._errorKeys)}}let D=(()=>{class n{constructor(t){this.__formdir=t,this.valueChange=new e.vpe,this._errorKeys=[]}ngOnInit(){this.__formdir&&(this._form=this.__formdir.control),this.validateBinding(),this.getKeys()}getKeys(){this.controlErrors&&(this._errorKeys=Object.keys(this.controlErrors))}onChange(t){this.valueChange.emit(t)}validateBinding(){if(void 0===(this._form?!this.value:this.value))throw new Error("No binding provided");if(this._form&&!this.control)throw new Error("Reactive form detected please provide controlName");if(this._form&&void 0!==this.value)throw new Error("FormGroup detected remove value binding")}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(u.sg,8))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["assaf-checkbox"]],inputs:{label:"label",control:"control",value:"value",styleClass:"styleClass",labelStyleClass:"labelStyleClass",controlErrors:"controlErrors",controlValue:"controlValue"},outputs:{valueChange:"valueChange"},decls:4,vars:3,consts:[[3,"ngIf","ngIfElse"],["elseBlock",""],[4,"ngIf"],[3,"formGroup"],[3,"label","formControl","value","styleClass","binary","labelStyleClass"],[3,"label","ngModel","styleClass","labelStyleClass","binary","ngModelChange"],[4,"ngFor","ngForOf"],["class","error",4,"ngIf"],[1,"error"]],template:function(o,s){if(1&o&&(e.YNc(0,S,2,7,"ng-template",0),e.YNc(1,O,1,5,"ng-template",null,1,e.W1O),e.YNc(3,Y,2,1,"ng-container",2)),2&o){const d=e.MAs(2);e.Q6J("ngIf",s._form)("ngIfElse",d),e.xp6(3),e.Q6J("ngIf",s.controlErrors&&!s.control.valid&&(s.control.touched||s.control.dirty))}},dependencies:[h.sg,h.O5,A,u.JJ,u.JL,u.oH,u.sg,u.On]})}return n})(),U=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[h.ez,V,u.UX,u.u5]})}return n})();var G=i(7979),E=i(5679),K=i(4352),P=i(9360),L=i(8251),H=i(5369),W=i(5939);function R(n,r){if(1&n&&(e.ynx(0),e._UZ(1,"assaf-checkbox",5),e.BQk()),2&n){const t=r.$implicit,o=r.index,s=e.oxw();e.xp6(1),e.Q6J("control",s.categoryController.controls[o])("label",t.key)("controlValue",t.value)}}function j(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"assaf-checkbox",6),e.NdJ("valueChange",function(){const d=e.CHM(t).$implicit,C=e.oxw();return e.KtG(C.showValue(d))}),e.qZA(),e.BQk()}if(2&n){const t=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("value",o.checked)("label",t.key)}}let X=(()=>{class n{get examples(){return E.aH}get categories(){return E.BH.categories}constructor(t,o){this.display=t,this._fb=o,this.checked="A",this.form=this._fb.group({category:this._fb.array(this.categories.map(()=>{this._fb.control(!1)}))})}get categoryController(){return this.form.controls.category}ngOnInit(){this.form.controls.category?.valueChanges.pipe(function $(n,r=K.z){return(0,P.e)((t,o)=>{let s=null,d=null,C=null;const J=()=>{if(s){s.unsubscribe(),s=null;const T=d;d=null,o.next(T)}};function z(){const T=C+n,Q=r.now();if(Q<T)return s=this.schedule(void 0,T-Q),void o.add(s);J()}t.subscribe((0,L.x)(o,T=>{d=T,C=r.now(),s||(s=r.schedule(z,n),o.add(s))},()=>{J(),o.complete()},void 0,()=>{d=s=null}))})}(100)).subscribe(t=>{this.display.displayToast("info","Value is",String(t.flat(1)))})}showValue(t){this.display.displayToast("info","Value is",t.value)}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(H.G9),e.Y36(u.qu))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["assaf-documentation-checkbox-example"]],standalone:!0,features:[e.jDz],decls:8,vars:9,consts:[[1,"p-5"],[3,"formGroup"],["styleClass","flex mb-4 gap-4 flex-col",3,"title","html","ts"],[1,"m-auto"],[4,"ngFor","ngForOf"],[1,"checkbox","flex","customCheckBox",3,"control","label","controlValue"],[1,"checkbox","flex","customCheckBox",3,"value","label","valueChange"]],template:function(o,s){1&o&&(e.TgZ(0,"section",0)(1,"section",1)(2,"assaf-documentation-example-container",2)(3,"section",3),e.YNc(4,R,2,3,"ng-container",4),e.qZA()()(),e.TgZ(5,"assaf-documentation-example-container",2)(6,"section",3),e.YNc(7,j,2,2,"ng-container",4),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("title",s.examples.basic.title)("html",s.examples.basic.htmlUse)("ts",s.examples.basic.tsUse),e.xp6(2),e.Q6J("ngForOf",s.categories),e.xp6(1),e.Q6J("title",s.examples.twoWay.title)("html",s.examples.twoWay.htmlUse)("ts",s.examples.twoWay.tsUse),e.xp6(2),e.Q6J("ngForOf",s.categories))},dependencies:[G.m,h.sg,u.JL,u.sg,W.t,U,D]})}return n})()},4352:(w,b,i)=>{i.d(b,{P:()=>_,z:()=>g});var e=i(7394);class h extends e.w0{constructor(l,a){super()}schedule(l,a=0){return this}}const u={setInterval(x,l,...a){const{delegate:c}=u;return c?.setInterval?c.setInterval(x,l,...a):setInterval(x,l,...a)},clearInterval(x){const{delegate:l}=u;return(l?.clearInterval||clearInterval)(x)},delegate:void 0};var m=i(9039);const p={now:()=>(p.delegate||Date).now(),delegate:void 0};class y{constructor(l,a=y.now){this.schedulerActionCtor=l,this.now=a}schedule(l,a=0,c){return new this.schedulerActionCtor(this,l).schedule(c,a)}}y.now=p.now;const g=new class I extends y{constructor(l,a=y.now){super(l,a),this.actions=[],this._active=!1}flush(l){const{actions:a}=this;if(this._active)return void a.push(l);let c;this._active=!0;do{if(c=l.execute(l.state,l.delay))break}while(l=a.shift());if(this._active=!1,c){for(;l=a.shift();)l.unsubscribe();throw c}}}(class f extends h{constructor(l,a){super(l,a),this.scheduler=l,this.work=a,this.pending=!1}schedule(l,a=0){var c;if(this.closed)return this;this.state=l;const k=this.id,v=this.scheduler;return null!=k&&(this.id=this.recycleAsyncId(v,k,a)),this.pending=!0,this.delay=a,this.id=null!==(c=this.id)&&void 0!==c?c:this.requestAsyncId(v,this.id,a),this}requestAsyncId(l,a,c=0){return u.setInterval(l.flush.bind(l,this),c)}recycleAsyncId(l,a,c=0){if(null!=c&&this.delay===c&&!1===this.pending)return a;null!=a&&u.clearInterval(a)}execute(l,a){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const c=this._execute(l,a);if(c)return c;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(l,a){let k,c=!1;try{this.work(l)}catch(v){c=!0,k=v||new Error("Scheduled action threw falsy error")}if(c)return this.unsubscribe(),k}unsubscribe(){if(!this.closed){const{id:l,scheduler:a}=this,{actions:c}=a;this.work=this.state=this.scheduler=null,this.pending=!1,(0,m.P)(c,this),null!=l&&(this.id=this.recycleAsyncId(a,l,null)),this.delay=null,super.unsubscribe()}}}),_=g}}]);