<template>
  <article class="doc-dropdown-container">
    <h1>Dropdown 下拉菜单</h1>
    <h2>概述</h2>
    <p>
      展示一组折叠的下拉菜单。
    </p>
    <h2>代码示例</h2>
    <section class="demo">
      <demoTab :code="dropdownCode" :describeTitle="subTitle1">
        <div slot="sample">
          <Dropdown>
            <a href="javascript:void(0)">
              下拉菜单
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>驴打滚</Dropdown-item>
              <Dropdown-item disabled>豆汁儿</Dropdown-item>
              <Dropdown-item>冰糖葫芦</Dropdown-item>
              <Dropdown-item divided>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
          <Dropdown style="margin-left: 20px" trigger="click"  v-clickoutside="changeDown" @on-click="changeDown">
            <Button @click="changeDownOrUp">
              批量操作
              <Icon ref="icon" :type="icon"></Icon>
            </Button>
            <Dropdown-menu slot="list" >
              <Dropdown-item>批量修改</Dropdown-item>
              <Dropdown-item>批量删除</Dropdown-item>
              <Dropdown-item>批量导出</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div slot="describe-content">
          需要配合<code>Dropdown-menu</code> 和<code> Dropdown-item</code> 两个组件来使用，并且给列表设置具名 slot 为 <code>list</code>。
          触发对象可以是链接、按钮等各种元素。
          本例还展示了禁用项和分隔线。
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="dropdownCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Dropdown>
            <a href="javascript:void(0)">
              hover 触发
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>驴打滚</Dropdown-item>
              <Dropdown-item>炸酱面</Dropdown-item>
              <Dropdown-item>冰糖葫芦</Dropdown-item>
              <Dropdown-item>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
          <Dropdown trigger="click" style="margin-left: 20px">
            <a href="javascript:void(0)">
              click 触发
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>驴打滚</Dropdown-item>
              <Dropdown-item>炸酱面</Dropdown-item>
              <Dropdown-item>冰糖葫芦</Dropdown-item>
              <Dropdown-item>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
          <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
            <a href="javascript:void(0)" @click="handleOpen">
              custom 触发
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <p>常用于各种自定义下拉内容的场景。</p>
              <div style="text-align: right;margin:10px;">
                <Button type="primary" @click="handleClose">关闭</Button>
              </div>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>trigger</code> 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义)。<br/>
          触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="dropdownCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Dropdown placement="bottom-start">
            <a href="javascript:void(0)">
              菜单(左)
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>驴打滚</Dropdown-item>
              <Dropdown-item>炸酱面</Dropdown-item>
              <Dropdown-item>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
          <Dropdown style="margin-left: 20px">
            <a href="javascript:void(0)">
              菜单(居中)
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>驴打滚</Dropdown-item>
              <Dropdown-item>炸酱面</Dropdown-item>
              <Dropdown-item>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
          <Dropdown style="margin-left: 20px" placement="bottom-end">
            <a href="javascript:void(0)">
              菜单(右)
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>驴打滚</Dropdown-item>
              <Dropdown-item>炸酱面</Dropdown-item>
              <Dropdown-item>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>placement</code> 可以更改下拉菜单出现的方向，与 <code>Poptip</code> 和 <code>Tooltip</code> 配置一致，支持 12 个方向，详见 API。
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="dropdownCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Dropdown>
            <a href="javascript:void(0)">
              北京小吃
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>驴打滚</Dropdown-item>
              <Dropdown placement="right-start">
                <Dropdown-item>
                  北京烤鸭
                  <Icon type="ios-arrow-right"></Icon>
                </Dropdown-item>
                <Dropdown-menu slot="list">
                  <Dropdown-item>挂炉烤鸭</Dropdown-item>
                  <Dropdown-item>焖炉烤鸭</Dropdown-item>
                </Dropdown-menu>
              </Dropdown>
              <Dropdown-item>冰糖葫芦</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div slot="describe-content">
          下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。
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
    data(){
      return {
        icon:"ios-arrow-down",
        visible: false,
        "subTitle1": "基本用法",
        "dropdownCode": `
        &lt;template>
           &lt;Dropdown>
             &lt;a href="javascript:void(0)">
                 下拉菜单
                 &lt;Icon type="arrow-down-b">&lt;/Icon>
             &lt;/a>
             &lt;Dropdown-menu slot="list">
                 &lt;Dropdown-item>驴打滚&lt;/Dropdown-item>
                 &lt;Dropdown-item disabled>豆汁儿&lt;/Dropdown-item>
                 &lt;Dropdown-item>冰糖葫芦&lt;/Dropdown-item>
                 &lt;Dropdown-item divided>北京烤鸭&lt;/Dropdown-item>
             &lt;/Dropdown-menu>
           &lt;/Dropdown>
           &lt;Dropdown style="margin-left: 20px" trigger="click"  v-clickoutside="changeDown" @on-click="changeDown">
             &lt;Button @click="changeDownOrUp">
                 批量操作
                 &lt;Icon ref="icon" :type="icon">&lt;/Icon>
             &lt;/Button>
             &lt;Dropdown-menu slot="list">
                 &lt;Dropdown-item>批量修改&lt;/Dropdown-item>
                 &lt;Dropdown-item>批量删除&lt;/Dropdown-item>
                 &lt;Dropdown-item>批量导出&lt;/Dropdown-item>
             &lt;/Dropdown-menu>
           &lt;/Dropdown>
        &lt;/template>
        &lt;script>
            export default {
              data () {
                return {
                    icon:"ios-arrow-down"
                }
              },
              methods: {
                  changeDownOrUp(){
                    const icon = this.$refs.icon.$props.type;
                    if(icon=="ios-arrow-up"){
                      this.icon='ios-arrow-down';
                    }else {
                      this.icon='ios-arrow-up';
                    }
                  },
                  changeDown(){
                    this.icon='ios-arrow-down';
                  }
              }
            }
        &lt;/script>
        `,
        "subTitle2": "触发方式",
        "dropdownCode2": `
        &lt;template>
           &lt;Dropdown>
             &lt;a href="javascript:void(0)">
                 hover 触发
                 &lt;Icon type="arrow-down-b">&lt;/Icon>
             &lt;/a>
             &lt;Dropdown-menu slot="list">
                 &lt;Dropdown-item>驴打滚&lt;/Dropdown-item>
                 &lt;Dropdown-item>炸酱面&lt;/Dropdown-item>
                 &lt;Dropdown-item>冰糖葫芦&lt;/Dropdown-item>
                 &lt;Dropdown-item>北京烤鸭&lt;/Dropdown-item>
             &lt;/Dropdown-menu>
           &lt;/Dropdown>
           &lt;Dropdown style="margin-left: 20px" trigger="click">
             &lt;a href="javascript:void(0)">
                 click 触发
                 &lt;Icon type="arrow-down-b">&lt;/Icon>
             &lt;/a>
             &lt;Dropdown-menu slot="list">
                 &lt;Dropdown-item>驴打滚&lt;/Dropdown-item>
                 &lt;Dropdown-item>炸酱面&lt;/Dropdown-item>
                 &lt;Dropdown-item>冰糖葫芦&lt;/Dropdown-item>
                 &lt;Dropdown-item>北京烤鸭&lt;/Dropdown-item>
             &lt;/Dropdown-menu>
           &lt;/Dropdown>
           &lt;Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
             &lt;a href="javascript:void(0)" @click="handleOpen">
                 custom 触发
                 &lt;Icon type="arrow-down-b">&lt;/Icon>
             &lt;/a>
             &lt;Dropdown-menu slot="list">
                 &lt;p>常用于各种自定义下拉内容的场景。&lt;/p>
                 &lt;div style="text-align: right;margin:10px;">
                     &lt;Button type="primary" @click="handleClose">关闭&lt;/Button>
                 &lt;/div>
             &lt;/Dropdown-menu>
           &lt;/Dropdown>
        &lt;/template>
        &lt;script>
            export default {
              data () {
                return {
                    visible: false
                }
              },
              methods: {
                  handleOpen () {
                    this.visible = true;
                  },
                  handleClose () {
                      this.visible = false;
                  }
              }
            }
        &lt;/script>
        `,
        "subTitle3": "对齐方向 ",
        "dropdownCode3": `
        &lt;template>
           &lt;Dropdown placement="bottom-start">
             &lt;a href="javascript:void(0)">
                 菜单(左)
                 &lt;Icon type="arrow-down-b">&lt;/Icon>
             &lt;/a>
             &lt;Dropdown-menu slot="list">
                 &lt;Dropdown-item>驴打滚&lt;/Dropdown-item>
                 &lt;Dropdown-item>炸酱面&lt;/Dropdown-item>
                 &lt;Dropdown-item>北京烤鸭&lt;/Dropdown-item>
             &lt;/Dropdown-menu>
           &lt;/Dropdown>
           &lt;Dropdown style="margin-left: 20px">
             &lt;a href="javascript:void(0)">
                 菜单(居中)
                 &lt;Icon type="arrow-down-b">&lt;/Icon>
             &lt;/a>
             &lt;Dropdown-menu slot="list">
                 &lt;Dropdown-item>驴打滚&lt;/Dropdown-item>
                 &lt;Dropdown-item>炸酱面&lt;/Dropdown-item>
                 &lt;Dropdown-item>北京烤鸭&lt;/Dropdown-item>
             &lt;/Dropdown-menu>
           &lt;/Dropdown>
           &lt;Dropdown placement="bottom-end" style="margin-left: 20px">
             &lt;a href="javascript:void(0)">
                 菜单(右)
                 &lt;Icon type="arrow-down-b">&lt;/Icon>
             &lt;/a>
             &lt;Dropdown-menu slot="list">
                 &lt;Dropdown-item>驴打滚&lt;/Dropdown-item>
                 &lt;Dropdown-item>炸酱面&lt;/Dropdown-item>
                 &lt;Dropdown-item>北京烤鸭&lt;/Dropdown-item>
             &lt;/Dropdown-menu>
           &lt;/Dropdown>
        &lt;/template>
        &lt;script>
            export default {
            }
        &lt;/script>
        `,
        "subTitle4": "嵌套用法",
        "dropdownCode4": `
        &lt;template>
           &lt;Dropdown>
             &lt;a href="javascript:void(0)">
                 北京小吃
                 &lt;Icon type="arrow-down-b">&lt;/Icon>
             &lt;/a>
             &lt;Dropdown-menu slot="list">
                 &lt;Dropdown-item>驴打滚&lt;/Dropdown-item>
                 &lt;Dropdown placement="right-start">
                     &lt;Dropdown-item>
                         北京烤鸭
                         &lt;Icon type="arrow-down-b">&lt;/Icon>
                     &lt;/Dropdown-item>
                     &lt;Dropdown-menu slot="list">
                         &lt;Dropdown-item>挂炉烤鸭&lt;/Dropdown-item>
                         &lt;Dropdown-item>焖炉烤鸭&lt;/Dropdown-item>
                     &lt;/Dropdown-menu>
                 &lt;/Dropdown>
                 &lt;Dropdown-item>冰糖葫芦&lt;/Dropdown-item>
             &lt;/Dropdown-menu>
           &lt;/Dropdown>
        &lt;/template>
        &lt;script>
            export default {
            }
        &lt;/script>
        `
      };
    },
    methods:{
      changeDownOrUp(){
        const icon = this.$refs.icon.$props.type;
        if(icon=="ios-arrow-up"){
          this.icon='ios-arrow-down';
        }else {
          this.icon='ios-arrow-up';
        }
      },
      changeDown(){
        this.icon='ios-arrow-down';
      },
      handleOpen () {
        this.visible = true;
      },
      handleClose () {
        this.visible = false;
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
