(this.webpackJsonpesencia=this.webpackJsonpesencia||[]).push([[2],{80:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t),a.d(t,"history",(function(){return E}));var n,c,s=a(2),l=a.n(s),r=a(25),i=a.n(r),o=a(26),j=a(5),u=a(27),b=a(28),m=a(32),d=a(30),O=a(1),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).keydownHandler=function(t){13===t.keyCode&&t.ctrlKey&&e.props.evalCode(!0)},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler)}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{})}}]),a}(l.a.Component),h=a(29),f=a.n(h),y=a(14),v=(a(77),a(92)),p=a(95),g=a(93),N=a(94),C=a(96),k=function e(t,a){if(a<0)return e(t,a+26);for(var n="",c=0;c<t.length;c++){var s=t[c];if(s.match(/[a-z]/i)){var l=t.charCodeAt(c);l>=65&&l<=90?s=String.fromCharCode((l-65+a)%26+65):l>=97&&l<=122&&(s=String.fromCharCode((l-97+a)%26+97))}n+=s}return n},A=(a(80),a(81)),S=!0,w=function(e){var t=Object(s.useState)(""),a=Object(j.a)(t,2),n=a[0],c=a[1],l=Object(s.useState)(""),r=Object(j.a)(l,2),i=r[0],o=r[1],u=Object(s.useState)(!1),b=Object(j.a)(u,2),m=b[0],d=b[1],x=Object(s.useState)([]),h=Object(j.a)(x,2),f=h[0],A=h[1],S=Object(y.b)();return Object(s.useEffect)((function(){0===n.length&&0===i.length&&d(!1),0!==n.length&&0!==i.length&&e.setPath(k(n+i,2),d(!0)),S.ref("app/elmnts/"+k(n+i,2)+"/active/").on("value",(function(e){var t=e.val();A(t)}))}),[n,i]),Object(O.jsx)(v.a,{style:{width:"30%",marginTop:"14vh",zIndex:"1000",position:"relative"},children:Object(O.jsxs)(p.a,{className:"text-center",style:{width:"22rem"},children:[Object(O.jsx)(p.a.Header,{style:{opacity:"0.2"},children:"hydra by Olivia Jack - elmnts by Celeste Betancur "}),Object(O.jsx)(p.a.Title,{children:"elmnts"}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)("label",{children:"ensamble"}),Object(O.jsx)("input",{style:{margin:"1rem"},onChange:function(e){return c(e.target.value)},require:!0})]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)("label",{children:"contrase\xf1a"}),Object(O.jsx)("input",{style:{margin:"1rem"},onChange:function(e){return o(e.target.value)},require:!0})]}),m&&Object(O.jsxs)(O.Fragment,{children:[null===f?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(g.a,{children:[Object(O.jsx)(N.a,{children:Object(O.jsx)(v.a,{children:Object(O.jsx)(C.a,{style:{margin:"1rem"},variant:"info",className:"button-claim",onClick:function(){return e.setActiveTA(0)},children:"Agua"})})}),Object(O.jsx)(N.a,{children:Object(O.jsx)(v.a,{children:Object(O.jsx)(C.a,{style:{margin:"1rem"},variant:"warning",className:"button-claim",onClick:function(){return e.setActiveTA(1)},children:"Fuego"})})})]}),Object(O.jsxs)(g.a,{children:[Object(O.jsx)(N.a,{children:Object(O.jsx)(v.a,{children:Object(O.jsx)(C.a,{style:{margin:"1rem"},variant:"danger",className:"button-claim",onClick:function(){return e.setActiveTA(2)},children:"Aire"})})}),Object(O.jsx)(N.a,{children:Object(O.jsx)(v.a,{children:Object(O.jsx)(C.a,{style:{margin:"1rem"},variant:"success",className:"button-claim",onClick:function(){return e.setActiveTA(3)},children:"Tierra"})})})]})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(g.a,{children:[Object(O.jsx)(N.a,{children:Object(O.jsx)(v.a,{children:!f[0]&&Object(O.jsx)(C.a,{style:{margin:"1rem"},variant:"info",className:"button-claim",onClick:function(){return e.setActiveTA(0)},children:"Agua"})})}),Object(O.jsx)(N.a,{children:Object(O.jsx)(v.a,{children:!f[1]&&Object(O.jsx)(C.a,{style:{margin:"1rem"},variant:"warning",className:"button-claim",onClick:function(){return e.setActiveTA(1)},children:"Fuego"})})})]}),Object(O.jsxs)(g.a,{children:[Object(O.jsx)(N.a,{children:Object(O.jsx)(v.a,{children:!f[2]&&Object(O.jsx)(C.a,{style:{margin:"1rem"},variant:"danger",className:"button-claim",onClick:function(){return e.setActiveTA(2)},children:"Aire"})})}),Object(O.jsx)(N.a,{children:Object(O.jsx)(v.a,{children:!f[3]&&Object(O.jsx)(C.a,{style:{margin:"1rem"},variant:"success",className:"button-claim",onClick:function(){return e.setActiveTA(3)},children:"Tierra"})})})]})]}),Object(O.jsx)(g.a,{children:Object(O.jsx)(v.a,{children:Object(O.jsx)(C.a,{style:{margin:"1rem"},variant:"dark",className:"button-claim",onClick:function(){return e.setActiveTA(4)},children:"Visitar Ensamble"})})})]})]})})},F=function(){var e=Object(s.useState)(">>> waiting to start"),t=Object(j.a)(e,2),a=t[0],l=(t[1],Object(s.useState)(!1)),r=Object(j.a)(l,2),i=r[0],u=r[1],b=Object(s.useState)(""),m=Object(j.a)(b,2),d=m[0],h=m[1],C=Object(s.useState)(""),k=Object(j.a)(C,2),F=k[0],T=k[1],E=Object(s.useState)(""),B=Object(j.a)(E,2),H=B[0],I=B[1],L=Object(s.useState)(""),z=Object(j.a)(L,2),J=z[0],q=z[1],G=Object(s.useState)(""),R=Object(j.a)(G,2),W=R[0],D=R[1],K=Object(s.useState)(""),M=Object(j.a)(K,2),P=M[0],U=M[1],Q=Object(s.useState)(""),V=Object(j.a)(Q,2),X=V[0],_=V[1],Y=Object(s.useState)(""),Z=Object(j.a)(Y,2),$=Z[0],ee=Z[1],te=Object(s.useState)(""),ae=Object(j.a)(te,2),ne=ae[0],ce=ae[1],se=Object(s.useState)(""),le=Object(j.a)(se,2),re=le[0],ie=le[1],oe=Object(s.useState)(""),je=Object(j.a)(oe,2),ue=je[0],be=je[1],me=Object(s.useState)(""),de=Object(j.a)(me,2),Oe=de[0],xe=de[1],he=Object(s.useState)(""),fe=Object(j.a)(he,2),ye=fe[0],ve=fe[1],pe=Object(s.useState)(-1),ge=Object(j.a)(pe,2),Ne=ge[0],Ce=ge[1],ke=Object(s.useState)([]),Ae=Object(j.a)(ke,2),Se=Ae[0],we=Ae[1],Fe=Object(s.useState)(""),Te=Object(j.a)(Fe,2),Ee=Te[0],Be=Te[1],He=Object(s.useState)([]),Ie=Object(j.a)(He,2),Le=(Ie[0],Ie[1],Object(y.b)());if(S){var ze=A(n||(n=Object(o.a)(['<canvas style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index:100"></canvas>'])));ze.width=window.innerWidth,ze.height=window.innerHeight,document.body.appendChild(ze),c=new f.a({detectAudio:!1,canvas:ze}),S=!1,c.eval("solid(1,1,1).out(o0);solid(1,1,1).out(o1);solid(1,1,1).out(o2);solid(1,1,1).out(o3); render()")}Object(s.useEffect)((function(){switch(-1===Ne&&Le.ref("app/elmnts/"+Ee+"/").transaction((function(e){e&&console.log(e.app)})),-1!==Ne&&Le.ref("app/elmnts/"+Ee+"/").on("value",(function(e){var t=e.val();null!==t&&(ce([t.names0,t.names1,t.names2,t.names3]),we([t.text0,t.text1,t.text2,t.text3]))})),Ne){case 0:Le.ref("app/elmnts/"+Ee+"/text0").set(d),Le.ref("app/elmnts/"+Ee+"/names0").set(W),Le.ref("app/elmnts/"+Ee+"/active/"+"".concat(0)).set(!0);break;case 1:Le.ref("app/elmnts/"+Ee+"/text1").set(F),Le.ref("app/elmnts/"+Ee+"/names1").set(P),Le.ref("app/elmnts/"+Ee+"/active/"+"".concat(1)).set(!0);break;case 2:Le.ref("app/elmnts/"+Ee+"/text2").set(H),Le.ref("app/elmnts/"+Ee+"/names2").set(X),Le.ref("app/elmnts/"+Ee+"/active/"+"".concat(2)).set(!0);break;case 3:Le.ref("app/elmnts/"+Ee+"/text3").set(J),Le.ref("app/elmnts/"+Ee+"/names3").set($),Le.ref("app/elmnts/"+Ee+"/active/"+"".concat(3)).set(!0)}if(i){ie(""),be(""),xe(""),ve("");var e="".concat(0===Ne?d:Se[0],".out(o0)"),t="".concat(1===Ne?F:Se[1],".out(o2)"),a="".concat(2===Ne?H:Se[2],".out(o1)"),n="".concat(3===Ne?J:Se[3],".out(o3)"),s=".out(o0)"!==d?e:"solid(1,1,1).out(o0)",l=".out(o2)"!==F?t:"solid(1,1,1).out(o2)",r=".out(o1)"!==H?a:"solid(1,1,1).out(o1)",o=".out(o3)"!==J?n:"solid(1,1,1).out(o3)";try{c.eval(s)}catch(j){ie(j)}try{c.eval(l)}catch(j){be(j)}try{c.eval(r)}catch(j){xe(j)}try{c.eval(o)}catch(j){ve(j)}u(!1)}}),[i,d,F,H,J,Ee]),Object(s.useEffect)((function(){ie(""),be(""),xe(""),ve("");var e="".concat(0===Ne?d:Se[0],".out(o0)"),t="".concat(1===Ne?F:Se[1],".out(o2)"),a="".concat(2===Ne?H:Se[2],".out(o1)"),n="".concat(3===Ne?J:Se[3],".out(o3)"),s=".out(o0)"!==d?e:"solid(1,1,1).out(o0)",l=".out(o2)"!==F?t:"solid(1,1,1).out(o2)",r=".out(o1)"!==H?a:"solid(1,1,1).out(o1)",i=".out(o3)"!==J?n:"solid(1,1,1).out(o3)";try{c.eval(s)}catch(o){ie(o)}try{c.eval(l)}catch(o){be(o)}try{c.eval(r)}catch(o){xe(o)}try{c.eval(i)}catch(o){ve(o)}}),[Se[0],Se[1],Se[2],Se[3]]),Object(s.useEffect)((function(){if(4==Ne){Le.ref("app/elmnts/"+Ee+"/").on("value",(function(e){var t=e.val();null!==t&&(ce([t.names0,t.names1,t.names2,t.names3]),we([t.text0,t.text1,t.text2,t.text3]))})),console.log(Se);var e="".concat(Se[0],".out(o0)"),t="".concat(Se[1],".out(o2)"),a="".concat(Se[2],".out(o1)"),n="".concat(Se[3],".out(o3)");try{c.eval(e)}catch(s){ie(s)}try{c.eval(t)}catch(s){be(s)}try{c.eval(a)}catch(s){xe(s)}try{c.eval(n)}catch(s){ve(s)}}}),[Ne]);return Object(O.jsxs)(O.Fragment,{children:[-1===Ne&&Object(O.jsx)(w,{setActiveTA:Ce,setPath:Be}),-1!==Ne&&Object(O.jsxs)(v.a,{fluid:!0,className:"main-container",children:[Object(O.jsx)(x,{evalCode:u}),Object(O.jsxs)(p.a,{className:"text-center card-container",border:"dark",children:[Object(O.jsx)(p.a.Header,{style:{opacity:"0.2"},children:"hydra by Olivia Jack - elmnts by Celeste Betancur "}),Object(O.jsx)(p.a.Title,{children:"4 + 1 ( elmnts + hydra )"}),Object(O.jsxs)(p.a.Body,{children:[Object(O.jsxs)(g.a,{children:[Object(O.jsxs)(N.a,{children:[Object(O.jsx)("label",{htmlFor:"name1",className:"label-name",children:"name"}),0===Ne&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name1",onChange:function(e){return function(e){D(e)}(e.target.value)},className:"input-name blue"}),Object(O.jsx)("textarea",{className:"textarea-main-style blue",onChange:function(e){h(e.target.value)}})]}),0!==Ne&&4!==Ne&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name1",className:"input-name focus-false",value:ne[0],style:{outline:"none"},readOnly:!0}),Object(O.jsx)("textarea",{className:"textarea-main-style focus-false",value:Se[0],style:{outline:"none"},readOnly:!0})]}),4!==Ne?Object(O.jsx)("input",{className:"input-name-status",value:"".concat(re),readOnly:!0}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name1",className:"input-name focus-false blue",value:ne[0],style:{outline:"none"},readOnly:!0}),Object(O.jsx)("textarea",{className:"textarea-main-style focus-false blue",value:Se[0],style:{outline:"none"},readOnly:!0})]})]}),Object(O.jsxs)(N.a,{children:[Object(O.jsx)("label",{htmlFor:"name2",className:"label-name",children:"name"}),1===Ne&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name2",onChange:function(e){return function(e){U(e)}(e.target.value)},className:"input-name yellow"}),Object(O.jsx)("textarea",{className:"textarea-main-style yellow",onChange:function(e){T(e.target.value)}})]}),1!==Ne&&4!==Ne&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name2",className:"input-name focus-false",value:ne[1],style:{outline:"none"},readOnly:!0}),Object(O.jsx)("textarea",{className:"textarea-main-style focus-false",value:Se[1],style:{outline:"none"},readOnly:!0})]}),4!==Ne?Object(O.jsx)("input",{className:"input-name-status",value:"".concat(ue),readOnly:!0}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name2",className:"input-name focus-false yellow",value:ne[1],style:{outline:"none"},readOnly:!0}),Object(O.jsx)("textarea",{className:"textarea-main-style focus-false yellow",value:Se[1],style:{outline:"none"},readOnly:!0})]})]})]}),Object(O.jsxs)(g.a,{children:[Object(O.jsxs)(N.a,{children:[Object(O.jsx)("label",{htmlFor:"name3",className:"label-name",children:"name"}),2===Ne&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name3",onChange:function(e){return function(e){_(e)}(e.target.value)},className:"input-name red"}),Object(O.jsx)("textarea",{className:"textarea-main-style red",onChange:function(e){I(e.target.value)}})]}),2!==Ne&&4!==Ne&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name3",className:"input-name focus-false",value:ne[2],style:{outline:"none"},readOnly:!0}),Object(O.jsx)("textarea",{className:"textarea-main-style focus-false",value:Se[2],style:{outline:"none"},readOnly:!0})]}),4!==Ne?Object(O.jsx)("input",{className:"input-name-status",value:"".concat(Oe),readOnly:!0}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name13",className:"input-name focus-false red",value:ne[2],style:{outline:"none"},readOnly:!0}),Object(O.jsx)("textarea",{className:"textarea-main-style focus-false red",value:Se[2],style:{outline:"none"},readOnly:!0})]})]}),Object(O.jsxs)(N.a,{children:[Object(O.jsx)("label",{htmlFor:"name4",className:"label-name",children:"name"}),3===Ne&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name4",onChange:function(e){return function(e){ee(e)}(e.target.value)},className:"input-name green"}),Object(O.jsx)("textarea",{className:"textarea-main-style green",onChange:function(e){q(e.target.value)}})]}),3!==Ne&&4!==Ne&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name4",className:"input-name focus-false",value:ne[3],style:{outline:"none"},readOnly:!0}),Object(O.jsx)("textarea",{className:"textarea-main-style focus-false",value:Se[3],style:{outline:"none"},readOnly:!0})]}),4!==Ne?Object(O.jsx)("input",{className:"input-name-status",value:"".concat(ye),readOnly:!0}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{id:"name13",className:"input-name focus-false green",value:ne[3],style:{outline:"none"},readOnly:!0}),Object(O.jsx)("textarea",{className:"textarea-main-style focus-false green",value:Se[3],style:{outline:"none"},readOnly:!0})]})]})]})]}),Object(O.jsx)(p.a.Footer,{children:4!==Ne&&Object(O.jsxs)(O.Fragment,{children:[a,Object(O.jsx)("input",{style:{marginLeft:"2rem",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},placeholder:"main commands here",type:"text"})]})})]})]})]})},T=a(31),E=Object(T.a)({basename:"/elmnts"});i.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(y.a,{firebaseConfig:{apiKey:"AIzaSyC48X_oGfAGw-LngscWBqpErTbGcR8vyiQ",authDomain:"selesy-44e08.firebaseapp.com",databaseURL:"https://selesy-44e08-default-rtdb.firebaseio.com",projectId:"selesy-44e08",storageBucket:"selesy-44e08.appspot.com",messagingSenderId:"875023778959",appId:"1:875023778959:web:6f6dd44e0ef321a3c0dcfa"},children:Object(O.jsx)(F,{})})}),document.getElementById("root"))}},[[89,3,4]]]);
//# sourceMappingURL=main.349a0405.chunk.js.map