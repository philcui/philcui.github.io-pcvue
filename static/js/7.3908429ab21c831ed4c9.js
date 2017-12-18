webpackJsonp([7],{

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(837)
}
var Component = __webpack_require__(99)(
  /* script */
  __webpack_require__(702),
  /* template */
  __webpack_require__(918),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-8e9d4992",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(669)
}
var Component = __webpack_require__(99)(
  /* script */
  __webpack_require__(667),
  /* template */
  __webpack_require__(670),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'demoTab',
  props: {
    // code 要显示的代码内容
    code: String,
    // describeTitle 示例框中下部分的标题
    describeTitle: {
      type: String,
      default: ''
    },
    animated: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      "hasmore": false,
      "ishide": true,
      "exampleHeight": 80,
      "codeHeight": 80
    };
  },

  methods: {
    onCopy: function onCopy(e) {
      this.$Message.success('Code copied');
    },
    onError: function onError(e) {
      this.$Message.success('something wrong');
    },
    toggleMore: function toggleMore() {
      this.ishide = !this.ishide;
      if (this.ishide) {
        this.$el.querySelectorAll('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane')[1].style.height = this.exampleHeight + "px";
      } else {
        this.$el.querySelectorAll('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane')[1].style.height = this.codeHeight + "px";
      }
    }
  },
  computed: {
    copyCode: function copyCode() {
      return this.code.replace(/&lt;/g, "<");
    }
  },
  mounted: function mounted() {
    var _this = this;
    setTimeout(function () {
      //  let containers = document.querySelectorAll(".ivu-tabs-content")
      var container = _this.$el;
      var first = container.querySelector('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane');
      first.querySelectorAll('.ivu-tabs-tabpane > div').forEach(function (element) {
        _this.exampleHeight += element.clientHeight;
      });
      _this.codeHeight = container.querySelectorAll('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane')[1].clientHeight;
      if (_this.codeHeight > _this.exampleHeight) {
        _this.hasmore = true;
        container.querySelectorAll('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane')[1].style.height = _this.exampleHeight + 'px';
      }
    }, 0);
  }
});

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(601)(true);
// imports


