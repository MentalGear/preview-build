import{p as te,f as h,a as w,s as u,b as l,c as ae,d as g,j as C,e as S,k as T,g as $}from"./iframe-LovoTH6N.js";import{c as ne,d as oe}from"./create-runtime-stories-DLirN8EW.js";import{D as x}from"./Drawer-BuqBYs5G.js";import{B as A}from"./button-zbzd37_Q.js";import{a as m,b as k,f as j}from"./storyWait-OrdjTAsd.js";import{e as D,i as I}from"./attributes-Cgja_zos.js";import"./preload-helper-PPVm8Dsz.js";import"./this-C9-w70vi.js";import"./clone-D_ByiFtO.js";import"./dialog-content-CqZ5XueS.js";import"./create-id-B_8g01ZX.js";import"./index-DvoV2L-N.js";import"./presence-manager.svelte-D1xVLnRs.js";import"./scroll-lock-PD3br_FK.js";import"./roving-focus-group-KHTkI8xt.js";import"./shadcn-utils-Cswpzpr_.js";import"./DragHandle-Dtn5ub_y.js";import"./Icon-BOjIyb_5.js";import"./transitions-DRIwLcAQ.js";import"./x-CO-d5oG1.js";import"./index-BkEX9KFP.js";const{expect:t,userEvent:d,waitFor:y,within:_,screen:s}=__STORYBOOK_MODULE_TEST__,re={title:"Composites/Drawer",component:x,tags:["autodocs"]},{Story:B}=oe();var se=h('<p data-testid="row"></p>'),ie=h("<!> <!>",1),le=h('<p data-testid="row"></p>'),de=h("<!> <!>",1),pe=h('<p data-testid="row"></p>'),ce=h("<!> <!>",1),he=h("<p>One short line.</p>"),we=h("<!> <!>",1),ue=h('<p data-testid="row"></p>'),ge=h("<!> <!>",1),me=h("<!> <!> <!>  <!>  <!>  <!>",1);function U(K,Y){te(Y,!0);const V=i=>{var n=ie(),e=w(n);A(e,{onclick:()=>g(P,!0),children:(a,p)=>{var r=C("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);x(o,{get open(){return $(P)},onOpenChange:a=>g(P,a,!0),title:"Selected item",testId:"demo-drawer",children:(a,p)=>{var r=T(),f=w(r);D(f,16,()=>Array(16),I,(b,H,v)=>{var c=se();c.textContent=`Row ${v+1} of content — enough rows to push well past peek height.`,l(b,c)}),l(a,r)},$$slots:{default:!0}}),l(i,n)},J=i=>{var n=de(),e=w(n);A(e,{onclick:()=>g(F,!0),children:(a,p)=>{var r=C("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);x(o,{get open(){return $(F)},onOpenChange:a=>g(F,a,!0),title:"Selected item",testId:"default-drawer",children:(a,p)=>{var r=T(),f=w(r);D(f,16,()=>Array(16),I,(b,H,v)=>{var c=le();c.textContent=`Row ${v+1} of content — enough rows to push well past peek height.`,l(b,c)}),l(a,r)},$$slots:{default:!0}}),l(i,n)},Q=i=>{var n=ce(),e=w(n);A(e,{onclick:()=>g(R,!0),children:(a,p)=>{var r=C("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);x(o,{get open(){return $(R)},onOpenChange:a=>g(R,a,!0),title:"A deliberately long title that wraps across more than one line while the drawer is peeking, to exercise the peek-time clamp — long enough to still wrap even at a wide desktop test viewport, not just a narrow mobile one, since this story runs at whatever width the test harness happens to use",testId:"long-title-drawer",children:(a,p)=>{var r=T(),f=w(r);D(f,16,()=>Array(16),I,(b,H,v)=>{var c=pe();c.textContent=`Row ${v+1} of body content below the title.`,l(b,c)}),l(a,r)},$$slots:{default:!0}}),l(i,n)},X=i=>{var n=we(),e=w(n);A(e,{onclick:()=>g(E,!0),children:(a,p)=>{var r=C("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);x(o,{get open(){return $(E)},onOpenChange:a=>g(E,a,!0),title:"Short",testId:"short-drawer",children:(a,p)=>{var r=he();l(a,r)},$$slots:{default:!0}}),l(i,n)},Z=i=>{var n=ge(),e=w(n);A(e,{onclick:()=>g(N,!0),children:(a,p)=>{var r=C("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);x(o,{get open(){return $(N)},onOpenChange:a=>g(N,a,!0),title:"Selected item",handleStyle:"bar",testId:"bar-drawer",children:(a,p)=>{var r=T(),f=w(r);D(f,16,()=>Array(16),I,(b,H,v)=>{var c=ue();c.textContent=`Row ${v+1} of content — enough rows to push well past peek height.`,l(b,c)}),l(a,r)},$$slots:{default:!0}}),l(i,n)};let P=S(!1),R=S(!1),E=S(!1),N=S(!1),F=S(!1);var q=me(),G=w(q);B(G,{name:"Default (peek)",get template(){return J},play:async({canvasElement:i})=>{await m();const n=_(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("default-drawer");await t(e).toBeVisible(),await t(e).toHaveAttribute("data-drawer-state","peek")},parameters:{docs:{description:{story:`The showcase: rests OPEN, peeking at the default height — which is what this story was
    always described as showing ("peeks at the default height once opened"), while actually
    rendering nothing but a trigger button. The trigger stays in the frame so the closed→open
    path is still discoverable.

    Opened by the play(), NOT by a mount-time \`open = true\` — the difference matters and was
    reported live. Storybook's DOCS page stacks every story in this file into one scrolling
    document, and \`Drawer.Content\` portals to \`document.body\` as a viewport-fixed sheet: a
    drawer that opens on mount therefore lands ON TOP of the docs page rather than inside its
    own story block, covering the neighbouring stories AND holding
    \`document.body { pointer-events: none }\` for as long as it is open — measured before this
    change: the Drawer docs page rendered 2 floating sheets and a body that could not be
    scrolled or clicked at all. A play() is the right home for it because Storybook does NOT
    autoplay plays in docs mode (\`@storybook/addon-docs\`: \`autoplay ?? false\`, verified live —
    the interaction stories below all END open and all render CLOSED on the docs page). So the
    docs page stays calm and shows the trigger, while the story CANVAS — where the play does
    run — still rests on the open sheet. Same reasoning applies to \`Inspector\`'s overlay
    showcase; it deliberately does NOT apply to a panel that renders INLINE inside its story
    block (\`SqueezePanel\`, \`Inspector\`'s squeeze mode, \`MediaLightbox\`), which covers nothing
    and is left open at mount.`}},__svelteCsf:{rawCode:`<Button onclick={() => (defaultOpen = true)}>Open drawer</Button>
<Drawer
	open={defaultOpen}
	onOpenChange={(next) => (defaultOpen = next)}
	title="Selected item"
	testId="default-drawer"
>
	<!-- See \`template\`'s comment — enough rows to genuinely exceed peek height, so the
	     grip is enabled and the fade renders, i.e. the showcase shows the real thing. -->
	{#each Array(16) as _, i (i)}
		<p data-testid="row">
			Row {i + 1} of content — enough rows to push well past peek height.
		</p>
	{/each}
</Drawer>`}}});var L=u(G,2);B(L,{name:"Grip toggles peek and expand",get template(){return V},play:async({canvasElement:i})=>{await m();const n=_(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("demo-drawer");await t(e).toBeVisible(),await t(e).toHaveAttribute("data-drawer-state","peek"),await t(e.querySelector(".bg-muted")).toBeNull(),await t(e.querySelectorAll(".drag-handle")).toHaveLength(1),await k(e);const o=s.getByRole("button",{name:/Selected item — expand/i});await d.click(o),await y(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")});const a=s.getByRole("button",{name:/Selected item — collapse/i});await t(a).toHaveAttribute("aria-expanded","true"),await d.keyboard("{Escape}"),await y(async()=>{await t(s.queryByTestId("demo-drawer")).toBeNull()}),await m(),await d.click(n.getByRole("button",{name:"Open drawer"}));const p=await s.findByTestId("demo-drawer");await k(p),await d.click(s.getByRole("button",{name:/Selected item — expand/i})),await y(async()=>{await t(p).toHaveAttribute("data-drawer-state","expanded")})},parameters:{docs:{description:{story:'Interaction test: opening reveals the panel at peek state (data-drawer-state="peek"), the grip\ntoggles it to expanded (data-drawer-state="expanded"), and Escape closes it. `Drawer.Content`\nrenders in a portal outside `canvasElement` (vaul\'s own `Drawer.Portal`, defaulting to\n`document.body` since no `container` prop is given here) — use the global `screen` for it, same\npattern as `SearchOverlay.stories.svelte`\'s own portaled-Dialog stories; `canvas` (scoped to\n`canvasElement`) stays correct for the trigger button, which isn\'t portaled.'}},__svelteCsf:{rawCode:`<Button onclick={() => (open = true)}>Open drawer</Button>
<Drawer
	{open}
	onOpenChange={(next) => (open = next)}
	title="Selected item"
	testId="demo-drawer"
>
	<!-- Enough rows to reliably exceed peek height (default 0.26 of viewport) regardless of
	     the test harness's iframe size — expand-related stories below depend on this content
	     genuinely overflowing peek, or the grip is correctly \`disabled\` (see
	     "No fade when content already fits" for that opposite case) and never reaches
	     'expanded', which isn't what these stories are testing. -->
	{#each Array(16) as _, i (i)}
		<p data-testid="row">
			Row {i + 1} of content — enough rows to push well past peek height.
		</p>
	{/each}
</Drawer>`}}});var W=u(L,2);B(W,{name:"Close button closes from peek and from expanded",get template(){return V},play:async({canvasElement:i})=>{await m();const n=_(i);await d.click(n.getByRole("button",{name:"Open drawer"}));let e=await s.findByTestId("demo-drawer");await t(e).toHaveAttribute("data-drawer-state","peek"),await k(e),s.getByRole("button",{name:/Selected item — close/i}).focus(),await d.keyboard("{Enter}"),await y(async()=>{await t(s.queryByTestId("demo-drawer")).toBeNull()}),await m(),await d.click(n.getByRole("button",{name:"Open drawer"})),e=await s.findByTestId("demo-drawer"),await k(e),await d.click(s.getByRole("button",{name:/Selected item — expand/i})),await y(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")}),await d.click(s.getByRole("button",{name:/Selected item — close/i})),await y(async()=>{await t(s.queryByTestId("demo-drawer")).toBeNull()}),await m(),await d.click(n.getByRole("button",{name:"Open drawer"})),await t(await s.findByTestId("demo-drawer")).toBeVisible(),await t(s.getByRole("button",{name:/Selected item — close/i})).toBeVisible()},parameters:{docs:{description:{story:`Interaction test: the dedicated Close control (not the grip) reaches fully-closed directly from
EITHER snap state — this is the fix for "hard to close ... if fully expanded": the grip only
ever cycles peek<->expanded (see docs/kit/components/drawer.md's Invariants), so Close is the
one discoverable path back to closed regardless of where the panel currently is.`}},__svelteCsf:{rawCode:`<Button onclick={() => (open = true)}>Open drawer</Button>
<Drawer
	{open}
	onOpenChange={(next) => (open = next)}
	title="Selected item"
	testId="demo-drawer"
>
	<!-- Enough rows to reliably exceed peek height (default 0.26 of viewport) regardless of
	     the test harness's iframe size — expand-related stories below depend on this content
	     genuinely overflowing peek, or the grip is correctly \`disabled\` (see
	     "No fade when content already fits" for that opposite case) and never reaches
	     'expanded', which isn't what these stories are testing. -->
	{#each Array(16) as _, i (i)}
		<p data-testid="row">
			Row {i + 1} of content — enough rows to push well past peek height.
		</p>
	{/each}
</Drawer>`}}});var M=u(W,2);B(M,{name:"Long title clamps while peeking, full when expanded",get template(){return Q},play:async({canvasElement:i})=>{await m();const n=_(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("long-title-drawer");await t(e).toBeVisible();const o=e.querySelector(".drawer-title");if(!o)throw new Error("expected .drawer-title to exist");await t(o.textContent?.trim()).toContain("deliberately long title");const a=o.getBoundingClientRect().height,p=s.getByRole("button",{name:/expand/i});await k(e),await j(p),await d.keyboard("{Enter}"),await y(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")});const r=o.getBoundingClientRect().height;await t(r).toBeGreaterThan(a),await t(e).toBeVisible(),await t(e).toHaveAttribute("data-drawer-state","expanded")},parameters:{docs:{description:{story:"Interaction test: a long `title` string is visually clamped to one line while peeking (its\nrendered box stays short) and expands to its full, unclamped height once the grip is toggled —\nthe full text is present in the DOM throughout (never sliced), only the visual clamp changes."}},__svelteCsf:{rawCode:`<Button onclick={() => (longTitleOpen = true)}>Open drawer</Button>
<Drawer
	open={longTitleOpen}
	onOpenChange={(next) => (longTitleOpen = next)}
	title="A deliberately long title that wraps across more than one line while the drawer is peeking, to exercise the peek-time clamp — long enough to still wrap even at a wide desktop test viewport, not just a narrow mobile one, since this story runs at whatever width the test harness happens to use"
	testId="long-title-drawer"
>
	<!-- The title itself is clamped to one line while peeking (see the Invariants), so it
	     doesn't contribute much height at peek — enough body rows to independently exceed peek
	     height, or the grip is correctly \`disabled\` and this story's own expand assertion
	     never reaches 'expanded'. -->
	{#each Array(16) as _, i (i)}
		<p data-testid="row">Row {i + 1} of body content below the title.</p>
	{/each}
</Drawer>`}}});var z=u(M,2);B(z,{name:"No fade when content already fits",get template(){return X},play:async({canvasElement:i})=>{await m();const n=_(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("short-drawer");await t(e).toBeVisible(),await t(e.querySelector(".drawer-fade")).toBeNull();const o=s.getByRole("button",{name:/expand/i});await t(o).toBeDisabled(),await d.click(o),await t(e).toHaveAttribute("data-drawer-state","peek"),o.focus(),await t(o).not.toHaveFocus();const a=s.getByRole("button",{name:/close/i});await t(a).not.toBeDisabled(),await t(e).toBeVisible(),await t(e.querySelector(".drawer-fade")).toBeNull()},parameters:{docs:{description:{story:`Interaction test: when content is genuinely short enough to fit within the peek window, no fade
renders at all — a fade over nothing would be a false "there's more" affordance. This is also
where the interaction itself (not just the fade) must refuse to offer expansion: the grip is
\`disabled\` (blocks pointer AND keyboard activation, per docs/kit/components/drawer.md's
Invariants) and clicking it is a no-op — the gap this story used to leave uncovered, letting the
false-expand-affordance bug ship (grip stayed clickable, expanding to a mostly-blank sheet).`}},__svelteCsf:{rawCode:`<Button onclick={() => (shortOpen = true)}>Open drawer</Button>
<Drawer
	open={shortOpen}
	onOpenChange={(next) => (shortOpen = next)}
	title="Short"
	testId="short-drawer"
>
	<p>One short line.</p>
</Drawer>`}}});var ee=u(z,2);B(ee,{name:"handleStyle='bar' — same control, plain grabber-bar visual",get template(){return Z},play:async({canvasElement:i})=>{await m();const n=_(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("bar-drawer");await t(e).toBeVisible(),await t(e.querySelector(".bg-muted")).toBeNull(),await t(e.querySelectorAll(".drag-handle")).toHaveLength(1);const o=s.getByRole("button",{name:/Selected item — expand/i});await t(o.querySelector("svg")).toBeNull(),await t(o.querySelector(".drag-handle-bar")).not.toBeNull(),await k(e),await j(o),await d.keyboard("{Enter}"),await y(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")}),await t(e).toBeVisible(),await t(s.getByRole("button",{name:/Selected item — collapse/i}).querySelector("svg")).toBeNull()},parameters:{docs:{description:{story:`Interaction test: \`handleStyle="bar"\` swaps the grip's VISUAL only (a plain grabber-bar pill
instead of the GripHorizontal icon, matching shadcn/vaul's own decorative default look) — the
SAME real, accessible toggle underneath, still the only handle in the DOM (shadcn's own default
bar stays suppressed regardless of \`handleStyle\`).`}},__svelteCsf:{rawCode:`<Button onclick={() => (barOpen = true)}>Open drawer</Button>
<Drawer
	open={barOpen}
	onOpenChange={(next) => (barOpen = next)}
	title="Selected item"
	handleStyle="bar"
	testId="bar-drawer"
>
	<!-- See \`template\`'s own comment — enough rows to reliably exceed peek height so the grip
	     isn't correctly \`disabled\` for this expand-toggling story. -->
	{#each Array(16) as _, i (i)}
		<p data-testid="row">
			Row {i + 1} of content — enough rows to push well past peek height.
		</p>
	{/each}
</Drawer>`}}}),l(K,q),ae()}U.__docgen={data:[],name:"Drawer.stories.svelte"};const O=ne(U,re),He=["DefaultPeek","GripTogglesPeekAndExpand","CloseButtonClosesFromPeekAndFromExpanded","LongTitleClampsWhilePeekingFullWhenExpanded","NoFadeWhenContentAlreadyFits","HandleStyleBarSameControlPlainGrabberBarVisual"],Ve={...O.DefaultPeek,tags:["svelte-csf-v5"]},qe={...O.GripTogglesPeekAndExpand,tags:["svelte-csf-v5"]},Ge={...O.CloseButtonClosesFromPeekAndFromExpanded,tags:["svelte-csf-v5"]},Le={...O.LongTitleClampsWhilePeekingFullWhenExpanded,tags:["svelte-csf-v5"]},We={...O.NoFadeWhenContentAlreadyFits,tags:["svelte-csf-v5"]},Me={...O.HandleStyleBarSameControlPlainGrabberBarVisual,tags:["svelte-csf-v5"]};export{Ge as CloseButtonClosesFromPeekAndFromExpanded,Ve as DefaultPeek,qe as GripTogglesPeekAndExpand,Me as HandleStyleBarSameControlPlainGrabberBarVisual,Le as LongTitleClampsWhilePeekingFullWhenExpanded,We as NoFadeWhenContentAlreadyFits,He as __namedExportsOrder,re as default};
