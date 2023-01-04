// MainWrapper.vue

<template>
  <div class="main-wrapper">
    <client-only>
      <swiper :options="swiperOption" ref="mySwiper" class="swiper">
        <swiper-slide :key="banner.value" v-for="banner in menuList">
          <component :is="banner.value" />
        </swiper-slide>
        <div class="swiper-scrollbar"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'MainWrapper',
  data() {
    return {
      // swiper的选项配置
      swiperOption: {
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: true,
        autoplay: false, // 是否自动打开
        loop: false, // 关闭无限循环
        slidesPerView: 1,
        direction : 'vertical', // 滑动方向
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        mousewheel: true, // 支持滚轮翻页
        mousewheel: {
          sensitivity : 0.2,
        }
      }
    };
  },
  computed: {
    // 这里我们将当前在那个页面activePage、页面list存到了vuex中
    ...mapState(['activePage', 'menuList']),
    swiper() { // swiper实例
      return this.$refs.mySwiper.$swiper
    }
  },
  watch: {
    activePage (val) { // 监听当前页面变化，若有变化，将当前页面替换至对应index
      let index = this.menuList.findIndex(item => item.value === val)
      this.swiper.slideTo(index)
    }
  }
}
</script>
<style lang="less" scoped>
.main-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.swiper {
  width: 100%;
  height: 100%;
  .swiper-slide {
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
}
</style>