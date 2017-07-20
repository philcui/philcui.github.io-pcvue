import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['../views/index.vue'],resolve)
const home = resolve => require(['../views/home.vue'],resolve)
const design = resolve => require(['../views/design.vue'],resolve)
const develop = resolve => require(['../views/develop.vue'],resolve)
const grid = resolve => require(['../views/basic/grid.vue'],resolve)
const font = resolve => require(['../views/basic/font.vue'],resolve)
const color = resolve => require(['../views/basic/color.vue'],resolve)
const layout = resolve => require(['../views/basic/layout.vue'],resolve)
const icon = resolve => require(['../views/basic/icon.vue'],resolve)
const button = resolve => require(['../views/basic/button.vue'],resolve)
const colorMatch = resolve => require(['../views/basic/colorMatch.vue'],resolve)
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
const badge = resolve => require(['../views/view/badge.vue'],resolve)
const card = resolve => require(['../views/view/card.vue'],resolve)
const carousel = resolve => require(['../views/view/carousel'],resolve)
const collapse = resolve => require(['../views/view/collapse.vue'],resolve)
const message = resolve => require(['../views/view/message.vue'],resolve)
const modal = resolve => require(['../views/view/modal.vue'],resolve)
const notice = resolve => require(['../views/view/notice.vue'],resolve)
const popTip = resolve => require(['../views/view/popTip.vue'],resolve)
const progress = resolve => require(['../views/view/progress.vue'],resolve)
const tag = resolve => require(['../views/view/tag.vue'],resolve)
const timeLine = resolve => require(['../views/view/timeLine.vue'],resolve)
const toolTip = resolve => require(['../views/view/toolTip.vue'],resolve)
const tree = resolve => require(['../views/view/tree.vue'],resolve)
const breadcrumb = resolve => require(['../views/navigation/breadcrumb.vue'],resolve)
const dropDown = resolve => require(['../views/navigation/dropDown.vue'],resolve)
const loadingBar = resolve => require(['../views/navigation/loadingBar.vue'],resolve)
const menu = resolve => require(['../views/navigation/menu.vue'],resolve)
const page = resolve => require(['../views/navigation/page.vue'],resolve)
const steps = resolve => require(['../views/navigation/steps.vue'],resolve)
const tabs = resolve => require(['../views/navigation/tabs.vue'],resolve)
const circle = resolve => require(['../views/chart/circle.vue'],resolve)
const affix = resolve => require(['../views/other/affix.vue'],resolve)
const backTop = resolve => require(['../views/other/backTop.vue'],resolve)
const spin = resolve => require(['../views/other/spin.vue'],resolve)
const install = resolve => require(['../views/leftTopMenu/install.vue'],resolve)
const international = resolve => require(['../views/leftTopMenu/international.vue'],resolve)
const overview = resolve => require(['../views/leftTopMenu/overview.vue'],resolve)
const quickStart = resolve => require(['../views/leftTopMenu/quickStart.vue'],resolve)
const theme = resolve => require(['../views/leftTopMenu/theme.vue'],resolve)
const updateLog = resolve => require(['../views/leftTopMenu/updateLog.vue'],resolve)
const footRack = resolve => require(['../views/topMenu/footRack.vue'],resolve)
const guide = resolve => require(['../views/topMenu/guide.vue'],resolve)
const assembly = resolve => require(['../views/topMenu/assembly.vue'],resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: index},
    {path: '/home',component: home,
      children:[
        {path: '/design',component: design,
          children:[
            {path: '/topMenu/footRack',component:footRack},
            {path: '/topMenu/guide',component:guide},
            {path: '/topMenu/assembly',component:assembly}
          ]
        },
        {path: '/develop',component: develop,
          children:[
            {path: '/basic/grid', component: grid},
            {path: '/basic/font', component: font},
            {path: '/basic/color', component: color},
            {path: '/basic/layout', component: layout},
            {path: '/basic/icon', component: color},
            {path: '/basic/button', component: layout},
            {path: '/basic/colorMatch',component : colorMatch},
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
            {path: '/view/alert', component:alert},
            {path: '/view/badge', component:badge},
            {path: '/view/card', component:card},
            {path: '/view/carousel', component:carousel},
            {path: '/view/collapse', component:collapse},
            {path: '/view/message', component:message},
            {path: '/view/modal', component:modal},
            {path: '/view/notice', component:notice},
            {path: '/view/popTip', component:popTip},
            {path: '/view/progress', component:progress},
            {path: '/view/tag', component:tag},
            {path: '/view/timeLine', component:timeLine},
            {path: '/view/toolTip', component:toolTip},
            {path: '/view/tree', component:tree},
            {path: '/navigation/breadcrumb', component:breadcrumb},
            {path: '/navigation/dropDown', component:dropDown},
            {path: '/navigation/loadingBar', component:loadingBar},
            {path: '/navigation/menu', component:menu},
            {path: '/navigation/page', component:page},
            {path: '/navigation/steps', component:steps},
            {path: '/navigation/tabs', component:tabs},
            {path: '/chart/circle', component:circle},
            {path: '/other/affix', component:affix},
            {path: '/other/backTop', component:backTop},
            {path: '/other/spin', component:spin},
            {path: '/leftTopMenu/install',component:install},
            {path: '/leftTopMenu/international',component:international},
            {path: '/leftTopMenu/overview',component:overview},
            {path: '/leftTopMenu/quickStart',component:quickStart},
            {path: '/leftTopMenu/theme',component:theme},
            {path: '/leftTopMenu/updateLog',component:updateLog},
          ]
        },
      ]},
  ]
})
