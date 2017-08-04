<template>
  <article class="doc-cascader-container">
    <h1>cascader 级联选择</h1>
    <h2>概述</h2>
    <p>
      从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。<br/>
      相比 Select 组件，可以一次性完成选择，体验更好。
    </p>
    <h2>代码示例</h2>

    <section class="demo">
      <demoTab :code="cascaderCode" :describeTitle="subTitle">
        <div slot="sample">
          <Cascader :data="data" v-model="value1"></Cascader>
        </div>
        <div slot="describe-content">
          级联选择对数据有较严格要求，请参照示例的格式使用<code>data</code>，每项数据至少包含 <code>value</code>、<code>label</code> 两项，子集为 <code>children</code>，以此类推。<br/>
          <code>value</code> 为当前选择的数据的 value 值的数组，比如 <code>['beijing', 'gugong']</code> ，按照级联顺序依次排序，使用 <code>v-model</code> 进行双向绑定。
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
    data () {
      return {
        value1: [],
        data: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }],
        "subTitle":'基础用法',
        "cascaderCode":`
          &lt;template>
             &lt;Cascader :data="data" v-model="value1">&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      value1: [],
                      data: [{
                          value: 'beijing',
                          label: '北京',
                          children: [
                              {
                                  value: 'gugong',
                                  label: '故宫'
                              },
                              {
                                  value: 'tiantan',
                                  label: '天坛'
                              },
                              {
                                  value: 'wangfujing',
                                  label: '王府井'
                              }
                          ]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          children: [
                              {
                                  value: 'nanjing',
                                  label: '南京',
                                  children: [
                                      {
                                          value: 'fuzimiao',
                                          label: '夫子庙',
                                      }
                                  ]
                              },
                              {
                                  value: 'suzhou',
                                  label: '苏州',
                                  children: [
                                      {
                                          value: 'zhuozhengyuan',
                                          label: '拙政园',
                                      },
                                      {
                                          value: 'shizilin',
                                          label: '狮子林',
                                      }
                                  ]
                              }
                          ],
                      }]
                  }
                }
              }
          &lt;/script>
        `

      }
    }
  }
</script>
<style lang="less">
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
