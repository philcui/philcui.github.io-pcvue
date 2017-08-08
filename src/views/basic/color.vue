<template>
  <article class="doc-color-container">
    <h1>Color 色彩</h1>
    <h2>概述</h2>
    <p>
      推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。。
    </p>
    <h2 id="color1">主色</h2>
    <p>
      使用较为安全的深蓝色作为主色调，其中#5584cc常用于 hover。
    </p>
    <Row :gutter="16">
      <Col span="6"><div style="background-color:#3a68ad;">按钮色<br/>#3a68ad</div></Col>
      <Col span="6"><div style="background-color:#5584cc;">按钮划入色<br/>#5584cc</div></Col>
      <Col span="6"><div style="background-color:#7ca9eb;">按钮加载色<br/>#7ca9eb</div></Col>
      <Col span="6"><div style="background-color:#e8f3fc;color:#4d4d4d;">表单划入色<br/>#e8f3fc</div></Col>
    </Row>
    <br/>
    <h2 id="color2">辅助色</h2>
    <p>
      辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。
    </p>
    <Row :gutter="16">
      <Col span="8"><div style="background-color:#3dcc76;">成功<br/>#3dcc76</div></Col>
      <Col span="8"><div style="background-color:#ffa422;">警告<br/>#ffa422</div></Col>
      <Col span="8"><div style="background-color:#fb5044;">错误<br/>#fb5044</div></Col>
    </Row>
    <br/>
    <h2 id="color3">中性色</h2>
    <p>
      中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。
    </p>
    <Row :gutter="16">
      <Col span="8"><div style="background-color:#4d4d4d;">标题、正文<br/>#4d4d4d</div></Col>
      <Col span="8"><div style="background-color:#9fa9b2;">辅助文字<br/>#9fa9b2</div></Col>
      <Col span="8"><div style="background-color:#cdd3de;color:#4d4d4d;">分割线、边框<br/>#cdd3de</div></Col>
    </Row>
    <Row :gutter="16">
      <Col span="8"><div style="background-color:#dee2ea;color:#4d4d4d;">禁用背景色<br/>#dee2ea</div></Col>
      <Col span="8"><div style="background-color:#f4f6f9;color:#4d4d4d;">表单表头<br/>#f4f6f9</div></Col>
    </Row>
  </article>
</template>
<script>

</script>
<style lang="less" scoped>
  .ivu-col{
    color: #fff;
    padding: 10px 0;
    text-align: center;
    background:transparent!important;
  }
  .ivu-col div{
    color: #fff;
    padding: 10px 0;
    text-align: center;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
  }
</style>
