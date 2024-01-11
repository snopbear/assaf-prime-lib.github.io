"use strict";(self.webpackChunkprime_lib_doc=self.webpackChunkprime_lib_doc||[]).push([[3623],{4897:(g,p,s)=>{s.d(p,{$:()=>t});const t=(l,u,d,a)=>({defaultValue:a,description:d,type:u,name:l})},6284:(g,p,s)=>{s.d(p,{ap:()=>l,iJ:()=>u,jX:()=>t,ym:()=>d});const t=a=>a,l=a=>a,u=a=>a,d=a=>a},5939:(g,p,s)=>{s.d(p,{t:()=>a});var t=s(4946),l=s(8193),u=s(8558);const d=["*"];let a=(()=>{class f{static#t=this.\u0275fac=function(r){return new(r||f)};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["assaf-documentation-example-container"]],inputs:{title:"title",html:"html",ts:"ts",otherText:"otherText",styleClass:"styleClass"},ngContentSelectors:d,decls:5,vars:7,consts:[[1,"flex","flex-col","h-full"],["align","left",3,"label"],[3,"htmlText","tsText","otherText"]],template:function(r,m){1&r&&(t.F$t(),t.TgZ(0,"div",0),t._UZ(1,"assaf-divider",1),t.TgZ(2,"div"),t.Hsn(3),t._UZ(4,"assaf-documentation-code-block",2),t.qZA()()),2&r&&(t.xp6(1),t.Q6J("label",m.title),t.xp6(1),t.Gre("",m.styleClass," h-full max-h-full"),t.xp6(2),t.Q6J("htmlText",m.html)("tsText",m.ts)("otherText",m.otherText))},dependencies:[l.A,u.P]})}return f})()},9631:(g,p,s)=>{s.r(p),s.d(p,{ButtonUploaderExamplesComponent:()=>U});var t=s(4946),l=s(6814),u=s(707);function d(n,c){if(1&n&&t._UZ(0,"i"),2&n){const e=t.oxw();t.Tol(e.btnIcon?"pi "+e.btnIcon:"")}}function a(n,c){if(1&n&&(t.TgZ(0,"span",4),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.label)}}let f=(()=>{class n{constructor(){this.severity="info",this.isRaised=!1,this.isRounded=!1,this.isText=!1,this.isOutline=!1,this.iconPos="left",this.fileType="",this.multiple=!1,this.onChange=new t.vpe}onFileSelect(e){if(e.target.files.length>0){const i=Array.from(e.target.files);this.onChange.emit(this.multiple?i:i[0])}}onFileClick(e){e.target.value=""}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["assaf-button-uploader"]],inputs:{label:"label",severity:"severity",isRaised:"isRaised",isRounded:"isRounded",isText:"isText",isOutline:"isOutline",styleClass:"styleClass",btnIcon:"btnIcon",iconPos:"iconPos",fileType:"fileType",size:"size",multiple:"multiple"},outputs:{onChange:"onChange"},decls:5,vars:16,consts:[["pButton","","pRipple",""],[3,"class",4,"ngIf"],["class","button-uploader__text",4,"ngIf"],["type","file",3,"accept","multiple","change","click"],[1,"button-uploader__text"]],template:function(i,o){1&i&&(t.TgZ(0,"div")(1,"label",0),t.YNc(2,d,1,3,"i",1),t.YNc(3,a,2,1,"span",2),t.TgZ(4,"input",3),t.NdJ("change",function(h){return o.onFileSelect(h)})("click",function(h){return o.onFileClick(h)}),t.qZA()()()),2&i&&(t.Gre("button-uploader ",o.styleClass,""),t.xp6(1),t.O5Y("button-uploader__label p-button-",o.severity," ",o.isRounded?"p-button-rounded":""," ",o.isText?"p-button-text":""," ",o.isRaised?"p-button-raised":""," ",o.isOutline?"p-button-outlined":""," ","right"===o.iconPos?"right":""," p-button-",o.size,""),t.xp6(1),t.Q6J("ngIf",o.btnIcon),t.xp6(1),t.Q6J("ngIf",o.label),t.xp6(1),t.Q6J("accept",o.fileType)("multiple",o.multiple))},dependencies:[l.O5,u.Hq],styles:[".button-uploader[_ngcontent-%COMP%]{width:max-content;display:inline-block}.button-uploader__label[_ngcontent-%COMP%]{font-weight:700;display:flex;justify-content:center;align-items:center}.button-uploader__label[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{margin-right:.5rem}.button-uploader[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{order:2}.right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{order:1}.right[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{margin-right:0;margin-left:.5rem}"]})}return n})(),y=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[l.ez,u.hJ]})}return n})();var b=s(7979),r=s(5041),m=s(5369),x=s(95),T=s(1572),C=s(5939);function v(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"assaf-documentation-example-container",7)(2,"assaf-button-uploader",8),t.NdJ("onChange",function(o){t.CHM(e);const _=t.oxw();return t.KtG(_.showToast(o))}),t.qZA()(),t.BQk()}if(2&n){const e=c.$implicit;t.xp6(1),t.Q6J("html",e.html)("title",e.name),t.xp6(1),t.Q6J("label",e.name)("isRaised","Raised"===e.name)("isRounded","Rounded"===e.name)("isOutline","Outline"===e.name)("multiple","Multiple"===e.name)("isText","Text"===e.name)}}function B(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"assaf-button",9),t.NdJ("click",function(){const _=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.showSeverityCode(_.severity))}),t.qZA(),t.BQk()}if(2&n){const e=c.$implicit;t.xp6(1),t.Q6J("isRaised",!0)("label",e.severity)("severity",e.severity)}}function M(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"assaf-button",12),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,_=t.oxw();return t.KtG(_.showSizeCode(o.size))}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("isRaised",!0)("label",e.name)("size",e.size)}}function S(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"assaf-button",13),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.showSizeCode("normal"))}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("isRaised",!0)("label",e.name)}}function O(n,c){if(1&n&&(t.ynx(0),t.YNc(1,M,1,3,"assaf-button",10),t.YNc(2,S,1,2,"assaf-button",11),t.BQk()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf","Normal"!=e.name&&e.size),t.xp6(1),t.Q6J("ngIf","Normal"==e.name)}}let U=(()=>{class n{get properties(){return r._3}get uploaderButtonsShapes(){return r.VW.uploaderButtonsShapes}get uploaderButtonsSeverity(){return r.VW.btnSeverity}get uploaderButtonsSizes(){return r.VW.uploaderButtonsSizes}constructor(e){this.__toaster=e,this.severityHTMLcode=this.uploaderButtonsSeverity[0].html,this.buttonSizeHTMLcode=this.uploaderButtonsSizes[0].html}showSeverityCode(e){switch(e){case"success":this.severityHTMLcode=this.uploaderButtonsSeverity[0].html;break;case"warning":this.severityHTMLcode=this.uploaderButtonsSeverity[1].html;break;case"danger":this.severityHTMLcode=this.uploaderButtonsSeverity[2].html;break;case"info":this.severityHTMLcode=this.uploaderButtonsSeverity[3].html;break;case"help":this.severityHTMLcode=this.uploaderButtonsSeverity[4].html;break;case"secondary":this.severityHTMLcode=this.uploaderButtonsSeverity[5].html}}showSizeCode(e){switch(e){case"sm":this.buttonSizeHTMLcode=this.uploaderButtonsSizes[0].html;break;case"normal":this.buttonSizeHTMLcode=this.uploaderButtonsSizes[1].html;break;case"lg":this.buttonSizeHTMLcode=this.uploaderButtonsSizes[2].html}}showToast(e){this.__toaster.displayToast("success","",e.name+" Uploaded")}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(m.G9))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["assaf-documentation-button-uploader-examples"]],standalone:!0,features:[t.jDz],decls:10,vars:5,consts:[[1,"p-5"],[4,"ngFor","ngForOf"],[1,"mt-10"],["title","Severity Uploader Button","styleClass","flex mb-4 gap-4 flex-col",3,"html"],[1,"flex","gap-4","flex-wrap","justify-center"],["title","Uploader Button Sizes","styleClass","flex mb-4 gap-4 flex-col",3,"html"],[1,"flex","gap-4","flex-wrap","items-baseline","justify-center"],["styleClass","flex mb-4 gap-4 flex-col",3,"html","title"],["fileType",".pdf","btnIcon","pi-download",1,"flex","flex-col","m-auto",3,"label","isRaised","isRounded","isOutline","multiple","isText","onChange"],["btnIcon","pi-download",3,"isRaised","label","severity","click"],["btnIcon","pi-download",3,"isRaised","label","size","click",4,"ngIf"],["btnIcon","pi-download",3,"isRaised","label","click",4,"ngIf"],["btnIcon","pi-download",3,"isRaised","label","size","click"],["btnIcon","pi-download",3,"isRaised","label","click"]],template:function(i,o){1&i&&(t.TgZ(0,"form",0),t.YNc(1,v,3,8,"ng-container",1),t.TgZ(2,"section",2)(3,"assaf-documentation-example-container",3)(4,"section",4),t.YNc(5,B,2,3,"ng-container",1),t.qZA()()(),t.TgZ(6,"section",2)(7,"assaf-documentation-example-container",5)(8,"section",6),t.YNc(9,O,3,2,"ng-container",1),t.qZA()()()()),2&i&&(t.xp6(1),t.Q6J("ngForOf",o.uploaderButtonsShapes),t.xp6(2),t.Q6J("html",o.severityHTMLcode),t.xp6(2),t.Q6J("ngForOf",o.uploaderButtonsSeverity),t.xp6(2),t.Q6J("html",o.buttonSizeHTMLcode),t.xp6(2),t.Q6J("ngForOf",o.uploaderButtonsSizes))},dependencies:[b.m,l.sg,l.O5,x._Y,x.JL,x.F,T.G,C.t,y,f]})}return n})()}}]);