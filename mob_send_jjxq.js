/* 
  一些全局变量
*/
var code,
    myType,
    xys = {
      "tzzfxtsh": "https://www.cczq.com/webapp/funds/tzzfxtsh.html",
      "txrqyxz": "https://www.cczq.com/webapp/funds/txrqyxz.html"
    };

var GetSendData = function(n, json) {

  var funcid;
  var ix = new IXContent();
  code = json["pro_code"];
  myType = json["pro_type2"];

  switch(n) {
    case 0:
      funcid = "HQ.TAS.product_info_query";
      ix.Set("pro_code", code);
      ix.Set("pro_type1", json["pro_type1"]);
      ix.Set("pro_type2", json["pro_type2"]);
      break;
    case 2:
      funcid = "HQ.CWServ.tdxzx_jyfunc";
      ix.Set("callno", "105");
      ix.Set("pro_code", code);
      ix.Set("pro_mm", "1");
      ix.Set("pro_type", "zms");
      break;
    case 3:
      funcid = "HQ.CWServ.tdxzx_jyfunc";
      ix.Set("callno", "103");
      ix.Set("pro_code", code);
      ix.Set("pro_type", json["pro_type2"]);
      ix.Set("pro_mm", json["pro_mm"]);
      break;
    case 4:
      // 这个类型的产品，不需要资产组合 
      if(json["pro_type2"] == "12") {
        break;
      }
      funcid = "HQ.CWServ.tdxzx_jyfunc";
      ix.Set("callno", "104");
      ix.Set("pro_code", code);
      ix.Set("pro_mm", "-12");
      break;
    case 6:  //index5用到按钮了
      funcid = "HQ.CWServ.tdxzx_jyfunc";
      ix.Set("callno", "103");
      ix.Set("pro_code", code);
      ix.Set("pro_type", json["pro_type2"]);
      ix.Set("pro_mm", "-1");
      break;
  }

  return [funcid, ix];
}

var SetDataField = function(data, n, vm) {

  if(n == 0) {
    var rowdata = data.rows && data.rows[0];
    rowdata["risk_level_name"] = rowdata["risk_level_name"].replace(/等级/, "");
    getMoreInfo(rowdata, vm);
    if (rowdata["pro_name"]!=undefined) {
      __tdxSetTopbarTitle({"Title":rowdata["pro_name"]})
    }
    data = undefined;
  }

  if(n == 2) {
    xys.zms = data.rows && data.rows[0] && data.rows[0].url;
    getXys("ht", vm);
    data = undefined;
  }

  if(n == 3) {
    data = data.rows;
  }

  if(n == 4) {
    data = data.rows;
  }
  if(n == 6) {
    data = data.rows.slice(-4).reverse();
  }

  return data;
}

var getXys = function(type, vm) {

  if(type == "end") {
    vm.dataCache[2] = xys;
    vm.$forceUpdate();
    return;
  }

  __hqCallTql.send("CWServ.tdxzx_jyfunc", [{
    "callno": "105",
    "pro_code": code,
    "pro_type": type,
    "pro_mm": "1"
  }], function(data) {

    data = FormatResult(data);
    if(data.ErrorCode != 0) {
      tdxAlert(data.ErrorInfo);
      return;
    }

    xys[type] = data.rows && data.rows[0] && data.rows[0].url;
    if(type == "ht") {
      getXys("jss", vm);
    }
    else if(type == "jss") {
      getXys("end", vm);
    }
  })
}

var getMoreInfo = function(row, vm) {

  __hqCallTql.send("CWServ.tdxzx_jyfunc", [{
    "callno": "100",
    "pro_code": code,
    "pro_type": ""
  }], function(data) {

    if (typeof data == 'string') {
      data = data.replace(/\r\n/ig, "<br>");
      // data = data.replace(/\s/g, "");
      // 转换类型防止空格被格式化
      data = JSON.parse(data);
    }
    let ai = data[1].indexOf("fund_manager")
    if (ai!=-1&&data[3][ai]!=undefined) {
      data[3][ai] = data[3][ai].replace(/\s/g,'、')
    }
    data = FormatResult(data);
    if(data.ErrorCode != 0) {
      tdxAlert(data.ErrorInfo);
      return;
    }

    $.extend(row, data.rows && data.rows[0]);
    vm.dataCache[0] = row;
    vm.dataCache[1] = row;
    vm.dataCache[5] = row;
    vm.$forceUpdate();
  });
}