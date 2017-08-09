<template>
  <article class="doc-message-container">
    <h1>Message 全局提示</h1>
    <h2>概述</h2>
    <p>轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。</p>
    <h2>代码示例</h2>
    <section class="demo" id="basic">
      <demoTab :code="basicCode" :describeTitle="subTitle">
        <div slot="sample">
          <Button type="primary" @click="info">显示普通提醒</Button>
        </div>
        <div slot="describe-content">
         最基本的提示，默认在1.5秒后消失。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="type">
      <demoTab :code="typeCode" :describeTitle="subTitletype">
        <div slot="sample">
           <Button @click="success">显示成功提示</Button>
           <Button @click="warning">显示警告提示</Button>
           <Button @click="error">显示错误提示</Button>
        </div>
        <div slot="describe-content">
         不同的提示状态：成功、警告、错误。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="loading">
      <demoTab :code="loadingCode" :describeTitle="subTitleloading">
        <div slot="sample">
          <Button @click="loading">显示加载中...</Button>
        </div>
        <div slot="describe-content">
         Loading 的状态，并异步在某个时机移除。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="duration">
      <demoTab :code="durationCode" :describeTitle="subTitleduration">
        <div slot="sample">
           <Button @click="time">显示一个10秒的提示</Button> 
        </div>
        <div slot="describe-content">
          自定义时长，也可以在Message.config()中全局配置，详见API。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="closable">
      <demoTab :code="closableCode" :describeTitle="subTitleclosable">
        <div slot="sample">
           <Button @click="closable">显示一个可关闭的提示</Button>
        </div>
        <div slot="describe-content">
          将参数设置为一个对象，并指定 closable 为 true 后可以手动关闭提示，完整参数详见API。
        </div>
      </demoTab>
    </section>

    <h2 id="api">API</h2>
    <h3>Message instance</h3>
    <p>通过直接调用以下方法来使用组件：</p>
    <ul>
      <li><code>this.$Message.info(config)</code></li>
      <li><code>this.$Message.success(config)</code></li>
      <li><code>this.$Message.warning(config)</code></li>
      <li><code>this.$Message.error(config)</code></li>
      <li><code>this.$Message.loading(config)</code></li>
    </ul>
    <p>以上方法隐式的创建及维护 Vue 组件。参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：</p>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <p>
      另外提供了全局配置和全局销毁的方法：
    </p>
    <ul>
      <li><code>this.$Message.config(options)</code></li>
      <li><code>this.$Message.destroy()</code></li>
    </ul>
    <section class="demo">
    <pre  v-highlight><code>
      this.$Message.config({
          top: 50,
          duration: 3
      });
    </code></pre>
    </section>
    <section class="demo">
      <Table border :columns="propsColumns" :data="configData"></Table>
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
          subTitle: "普通提示",
          subTitletype: "提示类型",
          subTitleloading: "加载中",
          subTitleduration: "自定义时长",
          subTitleclosable: "可关闭",
          propsColumns:[
            {
              title: '属性',
              key: 'attribute',
            },
            {
              title: '说明',
              key: 'describe',
              width:'350px'
            },{
              title: '类型',
              key: 'type',
            },{
              title: '默认值',
              key: 'default',
            }],
          propsData:[{
            attribute: 'content',
            describe:'提示内容',
            type:"String",
            default:"-"
          },{
            attribute: 'duration',
            describe:'自动关闭的延时，单位秒，不关闭可以写 0',
            type:"Number",
            default:"1.5"
          },{
            attribute: 'onClose',
            describe:'关闭时的回调',
            type:"Function",
            default:"-"
          },{
            attribute: 'closable',
            describe:'是否显示关闭按钮',
            type:"Boolean",
            default:"false"
          }],
          configData:[{
            attribute: 'top',
            describe:'提示组件距离顶端的距离，单位像素',
            type:"Number",
            default:"24"
          },{
            attribute: 'duration',
            describe:'默认自动关闭的延时，单位秒',
            type:"Number",
            default:"1.5"
          }],
          "basicCode": `
&lt;template>
    &lt;Button type="primary" @click="info">显示普通提醒&lt;/Button>
&lt;/template>
&lt;script>
    export default {
        methods: {
            info () {
                this.$Message.info('这是一条普通的提醒');
            }
        }
    }
&lt;/script>
            `,
            "typeCode": `
&lt;template>
    &lt;Button @click="success">显示成功提示&lt;/Button>
    &lt;Button @click="warning">显示警告提示&lt;/Button>
    &lt;Button @click="error">显示错误提示&lt;/Button>
&lt;/template>
&lt;script>
    export default {
        methods: {
            success () {
                this.$Message.success('这是一条成功的提示');
            },
            warning () {
                this.$Message.warning('这是一条警告的提示');
            },
            error () {
                this.$Message.error('对方不想说话，并且向你抛出了一个异常');
            }
        }
    }
&lt;/script>
            `,
            "loadingCode": `
&lt;template>
    &lt;Button @click="loading">显示加载中...&lt;/Button>
&lt;/template>
&lt;script>
    export default {
        methods: {
            loading () {
                const msg = this.$Message.loading({
                    content: '正在加载中...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
        }
    }
&lt;/script>
            `,
             "durationCode": `
&lt;template>
    &lt;Button @click="time">显示一个10秒的提示&lt;/Button>
&lt;/template>
&lt;script>
    export default {
        methods: {
             time () {
                this.$Message.info({
                       content: '我将在10秒后消失',
                       duration: 10
                   });
             },
        }
    }
&lt;/script>
            `,
              "closableCode": `
&lt;template>
    &lt;Button @click="closable">显示一个可关闭的提示&lt;/Button>
&lt;/template>
&lt;script>
    export default {
        methods: {
            closable () {
                this.$Message.info({
                    content: '可手动关闭的提示',
                    duration: 10,
                    closable: true
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
          this.$Message.info('这是一条普通的提醒');
      },
      success () {
          this.$Message.success('这是一条成功的提示');
      },
      warning () {
          this.$Message.warning('这是一条警告的提示');
      },
      error () {
          this.$Message.error('对方不想说话，并且向你抛出了一个异常');
      },
      loading () {
          const msg = this.$Message.loading({
              content: '正在加载中...',
              duration: 0
          });
          setTimeout(msg, 3000);
      },
      time () {
         this.$Message.info({
                content: '我将在10秒后消失',
                duration: 10
            });
      },
      closable () {
          this.$Message.info({
              content: '可手动关闭的提示',
              duration: 10,
              closable: true
          });
      }
    }
  }
</script>
<style lang="less" scoped>
  article blockquote {
    padding: 5px 5px 3px 10px;
    line-height: 1.5;
    border-left: 4px solid #ddd;
    margin:12px 0 20px;
    color: #666;
    font-size: 14px;
  }
  code {
    display: inline-block;
    background: #f7f7f7;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    margin: 0 3px;
    padding: 1px 5px;
    border-radius: 3px;
    color: #666;
    border: 1px solid #eee;
  }
  pre code{
    width: 100%;
    display: block;
  }
  ul li{
    list-style: disc;
    margin: 5px 30px;
  }
</style>
