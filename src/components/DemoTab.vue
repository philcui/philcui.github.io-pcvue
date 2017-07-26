<template>
  <div class="demoTabContainer">
    <Tabs type="card">
        <Tab-pane label="示例">
          <slot name="sample"></slot>
          <div class="describe-title" v-if="describeTitle&&describeTitle.length>0">
           <span>{{describeTitle}}</span><span class="line"></span>
          </div>
          <div class="describeContent">
            <slot name="describe-content"></slot>
          </div>
        </Tab-pane>
        <Tab-pane label="代码" ref="codeBox">
          <pre v-highlight>
            <code class="html" v-html="code">
            </code>
          </pre>
        </Tab-pane>
        <a slot="extra" 
        v-clipboard:copy="copyCode"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"><Icon type="ios-copy-outline"></Icon><span>复制</span></a>
    </Tabs>
  </div>
</template>
<script>
export default {
  name: 'demoTab',
  props: {
    // code 要显示的代码内容
    code: String,
    // describeTitle 示例框中下部分的标题
    describeTitle: {
      type: String,
      default:''
    }
  },
  methods: {
    onCopy (e) {
      this.$Message.success('Code copied')
    },
    onError (e){
      this.$Message.success('something wrong')
    }
  },
  computed: {
    copyCode () {
      return this.code.replace(/&lt;/g, "<")
    }
  }
}
</script>
<style lang="less">
.demoTabContainer {
  border: 1px solid #dfe2e5;
  border-radius: 3px;
  overflow: hidden;
  &:hover{
    box-shadow: 1px 1px 5px #ccc;
  }
  .ivu-tabs-cardnav{
    border: none;
    border-bottom: 1px solid #dfe2e5;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
    display: none;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    border: none;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
    border-right: 1px solid #dfe2e5;
    border-left: 1px solid #dfe2e5;
    margin-left: -1px;
  }
  .ivu-tabs-tabpane{
    padding: 30px;
    background-color: #fff;
    overflow: hidden;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    transition: all 0s;
  }
  .ivu-tabs-nav-right{
    position: relative;
    top:-38px;
    display: inline-block;
    line-height: 38px;
    right:30px;
    span{
      margin-left: 10px;
    }
  }
  .code{
    overflow: hidden;
  }
  .code-ele { color: greenyellow;}
  .code-comment { color: gray; }
  .code-cd { color: #42b983; }
  .code-selector-id { color: cyan; }
  .code-selector-class { color: lightcoral;}
  .code-attribut {
    color: #e96900;
  }
  .code-value {
    color: #42b983;
  }
  .code-keyWord {
    color: #e96900;
  }
  .code > div{
    margin-top: -30px;
    padding: 0px;
  }
  pre {
    margin-top: -40px;
    margin-bottom: -20px;
  }
  pre code {
    font-size: 1.2em;
    padding: 0px;
    margin: 0px;
  }
  .describe-title{
    line-height: 50px;
    font-size: 20px;
    margin: 15px 0px;
    position: relative;
    height: 50px;
    span{
      display: inline-block;
      position: absolute;
      color: #3e4752;
    }
    span:first-child{
      z-index: 10;
      background-color: #fff;
      padding-right: 20px;
    }
    span.line{
      z-index: 0;
      width: 100%;
      height: 0px;
      border-top:1px solid #dfe2e5;
      top: 25px;
    }
  }
  .describeContent{
    font-size: 14px;
    color: #728093;
    margin-top: 10px;
  }
}
</style>
