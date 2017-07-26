<template>
  <article class="doc-alert-container">
    <h1>NoticeModel 通知提醒</h1>
    <h2>概述</h2>
    <p>
      在指定dom上的全局通知，常用于以下场景：
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通知内容带有描述信息
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统主动推送
    </p>
    <h2>示例代码</h2>
    <section class="demo">
    <demoTab :code="noticeModelCode" :describeTitle="describeTitle">
      <div slot="sample">
          <div class="noticeHeight">
            <Button type="primary" @click="showNoticeModel">noticeModel</Button>
            <NoticeModal :width="300" :height="200" :content="content" :placement="placement" :isShow="isShow"></NoticeModal>
          </div>
      </div>
      <div slot="describe-content">
       <p> 一般用于dom的点击事件上,比如button的click事件。</p>
       <p> 根据参数 width height 设置noticeModel的大小,根据isShow来控制noticeModel的显示隐藏。</p>
      </div>
    </demoTab>
    </section>
  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab'
  export default {
    components: {
      demoTab
    },
      data(){
          return {
            isShow:true,
            placement:'bottom',
            content:'点击按钮控制显示隐藏',
            "describeTitle":'noticeModel',
            "noticeModelCode":
              `&lt;template>
     &lt;div>
          &lt;Button type="primary" @click="showNoticeModel">noticeModel &lt;/Button>
          &lt;NoticeModal :width="300" :height="200" :content="content" :placement="placement" :isShow="isShow">&lt;/NoticeModal>
     &lt;/div>
  &lt;/template>
          &lt;script>
               export default {
                     data(){
                        return {
                          isShow:true,
                          placement:'bottom',
                          content:'点击按钮控制显示隐藏'
                        }
                      },
                      methods:{
                        showNoticeModel(){
                          if(this.isShow){
                            this.isShow=false;
                          }else {
                            this.isShow=true;
                          }
                        }
                      },
                }
          &lt;/script>
            `
          }
      },
    methods: {
      showNoticeModel(){
        if(this.isShow){
          this.isShow=false;
        }else {
          this.isShow=true;
        }
      }
    }
  }
</script>
<style>
  .noticeHeight {
    height: 300px;
  }
</style>
