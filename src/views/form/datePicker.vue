<template>
  <article class="doc-datePicker-container">
    <h1>DatePicker 日期选择器</h1>
    <h2>概述</h2>
    <p>
      选择或输入日期，支持年、月、日期等类型，支持选择范围。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="demo1">
      <demoTab :code="datePickerCode" :describeTitle="subTitle">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
            <Col span="12">
            <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>type</code> 为 <code>date</code> 或 <code>daterange</code> 分别显示<strong>选择单日</strong>和<strong>选择范围</strong>类型。<br/>
          设置属性 <code>placement</code> 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。
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
        "subTitle": "基础用法",
        "datePickerCode": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="12">
                     &lt;Date-picker type="date" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
                 &lt;Col span="12">
                     &lt;Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
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
#demo1 .example{
  min-height: 170px;
}
</style>
