import{p as M,f as y,a as E,s,b as c,c as V,h as _,d as m,j as H,e as C,g as x,t as Y,i as G}from"./iframe-DoUpZrGJ.js";import{c as U,d as j}from"./create-runtime-stories-NOZuvjGf.js";import{I as q}from"./Inspector-BasOs8Sb.js";import{B as P}from"./button-wxigxQGf.js";import"./preload-helper-PPVm8Dsz.js";import"./attributes-BHhJ46lX.js";import"./this-TCGcLIVh.js";import"./is-mobile.svelte-CsP8PvxE.js";import"./media-query-CQ5UF3Mf.js";import"./Drawer-DoueduXD.js";import"./clone-xnO-cBCG.js";import"./dialog-content-BiMlbtnH.js";import"./create-id-CrooffFS.js";import"./index-BTB4apso.js";import"./presence-manager.svelte-Dsv_QeDg.js";import"./scroll-lock-T6-_d3P2.js";import"./roving-focus-group-CJG8hiN5.js";import"./shadcn-utils-m4Kx4tR_.js";import"./DragHandle-DoXra5r9.js";import"./Icon-Bw7N4Q7c.js";import"./transitions-CU8B7knB.js";import"./x-CTzp0ZQ6.js";import"./index-B0rW8Cq9.js";const{expect:n,userEvent:r,waitFor:h,within:b,screen:d}=__STORYBOOK_MODULE_TEST__,Z={title:"Composites/Inspector",component:q,tags:["autodocs"]},{Story:u}=j();var J=y('<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>'),Q=y('<div style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);" data-testid="overlay-host"><div style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);" data-testid="overlay-header">Simulated header (32px)</div> <!> <!></div>'),X=y('<p class="text-sm text-muted-foreground">Panel body content.</p>'),ee=y('<div style="height: 320px; display: flex;"><div style="flex: 1; min-width: 0; background: var(--muted);" data-testid="squeeze-content">Wrapped content — this narrows when the panel opens (real flexbox squeeze, no overlap).</div> <!></div> <!> <p class="text-sm"> </p>',1),te=y("<!> <!> <!> <!>  <!> <!> <!>",1);function A(N,K){M(K,!0);const w=o=>{var e=Q(),a=s(_(e),2);P(a,{onclick:()=>m(O,!0),style:"margin-top: 40px;",children:(t,v)=>{var l=H("Open inspector");c(t,l)},$$slots:{default:!0}});var i=s(a,2);q(i,{get open(){return x(O)},onOpenChange:t=>m(O,t,!0),title:"Selected item",insetTop:32,insetBottom:16,insetRight:16,children:(t,v)=>{var l=J();c(t,l)},$$slots:{default:!0}}),c(o,e)},B=o=>{var e=ee(),a=E(e),i=s(_(a),2);q(i,{get open(){return x(f)},onOpenChange:p=>m(f,p,!0),mode:"squeeze",title:"Details",persistKey:"story-demo",onWidthChange:p=>m(R,p,!0),children:(p,L)=>{var z=X();c(p,z)},$$slots:{default:!0}});var t=s(a,2);P(t,{onclick:()=>m(f,!x(f)),children:(p,L)=>{var z=H("Toggle squeeze");c(p,z)},$$slots:{default:!0}});var v=s(t,2),l=_(v);Y(()=>G(l,`Reported width: ${x(R)??""}px`)),c(o,e)};let O=C(!1),f=C(!1),R=C(0);var k=te(),T=E(k);u(T,{name:"Default (overlay)",get template(){return w},parameters:{docs:{description:{story:"Default: overlay mode, closed until the trigger is clicked. Inset from each edge (32px top\n    simulating a header, 16px bottom/right) instead of a plain shadcn Sheet's edge-to-edge\n    sheet, so a host's own header/footer chrome stays uncovered. Built on shadcn `Drawer`\n    (vaul-svelte, `direction=\"right\"`) — not hand-rolled — see the Invariants in\n    docs/kit/components/inspector.md for why `modal={false}` + `handleOnly={true}`."}},__svelteCsf:{rawCode:`<div
	style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);"
	data-testid="overlay-host"
>
	<div
		style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);"
		data-testid="overlay-header"
	>
		Simulated header (32px)
	</div>
	<Button onclick={() => (overlayOpen = true)} style="margin-top: 40px;"
		>Open inspector</Button
	>
	<Inspector
		open={overlayOpen}
		onOpenChange={(next) => (overlayOpen = next)}
		title="Selected item"
		insetTop={32}
		insetBottom={16}
		insetRight={16}
	>
		<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>
	</Inspector>
</div>`}}});var I=s(T,2);u(I,{name:"Overlay opens inset from host header, no backdrop, Escape closes",get template(){return w},play:async({canvasElement:o})=>{const e=b(o);await r.click(e.getByRole("button",{name:"Open inspector"}));const a=await d.findByTestId("inspector-panel");await n(a).toBeVisible(),await n(d.getByRole("heading",{name:"Selected item"})).toBeVisible();const i=e.getByTestId("overlay-header"),t=a.getBoundingClientRect(),v=i.getBoundingClientRect();await n(t.top).toBeGreaterThanOrEqual(v.bottom-1),n(document.querySelector("[data-vaul-overlay]")).toBeNull(),await r.keyboard("{Escape}"),await h(async()=>{await n(d.queryByTestId("inspector-panel")).toBeNull()})},parameters:{docs:{description:{story:"Interaction test: the trigger opens the panel with the given title, inset from the simulated\nheader (never overlapping it), with NO visible backdrop (this panel never had one — `modal=\n{false}` on the underlying Drawer Root suppresses vaul's own scrim while keeping its real\nfocus trap, since `Content` renders on bits-ui's `Dialog.Content` regardless of `modal`), and\nEscape closes it. `Content` renders in a portal (vaul's own `Drawer.Portal`, defaulting to\n`document.body`) — use the global `screen` for it, same portaled-Dialog pattern\n`Drawer.stories.svelte` already establishes; `canvas` stays correct for the trigger/header,\nwhich aren't portaled."}},__svelteCsf:{rawCode:`<div
	style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);"
	data-testid="overlay-host"
>
	<div
		style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);"
		data-testid="overlay-header"
	>
		Simulated header (32px)
	</div>
	<Button onclick={() => (overlayOpen = true)} style="margin-top: 40px;"
		>Open inspector</Button
	>
	<Inspector
		open={overlayOpen}
		onOpenChange={(next) => (overlayOpen = next)}
		title="Selected item"
		insetTop={32}
		insetBottom={16}
		insetRight={16}
	>
		<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>
	</Inspector>
</div>`}}});var S=s(I,2);u(S,{name:"Outside click dismisses",get template(){return w},play:async({canvasElement:o})=>{const e=b(o);await r.click(e.getByRole("button",{name:"Open inspector"})),await d.findByTestId("inspector-panel"),await r.click(e.getByTestId("overlay-header")),await h(async()=>{await n(d.queryByTestId("inspector-panel")).toBeNull()})},parameters:{docs:{description:{story:"Interaction test: clicking outside the panel (but still inside the host, e.g. the header)\ndismisses it too — `onInteractOutside` calling `onOpenChange(false)` directly, not relying on\nvaul-svelte's own (confirmed unreliable in this version — see the Invariants) internal\npropagation."}},__svelteCsf:{rawCode:`<div
	style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);"
	data-testid="overlay-host"
>
	<div
		style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);"
		data-testid="overlay-header"
	>
		Simulated header (32px)
	</div>
	<Button onclick={() => (overlayOpen = true)} style="margin-top: 40px;"
		>Open inspector</Button
	>
	<Inspector
		open={overlayOpen}
		onOpenChange={(next) => (overlayOpen = next)}
		title="Selected item"
		insetTop={32}
		insetBottom={16}
		insetRight={16}
	>
		<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>
	</Inspector>
</div>`}}});var D=s(S,2);u(D,{name:"Overlay resize handle changes width",get template(){return w},play:async()=>{await r.click(d.getByRole("button",{name:"Open inspector"}));const o=await d.findByTestId("inspector-panel"),e=o.getBoundingClientRect().width;d.getByRole("slider",{name:/Selected item width/i}).focus(),await r.keyboard("{ArrowLeft}"),await h(async()=>{await n(o.getBoundingClientRect().width).toBeGreaterThan(e)}),await r.keyboard("{Escape}"),await h(async()=>{await n(d.queryByTestId("inspector-panel")).toBeNull()})},parameters:{docs:{description:{story:`Interaction test: the resize handle's keyboard path (role="slider", ArrowLeft grows toward
center on the default right-side panel) changes the panel's own rendered width — same
RESIZE_KEY_STEP-per-press pattern the squeeze-mode story below already covers.`}},__svelteCsf:{rawCode:`<div
	style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);"
	data-testid="overlay-host"
>
	<div
		style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);"
		data-testid="overlay-header"
	>
		Simulated header (32px)
	</div>
	<Button onclick={() => (overlayOpen = true)} style="margin-top: 40px;"
		>Open inspector</Button
	>
	<Inspector
		open={overlayOpen}
		onOpenChange={(next) => (overlayOpen = next)}
		title="Selected item"
		insetTop={32}
		insetBottom={16}
		insetRight={16}
	>
		<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>
	</Inspector>
</div>`}}});var $=s(D,2);u($,{name:"Squeeze mode",get template(){return B},parameters:{docs:{description:{story:"Squeeze mode: the panel is a plain flex sibling (no special positioning) — opening it\n    narrows the sibling content via ordinary flexbox, and `onWidthChange` reports the live\n    width for a caller that can't restructure its own DOM into a flex row."}},__svelteCsf:{rawCode:`<div style="height: 320px; display: flex;">
	<div style="flex: 1; min-width: 0; background: var(--muted);" data-testid="squeeze-content">
		Wrapped content — this narrows when the panel opens (real flexbox squeeze, no overlap).
	</div>
	<Inspector
		open={squeezeOpen}
		onOpenChange={(next) => (squeezeOpen = next)}
		mode="squeeze"
		title="Details"
		persistKey="story-demo"
		onWidthChange={(w) => (squeezeWidth = w)}
	>
		<p class="text-sm text-muted-foreground">Panel body content.</p>
	</Inspector>
</div>
<Button onclick={() => (squeezeOpen = !squeezeOpen)}>Toggle squeeze</Button>
<p class="text-sm">Reported width: {squeezeWidth}px</p>`}}});var W=s($,2);u(W,{name:"Squeeze resizes via keyboard",get template(){return B},play:async({canvasElement:o})=>{const e=b(o),a=e.getByTestId("squeeze-content"),i=a.getBoundingClientRect().width;await r.click(e.getByRole("button",{name:"Toggle squeeze"}));const t=await e.findByTestId("inspector-panel");await n(t).toBeVisible(),await h(async()=>{await n(a.getBoundingClientRect().width).toBeLessThan(i)}),e.getByRole("slider",{name:/Details width/i}).focus();const l=t.getBoundingClientRect().width;await r.keyboard("{ArrowLeft}"),await h(async()=>{await n(t.getBoundingClientRect().width).toBeGreaterThan(l)})},parameters:{docs:{description:{story:`Interaction test: opening squeeze mode measurably narrows the sibling content AND reports a
non-zero width via onWidthChange; the resize handle's keyboard path (ArrowLeft/ArrowRight)
changes both the reported width and the panel's own rendered width.`}},__svelteCsf:{rawCode:`<div style="height: 320px; display: flex;">
	<div style="flex: 1; min-width: 0; background: var(--muted);" data-testid="squeeze-content">
		Wrapped content — this narrows when the panel opens (real flexbox squeeze, no overlap).
	</div>
	<Inspector
		open={squeezeOpen}
		onOpenChange={(next) => (squeezeOpen = next)}
		mode="squeeze"
		title="Details"
		persistKey="story-demo"
		onWidthChange={(w) => (squeezeWidth = w)}
	>
		<p class="text-sm text-muted-foreground">Panel body content.</p>
	</Inspector>
</div>
<Button onclick={() => (squeezeOpen = !squeezeOpen)}>Toggle squeeze</Button>
<p class="text-sm">Reported width: {squeezeWidth}px</p>`}}});var F=s(W,2);u(F,{name:"Resize handle paints the full panel height",get template(){return B},play:async({canvasElement:o})=>{const e=b(o);await r.click(e.getByRole("button",{name:"Toggle squeeze"}));const a=await e.findByTestId("inspector-panel"),i=e.getByRole("slider",{name:/Details width/i});await h(async()=>{await n(Math.abs(i.getBoundingClientRect().height-a.getBoundingClientRect().height)).toBeLessThan(2)});const t=getComputedStyle(i);await n(t.paddingTop).toBe("0px"),await n(t.paddingBottom).toBe("0px"),await n(t.backgroundClip).not.toBe("content-box")},parameters:{docs:{description:{story:`Reported live 2026-08-08: the resize handle looked detached from the panel because its painted
    strip stopped ~1rem short at each end, leaving a visible gap against the panel's own edges.

    This has to assert COMPUTED STYLE, not geometry, and that's the point worth remembering: the
    handle is \`position: absolute; top: 0; bottom: 0\`, so its bounding rect was ALREADY the full
    panel height both before and after the fix. The old \`padding-block: 1rem\` +
    \`background-clip: content-box\` only inset the PAINTED content box inside that unchanged
    element box — invisible to \`getBoundingClientRect()\`, and invisible to VRT too (verified: the
    photos VRT suite passes either way, because no snapshot captures the info panel open). So a
    rect- or pixel-based guard would pass whichever way this regressed.`}},__svelteCsf:{rawCode:`<div style="height: 320px; display: flex;">
	<div style="flex: 1; min-width: 0; background: var(--muted);" data-testid="squeeze-content">
		Wrapped content — this narrows when the panel opens (real flexbox squeeze, no overlap).
	</div>
	<Inspector
		open={squeezeOpen}
		onOpenChange={(next) => (squeezeOpen = next)}
		mode="squeeze"
		title="Details"
		persistKey="story-demo"
		onWidthChange={(w) => (squeezeWidth = w)}
	>
		<p class="text-sm text-muted-foreground">Panel body content.</p>
	</Inspector>
</div>
<Button onclick={() => (squeezeOpen = !squeezeOpen)}>Toggle squeeze</Button>
<p class="text-sm">Reported width: {squeezeWidth}px</p>`}}}),c(N,k),V()}A.__docgen={data:[],name:"Inspector.stories.svelte"};const g=U(A,Z),_e=["DefaultOverlay","OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses","OutsideClickDismisses","OverlayResizeHandleChangesWidth","SqueezeMode","SqueezeResizesViaKeyboard","ResizeHandlePaintsTheFullPanelHeight"],Ce={...g.DefaultOverlay,tags:["svelte-csf-v5"]},qe={...g.OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses,tags:["svelte-csf-v5"]},Re={...g.OutsideClickDismisses,tags:["svelte-csf-v5"]},ke={...g.OverlayResizeHandleChangesWidth,tags:["svelte-csf-v5"]},Te={...g.SqueezeMode,tags:["svelte-csf-v5"]},Ie={...g.SqueezeResizesViaKeyboard,tags:["svelte-csf-v5"]},Se={...g.ResizeHandlePaintsTheFullPanelHeight,tags:["svelte-csf-v5"]};export{Ce as DefaultOverlay,Re as OutsideClickDismisses,qe as OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses,ke as OverlayResizeHandleChangesWidth,Se as ResizeHandlePaintsTheFullPanelHeight,Te as SqueezeMode,Ie as SqueezeResizesViaKeyboard,_e as __namedExportsOrder,Z as default};
