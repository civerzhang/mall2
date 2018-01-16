var GetSendData = function(n, json) {

  var funcid;
  var ix = new IXContent();

  switch(n) {

    case 0:
      funcid = "HQ.CWServ.tdxzx_jyfunc",
      ix.Set("callno", "102");
      ix.Set("pro_code", json["pro_code"]);
      ix.Set("@POS", json["@POS"] || "0");
      ix.Set("@COUNT", "20");
      break;
  }

  return [funcid, ix];
}

var SetDataField = function(data, n, vm) {

  if(n == 0) {
    data = data.rows;
  }

  return data;
}