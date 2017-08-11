<template>
  <article class="doc-carousel-container">
    <h1>Carousel 走马灯</h1>
    <h2>概述</h2>
    <p>
      常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="carousel1">
      <demoTab :code="carouselCode" :describeTitle="subTitle" :animated="false">
        <div slot="sample" class="example">
          <Carousel v-model="value1">
            <Carousel-item>
              <div class="demo-carousel">1</div>
            </Carousel-item>
            <Carousel-item>
              <div class="demo-carousel">2</div>
            </Carousel-item>
            <Carousel-item>
              <div class="demo-carousel">3</div>
            </Carousel-item>
            <Carousel-item>
              <div class="demo-carousel">4</div>
            </Carousel-item>
          </Carousel>
        </div>
        <div slot="describe-content">
          最简单定义一个时间轴的用法。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="carousel2">
      <demoTab :code="carouselCode2" :describeTitle="subTitle2" :animated="false">
        <div slot="sample"  class="example">
          <Carousel autoplay v-model="value2">
            <Carousel-item>
              <div class="demo-carousel">1</div>
            </Carousel-item>
            <Carousel-item>
              <div class="demo-carousel">2</div>
            </Carousel-item>
            <Carousel-item>
              <div class="demo-carousel">3</div>
            </Carousel-item>
            <Carousel-item>
              <div class="demo-carousel">4</div>
            </Carousel-item>
          </Carousel>
        </div>
        <div slot="describe-content">
          设置属性 <code>autoplay</code> 可以自动轮播，同时可以设置属性 <code>autoplay-speed</code> 改变自动播放的速度。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="carousel3">
      <demoTab :code="carouselCode3" :describeTitle="subTitle3" :animated="false">
        <div slot="sample"  class="example2">
          <Form :model="setting" :label-width="100">
            <Form-item label="自动切换">
              <i-switch v-model="setting.autoplay">
                <span slot="open">开</span>
                <span slot="close">关</span>
              </i-switch>
            </Form-item>
            <Form-item label="自动切换速度">
              <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
            </Form-item>
            <Form-item label="指示器位置">
              <Radio-group v-model="setting.dots" type="button">
                <Radio label="inside">内部</Radio>
                <Radio label="outside">外部</Radio>
                <Radio label="none">不显示</Radio>
              </Radio-group>
            </Form-item>
            <Form-item label="切换箭头">
              <Radio-group v-model="setting.arrow" type="button">
                <Radio label="hover">悬停时显示</Radio>
                <Radio label="always">一直显示</Radio>
                <Radio label="never">不显示</Radio>
              </Radio-group>
            </Form-item>
            <Form-item label="指示器触发方式">
              <Radio-group v-model="setting.trigger" type="button">
                <Radio label="click">点击</Radio>
                <Radio label="hover">悬停</Radio>
              </Radio-group>
            </Form-item>
          </Form>
          <Carousel
            v-model="value3"
            :autoplay="setting.autoplay"
            :autoplay-speed="setting.autoplaySpeed"
            :dots="setting.dots"
            :trigger="setting.trigger"
            :arrow="setting.arrow">
            <Carousel-item>
              <div class="demo-carousel">1</div>
            </Carousel-item>
            <Carousel-item>
              <div class="demo-carousel">2</div>
            </Carousel-item>
            <Carousel-item>
              <div class="demo-carousel">3</div>
            </Carousel-item>
            <Carousel-item>
              <div class="demo-carousel">4</div>
            </Carousel-item>
          </Carousel>
        </div>
        <div slot="describe-content">
          动态调整各配置。
        </div>
      </demoTab>
    </section>

    <h2 id="carousel4">API</h2>
    <h3>Carousel props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Carousel events</h3>
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
        value1: 0,
        value2: 0,
        value3: 0,
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'inside',
          trigger: 'click',
          arrow: 'hover'
        },
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
          attribute: 'value',
          describe:'幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据',
          type:"Number",
          default:"0"
        },{
          attribute: 'height',
          describe:'走马灯的高度，可填 auto 或具体高度数值，单位 px',
          type:"String | Number",
          default:"auto"
        },{
          attribute: 'autoplay',
          describe:'是否自动切换',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'autoplay-speed',
          describe:'自动切换的时间间隔，单位为毫秒',
          type:"Number",
          default:"2000"
        },{
          attribute: 'dots',
          describe:'指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）',
          type:"String",
          default:"inside"
        },{
          attribute: 'trigger',
          describe:'指示器的触发方式，可选值为 click（点击），hover（悬停）',
          type:"String",
          default:"click"
        },{
          attribute: 'arrow',
          describe:'切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）',
          type:"String",
          default:"hover"
        },{
          attribute: 'easing',
          describe:'动画效果',
          type:"String",
          default:"ease"
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
          eventsName: 'on-change',
          describe:'幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引',
          return:"oldValue,value"
        }],
        "subTitle": '基础用法',
        "carouselCode": `
          &lt;template>
             &lt;Carousel v-model="value1">
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">1&lt;/div>
                 &lt;/Carousel-item>
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">2&lt;/div>
                 &lt;/Carousel-item>
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">3&lt;/div>
                 &lt;/Carousel-item>
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">4&lt;/div>
                 &lt;/Carousel-item>
             &lt;/Carousel>
          &lt;/template>
          &lt;script>
              export default {
                  data(){
                    return {
                      value1: 0
                    }
                  }
              }
          &lt;/script>
        `,
        "subTitle2": '自动切换',
        "carouselCode2": `
          &lt;template>
             &lt;Carousel autoplay  v-model="value2">
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">1&lt;/div>
                 &lt;/Carousel-item>
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">2&lt;/div>
                 &lt;/Carousel-item>
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">3&lt;/div>
                 &lt;/Carousel-item>
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">4&lt;/div>
                 &lt;/Carousel-item>
             &lt;/Carousel>
          &lt;/template>
          &lt;script>
              export default {
                  data(){
                    return {
                      value2: 0
                    }
                  }
              }
          &lt;/script>
        `,
        "subTitle3": '综合设置',
        "carouselCode3": `
          &lt;template>
             &lt;Form :model="setting" :label-width="100">
                 &lt;Form-item label="自动切换">
                     &lt;i-switch v-model="setting.autoplay">
                         &lt;span slot="open">开&lt;/span>
                         &lt;span slot="close">关&lt;/span>
                     &lt;/i-switch>
                 &lt;/Form-item>
                 &lt;Form-item label="自动切换速度">
                     &lt;Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100">&lt;/Slider>
                 &lt;/Form-item>
                 &lt;Form-item label="指示器位置">
                     &lt;Radio-group v-model="setting.dots" type="button">
                         &lt;Radio label="inside">内部&lt;/Radio>
                         &lt;Radio label="outside">外部&lt;/Radio>
                         &lt;Radio label="none">不显示&lt;/Radio>
                     &lt;/Radio-group>
                 &lt;/Form-item>
                 &lt;Form-item label="切换箭头">
                     &lt;Radio-group v-model="setting.arrow" type="button">
                         &lt;Radio label="hover">悬停时显示&lt;/Radio>
                         &lt;Radio label="always">一直显示&lt;/Radio>
                         &lt;Radio label="never">不显示&lt;/Radio>
                     &lt;/Radio-group>
                 &lt;/Form-item>
                 &lt;Form-item label="指示器触发方式">
                     &lt;Radio-group v-model="setting.trigger" type="button">
                         &lt;Radio label="click">点击&lt;/Radio>
                         &lt;Radio label="hover">悬停&lt;/Radio>
                     &lt;/Radio-group>
                 &lt;/Form-item>
             &lt;/Form>
             &lt;Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :trigger="setting.trigger" :arrow="setting.arrow">
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">1&lt;/div>
                 &lt;/Carousel-item>
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">2&lt;/div>
                 &lt;/Carousel-item>
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">3&lt;/div>
                 &lt;/Carousel-item>
                 &lt;Carousel-item>
                     &lt;div class="demo-carousel">4&lt;/div>
                 &lt;/Carousel-item>
             &lt;/Carousel>
          &lt;/template>
          &lt;script>
              export default {
                  data(){
                    return {
                      value3: 0,
                      setting: {
                          autoplay: false,
                          autoplaySpeed: 2000,
                          dots: 'inside',
                          trigger: 'click',
                          arrow: 'hover'
                      }
                    }
                  }
              }
          &lt;/script>
        `
      }
    }
  }
</script>
<style scoped>
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

  .demo .example{
    height:250px;
  }

  .demo .example2{
    height:500px;
  }

  .demo-carousel{
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #506b9e;
  }

</style>
