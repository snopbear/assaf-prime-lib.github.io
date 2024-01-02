"use strict";(self.webpackChunkprime_lib_doc=self.webpackChunkprime_lib_doc||[]).push([[3520],{8527:(i,e,o)=>{o.d(e,{w:()=>n});const n=(r,l,t)=>{let a="";return r?.map(p=>{a+=`<p><span style="color: #b96ad9;">import</span> { <span style="color: rgb(0, 168, 133);">${p.import}</span> } <span style="color: rgb(185, 106, 217);">from</span> <span style="color: rgb(224, 62, 45);">'${p.from}'</span>;</p>`}),a+=`<p><span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span><br>&nbsp; &nbsp; ...<br><span style="color: #b96ad9;">})</span><br><span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span> <span style="color: #169179;">YourComponent</span>${t?'<span> <span style="color: rgb(85, 57, 130);">implements </span>'+t+"</span>":""} {<br>${l}<br>}</p>`,a}},4897:(i,e,o)=>{o.d(e,{$:()=>n});const n=(r,l,t,a)=>({defaultValue:a,description:t,type:l,name:r})},6284:(i,e,o)=>{o.d(e,{ap:()=>r,iJ:()=>l,jX:()=>n,ym:()=>t});const n=a=>a,r=a=>a,l=a=>a,t=a=>a},3520:(i,e,o)=>{o.d(e,{_E:()=>b,kx:()=>c,Bv:()=>m,kM:()=>t,m2:()=>l,pj:()=>a});var n=o(8527),r=o(6284);const l=[{title:"Basic Calendar",ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl" \n    label="Basic Calendar">\n</assaf-calendar>'},{title:"Flaot label",floatLabel:!0,ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl" \n    label="Flaot label" [floatLabel]="true">\n</assaf-calendar>'},{title:"Editable Calendar",readOnly:!1,floatLabel:!0,ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl" \n    [readOnly]="false" placeholder="Pick date" \n    label="Editable calendar" [floatLabel]="true">\n</assaf-calendar>'},{title:"Calendar with weeks",showWeeks:!0,floatLabel:!0,ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl" \n    [showWeeks]="true"\n    label="Calendar with weeks"\n    placeholder="Pick date" [floatLabel]="true">\n</assaf-calendar>'},{title:"Calendar with icon",showButtons:!0,showCalendarIcon:!0,floatLabel:!0,ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl"  \n    [showButtons]="true" [showCalendarIcon]="true"\n    placeholder="Pick date" \n    label="Pick date" [floatLabel]="true">\n</assaf-calendar>'}],t=[{title:"Time Calendar Mode",label:"Pick Time",mode:(0,r.iJ)("time"),ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl" label="Pick Time"\n    mode="time" palceholder="Pick Time">\n</assaf-calendar>'},{title:"Month Calendar Mode",label:"Pick Month",mode:(0,r.iJ)("month"),ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl" label="Pick Month" \n    mode="month" placeholder="Pick Month" \n    [floatLabel]="true">\n</assaf-calendar>'},{title:"Year Calendar Mode",mode:(0,r.iJ)("year"),label:"Pick Year",ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl" \n     mode="year" placeholder="Pick Year" \n     label="Pick Year" [floatLabel]="true">\n</assaf-calendar>'},{title:"Date Time Format Calender Mode",label:"Pick Date",mode:(0,r.iJ)("date-time"),ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl" \n     mode="date-time" placeholder="Pick Date" \n     label="Pick Date" [floatLabel]="true">\n</assaf-calendar>'},{title:"Range picker Calendar Mode",mode:(0,r.iJ)("range"),label:"Range Picker",ts:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'),html:'<assaf-calendar controlName="formControl"  \n    mode="range" placeholder="Range Picker" \n    label="Range Picker" [floatLabel]="true">\n</assaf-calendar>'}],a={date:(0,n.w)([{import:"FormBuilder, FormGroup",from:"@angular/forms"}],'<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; today</span>:<span style="color: rgb(65, 168, 95);">Date</span> = new&nbsp;<span style="color: rgb(243, 121, 52);">Date()</span>;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; minDate</span>:<span style="color: rgb(65, 168, 95);">Date</span> = new<span style="color: rgb(243, 121, 52);">&nbsp;Date()</span>;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; maxDate</span>:<span style="color: rgb(65, 168, 95);">Date</span> = new<span style="color: rgb(243, 121, 52);">&nbsp;Date()</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br><span style=\'color: rgb(41, 105, 176); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;\'>&nbsp; &nbsp;  this.maxDate</span><span style=\'color: rgb(0, 0, 0); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\'>.</span><span style=\'color: rgb(243, 121, 52); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;\'>setDate(</span><span style=\'color: rgb(41, 105, 176); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;\'>this.today</span><span style=\'color: rgb(0, 0, 0); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\'>.</span><span style=\'color: rgb(243, 121, 52); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;\'>getDate()</span><span style=\'color: rgb(0, 0, 0); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\'>&nbsp;+ 2</span><span style=\'color: rgb(243, 121, 52); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;\'>)</span><br>&nbsp; &nbsp; }</span>'),minCalendar:{title:"Calendar With Min Date",label:"Min",html:'<assaf-calendar controlName="formControl" \n    [minDate]="minDate"\n    mode="min-max"\n    label="Min" [floatLabel]="true">\n</assaf-calendar>'},maxCalendar:{title:"Calendar With Max Date",label:"Max",html:'<assaf-calendar controlName="formControl" \n    mode="min-max"\n    [maxDate]="maxDate"\n    label=\'Max\' [floatLabel]="true">\n</assaf-calendar>'},minMax:{title:"Calendar With Min-Max Date",label:"Min-Max",html:'<assaf-calendar controlName="formControl" \n    [minDate]="minDate"\n    [maxDate]="maxDate"\n    mode="min-max"\n    label="Min-Max" [floatLabel]="true">\n</assaf-calendar>'},errorHandel:{ts:(0,n.w)([{import:"FormBuilder, FormGroup, Validators",from:"@angular/forms"},{import:"FormInputErrors",from:"@assaf-garage/assaf-core-library"}],'<span style="color: #3598db;">   errors!</span>: <span style="color: #b96ad9;">FormInputErrors</span>;\n   <span style="color: #3598db;">form</span>!: <span style="color: #b96ad9;">FormGroup</span>; \n    <p><span style="color: rgb(85, 57, 130);" >   constructor (private </span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span>\n        <span style="color: #169179;">this.form</span> = this._fb.group({\n            control2: [\'\', Validators.required],\n        });\n        <span style="color: #169179;">this.errors</span> = {\n            required: \'This Input is required\',\n        };\n    <span style="color: #b96ad9;">}</span>'),title:"Calendar With Error Hadle",html:'<assaf-calendar controlName="control2"\n    label="Calendar With Error Hadle" [floatLabel]="true">\n</assaf-calendar>'}},b={import:(0,o(5384).s)([{import:"AssafCalendarModule",from:"assaf-prime-lib/@components/@calendar"}]),usage:{html:"<form [formGroup]='form'>\n    <assaf-calendar controlName='formControl'></assaf-calendar>\n</form>",ts:'<p><span style="color: #b96ad9;">import</span>  {<span style="color: #169179;"> FormBuilder, FormGroup, Validators </span>} <span style="color: #b96ad9;">from</span> <span style="color: #e03e2d;"> \'@angular/forms\'</span>;\n<span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span>\n...\n<span style="color: #b96ad9;">})</span>\n<span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span>  <span style="color: #169179;">YourComponent</span> {\n<p><span style="color: #3598db;">    form</span>!: <span style="color: #169179;">FormGroup</span>; \n<p><span style="color: #b96ad9;">    constructor (private </span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span>\n    <span style="color: #169179;">  this.form</span> = this._fb.group({\n          formControl: [],\n      });\n    }\n}'}};var s=o(4897);const c=[(0,s.$)("required?","string","Form validator required error message"),(0,s.$)("minlength?","string","Form validator minimum length error message"),(0,s.$)("maxlength?","string","Form validator maximum length error message"),(0,s.$)("pattern?","string","Form validator pattern error message"),(0,s.$)("email?","string","Form validator email error message"),(0,s.$)("max?","string","Form validator maximum value error message"),(0,s.$)("min?","string","Form validator minimum value error message"),(0,s.$)("requiredTrue?","string","Form validator required true error message (used with checkboxes)")],m=[(0,s.$)("mode",['"min-max"','"range"','"month"','"time"','"date-time"','"year"'],"Sets calendar mode, for basic mode don't set value for property","undefined"),(0,s.$)("label","string","Sets input label","undefined"),(0,s.$)("placeholder","string","Sets input placeholder","'Pick Date'"),(0,s.$)("controlName","string","Form control name for data binding (need to be provided otherwise an exception is thrown)","undefined"),(0,s.$)("floatLabel","boolean","Displays label as floating label above input","false"),(0,s.$)("showCalendarIcon","boolean","Shows/hides calendar icon next to input","false"),(0,s.$)("readOnly","boolean","Enables user editing for selected date (modifiable input)","true"),(0,s.$)("timeFormat",['"12"','"24"'],"Time selection format (used only in any mode has time enabled)",'"12"'),(0,s.$)("showButtons","boolean","Shows today & clear buttons in date picking","false"),(0,s.$)("enableInline","boolean","Shows date picking as inline view","false"),(0,s.$)("showWeeks","boolean","Shows week numbers in date picking","false"),(0,s.$)("minDate","Date","Date object used when min-max mode is selected","undefined"),(0,s.$)("controlErrors","FormInputErrors","Control errors messages","undefined"),(0,s.$)("labelClass","string","External styling class for label (not when floatLabel is active)s","undefined"),(0,s.$)("styleClass","string","External styling class/es","undefined"),(0,s.$)("maxDate","Date","Date object used when min-max mode is selected","undefined"),(0,s.$)("dateFormat","string",["d - day of month (no leading zero)","dd - day of month (two digit)","o - day of the year (no leading zeros)","oo - day of the year (three digit)","D - day name short","DD - day name long","m - month of year (no leading zero)","mm - month of year (two digit)","M - month name short","MM - month name long","y - year (two digit)","yy - year (four digit)","@ - Unix timestamp (ms since 01/01/1970)","! - Windows ticks (100ns since 01/01/0001)","'...' - literal text","'' - single quote","anything else - literal text"],'"dd-mm-yy"')]}}]);