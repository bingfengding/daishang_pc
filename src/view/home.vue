<template>
  <div id="home">
    <ul id="menu">
      <li v-for="(item,index) in menus" :key="item.id" :data-menuanchor="'page'+item.id" :class="isIndex === index ? 'isActive' : ''"><a href="javascript:void(0)" @click="$refs.fullpage.api.moveTo(item.id)">{{item.value}}</a></li>
        
    </ul>
    <div class="tellUs">
      <div class="tellUsMe"><p>联</p>
      <p>系</p>
      <p>我</p>
      <p>们</p></div>
      <div class="tellUsTextBox"> 
        <p class="tellUsText">
          <span class="tellUsIcon"><img src="../image/mobile-phone.png" alt=""></span>
          <span class="tellUsContent">  +63 980399992
</span>
        </p>
        <p class="tellUsText changeCCC">
          <a href="skype:pilika666@163.com?chat">
          <span class="tellUsIcon"><img src="../image/skype.png" alt=""></span>
            <span class="tellUsContent">pilika666@163.com</span>
          </a>
        </p> 
      </div>
      
    </div>
    
  <full-page :options="options1" id="fullpage" ref="fullpage">
    <div class="page pageBox1 section">
      <div class="center">
        <video muted autoplay loop name="media" ref="myVideo" class="pageBox1Video">
          <source src="../assets/moive1.mp4" type="video/mp4">
          您的浏览器不支持 video 标签。
        </video>
        <div class="clickTo" @click="clickTo">
          <img src="../image/down.png" alt="">
        </div>
      </div>
    </div>
    <div class="page pageBox2 section">
      <div class="center">
        <p class="partner">合作伙伴</p>
        <div class="partnerMain">
          <p>每个人都有梦想，但不同的是，有的人只梦，有的人敢想，</p>
          <p>夜以继日，只为儿时的篮球梦，</p>
          <p>挥洒汗水，只为点亮心中的足球梦，</p>
          <p>越浪而出，冲破梦里的浪花，</p>
          <p>不畏险阻，勇攀理想的高峰，</p>
          <p>放下包袱，不在乎别人的眼光，藐视所有的困难，</p>
          <p>全力以赴，突破极限， 超越自己，</p>
          <p>通过奋斗去实现了自己的梦想，我们都将成为人生的大赢家。</p>
        </div>
        <div class="partnerBoxs">
          <div v-for="item in partner" :key="item.id">
            <div class="boxImg"><img :src="item.url" alt=""></div>
            
            <div class="boxTitle">{{item.title}}</div>
            <p>{{item.text1}}</p>
            <p>{{item.text2}}</p>
            <p>{{item.text3}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page pageBox3 section">
      <div class="center">
        <p class="pageBox3Title">合作计划</p>
        <vue-accordion :items="plans" :styles="divStyles">

        </vue-accordion>
      </div>
    </div>
    <div class="page pageBox4 section">
      <div class="center">
        <p class="pageBox4Title">客户至上</p>
        <p class="pageBox4Main">
          我们致力于给每一位客户提供最佳的产品体验和最优质服务，这是给你日夜不停息辛苦寻找客户的最好回报。 我们的产品不懈追求卓越和创新，持续吸收客户反馈建议，优化产品的每一个操作体验，只为让每一位客户用的方便。我们的品牌以诚信为本、以信誉著称，让每一位客户都放心、安心、舒心地享受跟我们一起度过的分分秒秒。 我们的服务追求人性化、个性化，因为每一位客户的体验都是用心的，所以我们会更用心！
        </p>
        <div class="swiperBox">
          <swiper class="gallery-top" :options="swiperOption1" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide class="list slide1">
              <div class="slide1Img">
                <img :src="list[gameIndex].url" alt="">
              </div>
              <div class="slide1Main">
                <div>
                  <p class="slide1Title">{{list[gameIndex].title}}</p>
                <p class="slide1MainContent">
                  {{list[gameIndex].value}}
                </p>
                <div class="btn">
                  <span @click="changeBtn(0)" :class="gameIndex===0? 'btnActive':''">万博体育</span>
                  <div class="lineBtn"></div>
                  <span @click="changeBtn(1)" :class="gameIndex===1? 'btnActive':''">九大真人</span>
                  <div class="lineBtn"></div>
                  <span @click="changeBtn(2)" :class="gameIndex===2? 'btnActive':''">五大电子</span>
                  <div class="lineBtn"></div>
                  <span @click="changeBtn(3)" :class="gameIndex===3? 'btnActive':''">三大彩票</span>
                </div>
                </div>
                
              </div>
            </swiper-slide>
             <swiper-slide class="list slide2">
              <div class="slide2Center">
                <div class="slide2Text"><p>最新的优惠，日常的优惠，</p>
                <p>VIP成长应有尽有！万博助您愉快体验。</p></div>
                
              </div>
             </swiper-slide>
              <swiper-slide class="list slide3">
                <div class="slide3Box">
                  <div><img src="../image/line.png" alt=""></div>
                  
                  <div class="slide3Text">
                    <p>随时随地  充提无忧</p>
                    <p>最安全便捷的充值渠道</p>
                    <p>最优质快速的出款渠道</p>
                    <p>7*24小时全天候服务</p>
                  </div>
                  <div class="slide3ImgBox"><img src="../image/card.png" alt=""></div>
                  
                </div>
              </swiper-slide>
               <swiper-slide class="list slide4">
                 <div class="slide4MediaBox">
                    <video controls name="media1" ref="myVideo1" class="myVideo1">
                      <source src="../assets/moive1.mp4" type="video/mp4">
                      您的浏览器不支持 video 标签。
                    </video>
                 </div>
               </swiper-slide>
            <!-- Optional controls -->
            
            
          </swiper>
          <div class="swiper-button-prev swiper-button-prev1" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-next1" slot="button-next"></div>
          <div class="paginationBox">
            <div class="swiper-pagination swiper-pagination1"  slot="pagination"></div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="page pageBox5 section">
      <div class="pageBox5ItemBox">
        <div class="pageBox5Item">
          <div class="pageBox5ItemImgBox"><img src="../image/1.png" alt=""></div>
          <div class="pageBox5ItemText">
            <div><p class="pageBox5Item27">皇 家 马 德 里</p>
            <p class="pageBox5Item27">官方合作伙伴</p></div>
            
          </div>
        </div>
        <div class="pageBox5Line"><img src="../image/divider.png" alt=""></div>
        <div class="pageBox5Item">
          <div class="pageBox5ItemImgBox"><img src="../image/3.png" alt=""></div>
          <div class="pageBox5ItemText">
            <div><p class="pageBox5Item27 letter">西甲官方</p>
            <p class="pageBox5Item18 letter2">亚洲首家唯一合作伙伴</p></div>
            
          </div>
        </div>
        
        <div class="pageBox5Line"><img src="../image/divider.png" alt=""></div>
        <div class="pageBox5Item">
          <div class="pageBox5ItemImgBox"><img src="../image/2.png" alt=""></div>
          <div class="pageBox5ItemText">
            <div> <p class="pageBox5Item27">英超水晶宫</p>
            <p class="pageBox5Item27">球衣赞助商</p></div>
           
          </div>
        </div>
        <div class="pageBox5Line"><img src="../image/divider.png" alt=""></div>
        <div class="pageBox5Item">
          <div class="pageBox5ItemImgBox"><img src="../image/4.png" alt=""></div>
          <div class="pageBox5ItemText cenLeft">
            <div><p class="pageBox5Item27">意甲官方</p>
            <p class="pageBox5Item18 letter">冠名赞助商</p></div>
            
          </div>
        </div>
      </div>
      <div class="pageBox5ItemBox pageBox5ItemBox2">
        <div>
        <div class="pageBox5Item">
          <div class="pageBox5ItemImgBox"><img src="../image/5.png" alt=""></div>
          <div class="pageBox5ItemText cenLeft">
            <div><p class="pageBox5Item17">菲律宾娱乐游戏公司</p>
            <p class="pageBox5Item17">PAGCOR</p></div>
            
          </div>
        </div>
        <div class="pageBox5Line"><img src="../image/divider.png" alt=""></div>
        <div class="pageBox5Item">
          <div class="pageBox5ItemImgBox"><img src="../image/6.png" alt=""></div>
          <div class="pageBox5ItemText cenLeft">
            <div> <p class="pageBox5Item17">英国博彩牌照</p>
            <p class="pageBox5Item12">Gambling Commission</p></div>
           
          </div>
        </div>
        <div class="pageBox5Line"><img src="../image/divider.png" alt=""></div>
        <div class="pageBox5Item">
          <div class="pageBox5ItemImgBox"><img src="../image/7.png" alt=""></div>
          <div class="pageBox5ItemText">
            <div><p class="pageBox5Item17 letter">GICC牌照</p>

            
            </div>
          </div>
        </div>
      </div>
        
      </div>
      <div class="banquan">
          ManBetX 万博 版权所有 Copyright  @2018 MBX Technology Co.Ltd. All Rights reserved
        </div>
    </div>
  </full-page>
   
    
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import {vueAccordion} from 'vue-accordion'
export default {
  data(){
    return{
      isIndex:0,
      isEnd:false,
      options1:{
        licenseKey:"OPEN-SOURCE-GPLV3-LICENSE",
        //continuousVertical:true,
        afterLoad: this.afterLoad,
        scrollBar: false,
       // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab'],
        //anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
       //normalScrollElements:"#swiper1"
      },
      menus:[
        {
          id:1,
          value:"首页"
        },
        {
          id:2,
          value:"合作伙伴"
        },
        {
          id:3,
          value:"合作计划"
        },
        {
          id:4,
          value:"客户至上"
        },
        
      ],
      partner:[
        {
          id: 1,
          url:require('../image/earnings.png'),
          title:'收益优势',
          text1:'高达55%佣金比例',
          text2:'全行业最高',
          text3:'最大让利给合作伙伴'
        },
        {
          id: 2,
          url:require('../image/brand.png'),
          title:'品牌优势',
          text1:'英超  意甲  西甲',
          text2:'倾情赞助三大顶级联赛',
          text3:'皇家马德里 尤文图斯官方合作伙伴'
        },
        {
          id: 3,
          url:require('../image/product.png'),
          title:'产品优势',
          text1:'全球首家',
          text2:'免费海量体育赛事直播',
          text3:'最全面的游戏平台'
        },
        {
          id: 4,
          url:require('../image/service.png'),
          title:'服务优势',
          text1:'专属咨询服务',
          text2:'最专业营销辅导团队',
          text3:'全方位扶持奖励'
        }
      ],
      plans:[
        {
          title:'合作共赢·领创未来',
          text:'ManBetX万博专注于提供业内最有竞争力的产品，只需介绍用户来到ManBetX万博进行娱乐游戏，即可获得我们的净赢利回报。借助我们专业的营销辅导团队与强大市场营销工具，你的合营事业必将在最短时间内能取得成功!',
          //url: '#', 
          image: require('../image/plan.jpg')
        },{
          title:'居高临下·佣金百城',
          text:'ManBetX万博为广大合营伙伴提供最大让利回报，基础起步佣金 30%，高出同行业平均水平；最高达55%的回报，全行业之最。',
          //url: '#', 
          image: require('../image/plan1.jpg')
        },{
          title:'至尊至贵·卓尔不凡',
          text:'ManBetX万博的合作伙伴拥有VIP尊贵专享服务，高端推广工具、会员专属存款通道、专属电话回访维护、VIP尊享优惠活动、每月额外推广发展奖金，境内外旅游套餐、年终奖金分红。',
          //url: '#', 
          image: require('../image/plan3.jpg')
        },{
          title:'同舟共济·筑梦而行',
          text:'ManBetX万博针对于不同级别的合作伙伴提供不同的扶持和鼓励！没有推广经验，没关系，我们陪你从零开始，到获得第一桶金，直抵成功！推广经验丰富，恭喜你，明智的你选择了如此优秀强大的合作伙伴，让你在最短的时间内事业登上新的高峰！',
          //url: '#', 
          image: require('../image/plan2.jpg')
        },
        
      ],
      divStyles:{
        'background-color':'#ccc'
      },
      swiperOption1: {
          pagination:{
            el: '.swiper-pagination1',
            autoplay: true,
            clickable: true,
            init:false,
            renderBullet: function (index, className) {
              let text = ""
              let url = require("../image/sanjiao.png")
              switch(index){
                case 0:text='顶尖游戏';break;
                case 1:text='人气优惠';break;
                case 2:text='充提迅速';break;
                case 3:text='全站APP';break;
              }
           return `
           <span class="${className}">
            ${text}
            <i class="sanjiao">
              <img src=${url} alt="">
            </i>
           </span>;
           `
		    	},
          },
        
          navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
          },
        },
        items:[
          {
            value:"顶尖游戏",
            
          },{
            value:"顶尖游戏",
            
          },{
            value:"顶尖游戏",
            
          },{
            value:"顶尖游戏",
            
          },
        ],
        gameIndex:0,
        list:[
          {
            value:"每周数万场足球、篮球、网球、电竞等精彩赛事， 最佳赔率，最便捷的完美体验。更内置高清免费视频/动画直播，英超、西甲、意甲、德甲等除五大联赛 外的200多个国家大中小型足球赛事，更有篮球、网球、斯诺克等精彩体育直播，应有尽有。",
            url:require("../image/Interface.png"),
            title:"万博体育"
          },
          {
            value:"AG、OG、欧博、沙龙、GD、BBIN、MG、PT、万博九大真人平台，保证满足您的所有会员",
            url:require("../image/Interface2.png"),
            title:"九大真人"
          },
          {
            value:"PP、MG、AG、PT、PG五大电子游艺平台，保证您在老虎机的旋转之中同样收获满盆金钵。",
            url:require("../image/Interface3.png"),
            title:"五大电子"
          },
          {
            value:`双赢彩票（六合彩、北京赛车、国内外时时彩、快乐农场、11选5）；
            KG彩票（快乐彩、时时彩、六合彩）；
            VR彩票。`,
            url:require("../image/Interface4.png"),
            title:"三大彩票"
          },
        ]
    
     
    }
  },
  computed:{
    myVideo(){
      return this.$refs.myVideo
    },
    mySwiper(){
     
      return this.$refs.mySwiper
    }

  },
  mounted() {
    //this.$refs.fullpage.api.setAllowScrolling(false,'down')
    this.myVideo.play()
  },
  created() {
    
  },
  
  methods:{
    clickTo(){
      this.$refs.fullpage.api.moveTo(2)
    },
    // tellUs(){
    //   window.open("http://www.manbet5858.com/help/contact")
    // },
    changeBtn(index){
      this.gameIndex = index
      
    },
    videoEnd(){
     
    },
    afterLoad(origin,destination,direction){
      this.isIndex = destination.index
      if(this.isIndex===0){
        if(this.myVideo.paused){
          this.myVideo.play()
        }
      }else if (this.isIndex===3) {
        //console.log(this.$refs.mySwiper)
        

      }
    },
    callback(){
      //console.log("callback")
    }
  },
  
  components: {
    swiper,
    swiperSlide,
    'vue-accordion':vueAccordion
  }
}
</script>
<style lang="stylus" scoped>
#home
  text-align center
  min-width 1280px
  .page-container 
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .pageBox1
      display flex
      justify-content center
      padding-top 100px
      video
        min-width 100%
        min-height 100%
  #menu
    //background-color #cccccc
    position fixed
    top 0
    height 80px
    z-index 100
    width 100%
    line-height 80px
    background-color rgba(0,0,0,0.6)
    li
      display inline-block
      padding 0 20px
      line-height 40px
      font-size 18px
      cursor pointer
      border-radius 4px
      border 1px solid transparent
      a
        color #ffffff
    .isActive
      border 1px solid #ffd496
      a
        color #ffbd5e
  .tellUs
    position fixed
    right 0
    top 50%
    margin-top -120px
    width 280px
    height 170px
    transform translateX(220px)
    background-color #E49A33
    border-top-left-radius 20px
    border-bottom-left-radius  20px
    z-index 102
    font-size 26px
    display flex
    align-items center
    justify-content flex-start
    cursor pointer
    transition all 0.5s ease
    .tellUsTextBox
      width 220px
      padding-top 20px
      .tellUsText
        font-size 16px
        line-height 30px
        text-align left
        margin-bottom 20px
        .tellUsIcon
          display inline-block
          width 32px
          height 32px
          vertical-align middle
          margin-left 10px
          img
            width 100%
            height 100%
        .tellUsContent
          display inline-block
          height 32px
          line-height 32px
          vertical-align middle
          margin-left 10px
    .tellUsMe
      width 60px
      p
        color #fff
    &:hover
      background-color #ffbd5e
      transition all 0.5s ease
      transform translateX(0)
      cursor auto
      .changeCCC:hover
        color #fff
        cursor pointer
        a
          span
            color #fff
