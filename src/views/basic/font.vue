<template>
  <article class="doc-alert-container">
    <h1>Font 字体</h1>
    <h2>概述</h2>
    <p>
      推荐使用以下字体类型、大小、颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。
    </p>
    <h2>字体代码</h2>
    <section class="demo" id="font1">
      <demoTab :code="fontCode" :describeTitle="describeTitle">
        <div slot="sample">
        </div>
        <div slot="describe-content">
          font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        </div>
      </demoTab>
    </section>
    <h2>字体使用规范</h2>
    <section class="demo">
      <Table border :columns="fontColumns" :data="fontData"></Table>
    </section>
  </article>
</template>
<script>
  export  default {
    data(){
      return{
        describeTitle:'字体代码',
        fontCode:'',
        fontColumns:[
          {
            title: '类型',
            key: 'fontType',
          },
          {
            title: '示例',
            key: 'fontDemo'
          },
          {
            title: '粗细',
            key: 'fontBold',
          },
          {
            title: '颜色',
            key: 'fontColor'
          },
          {
            title: '字号',
            key: 'fontSize'
          }
        ],
        fontData:[
          {
            fontType: '主标题',
            fontDemo:'<span style="font-size: 16px; color: #4d4d4d; font-weight: bold;">主标题CSS</span>',
            fontBold:"加粗",
            fontColor:"#4d4d4d",
            fontSize:"16px"
          },
          {
            fontType: '标题',
            fontDemo:'<span style="font-size: 14px; color: #4d4d4d; font-weight: bold;">标题CSS</span>',
            fontBold:"加粗",
            fontColor:"#4d4d4d",
            fontSize:"14px"
          },
          {
            fontType: '小标题',
            fontDemo:'<span style="font-size: 12px; color: #4d4d4d; font-weight: bold;">小标题CSS</span>',
            fontBold:"加粗",
            fontColor:"#4d4d4d",
            fontSize:"12px"
          },
          {
            fontType: '正文',
            fontDemo:'<span style="font-size: 12px; color: #4d4d4d;">正文CSS</span>',
            fontBold:"常规",
            fontColor:"#4d4d4d",
            fontSize:"12px"
          },
          {
            fontType: '辅助文字',
            fontDemo:'<span style="font-size: 12px; color: #9fa9b2; ">辅助文字CSS</span>',
            fontBold:"常规",
            fontColor:"#9fa9b2",
            fontSize:"12px"
          }

        ]
      }
    }
  }
</script>
<style>

</style>
