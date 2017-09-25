<template>
  <article class="doc-icon-container">
    <h1>Icon 图标</h1>
    <h2>概述</h2>
    <p>
     除本页面列出的图标外，utvue也支持开源项目<a href="http://ionicons.com/">ionicons</a>，使用方法相同。
    </p>
    <h2>如何使用</h2>
    <p>
      使用<code>&lt;Icon /></code>组件，指定图标对应的type属性，示例代码：
      <pre   v-highlight><code>
      &lt;Icon type="checkmark" />
      </code></pre>
      使用本页中列出的图标渲染后为：
      <pre   v-highlight><code>
      &lt;i class="icon iconfont icon-checkmark">&lt;/i>
      </code></pre>
      使用开源项目<a href="http://ionicons.com/"> ionicons </a>中的图标渲染后为：
      <pre   v-highlight><code>
      &lt;i class="icon ivu-icon ivu-icon-checkmark">&lt;/i>
      </code></pre>
    </p>
    <h2 id="icon1">API</h2>
    <h3>Icon props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h2 id="icon2">示例</h2>
    <p class="search">
      <Input v-model="keyword" placeholder="请输入英文关键词搜索" @on-change="search"></Input>
    </p>
    <div class="demo icons">
      <div v-if="showIcons.length==0">对不起，没有符合要求的图标</div>
      <div class="icon-item" v-for="(item, index) in showIcons" :key="index" v-else>
        <Icon :type="item"></Icon>
        <p>.{{item}}</p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  data () {
    return {
      keyword:"",
      icons:[
        "icon-diyiye","icon-retract","icon-Editing","icon-Left","icon-Delete","icon-Right","icon-Setting",
        "icon-spread","icon-Calendar","icon-Folder-close","icon-iconzhenghe32","icon-checkbox-no",
        "icon-jinyong","icon-Up","icon-Down","icon-Password","icon-Folder-open","icon-Accounts","icon-fuzhi-copy",
        "icon-File","icon-Save","icon-Process-editing","icon-Parallel-end","icon-Parallel-start","icon-Branch-start",
        "icon-Rules-node","icon-Process-release","icon-Branch-end","icon-Process-end","icon-Script-node","icon-Process-enable",
        "icon-Process-verify","icon-Process-start","icon-User-node","icon-User-complete","icon-Process-add",
        "icon-Add","icon-Sub-end","icon-Sub-node","icon-riqi","icon-shijian","icon-Cas","icon-Demo","icon-Report-manage",
        "icon-Form-engine","icon-Process-manage","icon-Task-scheduling","icon-View-page","icon-Function",
        "icon-File-system-service","icon-Person-manage","icon-Tenant-manage","icon-Online-file","icon-Standard-code",
        "icon-Report","icon-Report-class","icon-Form","icon-Service","icon-Draft","icon-User","icon-Process-class",
        "icon-Enable","icon-Release","icon-Organizational","icon-Form-class","icon-checkbox-in","icon-shibai","icon-Leftarrows",
        "icon-Right-arrows","icon-chenggong","icon-lastPage","icon-chuyidong","icon-liucheng","icon-biaodan","icon-yunying","icon-report1",
        "icon-tiaodu","icon-renyuan","icon-document","icon-xitong","icon-shuaxin","icon-home1","icon-fuzhi","icon-huaban","icon-guanbiqita","icon-peizhi","icon-3","icon-edit"
      ],
      showIcons:[],
       "propsColumns":[
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
        "propsData":[{
            attribute: 'type',
            describe:'图标的名称',
            type:"String",
            default:"-"
          },{
            attribute: 'size',
            describe:'图标的大小，单位是 px',
            type:"Number | String",
            default:"-"
          },{
            attribute: 'color',
            describe:'图标的颜色',
            type:"String",
            default:"-"
          }]
    }
  },
  created () {
    this.showIcons = this.icons
  },
  methods: {
    search () {
       this.showIcons = this.icons.filter(item => {
          if (item.indexOf(this.keyword)!== -1) {
            return item;
          }
       });
    }
  }
}
</script>
<style lang="less" scoped>
.icons{
  display: flex;
  flex-wrap: wrap;
  & > div{
    height:100px;
    text-align: center;
    width: 100%;
  }
  .icon-item{
    width:145px;
    height: 100px;
    text-align: center;
    justify-content: space-between;
    i{
      font-size: 32px;
      font-weight: 400;
    }
  }
}
p.search{
  text-align: center;
  margin: 30px 0px;
  .ivu-input-wrapper{
    width:60%;
   input{
     height: 40px;
   }
  }
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
</style>
