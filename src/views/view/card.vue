<template>
  <article class="doc-card-container">
    <h1>Card 卡片</h1>
    <h2>概述</h2>
    <p>
      基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
    </p>
    <h2>代码示例</h2>
    <section class="demo" id="card1">
      <demoTab :code="cardCode" :describeTitle="subTitle1">
        <div slot="sample">
          <Card style="width:350px">
            <p slot="title">
              <Icon type="ios-film-outline"></Icon>
              经典电影
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
              <Icon type="ios-loop-strong"></Icon>
              换一换
            </a>
            <ul>
              <li v-for="item in randomMovieList">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
              </li>
            </ul>
          </Card>
        </div>
        <div slot="describe-content">
          自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="card2">
      <demoTab :code="cardCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
              <p slot="title">无边框标题</p>
              <p>无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充。</p>
            </Card>
          </div>
        </div>
        <div slot="describe-content">
          通过设置属性<Tag color="grey">bordered</Tag>为 false ，可以不添加边框，建议在灰色背景下使用。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="card3">
      <demoTab :code="cardCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Row>
            <Col span="11">
              <Card>
                <p slot="title">标准卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
              </Card>
            </Col>
            <Col span="11" offset="2">
              <Card dis-hover>
                <p slot="title">禁用悬停阴影的卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
              </Card>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          通过设置属性<Tag color="grey">dis-hover</Tag>来禁用鼠标悬停显示阴影的效果。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="card4">
      <demoTab :code="cardCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Row style="background:#eee;padding:20px">
            <Col span="11">
            <Card :bordered="false">
              <p slot="title">无边框卡片</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
            </Card>
            </Col>
            <Col span="11" offset="2">
            <Card shadow>
              <p slot="title">使用阴影效果的卡片</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
            </Card>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          通过设置属性<Tag color="grey">shadow</Tag>来显示卡片阴影，使用该属性后，<Tag color="grey">bordered</Tag>和<Tag color="grey">dis-hover</Tag>将无效，建议在灰色背景下使用。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="card5">
      <demoTab :code="cardCode5" :describeTitle="subTitle5">
        <div slot="sample">
          <Card style="width:320px">
            <div style="text-align:center">
              <img src="../../assets/ue.png">
              <h3>一套基于 Vue.js 的高质量UI组件库</h3>
            </div>
          </Card>
        </div>
        <div slot="describe-content">
          只包含内容区域，没有标题。
        </div>
      </demoTab>
    </section>

    <h2 id="card6">API</h2>
    <h3>Card  props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Card  slot</h3>
    <section class="demo">
      <Table border :columns="slotColumns" :data="slotData"></Table>
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
        movieList: [
          {
            name: '肖申克的救赎',
            url: 'https://movie.douban.com/subject/1292052/',
            rate: 9.6
          },
          {
            name: '这个杀手不太冷',
            url: 'https://movie.douban.com/subject/1295644/',
            rate: 9.4
          },
          {
            name: '霸王别姬',
            url: 'https://movie.douban.com/subject/1291546/',
            rate: 9.5
          },
          {
            name: '阿甘正传',
            url: 'https://movie.douban.com/subject/1292720/',
            rate: 9.4
          },
          {
            name: '美丽人生',
            url: 'https://movie.douban.com/subject/1292063/',
            rate: 9.5
          },
          {
            name: '千与千寻',
            url: 'https://movie.douban.com/subject/1291561/',
            rate: 9.2
          },
          {
            name: '辛德勒的名单',
            url: 'https://movie.douban.com/subject/1295124/',
            rate: 9.4
          },
          {
            name: '海上钢琴师',
            url: 'https://movie.douban.com/subject/1292001/',
            rate: 9.2
          },
          {
            name: '机器人总动员',
            url: 'https://movie.douban.com/subject/2131459/',
            rate: 9.3
          },
          {
            name: '盗梦空间',
            url: 'https://movie.douban.com/subject/3541415/',
            rate: 9.2
          }
        ],
        randomMovieList: [],
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
          attribute: 'bordered',
          describe:'是否显示边框，建议在灰色背景下使用',
          type:"Boolean",
          default:"true"
        },{
          attribute: 'dis-hover',
          describe:'禁用鼠标悬停显示阴影',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'shadow',
          describe:'卡片阴影，建议在灰色背景下使用',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'padding',
          describe:'卡片内部间距，单位 px',
          type:"Number",
          default:"16"
        }],
        slotColumns:[
          {
            title: '名称',
            key: 'name',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          }],
        slotData:[{
          name: 'title',
          describe:'自定义卡片标题，如果是简单文字，可以使用&lt;p>标签包裹'
        },{
          name: 'extra',
          describe:'额外显示的内容，默认位置在右上角'
        },{
          name: '无',
          describe:'卡片主体内容'
        }],
        "subTitle1": "基本用法",
        "cardCode": `
        &lt;template>
           &lt;Card style="width:350px">
             &lt;p slot="title">
              &lt;Icon type="ios-film-outline">&lt;/Icon>
              经典电影
             &lt;/p>
             &lt;a href="#" slot="extra" @click.prevent="changeLimit">
              &lt;Icon type="ios-loop-strong">&lt;/Icon>
              换一换
             &lt;/a>
             &lt;ul>
              &lt;li v-for="item in randomMovieList">
                &lt;a :href="item.url" target="_blank">{{ item.name }}&lt;/a>
                &lt;span>
                  &lt;Icon type="ios-star" v-for="n in 4" :key="n">&lt;/Icon>
                  &lt;Icon type="ios-star" v-if="item.rate >= 9.5">&lt;/Icon>
                  &lt;Icon type="ios-star-half" v-else>&lt;/Icon>
                  {{ item.rate }}
                &lt;/span>
              &lt;/li>
             &lt;/ul>
           &lt;/Card>
        &lt;/template>
        &lt;script>
            export default {
              data () {
                return {
                    movieList: [
                        {
                            name: '肖申克的救赎',
                            url: 'https://movie.douban.com/subject/1292052/',
                            rate: 9.6
                        },
                        {
                            name: '这个杀手不太冷',
                            url: 'https://movie.douban.com/subject/1295644/',
                            rate: 9.4
                        },
                        {
                            name: '霸王别姬',
                            url: 'https://movie.douban.com/subject/1291546/',
                            rate: 9.5
                        },
                        {
                            name: '阿甘正传',
                            url: 'https://movie.douban.com/subject/1292720/',
                            rate: 9.4
                        },
                        {
                            name: '美丽人生',
                            url: 'https://movie.douban.com/subject/1292063/',
                            rate: 9.5
                        },
                        {
                            name: '千与千寻',
                            url: 'https://movie.douban.com/subject/1291561/',
                            rate: 9.2
                        },
                        {
                            name: '辛德勒的名单',
                            url: 'https://movie.douban.com/subject/1295124/',
                            rate: 9.4
                        },
                        {
                            name: '海上钢琴师',
                            url: 'https://movie.douban.com/subject/1292001/',
                            rate: 9.2
                        },
                        {
                            name: '机器人总动员',
                            url: 'https://movie.douban.com/subject/2131459/',
                            rate: 9.3
                        },
                        {
                            name: '盗梦空间',
                            url: 'https://movie.douban.com/subject/3541415/',
                            rate: 9.2
                        }
                    ],
                    randomMovieList: []
                  }
              },
              methods: {
                  changeLimit () {
                      function getArrayItems(arr, num) {
                          const temp_array = [];
                          for (let index in arr) {
                              temp_array.push(arr[index]);
                          }
                          const return_array = [];
                          for (let i = 0; i<num; i++) {
                              if (temp_array.length>0) {
                                  const arrIndex = Math.floor(Math.random()*temp_array.length);
                                  return_array[i] = temp_array[arrIndex];
                                  temp_array.splice(arrIndex, 1);
                              } else {
                                  break;
                              }
                          }
                          return return_array;
                      }
                      this.randomMovieList = getArrayItems(this.movieList, 5);
                  }
              },
              mounted () {
                  this.changeLimit();
              }
            }
        &lt;/script>
        `,
        "subTitle2": "无边框",
        "cardCode2": `
        &lt;template>
          &lt;div style="background:#eee;padding: 20px">
           &lt;Card :bordered="false">
            &lt;p slot="title">无边框标题&lt;/p>
            &lt;p>无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充。&lt;/p>
           &lt;/Card>
          &lt;/div>
        &lt;/template>
        &lt;script>
             export default {
             }
          &lt;/script>`,
        "subTitle3": "禁用悬停阴影",
        "cardCode3": `
        &lt;template>
          &lt;Row>
            &lt;Col span="11">
              &lt;Card>
                &lt;p slot="title">标准卡片&lt;/p>
                &lt;p>卡片内容&lt;/p>
                &lt;p>卡片内容&lt;/p>
                &lt;p>卡片内容&lt;/p>
              &lt;/Card>
            &lt;/Col>
            &lt;Col span="11" offset="2">
              &lt;Card dis-hover>
                &lt;p slot="title">禁用悬停阴影的卡片&lt;/p>
                &lt;p>卡片内容&lt;/p>
                &lt;p>卡片内容&lt;/p>
                &lt;p>卡片内容&lt;/p>
              &lt;/Card>
            &lt;/Col>
          &lt;/Row>
        &lt;/template>
        &lt;script>
             export default {
             }
          &lt;/script>`,
        "subTitle4": "卡片阴影",
        "cardCode4": `
        &lt;template>
          &lt;Row style="background:#eee;padding:20px">
            &lt;Col span="11">
              &lt;Card :bordered="false">
                &lt;p slot="title">标准卡片&lt;/p>
                &lt;p>卡片内容&lt;/p>
                &lt;p>卡片内容&lt;/p>
                &lt;p>卡片内容&lt;/p>
              &lt;/Card>
            &lt;/Col>
            &lt;Col span="11" offset="2">
              &lt;Card shadow>
                &lt;p slot="title">禁用悬停阴影的卡片&lt;/p>
                &lt;p>卡片内容&lt;/p>
                &lt;p>卡片内容&lt;/p>
                &lt;p>卡片内容&lt;/p>
              &lt;/Card>
            &lt;/Col>
          &lt;/Row>
        &lt;/template>
        &lt;script>
             export default {
             }
          &lt;/script>`,
        "subTitle5": "简洁卡片",
        "cardCode5": `
        &lt;template>
          &lt;Card style="width:320px">
            &lt;div style="text-align:center">
              &lt;img src="../../assets/ue.png">
              &lt;h3>一套基于 Vue.js 的高质量UI组件库&lt;/h3>
            &lt;/div>
          &lt;/Card>
        &lt;/template>
        &lt;script>
             export default {
             }
          &lt;/script>`

      }
    },
    methods: {
      changeLimit () {
        function getArrayItems(arr, num) {
          const temp_array = [];
          for (let index in arr) {
            temp_array.push(arr[index]);
          }
          const return_array = [];
          for (let i = 0; i<num; i++) {
            if (temp_array.length>0) {
              const arrIndex = Math.floor(Math.random()*temp_array.length);
              return_array[i] = temp_array[arrIndex];
              temp_array.splice(arrIndex, 1);
            } else {
              break;
            }
          }
          return return_array;
        }
        this.randomMovieList = getArrayItems(this.movieList, 5);
      }
    },
    mounted () {
      this.changeLimit();
    }
  }
</script>
<style lang="less">
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
  .doc-card-container {
    a[target=_blank]:after {
      content:"\F220";
      font-family:Ionicons;
      color:#aaa;
      margin-left:3px
    }
    img {
      height:85px;
    }
    p {
      margin:0;
    }
    ul {
      padding:0!important;
      li {
        list-style:none;
        span {
          float:right;
          color:#ffac2d;
          i:last-child {
            margin-right:5px;
          }
        }
      }
    }
  }

</style>
