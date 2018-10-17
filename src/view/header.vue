<template>
  <div id="header">
    <div class="center">
      <swiper :options="swiperOption1" ref="mySwiper1">
        <swiper-slide v-for="(item,index) in list" :key="index">
          <p :style="'opacity:'+ (1-index*0.1)+'; transform: matrix('+(1-0.1*index+isActive*0.1)+',0,0,'+(1-0.1*index+isActive*0.1)+', 0, 0)'">{{item.value}}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isActive:0,
      list:[
        {
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },{
          value:"我是一段很长 的文字，具体哈哈哈哈哈，不知道是什么东西"
        },
      ],
      swiperOption1:{
        direction:"vertical",
        mousewheel: true,
        centeredSlides:true,
        slidesPerView:7,
        on: { 
          slideChangeTransitionEnd: function(){
            console.log(this)
            this.isActive = this.swiper1.activeIndex;//切换结束时，告诉我现在是第几个slide
        
          },
        }
      },
      computed:{
        swiper1() {
          return this.$refs.mySwiper1.swiper
          },
      },
      mounted() {
        console.log(this.swiper)
        this.test()
      
      },
      created() {
        this.test()
      },
      methods:{
        test(){
          alert(1)
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,

  }
}
</script>
<style lang="stylus" scoped>
#header
  display flex
  justify-content center
  padding-top 100px
  .center
    width 1000px
    height 1000px
    overflow hidden
    p
      height 70px
      line-height 70px
      font-size 40px
    .swiper-slide
      transform:translate3d(0,0,0)
</style>
