import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['../views/index.vue'],resolve)
const home = resolve => require(['../views/home.vue'],resolve)
const grid = resolve => require(['../views/basic/grid.vue'],resolve)
const font = resolve => require(['../views/basic/font.vue'],resolve)
const color = resolve => require(['../views/basic/color.vue'],resolve)
const layout = resolve => require(['../views/basic/layout.vue'],resolve)
const icon = resolve => require(['../views/basic/icon.vue'],resolve)
const button = resolve => require(['../views/basic/button.vue'],resolve)
const cascsder = resolve => require(['../views/form/cascsder.vue'],resolve)
const checkbox = resolve => require(['../views/form/checkbox.vue'],resolve)
const datePicker = resolve => require(['../views/form/datePicker.vue'],resolve)
const form = resolve => require(['../views/form/form.vue'],resolve)
const input = resolve => require(['../views/form/input.vue'],resolve)
const inputNumber = resolve => require(['../views/form/inputNumber.vue'],resolve)
const radio = resolve => require(['../views/form/radio.vue'],resolve)
const rate = resolve => require(['../views/form/rate.vue'],resolve)
const select = resolve => require(['../views/form/select.vue'],resolve)
const slider = resolve => require(['../views/form/slider.vue'],resolve)
const switchMark = resolve => require(['../views/form/switchMark.vue'],resolve)
const table = resolve => require(['../views/form/table.vue'],resolve)
const timePicker = resolve => require(['../views/form/timePicker.vue'],resolve)
const transfer = resolve => require(['../views/form/transfer.vue'],resolve)
const upload = resolve => require(['../views/form/upload.vue'],resolve)
const alert = resolve => require(['../views/view/alert.vue'],resolve)
const circle = resolve => require(['../views/chart/circle.vue'],resolve)
const install = resolve => require(['../views/leftTopMenu/install.vue'],resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: index},
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {path: '/basic/grid', component: grid},
        {path: '/basic/font', component: font},
        {path: '/basic/color', component: color},
        {path: '/basic/layout', component: layout},
        {path: '/basic/icon', component: color},
        {path: '/basic/button', component: layout},
        {path: '/form/cascsder', component: cascsder},
        {path: '/form/checkbox', component: checkbox},
        {path: '/form/datePicker', component: datePicker},
        {path: '/form/form', component: form},
        {path: '/form/input', component: input},
        {path: '/form/inputNumber', component: inputNumber},
        {path: '/form/radio', component: radio},
        {path: '/form/rate', component: rate},
        {path: '/form/select', component: select},
        {path: '/form/slider', component: slider},
        {path: '/form/switchMark', component: switchMark},
        {path: '/form/table', component: table},
        {path: '/form/timePicker', component: timePicker},
        {path: '/form/transfer', component: transfer},
        {path: '/form/upload', component: upload},
        {path: '/chart/circle', component:circle},
        {path: '/view/alert', component:alert},
        {path: '/leftTopMenu/install',component:install}
      ]
    },
  ]
})
