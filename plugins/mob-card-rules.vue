<template>
  <div>
    <div :style="boxStyle">      
      <div :style="titleStyle">{{item.title}}</div>
        <div v-for="(obj,index) in item.items" v-bind:key="index">
          <div v-if="index>0" :style="innerSplitStyle"></div>
          <div :style="headStyle">{{obj.head}}</div>
          <div :style="nodeBoxStyle">
            <div :style="getNodeStyle(obj)" v-for="(node,inode) in obj.lines" v-bind:key="inode">
              <div :style="subNode0Style">{{node[1]}}</div>
              <div><div :style="circleStyle"></div></div>
              <div :style="subNode1Style">{{node[0]}}</div>
            </div>
          </div>
            <div :style="hrStyle"></div>
          <div :style="tipsStyle">
            <ul>
              <li :style="tipStyle" v-for="(tip,itip) in obj.tips" v-bind:key="itip">
                <!-- <div><div :style="dianStyle"></div></div> -->
                <div><img :style="imgStyle" src="./res/Rectangle19.png"></div>
                <div>{{tip}}</div>
              </li>
            </ul>
          </div>
        </div>
    </div>

    <mob-split 
        v-if="item.split"
        :item="item.split"
    />
  </div>
</template>
<script>
return{
  data: function() {
    return {
      ptop: 10,       //组件内部上边距
      pbottom: 0,     //组件内部下边距
      pleft: 15,      //组件内部左边距
      pright: 15,     //组件内部右边距
      //绘图部分样式
      fontSize: 12,   //绘图文字大小
      circle: 8,      //圆直径
      line: 2         //横线高度
    }
  },
  methods: {
    getNodeStyle: function (obj) {
      let wid = obj.lines.length
      wid = 1/wid*100
      wid = wid +"%"
      return {
        width: wid,
        textAlign: "center",
        fontSize: this.fontSize+"px",
      }
    }
  },
  computed: {
    innerSplitStyle: function () {
      return {
        backgroundColor:"#EEEEEE",
        marginTop: "10px",
        marginBottom: "10px",
        height: "1px",
      }
    },
    boxStyle: function() {
      let a = this.ptop+"px "+this.pright+"px "+this.pbottom+"px "+this.pleft+"px"
      return {
        padding: a,
      }
    },
    titleStyle: function() {
      return {
        fontSize: "16px",
        // fontWeight: "bold",
        color: "#404040",
        height: "22px",
      }
    },
    headStyle: function() {
      return {
        lineHeight: "20px",
        color: "#404040",
        fontSize: "14px",
        margin: "0 0 10px 0"
      }
    },
    nodeBoxStyle: function() {
      return {
        display: "flex",
      }
    },
    subNode0Style: function() {
      return {
        height: this.fontSize*2+"px",
        color: "#404040",
      }
    },
    subNode1Style: function() {
      return {
        paddingTop: this.fontSize+"px",
        color: "#9D9D9D",
      }
    },
    hrStyle: function() {
      let wid = document.body.offsetWidth;
      wid = wid -this.pleft - this.pright;
      wid = wid +"px";
      let r = this.fontSize*2 +this.circle/2+this.line/2;
      r = "-" + r +"px"
      return {
        width: wid,
        height: this.line+"px",
        marginTop: r,
        marginLeft: "auto",
        zIndex:"1",
        backgroundColor: "#2E6BB1",
      }
    },
    circleStyle: function() {
      return {
        width: this.circle+"px",
        height: this.circle+"px",
        borderRadius: this.circle/2+"px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#2E6BB1",
      }
    },
    tipsStyle: function() {
      let r = this.fontSize*2 +this.circle/2+this.line/2;
      r = r+"px 0 10px 0"
      return {
        margin: r,
        paddingTop: "10px",
      }
    },
    tipStyle: function() {
      return {
        display: "flex",
        marginBottom: "10px",
        lineHeight: "17px",
        color: "#9D9D9D",
        fontSize: "12px",
      }
    },
    dianStyle: function() {
      return {
        width: "4px",
        height: "4px",
        margin: "3px 3px 0 0",
        backgroundColor: "#9D9D9D",
      }
    },
    imgStyle: function() {
      return {
        width: "19px",
        height: "19px",
        display: "block",
      }
    },
  }

}
</script>
