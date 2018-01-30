var myType="",cols=[];
var getParams = function () {
  var _search = location.search.substr(1).split('&');
  var result = {}
  for(var i in _search) {
    var param = _search[i].split('=');
    result[param[0]] = param[1];
  }
  return result;
}

var getCols = function() {
  myType = getParams()["pro_type2"];
  // 货币型
  if(myType == "12") {
    cols = [
      {title: "日期",field: "date",align: "left"},
      {title: "七日年化",field: "qrnhsy",format: "2%"},
      {title: "万份收益",field: "wfsy",align: "right"},
    ];
  }else {
    cols = [
      {title: "日期",field: "date",align: "left"},
      {title: "日涨跌幅",field: "navzzl",format: "2%"},
      {title: "单位净值",field: "nav",align: "right"},
    ]
  }
}
getCols();
var mob_list_lsinfo = {
  items: [{
    index: 0,
    tplid: "mob-list-page",
    // getCols: getCols,
    simpleList: 1,
    cols: cols,
    pageSize: 20,
  }],
}
