<template>
  <div class="layout" id="read" ref="read" @scroll="scrollEvent">
    <div class="menu-list" :style="{'top':scrollhigh + 'px'}">
      <div
        class="iteam-menu"
        v-for="(iteam,index) in meauData"
        :key="index"
        @click="godecltion(index)"
      >
        <img v-if="scrollhight==index" :src="iteam.imgaf" />
        <img v-else :src="iteam.imgbf" />
        <span :class="scrollhight==index?'scfont':''" style="margin-top:6px">{{iteam.name}}</span>
      </div>
      <!-- <div class="iteam-menu" @click="dialogFormVisible=true">
        <img src />
        <span>添加</span>
      </div>-->
    </div>
    <!-- 左侧的菜单 -->
    <div class="banner">
      <div class="swiper-container" id="swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide1">
            <!-- <img src="../assets/image/banner.png" alt srcset /> -->
          </div>
          <div class="swiper-slide swiper-slide2">
            <!-- <img src="../assets/image/banner1.png" alt srcset /> -->
          </div>
          <div class="swiper-slide swiper-slide3">
            <div class="positioning">
              <div class="font-left">
                <div
                  class="top-font ani"
                  swiper-animate-effect="bounceInLeft"
                  swiper-animate-duration="0.5s"
                >北斗导航打造位置服务产业链</div>
                <div
                  class="b-ft ani"
                  swiper-animate-effect="bounceInUp"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="0.3s"
                >
                  <span class="bottom-font">北斗定位技术</span>
                  <span class="bottom-line"></span>
                  <span class="bottom-font">硬盘保护技术</span>
                  <span class="bottom-line"></span>
                  <span class="bottom-font">断电保护技术</span>
                </div>
              </div>
              <div
                class="svg-right ani"
                swiper-animate-effect="bounceInRight"
                swiper-animate-duration="0.5s"
              >
                <svganmation></svganmation>
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper-slide4">
            <!-- <img src="../assets/image/banner3.png" alt srcset /> -->
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
    <!-- 回到顶部 -->
    <div class="scroll-top" @click="$refs.read.scrollTop=0">
      <img src="../assets/image/scroll.png" alt srcset />
    </div>
    <div class="content-box">
      <div class="center-box">
        <div class="contain-box" v-for="(iteam,index) in $myData" :key="index">
          <div class="tit">{{iteam.tit}}</div>
          <div class="imgmessage">
            <div
              class="imgcontent"
              v-for="(item,index) in iteam.list"
              :key="index"
              @click="godetail(item)"
            >
              <img :src="item.img" />
              <div class="titmsg">{{item.name}}</div>
              <div class="detail">{{item.detail}}</div>
              <div class="code">扫码查看</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div>金苏路200号F幢 邮编：201206 电话：021-2029-5000</div>
      <div style="margin-top:10px">上海产业技术研究院 版权所有 沪ICP备10020950</div>
      <!-- <div></div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "swiper";
