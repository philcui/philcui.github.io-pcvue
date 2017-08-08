<template>
  <article class="doc-alert-container">
    <h1>Form 表单</h1>
    <h2>概述</h2>
    <p>
      具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
    </p>
    <blockquote>注意：非 template/render 模式下，需使用 i-form。</blockquote>
    <h2>代码示例</h2>
    <section class="demo">
      <demoTab :code="inputCode" :describeTitle="subTitle1">
        <div slot="sample">
          <Form :model="formItem" :label-width="80">
            <Form-item label="输入框" prop="input">
              <Input v-model="formItem.input" placeholder="请输入"></Input>
            </Form-item>
            <br/>
            <Form-item label="选择器" prop="city">
              <Select v-model="formItem.city" style="width: 200px" placeholder="请选择所在地">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
              </Select>
            </Form-item>
            <br/>
            <Form-item label="日期控件">
              <Row>
                <Col span="6">
                <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="5">
                <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
                </Col>
              </Row>
            </Form-item>
            <br/>
            <Form-item label="单选框" >
              <Radio-group v-model="formItem.radio">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
              </Radio-group>
            </Form-item>
            <br/>
            <Form-item label="多选框" prop="checkbox">
              <Checkbox-group v-model="formItem.checkbox">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
              </Checkbox-group>
            </Form-item>
            <br/>
            <Form-item label="开关" prop="switch">
              <i-Switch v-model="formItem.switch" size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
              </i-Switch>
            </Form-item>
            <br/>
            <Form-item label="滑块" prop="slider">
              <Slider v-model="formItem.slider" range></Slider>
            </Form-item>
            <br/>
            <Form-item label="文本域" prop="desc" >
              <Input v-model="formItem.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
            <br/>
            <Form-item>
              <Button type="primary">提交</Button>
              <Button type="ghost" style="margin-left: 8px">取消</Button>
            </Form-item>
          </Form>
        </div>
        <div slot="describe-content">
          在 <code>Form</code> 内，每个表单域由 <code>Form-item</code> 组成，可包含的控件有：Input、Radio、Checkbox、Switch、Select、Slider、DatePicker、TimePicker、Cascader、Transfer、InputNumber、Rate、Upload。
          给 <code>Form-item</code> 设置属性 <code>label</code> 可以显示表单域的标签，需要给 Form 设置 <code>label-width</code>。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="inputCode2" :describeTitle="subTitle2">
        <div slot="sample">
        <i-Form :model="formLeft" label-position="left" :label-width="100">
          <Form-item label="标题">
            <Input v-model="formLeft.input1"></Input>
          </Form-item>
          <br/>
          <Form-item label="标题名称">
            <Input v-model="formLeft.input2"></Input>
          </Form-item>
          <br/>
          <Form-item label="标题名称对齐">
            <Input v-model="formLeft.input3"></Input>
          </Form-item>
          <br/>
        </i-Form>
        <i-Form :model="formRight" label-position="right" :label-width="100">
          <Form-item label="标题">
            <Input v-model="formRight.input1"></Input>
          </Form-item>
          <br/>
          <Form-item label="标题名称">
            <Input v-model="formRight.input2"></Input>
          </Form-item>
          <br/>
          <Form-item label="标题名称对齐">
            <Input v-model="formRight.input3"></Input>
          </Form-item>
          <br/>
        </i-Form>
        <i-Form :model="formTop" label-position="top">
          <Form-item label="标题">
            <Input v-model="formTop.input1"></Input>
          </Form-item>
          <br/>
          <Form-item label="标题名称">
            <Input v-model="formTop.input2"></Input>
          </Form-item>
          <br/>
          <Form-item label="标题名称对齐">
            <Input v-model="formTop.input3"></Input>
          </Form-item>
        </i-Form>
        </div>
        <div slot="describe-content">
          设置属性 <code>label-position</code>，可以改变表单域标签的位置，<br/>
          left 为左对齐，right 为右对齐，top 会置于表单域顶部。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="inputCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="姓名" prop="name">
              <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
            </Form-item>
            <br/>
            <Form-item label="邮箱" prop="mail">
              <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
            </Form-item>
            <br/>
            <Form-item label="城市" prop="city">
              <Select v-model="formValidate.city" style="width: 200px" placeholder="请选择所在地">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
              </Select>
            </Form-item>
            <br/>
            <Form-item label="选择日期">
              <Row>
                <Col span="6">
                <Form-item prop="date">
                  <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                </Form-item>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="6">
                <Form-item prop="time">
                  <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
                </Form-item>
                </Col>
              </Row>
            </Form-item>
            <br/>
            <Form-item label="性别" prop="gender">
              <Radio-group v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
              </Radio-group>
            </Form-item>
            <br/>
            <Form-item label="爱好" prop="interest">
              <Checkbox-group v-model="formValidate.interest">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
              </Checkbox-group>
            </Form-item>
            <br/>
            <Form-item label="介绍" prop="desc">
              <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
            <br/>
            <Form-item>
              <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
              <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </Form-item>
          </Form>
        </div>
        <div slot="describe-content">
          Form 组件基于  async-validator 实现的数据验证，给 Form 设置属性 <code>rules</code>，<br/>
          同时给需要验证的 Form-item 设置属性 <code>prop</code> 指向对应字段即可。<br/>
          完整的验证规则请参照开源项目 async-validator。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="inputCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
            <Form-item label="密码" prop="passwd">
              <Input type="password" v-model="formCustom.passwd"></Input>
            </Form-item>
            <br/>
            <Form-item label="确认密码" prop="passwdCheck">
              <Input type="password" v-model="formCustom.passwdCheck"></Input>
            </Form-item>
            <br/>
            <Form-item label="年龄" prop="age">
              <Input type="text" v-model="formCustom.age" number></Input>
            </Form-item>
            <br/>
            <Form-item>
              <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
              <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
            </Form-item>
          </Form>
        </div>
        <div slot="describe-content">
          可以完全自定义验证规则来完成更复杂的验证，比如某些数据需要在服务端验证时。<br/>
          示例展示的是密码的二次确认及模拟的一个异步验证。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="inputCode5" :describeTitle="subTitle5">
        <div slot="sample">
          <Form ref="formDynamic" :model="formDynamic" :label-width="80">
            <Form-item
              v-for="(item, index) in formDynamic.items"
              :key="index"
              :label="'项目' + (index + 1)"
              :prop="'items.' + index + '.value'"
              :rules="{required: true, message: '项目' + (index + 1) +'不能为空', trigger: 'blur'}">
              <Row>
                <Col span="18">
                <Input type="text" v-model="item.value" placeholder="请输入..."></Input>
                </Col>
                <Col span="4" offset="1">
                <Button type="ghost" @click="handleRemove(index)">删除</Button>
                </Col>
              </Row>
            </Form-item>
            <br/>
            <Form-item>
              <Row>
                <Col span="6">
                <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
                </Col>
              </Row>
            </Form-item>
            <br/>
            <Form-item>
              <Button type="primary" @click="handleSubmit('formDynamic')">提交</Button>
              <Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
            </Form-item>
          </Form>
        </div>
        <div slot="describe-content">
          当需要动态维护 Form-item 时，也可以直接给 Form-item 设置属性 <code>rules</code> 来单独为该域做验证。<br/>
          动态设置 Form-item 的 prop 属性时，会依据上层的 Form 组件的 model 来获取，查看示例代码。<br/>
          Form-item 还可以独立设置 required、error 等属性，详见 API。
        </div>
      </demoTab>
    </section>
    <h2 id="switch3">API</h2>
    <h3>Form  props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Form methods</h3>
    <section class="demo">
      <Table border :columns="propsColumns02" :data="propsData02"></Table>
    </section>
    <h3>FormItem   props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData03"></Table>
    </section>
    <h3>FormItem  slot</h3>
    <section class="demo">
      <Table border :columns="propsColumns04" :data="propsData04"></Table>
    </section>
  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab';
  export default{
    components: {
      demoTab
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      handleAdd () {
        this.formDynamic.items.push({
          value: ''
        });
      },
      handleRemove (index) {
        this.formDynamic.items.splice(index, 1);
      }
    },
    data(){
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      const validateAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        // 模拟异步验证效果
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      return{
        propsColumns04:[
          {
            title: '名称',
            key: 'title',
          },{
            title: '说明',
            key: 'describe'
          }
        ],
        propsData04:[
          {
            title:'无',
            describe:'内容'
          },
          {
            title:'label',
            describe:'label内容'
          }
        ],
        propsColumns02:[
          {
            title: '方法名',
            key: 'methodsName',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          },
          {
            title: '参数',
            key: 'params'
          }
        ],
        propsData03:[{
          attribute: 'prop',
          describe:'对应表单域 model 里的字段',
          type:"String",
          default:"-"
        },{
          attribute: 'label',
          describe:'标签文本',
          type:"String",
          default:"-"
        },{
          attribute: 'label-width',
          describe:'表单域标签的的宽度',
          type:"Number",
          default:"-"
        },{
          attribute: 'required',
          describe:'是否必填，如不设置，则会根据校验规则自动生成',
          type:"Boolean",
          default:"-"
        },{
          attribute: 'rules',
          describe:'表单验证规则',
          type:"Number",
          default:"-"
        },{
          attribute: 'error',
          describe:'表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息',
          type:"String",
          default:"-"
        },{
          attribute: 'show-message',
          describe:'是否显示校验错误信息',
          type:"Boolean",
          default:"true"
        }],
        propsData02:[
          {
            methodsName:'validate',
            describe:'对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败',
            params:'callback'
          },
          {
            methodsName:'validateField',
            describe:'对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息',
            params:'callback'
          },
          {
            methodsName:'resetFields',
            describe:'对整个表单进行重置，将所有字段值重置为空并移除校验结果',
            params:'	无'
          }
        ],
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
          attribute: 'model',
          describe:'表单数据对象',
          type:"Object",
          default:"-"
        },{
          attribute: 'rules',
          describe:'表单验证规则，具体配置查看  async-validator',
          type:"Object",
          default:"-"
        },{
          attribute: 'inline',
          describe:'是否开启行内表单模式',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'label-position',
          describe:'表单域标签的位置，可选值为 left、right、top',
          type:"String",
          default:"right"
        },{
          attribute: 'label-width',
          describe:'表单域标签的宽度，所有的 Form-item 都会继承 Form 组件的 label-width 的值',
          type:"Number",
          default:"-"
        },{
          attribute: 'show-message',
          describe:'是否显示校验错误信息',
          type:"Boolean",
          default:"true"
        }],
        formDynamic: {
          items: [
            {
              value: ''
            }
          ]
        },
        subTitle5:'动态增减表单项',
        formCustom: {
          passwd: '',
          passwdCheck: '',
          age: ''
        },
        "inputCode5":`&lt;template>
&lt;Form ref="formDynamic" :model="formDynamic" :label-width="80">
            &lt;Form-item
              v-for="(item, index) in formDynamic.items"
              :key="index"
              :label="'项目' + (index + 1)"
              :prop="'items.' + index + '.value'"
              :rules="{required: true, message: '项目' + (index + 1) +'不能为空', trigger: 'blur'}">
              &lt;Row>
                &lt;Col span="18">
                &lt;Input type="text" v-model="item.value" placeholder="请输入...">&lt;/Input>
                &lt;/Col>
                &lt;Col span="4" offset="1">
                &lt;Button type="ghost" @click="handleRemove(index)">删除&lt;/Button>
                &lt;/Col>
              &lt;/Row>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item>
              &lt;Row>
                &lt;Col span="6">
                &lt;Button type="dashed" long @click="handleAdd" icon="plus-round">新增&lt;/Button>
                &lt;/Col>
              &lt;/Row>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item>
              &lt;Button type="primary" @click="handleSubmit('formDynamic')">提交&lt;/Button>
              &lt;Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置&lt;/Button>
            &lt;/Form-item>
          &lt;/Form>
&lt;/template>`,
        ruleCustom: {
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
          age: [
            { validator: validateAge, trigger: 'blur' }
          ]
        },
        subTitle4:'自定义验证',
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
            { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          time: [
            { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入个人介绍', trigger: 'blur' },
            { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
          ]
        },
        subTitle3:'表单验证',
        formLeft: {
          input1: '',
          input2: '',
          input3: ''
        },
        formRight: {
          input1: '',
          input2: '',
          input3: ''
        },
        formTop: {
          input1: '',
          input2: '',
          input3: ''
        },
        formItem:{
          input:'',
          city:'',
          date: '',
          time: '',
          radio: 'male',
          checkbox: [],
          desc:'',
          switch:true,
          slider:[20, 50]
        },
        "inputCode4":`&lt;template>
&lt;Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
            &lt;Form-item label="密码" prop="passwd">
              &lt;Input type="password" v-model="formCustom.passwd">&lt;/Input>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item label="确认密码" prop="passwdCheck">
              &lt;Input type="password" v-model="formCustom.passwdCheck">&lt;/Input>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item label="年龄" prop="age">
              &lt;Input type="text" v-model="formCustom.age" number>&lt;/Input>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item>
              &lt;Button type="primary" @click="handleSubmit('formCustom')">提交&lt;/Button>
              &lt;Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置&lt;/Button>
            &lt;/Form-item>
          &lt;/Form>
&lt;/template>`,
        subTitle2:'对齐方式',
        "inputCode3":`&lt;template>
&lt;Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            &lt;Form-item label="姓名" prop="name">
              &lt;Input v-model="formValidate.name" placeholder="请输入姓名">&lt;/Input>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item label="邮箱" prop="mail">
              &lt;Input v-model="formValidate.mail" placeholder="请输入邮箱">&lt;/Input>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item label="城市" prop="city">
             &lt;Select v-model="formValidate.city" placeholder="请选择所在地">
                &lt;Option value="beijing">北京市&lt;/Option>
                &lt;Option value="shanghai">上海市&lt;/Option>
                &lt;Option value="shenzhen">深圳市&lt;/Option>
              &lt;/Select>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item label="选择日期">
              &lt;Row>
                &lt;Col span="6">
                &lt;Form-item prop="date">
                  &lt;Date-picker type="date" placeholder="选择日期" v-model="formValidate.date">&lt;/Date-picker>
                &lt;/Form-item>
                &lt;/Col>
                &lt;Col span="2" style="text-align: center">-&lt;/Col>
                &lt;Col span="6">
                &lt;Form-item prop="time">
                  &lt;Time-picker type="time" placeholder="选择时间" v-model="formValidate.time">&lt;/Time-picker>
                &lt;/Form-item>
                &lt;/Col>
              &lt;/Row>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item label="性别" prop="gender">
              &lt;Radio-group v-model="formValidate.gender">
                &lt;Radio label="male">男&lt;/Radio>
                &lt;Radio label="female">女&lt;/Radio>
              &lt;/Radio-group>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item label="爱好" prop="interest">
              &lt;Checkbox-group v-model="formValidate.interest">
                &lt;Checkbox label="吃饭">&lt;/Checkbox>
                &lt;Checkbox label="睡觉">&lt;/Checkbox>
                &lt;Checkbox label="跑步">&lt;/Checkbox>
                &lt;Checkbox label="看电影">&lt;/Checkbox>
              &lt;/Checkbox-group>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item label="介绍" prop="desc">
              &lt;Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入...">&lt;/Input>
            &lt;/Form-item>
            &lt;br/>
            &lt;Form-item>
              &lt;Button type="primary" @click="handleSubmit('formValidate')">提交&lt;/Button>
              &lt;Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置&lt;/Button>
            &lt;/Form-item>
          &lt;/Form>
&lt;/template>`,
        "inputCode2":`&lt;template>
        &lt;Form :model="formLeft" label-position="left" :label-width="100">
          &lt;Form-item label="标题">
            &lt;Input v-model="formLeft.input1">&lt;/Input>
          &lt;/Form-item>
          &lt;Form-item label="标题名称">
            &lt;Input v-model="formLeft.input2">&lt;/Input>
          &lt;/Form-item>
          &lt;Form-item label="标题名称对齐">
            &lt;Input v-model="formLeft.input3">&lt;/Input>
          &lt;/Form-item>
        &lt;/Form>
        &lt;Form :model="formRight" label-position="right" :label-width="100">
          &lt;Form-item label="标题">
            &lt;Input v-model="formRight.input1">&lt;/Input>
          &lt;/Form-item>
          &lt;Form-item label="标题名称">
            &lt;Input v-model="formRight.input2">&lt;/Input>
          &lt;/Form-item>
          &lt;Form-item label="标题名称对齐">
            &lt;Input v-model="formRight.input3">&lt;/Input>
          &lt;/Form-item>
        &lt;/Form>
        &lt;Form :model="formTop" label-position="top">
          &lt;Form-item label="标题">
            &lt;Input v-model="formTop.input1">&lt;/Input>
          &lt;/Form-item>
          &lt;Form-item label="标题名称">
            &lt;Input v-model="formTop.input2">&lt;/Input>
          &lt;/Form-item>
          &lt;Form-item label="标题名称对齐">
            &lt;Input v-model="formTop.input3">&lt;/Input>
          &lt;/Form-item>
        &lt;/Form>
        &lt;/template>`,
        subTitle1:'基础用法',
        "inputCode": `
            &lt;template>
               &lt;Form :model="formItem" :label-width="80">
            &lt;Form-item label="输入框" prop="name">
              &lt;Input v-model="formItem.input" placeholder="请输入">&lt;/Input>
            &lt;/Form-item>
            &lt;Form-item label="邮箱" prop="mail" style="margin-top: 20px">
              &lt;Input v-model="formItem.mail" error placeholder="请输入邮箱">&lt;/Input>
            &lt;/Form-item>
            &lt;Form-item label="城市" prop="city" style="margin-top: 20px">
              &lt;Select v-model="formItem.city" style="width: 200px" placeholder="请选择所在地">
                &lt;Option value="beijing">北京市&lt;/Option>
                &lt;Option value="shanghai">上海市&lt;/Option>
                &lt;Option value="shenzhen">深圳市&lt;/Option>
              &lt;/Select>
            &lt;/Form-item>
            &lt;Form-item label="选择日期" style="margin-top: 20px">
              &lt;Row>
                &lt;Col span="6">
                &lt;Form-item prop="date">
                  &lt;Date-picker type="date" placeholder="选择日期" v-model="formItem.date">&lt;/Date-picker>
                &lt;/Form-item>
                &lt;/Col>
              &lt;/Row>
            &lt;/Form-item>
            &lt;Form-item label="单选框" style="margin-top: 20px">
              &lt;Radio-group v-model="formItem.radio">
                &lt;Radio label="male">男&lt;/Radio>
                &lt;Radio label="female">女&lt;/Radio>
              &lt;/Radio-group>
            &lt;/Form-item>
            &lt;Form-item label="爱好" prop="interest" style="margin-top: 20px">
              &lt;Checkbox-group v-model="formItem.interest">
                &lt;Checkbox label="吃饭">&lt;/Checkbox>
                &lt;Checkbox label="睡觉">&lt;/Checkbox>
                &lt;Checkbox label="跑步">&lt;/Checkbox>
                &lt;Checkbox label="看电影">&lt;/Checkbox>
              &lt;/Checkbox-group>
            &lt;/Form-item>
            &lt;Form-item label="开关" prop="switch">
              &lt;i-Switch v-model="formItem.switch" size="large">
                &lt;span slot="open">开启&lt;/span>
                &lt;span slot="close">关闭&lt;/span>
              &lt;/i-Switch>
            &lt;/Form-item>
            &lt;Form-item label="滑块" prop="slider">
              &lt;Slider v-model="formItem.slider" range>&lt;/Slider>
            &lt;/Form-item>
            &lt;Form-item label="介绍" prop="desc" style="margin-top: 20px">
              &lt;Input v-model="formItem.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入...">&lt;/Input>
            &lt;/Form-item>
          &lt;/Form>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
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
</style>
