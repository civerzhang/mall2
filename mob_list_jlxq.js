var mob_list_jlxq = {
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
      tplid: "mob-card-gsinfo",
      index: 0,
      split: {},
      title: {
        // text: "公司简介",
        field: "A01",
      },
      subTitle: "A04",
      field: "A11"
    },
    {
      tplid: "mob-list-jjxq",
      index: 0,
      // split: {},
      bar: {
        icon: {
          style: {}
        },
        title: "基本信息",
        style: {color: "red"}
      },
      lines: [
        {
          title: "姓名",
          field: "A01"
        },
        {
          title: "性别",
          field: "A02"
        },
        {
          title: "任职天数",
          field: "A05",
        },
        {
          title: "学历",
          field: "A06"
        },
        {
          title: "基金公司",
          field: "A07"
        },
        {
          title: "专业资格",
          field: "A09"
        },
      ],
      lineStyle: {
        borderBottom: "1px solid #ddd",
      },
      titleStyle: {
        color: "#404040",
        fontSize: "14px",
      },
      barStyle: {
        color: "red"
      }
    }
  ],
}