(this["webpackJsonpprojector-remote"]=this["webpackJsonpprojector-remote"]||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(60),o=n.n(r),a=(n(93),n(14)),j=(n(94),n(144)),s=n(147),l=n(148),x=n(146),b=n(145),u=n(66),O=n.n(u),d=n(67),m=n.n(d),f=n(68),h=n.n(f),C=n(70),p=n.n(C),y=n(69),g=n.n(y),k=n(71),v=n.n(k),S=n(72),M=n.n(S),w=n(73),I=n.n(w),T=n(74),z=n.n(T),F=n(75),J=n.n(F),P=n(76),E=n.n(P),L=n(77),A=n.n(L),B=n(63),G=n.n(B),R=n(134),X=n(81),D=n(143),Q=n(79),V=n.n(Q),W=n(78),_=n.n(W),q=n(80),H=n.n(q),K=n(1),N=i.a.createContext({toggleColorMode:function(){}});function U(){var e=0,t=Object(c.useState)(1),n=Object(a.a)(t,2),r=n[0],o=n[1],u=Object(R.a)(),d=i.a.useContext(N);function f(t){1===r&&(o(0),e=setInterval((function(){G.a.get("https://api.thingspeak.com/update?api_key=2XA1TJQ0PXOTG9EL&field1=".concat(t)).then((function(n){0!==n.data&&(clearInterval(e),o(1)),console.log("GET ".concat(t,", Response: ").concat(n.data))}))}),300))}return Object(K.jsx)("div",{children:Object(K.jsx)(b.a,{sx:{width:"100%",height:"100vh",bgcolor:"background.default",color:"text.primary",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(K.jsxs)(j.a,{container:!0,direction:"row",rowSpacing:4,columnSpacing:{xs:1,sm:2,md:3},marginTop:"0",maxWidth:"600px",children:[Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(1)},children:Object(K.jsx)(O.a,{})})}),Object(K.jsx)(j.a,{item:!0,xs:4}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(2)},children:Object(K.jsx)(m.a,{})})}),Object(K.jsx)(j.a,{item:!0,xs:4}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(3)},children:Object(K.jsx)(h.a,{})})}),Object(K.jsx)(j.a,{item:!0,xs:4}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(4)},children:Object(K.jsx)(g.a,{})})}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(5)},children:Object(K.jsx)(p.a,{})})}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(6)},children:Object(K.jsx)(v.a,{})})}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(7)},children:Object(K.jsx)(M.a,{})})}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(8)},children:Object(K.jsx)(I.a,{})})}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(9)},children:Object(K.jsx)(z.a,{})})}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(10)},children:Object(K.jsx)(J.a,{})})}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(11)},children:Object(K.jsx)(E.a,{})})}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",xs:4,children:Object(K.jsx)(s.a,{color:"primary",onClick:function(){f(12)},children:Object(K.jsx)(A.a,{})})}),Object(K.jsx)(j.a,{item:!0,xs:12}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",alignItems:"center",xs:8,children:Object(K.jsxs)(l.a,{sx:{ml:1,textTransform:"lowercase"},onClick:d.toggleColorMode,color:"inherit",children:[u.palette.mode," mode \xa0 ","dark"===u.palette.mode?Object(K.jsx)(_.a,{fontSize:"small"}):Object(K.jsx)(V.a,{fontSize:"small"})]})}),Object(K.jsx)(j.a,{container:!0,item:!0,justifyContent:"center",alignItems:"center",xs:4,children:0===r?Object(K.jsx)(x.a,{fontSize:"small"}):Object(K.jsx)(H.a,{color:"success"})}),Object(K.jsxs)(j.a,{container:!0,item:!0,fontSize:"0.7em",justifyContent:"center",textAlign:"center",xs:12,children:["Viewsonic M1 Mini+ Remote ",Object(K.jsx)("br",{}),Object(K.jsx)("br",{})," Sincerely, Joe"]})]})})})}function Y(){var e=i.a.useState("dark"),t=Object(a.a)(e,2),n=t[0],c=t[1],r=i.a.useMemo((function(){return{toggleColorMode:function(){c((function(e){return"light"===e?"dark":"light"}))}}}),[]),o=i.a.useMemo((function(){return Object(X.a)({palette:{mode:n}})}),[n]);return Object(K.jsx)(N.Provider,{value:r,children:Object(K.jsx)(D.a,{theme:o,children:Object(K.jsx)(U,{})})})}var Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};o.a.render(Object(K.jsx)(i.a.StrictMode,{children:Object(K.jsx)(Y,{})}),document.getElementById("root")),Z()},93:function(e,t,n){},94:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.393a5fcf.chunk.js.map