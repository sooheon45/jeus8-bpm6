import{ab as I,ac as H,ae as R,ag as w,ar as N,b as s,cH as L,bT as U,bS as D,af as M,c2 as $,bt as _,cI as O,bZ as q,c1 as z,ah as F,aW as W,a9 as S,I as i,aX as Y,O as J,cJ as C,aC as k,cK as K,a2 as A,aB as X,a6 as P,a1 as Z,a5 as j,aY as G,cL as Q,aV as ee,cM as ae,aq as te,cN as le,D as oe,cO as ne}from"./index-7b37f28a.js";const se=I({text:String,...H(),...R()},"VToolbarTitle"),re=w()({name:"VToolbarTitle",props:se(),setup(e,m){let{slots:a}=m;return N(()=>{const u=!!(a.default||a.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[u&&s("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(o=a.default)==null?void 0:o.call(a)])]}})}),{}}}),ie=[null,"prominent","default","comfortable","compact"],p=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ie.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...L(),...H(),...U(),...D(),...R({tag:"header"}),...M()},"VToolbar"),E=w()({name:"VToolbar",props:p(),setup(e,m){var n;let{slots:a}=m;const{backgroundColorClasses:u,backgroundColorStyles:o}=$(_(e,"color")),{borderClasses:t}=O(e),{elevationClasses:d}=q(e),{roundedClasses:v}=z(e),{themeClasses:g}=F(e),{rtlClasses:h}=W(),r=S(!!(e.extended||(n=a.extension)!=null&&n.call(a))),f=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=i(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Y({VBtn:{variant:"text"}}),N(()=>{var l;const b=!!(e.title||a.title),T=!!(a.image||e.image),B=(l=a.extension)==null?void 0:l.call(a);return r.value=!!(e.extended||B),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,t.value,d.value,v.value,g.value,h.value,e.class],style:[o.value,e.style]},{default:()=>[T&&s("div",{key:"image",class:"v-toolbar__image"},[a.image?s(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):s(J,{key:"image-img",cover:!0,src:e.image},null)]),s(C,{defaults:{VTabs:{height:k(f.value)}}},{default:()=>{var y,x,V;return[s("div",{class:"v-toolbar__content",style:{height:k(f.value)}},[a.prepend&&s("div",{class:"v-toolbar__prepend"},[(y=a.prepend)==null?void 0:y.call(a)]),b&&s(re,{key:"title",text:e.title},{text:a.title}),(x=a.default)==null?void 0:x.call(a),a.append&&s("div",{class:"v-toolbar__append"},[(V=a.append)==null?void 0:V.call(a)])])]}}),s(C,{defaults:{VTabs:{height:k(c.value)}}},{default:()=>[s(K,null,{default:()=>[r.value&&s("div",{class:"v-toolbar__extension",style:{height:k(c.value)}},[B])]})]})]})}),{contentHeight:f,extensionHeight:c}}}),ue=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ce(e){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=m;let u=0;const o=A(null),t=S(0),d=S(0),v=S(0),g=S(!1),h=S(!1),r=i(()=>Number(e.scrollThreshold)),f=i(()=>X((r.value-t.value)/r.value||0)),c=()=>{const n=o.value;!n||a&&!a.value||(u=t.value,t.value="window"in n?n.pageYOffset:n.scrollTop,h.value=t.value<u,v.value=Math.abs(t.value-r.value))};return P(h,()=>{d.value=d.value||t.value}),P(g,()=>{d.value=0}),Z(()=>{P(()=>e.scrollTarget,n=>{var T;const b=n?document.querySelector(n):window;if(!b){G(`Unable to locate element with identifier ${n}`);return}b!==o.value&&((T=o.value)==null||T.removeEventListener("scroll",c),o.value=b,o.value.addEventListener("scroll",c,{passive:!0}))},{immediate:!0})}),j(()=>{var n;(n=o.value)==null||n.removeEventListener("scroll",c)}),a&&P(a,c,{immediate:!0}),{scrollThreshold:r,currentScroll:t,currentThreshold:v,isScrollActive:g,scrollRatio:f,isScrollingUp:h,savedScroll:d}}const ve=I({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...p(),...Q(),...ue(),height:{type:[Number,String],default:64}},"VAppBar"),me=w()({name:"VAppBar",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:a}=m;const u=A(),o=ee(e,"modelValue"),t=i(()=>{var y;const l=new Set(((y=e.scrollBehavior)==null?void 0:y.split(" "))??[]);return{hide:l.has("hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),d=i(()=>{const l=t.value;return l.hide||l.inverted||l.collapse||l.elevate||l.fadeImage||!o.value}),{currentScroll:v,scrollThreshold:g,isScrollingUp:h,scrollRatio:r}=ce(e,{canScroll:d}),f=i(()=>e.collapse||t.value.collapse&&(t.value.inverted?r.value>0:r.value===0)),c=i(()=>e.flat||t.value.elevate&&(t.value.inverted?v.value>0:v.value===0)),n=i(()=>t.value.fadeImage?t.value.inverted?1-r.value:r.value:void 0),b=i(()=>{var x,V;if(t.value.hide&&t.value.inverted)return 0;const l=((x=u.value)==null?void 0:x.contentHeight)??0,y=((V=u.value)==null?void 0:V.extensionHeight)??0;return l+y});ae(i(()=>!!e.scrollBehavior),()=>{ne(()=>{t.value.hide?t.value.inverted?o.value=v.value>g.value:o.value=h.value||v.value<g.value:o.value=!0})});const{ssrBootStyles:T}=te(),{layoutItemStyles:B}=le({id:e.name,order:i(()=>parseInt(e.order,10)),position:_(e,"location"),layoutSize:b,elementSize:S(void 0),active:o,absolute:_(e,"absolute")});return N(()=>{const l=E.filterProps(e);return s(E,oe({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":n.value,height:void 0,...T.value},e.style]},l,{collapse:f.value,flat:c.value}),a)}),{}}});export{me as V,E as a};