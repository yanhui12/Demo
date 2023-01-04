<template>
  <div class="main-content">
    <PageHeader />
    <MainWrapper/>
  </div>
</template>

<script>
// 自动创建组件
import '../plugins/autoCreateCom'
import { mapMutations } from 'vuex'
export default {
  name: 'IndexPage',
  mounted () {
    // 这里计算出有多少个页面，并组织称咱们需要的格式 -- start --
    let files = require.context('../components/swiperPage', true, /\.vue$/);
    let list = [], components = {};
    files.keys().forEach((key) => {
      const component = files(key).default;
      components[component.name] = component;
      list.push({ name: component.desc, value: component.name })
    });
    // 这里计算出有多少个页面，并组织称咱们需要的格式 -- end --
    // 将值存入到vuex的中
    this.setMenuList(list)
  },
  methods: {
    ...mapMutations(['setMenuList']),
  }
}
</script>
<style >
.main-content {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
