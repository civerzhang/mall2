var GetSendData = function(n, json) {

  var funcid;
  var ix = new IXContent();

  switch(n) {

    case 0:
      funcid = "HQ.CWServ.tdxzx_jyfunc",
      ix.Set("callno", "106");
      ix.Set("pro_code", json["pro_code"]);
      localStorage["pro_code"] = json["pro_code"];
      break;
  }

  return [funcid, ix];
}

var SetDataField = function(data, n, vm) {

  if(n == 0) {
    data = data.rows;
  }
  debugger;
  data = data.map(function (obj) {
    obj["pro_code"] = localStorage["pro_code"]
    obj["A04"] = obj["A04"]+"至今";

    return obj;
  })

  return data;
}
