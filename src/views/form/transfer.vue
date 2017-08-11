<template>
  <article class="doc-alert-container">
    <h1>Transfer 穿梭框</h1>
    <h2 >概述</h2>
    <p>双栏穿梭选择框，常用于将多个项目从一边移动到另一边。</p>
    <h2>说明</h2>
    <p>Transfer 组件主要基于以下四个 API 来使用：</p>
    <ul style="list-style-type: disc; padding-left: 30px">
      <li><code>data</code>：总体数据，数组，每项为一个对象，且必须含有 key 值，组件基于此做索引。</li>
      <li><code>target-keys</code>：目标列索引集合，数组，每项为数据的 key 值，Transfer 会将含有这些 key 值的数据筛选到右边。</li>
      <li><code>render-format</code>：每行数据显示的格式函数，默认优先显示 label 值，没有时显示 key 值，可以自己组合出需要的数据格式。</li>
      <li><code>@on-change</code>：当点击转移按钮时，组件本身并不会转移数据，而是触发事件，由用户来操作数据。</li>
    </ul>
    <h2>示例：</h2>
    <div>
      <pre data-v-3802a467="" class="bg"><code data-v-3802a467="" class="javascript hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
        <span class="hljs-keyword">return</span> {
            data: [
                { <span class="hljs-string">"key"</span>: <span class="hljs-string">"1"</span>, <span class="hljs-string">"label"</span>: <span class="hljs-string">"内容1"</span>, <span class="hljs-string">"disabled"</span>: <span class="hljs-literal">false</span> },
                { <span class="hljs-string">"key"</span>: <span class="hljs-string">"2"</span>, <span class="hljs-string">"label"</span>: <span class="hljs-string">"内容2"</span>, <span class="hljs-string">"disabled"</span>: <span class="hljs-literal">true</span> },
                { <span class="hljs-string">"key"</span>: <span class="hljs-string">"3"</span>, <span class="hljs-string">"label"</span>: <span class="hljs-string">"内容3"</span>, <span class="hljs-string">"disabled"</span>: <span class="hljs-literal">false</span> }
            ],
            targetKeys: [<span class="hljs-string">"1"</span>,<span class="hljs-string">"2"</span>]
        }
    },
    methods: {
        render (item) {
            <span class="hljs-keyword">return</span> item.key + <span class="hljs-string">':'</span> + item.label;
        },
        onChange (newTargetKeys) {
            <span class="hljs-keyword">this</span>.targetKeys = newTargetKeys;
        }
    }
}
</code></pre>
    </div>
    <h2>代码示例</h2>
    <section class="demo" id="transfer">
      <demoTab :code="code" :describeTitle="title">
        <div slot="sample">
          <Transfer
            :data="data1"
            :target-keys="targetKeys1"
            :render-format="render1"
            @on-change="handleChange1">
          </Transfer>
        </div>
        <div slot="describe-content">
          基本用法，展示了 <code>data</code>、<code>target-keys</code>、
          每行的渲染函数 <code>render-format</code> 以及回调函数 <code>on-change</code> 的用法。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="transfer2">
      <demoTab :code="code2" :describeTitle="title2">
        <div slot="sample">
          <Transfer
            :data="data2"
            :target-keys="targetKeys2"
            filterable
            :filter-method="filterMethod"
            @on-change="handleChange2">
          </Transfer>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>filterable</code> 可以进行搜索，可以自定义搜索函数。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="transfer3">
      <demoTab :code="code3" :describeTitle="title3">
        <div slot="sample">
          <Transfer
            :data="data3"
            :target-keys="targetKeys3"
            :list-style="listStyle"
            :render-format="render3"
            :operations="['向左移动','向右移动']"
            filterable
            @on-change="handleChange3">
            <div :style="{float: 'right', margin: '5px'}">
              <i-button type="ghost" size="small" @click="reloadMockData">刷新</i-button>
            </div>
          </Transfer>
        </div>
        <div slot="describe-content">
          穿梭框高级用法，可以自定义两列的宽高、操作文案，以及底部自定义操作，更多配置见 API。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="transfer4">
      <demoTab :code="code4" :describeTitle="title4">
        <div slot="sample">
          <Transfer
            :data="data4"
            :target-keys="targetKeys4"
            :render-format="render4"
            @on-change="handleChange4">
          </Transfer>
        </div>
        <div slot="describe-content">
          可以通过 <code>render-format</code> 来渲染复杂的数据。
        </div>
      </demoTab>
    </section>

    <h2>API</h2>
    <h3>Transfer props</h3>
    <section class="demo" id="api">
      <Table border :columns="propsColumns" :data="apiData"></Table>
    </section>

    <h3>Transfer events</h3>
    <section class="demo">
      <Table border :columns="propsColumns2" :data="apiData2"></Table>
    </section>

    <h3>Transfer slot </h3>
    <section class="demo">
      <Table border :columns="propsColumns3" :data="apiData3"></Table>
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
        apiData3:[
          {
              name:'无',
            describe:'自定义底部内容'
          }
        ],
        propsColumns3:[
          {
              title:'名称',
            key:'name'
          },{
            title:'说明',
            key:'describe'
          }
        ],
        apiData2:[
          {
            name:'on-change',
            describe:'选项在两栏之间转移时的回调函数',
            returnValue:'	targetKeys, direction, moveKeys'
          }
        ],
        propsColumns2:[
          {
            title: '事件名',
            key: 'name',
          },
          {
            title: '说明',
            key: 'describe',
          },{
            title: '返回值',
            key: 'returnValue',
          }
        ],
        apiData:[
          {
            attribute:'data',
            describe:'数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。',
            type:'Array',
            default:'[ ]'
          },
          {
            attribute:'targetKeys',
            describe:'显示在右侧框数据的key集合',
            type:'Array',
            default:'[ ]'
          },
          {
            attribute:'render-format',
            describe:'每行数据渲染函数，该函数的入参为 data 中的项',
            type:'Function',
            default:'默认显示label，没有时显示key'
          },
          {
            attribute:'selected-keys',
            describe:'设置哪些项应该被选中',
            type:'Array',
            default:'[ ]'
          },
          {
            attribute:'list-style',
            describe:'两个穿梭框的自定义样式',
            type:'Object',
            default:'{ }'
          },
          {
            attribute:'titles',
            describe:'标题集合，顺序从左至右',
            type:'Array',
            default:"['源列表', '目的列表']"
          },
          {
            attribute:'operations',
            describe:'操作文案集合，顺序从上至下',
            type:'Array',
            default:"[ ]"
          },
          {
            attribute:'filterable',
            describe:'是否显示搜索框',
            type:'Boolean',
            default:"false"
          },
          {
            attribute:'filter-placeholder',
            describe:'搜索框的占位',
            type:'String',
            default:"	请输入搜索内容"
          },
          {
            attribute:'filter-method',
            describe:'自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词',
            type:'Function',
            default:"	默认搜索label"
          },
          {
            attribute:'not-found-text',
            describe:'当列表为空时显示的内容',
            type:'String',
            default:"	列表为空"
          }],
        propsColumns:[{
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
        "code4":`
       &lt;Transfer
            :data="data4"
            :target-keys="targetKeys4"
            :render-format="render4"
            @on-change="handleChange4">
          &lt;/Transfer>
`,
        title4:'自定义渲染行数据',
        data3: this.getMockData(),
        targetKeys3: this.getTargetKeys(),
        listStyle: {
          width: '250px',
          height: '300px'
        },
        data4: this.getMockData(),
        targetKeys4: this.getTargetKeys(),
        "code3":`
        &lt;Transfer
            :data="data3"
            :target-keys="targetKeys3"
            :list-style="listStyle"
            :render-format="render3"
            :operations="['向左移动','向右移动']"
            filterable
            @on-change="handleChange3">
            &lt;div :style="{float: 'right', margin: '5px'}">
              &lt;i-button type="ghost" size="small" @click="reloadMockData">刷新&lt;/i-button>
            &lt;/div>
          &lt;/Transfer>
`,
        title3:'高级用法',
        data2: this.getMockData(),
        targetKeys2: this.getTargetKeys(),
        "code2":`
        &lt;Transfer
            :data="data2"
            :target-keys="targetKeys2"
            filterable
            :filter-method="filterMethod"
            @on-change="handleChange2">
          &lt;/Transfer>
`,
        title2:'带搜索的穿梭框',
        title:'基础用法',
        "code":`&lt;template>
  &lt;Transfer
    :data="data1"
    :target-keys="targetKeys1"
    :render-format="render1"
    @on-change="handleChange1">
  &lt;/Transfer>
&lt;/template>`,
        data1: this.getMockData(),
        targetKeys1: this.getTargetKeys()
      }
    },
    methods: {
      getMockData () {
        let mockData = [];
        for (let i = 1; i <= 20; i++) {
          mockData.push({
            key: i.toString(),
            label: '内容' + i,
            description: '内容' + i + '的描述信息',
            disabled: Math.random() * 3 < 1
          });
        }
        return mockData;
      },
      getTargetKeys () {
        return this.getMockData()
          .filter(() => Math.random() * 2 > 1)
          .map(item => item.key);
      },
      render1 (item) {
        return item.label;
      },
      handleChange1 (newTargetKeys, direction, moveKeys) {
        console.log(newTargetKeys);
        console.log(direction);
        console.log(moveKeys);
        this.targetKeys1 = newTargetKeys;
      },
      handleChange2 (newTargetKeys) {
        this.targetKeys2 = newTargetKeys;
      },
      filterMethod (data, query) {
        return data.label.indexOf(query) > -1;
      },
      handleChange4 (newTargetKeys) {
        this.targetKeys4 = newTargetKeys;
      },
      render4 (item) {
        return item.label + ' - ' + item.description;
      },
      handleChange3 (newTargetKeys) {
        this.targetKeys3 = newTargetKeys;
      },
      render3 (item) {
        return item.label + ' - ' + item.description;
      },
      reloadMockData () {
        this.data3 = this.getMockData();
        this.targetKeys3 = this.getTargetKeys();
      }
    }
  }
</script>
<style lang="less" scoped>
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
  .ivu-input-icon-normal + .ivu-input {
    width: 160px;
    padding-right: 32px;
  }
</style>
