import{p as J,f as w,a as g,s as h,b as d,c as Q,d as m,j as B,e as C,k as E,g as O}from"./iframe-DoUpZrGJ.js";import{c as X,d as Z}from"./create-runtime-stories-NOZuvjGf.js";import{D as x}from"./Drawer-DoueduXD.js";import{B as $}from"./button-wxigxQGf.js";import{e as P,i as R}from"./attributes-BHhJ46lX.js";import"./preload-helper-PPVm8Dsz.js";import"./this-TCGcLIVh.js";import"./clone-xnO-cBCG.js";import"./dialog-content-BiMlbtnH.js";import"./create-id-CrooffFS.js";import"./index-BTB4apso.js";import"./presence-manager.svelte-Dsv_QeDg.js";import"./scroll-lock-T6-_d3P2.js";import"./roving-focus-group-CJG8hiN5.js";import"./shadcn-utils-m4Kx4tR_.js";import"./DragHandle-DoXra5r9.js";import"./Icon-Bw7N4Q7c.js";import"./transitions-CU8B7knB.js";import"./x-CTzp0ZQ6.js";import"./index-B0rW8Cq9.js";const{expect:a,userEvent:l,waitFor:p,within:_,screen:o}=__STORYBOOK_MODULE_TEST__,ee={title:"Composites/Drawer",component:x,tags:["autodocs"]},{Story:y}=Z();var te=w('<p data-testid="row"></p>'),ae=w("<!> <!>",1),ne=w('<p data-testid="row"></p>'),re=w("<!> <!>",1),oe=w("<p>One short line.</p>"),se=w("<!> <!>",1),ie=w('<p data-testid="row"></p>'),le=w("<!> <!>",1),de=w("<!> <!> <!>  <!>  <!>  <!>",1);function V(M,j){J(j,!0);const S=i=>{var n=ae(),e=g(n);$(e,{onclick:()=>m(A,!0),children:(t,c)=>{var s=B("Open drawer");d(t,s)},$$slots:{default:!0}});var r=h(e,2);x(r,{get open(){return O(A)},onOpenChange:t=>m(A,t,!0),title:"Selected item",testId:"demo-drawer",children:(t,c)=>{var s=E(),v=g(s);P(v,16,()=>Array(16),R,(b,L,k)=>{var u=te();u.textContent=`Row ${k+1} of content — enough rows to push well past peek height.`,d(b,u)}),d(t,s)},$$slots:{default:!0}}),d(i,n)},z=i=>{var n=re(),e=g(n);$(e,{onclick:()=>m(T,!0),children:(t,c)=>{var s=B("Open drawer");d(t,s)},$$slots:{default:!0}});var r=h(e,2);x(r,{get open(){return O(T)},onOpenChange:t=>m(T,t,!0),title:"A deliberately long title that wraps across more than one line while the drawer is peeking, to exercise the peek-time clamp — long enough to still wrap even at a wide desktop test viewport, not just a narrow mobile one, since this story runs at whatever width the test harness happens to use",testId:"long-title-drawer",children:(t,c)=>{var s=E(),v=g(s);P(v,16,()=>Array(16),R,(b,L,k)=>{var u=ne();u.textContent=`Row ${k+1} of body content below the title.`,d(b,u)}),d(t,s)},$$slots:{default:!0}}),d(i,n)},U=i=>{var n=se(),e=g(n);$(e,{onclick:()=>m(D,!0),children:(t,c)=>{var s=B("Open drawer");d(t,s)},$$slots:{default:!0}});var r=h(e,2);x(r,{get open(){return O(D)},onOpenChange:t=>m(D,t,!0),title:"Short",testId:"short-drawer",children:(t,c)=>{var s=oe();d(t,s)},$$slots:{default:!0}}),d(i,n)},K=i=>{var n=le(),e=g(n);$(e,{onclick:()=>m(I,!0),children:(t,c)=>{var s=B("Open drawer");d(t,s)},$$slots:{default:!0}});var r=h(e,2);x(r,{get open(){return O(I)},onOpenChange:t=>m(I,t,!0),title:"Selected item",handleStyle:"bar",testId:"bar-drawer",children:(t,c)=>{var s=E(),v=g(s);P(v,16,()=>Array(16),R,(b,L,k)=>{var u=ie();u.textContent=`Row ${k+1} of content — enough rows to push well past peek height.`,d(b,u)}),d(t,s)},$$slots:{default:!0}}),d(i,n)};let A=C(!1),T=C(!1),D=C(!1),I=C(!1);var F=de(),N=g(F);y(N,{name:"Default (peek)",get template(){return S},parameters:{docs:{description:{story:"Default: closed until the trigger is clicked; peeks at the default height once opened."}},__svelteCsf:{rawCode:`<Button onclick={() => (open = true)}>Open drawer</Button>
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
</Drawer>`}}});var H=h(N,2);y(H,{name:"Grip toggles peek and expand",get template(){return S},play:async({canvasElement:i})=>{const n=_(i);await l.click(n.getByRole("button",{name:"Open drawer"}));const e=await o.findByTestId("demo-drawer");await a(e).toBeVisible(),await a(e).toHaveAttribute("data-drawer-state","peek"),await a(e.querySelector(".bg-muted")).toBeNull(),await a(e.querySelectorAll(".drag-handle")).toHaveLength(1);const r=o.getByRole("button",{name:/Selected item — expand/i});await l.click(r),await p(async()=>{await a(e).toHaveAttribute("data-drawer-state","expanded")});const t=o.getByRole("button",{name:/Selected item — collapse/i});await a(t).toHaveAttribute("aria-expanded","true"),await l.keyboard("{Escape}"),await p(async()=>{await a(o.queryByTestId("demo-drawer")).toBeNull()})},parameters:{docs:{description:{story:'Interaction test: opening reveals the panel at peek state (data-drawer-state="peek"), the grip\ntoggles it to expanded (data-drawer-state="expanded"), and Escape closes it. `Drawer.Content`\nrenders in a portal outside `canvasElement` (vaul\'s own `Drawer.Portal`, defaulting to\n`document.body` since no `container` prop is given here) — use the global `screen` for it, same\npattern as `SearchOverlay.stories.svelte`\'s own portaled-Dialog stories; `canvas` (scoped to\n`canvasElement`) stays correct for the trigger button, which isn\'t portaled.'}},__svelteCsf:{rawCode:`<Button onclick={() => (open = true)}>Open drawer</Button>
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
</Drawer>`}}});var q=h(H,2);y(q,{name:"Close button closes from peek and from expanded",get template(){return S},play:async({canvasElement:i})=>{const n=_(i);await l.click(n.getByRole("button",{name:"Open drawer"}));let e=await o.findByTestId("demo-drawer");await a(e).toHaveAttribute("data-drawer-state","peek"),await l.click(o.getByRole("button",{name:/Selected item — close/i})),await p(async()=>{await a(o.queryByTestId("demo-drawer")).toBeNull()}),await l.click(n.getByRole("button",{name:"Open drawer"})),e=await o.findByTestId("demo-drawer"),await l.click(o.getByRole("button",{name:/Selected item — expand/i})),await p(async()=>{await a(e).toHaveAttribute("data-drawer-state","expanded")}),await l.click(o.getByRole("button",{name:/Selected item — close/i})),await p(async()=>{await a(o.queryByTestId("demo-drawer")).toBeNull()})},parameters:{docs:{description:{story:`Interaction test: the dedicated Close control (not the grip) reaches fully-closed directly from
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
</Drawer>`}}});var G=h(q,2);y(G,{name:"Long title clamps while peeking, full when expanded",get template(){return z},play:async({canvasElement:i})=>{const n=_(i);await l.click(n.getByRole("button",{name:"Open drawer"}));const e=await o.findByTestId("long-title-drawer");await a(e).toBeVisible();const r=e.querySelector(".drawer-title");if(!r)throw new Error("expected .drawer-title to exist");await a(r.textContent?.trim()).toContain("deliberately long title");const t=r.getBoundingClientRect().height,c=o.getByRole("button",{name:/expand/i});await l.click(c),await p(async()=>{await a(e).toHaveAttribute("data-drawer-state","expanded")});const s=r.getBoundingClientRect().height;await a(s).toBeGreaterThan(t),await l.keyboard("{Escape}"),await p(async()=>{await a(o.queryByTestId("long-title-drawer")).toBeNull()})},parameters:{docs:{description:{story:"Interaction test: a long `title` string is visually clamped to one line while peeking (its\nrendered box stays short) and expands to its full, unclamped height once the grip is toggled —\nthe full text is present in the DOM throughout (never sliced), only the visual clamp changes."}},__svelteCsf:{rawCode:`<Button onclick={() => (longTitleOpen = true)}>Open drawer</Button>
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
</Drawer>`}}});var W=h(G,2);y(W,{name:"No fade when content already fits",get template(){return U},play:async({canvasElement:i})=>{const n=_(i);await l.click(n.getByRole("button",{name:"Open drawer"}));const e=await o.findByTestId("short-drawer");await a(e).toBeVisible(),await a(e.querySelector(".drawer-fade")).toBeNull();const r=o.getByRole("button",{name:/expand/i});await a(r).toBeDisabled(),await l.click(r),await a(e).toHaveAttribute("data-drawer-state","peek");const t=o.getByRole("button",{name:/close/i});await a(t).not.toBeDisabled(),await l.keyboard("{Escape}"),await p(async()=>{await a(o.queryByTestId("short-drawer")).toBeNull()})},parameters:{docs:{description:{story:`Interaction test: when content is genuinely short enough to fit within the peek window, no fade
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
</Drawer>`}}});var Y=h(W,2);y(Y,{name:"handleStyle='bar' — same control, plain grabber-bar visual",get template(){return K},play:async({canvasElement:i})=>{const n=_(i);await l.click(n.getByRole("button",{name:"Open drawer"}));const e=await o.findByTestId("bar-drawer");await a(e).toBeVisible(),await a(e.querySelector(".bg-muted")).toBeNull(),await a(e.querySelectorAll(".drag-handle")).toHaveLength(1);const r=o.getByRole("button",{name:/Selected item — expand/i});await a(r.querySelector("svg")).toBeNull(),await a(r.querySelector(".drag-handle-bar")).not.toBeNull(),await l.click(r),await p(async()=>{await a(e).toHaveAttribute("data-drawer-state","expanded")}),await l.keyboard("{Escape}"),await p(async()=>{await a(o.queryByTestId("bar-drawer")).toBeNull()})},parameters:{docs:{description:{story:`Interaction test: \`handleStyle="bar"\` swaps the grip's VISUAL only (a plain grabber-bar pill
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
</Drawer>`}}}),d(M,F),Q()}V.__docgen={data:[],name:"Drawer.stories.svelte"};const f=X(V,ee),Te=["DefaultPeek","GripTogglesPeekAndExpand","CloseButtonClosesFromPeekAndFromExpanded","LongTitleClampsWhilePeekingFullWhenExpanded","NoFadeWhenContentAlreadyFits","HandleStyleBarSameControlPlainGrabberBarVisual"],De={...f.DefaultPeek,tags:["svelte-csf-v5"]},Ie={...f.GripTogglesPeekAndExpand,tags:["svelte-csf-v5"]},Ee={...f.CloseButtonClosesFromPeekAndFromExpanded,tags:["svelte-csf-v5"]},Pe={...f.LongTitleClampsWhilePeekingFullWhenExpanded,tags:["svelte-csf-v5"]},Re={...f.NoFadeWhenContentAlreadyFits,tags:["svelte-csf-v5"]},Fe={...f.HandleStyleBarSameControlPlainGrabberBarVisual,tags:["svelte-csf-v5"]};export{Ee as CloseButtonClosesFromPeekAndFromExpanded,De as DefaultPeek,Ie as GripTogglesPeekAndExpand,Fe as HandleStyleBarSameControlPlainGrabberBarVisual,Pe as LongTitleClampsWhilePeekingFullWhenExpanded,Re as NoFadeWhenContentAlreadyFits,Te as __namedExportsOrder,ee as default};
