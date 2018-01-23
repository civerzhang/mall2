var getDefQueryParam = function(tdxConf) {

  var param = {};
  tdxConf.querys.map(function(query) {
    var sel = localStorage[query.localStorageKey] || 0;
    $.extend(param, query.tabs[sel].param);
  });

  console.log(param);
  return param;
}

var GetSendData = function(n, json) {
  
  var funcid;
  var ix = new IXContent();

  switch(n) {

    case 0:
      funcid = "FW2.TSTC." + json["funcid"];
      if (json["funcid"]=="2616") {
        //基金
        ix.Set("113",  "1"); //操作标志
        ix.Set("234",  "1"); //类型
      }else if (json["funcid"]=="2260") {
        // 理财
        ix.Set("113",  "2"); //操作标志
      }
      break;
  }

  return [funcid, ix];
}

var SetDataField = function(data, n, vm) {
  debugger;
  if(n == 0) {
    data = data.rows;

  }

  return data;
}