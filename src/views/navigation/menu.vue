<template>
  <article class="doc-alert-container">
    <h1>Menu 导航菜单</h1>
    <h2 >概述</h2>
    <p>为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。</p>
    <blockquote>注意：非 template/render 模式下，需使用 i-menu。</blockquote>
    <h2>代码示例</h2>

    <section class="demo" id="menu">
      <demoTab :code="code" :describeTitle="title">
        <div slot="sample">
          <Menu mode="horizontal" :theme="theme1" active-name="1">
            <Menu-item name="1">
              <Icon type="ios-paper"></Icon>
              内容管理
            </Menu-item>
            <Menu-item name="2">
              <Icon type="ios-people"></Icon>
              用户管理
            </Menu-item>
            <Submenu name="3">
              <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
              </template>
              <Menu-group title="使用">
                <Menu-item name="3-1">新增和启动</Menu-item>
                <Menu-item name="3-2">活跃分析</Menu-item>
                <Menu-item name="3-3">时段分析</Menu-item>
              </Menu-group>
              <Menu-group title="留存">
                <Menu-item name="3-4">用户留存</Menu-item>
                <Menu-item name="3-5">流失用户</Menu-item>
              </Menu-group>
            </Submenu>
            <Menu-item name="4">
              <Icon type="settings"></Icon>
              综合设置
            </Menu-item>
          </Menu>
          <br>
          <p>切换主题</p>
          <Radio-group v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
          </Radio-group>
        </div>
        <div slot="describe-content">
          水平的顶部导航菜单。<br>
          通过设置属性 <code>theme</code> 为 <code>light</code>、<code>dark</code>、<code>primary</code> 可以选择主题。<br>
          通过事件 <code>on-select</code> 可以得到点击菜单的 name 值，从而控制页面路由或自定义操作。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="menu2">
      <demoTab :code="code2" :describeTitle="title2">
        <div slot="sample">
          <Row>
            <Col span="8">
            <Menu :theme="theme2">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-paper"></Icon>
                  内容管理
                </template>
                <Menu-item name="1-1">文章管理</Menu-item>
                <Menu-item name="1-2">评论管理</Menu-item>
                <Menu-item name="1-3">举报管理</Menu-item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-people"></Icon>
                  用户管理
                </template>
                <Menu-item name="2-1">新增用户</Menu-item>
                <Menu-item name="2-2">活跃用户</Menu-item>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="stats-bars"></Icon>
                  统计分析
                </template>
                <Menu-group title="使用">
                  <Menu-item name="3-1">新增和启动</Menu-item>
                  <Menu-item name="3-2">活跃分析</Menu-item>
                  <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                  <Menu-item name="3-4">用户留存</Menu-item>
                  <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group>
              </Submenu>
            </Menu>
            </Col>
            <Col span="8">
            <Menu :theme="theme2" active-name="1-2" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-paper"></Icon>
                  内容管理
                </template>
                <Menu-item name="1-1">文章管理</Menu-item>
                <Menu-item name="1-2">评论管理</Menu-item>
                <Menu-item name="1-3">举报管理</Menu-item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-people"></Icon>
                  用户管理
                </template>
                <Menu-item name="2-1">新增用户</Menu-item>
                <Menu-item name="2-2">活跃用户</Menu-item>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="stats-bars"></Icon>
                  统计分析
                </template>
                <Menu-group title="使用">
                  <Menu-item name="3-1">新增和启动</Menu-item>
                  <Menu-item name="3-2">活跃分析</Menu-item>
                  <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                  <Menu-item name="3-4">用户留存</Menu-item>
                  <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group>
              </Submenu>
            </Menu>
            </Col>
            <Col span="8">
            <Menu :theme="theme2" :open-names="['1']" accordion>
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-paper"></Icon>
                  内容管理
                </template>
                <Menu-item name="1-1">文章管理</Menu-item>
                <Menu-item name="1-2">评论管理</Menu-item>
                <Menu-item name="1-3">举报管理</Menu-item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-people"></Icon>
                  用户管理
                </template>
                <Menu-item name="2-1">新增用户</Menu-item>
                <Menu-item name="2-2">活跃用户</Menu-item>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="stats-bars"></Icon>
                  统计分析
                </template>
                <Menu-group title="使用">
                  <Menu-item name="3-1">新增和启动</Menu-item>
                  <Menu-item name="3-2">活跃分析</Menu-item>
                  <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                  <Menu-item name="3-4">用户留存</Menu-item>
                  <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group>
              </Submenu>
            </Menu>
            </Col>
          </Row>
          <br>
          <p>切换主题</p>
          <Radio-group v-model="theme2">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
          </Radio-group>
        </div>
        <div slot="describe-content">
          垂直导航菜单，可以内嵌子菜单。<br>
          设置 <code>active-name</code> 可以选中指定的菜单，设置 open-names 可以展开指定的子菜单。<br>
          设置属性 <code>accordion</code> 可以开启手风琴模式，每次只能展开一个子菜单。<br>
          通过设置属性 <code>theme</code> 为 <code>light</code>、<code>dark</code> 可以选择主题，侧栏菜单不支持 primary 主题。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="menu3">
      <demoTab :code="code3" :describeTitle="title3">
        <div slot="sample">
          <Menu :theme="theme3" active-name="1">
            <Menu-group title="内容管理">
              <Menu-item name="1">
                <Icon type="document-text"></Icon>
                文章管理
              </Menu-item>
              <Menu-item name="2">
                <Icon type="chatbubbles"></Icon>
                评论管理
              </Menu-item>
            </Menu-group>
            <Menu-group title="统计分析">
              <Menu-item name="3">
                <Icon type="heart"></Icon>
                用户留存
              </Menu-item>
              <Menu-item name="4">
                <Icon type="heart-broken"></Icon>
                流失用户
              </Menu-item>
            </Menu-group>
          </Menu>
          <br>
          <p>切换主题</p>
          <Radio-group v-model="theme3">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
          </Radio-group>
        </div>
        <div slot="describe-content">
          使用 <code>Menu-group</code> 组件进行分组，注意：
          <code>Menu-group</code> 只能用在 <code>Menu</code> 和 <code>Submenu</code> 内。
          <code>Submenu</code> 只能用在 <code>Menu</code> 内，不能用在 <code>Menu-group</code> 和 <code>Menu-item</code> 内。
        </div>
      </demoTab>
    </section>

    <h2>API</h2>
    <h3>Menu props</h3>
    <section class="demo" id="api">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>

    <h3>Menu events</h3>
    <section class="demo">
      <Table border :columns="propsColumns2" :data="propsData2"></Table>
    </section>

    <h3>Menu methods</h3>
    <section class="demo">
      <Table border :columns="propsColumns3" :data="propsData3"></Table>
    </section>

    <h3>MenuItem props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData4"></Table>
    </section>

    <h3>Submenu props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData5"></Table>
    </section>

    <h3>Submenu slot</h3>
    <section class="demo">
      <Table border :columns="propsColumns6" :data="propsData6"></Table>
    </section>

    <h3>MenuGroup props </h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData7"></Table>
    </section>

  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab'
  export default {
    components: {
      demoTab
    },
    data () {
      return {
        theme3: 'light',
        title3:"分组",
        code3:`&lt;template>
&lt;Menu :theme="theme3" active-name="1">
        &lt;Menu-group title="内容管理">
            &lt;Menu-item name="1">
                &lt;Icon type="document-text">&lt;/Icon>
                文章管理
            &lt;/Menu-item>
            &lt;Menu-item name="2">
                &lt;Icon type="chatbubbles">&lt;/Icon>
                评论管理
            &lt;/Menu-item>
        &lt;/Menu-group>
        &lt;Menu-group title="统计分析">
            &lt;Menu-item name="3">
                &lt;Icon type="heart">&lt;/Icon>
                用户留存
            &lt;/Menu-item>
            &lt;Menu-item name="4">
                &lt;Icon type="heart-broken">&lt;/Icon>
                流失用户
            &lt;/Menu-item>
        &lt;/Menu-group>
    &lt;/Menu>
    &lt;br>
    &lt;p>切换主题&lt;/p>
    &lt;Radio-group v-model="theme3">
        &lt;Radio label="light">&lt;/Radio>
        &lt;Radio label="dark">&lt;/Radio>
    &lt;/Radio-group>
&lt;/template>`,
        title2:'侧栏导航',
        theme2: 'light',
        "code":`&lt;template>
&lt;Menu mode="horizontal" :theme="theme1" active-name="1">
        &lt;Menu-item name="1">
            &lt;Icon type="ios-paper">&lt;/Icon>
            内容管理
        &lt;/Menu-item>
        &lt;Menu-item name="2">
            &lt;Icon type="ios-people">&lt;/Icon>
            用户管理
        &lt;/Menu-item>
        &lt;Submenu name="3">
            &lt;template slot="title">
                &lt;Icon type="stats-bars">&lt;/Icon>
                统计分析
            &lt;/template>
            &lt;Menu-group title="使用">
                &lt;Menu-item name="3-1">新增和启动&lt;/Menu-item>
                &lt;Menu-item name="3-2">活跃分析&lt;/Menu-item>
                &lt;Menu-item name="3-3">时段分析&lt;/Menu-item>
            &lt;/Menu-group>
            &lt;Menu-group title="留存">
                &lt;Menu-item name="3-4">用户留存&lt;/Menu-item>
                &lt;Menu-item name="3-5">流失用户&lt;/Menu-item>
            &lt;/Menu-group>
        &lt;/Submenu>
        &lt;Menu-item name="4">
            &lt;Icon type="settings">&lt;/Icon>
            综合设置
        &lt;/Menu-item>
    &lt;/Menu>
    &lt;br>
    &lt;p>切换主题&lt;/p>
    &lt;Radio-group v-model="theme1">
        &lt;Radio label="light">&lt;/Radio>
        &lt;Radio label="dark">&lt;/Radio>
        &lt;Radio label="primary">&lt;/Radio>
    &lt;/Radio-group>
&lt;/template>`,
        "code2":`&lt;template>
&lt;Row>
        &lt;Col span="8">
            &lt;Menu :theme="theme2">
                &lt;Submenu name="1">
                    &lt;template slot="title">
                        &lt;Icon type="ios-paper">&lt;/Icon>
                        内容管理
                    &lt;/template>
                    &lt;Menu-item name="1-1">文章管理&lt;/Menu-item>
                    &lt;Menu-item name="1-2">评论管理&lt;/Menu-item>
                    &lt;Menu-item name="1-3">举报管理&lt;/Menu-item>
                &lt;/Submenu>
                &lt;Submenu name="2">
                    &lt;template slot="title">
                        &lt;Icon type="ios-people">&lt;/Icon>
                        用户管理
                    &lt;/template>
                    &lt;Menu-item name="2-1">新增用户&lt;/Menu-item>
                    &lt;Menu-item name="2-2">活跃用户&lt;/Menu-item>
                &lt;/Submenu>
                &lt;Submenu name="3">
                    &lt;template slot="title">
                        &lt;Icon type="stats-bars">&lt;/Icon>
                        统计分析
                    &lt;/template>
                    &lt;Menu-group title="使用">
                        &lt;Menu-item name="3-1">新增和启动&lt;/Menu-item>
                        &lt;Menu-item name="3-2">活跃分析&lt;/Menu-item>
                        &lt;Menu-item name="3-3">时段分析&lt;/Menu-item>
                    &lt;/Menu-group>
                    &lt;Menu-group title="留存">
                        &lt;Menu-item name="3-4">用户留存&lt;/Menu-item>
                        &lt;Menu-item name="3-5">流失用户&lt;/Menu-item>
                    &lt;/Menu-group>
                &lt;/Submenu>
            &lt;/Menu>
        &lt;/Col>
        &lt;Col span="8">
            &lt;Menu :theme="theme2" active-name="1-2" :open-names="['1']">
                &lt;Submenu name="1">
                    &lt;template slot="title">
                        &lt;Icon type="ios-paper">&lt;/Icon>
                        内容管理
                    &lt;/template>
                    &lt;Menu-item name="1-1">文章管理&lt;/Menu-item>
                    &lt;Menu-item name="1-2">评论管理&lt;/Menu-item>
                    &lt;Menu-item name="1-3">举报管理&lt;/Menu-item>
                &lt;/Submenu>
                &lt;Submenu name="2">
                    &lt;template slot="title">
                        &lt;Icon type="ios-people">&lt;/Icon>
                        用户管理
                    &lt;/template>
                    &lt;Menu-item name="2-1">新增用户&lt;/Menu-item>
                    &lt;Menu-item name="2-2">活跃用户&lt;/Menu-item>
                &lt;/Submenu>
                &lt;Submenu name="3">
                    &lt;template slot="title">
                        &lt;Icon type="stats-bars">&lt;/Icon>
                        统计分析
                    &lt;/template>
                    &lt;Menu-group title="使用">
                        &lt;Menu-item name="3-1">新增和启动&lt;/Menu-item>
                        &lt;Menu-item name="3-2">活跃分析&lt;/Menu-item>
                        &lt;Menu-item name="3-3">时段分析&lt;/Menu-item>
                    &lt;/Menu-group>
                    &lt;Menu-group title="留存">
                        &lt;Menu-item name="3-4">用户留存&lt;/Menu-item>
                        &lt;Menu-item name="3-5">流失用户&lt;/Menu-item>
                    &lt;/Menu-group>
                &lt;/Submenu>
            &lt;/Menu>
        &lt;/Col>
        &lt;Col span="8">
            &lt;Menu :theme="theme2" :open-names="['1']" accordion>
                &lt;Submenu name="1">
                    &lt;template slot="title">
                        &lt;Icon type="ios-paper">&lt;/Icon>
                        内容管理
                    &lt;/template>
                    &lt;Menu-item name="1-1">文章管理&lt;/Menu-item>
                    &lt;Menu-item name="1-2">评论管理&lt;/Menu-item>
                    &lt;Menu-item name="1-3">举报管理&lt;/Menu-item>
                &lt;/Submenu>
                &lt;Submenu name="2">
                    &lt;template slot="title">
                        &lt;Icon type="ios-people">&lt;/Icon>
                        用户管理
                    &lt;/template>
                    &lt;Menu-item name="2-1">新增用户&lt;/Menu-item>
                    &lt;Menu-item name="2-2">活跃用户&lt;/Menu-item>
                &lt;/Submenu>
                &lt;Submenu name="3">
                    &lt;template slot="title">
                        &lt;Icon type="stats-bars">&lt;/Icon>
                        统计分析
                    &lt;/template>
                    &lt;Menu-group title="使用">
                        &lt;Menu-item name="3-1">新增和启动&lt;/Menu-item>
                        &lt;Menu-item name="3-2">活跃分析&lt;/Menu-item>
                        &lt;Menu-item name="3-3">时段分析&lt;/Menu-item>
                    &lt;/Menu-group>
                    &lt;Menu-group title="留存">
                        &lt;Menu-item name="3-4">用户留存&lt;/Menu-item>
                        &lt;Menu-item name="3-5">流失用户&lt;/Menu-item>
                    &lt;/Menu-group>
                &lt;/Submenu>
            &lt;/Menu>
        &lt;/Col>
    &lt;/Row>
    &lt;br>
    &lt;p>切换主题</p>
    &lt;Radio-group v-model="theme2">
        &lt;Radio label="light">&lt;/Radio>
        &lt;Radio label="dark">&lt;/Radio>
    &lt;/Radio-group>
&lt;/template>`,
        title:'顶部导航',
        theme1: 'light',
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
        propsData:[
          {
            attribute:'mode',
            describe:'菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）',
            type:'String',
            default:'vertical'
          },{
            attribute:'theme',
            describe:'主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal"',
            type:'String',
            default:'light'
          },{
            attribute:'active-name',
            describe:'激活菜单的 name 值',
            type:'String | Number',
            default:'-'
          },{
            attribute:'open-names',
            describe:'展开的 Submenu 的 name 集合',
            type:'Array',
            default:'[ ]'
          },{
            attribute:'accordion',
            describe:'是否开启手风琴模式，开启后每次至多展开一个子菜单',
            type:'Boolean',
            default:'false'
          },{
            attribute:'width',
            describe:'导航菜单的宽度，只在 mode="vertical" 时有效，如果使用 Col 等布局，建议设置为 auto',
            type:'String',
            default:'240px'
          }],
        propsData4:[
          {
            attribute:'name',
            describe:'菜单项的唯一标识，必填',
            type:'String | Number',
            default:'-'
          }
        ],
        propsData3:[
          {
            eventname:'updateOpened',
            info:'手动更新展开的子目录，注意要在 $nextTick 里调用',
            parameter:'无'
          },{
            eventname:'updateActiveName',
            info:'手动更新当前选择项，注意要在 $nextTick 里调用',
            parameter:'无'
          }
        ],
        propsColumns3:[
          {
            title:'方法名',
            key:'eventname'
          },
          {
            title:'说明',
            key:'info'
          },{
            title:'参数',
            key:'parameter'
          }
        ],
        propsData2:[
          {
            name:'on-select',
            describe:'选择菜单（Menu-item）时触发',
            returnValue:'name'
          },{
            name:'on-open-change',
            describe:'当 展开/收起 子菜单时触发',
            returnValue:'当前展开的 Submenu 的 name 值数组'
          }
        ],
        propsColumns2:[
          {
            title: '事件名',
            key: 'name',
          },
          {
            title: '说明',
            key: 'describe',
          },{
            title: '返回值',
            key: 'returnValue',
          }
        ],
        propsData5:[
          {
            attribute:'name',
            describe:'子菜单的唯一标识，必填',
            type:'String | Number',
            default:'-'
          }
        ],
        propsData6:[
          {
              name:'无',
            info:'菜单项'
          },
          {
              name:'title',
            info:'子菜单标题'
          }
        ],
        propsColumns6:[
          {
              title:'名称',
            key:'name'
          },
          {
              title:'说明',
            key:'info'
          }
        ],
        propsData7:[
          {
            attribute:'title',
            describe:'分组标题',
            type:'String',
            default:'空'
          }
        ]
      }
    }
  }
</script>
<style>

</style>
