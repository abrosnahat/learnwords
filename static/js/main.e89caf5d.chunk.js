(this.webpackJsonplearnwords=this.webpackJsonplearnwords||[]).push([[0],{108:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),c=a.n(s),i=a(15),o=a(14),l=a(21),d=a(20),u=a(24),h=a(48),j=a.n(h),b=a.p+"static/media/logo2.9585f365.png",m=a(73),p=a.n(m),g=a(151),x=r.a.createContext(null),f=a(3),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onSignOut=function(){(0,e.context.signOut)()},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:j.a.cover,children:Object(f.jsxs)("div",{className:j.a.wrap,children:[Object(f.jsx)("img",{className:j.a.logo,src:b,alt:"logo"}),Object(f.jsx)("div",{className:j.a.signout,children:Object(f.jsx)(g.a,{onClick:this.onSignOut,children:Object(f.jsx)(p.a,{style:{color:"white",fontSize:45}})})})]})})}}]),a}(r.a.Component);v.contextType=x;var O=v,_=a(64),C=a.n(_),y=function(e){var t=e.text;return Object(f.jsxs)("div",{className:C.a.container,children:[Object(f.jsx)("img",{src:b,alt:"logo"}),Object(f.jsx)("p",{className:C.a.text,children:t})]})},w=a(32),k=a.n(w),S=a(47),I=a(18),N=a(52),B=a.n(N),A=a(19),L=a.n(A),T=a(165),R=a(166),q=a.p+"static/media/default.ca053b40.png",F=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={done:!1,isRemembered:!1},e.handleCardClick=function(){e.setState((function(e){var t=e.done;if(!e.isRemembered)return{done:!t}}))},e.handleIsRememberClick=function(){e.setState((function(e){e.isRemembered,e.done;return{isRemembered:!0,done:!0}}))},e.handleDelitedClick=function(){e.props.onDeleted()},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.eng,n=t.rus,r=t.img,s=this.state,c=s.done,i=s.isRemembered;return Object(f.jsxs)("div",{className:L.a.root,children:[Object(f.jsx)("div",{className:B()(L.a.card,(e={},Object(I.a)(e,L.a.done,c),Object(I.a)(e,L.a.isRemembered,i),e)),onClick:this.handleCardClick,children:Object(f.jsxs)("div",{className:L.a.cardInner,children:[Object(f.jsxs)("div",{className:L.a.cardFront,children:[""!==r?Object(f.jsx)("img",{className:L.a.cardImg,src:r,alt:""}):Object(f.jsx)("img",{className:L.a.cardImg,src:q,alt:""}),a]}),Object(f.jsxs)("div",{className:L.a.cardBack,children:[""!==r?Object(f.jsx)("img",{className:L.a.cardImg,src:r,alt:""}):Object(f.jsx)("img",{className:L.a.cardImg,src:q,alt:""}),n]})]})}),Object(f.jsxs)("div",{className:L.a.icons,children:[Object(f.jsx)("div",{className:L.a.icon,children:Object(f.jsx)(T.a,{onClick:this.handleIsRememberClick})}),Object(f.jsx)("div",{className:L.a.icon,children:Object(f.jsx)(R.a,{onClick:this.handleDelitedClick})})]})]})}}]),a}(r.a.Component),U=a(26),D=a.n(U),z="trnsl.1.1.20210427T101006Z.a52d9801f5217139.b0eb841030d0f3d079016f5f864c5119eda3abd7",P=function(){var e=Object(S.a)(k.a.mark((function e(t){var a,n,r,s=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"en-ru",e.next=3,fetch("https://reactmarathon-api.netlify.app/api/translate?text=".concat(t,"&lang=").concat(a),{headers:{Authorization:z}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=a(155),W=a(156),H=a(157),M=a(158),Z=a(159),J=a(74),Q=a.n(J),K=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={eng:"",rus:"",img:"",value:"",label:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0441\u043b\u043e\u0432\u0430",isBusy:!1,searchCardButton:!1},e.handleEng=function(t){e.setState({eng:t.target.value})},e.handleRus=function(t){e.setState({rus:t.target.value})},e.handleImg=function(t){e.setState({img:t.target.value})},e.handleInputChange=function(t){var a=t.target;e.setState({value:a.value,eng:a.value,rus:e.state.rus})},e.getTheWord=Object(S.a)(k.a.mark((function t(){var a,n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.value,t.next=3,P(e.state.value);case 3:n=t.sent,r=void 0===n.translate?"\u0422\u0430\u043a\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 \u043d\u0435\u0442":"".concat(a," - ").concat(n.translate),e.setState({label:r,value:a,rus:n.translate,isBusy:!1,searchCardButton:void 0!==n.translate});case 6:case"end":return t.stop()}}),t)}))),e.handleSubmitSearch=function(){var t=Object(S.a)(k.a.mark((function t(a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.setState({isBusy:!0},e.getTheWord);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmitForm=function(t){t.preventDefault(),e.setState({searchCardButton:!1}),e.props.onAddedItem({eng:e.state.eng,rus:e.state.rus,id:+new Date,img:e.state.img})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=void 0===t?[]:t,n=e.onDeletedItem;return Object(f.jsxs)("div",{className:D.a.root,children:[Object(f.jsxs)(E.a,{className:D.a.searchForm,component:"form",onSubmit:this.handleSubmitSearch,children:[Object(f.jsx)("label",{className:D.a.searchLabel,children:this.state.label}),Object(f.jsxs)("div",{className:D.a.search,children:[Object(f.jsx)(W.a,{className:D.a.searchInput,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c",onChange:this.handleInputChange,required:!0}),Object(f.jsx)(g.a,{type:"submit",children:this.state.isBusy?Object(f.jsx)(H.a,{style:{width:"25px",height:"25px"}}):Object(f.jsx)(Q.a,{})}),this.state.searchCardButton&&Object(f.jsxs)("div",{className:D.a.searchToggle,children:[Object(f.jsx)(M.a,{className:D.a.button,type:"submit",variant:"contained",color:"primary",onClick:this.handleSubmitForm,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(f.jsxs)(Z.a,{children:["URL \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438:",Object(f.jsx)(W.a,{type:"text",onChange:this.handleImg})]})]})]})]}),Object(f.jsxs)("form",{className:D.a.form,onSubmit:this.handleSubmitForm,children:[Object(f.jsxs)(Z.a,{children:["\u0421\u043b\u043e\u0432\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c:",Object(f.jsx)(W.a,{type:"text",onChange:this.handleEng,required:!0})]}),Object(f.jsxs)(Z.a,{children:["\u0421\u043b\u043e\u0432\u043e \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c:",Object(f.jsx)(W.a,{type:"text",onChange:this.handleRus,required:!0})]}),Object(f.jsxs)(Z.a,{children:["URL \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438:",Object(f.jsx)(W.a,{type:"text",onChange:this.handleImg})]}),Object(f.jsx)(M.a,{className:D.a.button,type:"submit",variant:"contained",color:"primary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]}),Object(f.jsx)("div",{className:D.a.cardBlock,children:a.map((function(e){var t=e.eng,a=e.rus,r=e.img,s=e.id;return Object(f.jsx)(F,{onDeleted:function(){return n(s)},eng:t,rus:a,img:r},s)}))})]})}}]),a}(r.a.Component);K.contextType=x;var Y=K,G=a(75),V=a.n(G),X=a(76),$=a.n(X),ee=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.items,t=void 0===e?[]:e,a=t.map((function(e){return e.rus})),n={appLocale:{landingHeaderText:"",question:"",startQuizBtn:"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442",resultFilterAll:"\u0412\u0441\u0435",resultFilterCorrect:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",resultFilterIncorrect:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e",nextQuestionBtn:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439",resultPageHeaderText:"\u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u043d\u0430 <correctIndexLength> \u0438\u0437 <questionLength> \u0441\u043b\u043e\u0432."},quizTitle:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0437\u043d\u0430\u043d\u0438\u0439",quizSynopsis:"\u0422\u0435\u0441\u0442 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0449\u0438\u0445 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a",questions:t.reduce((function(e,n){for(var r=Math.ceil(4*Math.random())-1,s=[];s.length<4;){var c=a[Math.ceil(Math.random()*t.length)-1];s.includes(c)||c===n.rus||s.push(c)}return s[r]=n.rus,[].concat(Object(u.a)(e),[{question:n.eng,questionType:"text",answerSelectionType:"single",answers:s,correctAnswer:"".concat(r+1)}])}),[])};return Object(f.jsx)("div",{className:$.a.container,children:Object(f.jsx)(V.a,{quiz:n,shuffle:!0})})}}]),a}(r.a.Component),te=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={wordArr:[],cardTest:!0},e.urlRequest="/cards/".concat(e.props.user.uid),e.handleIsDelitedItem=function(t){var a=e.state.wordArr,n=e.context.setCards,r=a.filter((function(e){return e.id!==t}));n(e.urlRequest,r)},e.handleIsAddedItem=function(t){var a=e.context.setCards,n=e.state.wordArr;a(e.urlRequest,[t].concat(Object(u.a)(n)))},e.cardButton=function(){e.setState({cardTest:!0})},e.TestButton=function(){e.setState({cardTest:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;(0,this.context.getUserCardRef)().on("value",(function(t){e.setState({wordArr:t.val()||[]})}))}},{key:"render",value:function(){var e=this.state.wordArr;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{}),Object(f.jsxs)("div",{style:{textAlign:"center",background:"rgba(10,143,196,0.9)"},children:[Object(f.jsx)(M.a,{variant:"contained",size:"large",color:"primary",onClick:this.cardButton,children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"}),Object(f.jsx)(M.a,{variant:"contained",size:"large",color:"primary",onClick:this.TestButton,children:"\u0422\u0435\u0441\u0442"})]}),this.state.cardTest?Object(f.jsx)(Y,{onDeletedItem:this.handleIsDelitedItem,onAddedItem:this.handleIsAddedItem,item:e}):Object(f.jsx)(ee,{items:e}),Object(f.jsx)(y,{text:"\xa9 2021 abros.nahat"})]})}}]),a}(r.a.Component);te.contextType=x;var ae=te,ne=a(162),re=a(163),se=a(160),ce=a(117),ie=a(161),oe=a(77),le=a.n(oe),de=a(33),ue=a.n(de),he=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChahge=function(t){e.setState({password:t.target.value})},e.onSignin=function(){var t=e.state,a=t.email,n=t.password;(0,e.context.signWithEmail)(a,n)},e.onSignup=function(){var t=e.state,a=t.email,n=t.password;(0,e.context.signUp)(a,n)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:ue.a.main,children:Object(f.jsx)(E.a,{elevation:3,className:ue.a.container,children:Object(f.jsxs)("div",{children:[Object(f.jsx)(re.a,{className:ue.a.avatar,children:Object(f.jsx)(le.a,{})}),Object(f.jsx)(ce.a,{component:"h1",variant:"h5",className:ue.a.typography,children:"\u0417\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442, \u0432\u0441\u0435\u0433\u0434\u0430 \u0412\u0430\u043c \u0440\u0430\u0434\u044b!"}),Object(f.jsxs)("form",{children:[Object(f.jsx)(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",name:"email",autoComplete:"email",autoFocus:!0,value:this.state.email,onChange:this.onEmailChange}),Object(f.jsx)(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password",value:this.state.password,onChange:this.onPasswordChahge}),Object(f.jsxs)("div",{className:ue.a.buttons,children:[Object(f.jsx)(M.a,{variant:"contained",color:"primary",className:ue.a.button,onClick:this.onSignin,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(f.jsx)(M.a,{variant:"contained",color:"primary",className:ue.a.button,onClick:this.onSignup,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(f.jsx)(se.a,{container:!0,children:Object(f.jsx)(se.a,{item:!0,xs:!0,children:Object(f.jsx)(ie.a,{href:"#",variant:"body2",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})})})]})]})})})}}]),a}(r.a.Component);he.contextType=x;var je=he,be=a(78),me=a.n(be),pe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.context,a=t.auth,n=t.setUserUid;a.onAuthStateChanged((function(t){t?(n(t.uid),e.setState({user:t})):(n(!1),e.setState({user:!1}))}))}},{key:"render",value:function(){var e=this.state.user;return null===e?Object(f.jsx)("div",{className:me.a.loader,children:Object(f.jsx)(H.a,{disableShrink:!0})}):Object(f.jsx)(f.Fragment,{children:e?Object(f.jsx)(ae,{user:e}):Object(f.jsx)(je,{})})}}]),a}(r.a.Component);pe.contextType=x;var ge=pe,xe=(a(108),a(55)),fe=(a(109),a(113),{apiKey:"AIzaSyDfr7xBBT6o3EiHNfjS_gwOkOk-ZJuQCB4",authDomain:"learn-the-words-a9ad2.firebaseapp.com",databaseURL:"https://learn-the-words-a9ad2.firebaseio.com",projectId:"learn-the-words-a9ad2",storageBucket:"learn-the-words-a9ad2.appspot.com",messagingSenderId:"585194489776",appId:"1:585194489776:web:a6d5ab84621f5ff703b875"}),ve=function e(){var t=this;Object(i.a)(this,e),this.setUserUid=function(e){return t.userUid=e},this.signWithEmail=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.signUp=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.signOut=function(){return t.auth.signOut()},this.getUserCardRef=function(){return t.database.ref("/cards/".concat(t.userUid))},this.setCards=function(e,a){return t.database.ref(e).set(a)},xe.a.initializeApp(fe),this.auth=xe.a.auth(),this.database=xe.a.database(),this.userUid=null};c.a.render(Object(f.jsx)(x.Provider,{value:new ve,children:Object(f.jsx)(ge,{})}),document.getElementById("root"))},19:function(e,t,a){e.exports={card:"Card_card__35wN0",done:"Card_done__3xJPQ",cardInner:"Card_cardInner__WEJhS",cardFront:"Card_cardFront__21AQi",cardBack:"Card_cardBack__2nZQs",isRemembered:"Card_isRemembered__1OKtL",cardImg:"Card_cardImg__1Yd-2",icons:"Card_icons__2KAZy",icon:"Card_icon__146nY"}},26:function(e,t,a){e.exports={cardBlock:"CardList_cardBlock__22kR-",root:"CardList_root__14psI",signout:"CardList_signout__fyU9H",searchForm:"CardList_searchForm__JPwBu",searchToggle:"CardList_searchToggle__13gie",searchLabel:"CardList_searchLabel__1D9zZ",searchInput:"CardList_searchInput__16rwd",form:"CardList_form__2LsXx",button:"CardList_button__9F1h4"}},33:function(e,t,a){e.exports={main:"Login_main__2BWPV",container:"Login_container__7TefY",avatar:"Login_avatar__3_Gdf",typography:"Login_typography__ZulfP",button:"Login_button__10P_L",buttons:"Login_buttons__a3Pxe"}},48:function(e,t,a){e.exports={cover:"HeaderBlock_cover__2BveW",wrap:"HeaderBlock_wrap__uyRMo",logo:"HeaderBlock_logo__3UUwl"}},64:function(e,t,a){e.exports={container:"FooterBlock_container__2rKwj",text:"FooterBlock_text__3i6ZS"}},76:function(e,t,a){e.exports={container:"Test_container__-nT1n","react-quiz-container":"Test_react-quiz-container__2wg7x"}},78:function(e,t,a){e.exports={loader:"App_loader__Dop8H"}}},[[115,1,2]]]);
//# sourceMappingURL=main.e89caf5d.chunk.js.map