<template>
  <div>
    <demoTab :code="noticeCode" :describeTitle="describeTitle">
      <div slot="sample">
        <p class="fs">点击按钮 显示notice</p><br>
        <Button @click="info(false)">消息</Button>
        <Button @click="success(false)">成功</Button>
        <Button @click="warning(false)">警告</Button>
        <Button @click="error(false)">错误</Button>
      </div>
      <div slot="describe-content">
        在界面右上角显示可关闭的全局通知，常用于以下场景：
        通知内容带有描述信息
        系统主动推送
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
            "describeTitle":'notice',
            "noticeCode":
              `&lt;template>
     &lt;div>
             &lt;Button @click="info">消息 &lt;/Button>
             &lt;Button @click="success">成功 &lt;/Button>
             &lt;Button @click="warning">警告 &lt;/Button>
             &lt;Button @click="error">错误 &lt;/Button>
     &lt;/div>
  &lt;/template>
         &lt;script>
            export default {
                  methods: {
                        info () {
                          this.$Notice.info({
                            title: '这是通知标题',
                            desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                            duration: 3
                          });
                        },
                        success () {
                          this.$Notice.success({
                            title: '这是通知标题',
                            desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                            duration: 3
                          });
                        },
                        warning () {
                          this.$Notice.warning({
                            title: '这是通知标题',
                            desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                            duration: 3
                          });
                        },
                        error () {
                          this.$Notice.error({
                            title: '这是通知标题',
                            desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                            duration: 3
                          });
                        }
                  }
            }
        &lt;/script>
        `
          }
      },
    methods: {
      info () {
        this.$Notice.info({
          title: '这是通知标题',
          desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
          duration: 3
        });
      },
      success () {
        this.$Notice.success({
          title: '这是通知标题',
          desc:'这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
          duration: 3
        });
      },
      warning () {
        this.$Notice.warning({
          title: '这是通知标题',
          desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
          duration: 3
        });
      },
      error () {
        this.$Notice.error({
          title: '这是通知标题',
          desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
          duration: 3
        });
      }
    }
  }
</script>
<style>
.fs {
  font-size: 14px;
}
</style>
