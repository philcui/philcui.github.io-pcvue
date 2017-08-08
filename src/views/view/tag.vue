<template>
  <article class="doc-tag-container">
    <h1>Tag标签</h1>
    <h2>概述</h2>
    <p>
      对不同维度进行简单的标记和分类。
    </p>
    <h2>代码示例</h2>
    <section class="demo" id="tag1">
    <demoTab :code="tagCode" :describeTitle="subTitle1">
      <div slot="sample">
         <Tag>tag1</Tag>
         <Tag>tag2</Tag>
         <Tag>tag3</Tag>
         <Tag v-if="show" closable @on-close="handleClose">tag4</Tag>
      </div>
      <div slot="describe-content">
        简单的展示，添加属性<Tag color="grey">closable</Tag>可以关闭标签。<br/>
         点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。
      </div>
    </demoTab>
    </section>

    <section class="demo" id="tag2">
      <demoTab :code="tagCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Tag type="border">标签三</Tag>
          <Tag type="border" closable>标签四</Tag>
          <Tag type="dot">标签一</Tag>
          <Tag type="dot" closable>标签二</Tag>
        </div>
        <div slot="describe-content">
          通过设置<Tag color="grey">type</Tag>属性为<Tag color="grey">border</Tag>或<Tag color="grey">dot</Tag>来选择不同的样式类型。建议有关闭的某些场景下使用border，图例的场景下使用dot。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="tag3">
      <demoTab :code="tagCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Tag closable color="blue">标签一</Tag>
          <Tag closable color="green">标签二</Tag>
          <Tag closable color="red">标签三</Tag>
          <Tag closable color="yellow">标签四</Tag>
          <br><br>
          <Tag type="border" closable color="blue">标签一</Tag>
          <Tag type="border" closable color="green">标签二</Tag>
          <Tag type="border" closable color="red">标签三</Tag>
          <Tag type="border" closable color="yellow">标签四</Tag>
          <br><br>
          <Tag type="dot" closable color="blue">标签一</Tag>
          <Tag type="dot" closable color="green">标签二</Tag>
          <Tag type="dot" closable color="red">标签三</Tag>
          <Tag type="dot" closable color="yellow">标签四</Tag>
        </div>
        <div slot="describe-content">
          四种不同的颜色。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="tag4">
      <demoTab :code="tagCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
          <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
        </div>
        <div slot="describe-content">
          用数组生成一组标签，可以动态添加和删除。
        </div>
      </demoTab>
    </section>

    <h2 id="tag5">API</h2>
    <h3>Tag props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Tag events</h3>
    <section class="demo">
      <Table border :columns="eventsColumns" :data="eventsData"></Table>
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
        attribute: 'closable',
        describe:'标签是否可以关闭',
        type:"Boolean",
        default:"false"
      },{
        attribute: 'type',
        describe:'标签的样式类型，可选值为 border、dot或不填',
        type:"String",
        default:"-"
      },{
        attribute: 'color',
        describe:'标签颜色，可选值为blue、green、red、yellow',
        type:"String",
        default:"-"
      },{
        attribute: 'name',
        describe:'当前标签的名称，使用 v-for，并支持关闭时，会比较有用',
        type:"String | Number",
        default:"-"
      }],
      eventsColumns:[
        {
          title: '事件名',
          key: 'eventsName',
        },
        {
          title: '说明',
          key: 'describe',
          width:'450px'
        },{
          title: '返回值',
          key: 'return',
        }],
      eventsData:[{
        eventsName: 'on-close',
        describe:'关闭时触发',
        return:"event, name"
      }],
      "subTitle1": "基本用法",
      "tagCode": `
        &lt;template>
           &lt;Tag>tag1&lt;/Tag>
           &lt;Tag>tag2&lt;/Tag>
           &lt;Tag>tag3&lt;/Tag>
           &lt;Tag v-if="show" closable @on-close="handleClose">tag4&lt;/Tag>
        &lt;/template>
        &lt;script>
            export default {
              data () {
                return {
                    show: true
                }
              },
              methods: {
                  handleClose () {
                      this.show = false;
                  }
              }
            }
        &lt;/script>
        `,
      "subTitle2": "样式类型",
      "tagCode2": `
        &lt;template>
           &lt;Tag type="border">标签三&lt;/Tag>
           &lt;Tag type="border" closable>标签四&lt;/Tag>
           &lt;Tag type="dot">标签一&lt;/Tag>
           &lt;Tag type="dot" closable>标签二&lt;/Tag>
        &lt;/template>
        &lt;script>
            export default {

            }
        &lt;/script>
        `,
      "subTitle3": "各种颜色",
      "tagCode3": `
        &lt;template>
           &lt;Tag closable color="blue">标签一&lt;/Tag>
           &lt;Tag closable color="green">标签二&lt;/Tag>
           &lt;Tag closable color="red">标签三&lt;/Tag>
           &lt;Tag closable color="yellow">标签四&lt;/Tag>
           &lt;br>&lt;br>
           &lt;Tag type="border" closable color="blue">标签一&lt;/Tag>
           &lt;Tag type="border" closable color="green">标签二&lt;/Tag>
           &lt;Tag type="border" closable color="red">标签三&lt;/Tag>
           &lt;Tag type="border" closable color="yellow">标签四&lt;/Tag>
           &lt;br>&lt;br>
           &lt;Tag type="dot" closable color="blue">标签一&lt;/Tag>
           &lt;Tag type="dot" closable color="green">标签二&lt;/Tag>
           &lt;Tag type="dot" closable color="red">标签三&lt;/Tag>
           &lt;Tag type="dot" closable color="yellow">标签四&lt;/Tag>
        &lt;/template>
        &lt;script>
            export default {

            }
        &lt;/script>
        `,
      "subTitle4": "动态添加和删除",
      "tagCode4": `
        &lt;template>
           &lt;Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}&lt;/Tag>
           &lt;Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签&lt;/Button>
        &lt;/template>
        &lt;script>
            export default {
              data () {
                return {
                    count: [0, 1, 2]
                }
              },
              methods: {
                  handleAdd () {
                      if (this.count.length) {
                          this.count.push(this.count[this.count.length - 1] + 1);
                      } else {
                          this.count.push(0);
                      }
                  },
                  handleClose2 (event, name) {
                      const index = this.count.indexOf(name);
                      this.count.splice(index, 1);
                  }
              }
            }
        &lt;/script>
        `,
      count: [0, 1, 2],
      show: true
    }
  },
  methods:{
    handleClose(){
      this.show = false;
    },
    handleAdd () {
      if (this.count.length) {
        this.count.push(this.count[this.count.length - 1] + 1);
      } else {
        this.count.push(0);
      }
    },
    handleClose2 (event, name) {
      const index = this.count.indexOf(name);
      this.count.splice(index, 1);
    }
  }
}
</script>
<style lang="less" scoped>
  article {
    padding-left: 30px;
    font-size: 14px;
    h1, h2, h3{
      margin:12px 0px;
      font-weight: normal;
    }
    h1{
      margin-top: 40px;
      font-size: 26px;
    }
    h2{
      font-size:20px;
    }
    section.demo{
      margin: 20px 0px;
    }
  }
</style>
