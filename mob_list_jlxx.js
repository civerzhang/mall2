var mob_list_jlxx = {
  // A01	基金经理名称
  // A02	性别
  // A03	年龄
  // A04	任职日期
  // A05	任职天数
  // A06	学历
  // A07	基金公司名称
  // A08	现任基金数量
  // A09	专业技术资格
  // A10	现任基金名称
  // A11	简历
  items: [
    {
      tplid: "mob-list",
      index: 0,
      card: {
        tplid: "mob-card-dd",
        // split: {},
        style: {
          padding: "10px 15px",
          borderBottom: "1px solid #ddd",
        },
        title: {
          field: "A01",
          style: {
            color: "#4696F5"
          }
        },
        urlParam: {
          OpenName: "经理详情",
          OpenUrl: "jlxq.html",
          queryParams: [
            { key: "pro_code", value: "pro_code" }
          ]
        },
        code: {
          // field: "A06",
          style: {}
        },
        // opBtn: {
        //   name: "赎回",
        //   style: {
        //     color: "#4696F5",
        //     borderColor: "#4696F5"
        //   },
        //   urlParam: {
        //     "OpenName": "基金赎回",
        //     "OpenType": "native",
        //     "OpenUrl": "jyhtml/works123/lcsc/otcsh.html?fromsc=1",
        //     "OpenParam": {
        //       UrlType: "Absolute",
        //       WebViewType: "JyURL"
        //     },
        //     queryParams: [
        //       { key: "F402", value: "391" }
        //     ]
        //   }
        // },
        table: {
          style: {
            marginTop: "5px"
          },
          cols: [
            [
              {
                // title: "当前数量",
                field: "A02"
              },
              {
                // title: "可用份额",
                field: "A04"
              }
            ],
            [
              {
                // title: "浮动盈亏",
                field: "A06"
              },
              {
                // title: "技术资格",
                field: "A07"
              }
            ]
          ]
        }
      }
    }
  ],
}