import{T as y,E as s}from"./example-2dfd9c54.js";import{T as m,a as f,b as d,C as p}from"./code-5d017d2d.js";import{f as j,g as c,a as _,o as b,c as S,b as t,w as o,e,s as x}from"./index-340af4a6.js";const T=e("th",null,"属性名",-1),V=e("th",null,"说明",-1),g=e("th",null,"类型",-1),C=e("th",null,"默认值",-1),I=e("td",null,"placeholder",-1),M=e("td",null,"提示",-1),O=e("td",null,"string",-1),E=e("td",null,"—",-1),F=e("td",null,"disabled",-1),B=e("td",null,"禁用",-1),N=e("td",null,"boolean",-1),U=e("td",null,"false",-1),k=e("td",null,"clear",-1),w=e("td",null,"清空",-1),A=e("td",null,"boolean",-1),D=e("td",null,"false",-1),z=e("th",null,"事件名",-1),q=e("th",null,"说明",-1),G=e("th",null,"类型",-1),H=e("td",null,"change",-1),J=e("td",null,"选中值改变时触发",-1),K=e("td",null,"clear",-1),X=j({__name:"guide-select",setup(L){const r=c(""),v=c(""),h=c("");return(P,n)=>{const l=_("jy-option"),a=_("jy-select"),u=_("jy-code");return b(),S("div",null,[t(y,{title:"Select 选择器",id:"Id_Select",size:"large"}),t(s,{title:"基础 Foundation",id:"Id_Select_Foundation"},{default:o(()=>[t(a,{placeholder:"Open This Select Menu",modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=i=>r.value=i)},{default:o(()=>[t(l,{value:"option12",text:"option1"}),t(l,{value:"option23",text:"option2"}),t(l,{value:"option34",text:"option3"}),t(l,{value:"option45",text:"option4"})]),_:1},8,["modelValue"]),t(u,{code:`<template>
	<jy-select placeholder="Open This Select Menu" v-model="select1">
		<jy-option value="option1" text="option1" />
		<jy-option value="option2" text="option2" />
		<jy-option value="option3" text="option3" />
		<jy-option value="option4" text="option4" />
	</jy-select>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const select1 = ref();
<\/script>`},null,8,["code"])]),_:1}),t(s,{title:"禁用 Disabled",id:"Id_Select_Disabled"},{default:o(()=>[t(a,{placeholder:"Open This Select Menu",modelValue:v.value,"onUpdate:modelValue":n[1]||(n[1]=i=>v.value=i),disabled:""},{default:o(()=>[t(l,{value:"option12",text:"option1"}),t(l,{value:"option23",text:"option2"}),t(l,{value:"option34",text:"option3"}),t(l,{value:"option45",text:"option4"})]),_:1},8,["modelValue"]),t(u,{code:`<template>
	<jy-select placeholder="Open This Select Menu" v-model="select2" disabled>
		<jy-option value="option12" text="option1" />
		<jy-option value="option23" text="option2" />
		<jy-option value="option34" text="option3" />
		<jy-option value="option45" text="option4" />
	</jy-select>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const select2 = ref();
<\/script>`},null,8,["code"])]),_:1}),t(s,{title:"清空 Clear",id:"Id_Select_Clear"},{default:o(()=>[t(a,{placeholder:"Open This Select Menu",modelValue:h.value,"onUpdate:modelValue":n[2]||(n[2]=i=>h.value=i),clear:""},{default:o(()=>[t(l,{value:"option12",text:"option1"}),t(l,{value:"option23",text:"option2"}),t(l,{value:"option34",text:"option3"}),t(l,{value:"option45",text:"option4"})]),_:1},8,["modelValue"]),t(u,{code:`<template>
	<jy-select placeholder="Open This Select Menu" v-model="select3" clear>
		<jy-option value="option12" text="option1" />
		<jy-option value="option23" text="option2" />
		<jy-option value="option34" text="option3" />
		<jy-option value="option45" text="option4" />
	</jy-select>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const select3 = ref();
<\/script>`},null,8,["code"])]),_:1}),t(s,{title:"属性 Attributes",id:"Id_Select_Attributes"},{default:o(()=>[t(m,null,{thead:o(()=>[t(f,null,{default:o(()=>[T,V,g,C]),_:1})]),tbody:o(()=>[t(d,null,{default:o(()=>[I,M,O,E]),_:1}),t(d,null,{default:o(()=>[F,B,N,U]),_:1}),t(d,null,{default:o(()=>[k,w,A,D]),_:1})]),_:1})]),_:1}),t(s,{title:"事件 Events",id:"Id_Select_Events"},{default:o(()=>[t(m,null,{thead:o(()=>[t(f,null,{default:o(()=>[z,q,G]),_:1})]),tbody:o(()=>[t(d,null,{default:o(()=>[H,J,e("td",null,[t(p,{text:"Function(value) => void"})])]),_:1}),t(d,null,{default:o(()=>[K,e("td",null,[x(" 当"),t(p,{text:"clear"}),x("属性存在并且点击时触发 ")]),e("td",null,[t(p,{text:"Function() => void"})])]),_:1})]),_:1})]),_:1})])}}});export{X as default};
