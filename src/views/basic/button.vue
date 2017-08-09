<template>
  <article class="doc-button-container">
    <h1>Button 按钮</h1>
    <p>基础组件，触发业务逻辑时使用。</p>
    <blockquote>注意：非 template/render 模式下，需使用<code>i-button</code>。</blockquote>
    <br/>
    <h2>代码示例</h2>
    <section class="demo" id="button1">
      <demoTab :code="buttonCode" :describeTitle="subTitle1">
        <div slot="sample">
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="ghost">Ghost</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <br><br>
          <Button type="info">信息按钮</Button>
          <Button type="success">成功按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="error">错误按钮</Button>
        </div>
        <div slot="describe-content">
          按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。<br/>
          通过设置<code>type</code>为<code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>创建不同样式的按钮，不设置为默认样式。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="button2">
      <demoTab :code="buttonCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Button type="primary" shape="circle" icon="ios-search"></Button>
          <Button type="primary" icon="ios-search">搜索</Button>
          <Button type="primary" shape="circle" icon="ios-search">搜索</Button>
          <Button type="primary" shape="circle">圆角按钮</Button>
          <br><br>
          <Button type="ghost" shape="circle" icon="ios-search"></Button>
          <Button type="ghost" icon="ios-search">搜索</Button>
          <Button type="ghost" shape="circle" icon="ios-search">搜索</Button>
          <Button type="ghost" shape="circle">圆角按钮</Button>
        </div>
        <div slot="describe-content">
          通过设置<code>icon</code>属性在<code>Button</code>内嵌入一个<code>Icon</code>，或者直接在<code>Button</code>内使用<code>Icon</code>组件。
          使用<code>Button</code>的<code>icon</code>属性，图标位置将在最左边，如果需要自定义位置，需使用<code>Icon</code>组件。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="button3">
      <demoTab :code="buttonCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Button type="primary" size="large">Large</Button>
          <Button type="primary">Default</Button>
          <Button type="primary" size="small">Small</Button>
          <br><br>
          <Button type="primary" shape="circle" size="large">Large</Button>
          <Button type="primary" shape="circle">Default</Button>
          <Button type="primary" shape="circle" size="small">Small</Button>
        </div>
        <div slot="describe-content">
          按钮有三种尺寸：大、默认（中）、小<br/>
          通过设置<code>size</code>为<code>large</code>和<code>small</code>将按钮设置为大和小尺寸，不设置为默认（中）尺寸。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="button4">
      <demoTab :code="buttonCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Button type="success" long>确认提交</Button>
          <br><br>
          <Button type="error" long>确认删除</Button>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>long</code> 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。<br/>
          使用者也可以直接通过给组件添加 <code>style</code>来设置更细节的样式，比如定宽。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="button5">
      <demoTab :code="buttonCode5" :describeTitle="subTitle5">
        <div slot="sample">
          <Button>Default</Button>
          <Button disabled>Default(Disabled)</Button>
          <br/><br/>
          <Button type="primary">Primary</Button>
          <Button type="primary" disabled>Primary(Disabled)</Button>
          <br/><br/>
          <Button type="ghost">Ghost</Button>
          <Button type="ghost" disabled>Ghost(Disabled)</Button>
          <br/><br/>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed" disabled>Dashed(Disabled)</Button>
          <br/><br/>
          <Button type="text">Text</Button>
          <Button type="text" disabled>Text(Disabled)</Button>
        </div>
        <div slot="describe-content">
          通过添加<code>disabled</code>属性可将按钮设置为不可用状态。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="button6">
      <demoTab :code="buttonCode6" :describeTitle="subTitle6">
        <div slot="sample">
          <Button type="primary" loading>Loading...</Button>
          <Button type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">Click me!</span>
            <span v-else>Loading...</span>
          </Button>
          <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
            <span v-if="!loading2">Click me!</span>
            <span v-else>Loading...</span>
          </Button>
        </div>
        <div slot="describe-content">
          通过添加<code>loading</code>属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="button7">
      <demoTab :code="buttonCode7" :describeTitle="subTitle7">
        <div slot="sample">
          <h4>基本</h4>
          <br><br>
          <Button-group>
            <Button>取消</Button>
            <Button type="primary">确定</Button>
          </Button-group>
          <Button-group>
            <Button disabled>昨日</Button>
            <Button disabled>今日</Button>
            <Button disabled>明日</Button>
          </Button-group>
          <Button-group>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button type="ghost">M</Button>
            <Button type="dashed">R</Button>
          </Button-group>
          <br><br>
          <h4>配合图标</h4>
          <br><br>
          <Button-group>
            <Button type="primary">
              <Icon type="chevron-left"></Icon>
              前进
            </Button>
            <Button type="primary">
              后退
              <Icon type="chevron-right"></Icon>
            </Button>
          </Button-group>
          <Button-group>
            <Button type="primary" icon="ios-skipbackward"></Button>
            <Button type="primary" icon="ios-skipforward"></Button>
          </Button-group>
          <Button-group>
            <Button type="ghost" icon="ios-color-wand-outline"></Button>
            <Button type="ghost" icon="ios-sunny-outline"></Button>
            <Button type="ghost" icon="ios-crop"></Button>
            <Button type="ghost" icon="ios-color-filter-outline"></Button>
          </Button-group>
          <br><br>
          <h4>圆角</h4>
          <br><br>
          <Button-group shape="circle">
            <Button type="primary">
              <Icon type="chevron-left"></Icon>
              前进
            </Button>
            <Button type="primary">
              后退
              <Icon type="chevron-right"></Icon>
            </Button>
          </Button-group>
          <Button-group shape="circle">
            <Button type="primary" icon="ios-skipbackward"></Button>
            <Button type="primary" icon="ios-skipforward"></Button>
          </Button-group>
          <Button-group shape="circle">
            <Button type="ghost" icon="ios-color-wand-outline"></Button>
            <Button type="ghost" icon="ios-sunny-outline"></Button>
            <Button type="ghost" icon="ios-crop"></Button>
            <Button type="ghost" icon="ios-color-filter-outline"></Button>
          </Button-group>
          <br><br>
          <h4>尺寸</h4>
          <br><br>
          <Button-group size="large">
            <Button type="ghost">Large</Button>
            <Button type="ghost">Large</Button>
          </Button-group>
          <Button-group>
            <Button type="ghost">Default</Button>
            <Button type="ghost">Default</Button>
          </Button-group>
          <Button-group size="small">
            <Button type="ghost">Small</Button>
            <Button type="ghost">Small</Button>
          </Button-group>
          <br><br>
          <Button-group size="large" shape="circle">
            <Button type="ghost">Large</Button>
            <Button type="ghost">Large</Button>
          </Button-group>
          <Button-group shape="circle">
            <Button type="ghost">Default</Button>
            <Button type="ghost">Default</Button>
          </Button-group>
          <Button-group size="small" shape="circle">
            <Button type="ghost">Small</Button>
            <Button type="ghost">Small</Button>
          </Button-group>
        </div>
        <div slot="describe-content">
          将多个<code>Button</code>放入<code>ButtonGroup</code>内，可实现按钮组合的效果。<br/>
          通过设置<code>ButtonGroup</code>的属性<code>size</code>为<code>large</code>和<code>small</code>，可将按钮组尺寸设置为大和小，不设置<code>size</code>，则为默认（中）尺寸。<br/>
            通过设置<code>ButtonGroup</code>的属性<code>shape</code>为<code>circle</code>，可将按钮组形状设置为圆角。<br/>
        </div>
      </demoTab>
    </section>

    <section class="demo" id="button8">
      <demoTab :code="buttonCode8" :describeTitle="subTitle8">
        <div slot="sample">
          <Button-group vertical>
            <Button type="ghost" icon="social-facebook"></Button>
            <Button type="ghost" icon="social-twitter"></Button>
            <Button type="ghost" icon="social-googleplus"></Button>
            <Button type="ghost" icon="social-tumblr"></Button>
          </Button-group>
        </div>
        <div slot="describe-content">
          通过设置<code>ButtonGroup</code>的属性<code>vertical</code>，可以使按钮组纵向排列。
        </div>
      </demoTab>
    </section>

    <h2 id="button9">API</h2>
    <h3>Button props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>ButtonGroup props</h3>
    <section class="demo">
      <Table border :columns="propsColumns2" :data="propsData2"></Table>
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
          loading: false,
          loading2: false,
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
            attribute: 'type',
            describe:'按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置',
            type:"String",
            default:"-"
          },{
            attribute: 'size',
            describe:'按钮大小，可选值为large和small或者不设置',
            type:"String",
            default:"-"
          },{
            attribute: 'shape',
            describe:'按钮形状，可选值为circle或者不设置',
            type:"String",
            default:"-"
          },{
            attribute: 'long',
            describe:'开启后，按钮的长度为 100%',
            type:"Boolean",
            default:"false"
          },{
            attribute: 'html-type',
            describe:'设置button原生的type，可选值为button、submit、reset',
            type:"String",
            default:"button"
          },{
            attribute: 'disabled',
            describe:'设置按钮为禁用状态',
            type:"Boolean",
            default:"false"
          },{
            attribute: 'loading',
            describe:'设置按钮为加载中状态',
            type:"Boolean",
            default:"false"
          },{
            attribute: 'icon',
            describe:'设置按钮的图标类型',
            type:"String",
            default:"-"
          }],
          propsColumns2:[
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
          propsData2:[{
            attribute: 'size',
            describe:'按钮组合大小，可选值为large和small或者不设置',
            type:"String",
            default:"-"
          },{
            attribute: 'shape',
            describe:'按钮组合形状，可选值为circle或者不设置',
            type:"String",
            default:"-"
          },{
            attribute: 'vertical',
            describe:'是否纵向排列按钮组',
            type:"Boolean",
            default:"false"
          }],
          "subTitle1": "按钮类型",
          "buttonCode": `
            &lt;template>
               &lt;Button>Default&lt;/Button>
               &lt;Button type="primary">Primary&lt;/Button>
               &lt;Button type="ghost">Ghost&lt;/Button>
               &lt;Button type="dashed">Dashed&lt;/Button>
               &lt;Button type="text">text&lt;/Button>
               &lt;Button type="info">信息按钮&lt;/Button>
               &lt;Button type="success">成功按钮&lt;/Button>
               &lt;Button type="warning">警告按钮&lt;/Button>
               &lt;Button type="error">错误按钮&lt;/Button>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "subTitle2": "图标按钮及按钮形状",
          "buttonCode2": `
            &lt;template>
               &lt;Button type="primary" shape="circle" icon="ios-search">&lt;/Button>
               &lt;Button type="primary" icon="ios-search">搜索&lt;/Button>
               &lt;Button type="primary" shape="circle" icon="ios-search">搜索&lt;/Button>
               &lt;Button type="primary" shape="circle">圆角按钮&lt;/Button>
               &lt;Button type="ghost" shape="circle" icon="ios-search">&lt;/Button>
               &lt;Button type="ghost" icon="ios-search">搜索&lt;/Button>
               &lt;Button type="ghost" shape="circle" icon="ios-search">搜索&lt;/Button>
               &lt;Button type="ghost" shape="circle">圆角按钮&lt;/Button>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "subTitle3": "按钮尺寸",
          "buttonCode3": `
            &lt;template>
               &lt;Button type="primary" size="large">Large&lt;/Button>
               &lt;Button type="primary">Default&lt;/Button>
               &lt;Button type="primary" size="small">Small&lt;/Button>
               &lt;Button type="primary" shape="circle"size="large">Large&lt;/Button>
               &lt;Button type="primary" shape="circle">Default&lt;/Button>
               &lt;Button type="primary" shape="circle" size="small">Small&lt;/Button>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "subTitle4": "长按钮",
          "buttonCode4": `
            &lt;template>
               &lt;Button type="success" long>确认提交&lt;/Button>
               &lt;Button type="error" long>确认删除&lt;/Button>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "subTitle5": "不可用状态",
          "buttonCode5": `
            &lt;template>
               &lt;Button>Default&lt;/Button>
               &lt;Button disabled>Default(Disabled)&lt;/Button>
               &lt;Button type="primary">Primary&lt;/Button>
               &lt;Button type="primary" disabled>Primary(Disabled)&lt;/Button>
               &lt;Button type="ghost">Ghost&lt;/Button>
               &lt;Button type="ghost" disabled>Ghost(Disabled)&lt;/Button>
               &lt;Button type="dashed">Dashed&lt;/Button>
               &lt;Button type="dashed" disabled>Dashed(Disabled)&lt;/Button>
               &lt;Button type="text">Text&lt;/Button>
               &lt;Button type="text" disabled>Text(Disabled)&lt;/Button>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "subTitle6": "加载中状态",
          "buttonCode6": `
            &lt;template>
               &lt;Button type="primary" loading>Loading...&lt;/Button>
               &lt;Button type="primary" :loading="loading" @click="toLoading">
                   &lt;span v-if="!loading">Click me!&lt;/span>
                   &lt;span v-else>Loading...&lt;/span>
               &lt;/Button>
               &lt;Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
                   &lt;span v-if="!loading2">Click me!&lt;/span>
                   &lt;span v-else>Loading...&lt;/span>
               &lt;/Button>
            &lt;/template>
            &lt;script>
                export default {
                  data () {
                    return {
                        loading: false,
                        loading2: false
                    }
                  },
                  methods: {
                      toLoading () {
                          this.loading = true;
                      },
                      toLoading2 () {
                          this.loading2 = true;
                      }
                  }
                }
            &lt;/script>
            `,
          "subTitle7": "按钮组合",
          "buttonCode7": `
            &lt;template>
               &lt;h4>基本&lt;/h4>
               &lt;br>&lt;br>
               &lt;Button-group>
                   &lt;Button>取消&lt;/Button>
                   &lt;Button type="primary">确定&lt;/Button>
               &lt;/Button-group>
               &lt;Button-group>
                   &lt;Button disabled>昨日&lt;/Button>
                   &lt;Button disabled>今日&lt;/Button>
                   &lt;Button disabled>明日&lt;/Button>
               &lt;/Button-group>
               &lt;Button-group>
                   &lt;Button type="primary">L&lt;/Button>
                   &lt;Button>M&lt;/Button>
                   &lt;Button type="ghost">M&lt;/Button>
                   &lt;Button type="dashed">R&lt;/Button>
               &lt;/Button-group>
               &lt;br>&lt;br>
               &lt;h4>配合图标&lt;/h4>
               &lt;br>&lt;br>
               &lt;Button-group>
                   &lt;Button type="primary">
                       &lt;Icon type="chevron-left">&lt;/Icon>前进
                   &lt;/Button>
                   &lt;Button type="primary">
                       后退
                       &lt;Icon type="chevron-right">&lt;/Icon>
                   &lt;/Button>
               &lt;/Button-group>
               &lt;Button-group>
                   &lt;Button type="primary" icon="ios-skipbackward">&lt;/Button>
                   &lt;Button type="primary" icon="ios-skipforward">&lt;/Button>
               &lt;/Button-group>
               &lt;Button-group>
                   &lt;Button type="ghost" icon="ios-color-wand-outline">&lt;/Button>
                   &lt;Button type="ghost" icon="ios-sunny-outline">&lt;/Button>
                   &lt;Button type="ghost" icon="ios-crop">&lt;/Button>
                   &lt;Button type="ghost" icon="ios-color-filter-outline">&lt;/Button>
               &lt;/Button-group>
               &lt;br>&lt;br>
               &lt;h4>圆角&lt;/h4>
               &lt;br>&lt;br>
               &lt;Button-group shape="circle">
                   &lt;Button type="primary">
                       &lt;Icon type="chevron-left">&lt;/Icon>前进
                   &lt;/Button>
                   &lt;Button type="primary">
                       后退
                       &lt;Icon type="chevron-right">&lt;/Icon>
                   &lt;/Button>
               &lt;/Button-group>
               &lt;Button-group shape="circle">
                   &lt;Button type="primary" icon="ios-skipbackward">&lt;/Button>
                   &lt;Button type="primary" icon="ios-skipforward">&lt;/Button>
               &lt;/Button-group>
               &lt;Button-group shape="circle">
                   &lt;Button type="ghost" icon="ios-color-wand-outline">&lt;/Button>
                   &lt;Button type="ghost" icon="ios-sunny-outline">&lt;/Button>
                   &lt;Button type="ghost" icon="ios-crop">&lt;/Button>
                   &lt;Button type="ghost" icon="ios-color-filter-outline">&lt;/Button>
               &lt;/Button-group>
               &lt;br>&lt;br>
               &lt;h4>尺寸&lt;/h4>
               &lt;br>&lt;br>
               &lt;Button-group size="large">
                   &lt;Button type="ghost">Large&lt;/Button>
                   &lt;Button type="ghost">Large&lt;/Button>
               &lt;/Button-group>
               &lt;Button-group>
                   &lt;Button type="ghost">Default&lt;/Button>
                   &lt;Button type="ghost">Default&lt;/Button>
               &lt;/Button-group>
               &lt;Button-group size="small">
                   &lt;Button type="ghost">Small&lt;/Button>
                   &lt;Button type="ghost">Small&lt;/Button>
               &lt;/Button-group>
               &lt;br>&lt;br>
               &lt;Button-group size="large"  shape="circle">
                   &lt;Button type="ghost">Large&lt;/Button>
                   &lt;Button type="ghost">Large&lt;/Button>
               &lt;/Button-group>
               &lt;Button-group  shape="circle">
                   &lt;Button type="ghost">Default&lt;/Button>
                   &lt;Button type="ghost">Default&lt;/Button>
               &lt;/Button-group>
               &lt;Button-group size="small"  shape="circle">
                   &lt;Button type="ghost">Small&lt;/Button>
                   &lt;Button type="ghost">Small&lt;/Button>
               &lt;/Button-group>

            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "subTitle8": "按钮组纵向排列",
          "buttonCode8": `
            &lt;template>
               &lt;Button-group vertical>
                   &lt;Button type="ghost" icon="social-facebook">&lt;/Button>
                   &lt;Button type="ghost" icon="social-twitter">&lt;/Button>
                   &lt;Button type="ghost" icon="social-googleplus">&lt;/Button>
                   &lt;Button type="ghost" icon="social-tumblr">&lt;/Button>
               &lt;/Button-group>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `
        }
    },
    methods: {
      toLoading () {
        this.loading = true;
      },
      toLoading2 () {
        this.loading2 = true;
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
