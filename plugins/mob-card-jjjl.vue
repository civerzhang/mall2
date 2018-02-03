<template>
  <div :style="boxStyle" v-on:click="jumpJlxq">
    <div :style="col0Style">
      <div :style="row0Style">{{item.cols[0][0].field?data[item.cols[0][0].field]:item.cols[0][0].text}}</div>
      <div :style="row1Style">{{item.cols[0][1].field?data[item.cols[0][1].field]:item.cols[0][1].text}}</div>
    </div>
    <div :style="col1Style">
      <div :style="row0Style">{{item.cols[1][0].field?data[item.cols[1][0].field]:item.cols[1][0].text}}</div>
      <div :style="row1Style">{{item.cols[1][1].field?data[item.cols[1][1].field]:item.cols[1][1].text}}</div>
    </div>
    <div :style="colImgStyle">
      <img  :style="imgStyle" src="./res/arrow.png"></img>
    </div>

    <mob-split v-if="item.split" :item="item.split" />
  </div>
</template>

<script>
return {
  mounted(){
    
  },
  updated(){
    
  },

  methods: {
    jumpJlxq: function(event) {
      let myUrlParam = this.item.urlParam.queryParams,
          urlStr = "?",
          sys = tdxCheckMobSys(),
          urlType = {
            "Android": "JyURL",
            "IOS": "LocalURL"
          };
      for (let i = 0; i < myUrlParam.length; i++) {
        urlStr += myUrlParam[i].key+"="+this.data[myUrlParam[i].value];
        urlStr += "&";
      }

      __webCallTql.send("tdxOpenUrl", {
        "OpenName": this.item.urlParam.OpenName,
        "OpenType": "native",
        "OpenUrl": this.item.urlParam.OpenUrl+""+urlStr,
        "OpenParam": {"UrlType":"Relative","WebViewType":urlType[sys]}
      }, function() {})
    },
    
  },

  computed: {
    boxStyle: function() {
      return {
        padding: "25px 20px",
        borderBottom: "1px solid #ddd",
        display: "flex"
      };
    },
    colImgStyle: function() {
      return {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      };
    },
    imgStyle: function() {
      return {
        width: "16px",
        height: "16px",
      };
    },
    col0Style: function() {
      return {
        width:"50%",
      };
    },
    col1Style: function() {
      return {
        width:"50%",
      };
    },
    row0Style: function() {
      return {
        lineHeight: "22px",
        color: "#404040",
        fontSize: "16px",
      };
    },
    row1Style: function() {
      return {
        lineHeight: "20px",
        color: "#9D9D9D",
        fontSize: "14px",
      };
    },

  }
};
</script>
