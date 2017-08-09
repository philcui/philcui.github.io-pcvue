<template>
  <article class="doc-alert-container">
    <h2 id="Grid_1">代码示例</h2>
    <demoTab :code="gridCode" :describeTitle="describeTitle">
      <div slot="sample">
        <Row>
          <Col span="12">col-12</Col>
          <Col span="12">col-12</Col>
        </Row>
        <br>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>
        <br>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>
      </div>
      <div slot="describe-content">
         除客户指定外，产品建议使用商务蓝作为主色调。
      </div>
    </demoTab>
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
      "describeTitle": "品牌色",
      "gridCode": `
&lt;template>
    &lt;Row>
        &lt;Col span="12">col-12&lt;/Col>
        &lt;Col span="12">col-12&lt;/Col>
    &lt;/Row>
    &lt;br>
    &lt;Row>
        &lt;Col span="8">col-8&lt;/Col>
        &lt;Col span="8">col-8&lt;/Col>
        &lt;Col span="8">col-8&lt;/Col>
    &lt;/Row>
    &lt;br>
    &lt;Row>
        &lt;Col span="6">col-6&lt;/Col>
        &lt;Col span="6">col-6&lt;/Col>
        &lt;Col span="6">col-6&lt;/Col>
        &lt;Col span="6">col-6&lt;/Col>
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
<style lang="less" scoped>
.ivu-col{
  color: #fff;
  text-align: center;
  line-height: 45px;
  font-size: 1em;
}
.ivu-col:nth-child(2n+1){
  background-color: rgba(0,153,229,.7);
}
.ivu-col:nth-child(2n){
  background-color: rgba(0,153,229,.9);
}
</style>
