var GetSendData = function(n, json) {

  var funcid;
  var ix = new IXContent();

  switch(n) {

    case 0:
      funcid = "HQ.CWServ.tdxzx_jyfunc",
      ix.Set("callno", "106");
      ix.Set("pro_code", json["pro_code"]);
      break;
  }

  return [funcid, ix];
}

var SetDataField = function(data, n, vm) {

  if(n == 0) {
    data = data.rows;
    data = data.find(function (obj) {
      return obj["A01"] == decodeURI(getParams()["man_name"]);
    })
  }
  vm.dataCache[1] = data;
  return data;
}

var getParams = function () {
  var _search = location.search.substr(1).split('&');
  var result = {}
  for(var i in _search) {
    var param = _search[i].split('=');
    result[param[0]] = param[1];
  }
  return result;
}