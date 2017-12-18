webpackJsonp([21],{642:function(t,a,e){function n(t){e(808)}var i=e(99)(e(707),e(883),n,"data-v-17080f04",null);t.exports=i.exports},666:function(t,a,e){function n(t){e(669)}var i=e(99)(e(667),e(670),n,null,null);t.exports=i.exports},667:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"demoTab",props:{code:String,describeTitle:{type:String,default:""},animated:{type:Boolean,default:!0}},data:function(){return{hasmore:!1,ishide:!0,exampleHeight:80,codeHeight:80}},methods:{onCopy:function(t){this.$Message.success("Code copied")},onError:function(t){this.$Message.success("something wrong")},toggleMore:function(){this.ishide=!this.ishide,this.ishide?this.$el.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=this.exampleHeight+"px":this.$el.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=this.codeHeight+"px"}},computed:{copyCode:function(){return this.code.replace(/&lt;/g,"<")}},mounted:function(){var t=this;setTimeout(function(){var a=t.$el;a.querySelector(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane").querySelectorAll(".ivu-tabs-tabpane > div").forEach(function(a){t.exampleHeight+=a.clientHeight}),t.codeHeight=a.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].clientHeight,t.codeHeight>t.exampleHeight&&(t.hasmore=!0,a.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=t.exampleHeight+"px")},0)}}},668:function(t,a,e){a=t.exports=e(601)(!0),a.push([t.i,".demoTabContainer{border:1px solid #dfe2e5;border-radius:3px;overflow:hidden;background-color:#fff}.demoTabContainer:hover{box-shadow:1px 1px 5px #ccc}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-cardnav{border:none;border-bottom:1px solid #dfe2e5}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active:before{display:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{border:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active{border-right:1px solid #dfe2e5;border-left:1px solid #dfe2e5;margin-left:-1px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane{padding:0 30px 15px;background-color:#fff;position:relative}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:last-child code{border:none;overflow:hidden}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:first-child{padding-top:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{transition:all 0s}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right{position:relative;top:-38px;display:inline-block;line-height:38px;right:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i{vertical-align:middle}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span{margin-left:5px}.demoTabContainer pre code{font-size:1em;padding:0;margin:0}.demoTabContainer .describe-title{line-height:50px;font-size:20px;margin:15px 0;position:relative;height:50px}.demoTabContainer .describe-title span{display:inline-block;position:absolute;color:#3e4752}.demoTabContainer .describe-title span:first-child{z-index:10;background-color:#fff;padding-right:20px}.demoTabContainer .describe-title span.line{z-index:0;width:100%;height:0;border-top:1px solid #dfe2e5;top:25px}.demoTabContainer .describeContent{font-size:14px;color:#728093;margin-top:10px}.demoTabContainer .example-code-more{position:absolute;bottom:0;left:0;right:0;text-align:center}.demoTabContainer .example-code-more a{display:block;text-decoration:none;color:#495060;opacity:.6;background-color:#fff}.demoTabContainer .example-code-more a i{vertical-align:middle;margin-right:5px;font-size:10px}.demoTabContainer .example-code-more a:hover{opacity:.9}","",{version:3,sources:["/home/travis/build/philcui/philcui.github.io.pcvue/src/components/DemoTab.vue"],names:[],mappings:"AACA,kBACE,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,wBACE,2BAA6B,CAC9B,AACD,0EACE,YAAa,AACb,+BAAiC,CAClC,AACD,oFACE,YAAc,CACf,AACD,sEACE,WAAa,CACd,AACD,6EACE,+BAAgC,AAChC,8BAA+B,AAC/B,gBAAkB,CACnB,AACD,8EACE,oBAAuB,AACvB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,8FACE,YAAa,AACb,eAAiB,CAClB,AACD,0FACE,gBAAkB,CACnB,AACD,sEACE,iBAAmB,CACpB,AACD,8DACE,kBAAmB,AACnB,UAAW,AACX,qBAAsB,AACtB,iBAAkB,AAClB,UAAY,CACb,AACD,gEACE,qBAAuB,CACxB,AACD,mEACE,eAAiB,CAClB,AACD,2BACE,cAAe,AACf,UAAa,AACb,QAAY,CACb,AACD,kCACE,iBAAkB,AAClB,eAAgB,AAChB,cAAiB,AACjB,kBAAmB,AACnB,WAAa,CACd,AACD,uCACE,qBAAsB,AACtB,kBAAmB,AACnB,aAAe,CAChB,AACD,mDACE,WAAY,AACZ,sBAAuB,AACvB,kBAAoB,CACrB,AACD,4CACE,UAAW,AACX,WAAY,AACZ,SAAY,AACZ,6BAA8B,AAC9B,QAAU,CACX,AACD,mCACE,eAAgB,AAChB,cAAe,AACf,eAAiB,CAClB,AACD,qCACE,kBAAmB,AACnB,SAAY,AACZ,OAAU,AACV,QAAW,AACX,iBAAmB,CACpB,AACD,uCACE,cAAe,AACf,qBAAsB,AACtB,cAAe,AACf,WAAa,AACb,qBAAuB,CACxB,AACD,yCACE,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,6CACE,UAAa,CACd",file:"DemoTab.vue",sourcesContent:["\n.demoTabContainer {\n  border: 1px solid #dfe2e5;\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: #fff;\n}\n.demoTabContainer:hover {\n  box-shadow: 1px 1px 5px #ccc;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-cardnav {\n  border: none;\n  border-bottom: 1px solid #dfe2e5;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before {\n  display: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  border: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {\n  border-right: 1px solid #dfe2e5;\n  border-left: 1px solid #dfe2e5;\n  margin-left: -1px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {\n  padding: 0px 30px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:last-child code {\n  border: none;\n  overflow: hidden;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:first-child {\n  padding-top: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  transition: all 0s;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right {\n  position: relative;\n  top: -38px;\n  display: inline-block;\n  line-height: 38px;\n  right: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i {\n  vertical-align: middle;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span {\n  margin-left: 5px;\n}\n.demoTabContainer pre code {\n  font-size: 1em;\n  padding: 0px;\n  margin: 0px;\n}\n.demoTabContainer .describe-title {\n  line-height: 50px;\n  font-size: 20px;\n  margin: 15px 0px;\n  position: relative;\n  height: 50px;\n}\n.demoTabContainer .describe-title span {\n  display: inline-block;\n  position: absolute;\n  color: #3e4752;\n}\n.demoTabContainer .describe-title span:first-child {\n  z-index: 10;\n  background-color: #fff;\n  padding-right: 20px;\n}\n.demoTabContainer .describe-title span.line {\n  z-index: 0;\n  width: 100%;\n  height: 0px;\n  border-top: 1px solid #dfe2e5;\n  top: 25px;\n}\n.demoTabContainer .describeContent {\n  font-size: 14px;\n  color: #728093;\n  margin-top: 10px;\n}\n.demoTabContainer .example-code-more {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.demoTabContainer .example-code-more a {\n  display: block;\n  text-decoration: none;\n  color: #495060;\n  opacity: 0.6;\n  background-color: #fff;\n}\n.demoTabContainer .example-code-more a i {\n  vertical-align: middle;\n  margin-right: 5px;\n  font-size: 10px;\n}\n.demoTabContainer .example-code-more a:hover {\n  opacity: 0.9;\n}\n"],sourceRoot:""}])},669:function(t,a,e){var n=e(668);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(602)("6d53411c",n,!0)},670:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demoTabContainer"},[e("Tabs",{attrs:{type:"card",animated:t.animated}},[e("Tab-pane",{attrs:{label:"示例"}},[t._t("sample"),t._v(" "),t.describeTitle&&t.describeTitle.length>0?e("div",{staticClass:"describe-title"},[e("span",[t._v(t._s(t.describeTitle))]),e("span",{staticClass:"line"})]):t._e(),t._v(" "),e("div",{staticClass:"describeContent"},[t._t("describe-content")],2)],2),t._v(" "),e("Tab-pane",{ref:"codeBox",attrs:{label:"代码"}},[e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html",domProps:{innerHTML:t._s(t.code)}})]),t._v(" "),e("transition",[t.hasmore?e("div",{staticClass:"example-code-more",on:{click:t.toggleMore}},[t.ishide?e("a",[e("Icon",{attrs:{type:"ios-arrow-down"}}),t._v("show code")],1):e("a",[e("Icon",{attrs:{type:"ios-arrow-up"}}),t._v("hide code")],1)]):t._e()])],1),t._v(" "),e("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.copyCode,expression:"copyCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{slot:"extra"},slot:"extra"},[e("Icon",{attrs:{type:"icon-fuzhi-copy",size:20}}),e("span",[t._v("复制")])],1)],1)],1)},staticRenderFns:[]}},707:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(666),i=e.n(n);a.default={components:{demoTab:i.a},data:function(){return{subTitle:"基础用法",subTitledisabled:"禁用",subTitleicon:"图标",subTitlesmall:"迷你型",subTitlecard:"卡片样式",subTitleclosable:"可关闭",subTitlenoanimate:"禁用动画",subTitlerender:"自定义标签页",subTitleextra:"附加内容",tab0:!0,tab1:!0,tab2:!0,tabs:2,label:function(t){return t("div",[t("span","标签一"),t("Badge",{props:{count:3}})])},propscolumns:[{title:"属性",key:"attribute"},{title:"说明",key:"describe"},{title:"类型",key:"type"},{title:"默认值",key:"default"}],propsdata:[{attribute:"value",describe:"当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据",type:"String",default:"默认为第一项的 name"},{attribute:"type",describe:"页签的基本样式，可选值为 line 和 card",type:"String",default:"line"},{attribute:"size",describe:'尺寸，可选值为 default 和 small，仅在 type="line" 时有效',type:"String",default:"default"},{attribute:"closable",describe:'是否可以关闭页签，仅在 type="card" 时有效',type:"Boolean",default:"false"},{attribute:"animated",describe:"是否使用 CSS3 动画",type:"Boolean",default:"true"},{attribute:"contextMenu",describe:"是否使用右键菜单",type:"Boolean",default:"false"}],eventcolumns:[{title:"事件名",key:"event"},{title:"说明",key:"describe"},{title:"返回值",key:"return"}],eventdata:[{event:"on-click",describe:"tab 被点击时触发",return:"name"},{event:"on-tab-remove",describe:"tab 被关闭时触发",return:"name"},{event:"refresh",describe:"右键菜单刷新时触发",return:"name"},{event:"closeOthers",describe:"右键菜单关闭其它时触发",return:"name"},{event:"closeAll",describe:"右键菜单关闭全部时触发",return:"-"}],slotcolumns:[{title:"名称",key:"name"},{title:"说明",key:"describe"}],slotdata:[{name:"extra",describe:"附加内容"}],TabPanePropsdata:[{attribute:"name",describe:"用于标识当前面板，对应 value，默认为其索引值",type:"String | Number",default:"-"},{attribute:"label",describe:"选项卡头显示文字，支持 Render 函数。",type:"String | Function",default:"空"},{attribute:"icon",describe:"选项卡图标",type:"String",default:"-"},{attribute:"disabled",describe:"是否禁用该选项卡",type:"Boolean",default:"false"},{attribute:"closable",describe:'是否可以关闭页签，仅在 type="card" 时有效',type:"Boolean",default:"null"}],basicTab:'\n&lt;template>\n    &lt;Tabs value="name1">\n        &lt;Tab-pane label="标签一" name="name1">标签一的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签二" name="name2">标签二的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签三" name="name3">标签三的内容&lt;/Tab-pane>\n    &lt;/Tabs>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n',disabledTab:'\n&lt;template>\n    &lt;Tabs>\n        &lt;Tab-pane label="标签一">标签一的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签二" disabled>标签二的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签三">标签三的内容&lt;/Tab-pane>\n    &lt;/Tabs>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n      ',iconTab:'\n&lt;template>\n    &lt;Tabs>\n        &lt;Tab-pane label="macOS" icon="social-apple">标签一的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="Windows" icon="social-windows">标签二的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="Linux" icon="social-tux">标签三的内容&lt;/Tab-pane>\n    &lt;/Tabs>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n      ',smallTab:'\n&lt;template>\n    &lt;Tabs size="small">\n        &lt;Tab-pane label="标签一">标签一的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签二">标签二的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签三">标签三的内容&lt;/Tab-pane>\n    &lt;/Tabs>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n      ',cardTab:'\n&lt;template>\n    &lt;Tabs type="card">\n        &lt;Tab-pane label="标签一">标签一的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签二">标签二的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签三">标签三的内容&lt;/Tab-pane>\n    &lt;/Tabs>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n      ',closableTab:'\n&lt;template>\n    &lt;Tabs type="card" closable @on-tab-remove="handleTabRemove">\n        &lt;Tab-pane label="标签一" v-if="tab0">标签一的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签二" v-if="tab1">标签二的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签三" v-if="tab2">标签三的内容&lt;/Tab-pane>\n    &lt;/Tabs>\n&lt;/template>\n&lt;script>\n    export default {\n        data () {\n            return {\n                tab0: true,\n                tab1: true,\n                tab2: true\n            }\n        },\n        methods: {\n            handleTabRemove (name) {\n                this[\'tab\' + name] = false;\n            }\n        }\n    }\n&lt;/script>\n      ',noanimateTab:'\n&lt;template>\n    &lt;Tabs :animated="false">\n        &lt;Tab-pane label="标签一">标签一的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签二">标签二的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签三">标签三的内容&lt;/Tab-pane>\n    &lt;/Tabs>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n      ',renderTab:'\n&lt;template>\n    &lt;Tabs>\n        &lt;Tab-pane :label="label" name="name1">标签一的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签二" name="name2">标签二的内容&lt;/Tab-pane>\n        &lt;Tab-pane label="标签三" name="name3">标签三的内容&lt;/Tab-pane>\n    &lt;/Tabs>\n&lt;/template>\n&lt;script>\n    export default {\n        data () {\n            return {\n                label: (h) => {\n                    return h(\'div\', [\n                        h(\'span\', \'标签一\'),\n                        h(\'Badge\', {\n                            props: {\n                                count: 3\n                            }\n                        })\n                    ])\n                }\n            }\n        }\n    }\n&lt;/script>\n      ',extraTab:'\n&lt;template>\n    &lt;Tabs type="card">\n        &lt;Tab-pane v-for="tab in tabs" :key="tab" :label="\'标签\' + tab">标签{{ tab }}&lt;/Tab-pane>\n        &lt;Button type="ghost" @click="handleTabsAdd" size="small" slot="extra" :disabled="tabs > 3">增加&lt;/Button>\n    &lt;/Tabs>\n&lt;/template>\n&lt;script>\n    export default {\n        data () {\n            return {\n                tabs: 2\n            }\n        },\n        methods: {\n            handleTabsAdd () {\n                this.tabs ++;\n            }\n        }\n    }\n&lt;/script>\n      '}},methods:{handleTabRemove:function(t){this["tab"+t]=!1},handleTabsAdd:function(){this.tabs++}}}},748:function(t,a,e){a=t.exports=e(601)(!0),a.push([t.i,'article[data-v-17080f04]{padding-left:30px;font-size:14px}article h1[data-v-17080f04],article h2[data-v-17080f04],article h3[data-v-17080f04]{margin:12px 0;font-weight:400}article h1[data-v-17080f04]{margin-top:40px;font-size:26px}article h2[data-v-17080f04]{font-size:20px}article section.demo[data-v-17080f04]{margin:20px 0}article .demo-tabs-style1>.ivu-tabs-card>.ivu-tabs-content[data-v-17080f04]{height:120px;margin-top:-16px}article .demo-tabs-style1>.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane[data-v-17080f04]{background:#fff;padding:16px}article .demo-tabs-style1>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab[data-v-17080f04]{border-color:transparent}article .demo-tabs-style1>.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active[data-v-17080f04]{border-color:#fff}article .demo-tabs-style2>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab[data-v-17080f04]{border-radius:0;background:#fff}article .demo-tabs-style2>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active[data-v-17080f04]{border-top:1px solid #39f}article .demo-tabs-style2>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active[data-v-17080f04]:before{content:"";display:block;width:100%;height:1px;background:#39f;position:absolute;top:0;left:0}',"",{version:3,sources:["/home/travis/build/philcui/philcui.github.io.pcvue/src/views/navigation/tabs.vue"],names:[],mappings:"AACA,yBACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,oFAGE,cAAiB,AACjB,eAAoB,CACrB,AACD,4BACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,4BACE,cAAgB,CACjB,AACD,sCACE,aAAiB,CAClB,AACD,4EACE,aAAc,AACd,gBAAkB,CACnB,AACD,8FACE,gBAAiB,AACjB,YAAc,CACf,AACD,+FACE,wBAA0B,CAC3B,AACD,6FACE,iBAAmB,CACpB,AACD,+FACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,sGACE,yBAA8B,CAC/B,AACD,6GACE,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,WAAY,AACZ,gBAAoB,AACpB,kBAAmB,AACnB,MAAO,AACP,MAAQ,CACT",file:"tabs.vue",sourcesContent:["\narticle[data-v-17080f04] {\n  padding-left: 30px;\n  font-size: 14px;\n}\narticle h1[data-v-17080f04],\narticle h2[data-v-17080f04],\narticle h3[data-v-17080f04] {\n  margin: 12px 0px;\n  font-weight: normal;\n}\narticle h1[data-v-17080f04] {\n  margin-top: 40px;\n  font-size: 26px;\n}\narticle h2[data-v-17080f04] {\n  font-size: 20px;\n}\narticle section.demo[data-v-17080f04] {\n  margin: 20px 0px;\n}\narticle .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content[data-v-17080f04] {\n  height: 120px;\n  margin-top: -16px;\n}\narticle .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane[data-v-17080f04] {\n  background: #fff;\n  padding: 16px;\n}\narticle .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab[data-v-17080f04] {\n  border-color: transparent;\n}\narticle .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active[data-v-17080f04] {\n  border-color: #fff;\n}\narticle .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab[data-v-17080f04] {\n  border-radius: 0;\n  background: #fff;\n}\narticle .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active[data-v-17080f04] {\n  border-top: 1px solid #3399ff;\n}\narticle .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active[data-v-17080f04]:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #3399ff;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n"],sourceRoot:""}])},808:function(t,a,e){var n=e(748);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(602)("6ae0d8e2",n,!0)},883:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",{staticClass:"doc-tabs-container"},[e("h1",[t._v("Tabs 标签页")]),t._v(" "),e("h2",[t._v("概述")]),t._v(" "),e("p",[t._v("\n    选项卡切换组件，常用于平级区域大块内容的的收纳和展现。\n  ")]),t._v(" "),e("h2",[t._v("示例代码")]),t._v(" "),e("section",{staticClass:"demo",attrs:{id:"basic"}},[e("demoTab",{attrs:{code:t.basicTab,describeTitle:t.subTitle}},[e("div",{attrs:{slot:"sample"},slot:"sample"},[e("Tabs",{attrs:{value:"name1"}},[e("Tab-pane",{attrs:{label:"标签一",name:"name1"}},[t._v("标签一的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签二",name:"name2"}},[t._v("标签二的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签三",name:"name3"}},[t._v("标签三的内容")])],1)],1),t._v(" "),e("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n         value 与 Tab-pane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。\n      ")])])],1),t._v(" "),e("section",{staticClass:"demo",attrs:{id:"disabled"}},[e("demoTab",{attrs:{code:t.disabledTab,describeTitle:t.subTitledisabled}},[e("div",{attrs:{slot:"sample"},slot:"sample"},[e("Tabs",[e("Tab-pane",{attrs:{label:"标签一"}},[t._v("标签一的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签二",disabled:""}},[t._v("标签二的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签三"}},[t._v("标签三的内容")])],1)],1),t._v(" "),e("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n        禁用某一项\n      ")])])],1),t._v(" "),e("section",{staticClass:"demo",attrs:{id:"icon"}},[e("demoTab",{attrs:{code:t.iconTab,describeTitle:t.subTitleicon}},[e("div",{attrs:{slot:"sample"},slot:"sample"},[e("Tabs",[e("Tab-pane",{attrs:{label:"macOS",icon:"social-apple"}},[t._v("标签一的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"Windows",icon:"social-windows"}},[t._v("标签二的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"Linux",icon:"social-tux"}},[t._v("标签三的内容")])],1)],1),t._v(" "),e("div",{attrs:{slot:"describe-content",id:"icon"},slot:"describe-content"},[t._v("\n         通过设置属性 icon，可以显示一个图标。\n      ")])])],1),t._v(" "),e("section",{staticClass:"demo",attrs:{id:"small"}},[e("demoTab",{attrs:{code:t.smallTab,describeTitle:t.subTitlesmall}},[e("div",{attrs:{slot:"sample"},slot:"sample"},[e("Tabs",{attrs:{size:"small"}},[e("Tab-pane",{attrs:{label:"标签一"}},[t._v("标签一的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签二"}},[t._v("标签二的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签三"}},[t._v("标签三的内容")])],1)],1),t._v(" "),e("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n         设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效。\n      ")])])],1),t._v(" "),e("section",{staticClass:"demo",attrs:{id:"render"}},[e("demoTab",{attrs:{code:t.renderTab,describeTitle:t.subTitlerender}},[e("div",{attrs:{slot:"sample"},slot:"sample"},[e("Tabs",[e("Tab-pane",{attrs:{label:t.label,name:"name1"}},[t._v("标签一的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签二",name:"name2"}},[t._v("标签二的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签三",name:"name3"}},[t._v("标签三的内容")])],1)],1),t._v(" "),e("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n         设置 label 为 Render 函数后，可以自定义标签页的内容。\n      ")])])],1),t._v(" "),e("section",{staticClass:"demo",attrs:{id:"extra"}},[e("demoTab",{attrs:{code:t.extraTab,describeTitle:t.subTitleextra}},[e("div",{attrs:{slot:"sample"},slot:"sample"},[e("Tabs",{attrs:{type:"card"}},[t._l(t.tabs,function(a){return e("Tab-pane",{key:a,attrs:{label:"标签"+a}},[t._v("标签"+t._s(a))])}),t._v(" "),e("Button",{attrs:{slot:"extra",type:"ghost",size:"small",disabled:t.tabs>3},on:{click:t.handleTabsAdd},slot:"extra"},[t._v("增加")])],2)],1),t._v(" "),e("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n         设置 slot extra 可以在页签右边添加附加操作。\n      ")])])],1),t._v(" "),e("section",{staticClass:"demo",attrs:{id:"card"}},[e("demoTab",{attrs:{code:t.cardTab,describeTitle:t.subTitlecard}},[e("div",{attrs:{slot:"sample"},slot:"sample"},[e("Tabs",{attrs:{type:"card"}},[e("Tab-pane",{attrs:{label:"标签一"}},[t._v("标签一的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签二"}},[t._v("标签二的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签三"}},[t._v("标签三的内容")])],1)],1),t._v(" "),e("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n         设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。\n      ")])])],1),t._v(" "),e("section",{staticClass:"demo",attrs:{id:"closable"}},[e("demoTab",{attrs:{code:t.closableTab,describeTitle:t.subTitleclosable}},[e("div",{attrs:{slot:"sample"},slot:"sample"},[e("Tabs",{attrs:{type:"card",closable:""},on:{"on-tab-remove":t.handleTabRemove}},[t.tab0?e("Tab-pane",{attrs:{label:"标签一"}},[t._v("标签一的内容")]):t._e(),t._v(" "),t.tab1?e("Tab-pane",{attrs:{label:"标签二"}},[t._v("标签二的内容")]):t._e(),t._v(" "),t.tab2?e("Tab-pane",{attrs:{label:"标签三"}},[t._v("标签三的内容")]):t._e()],1)],1),t._v(" "),e("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n         通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。"),e("br"),t._v("\n         需结合 @on-tab-remove 事件手动关闭标签页。\n      ")])])],1),t._v(" "),e("section",{staticClass:"demo",attrs:{id:"noanimate"}},[e("demoTab",{attrs:{code:t.noanimateTab,describeTitle:t.subTitlenoanimate}},[e("div",{attrs:{slot:"sample"},slot:"sample"},[e("Tabs",{attrs:{animated:!1}},[e("Tab-pane",{attrs:{label:"标签一"}},[t._v("标签一的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签二"}},[t._v("标签二的内容")]),t._v(" "),e("Tab-pane",{attrs:{label:"标签三"}},[t._v("标签三的内容")])],1)],1),t._v(" "),e("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n         通过设置属性 animated 为 false 可以禁用动画。\n      ")])])],1),t._v(" "),e("h2",{attrs:{id:"api"}},[t._v("API")]),t._v(" "),e("h3",[t._v("Tabs props")]),t._v(" "),e("section",{staticClass:"demo"},[e("Table",{attrs:{border:"",columns:t.propscolumns,data:t.propsdata}})],1),t._v(" "),e("h3",[t._v("Tabs events")]),t._v(" "),e("section",{staticClass:"demo"},[e("Table",{attrs:{border:"",columns:t.eventcolumns,data:t.eventdata}})],1),t._v(" "),e("h3",[t._v("Tabs slot")]),t._v(" "),e("section",{staticClass:"demo"},[e("Table",{attrs:{border:"",columns:t.slotcolumns,data:t.slotdata}})],1),t._v(" "),e("h3",[t._v("TabPane props")]),t._v(" "),e("section",{staticClass:"demo"},[e("Table",{attrs:{border:"",columns:t.propscolumns,data:t.TabPanePropsdata}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=21.7f4f5c302d76886789af.js.map