import{p as L,f as _,a as h,s as o,b as m,c as U,d as v,g as t,e as T,u as G,t as f,h as b,i as A}from"./iframe-DoUpZrGJ.js";import{c as K,d as q}from"./create-runtime-stories-NOZuvjGf.js";import{D as y}from"./DragHandle-DoXra5r9.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bw7N4Q7c.js";import"./attributes-BHhJ46lX.js";import"./transitions-CU8B7knB.js";import"./shadcn-utils-m4Kx4tR_.js";const{expect:n,userEvent:w,within:x}=__STORYBOOK_MODULE_TEST__,Y={title:"Composites/DragHandle",component:y,tags:["autodocs"]},{Story:s}=q();var F=_("<!> <p> </p>",1),Z=_("<!> <p> </p>",1),j=_("<!> <p> </p>",1),J=_('<div style="height: 200px; display: flex;"><!></div> <p> </p>',1),Q=_("<!> <!>  <!> <!>  <!> <!>  <!> <!>",1);function N($,M){L(M,!0);const V=r=>{var a=F(),e=h(a);{let l=G(()=>t(i)?"Collapse":"Expand");y(e,{tag:"button",type:"button",get"aria-expanded"(){return t(i)},get"aria-label"(){return`${t(l)??""} panel`},get active(){return t(i)},onclick:()=>v(i,!t(i))})}var g=o(e,2),p=b(g);f(()=>A(p,`Toggled: ${t(i)??""}`)),m(r,a)},k=r=>{var a=Z(),e=h(a);{let l=G(()=>t(i)?"Collapse":"Expand");y(e,{tag:"button",type:"button",variant:"bar",get"aria-expanded"(){return t(i)},get"aria-label"(){return`${t(l)??""} panel`},get active(){return t(i)},onclick:()=>v(i,!t(i))})}var g=o(e,2),p=b(g);f(()=>A(p,`Toggled: ${t(i)??""}`)),m(r,a)},B=r=>{var a=j(),e=h(a);y(e,{tag:"div",role:"slider",tabindex:0,"aria-label":"Demo size","aria-orientation":"vertical","aria-valuemin":0,"aria-valuemax":100,get"aria-valuenow"(){return t(c)},onkeydown:l=>{l.key==="ArrowUp"?v(c,Math.min(100,t(c)+10),!0):l.key==="ArrowDown"&&v(c,Math.max(0,t(c)-10),!0)}});var g=o(e,2),p=b(g);f(()=>A(p,`Value: ${t(c)??""}`)),m(r,a)},C=r=>{var a=J(),e=h(a),g=b(e);y(g,{tag:"div",orientation:"vertical",role:"slider",tabindex:0,"aria-label":"Demo panel width","aria-orientation":"horizontal","aria-valuemin":0,"aria-valuemax":100,get"aria-valuenow"(){return t(u)},onkeydown:E=>{E.key==="ArrowLeft"?v(u,Math.min(100,t(u)+10),!0):E.key==="ArrowRight"&&v(u,Math.max(0,t(u)-10),!0)}});var p=o(e,2),l=b(p);f(()=>A(l,`Width: ${t(u)??""}`)),m(r,a)};let i=T(!1),c=T(50),u=T(50);var D=Q(),R=h(D);s(R,{name:"As a toggle button",get template(){return V},parameters:{docs:{description:{story:'`tag="button"` usage — a discrete toggle (Drawer\'s own peek/expand grip). Native Enter/Space\n    activation comes for free from the real <button> element underneath.'}},__svelteCsf:{rawCode:`<DragHandle
	tag="button"
	type="button"
	aria-expanded={toggled}
	aria-label="{toggled ? 'Collapse' : 'Expand'} panel"
	active={toggled}
	onclick={() => (toggled = !toggled)}
/>
<p>Toggled: {toggled}</p>`}}});var S=o(R,2);s(S,{name:"Toggle button responds to click and keyboard",get template(){return V},play:async({canvasElement:r})=>{const a=x(r),e=a.getByRole("button",{name:"Expand panel"});await n(e.tagName).toBe("BUTTON"),await w.click(e),await n(a.getByText("Toggled: true")).toBeInTheDocument(),await n(a.getByRole("button",{name:"Collapse panel"})).toHaveAttribute("aria-expanded","true"),e.focus(),await w.keyboard(" "),await n(a.getByText("Toggled: false")).toBeInTheDocument()},parameters:{docs:{description:{story:"Interaction test: a real <button> under the hood — clicking AND keyboard-activating\n(Space) both fire the forwarded onclick, and `active` reflects into the visual state."}},__svelteCsf:{rawCode:`<DragHandle
	tag="button"
	type="button"
	aria-expanded={toggled}
	aria-label="{toggled ? 'Collapse' : 'Expand'} panel"
	active={toggled}
	onclick={() => (toggled = !toggled)}
/>
<p>Toggled: {toggled}</p>`}}});var I=o(S,2);s(I,{name:"Bar variant (same toggle, plain grabber-bar visual)",get template(){return k},parameters:{docs:{description:{story:"`variant=\"bar\"` — a plain grabber-bar visual (echoing shadcn/vaul's own decorative default\n    look) on the SAME interactive root as the default `'grip'` variant. Purely a visual swap; see\n    `docs/kit/components/drag-handle.md`'s Invariants for why this doesn't cross into a second\n    interaction mode."}},__svelteCsf:{rawCode:`<DragHandle
	tag="button"
	type="button"
	variant="bar"
	aria-expanded={toggled}
	aria-label="{toggled ? 'Collapse' : 'Expand'} panel"
	active={toggled}
	onclick={() => (toggled = !toggled)}
/>
<p>Toggled: {toggled}</p>`}}});var H=o(I,2);s(H,{name:"Bar variant responds to click like the grip variant",get template(){return k},play:async({canvasElement:r})=>{const a=x(r),e=a.getByRole("button",{name:"Expand panel"});await n(e.tagName).toBe("BUTTON"),await n(e.querySelector("svg")).toBeNull(),await n(e.querySelector(".drag-handle-bar")).not.toBeNull(),await w.click(e),await n(a.getByText("Toggled: true")).toBeInTheDocument(),await n(a.getByRole("button",{name:"Collapse panel"})).toHaveAttribute("aria-expanded","true")},parameters:{docs:{description:{story:`Interaction test: \`variant="bar"\` renders a plain bar element instead of the GripHorizontal
icon, but the root is still a real <button> that responds to click/keyboard identically to the
default 'grip' variant.`}},__svelteCsf:{rawCode:`<DragHandle
	tag="button"
	type="button"
	variant="bar"
	aria-expanded={toggled}
	aria-label="{toggled ? 'Collapse' : 'Expand'} panel"
	active={toggled}
	onclick={() => (toggled = !toggled)}
/>
<p>Toggled: {toggled}</p>`}}});var O=o(H,2);s(O,{name:"As a continuous slider",get template(){return B},parameters:{docs:{description:{story:`\`tag="div"\` usage — a continuous role="slider" (LightboxFilmstrip's own resize handle). A
    native <button> with an overridden ARIA role would confuse assistive tech, so this renders
    as a plain element instead, with the caller supplying the entire ARIA + keyboard contract.`}},__svelteCsf:{rawCode:`<DragHandle
	tag="div"
	role="slider"
	tabindex={0}
	aria-label="Demo size"
	aria-orientation="vertical"
	aria-valuemin={0}
	aria-valuemax={100}
	aria-valuenow={sliderValue}
	onkeydown={(e) => {
		if (e.key === 'ArrowUp') sliderValue = Math.min(100, sliderValue + 10)
		else if (e.key === 'ArrowDown') sliderValue = Math.max(0, sliderValue - 10)
	}}
/>
<p>Value: {sliderValue}</p>`}}});var W=o(O,2);s(W,{name:"Slider variant is a plain element, not a button",get template(){return B},play:async({canvasElement:r})=>{const a=x(r),e=a.getByRole("slider",{name:"Demo size"});await n(e.tagName).not.toBe("BUTTON"),await n(e).toHaveAttribute("aria-valuenow","50"),e.focus(),await w.keyboard("{ArrowUp}"),await n(a.getByText("Value: 60")).toBeInTheDocument(),await n(e).toHaveAttribute("aria-valuenow","60")},parameters:{docs:{description:{story:`Interaction test: renders as a plain element (NOT a button, since role="slider" overrides
native button semantics), and the caller's own keyboard handler drives the value.`}},__svelteCsf:{rawCode:`<DragHandle
	tag="div"
	role="slider"
	tabindex={0}
	aria-label="Demo size"
	aria-orientation="vertical"
	aria-valuemin={0}
	aria-valuemax={100}
	aria-valuenow={sliderValue}
	onkeydown={(e) => {
		if (e.key === 'ArrowUp') sliderValue = Math.min(100, sliderValue + 10)
		else if (e.key === 'ArrowDown') sliderValue = Math.max(0, sliderValue - 10)
	}}
/>
<p>Value: {sliderValue}</p>`}}});var z=o(W,2);s(z,{name:"Vertical orientation (side-panel width resize)",get template(){return C},parameters:{docs:{description:{story:"`orientation=\"vertical\"` — a narrow/tall bar with `GripVertical` instead of the default\n    wide/short bar with `GripHorizontal`. Added for `Inspector.svelte`'s own side-panel\n    width-resize handle (docs/kit/components/drag-handle.md's Best practices had named this exact\n    consumer as the anticipated third one). Note the ARIA `aria-orientation=\"horizontal\"` here\n    describes the SLIDER'S OWN value axis (dragging left/right changes width) — a different axis\n    than the `orientation` PROP, which is the handle's own visual bar direction; a side panel's\n    handle is a narrow VERTICAL bar you drag HORIZONTALLY, so the two are deliberately opposite\n    here, not a typo."}},__svelteCsf:{rawCode:`<div style="height: 200px; display: flex;">
	<DragHandle
		tag="div"
		orientation="vertical"
		role="slider"
		tabindex={0}
		aria-label="Demo panel width"
		aria-orientation="horizontal"
		aria-valuemin={0}
		aria-valuemax={100}
		aria-valuenow={panelWidth}
		onkeydown={(e) => {
			if (e.key === 'ArrowLeft') panelWidth = Math.min(100, panelWidth + 10)
			else if (e.key === 'ArrowRight') panelWidth = Math.max(0, panelWidth - 10)
		}}
	/>
</div>
<p>Width: {panelWidth}</p>`}}});var P=o(z,2);s(P,{name:"Vertical orientation renders GripVertical and still drives its value",get template(){return C},play:async({canvasElement:r})=>{const a=x(r),e=a.getByRole("slider",{name:"Demo panel width"});await n(e).toHaveClass("vertical"),await n(e.querySelector("svg")).toHaveClass("lucide-grip-vertical"),await n(e.querySelector("svg")).not.toHaveClass("lucide-grip-horizontal"),e.focus(),await w.keyboard("{ArrowLeft}"),await n(a.getByText("Width: 60")).toBeInTheDocument(),await n(e).toHaveAttribute("aria-valuenow","60")},parameters:{docs:{description:{story:'Interaction test: `orientation="vertical"` renders `GripVertical` (not `GripHorizontal`), the\nroot carries the `vertical` class driving the swapped box model, and the caller\'s own keyboard\nhandler still drives the value exactly like the horizontal slider story above.'}},__svelteCsf:{rawCode:`<div style="height: 200px; display: flex;">
	<DragHandle
		tag="div"
		orientation="vertical"
		role="slider"
		tabindex={0}
		aria-label="Demo panel width"
		aria-orientation="horizontal"
		aria-valuemin={0}
		aria-valuemax={100}
		aria-valuenow={panelWidth}
		onkeydown={(e) => {
			if (e.key === 'ArrowLeft') panelWidth = Math.min(100, panelWidth + 10)
			else if (e.key === 'ArrowRight') panelWidth = Math.max(0, panelWidth - 10)
		}}
	/>
</div>
<p>Width: {panelWidth}</p>`}}}),m($,D),U()}N.__docgen={data:[],name:"DragHandle.stories.svelte"};const d=K(N,Y),le=["AsAToggleButton","ToggleButtonRespondsToClickAndKeyboard","BarVariantSameTogglePlainGrabberBarVisual","BarVariantRespondsToClickLikeTheGripVariant","AsAContinuousSlider","SliderVariantIsAPlainElementNotAButton","VerticalOrientationSidePanelWidthResize","VerticalOrientationRendersGripVerticalAndStillDrivesItsValue"],se={...d.AsAToggleButton,tags:["svelte-csf-v5"]},de={...d.ToggleButtonRespondsToClickAndKeyboard,tags:["svelte-csf-v5"]},ge={...d.BarVariantSameTogglePlainGrabberBarVisual,tags:["svelte-csf-v5"]},pe={...d.BarVariantRespondsToClickLikeTheGripVariant,tags:["svelte-csf-v5"]},ce={...d.AsAContinuousSlider,tags:["svelte-csf-v5"]},ue={...d.SliderVariantIsAPlainElementNotAButton,tags:["svelte-csf-v5"]},ve={...d.VerticalOrientationSidePanelWidthResize,tags:["svelte-csf-v5"]},he={...d.VerticalOrientationRendersGripVerticalAndStillDrivesItsValue,tags:["svelte-csf-v5"]};export{ce as AsAContinuousSlider,se as AsAToggleButton,pe as BarVariantRespondsToClickLikeTheGripVariant,ge as BarVariantSameTogglePlainGrabberBarVisual,ue as SliderVariantIsAPlainElementNotAButton,de as ToggleButtonRespondsToClickAndKeyboard,he as VerticalOrientationRendersGripVerticalAndStillDrivesItsValue,ve as VerticalOrientationSidePanelWidthResize,le as __namedExportsOrder,Y as default};
