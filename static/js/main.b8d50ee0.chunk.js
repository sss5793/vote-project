(this.webpackJsonpvoteProject=this.webpackJsonpvoteProject||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var i,r=n(1),a=n.n(r),c=n(15),o=n.n(c),s=(n(23),n(5)),l=n(10),d=n(4),j=(n(24),n(2)),b=n(3);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function p(t,e){var n=t.title,a=t.titleId,c=f(t,["title","titleId"]);return r.createElement("svg",u({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,i||(i=r.createElement("path",{d:"M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z",fill:"black"})))}var x,h=r.forwardRef(p);n.p;function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function g(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function m(t,e){var n=t.title,i=t.titleId,a=g(t,["title","titleId"]);return r.createElement("svg",O({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,x||(x=r.createElement("path",{d:"M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z",fill:"black"})))}var v,w,y,C,k=r.forwardRef(m),E=(n.p,n(0)),S=b.a.div(v||(v=Object(j.a)(["\n  width: ",";\n  height: ",";\n\tposition: relative;\n\tfont-size: ",";\n\n\t.active {\n\t\tvisibility: visible;\n\t\topacity: 1;\n\t}\n\n\t.inactive {\n\t\tvisibility: hidden;\n\t\topacity: 0;\n\t}\n"])),(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.fontSize})),I=b.a.button(w||(w=Object(j.a)(["\n\tborder: 0;\n\tbackground: transparent;\n\twidth: 100%;\n  height: ",";\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 10px;\n\tfont-size: ",";\n\tborder: 1px solid #e5e5e5;\n"])),(function(t){return t.height}),(function(t){return t.fontSize})),z=b.a.ul(y||(y=Object(j.a)(["\n\tposition: absolute;\n\ttop: calc("," - 1px);\n\tright: 0;\n\tborder: 1px solid #e5e5e5;\n\twidth:100%;\n\tbackground: #fff;\n  transition: opacity 0.4s ease, visibility 0.4s;\n"])),(function(t){return t.height})),D=b.a.button(C||(C=Object(j.a)(["\n\twidth: 100%;\n  height: ",";\n\tborder: 0;\n\tborder-bottom: 1px solid #dddddd;\n\tpadding: 10px;\n\tbackground: transparent;\n\ttext-align: left;\n\tfont-size: ",";\n\n\t:hover {\n\t\tcolor: #780eff;\n\t}\n"])),(function(t){return t.height}),(function(t){return t.fontSize})),P=function(t){t.id;var e=t.name,n=t.onSelect,i=t.fontSize,r=t.height;return Object(E.jsx)("li",{children:Object(E.jsx)(D,{fontSize:i,height:r,onClick:n,children:e})})},F=function(t){var e=t.options,n=t.defaultValue,i=t.onChange,a=t.width,c=t.height,o=t.fontSize,s=Object(r.useState)(n),l=Object(d.a)(s,2),j=l[0],b=l[1],u=Object(r.useState)(!1),f=Object(d.a)(u,2),p=f[0],x=f[1],O=function(t){t.stopPropagation(),i(t.target.innerText),b(t.target.innerText),x(!p)};return Object(E.jsxs)(S,{width:a,height:c,fontSize:o,children:[Object(E.jsxs)(I,{onClick:function(t){t.stopPropagation(),x(!p)},height:c,fontSize:o,children:[Object(E.jsx)("span",{children:j}),p?Object(E.jsx)(k,{}):Object(E.jsx)(h,{})]}),Object(E.jsx)(z,{className:p?"active":"inactive",height:c,children:e.map((function(t){return Object(E.jsx)(P,{height:c,fontSize:o,name:t.name,onSelect:O},t.id+t.name)}))})]})};F.defaultProps={options:[{id:0,name:"\ud56d\ubaa9 1"}],defaultValue:"\uae30\ubcf8",onChange:function(){},width:"150px",height:"40px",fontSize:"15px"};var L,V,N,M=F,B=b.a.header(L||(L=Object(j.a)(["\n  width: 100%;\n  height: 100px;\n  background: #FFFFFF;\n  box-shadow: 0px 0px 12px rgb(0 0 0 / 20%);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 1;\n"]))),H=b.a.h1(V||(V=Object(j.a)(["\n  font-size: 30px;\n  font-weight: bold;\n"]))),R=function(t){var e=t.users,n=t.name,i=t.onChangeUser;return Object(E.jsxs)(B,{children:[Object(E.jsx)(H,{children:"Voting Page"}),Object(E.jsx)(M,{options:e,defaultValue:n,onChange:i})]})},A=b.a.button(N||(N=Object(j.a)(["\n  width: 100px;\n  height: 35px;\n  background: ",";\n  border-radius: 5px;\n  color: ",";\n  border: 0;\n  font-size: 16px;\n  font-weight: 600;\n"])),(function(t){return t.bgColor}),(function(t){return t.color})),Y=function(t){var e=t.name,n=t.onClick,i=t.bgColor,r=t.color;return Object(E.jsx)(A,{onClick:n,bgColor:i,color:r,children:e})};Y.defaultProps={bgColor:"#780EFF",color:"#fff"};var U,J,T,Z,q,G,K,Q,W=Y,X=b.a.section(U||(U=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n\tpadding: 20px;\n\tbackground-color: #e5e5e5;\n"]))),$=b.a.h1(J||(J=Object(j.a)(["\n\tfont-size: 20px;\n"]))),_=b.a.section(T||(T=Object(j.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n"]))),tt=function(t){var e=t.user;return Object(E.jsxs)(X,{children:[Object(E.jsxs)(_,{children:[Object(E.jsxs)($,{children:[" \uc548\ub155\ud558\uc138\uc694. ",e.name,"\ub2d8!"]}),Object(E.jsx)(W,{name:"\ud22c\ud45c \uc0dd\uc131",onClick:t.onHeaderBtnClick})]}),Object(E.jsx)("section",{children:t.children})]})},et=n(11),nt=b.a.h2(Z||(Z=Object(j.a)(["\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 21px;\n  padding: 30px 0;\n"]))),it=b.a.section(q||(q=Object(j.a)(["\n  background: rgba(255, 255, 255, 0.3);\n  padding: 20px;\n  min-height: 170px;\n  display: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: 30px;\n\tflex-direction: column;\n"]))),rt=b.a.h1(G||(G=Object(j.a)(["\n  text-align: center;\n  width: 100%;\n  font-size: 18px;\n"]))),at=b.a.section(K||(K=Object(j.a)(["\n\twidth: 100%;\n\t\n\t> div {\n\t\tdisplay: flex;\n    flex-flow: wrap;\n\t}\n"]))),ct=b.a.button(Q||(Q=Object(j.a)(["\n\twidth: 100%;\n\tfont-size: 18px;\n\tmargin: 10px 0;\n\tpadding: 10px;\n"]))),ot=function(t){var e=t.title,n=t.cardList,i=Object(et.a)(t,["title","cardList"]);return Object(E.jsxs)("section",{children:[Object(E.jsx)(nt,{children:e}),Object(E.jsx)(it,{children:0===n.length?Object(E.jsx)(rt,{children:"\ud574\ub2f9\ub418\ub294 \ud22c\ud45c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}):Object(E.jsxs)(at,{children:[Object(E.jsx)("div",{children:i.children}),n.length>=2&&Object(E.jsx)(ct,{children:"\ub354\ubcf4\uae30"})]})})]})};ot.defaultProps={title:"",cardList:[]};var st,lt,dt,jt,bt,ut,ft,pt,xt,ht,Ot,gt,mt,vt=ot,wt=n(6),yt=n.n(wt),Ct=b.a.div(st||(st=Object(j.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n"]))),kt=b.a.p(lt||(lt=Object(j.a)(["\n  width: 100px;\n  font-size: 16px;\n"]))),Et=b.a.input(dt||(dt=Object(j.a)(["\n  width: 50%;\n  background: #FFFFFF;\n  border: 1px solid #E5E5E5;\n  padding: 8px;\n  font-size: 14px;\n"]))),St=function(t){var e=t.label,n=Object(et.a)(t,["label"]);return Object(E.jsxs)(Ct,{children:[Object(E.jsx)("label",{children:Object(E.jsx)(kt,{children:e})}),Object(E.jsx)(Et,Object(l.a)({type:"text"},n))]})},It=b.a.div(jt||(jt=Object(j.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n\n  > p {\n    margin: 0 5px;\n  }\n"]))),zt=b.a.p(bt||(bt=Object(j.a)(["\n  width: 100px;\n  font-size: 16px;\n"]))),Dt=b.a.input(ut||(ut=Object(j.a)(["\n  width: 160px;\n  background: #FFFFFF;\n  border: 1px solid #E5E5E5;\n  padding: 8px;\n  font-size: 14px;\n  text-align: right;\n"]))),Pt=function(t){var e=t.startDate,n=t.endDate,i=t.onChangeDate;return Object(E.jsxs)(It,{children:[Object(E.jsx)("label",{children:Object(E.jsx)(zt,{children:"\uae30\uac04"})}),Object(E.jsx)(Dt,{name:"start",type:"date",value:e,onChange:i}),Object(E.jsx)("p",{children:" ~ "}),Object(E.jsx)(Dt,{name:"end",type:"date",value:n,onChange:i})]})},Ft=b.a.section(ft||(ft=Object(j.a)(["\n  width: 100%;\n  padding: 0 20px 20px 0;\n  text-align: right;\n\n  button {\n    margin: 0 10px;\n  }\n\n  button:last-child {\n    margin-right : 0;\n  }\n"]))),Lt=function(t){var e=t.onClose,n=t.onCreate;return Object(E.jsxs)(Ft,{children:[Object(E.jsx)(W,{name:"\uc0dd\uc131",onClick:n}),Object(E.jsx)(W,{name:"\ub2eb\uae30",onClick:e,bgColor:"#e5e5e5",color:"#000"})]})},Vt=b.a.section(pt||(pt=Object(j.a)(["\n  margin-top: 10px;\n"]))),Nt=b.a.div(xt||(xt=Object(j.a)(["\n  display: flex;\n  align-items:center;\n  justify-content: space-between;\n  border-bottom: 1px solid #E5E5E5;\n  padding-bottom: 20px;\n"]))),Mt=b.a.div(ht||(ht=Object(j.a)(["\n  border-bottom: 1px solid #E5E5E5;\n  overflow-y: auto;\n  height: 146px;\n"]))),Bt=b.a.div(Ot||(Ot=Object(j.a)(["\n  display: flex;\n  margin: 10px;\n"]))),Ht=b.a.input(gt||(gt=Object(j.a)(["\n  width: 100%;\n  margin-right: 10px;\n  padding: 8px;\n  border: 1px solid #E5E5E5;\n  font-size: 14px;\n"]))),Rt=function(t){var e=Object(r.useState)(""),n=Object(d.a)(e,2),i=n[0],a=n[1];return Object(E.jsxs)(Vt,{children:[Object(E.jsx)(Nt,{children:Object(E.jsx)("p",{children:"\ud56d\ubaa9 (\ucd5c\uc18c 3\uac1c \uc774\uc0c1)"})}),Object(E.jsxs)(Bt,{children:[Object(E.jsx)(Ht,{value:i,onChange:function(t){a(t.target.value)},placeholder:"\ud56d\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(E.jsx)(W,{onClick:function(e){""!==i&&(a(""),t.onAddItem(i))},name:"\ucd94\uac00"})]}),Object(E.jsx)(Mt,{children:t.children})]})};function At(){return(At=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function Yt(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Ut(t,e){var n=t.title,i=t.titleId,a=Yt(t,["title","titleId"]);return r.createElement("svg",At({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,mt||(mt=r.createElement("path",{d:"M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z",fill:"black"})))}var Jt,Tt,Zt,qt,Gt,Kt,Qt,Wt,Xt,$t,_t=r.forwardRef(Ut),te=(n.p,b.a.div(Jt||(Jt=Object(j.a)(["\n  display: flex;\n  height: 35px;\n  align-items:center;\n  justify-content: space-between;\n  margin: 10px;\n"])))),ee=b.a.input(Tt||(Tt=Object(j.a)(["\n  width: 100%;\n  margin-right: 10px;\n  padding: 8px;\n  border: 1px solid #E5E5E5;\n  font-size: 14px;\n"]))),ne=function(t){var e=t.data,n=t.onRemoveItem;return Object(E.jsxs)(te,{children:[Object(E.jsx)(ee,{readOnly:!0,value:e.value}),Object(E.jsx)("button",{onClick:function(){return n(e.id)},children:Object(E.jsx)(_t,{})})]})},ie=function(t){var e=t.itemList,n=t.onAddItem,i=t.onRemoveItem;return Object(E.jsx)(Rt,{onAddItem:n,children:e.map((function(t){return Object(E.jsx)(ne,{data:t,onRemoveItem:i},t.id+t.value)}))})},re=function(t){var e=[];return t.forEach((function(t){e=[].concat(Object(s.a)(e),[{id:t.id,name:t.value,count:0,voterList:[]}])})),e},ae=b.a.div(Zt||(Zt=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content :center;\n"]))),ce=b.a.div(qt||(qt=Object(j.a)(["\n  width: 683px;\n  height: 592px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n"]))),oe=b.a.p(Gt||(Gt=Object(j.a)(["\n  width: 100%;\n  height: 90px;\n  border-bottom: 1px solid #E5E5E5;\n  padding: 30px 20px;\n  font-size: 20px;\n"]))),se=b.a.section(Kt||(Kt=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n"]))),le=function(t){var e=t.user,n=t.addVote,i=t.onClose,a=t.onOpenPopup,c=Object(r.useState)(""),o=Object(d.a)(c,2),l=o[0],j=o[1],b=Object(r.useState)(yt()().format("YYYY-MM-DD")),u=Object(d.a)(b,2),f=u[0],p=u[1],x=Object(r.useState)(""),h=Object(d.a)(x,2),O=h[0],g=h[1],m=Object(r.useState)(0),v=Object(d.a)(m,2),w=v[0],y=v[1],C=Object(r.useState)([]),k=Object(d.a)(C,2),S=k[0],I=k[1];return Object(E.jsx)(ae,{children:Object(E.jsxs)(ce,{children:[Object(E.jsx)(oe,{children:"\ud22c\ud45c \uc0dd\uc131"}),Object(E.jsxs)(se,{children:[Object(E.jsx)(St,{value:l,onChange:function(t){j(t.target.value)},label:"\uc81c\ubaa9"}),Object(E.jsx)(St,{value:e.name,label:"\uc0dd\uc131\uc790",readOnly:!0}),Object(E.jsx)(Pt,{onChangeDate:function(t){var e=t.target.value;if("start"===t.target.name)p(e);else{if(yt()(f).isAfter(e))return;g(e)}},startDate:f,endDate:O}),Object(E.jsx)(ie,{itemList:S,onAddItem:function(t){I((function(e){return[].concat(Object(s.a)(e),[{id:w,value:t}])})),y((function(t){return t+1}))},onRemoveItem:function(t){I((function(e){return e.filter((function(e){return e.id!==t}))}))}})]}),Object(E.jsx)(Lt,{onClose:i,onCreate:function(){if(l)if(O)if(S.length<3)a("\ud22c\ud45c \ud56d\ubaa9\uc744 3\uac1c \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694.");else{var t=function(t){return{title:t.title,userId:t.user.userId,startDate:t.startDate,endDate:t.endDate,voteItem:re(t.itemList)}}({title:l,user:e,startDate:f,endDate:O,itemList:S});n(t)}else a("\ub9c8\uac10\uc77c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");else a("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")}})]})})},de=b.a.article(Qt||(Qt=Object(j.a)(["\n\twidth: 300px;\n\theight: 130px;\n\tbackground: ",";\n\tborder-radius: 3px;\n\tpadding: 15px;\n\tmargin: 0 20px 20px 0;\n\n\t.flex {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t}\n"])),(function(t){return t.background})),je=b.a.header(Wt||(Wt=Object(j.a)(["\n\tmargin-bottom : 15px;\n"]))),be=b.a.h2(Xt||(Xt=Object(j.a)(["\n\tfont-size: 18px;\n"]))),ue=b.a.button($t||($t=Object(j.a)(["\n\tbackground: transparent;\n\tborder: 0;\n\tpadding: 0;\n\tmargin-left: 15px;\n\tfont-size: 12px;\n"]))),fe=function(t){var e=t.title,n=t.onUpdate,i=t.onDelete,r=t.isClosed;return Object(E.jsxs)(je,{className:"flex",children:[Object(E.jsx)(be,{children:e}),!r&&Object(E.jsxs)("div",{children:[Object(E.jsx)(ue,{onClick:n,children:"\uc218\uc815"}),Object(E.jsx)(ue,{onClick:i,children:"\uc0ad\uc81c"})]})]})};fe.defaultProps={onUpdate:function(){},onDelete:function(){}};var pe,xe,he,Oe,ge,me,ve,we=fe,ye=b.a.div(pe||(pe=Object(j.a)(["\n\tmargin-bottom : 15px;\n\tfont-size: 14px;\n"]))),Ce=function(t){var e=t.name,n=t.startDate,i=t.endDate,r=function(t){return yt()(t).format("YY.MM.DD")};return Object(E.jsxs)(ye,{className:"flex",children:[Object(E.jsx)("span",{children:e}),Object(E.jsxs)("span",{children:[r(n),"~",r(i)]})]})},ke=b.a.button(xe||(xe=Object(j.a)(["\n\twidth: 70px;\n\theight: 35px;\n\tbackground: #780EFF;\n\tcolor: #fff;\n\tborder: 0;\n\tfont-size: 13px;\n\tfont-weight: 600;\n\tmargin-left: 17px;\n\tflex-shrink: 0;\n"]))),Ee=function(t){var e=t.onClick,n=t.name;return Object(E.jsx)(ke,{onClick:e,children:n})},Se=[{userId:0,name:"\uc544\uad6c\ubaac"},{userId:1,name:"\ud53c\uce74\uce04"},{userId:2,name:"\uaf2c\ubd81\uc774"},{userId:3,name:"\ud30c\uc774\ub9ac"},{userId:4,name:"\uc57c\ub3c4\ub780"},{userId:5,name:"\ud14c\ub9ac\uc5b4\ubaac"},{userId:6,name:"\ud30c\ub2e5\ubaac"},{userId:7,name:"\uac00\ud2b8\ubaac"},{userId:8,name:"\uba54\ud0c0\ubabd"},{userId:9,name:"\ub0b4\ub8e8\ubbf8"}],Ie=[],ze=Object(b.a)(de)(he||(he=Object(j.a)(["\n\t:hover {\n    box-shadow: 0px 2px 12px rgb(0 0 0 / 30%);\n\t\tcursor: pointer;\n\t}\n"]))),De=function(t){var e="",n=t.data,i=t.user,r=Se.filter((function(t){return t.userId===n.userId})),a=i.name!==r[0].name;return Object(E.jsxs)(ze,{onClick:function(){console.log("\uc0c1\uc138\ubcf4\uae30")},background:"#fff",children:[Object(E.jsx)(we,{isClosed:a,title:n.title,onDelete:function(t){t.stopPropagation(),console.log("\uc0ad\uc81c")},onUpdate:function(t){t.stopPropagation(),console.log("\uc218\uc815")}}),Object(E.jsxs)("section",{children:[Object(E.jsx)(Ce,{name:r[0].name,startDate:n.startDate,endDate:n.endDate}),Object(E.jsxs)("div",{className:"flex",children:[Object(E.jsx)(M,{options:n.voteItem,defaultValue:"\uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",width:"100%",height:"35px",fontSize:"13px",onChange:function(t){e=t}}),Object(E.jsx)(Ee,{name:"\ud22c\ud45c\ud558\uae30",onClick:function(t){t.stopPropagation(),console.log("\ud22c\ud45c\ud558\uae30",e)}})]})]})]})},Pe=function(t){var e=t.data,n=Se.filter((function(t){return t.userId===e.userId}));return Object(E.jsxs)(de,{background:"#E5E5E5",children:[Object(E.jsx)(we,{title:e.title,isClosed:!0}),Object(E.jsxs)("section",{children:[Object(E.jsx)(Ce,{name:n[0].name,startDate:e.startDate,endDate:e.endDate}),Object(E.jsxs)("div",{className:"flex",children:[Object(E.jsx)("div",{}),Object(E.jsx)(Ee,{name:"\uacb0\uacfc\ubcf4\uae30",onClick:function(t){t.stopPropagation(),console.log("\uacb0\uacfc\ubcf4\uae30")}})]})]})]})},Fe=b.a.div(Oe||(Oe=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content :center;\n"]))),Le=b.a.div(ge||(ge=Object(j.a)(["\n  width: 30%;\n  height: 20%;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 5px;\n"]))),Ve=b.a.h1(me||(me=Object(j.a)(["\n  font-size: 20px;\n  margin-top: 50px;\n"]))),Ne=b.a.div(ve||(ve=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n"]))),Me=function(t){var e=t.text,n=t.btnName,i=t.onClose,r=t.onConfirm,a=t.isConfirm;return Object(E.jsx)(Fe,{children:Object(E.jsxs)(Le,{children:[Object(E.jsx)(Ve,{children:e}),Object(E.jsx)(Ne,{children:a?Object(E.jsx)(W,{name:n,onClick:i}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(W,{name:n,onClick:r}),Object(E.jsx)(W,{name:"\ub2eb\uae30",bgColor:"#e5e5e5",color:"#000",onClick:i})]})})]})})};Me.defaultProps={text:"\ud31d\uc5c5\uc785\ub2c8\ub2e4.",btnName:"\ud655\uc778"};var Be=Me;var He=function(){var t=Object(r.useState)(Se[0]),e=Object(d.a)(t,2),n=e[0],i=e[1],a=Object(r.useState)(!1),c=Object(d.a)(a,2),o=c[0],j=c[1],b=Object(r.useState)(!1),u=Object(d.a)(b,2),f=u[0],p=u[1],x=Object(r.useState)(!1),h=Object(d.a)(x,2),O=h[0],g=h[1],m=Object(r.useState)([]),v=Object(d.a)(m,2),w=v[0],y=v[1],C=Object(r.useState)([]),k=Object(d.a)(C,2),S=k[0],I=k[1],z=Object(r.useState)([]),D=Object(d.a)(z,2),P=D[0],F=D[1],L=function(t){g(t),p((function(t){return!t}))},V=function(t){y(t),localStorage.setItem("@voteData",JSON.stringify(t));var e=function(t){var e=[],n=[];return t.forEach((function(t){yt()().isBefore(t.endDate)?e=[].concat(Object(s.a)(e),[t]):n=[].concat(Object(s.a)(n),[t])})),{newProgressVote:e,newEndVote:n}}(t),n=e.newProgressVote,i=e.newEndVote;I(i),F(n)};return Object(r.useEffect)((function(){var t=localStorage.getItem("@voteData");V(t?JSON.parse(t):Ie)}),[]),Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(R,{users:Se,name:n.name,onChangeUser:function(t){var e=Se.filter((function(e){return e.name===t}));i(e[0])}}),Object(E.jsxs)(tt,{user:n,onHeaderBtnClick:function(){return j(!0)},children:[Object(E.jsx)(vt,{title:"\uc9c4\ud589\uc911\uc778 \ud22c\ud45c",cardList:P,children:P.map((function(t){return Object(E.jsx)(De,{data:t,user:n},t.id)}))}),Object(E.jsx)(vt,{title:"\uc885\ub8cc\ub41c \ud22c\ud45c",cardList:S,children:S.map((function(t){return Object(E.jsx)(Pe,{data:t,user:n},t.id)}))})]}),o&&Object(E.jsx)(le,{user:n,onOpenPopup:L,addVote:function(t){var e,n=(e=w).length<1?0:e.reduce((function(t,e){return t.id>e.id?t.id:e.id}))+1,i=Object(l.a)({id:n},t);V([].concat(Object(s.a)(w),[i])),j(!1)},onClose:function(){return j(!1)}}),f&&Object(E.jsx)(Be,{isConfirm:!0,text:O,onClose:L})]})},Re=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),a(t),c(t)}))};o.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(He,{})}),document.getElementById("root")),Re()}},[[28,1,2]]]);
//# sourceMappingURL=main.b8d50ee0.chunk.js.map