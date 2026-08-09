import{p as Z,f as h,a as w,s as u,b as i,c as ee,d as g,j as x,e as O,k as A,g as C}from"./iframe-BObyFMmj.js";import{c as te,d as ae}from"./create-runtime-stories-Bs43Unf1.js";import{D as k}from"./Drawer-BkFl9peF.js";import{B as $}from"./button-VQMeRuZO.js";import{e as T,i as P}from"./attributes-BRafB15r.js";import"./preload-helper-PPVm8Dsz.js";import"./this-N1B6LQnn.js";import"./clone-BzU-vl6c.js";import"./dialog-content-DnmznmCe.js";import"./create-id-CxPYryvW.js";import"./index-B_xUPxsS.js";import"./presence-manager.svelte-DYyAkylL.js";import"./scroll-lock-B1BIWH-h.js";import"./roving-focus-group-BUXbsJEJ.js";import"./shadcn-utils-ju7mLmNt.js";import"./DragHandle-xEYEbvM8.js";import"./Icon-CDUF8iXf.js";import"./transitions-CnD5XcuO.js";import"./x-CLZHoJdq.js";import"./index-rKKRQSYo.js";const{expect:t,userEvent:d,waitFor:m,within:S,screen:s}=__STORYBOOK_MODULE_TEST__,ne={title:"Composites/Drawer",component:k,tags:["autodocs"]},{Story:_}=ae();async function y(){await m(()=>t(document.body.style.pointerEvents).not.toBe("none"))}var oe=h('<p data-testid="row"></p>'),re=h("<!> <!>",1),se=h('<p data-testid="row"></p>'),ie=h("<!> <!>",1),le=h('<p data-testid="row"></p>'),de=h("<!> <!>",1),pe=h("<p>One short line.</p>"),ce=h("<!> <!>",1),he=h('<p data-testid="row"></p>'),we=h("<!> <!>",1),ue=h("<!> <!> <!>  <!>  <!>  <!>",1);function j(z,U){Z(U,!0);const N=l=>{var n=re(),e=w(n);$(e,{onclick:()=>g(R,!0),children:(a,p)=>{var r=x("Open drawer");i(a,r)},$$slots:{default:!0}});var o=u(e,2);k(o,{get open(){return C(R)},onOpenChange:a=>g(R,a,!0),title:"Selected item",testId:"demo-drawer",children:(a,p)=>{var r=A(),f=w(r);T(f,16,()=>Array(16),P,(v,H,b)=>{var c=oe();c.textContent=`Row ${b+1} of content — enough rows to push well past peek height.`,i(v,c)}),i(a,r)},$$slots:{default:!0}}),i(l,n)},K=l=>{var n=ie(),e=w(n);$(e,{onclick:()=>g(F,!0),children:(a,p)=>{var r=x("Open drawer");i(a,r)},$$slots:{default:!0}});var o=u(e,2);k(o,{get open(){return C(F)},onOpenChange:a=>g(F,a,!0),title:"Selected item",testId:"default-drawer",children:(a,p)=>{var r=A(),f=w(r);T(f,16,()=>Array(16),P,(v,H,b)=>{var c=se();c.textContent=`Row ${b+1} of content — enough rows to push well past peek height.`,i(v,c)}),i(a,r)},$$slots:{default:!0}}),i(l,n)},Y=l=>{var n=de(),e=w(n);$(e,{onclick:()=>g(E,!0),children:(a,p)=>{var r=x("Open drawer");i(a,r)},$$slots:{default:!0}});var o=u(e,2);k(o,{get open(){return C(E)},onOpenChange:a=>g(E,a,!0),title:"A deliberately long title that wraps across more than one line while the drawer is peeking, to exercise the peek-time clamp — long enough to still wrap even at a wide desktop test viewport, not just a narrow mobile one, since this story runs at whatever width the test harness happens to use",testId:"long-title-drawer",children:(a,p)=>{var r=A(),f=w(r);T(f,16,()=>Array(16),P,(v,H,b)=>{var c=le();c.textContent=`Row ${b+1} of body content below the title.`,i(v,c)}),i(a,r)},$$slots:{default:!0}}),i(l,n)},J=l=>{var n=ce(),e=w(n);$(e,{onclick:()=>g(I,!0),children:(a,p)=>{var r=x("Open drawer");i(a,r)},$$slots:{default:!0}});var o=u(e,2);k(o,{get open(){return C(I)},onOpenChange:a=>g(I,a,!0),title:"Short",testId:"short-drawer",children:(a,p)=>{var r=pe();i(a,r)},$$slots:{default:!0}}),i(l,n)},Q=l=>{var n=we(),e=w(n);$(e,{onclick:()=>g(D,!0),children:(a,p)=>{var r=x("Open drawer");i(a,r)},$$slots:{default:!0}});var o=u(e,2);k(o,{get open(){return C(D)},onOpenChange:a=>g(D,a,!0),title:"Selected item",handleStyle:"bar",testId:"bar-drawer",children:(a,p)=>{var r=A(),f=w(r);T(f,16,()=>Array(16),P,(v,H,b)=>{var c=he();c.textContent=`Row ${b+1} of content — enough rows to push well past peek height.`,i(v,c)}),i(a,r)},$$slots:{default:!0}}),i(l,n)};let R=O(!1),E=O(!1),I=O(!1),D=O(!1),F=O(!0);var V=ue(),q=w(V);_(q,{name:"Default (peek)",get template(){return K},parameters:{docs:{description:{story:`The showcase: OPEN at rest, peeking at the default height — which is what this story was
    always described as showing ("peeks at the default height once opened"), while actually
    rendering nothing but a trigger button. The trigger stays in the frame so the closed→open
    path is still discoverable.`}},__svelteCsf:{rawCode:`<Button onclick={() => (defaultOpen = true)}>Open drawer</Button>
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
</Drawer>`}}});var G=u(q,2);_(G,{name:"Grip toggles peek and expand",get template(){return N},play:async({canvasElement:l})=>{await y();const n=S(l);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("demo-drawer");await t(e).toBeVisible(),await t(e).toHaveAttribute("data-drawer-state","peek"),await t(e.querySelector(".bg-muted")).toBeNull(),await t(e.querySelectorAll(".drag-handle")).toHaveLength(1);const o=s.getByRole("button",{name:/Selected item — expand/i});await d.click(o),await m(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")});const a=s.getByRole("button",{name:/Selected item — collapse/i});await t(a).toHaveAttribute("aria-expanded","true"),await d.keyboard("{Escape}"),await m(async()=>{await t(s.queryByTestId("demo-drawer")).toBeNull()}),await y(),await d.click(n.getByRole("button",{name:"Open drawer"}));const p=await s.findByTestId("demo-drawer");await d.click(s.getByRole("button",{name:/Selected item — expand/i})),await m(async()=>{await t(p).toHaveAttribute("data-drawer-state","expanded")})},parameters:{docs:{description:{story:'Interaction test: opening reveals the panel at peek state (data-drawer-state="peek"), the grip\ntoggles it to expanded (data-drawer-state="expanded"), and Escape closes it. `Drawer.Content`\nrenders in a portal outside `canvasElement` (vaul\'s own `Drawer.Portal`, defaulting to\n`document.body` since no `container` prop is given here) — use the global `screen` for it, same\npattern as `SearchOverlay.stories.svelte`\'s own portaled-Dialog stories; `canvas` (scoped to\n`canvasElement`) stays correct for the trigger button, which isn\'t portaled.'}},__svelteCsf:{rawCode:`<Button onclick={() => (open = true)}>Open drawer</Button>
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
</Drawer>`}}});var W=u(G,2);_(W,{name:"Close button closes from peek and from expanded",get template(){return N},play:async({canvasElement:l})=>{await y();const n=S(l);await d.click(n.getByRole("button",{name:"Open drawer"}));let e=await s.findByTestId("demo-drawer");await t(e).toHaveAttribute("data-drawer-state","peek"),s.getByRole("button",{name:/Selected item — close/i}).focus(),await d.keyboard("{Enter}"),await m(async()=>{await t(s.queryByTestId("demo-drawer")).toBeNull()}),await y(),await d.click(n.getByRole("button",{name:"Open drawer"})),e=await s.findByTestId("demo-drawer"),await d.click(s.getByRole("button",{name:/Selected item — expand/i})),await m(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")}),await d.click(s.getByRole("button",{name:/Selected item — close/i})),await m(async()=>{await t(s.queryByTestId("demo-drawer")).toBeNull()}),await y(),await d.click(n.getByRole("button",{name:"Open drawer"})),await t(await s.findByTestId("demo-drawer")).toBeVisible(),await t(s.getByRole("button",{name:/Selected item — close/i})).toBeVisible()},parameters:{docs:{description:{story:`Interaction test: the dedicated Close control (not the grip) reaches fully-closed directly from
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
</Drawer>`}}});var L=u(W,2);_(L,{name:"Long title clamps while peeking, full when expanded",get template(){return Y},play:async({canvasElement:l})=>{await y();const n=S(l);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("long-title-drawer");await t(e).toBeVisible();const o=e.querySelector(".drawer-title");if(!o)throw new Error("expected .drawer-title to exist");await t(o.textContent?.trim()).toContain("deliberately long title");const a=o.getBoundingClientRect().height;s.getByRole("button",{name:/expand/i}).focus(),await d.keyboard("{Enter}"),await m(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")});const r=o.getBoundingClientRect().height;await t(r).toBeGreaterThan(a),await t(e).toBeVisible(),await t(e).toHaveAttribute("data-drawer-state","expanded")},parameters:{docs:{description:{story:"Interaction test: a long `title` string is visually clamped to one line while peeking (its\nrendered box stays short) and expands to its full, unclamped height once the grip is toggled —\nthe full text is present in the DOM throughout (never sliced), only the visual clamp changes."}},__svelteCsf:{rawCode:`<Button onclick={() => (longTitleOpen = true)}>Open drawer</Button>
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
</Drawer>`}}});var M=u(L,2);_(M,{name:"No fade when content already fits",get template(){return J},play:async({canvasElement:l})=>{await y();const n=S(l);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("short-drawer");await t(e).toBeVisible(),await t(e.querySelector(".drawer-fade")).toBeNull();const o=s.getByRole("button",{name:/expand/i});await t(o).toBeDisabled(),await d.click(o),await t(e).toHaveAttribute("data-drawer-state","peek"),o.focus(),await t(o).not.toHaveFocus();const a=s.getByRole("button",{name:/close/i});await t(a).not.toBeDisabled(),await t(e).toBeVisible(),await t(e.querySelector(".drawer-fade")).toBeNull()},parameters:{docs:{description:{story:`Interaction test: when content is genuinely short enough to fit within the peek window, no fade
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
</Drawer>`}}});var X=u(M,2);_(X,{name:"handleStyle='bar' — same control, plain grabber-bar visual",get template(){return Q},play:async({canvasElement:l})=>{await y();const n=S(l);await d.click(n.getByRole("button",{name:"Open drawer"}));const e=await s.findByTestId("bar-drawer");await t(e).toBeVisible(),await t(e.querySelector(".bg-muted")).toBeNull(),await t(e.querySelectorAll(".drag-handle")).toHaveLength(1);const o=s.getByRole("button",{name:/Selected item — expand/i});await t(o.querySelector("svg")).toBeNull(),await t(o.querySelector(".drag-handle-bar")).not.toBeNull(),o.focus(),await d.keyboard("{Enter}"),await m(async()=>{await t(e).toHaveAttribute("data-drawer-state","expanded")}),await t(e).toBeVisible(),await t(s.getByRole("button",{name:/Selected item — collapse/i}).querySelector("svg")).toBeNull()},parameters:{docs:{description:{story:`Interaction test: \`handleStyle="bar"\` swaps the grip's VISUAL only (a plain grabber-bar pill
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
</Drawer>`}}}),i(z,V),ee()}j.__docgen={data:[],name:"Drawer.stories.svelte"};const B=te(j,ne),De=["DefaultPeek","GripTogglesPeekAndExpand","CloseButtonClosesFromPeekAndFromExpanded","LongTitleClampsWhilePeekingFullWhenExpanded","NoFadeWhenContentAlreadyFits","HandleStyleBarSameControlPlainGrabberBarVisual"],Fe={...B.DefaultPeek,tags:["svelte-csf-v5"]},He={...B.GripTogglesPeekAndExpand,tags:["svelte-csf-v5"]},Ne={...B.CloseButtonClosesFromPeekAndFromExpanded,tags:["svelte-csf-v5"]},Ve={...B.LongTitleClampsWhilePeekingFullWhenExpanded,tags:["svelte-csf-v5"]},qe={...B.NoFadeWhenContentAlreadyFits,tags:["svelte-csf-v5"]},Ge={...B.HandleStyleBarSameControlPlainGrabberBarVisual,tags:["svelte-csf-v5"]};export{Ne as CloseButtonClosesFromPeekAndFromExpanded,Fe as DefaultPeek,He as GripTogglesPeekAndExpand,Ge as HandleStyleBarSameControlPlainGrabberBarVisual,Ve as LongTitleClampsWhilePeekingFullWhenExpanded,qe as NoFadeWhenContentAlreadyFits,De as __namedExportsOrder,ne as default};
