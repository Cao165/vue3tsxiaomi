<template>
    <div class="mainbody">
        <div class="mainbodyss">
            <!-- 菜单和轮播图 -->
            <div class="caidanlun">
                <!-- 左侧菜单 -->
                <div class="leftmenus">
                    <div v-for="(img ,index) in data.menuss" :key="index" class="nameleftmen"
                        @mouseenter="enters(index+1)" @mouseleave="leter">
                        <div class="leftmsn">{{img.name}}</div>
                        <div>></div>
                    </div>
                </div>
                <!-- 轮播图 -->
                <div class="rightmenus" height="400px" style="position: relative;">
                    <el-carousel class="elcar" style="position: absolute;">
                        <el-carousel-item v-for="(img,index) in data.dsds" :key="index" class="imgsss">
                            <img :src="img.url" alt="" class="imgsss" height="100%">
                        </el-carousel-item>
                    </el-carousel>
                    <div class="rightmenuleft" v-if="data.hover" @mouseenter="enters" @mouseleave="leter">
                        <div class="rightimgname" v-for="(igm,index) in data.prodducts" :key="index">
                            <img :src="igm.img" alt="">
                            <div>{{igm.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- card -->
            <div class="cardmainss">
                <div class="leftcard">
                    <div class="carnme" v-for="(igm,index) in data.cardtiels">{{igm.name}}</div>
                </div>
                <div class="righcard">
                    <img :src="img.url" alt="" v-for="(img,index) in data.imgscards" :key="index" class="igmnameurl" />
                </div>
            </div>
            <img src="../static/img/d1.png" alt="" class="d1imgs">
            <!-- 手机 -->
            <div class="phonecards">
                <div>手机</div>
                <div class="phonegengduo">查看更多
                    <div class="jiantou">></div>
                </div>
            </div>
            <div class="phonecardscards">
                <!-- 左侧card -->
                <img src="../static/img/e1.png" alt="" class="phncardds">
                <!-- 右侧card -->
                <div class="phonecardscardsa">
                    <div class="phonecar" v-for="(i,index) in 8" :key="index"  @click="data.dialogTableVisible = true">
                        <img src="../static/img/c1.jpg" alt="" class="phonecarigs">
                        <div class="phonecartitle">Xiaomi Civi 1S</div>
                        <div class="phonecartitlea">这种未来 | 威力文上的 </div>
                        <div class="phonecartitleas">5999元起</div>
                    </div>
                </div>
            </div>
            <img src="../static/img/f1.png" alt="" class="d1imgs" />
            <!-- 手表 -->
            <div class="phonecardss">
                <div>手表</div>
                <div class="phonegengduo">
                    <div v-for="(igs,index) in data.watchss" :key="index" :class="[data.indexopen==index?'remenss':'']"
                        @click="indexss(index)" @mouseenter="inds(index)">
                        {{igs.name}}
                        <div class="xian" v-if="data.indexopen==index"></div>
                    </div>
                </div>
            </div>
            <div class="phonecardscardss">
                <!-- 左侧card -->
                <img src="../static/img/e1.png" alt="" class="phncardds">
                <!-- 右侧card -->
                <div class="phonecardscardsa" v-if="data.indexopen==0" >
                    <div class="phonecar" v-for="(i,index) in 8" :key="index" @click="data.dialogTableVisible = true">
                        <img src="../static/img/c1.jpg" alt="" class="phonecarigs">
                        <div class="phonecartitle">Xiaomi Civi 1S</div>
                        <div class="phonecartitlea">这种未来 | 威力文上的 </div>
                        <div class="phonecartitleas">5999元起</div>
                    </div>
                </div>
                <div class="phonecardscardsa" v-if="data.indexopen==1">
                    <div class="phonecar" v-for="(i,index) in 3" :key="index" @click="data.dialogTableVisible = true">
                        <img src="../static/img/c1.jpg" alt="" class="phonecarigs">
                        <div class="phonecartitle">Xiaomi Civi 1S</div>
                        <div class="phonecartitlea">这种未来 | 威力文上的 </div>
                        <div class="phonecartitleas">5999元起</div>
                    </div>
                    <div class="phonecars">
                        <div class="phonecarssss">浏览更多</div>
                        <div class="phonecarsssss">热门</div>
                    </div>
                </div>
            </div>
            <img src="../static/img/d1.png" alt="" class="d1imgs">
            
            <!-- 弹出框 -->
            <el-dialog v-model="data.dialogTableVisible" title="商品预览" width="300px">
                <div class="phonecarsas">
                    <img src="../static/img/c1.jpg" alt="" class="phonecarigs">
                    <div class="phonecartitle">Xiaomi Civi 1S</div>
                    <div class="phonecartitlea">这种未来 | 威力文上的 </div>
                    <div class="phonecartitleas">5999元起</div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue"
const data=reactive<any>({
    dsds:[
        {url:require('../static/img/1.jpeg')},
        {url:require('../static/img/2.jpeg')},
        {url:require('../static/img/1.jpeg')},
        {url:require('../static/img/2.jpeg')},
        {url:require('../static/img/1.jpeg')},
    ],
    menuss:[
        {name:'手机 电话卡'},
        {name:'电视 盒子'},
        {name:'笔记本 平板'},
        {name:'家电 插线板'},
        {name:'出行 穿戴'},
        {name:'智能 路由器'},
        {name:'电源 配件'},
        {name:'健康 儿童'},
        {name:'耳机 音箱'},
        {name:'生活 箱包'},

    ],
    hover:false,
    prodducts:[],
    prodducts1: [
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'Xiaomi Civi 1S' },
    ],
    prodducts2: [
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png?thumb=1&w=40&h=40&f=webp&q=90', title: 'RedmiBook Pro14 2022' },

    ],
    cardtiels:[
        {name:'保障服务'},
        {name:'企业团购'},
        {name:'保障通道'},
        {name:'米卡分'},
        {name:'以新换就'},
        {name:'话费通知'},
    ],
    imgscards:[
        {url:require('../static/img/b1.png')},
        {url:require('../static/img/b2.png')},
        {url:require('../static/img/b3.png')},
    ],
    watchss:[
        {name:'热门'},
        {name:'穿戴'},
    ],
    indexopen:0,
    dialogTableVisible:false
})
const enters=(index:any)=>{
    if(index%2==0){
        data.prodducts=data.prodducts1
    }else{
        data.prodducts=data.prodducts2

    }
    data.hover=true
}
const leter=()=>{
    data.hover=false
}
const indexss=(index:any)=>{
    data.indexopen=index
}
const inds=(index:any)=>{
     data.indexopen=index
}
</script>

<stype lang="less" scoped>

.mainbody {
  width: 100%;
  min-height: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  .mainbodyss {
    width: 80%;
    min-height: 500px;
    height: auto;
    .caidanlun {
      width: 100%;
      height: 400px;
      display: flex;
      .leftmenus {
        width: 20%;
        height: 400px;
        background-color: #3e3e3e;
        color: rgb(206, 202, 202);
        font-size: 14px;
        .nameleftmen{
            cursor: pointer;
            line-height: 40px;
            padding-left: 20px;
            display: flex;
            .leftmsn{
                width: 83%;
            }
            
        }
        .nameleftmen:hover{
            background-color:rgb(255, 68, 0);
            color: white;
        }
        
      }
      .rightmenus{
        width: 80%;
        height: 400px;
        .elcar{
            width: 100%;
            height: 400px;
            .imgsss{
                width: 100%;
                height: 400px; 
                display: inline-block;
           }
        }
      }
    }
  }
  .rightmenuleft{
    position: absolute;
    width: 100%;
    height: 400px;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    .rightimgname{
        display: flex;
        align-items: center;
        margin-right: 20px;
        margin-left: 10px;
        font-size: 13px;
    }
  }
  .cardmainss{
    width: 100%;
    height: 170px;
    // border: 1px solid red;
    margin-top: 20px;
    display: flex;
    .leftcard{
        width: 20%;
        height: 170px;
        background-color: #575151;
        display: flex;
        flex-wrap: wrap;
        margin-right: 10px;
        cursor: pointer;
        .carnme{
            width: 32%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: rgb(199, 194, 194);
        }
        .carnme:hover{
            color: white;
        }
    }
    .righcard{
        width: 80%;
        display: flex;
        justify-content: space-between;

    }
    .igmnameurl{
        width: 32%;
        height: 100%;
        cursor: pointer;
        transition: transform 2s ease 1s;
    }
    .igmnameurl:hover{
        margin-top: -10px;      
    }
  }
  .phonecards{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    margin: 10px 0px;
    .phonegengduo{
        display: flex;
        cursor: pointer;
       .jiantou{
            background-color: #3e3e3e;
            color: white;
            width: 30px;
            display: flex;
            justify-content: center;
            border-radius: 50%;
            height: 30px;
            margin-left: 10px;
        }
    }
    .phonegengduo:hover{
        color:rgb(255, 68, 0);  
    }
    .jiantou:hover{
            background-color: rgb(255, 68, 0);
        } 
  }
  .d1imgs{
    width: 100%;
    margin: 20px 0px 0px 0px;
  }
  .phonecardscards{
    width: 100%;
    height: 500px;
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .phncardds{
        transition: transform 2s ease 1s;
        height: 490px;
    }
    .phncardds:hover{
        margin-top: -10px;
    }
    .phonecardscardsa{
        display: flex;
        flex-wrap: wrap;
        width:81% ;
        height: 500px;
        // border: 1px solid red;
        justify-content: space-between;
        .phonecar{
            width: 23%;
            height: 235px;
            // border: 1px solid red;
            margin-bottom: 15px;
            transition: transform2s ease 1s;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            cursor: pointer;
            border-radius: 5px;
            .phonecartitle{
                font-size: 13px;
            }
            .phonecartitlea{
                font-size: 10px;
                margin: 10px 0px;
                color: #a3a2a2;
            }
            .phonecartitleas{
                font-size: 10px;
                color: red;
            }
        }
        .phonecar:hover{
            margin-top: -10px;
            // border: 1px solid red;
            box-shadow: 0px 1px 10px 0px #cccaca;

        }
        .phonecarigs{
            width: 200px;
            height: 150px;
        }
    }
  }
   .phonecardss{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    margin: 10px 0px;
    .phonegengduo{
        display: flex;
        cursor: pointer;
        justify-content: space-between;
        width: 90px;
        font-size: 18px;
        .remenss{
            color: rgb(255, 68, 0);
        }
        .xian{
            width: 35px;
            height: 2px;
            margin-top: 5px;
            background-color: rgb(255, 68, 0);
        }
    }
  }
  .phonecardscardss{
    width: 100%;
    height: 500px;
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .phncardds{
        transition: transform 2s ease 1s;
        height: 490px;
    }
    .phncardds:hover{
        margin-top: -10px;
        // border: 1px solid red;
    }
    .phonecardscardsa{
        display: flex;
        flex-wrap: wrap;
        width:81% ;
        height: 500px;
        // border: 1px solid red;
        justify-content: space-between;
        .phonecar{
            width: 23%;
            height: 235px;
            // border: 1px solid red;
            margin-bottom: 15px;
            transition: transform2s ease 1s;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            cursor: pointer;
            border-radius: 5px;
            
            .phonecartitle{
                font-size: 13px;
            }
            .phonecartitlea{
                font-size: 10px;
                margin: 10px 0px;
                color: #a3a2a2;
            }
            .phonecartitleas{
                font-size: 10px;
                color: red;
            }
        }
        .phonecar:hover{
            margin-top: -10px;
            // border: 1px solid red;
            box-shadow: 0px 1px 10px 0px #cccaca;
        }
        .phonecarigs{
            width: 200px;
            height: 150px;
        }
    }
  }
   .phonecardss{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    font-size: 20px;
    margin: 10px 0px;
    .phonegengduo{
        display: flex;
        cursor: pointer;
        // justify-content: space-between;
        width: 90px;
        font-size: 18px;
        // border: 1px solid red;
        .remenss{
            color: rgb(255, 68, 0);
        }
        .xian{
            width: 35px;
            height: 2px;
            margin-top: 5px;
            background-color: rgb(255, 68, 0);
        }
    }
  }
  .phonecars{
            width: 23%;
            height: 120px;
            // border: 1px solid red;
            margin-bottom: 15px;
            transition: transform2s ease 1s;
            display: flex;
            flex-direction: column;
            // align-items: center;
            justify-content: center;;
            cursor: pointer;
            // border: 1px solid red;
            background-color: white;
            // border: 1px solid red;
            .phonecartitle{
                font-size: 13px;
            }
            .phonecartitlea{
                font-size: 10px;
                margin: 10px 0px;
                color: #a3a2a2;
            }
            .phonecartitleas{
                font-size: 10px;
                color: red;
            }
        }
        .phonecars:hover{
            margin-top: -10px;
        }
        .phonecarigs{
            width: 200px;
            height: 150px;
        }
        .phonecarssss{
            font-weight: bold;
            width: 100px;
            margin-left: 20px;
        }
        .phonecarsssss{
            font-size: 13px;
            margin-left: 20px;
        }

        .eldialog{
            // border: 1px solid red;
            width: 200px;
            height: 200px;
        .phonecarsas{
            width: 23%;
            height: 235px;
            // border: 1px solid red;
            margin-bottom: 15px;
            transition: transform2s ease 1s;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            cursor: pointer;
            .phonecartitle{
                font-size: 13px;
            }
            .phonecartitlea{
                font-size: 10px;
                margin: 10px 0px;
                color: #a3a2a2;
            }
            .phonecartitleas{
                font-size: 10px;
                color: red;
            }
        }
        
    
  }
   .phonecardsss {
       width: 100%;
       height: 50px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       font-size: 20px;
       margin: 10px 0px;

       .phonegengduo {
           display: flex;
           cursor: pointer;
           justify-content: space-between;
           width: 90px;
           font-size: 18px;

           .remenss {
               color: rgb(255, 68, 0);
           }

           .xian {
               width: 35px;
               height: 2px;
               margin-top: 5px;
               background-color: rgb(255, 68, 0);
           }
       }
   }
}
</stype>
