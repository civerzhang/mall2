<template>
  <div>
    <div v-if="data" :style="boxStyle">      
      <div :style="titleStyle">{{item.title}}</div>
        <div :style="lineStyle">
          <div :style="col0Style">
            <div :style="headStyle">{{item.cols[typeHandler][0].head}}</div>
          </div>
          <div :style="col1Style">
            <div :style="headStyle">{{item.cols[typeHandler][1].head}}</div>
          </div>
          <div :style="col2Style">
            <div :style="headStyle">{{item.cols[typeHandler][2].head}}</div>
          </div>
        </div>
        <div :style="lineStyle" v-for="(obj,index) in data" v-bind:key="index">
          <div :style="col0Style">
            <div :style="row0Style">{{obj[item.cols[typeHandler][0].field]}}</div>
          </div>
          <div :style="col1Style">
            <div :style="getRow1Style(obj)">{{obj[item.cols[typeHandler][1].field]}}%</div>
          </div>
          <div :style="col2Style">
            <div :style="row2Style">{{obj[item.cols[typeHandler][2].field]}}</div>
          </div>
        </div>
      <div :style="tipStyle" v-on:click="jumpLsMore">
        查看更多
      </div>
    </div>

    <div v-else class="tdx-loading"></div>
    <mob-split 
        v-if="item.split"
        :item="item.split"
    />
  </div>
</template>
<script>
return{
  methods: {
    jumpLsMore: function(event) {
      // let urlStr = myType=="12"?"lsinfo.html"+location.search:"lsinfogp.html"+location.search;
      let urlStr ="lsinfo.html"+location.search;
      __webCallTql.send("tdxOpenUrl", {
        "OpenName": "历史收益",
        "OpenType": "native",
        "OpenUrl": urlStr,
        "OpenParam": {"UrlType":"Relative","WebViewType":"JyURL"}
      }, function() {})
    },
    getRow1Style: function (obj) {
      let a = myType=="12"?"qrnhsy":"navzzl";
      var color = this.getFieldColor(obj,a,1)
      console.log(obj)
      return {
        lineHeight: "20px",
        color: color,
        fontSize: "14px",
      };
    }
  },
  computed: {
    typeHandler: function () {
      if (myType=='12') {
        return "hbjj"
      } else {
        return "else"
      }
    },
    boxStyle: function() {
      return {
        padding: "10px 15px 0 15px",
      };
    },
    lineStyle: function() {
      return {
        display: "flex",
        height: "30px",
      };
    },
    titleStyle: function() {
      return {
        fontSize: "16px",
        // fontWeight: "bold",
        color: "#404040",
        height: "25px",
      };
    },
    col0Style: function() {
      return {
        width:"33%",
        textAlign:"left",
      };
    },
    col1Style: function() {
      return {
        width:"33%",
        textAlign:"center",
      };
    },
    col2Style: function() {
      return {
        width:"33%",
        textAlign:"right",
      };
    },
    headStyle: function() {
      return {
        lineHeight: "20px",
        fontSize: "14px",
        color: "#9D9D9D",
        borderBottom: "1px solid #D6D6D6",
      };
    },
    row0Style: function() {
      return {
        lineHeight: "20px",
        color: "#9D9D9D",
        fontSize: "14px",
      };
    },
    row2Style: function() {
      return {
        lineHeight: "20px",
        color: "#9D9D9D",
        fontSize: "14px",
      };
    },
    tipStyle: function() {
      return {
        height: "30px",
        textAlign:"center",
        color: "#306CFF",
      };
    },
  }

}
</script>
