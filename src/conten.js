import Vue from 'vue'
export default {
    install(Vue) {
        Vue.prototype.$myData = [
            {
                "tit": "智慧公交",
                "list": [
                    {
                        "name": "公交前台监控",
                        "img": require("./assets/image-1/image_1_1@2x.png"),
                        "urlw": "http://114.80.231.178:18080/newEbusMonitor/",
                        "urln": "http://114.80.231.178:18080/newEbusMonitor/",
                        "detail": "新一代支持多维信息发布的公交信息发布系统",
                        "isapp": true
                    },
                    {
                        "name": "公交后台配置",
                        "img": require("./assets/image-1/image_1_2@2x.png"),
                        "urlw": "http://114.80.231.178:18080/ebusManage/",
                        "urln": "http://114.80.231.178:18080/ebusManage/",
                        "detail": "电子站牌后台管理系统",
                        "isapp": true
                    },
                    {
                        "name": "誉益前台监控",
                        "urlw": "http://101.231.47.117:20100/newEbusMonitor",
                        "urln": "http://10.1.30.205:20100/newEbusMonitor",
                        "img": require("./assets/image-1/image_1_10@2x.png"),
                        "detail": "安装可追溯  故障可跟踪  维修可查询",
                        "isapp": true
                    },
                    {
                        "name": "誉益后台配置",
                        "urlw": "http://101.231.47.117:20100/ebusManage",
                        "urln": "http://10.1.30.205:20100/ebusManage",
                        "img": require("./assets/image-1/image_1_11@2x.png"),
                        "detail": "地图展示、数据分析、配置管理、公交公司、公交线路、公交站点、设备类型、…",
                        "isapp": true
                    },
                    {
                        "name": "LED公交导乘",
                        "img": require("./assets/image-1/image_1_3@2x.png"),
                        "urlw": "http://114.80.231.178:18080/BusScreen",
                        "urln": "http://114.80.231.178:18080/BusScreen",
                        "detail": "智能化的灯片生成系统，降低打印错误率，减少人工成本",
                        "isapp": true
                    },
                    {
                        "name": "多媒体信息发布",
                        "img": require("./assets/image-1/image_1_4@2x.png"),
                        "urlw": "http://114.80.231.178:18080/LuJiaZui/",
                        "urln": "http://114.80.231.178:18080/LuJiaZui/",
                        "detail": "设备远程控制、对终端设备的显示内容进行查询、系统权限管理等",
                        "isapp": true
                    },
                    {
                        "name": "公共设施智能制造云",
                        "urlw": "http://101.231.47.117:50067/InfoIssueVue",
                        "urln": "http://10.1.30.208:50067/InfoIssueVue208",
                        "img": require("./assets/image-1/image_1_9@2x.png"),
                        "detail": "智能化的灯片生成系统,降低打印错误率，减少人工成本",
                        "isapp": true
                    },
                    {
                        "name": "浦东公交服务云系统",
                        "urlw": "http://wx.58752222.com/BusCloud",
                        "urln": "http://wx.58752222.com/BusCloud",
                        "img": require("./assets/image-1/image_1_5@2x.png"),
                        "detail": "市民提供投诉建议，为公交监管人员提供监管服务，促进公交企业更好发展",
                        "isapp": true
                    },
                    {
                        "name": "站点采集系统",
                        "urlw": "http://106.14.188.44:8080/visit",
                        "urln": "http://10.1.30.205:20100/passengerflow/",
                        "img": require("./assets/image-1/image_1_7@2x.png"),
                        "detail": "地图展示、数据分析、配置管理、公交公司、公交线路、公交站点、设备类型、…",
                        "isapp": true
                    },
                    {
                        "name": "客流采集系统",
                        "urlw": "http://101.231.47.117:20100/passengerflow/",
                        "urln": "http://10.1.30.205:20100/passengerflow/",
                        "img": require("./assets/image-1/image_1_6@2x.png"),
                        "detail": "客流统计分析、全网站点热力图，线路信息管理，车辆信息管理",
                        "isapp": true
                    },
                   
                    {
                        "name": "公交补贴系统",
                        "urlw": "http://101.231.47.117:50045/BusSubsidy/",
                        "urln": "http://10.1.30.207:50045/BusSubsidy/",
                        "img": require("./assets/image-1/image_1_8@2x.png"),
                        "detail": "浦东新区公交基金优化线网项目补贴计算系统",
                        "isapp": true
                    },
                    {
                        "name": "电子站牌统计",
                        "urlw": "http://114.80.231.178:18080/Count/count/countView",
                        "urln": "http://114.80.231.178:18080/Count/count/countView",
                        "img": require("./assets/image-1/image_1_16@2x.png"),
                        "detail": "电子站牌统计",
                        "isapp": true
                    },
                    {
                        "name": "公交大脑",
                        "urlw": "http://101.231.47.117:50045/bs101New",
                        "urln": "http://10.1.30.207:50045/bs207New",
                        "img": require("./assets/image-1/image_1_13@2x.png"),
                        "detail": "公交大数据服务管理平台",
                        "isapp": true
                    },
                    {
                        "name": "公交集调系统",
                        "urlw": "http://114.80.178.12:9088",
                        "urln": "http://114.80.178.12:9088",
                        "img": require("./assets/image-1/image_1_14@2x.png"),
                        "detail": "公交集调管理系统平台",
                        "isapp": true
                    },
                    {
                        "name": "公交设施管理",
                        "urlw": "http://211.136.105.43/",
                        "urln": "http://211.136.105.43/",
                        "img": require("./assets/image-1/image_1_15@2x.png"),
                        "detail": "公交设施管理平台系统",
                        "isapp": true
                    },
                  
                  
                ]
            },
            {
                "tit": "共享单车",
                "list": [
                    {
                        "name": "（浦东）共享单车监管平台",
                        "urlw": "http://106.14.198.128:18181/websharebike/#/login",
                        "urln": "http://106.14.198.128:18181/websharebike/#/login",
                        "img": require("./assets/image-2/img1.png"),
                        "detail": "车辆分别，权限管理，围栏监督，监控报警，数据大盘",
                        "isapp": true
                    },
                    {
                        "name": "（浦东）共享单车展示平台",
                        "urlw": "http://106.14.198.128:18181/viewsharebike/#/",
                        "urln": "http://106.14.198.128:18181/viewsharebike/#/",
                        "img": require("./assets/image-2/img2.png"),
                        "detail": "共享单车协同管理平台（建交委）",
                        "isapp": true
                    },
                    {
                        "name": "徐汇区共享单车管理平台",
                        "urlw": "http://47.100.200.255:9090/",
                        "urln": "http://47.100.200.255:9090/",
                        "img": require("./assets/image-2/img3.png"),
                        "detail": "车辆分类，权限管理，围栏监督，监控报警，数据大盘",
                        "isapp": true
                    },
                    {
                        "name": "徐汇区共享单车展示平台",
                        "urlw": "http://106.14.198.128:18091/login",
                        "urln": "http://106.14.198.128:18091/login",
                        "img": require("./assets/image-2/img4.png"),
                        "detail": "车辆分类，权限管理，围栏监督，监控报警，数据大盘",
                        "isapp": true
                    },
                  
                  
                    
                   
                   
                ]
            },
            {
                "tit": "位置服务",
                "list": [
                    {
                        "name": "泊位信息管理系统",
                        "urlw": "http://180.167.88.154:38888/busparkmonitor/login",
                        "urln": "http://180.167.88.154:38888/busparkmonitor/login",
                        "img": require("./assets/image-2/img5.png"),
                        "detail": "监控中心，配置管理，系统管理，统计报表，系统发布设置",
                        "isapp": true
                    },
                    {
                        "name": "手环定位前台",
                        "urlw": "http://114.80.231.178:18888/smartbracelet/#!/user/login",
                        "urln": "http://114.80.231.178:18888/smartbracelet/#!/user/login",
                        "img": require("./assets/image-2/img6.png"),
                        "detail": "浦东新区公交基金优化线网项目补贴计算系统",
                        "isapp": true
                    },
                    {
                        "name": "手环定位后台",
                        "urlw": "http://114.80.231.178:10080/#!/user/login",
                        "urln": "http://114.80.231.178:10080/#!/user/login",
                        "img": require("./assets/image-2/img7.png"),
                        "detail": "智能化的灯片生成系统,降低打印错误率，减少人工成本",
                        "isapp": true
                    },
                    {
                        "name": "室内定位",
                        "urlw": "http://10.1.30.209:8080/qpe/map/?version=2",
                        "urln": "http://10.1.30.209:8080/qpe/map/?version=2",
                        "img": require("./assets/image-2/img8.png"),
                        "detail": "地图展示、数据分析、配置管理、公交公司、公交线路、公交站点、设备类型、…",
                        "isapp": true
                    },
                    {
                        "name": "车辆监控",
                        "urlw": "http://www.bd2012.com/bdgps/bd2012.html",
                        "urln": "http://www.bd2012.com/bdgps/bd2012.htm",
                        "img": require("./assets/image-2/img9.png"),
                        "detail": "车辆监控",
                        "isapp": true
                    },
                    {
                        "name": "光通信",
                        "urlw": "http://114.80.231.178:2016/",
                        "urln": "http://114.80.231.178:2016/",
                        "img": require("./assets/image-2/img10.png"),
                        "detail": "安装可追溯  故障可跟踪  维修可查询",
                        "isapp": true
                    },
                ]
            },
            {
                "tit": "可视化平台",
                "list": [
                    {
                        "name": "公交可视化",
                        "urlw": "http://101.231.47.116:50081/busVisual",
                        "urln": "http://10.1.30.210:50081/busVisual",
                        "img": require("./assets/image-1/image_1_17@2x.png"),
                        "detail": "公交可视化",
                        "isapp": true
                    },
                    {
                        "name": "货运可视化",
                        "urlw": "http://140.207.49.34:8888/",
                        "urln": "http://140.207.49.34:8888/",
                        "img": require("./assets/image-1/image_1_18@2x.png"),
                        "detail": "货运可视化",
                        "isapp": true
                    },
                    {
                        "name": "汽修可视化平台",
                        "urlw": "http://114.80.231.180:8088/newVehiclerepair/#/",
                        "urln": "http://114.80.231.180:8088/newVehiclerepair/#/",
                        "img": require("./assets/image-2/img11.png"),
                        "detail": "汽修可视化平台",
                        "isapp": true
                    },
                    {
                        "name": "春运可视化平台",
                        "img": require("./assets/image-2/img12.png"),
                        "urlw": "http://101.231.47.117:50045/webSpringfestival",
                        "urln": "http://10.1.30.207:50045/webSpringfestival",
                        "detail": "春运可视化平台",
                        "isapp": true
                    },
                    {
                        "name": "公交大数据",
                        "urlw": "http://101.231.47.117:50067/bsNew101/",
                        "urln": "http://10.1.30.208:50067/bsNew/",
                        "img": require("./assets/image-1/image_1_12@2x.png"),
                        "detail": "对接多个公交业务系统,动态数据分析, 多样化展示",
                        "isapp": true
                    },
                    {
                        "name": "公交大脑春运统计",
                        "img": require("./assets/image-2/img13.png"),
                        "urlw": "http://101.231.47.117:50067/SpringFestivalData",
                        "urln": "http://10.1.30.208:50067/SpringFestivalData",
                        "detail": "公交大脑春运统计",
                        "isapp": true
                    }
                ]
            },
            {
                "tit": "智慧灯联网",
                "list": [
                    {
                        "name": "试挂灯联网",
                        "img": require("./assets/image-2/img14.png"),
                        "urlw": "http://114.80.231.178:18888/lampnet/",
                        "urln": "http://114.80.231.178:18888/lampnet/",
                        "detail": "智慧灯联网控制管理平台",
                        "isapp": true
                    },
                    {
                        "name": "瓯江口灯联网",
                        "urlw": "http://112.16.28.219:38100/lampnet/",
                        "urln": "http://112.16.28.219:38100/lampnet/",
                        "img": require("./assets/image-2/img15.png"),
                        "detail": "瓯江口灯联网",
                        "isapp": true
                    }
                ]
            },
            {
                "tit": "智慧环境",
                "list": [
                    {
                        "name": "水质采样服务系统",
                        "urlw": "http://101.231.47.117:50045/monitor",
                        "urln": "http://10.1.30.207:50045/monitor/",
                        "img": require("./assets/image-2/img16.png"),
                        "detail": "车辆分别，权限管理，围栏监督，监控报警，数据大盘",
                        "isapp": true
                    },
                    {
                        "name": "智慧水情",
                        "img": require("./assets/image-2/img17.png"),
                        "urlw": "http://10.1.30.210:50081/wh/#/",
                        "urln": "http://10.1.30.210:50081/wh/#/",
                        "detail": "智慧水情",
                        "isapp": true
                    },
                    {
                        "name": "北蔡噪音监控屏幕配置",
                        "img": require("./assets/image-2/img18.png"),
                        "urlw": "http://220.248.3.42:4070/noisewatchsoket/#/",
                        "urln": "http://220.248.3.42:4070/noisewatchsoket/#/",
                        "detail": "北蔡噪音监控屏幕配置",
                        "isapp": true
                    },
                    {
                        "name": "康桥噪音监控屏幕配置",
                        "img": require("./assets/image-2/img19.png"),
                        "urlw": "http://220.248.104.194:4070/noisewatchsoket/#/",
                        "urln": "http://220.248.104.194:4070/noisewatchsoket/#/",
                        "detail": "康桥噪音监控屏幕配置",
                        "isapp": true
                    }
                ]
            },
          
            {
                "tit": "医疗行业",
                "list": [
                    {
                        "name": "JCI知识管理系统",
                        "img": require("./assets/image-2/img20.png"),
                        "urlw": "http://101.231.47.117:50045/JCI",
                        "urln": "http://10.1.30.207:50045/JCI",
                        "detail": "JCI知识管理系统",
                        "isapp": true
                    },
                    {
                        "name": "育儿机器人",
                        "urlw": "http://101.132.164.97:8888/robot/#/login",
                        "urln": "http://101.132.164.97:8888/robot/#/login",
                        "img": require("./assets/image-2/img21.png"),
                        "detail": "育儿机器人",
                        "isapp": true
                    }
                ]
            },
           
            {
                "tit": "智慧建德",
                "list": [
                    {
                        "name": "航空小镇5G展示平台",
                        "img": require("./assets/image-2/img22.png"),
                        "urlw": "http://47.100.200.255:9191/",
                        "urln": "http://47.100.200.255:9191/",
                        "detail": "航空小镇5G展示平台",
                        "isapp": true
                    },
                    {
                        "name": "建德电子站牌",
                        "img": require("./assets/image-2/img23.png"),
                        "urlw": "http://122.112.156.251:8091/#/login",
                        "urln": "http://122.112.156.251:8091/#/login",
                        "detail": "建德电子站牌",
                        "isapp": true
                    },
                    {
                        "name": "建德公交调度平台",
                        "img": require("./assets/image-2/img24.png"),
                        "urlw": "http://47.100.200.255:39998/IntelligentBusDispatchSystemTestPage.html",
                        "urln": "http://47.100.200.255:39998/IntelligentBusDispatchSystemTestPage.html",
                        "detail": "建德公交调度平台",
                        "isapp": true
                    }
                ]
            },
            {
                "tit": "云逆行",
                "list": [
                    {
                        "name": "公益平台(可视化)",
                        "img": require("./assets/image-2/img25.png"),
                        "urlw": "http://47.100.200.255:9955/visurView/",
                        "urln": "http://47.100.200.255:9955/visurView/",
                        "detail": "公益平台(可视化)",
                        "isapp": true
                    },
                    {
                        "name": "公益平台（手机端）",
                        "img": require("./assets/image-2/img26.png"),
                        "urlw": "https://rescue.sitiits.com/visur/#/",
                        "urln": "https://rescue.sitiits.com/visur/#/",
                        "detail": "公益平台（手机端）",
                        "isapp": true
                    },
                    {
                        "name": "人才对接平台(手机端)",
                        "img": require("./assets/image-2/img27.png"),
                        "urlw": "http://47.100.200.255:9966/visur/",
                        "urln": "http://47.100.200.255:9966/visur/",
                        "detail": "人才对接平台(手机端)",
                        "isapp": true
                    }
                ]
            },

            {
                "tit": "其他类型",
                "list": [
                    {
                        "name": "道路停车",
                        "urlw": "http://m.sitiits.com/roadStopWeb/#/statistics?key=b8c37e33defde51cf91e1e03e51657da",
                        "urln": "http://10.1.30.208/roadStopWeb/#/statistics?key=b8c37e33defde51cf91e1e03e51657da",
                        "img": require("./assets/image-2/img28.png"),
                        "detail": "道路停车管理系统…",
                        "isapp": true
                    },
                    {
                        "name": "三瑞销售管理系统",
                        "img": require("./assets/image-2/img29.png"),
                        "urlw": "http://101.231.47.117:20100/ChemicalSale/login;jsessionid=4970E334BA2615178B9AEEFE54569310",
                        "urln": "http://10.1.30.205:20100/ChemicalSale/login;jsessionid=4970E334BA2615178B9AEEFE54569310",
                        "detail": "三瑞销售管理系统",
                        "isapp": true
                    },
                   
                    {
                        "name": "摄像监控",
                        "img": require("./assets/image-2/img30.png"),
                        "urlw": "http://114.80.231.178:28888",
                        "urln": "http://114.80.231.178:28888",
                        "detail": "摄像监控",
                        "isapp": true
                    },
                    {
                        "name": "客户拜访",
                        "img": require("./assets/image-2/img31.png"),
                        "urlw": "http://101.231.47.116:18080/ClientVisits/",
                        "urln": "http://10.1.30.202:8080/ClientVisits/",
                        "detail": "客户拜访",
                        "isapp": true
                    },
                   
                ]
            }
        ];
    }

}
