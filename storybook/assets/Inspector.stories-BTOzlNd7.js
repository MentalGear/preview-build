import{p as se,f as w,a as W,s as o,b as h,c as ae,n as Q,h as y,d as v,e as O,g as m,j as N,t as J,i as X}from"./iframe-LovoTH6N.js";import{c as oe,d as ie}from"./create-runtime-stories-DLirN8EW.js";import{I as H}from"./Inspector-C7bWjV-r.js";import{B as V}from"./button-zbzd37_Q.js";import{b as re}from"./storyWait-OrdjTAsd.js";import"./preload-helper-PPVm8Dsz.js";import"./attributes-Cgja_zos.js";import"./this-C9-w70vi.js";import"./is-mobile.svelte-DoXhH_gH.js";import"./media-query-Dk6b37nS.js";import"./Drawer-BuqBYs5G.js";import"./clone-D_ByiFtO.js";import"./dialog-content-CqZ5XueS.js";import"./create-id-B_8g01ZX.js";import"./index-DvoV2L-N.js";import"./presence-manager.svelte-D1xVLnRs.js";import"./scroll-lock-PD3br_FK.js";import"./roving-focus-group-KHTkI8xt.js";import"./shadcn-utils-Cswpzpr_.js";import"./DragHandle-Dtn5ub_y.js";import"./Icon-BOjIyb_5.js";import"./transitions-DRIwLcAQ.js";import"./x-CO-d5oG1.js";import"./index-BkEX9KFP.js";const{expect:n,userEvent:l,waitFor:k,within:S,screen:d}=__STORYBOOK_MODULE_TEST__,M=q=>{var _=de();h(q,_)},ee=(q,_=Q,z=Q)=>{var I=pe(),T=o(y(I),2);V(T,{onclick:()=>z()(!_()),style:"margin-top: 40px;",children:(c,E)=>{var u=N("Toggle inspector");h(c,u)},$$slots:{default:!0}});var $=o(T,2),D=y($);M(D);var B=o($,2);H(B,{get open(){return _()},onOpenChange:c=>z()(c),title:"Selected item",insetTop:32,insetBottom:16,insetRight:16,children:(c,E)=>{var u=he();h(c,u)},$$slots:{default:!0}}),h(q,I)},le={title:"Composites/Inspector",component:H,tags:["autodocs"]},{Story:b}=ie(),P={layout:"fullscreen"};var de=w(`<p class="text-sm" data-testid="host-prose">Overlay mode floats the panel above this text: the panel is portalled and viewport-fixed, so
		it takes no space in the host's layout and these lines keep exactly the widths and breaks
		they have right now. Watch the ends of the lines as the panel opens — nothing moves.</p> <p class="mt-3 text-sm">Squeeze mode makes the opposite trade. There the panel is an ordinary flex sibling of the
		content, so opening it genuinely narrows the host and every line below re-wraps to the new
		measure. Neither behaviour is better; they answer different questions, which is why the
		component ships both and why these stories sit next to each other.</p> <p class="mt-3 text-sm">Pick overlay when the host cannot afford to reflow — a canvas, a map, a media viewer, a
		virtualised grid whose scroll position is meaningful, or anything where re-laying out the
		page under the reader is more disruptive than covering part of it.</p> <p class="mt-3 text-sm">Pick squeeze when everything must stay reachable at once, which is the usual case for a
		list-plus-details view: nothing is hidden behind the panel, so the reader never has to
		dismiss it to see what they were working on.</p>`,1),he=w('<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>'),pe=w('<div style="height: 420px; position: relative; overflow: hidden; border: 1px solid var(--border);" data-testid="overlay-host"><div style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);" data-testid="overlay-header">Simulated header (32px)</div> <!> <div style="margin-top: 1rem; padding-right: 1rem;"><!></div> <!></div>'),ce=w('<p class="text-sm text-muted-foreground">Panel body content.</p>'),ue=w('<div style="height: 420px; display: flex;"><div style="flex: 1; min-width: 0; overflow: auto; padding: 0.75rem; background: var(--muted);" data-testid="squeeze-content"><!></div> <!></div> <!> <p class="text-sm"> </p>',1),ge=w('<p class="text-sm text-muted-foreground">Panel body content.</p>'),ve=w('<div style="height: 420px; display: flex;"><div style="flex: 1; min-width: 0; overflow: auto; padding: 0.75rem; background: var(--muted);" data-testid="squeeze-content"><!></div> <!></div> <!> <p class="text-sm"> </p>',1),me=w("<!> <!> <!> <!>  <!> <!> <!>",1);function te(q,_){se(_,!0);const z=t=>{ee(t,()=>m(D),()=>e=>v(D,e,!0))},I=t=>{ee(t,()=>m(E),()=>e=>v(E,e,!0))},T=t=>{var e=ue(),i=W(e),r=y(i),s=y(r);M(s);var g=o(r,2);H(g,{get open(){return m(B)},onOpenChange:a=>v(B,a,!0),mode:"squeeze",title:"Details",persistKey:"story-demo",onWidthChange:a=>v(c,a,!0),children:(a,A)=>{var f=ce();h(a,f)},$$slots:{default:!0}});var p=o(i,2);V(p,{onclick:()=>v(B,!m(B)),children:(a,A)=>{var f=N("Toggle squeeze");h(a,f)},$$slots:{default:!0}});var C=o(p,2),R=y(C);J(()=>X(R,`Reported width: ${m(c)??""}px`)),h(t,e)},$=t=>{var e=ve(),i=W(e),r=y(i),s=y(r);M(s);var g=o(r,2);H(g,{get open(){return m(u)},onOpenChange:a=>v(u,a,!0),mode:"squeeze",title:"Details",onWidthChange:a=>v(L,a,!0),children:(a,A)=>{var f=ge();h(a,f)},$$slots:{default:!0}});var p=o(i,2);V(p,{onclick:()=>v(u,!m(u)),children:(a,A)=>{var f=N("Toggle squeeze");h(a,f)},$$slots:{default:!0}});var C=o(p,2),R=y(C);J(()=>X(R,`Reported width: ${m(L)??""}px`)),h(t,e)};let D=O(!1),B=O(!1),c=O(0),E=O(!1),u=O(!0),L=O(0);var K=me(),F=W(K);b(F,{name:"Default (overlay)",get template(){return I},parameters:{...P,docs:{description:{story:`Default: overlay mode, resting OPEN so the inset is the thing you see. Inset from each
    edge (32px top simulating a header, 16px bottom/right) instead of a plain shadcn Sheet's
    edge-to-edge sheet, so a host's own header/footer chrome stays uncovered — none of which
    is observable while the panel is closed. The trigger stays in the frame, so the
    closed→open path is still discoverable. Built on shadcn \`Drawer\` (vaul-svelte,
    \`direction="right"\`) — not hand-rolled — see the Invariants in
    docs/kit/components/inspector.md for why \`modal={false}\` + \`handleOnly={true}\`.

    Opened by the play(), NOT by a mount-time \`open = true\` — reported live, and the
    difference is visible on Storybook's DOCS page, which stacks every story in this file into
    one scrolling document. \`Inspector\` in overlay mode portals its panel to \`document.body\`
    and pins it to the VIEWPORT, so a mount-time open lands the panel on top of the docs page
    itself rather than inside its own story block (measured before this change: a "Selected
    item" panel floating over the docs header, unrelated to whatever story you were reading).
    A play() is the right home because Storybook does NOT autoplay plays in docs mode
    (\`@storybook/addon-docs\`: \`autoplay ?? false\`; verified live — the interaction stories
    below all END open and all render CLOSED on the docs page), so the docs page stays calm
    while the story CANVAS still rests on the open panel.

    The SQUEEZE showcase below deliberately keeps its mount-time \`open\` instead: a squeeze
    panel is an ordinary inline flex sibling, so it renders INSIDE its story block and covers
    nothing. Same reasoning keeps \`SqueezePanel\` and \`MediaLightbox\` open at mount. The rule
    is about panels that escape their block, not about "open" in general.`}},__svelteCsf:{rawCode:"{@render overlayHost(showcaseOverlayOpen, (next) => (showcaseOverlayOpen = next))}"}},play:async({canvasElement:t})=>{const e=S(t);await l.click(e.getByRole("button",{name:"Toggle inspector"})),await n(await d.findByTestId("inspector-panel")).toBeVisible()}});var Y=o(F,2);b(Y,{name:"Overlay opens inset from host header, no backdrop, Escape closes",get template(){return z},parameters:{...P,docs:{description:{story:"Interaction test: the trigger opens the panel with the given title, inset from the simulated\nheader (never overlapping it), with NO visible backdrop (this panel never had one — `modal=\n{false}` on the underlying Drawer Root suppresses vaul's own scrim while keeping its real\nfocus trap, since `Content` renders on bits-ui's `Dialog.Content` regardless of `modal`), and\nEscape closes it. `Content` renders in a portal (vaul's own `Drawer.Portal`, defaulting to\n`document.body`) — use the global `screen` for it, same portaled-Dialog pattern\n`Drawer.stories.svelte` already establishes; `canvas` stays correct for the trigger/header,\nwhich aren't portaled."}},__svelteCsf:{rawCode:"{@render overlayHost(overlayOpen, (next) => (overlayOpen = next))}"}},play:async({canvasElement:t})=>{const e=S(t),i=e.getByTestId("host-prose"),r=i.getBoundingClientRect();await l.click(e.getByRole("button",{name:"Toggle inspector"}));const s=await d.findByTestId("inspector-panel");await n(s).toBeVisible(),await n(d.getByRole("heading",{name:"Selected item"})).toBeVisible(),await re(s);const g=i.getBoundingClientRect();await n(g.height).toBe(r.height),await n(g.width).toBe(r.width),await n(g.left).toBe(r.left);const p=e.getByTestId("overlay-header"),C=s.getBoundingClientRect(),R=p.getBoundingClientRect();await n(C.top).toBeGreaterThanOrEqual(R.bottom-1),n(document.querySelector("[data-vaul-overlay]")).toBeNull(),await l.keyboard("{Escape}"),await k(async()=>{await n(d.queryByTestId("inspector-panel")).toBeNull()}),await l.click(e.getByRole("button",{name:"Toggle inspector"})),await n(await d.findByTestId("inspector-panel")).toBeVisible()}});var G=o(Y,2);b(G,{name:"Outside click dismisses",get template(){return z},parameters:{...P,docs:{description:{story:"Interaction test: clicking outside the panel (but still inside the host, e.g. the header)\ndismisses it too — `onInteractOutside` calling `onOpenChange(false)` directly, not relying on\nvaul-svelte's own (confirmed unreliable in this version — see the Invariants) internal\npropagation."}},__svelteCsf:{rawCode:"{@render overlayHost(overlayOpen, (next) => (overlayOpen = next))}"}},play:async({canvasElement:t})=>{const e=S(t);await l.click(e.getByRole("button",{name:"Toggle inspector"})),await d.findByTestId("inspector-panel"),await l.click(e.getByTestId("overlay-header")),await k(async()=>{await n(d.queryByTestId("inspector-panel")).toBeNull()}),await l.click(e.getByRole("button",{name:"Toggle inspector"})),await n(await d.findByTestId("inspector-panel")).toBeVisible()}});var U=o(G,2);b(U,{name:"Overlay resize handle changes width",get template(){return z},parameters:{...P,docs:{description:{story:`Interaction test: the resize handle's keyboard path (role="slider", ArrowLeft grows toward
center on the default right-side panel) changes the panel's own rendered width — same
RESIZE_KEY_STEP-per-press pattern the squeeze-mode story below already covers.`}},__svelteCsf:{rawCode:"{@render overlayHost(overlayOpen, (next) => (overlayOpen = next))}"}},play:async()=>{await l.click(d.getByRole("button",{name:"Toggle inspector"}));const t=await d.findByTestId("inspector-panel"),e=t.getBoundingClientRect().width;d.getByRole("slider",{name:/Selected item width/i}).focus(),await l.keyboard("{ArrowLeft}"),await k(async()=>{await n(t.getBoundingClientRect().width).toBeGreaterThan(e)}),await n(t).toBeVisible()}});var Z=o(U,2);b(Z,{name:"Squeeze mode",get template(){return $},parameters:{docs:{description:{story:`Squeeze mode: the panel is a plain flex sibling (no special positioning) — opening it
    narrows the sibling content via ordinary flexbox, and \`onWidthChange\` reports the live
    width for a caller that can't restructure its own DOM into a flex row.

    OPEN at rest: closed, this story showed an un-narrowed box, no panel, and "Reported width:
    0px" — i.e. the exact opposite of all three things it claims to demonstrate. No
    \`persistKey\` here (unlike \`squeezeTemplate\` below): a showcase must render the same width
    on every visit, not whatever a previous session's resize story wrote to localStorage.

    And unlike the OVERLAY showcase above, this one keeps its mount-time \`open\` rather than
    moving it into a play(). A squeeze panel is an ordinary inline flex sibling: it renders
    INSIDE this story's own block and covers nothing, so the docs page stays perfectly readable
    with it open (verified — the whole Inspector docs page reports zero floating panels and an
    unlocked body with this exactly as it is). Deferring it to a play would only cost the docs
    page the one frame this story exists to show. The rule is about panels that escape their
    story block, not about "open" in general.`}},__svelteCsf:{rawCode:`<div style="height: 420px; display: flex;">
	<div
		style="flex: 1; min-width: 0; overflow: auto; padding: 0.75rem; background: var(--muted);"
		data-testid="squeeze-content"
	>
		<!-- The SAME prose the overlay stories above use, so the two modes can be read
		     against each other: there the line breaks hold; here every line re-wraps as the
		     panel takes its share of the row. A single short line (what this used to be)
		     renders an identical frame in both modes. -->
		{@render hostProse()}
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
<p class="text-sm">Reported width: {showcaseSqueezeWidth}px</p>`}}});var j=o(Z,2);b(j,{name:"Squeeze resizes via keyboard",get template(){return T},play:async({canvasElement:t})=>{const e=S(t),i=e.getByTestId("squeeze-content"),r=i.getBoundingClientRect().width;await l.click(e.getByRole("button",{name:"Toggle squeeze"}));const s=await e.findByTestId("inspector-panel");await n(s).toBeVisible(),await k(async()=>{await n(i.getBoundingClientRect().width).toBeLessThan(r)}),e.getByRole("slider",{name:/Details width/i}).focus();const p=s.getBoundingClientRect().width;await l.keyboard("{ArrowLeft}"),await k(async()=>{await n(s.getBoundingClientRect().width).toBeGreaterThan(p)})},parameters:{docs:{description:{story:`Interaction test: opening squeeze mode measurably narrows the sibling content AND reports a
non-zero width via onWidthChange; the resize handle's keyboard path (ArrowLeft/ArrowRight)
changes both the reported width and the panel's own rendered width.`}},__svelteCsf:{rawCode:`<div style="height: 420px; display: flex;">
	<div
		style="flex: 1; min-width: 0; overflow: auto; padding: 0.75rem; background: var(--muted);"
		data-testid="squeeze-content"
	>
		<!-- The SAME prose the overlay stories above use, so the two modes can be read
		     against each other: there the line breaks hold; here every line re-wraps as the
		     panel takes its share of the row. A single short line (what this used to be)
		     renders an identical frame in both modes. -->
		{@render hostProse()}
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
<p class="text-sm">Reported width: {squeezeWidth}px</p>`}}});var ne=o(j,2);b(ne,{name:"Resize handle paints the full panel height",get template(){return T},play:async({canvasElement:t})=>{const e=S(t);await l.click(e.getByRole("button",{name:"Toggle squeeze"}));const i=await e.findByTestId("inspector-panel"),r=e.getByRole("slider",{name:/Details width/i});await k(async()=>{await n(Math.abs(r.getBoundingClientRect().height-i.getBoundingClientRect().height)).toBeLessThan(2)});const s=getComputedStyle(r);await n(s.paddingTop).toBe("0px"),await n(s.paddingBottom).toBe("0px"),await n(s.backgroundClip).not.toBe("content-box")},parameters:{docs:{description:{story:`Reported live 2026-08-08: the resize handle looked detached from the panel because its painted
    strip stopped ~1rem short at each end, leaving a visible gap against the panel's own edges.

    This has to assert COMPUTED STYLE, not geometry, and that's the point worth remembering: the
    handle is \`position: absolute; top: 0; bottom: 0\`, so its bounding rect was ALREADY the full
    panel height both before and after the fix. The old \`padding-block: 1rem\` +
    \`background-clip: content-box\` only inset the PAINTED content box inside that unchanged
    element box — invisible to \`getBoundingClientRect()\`, and invisible to VRT too (verified: the
    photos VRT suite passes either way, because no snapshot captures the info panel open). So a
    rect- or pixel-based guard would pass whichever way this regressed.`}},__svelteCsf:{rawCode:`<div style="height: 420px; display: flex;">
	<div
		style="flex: 1; min-width: 0; overflow: auto; padding: 0.75rem; background: var(--muted);"
		data-testid="squeeze-content"
	>
		<!-- The SAME prose the overlay stories above use, so the two modes can be read
		     against each other: there the line breaks hold; here every line re-wraps as the
		     panel takes its share of the row. A single short line (what this used to be)
		     renders an identical frame in both modes. -->
		{@render hostProse()}
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
<p class="text-sm">Reported width: {squeezeWidth}px</p>`}}}),h(q,K),ae()}te.__docgen={data:[],name:"Inspector.stories.svelte"};const x=oe(te,le),Ve=["DefaultOverlay","OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses","OutsideClickDismisses","OverlayResizeHandleChangesWidth","SqueezeMode","SqueezeResizesViaKeyboard","ResizeHandlePaintsTheFullPanelHeight"],Me={...x.DefaultOverlay,tags:["svelte-csf-v5"]},Le={...x.OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses,tags:["svelte-csf-v5"]},Ke={...x.OutsideClickDismisses,tags:["svelte-csf-v5"]},Fe={...x.OverlayResizeHandleChangesWidth,tags:["svelte-csf-v5"]},Ye={...x.SqueezeMode,tags:["svelte-csf-v5"]},Ge={...x.SqueezeResizesViaKeyboard,tags:["svelte-csf-v5"]},Ue={...x.ResizeHandlePaintsTheFullPanelHeight,tags:["svelte-csf-v5"]};export{Me as DefaultOverlay,Ke as OutsideClickDismisses,Le as OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses,Fe as OverlayResizeHandleChangesWidth,Ue as ResizeHandlePaintsTheFullPanelHeight,Ye as SqueezeMode,Ge as SqueezeResizesViaKeyboard,Ve as __namedExportsOrder,le as default};
