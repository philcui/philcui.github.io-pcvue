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
          <transition>
            <div class="example-code-more" v-if="hasmore" @click="toggleMore">
              <a v-if="ishide"><Icon type="ios-arrow-down"></Icon>show code</a>
              <a v-else><Icon type="ios-arrow-up"></Icon>hide code</a>
            </div>
          </transition>
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
  data () {
    return {
      "hasmore": false,
      "ishide": true,
      "exampleHeight": 80,
      "codeHeight":80
    }
  },
  methods: {
    onCopy (e) {
      this.$Message.success('Code copied')
    },
    onError (e){
      this.$Message.success('something wrong')
    },
    toggleMore () {
      this.ishide = !this.ishide
      if(this.ishide){
        this.$el.querySelectorAll('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane')[1].style.height = this.exampleHeight + "px"
      } else {
        this.$el.querySelectorAll('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane')[1].style.height = this.codeHeight + "px"
      }
    }
  },
  computed: {
    copyCode () {
      return this.code.replace(/&lt;/g, "<")
    }
  },
  mounted () {
     let _this = this
     setTimeout(function(){
      //  let containers = document.querySelectorAll(".ivu-tabs-content")
         let container = _this.$el
         let first = container.querySelector('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane')
         first.querySelectorAll('.ivu-tabs-tabpane > div').forEach(function(element) {
           _this.exampleHeight += element.clientHeight
         })
         _this.codeHeight = container.querySelectorAll('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane')[1].clientHeight
         if(_this.codeHeight>_this.exampleHeight){
           _this.hasmore = true;
           container.querySelectorAll('.demoTabContainer > .ivu-tabs > .ivu-tabs-content >.ivu-tabs-tabpane')[1].style.height = _this.exampleHeight + 'px';
         }
     },0)
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
   & > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-cardnav{
    border: none;
    border-bottom: 1px solid #dfe2e5;
  }
  & > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
    display: none;
  }
  & > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    border: none;
  }
  & > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
    border-right: 1px solid #dfe2e5;
    border-left: 1px solid #dfe2e5;
    margin-left: -1px;
  }
  & > .ivu-tabs.ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane{
    padding: 30px 30px 15px;
    background-color: #fff;
    position: relative;
    &:last-child code{
      border:none;
      overflow: hidden;
    }
  }
  & > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    transition: all 0s;
  }
  & > .ivu-tabs.ivu-tabs-card .ivu-tabs-nav-right{
    position: relative;
    top:-38px;
    display: inline-block;
    line-height: 38px;
    right:30px;
    span{
      margin-left: 10px;
    }
  }
  pre {
    margin-top: -40px;
    margin-bottom: -20px;
  }
  pre code {
    font-size: 1em;
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
  .example-code-more{
    position: absolute;
    bottom: 0px;
    left:0px;
    right: 0px;
    text-align: center;
    a{
      display: block;
      text-decoration: none;
      color:#495060;
      opacity: 0.6;
      background-color: #fff;
      i{
        vertical-align: middle;
        margin-right: 5px;
        font-size: 10px;
      }
      &:hover{
        opacity: 0.9;
      }
    }
    
  }
}
</style>
