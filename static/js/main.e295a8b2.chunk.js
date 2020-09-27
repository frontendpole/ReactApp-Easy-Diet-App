(this["webpackJsonpdiet-kit"]=this["webpackJsonpdiet-kit"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={FormWrapper:"Form_FormWrapper__2Jta0",radioInput:"Form_radioInput__Al-GI",select:"Form_select__2CDK7",option:"Form_option__1I-oa"}},function(e,t,a){e.exports={AppWrapper:"App_AppWrapper__2ctjo",AppMain:"App_AppMain__2Y6Td",Back:"App_Back__3Purw"}},,,,,,,function(e,t,a){e.exports={Card:"Card_Card__3SwTw"}},function(e,t,a){e.exports={Choice:"Choice_Choice__3xIgF"}},,,function(e,t,a){e.exports={Nav:"Nav_Nav__1t_xS",Logo:"Nav_Logo__3ZPAO"}},,,,,,function(e,t,a){e.exports={Header:"Header_Header__3uW37"}},,function(e,t,a){e.exports={InputFieldWrapper:"InputField_InputFieldWrapper__3Ff-G"}},function(e,t,a){e.exports={Button:"Button_Button__3Vwea"}},function(e,t,a){e.exports={Result:"Result_Result__1Sur5"}},function(e,t,a){e.exports={Footer:"Footer_Footer__1NHnh"}},function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),o=a.n(l),c=(a(36),a(9)),i=a(10),s=a(12),u=a(11),m=a(8),p=a.n(m),d=a(25),h=a.n(d),g=function(e){var t=e.fontSize,a=e.color,n=e.content;return r.a.createElement("header",{className:h.a.Header,style:{fontSize:t,color:a}},n)},f=a(19),E=a.n(f),v=a(3),b=function(e){var t=e.backgroundColor;return r.a.createElement("nav",{className:E.a.Nav,style:{backgroundColor:t}},r.a.createElement(v.b,{className:E.a.Logo,to:"/"},"EASY DIET"))},y=a(14),C=a(15),_=a.n(C),k=a(7),w=a.n(k),N=a(27),A=a.n(N),x=function(e){var t=e.name,a=e.type,n=e.label,l=e.placeholder,o=e.value,c=e.onChange;return r.a.createElement("div",{className:A.a.InputFieldWrapper},r.a.createElement("label",{htmlFor:t},n),r.a.createElement("input",{type:a,name:t,placeholder:l,value:o,onChange:c}))},S=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",{className:w.a.FormWrapper},r.a.createElement(x,{label:"weight",type:"number",name:"weight",placeholder:"kg",value:t,onChange:a}),r.a.createElement(x,{label:"height",type:"number",name:"height",placeholder:"cm",value:t,onChange:a}))},F=a(28),I=a.n(F),M=function(e){var t=e.onClick;return r.a.createElement("button",{className:I.a.Button,onClick:t},"calculate")},j=a(29),O=a.n(j),W=function(e){var t=e.result;return r.a.createElement("div",{className:O.a.Result},t)},B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={weight:null,height:null,result:""},e.handleInput=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(y.a)({},r,n))},e.calculateBMI=function(){var t=e.state.weight,a=e.state.height;if(console.log(typeof t),console.log(typeof a),t&&a){var n=Math.floor(t/Math.pow(a,2)*1e4);e.setState({result:n})}else alert("All inputs must be filled.")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:_.a.Card,style:{backgroundColor:"rgb(80, 126, 80)"}},r.a.createElement(g,{content:"Body Mass Index",color:"blanchedalmond",fontSize:"30px"}),r.a.createElement(S,{onChange:this.handleInput}),r.a.createElement(M,{onClick:this.calculateBMI}),r.a.createElement(W,{result:this.state.result}))}}]),a}(n.Component),D=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",{className:w.a.FormWrapper},r.a.createElement(x,{label:"age",type:"number",name:"age",placeholder:"years",value:t,onChange:a}),r.a.createElement("label",{htmlFor:"sex"},"sex"),r.a.createElement("select",{className:w.a.select,name:"sex",onChange:a},r.a.createElement("option",{value:"---"},"---"),r.a.createElement("option",{value:"male"},"male"),r.a.createElement("option",{value:"female"},"female")),r.a.createElement(x,{label:"weight",type:"number",name:"weight",placeholder:"kg",value:t,onChange:a}),r.a.createElement("label",{htmlFor:"lifestyle"},"lifestyle"),r.a.createElement("select",{className:w.a.select,name:"lifestyle",onChange:a},r.a.createElement("option",{className:w.a.option,value:"---"},"---"),r.a.createElement("option",{value:"sedentary"},"sedentary"),r.a.createElement("option",{value:"moderate"},"moderate"),r.a.createElement("option",{value:"active"},"active")))},R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={age:"",sex:"---",weight:"",lifestyle:"---",result:""},e.inputHandler=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(y.a)({},r,n))},e.startCalc=function(){var t=e.state.age,a=e.state.sex,n=e.state.weight,r=e.state.lifestyle;if(t&&"---"!=a&&n&&"---"!=r)if(t>=10&&t<=18){if("male"===a){var l=17.5*n+651;l*="sedentary"===r?1.4:"moderate"===r?1.7:"active"===r?2:console.log("something wrong with the result"),l="".concat(Math.floor(l)," kcal"),e.setState({result:l})}if("female"===a){var o=12.2*n+746;o*="sedentary"===r?1.4:"moderate"===r?1.7:"active"===r?2:console.log("something wrong with the result"),o="".concat(Math.floor(o)," kcal"),e.setState({result:o})}}else if(t>=19&&t<=30){if("male"===a){var c=15.3*n+679;c*="sedentary"===r?1.4:"moderate"===r?1.7:"active"===r?2:console.log("something wrong with the result"),c="".concat(Math.floor(c)," kcal"),e.setState({result:c})}if("female"===a){var i=14.7*n+496;i*="sedentary"===r?1.4:"moderate"===r?1.7:"active"===r?2:console.log("something wrong with the result"),i="".concat(Math.floor(i)," kcal"),e.setState({result:i})}}else if(t>=31&&t<=100){if("male"===a){var s=11.6*n+879;s*="sedentary"===r?1.4:"moderate"===r?1.7:"active"===r?2:console.log("something wrong with the result"),s="".concat(Math.floor(s)," kcal"),e.setState({result:s})}if("female"===a){var u=8.7*n+829;u*="sedentary"===r?1.4:"moderate"===r?1.7:"active"===r?2:console.log("something wrong with the result"),u="".concat(Math.floor(u)," kcal"),e.setState({result:u})}}else alert("Your age must be from 10 to 100, please put another age value.");else alert("Please put all of the data.")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:_.a.Card,style:{backgroundColor:"rgb(211, 117, 117)"}},r.a.createElement(g,{content:"Energy Demand",color:"blanchedalmond",fontSize:"30px"}),r.a.createElement(D,{onChange:this.inputHandler}),r.a.createElement(M,{onClick:this.startCalc}),r.a.createElement(W,{result:this.state.result}))}}]),a}(n.Component),z=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",{className:w.a.FormWrapper},r.a.createElement(x,{label:"weight",type:"number",name:"weight",placeholder:"kg",value:t,onChange:a}),r.a.createElement("label",{htmlFor:"training"},"training"),r.a.createElement("select",{className:w.a.select,name:"training",onChange:a},r.a.createElement("option",{className:w.a.option,value:"---"},"---"),r.a.createElement("option",{value:"no training day"},"no training day"),r.a.createElement("option",{value:"mild training day"},"mild training day"),r.a.createElement("option",{value:"moderate training day"},"moderate training day"),r.a.createElement("option",{value:"hard training day"},"hard training day")))},H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={weight:"",training:"---",result:""},e.handleInput=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(y.a)({},r,n))},e.startCalc=function(){var t=e.state.weight,a=e.state.training;if(t&&"---"!=a){var n=t/10*300;"no training day"===a&&e.setState({result:n+" ml"}),"mild training day"===a?(n=n+500+" ml",e.setState({result:n})):"moderate training day"===a?(n=n+1e3+" ml",e.setState({result:n})):"hard training day"===a&&(n=n+1500+" ml",e.setState({result:n}))}else alert("Please put all of the data.")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:_.a.Card,style:{backgroundColor:"cadetblue"}},r.a.createElement(g,{content:"Water Demand",color:"white",fontSize:"30px"}),r.a.createElement(z,{onChange:this.handleInput}),r.a.createElement(M,{onClick:this.startCalc}),r.a.createElement(W,{result:this.state.result}))}}]),a}(n.Component),P=a(30),J=a.n(P),L=function(e){var t=e.backgroundColor;return r.a.createElement("footer",{className:J.a.Footer,style:{backgroundColor:t}},"by AK")},T=a(1),Y=a(16),G=a.n(Y),K=function(){return r.a.createElement("div",{className:G.a.Choice,style:{backgroundColor:"rgb(211, 117, 117)"}},r.a.createElement(v.b,{to:"EnergyDemandCalculator"},"Energy Demand"))},V=function(){return r.a.createElement("div",{className:G.a.Choice,style:{backgroundColor:"rgb(80, 126, 80)"}},r.a.createElement(v.b,{to:"BMICalculator"},"Body Mass Index"))},Z=function(){return r.a.createElement("div",{className:G.a.Choice,style:{backgroundColor:"cadetblue"}},r.a.createElement(v.b,{to:"/WaterDemandCalculator"},"Water Demand"))},$=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:p.a.AppWrapper},r.a.createElement(v.a,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"https://frontendpole.github.io/ReactApp-Easy-Diet-App/"},r.a.createElement(b,{backgroundColor:"darkgray"}),r.a.createElement(g,{content:"choose your calculator",fontSize:"40px"}),r.a.createElement("div",{className:p.a.AppMain},r.a.createElement(K,null),r.a.createElement(V,null),r.a.createElement(Z,null)),r.a.createElement(L,null)),r.a.createElement(T.a,{path:"https://frontendpole.github.io/ReactApp-Easy-Diet-App/EnergyDemandCalculator"},r.a.createElement(b,{backgroundColor:"rgb(211, 117, 117)"}),r.a.createElement(g,{content:"calculate your daily energy demand",fontSize:"40px"}),r.a.createElement("div",{className:p.a.AppMain},r.a.createElement(v.b,{className:p.a.Back,to:"https://frontendpole.github.io/ReactApp-Easy-Diet-App/"},"back"),r.a.createElement(R,null))),r.a.createElement(T.a,{path:"https://frontendpole.github.io/ReactApp-Easy-Diet-App/BMICalculator"},r.a.createElement(b,{backgroundColor:"rgb(80, 126, 80)"}),r.a.createElement(g,{content:"calculate your body mass index",fontSize:"40px"}),r.a.createElement("div",{className:p.a.AppMain},r.a.createElement(v.b,{className:p.a.Back,to:"https://frontendpole.github.io/ReactApp-Easy-Diet-App/"},"back"),r.a.createElement(B,null))),r.a.createElement(T.a,{path:"https://frontendpole.github.io/ReactApp-Easy-Diet-App/WaterDemandCalculator"},r.a.createElement(b,{backgroundColor:"cadetblue"}),r.a.createElement(g,{content:"calculate your daily water demand",fontSize:"40px"}),r.a.createElement("div",{className:p.a.AppMain},r.a.createElement(v.b,{className:p.a.Back,to:"https://frontendpole.github.io/ReactApp-Easy-Diet-App/"},"back"),r.a.createElement(H,null))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.e295a8b2.chunk.js.map