var GetSendData = function(n, json) {

  var funcid;
  var ix = new IXContent();

  switch(n) {

    case 0:
      funcid = "HQ.CWServ.tdxzx_jyfunc",
      ix.Set("callno", "107");
      ix.Set("pro_code", json["pro_code"]);
      break;
  }

  return [funcid, ix];
}

var SetDataField = function(data, n, vm) {

  if(n == 0) {
    data = data.rows[0];
  }
  vm.dataCache[1] = data;
  return data;
}