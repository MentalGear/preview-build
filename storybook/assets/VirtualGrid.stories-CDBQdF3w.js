import{p as k,f as c,a as E,n as q,h as u,b as l,s as b,c as K,t as N,i as M}from"./iframe-DzidZyLN.js";import{c as R,d as I}from"./create-runtime-stories-BaZtXNeX.js";import{V as v}from"./VirtualGrid-MjQNdxVs.js";import{s as G}from"./attributes-2qlF22F7.js";import{i as V}from"./lifecycle-BkwGPURp.js";import"./preload-helper-PPVm8Dsz.js";import"./this-Cg6E7OZp.js";import"./scrollMemory-qOkQMXt7.js";import"./shadcn-utils-CYzWa6Y_.js";import"./reducedMotion.svelte-BHOk6amI.js";const{expect:r,userEvent:n,waitFor:J,within:S,fn:P}=__STORYBOOK_MODULE_TEST__,g=(h,i=q,s=q)=>{var o=W(),y=u(o);N(()=>{G(o,`width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;background:hsl(${i().hue??""} 70% 55%)`),M(y,s())}),l(h,o)},x=120,A=20,p=Array.from({length:x},(h,i)=>({id:i,hue:i*47%360})),m=Array.from({length:Math.ceil(x/A)},(h,i)=>{const s=i*A,o=Math.min(s+A,x);return{key:`s${i}`,title:`Section ${i+1}`,subtitle:`${o-s} items`,startIndex:s,endIndex:o,count:o-s}}),$=P(),H={title:"Composites/VirtualGrid",component:v,tags:["autodocs"],parameters:{layout:"fullscreen",a11y:{context:{exclude:[[".tile"]]}},docs:{description:{component:""}}}},{Story:f}=I();var W=c("<div> </div>"),F=c('<div style="height:560px;"><!></div>'),D=c('<div style="height:560px;"><!></div>'),j=c('<div style="height:560px;"><!></div>'),U=c('<div style="height:560px;"><!></div>'),Y=c('<div style="height:560px;"><!></div>'),z=c("<!> <!> <!> <!> <!>",1);function O(h,i){k(i,!1),V();var s=z(),o=E(s);f(o,{name:"Justified",asChild:!0,children:(t,d)=>{var e=F(),a=u(e);v(a,{get items(){return p},get sections(){return m},get tile(){return g},ariaLabel:"Justified demo grid",aspect:_=>1+_.id%3*.4}),l(t,e)},$$slots:{default:!0},parameters:{docs:{description:{story:"The grid fills its parent (height:100%), so stories give it a fixed-height box.\n`aspect` varies cell width in the justified layout; `square` ignores it."}},__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid
		{items}
		{sections}
		{tile}
		ariaLabel="Justified demo grid"
		aspect={(it) => 1 + (it.id % 3) * 0.4}
	/>
</div>`}}});var y=b(o,2);f(y,{name:"Square wall",asChild:!0,children:(t,d)=>{var e=D(),a=u(e);v(a,{get items(){return p},get sections(){return m},get tile(){return g},square:!0,ariaLabel:"Square demo wall"}),l(t,e)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid {items} {sections} {tile} square ariaLabel="Square demo wall" />
</div>`}}});var B=b(y,2);f(B,{name:"Scale emphasis (opt-in)",asChild:!0,play:async({canvasElement:t})=>{const d=S(t);await r(d.getByRole("grid")).toBeInTheDocument(),await n.tab(),await n.keyboard("{ArrowRight}{ArrowRight}{ArrowDown}");const e=t.querySelector(".tile.active");await r(e).not.toBeNull(),await r(t.querySelector(".grid-wrap.hover-scale")).not.toBeNull(),window.matchMedia("(prefers-reduced-motion: reduce)").matches||await J(async()=>{await r(parseFloat(getComputedStyle(e).scale)).toBeGreaterThan(1)})},children:(t,d)=>{var e=j(),a=u(e);v(a,{get items(){return p},get sections(){return m},get tile(){return g},square:!0,hoverEffect:"scale",ariaLabel:"Scale-emphasis demo wall"}),l(t,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`\`hoverEffect="opacity"\` (default) needs no story of its own — every other story
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
</div>`}}});var C=b(B,2);f(C,{name:"Keyboard navigation",asChild:!0,play:async({canvasElement:t})=>{$.mockClear();const e=S(t).getByRole("grid");await n.tab(),await r(e).toHaveFocus();const a=e.getAttribute("aria-activedescendant");await r(a).toBeTruthy(),await n.keyboard("{ArrowRight}");const _=e.getAttribute("aria-activedescendant");await r(_).toBeTruthy(),await r(_).not.toBe(a);const T=t.querySelector(".tile.active");await r(T).toBeTruthy(),await r(getComputedStyle(T).outlineStyle).not.toBe("none"),await r(getComputedStyle(e).boxShadow).toBe("none"),await n.keyboard("{Enter}"),await r($).toHaveBeenCalledOnce()},children:(t,d)=>{var e=U(),a=u(e);v(a,{get items(){return p},get sections(){return m},get tile(){return g},ariaLabel:"Keyboard navigation demo grid",get onActivate(){return $}}),l(t,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Keyboard + activate interaction test (rule 10):
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
</div>`}}});var L=b(C,2);f(L,{name:"Keyboard navigation ignores modifier+arrow (browser shortcuts)",asChild:!0,play:async({canvasElement:t})=>{const e=S(t).getByRole("grid");await n.tab(),await r(e).toHaveFocus();const a=e.getAttribute("aria-activedescendant");await r(a).toBeTruthy(),await n.keyboard("{Alt>}{ArrowLeft}{/Alt}"),await r(e.getAttribute("aria-activedescendant")).toBe(a),await n.keyboard("{Meta>}{ArrowLeft}{/Meta}"),await r(e.getAttribute("aria-activedescendant")).toBe(a),await n.keyboard("{ArrowRight}"),await r(e.getAttribute("aria-activedescendant")).not.toBe(a)},children:(t,d)=>{var e=Y(),a=u(e);v(a,{get items(){return p},get sections(){return m},get tile(){return g},ariaLabel:"Modifier-arrow regression demo grid"}),l(t,e)},$$slots:{default:!0},parameters:{docs:{description:{story:"Regression (docs/backlog.md, reported live 2026-08-11): a modifier+arrow chord is an\nOS/browser shortcut (⌘←/⌘→ macOS, Alt+←/Alt+→ Windows/Linux = browser back/forward)\nand must pass through untouched — the grid must NOT move focus or intercept it.\n`userEvent.keyboard`'s `{Alt>}...{/Alt}` holds Alt down around the arrow press, the\nsame as a real Alt+ArrowLeft chord."}},__svelteCsf:{rawCode:`<div style="height:560px;">
	<VirtualGrid {items} {sections} {tile} ariaLabel="Modifier-arrow regression demo grid" />
</div>`}}}),l(h,s),K()}O.__docgen={data:[],name:"VirtualGrid.stories.svelte"};const w=R(O,H),ne=["Justified","SquareWall","ScaleEmphasisOptIn","KeyboardNavigation","KeyboardNavigationIgnoresModifierArrowBrowserShortcuts"],de={...w.Justified,tags:["svelte-csf-v5"]},le={...w.SquareWall,tags:["svelte-csf-v5"]},ce={...w.ScaleEmphasisOptIn,tags:["svelte-csf-v5"]},ue={...w.KeyboardNavigation,tags:["svelte-csf-v5"]},ve={...w.KeyboardNavigationIgnoresModifierArrowBrowserShortcuts,tags:["svelte-csf-v5"]};export{de as Justified,ue as KeyboardNavigation,ve as KeyboardNavigationIgnoresModifierArrowBrowserShortcuts,ce as ScaleEmphasisOptIn,le as SquareWall,ne as __namedExportsOrder,H as default};
