<template>
  <article class="doc-alert-container">
    <h1>Notice 通知提醒</h1>
    <h2>概述</h2>
    <p>
      在界面右上角显示可关闭的全局通知，常用于以下场景：
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通知内容带有描述信息
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统主动推送
    </p>
    <h2>示例代码</h2>
    <section class="demo">
    <demoTab :code="noticeCode" :describeTitle="describeTitle">
      <div slot="sample">
        <p class="fs">点击按钮 显示notice</p><br>
        <Button @click="info(false)">消息</Button>
        <Button @click="success(false)">成功</Button>
        <Button @click="warning(false)">警告</Button>
        <Button @click="error(false)">错误</Button>
      </div>
      <div slot="describe-content">
        带有状态图标的提醒。
      </div>
    </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="noticeCode2" :describeTitle="describeTitle">
        <div slot="sample">
          <Button type="primary" @click="open">打开提醒</Button>
        </div>
        <div slot="describe-content">
          基本用法，默认在 4.5秒后关闭。如果 desc 参数为空或不填，则自动应用仅标题模式下的样式。
          建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="noticeCode3" :describeTitle="describeTitle">
        <div slot="sample">
          <Button type="primary" @click="time">打开提醒</Button>
        </div>
        <div slot="describe-content">
          自定义时长，为 0 则不自动关闭。
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
        `,
            "noticeCode2":`&lt;template>
     &lt;div>
             &lt;Button type="primary" @click="open">打开提醒 &lt;/Button>
     &lt;/div>
  &lt;/template>
         &lt;script>
            export default {
                  methods: {
                        open () {
                          this.$Notice.open({
                            title: '这是通知标题',
                            desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                          });
                        }
                  }
            }
        &lt;/script>
        `,
            "noticeCode3":`&lt;template>
     &lt;div>
             &lt;Button  type="primary" @click="time">打开提醒 &lt;/Button>
     &lt;/div>
  &lt;/template>
         &lt;script>
            export default {
                  methods: {
                        time () {
                        this.$Notice.open({
                            title: '这是通知标题',
                            desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
                            duration: 0
                        });
                    }
                  }
            }
        &lt;/script>
        `,
          }
      },
    methods: {
        open () {
          this.$Notice.open({
            title: '这是通知标题',
            desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
          });
        },
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
      },
      time () {
        this.$Notice.open({
          title: '这是通知标题',
          desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
          duration: 0
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
