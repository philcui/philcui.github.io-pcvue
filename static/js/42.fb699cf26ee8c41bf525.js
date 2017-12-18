webpackJsonp([42],{607:function(t,e,o){function a(t){o(825)}var l=o(99)(o(678),o(904),a,"data-v-4af5796c",null);t.exports=l.exports},666:function(t,e,o){function a(t){o(669)}var l=o(99)(o(667),o(670),a,null,null);t.exports=l.exports},667:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demoTab",props:{code:String,describeTitle:{type:String,default:""},animated:{type:Boolean,default:!0}},data:function(){return{hasmore:!1,ishide:!0,exampleHeight:80,codeHeight:80}},methods:{onCopy:function(t){this.$Message.success("Code copied")},onError:function(t){this.$Message.success("something wrong")},toggleMore:function(){this.ishide=!this.ishide,this.ishide?this.$el.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=this.exampleHeight+"px":this.$el.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=this.codeHeight+"px"}},computed:{copyCode:function(){return this.code.replace(/&lt;/g,"<")}},mounted:function(){var t=this;setTimeout(function(){var e=t.$el;e.querySelector(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane").querySelectorAll(".ivu-tabs-tabpane > div").forEach(function(e){t.exampleHeight+=e.clientHeight}),t.codeHeight=e.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].clientHeight,t.codeHeight>t.exampleHeight&&(t.hasmore=!0,e.querySelectorAll(".demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane")[1].style.height=t.exampleHeight+"px")},0)}}},668:function(t,e,o){e=t.exports=o(601)(!0),e.push([t.i,".demoTabContainer{border:1px solid #dfe2e5;border-radius:3px;overflow:hidden;background-color:#fff}.demoTabContainer:hover{box-shadow:1px 1px 5px #ccc}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-cardnav{border:none;border-bottom:1px solid #dfe2e5}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active:before{display:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{border:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active{border-right:1px solid #dfe2e5;border-left:1px solid #dfe2e5;margin-left:-1px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane{padding:0 30px 15px;background-color:#fff;position:relative}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:last-child code{border:none;overflow:hidden}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:first-child{padding-top:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{transition:all 0s}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right{position:relative;top:-38px;display:inline-block;line-height:38px;right:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i{vertical-align:middle}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span{margin-left:5px}.demoTabContainer pre code{font-size:1em;padding:0;margin:0}.demoTabContainer .describe-title{line-height:50px;font-size:20px;margin:15px 0;position:relative;height:50px}.demoTabContainer .describe-title span{display:inline-block;position:absolute;color:#3e4752}.demoTabContainer .describe-title span:first-child{z-index:10;background-color:#fff;padding-right:20px}.demoTabContainer .describe-title span.line{z-index:0;width:100%;height:0;border-top:1px solid #dfe2e5;top:25px}.demoTabContainer .describeContent{font-size:14px;color:#728093;margin-top:10px}.demoTabContainer .example-code-more{position:absolute;bottom:0;left:0;right:0;text-align:center}.demoTabContainer .example-code-more a{display:block;text-decoration:none;color:#495060;opacity:.6;background-color:#fff}.demoTabContainer .example-code-more a i{vertical-align:middle;margin-right:5px;font-size:10px}.demoTabContainer .example-code-more a:hover{opacity:.9}","",{version:3,sources:["/home/travis/build/philcui/philcui.github.io.pcvue/src/components/DemoTab.vue"],names:[],mappings:"AACA,kBACE,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,wBACE,2BAA6B,CAC9B,AACD,0EACE,YAAa,AACb,+BAAiC,CAClC,AACD,oFACE,YAAc,CACf,AACD,sEACE,WAAa,CACd,AACD,6EACE,+BAAgC,AAChC,8BAA+B,AAC/B,gBAAkB,CACnB,AACD,8EACE,oBAAuB,AACvB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,8FACE,YAAa,AACb,eAAiB,CAClB,AACD,0FACE,gBAAkB,CACnB,AACD,sEACE,iBAAmB,CACpB,AACD,8DACE,kBAAmB,AACnB,UAAW,AACX,qBAAsB,AACtB,iBAAkB,AAClB,UAAY,CACb,AACD,gEACE,qBAAuB,CACxB,AACD,mEACE,eAAiB,CAClB,AACD,2BACE,cAAe,AACf,UAAa,AACb,QAAY,CACb,AACD,kCACE,iBAAkB,AAClB,eAAgB,AAChB,cAAiB,AACjB,kBAAmB,AACnB,WAAa,CACd,AACD,uCACE,qBAAsB,AACtB,kBAAmB,AACnB,aAAe,CAChB,AACD,mDACE,WAAY,AACZ,sBAAuB,AACvB,kBAAoB,CACrB,AACD,4CACE,UAAW,AACX,WAAY,AACZ,SAAY,AACZ,6BAA8B,AAC9B,QAAU,CACX,AACD,mCACE,eAAgB,AAChB,cAAe,AACf,eAAiB,CAClB,AACD,qCACE,kBAAmB,AACnB,SAAY,AACZ,OAAU,AACV,QAAW,AACX,iBAAmB,CACpB,AACD,uCACE,cAAe,AACf,qBAAsB,AACtB,cAAe,AACf,WAAa,AACb,qBAAuB,CACxB,AACD,yCACE,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,6CACE,UAAa,CACd",file:"DemoTab.vue",sourcesContent:["\n.demoTabContainer {\n  border: 1px solid #dfe2e5;\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: #fff;\n}\n.demoTabContainer:hover {\n  box-shadow: 1px 1px 5px #ccc;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-cardnav {\n  border: none;\n  border-bottom: 1px solid #dfe2e5;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before {\n  display: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  border: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {\n  border-right: 1px solid #dfe2e5;\n  border-left: 1px solid #dfe2e5;\n  margin-left: -1px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {\n  padding: 0px 30px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:last-child code {\n  border: none;\n  overflow: hidden;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:first-child {\n  padding-top: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  transition: all 0s;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right {\n  position: relative;\n  top: -38px;\n  display: inline-block;\n  line-height: 38px;\n  right: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i {\n  vertical-align: middle;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span {\n  margin-left: 5px;\n}\n.demoTabContainer pre code {\n  font-size: 1em;\n  padding: 0px;\n  margin: 0px;\n}\n.demoTabContainer .describe-title {\n  line-height: 50px;\n  font-size: 20px;\n  margin: 15px 0px;\n  position: relative;\n  height: 50px;\n}\n.demoTabContainer .describe-title span {\n  display: inline-block;\n  position: absolute;\n  color: #3e4752;\n}\n.demoTabContainer .describe-title span:first-child {\n  z-index: 10;\n  background-color: #fff;\n  padding-right: 20px;\n}\n.demoTabContainer .describe-title span.line {\n  z-index: 0;\n  width: 100%;\n  height: 0px;\n  border-top: 1px solid #dfe2e5;\n  top: 25px;\n}\n.demoTabContainer .describeContent {\n  font-size: 14px;\n  color: #728093;\n  margin-top: 10px;\n}\n.demoTabContainer .example-code-more {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.demoTabContainer .example-code-more a {\n  display: block;\n  text-decoration: none;\n  color: #495060;\n  opacity: 0.6;\n  background-color: #fff;\n}\n.demoTabContainer .example-code-more a i {\n  vertical-align: middle;\n  margin-right: 5px;\n  font-size: 10px;\n}\n.demoTabContainer .example-code-more a:hover {\n  opacity: 0.9;\n}\n"],sourceRoot:""}])},669:function(t,e,o){var a=o(668);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(602)("6d53411c",a,!0)},670:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demoTabContainer"},[o("Tabs",{attrs:{type:"card",animated:t.animated}},[o("Tab-pane",{attrs:{label:"示例"}},[t._t("sample"),t._v(" "),t.describeTitle&&t.describeTitle.length>0?o("div",{staticClass:"describe-title"},[o("span",[t._v(t._s(t.describeTitle))]),o("span",{staticClass:"line"})]):t._e(),t._v(" "),o("div",{staticClass:"describeContent"},[t._t("describe-content")],2)],2),t._v(" "),o("Tab-pane",{ref:"codeBox",attrs:{label:"代码"}},[o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[o("code",{staticClass:"html",domProps:{innerHTML:t._s(t.code)}})]),t._v(" "),o("transition",[t.hasmore?o("div",{staticClass:"example-code-more",on:{click:t.toggleMore}},[t.ishide?o("a",[o("Icon",{attrs:{type:"ios-arrow-down"}}),t._v("show code")],1):o("a",[o("Icon",{attrs:{type:"ios-arrow-up"}}),t._v("hide code")],1)]):t._e()])],1),t._v(" "),o("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.copyCode,expression:"copyCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{slot:"extra"},slot:"extra"},[o("Icon",{attrs:{type:"icon-fuzhi-copy",size:20}}),o("span",[t._v("复制")])],1)],1)],1)},staticRenderFns:[]}},678:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(666),l=o.n(a);e.default={components:{demoTab:l.a},data:function(){return{describeTitle:"基础用法",describeTitlegutter:"区块间隔",describeTitleorder:"栅格顺序(Flex)",describeTitlesort:"栅格排序",describeTitleoffset:"栅格顺序(左右偏移)",describeTitleflex:"Flex布局",describeTitlealign:"Flex对齐",describeTitleresponse:"响应式布局",describeTitleelse:"其它属性的响应式",propsColumns:[{title:"属性",key:"attribute"},{title:"说明",key:"describe",width:"350px"},{title:"类型",key:"type"},{title:"默认值",key:"default"}],rowpropsData:[{attribute:"gutter",describe:"栅格间距，单位 px，左右平分",type:"Number",default:"0"},{attribute:"type",describe:"布局模式，可选值为flex或不选，在现代浏览器下有效",type:"String",default:"-"},{attribute:"align",describe:"flex 布局下的垂直对齐方式，可选值为top、middle、bottom",type:"String",default:"-"},{attribute:"justify",describe:"flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between",type:"String",default:"-"},{attribute:"class-name",describe:"自定义的class名称",type:"String",default:"-"}],colpropsData:[{attribute:"span",describe:"栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none",type:"Number | String",default:"-"},{attribute:"order",describe:"栅格的顺序，在flex布局模式下有效",type:"Number | String",default:"-"},{attribute:"offset",describe:"栅格左侧的间隔格数，间隔内不可以有栅格",type:"Number | String",default:"-"},{attribute:"push",describe:"栅格向右移动格数",type:"Number | String",default:"-"},{attribute:"pull",describe:"栅格向左移动格数",type:"Number | String",default:"-"},{attribute:"class-name",describe:"自定义的class名称",type:"String",default:"-"},{attribute:"xs",describe:"<768px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"Number | Object",default:"-"},{attribute:"sm",describe:"≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"Number | Object",default:"-"},{attribute:"md",describe:"≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"Number | Object",default:"-"},{attribute:"lg",describe:"≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象",type:"Number | Object",default:"-"}],gridCode:'\n&lt;template>\n    &lt;Row>\n        &lt;Col span="12">col-12&lt;/Col>\n        &lt;Col span="12">col-12&lt;/Col>\n    &lt;/Row>\n    &lt;br>\n    &lt;Row>\n        &lt;Col span="8">col-8&lt;/Col>\n        &lt;Col span="8">col-8&lt;/Col>\n        &lt;Col span="8">col-8&lt;/Col>\n    &lt;/Row>\n    &lt;br>\n    &lt;Row>\n        &lt;Col span="6">col-6&lt;/Col>\n        &lt;Col span="6">col-6&lt;/Col>\n        &lt;Col span="6">col-6&lt;/Col>\n        &lt;Col span="6">col-6&lt;/Col>\n    &lt;/Row>\n&lt;/template>\n&lt;script>\n    export default {\n\n    }\n&lt;/script>\n',guttergridCode:'\n&lt;template>\n    &lt;Row :gutter="16">\n        &lt;Col span="6">\n            &lt;div>col-6&lt;/div>\n        &lt;/Col>\n        &lt;Col span="6">\n            &lt;div>col-6&lt;/div>\n        &lt;/Col>\n        &lt;Col span="6">\n            &lt;div>col-6&lt;/div>\n        &lt;/Col>\n        &lt;Col span="6">\n            &lt;div>col-6&lt;/div>\n        &lt;/Col>\n    &lt;/Row>\n&lt;/template>\n&lt;script>\n    export default {\n        \n    }\n&lt;/script>\n',ordergridCode:'\n&lt;template>\n    &lt;Row type="flex">\n        &lt;Col span="6" order="4">1 | order-4&lt;/Col>\n        &lt;Col span="6" order="3">2 | order-3&lt;/Col>\n        &lt;Col span="6" order="2">3 | order-2&lt;/Col>\n        &lt;Col span="6" order="1">4 | order-1&lt;/Col>\n    &lt;/Row>\n&lt;/template>\n&lt;script>\n    export default {\n        \n    }\n&lt;/script>\n',offsetgridCode:'\n&lt;template>\n    &lt;Row>\n        &lt;Col span="8">col-8&lt;/Col>\n        &lt;Col span="8" offset="8">col-8 | offset-8&lt;/Col>\n    &lt;/Row>\n    &lt;br>\n    &lt;Row>\n        &lt;Col span="6" offset="8">col-6 | offset-8&lt;/Col>\n        &lt;Col span="6" offset="4">col-6 | offset-4&lt;/Col>\n    &lt;/Row>\n    &lt;br>\n    &lt;Row>\n        &lt;Col span="12" offset="8">col-12 | offset-8&lt;/Col>\n    &lt;/Row>\n&lt;/template>\n&lt;script>\n    export default {\n        \n    }\n&lt;/script>\n',flexgridCode:'\n&lt;template>\n    &lt;p>子元素向左排列&lt;/p>\n    &lt;Row type="flex" justify="start" class="code-row-bg">\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n    &lt;/Row>\n    &lt;p>子元素向右排列&lt;/p>\n    &lt;Row type="flex" justify="end" class="code-row-bg">\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n    &lt;/Row>\n    &lt;p>子元素居中排列&lt;/p>\n    &lt;Row type="flex" justify="center" class="code-row-bg">\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n    &lt;/Row>\n    &lt;p>子元素等宽排列&lt;/p>\n    &lt;Row type="flex" justify="space-between" class="code-row-bg">\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n    &lt;/Row>\n    &lt;p>子元素分散排列&lt;/p>\n    &lt;Row type="flex" justify="space-around" class="code-row-bg">\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n        &lt;Col span="4">col-4&lt;/Col>\n    &lt;/Row>\n&lt;/template>\n&lt;script>\n    export default {\n        \n    }\n&lt;/script>\n',aligngridCode:'\n&lt;template>\n    &lt;p>顶部对齐&lt;/p>\n    &lt;Row type="flex" justify="center" align="top" class="code-row-bg">\n        &lt;Col span="4">&lt;p style="height: 80px">col-4&lt;/p>&lt;/Col>\n        &lt;Col span="4">&lt;p style="height: 30px">col-4&lt;/p>&lt;/Col>\n        &lt;Col span="4">&lt;p style="height: 100px">col-4&lt;/p>&lt;/Col>\n        &lt;Col span="4">&lt;p style="height: 60px">col-4&lt;/p>&lt;/Col>\n    &lt;/Row>\n    &lt;p>底部对齐&lt;/p>\n    &lt;Row type="flex" justify="center" align="bottom" class="code-row-bg">\n        &lt;Col span="4">&lt;p style="height: 80px">col-4&lt;/p>&lt;/Col>\n        &lt;Col span="4">&lt;p style="height: 30px">col-4&lt;/p>&lt;/Col>\n        &lt;Col span="4">&lt;p style="height: 100px">col-4&lt;/p>&lt;/Col>\n        &lt;Col span="4">&lt;p style="height: 60px">col-4&lt;/p>&lt;/Col>\n    &lt;/Row>\n    &lt;p>居中对齐&lt;/p>\n    &lt;Row type="flex" justify="center" align="middle" class="code-row-bg">\n        &lt;Col span="4">&lt;p style="height: 80px">col-4&lt;/p>&lt;/Col>\n        &lt;Col span="4">&lt;p style="height: 30px">col-4&lt;/p>&lt;/Col>\n        &lt;Col span="4">&lt;p style="height: 100px">col-4&lt;/p>&lt;/Col>\n        &lt;Col span="4">&lt;p style="height: 60px">col-4&lt;/p>&lt;/Col>\n    &lt;/Row>\n&lt;/template>\n&lt;script>\n    export default {\n        \n    }\n&lt;/script>\n',responsegridCode:'\n&lt;template>\n    &lt;Row>\n        &lt;Col :xs="2" :sm="4" :md="6" :lg="8">Col&lt;/Col>\n        &lt;Col :xs="20" :sm="16" :md="12" :lg="8">Col&lt;/Col>\n        &lt;Col :xs="2" :sm="4" :md="6" :lg="8">Col&lt;/Col>\n    &lt;/Row>\n&lt;/template>\n&lt;script>\n    export default {\n    }\n&lt;/script>\n',elseCode:'\n&lt;template>\n    &lt;Row>\n        &lt;Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col&lt;/Col>\n        &lt;Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col&lt;/Col>\n        &lt;Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col&lt;/Col>\n    &lt;/Row>\n&lt;/template>\n&lt;script>\n    export default {\n        \n    }\n&lt;/script>\n',sortgridCode:'\n&lt;template>\n    &lt;Row>\n        &lt;Col span="18" push="6">col-18 | push-6&lt;/Col>\n        &lt;Col span="6" pull="18">col-6 | pull-18&lt;/Col>\n    &lt;/Row>\n&lt;/template>\n&lt;script>\n    export default {\n        \n    }\n&lt;/script>\n'}}}},765:function(t,e,o){e=t.exports=o(601)(!0),e.push([t.i,".demo[data-v-4af5796c]{background-color:#fff}.ivu-col[data-v-4af5796c]{color:#fff;text-align:center;line-height:45px;font-size:1em}.ivu-col[data-v-4af5796c]:nth-child(odd){background-color:rgba(0,153,229,.7)}.ivu-col[data-v-4af5796c]:nth-child(2n){background-color:rgba(0,153,229,.5)}.demo-row[data-v-4af5796c]{margin-bottom:5px;background-image:linear-gradient(90deg,#f5f5f5 4.16666667%,transparent 0,transparent 8.33333333%,#f5f5f5 0,#f5f5f5 12.5%,transparent 0,transparent 16.66666667%,#f5f5f5 0,#f5f5f5 20.83333333%,transparent 0,transparent 25%,#f5f5f5 0,#f5f5f5 29.16666667%,transparent 0,transparent 33.33333333%,#f5f5f5 0,#f5f5f5 37.5%,transparent 0,transparent 41.66666667%,#f5f5f5 0,#f5f5f5 45.83333333%,transparent 0,transparent 50%,#f5f5f5 0,#f5f5f5 54.16666667%,transparent 0,transparent 58.33333333%,#f5f5f5 0,#f5f5f5 62.5%,transparent 0,transparent 66.66666667%,#f5f5f5 0,#f5f5f5 70.83333333%,transparent 0,transparent 75%,#f5f5f5 0,#f5f5f5 79.16666667%,transparent 0,transparent 83.33333333%,#f5f5f5 0,#f5f5f5 87.5%,transparent 0,transparent 91.66666667%,#f5f5f5 0,#f5f5f5 95.83333333%,transparent 0)}.demo-row .demo-col[data-v-4af5796c]{line-height:80px}ul[data-v-4af5796c]{margin-top:10px;margin-bottom:10px}ul li[data-v-4af5796c]{list-style:disc;margin:5px 30px}blockquote.attention[data-v-4af5796c]{padding:5px 5px 3px 10px;line-height:1.5;border-left:4px solid #ddd;margin-bottom:20px;color:#666;font-size:14px}.gutter .ivu-col[data-v-4af5796c]{background-color:#fff}.gutter .ivu-col:nth-child(odd) div[data-v-4af5796c]{background-color:rgba(0,153,229,.7)}.gutter .ivu-col:nth-child(2n) div[data-v-4af5796c]{background-color:rgba(0,153,229,.5)}","",{version:3,sources:["/home/travis/build/philcui/philcui.github.io.pcvue/src/views/basic/grid.vue"],names:[],mappings:"AACA,uBACE,qBAAuB,CACxB,AACD,0BACE,WAAY,AACZ,kBAAmB,AACnB,iBAAkB,AAClB,aAAe,CAChB,AACD,yCACE,mCAAyC,CAC1C,AACD,wCACE,mCAAyC,CAC1C,AACD,2BACE,kBAAmB,AACnB,mxBAAm0B,CACp0B,AACD,qCACE,gBAAkB,CACnB,AACD,oBACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,uBACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,sCACE,yBAA0B,AAC1B,gBAAiB,AACjB,2BAA4B,AAC5B,mBAAoB,AACpB,WAAY,AACZ,cAAgB,CACjB,AACD,kCACE,qBAAuB,CACxB,AACD,qDACE,mCAAyC,CAC1C,AACD,oDACE,mCAAyC,CAC1C",file:"grid.vue",sourcesContent:["\n.demo[data-v-4af5796c] {\n  background-color: #fff;\n}\n.ivu-col[data-v-4af5796c] {\n  color: #fff;\n  text-align: center;\n  line-height: 45px;\n  font-size: 1em;\n}\n.ivu-col[data-v-4af5796c]:nth-child(2n+1) {\n  background-color: rgba(0, 153, 229, 0.7);\n}\n.ivu-col[data-v-4af5796c]:nth-child(2n) {\n  background-color: rgba(0, 153, 229, 0.5);\n}\n.demo-row[data-v-4af5796c] {\n  margin-bottom: 5px;\n  background-image: linear-gradient(90deg, #f5f5f5 4.16666667%, transparent 0, transparent 8.33333333%, #f5f5f5 0, #f5f5f5 12.5%, transparent 0, transparent 16.66666667%, #f5f5f5 0, #f5f5f5 20.83333333%, transparent 0, transparent 25%, #f5f5f5 0, #f5f5f5 29.16666667%, transparent 0, transparent 33.33333333%, #f5f5f5 0, #f5f5f5 37.5%, transparent 0, transparent 41.66666667%, #f5f5f5 0, #f5f5f5 45.83333333%, transparent 0, transparent 50%, #f5f5f5 0, #f5f5f5 54.16666667%, transparent 0, transparent 58.33333333%, #f5f5f5 0, #f5f5f5 62.5%, transparent 0, transparent 66.66666667%, #f5f5f5 0, #f5f5f5 70.83333333%, transparent 0, transparent 75%, #f5f5f5 0, #f5f5f5 79.16666667%, transparent 0, transparent 83.33333333%, #f5f5f5 0, #f5f5f5 87.5%, transparent 0, transparent 91.66666667%, #f5f5f5 0, #f5f5f5 95.83333333%, transparent 0);\n}\n.demo-row .demo-col[data-v-4af5796c] {\n  line-height: 80px;\n}\nul[data-v-4af5796c] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nul li[data-v-4af5796c] {\n  list-style: disc;\n  margin: 5px 30px;\n}\nblockquote.attention[data-v-4af5796c] {\n  padding: 5px 5px 3px 10px;\n  line-height: 1.5;\n  border-left: 4px solid #ddd;\n  margin-bottom: 20px;\n  color: #666;\n  font-size: 14px;\n}\n.gutter .ivu-col[data-v-4af5796c] {\n  background-color: #fff;\n}\n.gutter .ivu-col:nth-child(2n+1) div[data-v-4af5796c] {\n  background-color: rgba(0, 153, 229, 0.7);\n}\n.gutter .ivu-col:nth-child(2n) div[data-v-4af5796c] {\n  background-color: rgba(0, 153, 229, 0.5);\n}\n"],sourceRoot:""}])},825:function(t,e,o){var a=o(765);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(602)("ff845cd2",a,!0)},904:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"doc-grid-container"},[o("h1",[t._v("Grid 栅格")]),t._v(" "),o("h2",[t._v("概述")]),t._v(" "),o("section",{staticClass:"demo"},[o("Row",{staticClass:"demo-row"},[o("Col",{staticClass:"demo-col",attrs:{span:"24"}},[t._v("24：100%")])],1),t._v(" "),o("Row",{staticClass:"demo-row"},[o("Col",{staticClass:"demo-col",attrs:{span:"12"}},[t._v("12: 50%")]),t._v(" "),o("Col",{staticClass:"demo-col",attrs:{span:"12"}},[t._v("12: 50%")])],1),t._v(" "),o("Row",{staticClass:"demo-row"},[o("Col",{staticClass:"demo-col",attrs:{span:"8"}},[t._v("8：33.33%")]),t._v(" "),o("Col",{staticClass:"demo-col",attrs:{span:"8"}},[t._v("8：33.33%")]),t._v(" "),o("Col",{staticClass:"demo-col",attrs:{span:"8"}},[t._v("8：33.33%")])],1),t._v(" "),o("Row",{staticClass:"demo-row"},[o("Col",{staticClass:"demo-col",attrs:{span:"6"}},[t._v("6：25%")]),t._v(" "),o("Col",{staticClass:"demo-col",attrs:{span:"6"}},[t._v("6：25%")]),t._v(" "),o("Col",{staticClass:"demo-col",attrs:{span:"6"}},[t._v("6：25%")]),t._v(" "),o("Col",{staticClass:"demo-col",attrs:{span:"6"}},[t._v("6：25%")])],1),t._v(" "),o("Row",{staticClass:"demo-row"},[o("Col",{staticClass:"demo-col",attrs:{span:"16"}},[t._v("16：66.66%")]),t._v(" "),o("Col",{staticClass:"demo-col",attrs:{span:"8"}},[t._v("8：33.33%")])],1)],1),t._v(" "),o("p",[t._v("我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。\n我们定义了两个概念，行row和列col，具体使用方法如下：")]),t._v(" "),t._m(0),t._v(" "),o("blockquote",{staticClass:"attention"},[t._v("注意：非 template/render 模式下，需使用 i-col。")]),t._v(" "),o("h2",[t._v("代码示例")]),t._v(" "),o("section",{staticClass:"demo",attrs:{id:"basic"}},[o("demoTab",{attrs:{code:t.gridCode,describeTitle:t.describeTitle}},[o("div",{attrs:{slot:"sample"},slot:"sample"},[o("Row",[o("Col",{attrs:{span:"12"}},[t._v("col-12")]),t._v(" "),o("Col",{attrs:{span:"12"}},[t._v("col-12")])],1),t._v(" "),o("br"),t._v(" "),o("Row",[o("Col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),o("Col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),o("Col",{attrs:{span:"8"}},[t._v("col-8")])],1),t._v(" "),o("br"),t._v(" "),o("Row",[o("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),o("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),o("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),o("Col",{attrs:{span:"6"}},[t._v("col-6")])],1)],1),t._v(" "),o("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n           水平排列的布局。"),o("br"),t._v("\n           col必须放在row里面。\n        ")])])],1),t._v(" "),o("section",{staticClass:"demo",attrs:{id:"gutter"}},[o("demoTab",{attrs:{code:t.guttergridCode,describeTitle:t.describeTitlegutter}},[o("div",{staticClass:"gutter",attrs:{slot:"sample"},slot:"sample"},[o("Row",{attrs:{gutter:16}},[o("Col",{attrs:{span:"6"}},[o("div",[t._v("col-6")])]),t._v(" "),o("Col",{attrs:{span:"6"}},[o("div",[t._v("col-6")])]),t._v(" "),o("Col",{attrs:{span:"6"}},[o("div",[t._v("col-6")])]),t._v(" "),o("Col",{attrs:{span:"6"}},[o("div",[t._v("col-6")])])],1)],1),t._v(" "),o("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n            通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。\n          ")])])],1),t._v(" "),o("section",{staticClass:"demo",attrs:{id:"order"}},[o("demoTab",{attrs:{code:t.ordergridCode,describeTitle:t.describeTitleorder}},[o("div",{attrs:{slot:"sample"},slot:"sample"},[o("Row",{attrs:{type:"flex"}},[o("Col",{attrs:{span:"6",order:"4"}},[t._v("1 | order-4")]),t._v(" "),o("Col",{attrs:{span:"6",order:"3"}},[t._v("2 | order-3")]),t._v(" "),o("Col",{attrs:{span:"6",order:"2"}},[t._v("3 | order-2")]),t._v(" "),o("Col",{attrs:{span:"6",order:"1"}},[t._v("4 | order-1")])],1)],1),t._v(" "),o("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n            通过 Flex 布局的order来改变栅格的顺序。\n          ")])])],1),t._v(" "),o("section",{staticClass:"demo",attrs:{id:"sort"}},[o("demoTab",{attrs:{code:t.sortgridCode,describeTitle:t.describeTitlesort}},[o("div",{attrs:{slot:"sample"},slot:"sample"},[o("Row",[o("Col",{attrs:{span:"18",push:"6"}},[t._v("col-18 | push-6")]),t._v(" "),o("Col",{attrs:{span:"6",pull:"18"}},[t._v("col-6 | pull-18")])],1)],1),t._v(" "),o("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n             通过设置push和pull来改变栅格的顺序。\n          ")])])],1),t._v(" "),o("section",{staticClass:"demo",attrs:{id:"offset"}},[o("demoTab",{attrs:{code:t.offsetgridCode,describeTitle:t.describeTitleoffset}},[o("div",{attrs:{slot:"sample"},slot:"sample"},[o("Row",[o("Col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),o("Col",{attrs:{span:"8",offset:"8"}},[t._v("col-8 | offset-8")])],1),t._v(" "),o("br"),t._v(" "),o("Row",[o("Col",{attrs:{span:"6",offset:"8"}},[t._v("col-6 | offset-8")]),t._v(" "),o("Col",{attrs:{span:"6",offset:"4"}},[t._v("col-6 | offset-4")])],1),t._v(" "),o("br"),t._v(" "),o("Row",[o("Col",{attrs:{span:"12",offset:"8"}},[t._v("col-12 | offset-8")])],1)],1),t._v(" "),o("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n             通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。\n          ")])])],1),t._v(" "),o("section",{staticClass:"demo",attrs:{id:"flex"}},[o("demoTab",{attrs:{code:t.flexgridCode,describeTitle:t.describeTitleflex}},[o("div",{attrs:{slot:"sample"},slot:"sample"},[o("p",[t._v("子元素向左排列")]),t._v(" "),o("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"start"}},[o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")])],1),t._v(" "),o("p",[t._v("子元素向右排列")]),t._v(" "),o("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"end"}},[o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")])],1),t._v(" "),o("p",[t._v("子元素居中排列")]),t._v(" "),o("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")])],1),t._v(" "),o("p",[t._v("子元素等宽排列")]),t._v(" "),o("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"space-between"}},[o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")])],1),t._v(" "),o("p",[t._v("子元素分散排列")]),t._v(" "),o("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"space-around"}},[o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")]),t._v(" "),o("Col",{attrs:{span:"4"}},[t._v("col-4")])],1)],1),t._v(" "),o("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n             通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。\n          ")])])],1),t._v(" "),o("section",{staticClass:"demo",attrs:{id:"align"}},[o("demoTab",{attrs:{code:t.aligngridCode,describeTitle:t.describeTitlealign}},[o("div",{attrs:{slot:"sample"},slot:"sample"},[o("p",[t._v("顶部对齐")]),t._v(" "),o("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center",align:"top"}},[o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"80px"}},[t._v("col-4")])]),t._v(" "),o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"30px"}},[t._v("col-4")])]),t._v(" "),o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"100px"}},[t._v("col-4")])]),t._v(" "),o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"60px"}},[t._v("col-4")])])],1),t._v(" "),o("p",[t._v("底部对齐")]),t._v(" "),o("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center",align:"bottom"}},[o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"80px"}},[t._v("col-4")])]),t._v(" "),o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"30px"}},[t._v("col-4")])]),t._v(" "),o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"100px"}},[t._v("col-4")])]),t._v(" "),o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"60px"}},[t._v("col-4")])])],1),t._v(" "),o("p",[t._v("居中对齐")]),t._v(" "),o("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center",align:"middle"}},[o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"80px"}},[t._v("col-4")])]),t._v(" "),o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"30px"}},[t._v("col-4")])]),t._v(" "),o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"100px"}},[t._v("col-4")])]),t._v(" "),o("Col",{attrs:{span:"4"}},[o("p",{staticStyle:{height:"60px"}},[t._v("col-4")])])],1)],1),t._v(" "),o("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n                通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。\n              ")])])],1),t._v(" "),o("section",{staticClass:"demo",attrs:{id:"response"}},[o("demoTab",{attrs:{code:t.responsegridCode,describeTitle:t.describeTitleresponse}},[o("div",{attrs:{slot:"sample"},slot:"sample"},[o("Row",[o("Col",{attrs:{xs:2,sm:4,md:6,lg:8}},[t._v("Col")]),t._v(" "),o("Col",{attrs:{xs:20,sm:16,md:12,lg:8}},[t._v("Col")]),t._v(" "),o("Col",{attrs:{xs:2,sm:4,md:6,lg:8}},[t._v("Col")])],1)],1),t._v(" "),o("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n             参照 Bootstrap 的 响应式设计，预设四个响应尺寸：xs sm md lg，详见 API。调整浏览器尺寸来查看效果。\n          ")])])],1),t._v(" "),o("section",{staticClass:"demo",attrs:{id:"else"}},[o("demoTab",{attrs:{code:t.elseCode,describeTitle:t.describeTitleelse}},[o("div",{attrs:{slot:"sample"},slot:"sample"},[o("Row",[o("Col",{attrs:{xs:{span:5,offset:1},lg:{span:6,offset:2}}},[t._v("Col")]),t._v(" "),o("Col",{attrs:{xs:{span:11,offset:1},lg:{span:6,offset:2}}},[t._v("Col")]),t._v(" "),o("Col",{attrs:{xs:{span:5,offset:1},lg:{span:6,offset:2}}},[t._v("Col")])],1)],1),t._v(" "),o("div",{attrs:{slot:"describe-content"},slot:"describe-content"},[t._v("\n            span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。"),o("br"),t._v('\n            其中 :xs="6" 相当于 :xs="{ span: 6 }"。\n          ')])])],1),t._v(" "),o("h2",{attrs:{id:"api"}},[t._v("API")]),t._v(" "),o("h3",[t._v("Row props")]),t._v(" "),o("section",{staticClass:"demo"},[o("Table",{attrs:{border:"",columns:t.propsColumns,data:t.rowpropsData}})],1),t._v(" "),o("h3",[t._v("Col props")]),t._v(" "),o("section",{staticClass:"demo"},[o("Table",{attrs:{border:"",columns:t.propsColumns,data:t.colpropsData}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[t._v("使用row在水平方向创建一行")]),t._v(" "),o("li",[t._v("将一组col插入在row中")]),t._v(" "),o("li",[t._v("在每个col中，键入自己的内容")]),t._v(" "),o("li",[t._v("通过设置col的span参数，指定跨越的范围，其范围是1到24")]),t._v(" "),o("li",[t._v("每个row中的col总和应该为24")])])}]}}});
//# sourceMappingURL=42.fb699cf26ee8c41bf525.js.map