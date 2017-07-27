<template>
  <article class="doc-alert-container">
    <h1>Switch 开关</h1>
    <h2>概述</h2>
    <p>
      在两种状态间切换时用到的开关选择器。
    </p>
    <h2>示例代码</h2>
    <section class="demo">
    <demoTab :code="checkBoxCode" :describeTitle="describeTitle">
      <div slot="sample">
        <div class="flex">
          <i-switch v-model="m1">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </i-switch>
          {{ m1 }}

          <div class="pt">
            <div @click="m1 = !m1">toggle</div>
            <i-switch :disabled="disabled"></i-switch>
          </div>
        </div>
      </div>
      <div slot="describe-content">
        基本用法，状态切换时会触发事件。<br>
        disabled:禁用开关,默认为false。
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
        "describeTitle":'基本+禁用',
        m1: false,
        disabled:true,
        "checkBoxCode": `  &lt;template>
        &lt;div>
         &lt;i-switch v-model="m1">
            &lt;span slot="open">开&lt;/span>
            &lt;span slot="close">关&lt;/span>
            &lt;/i-switch>
            {{ m1 }}
            &lt;div @click="m1 = !m1">toggle&lt;/div>
            &lt;i-switch :disabled="disabled">&lt;/i-switch>
        &lt;/div>
  &lt;/template>
    &lt;script>
        export default {
            data () {
                return {
                    m1: false,
                    disabled:true,
                }
            },
            methods: {
              change (status) {
                console.log(status)
              }
          }
        }
    &lt;/script>
        `}
    },
    methods: {
      change (status) {
        console.log(status)
      }
    }
  }
</script>
<style>
.pt {
  padding-top: 30px;
}
</style>
