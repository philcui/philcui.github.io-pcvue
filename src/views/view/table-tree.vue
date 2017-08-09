<template>
  <div>
    <section class="demo" id="tableTree">
      <demoTab :code="tableTreeCode" :describeTitle="describeTitleTree">
        <div slot="sample">
          <Table :columns="columnsTree" :data="dataTree" treeTable expandLevel="1"></Table>
        </div>
        <div slot="describe-content">
          treeTable&nbsp;&nbsp;&nbsp;&nbsp;是否是表格树，默认false<br/>
          expandLevel&nbsp;&nbsp;&nbsp;&nbsp;节点展开层级，默认为0(即不展开)<br/>
          treeDataType&nbsp;&nbsp;&nbsp;&nbsp;数据源数据结构，支持的值：tree - 树形结构数据（默认），list - 列表数据<br/>
          treetable&nbsp;&nbsp;&nbsp;&nbsp;column中的type属性值为treetable时说明此列为加载树结构列<br/>
          <br/>
          数据源中唯一标识说明：<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;id 数据源中的数据唯一标识列名称;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;pid 数据源中的对应父节点的标识名称;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;childNodes 数据源中的对应子节点集合的标识名称;
        </div>
      </demoTab>
    </section>
    <section class="demo" id="tableTree1">
      <demoTab :code="tableTreeCode1" :describeTitle="describeTitleTree1">
        <div slot="sample">
          <Table :columns="columnsTree" :data="dataTree1" treeTable :fields="fieldsList1"></Table>
        </div>
        <div slot="describe-content">
          fields&nbsp;&nbsp;&nbsp;&nbsp;当数据源信息中的标识列名称不是id、pid、childNodes时，对数据列信息进行对应配置<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;field&nbsp;&nbsp;&nbsp;&nbsp;数据源标识列名称<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;map&nbsp;&nbsp;&nbsp;&nbsp;表格树中对应标识列名称
        </div>
      </demoTab>
    </section>
    <section class="demo" id="tableTree2">
      <demoTab :code="tableTreeCode2" :describeTitle="describeTitleTree2">
        <div slot="sample">
          <Table :columns="columnsTree" :data="dataTree2" treeDataType="list" treeTable expandLevel="1"></Table>
        </div>
        <div slot="describe-content">
          treeDataType为list时的数据信息与属性配置
        </div>
      </demoTab>
    </section>
    <section class="demo" id="tableTree3">
      <demoTab :code="tableTreeCode3" :describeTitle="describeTitleTree3">
        <div slot="sample">
          <Table :columns="columnsTree" :data="dataTree3" treeDataType="list" :fields="fieldsList3" treeTable ></Table>
        </div>
        <div slot="describe-content">
          treeDataType为list时的数据信息与属性配置，其中数据标识名称不一致
        </div>
      </demoTab>
    </section>
  </div>
