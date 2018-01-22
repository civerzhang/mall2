var mob_list_gsxx = {
  items: [
    {
      tplid: "mob-card-gsinfo",
      index: 1,
      split: {},
      title: {
        text: "公司简介",
        // field: "A01",
      },
      // subTitle: "A02",
      field: "A13"
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
      // A01	总经理
      // A02	注册地城市
      // A03	成立日期
      // A04	注册资本(万元)
      // A05	办公地址
      // A06	联系电话
      // A07	传真
      // A08	电子信箱
      // A09	注册地邮编
      // A10	网站
      // A11	法人代表
      // A12	主营业务
      // A13	机构简介
      lines: [
        {
          title: "成立时间",
          field: "A03"
        },
        {
          title: "法定代表",
          field: "A11"
        },
        {
          title: "总经理",
          field: "A01",
        },
        {
          title: "注册资金(万元)",
          field: "A04"
        },
        {
          title: "电话",
          field: "A06"
        },
        {
          title: "地址",
          field: "A05"
        },
      ],
      lineStyle: {
        // borderBottom: "1px solid #ddd",
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