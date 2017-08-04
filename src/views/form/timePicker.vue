<template>
  <article class="doc-timePicker-container">
    <h1>TimePicker 时间选择器</h1>
    <h2>概述</h2>
    <p>
      选择或输入标准时间，支持选择范围。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="demo1">
      <demoTab :code="timePickerCode" :describeTitle="subTitle">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Time-picker type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
            </Col>
            <Col span="12">
            <Time-picker type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>type</code> 为 <code>time</code> 或 <code>timerange</code> 分别显示<strong>选择单个时间</strong>和<strong>选择范围时间</strong>类型。<br/>
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
        "timePickerCode": `
        &lt;template>
           &lt;Row>
               &lt;Col span="12">
                   &lt;Time-picker type="time" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
               &lt;Col span="12">
                   &lt;Time-picker type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
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
</style>
