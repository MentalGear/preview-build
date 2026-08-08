import{p as A,f as d,a as B,B as T,h as c,b as n,s as w,c as K,t as L,i as V}from"./iframe-DoUpZrGJ.js";import{c as G,d as I}from"./create-runtime-stories-NOZuvjGf.js";import{V as v}from"./VirtualGrid-BWvyZmoE.js";import{s as J}from"./attributes-BHhJ46lX.js";import{i as k}from"./lifecycle-CPlsNFvS.js";import"./preload-helper-PPVm8Dsz.js";import"./this-TCGcLIVh.js";import"./scrollMemory-qOkQMXt7.js";import"./shadcn-utils-m4Kx4tR_.js";import"./reducedMotion.svelte-B8UAjo8S.js";const{expect:o,userEvent:b,within:N,fn:R}=__STORYBOOK_MODULE_TEST__,m=(l,t=T,r=T)=>{var a=M(),u=c(a);L(()=>{J(a,`width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;background:hsl(${t().hue??""} 70% 55%)`),V(u,r())}),n(l,a)},x=120,S=20,g=Array.from({length:x},(l,t)=>({id:t,hue:t*47%360})),f=Array.from({length:Math.ceil(x/S)},(l,t)=>{const r=t*S,a=Math.min(r+S,x);return{key:`s${t}`,title:`Section ${t+1}`,subtitle:`${a-r} items`,startIndex:r,endIndex:a,count:a-r}}),$=R(),P={title:"Composites/VirtualGrid",component:v,tags:["autodocs"],parameters:{layout:"fullscreen",a11y:{context:{exclude:[[".tile"]]}}}},{Story:_}=I();var M=d("<div> </div>"),W=d('<div style="height:560px;"><!></div>'),H=d('<div style="height:560px;"><!></div>'),j=d('<div style="height:560px;"><!></div>'),U=d('<div style="height:560px;"><!></div>'),D=d("<!> <!> <!> <!>",1);function q(l,t){A(t,!1),k();var r=D(),a=B(r);_(a,{name:"Justified",asChild:!0,children:(i,h)=>{var e=W(),s=c(e);v(s,{get items(){return g},get sections(){return f},get tile(){return m},ariaLabel:"Justified demo grid",aspect:p=>1+p.id%3*.4}),n(i,e)},$$slots:{default:!0},parameters:{docs:{description:{story:"The grid fills its parent (height:100%), so stories give it a fixed-height box.\n`aspect` varies cell width in the justified layout; `square` ignores it."}},__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid
		{items}
		{sections}
		{tile}
		ariaLabel="Justified demo grid"
		aspect={(it) => 1 + (it.id % 3) * 0.4}
	/>
</div>`}}});var u=w(a,2);_(u,{name:"Square wall",asChild:!0,children:(i,h)=>{var e=H(),s=c(e);v(s,{get items(){return g},get sections(){return f},get tile(){return m},square:!0,ariaLabel:"Square demo wall"}),n(i,e)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid {items} {sections} {tile} square ariaLabel="Square demo wall" />
</div>`}}});var C=w(u,2);_(C,{name:"Scale emphasis (opt-in)",asChild:!0,children:(i,h)=>{var e=j(),s=c(e);v(s,{get items(){return g},get sections(){return f},get tile(){return m},square:!0,hoverEffect:"scale",ariaLabel:"Scale-emphasis demo wall"}),n(i,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`\`hoverEffect="opacity"\` (default) needs no story of its own — every other story
    already demos it. This opts a wall into the scale-up emphasis instead — applies
    to BOTH pointer hover and keyboard focus (Tab into a tile to see it grow, same
    as hovering one).`}},__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid
		{items}
		{sections}
		{tile}
		square
		hoverEffect="scale"
		ariaLabel="Scale-emphasis demo wall"
	/>
</div>`}}});var O=w(C,2);_(O,{name:"Keyboard navigation",asChild:!0,play:async({canvasElement:i})=>{$.mockClear();const e=N(i).getByRole("grid");await b.tab(),await o(e).toHaveFocus();const s=e.getAttribute("aria-activedescendant");await o(s).toBeTruthy(),await b.keyboard("{ArrowRight}");const p=e.getAttribute("aria-activedescendant");await o(p).toBeTruthy(),await o(p).not.toBe(s);const E=i.querySelector(".tile.active");await o(E).toBeTruthy(),await o(getComputedStyle(E).outlineStyle).not.toBe("none"),await o(getComputedStyle(e).boxShadow).toBe("none"),await b.keyboard("{Enter}"),await o($).toHaveBeenCalledOnce()},children:(i,h)=>{var e=U(),s=c(e);v(s,{get items(){return g},get sections(){return f},get tile(){return m},ariaLabel:"Keyboard navigation demo grid",get onActivate(){return $}}),n(i,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Keyboard + activate interaction test (rule 10):
- Tabs into the grid scroller (role="grid"), verifies aria-activedescendant is set.
- Sends ArrowRight and asserts the active descendant changed (focus moved).
- Sends Enter and asserts the onActivate spy was called with the new index.`}},__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid
		{items}
		{sections}
		{tile}
		ariaLabel="Keyboard navigation demo grid"
		{onActivate}
	/>
</div>`}}}),n(l,r),K()}q.__docgen={data:[],name:"VirtualGrid.stories.svelte"};const y=G(q,P),se=["Justified","SquareWall","ScaleEmphasisOptIn","KeyboardNavigation"],re={...y.Justified,tags:["svelte-csf-v5"]},oe={...y.SquareWall,tags:["svelte-csf-v5"]},ne={...y.ScaleEmphasisOptIn,tags:["svelte-csf-v5"]},de={...y.KeyboardNavigation,tags:["svelte-csf-v5"]};export{re as Justified,de as KeyboardNavigation,ne as ScaleEmphasisOptIn,oe as SquareWall,se as __namedExportsOrder,P as default};
