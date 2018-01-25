var mob_list_cd2 = {
  querys: [
    {
      tplid: "mob-bar-tab",
      tabs: [
        { title: "基金", param: { "funcid": "2616" } },
        { title: "银行理财", param: { "funcid": "2260" } }
      ],
      split: {},
      localStorageKey: "cdtab0",
      style: {
        justifyContent: "space-around"
      },
      tabItemStyle: {
        "fontSize": "14px",
        "width": "100%"
      },
      tabItemSelStyle: {
        "height": "38px"
      }
    }
  ],
  items: [
    {
      tplid: "mob-list",
      index: 0,
      card: {
        tplid: "mob-card-dd",
        split: {},
        style: {
          padding: "10px 15px"
        },
        title: {
          field: "392",
          style: {
            color: "#4696F5"
          }
        },
        urlParam: {
          OpenName: "基金详情",
          OpenUrl: "jjxq.html",
          queryParams: [
            { key: "code", value: "391" }
          ]
        },
        code: {
          field: "391",
          style: {}
        },
        opBtn: {
          name: "撤单",
          style: {
            color: "#4696F5",
            borderColor: "#4696F5"
          },
          // urlParam: {
          //   "OpenName": "基金赎回",
          //   "OpenType": "native",
          //   "OpenUrl": "jyhtml/works123/lcsc/otcsh.html?fromsc=1",
          //   "OpenParam": {
          //     UrlType: "Absolute",
          //     WebViewType: "JyURL"
          //   },
          //   queryParams: [
          //     { key: "F402", value: "391" }
          //   ]
          // }
          urlFunc: function(data) {
            console.log(data)
            // 查询账号信息
            __tdxgetAccList(function(user) {
              // ios应答处理
              if (typeof(user) == "string") {
                user = JSON.parse(user);
                let acc = user[0];
              } else {
                acc = JSON.parse(user);
              }
              cdConfirm(data,acc)
            })
          }
        },
        table: {
          style: {
            marginTop: "5px"
          },
          cols: [
            [
              {
                title: "委托数量：",
                field: "414"
              },
              {
                title: "交易金额：",
                field: "405"
              }
            ],
            [
              {
                title: "委托时间：",
                field: "143"
              },
              {
                title: "订单状态：",
                field: "147"
              }
            ],
            [
              {
                title: "业务名称：",
                field: "306"
              },
            ]
          ]
        }
      }
    },
  ]
}

var cdConfirm = function(data,acc) {
  let tips = "订单信息\n\n产品名称："+data["392"]+"\n委托数量："+data["414"]+"\n委托金额："+data["405"]+"\n\n确认撤单？"
  tdxConfirm({"content":tips,"ok":function () {
    cdHandler(data,acc)
    // alert("ok")
  }})
}


var cdHandler = function(data,acc){
  debugger;
  let type = localStorage["cdtab0"]||"0";
	let newstream = [{}];
	newstream[0] = {
		"120": acc["KHH"], //客户号
		"134": "#PASSWORD#", //密码
		"402": data["391"], //基金代码
		"405": data["405"], //交易金额
		"404": data["414"], //委托数量
		"146": data["146"], //委托编号
		// "142": d, //委托日期
		"113": "1", //操作标志
		"1217": "CANCLE", //备注
	}
	let paramAddin = {};
	paramAddin = {
		"0": {
			"113": "1", //操作标志
			"1217": "CANCLE", //备注
		},
		'1': {"397":"3"},
	}
	let entry = {
		'0': '2600',
		'1': '2102',
	}
	let __MyhqCallTql = new HQCallTql();
	__MyhqCallTql.objOptParam = {
		'sessionType': 'HQSession',
		"PasswordSessionID": "CurSession"
	};
	// alert(JSON.stringify(newstream[0]))
	__MyhqCallTql.send("TSTC." + entry[type], $.extend({},newstream[0], paramAddin[type]), function(data) {
		debugger;
		try {
			data = FormatResult(data);
		} catch (e) {
			alert(e);
		}

		if (data.ErrorCode == 0) {
			alert("撤单委托已提交，委托编号：" + data.rows[0]["146"]);
			window.location.href = window.location.href; // 刷新页面
		} else {
			alert(data.ErrorInfo);
		}
	});
}