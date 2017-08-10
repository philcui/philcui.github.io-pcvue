<template>
  <article class="doc-alert-container">
    <h1>LoadingBar 加载进度条</h1>
    <h2 >概述</h2>
    <p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。</p>
    <h2 >说明 </h2>
    <p>LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Aja
      x，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度，当然也可以通过<code>update</code>()方
      法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。</p>
    <p>在路由中使用</p>
    <div>
       <pre data-v-3802a467="" class="bg"><code data-v-3802a467="" class="javascript hljs"><span class="hljs-comment">
        // 部分代码省略</span>
<span class="hljs-keyword">import</span> iView
        <span class="hljs-keyword">from</span>
        <span class="hljs-string">'iview'</span>;
Vue.use(iView);

router.beforeEach((to, from, next) =&gt; {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to, from, next) =&gt; {
    iView.LoadingBar.finish();
});
</code></pre>
    </div>

    <p>在异步请求中使用</p>
    <div>
       <pre data-v-3802a467="" class="bg"><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
<span class="hljs-comment">// 以jQuery的Ajax为例，部分代码省略</span>
<span class="hljs-keyword">import</span> $ from <span class="hljs-string">'jquery'</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    methods: {
        getData () {
            <span class="hljs-keyword">this</span>.$Loading.start();
            $.ajax({
                url: <span class="hljs-string">'/api/someurl'</span>,
                type: <span class="hljs-string">'get'</span>,
                success: () =&gt; {
                    <span class="hljs-keyword">this</span>.$Loading.finish();
                }
                error: () =&gt; {
                    <span class="hljs-keyword">this</span>.$Loading.error();
                }
            });
        }
    }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
    </div>
    <h2>代码示例</h2>
    <section class="demo" id="loadingBar1">
      <demoTab :code="load" :describeTitle="loadTitle">
        <div slot="sample">
          <Button @click="start">Start</Button>
          <Button @click="finish">Finish</Button>
          <Button @click="error">Error</Button>
        </div>
        <div slot="describe-content">
          点击 Start 开始进度，点击 Finish 结束。在调用<code>start</code>()方法后，组件会自动模拟进度，当调用<code>finish</code>()或<code>error</code>()时，补全进度并自动消失。
        </div>
      </demoTab>
    </section>
    <h2>API</h2>
    <p>LoadingBar instance </p>
    <p>通过直接调用以下方法来使用组件：</p>
    <ul>
      <li><code>this.$Loading.start()</code></li>
      <li><code>this.$Loading.finish()</code></li>
      <li><code>this.$Loading.error()</code></li>
      <li><code>this.$Loading.update(percent)</code></li>
    </ul>
    <p>以上方法隐式的创建及维护Vue组件。函数及参数说明如下：</p>
    <section class="demo" id="api">
      <Table border :columns="propsColumns" :data="apiData"></Table>
    </section>
    <p>另外提供了全局配置和全局销毁的方法：</p>
    <ul>
      <li>
        <code>this.$Loading.config(options)</code>
      </li>
      <li>
        <code>this.$Loading.destroy()</code>
      </li>
    </ul>
    <div>
      <pre data-v-3802a467="" class="bg"><code data-v-3802a467="" class="javascript hljs"><span class="hljs-keyword">this</span>.$Loading.config({
    color: <span class="hljs-string">'#5cb85c'</span>,
    failedColor: <span class="hljs-string">'#f0ad4e'</span>,
    height: <span class="hljs-number">5</span>
});
</code></pre>
    </div>

    <section class="demo" id="api02">
      <Table border :columns="propsColumns02" :data="apiData02"></Table>
    </section>
  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab';
  export default {
    components: {
      demoTab
    },
    methods: {
      start () {
        this.$Loading.start();
      },
      finish () {
        this.$Loading.finish();
      },
      error () {
        this.$Loading.error();
      }
    },
    data(){
        return{
          apiData02:[
            {
              attribute: 'color',
              describe:'进度条的颜色，默认为 iView 主色',
              type:"String",
              default:"primary"
            },{
              attribute: 'failedColor',
              describe:'失败时的进度条颜色，默认为 iView 主色',
              type:"String",
              default:"error"
            },{
              attribute: 'height',
              describe:'进度条高度，单位 px',
              type:"Number",
              default:"2"
            }
          ],
          propsColumns02:[{
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
          apiData:[
            {
              name:'start',
              describe:'开始从 0 显示进度条，并自动加载进度',
              parameter:'无'
            },
            {
              name:'finish',
              describe:'结束进度条，自动补全剩余进度',
              parameter:'无'
            },
            {
              name:'error',
              describe:'以错误的类型结束进度条，自动补全剩余进度',
              parameter:'无'
            },
            {
              name:'update',
              describe:'精确加载到指定的进度',
              parameter:'percent，指定的进度百分比'
            },
          ],
          propsColumns:[
            {
              title: '函数名',
              key: 'name',
            },
            {
              title: '说明',
              key: 'describe'
            },
            {
              title: '参数',
              key: 'parameter'
            }
          ],
          loadTitle:'基本用法',
          "load":`&lt;template>
          &lt;Button @click="start">Start&lt;/Button>
          &lt;Button @click="finish">Finish&lt;/Button>
          &lt;Button @click="error">Error&lt;/Button>
&lt;/template>`
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
</style>
