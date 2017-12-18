webpackJsonp([50],{650:function(t,e,n){function o(t){n(814)}var i=n(99)(n(715),n(891),o,"data-v-314f3b2e",null);t.exports=i.exports},715:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{updateLogs:[{version:"V1.0.2",time:"2017.8.23",content:[{text:"修改表格树展开节点(图标)位置问题"},{text:"修改icon的引入方式。以前只能使用utvue中的图标，现在加入了可以引入外部图标"},{text:"取消子节点全部选中父节点自动变选中状态，子元素全部选中父元素也不会被选中"},{text:"增加可以配置多选状态下父元素选中子元素是否全被选中"},{text:"tab增加右键菜单"}]},{version:"V1.0.3",time:"2017.8.25",content:[{text:"tab超出显示宽度增加左移右移功能"}]},{version:"V1.0.5",time:"2017.8.30",content:[{text:"treeSelect数据treeData增加watch以保证外部数据更新后同步更新"}]},{version:"V1.0.7",time:"2017.9.5",content:[{text:"treeselect下拉选项高度可设置"},{text:"treeselect回显功能：数据回显，方法回显"},{text:"修复form的resetFields对treeselect无效的问题（绑定model)"},{text:"tree监听data，data变化时发送on-tree-init事件，返回默认选中的节点"},{text:"tree  cascade=true时，selected与checked一致"},{text:"将tree的widthCheckAll属性改为withCheckAll"},{text:"修改tabletree图标样式和图标引入方式"}]},{version:"V1.0.8",time:"2017.9.6",content:[{text:"新增部分字体图标"}]},{version:"V1.0.9",time:"2017.9.7",content:[{text:"解决table的高度问题"},{text:"treeSelect加入transfer配置，浮层移动到body内（适用于高度大于父级时，下拉树显示不全）"}]},{version:"V1.0.10",time:"2017.9.12",content:[{text:"table表头底部边框由2px改成1px"},{text:"table表头上的checkbox和表体checkbox不同步问题"},{text:"treeSelect的下拉选项出现位置调整（transfer=false时）"},{text:"tree组件增加配置子元素全选时父元素是否被选中的功能"},{text:"table组件修复checkbox全选功能和全不选功能"},{text:"table组件删除记录后checkbox状态变化修正"}]},{version:"V1.0.11",time:"2017.9.13",content:[{text:"message水平位置居中显示"},{text:"tree展开图标样式改动（无子节点时，图标由display:none改成 visibility: hidden;）"}]},{version:"V1.0.12",time:"2017.9.18",content:[{text:"input加入字体图标"}]},{version:"V1.0.13",time:"2017.9.19",content:[{text:"transfer下，treeselect点击节点的展开图标，下拉项收起"},{text:"tabs嵌套tabs，右键菜单显示修改"}]},{version:"V1.0.14",time:"2017.9.20",content:[{text:"图标库更新"}]},{version:"V1.0.15",time:"2017.9.21",content:[{text:"select添加图标"},{text:"modal样式修改"}]},{version:"V1.0.16",time:"2017.9.23",content:[{text:"tree配置父节点和叶子节点checkbox是否显示"},{text:"新增图标库icon-3，icon-edit"},{text:"tabs 样式修改"}]},{version:"V1.0.17",time:"2017.9.24",content:[{text:"table背景颜色修改为白色"},{text:"去掉icon动画"},{text:"form样式修改"}]},{version:"V1.0.19",time:"2017.9.25",content:[{text:"treeselect实现在form里的验证"},{text:"修复tree的withCheckAll"},{text:"修复tree的拖拽"},{text:"修改假render编译后不能被正常挂载的问题"}]},{version:"V1.0.20",time:"2017.9.26",content:[{text:"开启表格顺序变化后重新渲染"}]},{version:"V1.0.21",time:"2017.9.27",content:[{text:"select的option更新后，新的option的label未能更新"}]},{version:"V1.0.22",time:"2017.12.13",content:[{text:"新增input自动补全功能"},{text:"新增select多选模式下，选择自定义项"},{text:"新增tree懒加载功能"}]}]}},computed:{logs:function(){return this.updateLogs.reverse()}},methods:{},mounted:function(){}}},754:function(t,e,n){e=t.exports=n(601)(!0),e.push([t.i,".logCard[data-v-314f3b2e]{margin-top:30px}.logCard .content[data-v-314f3b2e]{margin-left:10px;list-style:circle}.doc-alert-container[data-v-314f3b2e]{margin-bottom:20px}","",{version:3,sources:["/home/travis/build/philcui/philcui.github.io.pcvue/src/views/update.vue"],names:[],mappings:"AACA,0BACE,eAAiB,CAClB,AACD,mCACE,iBAAkB,AAClB,iBAAmB,CACpB,AACD,sCACE,kBAAoB,CACrB",file:"update.vue",sourcesContent:["\n.logCard[data-v-314f3b2e] {\n  margin-top: 30px;\n}\n.logCard .content[data-v-314f3b2e] {\n  margin-left: 10px;\n  list-style: circle;\n}\n.doc-alert-container[data-v-314f3b2e] {\n  margin-bottom: 20px;\n}\n"],sourceRoot:""}])},814:function(t,e,n){var o=n(754);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(602)("7f2a71c3",o,!0)},891:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"doc-alert-container"},[n("h1",[t._v("更新日志")]),t._v(" "),n("h2",[t._v("更新说明")]),t._v(" "),t._m(0),t._v(" "),t._l(t.logs,function(e,o){return n("card",{key:o,staticClass:"logCard"},[n("p",{attrs:{slot:"title"},slot:"title"},[n("span",[t._v(t._s(e.version))]),t._v(" "),n("span",[t._v(t._s(e.time))])]),t._v(" "),n("ul",{staticClass:"content"},t._l(e.content,function(e,o){return n("li",{key:o},[t._v(t._s(e.text))])}))])})],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("周期：每周三定时更新")]),t._v(" "),n("li",[t._v("其它：有严重问题会不定期更新")])])}]}}});
//# sourceMappingURL=50.5fda750e3b7d154e2533.js.map