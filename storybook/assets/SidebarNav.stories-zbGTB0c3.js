import{m as w,r as k,p as G,f as T,a as N,B as E,s as y,g as R,l as _,b as C,c as O}from"./iframe-DoUpZrGJ.js";import{c as H,d as M}from"./create-runtime-stories-NOZuvjGf.js";import{S as x,a as P,b as K,c as D,n as B}from"./SidebarNav-Bi6jWYml.js";import{i as L}from"./lifecycle-CPlsNFvS.js";import"./input-BNVIaXBl.js";import"./chevron-up-BncFncGw.js";import{R as q}from"./RovingFocusGroup-qYzl_HzD.js";import{S as U}from"./search-eQdWMi-N.js";import{I as A,H as $}from"./heart-BLLlziQ8.js";import{I as z}from"./Icon-Bw7N4Q7c.js";import"./preload-helper-PPVm8Dsz.js";import"./attributes-BHhJ46lX.js";import"./commands-J1MyKGxF.js";import"./is-mobile.svelte-CsP8PvxE.js";import"./media-query-CQ5UF3Mf.js";import"./this-TCGcLIVh.js";import"./shadcn-utils-m4Kx4tR_.js";import"./index-B0rW8Cq9.js";import"./create-id-CrooffFS.js";import"./index-BTB4apso.js";import"./roving-focus-group-CJG8hiN5.js";import"./presence-manager.svelte-Dsv_QeDg.js";import"./safe-polygon.svelte-BpdTrDJ1.js";import"./scroll-lock-T6-_d3P2.js";import"./popper-layer-force-mount-BEQPK-K9.js";import"./button-wxigxQGf.js";import"./dialog-content-BiMlbtnH.js";import"./x-CTzp0ZQ6.js";import"./dropdown-menu-trigger-DE4mX5Fv.js";import"./menu-item-cg6n52g5.js";import"./input-DCb9cBFd.js";import"./transitions-CU8B7knB.js";function W(s,n){let r=k(n,["$$slots","$$events","$$legacy"]);const d=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];z(s,w({name:"sparkles"},()=>r,{get iconNode(){return d}}))}const{expect:a,within:I,userEvent:p}=__STORYBOOK_MODULE_TEST__,v=(s,n=E)=>{P(s,{style:"--sidebar-width: 15rem;",children:(r,d)=>{K(r,{collapsible:"none",children:(c,b)=>{{let g=_(()=>n().activeId?B(n().activeId):null);q(c,{class:"contents",get activeId(){return R(g)},children:(i,l)=>{D(i,{children:(e,o)=>{x(e,w(n))},$$slots:{default:!0}})},$$slots:{default:!0}})}},$$slots:{default:!0}})},$$slots:{default:!0}})},Y=[{items:[{id:"/search",href:"/search",label:"Search",icon:U}]},{heading:"Library",items:[{id:"/lib",href:"/lib",label:"All",icon:A},{id:"/memories",href:"/memories",label:"Memories",icon:W},{id:"/favs",href:"/favs",label:"Favorites",icon:$}]}],S="/lib",j={title:"Composites/SidebarNav",component:x,tags:["autodocs"],args:{nav:Y},parameters:{docs:{description:{component:""}}}},{Story:m}=M();var J=T("<!> <!> <!> <!>",1);function F(s,n){G(n,!1),L();var r=J(),d=N(r);m(d,{name:"Default",args:{activeId:S},get template(){return v},parameters:{__svelteCsf:{rawCode:`<Sidebar.Provider style="--sidebar-width: 15rem;">
	<Sidebar.Root collapsible="none">
		<!-- SidebarNav doesn't own the RovingFocusGroup itself (AppShell does — see
		     docs/kit/components/sidebar.md's "Roving tabindex" section): it renders
		     roving members expecting an ambient RovingFocusGroup ancestor, so this
		     story supplies one directly, deriving the group's \`activeId\` from the same single
		     \`activeId\` via the same \`navItemId\` helper AppShell uses. -->
		<RovingFocusGroup
			class="contents"
			activeId={args.activeId ? navItemId(args.activeId) : null}
		>
			<Sidebar.Content>
				<SidebarNav {...args} />
			</Sidebar.Content>
		</RovingFocusGroup>
	</Sidebar.Root>
</Sidebar.Provider>`}}});var c=y(d,2);m(c,{name:"Exactly one active item",args:{activeId:S},get template(){return v},play:async({canvasElement:i})=>{const e=I(i).getAllByRole("link").filter(o=>o.getAttribute("aria-current")==="page");await a(e).toHaveLength(1),await a(e[0]).toHaveAccessibleName(/All/)},parameters:{docs:{description:{story:`Interaction test: the sidebar invariant — exactly one active item (the one
    with aria-current="page"). See docs/kit/components/sidebar.md.`}},__svelteCsf:{rawCode:`<Sidebar.Provider style="--sidebar-width: 15rem;">
	<Sidebar.Root collapsible="none">
		<!-- SidebarNav doesn't own the RovingFocusGroup itself (AppShell does — see
		     docs/kit/components/sidebar.md's "Roving tabindex" section): it renders
		     roving members expecting an ambient RovingFocusGroup ancestor, so this
		     story supplies one directly, deriving the group's \`activeId\` from the same single
		     \`activeId\` via the same \`navItemId\` helper AppShell uses. -->
		<RovingFocusGroup
			class="contents"
			activeId={args.activeId ? navItemId(args.activeId) : null}
		>
			<Sidebar.Content>
				<SidebarNav {...args} />
			</Sidebar.Content>
		</RovingFocusGroup>
	</Sidebar.Root>
</Sidebar.Provider>`}}});var b=y(c,2);{let i=_(()=>({nav:[{heading:"Empty group",items:[]},{heading:"Library",items:[{id:"/lib",href:"/lib",label:"All",icon:A},{id:"/favs",href:"/favs",label:"Favorites",icon:$}]}]}));m(b,{name:"No active item + empty group + keyboard",get args(){return R(i)},get template(){return v},play:async({canvasElement:l})=>{const e=I(l),o=e.getAllByRole("link"),t=o.filter(f=>f.getAttribute("aria-current")==="page");await a(t).toHaveLength(0),await a(e.queryByText("Empty group")).not.toBeInTheDocument();for(const f of o)await a(f).not.toHaveAttribute("aria-current");await p.tab();const h=e.getAllByRole("link")[0];await a(h).toHaveFocus()},parameters:{docs:{description:{story:'(a) No `activeId` at all → the component\'s own `activeId = null` default applies, and no\n        element has aria-current="page". The prop is OMITTED rather than passed as `null` on\n        purpose — see the note above `defineMeta` (a literal `null` story arg crashes\n        addon-svelte-csf\'s source emitter), and omitting it exercises the real default path.\n    (b) Config with an empty group → that group\'s label is not rendered.\n    (c) Inactive items have no aria-current attribute at all (not "false").\n    (d) Keyboard: tab to first nav link and assert focus.'}},__svelteCsf:{rawCode:`<Sidebar.Provider style="--sidebar-width: 15rem;">
	<Sidebar.Root collapsible="none">
		<!-- SidebarNav doesn't own the RovingFocusGroup itself (AppShell does — see
		     docs/kit/components/sidebar.md's "Roving tabindex" section): it renders
		     roving members expecting an ambient RovingFocusGroup ancestor, so this
		     story supplies one directly, deriving the group's \`activeId\` from the same single
		     \`activeId\` via the same \`navItemId\` helper AppShell uses. -->
		<RovingFocusGroup
			class="contents"
			activeId={args.activeId ? navItemId(args.activeId) : null}
		>
			<Sidebar.Content>
				<SidebarNav {...args} />
			</Sidebar.Content>
		</RovingFocusGroup>
	</Sidebar.Root>
</Sidebar.Provider>`}}})}var g=y(b,2);m(g,{name:"Roving tabindex: arrow keys move focus, one Tab exits the group",args:{activeId:S},get template(){return v},play:async({canvasElement:i})=>{const e=I(i).getAllByRole("link"),o=1;await a(e[o]).toHaveAttribute("tabindex","0");for(const[t,h]of e.entries())t!==o&&await a(h).toHaveAttribute("tabindex","-1");e[o].focus(),await a(e[o]).toHaveFocus();for(let t=o+1;t<e.length;t++)await p.keyboard("{ArrowDown}"),await a(e[t]).toHaveFocus();for(let t=e.length-2;t>=0;t--)await p.keyboard("{ArrowUp}"),await a(e[t]).toHaveFocus();await p.tab();for(const t of e)await a(t).not.toHaveFocus()},parameters:{docs:{description:{story:`Roving tabindex (added 2026-08-02 on bits-ui Toolbar, moved to the kit's own
    RovingFocusGroup 2026-08-07): the whole nav is ONE Tab stop — arrow keys move focus WITHIN
    it, across group boundaries, and a single further Tab exits the group entirely instead of
    landing on the next item. Reported live: tabbing past the sidebar previously took one Tab
    press per item. See docs/kit/components/sidebar.md.`}},__svelteCsf:{rawCode:`<Sidebar.Provider style="--sidebar-width: 15rem;">
	<Sidebar.Root collapsible="none">
		<!-- SidebarNav doesn't own the RovingFocusGroup itself (AppShell does — see
		     docs/kit/components/sidebar.md's "Roving tabindex" section): it renders
		     roving members expecting an ambient RovingFocusGroup ancestor, so this
		     story supplies one directly, deriving the group's \`activeId\` from the same single
		     \`activeId\` via the same \`navItemId\` helper AppShell uses. -->
		<RovingFocusGroup
			class="contents"
			activeId={args.activeId ? navItemId(args.activeId) : null}
		>
			<Sidebar.Content>
				<SidebarNav {...args} />
			</Sidebar.Content>
		</RovingFocusGroup>
	</Sidebar.Root>
</Sidebar.Provider>`}}}),C(s,r),O()}F.__docgen={data:[],name:"SidebarNav.stories.svelte"};const u=H(F,j),Fe=["Default","ExactlyOneActiveItem","NoActiveItemEmptyGroupKeyboard","RovingTabindexArrowKeysMoveFocusOneTabExitsTheGroup"],ke={...u.Default,tags:["svelte-csf-v5"]},Ge={...u.ExactlyOneActiveItem,tags:["svelte-csf-v5"]},Te={...u.NoActiveItemEmptyGroupKeyboard,tags:["svelte-csf-v5"]},Ne={...u.RovingTabindexArrowKeysMoveFocusOneTabExitsTheGroup,tags:["svelte-csf-v5"]};export{ke as Default,Ge as ExactlyOneActiveItem,Te as NoActiveItemEmptyGroupKeyboard,Ne as RovingTabindexArrowKeysMoveFocusOneTabExitsTheGroup,Fe as __namedExportsOrder,j as default};
