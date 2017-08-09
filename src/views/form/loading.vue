<template>
  <article class="doc-alert-container">
    <h1>Loading 加载中</h1>
    <h2 >概述</h2>
    <p>
     等待任务加载
    </p>
    <h2 >示例代码</h2>
    <section class="demo" id="progress1">
      <demoTab :code="noticeModelCode" :describeTitle="describeTitle">
        <div slot="sample">
          <div>
            <i-progress :percent="percent"></i-progress>
            <Button-group size="large">
              <Button icon="ios-plus-empty" @click.native="add"></Button>
              <Button icon="ios-minus-empty" @click.native="minus"></Button>
            </Button-group>
            <i-progress :percent="25" :stroke-width="5"></i-progress>
            <i-progress :percent="100">
              <Icon type="checkmark-circled"></Icon>
              <span>成功</span>
            </i-progress>
          </div>
        </div>
        <div slot="describe-content">
          <p> 展示操作或任务的当前进度，比如上传文件。</p>
          <p> 处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。</p>
        </div>
      </demoTab>
    </section>

    <section class="demo" id="progress2">
      <demoTab :code="noticeModelCode" :describeTitle="describeTitle2">
        <div slot="sample">
          <div style="height: 100px;">
            <Progress vertical :percent="25"></Progress>
            <Progress vertical :percent="45" status="active"></Progress>
            <Progress vertical :percent="65" status="wrong"></Progress>
            <Progress vertical :percent="100"></Progress>
            <Progress vertical :percent="25" hide-info></Progress>
          </div>
        </div>
        <div slot="describe-content">
          <p> 设置属性 vertical 将以垂直方向显示。</p>
        </div>
      </demoTab>
    </section>

    <section class="demo" id="progress4">
      <demoTab :code="noticeModelCode" :describeTitle="describeTitle3">
        <div slot="sample">
          <Progress :percent="percent"></Progress>
          <Button-group size="large">
            <Button icon="ios-plus-empty" @click="add"></Button>
            <Button icon="ios-minus-empty" @click="minus"></Button>
          </Button-group>
        </div>
        <div slot="describe-content">
          <p> 通过数据的联动和逻辑控制，实现动态效果。</p>
        </div>
      </demoTab>
    </section>

    <section class="demo" id="progress3">
      <demoTab :code="noticeModelCode" :describeTitle="describeTitle4">
        <div slot="sample">
          <Progress :percent="25" :stroke-width="5"></Progress>
          <Progress :percent="100">
            <Icon type="checkmark-circled"></Icon>
            <span>成功</span>
          </Progress>
        </div>
        <div slot="describe-content">
          <p> 通过自定义slot和属性stroke-width改变进度条效果。</p>
        </div>
      </demoTab>
    </section>

    <h2 id="noticeModal2">API</h2>
    <h3>NoticeModel props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
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
          describeTitle:'Progress--基本用法',
          describeTitle2:'Progress--垂直方向',
          describeTitle3:'Progress--配合外部组件使用',
          describeTitle4:'Progress--自定义更多样式',
          describeTitle5:'',
          describeTitle6:'',
          noticeModelCode:'',
        }
    },
    methods:{

    }
  }
</script>
