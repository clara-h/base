<template>
  <div>
    <!--滚动组件-->
    <Scroll class="scroll-height"
            :probe-type="3"
            ref="scroll"
            @scroll="scrollPosition"
    :pull-up-load="true">
      <ul style="background-color: red">
        <li v-for="n in 100" :key="n">滚动条</li>
      </ul>
    </Scroll>
    <a @click="showToast" class="font-12">主页</a>
    <a @click="$router.push({name: 'detail'})">详情</a>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
export default {
  name: "home",
  data() {
    return {
      saveY: 0,
    }
  },
  components: {
    Scroll
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.scrollRefresh()
  },
  deactivated() {
    // 获取离开时y轴位置
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    scrollPosition() {
     // console.log(data)
    },
    showToast() {
      this.$toast.show('点击了', 2000)
    }
  }
}
</script>

<style scoped>
.scroll-height{
  height: 300px;
  overflow: hidden;
}
.font-12{
  font-size: 12px;
}
</style>
