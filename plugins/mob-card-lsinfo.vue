<template>
  <div>
      <div v-if="data" >
          <div>{{data}}</div>
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

}
</script>
