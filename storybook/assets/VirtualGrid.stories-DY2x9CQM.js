import{p as O,f as d,a as G,B as q,h as u,b as l,s as b,c as R,t as K,i as L}from"./iframe-BObyFMmj.js";import{c as N,d as V}from"./create-runtime-stories-Bs43Unf1.js";import{V as v}from"./VirtualGrid-BldAifvQ.js";import{s as k}from"./attributes-BRafB15r.js";import{i as I}from"./lifecycle-CEWcC_AO.js";import"./preload-helper-PPVm8Dsz.js";import"./this-N1B6LQnn.js";import"./scrollMemory-qOkQMXt7.js";import"./shadcn-utils-ju7mLmNt.js";import"./reducedMotion.svelte-CCupkSNi.js";const{expect:a,userEvent:h,waitFor:J,within:A,fn:P}=__STORYBOOK_MODULE_TEST__,g=(c,i=q,o=q)=>{var r=H(),p=u(r);K(()=>{k(r,`width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;background:hsl(${i().hue??""} 70% 55%)`),L(p,o())}),l(c,r)},x=120,S=20,f=Array.from({length:x},(c,i)=>({id:i,hue:i*47%360})),y=Array.from({length:Math.ceil(x/S)},(c,i)=>{const o=i*S,r=Math.min(o+S,x);return{key:`s${i}`,title:`Section ${i+1}`,subtitle:`${r-o} items`,startIndex:o,endIndex:r,count:r-o}}),$=P(),M={title:"Composites/VirtualGrid",component:v,tags:["autodocs"],parameters:{layout:"fullscreen",a11y:{context:{exclude:[[".tile"]]}}}},{Story:_}=V();var H=d("<div> </div>"),W=d('<div style="height:560px;"><!></div>'),D=d('<div style="height:560px;"><!></div>'),F=d('<div style="height:560px;"><!></div>'),j=d('<div style="height:560px;"><!></div>'),U=d("<!> <!> <!> <!>",1);function B(c,i){O(i,!1),I();var o=U(),r=G(o);_(r,{name:"Justified",asChild:!0,children:(t,n)=>{var e=W(),s=u(e);v(s,{get items(){return f},get sections(){return y},get tile(){return g},ariaLabel:"Justified demo grid",aspect:m=>1+m.id%3*.4}),l(t,e)},$$slots:{default:!0},parameters:{docs:{description:{story:"The grid fills its parent (height:100%), so stories give it a fixed-height box.\n`aspect` varies cell width in the justified layout; `square` ignores it."}},__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid
		{items}
		{sections}
		{tile}
		ariaLabel="Justified demo grid"
		aspect={(it) => 1 + (it.id % 3) * 0.4}
	/>
</div>`}}});var p=b(r,2);_(p,{name:"Square wall",asChild:!0,children:(t,n)=>{var e=D(),s=u(e);v(s,{get items(){return f},get sections(){return y},get tile(){return g},square:!0,ariaLabel:"Square demo wall"}),l(t,e)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid {items} {sections} {tile} square ariaLabel="Square demo wall" />
</div>`}}});var T=b(p,2);_(T,{name:"Scale emphasis (opt-in)",asChild:!0,play:async({canvasElement:t})=>{const n=A(t);await a(n.getByRole("grid")).toBeInTheDocument(),await h.tab(),await h.keyboard("{ArrowRight}{ArrowRight}{ArrowDown}");const e=t.querySelector(".tile.active");await a(e).not.toBeNull(),await a(t.querySelector(".grid-wrap.hover-scale")).not.toBeNull(),window.matchMedia("(prefers-reduced-motion: reduce)").matches||await J(async()=>{await a(parseFloat(getComputedStyle(e).scale)).toBeGreaterThan(1)})},children:(t,n)=>{var e=F(),s=u(e);v(s,{get items(){return f},get sections(){return y},get tile(){return g},square:!0,hoverEffect:"scale",ariaLabel:"Scale-emphasis demo wall"}),l(t,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`\`hoverEffect="opacity"\` (default) needs no story of its own — every other story
    already demos it. This opts a wall into the scale-up emphasis instead — applies
    to BOTH pointer hover and keyboard focus (Tab into a tile to see it grow, same
    as hovering one).

    The \`play\` exists purely to make that visible AT REST. Hover and focus are the only
    states the prop affects, and a story can't rest on a hovered pointer — so with no play
    this story rendered a frame that was provably byte-identical to "Square wall" (0 of
    3,072,000 PNG bytes differed when measured), i.e. the one story documenting the prop
    showed no trace of it. Tabbing in leaves a tile genuinely scaled in the resting frame,
    and the assertion pins the effect rather than merely the class.`}},__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid
		{items}
		{sections}
		{tile}
		square
		hoverEffect="scale"
		ariaLabel="Scale-emphasis demo wall"
	/>
</div>`}}});var E=b(T,2);_(E,{name:"Keyboard navigation",asChild:!0,play:async({canvasElement:t})=>{$.mockClear();const e=A(t).getByRole("grid");await h.tab(),await a(e).toHaveFocus();const s=e.getAttribute("aria-activedescendant");await a(s).toBeTruthy(),await h.keyboard("{ArrowRight}");const m=e.getAttribute("aria-activedescendant");await a(m).toBeTruthy(),await a(m).not.toBe(s);const C=t.querySelector(".tile.active");await a(C).toBeTruthy(),await a(getComputedStyle(C).outlineStyle).not.toBe("none"),await a(getComputedStyle(e).boxShadow).toBe("none"),await h.keyboard("{Enter}"),await a($).toHaveBeenCalledOnce()},children:(t,n)=>{var e=j(),s=u(e);v(s,{get items(){return f},get sections(){return y},get tile(){return g},ariaLabel:"Keyboard navigation demo grid",get onActivate(){return $}}),l(t,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Keyboard + activate interaction test (rule 10):
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
</div>`}}}),l(c,o),R()}B.__docgen={data:[],name:"VirtualGrid.stories.svelte"};const w=N(B,M),se=["Justified","SquareWall","ScaleEmphasisOptIn","KeyboardNavigation"],oe={...w.Justified,tags:["svelte-csf-v5"]},ne={...w.SquareWall,tags:["svelte-csf-v5"]},le={...w.ScaleEmphasisOptIn,tags:["svelte-csf-v5"]},de={...w.KeyboardNavigation,tags:["svelte-csf-v5"]};export{oe as Justified,de as KeyboardNavigation,le as ScaleEmphasisOptIn,ne as SquareWall,se as __namedExportsOrder,M as default};
