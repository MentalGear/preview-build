import{p as me,n as J,H as ne,P as he,f as c,o as oe,s as u,x as Se,t as Q,Y as ue,b as i,c as ge,g as s,e as O,d as N,h,u as L,Z as be,a as _e,i as le}from"./iframe-CneAOyCj.js";import{a as pe,s as ae,c as Ne,d as Te}from"./create-runtime-stories-DKTrIZX9.js";import{b as se,s as I,e as ie}from"./attributes-DAgOpy5t.js";import{b as Ae}from"./this-BEEmHngT.js";import{c as ve}from"./shadcn-utils-Chv0K3Z4.js";import{p as fe}from"./reducedMotion.svelte-LHpnMWEc.js";import{g as Le,s as He}from"./scrollMemory-qOkQMXt7.js";import{N as ye}from"./NavArrow-BxxmbGrI.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-6JA8irOf.js";import"./transitions-DA1CuYmT.js";import"./chevron-right-Kyxq5hhr.js";var Be=c("<div></div> <div></div>",1),$e=c("<div><!> <!> <!>  <div><!></div></div>");function v(W,l){me(l,!0);let _=J(l,"edgeFade",3,!0),C=J(l,"arrows",3,!0),k=J(l,"pageBy",3,.8),m=J(l,"ariaHidden",3,!1),$=J(l,"edgeInset",3,0);ne(()=>{});let d=O(void 0),H=O(0),B=O(0),M=O(0);const R=L(()=>l.contentWidth??s(M)),P=L(()=>s(B)>$()+2),F=L(()=>s(H)>0&&s(B)<s(R)-s(H)-$()-2);function D(n=!0){s(d)&&(N(B,s(d).scrollLeft,!0),l.contentWidth==null&&N(M,s(d).scrollWidth,!0),n&&l.onScroll?.({scrollLeft:s(B),trackWidth:s(H),scrollWidth:s(R)}))}function Y(){D(),s(d)&&l.scrollKey&&He(l.scrollKey,s(B))}he(()=>{const n=s(d);if(!n)return;N(H,n.clientWidth,!0),ne(()=>D(!l.scrollKey));let f=0;const x=new ResizeObserver(()=>{f||(f=requestAnimationFrame(()=>{f=0,N(H,n.clientWidth,!0),Y()}))});return x.observe(n),()=>{f&&cancelAnimationFrame(f),x.disconnect()}});let j;he(()=>{!l.scrollKey||!s(d)||l.scrollKey!==j&&(s(d).scrollLeft=Le(l.scrollKey)??0,j=l.scrollKey,ne(()=>D()))});function E(n){if(!s(d))return;const f=n===1?s(d).scrollWidth-s(d).clientWidth-s(d).scrollLeft:s(d).scrollLeft,x=Math.min(s(d).clientWidth*k(),Math.max(0,f));s(d).scrollBy({left:n*x,behavior:fe()?"auto":"smooth"})}function z(n){s(d)&&(n.preventDefault(),s(d).scrollLeft+=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY)}function ee(n){if(s(d)&&Math.abs(n.deltaY)>Math.abs(n.deltaX)){if(n.deltaY>0&&!s(F)||n.deltaY<0&&!s(P))return;n.preventDefault(),s(d).scrollLeft+=n.deltaY}}function te(n){n.metaKey||n.ctrlKey||n.altKey||n.target?.closest("input, textarea, select, [contenteditable]")||(n.key==="ArrowRight"?(n.preventDefault(),E(1)):n.key==="ArrowLeft"&&(n.preventDefault(),E(-1)))}let G=O(!1),r=O(!1);function t(n){n.preventDefault()}function e(n,f={}){if(!s(d))return;const x=Math.max(0,n-s(d).clientWidth/2);s(d).scrollTo({left:x,behavior:f.jump||fe()?"auto":"smooth"})}var o={centerOn:e},T=$e(),K=h(T);{var A=n=>{var f=Be(),x=_e(f);let q;var We=u(x,2);let de;Q(()=>{q=ae(x,1,"hs-fade left svelte-xu6pob",null,q,{show:s(P)}),de=ae(We,1,"hs-fade right svelte-xu6pob",null,de,{show:s(F)})}),i(n,f)};oe(K,n=>{_()&&n(A)})}var re=u(K,2);{var X=n=>{{let f=L(()=>!s(P)),x=L(()=>m()?-1:void 0),q=L(()=>m()?t:void 0);ye(n,{direction:"prev",class:"hs-arrow",get inactive(){return s(f)},iconSize:22,get tabindex(){return s(x)},ariaLabel:"Scroll left",get onmousedown(){return s(q)},onfocus:()=>N(G,!0),onblur:()=>N(G,!1),onwheel:z,onclick:()=>E(-1)})}};oe(re,n=>{C()&&(s(P)||s(G))&&n(X)})}var V=u(re,2);{var U=n=>{{let f=L(()=>!s(F)),x=L(()=>m()?-1:void 0),q=L(()=>m()?t:void 0);ye(n,{direction:"next",class:"hs-arrow",get inactive(){return s(f)},iconSize:22,get tabindex(){return s(x)},ariaLabel:"Scroll right",get onmousedown(){return s(q)},onfocus:()=>N(r,!0),onblur:()=>N(r,!1),onwheel:z,onclick:()=>E(1)})}};oe(V,n=>{C()&&(s(F)||s(r))&&n(U)})}var S=u(V,2);S.__keydown=function(...n){(m()?void 0:te)?.apply(this,n)};var Ce=h(S);return Se(Ce,()=>l.content),Ae(S,n=>N(d,n),()=>s(d)),Q((n,f)=>{ae(T,1,n,"svelte-xu6pob"),se(T,"aria-hidden",m()||void 0),ae(S,1,f,"svelte-xu6pob"),se(S,"tabindex",m()?-1:0),se(S,"aria-label",m()?void 0:l.ariaLabel)},[()=>pe(ve("hs-wrap",l.class)),()=>pe(ve("hs-track",l.trackClass))]),ue("scroll",S,Y),ue("wheel",S,ee),i(W,T),ge(o)}be(["keydown"]);v.__docgen={data:[{name:"content",visibility:"public",description:"the scrollable content",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"contentWidth",visibility:"public",description:"total scrollable width in px, if known ahead of time — skips a DOM\n`scrollWidth` measurement pass so edge-fade/arrow visibility reacts\nimmediately when content size changes for reasons that don't also\nresize/scroll the track. Omit to fall back to measuring `scrollWidth`\nopportunistically on scroll/resize.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"edgeFade",visibility:"public",description:"left/right gradient fades over off-screen content (default true)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"arrows",visibility:"public",description:`prev/next paging arrows — auto-hidden at the ends, hover-revealed on a
fine pointer, never shown on touch (default true)`,keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"pageBy",visibility:"public",description:`fraction of the visible width an arrow/keyboard page moves (default 0.8) — the
actual move is clamped to whatever's left to scroll, so a page near either end
travels less than this, never past the content.`,keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0.8"},{name:"ariaHidden",visibility:"public",description:`pointer-only chrome: root gets \`aria-hidden\`, controls are non-focusable
(\`tabindex="-1"\`) and no keyboard paging is attached. Use when the scroll
is a redundant enhancement over a real keyboard path elsewhere (the
filmstrip's case — Lightbox's own arrow-key nav already exists).`,keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"ariaLabel",visibility:"public",description:"accessible label for the scrollable region; required unless ariaHidden",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"scrollKey",visibility:"public",description:`persists/restores scrollLeft under this key across unmount/remount,
via the shared`,keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"edgeInset",visibility:"public",description:`extra px inset from each scroll bound before edge-fade/arrow visibility
considers that direction "exhausted" (default 0). For a consumer that
reserves scrollable padding at both ends so an edge item can still reach
the visual center (a common "always-centered active item" carousel
technique) — without this, HScroller's raw scroll-bounds check would keep
showing an arrow/fade for reserved empty padding, not real content.`,keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"class",visibility:"public",description:"merges onto the root wrapper (rule 13).",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"trackClass",visibility:"public",description:`merges onto the scrolling track — use for content padding/inset or an
entrance animation the generic chrome doesn't assume.`,keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"onScroll",visibility:"public",description:`fires on every scroll/resize with the track's current scroll position and
viewport width. HScroller owns the scrolling element, so a consumer that
needs to window/virtualize its own content (e.g. the filmstrip) reads its
live scroll state through here rather than reaching for the DOM node
directly.`,keywords:[],kind:"let",type:{kind:"function",text:"(state: { scrollLeft: number; trackWidth: number; scrollWidth: number; }) => void"},static:!1,readonly:!1}],name:"HScroller.svelte"};const{expect:a,userEvent:Z,waitFor:p}=__STORYBOOK_MODULE_TEST__,b=W=>{var l=qe();I(l,"display:flex; gap:8px; padding:0.5rem; width:1372px;"),ie(l,20,()=>ce,_=>_,(_,C)=>{var k=Ke(),m=h(k);Q(()=>{I(k,`flex:0 0 90px; height:64px; border-radius:8px; border:1px solid var(--border); background:hsl(${C*47%360} 70% 55%); color:#fff; font-weight:600;`),le(m,C)}),i(_,k)}),i(W,l)},we=W=>{var l=Me();I(l,"display:flex; gap:8px; padding:0.5rem; width:1372px;"),ie(l,20,()=>ce,_=>_,(_,C)=>{var k=Ie();k.__mousedown=$=>$.preventDefault();var m=h(k);Q(()=>{I(k,`flex:0 0 90px; height:64px; border-radius:8px; border:1px solid var(--border); background:hsl(${C*47%360} 70% 55%); color:#fff; font-weight:600;`),le(m,C)}),i(_,k)}),i(W,l)},Pe=W=>{var l=Re();i(W,l)},Fe=90,Ee=8,ke=14,Oe=Fe+Ee,g=ke*Oe,ce=Array.from({length:ke},(W,l)=>l),De={title:"Composites/HScroller",component:v,tags:["autodocs"],parameters:{a11y:{context:{exclude:[[".demo-chip"]]}}}},{Story:y}=Te();var Ke=c('<button type="button" class="demo-chip"> </button>'),qe=c("<div></div>"),Ie=c('<button type="button" class="demo-chip" tabindex="-1"> </button>'),Me=c("<div></div>"),Re=c('<div style="padding:0.5rem;">(nothing to scroll)</div>'),Ye=c('<div style="max-width:420px;"><!></div>'),je=c('<div style="max-width:420px;"><!></div>'),ze=c('<div style="max-width:420px;"><!></div>'),Ge=c('<div style="max-width:420px;"><!></div>'),Xe=c('<button type="button" class="demo-chip"> </button>'),Ve=c('<div><input class="demo-input" aria-label="Demo text field" style="flex:0 0 160px; height:40px;"/> <!></div>'),Ue=c('<div style="max-width:420px;"><!></div>'),Je=c('<div style="max-width:420px;"><!></div>'),Ze=c('<div style="max-width:420px;"><!></div>'),Qe=c('<div style="max-width:420px;"><!></div>'),et=c('<div style="max-width:420px;"><!></div>'),tt=c('<div style="max-width:420px;"><!></div>'),rt=c('<div style="max-width:420px;"><!></div>'),at=c('<div style="max-width:420px;"><!></div>'),ot=c('<div style="max-width:420px;"><!></div>'),nt=c('<div style="max-width:420px;"><button type="button" data-testid="scrollkey-toggle">toggle mount</button> <!></div>'),st=c('<div style="max-width:420px;"><!></div>'),lt=c('<div style="max-width:420px;"><!></div>'),it=c('<div style="max-width:420px;"><!></div>'),ct=c('<div style="max-width:420px;"><!></div>'),dt=c("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>  <!> <!> <!> <!> <!> <!>",1);function xe(W,l){me(l,!0);let _=O(!0);var C=dt(),k=_e(C);y(k,{name:"Default",asChild:!0,children:(r,t)=>{var e=Ye(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Demo strip"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:"Default: fades + arrows appear only where there's off-screen content."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Demo strip" />
</div>`}}});var m=u(k,2);y(m,{name:"No arrows / no fade",asChild:!0,children:(r,t)=>{var e=je(),o=h(e);v(o,{get content(){return b},contentWidth:g,arrows:!1,edgeFade:!1,ariaLabel:"Demo strip, chrome-less"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:"Chrome-less: no fades/arrows — plain scroll track (e.g. a minimal chip strip)."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		arrows={false}
		edgeFade={false}
		ariaLabel="Demo strip, chrome-less"
	/>
</div>`}}});var $=u(m,2);y($,{name:"Pointer-only (ariaHidden)",asChild:!0,children:(r,t)=>{var e=ze(),o=h(e);v(o,{get content(){return we},contentWidth:g,ariaHidden:!0}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:"Pointer-only chrome: aria-hidden root, no focusable controls — the filmstrip's mode."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chipsNonFocusable} contentWidth={CONTENT_WIDTH} ariaHidden />
</div>`}}});var d=u($,2);y(d,{name:"Keyboard paging",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track");if(await a(t).not.toBeNull(),!t)return;t.focus(),await a(document.activeElement).toBe(t);const e=t.scrollLeft;await Z.keyboard("{ArrowRight}"),await p(async()=>{await a(t.scrollLeft).toBeGreaterThan(e)}),t.scrollLeft=t.scrollWidth,await p(async()=>{await a(r.querySelector(".hs-arrow.next")).toBeNull()})},children:(r,t)=>{var e=Ge(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Keyboard paging demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Keyboard + a11y interaction test (rule 10):
- Focuses the scroll track directly and asserts it's the active element.
- Sends ArrowRight and asserts scrollLeft increased (keyboard paging).
- Scrolls to the end and asserts the right arrow disappears (auto-hide at
  the ends — the same visibility rule the fades follow).`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Keyboard paging demo" />
</div>`}}});var H=u(d,2);y(H,{name:"Arrow keys inside a nested input are not hijacked",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track"),e=r.querySelector(".demo-input");if(await a(t).not.toBeNull(),await a(e).not.toBeNull(),!t||!e)return;e.focus(),await a(document.activeElement).toBe(e),await Z.type(e,"hello"),e.setSelectionRange(0,0);const o=t.scrollLeft;await Z.keyboard("{ArrowRight}"),await p(async()=>{await a(e.selectionStart).toBe(1)}),await a(t.scrollLeft).toBe(o)},children:(r,t)=>{var e=Ue(),o=h(e);v(o,{ariaLabel:"Nested-input demo",content:K=>{var A=Ve();I(A,"display:flex; gap:8px; padding:0.5rem; width:1372px;");var re=u(h(A),2);ie(re,16,()=>ce,X=>X,(X,V)=>{var U=Xe(),S=h(U);Q(()=>{I(U,`flex:0 0 90px; height:64px; border-radius:8px; border:1px solid var(--border); background:hsl(${V*47%360} 70% 55%); color:#fff; font-weight:600;`),le(S,V)}),i(X,U)}),i(K,A)},$$slots:{content:!0}}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Regression test: a text input nested inside the track must keep its OWN ArrowLeft/
ArrowRight caret-movement semantics — the track's keyboard-paging handler must not
hijack a keystroke aimed at the input just because it bubbles through the track (found
in expert review: the wikipedia app's gallery editor nests text inputs directly in the
content it hands HScroller).
- Focuses a text input inside the track (not the track itself).
- Types text, moves the caret to the start with Home, then presses ArrowRight and
  asserts the caret actually advanced (selectionStart 0 → 1) — if the track's handler
  had intercepted the key, the caret would stay at 0 and this would fail.
- Confirms the track's OWN scrollLeft did NOT change from that keystroke (it shouldn't
  page just because a descendant input happened to handle an arrow key).`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller ariaLabel="Nested-input demo">
		{#snippet content()}
			<div style="display:flex; gap:{GAP}px; padding:0.5rem; width:{CONTENT_WIDTH}px;">
				<input
					class="demo-input"
					aria-label="Demo text field"
					style="flex:0 0 160px; height:40px;"
				/>
				{#each items as i (i)}
					<button
						type="button"
						class="demo-chip"
						style="flex:0 0 {ITEM_W}px; height:64px; border-radius:8px; border:1px solid var(--border); background:hsl({(i *
							47) %
							360} 70% 55%); color:#fff; font-weight:600;"
					>
						{i}
					</button>
				{/each}
			</div>
		{/snippet}
	</HScroller>
</div>`}}});var B=u(H,2);y(B,{name:"Arrow click paging",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track"),e=r.querySelector(".hs-arrow.next");if(await a(t).not.toBeNull(),await a(e).not.toBeNull(),!t||!e)return;const o=t.scrollLeft;e.click(),await p(async()=>{await a(t.scrollLeft).toBeGreaterThan(o)})},children:(r,t)=>{var e=Je(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Arrow click demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Mouse arrow-click paging (distinct code path from keyboard paging above: the
    arrow's onclick handler, not onTrackKeydown).`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Arrow click demo" />
</div>`}}});var M=u(B,2);y(M,{name:"Arrow click paging clamps at content end (no overscroll)",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track");if(await a(t).not.toBeNull(),!t)return;const e=t.scrollWidth-t.clientWidth;t.scrollLeft=e-40;let o=null;await p(async()=>{o=r.querySelector(".hs-arrow.next"),await a(o).not.toBeNull()}),o.click(),await p(async()=>{await a(t.scrollLeft).toBe(e)})},children:(r,t)=>{var e=Ze(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Arrow click clamp demo (end)"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Regression test: a page must never request more than what's actually left to
    scroll. Jumps to just short of the end (well under a full \`pageBy\` page) so the
    click's requested delta would overshoot the bound if \`page()\` didn't clamp it —
    asserts the strip lands EXACTLY at the max scrollLeft, not merely "increased" (the
    "Arrow click paging" story above only checks direction, not the landing point).`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Arrow click clamp demo (end)"
	/>
</div>`}}});var R=u(M,2);y(R,{name:"Arrow click paging clamps at content start (no overscroll)",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track");if(await a(t).not.toBeNull(),!t)return;t.scrollLeft=40;let e=null;await p(async()=>{e=r.querySelector(".hs-arrow.prev"),await a(e).not.toBeNull()}),e.click(),await p(async()=>{await a(t.scrollLeft).toBe(0)})},children:(r,t)=>{var e=Qe(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Arrow click clamp demo (start)"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:"Symmetric left-arrow coverage — the clamp computes `remaining` differently per\n    direction (scrollLeft itself vs. scrollWidth - clientWidth - scrollLeft), so a\n    one-sided fix to only the right/next branch wouldn't be caught without this."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Arrow click clamp demo (start)"
	/>
</div>`}}});var P=u(R,2);y(P,{name:"Wheel forwarding",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track");if(await a(t).not.toBeNull(),!t)return;const e=t.scrollLeft;t.dispatchEvent(new WheelEvent("wheel",{deltaY:120,deltaX:0,bubbles:!0,cancelable:!0})),await p(async()=>{await a(t.scrollLeft).toBeGreaterThan(e)})},children:(r,t)=>{var e=et(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Wheel forwarding demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Wheel forwarding: a vertical-only wheel over the track redirects to horizontal
    scroll (onTrackWheel) — the path a plain (non-trackpad) wheel mouse relies on.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Wheel forwarding demo" />
</div>`}}});var F=u(P,2);y(F,{name:"Wheel at content end falls through to the page (no capture)",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track");if(await a(t).not.toBeNull(),!t)return;t.scrollLeft=t.scrollWidth-t.clientWidth,await p(async()=>{await a(r.querySelector(".hs-arrow.next")).toBeNull()});const e=new WheelEvent("wheel",{deltaY:120,deltaX:0,bubbles:!0,cancelable:!0});t.dispatchEvent(e),await a(e.defaultPrevented).toBe(!1)},children:(r,t)=>{var e=tt(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Wheel exhausted-end demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Regression test: a vertical wheel over an EXHAUSTED track (nothing left to scroll
    that way) must NOT be captured — without this, a track embedded inline in a
    normally page-scrolling document (the Wikipedia gallery block's real case) blocks
    the page underneath from scrolling at all once the cursor sits over a
    fully-scrolled strip. Asserts the event's default was left alone (not
    preventDefault()'d), not just that scrollLeft stayed put — that alone would pass
    even with the bug, since the browser already clamps scrollLeft on its own.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Wheel exhausted-end demo"
	/>
</div>`}}});var D=u(F,2);y(D,{name:"Wheel at content start falls through to the page (no capture)",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track");if(await a(t).not.toBeNull(),!t)return;await a(r.querySelector(".hs-arrow.prev")).toBeNull();const e=new WheelEvent("wheel",{deltaY:-120,deltaX:0,bubbles:!0,cancelable:!0});t.dispatchEvent(e),await a(e.defaultPrevented).toBe(!1)},children:(r,t)=>{var e=rt(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Wheel exhausted-start demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:"Symmetric start/left coverage — `onTrackWheel` checks `canLeft`/`canRight`\n    independently per direction, so a one-sided fix wouldn't be caught without this."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Wheel exhausted-start demo"
	/>
</div>`}}});var Y=u(D,2);y(Y,{name:"Measured width fallback (no contentWidth)",asChild:!0,play:async({canvasElement:r})=>{await p(async()=>{await a(r.querySelector(".hs-arrow.next")).not.toBeNull()})},children:(r,t)=>{var e=at(),o=h(e);v(o,{get content(){return b},ariaLabel:"No contentWidth demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`contentWidth omitted: HScroller must fall back to measuring trackEl.scrollWidth
    itself — proven here by canRight (and therefore the right arrow) still coming
    out correctly without the prop.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} ariaLabel="No contentWidth demo" />
</div>`}}});var j=u(Y,2);y(j,{name:"Empty content",asChild:!0,play:async({canvasElement:r})=>{await a(r.querySelector(".hs-arrow")).toBeNull(),await a(r.querySelector(".hs-fade.show")).toBeNull()},children:(r,t)=>{var e=ot(),o=h(e);v(o,{get content(){return Pe},contentWidth:0,ariaLabel:"Empty demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Empty content: canLeft/canRight must both come out false (0-width content),
    so no arrows/fades render — this is the actual shape the "recent searches"
    backlog consumer starts from before any history exists.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={emptyContent} contentWidth={0} ariaLabel="Empty demo" />
</div>`}}});var E=u(j,2);y(E,{name:"scrollKey persistence",asChild:!0,play:async({canvasElement:r})=>{let t=r.querySelector(".hs-track");if(await a(t).not.toBeNull(),!t)return;t.scrollLeft=200,t.dispatchEvent(new Event("scroll")),await a(t.scrollLeft).toBeGreaterThan(150);const e=r.querySelector('[data-testid="scrollkey-toggle"]');await a(e).not.toBeNull(),e&&(e.click(),await p(async()=>{await a(r.querySelector(".hs-track")).toBeNull()}),e.click(),await p(async()=>{t=r.querySelector(".hs-track"),await a(t).not.toBeNull(),await a(t.scrollLeft).toBeGreaterThan(150)}))},children:(r,t)=>{var e=nt(),o=h(e);o.__click=()=>N(_,!s(_));var T=u(o,2);{var K=A=>{v(A,{get content(){return b},contentWidth:g,scrollKey:"hscroller-story:demo",ariaLabel:"scrollKey demo"})};oe(T,A=>{s(_)&&A(K)})}i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`scrollKey persistence: scroll, unmount, remount — scrollLeft must be restored
    from the shared scrollMemory store, not reset to 0.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<button
		type="button"
		data-testid="scrollkey-toggle"
		onclick={() => (scrollKeyMounted = !scrollKeyMounted)}
	>
		toggle mount
	</button>
	{#if scrollKeyMounted}
		<HScroller
			content={chips}
			contentWidth={CONTENT_WIDTH}
			scrollKey="hscroller-story:demo"
			ariaLabel="scrollKey demo"
		/>
	{/if}
</div>`}}});var z=u(E,2);y(z,{name:"Focus preserved at scroll end",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track");if(await a(t).not.toBeNull(),!t)return;t.scrollLeft=t.scrollWidth-t.clientWidth-40;let e=null;await p(async()=>{e=r.querySelector(".hs-arrow.next"),await a(e).not.toBeNull()}),e.focus(),await a(document.activeElement).toBe(e),await Z.keyboard("{Enter}"),await p(async()=>{await a(document.activeElement).toBe(e)}),await p(async()=>{await a(e.classList.contains("kit-nav-arrow-inactive")).toBe(!0)}),await a(getComputedStyle(e).opacity).not.toBe("0"),await a(getComputedStyle(e).outlineStyle).toBe("solid"),t.focus(),await p(async()=>{await a(r.querySelector(".hs-arrow.next")).toBeNull()})},children:(r,t)=>{var e=st(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Focus regression demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Regression test for two real bugs an independent review panel caught, both in
default (non-ariaHidden) mode:
1. A keyboard-focused paging arrow used to unmount ITSELF once scrolling
   reached the end (canRight flips false), which per the HTML spec drops
   focus to <body> — losing the keyboard user's place, and inside a
   focus-trapped dialog, potentially letting native Tab escape the trap.
   Fixed by keeping a focused arrow mounted until it naturally loses focus.
2. The first fix's own CSS (\`opacity:0\` on the now-inactive arrow) ALSO hid
   its :focus-visible outline — DOM focus was preserved but became
   INVISIBLE, itself a WCAG 2.4.7 failure. Fixed by restoring visibility +
   interactivity specifically on :focus-visible.
This test asserts focus lands on (not merely "not <body>") AND is visibly
indicated on the specific arrow — either regressing fails it.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Focus regression demo" />
</div>`}}});var ee=u(z,2);y(ee,{name:"Focus preserved at scroll start (left arrow)",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track");if(await a(t).not.toBeNull(),!t)return;t.scrollLeft=40,t.dispatchEvent(new Event("scroll"));let e=null;await p(async()=>{e=r.querySelector(".hs-arrow.prev"),await a(e).not.toBeNull()}),e.focus(),await a(document.activeElement).toBe(e),await Z.keyboard("{Enter}"),await p(async()=>{await a(document.activeElement).toBe(e)}),await p(async()=>{await a(e.classList.contains("kit-nav-arrow-inactive")).toBe(!0)}),await a(getComputedStyle(e).opacity).not.toBe("0"),await a(getComputedStyle(e).outlineStyle).toBe("solid")},children:(r,t)=>{var e=lt(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Left focus regression demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Symmetric left-arrow/ArrowLeft coverage — same code paths as the two
    stories above (Keyboard paging, Focus preserved at scroll end) but
    structurally distinct branches (leftFocused vs rightFocused, canLeft vs
    canRight), so a one-sided fix to only the right side wouldn't be caught
    without this.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Left focus regression demo"
	/>
</div>`}}});var te=u(ee,2);y(te,{name:"Wheel over arrow forwards to track",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-track"),e=r.querySelector(".hs-arrow.next");if(await a(t).not.toBeNull(),await a(e).not.toBeNull(),!t||!e)return;const o=t.scrollLeft;e.dispatchEvent(new WheelEvent("wheel",{deltaY:60,deltaX:0,bubbles:!0,cancelable:!0})),await p(async()=>{await a(t.scrollLeft).toBeGreaterThan(o)})},children:(r,t)=>{var e=it(),o=h(e);v(o,{get content(){return b},contentWidth:g,ariaLabel:"Wheel-over-arrow demo"}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`Wheel-over-arrow forwarding (fwdWheel) — distinct code path from
    "Wheel forwarding" above, which dispatches on the track itself
    (onTrackWheel). The overlaid arrow is a wheel dead zone without this.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Wheel-over-arrow demo" />
</div>`}}});var G=u(te,2);y(G,{name:"ariaHidden contract",asChild:!0,play:async({canvasElement:r})=>{const t=r.querySelector(".hs-wrap");await a(t).not.toBeNull(),await a(t.getAttribute("aria-hidden")).toBe("true");const e=r.querySelector(".hs-track");await a(e).not.toBeNull(),await a(e.getAttribute("tabindex")).toBe("-1");const o=r.querySelector(".hs-arrow.next");await a(o).not.toBeNull(),await a(o.getAttribute("tabindex")).toBe("-1");const T=e.scrollLeft;o.click(),await p(async()=>{await a(e.scrollLeft).toBeGreaterThan(T)}),await a(document.activeElement).not.toBe(o),await a(document.activeElement).not.toBe(e)},children:(r,t)=>{var e=ct(),o=h(e);v(o,{get content(){return we},contentWidth:g,ariaHidden:!0}),i(r,e)},$$slots:{default:!0},parameters:{docs:{description:{story:`ariaHidden contract (rule 9 deviation, documented in hscroller.md): root is
    aria-hidden, arrows are non-focusable and don't move focus on click, and
    no keyboard handler is attached — this is the filmstrip's actual mode in
    production, and was the only story with zero play() coverage.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chipsNonFocusable} contentWidth={CONTENT_WIDTH} ariaHidden />
</div>`}}}),i(W,C),ge()}be(["mousedown","click"]);xe.__docgen={data:[],name:"HScroller.stories.svelte"};const w=Ne(xe,De),xt=["Default","NoArrowsNoFade","PointerOnlyAriaHidden","KeyboardPaging","ArrowKeysInsideANestedInputAreNotHijacked","ArrowClickPaging","ArrowClickPagingClampsAtContentEndNoOverscroll","ArrowClickPagingClampsAtContentStartNoOverscroll","WheelForwarding","WheelAtContentEndFallsThroughToThePageNoCapture","WheelAtContentStartFallsThroughToThePageNoCapture","MeasuredWidthFallbackNoContentWidth","EmptyContent","ScrollKeyPersistence","FocusPreservedAtScrollEnd","FocusPreservedAtScrollStartLeftArrow","WheelOverArrowForwardsToTrack","AriaHiddenContract"],Ct={...w.Default,tags:["svelte-csf-v5"]},Wt={...w.NoArrowsNoFade,tags:["svelte-csf-v5"]},St={...w.PointerOnlyAriaHidden,tags:["svelte-csf-v5"]},Nt={...w.KeyboardPaging,tags:["svelte-csf-v5"]},Tt={...w.ArrowKeysInsideANestedInputAreNotHijacked,tags:["svelte-csf-v5"]},At={...w.ArrowClickPaging,tags:["svelte-csf-v5"]},Lt={...w.ArrowClickPagingClampsAtContentEndNoOverscroll,tags:["svelte-csf-v5"]},Ht={...w.ArrowClickPagingClampsAtContentStartNoOverscroll,tags:["svelte-csf-v5"]},Bt={...w.WheelForwarding,tags:["svelte-csf-v5"]},$t={...w.WheelAtContentEndFallsThroughToThePageNoCapture,tags:["svelte-csf-v5"]},Pt={...w.WheelAtContentStartFallsThroughToThePageNoCapture,tags:["svelte-csf-v5"]},Ft={...w.MeasuredWidthFallbackNoContentWidth,tags:["svelte-csf-v5"]},Et={...w.EmptyContent,tags:["svelte-csf-v5"]},Ot={...w.ScrollKeyPersistence,tags:["svelte-csf-v5"]},Dt={...w.FocusPreservedAtScrollEnd,tags:["svelte-csf-v5"]},Kt={...w.FocusPreservedAtScrollStartLeftArrow,tags:["svelte-csf-v5"]},qt={...w.WheelOverArrowForwardsToTrack,tags:["svelte-csf-v5"]},It={...w.AriaHiddenContract,tags:["svelte-csf-v5"]};export{It as AriaHiddenContract,At as ArrowClickPaging,Lt as ArrowClickPagingClampsAtContentEndNoOverscroll,Ht as ArrowClickPagingClampsAtContentStartNoOverscroll,Tt as ArrowKeysInsideANestedInputAreNotHijacked,Ct as Default,Et as EmptyContent,Dt as FocusPreservedAtScrollEnd,Kt as FocusPreservedAtScrollStartLeftArrow,Nt as KeyboardPaging,Ft as MeasuredWidthFallbackNoContentWidth,Wt as NoArrowsNoFade,St as PointerOnlyAriaHidden,Ot as ScrollKeyPersistence,$t as WheelAtContentEndFallsThroughToThePageNoCapture,Pt as WheelAtContentStartFallsThroughToThePageNoCapture,Bt as WheelForwarding,qt as WheelOverArrowForwardsToTrack,xt as __namedExportsOrder,De as default};
