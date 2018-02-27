var mob_list_hqlc = {
  items: [
    {
      tplid: "mob-card-hqlc",
      index: 0,
      split: {},
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
      index: 6,
      split: {},
      title: "历史收益",
      cols:{
        "hbjj":[
          {
            head: "日期",
            field: "date"
          },
          {
            head: "七日年化",
            field: "qrnhsy"
          },
          {
            head: "万份收益",
            field: "wfsy"
          }
        ],
        "else":[
          {
            head: "日期",
            field: "date"
          },
          {
            head: "日涨跌幅",
            field: "navzzl"
          },
          {
            head: "单位净值",
            field: "nav"
          }
        ]
      }
    },
    {
      tplid: "mob-card-rules",
      title: "交易规则",
      split: {},
      items: [
        {
          head: "买入流程",
          lines: [["Ｔ日", "买入提交"], ["Ｔ+１", "确认份额，开始计算收益"], ["Ｔ+２", "查看收益"]],
          tips: ["Ｔ日申请，将按Ｔ日基金净值确认份额。份额确认当日，基金净值更新后即可查看首笔盈亏。确认后下一Ｔ日可卖出"]
        },
        {
          head: "普通取现流程",
          lines: [["Ｔ日", "卖出提交"], ["Ｔ日", "赎回份额确认"], ["Ｔ+１", "资金到账"]],
          tips: [
            "基金Ｔ日提交普通转出申请卖出后，Ｔ日日终赎回确认，Ｔ+１日即可在资金账户中查询到账资金",
            "基金Ｔ日快速转出卖出后，Ｔ日赎回确认，实时可在资金账户中查询到账资金"
          ]
        }
      ]

    },
    {
      tplid: "mob-list-jjxq",
      index: 1,
      split: {},
      bar: {
        icon: {
          style: {}
        },
        title: "产品档案"
      },
      lines: [
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
        }  },
        { title: "产品公告", urlParam: {
          "OpenName": "产品公告",
          "OpenUrl": "hqgg.html",
          "queryParams": [
            { key: "pro_code", value: "pro_code" }
          ]
        } }
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
}