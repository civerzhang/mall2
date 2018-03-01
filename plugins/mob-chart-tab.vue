<template>
  <div>
    <div v-if="dataNotEmpty" :style="boxStyle">
      <div :style="tabBarStyle">
        <div :style="tabStyle" v-for="(obj,index) in item.tabBar" v-bind:key="index">
          <span :style="getTabTextStyle(index)" v-on:click="getData(0,index,time,obj.value)">{{obj.title}}</span>
        </div>
      </div>
      <div :style="periodBarStyle">
        <div :style="getPeriodStyle(index)" v-for="(obj,index) in item.periodBar" v-bind:key="index" v-on:click="getData(1,index,obj.value)">
          <span>{{obj.title}}</span>
        </div>
      </div>
      <div id="tabChartBox" :style="chartBoxStyle" :v-bind="this.dates"></div>
    </div>

    <div v-else class="tdx-loading"></div>
    <mob-split 
        v-if="item.split"
        :item="item.split"
    />
  </div>
</template>
<script>
return {
  mounted: function() {
    let _search = location.search.substr(1).split("&");
    let result = {};
    for (let i in _search) {
      let param = _search[i].split("=");
      result[param[0]] = param[1];
    }
    this.urlParams = result;
    this.getData();
  },
  created: function() {},

  updated: function() {
    this.showData();
  },

  data: function() {
    return {
      urlParams: "",
      dataNotEmpty: false,
      dates: [],
      qrnhsys: [],
      wfsys: [],
      time: "-1",
      activeTab: "qrnhsy",
      tabNow1: 0,
      tabNow2: 0,
    };
  },

  methods: {

    getTabTextStyle: function(index) {

      let selStyle = {
        borderBottom: "2px solid #306CFF",
        color: "#306CFF"
      };
      let normalStyle = {
        display :"inline-block",
        width: "50%",
        padding: "0 0 12px 0",
      }

      if(this.tabNow1 ==index ) {
        return $.extend({}, normalStyle, selStyle);
      } else {
        return normalStyle;
      }
    },
    getPeriodStyle: function(index) {

      let selStyle = {
        color: "#306CFF"
      };
      let normalStyle = {
        textAlign: "center",
        width: "55px",
        height: "29px",
        lineHeight: "29px",
        marginLeft: "-1px",
        border: "1px solid #D6D6D6",
        zIndex: 1,
      }

      if(this.tabNow2 ==index ) {
        return $.extend({}, normalStyle, selStyle);
      } else {
        return normalStyle;
      }
    },

    getData: function(boo, index, time, type) {
      if (boo==0) {
        this.tabNow1 = index
      }else if(boo==1){
        this.tabNow2 = index
      }
      if (typeof time == "string" && time != "") {
        this.time = time;
      }
      if (typeof type == "string") {
        this.activeTab = type;
      }
      let that = this;
      let _params = [
        {
          callno: "103",
          pro_type: this.urlParams["pro_type2"],
          pro_code: this.urlParams["pro_code"],
          pro_mm: this.time
        }
      ];
      __hqCallTql.send("CWServ.tdxzx_jyfunc", _params, function(jsonData) {
        jsonData = FormatResult(jsonData);
        jsonData = jsonData.rows;
        that.dataNotEmpty = true;
        let a = [],
          b = [],
          c = [];
        jsonData.map(function(currentValue, index, array) {
          a.push(currentValue["date"]);
          b.push(Number(currentValue["qrnhsy"]));
          c.push(Number(currentValue["wfsy"]));
        });
        that.dates = a;
        that.qrnhsys = b;
        that.wfsys = c;
      });
    },
    showData: function() {
      let timeDes = { "-1": "一月", "-3": "一季", "-6": "半年", "-12": "一年" };
      let typeDes = { qrnhsy: "七日年化收益", wfsy: "万份收益" };
      let dataType = { qrnhsy: this.qrnhsys, wfsy: this.wfsys };
      let that = this;
      var chart = Highcharts.chart("tabChartBox", {
        credits: {
          enabled: false
        },
        title: {
          style: {
            display: "none"
          }
        },
        legend: {
          enabled: false
        },
        chart: {
          type: "area"
        },
        tooltip: {},
        subtitle: {
          y:250,
          text: "近" + timeDes[this.time] + typeDes[this.activeTab]
        },
        series: [
          {
            name: typeDes[this.activeTab],
            data: dataType[this.activeTab]
          }
        ],
        yAxis: {
          tickPositioner: function() {
            let myPositions = [];
            if (this.dataMax == this.dataMin) {
              return [this.dataMax - this.dataMax,this.dataMax,this.dataMax + this.dataMax];
            }

            let increment = (this.dataMax - this.dataMin) / 4;
            let tick = this.dataMin - increment;
            for (tick;tick - increment <= this.dataMax;tick += increment) {
              myPositions.push(tick);
            }
            return myPositions.map(x => x.toFixed(2));
          },
          labels: {
              formatter: function () {
                  return that.activeTab=="qrnhsy"?this.value + '%':this.value;
              },
              x: 35,
          },
          title: {
            style: {
              display: "none"
            }
          }
        },
        xAxis: {
          tickWidth: 0,
          categories: this.dates,
          labels: {
            formatter: function() {
              if (this.isFirst || this.isLast) {
                return this.value.slice(5);
              } else {
              }
            }
          },
          tickPositioner: function() {
            var positions = [0];
            positions.push(this.categories.length - 1);
            return positions;
          }
        },
        plotOptions: {
          series: {
            states: {
              hover: {
                halo: {size: 1}
              }
            },
            marker: {
              radius: 1,
              enabled: false,
            },
            fillColor: {
              linearGradient: [0, 0, 0, 250],
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [
                  1,
                  Highcharts.Color(Highcharts.getOptions().colors[0])
                    .setOpacity(0)
                    .get("rgba")
                ]
              ]
            }
          }
        }
      });
    }
  },
  computed: {
    boxStyle: function() {
      return {
        padding: "18px 0 0",
      };
    },
    tabBarStyle: function() {
      return {
        display: "flex",
        width: "100%",
        lineHeight: "21px",
        fontSize: "15px",
        borderBottom: "1px solid #D6D6D6"
      };
    },
    tabStyle: function() {
      return {
        width: "50%",
        textAlign: "center"
      };
    },
    periodBarStyle: function() {
      return {
        display: "flex",
        marginTop: "18px",
        width: "100%",
        webkitJustifyContent: "center", 
        fontSize: "14px",
      };
    },
    chartBoxStyle: function() {
      return {
        height: "274px",
        marginTop: "-13px",
      };
    }
  }
};
</script>
