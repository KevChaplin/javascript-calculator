(this["webpackJsonpfcc-javascript-calculator"]=this["webpackJsonpfcc-javascript-calculator"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(4),p=a.n(r),o=(a(9),a(10),a(3)),c=a(0);var d=function(e){var t={gridArea:e.position};return Object(c.jsx)("div",{style:t,children:Object(c.jsx)("button",{id:e.id,style:t,keypad:e.keypad,type:e.type,onClick:function(t){return e.handleClick(t)},children:e.tag})})};var l=function(e){return Object(c.jsxs)("div",{id:"Screen",style:{gridArea:"a"},children:[Object(c.jsx)("p",{id:"calculation",children:e.calculation}),Object(c.jsx)("input",{id:"display",type:"text",value:e.display,onChange:e.handleChange})]})},s=[{pid:1,id:"clear",keypad:"c",tag:"C",type:"operator",position:"b"},{pid:2,id:"divide",keypad:"/",tag:"/",type:"operator",position:"c"},{pid:3,id:"multiply",keypad:"*",tag:"*",type:"operator",position:"d"},{pid:4,id:"subtract",keypad:"-",tag:"-",type:"operator",position:"e"},{pid:5,id:"seven",keypad:"7",tag:"7",type:"number",position:"f"},{pid:6,id:"eight",keypad:"8",tag:"8",type:"number",position:"g"},{pid:7,id:"nine",keypad:"9",tag:"9",type:"number",position:"h"},{pid:8,id:"add",keypad:"+",tag:"+",type:"operator",position:"i"},{pid:9,id:"four",keypad:"4",tag:"4",type:"number",position:"j"},{pid:10,id:"five",keypad:"5",tag:"5",type:"number",position:"k"},{pid:11,id:"six",keypad:"6",tag:"6",type:"number",position:"l"},{pid:12,id:"one",keypad:"1",tag:"1",type:"number",position:"m"},{pid:13,id:"two",keypad:"2",tag:"2",type:"number",position:"n"},{pid:14,id:"three",keypad:"3",tag:"3",type:"number",position:"o"},{pid:15,id:"equals",keypad:"Enter",tag:"=",type:"operator",position:"p"},{pid:16,id:"zero",keypad:"0",tag:"0",type:"number",position:"q"},{pid:17,id:"decimal",keypad:".",tag:".",type:"number",position:"r"}];var u=function(e){for(var t=e.match(/[0-9,/,*,\-,+,.]+(?=\s)/g),a=0;a<=t.length;a++)"*"===t[a]&&(t.splice(a-1,3,parseFloat(t[a-1])*parseFloat(t[a+1])),a=-1);for(var i=0;i<=t.length;i++)"/"===t[i]&&(t.splice(i-1,3,parseFloat(t[i-1])/parseFloat(t[i+1])),i=-1);for(var n=0;n<=t.length;n++)"+"===t[n]?(t.splice(n-1,3,parseFloat(t[n-1])+parseFloat(t[n+1])),n=-1):"-"===t[n]&&(t.splice(n-1,3,parseFloat(t[n-1])-parseFloat(t[n+1])),n=-1);var r=parseFloat(t[0]);return Math.round(1e9*(r+Number.EPSILON))/1e9};var y=function(e,t){var a=e.display,i=e.calculation,n=/(\d+|\.)$/.test(a)?"number":"operator",r=/\d$/.test(i),p=/=$/.test(i);if("c"===t.value)i="",a="0";else{if(i.length>=90)return{display:a,calculation:i};if("Enter"===t.value)p||("number"===n?i=i+" "+a+" =":r?i+=" =":i=i.replace(/[/,*,-,+]$/g,"="),a=u(i));else if("number"===n&&"number"===t.type){if(p)i="",a="0";else if(a.length<9)switch(t.value){case"0":"0"===a?a="0":"-0"===a?a="-0":a+=t.value;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":"0"===a?a=t.value:a+=t.value;break;case".":a.includes(".")||(a+=".")}}else"number"===n&&"operator"===t.type?p?(i=a,a=t.value):(i=i+" "+a,a=t.value):"operator"===n&&"number"===t.type?"-"===a?r?(i=i+" "+a,a=t.value):"."===t.value?a="-0.":a+=t.value:(i=i+" "+a,a="."===t.value?"0.":t.value):"operator"===n&&"operator"===t.type&&("-"===t.value&&r?(i=i+" "+a,a=t.value):r&&(a=t.value))}return{display:a,calculation:i}};var b=function(){var e=Object(i.useState)({value:""}),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)({display:"0",calculation:""}),p=Object(o.a)(r,2),u=p[0],b=p[1];function v(e){n({value:e.currentTarget.getAttribute("keypad"),type:e.currentTarget.getAttribute("type")})}function g(e){s.map((function(e){return e.keypad})).includes(e.key)&&n({value:e.key,type:s.filter((function(t){return t.keypad===e.key}))[0].type})}Object(i.useEffect)((function(){return window.addEventListener("keydown",g),function(){window.removeEventListener("keydown",g)}})),Object(i.useEffect)((function(){b((function(e){return y(e,a)}))}),[a]);var f=s.map((function(e){return Object(c.jsx)(d,{id:e.id,keypad:e.keypad,tag:e.tag,type:e.type,position:e.position,handleClick:v},e.pid)}));return Object(c.jsxs)("div",{id:"Calculator",children:[Object(c.jsx)(l,{display:u.display,calculation:u.calculation,handleChange:g}),f]})};var v=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Calculatamatronix"})}),Object(c.jsx)(b,{})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,p=t.getTTFB;a(e),i(e),n(e),r(e),p(e)}))};p.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),g()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.51358043.chunk.js.map