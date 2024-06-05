import{J as A,a9 as $o,L as v,Z as To,aa as ao,c as wo,I as Ho,_ as I,K as x,$ as so,O as co,b as zo,N as Do,a0 as Io,Q as t,a6 as V,R as Eo}from"./FbssmCC2.js";import{j as Fo,k as Bo,l as Go,h as Ro,m as Wo,N as ko}from"./_DdknI0n.js";import{r as io,i as Oo,c as Mo}from"./BepwJpmw.js";import{j as uo,t as jo,a as N,o as No,n as _o,l as D,i as Ko,k as q}from"./C5_RKV0h.js";import{N as Lo}from"./C5t46Ego.js";function lo(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const Qo=A("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Vo=uo({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){$o("-base-wave",Qo,jo(e,"clsPrefix"));const C=N(null),g=N(!1);let f=null;return No(()=>{f!==null&&window.clearTimeout(f)}),{active:g,selfRef:C,play(){f!==null&&(window.clearTimeout(f),g.value=!1,f=null),_o(()=>{var y;(y=C.value)===null||y===void 0||y.offsetHeight,g.value=!0,f=window.setTimeout(()=>{g.value=!1,f=null},1e3)})}}},render(){const{clsPrefix:e}=this;return D("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:G}=To;function qo({duration:e=".2s",delay:C=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${G},
 max-width ${e} ${G} ${C},
 margin-left ${e} ${G} ${C},
 margin-right ${e} ${G} ${C};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${G} ${C},
 max-width ${e} ${G},
 margin-left ${e} ${G},
 margin-right ${e} ${G};
 `)]}function W(e){return ao(e,[255,255,255,.16])}function Y(e){return ao(e,[0,0,0,.12])}const Yo=wo("n-button-group"),Ao={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},Jo=e=>{const{heightTiny:C,heightSmall:g,heightMedium:f,heightLarge:y,borderRadius:k,fontSizeTiny:M,fontSizeSmall:j,fontSizeMedium:J,fontSizeLarge:U,opacityDisabled:Z,textColor2:m,textColor3:X,primaryColorHover:c,primaryColorPressed:S,borderColor:_,primaryColor:H,baseColor:s,infoColor:z,infoColorHover:p,infoColorPressed:r,successColor:i,successColorHover:b,successColorPressed:o,warningColor:$,warningColorHover:P,warningColorPressed:F,errorColor:T,errorColorHover:u,errorColorPressed:B,fontWeight:E,buttonColor2:O,buttonColor2Hover:w,buttonColor2Pressed:l,fontWeightStrong:K}=e;return Object.assign(Object.assign({},Ao),{heightTiny:C,heightSmall:g,heightMedium:f,heightLarge:y,borderRadiusTiny:k,borderRadiusSmall:k,borderRadiusMedium:k,borderRadiusLarge:k,fontSizeTiny:M,fontSizeSmall:j,fontSizeMedium:J,fontSizeLarge:U,opacityDisabled:Z,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:O,colorSecondaryHover:w,colorSecondaryPressed:l,colorTertiary:O,colorTertiaryHover:w,colorTertiaryPressed:l,colorQuaternary:"#0000",colorQuaternaryHover:w,colorQuaternaryPressed:l,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:m,textColorTertiary:X,textColorHover:c,textColorPressed:S,textColorFocus:c,textColorDisabled:m,textColorText:m,textColorTextHover:c,textColorTextPressed:S,textColorTextFocus:c,textColorTextDisabled:m,textColorGhost:m,textColorGhostHover:c,textColorGhostPressed:S,textColorGhostFocus:c,textColorGhostDisabled:m,border:`1px solid ${_}`,borderHover:`1px solid ${c}`,borderPressed:`1px solid ${S}`,borderFocus:`1px solid ${c}`,borderDisabled:`1px solid ${_}`,rippleColor:H,colorPrimary:H,colorHoverPrimary:c,colorPressedPrimary:S,colorFocusPrimary:c,colorDisabledPrimary:H,textColorPrimary:s,textColorHoverPrimary:s,textColorPressedPrimary:s,textColorFocusPrimary:s,textColorDisabledPrimary:s,textColorTextPrimary:H,textColorTextHoverPrimary:c,textColorTextPressedPrimary:S,textColorTextFocusPrimary:c,textColorTextDisabledPrimary:m,textColorGhostPrimary:H,textColorGhostHoverPrimary:c,textColorGhostPressedPrimary:S,textColorGhostFocusPrimary:c,textColorGhostDisabledPrimary:H,borderPrimary:`1px solid ${H}`,borderHoverPrimary:`1px solid ${c}`,borderPressedPrimary:`1px solid ${S}`,borderFocusPrimary:`1px solid ${c}`,borderDisabledPrimary:`1px solid ${H}`,rippleColorPrimary:H,colorInfo:z,colorHoverInfo:p,colorPressedInfo:r,colorFocusInfo:p,colorDisabledInfo:z,textColorInfo:s,textColorHoverInfo:s,textColorPressedInfo:s,textColorFocusInfo:s,textColorDisabledInfo:s,textColorTextInfo:z,textColorTextHoverInfo:p,textColorTextPressedInfo:r,textColorTextFocusInfo:p,textColorTextDisabledInfo:m,textColorGhostInfo:z,textColorGhostHoverInfo:p,textColorGhostPressedInfo:r,textColorGhostFocusInfo:p,textColorGhostDisabledInfo:z,borderInfo:`1px solid ${z}`,borderHoverInfo:`1px solid ${p}`,borderPressedInfo:`1px solid ${r}`,borderFocusInfo:`1px solid ${p}`,borderDisabledInfo:`1px solid ${z}`,rippleColorInfo:z,colorSuccess:i,colorHoverSuccess:b,colorPressedSuccess:o,colorFocusSuccess:b,colorDisabledSuccess:i,textColorSuccess:s,textColorHoverSuccess:s,textColorPressedSuccess:s,textColorFocusSuccess:s,textColorDisabledSuccess:s,textColorTextSuccess:i,textColorTextHoverSuccess:b,textColorTextPressedSuccess:o,textColorTextFocusSuccess:b,textColorTextDisabledSuccess:m,textColorGhostSuccess:i,textColorGhostHoverSuccess:b,textColorGhostPressedSuccess:o,textColorGhostFocusSuccess:b,textColorGhostDisabledSuccess:i,borderSuccess:`1px solid ${i}`,borderHoverSuccess:`1px solid ${b}`,borderPressedSuccess:`1px solid ${o}`,borderFocusSuccess:`1px solid ${b}`,borderDisabledSuccess:`1px solid ${i}`,rippleColorSuccess:i,colorWarning:$,colorHoverWarning:P,colorPressedWarning:F,colorFocusWarning:P,colorDisabledWarning:$,textColorWarning:s,textColorHoverWarning:s,textColorPressedWarning:s,textColorFocusWarning:s,textColorDisabledWarning:s,textColorTextWarning:$,textColorTextHoverWarning:P,textColorTextPressedWarning:F,textColorTextFocusWarning:P,textColorTextDisabledWarning:m,textColorGhostWarning:$,textColorGhostHoverWarning:P,textColorGhostPressedWarning:F,textColorGhostFocusWarning:P,textColorGhostDisabledWarning:$,borderWarning:`1px solid ${$}`,borderHoverWarning:`1px solid ${P}`,borderPressedWarning:`1px solid ${F}`,borderFocusWarning:`1px solid ${P}`,borderDisabledWarning:`1px solid ${$}`,rippleColorWarning:$,colorError:T,colorHoverError:u,colorPressedError:B,colorFocusError:u,colorDisabledError:T,textColorError:s,textColorHoverError:s,textColorPressedError:s,textColorFocusError:s,textColorDisabledError:s,textColorTextError:T,textColorTextHoverError:u,textColorTextPressedError:B,textColorTextFocusError:u,textColorTextDisabledError:m,textColorGhostError:T,textColorGhostHoverError:u,textColorGhostPressedError:B,textColorGhostFocusError:u,textColorGhostDisabledError:T,borderError:`1px solid ${T}`,borderHoverError:`1px solid ${u}`,borderPressedError:`1px solid ${B}`,borderFocusError:`1px solid ${u}`,borderDisabledError:`1px solid ${T}`,rippleColorError:T,waveOpacity:"0.6",fontWeight:E,fontWeightStrong:K})},Uo={name:"Button",common:Ho,self:Jo},Zo=v([A("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[I("color",[x("border",{borderColor:"var(--n-border-color)"}),I("disabled",[x("border",{borderColor:"var(--n-border-color-disabled)"})]),so("disabled",[v("&:focus",[x("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[x("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[x("state-border",{borderColor:"var(--n-border-color-pressed)"})]),I("pressed",[x("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),I("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[x("border",{border:"var(--n-border-disabled)"})]),so("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[x("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[x("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[x("state-border",{border:"var(--n-border-pressed)"})]),I("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[x("state-border",{border:"var(--n-border-pressed)"})])]),I("loading","cursor: wait;"),A("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[I("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Fo&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,x("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),x("border",{border:"var(--n-border)"}),x("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),x("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[A("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Bo({top:"50%",originalTransform:"translateY(-50%)"})]),qo()]),x("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[x("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),I("block",`
 display: flex;
 width: 100%;
 `),I("dashed",[x("border, state-border",{borderStyle:"dashed !important"})]),I("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Xo=Object.assign(Object.assign({},co.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Go}}),se=uo({name:"Button",props:Xo,setup(e){const C=N(null),g=N(null),f=N(!1),y=zo(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),k=Ko(Yo,{}),{mergedSizeRef:M}=Ro({},{defaultSize:"medium",mergedSize:r=>{const{size:i}=e;if(i)return i;const{size:b}=k;if(b)return b;const{mergedSize:o}=r||{};return o?o.value:"medium"}}),j=q(()=>e.focusable&&!e.disabled),J=r=>{var i;j.value||r.preventDefault(),!e.nativeFocusBehavior&&(r.preventDefault(),!e.disabled&&j.value&&((i=C.value)===null||i===void 0||i.focus({preventScroll:!0})))},U=r=>{var i;if(!e.disabled&&!e.loading){const{onClick:b}=e;b&&Mo(b,r),e.text||(i=g.value)===null||i===void 0||i.play()}},Z=r=>{switch(r.key){case"Enter":if(!e.keyboard)return;f.value=!1}},m=r=>{switch(r.key){case"Enter":if(!e.keyboard||e.loading){r.preventDefault();return}f.value=!0}},X=()=>{f.value=!1},{inlineThemeDisabled:c,mergedClsPrefixRef:S,mergedRtlRef:_}=Do(e),H=co("Button","-button",Zo,Uo,e,S),s=Io("Button",_,S),z=q(()=>{const r=H.value,{common:{cubicBezierEaseInOut:i,cubicBezierEaseOut:b},self:o}=r,{rippleDuration:$,opacityDisabled:P,fontWeight:F,fontWeightStrong:T}=o,u=M.value,{dashed:B,type:E,ghost:O,text:w,color:l,round:K,circle:oo,textColor:R,secondary:bo,tertiary:to,quaternary:xo,strong:fo}=e,ho={"font-weight":fo?T:F};let a={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const L=E==="tertiary",no=E==="default",n=L?"default":E;if(w){const d=R||l;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":d||o[t("textColorText",n)],"--n-text-color-hover":d?W(d):o[t("textColorTextHover",n)],"--n-text-color-pressed":d?Y(d):o[t("textColorTextPressed",n)],"--n-text-color-focus":d?W(d):o[t("textColorTextHover",n)],"--n-text-color-disabled":d||o[t("textColorTextDisabled",n)]}}else if(O||B){const d=R||l;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":l||o[t("rippleColor",n)],"--n-text-color":d||o[t("textColorGhost",n)],"--n-text-color-hover":d?W(d):o[t("textColorGhostHover",n)],"--n-text-color-pressed":d?Y(d):o[t("textColorGhostPressed",n)],"--n-text-color-focus":d?W(d):o[t("textColorGhostHover",n)],"--n-text-color-disabled":d||o[t("textColorGhostDisabled",n)]}}else if(bo){const d=no?o.textColor:L?o.textColorTertiary:o[t("color",n)],h=l||d,Q=E!=="default"&&E!=="tertiary";a={"--n-color":Q?V(h,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":Q?V(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":Q?V(h,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":Q?V(h,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":h,"--n-text-color-hover":h,"--n-text-color-pressed":h,"--n-text-color-focus":h,"--n-text-color-disabled":h}}else if(to||xo){const d=no?o.textColor:L?o.textColorTertiary:o[t("color",n)],h=l||d;to?(a["--n-color"]=o.colorTertiary,a["--n-color-hover"]=o.colorTertiaryHover,a["--n-color-pressed"]=o.colorTertiaryPressed,a["--n-color-focus"]=o.colorSecondaryHover,a["--n-color-disabled"]=o.colorTertiary):(a["--n-color"]=o.colorQuaternary,a["--n-color-hover"]=o.colorQuaternaryHover,a["--n-color-pressed"]=o.colorQuaternaryPressed,a["--n-color-focus"]=o.colorQuaternaryHover,a["--n-color-disabled"]=o.colorQuaternary),a["--n-ripple-color"]="#0000",a["--n-text-color"]=h,a["--n-text-color-hover"]=h,a["--n-text-color-pressed"]=h,a["--n-text-color-focus"]=h,a["--n-text-color-disabled"]=h}else a={"--n-color":l||o[t("color",n)],"--n-color-hover":l?W(l):o[t("colorHover",n)],"--n-color-pressed":l?Y(l):o[t("colorPressed",n)],"--n-color-focus":l?W(l):o[t("colorFocus",n)],"--n-color-disabled":l||o[t("colorDisabled",n)],"--n-ripple-color":l||o[t("rippleColor",n)],"--n-text-color":R||(l?o.textColorPrimary:L?o.textColorTertiary:o[t("textColor",n)]),"--n-text-color-hover":R||(l?o.textColorHoverPrimary:o[t("textColorHover",n)]),"--n-text-color-pressed":R||(l?o.textColorPressedPrimary:o[t("textColorPressed",n)]),"--n-text-color-focus":R||(l?o.textColorFocusPrimary:o[t("textColorFocus",n)]),"--n-text-color-disabled":R||(l?o.textColorDisabledPrimary:o[t("textColorDisabled",n)])};let eo={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};w?eo={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:eo={"--n-border":o[t("border",n)],"--n-border-hover":o[t("borderHover",n)],"--n-border-pressed":o[t("borderPressed",n)],"--n-border-focus":o[t("borderFocus",n)],"--n-border-disabled":o[t("borderDisabled",n)]};const{[t("height",u)]:ro,[t("fontSize",u)]:po,[t("padding",u)]:vo,[t("paddingRound",u)]:Co,[t("iconSize",u)]:go,[t("borderRadius",u)]:yo,[t("iconMargin",u)]:mo,waveOpacity:Po}=o,So={"--n-width":oo&&!w?ro:"initial","--n-height":w?"initial":ro,"--n-font-size":po,"--n-padding":oo||w?"initial":K?Co:vo,"--n-icon-size":go,"--n-icon-margin":mo,"--n-border-radius":w?"initial":oo||K?ro:yo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":i,"--n-bezier-ease-out":b,"--n-ripple-duration":$,"--n-opacity-disabled":P,"--n-wave-opacity":Po},ho),a),eo),So)}),p=c?Eo("button",q(()=>{let r="";const{dashed:i,type:b,ghost:o,text:$,color:P,round:F,circle:T,textColor:u,secondary:B,tertiary:E,quaternary:O,strong:w}=e;i&&(r+="a"),o&&(r+="b"),$&&(r+="c"),F&&(r+="d"),T&&(r+="e"),B&&(r+="f"),E&&(r+="g"),O&&(r+="h"),w&&(r+="i"),P&&(r+="j"+lo(P)),u&&(r+="k"+lo(u));const{value:l}=M;return r+="l"+l[0],r+="m"+b[0],r}),z,e):void 0;return{selfElRef:C,waveElRef:g,mergedClsPrefix:S,mergedFocusable:j,mergedSize:M,showBorder:y,enterPressed:f,rtlEnabled:s,handleMousedown:J,handleKeydown:m,handleBlur:X,handleKeyup:Z,handleClick:U,customColorCssVars:q(()=>{const{color:r}=e;if(!r)return null;const i=W(r);return{"--n-border-color":r,"--n-border-color-hover":i,"--n-border-color-pressed":Y(r),"--n-border-color-focus":i,"--n-border-color-disabled":r}}),cssVars:c?void 0:z,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{mergedClsPrefix:e,tag:C,onRender:g}=this;g==null||g();const f=io(this.$slots.default,y=>y&&D("span",{class:`${e}-button__content`},y));return D(C,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&f,D(Lo,{width:!0},{default:()=>io(this.$slots.icon,y=>(this.loading||this.renderIcon||y)&&D("span",{class:`${e}-button__icon`,style:{margin:Oo(this.$slots.default)?"0":""}},D(Wo,null,{default:()=>this.loading?D(ko,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):D("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():y)})))}),this.iconPlacement==="left"&&f,this.text?null:D(Vo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?D("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?D("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});export{se as B,lo as c};
