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
        tplid: "mob-card-jjjl",
        // split: {},
        urlParam: {
          OpenName: "经理详情",
          OpenUrl: "jlxq.html",
          queryParams: [
            { key: "pro_code", value: "pro_code" },
            { key: "man_name", value: "A01" }
          ]
        },
        cols:[
          [
            {
              // text: "基金经理名称",
              field: "A01"
            },
            {
              // text: "任职日期",
              field: "A04"
            }
          ],
          [
            {
              // text: "学历",
              field: "A06"
            },
            {
              // text: "基金公司名称",
              field: "A07"
            }
          ]
        ]
      }
    }
  ],
}