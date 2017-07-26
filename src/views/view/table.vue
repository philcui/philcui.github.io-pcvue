<template>
  <div class="">
    <demoTab :code="checkBoxTableCode" :describeTitle="describeTitle">
      <div slot="sample">
        <Table highlight-row border :columns="columns4" :data="data1"></Table>
      </div>
      <div slot="describe-content">
        全选 半选
      </div>
    </demoTab>
    <br>
    <br>
    <demoTab :code="btnScrollCode" :describeTitle="describeTitle">
      <div slot="sample">
        <Table :columns="columns8" :data="data3" size="small" ref="table"></Table>
      </div>
      <div slot="describe-content">
        滚动条 （排序图标未换）
      </div>
    </demoTab>
    <br>
    <br>
    <demoTab :code="editTableCode"  :describeTitle="describeTitle">
      <div slot="sample">
        <h3>可编辑表格</h3>
        <Table @on-row-click="rowClick" @on-current-change="rowChange"
               border   :columns="columns6"   :data="data9"></Table>
      </div>
      <div slot="describe-content">
        <p>
          行：通过属性rowEditable: Boolean可以设置某一行可编辑，可选值<br/>
          &nbsp;&nbsp;true：该行可编辑<br/>
          &nbsp;&nbsp;false：该行不可编辑，默认<br/>
          单元格：通过属性cellEditable：[Array]指定可编辑的属性，默认为空<br/>
          cellEditable的优先级高于rowEditable<br/>
          方法：onAfterChange(newObj, oldObj)<br/>
          说明：修改单元格之后的回调
        </p>
      </div>
    </demoTab>

   <!-- <demoTab :code="rightScrollCode" :describeTitle="describeTitle">
      <div slot="sample">
        <h3>右侧滚动条</h3>
        <Table height="200" :columns="columns1" :data="data2"></Table>
      </div>
      <div slot="describe-content">

      </div>
    </demoTab>-->
  </div>
