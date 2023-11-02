import{o as u,e as p,f as e,p as b,q as A,b as x,d as D,s as $,v as g,w as C,_ as I,x as E,y as Z,c as z,a as F,z as M,A as j,B as q,C as O,D as U,E as W,G,H as J,I as K,J as Q,K as X,L as Y,M as ee,N as te,g as t,O as se,l as i,t as oe,n as f,i as N,P as B,S as P,m as T,Q as ne,R as V,T as H,U as le,j as ae,V as S,W as ie,X as re,F as ce,Y as ue,Z as de,$ as _e,a0 as pe,a1 as me,a2 as ve,a3 as he}from"./index-0945bac5.js";import{N as fe}from"./NoteDisplay-03f82978.js";import ge from"./DrawingControls-6aa22104.js";const xe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ye=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),we=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Se=[ye,we];function be(s,n){return u(),p("svg",xe,[...Se])}const $e={name:"carbon-zoom-out",render:be},Ce={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ke=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ze=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Me=[ke,ze];function Ne(s,n){return u(),p("svg",Ce,[...Me])}const Be={name:"carbon-zoom-in",render:Ne},Pe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Te=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Ve=[Te];function He(s,n){return u(),p("svg",Pe,[...Ve])}const De={name:"carbon-renew",render:He},Ie={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Le=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Re=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),Ae=[Le,Re];function Ee(s,n){return u(),p("svg",Ie,[...Ae])}const Ze={name:"carbon-time",render:Ee},Fe="/Input-Perturbation-Reduces-Exposure-Bias-in-Diffusion-Models/dist/assets/logo-title-horizontal-96c3c915.png";function je(){const s=b(Date.now()),n=A({interval:1e3}),m=x(()=>{const l=(n.value-s.value)/1e3,r=Math.floor(l%60).toString().padStart(2,"0");return`${Math.floor(l/60).toString().padStart(2,"0")}:${r}`});function v(){s.value=n.value}return{timer:m,resetTimer:v}}const qe=D({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(s){const n=s,m=x(()=>{var l,r,a;return(a=(r=(l=$.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.note}),v=x(()=>{var l,r,a;return(a=(r=(l=$.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.noteHTML});return(l,r)=>(u(),g(fe,{class:C(n.class),note:m.value,"note-html":v.value},null,8,["class","note","note-html"]))}}),Oe=I(qe,[["__file","/home/toonnyy8/projects/Input-Perturbation-Reduces-Exposure-Bias-in-Diffusion-Models/node_modules/@slidev/client/internals/NoteStatic.vue"]]),y=s=>(pe("data-v-574fd206"),s=s(),me(),s),Ue={class:"bg-main h-full slidev-presenter"},We={class:"grid-section top flex"},Ge=y(()=>e("img",{src:Fe,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Je=y(()=>e("div",{class:"flex-auto"},null,-1)),Ke={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Qe=y(()=>e("div",{class:"context"}," current ",-1)),Xe=y(()=>e("div",{class:"context"}," next ",-1)),Ye={key:1,class:"grid-section note grid grid-rows-[1fr_min-content]"},et={class:"border-t border-main py-1 px-2 text-sm"},tt={class:"grid-section bottom"},st={class:"progress-bar"},ot=D({__name:"Presenter",setup(s){const n=b();E(),Z(n);const m=z.titleTemplate.replace("%s",z.title||"Slidev");F({title:`Presenter - ${m}`});const{timer:v,resetTimer:l}=je(),r=b([]),a=x(()=>M.value<j.value?{route:$.value,clicks:M.value+1}:q.value?{route:O.value,clicks:0}:null);return U(),W(()=>{const k=n.value.querySelector("#slide-content"),o=G(J()),w=K();Q(()=>{if(!w.value||Y.value||!ee.value)return;const d=k.getBoundingClientRect(),_=(o.x-d.left)/d.width*100,h=(o.y-d.top)/d.height*100;if(!(_<0||_>100||h<0||h>100))return{x:_,y:h}},d=>{X.cursor=d})}),(k,o)=>{const w=Ze,d=De,_=te("HiddenText"),h=Be,L=$e;return u(),p(ce,null,[e("div",Ue,[e("div",{class:C(["grid-container",`layout${t(se)}`])},[e("div",We,[Ge,Je,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:o[0]||(o[0]=(...c)=>t(l)&&t(l)(...c))},[i(w,{class:"absolute"}),i(d,{class:"absolute opacity-0"})]),e("div",Ke,oe(t(v)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:f(t(N))},[i(P,{key:"main",class:"h-full w-full"},{default:B(()=>[i(ue,{"render-context":"presenter"})]),_:1}),Qe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:f(t(N))},[a.value?(u(),g(P,{key:"next",class:"h-full w-full"},{default:B(()=>{var c;return[i(t(_e),{is:(c=a.value.route)==null?void 0:c.component,"clicks-elements":r.value,"onUpdate:clicksElements":o[1]||(o[1]=R=>r.value=R),clicks:a.value.clicks,"clicks-disabled":!1,class:C(t(de)(a.value.route)),route:a.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):T("v-if",!0),Xe],4),T(" Notes "),(u(),p("div",Ye,[(u(),g(Oe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:f({fontSize:`${t(ne)}em`})},null,8,["style"])),e("div",et,[e("button",{class:"slidev-icon-btn",onClick:o[2]||(o[2]=(...c)=>t(V)&&t(V)(...c))},[i(_,{text:"Increase font size"}),i(h)]),e("button",{class:"slidev-icon-btn",onClick:o[3]||(o[3]=(...c)=>t(H)&&t(H)(...c))},[i(_,{text:"Decrease font size"}),i(L)])])])),e("div",tt,[i(ve,{persist:!0})]),(u(),g(ge,{key:2}))],2),e("div",st,[e("div",{class:"progress h-2px bg-primary transition-all",style:f({width:`${(t(le)-1)/(t(ae)-1)*100}%`})},null,4)])]),i(he),i(re,{modelValue:t(S),"onUpdate:modelValue":o[4]||(o[4]=c=>ie(S)?S.value=c:null)},null,8,["modelValue"])],64)}}});const it=I(ot,[["__scopeId","data-v-574fd206"],["__file","/home/toonnyy8/projects/Input-Perturbation-Reduces-Exposure-Bias-in-Diffusion-Models/node_modules/@slidev/client/internals/Presenter.vue"]]);export{it as default};