</template>
<script>
  import demoTab from '@/components/DemoTab'
  export default {
    components: {demoTab},
    data(){
      return {
        columnsTree: [
          {
            title: '主键ID',
            key: 'id',
            type: 'treetable'
          },
          {
            title: '菜单名称',
            key: 'text'
          }
        ],
        dataTree: [
          {
            id: 1, text: '菜单一', pid: null, childNodes: [
            {
              id: 3, text: '菜单一一', pid: 1, childNodes: [
              {id: 10, text: '三级菜单一', pid: 3},
              {
                id: 11, text: '三级菜单二', pid: 3, childNodes: [{id: 13, text: '四级菜单', pid: 11}]
              }
            ]
            },
            {
              id: 4, text: '菜单一二', pid: 1, childNodes: [
              {id: 12, text: '三级菜单三', pid: 4}
            ]
            },
            {id: 6, text: '菜单一三', pid: 1}
          ]
          },
          {id: 9, text: '菜单二', pid: null}
        ],
        describeTitleTree: "表格树(一)",
        dataTree1: [
          {
            menuid: 1, text: '菜单一', pid: null, child: [
            {
              menuid: 3, text: '菜单一一', pid: 1, child: [
              {menuid: 10, text: '三级菜单一', pid: 3},
              {
                menuid: 11, text: '三级菜单二', pid: 3, child: [{menuid: 13, text: '四级菜单', pid: 11}]
              }
            ]
            },
            {
              menuid: 4, text: '菜单一二', pid: 1, child: [
              {menuid: 12, text: '三级菜单三', pid: 4}
            ]
            },
            {menuid: 6, text: '菜单一三', pid: 1}
          ]
          },
          {menuid: 9, text: '菜单二', pid: null}
        ],
        fieldsList1: [{field: "menuid", map: "id"}, {field: "child", map: "childNodes"}],
        describeTitleTree1: "表格树(二)",
        dataTree2: [
          {id: 1, text: '菜单一', pid: null},
          {id: 3, text: '菜单一一', pid: 1},
          {id: 10, text: '三级菜单一', pid: 3},
          {id: 11, text: '三级菜单二', pid: 3},
          {id: 13, text: '四级菜单', pid: 11},
          {id: 4, text: '菜单一二', pid: 1},
          {id: 12, text: '三级菜单三', pid: 4},
          {id: 6, text: '菜单一三', pid: 1},
          {id: 9, text: '菜单二', pid: null}],
        describeTitleTree2: "表格树(三)",
        dataTree3: [
          {menuid: 1, text: '菜单一', pid: null},
          {menuid: 3, text: '菜单一一', pid: 1},
          {menuid: 10, text: '三级菜单一', pid: 3},
          {menuid: 11, text: '三级菜单二', pid: 3},
          {menuid: 13, text: '四级菜单', pid: 11},
          {menuid: 4, text: '菜单一二', pid: 1},
          {menuid: 12, text: '三级菜单三', pid: 4},
          {menuid: 6, text: '菜单一三', pid: 1},
          {menuid: 9, text: '菜单二', pid: null}],
        describeTitleTree3: "表格树(四)",
        fieldsList3: [{field: "menuid", map: "id"}],
        tableTreeCode: `&lt;template>
      &lt;div>
          &lt;Table :columns="columnsTree" :data="dataTree" treeTable expandLevel="1"> &lt;/Table>
      &lt;/div>
  &lt;/template>
        &lt;script>
           export default {
                data () {
                    return {
                          columnsTree: [
                          {title: '主键ID',key: 'id',type: 'treetable'},
                          {title: '菜单名称',key: 'text'}
                          ],
                           dataTree: [
                           {id: 1, text: '菜单一', pid: null, childNodes: [
                                  {id: 3, text: '菜单一一', pid: 1, childNodes: [
                                     {id: 10, text: '三级菜单一', pid: 3},
                                     {id: 11, text: '三级菜单二', pid: 3, childNodes: [
                                           {id: 13, text: '四级菜单', pid: 11}] }] },
                                  {id: 4, text: '菜单一二', pid: 1, childNodes: [
                                      {id: 12, text: '三级菜单三', pid: 4}]},
                                  {id: 6, text: '菜单一三', pid: 1}]},
                           {id: 9, text: '菜单二', pid: null}]
                    }
                }
           }
        &lt;/script>`,
        tableTreeCode1: `&lt;template>
      &lt;div>
          &lt;Table :columns="columnsTree" :data="dataTree" treeTable :fields="fieldsList"> &lt;/Table>
      &lt;/div>
  &lt;/template>
        &lt;script>
           export default {
                data () {
                    return {
                          columnsTree: [
                          {title: '主键ID',key: 'id',type: 'treetable'},
                          {title: '菜单名称',key: 'text'}
                          ],
                          fieldsList:[{field: "menuid", map: "id"},{field: "child", map: "childNodes"}],
                          dataTree: [
                          {menuid: 1, text: '菜单一', pid: null, child: [
                                  {menuid: 3, text: '菜单一一', pid: 1, child: [
                                     {menuid: 10, text: '三级菜单一', pid: 3},
                                     {menuid: 11, text: '三级菜单二', pid: 3, child: [
                                           {menuid: 13, text: '四级菜单', pid: 11}] }] },
                                  {menuid: 4, text: '菜单一二', pid: 1, child: [
                                      {menuid: 12, text: '三级菜单三', pid: 4}]},
                                  {menuid: 6, text: '菜单一三', pid: 1}]},
                          {menuid: 9, text: '菜单二', pid: null}]
                    }
                }
           }
        &lt;/script>`,
        tableTreeCode2:`&lt;template>
      &lt;div>
          &lt;Table :columns="columnsTree" :data="dataTree" treeDataType="list" treeTable expandLevel="1"> &lt;/Table>
      &lt;/div>
  &lt;/template>
        &lt;script>
           export default {
                data () {
                    return {
                          columnsTree: [
                          {title: '主键ID',key: 'id',type: 'treetable'},
                          {title: '菜单名称',key: 'text'}
                          ],
                          dataTree: [
                           {id: 1, text: '菜单一', pid: null},
                           {id: 3, text: '菜单一一', pid: 1},
                           {id: 10, text: '三级菜单一', pid: 3},
                           {id: 11, text: '三级菜单二', pid: 3},
                           {id: 13, text: '四级菜单', pid: 11},
                           {id: 4, text: '菜单一二', pid: 1},
                           {id: 12, text: '三级菜单三', pid: 4},
                           {id: 6, text: '菜单一三', pid: 1},
                           {id: 9, text: '菜单二', pid: null}]
                    }
                }
           }
        &lt;/script>`,
        tableTreeCode3:`&lt;template>
      &lt;div>
          &lt;Table :columns="columnsTree" :data="dataTree" treeDataType="list" treeTable :fields="fieldsList"> &lt;/Table>
      &lt;/div>
  &lt;/template>
        &lt;script>
           export default {
                data () {
                    return {
                          columnsTree: [
                          {title: '主键ID',key: 'id',type: 'treetable'},
                          {title: '菜单名称',key: 'text'}
                          ],
                          fieldsList: [{field: "menuid", map: "id"}],
                          dataTree: [
                           {menuid: 1, text: '菜单一', pid: null},
                           {menuid: 3, text: '菜单一一', pid: 1},
                           {menuid: 10, text: '三级菜单一', pid: 3},
                           {menuid: 11, text: '三级菜单二', pid: 3},
                           {menuid: 13, text: '四级菜单', pid: 11},
                           {menuid: 4, text: '菜单一二', pid: 1},
                           {menuid: 12, text: '三级菜单三', pid: 4},
                           {menuid: 6, text: '菜单一三', pid: 1},
                           {menuid: 9, text: '菜单二', pid: null}]
                    }
                }
           }
        &lt;/script>`,
      }
    }
  }
</script>
