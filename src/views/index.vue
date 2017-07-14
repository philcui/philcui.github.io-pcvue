<template>
  <div class="ind-wrap">
    <div class="ind-top-menu">
            <span class="top-title">
              UTRY DESIGN
            </span>
      <ul class="top-menu">
        <li @click="changeAct(1)">首页 <a :class="{active:index,activeA:aIndex}"></a></li>
        <li @click="changeAct(2)">设计 <a :class="{active:des,activeA:aDes}" ></a></li>
        <li @click="changeAct(3)">开发 <a :class="{active:dep,activeA:aDep}" ></a></li>
        <li @click="changeAct(4)">资源 <a :class="{active:res,activeA:aRes}" ></a></li>
      </ul>
    </div>
    <div class="ind-content">
      <div class="ind-top">
        <div class="ind-top-banner">
          <div class="banner-title">
            <span class="title-top">
              UtryDesign
            </span>
            <div class="title-bot">
              <p>一套专属远传的设计语言  </p>
              <p>致力于提升客户对远传产品的使用体验</p>
              <p>解放设计师、工程师的生产力</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ind-center">
        <div class="ind-center-top-content">
          <div class="top-content-left">
              <div class="font-content">
                <span class="fc-title">起于实践，终于解决问题 </span>
                <div class="fc-describe">
                  Utry Design来源于远传内部设计与开发实践，针对设计与开发脱节，生产力待提高，沟通协作低效等问题， 希望在这套设计语言的驱动下,
                  工程师与产品经理能够对设计理念有更深刻的理解，同事指导设计师提供明确的交互方案与视觉样式，加强项目各方沟通。
                </div>
              </div>
          </div>
          <div class="top-content-right" >
              <div class="cr-img"></div>
              <transition name="ue">
                <img v-model="showAnimation" v-show="show" :class="{crImgUeOut : out}" class="cr-img-ue" src="../assets/ue.png" />
              </transition>
            <transition name="pm">
                <img v-show="show" class="cr-img-pm" :class="{crImgPmOut : out}" src="../assets/pm.png" />
            </transition>
            <transition name="dlp">
                <img v-show="show" class="cr-img-dlp" :class="{crImgDlpOut : out}" src="../assets/dlp.png" />
            </transition>
          </div>
        </div>
        <div class="ind-center-bot-content">
          <div class="bot-content-left">
            <div class="cl-img" />
            <transition name="pen">
            <img class="img-pen" src="../assets/pen.png"/>
            </transition>
            <transition name="pencil">
            <img class="img-pencil" src="../assets/pencil.png"/>
            </transition>
            <transition name="rule">
            <img class="img-rule" src="../assets/rule.png"/>
            </transition>
            <transition name="search">
            <img class="img-search" src="../assets/search.png"/>
            </transition>
            <transition name="download">
            <img class="img-download" src="../assets/download.png"/>
            </transition>
          </div>
          <div class="bot-content-right">
            <div class="font-content">
              <span class="fc-title">各取所需的体验设计解决方案  </span>
              <div class="fc-describe">
                UtryDesign是一套内容丰富的语言，从设计原则、组件模式、协作流程到案例演示、资源下载.....&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                提供各种解决方法和指导,设计师、产品经理和工程师可以快速找到各自相关内容，有效提升工作效率
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ind-bottom">
        <span>提升客户体验，解放生产力，从查阅设计语言手册开始</span>
        <div class="bot-but"><Button @click="goHome" type="primary" style="width: 140px">马上查阅</Button></div>
      </div>
    </div>
  </div>
</template>
<script>
  export  default {
      data(){
          return {
            index:true,
            des:false,
            dep:false,
            res:false,
            show:false,
            out:false,
            aIndex:false,
            aDes:false,
            aDep:false,
            aRes:false,
          }
      },
      methods:{
        showAnimation(){
          let winH = window.innerHeight;
          let topH = document.body.scrollTop;
          let scH = winH * winH / 1700;
          if((scH + topH ) > 800){
            this.show = true;
            this.out = false;
          }else {
            this.out = true;
            this.show = false;
          }
          if(topH >= 725){
            this.aIndex=false;
            this.aDes=false;
            this.aDep=false;
            this.aRes=false;
            if (this.index) {
              this.aIndex = true;
            } else if (this.des) {
              this.aDes =true ;
            } else if (this.dep) {
              this.aDep=true;
            } else if (this.res) {
              this.aRes=true;
            }else {
              this.aIndex=true;
            }
          }else {
            this.aIndex=false;
            this.aDes=false;
            this.aDep=false;
            this.aRes=false;
          }
        },
        changeAct(val){
          this.index = false;
          this.des = false;
          this.dep = false;
          this.res = false;
          switch(val){
            case 1:
              this.index = true;
              this.$router.push("/");
              break;
            case 2:
              this.des = true;
              this.$router.push("/home");
              break;
            case 3:
              this.dep = true;
              this.$router.push("/");
              break;
            case 4:
              this.res = true;
              this.$router.push("/");
              break;
            default:
              this.$router.push("/");
          }
          this.showAnimation();
        },
        goHome(){
          this.$router.push("/home");
        },
      },
    mounted() {
      window.addEventListener('scroll', this.showAnimation)
    },
  }
