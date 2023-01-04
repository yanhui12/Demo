<template>
  <div class="page-header">
    <div class="logo">
      <img src="~/assets/images/shout.svg" alt="" style="width:20px">
    </div>
    <div class="menu-tablet">
      <div v-for="item in menuList" :key="item.value" @click="clickSearch(item.value)" style="cursor: pointer;">
        {{item.name}}
      </div>
    </div>
    <div class="menu-mobile" @click="show = true">
      menu
    </div>
    <van-popup v-model="show" position="right" class="vanPop">
      <ul class="right-nav">
        <li v-for="item in menuList" :key="item.value" @click="clickSearch(item.value)">
          {{item.name}}
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'PageHeader',
  data () {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(['menuList']),
  },
  methods: {
    ...mapMutations(['changeActivePage']),
    // 这里出发点击事件，修改对应的ActivePage
    clickSearch(value) {
      this.changeActivePage(value)
      this.show = false
    },
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 12px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  z-index: 11;
  box-sizing: border-box;
  background: #3a4c80;
  color: #fff;
}
.vanPop {
  width: 120px;
  height: 100%;
  background: #3a4c80;
  color: #fff;
  transition: all .5s;
}
.right-nav {
  width: 100%;
  height: 100%;
  padding-top: 24px;
  box-sizing: border-box;

  li {
    width: 100%;
    height: 75px;
    line-height: 75px;
    font-size: 14px;
    padding-left: 12px;
    box-sizing: border-box;
    border-bottom: 1px solid hsla(0,0%,100%,.2);
    cursor: pointer;
  }
}
.menu-tablet {
  display: flex;
  width: 50%;
  justify-content: space-around;
}
@media screen and (max-width: 1180px) {
  .page-header .menu-tablet.dark {
    color: #595758;
  }
  .menu-mobile {
    display: none;
  }
}


@media screen and (max-width: 1440px){
  .page-header .menu-tablet.dark {
    color: #595758;
  }
  .menu-mobile {
    display: none;
  }
}

@media screen and (max-width: 688px) {
  .page-header .menu-tablet {
    display: none;
  }
  .menu-mobile {
    display: block;
  }
}

</style>