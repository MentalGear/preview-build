import{p as te,f as h,a as w,s as u,b as l,c as ae,d as g,j as O,e as C,k as T,g as S}from"./iframe-DzidZyLN.js";import{c as ne,d as oe}from"./create-runtime-stories-BaZtXNeX.js";import{D as B}from"./Drawer-rPI5-000.js";import{B as $}from"./button-p2zKlEBy.js";import{a as m,b as A,f as j}from"./storyWait-OrdjTAsd.js";import{e as D,i as I}from"./attributes-2qlF22F7.js";import"./preload-helper-PPVm8Dsz.js";import"./this-Cg6E7OZp.js";import"./clone-CAN9Qedy.js";import"./dialog-content-JUVcdJ-i.js";import"./create-id-Cey2Ov5_.js";import"./index-KTuzOKBu.js";import"./presence-manager.svelte-OsP6oOBu.js";import"./scroll-lock-BxDkZ5sk.js";import"./roving-focus-group-Bzp8lELX.js";import"./shadcn-utils-CYzWa6Y_.js";import"./DragHandle-DqQxZ0h0.js";import"./Icon-B9aG-EQh.js";import"./transitions-DABabNXf.js";import"./x-OzUfUF-2.js";import"./index-CMA7DuNo.js";const{expect:t,userEvent:d,waitFor:b,within:k,screen:s}=__STORYBOOK_MODULE_TEST__,re={title:"Composites/Drawer",component:B,tags:["autodocs"]},{Story:_}=oe();var se=h('<p data-testid="row"></p>'),ie=h("<!> <!>",1),le=h('<p data-testid="row"></p>'),de=h("<!> <!>",1),pe=h('<p data-testid="row"></p>'),ce=h("<!> <!>",1),he=h("<p>One short line.</p>"),we=h("<!> <!>",1),ue=h('<p data-testid="row"></p>'),ge=h("<!> <!>",1),me=h("<!> <!> <!>  <!>  <!>  <!>",1);function U(K,Y){te(Y,!0);const V=i=>{var n=ie(),e=w(n);$(e,{onclick:()=>g(P,!0),children:(a,p)=>{var r=O("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);B(o,{get open(){return S(P)},onOpenChange:a=>g(P,a,!0),title:"Selected item",testId:"demo-drawer",children:(a,p)=>{var r=T(),y=w(r);D(y,16,()=>Array(16),I,(f,H,v)=>{var c=se();c.textContent=`Row ${v+1} of content — enough rows to push well past peek height.`,l(f,c)}),l(a,r)},$$slots:{default:!0}}),l(i,n)},J=i=>{var n=de(),e=w(n);$(e,{onclick:()=>g(F,!0),children:(a,p)=>{var r=O("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);B(o,{get open(){return S(F)},onOpenChange:a=>g(F,a,!0),title:"Selected item",testId:"default-drawer",children:(a,p)=>{var r=T(),y=w(r);D(y,16,()=>Array(16),I,(f,H,v)=>{var c=le();c.textContent=`Row ${v+1} of content — enough rows to push well past peek height.`,l(f,c)}),l(a,r)},$$slots:{default:!0}}),l(i,n)},Q=i=>{var n=ce(),e=w(n);$(e,{onclick:()=>g(E,!0),children:(a,p)=>{var r=O("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);B(o,{get open(){return S(E)},onOpenChange:a=>g(E,a,!0),title:"A deliberately long title that wraps across more than one line while the drawer is peeking, to exercise the peek-time clamp — long enough to still wrap even at a wide desktop test viewport, not just a narrow mobile one, since this story runs at whatever width the test harness happens to use",testId:"long-title-drawer",children:(a,p)=>{var r=T(),y=w(r);D(y,16,()=>Array(16),I,(f,H,v)=>{var c=pe();c.textContent=`Row ${v+1} of body content below the title.`,l(f,c)}),l(a,r)},$$slots:{default:!0}}),l(i,n)},X=i=>{var n=we(),e=w(n);$(e,{onclick:()=>g(R,!0),children:(a,p)=>{var r=O("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);B(o,{get open(){return S(R)},onOpenChange:a=>g(R,a,!0),title:"Short",testId:"short-drawer",children:(a,p)=>{var r=he();l(a,r)},$$slots:{default:!0}}),l(i,n)},Z=i=>{var n=ge(),e=w(n);$(e,{onclick:()=>g(N,!0),children:(a,p)=>{var r=O("Open drawer");l(a,r)},$$slots:{default:!0}});var o=u(e,2);B(o,{get open(){return S(N)},onOpenChange:a=>g(N,a,!0),title:"Selected item",handleStyle:"bar",testId:"bar-drawer",children:(a,p)=>{var r=T(),y=w(r);D(y,16,()=>Array(16),I,(f,H,v)=>{var c=ue();c.textContent=`Row ${v+1} of content — enough rows to push well past peek height.`,l(f,c)}),l(a,r)},$$slots:{default:!0}}),l(i,n)};let P=C(!1),E=C(!1),R=C(!1),N=C(!1),F=C(!1);var q=me(),G=w(q);_(G,{name:"Default (peek)",get template(){return J},play:async({canvasElement:i})=>{await m();const n=k(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("default-drawer");await t(e).toBeVisible(),await t(e).toHaveAttribute("data-drawer-state","peek")},parameters:{docs:{description:{story:`The showcase: rests OPEN, peeking at the default height — which is what this story was
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
</Drawer>`}}});var L=u(G,2);_(L,{name:"Grip toggles peek and expand",get template(){return V},play:async({canvasElement:i})=>{await m();const n=k(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("demo-drawer");await t(e).toBeVisible(),await t(e).toHaveAttribute("data-drawer-state","peek"),await t(e.querySelector(".bg-muted")).toBeNull(),await t(e.querySelectorAll(".drag-handle")).toHaveLength(1),await A(e);const o=s.getByRole("button",{name:/Selected item — expand/i});await d.click(o),await b(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")});const a=s.getByRole("button",{name:/Selected item — collapse/i});await t(a).toHaveAttribute("aria-expanded","true"),await d.keyboard("{Escape}"),await b(async()=>{await t(s.queryByTestId("demo-drawer")).toBeNull()})},parameters:{docs:{description:{story:'Interaction test: opening reveals the panel at peek state (data-drawer-state="peek"), the grip\ntoggles it to expanded (data-drawer-state="expanded"), and Escape closes it. `Drawer.Content`\nrenders in a portal outside `canvasElement` (vaul\'s own `Drawer.Portal`, defaulting to\n`document.body` since no `container` prop is given here) — use the global `screen` for it, same\npattern as `SearchOverlay.stories.svelte`\'s own portaled-Dialog stories; `canvas` (scoped to\n`canvasElement`) stays correct for the trigger button, which isn\'t portaled.'}},__svelteCsf:{rawCode:`<Button onclick={() => (open = true)}>Open drawer</Button>
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
</Drawer>`}}});var W=u(L,2);_(W,{name:"Close button closes from peek and from expanded",get template(){return V},play:async({canvasElement:i})=>{await m();const n=k(i);await d.click(n.getByRole("button",{name:"Open drawer"}));let e=await s.findByTestId("demo-drawer");await t(e).toHaveAttribute("data-drawer-state","peek"),await A(e),s.getByRole("button",{name:/Selected item — close/i}).focus(),await d.keyboard("{Enter}"),await b(async()=>{await t(s.queryByTestId("demo-drawer")).toBeNull()}),await m(),await d.click(n.getByRole("button",{name:"Open drawer"})),e=await s.findByTestId("demo-drawer"),await A(e),await d.click(s.getByRole("button",{name:/Selected item — expand/i})),await b(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")}),await d.click(s.getByRole("button",{name:/Selected item — close/i})),await b(async()=>{await t(s.queryByTestId("demo-drawer")).toBeNull()}),await m(),await d.click(n.getByRole("button",{name:"Open drawer"})),await t(await s.findByTestId("demo-drawer")).toBeVisible(),await t(s.getByRole("button",{name:/Selected item — close/i})).toBeVisible()},parameters:{docs:{description:{story:`Interaction test: the dedicated Close control (not the grip) reaches fully-closed directly from
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
</Drawer>`}}});var M=u(W,2);_(M,{name:"Long title clamps while peeking, full when expanded",get template(){return Q},play:async({canvasElement:i})=>{await m();const n=k(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("long-title-drawer");await t(e).toBeVisible();const o=e.querySelector(".drawer-title");if(!o)throw new Error("expected .drawer-title to exist");await t(o.textContent?.trim()).toContain("deliberately long title");const a=o.getBoundingClientRect().height,p=s.getByRole("button",{name:/expand/i});await A(e),await j(p),await d.keyboard("{Enter}"),await b(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")});const r=o.getBoundingClientRect().height;await t(r).toBeGreaterThan(a),await t(e).toBeVisible(),await t(e).toHaveAttribute("data-drawer-state","expanded")},parameters:{docs:{description:{story:"Interaction test: a long `title` string is visually clamped to one line while peeking (its\nrendered box stays short) and expands to its full, unclamped height once the grip is toggled —\nthe full text is present in the DOM throughout (never sliced), only the visual clamp changes."}},__svelteCsf:{rawCode:`<Button onclick={() => (longTitleOpen = true)}>Open drawer</Button>
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
</Drawer>`}}});var z=u(M,2);_(z,{name:"No fade when content already fits",get template(){return X},play:async({canvasElement:i})=>{await m();const n=k(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("short-drawer");await t(e).toBeVisible(),await t(e.querySelector(".drawer-fade")).toBeNull();const o=s.getByRole("button",{name:/expand/i});await t(o).toBeDisabled(),await d.click(o),await t(e).toHaveAttribute("data-drawer-state","peek"),o.focus(),await t(o).not.toHaveFocus();const a=s.getByRole("button",{name:/close/i});await t(a).not.toBeDisabled(),await t(e).toBeVisible(),await t(e.querySelector(".drawer-fade")).toBeNull()},parameters:{docs:{description:{story:`Interaction test: when content is genuinely short enough to fit within the peek window, no fade
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
</Drawer>`}}});var ee=u(z,2);_(ee,{name:"handleStyle='bar' — same control, plain grabber-bar visual",get template(){return Z},play:async({canvasElement:i})=>{await m();const n=k(i);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("bar-drawer");await t(e).toBeVisible(),await t(e.querySelector(".bg-muted")).toBeNull(),await t(e.querySelectorAll(".drag-handle")).toHaveLength(1);const o=s.getByRole("button",{name:/Selected item — expand/i});await t(o.querySelector("svg")).toBeNull(),await t(o.querySelector(".drag-handle-bar")).not.toBeNull(),await A(e),await j(o),await d.keyboard("{Enter}"),await b(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")}),await t(e).toBeVisible(),await t(s.getByRole("button",{name:/Selected item — collapse/i}).querySelector("svg")).toBeNull()},parameters:{docs:{description:{story:`Interaction test: \`handleStyle="bar"\` swaps the grip's VISUAL only (a plain grabber-bar pill
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
</Drawer>`}}}),l(K,q),ae()}U.__docgen={data:[],name:"Drawer.stories.svelte"};const x=ne(U,re),He=["DefaultPeek","GripTogglesPeekAndExpand","CloseButtonClosesFromPeekAndFromExpanded","LongTitleClampsWhilePeekingFullWhenExpanded","NoFadeWhenContentAlreadyFits","HandleStyleBarSameControlPlainGrabberBarVisual"],Ve={...x.DefaultPeek,tags:["svelte-csf-v5"]},qe={...x.GripTogglesPeekAndExpand,tags:["svelte-csf-v5"]},Ge={...x.CloseButtonClosesFromPeekAndFromExpanded,tags:["svelte-csf-v5"]},Le={...x.LongTitleClampsWhilePeekingFullWhenExpanded,tags:["svelte-csf-v5"]},We={...x.NoFadeWhenContentAlreadyFits,tags:["svelte-csf-v5"]},Me={...x.HandleStyleBarSameControlPlainGrabberBarVisual,tags:["svelte-csf-v5"]};export{Ge as CloseButtonClosesFromPeekAndFromExpanded,Ve as DefaultPeek,qe as GripTogglesPeekAndExpand,Me as HandleStyleBarSameControlPlainGrabberBarVisual,Le as LongTitleClampsWhilePeekingFullWhenExpanded,We as NoFadeWhenContentAlreadyFits,He as __namedExportsOrder,re as default};
