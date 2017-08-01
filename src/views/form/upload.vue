<template>
  <article class="doc-alert-container">
    <h1>Upload 上传</h1>
    <h2>概述</h2>
    <p>
      文件选择上传和拖拽上传控件。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="upload1">
      <demoTab :code="uploadCode" :describeTitle="describeTitle">
        <div slot="sample">
          <Upload action="//jsonplaceholder.typicode.com/posts/">
            <Button type="primary" icon="ios-cloud-upload-outline">上传</Button>
          </Upload>
        </div>
        <div slot="describe-content">
          最基本用法，点击上传，一次选择一个文件。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="upload2">
      <demoTab :code="uploadCode2" :describeTitle="describeTitle2">
        <div slot="sample">
          <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
            <Button type="primary" icon="ios-cloud-upload-outline">上传</Button>
          </Upload>
        </div>
        <div slot="describe-content">
          设置属性 multiple，可以选择多个文件。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="upload3">
      <demoTab :code="uploadCode3" :describeTitle="describeTitle3">
        <div slot="sample">
          <Upload :before-upload="handleUpload3"
            action="//jsonplaceholder.typicode.com/posts/">
            <Button type="primary" icon="ios-cloud-upload-outline">选择要上传文件的文件</Button>
          </Upload>
          <div v-if="uploadFile3 !== null">待上传文件：{{ uploadFile3.name }}
            <Button type="text" @click="upload3" :loading="loadingStatus3">{{ loadingStatus3 ? '上传中' : '点击上传' }}</Button>
          </div>
        </div>
        <div slot="describe-content">
          绑定 before-upload，并返回false，可以阻止默认上传流程，手动控制文件上传。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="upload4">
      <demoTab :code="uploadCode4" :describeTitle="describeTitle4">
        <div slot="sample">
          <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>点击或将文件拖拽到这里上传</p>
            </div>
          </Upload>
        </div>
        <div slot="describe-content">
          设置属性 type 为 drag，可以拖拽上传。
        </div>
      </demoTab>
    </section>
    <h2 id="uploadAPI">API</h2>
    <h3>Upload props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Upload methods</h3>
    <section class="demo">
      <Table border :columns="methodsColumns" :data="methodsData"></Table>
    </section>
    <h3>Upload slot</h3>
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
    data(){
      return {
        describeTitle: '点击上传',
        describeTitle2: '多选',
        describeTitle3:'手动上传',
        describeTitle4:'拖拽上传',
        uploadFile3: null,
        loadingStatus: false,
        uploadCode: `&lt;template>
        &lt;div>
             &lt;Upload action="//jsonplaceholder.typicode.com/posts/">
               &lt;Button type="primary" icon="ios-cloud-upload-outline">上传&lt;/Button>
             &lt;/Upload>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {

        }
   &lt;/script>
        `,
        uploadCode2: `&lt;template>
        &lt;div>
             &lt;Upload multiple action="//jsonplaceholder.typicode.com/posts/">
               &lt;Button type="primary" icon="ios-cloud-upload-outline">上传&lt;/Button>
             &lt;/Upload>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {

        }
   &lt;/script>
        `,
        uploadCode3:`&lt;template>
        &lt;div>
             &lt;Upload :before-upload="handleUpload3"
             action="//jsonplaceholder.typicode.com/posts/">
               &lt;Button type="primary" icon="ios-cloud-upload-outline">选择要上传文件的文件&lt;/Button>
             &lt;/Upload>
             &lt;div v-if="uploadFile3 !== null">待上传文件：{{ uploadFile3.name }}
                 &lt;Button type="text" @click="upload3" :loading="loadingStatus3">{{ loadingStatus3 ? '上传中' : '点击上传' }}&lt;/Button>
             &lt;/div>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {
         data () {
            return {
                file: null,
                loadingStatus: false
            }
         },
         methods: {
            handleUpload (file) {
                this.file = file;
                return false;
            },
            upload () {
                this.loadingStatus = true;
                setTimeout(() =&lt; {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('上传成功')
                }, 1500);
            }
         }
        }
   &lt;/script>
        `,
        uploadCode4:`&lt;template>
        &lt;div>
             &lt;Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
               &lt;div style="padding:20px 0px">
                  &lt;Icon type="ios-cloud-upload" size="52" style="color: #3399ff">&lt;/Icon>
                  &lt:p>点击或将文件拖拽到这里上传&lt:/p>
               &lt:/div>
             &lt;/Upload>
        &lt;/div>
  &lt;/template>
  &lt;script>
        export default {

        }
  &lt;/script>
        `,
        propsColumns:[
          {
            title: '属性',
            key: 'attribute',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          },
          {
            title: '类型',
            key: 'type',
          },
          {
            title: '默认值',
            key: 'default'
          }
        ],
        propsData:[
          {
            attribute: 'action',
            describe:'上传的地址，必填',
            type:"String",
            default:"-"
          },
          {
            attribute: 'headers',
            describe:'设置上传的请求头部',
            type:"Object",
            default:"{}"
          },
          {
            attribute: 'multiple',
            describe:'是否支持多选文件',
            type:"Boolean",
            default:"false"
          },
          {
            attribute: 'data',
            describe:'上传时附带的额外参数',
            type:"Object",
            default:"-"
          },
          {
            attribute: 'name',
            describe:'上传的文件字段名',
            type:"String",
            default:"file"
          },
          {
            attribute: 'with-credentials',
            describe:'支持发送 cookie 凭证信息',
            type:"Boolean",
            default:"false"
          },
          {
            attribute: 'show-upload-list',
            describe:'是否显示已上传文件列表',
            type:"Boolean",
            default:"true"
          },
          {
            attribute: 'type',
            describe:'上传控件的类型，可选值为 select（点击选择），drag（支持拖拽',
            type:"String",
            default:"select"
          },
          {
            attribute: 'accept',
            describe:'接受上传的文件类型',
            type:"String",
            default:"-"
          },
          {
            attribute: 'format',
            describe:'支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用',
            type:"Array",
            default:"[]"
          },
          {
            attribute: 'max-size',
            describe:'文件大小限制，单位 kb',
            type:"Number",
            default:"-"
          },
          {
            attribute: 'max-before-upload',
            describe:'上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传',
            type:"Function",
            default:"-"
          },
          {
            attribute: 'on-progress',
            describe:'文件上传时的钩子，返回字段为 event, file, fileList',
            type:"Function",
            default:"-"
          },
          {
            attribute: 'on-success',
            describe:'文件上传成功时的钩子，返回字段为 response, file, fileList',
            type:"Function",
            default:"-"
          },
          {
            attribute: 'on-error',
            describe:'文件上传失败时的钩子，返回字段为 error, file, fileList',
            type:"Function",
            default:"-"
          },
          {
            attribute: 'on-preview',
            describe:'点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据',
            type:"Function",
            default:"-"
          },
          {
            attribute: 'on-remove',
            describe:'文件列表移除文件时的钩子，返回字段为 file, fileList',
            type:"Function",
            default:"-"
          },
          {
            attribute: 'on-format-error',
            describe:'文件格式验证失败时的钩子，返回字段为 file, fileList',
            type:"Function",
            default:"-"
          },
          {
            attribute: 'on-exceeded-size',
            describe:'文件超出指定大小限制时的钩子，返回字段为 file, fileList',
            type:"Function",
            default:"-"
          },
          {
            attribute: 'default-file-list',
            describe:"默认已上传的文件列表，例如：<br/>" +
            "[<br/>"+
            "&nbsp;&nbsp;{<br/>"+
            "&nbsp;&nbsp;&nbsp;&nbsp;name: 'img1.jpg',<br/>"+
            "&nbsp;&nbsp;&nbsp;&nbsp;url: 'http://www.xxx.com/img1.jpg'<br/>"+
            "&nbsp;&nbsp;},<br/>"+
            "&nbsp;&nbsp;{<br/>"+
            "&nbsp;&nbsp;&nbsp;&nbsp;name: 'img2.jpg',<br/>"+
            "&nbsp;&nbsp;&nbsp;&nbsp;url: 'http://www.xxx.com/img2.jpg'<br/>"+
            "&nbsp;&nbsp;}<br/>"+
            "]",
            type:"Array",
            default:"[]"
          }
        ],
        methodsColumns:[
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
        methodsData:[
          {
            methodsName:'clearFiles',
            describe:'清空已上传的文件列表',
            params:'无'
          }
        ],
        slotColumns:[
          {
            title: '名称',
            key: 'slotName',
            width: '200px'
          },
          {
            title: '说明',
            key: 'describe'
          }
        ],
        slotData:[
          {
            slotName:'无',
            describe:'触发上传组件的控件'
          },
          {
            slotName:'tip',
            describe:'辅助提示内容'
          }
        ]
      }
    },
    methods: {
      handleUpload3 (file) {
        this.uploadFile3 = file;
        return false;
      },
      upload3 () {
        this.loadingStatus3 = true;
        setTimeout(() => {
          this.uploadFile3 = null;
          this.loadingStatus3 = false;
          this.$Message.success('上传成功')
        }, 1500);
      }
    }
  }

</script>
<style>

</style>
