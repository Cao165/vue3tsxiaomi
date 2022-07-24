<template>
  <div class="topbodyssds">
    <div class="topbody">
      <div class="todyss">
        <div class="leftss">
          <div v-for="(igs,index) in data.topsss" class="actives" :key="index"  target="_blank">
               <router-link class="active" :to="{path:igs.urlpath}"  style="text-decoration:none" >{{igs.name}}</router-link>
              <div style="margin-left:10px" v-if="data.topsss.length-1!=index">|</div>
          </div>
        </div>
        <div class="rightss" style="position: relative;">
          <div class="active">登录</div>
          <div class="xian"></div>
          <div class="active">注册</div>
          <div class="xian"></div>
          <div class="active">消息通知</div>
          <div  @mouseenter="gouwu" @mouseleave="gouwule" :class="[data.hover==false?'activess':'activesss']">购物车(0)</div>
        </div>
         <div class="gouw" style="position: absolute;" @mouseenter="gouwu" @mouseleave="gouwule">
          <div :class="[data.hover==true?'gowss':'gowsss']" v-if="data.hover">3ddddddddddd3</div>
         </div>
      </div>
    </div>
   <div class="bodysss3" style="position: relative;">
      <div class="bodystop" >
        <img src="../static/img/pic1.jpg" alt="" class="imss">
        <div class="bodysstoptile">
          <div v-for="(igs,index) in data.tops2" :key="index" class="titleops" @mouseenter="enter(index)" @mouseleave="enters(index)">{{igs.name}}</div>
        </div>
        <div class="inputtop">
          <el-input placeholder="请输入内容" class="inputselect" v-model="data.inputtop"> </el-input >
          <div><el-icon class="searchss"><search /></el-icon></div>
        </div>
      </div>
    </div>
    <div  v-if="data.indexani==0" class="bodysss34" :class="[data.indexani==0?'up':'down']" 
           style="position: absolute;z-index: 2;"  @mouseenter="enterss(data.indexani)" @mouseleave="entersss">
        3333
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive,onMounted,watch } from "vue";
import { Calendar, Search } from '@element-plus/icons-vue';
import { useRouter } from "vue-router";
const router=useRouter()
const data=reactive({
  topsss:[
    {name:'小米商城',urlpath:'/main'},
    {name:'MUI',urlpath:'/AboutView'},
    {name:'LOT',urlpath:'/main'},
    {name:'云服务',urlpath:''},
    {name:'金融',urlpath:''},
    {name:'有品',urlpath:''},
    {name:'小爱开发平台',urlpath:''},
    {name:'政企服务',urlpath:''},
    {name:'下载app',urlpath:''},
    {name:'Select Region',urlpath:''},
  ],
  tops2:[
    {name:'小米手机'},
    {name:'红米手机'},
    {name:'电视'},
    {name:'笔记本'},
    {name:'片板'},
    {name:'家电'},
    {name:'路由器'},
    {name:'服务中心'},
    {name:'社区'},
  ],
  inputtop:'',
  indexani:-1,
  hover:false,
  index:0,
  pathurl:''
})
const enter=(value:any)=>{
  console.log(value,'mouselteee')
  data.indexani=value
}
const enters=(value:any)=>{
  console.log(value,'mouselteee')
  // data.indexani=-1
}
const enterss=(value:any)=>{
  data.indexani=value
}
const entersss=(value:any)=>{
  data.indexani=-1
}
const gouwu=()=>{
  data.hover=true
}
const gouwule=()=>{
  data.hover=false
}
// const nato=(urlpath:any)=>{
//   router.push({path:urlpath})
// }
// watch(
//   () => data.index,
//   () => {
//     if (data.index == 0) {
//       router.push({ path: '/main' })
//     }else{
//       router.push({path:data.pathurl})
//     }
//   },
//   {
//       immediate:true
//   }
// )
</script>

