<template>
  <article class="doc-tree-container">
    <h1>Tree 树形控件</h1>
    <h2>概述</h2>
    <p>
     文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。
     使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="basic">
      <demoTab :code="basicTree" :describeTitle="subTitle">
        <div slot="sample">
           <Tree :data="baseData"></Tree>
        </div>
        <div slot="describe-content">
           最简单的用法，展示可选中，禁用，默认展开等功能。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="checkbox">
      <demoTab :code="checkboxTree" :describeTitle="subTitlecheckbox">
        <div slot="sample">
           <Tree :data="baseData" show-checkbox></Tree>
        </div>
        <div slot="describe-content">
           展示可勾选<br/>
           当显示勾线框时，勾选之后该项自动被选中，选中项目之后该项目自动被勾选。<br/>

        </div>
      </demoTab>
    </section>

    <section class="demo" id="multiple">
      <demoTab :code="multipleTree" :describeTitle="subTitlemultiple">
        <div slot="sample">
           <Tree :data="baseData" show-checkbox multiple></Tree>
        </div>
        <div slot="describe-content">
           展示可多选。多选情况下，默认父节点被选中子节点自动全选。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="childrenChecked">
      <demoTab :code="childrenCheckedTree" :describeTitle="subTitlechildrenChecked">
        <div slot="sample">
           <Tree :data="childrenCheckedData" show-checkbox multiple :widthCheckAll="false"></Tree>
        </div>
        <div slot="describe-content">
           多选状态下设置父节点选中时子节点是否被选中，默认为true，即父节点被选中时子节点默认被选中，为false时父节点选中子节点也不会被选中。
        </div>
      </demoTab>
    </section>


    <section class="demo" id="icon">
      <demoTab :code="iconTree" :describeTitle="subTitleicon">
        <div slot="sample">
           <Tree :data="iconData" show-checkbox multiple></Tree>
        </div>
        <div slot="describe-content">
           可展示图标,图标如果使用utvue中的图标，则icon的值与ICON组件的type的值相同，如果是自定义图标，则icon的值为图标的url。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="searchable">
      <demoTab :code="searchableTree" :describeTitle="subTitlesearchable">
        <div slot="sample">
           <Tree :data="baseData" show-checkbox multiple searchable></Tree>
        </div>
        <div slot="describe-content">
           显示搜索框，且可搜索
        </div>
      </demoTab>
    </section>

    <section class="demo" id="draggable">
      <demoTab :code="draggableTree" :describeTitle="subTitledraggable">
        <div slot="sample">
           <Tree :data="baseData" show-checkbox multiple draggable></Tree>
        </div>
        <div slot="describe-content">
           可拖拽。拖动源节点到目标元素上面，则源节点作为目标节点的子节点。
           拖动源节点到目标节点上方，则源节点插入到目标节点之前，
           拖动源节点到目标节点下面，则源节点插入到目标节点之后。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="map">
      <demoTab :code="mapTree" :describeTitle="subTitlemap">
        <div slot="sample">
           <Tree :data="mapData" :fields="fields"></Tree>
        </div>
        <div slot="describe-content">
           通过配置field设置字段映射。fields是一个对象数组，每个对象代表一个映射，每个对象有两个属性，field和map，field值为被映射的字段，
           map的值是目标字段名称。如[{field: "name", map: "title"}],则将数据中的name字段映射为tree中的title字段。
        </div>
      </demoTab>
    </section>

    <h2 id="api">API</h2>

    <h3>Tree props</h3>
    <section class="demo">
     <Table border :columns="propscolumns" :data="propsdata"></Table>
    </section>

    <h3>Tree events</h3>
    <section class="demo">
     <Table border :columns="eventcolumns" :data="eventdata"></Table>
    </section>

    <h3>Tree methods</h3>
    <section class="demo">
     <Table border :columns="methodscolumns" :data="methodsdata"></Table>
    </section>

    <h3>children</h3>
    <section class="demo">
     <Table border :columns="propscolumns" :data="childrendata"></Table>
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
      "subTitlecheckbox": "显示checkbox",
      "subTitlemultiple": "多选",
      "subTitleicon": "图标",
      "subTitlecloseable": "可关闭",
      "subTitlesearchable": "可搜索",
      "subTitledraggable":"可拖拽",
      "subTitlemap":"字段映射",
      "subTitlechildrenChecked":"父子节点同步状态设置",
      "fields": [
          {field: "name", map: "title"},  
          {field: "child", map: "children"}
      ],
      "baseData": [{
          expand: true,
          title: 'parent 1',
          children: [{
              title: 'parent 1-0',
              expand: true,
              disabled: true,
              children: [{
                  title: 'leaf',
              }, {
                  title: 'leaf',
                  checked: true
              }]
          }, {
              title: 'parent 1-1',
              expand: true,
              children: [{
                  title: 'leaf',
              }]
          }]
      }],
      "childrenCheckedData": [{
          expand: true,
          title: 'parent 1',
          children: [{
              title: 'parent 1-0',
              expand: true,
              disabled: true,
              children: [{
                  title: 'leaf',
              }, {
                  title: 'leaf',
                  checked: true
              }]
          }, {
              title: 'parent 1-1',
              expand: true,
              children: [{
                  title: 'leaf',
              }]
          }]
      }],
      iconData: [{
          expand: true,
          title: 'parent 1',
          icon: "android-document",
          children: [{
              title: 'parent 1-0',
              expand: true,
              disabled: true,
              icon: "android-document",
              children: [{
                  title: 'leaf',
                  disableCheckbox: true,
                  icon: "android-document"
              }, {
                  title: 'leaf',
                  icon: "android-document"
              }]
          }, {
              title: 'parent 1-1',
              expand: true,
              checked: true,
              icon: "android-document",
              children: [{
                  title: 'leaf',
                  icon: "android-document"
              }]
          }]
      }],
      mapData: [{
          expand: true,
          name: 'parent 1',
          icon: "android-document",
          child: [{
              name: 'parent 1-0',
              expand: true,
              disabled: true,
              icon: "android-document",
              child: [{
                  name: 'leaf',
                  disableCheckbox: true,
                  icon: "android-document"
              }, {
                  name: 'leaf',
                  icon: "android-document"
              }]
          }, {
              name: 'parent 1-1',
              expand: true,
              checked: true,
              icon: "android-document",
              child: [{
                  name: 'leaf',
                  icon: "android-document"
              }]
          }]
      }],
      "propscolumns":[
        {
            'title': '属性',
            'key': 'attribute',
        },
        {
            'title': '说明',
            'key': 'describe'
        },
        {
            'title': '类型',
            'key': 'type',
        },
        {
            'title': '默认值',
            'key': 'default'
        }
      ],
      "propsdata":[
        {
          'attribute': 'data',
          'describe':'可嵌套的节点属性的数组，生成 tree 的数据',
          'type':"Array",
          'default':"[]"
        },
        {
          'attribute': 'multiple',
          'describe':'是否支持多选',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'widthCheckAll',
          'describe':'选中父节点子节点是否被选中',
          'type':"Boolean",
          'default':"true"
        },
        {
          'attribute': 'show-checkbox',
          'describe':'是否显示多选框',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'cascade',
          'describe':'checked和selected是否同步',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'searchable',
          'describe':'是否可搜索',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'draggable',
          'describe':'是否可拖拽',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'field',
          'describe':'配置字段映射',
          'type':"Object",
          'default':"-"
        }
      ],
       "eventcolumns":[
        {
            'title': '事件名',
            'key': 'event',
        },
        {
            'title': '说明',
            'key': 'describe'
        },
        {
            'title': '返回值',
            'key': 'return',
        }
      ],
      "eventdata":[
        {
          'event': 'on-select-change',
          'describe':'点击树节点时触发',
          'return':"当前已选中的节点数组"
        },
        {
          'event': 'on-check-change',
          'describe':'点击复选框时触发',
          'return':"当前已勾选节点的数组"
        },
        {
          'event': 'on-toggle-expand',
          'describe':'展开和收起子列表时触发',
          'return':"当前节点的数组"
        },
        {
          'event': 'on-changed',
          'describe':'拖动树中的节点导致树的结构发生变化时触发',
          'return':"当前节点的数组"
        }
      ],
       "methodscolumns":[
        {
            'title': '方法名称',
            'key': 'name',
        },
        {
            'title': '说明',
            'key': 'describe'
        },
        {
            'title': '参数',
            'key':'return'
        }
      ],
      "methodsdata":[
        {
          "name": "getCheckedNodes",
          "describe":"获取被勾选的节点",
          "return":"无"
        },
        {
          "name": "getSelectedNodes",
          "describe":"获取被选中的节点",
          "return":"无"
        }
      ],
      childrendata:[
        {
          'attribute': 'title',
          'describe':'标题',
          'type':"String | Element String",
          'default':"-"
        },
        {
          'attribute': 'expand',
          'describe':'是否展开直子节点',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'disabled',
          'describe':'禁掉响应',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'disableCheckbox',
          'describe':'禁掉 checkbox',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'selected',
          'describe':'是否选中子节点',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'checked',
          'describe':'是否勾选(如果勾选，子节点也会全部勾选)',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'children',
          'describe':'子节点属性数组',
          'type':"Array",
          'default':"-"
        },
        {
          'attribute': 'icon',
          'describe':'图标类型',
          'type':"string || url",
          'default':"-"
        }
      ],
      "basicTree": `
&lt;template>
    &lt;Tree :data="baseData">&lt;/Tree>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                baseData: [{
                    expand: true,
                    title: 'parent 1',
                    children: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        children: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        expand: true,
                        checked: true,
                        children: [{
                            title: 'leaf',
                        }]
                    }]
                }]
            }
        }
    }
&lt;/script>
`,
     "checkboxTree": `
&lt;template>
    &lt;Tree :data="baseData" show-checkbox>&lt;/Tree>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                baseData: [{
                    expand: true,
                    title: 'parent 1',
                    children: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        children: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        expand: true,
                        checked: true,
                        children: [{
                            title: 'leaf',
                        }]
                    }]
                }]
            }
        }
    }
&lt;/script>
`,
     "multipleTree": `
&lt;template>
    &lt;Tree :data="baseData" show-checkbox multiple>&lt;/Tree>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                baseData: [{
                    expand: true,
                    title: 'parent 1',
                    children: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        children: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        expand: true,
                        checked: true,
                        children: [{
                            title: 'leaf',
                        }]
                    }]
                }]
            }
        }
    }
&lt;/script>
`,
"childrenCheckedTree": `
&lt;template>
    &lt;Tree :data="baseData" show-checkbox multiple :widthCheckAll="false">&lt;/Tree>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                baseData: [{
                    expand: true,
                    title: 'parent 1',
                    children: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        children: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        expand: true,
                        checked: true,
                        children: [{
                            title: 'leaf',
                        }]
                    }]
                }]
            }
        }
    }
&lt;/script>
`,
     "iconTree": `
&lt;template>
    &lt;Tree :data="baseData" show-checkbox multiple>&lt;/Tree>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                baseData: [{
                expand: true,
                title: 'parent 1',
                icon: "android-document",
                children: [{
                    title: 'parent 1-0',
                    expand: true,
                    disabled: true,
                    icon: "android-document",
                    children: [{
                        title: 'leaf',
                        disableCheckbox: true,
                        icon: "android-document"
                    }, {
                        title: 'leaf',
                        icon: "android-document"
                    }]
                }, {
                    title: 'parent 1-1',
                    expand: true,
                    checked: true,
                    icon: "android-document",
                    children: [{
                        title: '<span style="color: red">leaf</span>',
                        icon: "android-document"
                    }]
                }]
            }]
            }
        }
    }
&lt;/script>
`,
"searchableTree": `
&lt;template>
    &lt;Tree :data="baseData" show-checkbox multiple searchable>&lt;/Tree>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                baseData: [{
                expand: true,
                title: 'parent 1',
                icon: "android-document",
                children: [{
                    title: 'parent 1-0',
                    expand: true,
                    disabled: true,
                    icon: "android-document",
                    children: [{
                        title: 'leaf',
                        disableCheckbox: true,
                        icon: "android-document"
                    }, {
                        title: 'leaf',
                        icon: "android-document"
                    }]
                }, {
                    title: 'parent 1-1',
                    expand: true,
                    checked: true,
                    icon: "android-document",
                    children: [{
                        title: 'leaf',
                        icon: "android-document"
                    }]
                }]
            }]
            }
        }
    }
&lt;/script>
`,
      "draggableTree":`
&lt;template>
    &lt;Tree :data="baseData" show-checkbox multiple draggable>&lt;/Tree>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                baseData: [{
                expand: true,
                title: 'parent 1',
                icon: "android-document",
                children: [{
                    title: 'parent 1-0',
                    expand: true,
                    disabled: true,
                    icon: "android-document",
                    children: [{
                        title: 'leaf',
                        disableCheckbox: true,
                        icon: "android-document"
                    }, {
                        title: 'leaf',
                        icon: "android-document"
                    }]
                }, {
                    title: 'parent 1-1',
                    expand: true,
                    checked: true,
                    icon: "android-document",
                    children: [{
                        title: 'leaf',
                        icon: "android-document"
                    }]
                }]
            }]
            }
        }
    }
&lt;/script>
      `,
       "mapTree": `
&lt;template>
    &lt;Tree :data="baseData" :fields="fields">&lt;/Tree>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                baseData: [{
                    expand: true,
                    name: 'parent 1',
                    child: [{
                        name: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        child: [{
                            name: 'leaf',
                            disableCheckbox: true
                        }, {
                            name: 'leaf',
                        }]
                    }, {
                        name: 'parent 1-1',
                        expand: true,
                        checked: true,
                        child: [{
                            name: 'leaf',
                        }]
                    }]
                }],
                fields: [
                    {field: 'name', map: 'title'},  
                    {field: 'child', map: 'children'}
                ],
            }
        }
    }
&lt;/script>
`
    }
  }
}
</script>
