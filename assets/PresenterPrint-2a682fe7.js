import{d as m,u as d,a as _,c as u,b as p,r as h,e as a,f as t,t as s,g as i,F as f,h as g,n as v,i as x,o as n,j as b,k as y,l as k,m as N,_ as P}from"./index-d5222901.js";import{N as w}from"./NoteDisplay-f4ea0afd.js";const B={class:"m-4"},D={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},M={class:"text-lg"},S={class:"font-bold flex gap-2"},T={class:"opacity-50"},E=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},R=m({__name:"PresenterPrint",setup(j){d(`
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
`),_({title:`Notes - ${u.title}`});const l=p(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),a("div",{id:"page-root",style:v(i(x))},[t("div",B,[t("div",D,[t("h1",V,s(i(u).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(l.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",M,[t("div",S,[t("div",T,s(e==null?void 0:e.no)+"/"+s(i(b)),1),y(" "+s(e==null?void 0:e.title)+" ",1),E])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<l.value.length-1?(n(),a("hr",H)):N("v-if",!0)]))),128))])],4))}}),F=P(R,[["__file","/home/runner/work/Input-Perturbation-Reduces-Exposure-Bias-in-Diffusion-Models/Input-Perturbation-Reduces-Exposure-Bias-in-Diffusion-Models/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{F as default};