<style scoped lang="less">
.topbodyssds{
  position: sticky;
  top: 0px;
  z-index: 4;
  bottom: 100px;
}
.topbody {
  width: 100%;
  height: 40px;
  background-color: #3e3e3e;
  display: flex;
  justify-content: center;
  // border: 1px solid red;
  .todyss {
    width: 80%;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin:0 auto;
    .leftss {
      display: flex;
      align-items: center;
      width: 70%;
      .active {
        // margin-left: 10px;
        // margin-right: 10px;
        color: rgb(190, 187, 187);
        display: flex;
        // margin-left: 10px;
      }

      .active:hover {
        color: white;
        cursor: pointer;
      }
      .actives{
        display: flex;
        // border: 1px solid red;
        margin-right: 10px;
      }
      

      .xian {
        width: 1px;
        height: 15px;
        background-color: #b7b0b0;
        margin-left: 10px;
      }
    }
  }

  .rightss {
    display: flex;
    margin-left: 10px;
    color: white;
    align-items: center;
    justify-content: flex-end;
          width: 30%;

    .xian {
      width: 1px;
      height: 15px;
      background-color: #b7b0b0;
      margin-left: 10px;
    }
     .active {
        margin-left: 10px;
        color: rgb(190, 187, 187);
        cursor: pointer;
      }

      .active:hover {
        color: white;
      }
      .activess{
        width: 100px;
        text-align: center;
        display: block;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #838181;
        margin-left: 10px;
      }
      .activesss{
        width: 100px;
        text-align: center;
        display: block;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        background-color: white;
        color:black;
        cursor: pointer;
      }

  }
}
.bodysss3{
  width:100%;
  display: flex;
  justify-content: center;
  // margin: 10px 0px;
  .bodystop{
    display: flex;
    // border: 1px solid red;
      padding: 10px 0px;
    width: 80%;
    height: 60px;
    align-items: center;
    justify-content: space-between;
      background-color: #e9e8e8;
    .imss{
      width: 50px;
      height: 50px;
      border-radius: 18px;
      margin-right: 20px;
    }
    .bodysstoptile{
      // width: 70%;
      margin-left: 100px;
      // border: 1px solid red;
      display: flex;
      align-items: center;
      .titleops{
        margin-right: 20px;
        font-size: 14px;
        cursor: pointer;
      }
      .titleops:hover{
        color:rgb(255, 68, 0)
      }
    }
    .inputtop{
      // border: 1px solid red;
      width: 250px;
      height: 40px;
      display: flex;
      align-items: center;
      .inputselect{
        height: 41px;
        border: none;
        width: 200px;
        border: 1px solid #838181;

      }
      .searchss{
        display: flex;
        width: 50px;
        background-color: rgb(255, 68, 0);
        height: 39px;
        cursor: pointer;
        border: 1px solid #838181;
      }
       .searchss:hover{
        background-color: rgb(255, 255, 255);
      }
    }
  }
}
.bodysss34{
  width: 100%;
  height: 200px;
  background-color: white;
  margin-bottom: 20px;
    box-shadow: 0px 0px 1px 0px  #797575;
}
.up{
  width: 100%;
  background-color: white;
  margin-bottom: 20px;
  animation: up 0.2s ease-in both;
  box-shadow: 0px 0px 10px 0px solid #cccccc;
}
.down{
  width: 100%;
  background-color: white;
  margin-bottom: 20px;
  animation: down 0.2s ease-in both;
}
@keyframes up{
  from{
    height: 0px;
  }
  to{
    height: 200px;

  }
}
@keyframes down{
  from{
    height: 200px;
  }
  to{
    height: 0px;
  }
}

.gouw{
  // border: 1px solid red;
  width: 80%;
  display: flex;
  justify-content: flex-end;
  margin-top: 120px;
  z-index: 2;
}
 .gowss{
    width: 250px;
    // height: 80px;
    // border: 1px solid red;
    background-color: white;
    animation: gowss 0.3s ease-out both;
  }
  .gowsss{
    width: 250px;
    background-color: white;
    animation: gowsss 0.3s ease-out both;
  }
@keyframes gowss{
  from{
    height: 0px;
  }
  to{
    height: 80px;
  }
}
@keyframes gowsss{
  from{
    height: 80px;
  }
  to{
    height: 0px;
  }
}
</style>
