<template>
  
    <div>
        
        <div :style="boxStyle" v-if="data" >
            <div :style="titleStyle">{{item.title}}</div>
            <div ref ="mainTxt" v-on:click="toggleMore" :style="introStyle">{{data.cutted}}</div>
            <img v-if="isTooLong" v-on:click="toggleMore" :style="imgStyle" src="./res/triangle.png"></img>
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
  mounted(){
    // alert("run")
  },
  updated(){
    // debugger;
    let text = this.$refs.mainTxt;
    if (text.offsetHeight>96) {
      // $("img").parent().children()[1].css("overflow", "hidden");

    }
    // alert("run")
    // console.log(text);
  },

  methods: {
    toggleMore: function(event) {
      if (this.data.cutted=="暂无简介信息") {
        return;
      }
      if (this.data.cutted.length == 90) {
        this.$set(this.data, "cutted", this.data[this.item.field]);
        $("img").css("transform", "rotateX(180deg)");
      }else{
        this.$set(this.data, "cutted", this.data[this.item.field].slice(0, 90));
        $("img").css("transform", "rotateX(0deg)");
      }
    },
  },


  computed: {
    isTooLong: function() {
      if (this.data[this.item.field]=="--") {
        this.data = Object.assign({}, this.data, {
          cutted:"暂无简介信息"
          });
        return false;
      }
      if (this.data[this.item.field].length > 90) {
        this.data = Object.assign({}, this.data, {
          cutted: this.data[this.item.field].slice(0, 90)
        });
        return true;
      } else {
        this.data = Object.assign({}, this.data, { cutted: this.data[this.item.field] });
        return false;
      }
    },

    boxStyle: function() {
      return {
        padding: "10px 20px"
      };
    },

    titleStyle: function() {
      return {
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: "40px"
      };
    },
    introStyle: function() {
      return {
        fontSize: "14px",
        lineHeight: "24px",
        textAlign: "justify",
        overflow: "hidden"
      };
    },
    cuttedStyle: function() {
      return {
        fontSize: "14px",
        lineHeight: "24px",
        textAlign: "justify",
        overflow: "hidden",
        maxHeight: "96px",
      };
    },
    imgStyle: function() {
      return {
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
      };
    }
  }
};
</script>