import svganmation from "@/components/svganmation.vue";
export default {
  name: "layout",
  components: {
    svganmation
  },
  data() {
    return {
      scrollhigh: 718,
      ip:'',
      scrollhight: 0,
      mySwiper: null,
      dialogFormVisible: false,
      ruleForm: {
        name: "",
        srcurl1: "",
        srcurl2: "",
        region: ""
      },
      rules: {
        name: [{ required: true, message: "请输入行业名称", trigger: "blur" }],
        srcurl1: [
          { required: true, message: "请输入图片地址", trigger: "blur" }
        ],
        srcurl2: [
          { required: true, message: "请输入图片地址", trigger: "blur" }
        ]
      },
      contentData: [],
      meauData: [
        {
          name: "智慧公交",
          imgbf: require("../assets/image/icon_1_nor@3x.png"),
          imgaf: require("../assets/image/icon_1_pre@3x.png")
        },
        {
          name: "共享单车",
          imgbf: require("../assets/image/icon_2_nor@3x.png"),
          imgaf: require("../assets/image/icon_2_pre@3x.png")
        },
        {
          name: "位置服务",
          imgbf: require("../assets/image/icon_3_nor@3x.png"),
          imgaf: require("../assets/image/icon_3_pre@3x.png")
        },
        {
          name: "可视化平台",
          imgbf: require("../assets/image/icon_4_nor@3x.png"),
          imgaf: require("../assets/image/icon_4_pre@3x.png")
        },
        {
          name: "智慧灯联网",
          imgbf: require("../assets/image/icon_5_nor@3x.png"),
          imgaf: require("../assets/image/icon_5_pre@3x.png")
        },
        {
          name: "智慧环境",
          imgbf: require("../assets/image/icon_6_nor@3x.png"),
          imgaf: require("../assets/image/icon_6_pre@3x.png")
        },
        {
          name: "医疗行业",
          imgbf: require("../assets/image/icon_7_nor@3x.png"),
          imgaf: require("../assets/image/icon_7_pre@3x.png")
        },
        {
          name: "智慧建德",
          imgbf: require("../assets/image/icon_8_nor@3x.png"),
          imgaf: require("../assets/image/icon_8_pre@3x.png")
        },
        {
          name: "云逆行",
          imgbf: require("../assets/image/icon_9_nor@3x.png"),
          imgaf: require("../assets/image/icon_9_pre@3x.png")
        },
        {
          name: "其他",
          imgbf: require("../assets/image/icon_10_nor@3x.png"),
          imgaf: require("../assets/image/icon_10_pre@3x.png")
        }
      ]
    };
  },
  mounted() {
    this.initswiper();
    this.$refs.read.addEventListener("scroll", this.godecltion);
  },
  created() {
    console.log(returnCitySN["cip"]);
    console.log(returnCitySN["cname"]);
    if (process.env.VUE_APP_PAGE_URL == "http://106.14.198.128") {
      this.isn = 1;
    } else {
      this.isn = 2;
    }
    //  contentData.forEach((iteam,index)=>{
    //    iteam.list.forEach((item,index)=>{
    //      item.img=require(item.img)
    //    })
    //  })
    //  this.contentData=contentData
  },
  methods: {
    godetail(row) {
      if (process.env.VUE_APP_PAGE_URL == "http://106.14.198.128") {
        window.open(row.urln);
      } else {
        window.open(row.urlw);
      }
    },
    initswiper() {
      this.mySwiper = new Swiper("#swiper1", {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
        },
        on: {
          init: function() {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function() {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        }
      });
    },
    scrollEvent(e) {
      let num = e.srcElement.scrollTop;
      if (num > 1300 && num < 2500) {
        this.scrollhight = 1;
      } else if (num > 2500 && num < 3100) {
        this.scrollhight = 2;
      } else if (num > 3100 && num < 3700) {
        this.scrollhight = 3;
      } else if (num > 3700 && num < 4300) {
        this.scrollhight = 4;
      } else if (num > 4300 && num < 4700) {
        this.scrollhight = 5;
      } else if (num > 4400 && num < 5100) {
        this.scrollhight = 6;
      } else if (num > 5100 && num < 5500) {
        this.scrollhight = 7;
      } else if (num < 1300) {
        this.scrollhight = 0;
      } else if (num > 5500 && num < 6000) {
        this.scrollhight = 8;
      } else if (num > 6000) {
        this.scrollhight = 9;
      }
      this.scrollhigh = 718 - e.srcElement.scrollTop;
      if (this.scrollhigh < 126) {
        this.scrollhigh = 126;
      }
    },
    //去到指定的位置
    godecltion(index) {
      switch (index) {
        case 0:
          this.$refs.read.scrollTop = 592;
          break;
        case 1:
          this.$refs.read.scrollTop = 2100;
          break;
        case 2:
          this.$refs.read.scrollTop = 2600;
          break;
        case 3:
          this.$refs.read.scrollTop = 3400;
          break;
        case 4:
          this.$refs.read.scrollTop = 4100;
          break;
        case 5:
          this.$refs.read.scrollTop = 4500;
          break;
        case 6:
          this.$refs.read.scrollTop = 5000;
          break;
        case 7:
          this.$refs.read.scrollTop = 5400;
          break;
        case 8:
          this.$refs.read.scrollTop = 5800;
          break;
        case 9:
          this.$refs.read.scrollTop = 6400;
          break;
        default:
      }
    },
    //添加行业种类
    emptyform() {
      this.ruleForm = {
        name: "",
        srcurl1: "",
        srcurl2: ""
      };
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.meauData.push(this.ruleForm);
          this.dialogFormVisible = false;
          this.emptyform();
        } else {
          this.$message({
            message: "完善信息",
            type: "warning"
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: #f7f6fd;
  position: relative;
  .cash {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .banner {
    width: 100%;
    height: vh(592);
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        .swiper-slide {
          width: 100%;
          height: 100%;
          .positioning {
            width: 100%;
            height: vh(592);
            background: url("../assets/image/banner21.png") no-repeat;
            background-size: 100% 100%;
            display: flex;
            justify-content: space-between;
            .font-left {
              width: 50%;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-end;

              .top-font {
                color: #ffffff;
                text-align: left;
                font-size: vw(46);
                letter-spacing: vw(4);
                margin-bottom: vh(44);
                box-sizing: border-box;
                padding-left: vw(240);
                font-family: "微软雅黑";
              }
              .b-ft {
                text-align: left;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding-left: vw(240);
              }
              .bottom-font {
                color: #eeeeee;
                font-family: "微软雅黑";
                letter-spacing: vw(4);
                font-size: vw(22);
              }
              .bottom-line {
                display: inline-block;
                width: vw(3);
                height: vh(22);
                background: #eeeeee;
                margin: vw(10);
              }
            }
            .svg-right {
              flex: 1;
              text-align: left;
            }
          }
          // img{
          //   width: 100%;
          //   height: vh(592);
          // }
        }
        .swiper-slide1 {
          width: 100%;
          height: vh(592);
          background: url("../assets/image/banner.png");
          background-size: contain;
        }
        .swiper-slide2 {
          width: 100%;
          height: vh(592);
          background: url("../assets/image/banner1.png");
          background-size: contain;
        }
        .swiper-slide4 {
          width: 100%;
          height: vh(592);
          background: url("../assets/image/banner3.png");
          background-size: contain;
        }
      }
    }
  }
  .scroll-top {
    position: fixed;
    right: vw(100);
    bottom: 0px;
    cursor: pointer;
  }
  .foot {
    width: 100%;
    height: vh(237);
    background: #262626;
    font-size: vw(12);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content-box {
    width: 100%;
    // height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: vh(80);
    .center-box {
      width: vw(1200);
      .contain-box {
        display: flex;
        flex-direction: column;
        margin-top: vh(58);
        .tit {
          font-size: vw(28);
          color: #208cff;
        }
        .imgmessage {
          display: flex;
          flex-wrap: wrap;

          .imgcontent {
            width: vw(280);
            height: vh(330);
            background: rgba(255, 255, 255, 1);
            border-radius: vw(12);
            cursor: pointer;
            margin-right: vw(26);
            margin-top: vh(35);
            display: flex;
            flex-direction: column;
            text-align: left;
            overflow: hidden;
            img {
              width: 100%;
              height: vh(210);
            }
            .titmsg {
              font-size: 18px;
              color: #333333;
              box-sizing: border-box;
              padding-left: vw(15);
              margin: vw(10) 0;
            }
            .detail {
              width: 100%;
              height: vh(35);
              font-size: vw(14);
              color: #595959;
              box-sizing: border-box;
              padding-left: vw(15);
            }
            .code {
              margin-top: vh(12);
              box-sizing: border-box;
              padding-left: vw(15);
              font-size: vw(14);
              color: #8c8c8c;
            }
          }
          .imgcontent:nth-child(4),
          .imgcontent:nth-child(8),
          .imgcontent:nth-child(12),
          .imgcontent:nth-child(16),
          .imgcontent:nth-child(20) {
            margin-right: 0;
          }
          .imgcontent:hover {
            box-shadow: 0px 0px 12px 0px rgba(51, 51, 51, 0.3);
            margin-top: vh(27);
          }
        }
      }
      //   position: relative;
    }
  }
  .menu-list {
    position: fixed;
    left: vw(90);
    top: vh(718);
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 6px 0px rgba(51, 51, 51, 0.16);
    border-radius: vw(4);
    width: vw(72);
    .iteam-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: vw(14) 0px;
      cursor: pointer;
      .scfont {
        color: #208cff;
        font-size: vw(14);
      }
      img {
        width: vw(24);
        height: vw(24);
      }
      span {
        color: #8c8c8c;
        font-size: vw(13);
      }
    }
  }
}
.layout::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  width: 0 !important;
}
</style>

