var GetSendData = function(n, json) {
  
    var funcid;
    var ix = new IXContent();
  
    switch(n) {
  
      case 0:
        funcid = "HQ.CWServ.tdxzx_jyfunc";
        ix.Set("callno", "103");
        ix.Set("pro_code", json["pro_code"]);
        ix.Set("pro_type", json["pro_type2"]);
        ix.Set("pro_mm", "-6");
        break;
    }
  
    return [funcid, ix];
  }
  
var SetDataField = function(data, n, vm) {
  debugger;
  if(n == 0) {
    data = data.rows.reverse();
  }
  return data;
}