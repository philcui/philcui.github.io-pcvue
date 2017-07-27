<template>
  <article class="doc-alert-container">
    <h1>Checkbox 多选框</h1>
    <h2>概述</h2>
    <p>
      基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="checkbox1">
      <demoTab :code="indeterminateCode" :describeTitle="indeterminateTitle">
        <div slot="sample">
          <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
            <Checkbox
              :indeterminate="indeterminate"
              :value="checkAll"
              @click.prevent.native="handleCheckAll">全选</Checkbox>
          </div>
          <Checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
          </Checkbox-group>
        </div>
        <div slot="describe-content">
          在实现全选效果时，你可能会用到 indeterminate 属性。
          <br>示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="checkbox2">
      <demoTab :code="checkBoxCode" :describeTitle="describeTitle">
        <div slot="sample">
          <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
          <Checkbox-group v-model="disabledGroup">
            <Checkbox label="香蕉" disabled></Checkbox>
            <Checkbox label="苹果" disabled></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
            <Checkbox label="榴莲"></Checkbox>
          </Checkbox-group>
        </div>
        <div slot="describe-content">
          通过设置disabled属性来禁用多选框。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="checkbox3">
      <demoTab :code="moreCheckBoxCode" :describeTitle="moreTitle">
        <div slot="sample">
          <Checkbox-group v-model="social">
            <Checkbox label="twitter">
              <Icon type="social-twitter"></Icon>
              <span>Twitter</span>
            </Checkbox>
            <Checkbox label="facebook">
              <Icon type="social-facebook"></Icon>
              <span>Facebook</span>
            </Checkbox>
            <Checkbox label="github">
              <Icon type="social-github"></Icon>
              <span>Github</span>
            </Checkbox>
            <Checkbox label="snapchat">
              <Icon type="social-snapchat"></Icon>
              <span>Snapchat</span>
            </Checkbox>
          </Checkbox-group>
          <Checkbox-group v-model="fruit">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
          </Checkbox-group>
        </div>
        <div slot="describe-content">
          使用Checkbox-group配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。<br>
          每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。
        </div>
      </demoTab>
    </section>

    <h2 id="checkbox4">API</h2>
    <h3>Checkbox props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Checkbox events</h3>
    <section class="demo">
      <Table border :columns="propsColumns2" :data="propsData2"></Table>
    </section>
    <h3>CheckboxGroup props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData4"></Table>
    </section>
    <h3>CheckboxGroup events</h3>
    <section class="demo">
      <Table border :columns="propsColumns2" :data="propsData3"></Table>
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
        describeTitle:'不可用',
        moreTitle:'组合使用',
        indeterminateTitle:'全选',
        disabledSingle: true,
        indeterminate: true,
        checkAll: false,
        checkAllGroup: ['香蕉', '西瓜'],
        disabledGroup: ['苹果'],
        social: ['facebook', 'github'],
        fruit: ['苹果'],
        propsColumns:[
          {
            title: '属性',
            key: 'attribute',
          },
          {
            title: '说明',
            key: 'describe',
            width:'350px'
          },
          {
            title: '类型',
            key: 'type',
          },
          {
            title: '默认值',
            key: 'default'
          }],
        propsColumns2:[
          {
            title: '事件名',
            key: 'event',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          },
          {
            title: '返回值',
            key: 'returnKey',
          }
        ],
        propsData:[{
          attribute: 'value',
          describe:'只在单独使用时有效。可以使用 v-model 双向绑定数据',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'label',
          describe:'只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中',
          type:"String | Number | Boolean",
          default:"-"
        },{
          attribute: 'disabled',
          describe:'是否禁用当前项',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'indeterminate',
          describe:'设置 indeterminate 状态，只负责样式控制',
          type:"Boolean",
          default:"false"
        }],
        propsData2:[{
          event:'on-change',
          describe:'只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发',
          returnKey:'true | false'
        }],
        propsData3:[{
          event:'on-change',
          describe:'在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发',
          returnKey:'[...]'
        }],
        propsData4:[{
          attribute: 'value',
          describe:'指定选中项目的集合，可以使用 v-model 双向绑定数据',
          type:"Array",
          default:"[]"
        }],
        indeterminateCode:`  &lt;template>
            &lt;div>
              &lt;div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                &lt;Checkbox
                    :indeterminate="indeterminate"
                    :value="checkAll"
                    @click.prevent.native="handleCheckAll">全选&lt;/Checkbox>
               &lt;/div>
              &lt;Checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
                  &lt;Checkbox label="香蕉">&lt;/Checkbox>
                  &lt;Checkbox label="苹果">&lt;/Checkbox>
                  &lt;Checkbox label="西瓜">&lt;/Checkbox>
              &lt;/Checkbox-group>
            &lt;/div>
      &lt;/template>
        &lt;script>
            export default {
                data () {
                    return {
                        indeterminate: true,
                        checkAll: false,
                        checkAllGroup: ['香蕉', '西瓜'],
                    }
                },
                methods:{
                    handleCheckAll () {
                      if (this.indeterminate) {
                        this.checkAll = false;
                      } else {
                        this.checkAll = !this.checkAll;
                      }
                      this.indeterminate = false;

                      if (this.checkAll) {
                        this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                      } else {
                        this.checkAllGroup = [];
                      }
                    },
                    checkAllGroupChange (data) {
                      if (data.length === 3) {
                        this.indeterminate = false;
                        this.checkAll = true;
                      } else if (data.length > 0) {
                        this.indeterminate = true;
                        this.checkAll = false;
                      } else {
                        this.indeterminate = false;
                        this.checkAll = false;
                      }
                    }
                  }
            }
        &lt;/script> `,
        checkBoxCode: `  &lt;template>
        &lt;div>
          &lt;Checkbox v-model="disabledSingle" disabled>Checkbox&lt;/Checkbox>
            &lt;Checkbox-group v-model="disabledGroup">
              &lt;Checkbox label="香蕉" disabled>&lt;/Checkbox>
              &lt;Checkbox label="苹果" disabled>&lt;/Checkbox>
              &lt;Checkbox label="西瓜">&lt;/Checkbox>
              &lt;Checkbox label="榴莲"> &lt;/Checkbox>
           &lt;/Checkbox-group>
        &lt;/div>
  &lt;/template>
    &lt;script>
        export default {
            data () {
                return {
                    disabledSingle: true,
                    disabledGroup: ['苹果'],
                }
            }
        }
    &lt;/script> `,
        moreCheckBoxCode: `   &lt;template>
         &lt;div>
             &lt;Checkbox-group v-model="social">
             &lt;Checkbox label="twitter">
                 &lt;Icon type="social-twitter"> &lt;/Icon>
                 &lt;span>Twitter &lt;/span>
             &lt;/Checkbox>
             &lt;Checkbox label="facebook">
                 &lt;Icon type="social-facebook"> &lt;/Icon>
                 &lt;span>Facebook &lt;/span>
             &lt;/Checkbox>
             &lt;Checkbox label="github">
                 &lt;Icon type="social-github"> &lt;/Icon>
                 &lt;span>Github &lt;/span>
             &lt;/Checkbox>
             &lt;Checkbox label="snapchat">
                 &lt;Icon type="social-snapchat"> &lt;/Icon>
                 &lt;span>Snapchat &lt;/span>
             &lt;/Checkbox>
             &lt;/Checkbox-group>
             &lt;Checkbox-group v-model="fruit">
                 &lt;Checkbox label="香蕉"> &lt;/Checkbox>
                 &lt;Checkbox label="苹果"> &lt;/Checkbox>
                 &lt;Checkbox label="西瓜"> &lt;/Checkbox>
             &lt;/Checkbox-group>
         &lt;/div>
   &lt;/template>
     &lt;script>
        export default {
            data () {
                return {
                    social: ['facebook', 'github'],
                    fruit: ['苹果']
                }
            }
        }
     &lt;/script> `,
      }
    },methods:{
      handleCheckAll () {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
        } else {
          this.checkAllGroup = [];
        }
      },
      checkAllGroupChange (data) {
        if (data.length === 3) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      }
    }
  }
</script>
<style>

</style>
