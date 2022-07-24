<template>
  <div style="width:100%;height:100%; " class="appclas" >
    <topss/>
    <router-view  />
  </div>
</template>

<script lang="ts" setup>
import topss from "@/views/top.vue"
</script>

<style lang="less">
*{
  margin: 0px;
}
.appclas{
  // border: 1px solid red;
  padding-bottom: 20px;
   background-color: #e9e8e8;
   min-height: 1000px;
   height: auto;
}
</style>