</script>
<style lang="less" scoped>
  .ind-wrap {
    background-image: url("../assets/bg.png") ;
    background-position: center;
    background-repeat:no-repeat;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  .ind-top-menu {
    color: white;
    background-image: url("../assets/topMenu.bg.png");
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    height: 80px;
  .top-title {
    font-size: 24px;
  }
  .top-menu {
    font-size: 14px;
  li {
    margin-left: 45px;
    line-height: 80px;
    height: 80px;
    float: left;
    width: 38px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
  a {
    border:2px solid  rgba(200,200,200,0);
    border-radius: 3px;
    width: 40px;
  }
  .active {
    border: 2px solid white ;
  }
  .activeA {
    border: 2px solid #1156bf !important;
  }
  }
  }
  }
    .ind-content {
      width: 1200px;
      margin:0 auto;
      .ind-top {
        height: 800px;
        width: 100%;
        color: #ffffff;

        .ind-top-banner {
          height: 720px;
          width: 100%;
          .banner-title {
            width: 100%;
            height: 100%;
            padding-bottom: 65px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            .title-top {
              font-size: 48px;
              padding-bottom: 30px;
            }
            .title-bot {
              font-size: 24px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-end;
            }
          }
        }
      }
      .ind-center {
         width: 100%;
         height: 800px;
        .ind-center-top-content, .ind-center-bot-content {
          width: 100%;
          height: 400px;
          display: flex;
          justify-content: space-between;
            .top-content-left , .bot-content-right{
              height: 100%;
              width: 665px;
              .font-content {
                padding-top: 155px;
                  .fc-title {
                    font-size: 26px;
                    color: #23282e;
                  }
                  .fc-describe {
                    padding-top: 30px;
                    font-size: 14px;
                    color: #728093;
                  }

              }
            }
            .top-content-right , .bot-content-left{
              position: relative;
              width: 380px;
              height:100%;
                .cr-img{
                  width: 230px;
                  height: 230px;
                  margin-top: 132px;
                  margin-left: 92px;
                  background-image: url("../assets/bg-right.png");
                  background-repeat:no-repeat;
                }
                .cl-img {
                  width: 230px;
                  height: 230px;
                  margin-top: 77px;
                  margin-left: 70px;
                  background-image: url("../assets/bg-left.png");
                  background-repeat:no-repeat;
                }
                .cr-img-ue {
                  position: absolute;
                  top: 170px;
                }
                .cr-img-pm {
                  position: absolute;
                  right: 0;
                  top: 265px;
                }
                .cr-img-dlp {
                  position: absolute;
                  top: 80px;
                  right: 75px;
                }
                .img-pen ,.img-pencil ,.img-rule ,.img-search ,.img-download{
                  position: absolute;
                  top: 150px;
                  left: 170px;
                }
               .img-rule {
                 position: absolute;
                 top: 150px;
                 left: 130px;
               }
            }
        }
      }
      .ind-bottom {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 24px;
          color: #728093;
        }
      }
    }
  }

  .cr-img-ue {
    position:relative;
    animation:moveUe 1s alternate;
    -webkit-animation:moveUe 1s alternate;
  }
  .cr-img-pm {
    position:relative;
    animation:movePm 1.2s alternate;
    -webkit-animation:movePm 1.2s alternate;
  }
  .cr-img-dlp {
    position:relative;
    animation:moveDlp 1.5s alternate;
    -webkit-animation:moveDlp 1.5s alternate;
  }
  .crImgUeOut {
    position:relative;
    animation:moveUeOut 1.5s alternate;
    -webkit-animation:moveUeOut 1.5s alternate;
  }
  .crImgPmOut {
    position:relative;
    animation:moveDlpOut 1.2s alternate;
    -webkit-animation:moveDlpOut 1.2s alternate;
  }
  .crImgDlpOut {
    position:relative;
    animation:movePmOut 1s alternate;
    -webkit-animation:movePmOut 1s alternate;
  }
  .img-pen {
    position: absolute;
    amimation:movePen 6s linear infinite;
    -webkit-animation:movePen 6s linear infinite;
  }
  .img-search {
    position: absolute;
    amimation:moveSearch 6s linear infinite;
    -webkit-animation:moveSearch 6s linear  infinite;
  }
  .img-pencil {
    position: absolute;
    amimation:movePencil 6s linear infinite;
    -webkit-animation:movePencil 6s linear infinite;
  }
  .img-rule {
    position: absolute;
    amimation:moveRule 6s linear  infinite ;
    -webkit-animation:moveRule 6s linear  infinite;
  }
  .img-download {
    position: absolute;
    amimation:moveDownload 6s linear infinite;
    -webkit-animation:moveDownload 6s linear infinite;
  }
  @keyframes moveUe{
    from {right:-400px;}
    to {right:268px;}
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes moveUeOut{
    from {right:268px;}
    to {right:-400px;}
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes moveDlp{
    from {right:-400px;}
    to {right:75px;}
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes moveDlpOut{
    from {right:75px;}
    to {right:-400px;}
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes movePm{
    from {right:-400px;}
    to {right:0;}
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes movePmOut{
    from {right:0px;}
    to { right: -400px;}
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes movePen {
    from {transform: rotate(-144deg)  translate(120px) rotate(144deg); }
    to { transform: rotate(216deg) translate(120px) rotate(-216deg);}
  }
  @keyframes moveSearch {
    from { transform: rotate(-72deg)  translate(120px) rotate(72deg); }
    to {transform: rotate(288deg) translate(120px) rotate(-288deg);}
  }
  @keyframes movePencil {
     from { transform: rotate(0deg)  translate(120px) rotate(0deg);}
     to {transform: rotate(360deg) translate(120px) rotate(-360deg);}
  }
  @keyframes moveRule {
    from {transform: rotate(-216deg)  translate(120px) rotate(216deg);}
    to { transform: rotate(144deg) translate(120px) rotate(-144deg);}
  }
  @keyframes moveDownload {
     from {transform: rotate(-288deg)  translate(120px) rotate(288deg);}
     to {transform: rotate(72deg) translate(120px) rotate(-72deg);}
  }
</style>
