"use strict";(self.webpackChunkprime_lib_doc=self.webpackChunkprime_lib_doc||[]).push([[4792],{4792:(h,l,n)=>{n.r(l),n.d(l,{AuthModule:()=>g});var u=n(6814),c=n(9862),r=n(86),a=n(95),t=n(4946),d=n(5369);const m=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"",component:(()=>{class e{constructor(o,s,i){this._fb=o,this._router=s,this._display=i,this.validLogin={username:"Assaf",password:"Assaf123"},this.form=o.group({username:["Assaf",a.kI.required],password:["Assaf123",a.kI.required]})}login(){const o=this.form.value;o.password===this.validLogin.password&&o.username===this.validLogin.username?(localStorage.setItem("auth_data",o.username),this._router.navigate([""])):this._display.displayToast("error","Please enter a valid username or password")}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(a.qu),t.Y36(r.F0),t.Y36(d.G9))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["assaf-documentation-login"]],decls:19,vars:1,consts:[[1,"bg-trinary-color","flex","justifiy-center","items-center","min-h-screen"],[1,"max-w-lg","bg-primary-color","shadow-2xl","rounded-lg","mx-auto","text-center","p-8","pt-12","min-w-[21rem]"],[1,"lg:py-4","lg:px-3","lg:mb-4","w-fit","lg:w-full"],["routerLink","/",1,"text-white","flex","gap-4","justify-center","items-center","text-center","text-xl","font-extrabold"],[1,"w-[50px]"],["src","assets/image/assaf.jpeg","alt","assaf-logo",1,"mx-auto","rounded-3xl"],[1,"text-center","font-extrabold","-mt-3","text-3xl"],[1,"container","py-5","max-w-md","mx-auto"],[3,"formGroup"],[1,"mb-4"],["placeholder","Username","id","username","type","text","formControlName","username",1,"shadow","appearance-none","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline"],[1,"mb-6"],["placeholder","Password","id","password","type","password","formControlName","password",1,"shadow","appearance-none","rounded","w-full","py-2","px-3","text-gray-800","mb-3","leading-tight","focus:outline-none","focus:shadow-outline"],[1,"flex","items-center","justify-center"],["type","submit",1,"bg-trinary--color-m","hover:bg-[#06589a]","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline",3,"click"]],template:function(s,i){1&s&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"a",3)(4,"figure",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"span"),t._uU(7,"Mohammed Assaf"),t.qZA()()(),t.TgZ(8,"h1",6),t._uU(9,"Login"),t.qZA(),t.TgZ(10,"div",7)(11,"form",8)(12,"div",9),t._UZ(13,"input",10),t.qZA(),t.TgZ(14,"div",11),t._UZ(15,"input",12),t.qZA(),t.TgZ(16,"div",13)(17,"button",14),t.NdJ("click",function(){return i.login()}),t._uU(18," Sign In "),t.qZA()()()()()()),2&s&&(t.xp6(11),t.Q6J("formGroup",i.form))},dependencies:[r.rH,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:["h1[_ngcontent-%COMP%], button[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{color:#fff}"]})}return e})()}];let p=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(m),r.Bz]})}return e})();var f=n(7979);let g=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[u.ez,c.JF,p,f.m,r.Bz]})}return e})()}}]);