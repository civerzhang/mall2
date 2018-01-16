var getDefQueryParam = function(tdxConf) {
  return $.extend({}, {}, {}, { "@POS": 0 });
}

var getCols = function(queryParams) {
  var cols = [
    { title: "除息日", field: "dividend_date" },
    { title: "分红日", field: "payment_date" },
    { title: "说明", field: "payment_plan" },
    // { title: "产品名称", field: "pro_name", subField: "pro_code", width: "50%", align: "left" },
    // { title: "单位净值", field: "nav", sort: true, width: "25%", format: ".4f" }
  ];
  return cols;
}

var sortClick = function(param, queryParam) {

  param["@POS"] = 0;

  /* 
    顶部栏目切换

    重新查询，排序字段 非12类型给 foot_field, 12类型给 qrnhsy
  */
  if(param["pro_type2"] && param["pro_type2"] != queryParam["pro_type2"]) {

    param["sortType"] = "2";
    if(param["pro_type2"] == "12") {
      param["sortField"] = "qrnhsy";
    }
    else {
      param["sortField"] = queryParam["foot_field"] || "rzf";
    }
  }

  /* 
    foot 栏变化

    如果排序字段不是单位净值，改变排序字段
  */
  else if(!param["sortField"] && queryParam["sortField"] != "nav") {
    param["sortField"] = param["foot_field"];
  }

  /* 
    列表顶部栏点击排序变化，也不需要什么变化
  */
  return $.extend({}, queryParam, param);
}

var mob_list_fhxx = {
  // top: {
  //   tplid: "mob-bar-tab",
  //   tabs: [
  //     { title: "股票型", param: { "pro_type2": "11", "pro_type1_in": "(1)" } },
  //     { title: "混合型", param: { "pro_type2": "14", "pro_type1_in": "(1)" } },
  //     { title: "债券型", param: { "pro_type2": "13", "pro_type1_in": "(1)" } },
  //     { title: "货币型", param: { "pro_type2": "12", "pro_type1_in": "(1)" } },
  //     { title: "其他基金", param: { "pro_type2": "16", "pro_type1_in": "(1)" } },
  //   ],
  //   split: {},
  //   localStorageKey: "jjlist0"
  // },
  body: {
    tplid: "mob-list-page",
    getCols: getCols,
    pageSize: 20,
    // urlParam: {
    //   OpenName: "产品详情",
    //   OpenUrl: "jjxq.html",
    //   queryParams: [
    //     { key: "pro_code", value: "pro_code" },
    //     { key: "pro_type1", value: "pro_type1"},
    //     { key: "pro_type2", value: "pro_type2"},
    //   ]
    // }
  },
  // foot: {
  //   tplid: "mob-bar-tab",
  //   toggleShow: toggleShow,
  //   tabs: [
  //     { title: "日", param: { "foot_field": "rzf" } },
  //     { title: "周", param: { "foot_field": "zzf" } },
  //     { title: "月", param: { "foot_field": "yzf" } },
  //     { title: "季", param: { "foot_field": "jzf" } },
  //     { title: "年", param: { "foot_field": "nzf" } },
  //     { title: "今年", param: { "foot_field": "jnzf" } },
  //   ],
  //   style: {
  //     borderTop: "1px solid #ddd",
  //     justifyContent: "space-around"
  //   },
  //   tabItemStyle: {
  //     "fontSize": "14px",
  //     "width": "50px",
  //     "height": "24px"
  //   },
  //   tabItemSelStyle: {
  //     "backgroundColor": "#4696F5",
  //     "color": "#fff",
  //     "border": "0",
  //     "borderRadius": "12px"
  //   },
  //   localStorageKey: "jjlist2"
  // },
  // sortClick: sortClick
}