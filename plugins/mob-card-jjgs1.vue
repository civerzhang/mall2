<template>
  
    <div>
        
        <div
            :style="boxStyle"
        >
            <div :style="titleStyle">公司简介</div>
            <div>{{data.A13}}</div>
        </div>
        <mob-split 
            v-if="item.split"
            :item="item.split"
        />

    </div>

</template>

<script>

return {

    computed: {

        boxStyle: function() {

            return {
                padding: "10px 20px",
                color:"red"
            }
        },

        titleStyle: function() {
            return {
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: "40px"
            }
        }
    }
}

</script>
