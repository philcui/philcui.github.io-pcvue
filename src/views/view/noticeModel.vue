<template>
  <div>
    <demoTab :code="noticeModelCode" :describeTitle="describeTitle">
      <div slot="sample">
          <div class="noticeHeight">
            <Button type="primary" @click="showNoticeModel">noticeModel</Button>
            <NoticeModal :width="300" :height="200" :content="content" :placement="placement" :isShow="isShow"></NoticeModal>
          </div>
      </div>
      <div slot="describe-content">
        常用于以下场景：
        通知内容带有描述信息
      </div>
    </demoTab>
  </div>
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
