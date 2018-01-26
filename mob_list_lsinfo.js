
var mob_list_lsinfo = {
  items: [
    {
      tplid: "mob-card-jj",
      index: 0,
      split: {},
      typeField: "pro_type2",
      cardItems: [
        {
          typeValue: ["12"],
          title: {
            field: "pro_name",
            style: {}
          },
          code: {
            field: "pro_code",
            style: {}
          },
          sy: {
            field: "qrnhsy",
            title: "七日年化收益",
            format: "2%"
          },
          cols: [
            { field: "qgje", title: "起购金额", format: ".0f", suffix: "元" },
            { field: "wfsy", title: "万份收益", format: ".4f" },
            { field: "risk_level_name", title: "风险等级" },
          ]
        },
        {
          title: {
            field: "pro_name",
            style: {}
          },
          code: {
            field: "pro_code",
            style: {}
          },
          sy: {
            field: "nav",
            title: "最新净值",
            format: ".4f"
          },
          cols: [
            { field: "yzf", title: "近一月涨跌", format: "2%" },
            { field: "jnzf", title: "今年以来涨幅", format: "2%" },
            { field: "nav-total", title: "累积净值", format: ".4f" }
          ]
        },
      ],
    },
    {
      tplid: "mob-chart",
      index: 3,
      split: {},
      chart: {
        title: function(data) {
          return data[0]["nav"] ? "单位净值" : "万份收益";
        },
        xAxis: "date",
        yAxis: function(data) {
          return data[0]["nav"] ? "nav" : "wfsy";
        }
      },
      chartBar: [
        { title: "一月", value: "-1" },
        { title: "一季", value: "-3" },
        { title: "半年", value: "-6" },
        { title: "一年", value: "-12" },
      ],
      chartBarSel: 0
    },
    {
      tplid: "mob-card-lsinfo",
      index: 5,
    },
    {
      tplid: "mob-list-jjxq",
      index: 1,
      split: {},
      bar: {
        icon: {
          style: {}
        },
        title: "基金简介"
      },
      lines: [
        { title: "基金类型", field: "investment_style" },
        { title: "风险等级", field: "risk_level_name" },
        { title: "起购金额", field: "qgje", format: ".0f", suffix: "元起购" },
        { title: "成立时间", field: "pro_begin_date" },
        { title: "交易状态", field: "pro_status_name" },
        { title: "分红信息", subTitle: "点击查看", urlParam: {
          "OpenName": "分红信息",
          "OpenUrl": "fhxx.html",
          "queryParams": [
            { key: "pro_code", value: "pro_code" }
          ]
        } },
        { title: "基金公司", field: "pro_manager", urlParam: {
          "OpenName": "基金公司",
          "OpenUrl": "gsxx.html",
          "queryParams": [
            { key: "pro_code", value: "pro_code" }
          ]
        }  },
        { title: "基金经理", field: "fund_manager", urlParam: {
          "OpenName": "基金经理",
          "OpenUrl": "jlxx.html",
          "queryParams": [
            { key: "pro_code", value: "pro_code" }
          ]
        }  }
      ],
      lineStyle: {
        borderBottom: "1px solid #ddd"
      },
      image: {
        url: "arrow.png",
        style: {}
      }
    },
    {
      tplid: "mob-chart-bar",
      index: 4,
      split: {},
      bar: {
        icon: {
          style: {
            backgroundColor: "#2E6BB1"
          }
        },
        title: "基金投资组合资产明细"
      },
      chart: {
        column: {
          title: ["股票占净比", "债券占净比", "回售占净比", "现金占净比"],
          xAxis: "date",
          yAxis: ["gp_zjzcb", "zq_zjzcb", "hs_zjzcb", "xj_zjzcb"]
        },
        line: {
          title: "净资产",
          xAxis: "date",
          yAxis: "jzc"
        },
        style: {}
      }
    },
    {
      tplid: "mob-list-jjxq",
      index: 2,
      split: {},
      bar: {
        icon: {
          style: {}
        },
        title: "相关协议"
      },
      lines: [
        { 
          title: "基金招募说明书", 
          urlParam: {
            "OpenName": "基金招募说明书",
            "OpenUrl": "fhxx.html",
            "queryParams": [
              { key: "url", value: "zms" }
            ],
            OpenParam: {
              UrlType: "Remote"
            },
            OpenType: __tdxMobSystem == "Android" ? "browser" : "native"
          } 
        },
        { 
          title: "基金合同", 
          urlParam: {
            "OpenName": "基金合同",
            "OpenUrl": "fhxx.html",
            "queryParams": [
              { key: "url", value: "ht" }
            ],
            "OpenParam": {
              UrlType: "Remote"
            },
            "OpenType": __tdxMobSystem == "Android" ? "browser" : "native"
          } 
        },
        { 
          title: "风险揭示书", 
          urlParam: {
            "OpenName": "风险揭示书",
            "OpenUrl": "fhxx.html",
            "queryParams": [
              { key: "url", value: "jss" }
            ],
            OpenParam: {
              UrlType: "Remote"
            },
            OpenType: __tdxMobSystem == "Android" ? "browser" : "native"
          } 
        },
        { 
          title: "证券投资基金投资者风险提示函", 
          urlParam: {
            "OpenName": "证券投资基金投资者风险提示函",
            "OpenUrl": "fhxx.html",
            "queryParams": [
              { key: "url", value: "tzzfxtsh" }
            ],
            "OpenParam": {
              UrlType: "Remote"
            }
          } 
        },
        { 
          title: "证券投资基金投资人权益须知", 
          urlParam: {
            "OpenName": "证券投资基金投资人权益须知",
            "OpenUrl": "fhxx.html",
            "queryParams": [
              { key: "url", value: "txrqyxz" }
            ],
            "OpenParam": {
              UrlType: "Remote"
            }
          } 
        }
      ],
      lineStyle: {
        borderBottom: "1px solid #ddd"
      },
      image: {
        url: "arrow.png",
        style: {}
      }
    }
  ],
  bottom: [
    {
      tplid: "mob-btn-single",
      index: 5,
      btn: getOpBtn
    }
  ]
}