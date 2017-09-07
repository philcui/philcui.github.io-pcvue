/*
* 更新日志
*/

<template>
  <article class="doc-alert-container">
    <h1>更新日志</h1>
    <h2>更新说明</h2>
    <ul>
      <li>周期：每周三定时更新</li>
      <li>其它：有严重问题会不定期更新</li>
    </ul>
    <card v-for="(log, index) in logs" :key="index" class="logCard">
       <p slot="title">
         <span>{{log.version}}</span>
         <span>{{log.time}}</span>
      </p>
      <ul class="content">
        <li v-for="(item, index) in log.content" :key="index">{{item.text}}</li>
      </ul>
    </card>
  </article>
</template>

<script>
export default {
  data(){
    return {
      updateLogs:[
        {
          version:'V1.0.2',
          time: '2017.8.23',
          content: [
            {text:"修改表格树展开节点(图标)位置问题"},
            {text:"修改icon的引入方式。以前只能使用utvue中的图标，现在加入了可以引入外部图标"},
            {text:"取消子节点全部选中父节点自动变选中状态，子元素全部选中父元素也不会被选中"},
            {text:"增加可以配置多选状态下父元素选中子元素是否全被选中"},
            {text:"tab增加右键菜单"}
          ]
        },
        {
          version:'V1.0.3',
          time: '2017.8.25',
          content: [
            {text:"tab超出显示宽度增加左移右移功能"}
          ]
        },
        {
          version:'V1.0.5',
          time: '2017.8.30',
          content: [
            {text:"treeSelect数据treeData增加watch以保证外部数据更新后同步更新"}
          ]
        },
        {
          version:'V1.0.7',
          time: '2017.9.5',
          content: [
            {text:"treeselect下拉选项高度可设置"},
            {text:"treeselect回显功能：数据回显，方法回显"},
            {text:"修复form的resetFields对treeselect无效的问题（绑定model)"},
            {text:"tree监听data，data变化时发送on-tree-init事件，返回默认选中的节点"},
            {text:"tree  cascade=true时，selected与checked一致"},
            {text:"将tree的widthCheckAll属性改为withCheckAll"},
            {text:"修改tabletree图标样式和图标引入方式"}
          ]
        },
        {
          version:'V1.0.8',
          time: '2017.9.6',
          content: [
            {text:"新增部分字体图标"}
          ]
        },
        {
          version:'V1.0.9',
          time: '2017.9.7',
          content: [
            {text:"解决table的高度问题"},
            {text:"treeSelect加入transfer配置，浮层移动到body内（适用于高度大于父级时，下拉树显示不全）"}
          ]
        }
      ]
    }
  },
  computed: {
    logs(){
      return this.updateLogs.reverse();
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
  .logCard{
    margin-top: 30px;
    .content{
      margin-left: 10px;
      list-style: circle;
    }
  }
  .doc-alert-container{
    margin-bottom: 20px;
  }
</style>
