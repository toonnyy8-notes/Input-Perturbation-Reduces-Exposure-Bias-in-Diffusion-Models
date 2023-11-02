import{d,u as _,a as u,c as m,b as p,r as h,e as a,f as t,t as s,g as l,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as N,m as k,_ as P}from"./index-0945bac5.js";import{N as w}from"./NoteDisplay-03f82978.js";const V={class:"m-4"},B={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},S={class:"text-lg"},T={class:"font-bold flex gap-2"},j={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),M={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(C){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=p(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),a("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",B,[t("h1",D,s(l(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",S,[t("div",T,[t("div",j,s(e==null?void 0:e.no)+"/"+s(l(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",M)):k("v-if",!0)]))),128))])],4))}}),R=P(z,[["__file","/home/toonnyy8/projects/Input-Perturbation-Reduces-Exposure-Bias-in-Diffusion-Models/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
