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
            <Form-item label="选择器" prop="city">
              <Select v-model="formItem.city" style="width: 200px" placeholder="请选择所在地">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
              </Select>
            </Form-item>
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
            <Form-item label="单选框" >
              <Radio-group v-model="formItem.radio">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
              </Radio-group>
            </Form-item>
            <Form-item label="多选框" prop="checkbox">
              <Checkbox-group v-model="formItem.checkbox">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
              </Checkbox-group>
            </Form-item>
            <Form-item label="开关" prop="switch">
              <i-Switch v-model="formItem.switch" size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
              </i-Switch>
            </Form-item>
            <Form-item label="滑块" prop="slider">
              <Slider v-model="formItem.slider" range></Slider>
            </Form-item>
            <Form-item label="文本域" prop="desc" >
              <Input v-model="formItem.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
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
          <Form-item label="标题名称">
            <Input v-model="formLeft.input2"></Input>
          </Form-item>
          <Form-item label="标题名称对齐">
            <Input v-model="formLeft.input3"></Input>
          </Form-item>
        </i-Form>
        <i-Form :model="formRight" label-position="right" :label-width="100">
          <Form-item label="标题">
            <Input v-model="formRight.input1"></Input>
          </Form-item>
          <Form-item label="标题名称">
            <Input v-model="formRight.input2"></Input>
          </Form-item>
          <Form-item label="标题名称对齐">
            <Input v-model="formRight.input3"></Input>
          </Form-item>
        </i-Form>
        <i-Form :model="formTop" label-position="top">
          <Form-item label="标题">
            <Input v-model="formTop.input1"></Input>
          </Form-item>
          <Form-item label="标题名称">
            <Input v-model="formTop.input2"></Input>
          </Form-item>
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
  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab';
  export default{
    components: {
      demoTab
    },
    data(){
      return{
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
        subTitle2:'对齐方式',
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
<style lang="less">
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
