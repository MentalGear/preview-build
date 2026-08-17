import{p as L,f as x,a as w,s as i,b as f,c as U,d as b,g as t,e as k,u as E,h as c,t as _,i as A}from"./iframe-Cp5EZZDQ.js";import{c as K,d as q}from"./create-runtime-stories-DlWd_JCy.js";import{D as y}from"./DragHandle-DrX9zL-5.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DJbtmXrR.js";import"./attributes-DaXk2Qm-.js";import"./transitions-DsHqt78k.js";import"./shadcn-utils-KrE3H22K.js";const{expect:n,userEvent:m,within:T}=__STORYBOOK_MODULE_TEST__,F={title:"Composites/DragHandle",component:y,tags:["autodocs"]},{Story:s}=q();var Y=x('<div class="w-72 overflow-hidden rounded-t-lg border border-b-0 border-border bg-card shadow-sm"><!> <div class="border-t border-border px-4 py-6 text-sm text-muted-foreground">Panel content</div></div> <p> </p>',1),Z=x('<div class="w-72 overflow-hidden rounded-t-lg border border-b-0 border-border bg-card shadow-sm"><!> <div class="border-t border-border px-4 py-6 text-sm text-muted-foreground">Panel content</div></div> <p> </p>',1),j=x("<!> <p> </p>",1),J=x('<div style="height: 200px; display: flex;"><!></div> <p> </p>',1),Q=x("<!> <!>  <!> <!>  <!> <!>  <!> <!>",1);function G(N,$){L($,!0);const V=r=>{var a=Y(),e=w(a),l=c(e);{let h=E(()=>t(o)?"Collapse":"Expand");y(l,{tag:"button",type:"button",get"aria-expanded"(){return t(o)},get"aria-label"(){return`${t(h)??""} panel`},get active(){return t(o)},onclick:()=>b(o,!t(o))})}var p=i(e,2),d=c(p);_(()=>A(d,`Toggled: ${t(o)??""}`)),f(r,a)},B=r=>{var a=Z(),e=w(a),l=c(e);{let h=E(()=>t(o)?"Collapse":"Expand");y(l,{tag:"button",type:"button",variant:"bar",get"aria-expanded"(){return t(o)},get"aria-label"(){return`${t(h)??""} panel`},get active(){return t(o)},onclick:()=>b(o,!t(o))})}var p=i(e,2),d=c(p);_(()=>A(d,`Toggled: ${t(o)??""}`)),f(r,a)},D=r=>{var a=j(),e=w(a);y(e,{tag:"div",role:"slider",tabindex:0,"aria-label":"Demo size","aria-orientation":"vertical","aria-valuemin":0,"aria-valuemax":100,get"aria-valuenow"(){return t(v)},onkeydown:d=>{d.key==="ArrowUp"?b(v,Math.min(100,t(v)+10),!0):d.key==="ArrowDown"&&b(v,Math.max(0,t(v)-10),!0)}});var l=i(e,2),p=c(l);_(()=>A(p,`Value: ${t(v)??""}`)),f(r,a)},C=r=>{var a=J(),e=w(a),l=c(e);y(l,{tag:"div",orientation:"vertical",role:"slider",tabindex:0,"aria-label":"Demo panel width","aria-orientation":"horizontal","aria-valuemin":0,"aria-valuemax":100,get"aria-valuenow"(){return t(u)},onkeydown:h=>{h.key==="ArrowLeft"?b(u,Math.min(100,t(u)+10),!0):h.key==="ArrowRight"&&b(u,Math.max(0,t(u)-10),!0)}});var p=i(e,2),d=c(p);_(()=>A(d,`Width: ${t(u)??""}`)),f(r,a)};let o=k(!1),v=k(50),u=k(50);var S=Q(),R=w(S);s(R,{name:"As a toggle button",get template(){return V},parameters:{docs:{description:{story:'`tag="button"` usage — a discrete toggle (Drawer\'s own peek/expand grip). Native Enter/Space\n    activation comes for free from the real <button> element underneath.'}},__svelteCsf:{rawCode:`<!-- Fixture framing only (not part of DragHandle itself): a bordered sheet-like host
     surface so the grip reads as a handle on top of something, instead of a lone ~12px
     glyph floating on the bare canvas — the same panel-edge context Drawer.svelte's real
     peek/expand grip actually sits on. -->
<div
	class="w-72 overflow-hidden rounded-t-lg border border-b-0 border-border bg-card shadow-sm"
>
	<DragHandle
		tag="button"
		type="button"
		aria-expanded={toggled}
		aria-label="{toggled ? 'Collapse' : 'Expand'} panel"
		active={toggled}
		onclick={() => (toggled = !toggled)}
	/>
	<div class="border-t border-border px-4 py-6 text-sm text-muted-foreground">
		Panel content
	</div>
</div>
<p>Toggled: {toggled}</p>`}}});var H=i(R,2);s(H,{name:"Toggle button responds to click and keyboard",get template(){return V},play:async({canvasElement:r})=>{const a=T(r),e=a.getByRole("button",{name:"Expand panel"});await n(e.tagName).toBe("BUTTON"),await m.click(e),await n(a.getByText("Toggled: true")).toBeInTheDocument(),await n(a.getByRole("button",{name:"Collapse panel"})).toHaveAttribute("aria-expanded","true"),e.focus(),await m.keyboard(" "),await n(a.getByText("Toggled: false")).toBeInTheDocument()},parameters:{docs:{description:{story:"Interaction test: a real <button> under the hood — clicking AND keyboard-activating\n(Space) both fire the forwarded onclick, and `active` reflects into the visual state."}},__svelteCsf:{rawCode:`<!-- Fixture framing only (not part of DragHandle itself): a bordered sheet-like host
     surface so the grip reads as a handle on top of something, instead of a lone ~12px
     glyph floating on the bare canvas — the same panel-edge context Drawer.svelte's real
     peek/expand grip actually sits on. -->
<div
	class="w-72 overflow-hidden rounded-t-lg border border-b-0 border-border bg-card shadow-sm"
>
	<DragHandle
		tag="button"
		type="button"
		aria-expanded={toggled}
		aria-label="{toggled ? 'Collapse' : 'Expand'} panel"
		active={toggled}
		onclick={() => (toggled = !toggled)}
	/>
	<div class="border-t border-border px-4 py-6 text-sm text-muted-foreground">
		Panel content
	</div>
</div>
<p>Toggled: {toggled}</p>`}}});var I=i(H,2);s(I,{name:"Bar variant (same toggle, plain grabber-bar visual)",get template(){return B},parameters:{docs:{description:{story:"`variant=\"bar\"` — a plain grabber-bar visual (echoing shadcn/vaul's own decorative default\n    look) on the SAME interactive root as the default `'grip'` variant. Purely a visual swap; see\n    `docs/kit/components/drag-handle.md`'s Invariants for why this doesn't cross into a second\n    interaction mode."}},__svelteCsf:{rawCode:`<!-- Same host-surface framing as \`buttonTemplate\` above — fixture only, not part of
     DragHandle. -->
<div
	class="w-72 overflow-hidden rounded-t-lg border border-b-0 border-border bg-card shadow-sm"
>
	<DragHandle
		tag="button"
		type="button"
		variant="bar"
		aria-expanded={toggled}
		aria-label="{toggled ? 'Collapse' : 'Expand'} panel"
		active={toggled}
		onclick={() => (toggled = !toggled)}
	/>
	<div class="border-t border-border px-4 py-6 text-sm text-muted-foreground">
		Panel content
	</div>
</div>
<p>Toggled: {toggled}</p>`}}});var O=i(I,2);s(O,{name:"Bar variant responds to click like the grip variant",get template(){return B},play:async({canvasElement:r})=>{const a=T(r),e=a.getByRole("button",{name:"Expand panel"});await n(e.tagName).toBe("BUTTON"),await n(e.querySelector("svg")).toBeNull(),await n(e.querySelector(".drag-handle-bar")).not.toBeNull(),await m.click(e),await n(a.getByText("Toggled: true")).toBeInTheDocument();const l=a.getByRole("button",{name:"Collapse panel"});await n(l).toHaveAttribute("aria-expanded","true"),l.focus(),await m.keyboard(" "),await n(a.getByText("Toggled: false")).toBeInTheDocument()},parameters:{docs:{description:{story:`Interaction test: \`variant="bar"\` renders a plain bar element instead of the GripHorizontal
icon, but the root is still a real <button> that responds to click/keyboard identically to the
default 'grip' variant.`}},__svelteCsf:{rawCode:`<!-- Same host-surface framing as \`buttonTemplate\` above — fixture only, not part of
     DragHandle. -->
<div
	class="w-72 overflow-hidden rounded-t-lg border border-b-0 border-border bg-card shadow-sm"
>
	<DragHandle
		tag="button"
		type="button"
		variant="bar"
		aria-expanded={toggled}
		aria-label="{toggled ? 'Collapse' : 'Expand'} panel"
		active={toggled}
		onclick={() => (toggled = !toggled)}
	/>
	<div class="border-t border-border px-4 py-6 text-sm text-muted-foreground">
		Panel content
	</div>
</div>
<p>Toggled: {toggled}</p>`}}});var W=i(O,2);s(W,{name:"As a continuous slider",get template(){return D},parameters:{docs:{description:{story:`\`tag="div"\` usage — a continuous role="slider" (LightboxFilmstrip's own resize handle). A
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
<p>Value: {sliderValue}</p>`}}});var P=i(W,2);s(P,{name:"Slider variant is a plain element, not a button",get template(){return D},play:async({canvasElement:r})=>{const a=T(r),e=a.getByRole("slider",{name:"Demo size"});await n(e.tagName).not.toBe("BUTTON"),await n(e).toHaveAttribute("aria-valuenow","50"),e.focus(),await m.keyboard("{ArrowUp}"),await n(a.getByText("Value: 60")).toBeInTheDocument(),await n(e).toHaveAttribute("aria-valuenow","60")},parameters:{docs:{description:{story:`Interaction test: renders as a plain element (NOT a button, since role="slider" overrides
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
<p>Value: {sliderValue}</p>`}}});var z=i(P,2);s(z,{name:"Vertical orientation (side-panel width resize)",get template(){return C},parameters:{docs:{description:{story:"`orientation=\"vertical\"` — a narrow/tall bar with `GripVertical` instead of the default\n    wide/short bar with `GripHorizontal`. Added for `Inspector.svelte`'s own side-panel\n    width-resize handle (docs/kit/components/drag-handle.md's Best practices had named this exact\n    consumer as the anticipated third one). Note the ARIA `aria-orientation=\"horizontal\"` here\n    describes the SLIDER'S OWN value axis (dragging left/right changes width) — a different axis\n    than the `orientation` PROP, which is the handle's own visual bar direction; a side panel's\n    handle is a narrow VERTICAL bar you drag HORIZONTALLY, so the two are deliberately opposite\n    here, not a typo."}},__svelteCsf:{rawCode:`<div style="height: 200px; display: flex;">
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
<p>Width: {panelWidth}</p>`}}});var M=i(z,2);s(M,{name:"Vertical orientation renders GripVertical and still drives its value",get template(){return C},play:async({canvasElement:r})=>{const a=T(r),e=a.getByRole("slider",{name:"Demo panel width"});await n(e).toHaveClass("vertical"),await n(e.querySelector("svg")).toHaveClass("lucide-grip-vertical"),await n(e.querySelector("svg")).not.toHaveClass("lucide-grip-horizontal"),e.focus(),await m.keyboard("{ArrowLeft}"),await n(a.getByText("Width: 60")).toBeInTheDocument(),await n(e).toHaveAttribute("aria-valuenow","60")},parameters:{docs:{description:{story:'Interaction test: `orientation="vertical"` renders `GripVertical` (not `GripHorizontal`), the\nroot carries the `vertical` class driving the swapped box model, and the caller\'s own keyboard\nhandler still drives the value exactly like the horizontal slider story above.'}},__svelteCsf:{rawCode:`<div style="height: 200px; display: flex;">
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
<p>Width: {panelWidth}</p>`}}}),f(N,S),U()}G.__docgen={data:[],name:"DragHandle.stories.svelte"};const g=K(G,F),le=["AsAToggleButton","ToggleButtonRespondsToClickAndKeyboard","BarVariantSameTogglePlainGrabberBarVisual","BarVariantRespondsToClickLikeTheGripVariant","AsAContinuousSlider","SliderVariantIsAPlainElementNotAButton","VerticalOrientationSidePanelWidthResize","VerticalOrientationRendersGripVerticalAndStillDrivesItsValue"],de={...g.AsAToggleButton,tags:["svelte-csf-v5"]},se={...g.ToggleButtonRespondsToClickAndKeyboard,tags:["svelte-csf-v5"]},ge={...g.BarVariantSameTogglePlainGrabberBarVisual,tags:["svelte-csf-v5"]},pe={...g.BarVariantRespondsToClickLikeTheGripVariant,tags:["svelte-csf-v5"]},ce={...g.AsAContinuousSlider,tags:["svelte-csf-v5"]},ve={...g.SliderVariantIsAPlainElementNotAButton,tags:["svelte-csf-v5"]},ue={...g.VerticalOrientationSidePanelWidthResize,tags:["svelte-csf-v5"]},he={...g.VerticalOrientationRendersGripVerticalAndStillDrivesItsValue,tags:["svelte-csf-v5"]};export{ce as AsAContinuousSlider,de as AsAToggleButton,pe as BarVariantRespondsToClickLikeTheGripVariant,ge as BarVariantSameTogglePlainGrabberBarVisual,ve as SliderVariantIsAPlainElementNotAButton,se as ToggleButtonRespondsToClickAndKeyboard,he as VerticalOrientationRendersGripVerticalAndStillDrivesItsValue,ue as VerticalOrientationSidePanelWidthResize,le as __namedExportsOrder,F as default};
