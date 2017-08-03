<template>
  <article class="doc-select-container">
    <h1>Select 选择器</h1>
    <h2>概述</h2>
    <p>
      使用模拟的增强下拉选择器来代替浏览器原生的选择器。<br/>
      选择器支持单选、多选、搜索，以及键盘快捷操作。
    </p>
    <blockquote>注意：非 template/render 模式下，需使用<code>i-select</code>、<code>i-option</code>。</blockquote>
    <h2>代码示例</h2>
    <section class="demo">
      <demoTab :code="selectCode" :describeTitle="subTitle">
        <div slot="sample">
          <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div slot="describe-content">
          基本用法。可以使用 <code>v-model</code> 双向绑定数据。<br/>
          单选时，<code>value</code> 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据<code>Option</code>的<code>value</code>来返回选中的数据。<br/>
          可以给<code>Select</code>添加 <code>style</code> 样式，比如宽度。<br/>
          在展开选择器后，可以使用键盘的up和down快速上下选择，按下Enter选择，按下Esc收起选择器。
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
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        model1: '',
        "subTitle": '基础用法',
        "selectCode": `
          &lt;template>
             &lt;Select v-model="model1" style="width:200px">
                 &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
             &lt;/Select>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    cityList: [
                      {
                        value: 'beijing',
                        label: '北京市'
                      },
                      {
                        value: 'shanghai',
                        label: '上海市'
                      },
                      {
                        value: 'shenzhen',
                        label: '深圳市'
                      },
                      {
                        value: 'hangzhou',
                        label: '杭州市'
                      },
                      {
                        value: 'nanjing',
                        label: '南京市'
                      },
                      {
                        value: 'chongqing',
                        label: '重庆市'
                      }
                    ],
                    model1: ''
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
