<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props: {
    probeType: { // 是否监听滚动
      type: Number,
      default: 0, // 0,1都是不监听， 3监听
    },
    pullUpLoad: {
     type: Boolean,
     default: false,
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, // 只有true状态下，组件内部的div才可被点击，只限制div，不限制button
      probeType: this.probeType, // 是否触发监听事件
      pullUpLoad: this.pullUpLoad, // 是否监听上拉事件
    })

    // 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
    }

    // 监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多')
        this.$emit('pullingUp', true)
      })
    }
  },
  methods: {
    // 滚动方法
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // 刷新滚动组件，重新计算高度
    scrollRefresh() {
      this.scroll && this.scroll.refresh()
    },
    // 结束上拉加载更多(上拉加载只会执行一次，只有这次结束后才会执行下一次)
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    // 获取y轴距离
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>
