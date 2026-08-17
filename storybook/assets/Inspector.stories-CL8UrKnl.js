import{p as ae,f as v,a as F,s as i,b as h,c as ie,n as X,d as g,j as H,e as T,h as m,g as y,t as ee,i as te}from"./iframe-Cp5EZZDQ.js";import{c as re,d as le}from"./create-runtime-stories-DlWd_JCy.js";import{I as $}from"./Inspector-BsOPegke.js";import{B as L}from"./button-C-IJ_ldM.js";import{b as de}from"./storyWait-OrdjTAsd.js";import"./preload-helper-PPVm8Dsz.js";import"./attributes-DaXk2Qm-.js";import"./this-DDpeXo7Z.js";import"./is-mobile.svelte-BiK3Emrj.js";import"./media-query-BacV_bTM.js";import"./Drawer-B9RTyqxD.js";import"./clone-BL3WqaLn.js";import"./dialog-content-CQ4rPmNC.js";import"./create-id-D6BD33aN.js";import"./index-E229x6_a.js";import"./presence-manager.svelte-BLWJw5zA.js";import"./scroll-lock-CnKYyYe5.js";import"./roving-focus-group-M5WoWWI_.js";import"./shadcn-utils-KrE3H22K.js";import"./DragHandle-DrX9zL-5.js";import"./Icon-DJbtmXrR.js";import"./transitions-DsHqt78k.js";import"./x-CPGa20d6.js";import"./persistedNumber.svelte-DWNEa8JK.js";import"./index-Bc-g8Pvq.js";const{expect:n,userEvent:r,waitFor:w,within:S,screen:d}=__STORYBOOK_MODULE_TEST__,M=k=>{var O=pe();h(k,O)},ne=(k,O=X,B=X)=>{var E=ue(),D=i(m(E),2);L(D,{onclick:()=>B()(!O()),style:"margin-top: 40px;",children:(c,P)=>{var z=H("Toggle inspector");h(c,z)},$$slots:{default:!0}});var R=i(D,2),N=m(R);M(N);var x=i(R,2);$(x,{get open(){return O()},onOpenChange:c=>B()(c),title:"Selected item",insetTop:32,insetBottom:16,insetRight:16,children:(c,P)=>{var z=ce();h(c,z)},$$slots:{default:!0}}),h(k,E)},he={title:"Composites/Inspector",component:$,tags:["autodocs"]},{Story:f}=le(),I={layout:"fullscreen"};var pe=v(`<p class="text-sm" data-testid="host-prose">Overlay mode floats the panel above this text: the panel is portalled and viewport-fixed, so
		it takes no space in the host's layout and these lines keep exactly the widths and breaks
		they have right now. Watch the ends of the lines as the panel opens — nothing moves.</p> <p class="mt-3 text-sm">Squeeze mode makes the opposite trade. There the panel is an ordinary flex sibling of the
		content, so opening it genuinely narrows the host and every line below re-wraps to the new
		measure. Neither behaviour is better; they answer different questions, which is why the
		component ships both and why these stories sit next to each other.</p> <p class="mt-3 text-sm">Pick overlay when the host cannot afford to reflow — a canvas, a map, a media viewer, a
		virtualised grid whose scroll position is meaningful, or anything where re-laying out the
		page under the reader is more disruptive than covering part of it.</p> <p class="mt-3 text-sm">Pick squeeze when everything must stay reachable at once, which is the usual case for a
		list-plus-details view: nothing is hidden behind the panel, so the reader never has to
		dismiss it to see what they were working on.</p>`,1),ce=v('<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>'),ue=v('<div style="height: 420px; position: relative; overflow: hidden; border: 1px solid var(--border);" data-testid="overlay-host"><div style="position: absolute; top: 0; left: 0; right: 0; height: 32px; background: var(--muted);" data-testid="overlay-header">Simulated header (32px)</div> <!> <div style="margin-top: 1rem; padding-right: 1rem;"><!></div> <!></div>'),ge=v('<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>'),ve=v('<div style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);" data-testid="overlay-host"><!> <!></div>'),ye=v('<p class="text-sm text-muted-foreground">Panel body content.</p>'),me=v('<div style="height: 420px; display: flex;"><div style="flex: 1; min-width: 0; overflow: auto; padding: 0.75rem; background: var(--muted);" data-testid="squeeze-content"><!></div> <!></div> <!> <p class="text-sm"> </p>',1),we=v('<p class="text-sm text-muted-foreground">Panel body content.</p>'),fe=v('<div style="height: 420px; display: flex;"><div style="flex: 1; min-width: 0; overflow: auto; padding: 0.75rem; background: var(--muted);" data-testid="squeeze-content"><!></div> <!></div> <!> <p class="text-sm"> </p>',1),be=v("<!> <!> <!> <!>  <!>  <!> <!> <!>",1);function oe(k,O){ae(O,!0);const B=t=>{ne(t,()=>y(x),()=>e=>g(x,e,!0))},E=t=>{ne(t,()=>y(z),()=>e=>g(z,e,!0))},D=t=>{var e=ve(),s=m(e);L(s,{onclick:()=>g(x,!0),children:(o,u)=>{var p=H("Open inspector");h(o,p)},$$slots:{default:!0}});var a=i(s,2);$(a,{get open(){return y(x)},onOpenChange:o=>g(x,o,!0),title:"Selected item",side:"left",children:(o,u)=>{var p=ge();h(o,p)},$$slots:{default:!0}}),h(t,e)},R=t=>{var e=me(),s=F(e),a=m(s),o=m(a);M(o);var u=i(a,2);$(u,{get open(){return y(c)},onOpenChange:l=>g(c,l,!0),mode:"squeeze",title:"Details",persistKey:"story-demo",onWidthChange:l=>g(P,l,!0),children:(l,W)=>{var _=ye();h(l,_)},$$slots:{default:!0}});var p=i(s,2);L(p,{onclick:()=>g(c,!y(c)),children:(l,W)=>{var _=H("Toggle squeeze");h(l,_)},$$slots:{default:!0}});var C=i(p,2),q=m(C);ee(()=>te(q,`Reported width: ${y(P)??""}px`)),h(t,e)},N=t=>{var e=fe(),s=F(e),a=m(s),o=m(a);M(o);var u=i(a,2);$(u,{get open(){return y(A)},onOpenChange:l=>g(A,l,!0),mode:"squeeze",title:"Details",onWidthChange:l=>g(V,l,!0),children:(l,W)=>{var _=we();h(l,_)},$$slots:{default:!0}});var p=i(s,2);L(p,{onclick:()=>g(A,!y(A)),children:(l,W)=>{var _=H("Toggle squeeze");h(l,_)},$$slots:{default:!0}});var C=i(p,2),q=m(C);ee(()=>te(q,`Reported width: ${y(V)??""}px`)),h(t,e)};let x=T(!1),c=T(!1),P=T(0),z=T(!1),A=T(!0),V=T(0);var K=be(),G=F(K);f(G,{name:"Default (overlay)",get template(){return E},parameters:{...I,docs:{description:{story:`Default: overlay mode, resting OPEN so the inset is the thing you see. Inset from each
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
    is about panels that escape their block, not about "open" in general.`}},__svelteCsf:{rawCode:"{@render overlayHost(showcaseOverlayOpen, (next) => (showcaseOverlayOpen = next))}"}},play:async({canvasElement:t})=>{const e=S(t);await r.click(e.getByRole("button",{name:"Toggle inspector"})),await n(await d.findByTestId("inspector-panel")).toBeVisible()}});var Y=i(G,2);f(Y,{name:"Overlay opens inset from host header, no backdrop, Escape closes",get template(){return B},parameters:{...I,docs:{description:{story:"Interaction test: the trigger opens the panel with the given title, inset from the simulated\nheader (never overlapping it), with NO visible backdrop (this panel never had one — `modal=\n{false}` on the underlying Drawer Root suppresses vaul's own scrim while keeping its real\nfocus trap, since `Content` renders on bits-ui's `Dialog.Content` regardless of `modal`), and\nEscape closes it. `Content` renders in a portal (vaul's own `Drawer.Portal`, defaulting to\n`document.body`) — use the global `screen` for it, same portaled-Dialog pattern\n`Drawer.stories.svelte` already establishes; `canvas` stays correct for the trigger/header,\nwhich aren't portaled."}},__svelteCsf:{rawCode:"{@render overlayHost(overlayOpen, (next) => (overlayOpen = next))}"}},play:async({canvasElement:t})=>{const e=S(t),s=e.getByTestId("host-prose"),a=s.getBoundingClientRect();await r.click(e.getByRole("button",{name:"Toggle inspector"}));const o=await d.findByTestId("inspector-panel");await n(o).toBeVisible(),await n(d.getByRole("heading",{name:"Selected item"})).toBeVisible(),await de(o);const u=s.getBoundingClientRect();await n(u.height).toBe(a.height),await n(u.width).toBe(a.width),await n(u.left).toBe(a.left);const p=e.getByTestId("overlay-header"),C=o.getBoundingClientRect(),q=p.getBoundingClientRect();await n(C.top).toBeGreaterThanOrEqual(q.bottom-1),n(document.querySelector("[data-vaul-overlay]")).toBeNull(),await r.keyboard("{Escape}"),await w(async()=>{await n(d.queryByTestId("inspector-panel")).toBeNull()}),await r.click(e.getByRole("button",{name:"Toggle inspector"})),await n(await d.findByTestId("inspector-panel")).toBeVisible()}});var U=i(Y,2);f(U,{name:"Outside click dismisses",get template(){return B},parameters:{...I,docs:{description:{story:"Interaction test: clicking outside the panel (but still inside the host, e.g. the header)\ndismisses it too — `onInteractOutside` calling `onOpenChange(false)` directly, not relying on\nvaul-svelte's own (confirmed unreliable in this version — see the Invariants) internal\npropagation."}},__svelteCsf:{rawCode:"{@render overlayHost(overlayOpen, (next) => (overlayOpen = next))}"}},play:async({canvasElement:t})=>{const e=S(t);await r.click(e.getByRole("button",{name:"Toggle inspector"})),await d.findByTestId("inspector-panel"),await r.click(e.getByTestId("overlay-header")),await w(async()=>{await n(d.queryByTestId("inspector-panel")).toBeNull()}),await r.click(e.getByRole("button",{name:"Toggle inspector"})),await n(await d.findByTestId("inspector-panel")).toBeVisible()}});var j=i(U,2);f(j,{name:"Overlay resize handle changes width",get template(){return B},parameters:{...I,docs:{description:{story:`Interaction test: the resize handle's keyboard path (role="slider", ArrowLeft grows toward
center on the default right-side panel) changes the panel's own rendered width — same
RESIZE_KEY_STEP-per-press pattern the squeeze-mode story below already covers.`}},__svelteCsf:{rawCode:"{@render overlayHost(overlayOpen, (next) => (overlayOpen = next))}"}},play:async()=>{await r.click(d.getByRole("button",{name:"Toggle inspector"}));const t=await d.findByTestId("inspector-panel"),e=t.getBoundingClientRect().width;d.getByRole("slider",{name:/Selected item width/i}).focus(),await r.keyboard("{ArrowLeft}"),await w(async()=>{await n(t.getBoundingClientRect().width).toBeGreaterThan(e)}),await n(t).toBeVisible()}});var Z=i(j,2);f(Z,{name:"Overlay resize handle on the LEFT — direction is mirrored",get template(){return D},parameters:{...I,docs:{description:{story:`Regression guard for \`side\`-awareness in the SHARED \`ResizeGesture\` primitive
(\`resizeGesture.svelte.ts\`, unified with the sidebar's own width handle 2026-08-10) — every
other story in this file uses the default \`side="right"\`, so nothing else exercises this
direction. The primitive's own unit tests cover the underlying math generically; this proves
Inspector's actual CONFIGURATION of it (\`direction: () => (side === 'right' ? -1 : 1)\`) is wired
the right way round for the other side, not just provably correct in isolation. For a LEFT-side
panel, "toward center" (grows) is ArrowRight — the mirror image of the \`side="right"\` story
above, which grows on ArrowLeft. Getting this backwards is exactly the kind of thing a port onto
a shared primitive can silently invert (it nearly happened once already, in the sidebar's own
RTL direction wiring, during the same unification pass — caught before landing, not after).`}},__svelteCsf:{rawCode:`<div
	style="height: 320px; position: relative; overflow: hidden; border: 1px solid var(--border);"
	data-testid="overlay-host"
>
	<Button onclick={() => (overlayOpen = true)}>Open inspector</Button>
	<Inspector
		open={overlayOpen}
		onOpenChange={(next) => (overlayOpen = next)}
		title="Selected item"
		side="left"
	>
		<p class="text-sm text-muted-foreground">Arbitrary content — any snippet.</p>
	</Inspector>
</div>`}},play:async()=>{await r.click(d.getByRole("button",{name:"Open inspector"}));const t=await d.findByTestId("inspector-panel"),e=t.getBoundingClientRect().width;d.getByRole("slider",{name:/Selected item width/i}).focus(),await r.keyboard("{ArrowLeft}"),await w(async()=>{await n(t.getBoundingClientRect().width).toBeLessThan(e)});const a=t.getBoundingClientRect().width;await r.keyboard("{ArrowRight}"),await r.keyboard("{ArrowRight}"),await w(async()=>{await n(t.getBoundingClientRect().width).toBeGreaterThan(a)}),await n(t.getBoundingClientRect().width).toBeGreaterThan(e)}});var Q=i(Z,2);f(Q,{name:"Squeeze mode",get template(){return N},parameters:{docs:{description:{story:`Squeeze mode: the panel is a plain flex sibling (no special positioning) — opening it
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
<p class="text-sm">Reported width: {showcaseSqueezeWidth}px</p>`}}});var J=i(Q,2);f(J,{name:"Squeeze resizes via keyboard",get template(){return R},play:async({canvasElement:t})=>{const e=S(t),s=e.getByTestId("squeeze-content"),a=s.getBoundingClientRect().width;await r.click(e.getByRole("button",{name:"Toggle squeeze"}));const o=await e.findByTestId("inspector-panel");await n(o).toBeVisible(),await w(async()=>{await n(s.getBoundingClientRect().width).toBeLessThan(a)}),e.getByRole("slider",{name:/Details width/i}).focus();const p=o.getBoundingClientRect().width;await r.keyboard("{ArrowLeft}"),await w(async()=>{await n(o.getBoundingClientRect().width).toBeGreaterThan(p)})},parameters:{docs:{description:{story:`Interaction test: opening squeeze mode measurably narrows the sibling content AND reports a
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
<p class="text-sm">Reported width: {squeezeWidth}px</p>`}}});var se=i(J,2);f(se,{name:"Resize handle paints the full panel height",get template(){return R},play:async({canvasElement:t})=>{const e=S(t);await r.click(e.getByRole("button",{name:"Toggle squeeze"}));const s=await e.findByTestId("inspector-panel"),a=e.getByRole("slider",{name:/Details width/i});await w(async()=>{await n(Math.abs(a.getBoundingClientRect().height-s.getBoundingClientRect().height)).toBeLessThan(2)});const o=getComputedStyle(a);await n(o.paddingTop).toBe("0px"),await n(o.paddingBottom).toBe("0px"),await n(o.backgroundClip).not.toBe("content-box")},parameters:{docs:{description:{story:`Reported live 2026-08-08: the resize handle looked detached from the panel because its painted
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
<p class="text-sm">Reported width: {squeezeWidth}px</p>`}}}),h(k,K),ie()}oe.__docgen={data:[],name:"Inspector.stories.svelte"};const b=re(oe,he),Ge=["DefaultOverlay","OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses","OutsideClickDismisses","OverlayResizeHandleChangesWidth","OverlayResizeHandleOnTheLEFTDirectionIsMirrored","SqueezeMode","SqueezeResizesViaKeyboard","ResizeHandlePaintsTheFullPanelHeight"],Ye={...b.DefaultOverlay,tags:["svelte-csf-v5"]},Ue={...b.OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses,tags:["svelte-csf-v5"]},je={...b.OutsideClickDismisses,tags:["svelte-csf-v5"]},Ze={...b.OverlayResizeHandleChangesWidth,tags:["svelte-csf-v5"]},Qe={...b.OverlayResizeHandleOnTheLEFTDirectionIsMirrored,tags:["svelte-csf-v5"]},Je={...b.SqueezeMode,tags:["svelte-csf-v5"]},Xe={...b.SqueezeResizesViaKeyboard,tags:["svelte-csf-v5"]},et={...b.ResizeHandlePaintsTheFullPanelHeight,tags:["svelte-csf-v5"]};export{Ye as DefaultOverlay,je as OutsideClickDismisses,Ue as OverlayOpensInsetFromHostHeaderNoBackdropEscapeCloses,Ze as OverlayResizeHandleChangesWidth,Qe as OverlayResizeHandleOnTheLEFTDirectionIsMirrored,et as ResizeHandlePaintsTheFullPanelHeight,Je as SqueezeMode,Xe as SqueezeResizesViaKeyboard,Ge as __namedExportsOrder,he as default};
