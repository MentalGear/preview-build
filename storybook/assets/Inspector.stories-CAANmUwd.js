import{p as Q,f as v,a as $,s as a,b as d,c as X,h as f,d as h,j as z,e as x,g,t as L,i as M}from"./iframe-BObyFMmj.js";import{c as ee,d as te}from"./create-runtime-stories-Bs43Unf1.js";import{I as O}from"./Inspector-B0zCYYtU.js";import{B as q}from"./button-VQMeRuZO.js";import"./preload-helper-PPVm8Dsz.js";import"./attributes-BRafB15r.js";import"./this-N1B6LQnn.js";import"./is-mobile.svelte-C8ZsgSA7.js";import"./media-query-BAUj8owY.js";import"./Drawer-BkFl9peF.js";import"./clone-BzU-vl6c.js";import"./dialog-content-DnmznmCe.js";import"./create-id-CxPYryvW.js";import"./index-B_xUPxsS.js";import"./presence-manager.svelte-DYyAkylL.js";import"./scroll-lock-B1BIWH-h.js";import"./roving-focus-group-BUXbsJEJ.js";import"./shadcn-utils-ju7mLmNt.js";import"./DragHandle-xEYEbvM8.js";import"./Icon-CDUF8iXf.js";import"./transitions-CnD5XcuO.js";import"./x-CLZHoJdq.js";import"./index-rKKRQSYo.js";const{expect:s,userEvent:p,waitFor:b,within:C,screen:u}=__STORYBOOK_MODULE_TEST__,ne={title:"Composites/Inspector",component:O,tags:["autodocs"]},{Story:y}=te(),R={layout:"fullscreen"};var oe=v('<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>'),se=v('<div style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);" data-testid="overlay-host"><div style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);" data-testid="overlay-header">Simulated header (32px)</div> <!> <!></div>'),ae=v('<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>'),ie=v('<div style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);" data-testid="overlay-host"><div style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);" data-testid="overlay-header">Simulated header (32px)</div> <!> <!></div>'),re=v('<p class="text-sm text-muted-foreground">Panel body content.</p>'),le=v('<div style="height: 320px; display: flex;"><div style="flex: 1; min-width: 0; background: var(--muted);" data-testid="squeeze-content">Wrapped content — this narrows when the panel opens (real flexbox squeeze, no overlap).</div> <!></div> <!> <p class="text-sm"> </p>',1),de=v('<p class="text-sm text-muted-foreground">Panel body content.</p>'),pe=v('<div style="height: 320px; display: flex;"><div style="flex: 1; min-width: 0; background: var(--muted);" data-testid="squeeze-content">Wrapped content — this narrows when the panel opens (real flexbox squeeze, no overlap).</div> <!></div> <!> <p class="text-sm"> </p>',1),ce=v("<!> <!> <!> <!>  <!> <!> <!>",1);function Y(G,U){Q(U,!0);const k=o=>{var e=se(),n=a(f(e),2);q(n,{onclick:()=>h(T,!0),style:"margin-top: 40px;",children:(t,c)=>{var l=z("Open inspector");d(t,l)},$$slots:{default:!0}});var r=a(n,2);O(r,{get open(){return g(T)},onOpenChange:t=>h(T,t,!0),title:"Selected item",insetTop:32,insetBottom:16,insetRight:16,children:(t,c)=>{var l=oe();d(t,l)},$$slots:{default:!0}}),d(o,e)},j=o=>{var e=ie(),n=a(f(e),2);q(n,{onclick:()=>h(S,!0),style:"margin-top: 40px;",children:(t,c)=>{var l=z("Open inspector");d(t,l)},$$slots:{default:!0}});var r=a(n,2);O(r,{get open(){return g(S)},onOpenChange:t=>h(S,t,!0),title:"Selected item",insetTop:32,insetBottom:16,insetRight:16,children:(t,c)=>{var l=ae();d(t,l)},$$slots:{default:!0}}),d(o,e)},D=o=>{var e=le(),n=$(e),r=a(f(n),2);O(r,{get open(){return g(_)},onOpenChange:i=>h(_,i,!0),mode:"squeeze",title:"Details",persistKey:"story-demo",onWidthChange:i=>h(P,i,!0),children:(i,I)=>{var m=re();d(i,m)},$$slots:{default:!0}});var t=a(n,2);q(t,{onclick:()=>h(_,!g(_)),children:(i,I)=>{var m=z("Toggle squeeze");d(i,m)},$$slots:{default:!0}});var c=a(t,2),l=f(c);L(()=>M(l,`Reported width: ${g(P)??""}px`)),d(o,e)},Z=o=>{var e=pe(),n=$(e),r=a(f(n),2);O(r,{get open(){return g(B)},onOpenChange:i=>h(B,i,!0),mode:"squeeze",title:"Details",onWidthChange:i=>h(W,i,!0),children:(i,I)=>{var m=de();d(i,m)},$$slots:{default:!0}});var t=a(n,2);q(t,{onclick:()=>h(B,!g(B)),children:(i,I)=>{var m=z("Toggle squeeze");d(i,m)},$$slots:{default:!0}});var c=a(t,2),l=f(c);L(()=>M(l,`Reported width: ${g(W)??""}px`)),d(o,e)};let T=x(!1),_=x(!1),P=x(0),S=x(!0),B=x(!0),W=x(0);var E=ce(),H=$(E);y(H,{name:"Default (overlay)",get template(){return j},parameters:{...R,docs:{description:{story:"Default: overlay mode, OPEN at rest so the inset is the thing you see. Inset from each\n    edge (32px top simulating a header, 16px bottom/right) instead of a plain shadcn Sheet's\n    edge-to-edge sheet, so a host's own header/footer chrome stays uncovered — none of which\n    is observable while the panel is closed, which is how this story used to rest. The trigger\n    stays in the frame, so the closed→open path is still discoverable. Built on shadcn `Drawer`\n    (vaul-svelte, `direction=\"right\"`) — not hand-rolled — see the Invariants in\n    docs/kit/components/inspector.md for why `modal={false}` + `handleOnly={true}`."}},__svelteCsf:{rawCode:`<div
	style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);"
	data-testid="overlay-host"
>
	<div
		style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);"
		data-testid="overlay-header"
	>
		Simulated header (32px)
	</div>
	<Button onclick={() => (showcaseOverlayOpen = true)} style="margin-top: 40px;"
		>Open inspector</Button
	>
	<Inspector
		open={showcaseOverlayOpen}
		onOpenChange={(next) => (showcaseOverlayOpen = next)}
		title="Selected item"
		insetTop={32}
		insetBottom={16}
		insetRight={16}
	>
		<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>
	</Inspector>
</div>`}}});var A=a(H,2);y(A,{name:"Overlay opens inset from host header, no backdrop, Escape closes",get template(){return k},parameters:{...R,docs:{description:{story:"Interaction test: the trigger opens the panel with the given title, inset from the simulated\nheader (never overlapping it), with NO visible backdrop (this panel never had one — `modal=\n{false}` on the underlying Drawer Root suppresses vaul's own scrim while keeping its real\nfocus trap, since `Content` renders on bits-ui's `Dialog.Content` regardless of `modal`), and\nEscape closes it. `Content` renders in a portal (vaul's own `Drawer.Portal`, defaulting to\n`document.body`) — use the global `screen` for it, same portaled-Dialog pattern\n`Drawer.stories.svelte` already establishes; `canvas` stays correct for the trigger/header,\nwhich aren't portaled."}},__svelteCsf:{rawCode:`<div
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
</div>`}},play:async({canvasElement:o})=>{const e=C(o);await p.click(e.getByRole("button",{name:"Open inspector"}));const n=await u.findByTestId("inspector-panel");await s(n).toBeVisible(),await s(u.getByRole("heading",{name:"Selected item"})).toBeVisible();const r=e.getByTestId("overlay-header"),t=n.getBoundingClientRect(),c=r.getBoundingClientRect();await s(t.top).toBeGreaterThanOrEqual(c.bottom-1),s(document.querySelector("[data-vaul-overlay]")).toBeNull(),await p.keyboard("{Escape}"),await b(async()=>{await s(u.queryByTestId("inspector-panel")).toBeNull()}),await p.click(e.getByRole("button",{name:"Open inspector"})),await s(await u.findByTestId("inspector-panel")).toBeVisible()}});var N=a(A,2);y(N,{name:"Outside click dismisses",get template(){return k},parameters:{...R,docs:{description:{story:"Interaction test: clicking outside the panel (but still inside the host, e.g. the header)\ndismisses it too — `onInteractOutside` calling `onOpenChange(false)` directly, not relying on\nvaul-svelte's own (confirmed unreliable in this version — see the Invariants) internal\npropagation."}},__svelteCsf:{rawCode:`<div
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
</div>`}},play:async({canvasElement:o})=>{const e=C(o);await p.click(e.getByRole("button",{name:"Open inspector"})),await u.findByTestId("inspector-panel"),await p.click(e.getByTestId("overlay-header")),await b(async()=>{await s(u.queryByTestId("inspector-panel")).toBeNull()}),await p.click(e.getByRole("button",{name:"Open inspector"})),await s(await u.findByTestId("inspector-panel")).toBeVisible()}});var V=a(N,2);y(V,{name:"Overlay resize handle changes width",get template(){return k},parameters:{...R,docs:{description:{story:`Interaction test: the resize handle's keyboard path (role="slider", ArrowLeft grows toward
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
</div>`}},play:async()=>{await p.click(u.getByRole("button",{name:"Open inspector"}));const o=await u.findByTestId("inspector-panel"),e=o.getBoundingClientRect().width;u.getByRole("slider",{name:/Selected item width/i}).focus(),await p.keyboard("{ArrowLeft}"),await b(async()=>{await s(o.getBoundingClientRect().width).toBeGreaterThan(e)}),await s(o).toBeVisible()}});var K=a(V,2);y(K,{name:"Squeeze mode",get template(){return Z},parameters:{docs:{description:{story:`Squeeze mode: the panel is a plain flex sibling (no special positioning) — opening it
    narrows the sibling content via ordinary flexbox, and \`onWidthChange\` reports the live
    width for a caller that can't restructure its own DOM into a flex row.

    OPEN at rest: closed, this story showed an un-narrowed box, no panel, and "Reported width:
    0px" — i.e. the exact opposite of all three things it claims to demonstrate. No
    \`persistKey\` here (unlike \`squeezeTemplate\` below): a showcase must render the same width
    on every visit, not whatever a previous session's resize story wrote to localStorage.`}},__svelteCsf:{rawCode:`<div style="height: 320px; display: flex;">
	<div style="flex: 1; min-width: 0; background: var(--muted);" data-testid="squeeze-content">
		Wrapped content — this narrows when the panel opens (real flexbox squeeze, no overlap).
	</div>
	<Inspector
		open={showcaseSqueezeOpen}
		onOpenChange={(next) => (showcaseSqueezeOpen = next)}
		mode="squeeze"
		title="Details"
		onWidthChange={(w) => (showcaseSqueezeWidth = w)}
	>
		<p class="text-sm text-muted-foreground">Panel body content.</p>
	</Inspector>
</div>
<Button onclick={() => (showcaseSqueezeOpen = !showcaseSqueezeOpen)}>Toggle squeeze</Button>
<p class="text-sm">Reported width: {showcaseSqueezeWidth}px</p>`}}});var F=a(K,2);y(F,{name:"Squeeze resizes via keyboard",get template(){return D},play:async({canvasElement:o})=>{const e=C(o),n=e.getByTestId("squeeze-content"),r=n.getBoundingClientRect().width;await p.click(e.getByRole("button",{name:"Toggle squeeze"}));const t=await e.findByTestId("inspector-panel");await s(t).toBeVisible(),await b(async()=>{await s(n.getBoundingClientRect().width).toBeLessThan(r)}),e.getByRole("slider",{name:/Details width/i}).focus();const l=t.getBoundingClientRect().width;await p.keyboard("{ArrowLeft}"),await b(async()=>{await s(t.getBoundingClientRect().width).toBeGreaterThan(l)})},parameters:{docs:{description:{story:`Interaction test: opening squeeze mode measurably narrows the sibling content AND reports a
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
<p class="text-sm">Reported width: {squeezeWidth}px</p>`}}});var J=a(F,2);y(J,{name:"Resize handle paints the full panel height",get template(){return D},play:async({canvasElement:o})=>{const e=C(o);await p.click(e.getByRole("button",{name:"Toggle squeeze"}));const n=await e.findByTestId("inspector-panel"),r=e.getByRole("slider",{name:/Details width/i});await b(async()=>{await s(Math.abs(r.getBoundingClientRect().height-n.getBoundingClientRect().height)).toBeLessThan(2)});const t=getComputedStyle(r);await s(t.paddingTop).toBe("0px"),await s(t.paddingBottom).toBe("0px"),await s(t.backgroundClip).not.toBe("content-box")},parameters:{docs:{description:{story:`Reported live 2026-08-08: the resize handle looked detached from the panel because its painted
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
<p class="text-sm">Reported width: {squeezeWidth}px</p>`}}}),d(G,E),X()}Y.__docgen={data:[],name:"Inspector.stories.svelte"};const w=ee(Y,ne),Pe=["DefaultOverlay","OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses","OutsideClickDismisses","OverlayResizeHandleChangesWidth","SqueezeMode","SqueezeResizesViaKeyboard","ResizeHandlePaintsTheFullPanelHeight"],We={...w.DefaultOverlay,tags:["svelte-csf-v5"]},Ee={...w.OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses,tags:["svelte-csf-v5"]},He={...w.OutsideClickDismisses,tags:["svelte-csf-v5"]},Ae={...w.OverlayResizeHandleChangesWidth,tags:["svelte-csf-v5"]},Ne={...w.SqueezeMode,tags:["svelte-csf-v5"]},Ve={...w.SqueezeResizesViaKeyboard,tags:["svelte-csf-v5"]},Ke={...w.ResizeHandlePaintsTheFullPanelHeight,tags:["svelte-csf-v5"]};export{We as DefaultOverlay,He as OutsideClickDismisses,Ee as OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses,Ae as OverlayResizeHandleChangesWidth,Ke as ResizeHandlePaintsTheFullPanelHeight,Ne as SqueezeMode,Ve as SqueezeResizesViaKeyboard,Pe as __namedExportsOrder,ne as default};