</style>
<style lang="stylus">
@keyframes mymove
{
from {transform :translateY(3px) }
to {transform :translateY(0) }
}
#home
  .page
    overflow hidden
  .pageBox1
    background url("../image/bannerBg.jpg") no-repeat
    background-size cover
    position relative
    .center
      width 100%
      height 100%
      overflow hidden
      display flex 
      align-items center
      justify-content center
      .pageBox1Video
        min-width 100%
        min-height 100%
      .clickTo
        position absolute
        left 50%
        bottom 30px
        margin-left -21px
        cursor pointer
        animation mymove 0.5s linear infinite
  .pageBox2
    background url("../image/itemBg.png") no-repeat
    background-size cover
    padding-top 11vh
    display flex 
    justify-content center
    .center
      width 1280px
      .partnerMain
        color #cccccc
        font-size 18px
        text-align center
        line-height 30px
      .partner
        color #ffbd5e
        font-size 54px
        margin-bottom 3vh
        font-weight 600
      .partnerBoxs 
        display flex
        justify-content space-around
        color #ffbd5e
        padding-top 4vh
        p
          font-size 18px
          line-height 28px
        .boxTitle
          font-size 28px
          line-height 50px
          padding-top 10px
          padding-bottom 24px
          font-weight 500
        .boxImg
          height 82px
          margin-bottom 18px
          display flex 
          align-items flex-end	
          justify-content center
          img
            max-width 100%
            max-height 100%

  .pageBox3
    background url("../image/itemBg.png") no-repeat
    background-size cover
    padding-top 16vh
    display flex 
    justify-content center
    .center
      width 1280px
      .pageBox3Title
        color #ffbd5e
        font-size 54px
        padding-bottom 11vh
        font-weight 600
      .vue-accordion
        width 100%
        max-width 100%
        height 50vh
        ul
          height 100%
          li
            height 100%
            background-size cover
            background-position-y 80%
            background-color #1d1e21
            a
              height 480px
              padding 80px 60px 0 60px
              
              h2
                color #ffbd5e
                font-size 26px
                padding-bottom 70px
              p
                color #ffbd5e
                font-size 18px
                white-space normal
                opacity 0
                transition all 0.1s ease-in-out
            &:hover
              background-color #111111
              background-image url("../image/hand1.jpg") !important
              a
                p
                  transition-delay 0.4s
                  opacity 1   
  .pageBox4
    background url("../image/itemBg.png") no-repeat
    background-size cover
    padding-top 11vh
    display flex 
    justify-content center
    //background-attachment fixed
    .center
      width 1280px
      .pageBox4Title
        font-size 54px
        color #ffbd5e
        margin-bottom 3vh
        font-weight 600
      .pageBox4Main
        color #cccccc
        font-size 16px
        padding 0 190px
      .swiperBox
        //min-height 800px
        position relative
        .swiper-button-prev1
          background-image url("../image/left.png")
          width 38px
          height 82px
          background-size 100% 100%
          margin-top -42px
          margin-left -50px
          &:focus
            outline 0
        .swiper-button-next1
          background-image url("../image/right.png")
          width 38px
          height 82px
          background-size 100% 100%
          margin-top -42px
          margin-right -50px
          &:focus
            outline 0
        .list
          height 500px
        .paginationBox
          display flex 
          justify-content center 
          .swiper-pagination1
            .swiper-pagination-bullet
              width 180px
              height 20px
              display inline-block
              border-radius 0
              color #ffbd5e
              font-size 14px
              background-color #362916
              line-height 80px
              margin 0
              outline 0
              margin-left -8px
              .sanjiao
                display none
            .swiper-pagination-bullet-active
              font-size 16px
              background-color #ffbd5e
              outline 0
              position relative
              .sanjiao
                display block
                width 44px
                height 22px
                position absolute
                top -38px
                left 50%
                margin-left -22px
                img 
                  width 100%
                  height 100%
        .slide1
          display flex 
          justify-content center
          .slide1Img
            width 560px
            display flex 
            align-items center
            margin-right 60px
            //margin-left -20px
            img
              width 100%
              height auto
          .slide1Main
            width 480px
            display flex 
            align-items center
            padding-right 30px
            padding-bottom 100px
          
            p
              color #ffbd5e
            .slide1Title
              font-size 26px
              margin-bottom 20px
            .slide1MainContent
              font-size 14px
              height 180px
              line-height 30px
              text-align justify
              padding-bottom 50px
            .btn
              display flex 
              justify-content flex-start
              align-content center
              span 
                color #ffbd5e
                width 80px
                height 34px
                line-height 34px
                font-size 14px
                border 1px solid #ffbd5e
                border-radius 4px
                cursor pointer
              .btnActive
                background-color #ffbd5e
                color #000
              .lineBtn
                width 40px
                height 2px
                background-color #6a502a
                margin-top 16px
        .slide2
          display flex 
          justify-content center
          .slide2Center
            font-size 28px
            color #ffbd5e
            line-height 50px
            background url("../image/component.png") no-repeat
            background-position top right 
            width 1000px
            display flex 
            align-items flex-end
            justify-content center
            padding-bottom 40px
            .slide2Text
              padding-right 60px
              text-align center
        .slide3
          display flex 
          justify-content center
          align-items center
          .slide3Box
            display flex
            justify-content flex-start
            width 720px
            .slide3Text
              padding-left 30px
              padding-right 50px
              p
                color #ffbd5e
                font-size 18px
                margin-bottom 28px
                text-align start
                &:first-of-type
                  font-size 28px
        .slide4
          display flex 
          justify-content center
          align-items center
        
          .slide4MediaBox
            width 670px
            height 380px
            .myVideo1
              width 100%
  .pageBox5
    height 300px !important
    background url("../image/bg.jpg") no-repeat
    background-size 100% 100%
    display flex 
    justify-content center
    padding-top 5vh
    .pageBox5ItemBox
      display flex 
      justify-content space-between
      padding-bottom 20px
      .pageBox5Item
        display flex 
        justify-content space-between
        color #ffffff
        .pageBox5ItemText
          display flex 
          align-items center
          .pageBox5Item27
            font-size 18px
          .pageBox5Item18
            font-size 12px 
            margin-top 10px
            text-align justify
          .letter
            letter-spacing 4px
          .letter2
            letter-spacing 2px
          &.cenLeft
            text-align left 
        .pageBox5ItemImgBox
          margin-right 20px
          display flex 
          align-items center
          img
            height 56px
            width auto
      .pageBox5Line
        margin 0 40px
    .pageBox5ItemBox.pageBox5ItemBox2
      display flex
      justify-content center
      padding-bottom 0
      >div
        display flex
        justify-content space-between
      .pageBox5ItemImgBox
        img
          max-height 50px
          width auto
          height auto
      .pageBox5Item17
        font-size 18px
      .pageBox5Item12
        font-size 12px
    
  .banquan
    color #FFF
    padding-top 20px
</style>