</template>
<script>
  import demoTab from '@/components/DemoTab'
  export default {
    components: { demoTab },
    data () {
      return {
        "describeTitle":'table',
        "editTableCode": `&lt;template>
      &lt;div>
          &lt;Table @on-row-click="rowClick" @on-current-change="rowChange"
              border   :columns="columns6"   :data="data9"> &lt;/Table>
      &lt;/div>
  &lt;/template>
        &lt;script>
           export default {
                data () {
                    return {
                          self: this,
                           columnsName: [
                                {
                                  title: '子站服务',
                                  key: 'name',
                                  type:'treetable'
                                },
                                {
                                  title:'地址',
                                  key:'url'
                                },
                                {
                                  title:'服务类型',
                                  key:'serviceType'
                                },{
                                  title:'code',
                                  key:'code',
                                  type:'hidden',
                                  width:"0"
                                }
                              ],
                          columns6: [
                              {
                                title: 'id',
                                key: 'id'
                              },
                              {
                                title: 'text',
                                key: 'text'
                              }
                            ],
                         data9: [
                            {
                              id: '王小明',
                              text: '北京市朝阳区芍药居',
                              cellEditable: [
                                {
                                  'name': 'id',
                                  'validate':[
                                    {
                                      'required': true,
                                      'message': 'id不能为空'
                                    },
                                    {
                                      'maxlength': 6,
                                      'minlength': 1,
                                      'message': '长度在1到6之间'
                                    },
                                    {
                                      'rules': /^\d/,
                                      'message':'输入不符合要求'
                                    }
                                  ],
                                  'onAfterChange':function(newObj, oldObj){
                                    console.log(oldObj)
                                    console.log('##########')
                                    console.log(newObj)
                                  }
                                }
                              ]
                            },
                            {
                              id: '张小刚',
                              text: '北京市海淀区西二旗',
                              rowEditable: 'true',
                              'validate':[
                                {
                                  'required': true,
                                  'message': 'id不能为空'
                                },
                                {
                                  'maxlength': 6,
                                  'minlength': 1,
                                  'message': '长度在1到6之间'
                                }
                              ],
                              onAfterChange: function (newObj, oldObj) {
                                console.log(oldObj)
                                console.log('##########')
                                console.log(newObj)
                              }
                            },
                            {
                              id: '李小红',
                              text: '上海市浦东新区世纪大道'
                            },
                            {
                              id: '周小伟',
                              text: '深圳市南山区深南大道'
                            }
                          ],
                    }
                }
           }
        &lt;/script>`,
       /* rightScrollCode:` &lt;template>
      &lt;Table height="200" :columns="columns1" :data="data2"></Table>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data2: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]，
            }
        }
    }
&lt;/script>`,*/
       "checkBoxTableCode":` &lt;template>
      &lt;Table highlight-row border :columns="columns4" :data="data1">&lt;/Table>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                columns4: [
                    {
                      type: 'selection',
                      width: 60,
                      align: 'center'
                    },
                    {
                      title: '姓名',
                      key: 'name'
                    },
                    {
                      title: '年龄',
                      key: 'age'
                    },
                    {
                      title: '地址',
                      key: 'address'
                    }
                  ],
                  data1: [
                    {
                      name: '王小明',
                      age: 18,
                      address: '北京市朝阳区芍药居'
                    },
                    {
                      name: '张小刚',
                      age: 25,
                      address: '北京市海淀区西二旗'
                    },
                    {
                      name: '李小红',
                      age: 30,
                      address: '上海市浦东新区世纪大道'
                    },
                    {
                      name: '周小伟',
                      age: 26,
                      address: '深圳市南山区深南大道'
                    }
                  ]
            }
        }
    }
&lt;/script>`,
        "btnScrollCode":` &lt;template>
       &lt;Table :columns="columns8" :data="data3" size="small" ref="table"> &lt;/Table>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                columns8: [
          {
            "title": "名称",
            "key": "name",
            "fixed": "left",
            "width": 200
          },
          {
            "title": "展示",
            "key": "show",
            "width": 150,
            "sortable": true,
            filters: [
              {
                label: '大于4000',
                value: 1
              },
              {
                label: '小于4000',
                value: 2
              }
            ],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.show > 4000;
              } else if (value === 2) {
                return row.show < 4000;
              }
            }
          },
          {
            "title": "唤醒",
            "key": "weak",
            "width": 150,
            "sortable": true
          },
          {
            "title": "登录",
            "key": "signin",
            "width": 150,
            "sortable": true
          },
          {
            "title": "点击",
            "key": "click",
            "width": 150,
            "sortable": true
          },
          {
            "title": "激活",
            "key": "active",
            "width": 150,
            "sortable": true
          },
          {
            "title": "7日留存",
            "key": "day7",
            "width": 150,
            "sortable": true
          },
          {
            "title": "30日留存",
            "key": "day30",
            "width": 150,
            "sortable": true
          },
          {
            "title": "次日留存",
            "key": "tomorrow",
            "width": 150,
            "sortable": true
          },
          {
            "title": "日活跃",
            "key": "day",
            "width": 150,
            "sortable": true
          },
          {
            "title": "周活跃",
            "key": "week",
            "width": 150,
            "sortable": true
          },
          {
            "title": "月活跃",
            "key": "month",
            "width": 150,
            "sortable": true
          }
        ],
        data3: [
          {
            "name": "推广名称1",
            "fav": 0,
            "show": 7302,
            "weak": 5627,
            "signin": 1563,
            "click": 4254,
            "active": 1438,
            "day7": 274,
            "day30": 285,
            "tomorrow": 1727,
            "day": 558,
            "week": 4440,
            "month": 5610
          },
          {
            "name": "推广名称2",
            "fav": 0,
            "show": 4720,
            "weak": 4086,
            "signin": 3792,
            "click": 8690,
            "active": 8470,
            "day7": 8172,
            "day30": 5197,
            "tomorrow": 1684,
            "day": 2593,
            "week": 2507,
            "month": 1537
          },
          {
            "name": "推广名称3",
            "fav": 0,
            "show": 7181,
            "weak": 8007,
            "signin": 8477,
            "click": 1879,
            "active": 16,
            "day7": 2249,
            "day30": 3450,
            "tomorrow": 377,
            "day": 1561,
            "week": 3219,
            "month": 1588
          },
          {
            "name": "推广名称4",
            "fav": 0,
            "show": 9911,
            "weak": 8976,
            "signin": 8807,
            "click": 8050,
            "active": 7668,
            "day7": 1547,
            "day30": 2357,
            "tomorrow": 7278,
            "day": 5309,
            "week": 1655,
            "month": 9043
          },
          {
            "name": "推广名称5",
            "fav": 0,
            "show": 934,
            "weak": 1394,
            "signin": 6463,
            "click": 5278,
            "active": 9256,
            "day7": 209,
            "day30": 3563,
            "tomorrow": 8285,
            "day": 1230,
            "week": 4840,
            "month": 9908
          },
          {
            "name": "推广名称6",
            "fav": 0,
            "show": 6856,
            "weak": 1608,
            "signin": 457,
            "click": 4949,
            "active": 2909,
            "day7": 4525,
            "day30": 6171,
            "tomorrow": 1920,
            "day": 1966,
            "week": 904,
            "month": 6851
          },
          {
            "name": "推广名称7",
            "fav": 0,
            "show": 5107,
            "weak": 6407,
            "signin": 4166,
            "click": 7970,
            "active": 1002,
            "day7": 8701,
            "day30": 9040,
            "tomorrow": 7632,
            "day": 4061,
            "week": 4359,
            "month": 3676
          },
          {
            "name": "推广名称8",
            "fav": 0,
            "show": 862,
            "weak": 6520,
            "signin": 6696,
            "click": 3209,
            "active": 6801,
            "day7": 6364,
            "day30": 6850,
            "tomorrow": 9408,
            "day": 2481,
            "week": 1479,
            "month": 2346
          },
          {
            "name": "推广名称9",
            "fav": 0,
            "show": 567,
            "weak": 5859,
            "signin": 128,
            "click": 6593,
            "active": 1971,
            "day7": 7596,
            "day30": 3546,
            "tomorrow": 6641,
            "day": 1611,
            "week": 5534,
            "month": 3190
          },
          {
            "name": "推广名称10",
            "fav": 0,
            "show": 3651,
            "weak": 1819,
            "signin": 4595,
            "click": 7499,
            "active": 7405,
            "day7": 8710,
            "day30": 5518,
            "tomorrow": 428,
            "day": 9768,
            "week": 2864,
            "month": 5811
          }
        ]
            }
        }
    }
&lt;/script>`,
        self: this,
        columnsName: [
          {
            title: '子站服务',
            key: 'name',
            type:'treetable'
          },
          {
            title:'地址',
            key:'url'
          },
          {
            title:'服务类型',
            key:'serviceType'
          },{
            title:'code',
            key:'code',
            type:'hidden',
            width:"0"
          }
        ],
        columns7: [
          {
            title: 'id',
            key: 'id',
            type:'treetable'
          },
          {
            title: 'text',
            key: 'text'
          }
        ],
        columns6: [
          {
            title: 'id',
            key: 'id'
          },
          {
            title: 'text',
            key: 'text'
          }
        ],
        data6: [
          {
            id: '王小明',
            text: '北京市朝阳区芍药居'
          },
          {
            id: '张小刚',
            text: '北京市海淀区西二旗'
          },
          {
            id: '李小红',
            text: '上海市浦东新区世纪大道'
          },
          {
            id: '周小伟',
            text: '深圳市南山区深南大道'
          }
        ],
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data2: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ],
        data8:[{"id":"2bfe046c420011e7a726000c29e5864e","name":"111234","url":"http://1.1/1111","childNodes":[],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"1111111","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/default.png"},{"id":"41d25a7c9dce4b9aa07b9710cdaf603a","name":"文件服务系统","url":"http://10.0.2.135:8484/filemanager","childNodes":[],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"100058","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/filemanager.png"},{"id":"5a01c6ee782a482c87f954a90421fb11","name":"报表引擎","url":"http://10.0.2.135:8380/report","childNodes":[],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"100020","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/report.png"},{"id":"73023ff702a711e6b0b0000c295a2217","name":"表单引擎","url":"http://10.0.2.135:9032/xform","childNodes":[],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"600100","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/xform.png"},{"id":"87fb213a03214e6c8f5beecd64373bea","name":"系统管理","url":"http://10.0.2.135:8080/sys","childNodes":[{"id":"910601583f7611e7a779000c29e5864e","name":"serviceName","url":"serviceUrl","childNodes":[{"id":"9112ab893f7611e7a779000c29e5864e","name":"funcName","url":"funcUrl","childNodes":[],"pid":"910601583f7611e7a779000c29e5864e","selected":false,"open":false,"num":0,"isParent":false,"code":"100001001001","serviceType":"configListener","type":3,"icon":"http://10.0.2.135:8090/oam/icons/smallIcon/service.png"}],"pid":"87fb213a03214e6c8f5beecd64373bea","selected":false,"open":false,"num":0,"isParent":true,"code":"100001001","serviceType":"configListener","type":2,"icon":"http://10.0.2.135:8090/oam/icons/smallIcon/service.png"},{"id":"b9e3c4ac4a6a11e7824c000c29e5864e","name":"test","url":"testURl","childNodes":[],"pid":"87fb213a03214e6c8f5beecd64373bea","selected":false,"open":false,"num":0,"isParent":false,"code":"100001002","serviceType":"configListener","type":2,"icon":"http://10.0.2.135:8090/oam/icons/smallIcon/service.png"}],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"100001","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/default.png"},{"id":"87fb2167k3214e6c8f5beecd64373bea","name":"调度引擎","url":"http://10.0.2.135:8580/taskServer","childNodes":[],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"100022","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/task.png"},{"id":"9298c4fbb8b711e6b8ad000c29280512","name":"在线文档","url":"http://10.0.2.135:8288/doc","childNodes":[],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"200006","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/doc.png"},{"id":"c5fa174f6dfe4f0da1a40d51f7812f52","name":"cas","url":"http://10.0.2.135:80/cas","childNodes":[],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"100000","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/cas.png"},{"id":"d4aee3e77dd0411234561ee595a03401","name":"运维管理","url":"http://10.0.2.135:8090/oam","childNodes":[],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"100009","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/sys.png"},{"id":"d4aee3e77dd0419cac181ee595a03401","name":"流程引擎","url":"http://10.0.2.135:8780/workflow","childNodes":[],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"100021","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/workflow.png"},{"id":"e0b46979250b4e4296b2db7f44fbd0a3","name":"人员管理","url":"http://10.0.2.135:8041/hrm","childNodes":[{"id":"a5bb0fb03f7611e7a779000c29e5864e","name":"hrmName","url":"hrmUrl","childNodes":[{"id":"a5c597013f7611e7a779000c29e5864e","name":"hrmFunc","url":"hrmFuncUrl","childNodes":[],"pid":"a5bb0fb03f7611e7a779000c29e5864e","selected":false,"open":false,"num":0,"isParent":false,"code":"100100001001","serviceType":"configListener","type":3,"icon":"http://10.0.2.135:8090/oam/icons/smallIcon/service.png"}],"pid":"e0b46979250b4e4296b2db7f44fbd0a3","selected":false,"open":false,"num":0,"isParent":true,"code":"100100001","serviceType":"configListener","type":2,"icon":"http://10.0.2.135:8090/oam/icons/smallIcon/service.png"}],"pid":null,"selected":false,"open":false,"num":0,"isParent":true,"code":"100100","serviceType":null,"type":1,"icon":"http://10.0.2.135:8090/oam/icons/default.png"}],
        data7:[
          {id: 1, text: '菜单一',level:0, firstR:'tr_Root_1',pid: null,hasChild:true,childNodes:[
            {id: 3, text: '菜单一一', pid: 1, checked: true,childNodes:[
              {id: 10, text: '三级菜单一', pid: 3},
              {id: 11, text: '三级菜单二', pid: 3,childNodes:[
                {id: 13, text: '四级菜单', pid: 11}
              ]}
            ]},
            {id: 4, text: '菜单一二', pid: 1,hasChild:true,childNodes:[
              {id: 12, text: '三级菜单三', pid: 4, checked: true}
            ]},
            {id: 6, text: '菜单一三', pid: 1, hasChild:false,checked: true},
            {id: 7, text: '菜单一四',hasChild:false, pid: 1},
            {id: 8, text: '菜单一五', pid: 1,hasChild:false, checked: true}
          ],
            cellEditable: [
              {
                'name': 'text',
                'validate':[
                  {
                    'required': true,
                    'meassge': 'id不能为空'
                  },
                  {
                    'maxlength': 6,
                    'minlength': 1,
                    'meassge': '长度在1到6之间'
                  }
                ],
                'onAfterChange':function(newObj, oldObj){
                  console.log(oldObj)
                  console.log('##########')
                  console.log(newObj)
                }
              }]
          },
          {id: 3, text: '菜单一一', pid: 1,firstR:'tr_Root_1',level:1, checked: true,hasChild:true,childNodes:[
            {id: 10, text: '三级菜单一', pid: 3},
            {id: 11, text: '三级菜单二', pid: 3,childNodes:[
              {id: 13, text: '四级菜单', pid: 11}
            ]}
          ]},
          {id: 10, text: '三级菜单一',firstR:'tr_Root_1',hasChild:false, level:2,pid: 3},
          {id: 11, text: '三级菜单二', firstR:'tr_Root_1',pid: 3,level:2,hasChild:true,childNodes:[
            {id: 13, text: '四级菜单', pid: 11}
          ]},
          {id: 13, text: '四级菜单',firstR:'tr_Root_1',hasChild:false,level:3, pid: 11},
          {id: 4, text: '菜单一二', firstR:'tr_Root_1',pid: 1,level:1,hasChild:true,childNodes:[
            {id: 12, text: '三级菜单三', pid: 4, checked: true}
          ]},
          {id: 12, text: '三级菜单三',firstR:'tr_Root_1',hasChild:false, pid: 4, level:2,checked: true},
          {id: 6, text: '菜单一三', firstR:'tr_Root_1',pid: 1,hasChild:false, level:1,checked: true},
          {id: 7, text: '菜单一四',firstR:'tr_Root_1',hasChild:false,level:1, pid: 1},
          {id: 8, text: '菜单一五',firstR:'tr_Root_1', pid: 1,level:1, hasChild:false,checked: true},
          {id: 2, text: '菜单二', firstR:'tr_Root_2',pid: null,level:0,hasChild:true,childNodes:[
            {id: 5, text: '菜单二一', pid: 2},
            {id: 14, text: '菜单二二', pid: 2}
          ]},
          {id: 5, text: '菜单二一', level:1,firstR:'tr_Root_2',hasChild:false,pid: 2},
          {id: 14, text: '菜单二二',level:1,firstR:'tr_Root_2',hasChild:false, pid: 2},
          {id: 9, text: '菜单三',hasChild:false, firstR:'tr_Root_9',level:0,pid: null }
        ],
        data9: [
          {
            id: '王小明',
            text: '北京市朝阳区芍药居',
            cellEditable: [
              {
                'name': 'id',
                'validate':[
                  {
                    'required': true,
                    'message': 'id不能为空'
                  },
                  {
                    'maxlength': 6,
                    'minlength': 1,
                    'message': '长度在1到6之间'
                  },
                  {
                    'rules': /^\d/,
                    'message':'输入不符合要求'
                  }
                ],
                'onAfterChange':function(newObj, oldObj){
                  console.log(oldObj)
                  console.log('##########')
                  console.log(newObj)
                }
              }
            ]
          },
          {
            id: '张小刚',
            text: '北京市海淀区西二旗',
            rowEditable: 'true',
            'validate':[
              {
                'required': true,
                'message': 'id不能为空'
              },
              {
                'maxlength': 6,
                'minlength': 1,
                'message': '长度在1到6之间'
              }
            ],
            onAfterChange: function (newObj, oldObj) {
              console.log(oldObj)
              console.log('##########')
              console.log(newObj)
            }
          },
          {
            id: '李小红',
            text: '上海市浦东新区世纪大道'
          },
          {
            id: '周小伟',
            text: '深圳市南山区深南大道'
          }
        ],
        columns10: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ], data56: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居',
            job: '数据工程师',
            interest: '羽毛球',
            birthday: '1991-05-14',
            book: '乔布斯传',
            movie: '致命魔术',
            music: 'I Cry'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗',
            job: '数据科学家',
            interest: '排球',
            birthday: '1989-03-18',
            book: '我的奋斗',
            movie: '罗马假日',
            music: 'My Heart Will Go On'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道',
            job: '数据产品经理',
            interest: '网球',
            birthday: '1992-01-31',
            book: '赢',
            movie: '乔布斯',
            music: 'Don’t Cry'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道',
            job: '数据分析师',
            interest: '桌球，跑步',
            birthday: '1988-7-25',
            book: '红楼梦',
            movie: '倩女幽魂',
            music: '演员'
          }
        ],columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ], columns8: [
          {
            "title": "名称",
            "key": "name",
            "fixed": "left",
            "width": 200
          },
          {
            "title": "展示",
            "key": "show",
            "width": 150,
            "sortable": true,
            filters: [
              {
                label: '大于4000',
                value: 1
              },
              {
                label: '小于4000',
                value: 2
              }
            ],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.show > 4000;
              } else if (value === 2) {
                return row.show < 4000;
              }
            }
          },
          {
            "title": "唤醒",
            "key": "weak",
            "width": 150,
            "sortable": true
          },
          {
            "title": "登录",
            "key": "signin",
            "width": 150,
            "sortable": true
          },
          {
            "title": "点击",
            "key": "click",
            "width": 150,
            "sortable": true
          },
          {
            "title": "激活",
            "key": "active",
            "width": 150,
            "sortable": true
          },
          {
            "title": "7日留存",
            "key": "day7",
            "width": 150,
            "sortable": true
          },
          {
            "title": "30日留存",
            "key": "day30",
            "width": 150,
            "sortable": true
          },
          {
            "title": "次日留存",
            "key": "tomorrow",
            "width": 150,
            "sortable": true
          },
          {
            "title": "日活跃",
            "key": "day",
            "width": 150,
            "sortable": true
          },
          {
            "title": "周活跃",
            "key": "week",
            "width": 150,
            "sortable": true
          },
          {
            "title": "月活跃",
            "key": "month",
            "width": 150,
            "sortable": true
          }
        ],
        data3: [
          {
            "name": "推广名称1",
            "fav": 0,
            "show": 7302,
            "weak": 5627,
            "signin": 1563,
            "click": 4254,
            "active": 1438,
            "day7": 274,
            "day30": 285,
            "tomorrow": 1727,
            "day": 558,
            "week": 4440,
            "month": 5610
          },
          {
            "name": "推广名称2",
            "fav": 0,
            "show": 4720,
            "weak": 4086,
            "signin": 3792,
            "click": 8690,
            "active": 8470,
            "day7": 8172,
            "day30": 5197,
            "tomorrow": 1684,
            "day": 2593,
            "week": 2507,
            "month": 1537
          },
          {
            "name": "推广名称3",
            "fav": 0,
            "show": 7181,
            "weak": 8007,
            "signin": 8477,
            "click": 1879,
            "active": 16,
            "day7": 2249,
            "day30": 3450,
            "tomorrow": 377,
            "day": 1561,
            "week": 3219,
            "month": 1588
          },
          {
            "name": "推广名称4",
            "fav": 0,
            "show": 9911,
            "weak": 8976,
            "signin": 8807,
            "click": 8050,
            "active": 7668,
            "day7": 1547,
            "day30": 2357,
            "tomorrow": 7278,
            "day": 5309,
            "week": 1655,
            "month": 9043
          },
          {
            "name": "推广名称5",
            "fav": 0,
            "show": 934,
            "weak": 1394,
            "signin": 6463,
            "click": 5278,
            "active": 9256,
            "day7": 209,
            "day30": 3563,
            "tomorrow": 8285,
            "day": 1230,
            "week": 4840,
            "month": 9908
          },
          {
            "name": "推广名称6",
            "fav": 0,
            "show": 6856,
            "weak": 1608,
            "signin": 457,
            "click": 4949,
            "active": 2909,
            "day7": 4525,
            "day30": 6171,
            "tomorrow": 1920,
            "day": 1966,
            "week": 904,
            "month": 6851
          },
          {
            "name": "推广名称7",
            "fav": 0,
            "show": 5107,
            "weak": 6407,
            "signin": 4166,
            "click": 7970,
            "active": 1002,
            "day7": 8701,
            "day30": 9040,
            "tomorrow": 7632,
            "day": 4061,
            "week": 4359,
            "month": 3676
          },
          {
            "name": "推广名称8",
            "fav": 0,
            "show": 862,
            "weak": 6520,
            "signin": 6696,
            "click": 3209,
            "active": 6801,
            "day7": 6364,
            "day30": 6850,
            "tomorrow": 9408,
            "day": 2481,
            "week": 1479,
            "month": 2346
          },
          {
            "name": "推广名称9",
            "fav": 0,
            "show": 567,
            "weak": 5859,
            "signin": 128,
            "click": 6593,
            "active": 1971,
            "day7": 7596,
            "day30": 3546,
            "tomorrow": 6641,
            "day": 1611,
            "week": 5534,
            "month": 3190
          },
          {
            "name": "推广名称10",
            "fav": 0,
            "show": 3651,
            "weak": 1819,
            "signin": 4595,
            "click": 7499,
            "active": 7405,
            "day7": 8710,
            "day30": 5518,
            "tomorrow": 428,
            "day": 9768,
            "week": 2864,
            "month": 5811
          }
        ]
      }
    },
    methods: {
      rowClick: function (row) {
        this.editRow = row;
        if(row!=null&&row!=''){
          console.log("@@@@@@@@@@@")
          console.log(row)
        }else {
          console.log("XXXXXXXXX")
        }

      },
      rowChange:function (val) {
        console.log("Change   Change  Change")
        console.log(val)
      },
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1);
      }
    }
  }
</script>
<style>
.cardHeight {
  height: 500px;
}
</style>
