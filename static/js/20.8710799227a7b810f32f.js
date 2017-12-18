webpackJsonp([20],{643:function(e,t,n){function a(e){n(829)}var i=n(99)(n(708),n(908),a,"data-v-501cd008",null);e.exports=i.exports},666:function(e,t,n){function a(e){n(669)}var i=n(99)(n(667),n(670),a,null,null);e.exports=i.exports},667:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demoTab",props:{code:String,describeTitle:{type:String,default:""},animated:{type:Boolean,default:!0}},data:function(){return{hasmore:!1,ishide:!0,exampleHeight:80,codeHeight:80}},methods:{onCopy:function(e){this.$Message.success("Code copied")},onError:function(e){this.$Message.success("something wrong")},toggleMore:function(){this.ishide=!this.ishide,this.ishide?this.$el.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=this.exampleHeight+"px":this.$el.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=this.codeHeight+"px"}},computed:{copyCode:function(){return this.code.replace(/&lt;/g,"<")}},mounted:function(){var e=this;setTimeout(function(){var t=e.$el;t.querySelector(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane").querySelectorAll(".ivu-tabs-tabpane > div").forEach(function(t){e.exampleHeight+=t.clientHeight}),e.codeHeight=t.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].clientHeight,e.codeHeight>e.exampleHeight&&(e.hasmore=!0,t.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=e.exampleHeight+"px")},0)}}},668:function(e,t,n){t=e.exports=n(601)(!0),t.push([e.i,".demoTabContainer{border:1px solid #dfe2e5;border-radius:3px;overflow:hidden;background-color:#fff}.demoTabContainer:hover{box-shadow:1px 1px 5px #ccc}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-cardnav{border:none;border-bottom:1px solid #dfe2e5}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active:before{display:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{border:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active{border-right:1px solid #dfe2e5;border-left:1px solid #dfe2e5;margin-left:-1px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane{padding:0 30px 15px;background-color:#fff;position:relative}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:last-child code{border:none;overflow:hidden}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:first-child{padding-top:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{transition:all 0s}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right{position:relative;top:-38px;display:inline-block;line-height:38px;right:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i{vertical-align:middle}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span{margin-left:5px}.demoTabContainer pre code{font-size:1em;padding:0;margin:0}.demoTabContainer .describe-title{line-height:50px;font-size:20px;margin:15px 0;position:relative;height:50px}.demoTabContainer .describe-title span{display:inline-block;position:absolute;color:#3e4752}.demoTabContainer .describe-title span:first-child{z-index:10;background-color:#fff;padding-right:20px}.demoTabContainer .describe-title span.line{z-index:0;width:100%;height:0;border-top:1px solid #dfe2e5;top:25px}.demoTabContainer .describeContent{font-size:14px;color:#728093;margin-top:10px}.demoTabContainer .example-code-more{position:absolute;bottom:0;left:0;right:0;text-align:center}.demoTabContainer .example-code-more a{display:block;text-decoration:none;color:#495060;opacity:.6;background-color:#fff}.demoTabContainer .example-code-more a i{vertical-align:middle;margin-right:5px;font-size:10px}.demoTabContainer .example-code-more a:hover{opacity:.9}","",{version:3,sources:["/home/travis/build/philcui/philcui.github.io.pcvue/src/components/DemoTab.vue"],names:[],mappings:"AACA,kBACE,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,wBACE,2BAA6B,CAC9B,AACD,0EACE,YAAa,AACb,+BAAiC,CAClC,AACD,oFACE,YAAc,CACf,AACD,sEACE,WAAa,CACd,AACD,6EACE,+BAAgC,AAChC,8BAA+B,AAC/B,gBAAkB,CACnB,AACD,8EACE,oBAAuB,AACvB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,8FACE,YAAa,AACb,eAAiB,CAClB,AACD,0FACE,gBAAkB,CACnB,AACD,sEACE,iBAAmB,CACpB,AACD,8DACE,kBAAmB,AACnB,UAAW,AACX,qBAAsB,AACtB,iBAAkB,AAClB,UAAY,CACb,AACD,gEACE,qBAAuB,CACxB,AACD,mEACE,eAAiB,CAClB,AACD,2BACE,cAAe,AACf,UAAa,AACb,QAAY,CACb,AACD,kCACE,iBAAkB,AAClB,eAAgB,AAChB,cAAiB,AACjB,kBAAmB,AACnB,WAAa,CACd,AACD,uCACE,qBAAsB,AACtB,kBAAmB,AACnB,aAAe,CAChB,AACD,mDACE,WAAY,AACZ,sBAAuB,AACvB,kBAAoB,CACrB,AACD,4CACE,UAAW,AACX,WAAY,AACZ,SAAY,AACZ,6BAA8B,AAC9B,QAAU,CACX,AACD,mCACE,eAAgB,AAChB,cAAe,AACf,eAAiB,CAClB,AACD,qCACE,kBAAmB,AACnB,SAAY,AACZ,OAAU,AACV,QAAW,AACX,iBAAmB,CACpB,AACD,uCACE,cAAe,AACf,qBAAsB,AACtB,cAAe,AACf,WAAa,AACb,qBAAuB,CACxB,AACD,yCACE,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,6CACE,UAAa,CACd",file:"DemoTab.vue",sourcesContent:["\n.demoTabContainer {\n  border: 1px solid #dfe2e5;\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: #fff;\n}\n.demoTabContainer:hover {\n  box-shadow: 1px 1px 5px #ccc;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-cardnav {\n  border: none;\n  border-bottom: 1px solid #dfe2e5;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before {\n  display: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  border: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {\n  border-right: 1px solid #dfe2e5;\n  border-left: 1px solid #dfe2e5;\n  margin-left: -1px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {\n  padding: 0px 30px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:last-child code {\n  border: none;\n  overflow: hidden;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:first-child {\n  padding-top: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  transition: all 0s;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right {\n  position: relative;\n  top: -38px;\n  display: inline-block;\n  line-height: 38px;\n  right: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i {\n  vertical-align: middle;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span {\n  margin-left: 5px;\n}\n.demoTabContainer pre code {\n  font-size: 1em;\n  padding: 0px;\n  margin: 0px;\n}\n.demoTabContainer .describe-title {\n  line-height: 50px;\n  font-size: 20px;\n  margin: 15px 0px;\n  position: relative;\n  height: 50px;\n}\n.demoTabContainer .describe-title span {\n  display: inline-block;\n  position: absolute;\n  color: #3e4752;\n}\n.demoTabContainer .describe-title span:first-child {\n  z-index: 10;\n  background-color: #fff;\n  padding-right: 20px;\n}\n.demoTabContainer .describe-title span.line {\n  z-index: 0;\n  width: 100%;\n  height: 0px;\n  border-top: 1px solid #dfe2e5;\n  top: 25px;\n}\n.demoTabContainer .describeContent {\n  font-size: 14px;\n  color: #728093;\n  margin-top: 10px;\n}\n.demoTabContainer .example-code-more {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.demoTabContainer .example-code-more a {\n  display: block;\n  text-decoration: none;\n  color: #495060;\n  opacity: 0.6;\n  background-color: #fff;\n}\n.demoTabContainer .example-code-more a i {\n  vertical-align: middle;\n  margin-right: 5px;\n  font-size: 10px;\n}\n.demoTabContainer .example-code-more a:hover {\n  opacity: 0.9;\n}\n"],sourceRoot:""}])},669:function(e,t,n){var a=n(668);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(602)("6d53411c",a,!0)},670:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demoTabContainer"},[n("Tabs",{attrs:{type:"card",animated:e.animated}},[n("Tab-pane",{attrs:{label:"示例"}},[e._t("sample"),e._v(" "),e.describeTitle&&e.describeTitle.length>0?n("div",{staticClass:"describe-title"},[n("span",[e._v(e._s(e.describeTitle))]),n("span",{staticClass:"line"})]):e._e(),e._v(" "),n("div",{staticClass:"describeContent"},[e._t("describe-content")],2)],2),e._v(" "),n("Tab-pane",{ref:"codeBox",attrs:{label:"代码"}},[n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"html",domProps:{innerHTML:e._s(e.code)}})]),e._v(" "),n("transition",[e.hasmore?n("div",{staticClass:"example-code-more",on:{click:e.toggleMore}},[e.ishide?n("a",[n("Icon",{attrs:{type:"ios-arrow-down"}}),e._v("show code")],1):n("a",[n("Icon",{attrs:{type:"ios-arrow-up"}}),e._v("hide code")],1)]):e._e()])],1),e._v(" "),n("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.copyCode,expression:"copyCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{slot:"extra"},slot:"extra"},[n("Icon",{attrs:{type:"icon-fuzhi-copy",size:20}}),n("span",[e._v("复制")])],1)],1)],1)},staticRenderFns:[]}},708:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(666),i=n.n(a);t.default={components:{demoTab:i.a},data:function(){return{propsColumns:[{title:"属性",key:"attribute"},{title:"说明",key:"describe",width:"350px"},{title:"类型",key:"type"},{title:"默认值",key:"default"}],propsData:[{attribute:"offset-top",describe:"距离窗口顶部达到指定偏移量后触发",type:"Number",default:"0"},{attribute:"offset-bottom",describe:"距离窗口底部达到指定偏移量后触发",type:"Number",default:"-"}],eventsColumns:[{title:"事件名",key:"eventsName"},{title:"说明",key:"describe",width:"450px"},{title:"返回值",key:"return"}],eventsData:[{eventsName:"on-change",describe:"在固定状态发生改变时触发",return:"true | false"}],subTitle:"基础用法",affixCode:'\n        &lt;style>\n            .demo-affix{\n                display: inline-block;\n                color: #fff;\n                padding: 10px 30px;\n                text-align: center;\n                background: rgba(0,153,229,.9);\n            }\n        &lt;/style>\n        &lt;template>\n           &lt;Affix>\n               &lt;span class="demo-affix">固定在最顶部&lt;/span>\n           &lt;/Affix>\n        &lt;/template>\n        &lt;script>\n            export default {\n            }\n        &lt;/script>\n      ',subTitle2:"偏移",affixCode2:'\n        &lt;style>\n            .demo-affix{\n                display: inline-block;\n                color: #fff;\n                padding: 10px 30px;\n                text-align: center;\n                background: rgba(0,153,229,.9);\n            }\n        &lt;/style>\n        &lt;template>\n           &lt;Affix :offset-top="50">\n               &lt;span class="demo-affix">固定在距离顶部 50px 的位置&lt;/span>\n           &lt;/Affix>\n        &lt;/template>\n        &lt;script>\n            export default {\n            }\n        &lt;/script>\n      ',subTitle3:"固定在底部",affixCode3:'\n        &lt;style>\n            .demo-affix{\n                display: inline-block;\n                color: #fff;\n                padding: 10px 30px;\n                text-align: center;\n                background: rgba(0,153,229,.9);\n            }\n        &lt;/style>\n        &lt;template>\n           &lt;Affix :offset-bottom="200">\n               &lt;span class="demo-affix">固定在距离底部 200px 的位置&lt;/span>\n           &lt;/Affix>\n        &lt;/template>\n        &lt;script>\n            export default {\n            }\n        &lt;/script>\n      ',subTitle4:"固定状态改变时的回调",affixCode4:'\n        &lt;style>\n            .demo-affix{\n                display: inline-block;\n                color: #fff;\n                padding: 10px 30px;\n                text-align: center;\n                background: rgba(0,153,229,.9);\n            }\n        &lt;/style>\n        &lt;template>\n           &lt;Affix :offset-top="100" @on-change="change">\n               &lt;span class="demo-affix">固定在距离顶部 100px 的位置&lt;/span>\n           &lt;/Affix>\n        &lt;/template>\n        &lt;script>\n            export default {\n              methods: {\n                change (status) {\n                    this.$Message.info(`当前状态：'+status+"`);\n                }\n              }\n            }\n        &lt;/script>\n      "}},methods:{change:function(e){this.$Message.info("当前状态："+e)}}}},769:function(e,t,n){t=e.exports=n(601)(!0),t.push([e.i,"code[data-v-501cd008]{display:inline-block;background:#f7f7f7;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;margin:0 3px;padding:1px 5px;border-radius:3px;color:#666;border:1px solid #eee}.demo-affix[data-v-501cd008]{display:inline-block;color:#fff;padding:10px 30px;text-align:center;background:rgba(0,153,229,.9)}","",{version:3,sources:["/home/travis/build/philcui/philcui.github.io.pcvue/src/views/other/affix.vue"],names:[],mappings:"AACA,sBACE,qBAAsB,AACtB,mBAAoB,AACpB,8DAA+D,AAC/D,aAAc,AACd,gBAAiB,AACjB,kBAAmB,AACnB,WAAY,AACZ,qBAAuB,CACxB,AACD,6BACE,qBAAsB,AACtB,WAAY,AACZ,kBAAmB,AACnB,kBAAmB,AACnB,6BAAmC,CACpC",file:"affix.vue",sourcesContent:["\ncode[data-v-501cd008] {\n  display: inline-block;\n  background: #f7f7f7;\n  font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;\n  margin: 0 3px;\n  padding: 1px 5px;\n  border-radius: 3px;\n  color: #666;\n  border: 1px solid #eee;\n}\n.demo-affix[data-v-501cd008] {\n  display: inline-block;\n  color: #fff;\n  padding: 10px 30px;\n  text-align: center;\n  background: rgba(0, 153, 229, 0.9);\n}\n"],sourceRoot:""}])},829:function(e,t,n){var a=n(769);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(602)("0a257686",a,!0)},908:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"doc-affix-container"},[n("h1",[e._v("Affix 图钉")]),e._v(" "),n("h2",[e._v("概述")]),e._v(" "),n("p",[e._v("\n    使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。\n  ")]),e._v(" "),n("h2",[e._v("代码示例")]),e._v(" "),n("section",{staticClass:"demo",attrs:{id:"affix1"}},[n("demoTab",{attrs:{code:e.affixCode,describeTitle:e.subTitle,animated:!1}},[n("div",{attrs:{slot:"sample"},slot:"sample"},[n("Affix",[n("span",{staticClass:"demo-affix"},[e._v("固定在最顶部")])])],1),e._v(" "),n("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[e._v("\n        简单使用，当元素不可见时，直接固定在最顶端。\n      ")])])],1),e._v(" "),n("section",{staticClass:"demo",attrs:{id:"affix2"}},[n("demoTab",{attrs:{code:e.affixCode2,describeTitle:e.subTitle2,animated:!1}},[n("div",{attrs:{slot:"sample"},slot:"sample"},[n("Affix",{attrs:{"offset-top":50}},[n("span",{staticClass:"demo-affix"},[e._v("固定在距离顶部 50px 的位置")])])],1),e._v(" "),n("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[e._v("\n        当滚动到一定距离时再固定。\n      ")])])],1),e._v(" "),n("section",{staticClass:"demo",attrs:{id:"affix3"}},[n("demoTab",{attrs:{code:e.affixCode3,describeTitle:e.subTitle3,animated:!1}},[n("div",{attrs:{slot:"sample"},slot:"sample"},[n("Affix",{attrs:{"offset-bottom":200}},[n("span",{staticClass:"demo-affix"},[e._v("固定在距离底部 200px 的位置")])])],1),e._v(" "),n("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[e._v("\n        在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。"),n("br"),e._v("\n        注意，"),n("code",[e._v("offset-top")]),e._v("和"),n("code",[e._v("offset-bottom")]),e._v("只可以设置一个，如果都设置，会使用"),n("code",[e._v("offset-top")]),e._v("。\n      ")])])],1),e._v(" "),n("section",{staticClass:"demo",attrs:{id:"affix4"}},[n("demoTab",{attrs:{code:e.affixCode4,describeTitle:e.subTitle4,animated:!1}},[n("div",{attrs:{slot:"sample"},slot:"sample"},[n("Affix",{attrs:{"offset-top":100},on:{"on-change":e.change}},[n("span",{staticClass:"demo-affix"},[e._v("固定在距离顶部 100px 的位置")])])],1),e._v(" "),n("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[e._v("\n        当固定状态发生改变时，会触发事件。\n      ")])])],1),e._v(" "),n("h2",{attrs:{id:"affix5"}},[e._v("API")]),e._v(" "),n("h3",[e._v("Affix props")]),e._v(" "),n("section",{staticClass:"demo"},[n("Table",{attrs:{border:"",columns:e.propsColumns,data:e.propsData}})],1),e._v(" "),n("h3",[e._v("Affix events")]),e._v(" "),n("section",{staticClass:"demo"},[n("Table",{attrs:{border:"",columns:e.eventsColumns,data:e.eventsData}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=20.8710799227a7b810f32f.js.map