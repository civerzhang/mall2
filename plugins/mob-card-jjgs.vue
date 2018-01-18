<template>
  
    <div>
        
        <div :style="boxStyle" v-if="data" >
            <div :style="titleStyle">{{item.title}}</div>
            <div v-if="isTooLong" v-on:click="showMore" :style="introStyle">{{data.myA13}}</div>
            <img v-if="isTooLong" v-on:click="showMore" :style="imgStyle" src="./res/triangle.png"></img>
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
    methods: {
        showMore: function (event) {
            this.$set(this.data, 'myA13', this.data[this.item.field]);
            $("img").css('transform', 'rotateX(180deg)');
        },
    },

    computed: {
        isTooLong: function () {
            if (this.data[this.item.field].length>90) {
                this.data = Object.assign({}, this.data, {myA13: this.data[this.item.field].slice(0,90)})
                return true;
            } else {
                this.data = Object.assign({}, this.data, {myA13: this.data})
                return false;                
            }
        },

        boxStyle: function() {
            return {
                padding: "10px 20px"
            }
        },

        titleStyle: function() {
            return {
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: "40px"
            }
        },
        introStyle: function() {
            return {
                fontSize: "14px",
                lineHeight: "24px"
            }
        },
        imgStyle: function() {
            return {
                marginLeft: "auto",
                marginRight:"auto",
                display:"block"
            }
        }
    }
}

</script>
