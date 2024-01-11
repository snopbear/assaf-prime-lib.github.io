"use strict";(self.webpackChunkprime_lib_doc=self.webpackChunkprime_lib_doc||[]).push([[2604],{8527:(b,t,o)=>{o.d(t,{w:()=>p});const p=(l,i,s)=>{let e="";return l?.map(n=>{e+=`<p><span style="color: #b96ad9;">import</span> { <span style="color: rgb(0, 168, 133);">${n.import}</span> } <span style="color: rgb(185, 106, 217);">from</span> <span style="color: rgb(224, 62, 45);">'${n.from}'</span>;</p>`}),e+=`<p><span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span><br>&nbsp; &nbsp; ...<br><span style="color: #b96ad9;">})</span><br><span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span> <span style="color: #169179;">YourComponent</span>${s?'<span> <span style="color: rgb(85, 57, 130);">implements </span>'+s+"</span>":""} {<br>${i}<br>}</p>`,e}},2604:(b,t,o)=>{o.r(t),o.d(t,{HotjarComponent:()=>n});var p=o(7979);const i={install:"npm install ngx-hotjar",import:'<p><span style="color: rgb(85, 57, 130);">import</span> { <span style="color: rgb(65, 168, 95);">NgxHotjarModule</span>,<span style="color: rgb(65, 168, 95);">NgxHotjarRouterModule</span>} <span style="color: rgb(85, 57, 130);">from</span> &quot;<span style="color: rgb(184, 49, 47);">ngx-hotjar</span>&quot;;<br>//.&nbsp;<br>//.&nbsp;<br><span style="color: rgb(65, 168, 95);">@NgModule</span><span style="color: rgb(243, 121, 52);">(</span>{<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; declarations</span>: [],<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; imports</span>: [<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; NgxHotjarModule</span>.<span style="color: rgb(243, 121, 52);">forRoot(</span>YOUR_HOTJAR_SITE_ID<span style="color: rgb(243, 121, 52);">)</span>,&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; NgxHotjarRouterModule</span>,&nbsp;<br>&nbsp; &nbsp; &nbsp; //..&nbsp;<br>&nbsp; &nbsp; ],&nbsp;<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; providers</span>: [],<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; bootstrap</span>: [<span style="color: rgb(41, 105, 176);">AppComponent</span>],<br>}<span style="color: rgb(243, 121, 52);">)&nbsp;</span><br><span style="color: rgb(85, 57, 130);">export</span> <span style="color: rgb(44, 130, 201);">class</span> <span style="color: rgb(65, 168, 95);">AppModule</span> {}</p>',usage:(0,o(8527).w)([{import:"Component",from:"@angular/core"},{import:"DataLayerService",from:"../../services/dataLayer-service.service"}],'<p><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span> (<span style="color: rgb(85, 57, 130);">private</span> <span style="color: rgb(41, 105, 176);">hjService</span> :&nbsp;<span style="color: rgb(65, 168, 95);">NgxHotjarService</span>){}<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; onLoginBtnClick()</span>{<br> <span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; &nbsp;// you can add any attributes to &quot;hj&quot; function</span><br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; this</span>.<span style="color: rgb(41, 105, 176);">hjService</span>.<span style="color: rgb(243, 121, 52);">hj(</span>&quot;login&quot;, &quot;LoginButton&quot;<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</p>')};var s=o(4946),e=o(8558);let n=(()=>{class r{get steps(){return i}static#s=this.\u0275fac=function(a){return new(a||r)};static#o=this.\u0275cmp=s.Xpm({type:r,selectors:[["assaf-documentation-hotjar"]],standalone:!0,features:[s.jDz],decls:68,vars:3,consts:[[1,"p-8"],[1,"text-4xl","font-bold","mb-4"],[1,"mt-10"],[1,"text-gray-600","mb-3"],[1,"my-3"],[1,"text-gray-900","mt-4","mb-2","text-xl","font-bold"],[1,"list-disc","ps-4","mb-4"],[1,"text-gray-800"],[1,"text-red-900","m-3","ms-0","text-xl"],[1,"mb-2","font-bold"],[1,"text-gray-800","mb-2"],[3,"otherText"],[3,"tsText"]],template:function(a,c){1&a&&(s.TgZ(0,"section",0)(1,"h1",1),s._uU(2,"Hotjar"),s.qZA(),s.TgZ(3,"div",2)(4,"p",3)(5,"strong"),s._uU(6,"Hotjar"),s.qZA(),s._uU(7," is a powerful web analytics and feedback tool that allows website owners to understand how their users interact with their site. It provides a range of features, including heatmaps, visitor recordings, conversion funnels, form analysis, feedback polls and surveys, and user testing. "),s.qZA(),s.TgZ(8,"section",4)(9,"h3",5),s._uU(10," What are its benefits? "),s.qZA(),s.TgZ(11,"ul",6)(12,"li",7)(13,"strong"),s._uU(14,"Improved User Experience"),s.qZA(),s._uU(15,": Hotjar provides insight into how users interact with your website, allowing you to identify areas for improvement and optimize the user experience. "),s.qZA(),s.TgZ(16,"li",7)(17,"strong"),s._uU(18,"Increased Conversion Rates"),s.qZA(),s._uU(19,": By understanding how users navigate through your site, you can identify and remove barriers to conversion, leading to increased conversion rates and revenue. "),s.qZA(),s.TgZ(20,"li",7)(21,"strong"),s._uU(22,"Better Customer Understanding"),s.qZA(),s._uU(23,": Hotjar's feedback tools allow you to collect valuable insights from your users, including their opinions, preferences, and pain points. This can help you tailor your products and services to better meet their needs. "),s.qZA(),s.TgZ(24,"li",7)(25,"strong"),s._uU(26,"Faster Problem Resolution:"),s.qZA(),s._uU(27," Hotjar's visitor recordings and heatmaps can help you quickly identify and resolve issues on your website, improving the overall user experience. "),s.qZA(),s.TgZ(28,"li",7)(29,"strong"),s._uU(30,"Cost-Effective"),s.qZA(),s._uU(31,": Hotjar is an affordable web analytics tool that provides a range of features typically found in more expensive tools, making it a cost-effective choice for businesses of all sizes. "),s.qZA()()(),s.TgZ(32,"span",8),s._uU(33,"Please follow the next steps to implement "),s.TgZ(34,"strong"),s._uU(35,"Hotjar"),s.qZA(),s._uU(36," in your project"),s.qZA(),s.TgZ(37,"section")(38,"h3",9),s._uU(39,"Step 1 :"),s.qZA(),s.TgZ(40,"p",10),s._uU(41,"install ngx-hotjar package"),s.qZA(),s._UZ(42,"assaf-documentation-code-block",11),s.qZA(),s.TgZ(43,"section",4)(44,"header")(45,"h3",9),s._uU(46,"Step 2 :"),s.qZA(),s.TgZ(47,"p",10),s._uU(48," Add "),s.TgZ(49,"strong"),s._uU(50,'"NgxHotjarModule, NgxHotjarRouterModule"'),s.qZA(),s._uU(51," modules in "),s.TgZ(52,"strong"),s._uU(53,"app.module.ts"),s.qZA(),s._uU(54," and "),s._UZ(55,"br"),s._uU(56," Replace YOUR_HOTJAR_SITE_ID with your Hotjar site ID. account's ID "),s.qZA()(),s._UZ(57,"assaf-documentation-code-block",12),s.qZA(),s.TgZ(58,"section",4)(59,"header")(60,"h3",9),s._uU(61,"Step 3 :"),s.qZA(),s.TgZ(62,"p",10),s._uU(63," use "),s.TgZ(64,"strong"),s._uU(65,"NgxHotjarService"),s.qZA(),s._uU(66," service in your component "),s.qZA()(),s._UZ(67,"assaf-documentation-code-block",12),s.qZA()()()),2&a&&(s.xp6(42),s.Q6J("otherText",c.steps.install),s.xp6(15),s.Q6J("tsText",c.steps.import),s.xp6(10),s.Q6J("tsText",c.steps.usage))},dependencies:[p.m,e.P]})}return r})()}}]);