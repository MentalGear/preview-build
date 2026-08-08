import{p as F,n as I,f as m,t as M,i as H,h as k,b as p,c as x,a as O,B as C,s as w,g as d,l as _}from"./iframe-DoUpZrGJ.js";import{c as G,d as S}from"./create-runtime-stories-NOZuvjGf.js";import{g as N,R}from"./RovingFocusGroup-qYzl_HzD.js";import{a as B,e as D}from"./attributes-BHhJ46lX.js";import{i as E}from"./lifecycle-CPlsNFvS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTB4apso.js";var U=m("<a> </a>");function T(l,a){F(a,!0);let r=I(a,"label",19,()=>a.id);const n=N();var o=U();B(o,c=>({href:`#${a.id??""}`,class:"rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",...c}),[()=>n.item(a.id)]);var v=k(o);M(()=>H(v,r())),p(l,o),x()}T.__docgen={data:[{name:"id",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"RovingMember.svelte"};const{expect:t,within:y,userEvent:s}=__STORYBOOK_MODULE_TEST__,g=(l,a=C)=>{var r=q(),n=k(r);{let o=_(()=>a().activeId??null);R(n,{get activeId(){return d(o)},children:(v,c)=>{var u=$();D(u,5,()=>W,e=>e,(e,i)=>{{let b=_(()=>d(i)[0].toUpperCase()+d(i).slice(1));T(e,{get id(){return d(i)},get label(){return d(b)}})}}),p(v,u)},$$slots:{default:!0}})}p(l,r)},W=["inbox","drafts","sent","archive"],K={title:"Composites/RovingFocusGroup",component:R,tags:["autodocs"]},{Story:f}=S();var $=m('<div class="flex flex-col gap-1"></div>'),q=m('<div class="w-56 p-2"><!></div>'),L=m("<!> <!> <!>",1);function A(l,a){F(a,!1),E();var r=L(),n=O(r);f(n,{name:"Default",args:{activeId:"sent"},get template(){return g},parameters:{docs:{description:{story:"`RovingFocusGroup` is behaviour-only — it renders a plain wrapper with NO role, so the markup\ninside keeps whatever semantics the caller wrote (see docs/kit/components/roving-focus-group.md).\nThese stories use the smallest possible member (`__fixtures__/RovingMember.svelte`: an <a> that\nspreads `roving.item(id)`); the real consumer is `SidebarNav`, whose own stories cover the\nsidebar-specific contract."}},__svelteCsf:{rawCode:`<div class="w-56 p-2">
	<RovingFocusGroup activeId={args.activeId ?? null}>
		<div class="flex flex-col gap-1">
			{#each items as id (id)}
				<RovingMember {id} label={id[0].toUpperCase() + id.slice(1)} />
			{/each}
		</div>
	</RovingFocusGroup>
</div>`}}});var o=w(n,2);f(o,{name:"One Tab stop, arrow keys move within it",args:{activeId:"sent"},get template(){return g},play:async({canvasElement:c})=>{const e=y(c).getAllByRole("link");await t(e[2]).toHaveAttribute("tabindex","0");for(const[i,b]of e.entries())i!==2&&await t(b).toHaveAttribute("tabindex","-1");await s.tab(),await t(e[2]).toHaveFocus(),await s.keyboard("{ArrowDown}"),await t(e[3]).toHaveFocus(),await t(e[3]).toHaveAttribute("tabindex","0"),await t(e[2]).toHaveAttribute("tabindex","-1"),await s.keyboard("{ArrowUp}"),await t(e[2]).toHaveFocus(),await s.keyboard("{End}"),await t(e[e.length-1]).toHaveFocus(),await s.keyboard("{Home}"),await t(e[0]).toHaveFocus(),await s.keyboard("{ArrowUp}"),await t(e[e.length-1]).toHaveFocus(),await s.tab();for(const i of e)await t(i).not.toHaveFocus()},parameters:{docs:{description:{story:`The core contract: exactly ONE member is tabbable, and it's the one the OWNER says is current
    — not "whichever was focused last". Arrow keys then move within the group.`}},__svelteCsf:{rawCode:`<div class="w-56 p-2">
	<RovingFocusGroup activeId={args.activeId ?? null}>
		<div class="flex flex-col gap-1">
			{#each items as id (id)}
				<RovingMember {id} label={id[0].toUpperCase() + id.slice(1)} />
			{/each}
		</div>
	</RovingFocusGroup>
</div>`}}});var v=w(o,2);f(v,{name:"No active item falls back to the first member",args:{},get template(){return g},play:async({canvasElement:c})=>{const e=y(c).getAllByRole("link");await t(e[0]).toHaveAttribute("tabindex","0");for(const i of e.slice(1))await t(i).toHaveAttribute("tabindex","-1");await s.tab(),await t(e[0]).toHaveFocus()},parameters:{docs:{description:{story:"With no `activeId`, the group still has exactly one Tab stop: the FIRST member in document\n    order. Without this, a group whose owner has nothing current would be unreachable by Tab."}},__svelteCsf:{rawCode:`<div class="w-56 p-2">
	<RovingFocusGroup activeId={args.activeId ?? null}>
		<div class="flex flex-col gap-1">
			{#each items as id (id)}
				<RovingMember {id} label={id[0].toUpperCase() + id.slice(1)} />
			{/each}
		</div>
	</RovingFocusGroup>
</div>`}}}),p(l,r),x()}A.__docgen={data:[],name:"RovingFocusGroup.stories.svelte"};const h=G(A,K),X=["Default","OneTabStopArrowKeysMoveWithinIt","NoActiveItemFallsBackToTheFirstMember"],Z={...h.Default,tags:["svelte-csf-v5"]},ee={...h.OneTabStopArrowKeysMoveWithinIt,tags:["svelte-csf-v5"]},te={...h.NoActiveItemFallsBackToTheFirstMember,tags:["svelte-csf-v5"]};export{Z as Default,te as NoActiveItemFallsBackToTheFirstMember,ee as OneTabStopArrowKeysMoveWithinIt,X as __namedExportsOrder,K as default};
