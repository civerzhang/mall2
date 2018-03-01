<template>
  <div>
    
    <div v-if="data" :style="nodeBoxStyle">
      <div :style="nodeStyle">
        <div :style="subNodeStyle1">七日年化收益率</div>
        <div :style="subNodeStyle2">{{getQrnhsy()}}％</div>
        <div :style="subNodeStyle3">
          <div :style="typeStyle"><span :style="boxedStyle">{{data.pro_type2_name}}</span></div>
          <div :style="riskStyle"><span :style="boxedStyle">{{data.risk_level_name}}</span></div>
        </div>
      </div>
      <div :style="nodeStyle">
        <div :style="subNodeStyle1">万份收益（{{this.updateDate}}更新）</div>
        <div :style="subNodeStyle22">{{data.wfsy}}</div>
        <div :style="subNodeStyle3"></div>
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
  data: function() {
    let months = {"0":"01","1":"02","2":"03","3":"04","4":"05","5":"06","6":"07","7":"08","8":"09","9":"10","10":"11","11":"12"};
    let myDate = new Date();
    let _month = myDate.getMonth();
    _month = months[_month];
    let _date = myDate.getDate();
    _date = Number(_date);
    _date = _date-1;
    return {
      updateDate:_month + "-" + _date,       //更新日期
    }
  },

  methods: {
    getQrnhsy: function() {
      this.data.qrnhsy = Number(this.data.qrnhsy)
      return this.data.qrnhsy.toFixed(2);
    },

  },

  computed:{
    nodeBoxStyle: function() {
      return {
        display: "flex",
        // height: "126px",
      }
    },
    nodeStyle: function() {
      return {
        width: "50%",
        padding: "22px 20px 18px 20px"
      }
    },
    subNodeStyle1: function() {
      return {
        lineHeight: "17px",
        fontSize: "12px",
        color: "#9D9D9D",
      }
    },
    subNodeStyle2: function() {
      return {
        lineHeight: "45px",
        fontSize: "32px",
        color: "#FF4B3D",
      }
    },
    subNodeStyle22: function() {
      return {
        lineHeight: "45px",
        fontSize: "32px",
      }
    },
    subNodeStyle3: function() {
      return {
        display: "flex",
      }
    },
    typeStyle: function() {
      return {
        margin: "0 3px 0 0",
        width: "52px",
        height: "19px",
        border: "solid 1px #306CFF",
        borderRadius: "3px",
        lineHeight: "14px",
        fontSize: "10px",
        color: "#306CFF",
        textAlign: "center",
      }
    },
    riskStyle: function() {
      return {
        width: "52px",
        height: "19px",
        border: "solid 1px #9D9D9D",
        borderRadius: "3px",
        lineHeight: "14px",
        fontSize: "10px",
        color: "#9D9D9D",
        textAlign: "center",
      }
    },
    boxedStyle: function() {
      return {
        lineHeight: "21px",
      }
    },
  }
}
</script>
