(this["webpackJsonpsandhi-web"]=this["webpackJsonpsandhi-web"]||[]).push([[0],{118:function(e,t,a){},137:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n,c=a(0),o=a.n(c),i=a(33),r=a.n(i),s=(a(96),a(19)),l=(a(77),a(97),a(146));!function(e){e.LoadImage="LoadImage",e.LoadHocr="LoadHocr",e.SetHoverId="SetHoverId",e.LogInfo="LogInfo",e.ChangeCurPage="ChangeCurPage"}(n||(n={}));var d=a(18);var j=Object(l.a)((function(e,t){switch(t.type){case n.ChangeCurPage:return Object(d.f)(e,(function(e){e.curPageno=t.payload.curPageno}));case n.LogInfo:return Object(d.f)(e,(function(e){e.logInfo=t.payload.logInfo}));case n.LoadImage:return Object(d.f)(e,(function(e){e.pageImage=t.payload.pageImage}));case n.LoadHocr:return Object(d.f)(e,(function(e){e.hocrPage=t.payload.hocrPage}));case n.SetHoverId:return Object(d.f)(e,(function(e){e.hoverId=t.payload.hoverId}))}}),{pageImage:null,model:"",hocrPage:null,logInfo:"",curPageno:1}),b=Object(s.a)(j,3),h=b[0],u=b[1],O=(b[2],a(30)),p=a(20),v=a(34),g=a(42),m=a(55),x=a.n(m);function f(e){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(Object(v.a)().mark((function e(t){var a;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,createImageBitmap(t);case 2:return a=e.sent,e.abrupt("return",{curWidth:a.width,curHeight:a.height,urlObject:URL.createObjectURL(t),orgWidth:a.width,orgHeight:a.height});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=a(45),w=Object(_.a)(n.ChangeCurPage,(function(e){return{payload:{curPageno:e}}})),E=(Object(_.a)(n.LogInfo,(function(e){return{payload:{logInfo:e}}})),Object(_.a)(n.SetHoverId,(function(e){return{payload:{hoverId:e}}})),Object(_.a)(n.LoadImage,(function(e){return{payload:{pageImage:e}}}))),C=Object(_.a)(n.LoadHocr,(function(e){return{payload:{hocrPage:e}}}));a(74);function N(e){return fetch(e).then((function(e){return e.text()})).then((function(e){return console.log("Enter2"),(new DOMParser).parseFromString(e,"text/html")}),(function(e){console.log(e)}))}var T=a(1);var R=function(e){var t=e.curPageno,a=e.dispatch,n=e.fnSetCurZoom,o=x.a.parse(window.location.search),i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URL+"/i/b/"+(null===o||void 0===o?void 0:o.b)+"/p/"+t,r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URL+"/h/b/"+(null===o||void 0===o?void 0:o.b)+"/p/"+t,s=function(e){console.log("handling page change +"+i),fetch(i).then((function(e){return e.blob()})).then(function(){var e=Object(g.a)(Object(v.a)().mark((function e(t){var n,c;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.type.includes("image")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,f(t);case 4:if(n=e.sent){e.next=7;break}return e.abrupt("return");case 7:return n.curWidth=0,n.curHeight=0,a(E(n)),e.next=12,N(r);case 12:c=e.sent,a(C(c));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(c.useEffect)((function(){s()}),[t]),Object(T.jsx)("div",{className:"container-fluid pv-toolbar border",children:Object(T.jsxs)("div",{className:"row align-items-left shadow",children:[Object(T.jsxs)("div",{className:"col pl-3",children:[Object(T.jsx)("span",{className:"pe-md-5",children:Object(T.jsx)("button",{type:"button",className:"btn btn-light toolbar-btn",title:"Toggle Side-pane Window",children:Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-layout-sidebar",viewBox:"0 0 16 16",children:Object(T.jsx)("path",{d:"M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2V2z"})})})}),Object(T.jsxs)("button",{type:"button",className:"btn btn-light toolbar-btn px-2",title:"Previous Page",onClick:function(e){t-1>0&&a(w(parseInt(t)-1))},children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-arrow-left-circle-fill",viewBox:"0 0 16 16",children:Object(T.jsx)("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})})," "]}),Object(T.jsx)("span",{className:"border-start border-2 h-100 rounded-pill"}),Object(T.jsxs)("button",{type:"button",className:"btn btn-light toolbar-btn px-2",title:"Next Page",onClick:function(e){t+1>0&&a(w(parseInt(t)+1))},children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-arrow-right-circle-fill",viewBox:"0 0 16 16",children:Object(T.jsx)("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})})," "]}),Object(T.jsxs)("span",{className:"page-num",children:[Object(T.jsx)("input",{type:"text",value:t,className:"pageviewer",onChange:s}),Object(T.jsx)("span",{className:"border-0",children:"of 217"})]})]}),Object(T.jsxs)("div",{className:"col",children:[Object(T.jsx)("button",{type:"button",className:"btn btn-light toolbar-btn px-2",title:"Zoom-in",onClick:function(){return n(.25)},children:Object(T.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-zoom-in",viewBox:"0 0 16 16",children:[Object(T.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}),Object(T.jsx)("path",{d:"M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"}),Object(T.jsx)("path",{fillRule:"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"})]})}),Object(T.jsx)("span",{className:"border-start border-2 h-100 rounded-pill"}),Object(T.jsx)("button",{type:"button",className:"btn btn-light toolbar-btn px-2",title:"Zoom-out",onClick:function(){return n(-.25)},children:Object(T.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-zoom-out",viewBox:"0 0 16 16",children:[Object(T.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}),Object(T.jsx)("path",{d:"M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"}),Object(T.jsx)("path",{fillRule:"evenodd",d:"M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"})]})})]})]})})},I=a(40),y=a(147),P=a(2),H=a(3),k=a(8),L=a(9),A=function(e){Object(k.a)(a,e);var t=Object(L.a)(a);function a(){var e;Object(P.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).image=null,e}return Object(H.a)(a,[{key:"componentDidUpdate",value:function(e){var t,a;(null===(t=e.pageImage)||void 0===t?void 0:t.urlObject)!==(null===(a=this.props.pageImage)||void 0===a?void 0:a.urlObject)&&this.loadImage()}},{key:"componentWillUnmount",value:function(){var e;null===(e=this.image)||void 0===e||e.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){var e;this.image=new window.Image,this.image.src=null===(e=this.props.pageImage)||void 0===e?void 0:e.urlObject}},{key:"render",value:function(){var e=this;return Object(T.jsx)(I.a,{image:this.image,ref:function(t){e.imageNode=t},width:this.props.width,height:this.props.height})}}]),a}(o.a.Component),D=A,W=a(6),F=a(49),U=a(4),V=a(75),K=a(36),B=a(91),z=(a(118),a.p+"static/media/Spin.a5530faa.svg");var M=function(e){var t=e.page,a=(e.hoverId,e.dispatch,e.editorValue,e.setEditorValue),n=Object(c.useState)(!1),o=Object(s.a)(n,2),i=o[0],r=o[1];return Object(c.useEffect)((function(){if(t){var e;r(!0);var n=new U.i({nodes:Object(K.a)(V.a.spec.nodes,"paragraph block*","block"),marks:V.a.spec.marks});window.view=new F.c(document.querySelector("#editor"),{state:W.b.create({doc:U.a.fromSchema(n).parse(t),plugins:Object(B.a)({schema:n})})}),a(null===(e=document.querySelector("#editor"))||void 0===e?void 0:e.innerText.split("Insert\nType...\n\u2b1a\n\n")[1])}}),[t]),Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{id:"editor",className:i?"appear":"",onKeyUp:function(e){a(e.target.innerText)}}),Object(T.jsx)("div",{className:"loadingAnimation",children:!i&&Object(T.jsx)("img",{src:z,alt:""})})]})},G=a(35),Z=a.n(G);a(137);var q=function(){var e,t,a,n,o,i,r,l,d,j=h(),b=Object(s.a)(j,2),u=b[0],p=b[1],v=Object(c.useState)(),g=Object(s.a)(v,2),m=g[0],f=g[1],S=x.a.parse(window.location.search),_=Object(c.useState)(1),E=Object(s.a)(_,2),C=E[0],N=E[1],P=Object(c.useState)(null),H=Object(s.a)(P,2),k=(H[0],H[1]),L=Object(c.useState)(!1),A=Object(s.a)(L,2),W=A[0],F=A[1],U=Object(y.a)(),V=Object(s.a)(U,2),K=V[0],B=V[1],G=B.width,q=B.height;return Object(c.useEffect)((function(){F(null==u.pageImage)}),[u.pageImage]),Object(c.useEffect)((function(){null!==S&&void 0!==S&&S.p||(S.p="1"),null!==S&&void 0!==S&&S.b&&Z.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URL+"/books/"+S.b).then((function(e){return k(e.data)})),p(w(parseInt(S.p)))}),[]),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"background",children:[Object(T.jsxs)("div",{className:"container-fluid py-0",children:[Object(T.jsx)("div",{className:"head",children:Object(T.jsx)("nav",{className:"navbar navbar-dark navbar-expand-md shadow-sm p-0 m-0",style:{backgroundColor:"#1b1b53",paddingRight:"0"},children:Object(T.jsxs)("div",{className:"container-fluid py-0 d-flex justify-content-spacebetween",children:[Object(T.jsx)(O.b,{className:"navbar-brand",to:"/cli",children:"SandHI"}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{className:"saveButton",onClick:function(){console.log(m);var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URL+"/ocr-editor-text";Z.a.post(e,{text:m}).then((function(e){})).catch((function(e){}))},children:"save file"})})]})})}),Object(T.jsx)("div",{className:"format-options-background"})]}),Object(T.jsxs)("div",{className:"container-fluid pv-container pt-2 pb-4 px-2",children:[Object(T.jsxs)("div",{className:"row wh-90 vh-100 border shadow",children:[Object(T.jsx)("div",{className:"col-md-6 shadow",ref:K,children:Object(T.jsxs)("div",{className:"p-3 border pv-pane",children:[Object(T.jsx)("div",{className:"loadingAnimation",children:W&&Object(T.jsx)("img",{src:z,alt:""})}),Object(T.jsxs)(I.c,{width:(0!==(null===(e=u.pageImage)||void 0===e?void 0:e.curWidth)?null===(t=u.pageImage)||void 0===t?void 0:t.curWidth:G)*C,height:(0!==(null===(a=u.pageImage)||void 0===a?void 0:a.curHeight)?null===(n=u.pageImage)||void 0===n?void 0:n.curHeight:q)*C,children:[!u.pageImage&&Object(T.jsx)(I.b,{children:Object(T.jsx)(I.d,{text:null===(o=u.pageImage)||void 0===o?void 0:o.urlObject})}),Object(T.jsx)(I.b,{children:Object(T.jsx)(D,{pageImage:u.pageImage,width:(0!==(null===(i=u.pageImage)||void 0===i?void 0:i.curWidth)?null===(r=u.pageImage)||void 0===r?void 0:r.curWidth:G)*C,height:(0!==(null===(l=u.pageImage)||void 0===l?void 0:l.curHeight)?null===(d=u.pageImage)||void 0===d?void 0:d.curHeight:q)*C})})]})]})}),Object(T.jsx)("div",{className:"col-md-6 shadow",children:Object(T.jsx)("div",{className:"p-3 border pv-pane",children:Object(T.jsx)(M,{editorValue:m,setEditorValue:f,page:u.hocrPage,hoverId:u.hoverId,dispatch:p})})})]}),Object(T.jsxs)("div",{className:"row fixed-bottom",children:[Object(T.jsx)(R,{curPageno:u.curPageno,dispatch:p,fnSetCurZoom:function(e){N(C+e)}}),Object(T.jsx)("div",{className:"col-md-6 offset-md-4 px-3",children:u.logInfo})]})]})]})})},J=a(64),Q=a(46),X=a(22),Y=a(60);var $=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(!1),i=Object(s.a)(o,2),r=i[0],l=i[1],d=Object(c.useState)({}),j=Object(s.a)(d,2),b=j[0],h=j[1],u=Object(c.useState)([]),p=Object(s.a)(u,2),v=p[0],g=p[1],m=Object(c.useState)({}),x=Object(s.a)(m,2),f=x[0],S=x[1],_=Object(c.useRef)(null),w=function(){return n(!1)},E=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URL+"/books";Z.a.get(e).then((function(e){g(e.data.data)})).catch((function(e){S({msg:e.response.data,variant:"danger"}),l(!0)}))};Object(c.useEffect)((function(){E()}),[]);var C=v.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:t+1}),Object(T.jsx)("td",{children:e.title}),Object(T.jsx)("td",{children:e.author}),Object(T.jsx)("td",{children:e.category}),Object(T.jsx)("td",{children:Object(T.jsx)(O.b,{to:"/cli/pageview?b="+e.repo_name,children:"View Book"})})]},e.repo_name)})),N=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.id,c=Object.assign({},b);c[n]=a,h(c)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(Q.a,{show:a,onHide:w,animation:!1,children:[Object(T.jsx)(Q.a.Header,{children:Object(T.jsx)(Q.a.Title,{children:"Add a book to SandHI catalog using this form"})}),Object(T.jsx)(Q.a.Body,{children:Object(T.jsxs)(X.a,{ref:_,onSubmit:function(e){e.preventDefault();var t=new FormData(_.current),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URL+"/books";Z.a.post(a,t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){S({msg:"Successfully saved the book to the SandHI catalog",variant:"success"}),l(!0),E()})).catch((function(e){var t;S({msg:null===(t=e.response)||void 0===t?void 0:t.data,variant:"danger"}),l(!0)}))},children:[Object(T.jsxs)(X.a.Group,{children:[Object(T.jsx)(X.a.Label,{children:"Book Title"}),Object(T.jsx)(X.a.Control,{type:"text",placeholder:"Enter Book Title",onChange:N,id:"title",name:"title"})]}),Object(T.jsxs)(X.a.Group,{children:[Object(T.jsx)(X.a.Label,{children:"Author of the book"}),Object(T.jsx)(X.a.Control,{type:"text",placeholder:"Enter name of the Author",onChange:N,id:"author",name:"author"})]}),Object(T.jsxs)(X.a.Group,{children:[Object(T.jsx)(X.a.Label,{children:"Category"}),Object(T.jsxs)(X.a.Control,{as:"select",id:"category",name:"category",children:[Object(T.jsx)("option",{value:"general",children:"General"}),Object(T.jsx)("option",{value:"ganitha",children:"Ganitha"}),Object(T.jsx)("option",{value:"philosophy",children:"Philosophy"}),Object(T.jsx)("option",{value:"article",children:"Article"})]})]}),Object(T.jsxs)(X.a.Group,{children:[Object(T.jsx)(X.a.Label,{children:"Number of pages"}),Object(T.jsx)(X.a.Control,{type:"text",placeholder:"Number of pages",id:"noofpages",name:"noofpages"})]}),Object(T.jsxs)(X.a.Group,{children:[Object(T.jsx)(X.a.Label,{children:"Pdf File of the book"}),Object(T.jsx)(X.a.File,{id:"uploaded_file",name:"uploaded_file"})]}),Object(T.jsx)("br",{}),Object(T.jsx)(J.a,{variant:"primary",type:"submit",children:"Submit"}),Object(T.jsx)(Y.a,{onClose:function(){return l(!1)},dismissible:!0,show:r,variant:null===f||void 0===f?void 0:f.variant,children:null===f||void 0===f?void 0:f.msg})]})}),Object(T.jsx)(Q.a.Footer,{children:Object(T.jsx)(J.a,{variant:"secondary",onClick:w,children:"Close"})})]}),Object(T.jsx)("div",{className:"container",children:Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col",children:Object(T.jsxs)("table",{className:"table table-striped",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{scope:"col",children:"#"}),Object(T.jsx)("th",{scope:"col",children:"Title"}),Object(T.jsx)("th",{scope:"col",children:"Author"}),Object(T.jsx)("th",{scope:"col",children:"Category"}),Object(T.jsx)("th",{scope:"col",children:"Link to the book"})]})}),Object(T.jsxs)("tbody",{style:{color:"#1b1b53"},children:[Object(T.jsx)("tr",{children:Object(T.jsx)("td",{colSpan:5,children:Object(T.jsx)(O.b,{to:"/cli/search",children:" Search the Catalog"})})}),C,Object(T.jsx)("tr",{children:Object(T.jsx)("td",{colSpan:5,children:Object(T.jsx)(J.a,{variant:"link",onClick:function(){return n(!0)},children:"Add a book to the Catalog"})})})]})]})})})})]})},ee=a(16);a(143);function te(){var e,t,a,n,o=Object(c.useState)(""),i=Object(s.a)(o,2),r=(i[0],i[1]),l=Object(c.useState)({}),d=Object(s.a)(l,2),j=d[0],b=d[1],h=Object(c.useState)(!1),u=Object(s.a)(h,2),p=u[0],m=u[1],x=Object(c.useState)({}),f=Object(s.a)(x,2),S=f[0],_=f[1],w=null===S||void 0===S||null===(e=S.response)||void 0===e?void 0:e.docs.map((function(e,t){var a;return Object(T.jsxs)("div",{className:"card col-12 col-md-9 border-0 pt-4",children:[Object(T.jsx)(O.b,{to:"/cli/pageview?b="+e.bookuuid+"&p="+e.pageno,className:"card-link stretched-link",target:"_blank",rel:"noopener noreferrer",children:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URL+"/cli/pageview?b="+e.bookuuid+"&p="+e.pageno}),Object(T.jsxs)("div",{className:"card-title pt-2 inline-headers",children:[Object(T.jsx)("h5",{children:null===e||void 0===e?void 0:e.title}),Object(T.jsx)("span",{className:"badge bg-light text-dark rounded-pill",children:"Page "+e.pageno}),Object(T.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.author})]}),Object(T.jsx)("div",{className:"card-body p-0 m-0 text-muted d-inline-block text-truncate",dangerouslySetInnerHTML:{__html:null===(a=S.highlighting[e.id])||void 0===a?void 0:a.pagecontent[0]}})]},e.id)})),E=function(){var e=Object(g.a)(Object(v.a)().mark((function e(t){var a;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URL+"/s/"+t,e.next=3,Z.a.get(a).then((function(e){_(e.data)})).catch((function(e){var t;e.response?b({msg:null===(t=e.response)||void 0===t?void 0:t.data,variant:"danger"}):b({msg:"Unkown errro in server",variant:"danger"});m(!0)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"container-fluid px-5 pt-5",children:Object(T.jsxs)("div",{className:"row align-items-center shadow p-2",children:[Object(T.jsx)(O.b,{to:"/cli",children:"back to Catalog"}),Object(T.jsx)("div",{className:"col-12 col-md-4 col-lg-2",children:Object(T.jsx)("p",{className:"h1",children:"Sandhi"})}),Object(T.jsx)("div",{className:"col-12 col-md-8 col-lg-8",children:Object(T.jsx)("input",{type:"text",className:"form-control form-control-lg",id:"exampleFormControlInput1",placeholder:"enter your search string",onKeyDown:function(e){if("Enter"===e.key)return E(e.target.value),void console.log(w);r(e.target.value)}})}),Object(T.jsx)(Y.a,(t={variant:"danger",onClose:function(){return m(!1)},dismissible:!0,show:p},Object(ee.a)(t,"variant",null===j||void 0===j?void 0:j.variant),Object(ee.a)(t,"children",null===j||void 0===j?void 0:j.msg),t))]})}),Object(T.jsx)("div",{className:"container-fluid p-0 m-0",children:Object(T.jsx)("hr",{})}),Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-12 col-md-4",show:null===S||void 0===S?void 0:S.response,children:Object(T.jsxs)("h6",{className:"text-muted",children:[null===S||void 0===S||null===(a=S.response)||void 0===a?void 0:a.numFound," ","results in ",(null===S||void 0===S||null===(n=S.responseHeader)||void 0===n?void 0:n.QTime)+" ","milliseconds"]})})}),Object(T.jsx)("div",{className:"row border shadow-lg pb-4",children:w})]})]})}var ae=function(){var e=h(),t=Object(s.a)(e,2),a=(t[0],t[1],window.location.href);return a.split("?").length>1&&a.split("?")[1].split("&")[0],Object(T.jsx)(O.a,{children:Object(T.jsxs)(p.c,{children:[Object(T.jsx)(p.a,{path:"/cli/search",children:Object(T.jsx)(te,{})}),Object(T.jsxs)(p.a,{exact:!0,path:"/cli",children:[Object(T.jsx)("nav",{className:"navbar navbar-dark navbar-expand-md shadow-sm p-0 m-0",style:{backgroundColor:"#1b1b53"},children:Object(T.jsxs)("div",{className:"container-fluid py-0",children:[Object(T.jsx)(O.b,{className:"navbar-brand",to:"/cli",children:"SandHI"}),Object(T.jsx)("span",{className:"navbar-text px-3 me-auto",children:"Books Catalog List"})]})}),Object(T.jsx)($,{})]}),Object(T.jsx)(p.a,{exact:!0,path:"/cli/pageview",children:Object(T.jsx)(q,{})})]})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,148)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),o(e),i(e)}))};r.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(u,{children:Object(T.jsx)(ae,{})})}),document.getElementById("root")),ne()},96:function(e,t,a){},97:function(e,t,a){}},[[144,1,2]]]);
//# sourceMappingURL=main.941d3951.chunk.js.map