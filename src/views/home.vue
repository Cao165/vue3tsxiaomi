<template>
  <div>首页</div>
  <router-link :to="{path:'/xiaomi'} " target='_blank'>小米商城</router-link>
  <div></div>
   <el-checkbox v-model="data.fas"   />{{data.fas}}
   <el-checkbox v-model="data.fass"   />{{data.fass}}
   <el-checkbox v-model="data.fasss"   @change="gaibain"/>{{data.fasss}}
</template>

<script lang="ts" setup>
import {reactive} from "vue"
const data=reactive<any>({
    fas:false,
    fass:false,
    fasss:false
})
const gaibain=(val:any)=>{
    console.log(val)
    if(data.fasss==true){
        data.fas=val
        data.fass=val
    }else{
        data.fas=val
        data.fass=val
    }
}
</script>

<style lang="less" scoped>

</style>