import{j as v,l as y,af as c,T as g}from"./C5_RKV0h.js";const u=v({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(i,{slots:o}){function a(t){i.width?t.style.maxWidth=`${t.offsetWidth}px`:t.style.maxHeight=`${t.offsetHeight}px`,t.offsetWidth}function s(t){i.width?t.style.maxWidth="0":t.style.maxHeight="0",t.offsetWidth;const{onLeave:e}=i;e&&e()}function f(t){i.width?t.style.maxWidth="":t.style.maxHeight="";const{onAfterLeave:e}=i;e&&e()}function d(t){if(t.style.transition="none",i.width){const e=t.offsetWidth;t.style.maxWidth="0",t.offsetWidth,t.style.transition="",t.style.maxWidth=`${e}px`}else if(i.reverse)t.style.maxHeight=`${t.offsetHeight}px`,t.offsetHeight,t.style.transition="",t.style.maxHeight="0";else{const e=t.offsetHeight;t.style.maxHeight="0",t.offsetWidth,t.style.transition="",t.style.maxHeight=`${e}px`}t.offsetWidth}function h(t){var e;i.width?t.style.maxWidth="":i.reverse||(t.style.maxHeight=""),(e=i.onAfterEnter)===null||e===void 0||e.call(i)}return()=>{const{group:t,width:e,appear:r,mode:m}=i,x=t?c:g,n={name:e?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:r,onEnter:d,onAfterEnter:h,onBeforeLeave:a,onLeave:s,onAfterLeave:f};return t||(n.mode=m),y(x,n,o)}}});export{u as N};