// module
exports.push([module.i, ".demoTabContainer{border:1px solid #dfe2e5;border-radius:3px;overflow:hidden;background-color:#fff}.demoTabContainer:hover{box-shadow:1px 1px 5px #ccc}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-cardnav{border:none;border-bottom:1px solid #dfe2e5}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active:before{display:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{border:none}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active{border-right:1px solid #dfe2e5;border-left:1px solid #dfe2e5;margin-left:-1px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane{padding:0 30px 15px;background-color:#fff;position:relative}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:last-child code{border:none;overflow:hidden}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane:first-child{padding-top:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{transition:all 0s}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right{position:relative;top:-38px;display:inline-block;line-height:38px;right:30px}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i{vertical-align:middle}.demoTabContainer>.ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span{margin-left:5px}.demoTabContainer pre code{font-size:1em;padding:0;margin:0}.demoTabContainer .describe-title{line-height:50px;font-size:20px;margin:15px 0;position:relative;height:50px}.demoTabContainer .describe-title span{display:inline-block;position:absolute;color:#3e4752}.demoTabContainer .describe-title span:first-child{z-index:10;background-color:#fff;padding-right:20px}.demoTabContainer .describe-title span.line{z-index:0;width:100%;height:0;border-top:1px solid #dfe2e5;top:25px}.demoTabContainer .describeContent{font-size:14px;color:#728093;margin-top:10px}.demoTabContainer .example-code-more{position:absolute;bottom:0;left:0;right:0;text-align:center}.demoTabContainer .example-code-more a{display:block;text-decoration:none;color:#495060;opacity:.6;background-color:#fff}.demoTabContainer .example-code-more a i{vertical-align:middle;margin-right:5px;font-size:10px}.demoTabContainer .example-code-more a:hover{opacity:.9}", "", {"version":3,"sources":["/home/travis/build/philcui/philcui.github.io.pcvue/src/components/DemoTab.vue"],"names":[],"mappings":"AACA,kBACE,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,wBACE,2BAA6B,CAC9B,AACD,0EACE,YAAa,AACb,+BAAiC,CAClC,AACD,oFACE,YAAc,CACf,AACD,sEACE,WAAa,CACd,AACD,6EACE,+BAAgC,AAChC,8BAA+B,AAC/B,gBAAkB,CACnB,AACD,8EACE,oBAAuB,AACvB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,8FACE,YAAa,AACb,eAAiB,CAClB,AACD,0FACE,gBAAkB,CACnB,AACD,sEACE,iBAAmB,CACpB,AACD,8DACE,kBAAmB,AACnB,UAAW,AACX,qBAAsB,AACtB,iBAAkB,AAClB,UAAY,CACb,AACD,gEACE,qBAAuB,CACxB,AACD,mEACE,eAAiB,CAClB,AACD,2BACE,cAAe,AACf,UAAa,AACb,QAAY,CACb,AACD,kCACE,iBAAkB,AAClB,eAAgB,AAChB,cAAiB,AACjB,kBAAmB,AACnB,WAAa,CACd,AACD,uCACE,qBAAsB,AACtB,kBAAmB,AACnB,aAAe,CAChB,AACD,mDACE,WAAY,AACZ,sBAAuB,AACvB,kBAAoB,CACrB,AACD,4CACE,UAAW,AACX,WAAY,AACZ,SAAY,AACZ,6BAA8B,AAC9B,QAAU,CACX,AACD,mCACE,eAAgB,AAChB,cAAe,AACf,eAAiB,CAClB,AACD,qCACE,kBAAmB,AACnB,SAAY,AACZ,OAAU,AACV,QAAW,AACX,iBAAmB,CACpB,AACD,uCACE,cAAe,AACf,qBAAsB,AACtB,cAAe,AACf,WAAa,AACb,qBAAuB,CACxB,AACD,yCACE,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,6CACE,UAAa,CACd","file":"DemoTab.vue","sourcesContent":["\n.demoTabContainer {\n  border: 1px solid #dfe2e5;\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: #fff;\n}\n.demoTabContainer:hover {\n  box-shadow: 1px 1px 5px #ccc;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-cardnav {\n  border: none;\n  border-bottom: 1px solid #dfe2e5;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before {\n  display: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  border: none;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {\n  border-right: 1px solid #dfe2e5;\n  border-left: 1px solid #dfe2e5;\n  margin-left: -1px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {\n  padding: 0px 30px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:last-child code {\n  border: none;\n  overflow: hidden;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane:first-child {\n  padding-top: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {\n  transition: all 0s;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right {\n  position: relative;\n  top: -38px;\n  display: inline-block;\n  line-height: 38px;\n  right: 30px;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right i {\n  vertical-align: middle;\n}\n.demoTabContainer > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right span {\n  margin-left: 5px;\n}\n.demoTabContainer pre code {\n  font-size: 1em;\n  padding: 0px;\n  margin: 0px;\n}\n.demoTabContainer .describe-title {\n  line-height: 50px;\n  font-size: 20px;\n  margin: 15px 0px;\n  position: relative;\n  height: 50px;\n}\n.demoTabContainer .describe-title span {\n  display: inline-block;\n  position: absolute;\n  color: #3e4752;\n}\n.demoTabContainer .describe-title span:first-child {\n  z-index: 10;\n  background-color: #fff;\n  padding-right: 20px;\n}\n.demoTabContainer .describe-title span.line {\n  z-index: 0;\n  width: 100%;\n  height: 0px;\n  border-top: 1px solid #dfe2e5;\n  top: 25px;\n}\n.demoTabContainer .describeContent {\n  font-size: 14px;\n  color: #728093;\n  margin-top: 10px;\n}\n.demoTabContainer .example-code-more {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.demoTabContainer .example-code-more a {\n  display: block;\n  text-decoration: none;\n  color: #495060;\n  opacity: 0.6;\n  background-color: #fff;\n}\n.demoTabContainer .example-code-more a i {\n  vertical-align: middle;\n  margin-right: 5px;\n  font-size: 10px;\n}\n.demoTabContainer .example-code-more a:hover {\n  opacity: 0.9;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(668);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(602)("6d53411c", content, true);

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "demoTabContainer"
  }, [_c('Tabs', {
    attrs: {
      "type": "card",
      "animated": _vm.animated
    }
  }, [_c('Tab-pane', {
    attrs: {
      "label": "示例"
    }
  }, [_vm._t("sample"), _vm._v(" "), (_vm.describeTitle && _vm.describeTitle.length > 0) ? _c('div', {
    staticClass: "describe-title"
  }, [_c('span', [_vm._v(_vm._s(_vm.describeTitle))]), _c('span', {
    staticClass: "line"
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "describeContent"
  }, [_vm._t("describe-content")], 2)], 2), _vm._v(" "), _c('Tab-pane', {
    ref: "codeBox",
    attrs: {
      "label": "代码"
    }
  }, [_c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "html",
    domProps: {
      "innerHTML": _vm._s(_vm.code)
    }
  })]), _vm._v(" "), _c('transition', [(_vm.hasmore) ? _c('div', {
    staticClass: "example-code-more",
    on: {
      "click": _vm.toggleMore
    }
  }, [(_vm.ishide) ? _c('a', [_c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  }), _vm._v("show code")], 1) : _c('a', [_c('Icon', {
    attrs: {
      "type": "ios-arrow-up"
    }
  }), _vm._v("hide code")], 1)]) : _vm._e()])], 1), _vm._v(" "), _c('a', {
    directives: [{
      name: "clipboard",
      rawName: "v-clipboard:copy",
      value: (_vm.copyCode),
      expression: "copyCode",
      arg: "copy"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:success",
      value: (_vm.onCopy),
      expression: "onCopy",
      arg: "success"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:error",
      value: (_vm.onError),
      expression: "onError",
      arg: "error"
    }],
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  }, [_c('Icon', {
    attrs: {
      "type": "icon-fuzhi-copy",
      "size": 20
    }
  }), _c('span', [_vm._v("复制")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DemoTab__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DemoTab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_DemoTab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utvue_src_directives_clickoutside__ = __webpack_require__(870);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    clickoutside: __WEBPACK_IMPORTED_MODULE_1_utvue_src_directives_clickoutside__["a" /* default */]
  },
  components: {
    demoTab: __WEBPACK_IMPORTED_MODULE_0__components_DemoTab___default.a
  },
  data: function data() {
    return {
      icon: "ios-arrow-down",
      visible: false,
      propsColumns: [{
        title: '属性',
        key: 'attribute'
      }, {
        title: '说明',
        key: 'describe',
        width: '350px'
      }, {
        title: '类型',
        key: 'type'
      }, {
        title: '默认值',
        key: 'default'
      }],
      propsData: [{
        attribute: 'trigger',
        describe: '触发方式，可选值为 <code>hover</code>（悬停）<code>click</code>（点击）<code>custom</code>（自定义），使用 custom 时，需配合 visible 一起使用',
        type: "String",
        default: "hover"
      }, {
        attribute: 'visible',
        describe: '手动控制下拉框的显示，在 trigger = "custom" 时使用',
        type: "Boolean",
        default: "false"
      }, {
        attribute: 'placement',
        describe: '下拉菜单出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>',
        type: "String",
        default: "bottom"
      }, {
        attribute: 'transfer',
        describe: '是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果',
        type: "Boolean",
        default: "false"
      }],
      eventsColumns: [{
        title: '事件名',
        key: 'eventsName'
      }, {
        title: '说明',
        key: 'describe',
        width: '450px'
      }, {
        title: '返回值',
        key: 'return'
      }],
      eventsData: [{
        eventsName: 'on-click',
        describe: '点击菜单项时触发',
        return: "Dropdown-item 的 name 值"
      }, {
        eventsName: 'on-visible-change',
        describe: '菜单显示状态改变时调用',
        return: "visible"
      }],
      slotColumns: [{
        title: '名称',
        key: 'name'
      }, {
        title: '说明',
        key: 'describe',
        width: '500px'
      }],
      slotData: [{
        name: '无',
        describe: '主体内容'
      }, {
        name: 'list',
        describe: '列表内容，一般由 <code>Dropdown-menu</code> 承担'
      }],
      itemColumns: [{
        title: '属性',
        key: 'attribute'
      }, {
        title: '说明',
        key: 'describe',
        width: '350px'
      }, {
        title: '类型',
        key: 'type'
      }, {
        title: '默认值',
        key: 'default'
      }],
      itemData: [{
        attribute: 'name',
        describe: '用来标识这一项',
        type: "String",
        default: "-"
      }, {
        attribute: 'disabled',
        describe: '禁用该项',
        type: "Boolean",
        default: "false"
      }, {
        attribute: 'divided',
        describe: '显示分割线',
        type: "Boolean",
        default: "false"
      }, {
        attribute: 'selected',
        describe: '标记该项为选中状态',
        type: "Boolean",
        default: "false"
      }],
      "subTitle1": "基本用法",
      "dropdownCode": '\n      &lt;template>\n         &lt;Dropdown>\n           &lt;a href="javascript:void(0)">\n               \u4E0B\u62C9\u83DC\u5355\n               &lt;Icon type="arrow-down-b">&lt;/Icon>\n           &lt;/a>\n           &lt;Dropdown-menu slot="list">\n               &lt;Dropdown-item>\u9A74\u6253\u6EDA&lt;/Dropdown-item>\n               &lt;Dropdown-item disabled>\u8C46\u6C41\u513F&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u51B0\u7CD6\u846B\u82A6&lt;/Dropdown-item>\n               &lt;Dropdown-item divided>\u5317\u4EAC\u70E4\u9E2D&lt;/Dropdown-item>\n           &lt;/Dropdown-menu>\n         &lt;/Dropdown>\n         &lt;Dropdown style="margin-left: 20px" trigger="click"  v-clickoutside="changeDown" @on-click="changeDown">\n           &lt;Button @click="changeDownOrUp">\n               \u6279\u91CF\u64CD\u4F5C\n               &lt;Icon ref="icon" :type="icon">&lt;/Icon>\n           &lt;/Button>\n           &lt;Dropdown-menu slot="list">\n               &lt;Dropdown-item>\u6279\u91CF\u4FEE\u6539&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u6279\u91CF\u5220\u9664&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u6279\u91CF\u5BFC\u51FA&lt;/Dropdown-item>\n           &lt;/Dropdown-menu>\n         &lt;/Dropdown>\n      &lt;/template>\n      &lt;script>\n          export default {\n            data () {\n              return {\n                  icon:"ios-arrow-down"\n              }\n            },\n            methods: {\n                changeDownOrUp(){\n                  const icon = this.$refs.icon.$props.type;\n                  if(icon=="ios-arrow-up"){\n                    this.icon=\'ios-arrow-down\';\n                  }else {\n                    this.icon=\'ios-arrow-up\';\n                  }\n                },\n                changeDown(){\n                  this.icon=\'ios-arrow-down\';\n                }\n            }\n          }\n      &lt;/script>\n      ',
      "subTitle2": "触发方式",
      "dropdownCode2": '\n      &lt;template>\n         &lt;Dropdown>\n           &lt;a href="javascript:void(0)">\n               hover \u89E6\u53D1\n               &lt;Icon type="arrow-down-b">&lt;/Icon>\n           &lt;/a>\n           &lt;Dropdown-menu slot="list">\n               &lt;Dropdown-item>\u9A74\u6253\u6EDA&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u70B8\u9171\u9762&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u51B0\u7CD6\u846B\u82A6&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u5317\u4EAC\u70E4\u9E2D&lt;/Dropdown-item>\n           &lt;/Dropdown-menu>\n         &lt;/Dropdown>\n         &lt;Dropdown style="margin-left: 20px" trigger="click">\n           &lt;a href="javascript:void(0)">\n               click \u89E6\u53D1\n               &lt;Icon type="arrow-down-b">&lt;/Icon>\n           &lt;/a>\n           &lt;Dropdown-menu slot="list">\n               &lt;Dropdown-item>\u9A74\u6253\u6EDA&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u70B8\u9171\u9762&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u51B0\u7CD6\u846B\u82A6&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u5317\u4EAC\u70E4\u9E2D&lt;/Dropdown-item>\n           &lt;/Dropdown-menu>\n         &lt;/Dropdown>\n         &lt;Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">\n           &lt;a href="javascript:void(0)" @click="handleOpen">\n               custom \u89E6\u53D1\n               &lt;Icon type="arrow-down-b">&lt;/Icon>\n           &lt;/a>\n           &lt;Dropdown-menu slot="list">\n               &lt;p>\u5E38\u7528\u4E8E\u5404\u79CD\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5185\u5BB9\u7684\u573A\u666F\u3002&lt;/p>\n               &lt;div style="text-align: right;margin:10px;">\n                   &lt;Button type="primary" @click="handleClose">\u5173\u95ED&lt;/Button>\n               &lt;/div>\n           &lt;/Dropdown-menu>\n         &lt;/Dropdown>\n      &lt;/template>\n      &lt;script>\n          export default {\n            data () {\n              return {\n                  visible: false\n              }\n            },\n            methods: {\n                handleOpen () {\n                  this.visible = true;\n                },\n                handleClose () {\n                    this.visible = false;\n                }\n            }\n          }\n      &lt;/script>\n      ',
      "subTitle3": "对齐方向 ",
      "dropdownCode3": '\n      &lt;template>\n         &lt;Dropdown placement="bottom-start">\n           &lt;a href="javascript:void(0)">\n               \u83DC\u5355(\u5DE6)\n               &lt;Icon type="arrow-down-b">&lt;/Icon>\n           &lt;/a>\n           &lt;Dropdown-menu slot="list">\n               &lt;Dropdown-item>\u9A74\u6253\u6EDA&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u70B8\u9171\u9762&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u5317\u4EAC\u70E4\u9E2D&lt;/Dropdown-item>\n           &lt;/Dropdown-menu>\n         &lt;/Dropdown>\n         &lt;Dropdown style="margin-left: 20px">\n           &lt;a href="javascript:void(0)">\n               \u83DC\u5355(\u5C45\u4E2D)\n               &lt;Icon type="arrow-down-b">&lt;/Icon>\n           &lt;/a>\n           &lt;Dropdown-menu slot="list">\n               &lt;Dropdown-item>\u9A74\u6253\u6EDA&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u70B8\u9171\u9762&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u5317\u4EAC\u70E4\u9E2D&lt;/Dropdown-item>\n           &lt;/Dropdown-menu>\n         &lt;/Dropdown>\n         &lt;Dropdown placement="bottom-end" style="margin-left: 20px">\n           &lt;a href="javascript:void(0)">\n               \u83DC\u5355(\u53F3)\n               &lt;Icon type="arrow-down-b">&lt;/Icon>\n           &lt;/a>\n           &lt;Dropdown-menu slot="list">\n               &lt;Dropdown-item>\u9A74\u6253\u6EDA&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u70B8\u9171\u9762&lt;/Dropdown-item>\n               &lt;Dropdown-item>\u5317\u4EAC\u70E4\u9E2D&lt;/Dropdown-item>\n           &lt;/Dropdown-menu>\n         &lt;/Dropdown>\n      &lt;/template>\n      &lt;script>\n          export default {\n          }\n      &lt;/script>\n      ',
      "subTitle4": "嵌套用法",
      "dropdownCode4": '\n      &lt;template>\n         &lt;Dropdown>\n           &lt;a href="javascript:void(0)">\n               \u5317\u4EAC\u5C0F\u5403\n               &lt;Icon type="arrow-down-b">&lt;/Icon>\n           &lt;/a>\n           &lt;Dropdown-menu slot="list">\n               &lt;Dropdown-item>\u9A74\u6253\u6EDA&lt;/Dropdown-item>\n               &lt;Dropdown placement="right-start">\n                   &lt;Dropdown-item>\n                       \u5317\u4EAC\u70E4\u9E2D\n                       &lt;Icon type="arrow-down-b">&lt;/Icon>\n                   &lt;/Dropdown-item>\n                   &lt;Dropdown-menu slot="list">\n                       &lt;Dropdown-item>\u6302\u7089\u70E4\u9E2D&lt;/Dropdown-item>\n                       &lt;Dropdown-item>\u7116\u7089\u70E4\u9E2D&lt;/Dropdown-item>\n                   &lt;/Dropdown-menu>\n               &lt;/Dropdown>\n               &lt;Dropdown-item>\u51B0\u7CD6\u846B\u82A6&lt;/Dropdown-item>\n           &lt;/Dropdown-menu>\n         &lt;/Dropdown>\n      &lt;/template>\n      &lt;script>\n          export default {\n          }\n      &lt;/script>\n      '
    };
  },

  methods: {
    changeDownOrUp: function changeDownOrUp() {
      var icon = this.$refs.icon.$props.type;
      if (icon == "ios-arrow-up") {
        this.icon = 'ios-arrow-down';
      } else {
        this.icon = 'ios-arrow-up';
      }
    },
    changeDown: function changeDown() {
      this.icon = 'ios-arrow-down';
    },
    handleOpen: function handleOpen() {
      this.visible = true;
    },
    handleClose: function handleClose() {
      this.visible = false;
    }
  }

});

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(601)(true);
// imports


// module
exports.push([module.i, "code[data-v-8e9d4992]{display:inline-block;background:#f7f7f7;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;margin:0 3px;padding:1px 5px;border-radius:3px;color:#666;border:1px solid #eee}", "", {"version":3,"sources":["/home/travis/build/philcui/philcui.github.io.pcvue/src/views/navigation/dropDown.vue"],"names":[],"mappings":"AACA,sBACE,qBAAsB,AACtB,mBAAoB,AACpB,8DAA+D,AAC/D,aAAc,AACd,gBAAiB,AACjB,kBAAmB,AACnB,WAAY,AACZ,qBAAuB,CACxB","file":"dropDown.vue","sourcesContent":["\ncode[data-v-8e9d4992] {\n  display: inline-block;\n  background: #f7f7f7;\n  font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;\n  margin: 0 3px;\n  padding: 1px 5px;\n  border-radius: 3px;\n  color: #666;\n  border: 1px solid #eee;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(777);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(602)("6ea8fca1", content, true);

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    bind (el, binding, vnode) {
        function documentHandler (e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    update () {

    },
    unbind (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
});

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "doc-dropdown-container"
  }, [_c('h1', [_vm._v("Dropdown 下拉菜单")]), _vm._v(" "), _c('h2', [_vm._v("概述")]), _vm._v(" "), _c('p', [_vm._v("\n    展示一组折叠的下拉菜单。\n  ")]), _vm._v(" "), _c('h2', [_vm._v("代码示例")]), _vm._v(" "), _c('section', {
    staticClass: "demo",
    attrs: {
      "id": "dropDown1"
    }
  }, [_c('demoTab', {
    attrs: {
      "code": _vm.dropdownCode,
      "describeTitle": _vm.subTitle1
    }
  }, [_c('div', {
    attrs: {
      "slot": "sample"
    },
    slot: "sample"
  }, [_c('Dropdown', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n            下拉菜单\n            "), _c('Icon', {
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("驴打滚")]), _vm._v(" "), _c('Dropdown-item', {
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("豆汁儿")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("冰糖葫芦")]), _vm._v(" "), _c('Dropdown-item', {
    attrs: {
      "divided": ""
    }
  }, [_vm._v("北京烤鸭")])], 1)], 1), _vm._v(" "), _c('Dropdown', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.changeDown),
      expression: "changeDown"
    }],
    staticStyle: {
      "margin-left": "20px"
    },
    attrs: {
      "trigger": "click"
    },
    on: {
      "on-click": _vm.changeDown
    }
  }, [_c('Button', {
    on: {
      "click": _vm.changeDownOrUp
    }
  }, [_vm._v("\n            批量操作\n            "), _c('Icon', {
    ref: "icon",
    attrs: {
      "type": _vm.icon
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("批量修改")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("批量删除")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("批量导出")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "describe-content"
    },
    slot: "describe-content"
  }, [_vm._v("\n        需要配合"), _c('code', [_vm._v("Dropdown-menu")]), _vm._v(" 和"), _c('code', [_vm._v(" Dropdown-item")]), _vm._v(" 两个组件来使用，并且给列表设置具名 slot 为 "), _c('code', [_vm._v("list")]), _vm._v("。\n        触发对象可以是链接、按钮等各种元素。\n        本例还展示了禁用项和分隔线。\n      ")])])], 1), _vm._v(" "), _c('section', {
    staticClass: "demo",
    attrs: {
      "id": "dropDown2"
    }
  }, [_c('demoTab', {
    attrs: {
      "code": _vm.dropdownCode2,
      "describeTitle": _vm.subTitle2
    }
  }, [_c('div', {
    attrs: {
      "slot": "sample"
    },
    slot: "sample"
  }, [_c('Dropdown', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n            hover 触发\n            "), _c('Icon', {
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("驴打滚")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("炸酱面")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("冰糖葫芦")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("北京烤鸭")])], 1)], 1), _vm._v(" "), _c('Dropdown', {
    staticStyle: {
      "margin-left": "20px"
    },
    attrs: {
      "trigger": "click"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n            click 触发\n            "), _c('Icon', {
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("驴打滚")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("炸酱面")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("冰糖葫芦")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("北京烤鸭")])], 1)], 1), _vm._v(" "), _c('Dropdown', {
    staticStyle: {
      "margin-left": "20px"
    },
    attrs: {
      "trigger": "custom",
      "visible": _vm.visible
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.handleOpen
    }
  }, [_vm._v("\n            custom 触发\n            "), _c('Icon', {
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('p', [_vm._v("常用于各种自定义下拉内容的场景。")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "right",
      "margin": "10px"
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleClose
    }
  }, [_vm._v("关闭")])], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "describe-content"
    },
    slot: "describe-content"
  }, [_vm._v("\n        通过设置属性 "), _c('code', [_vm._v("trigger")]), _vm._v(" 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义)。"), _c('br'), _vm._v("\n        触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。\n      ")])])], 1), _vm._v(" "), _c('section', {
    staticClass: "demo",
    attrs: {
      "id": "dropDown3"
    }
  }, [_c('demoTab', {
    attrs: {
      "code": _vm.dropdownCode3,
      "describeTitle": _vm.subTitle3
    }
  }, [_c('div', {
    attrs: {
      "slot": "sample"
    },
    slot: "sample"
  }, [_c('Dropdown', {
    attrs: {
      "placement": "bottom-start"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n            菜单(左)\n            "), _c('Icon', {
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("驴打滚")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("炸酱面")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("北京烤鸭")])], 1)], 1), _vm._v(" "), _c('Dropdown', {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n            菜单(居中)\n            "), _c('Icon', {
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("驴打滚")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("炸酱面")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("北京烤鸭")])], 1)], 1), _vm._v(" "), _c('Dropdown', {
    staticStyle: {
      "margin-left": "20px"
    },
    attrs: {
      "placement": "bottom-end"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n            菜单(右)\n            "), _c('Icon', {
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("驴打滚")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("炸酱面")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("北京烤鸭")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "describe-content"
    },
    slot: "describe-content"
  }, [_vm._v("\n        通过设置属性 "), _c('code', [_vm._v("placement")]), _vm._v(" 可以更改下拉菜单出现的方向，与 "), _c('code', [_vm._v("Poptip")]), _vm._v(" 和 "), _c('code', [_vm._v("Tooltip")]), _vm._v(" 配置一致，支持 12 个方向，详见 API。\n      ")])])], 1), _vm._v(" "), _c('section', {
    staticClass: "demo",
    attrs: {
      "id": "dropDown4"
    }
  }, [_c('demoTab', {
    attrs: {
      "code": _vm.dropdownCode4,
      "describeTitle": _vm.subTitle4
    }
  }, [_c('div', {
    attrs: {
      "slot": "sample"
    },
    slot: "sample"
  }, [_c('Dropdown', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n            北京小吃\n            "), _c('Icon', {
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("驴打滚")]), _vm._v(" "), _c('Dropdown', {
    attrs: {
      "placement": "right-start"
    }
  }, [_c('Dropdown-item', [_vm._v("\n                北京烤鸭\n                "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-right"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("挂炉烤鸭")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("焖炉烤鸭")])], 1)], 1), _vm._v(" "), _c('Dropdown-item', [_vm._v("冰糖葫芦")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "describe-content"
    },
    slot: "describe-content"
  }, [_vm._v("\n        下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。\n      ")])])], 1), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "dropDown5"
    }
  }, [_vm._v("API")]), _vm._v(" "), _c('h3', [_vm._v("Dropdown props")]), _vm._v(" "), _c('section', {
    staticClass: "demo"
  }, [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.propsColumns,
      "data": _vm.propsData
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("Dropdown events")]), _vm._v(" "), _c('section', {
    staticClass: "demo"
  }, [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.eventsColumns,
      "data": _vm.eventsData
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("Dropdown slot")]), _vm._v(" "), _c('section', {
    staticClass: "demo"
  }, [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.slotColumns,
      "data": _vm.slotData
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("Dropdown-item props")]), _vm._v(" "), _c('section', {
    staticClass: "demo"
  }, [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.itemColumns,
      "data": _vm.itemData
    }
  })], 1)])
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=7.3908429ab21c831ed4c9.js.map