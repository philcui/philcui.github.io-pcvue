webpackJsonp([45],{651:function(t,e,n){var a=n(99)(n(716),n(902),null,null,null);t.exports=a.exports},666:function(t,e,n){function a(t){n(669)}var o=n(99)(n(667),n(670),a,null,null);t.exports=o.exports},667:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demoTab",props:{code:String,describeTitle:{type:String,default:""},animated:{type:Boolean,default:!0}},data:function(){return{hasmore:!1,ishide:!0,exampleHeight:80,codeHeight:80}},methods:{onCopy:function(t){this.$Message.success("Code copied")},onError:function(t){this.$Message.success("something wrong")},toggleMore:function(){this.ishide=!this.ishide,this.ishide?this.$el.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=this.exampleHeight+"px":this.$el.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=this.codeHeight+"px"}},computed:{copyCode:function(){return this.code.replace(/&lt;/g,"<")}},mounted:function(){var t=this;setTimeout(function(){var e=t.$el;e.querySelector(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane").querySelectorAll(".ivu-tabs-tabpane > div").forEach(function(e){t.exampleHeight+=e.clientHeight}),t.codeHeight=e.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].clientHeight,t.codeHeight>t.exampleHeight&&(t.hasmore=!0,e.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=t.exampleHeight+"px")},0)}}},668:function(t,e,n){e=t.exports=n(601)(!0),e.push([t.i,".demoTabContainer{border:1px solid #dfe2e5;border-radius:3px;overflow:hidden;background-color:#fff}.demoTabContainer:hover{box-shadow:1px 1px 5px #ccc}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-cardnav{border:none;border-bottom:1px solid #dfe2e5}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active:before{display:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{border:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active{border-right:1px solid #dfe2e5;border-left:1px solid #dfe2e5;margin-left:-1px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane{padding:0 30px 15px;background-color:#fff;position:relative}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:last-child code{border:none;overflow:hidden}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:first-child{padding-top:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{transition:all 0s}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right{position:relative;top:-38px;display:inline-block;line-height:38px;right:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i{vertical-align:middle}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span{margin-left:5px}.demoTabContainer pre code{font-size:1em;padding:0;margin:0}.demoTabContainer .describe-title{line-height:50px;font-size:20px;margin:15px 0;position:relative;height:50px}.demoTabContainer .describe-title span{display:inline-block;position:absolute;color:#3e4752}.demoTabContainer .describe-title span:first-child{z-index:10;background-color:#fff;padding-right:20px}.demoTabContainer .describe-title span.line{z-index:0;width:100%;height:0;border-top:1px solid #dfe2e5;top:25px}.demoTabContainer .describeContent{font-size:14px;color:#728093;margin-top:10px}.demoTabContainer .example-code-more{position:absolute;bottom:0;left:0;right:0;text-align:center}.demoTabContainer .example-code-more a{display:block;text-decoration:none;color:#495060;opacity:.6;background-color:#fff}.demoTabContainer .example-code-more a i{vertical-align:middle;margin-right:5px;font-size:10px}.demoTabContainer .example-code-more a:hover{opacity:.9}","",{version:3,sources:["/home/travis/build/philcui/philcui.github.io.pcvue/src/components/DemoTab.vue"],names:[],mappings:"AACA,kBACE,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,wBACE,2BAA6B,CAC9B,AACD,0EACE,YAAa,AACb,+BAAiC,CAClC,AACD,oFACE,YAAc,CACf,AACD,sEACE,WAAa,CACd,AACD,6EACE,+BAAgC,AAChC,8BAA+B,AAC/B,gBAAkB,CACnB,AACD,8EACE,oBAAuB,AACvB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,8FACE,YAAa,AACb,eAAiB,CAClB,AACD,0FACE,gBAAkB,CACnB,AACD,sEACE,iBAAmB,CACpB,AACD,8DACE,kBAAmB,AACnB,UAAW,AACX,qBAAsB,AACtB,iBAAkB,AAClB,UAAY,CACb,AACD,gEACE,qBAAuB,CACxB,AACD,mEACE,eAAiB,CAClB,AACD,2BACE,cAAe,AACf,UAAa,AACb,QAAY,CACb,AACD,kCACE,iBAAkB,AAClB,eAAgB,AAChB,cAAiB,AACjB,kBAAmB,AACnB,WAAa,CACd,AACD,uCACE,qBAAsB,AACtB,kBAAmB,AACnB,aAAe,CAChB,AACD,mDACE,WAAY,AACZ,sBAAuB,AACvB,kBAAoB,CACrB,AACD,4CACE,UAAW,AACX,WAAY,AACZ,SAAY,AACZ,6BAA8B,AAC9B,QAAU,CACX,AACD,mCACE,eAAgB,AAChB,cAAe,AACf,eAAiB,CAClB,AACD,qCACE,kBAAmB,AACnB,SAAY,AACZ,OAAU,AACV,QAAW,AACX,iBAAmB,CACpB,AACD,uCACE,cAAe,AACf,qBAAsB,AACtB,cAAe,AACf,WAAa,AACb,qBAAuB,CACxB,AACD,yCACE,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,6CACE,UAAa,CACd",file:"DemoTab.vue",sourcesContent:["\n.demoTabContainer {\n  border: 1px solid #dfe2e5;\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: #fff;\n}\n.demoTabContainer:hover {\n  box-shadow: 1px 1px 5px #ccc;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-cardnav {\n  border: none;\n  border-bottom: 1px solid #dfe2e5;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before {\n  display: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  border: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {\n  border-right: 1px solid #dfe2e5;\n  border-left: 1px solid #dfe2e5;\n  margin-left: -1px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {\n  padding: 0px 30px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:last-child code {\n  border: none;\n  overflow: hidden;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:first-child {\n  padding-top: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  transition: all 0s;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right {\n  position: relative;\n  top: -38px;\n  display: inline-block;\n  line-height: 38px;\n  right: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i {\n  vertical-align: middle;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span {\n  margin-left: 5px;\n}\n.demoTabContainer pre code {\n  font-size: 1em;\n  padding: 0px;\n  margin: 0px;\n}\n.demoTabContainer .describe-title {\n  line-height: 50px;\n  font-size: 20px;\n  margin: 15px 0px;\n  position: relative;\n  height: 50px;\n}\n.demoTabContainer .describe-title span {\n  display: inline-block;\n  position: absolute;\n  color: #3e4752;\n}\n.demoTabContainer .describe-title span:first-child {\n  z-index: 10;\n  background-color: #fff;\n  padding-right: 20px;\n}\n.demoTabContainer .describe-title span.line {\n  z-index: 0;\n  width: 100%;\n  height: 0px;\n  border-top: 1px solid #dfe2e5;\n  top: 25px;\n}\n.demoTabContainer .describeContent {\n  font-size: 14px;\n  color: #728093;\n  margin-top: 10px;\n}\n.demoTabContainer .example-code-more {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.demoTabContainer .example-code-more a {\n  display: block;\n  text-decoration: none;\n  color: #495060;\n  opacity: 0.6;\n  background-color: #fff;\n}\n.demoTabContainer .example-code-more a i {\n  vertical-align: middle;\n  margin-right: 5px;\n  font-size: 10px;\n}\n.demoTabContainer .example-code-more a:hover {\n  opacity: 0.9;\n}\n"],sourceRoot:""}])},669:function(t,e,n){var a=n(668);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(602)("6d53411c",a,!0)},670:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoTabContainer"},[n("Tabs",{attrs:{type:"card",animated:t.animated}},[n("Tab-pane",{attrs:{label:"示例"}},[t._t("sample"),t._v(" "),t.describeTitle&&t.describeTitle.length>0?n("div",{staticClass:"describe-title"},[n("span",[t._v(t._s(t.describeTitle))]),n("span",{staticClass:"line"})]):t._e(),t._v(" "),n("div",{staticClass:"describeContent"},[t._t("describe-content")],2)],2),t._v(" "),n("Tab-pane",{ref:"codeBox",attrs:{label:"代码"}},[n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"html",domProps:{innerHTML:t._s(t.code)}})]),t._v(" "),n("transition",[t.hasmore?n("div",{staticClass:"example-code-more",on:{click:t.toggleMore}},[t.ishide?n("a",[n("Icon",{attrs:{type:"ios-arrow-down"}}),t._v("show code")],1):n("a",[n("Icon",{attrs:{type:"ios-arrow-up"}}),t._v("hide code")],1)]):t._e()])],1),t._v(" "),n("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.copyCode,expression:"copyCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{slot:"extra"},slot:"extra"},[n("Icon",{attrs:{type:"icon-fuzhi-copy",size:20}}),n("span",[t._v("复制")])],1)],1)],1)},staticRenderFns:[]}},716:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(666),o=n.n(a);e.default={components:{demoTab:o.a},data:function(){return{subTitle:"基础用法",subTitledec:"含描述信息",subTitleicon:"图标",subTitlecloseable:"可关闭",propscolumns:[{title:"属性",key:"attribute"},{title:"说明",key:"describe"},{title:"类型",key:"type"},{title:"默认值",key:"default"}],propsdata:[{attribute:"type",describe:"警告提示样式，可选值为info、success、warning、error",type:"String",default:"info"},{attribute:"closable",describe:"是否可关闭",type:"Boolean",default:"false"},{attribute:"show-icon",describe:"是否显示图标",type:"Boolean",default:"false"}],eventcolumns:[{title:"事件名",key:"event"},{title:"说明",key:"describe"},{title:"返回值",key:"return"}],eventdata:[{event:"on-close",describe:"关闭时触发",return:"event"}],slotcolumns:[{title:"名称",key:"name"},{title:"说明",key:"describe"}],slotdata:[{name:"无",describe:"警告提示内容"},{name:"desc",describe:"警告提示辅助性文字介绍"},{name:"icon",describe:"自定义图标内容"},{name:"close",describe:"自定义关闭内容"}],basicAlert:'\n&lt;template>\n  &lt;Alert>消息提示文案&lt;/Alert>\n  &lt;Alert type="success">成功提示文案&lt;/Alert>\n  &lt;Alert type="warning">警告提示文案&lt;/Alert>\n  &lt;Alert type="error">错误提示文案&lt;/Alert>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n',descAlert:'\n&lt;template>\n  &lt;Alert>\n   消息提示文案\n   &lt;template slot="desc">消息提示的描述文案消息&lt;/template>\n   &lt;/Alert>\n  &lt;Alert type="success">\n      成功提示文案\n      &lt;span slot="desc">成功的提示描述文案&lt;/span>\n  &lt;/Alert>\n  &lt;Alert type="warning">\n      警告提示文案\n      &lt;template slot="desc">\n          警告的提示描述文案\n      &lt;/template>\n  &lt;/Alert>\n  &lt;Alert type="error">\n      失败提示文案\n      &lt;template slot="desc">失败的提示描述文案&lt;br/>失败的提示描述文案&lt;/template>\n  &lt;/Alert>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n      ',iconAlert:'\n&lt;template>\n  &lt;Alert show-icon>消息提示文案&lt;/Alert>\n  &lt;Alert type="success" show-icon>成功提示文案&lt;/Alert>\n  &lt;Alert type="warning" show-icon>警告提示文案&lt;/Alert>\n  &lt;Alert type="error" show-icon>错误提示文案&lt;/Alert>\n  &lt;Alert show-icon>\n      消息提示文案\n      &lt;template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案&lt;/template>\n  &lt;/Alert>\n  &lt;Alert type="success" show-icon>\n      成功提示文案\n      &lt;span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案&lt;/span>\n  &lt;/Alert>\n  &lt;Alert type="warning" show-icon>\n      警告提示文案\n      &lt;template slot="desc">\n          警告的提示描述文案警告的提示描述文案警告的提示描述文案\n      &lt;/template>\n  &lt;/Alert>\n  &lt;Alert type="error" show-icon>\n      错误提示文案\n      &lt;span slot="desc">\n          自定义错误描述文案。\n      &lt;/span>\n  &lt;/Alert>\n  &lt;Alert show-icon>\n      自定义图标\n      &lt;Icon type="ios-lightbulb-outline" slot="icon">&lt;/Icon>\n      &lt;template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案&lt;/template>\n  &lt;/Alert>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n      ',closableAlert:'\n&lt;template>\n  &lt;Alert closable>消息提示文案&lt;/Alert>\n  &lt;Alert type="success" show-icon closable>\n      成功提示文案\n      &lt;span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案&lt;/span>\n  &lt;/Alert>\n  &lt;Alert type="warning" closable>\n      自定义关闭内容\n      &lt;span slot="close">不再提示&lt;/span>\n  &lt;/Alert>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n      '}}}},902:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"doc-alert-container"},[n("h1",[t._v("Alert 警告提示")]),t._v(" "),n("h2",[t._v("概述")]),t._v(" "),n("p",[t._v("\n    静态地呈现一些警告信息，可手动关闭。\n  ")]),t._v(" "),n("h2",[t._v("示例代码")]),t._v(" "),n("section",{staticClass:"demo",attrs:{id:"basic"}},[n("demoTab",{attrs:{code:t.basicAlert,describeTitle:t.subTitle}},[n("div",{attrs:{slot:"sample"},slot:"sample"},[n("Alert",[t._v("消息提示文案")]),t._v(" "),n("Alert",{attrs:{type:"success"}},[t._v("成功提示文案")]),t._v(" "),n("Alert",{attrs:{type:"warning"}},[t._v("警告提示文案")]),t._v(" "),n("Alert",{attrs:{type:"error"}},[t._v("错误提示文案")])],1),t._v(" "),n("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n         基本使用方法，有四种样式可以选择info、success、warning、error。\n      ")])])],1),t._v(" "),n("section",{staticClass:"demo",attrs:{id:"describe"}},[n("demoTab",{attrs:{code:t.descAlert,describeTitle:t.subTitledec}},[n("div",{attrs:{slot:"sample"},slot:"sample"},[n("Alert",[t._v("\n          消息提示文案\n          "),n("template",{slot:"desc"},[t._v("消息提示的描述文案消息")])],2),t._v(" "),n("Alert",{attrs:{type:"success"}},[t._v("\n             成功提示文案\n             "),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("成功的提示描述文案")])]),t._v(" "),n("Alert",{attrs:{type:"warning"}},[t._v("\n             警告提示文案\n             "),n("template",{slot:"desc"},[t._v("\n                 警告的提示描述文案\n             ")])],2),t._v(" "),n("Alert",{attrs:{type:"error"}},[t._v("\n             失败提示文案\n             "),n("template",{slot:"desc"},[t._v("失败的提示描述文案"),n("br"),t._v("失败的提示描述文案")])],2)],1),t._v(" "),n("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v('\n         自定义<slot name="desc">描述内容。\n      ')])])],1),t._v(" "),n("section",{staticClass:"demo",attrs:{id:"icon"}},[n("demoTab",{attrs:{code:t.iconAlert,describeTitle:t.subTitleicon}},[n("div",{attrs:{slot:"sample"},slot:"sample"},[n("Alert",{attrs:{"show-icon":""}},[t._v("消息提示文案")]),t._v(" "),n("Alert",{attrs:{type:"success","show-icon":""}},[t._v("成功提示文案")]),t._v(" "),n("Alert",{attrs:{type:"warning","show-icon":""}},[t._v("警告提示文案")]),t._v(" "),n("Alert",{attrs:{type:"error","show-icon":""}},[t._v("错误提示文案")]),t._v(" "),n("Alert",{attrs:{"show-icon":""}},[t._v("\n             消息提示文案\n             "),n("template",{slot:"desc"},[t._v("消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案")])],2),t._v(" "),n("Alert",{attrs:{type:"success","show-icon":""}},[t._v("\n             成功提示文案\n             "),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案")])]),t._v(" "),n("Alert",{attrs:{type:"warning","show-icon":""}},[t._v("\n             警告提示文案\n             "),n("template",{slot:"desc"},[t._v("\n                 警告的提示描述文案警告的提示描述文案警告的提示描述文案\n             ")])],2),t._v(" "),n("Alert",{attrs:{type:"error","show-icon":""}},[t._v("\n             错误提示文案\n             "),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n                 自定义错误描述文案。\n             ")])]),t._v(" "),n("Alert",{attrs:{"show-icon":""}},[t._v("\n             自定义图标\n             "),n("Icon",{attrs:{slot:"icon",type:"ios-lightbulb-outline"},slot:"icon"}),t._v(" "),n("template",{slot:"desc"},[t._v("自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案")])],2)],1),t._v(" "),n("div",{attrs:{slot:"describe-content",id:"icon"},slot:"describe-content"},[t._v("\n         根据 type 属性自动添加不同图标，或者自定义图标 slot 。\n      ")])])],1),t._v(" "),n("section",{staticClass:"demo",attrs:{id:"close"}},[n("demoTab",{attrs:{code:t.closableAlert,describeTitle:t.subTitlecloseable}},[n("div",{attrs:{slot:"sample"},slot:"sample"},[n("Alert",{attrs:{closable:""}},[t._v("消息提示文案")]),t._v(" "),n("Alert",{attrs:{type:"success","show-icon":"",closable:""}},[t._v("\n             成功提示文案\n             "),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案")])]),t._v(" "),n("Alert",{attrs:{type:"warning",closable:""}},[t._v("\n             自定义关闭内容\n             "),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("不再提示")])])],1),t._v(" "),n("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n         显示关闭按钮，点击可关闭提示，也可以自定义关闭 slot 。\n      ")])])],1),t._v(" "),n("h2",{attrs:{id:"api"}},[t._v("API")]),t._v(" "),n("h3",[t._v("Alert props")]),t._v(" "),n("section",{staticClass:"demo"},[n("Table",{attrs:{border:"",columns:t.propscolumns,data:t.propsdata}})],1),t._v(" "),n("h3",[t._v("Alert events")]),t._v(" "),n("section",{staticClass:"demo"},[n("Table",{attrs:{border:"",columns:t.eventcolumns,data:t.eventdata}})],1),t._v(" "),n("h3",[t._v("Alert slot")]),t._v(" "),n("section",{staticClass:"demo"},[n("Table",{attrs:{border:"",columns:t.slotcolumns,data:t.slotdata}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=45.ad577ba7c57e65953ea4.js.map