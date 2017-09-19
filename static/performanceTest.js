window.addEventListener('load', function (e) {
  setTimeout(getInfo, 100)
}, false)
function getInfo () {
  let sitePerformance = {}
  sitePerformance.origin = location.origin
  try {
    // let navigationTimimg = performance.getEntriesByType('navigation')[0]
    let performanceTiming = performance.timing
    // DNS查询耗时
    // sitePerformance.dnsTime = performanceTiming.domainLookupEnd - performanceTiming.domainLookupStart
    // request请求耗时
    // sitePerformance.requestTime = performanceTiming.responseEnd-performanceTiming.requestStart
    sitePerformance.tcp = performanceTiming.connectEnd - performanceTiming.connectStart
    // response
    sitePerformance.response = performanceTiming.responseEnd - performanceTiming.requestStart
    // dom树解析时间()
    sitePerformance.domResolvingTime = performanceTiming.domComplete - performanceTiming.domLoading
    // sitePerformance.domResolvingTime = performanceTiming.domContentLoadedEventEnd-performanceTiming.domContentLoadedEventStart
    // domready时间
    sitePerformance.domreadyTime = performanceTiming.domContentLoadedEventEnd - performanceTiming.navigationStart
    // onload时间
    // sitePerformance.onloadTime = performanceTiming.loadEventEnd-performanceTiming.navigationStart
    // 白屏时间
    sitePerformance.whiteScreenTime = performanceTiming.domComplete - performanceTiming.navigationStart
    // 首屏时间
    sitePerformance.firstScreenTime = performanceTiming.domComplete - performanceTiming.navigationStart
    sitePerformance.children = {}
    // js请求个数
    let resources = performance.getEntriesByType('resource')
    console.table(resources)
    sitePerformance.children.script = {
      count: 0,
      duration: 0,
      items: []
    }
    sitePerformance.children.img = {
      count: 0,
      duration: 0,
      items: []
    }
    sitePerformance.children.css = {
      count: 0,
      duration: 0,
      items: []
    }
    sitePerformance.children.link = {
      count: 0,
      duration: 0,
      items: []
    }
    for (let i = 0; i < resources.length; i++) {
      let type = resources[i].initiatorType
      sitePerformance.children[type].count++
      sitePerformance.children[type].duration += resources[i].duration
      let item = {
        name: resources[i].name,
        duration: resources[i].duration
      }
      sitePerformance.children[type].items.push(item)
    }
    let string = JSON.stringify(sitePerformance)
    let img = new Image()
    img.src = 'http://10.0.8.206:3000/sendPerformance?performanceObject=' + string
    // console.log(sitePerformance.whiteScreenTime)
    // console.table(sitePerformance.children.script.items)
    // css请求个数
    // imgage请求个数
  } catch (error) {
    console.log(error.name)
  }
}
