<template>
  <div class="layout" id="read" @scroll="scrollEvent">
      <!-- 左侧的菜单 -->
    <div class="menu-list" :style="{'top':scrollhigh + 'px'}">
      <div class="iteam-menu" v-for="iteam in meauData" :key="iteam.id">
        <img src alt srcset />
        <span>{{iteam.name}}</span>
      </div>
    </div>
    <!-- 左侧的菜单 -->
    <div class="banner"></div>
    <div class="content-box">
      <div class="center-box">
          <div class="contain-box" v-for="(iteam,index) in contentData" :key="index">
              <div class="tit">{{iteam.tit}}</div>
              <div class="imgmessage" >
                  <div class="imgcontent" v-for="(item,index) in iteam.list" :key="index">
                      <img src="" alt="" srcset="">
                      <div class="titmsg">{{item.name}}</div>
                      <div class="detail">{{item.detail}}</div>
                      <div class="code">扫码下载</div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div class="foot">
        <div>金苏路200号F幢   邮编：201206   电话：021-2029-5000</div>
        <div style="margin-top:10px">上海产业技术研究院   版权所有   沪ICP备10020950</div>
        <!-- <div></div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
let contentData = require('./conten.json')
export default {
  name: "layout",
  data() {
    return {
      scrollhigh: 718,
      contentData:[],
      meauData: [
        {
          id: 1,
          name: "公交行业"
          //   imgbf:require(""),
          //   imgaf:require(""),
        },
        {
          id: 2,
          name: "位置服务"
        },
        {
          id: 3,
          name: "灯联网"
        },
        {
          id: 4,
          name: "水文平台"
        },
        {
          id: 5,
          name: "汽修系统"
        },
        {
          id: 6,
          name: "医疗行业"
        },
        {
          id: 7,
          name: "春运保障"
        },
        {
          id: 8,
          name: "其他"
        }
      ]
    };
  },
  mounted() {
  },
  created(){
   console.log(contentData)
   this.contentData=contentData
  },
  methods: {
    scrollEvent(e) {
      this.scrollhigh = 718 - e.srcElement.scrollTop;
      if(this.scrollhigh<126){
          this.scrollhigh=126
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: #F7F6FD;
  .banner {
    width: 100%;
    height: 592px;
    background: #36BAFF;
  }
  .foot{
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
      .contain-box{
          display: flex;
          flex-direction: column;
          margin-top: 58px;
          .tit{
              font-size: 28px;
              color: #208CFF;
          }
        .imgmessage{
            display: flex;
            flex-wrap: wrap;

            .imgcontent{
                width:280px;
                height:330px;
                background:rgba(255,255,255,1);
                border-radius:12px;
                cursor: pointer;
                margin-right: 26px;
                margin-top: 35px;
                display: flex;
                flex-direction: column;
                text-align: left;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 210px;
                }
                .titmsg{
                    font-size: 18px;
                    color: #333333;
                    box-sizing: border-box;
                    padding-left: 15px;
                    margin: 10px 0;
                }
                .detail{
                    width: 100%;
                    height: 35px;
                    font-size: 14px;
                    color: #595959;
                    box-sizing: border-box;
                    padding-left: 15px;
                }
                .code{
                    margin-top: 12px;
                    box-sizing: border-box;
                    padding-left: 15px;
                    font-size: 14px;
                    color: #8C8C8C;
                }
            }
            .imgcontent:nth-child(4),.imgcontent:nth-child(8),.imgcontent:nth-child(12),.imgcontent:nth-child(16),.imgcontent:nth-child(20){
                margin-right: 0;
            }
            .imgcontent:hover{
                box-shadow:0px 0px 12px 0px rgba(51,51,51,0.3);
                margin-top:27px;
            }
        }

      }
      //   position: relative;
    }
  }
  .menu-list {
    position: fixed;
    left: 100px;
    top: 718px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 6px 0px rgba(51, 51, 51, 0.16);
    border-radius: 4px;
    .iteam-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 24px 10px;
      cursor: pointer;
      img {
        width: 22px;
        height: 22px;
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

