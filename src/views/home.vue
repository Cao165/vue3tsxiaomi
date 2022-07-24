<template>
  <div>首页</div>
  <router-link :to="{path:'/xiaomi'} " target='_blank'>小米商城</router-link>
  <div></div>
   <el-checkbox v-model="data.fas"   />{{data.fas}}
   <el-checkbox v-model="data.fass"   />{{data.fass}}
   <el-checkbox v-model="data.fasss"   @change="gaibain"/>{{data.fasss}}
   <div>{{mainstore.getcounts}}</div>
   <div @click="natosss">dd</div>
   <div @click="natossss">dd2</div>
   <div>{{mainstore.getshapss}}</div>
   <div>{{mainstore.getshapssle}}</div>
</template>

<script lang="ts" setup>
import {reactive} from "vue"
import {useMainStore} from '../store/index'
const mainstore=useMainStore()
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
const natosss=()=>{
    mainstore.setcounts(200)
}
const natossss=()=>{
    const das={name:'caoliang',age:20};
    (Object.assign as any)(das,{fas:false,coumt:1})
    mainstore.setshapss(das)
}
</script>

<style lang="less" scoped>

</style>