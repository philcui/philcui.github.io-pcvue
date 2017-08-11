<template>
  <article class="doc-alert-container">
    <h1>Layout 布局</h1>
    <h2>概述</h2>
    <p>
      布局和导航是产品的骨架，是页面的重要构成模式之一，是作为后续展开页面设计的基础，可以为产品奠定交互和视觉风格。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="Layout1">
      <demoTab :code="LayoutCode" :describeTitle="describeTitle">
        <div slot="sample">
          <div class="layout">
            <Menu mode="horizontal" theme="dark" active-name="1">
              <div class="layout-logo"></div>
              <div class="layout-nav">
                <Menu-item name="1">
                  <Icon type="ios-navigate"></Icon>
                  导航一
                </Menu-item>
                <Menu-item name="2">
                  <Icon type="ios-keypad"></Icon>
                  导航二
                </Menu-item>
                <Menu-item name="3">
                  <Icon type="ios-analytics"></Icon>
                  导航三
                </Menu-item>
                <Menu-item name="4">
                  <Icon type="ios-paper"></Icon>
                  导航四
                </Menu-item>
              </div>
            </Menu>
            <Menu mode="horizontal" active-name="1">
              <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
              </div>
            </Menu>
            <div class="layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
              </Breadcrumb>
            </div>
            <div class="layout-content">
              内容区域
            </div>
            <div class="layout-copy">
              Copyright © 2004-2016 远传公司保留所有权利
            </div>
          </div>
        </div>
        <div slot="describe-content">
          导航在顶部，有面包屑、正文的布局。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="Layout2">
      <demoTab :code="LayoutCode2" :describeTitle="describeTitle2">
        <div slot="sample">
          <div class="layout">
            <Menu mode="horizontal" theme="dark" active-name="1">
              <div class="layout-logo"></div>
              <div class="layout-nav">
                <Menu-item name="1">
                  <Icon type="ios-navigate"></Icon>
                  导航一
                </Menu-item>
                <Menu-item name="2">
                  <Icon type="ios-keypad"></Icon>
                  导航二
                </Menu-item>
                <Menu-item name="3">
                  <Icon type="ios-analytics"></Icon>
                  导航三
                </Menu-item>
                <Menu-item name="4">
                  <Icon type="ios-paper"></Icon>
                  导航四
                </Menu-item>
              </div>
            </Menu>
            <Menu mode="horizontal" active-name="1">
              <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
              </div>
            </Menu>
            <div class="layout-content">
              <Row>
                <i-col span="5">
                  <Menu active-name="1-2" width="auto" :open-names="['1']">
                    <Submenu name="1">
                      <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        导航一
                      </template>
                      <Menu-item name="1-1">选项 1</Menu-item>
                      <Menu-item name="1-2">选项 2</Menu-item>
                      <Menu-item name="1-3">选项 3</Menu-item>
                    </Submenu>
                    <Submenu name="2">
                      <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        导航二
                      </template>
                      <Menu-item name="2-1">选项 1</Menu-item>
                      <Menu-item name="2-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="3">
                      <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        导航三
                      </template>
                      <Menu-item name="3-1">选项 1</Menu-item>
                      <Menu-item name="3-2">选项 2</Menu-item>
                    </Submenu>
                  </Menu>
                </i-col>
                <i-col span="19">
                  <div class="layout-content-main">内容区域</div>
                </i-col>
              </Row>
            </div>
            <div class="layout-copy">
              Copyright © 2004-2016 远传公司保留所有权利
            </div>
          </div>
        </div>
        <div slot="describe-content">
          顶部导航并带有侧边栏。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="Layout3">
      <demoTab :code="LayoutCode3" :describeTitle="describeTitle3">
        <div slot="sample">
          <div class="layout3">
            <Row type="flex">
              <i-col span="5" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                  <div class="layout-logo-left"></div>
                  <Submenu name="1">
                    <template slot="title">
                      <Icon type="ios-navigate"></Icon>
                      导航一
                    </template>
                    <Menu-item name="1-1">选项 1</Menu-item>
                    <Menu-item name="1-2">选项 2</Menu-item>
                    <Menu-item name="1-3">选项 3</Menu-item>
                  </Submenu>
                  <Submenu name="2">
                    <template slot="title">
                      <Icon type="ios-keypad"></Icon>
                      导航二
                    </template>
                    <Menu-item name="2-1">选项 1</Menu-item>
                    <Menu-item name="2-2">选项 2</Menu-item>
                  </Submenu>
                  <Submenu name="3">
                    <template slot="title">
                      <Icon type="ios-analytics"></Icon>
                      导航三
                    </template>
                    <Menu-item name="3-1">选项 1</Menu-item>
                    <Menu-item name="3-2">选项 2</Menu-item>
                  </Submenu>
                </Menu>
              </i-col>
              <i-col span="19">
                <div class="layout-header"></div>
                <div class="layout-breadcrumb">
                  <Breadcrumb>
                    <Breadcrumb-item href="#">首页</Breadcrumb-item>
                    <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                    <Breadcrumb-item>某应用</Breadcrumb-item>
                  </Breadcrumb>
                </div>
                <div class="layout-content">
                  <div class="layout-content-main">内容区域</div>
                </div>
                <div class="layout-copy">
                  Copyright © 2004-2016 远传公司保留所有权利
                </div>
              </i-col>
            </Row>
          </div>
        </div>
        <div slot="describe-content">
          左右结构，侧边导航。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="Layout4">
      <demoTab :code="LayoutCode4" :describeTitle="describeTitle4">
        <div slot="sample">
          <div class="layout4">
            <div class="layout-ceiling">
              <div class="layout-ceiling-main">
                <a href="#">注册登录</a> |
                <a href="#">帮助中心</a> |
                <a href="#">安全中心</a> |
                <a href="#">服务大厅</a>
              </div>
            </div>
            <div class="layout-header">
              <div class="layout-logo"></div>
            </div>
            <div style="height: 200px"></div>
            <div class="layout-copy">
              Copyright © 2004-2016 远传公司保留所有权利
            </div>
          </div>
        </div>
        <div slot="describe-content">
          顶部辅助菜单。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="Layout5">
      <demoTab :code="LayoutCode5" :describeTitle="describeTitle5">
        <div slot="sample">
          <div class="layout4" :class="{'layout-hide-text': spanLeft < 5}">
            <Row type="flex">
              <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                  <div class="layout-logo-left"></div>
                  <Menu-item name="1">
                    <Icon type="ios-navigate" :size="iconSize"></Icon>
                    <span class="layout-text">选项 1</span>
                  </Menu-item>
                  <Menu-item name="2">
                    <Icon type="ios-keypad" :size="iconSize"></Icon>
                    <span class="layout-text">选项 2</span>
                  </Menu-item>
                  <Menu-item name="3">
                    <Icon type="ios-analytics" :size="iconSize"></Icon>
                    <span class="layout-text">选项 3</span>
                  </Menu-item>
                </Menu>
              </i-col>
              <i-col :span="spanRight">
                <div class="layout-header">
                  <i-button type="text" @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                  </i-button>
                </div>
                <div class="layout-breadcrumb">
                  <Breadcrumb>
                    <Breadcrumb-item href="#">首页</Breadcrumb-item>
                    <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                    <Breadcrumb-item>某应用</Breadcrumb-item>
                  </Breadcrumb>
                </div>
                <div class="layout-content">
                  <div class="layout-content-main">内容区域</div>
                </div>
                <div class="layout-copy">
                  Copyright © 2004-2016 远传公司保留所有权利
                </div>
              </i-col>
            </Row>
          </div>
        </div>
        <div slot="describe-content">
          左侧导航可以折叠。
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
        describeTitle: '顶部导航',
        describeTitle2: '顶部导航+侧边栏',
        describeTitle3: '侧边导航',
        describeTitle4: '吊顶 ',
        describeTitle5: '可收起展开的侧边导航 ',
        spanLeft: 5,
        spanRight: 19,
        LayoutCode: `&lt;style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
&lt;/style>
&lt;template>
    &lt;div class="layout">
        &lt;Menu mode="horizontal" theme="dark" active-name="1">
            &lt;div class="layout-logo">&lt;/div>
            &lt;div class="layout-nav">
                &lt;Menu-item name="1">
                    &lt;Icon type="ios-navigate">&lt;/Icon>
                    导航一
                &lt;/Menu-item>
                &lt;Menu-item name="2">
                    &lt;Icon type="ios-keypad">&lt;/Icon>
                    导航二
                &lt;/Menu-item>
                &lt;Menu-item name="3">
                    &lt;Icon type="ios-analytics">&lt;/Icon>
                    导航三
                &lt;/Menu-item>
                &lt;Menu-item name="4">
                    &lt;Icon type="ios-paper">&lt;/Icon>
                    导航四
                &lt;/Menu-item>
            &lt;/div>
        &lt;/Menu>
        &lt;Menu mode="horizontal" active-name="1">
            &lt;div class="layout-assistant">
                &lt;Menu-item name="1">二级导航&lt;/Menu-item>
                &lt;Menu-item name="2">二级导航&lt;/Menu-item>
                &lt;Menu-item name="3">二级导航&lt;/Menu-item>
            &lt;/div>
        &lt;/Menu>
        &lt;div class="layout-breadcrumb">
            &lt;Breadcrumb>
                &lt;Breadcrumb-item href="#">首页&lt;/Breadcrumb-item>
                &lt;Breadcrumb-item href="#">应用中心&lt;/Breadcrumb-item>
                &lt;Breadcrumb-item>某应用&lt;/Breadcrumb-item>
            &lt;/Breadcrumb>
        &lt;/div>
        &lt;div class="layout-content">
            内容区域
        &lt;/div>
        &lt;div class="layout-copy">
            Copyright © 2004-2016 远传公司保留所有权利
        &lt;/div>
    &lt;/div>
&lt;/template>
&lt;script>
    export default {

    }
&lt;/script>
        `,
        LayoutCode2:  `&lt;style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
&lt;/style>
&lt;template>
    &lt;div class="layout">
        &lt;Menu mode="horizontal" theme="dark" active-name="1">
            &lt;div class="layout-logo">&lt;/div>
            &lt;div class="layout-nav">
                &lt;Menu-item name="1">
                    &lt;Icon type="ios-navigate">&lt;/Icon>
                    导航一
                &lt;/Menu-item>
                &lt;Menu-item name="2">
                    &lt;Icon type="ios-keypad">&lt;/Icon>
                    导航二
                &lt;/Menu-item>
                &lt;Menu-item name="3">
                    &lt;Icon type="ios-analytics">&lt;/Icon>
                    导航三
                &lt;/Menu-item>
                &lt;Menu-item name="4">
                    &lt;Icon type="ios-paper">&lt;/Icon>
                    导航四
                &lt;/Menu-item>
            &lt;/div>
        &lt;/Menu>
        &lt;Menu mode="horizontal" active-name="1">
            &lt;div class="layout-assistant">
                &lt;Menu-item name="1">二级导航&lt;/Menu-item>
                &lt;Menu-item name="2">二级导航&lt;/Menu-item>
                &lt;Menu-item name="3">二级导航&lt;/Menu-item>
            &lt;/div>
        &lt;/Menu>
        &lt;div class="layout-content">
            &lt;Row>
                &lt;i-col span="5">
                    &lt;Menu active-name="1-2" width="auto" :open-names="['1']">
                        &lt;Submenu name="1">
                            &lt;template slot="title">
                                &lt;Icon type="ios-navigate">&lt;/Icon>
                                导航一
                            &lt;/template>
                            &lt;Menu-item name="1-1">选项 1&lt;/Menu-item>
                            &lt;Menu-item name="1-2">选项 2&lt;/Menu-item>
                            &lt;Menu-item name="1-3">选项 3&lt;/Menu-item>
                        &lt;/Submenu>
                        &lt;Submenu name="2">
                            &lt;template slot="title">
                                &lt;Icon type="ios-keypad">&lt;/Icon>
                                导航二
                            &lt;/template>
                            &lt;Menu-item name="2-1">选项 1&lt;/Menu-item>
                            &lt;Menu-item name="2-2">选项 2&lt;/Menu-item>
                        &lt;/Submenu>
                        &lt;Submenu name="3">
                            &lt;template slot="title">
                                &lt;Icon type="ios-analytics">&lt;/Icon>
                                导航三
                            &lt;/template>
                            &lt;Menu-item name="3-1">选项 1&lt;/Menu-item>
                            &lt;Menu-item name="3-2">选项 2&lt;/Menu-item>
                        &lt;/Submenu>
                    &lt;/Menu>
                &lt;/i-col>
                &lt;i-col span="19">
                    &lt;div class="layout-content-main">内容区域&lt;/div>
                &lt;/i-col>
            &lt;/Row>
        &lt;/div>
        &lt;div class="layout-copy">
            Copyright © 2004-2016 远传公司保留所有权利
        &lt;/div>
    &lt;/div>
&lt;/template>
&lt;script>
    export default {

    }
&lt;/script>
        `,
        LayoutCode3:  `&lt;style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
&lt;/style>
&lt;template>
    &lt;div class="layout">
        &lt;Row type="flex">
            &lt;i-col span="5" class="layout-menu-left">
                &lt;Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                    &lt;div class="layout-logo-left">&lt;/div>
                    &lt;Submenu name="1">
                        &lt;template slot="title">
                            &lt;Icon type="ios-navigate">&lt;/Icon>
                            导航一
                        &lt;/template>
                        &lt;Menu-item name="1-1">选项 1&lt;/Menu-item>
                        &lt;Menu-item name="1-2">选项 2&lt;/Menu-item>
                        &lt;Menu-item name="1-3">选项 3&lt;/Menu-item>
                    &lt;/Submenu>
                    &lt;Submenu name="2">
                        &lt;template slot="title">
                            &lt;Icon type="ios-keypad">&lt;/Icon>
                            导航二
                        &lt;/template>
                        &lt;Menu-item name="2-1">选项 1&lt;/Menu-item>
                        &lt;Menu-item name="2-2">选项 2&lt;/Menu-item>
                    &lt;/Submenu>
                    &lt;Submenu name="3">
                        &lt;template slot="title">
                            &lt;Icon type="ios-analytics">&lt;/Icon>
                            导航三
                        &lt;/template>
                        &lt;Menu-item name="3-1">选项 1&lt;/Menu-item>
                        &lt;Menu-item name="3-2">选项 2&lt;/Menu-item>
                    &lt;/Submenu>
                &lt;/Menu>
            &lt;/i-col>
            &lt;i-col span="19">
                &lt;div class="layout-header">&lt;/div>
                &lt;div class="layout-breadcrumb">
                    &lt;Breadcrumb>
                        &lt;Breadcrumb-item href="#">首页&lt;/Breadcrumb-item>
                        &lt;Breadcrumb-item href="#">应用中心&lt;/Breadcrumb-item>
                        &lt;Breadcrumb-item>某应用&lt;/Breadcrumb-item>
                    &lt;/Breadcrumb>
                &lt;/div>
                &lt;div class="layout-content">
                    &lt;div class="layout-content-main">内容区域&lt;/div>
                &lt;/div>
                &lt;div class="layout-copy">
                    Copyright © 2004-2016 远传公司保留所有权利
                &lt;/div>
            &lt;/i-col>
        &lt;/Row>
    &lt;/div>
&lt;/template>
&lt;script>
    export default {

    }
&lt;/script>
        `,
        LayoutCode4:  `&lt;style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
&lt;/style>
&lt;template>
    &lt;div class="layout">
        &lt;div class="layout-ceiling">
            &lt;div class="layout-ceiling-main">
                &lt;a href="#">注册登录&lt;/a> |
                &lt;a href="#">帮助中心&lt;/a> |
                &lt;a href="#">安全中心&lt;/a> |
                &lt;a href="#">服务大厅&lt;/a>
            &lt;/div>
        &lt;/div>
        &lt;div class="layout-header">
            &lt;div class="layout-logo">&lt;/div>
        &lt;/div>
        &lt;div style="height: 200px">&lt;/div>
        &lt;div class="layout-copy">
            Copyright © 2004-2016 远传公司保留所有权利
        &lt;/div>
    &lt;/div>
&lt;/template>
&lt;script>
    export default {

    }
&lt;/script>

        `,
        LayoutCode5:`&lt;style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
&lt;/style>
&lt;template>
    &lt;div class="layout" :class="{'layout-hide-text': spanLeft &lt; 5}">
        &lt;Row type="flex">
            &lt;i-col :span="spanLeft" class="layout-menu-left">
                &lt;Menu active-name="1" theme="dark" width="auto">
                    &lt;div class="layout-logo-left">&lt;/div>
                    &lt;Menu-item name="1">
                        &lt;Icon type="ios-navigate" :size="iconSize">&lt;/Icon>
                        &lt;span class="layout-text">选项 1&lt;/span>
                    &lt;/Menu-item>
                    &lt;Menu-item name="2">
                        &lt;Icon type="ios-keypad" :size="iconSize">&lt;/Icon>
                        &lt;span class="layout-text">选项 2&lt;/span>
                    &lt;/Menu-item>
                    &lt;Menu-item name="3">
                        &lt;Icon type="ios-analytics" :size="iconSize">&lt;/Icon>
                        &lt;span class="layout-text">选项 3&lt;/span>
                    &lt;/Menu-item>
                &lt;/Menu>
            &lt;/i-col>
            &lt;i-col :span="spanRight">
                &lt;div class="layout-header">
                    &lt;i-button type="text" @click="toggleClick">
                        &lt;Icon type="navicon" size="32">&lt;/Icon>
                    &lt;/i-button>
                &lt;/div>
                &lt;div class="layout-breadcrumb">
                    &lt;Breadcrumb>
                        &lt;Breadcrumb-item href="#">首页&lt;/Breadcrumb-item>
                        &lt;Breadcrumb-item href="#">应用中心&lt;/Breadcrumb-item>
                        &lt;Breadcrumb-item>某应用&lt;/Breadcrumb-item>
                    &lt;/Breadcrumb>
                &lt;/div>
                &lt;div class="layout-content">
                    &lt;div class="layout-content-main">内容区域&lt;/div>
                &lt;/div>
                &lt;div class="layout-copy">
                    Copyright © 2004-2016 远传公司保留所有权利
                &lt;/div>
            &lt;/i-col>
        &lt;/Row>
    &lt;/div>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
&lt;/script>`
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24;
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 5;
          this.spanRight = 19;
        }
      }
    }
  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }
  .layout3{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
  }
  .layout4{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
  }
  .layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-ceiling{
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
  }
  .layout-ceiling-main{
    float: right;
    margin-right: 15px;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
</style>
