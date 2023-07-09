import{T as u,E as a}from"./example-dd8d5b01.js";import{T as s,a as c,b as o,C as n}from"./code-f0071630.js";import{f as h,a as i,o as f,c as p,b as t,w as e,s as d,e as l}from"./index-da3afd77.js";const m=l("th",null,"属性名",-1),C=l("th",null,"说明",-1),y=l("th",null,"类型",-1),g=l("th",null,"默认值",-1),x=l("td",null,"align",-1),j=l("td",null,"对齐方式",-1),F={style:{display:"flex","flex-wrap":"wrap",gap:"4px"}},b=l("td",null,"title",-1),H=l("td",null,"标题，仅在头部存在时生效",-1),I=l("td",null,"string",-1),T=l("td",null," — ",-1),w=l("th",null,"说明",-1),v=l("td",null,"default",-1),B=l("td",null,"默认内容",-1),E=l("td",null,"header",-1),N=l("td",null,"标头",-1),V=l("td",null,"footer",-1),k=l("td",null,"页脚",-1),J=h({__name:"guide-card",setup(A){return(S,z)=>{const _=i("jy-card"),r=i("jy-code");return f(),p("div",null,[t(u,{title:"Card 卡片",id:"Id_Card",size:"large"}),t(a,{title:"基础（Foundation）",id:"Id_Card_Foundation"},{default:e(()=>[t(_,{align:"center"},{default:e(()=>[d(" Content ")]),_:1}),t(r,{code:`<template>
	<jy-card align="center">
		Content
	</jy-card>
</template>`})]),_:1}),t(a,{title:"页眉 Header",id:"Id_Card_Header"},{default:e(()=>[t(_,{align:"center"},{header:e(()=>[d(" Header ")]),default:e(()=>[d(" Content ")]),_:1}),t(r,{code:`<template>
	<jy-card align="center">
		<template #header>
			Header
		</template>
		Content
	</jy-card>
</template>`})]),_:1}),t(a,{title:"页脚 Footer",id:"Id_Card_Footer"},{default:e(()=>[t(_,{align:"center"},{footer:e(()=>[d(" Footer ")]),default:e(()=>[d(" Content ")]),_:1}),t(r,{code:`<template>
	<jy-card align="center">
		Content
		<template #footer>
			Footer
		</template>
	</jy-card>
</template>`})]),_:1}),t(a,{title:"页眉，页脚 Header，Footer",id:"Id_Card_HeaderFooter"},{default:e(()=>[t(_,{align:"center"},{header:e(()=>[d(" Header ")]),footer:e(()=>[d(" Footer ")]),default:e(()=>[d(" Content ")]),_:1}),t(r,{code:`<template>
	<jy-card align="center">
		<template #header>
			Header
		</template>
		Content
		<template #footer>
			Footer
		</template>
	</jy-card>
</template>`})]),_:1}),t(a,{title:"属性 Attributes",id:"Id_Card_Attributes"},{default:e(()=>[t(s,null,{thead:e(()=>[t(c,null,{default:e(()=>[m,C,y,g]),_:1})]),tbody:e(()=>[t(o,null,{default:e(()=>[x,j,l("td",null,[l("div",F,[t(n,{text:"left"}),d("/"),t(n,{text:"center"}),d("/"),t(n,{text:"right"})])]),l("td",null,[t(n,{text:"left"})])]),_:1}),t(o,null,{default:e(()=>[b,H,I,T]),_:1})]),_:1})]),_:1}),t(a,{title:"插槽 Slots",id:"Id_Card_Slots"},{default:e(()=>[t(s,null,{thead:e(()=>[t(c,null,{default:e(()=>[l("th",null,[d("插槽名"),t(n,{text:"#"})]),w]),_:1})]),tbody:e(()=>[t(o,null,{default:e(()=>[v,B]),_:1}),t(o,null,{default:e(()=>[E,N]),_:1}),t(o,null,{default:e(()=>[V,k]),_:1})]),_:1})]),_:1})])}}});export{J as default};
