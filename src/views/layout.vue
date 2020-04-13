<template>
  <div class="layout" id="read" ref="read" @scroll="scrollEvent">
    <!-- <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="cash"
    ></vue-particles>-->
    <!-- 添加行业种类
      <el-dialog title="添加行业种类"  :visible.sync="dialogFormVisible">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="行业名称" label-width="100px" prop="name">
              <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="图片地址1" label-width="100px" prop="srcurl1">
              <el-input v-model="ruleForm.srcurl1" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="图片地址2" label-width="100px" prop="srcurl2">
              <el-input v-model="ruleForm.srcurl2" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div>
        </el-dialog>
    <!-- 左侧的菜单-->
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
          <div class="swiper-slide">
            <img src="../assets/image/banner.png" alt srcset />
          </div>
          <div class="swiper-slide">
            <img src="../assets/image/banner1.png" alt srcset />
          </div>
          <div class="swiper-slide">
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
          <div class="swiper-slide">
            <img src="../assets/image/banner3.png" alt srcset />
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
    console.log(process.env.VUE_APP_PAGE_URL);
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
        window.open(row.urln)
      } else {
        window.open(row.urlw)
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
    height: 592px;
    // border: 1px solid red;
    // background: #36BAFF;
    // background: url("../assets/image/banner.png") no-repeat;
    // background-size: contain;
    .positioning {
      width: 100%;
      height: 592px;
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
          font-size: 46px;
          letter-spacing: 4px;
          margin-bottom: 44px;
          box-sizing: border-box;
          padding-left: 240px;
          font-family: "微软雅黑";
        }
        .b-ft {
          text-align: left;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding-left: 240px;
        }
        .bottom-font {
          color: #eeeeee;
          font-family: "微软雅黑";
          letter-spacing: 4px;
          font-size: 22px;
        }
        .bottom-line {
          display: inline-block;
          width: 3px;
          height: 22px;
          background: #eeeeee;
          margin: 10px;
        }
      }
      .svg-right {
        flex: 1;
        text-align: left;
      }
    }
  }
  .scroll-top {
    position: fixed;
    right: 100px;
    bottom: 0px;
    cursor: pointer;
  }
  .foot {
    width: 100%;
    height: 237px;
    background: #262626;
    font-size: 12px;
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
    margin-bottom: 80px;
    .center-box {
      width: 1200px;
      .contain-box {
        display: flex;
        flex-direction: column;
        margin-top: 58px;
        .tit {
          font-size: 28px;
          color: #208cff;
        }
        .imgmessage {
          display: flex;
          flex-wrap: wrap;

          .imgcontent {
            width: 280px;
            height: 330px;
            background: rgba(255, 255, 255, 1);
            border-radius: 12px;
            cursor: pointer;
            margin-right: 26px;
            margin-top: 35px;
            display: flex;
            flex-direction: column;
            text-align: left;
            overflow: hidden;
            img {
              width: 100%;
              height: 210px;
            }
            .titmsg {
              font-size: 18px;
              color: #333333;
              box-sizing: border-box;
              padding-left: 15px;
              margin: 10px 0;
            }
            .detail {
              width: 100%;
              height: 35px;
              font-size: 14px;
              color: #595959;
              box-sizing: border-box;
              padding-left: 15px;
            }
            .code {
              margin-top: 12px;
              box-sizing: border-box;
              padding-left: 15px;
              font-size: 14px;
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
            margin-top: 27px;
          }
        }
      }
      //   position: relative;
    }
  }
  .menu-list {
    position: fixed;
    left: 90px;
    top: 718px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 6px 0px rgba(51, 51, 51, 0.16);
    border-radius: 4px;
    width: 72px;
    .iteam-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 14px 0px;
      cursor: pointer;
      .scfont {
        color: #208cff;
        font-size: 14px;
      }
      img {
        width: 24px;
        height: 24px;
      }
      span {
        color: #8c8c8c;
        font-size: 13px;
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

