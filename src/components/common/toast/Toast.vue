<template>
  <div class="toast" v-show="showToast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      showToast: false,
      message: ''
    }
  },
  methods: {
    show(message, duration=2000) {
      this.message = message
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: #2c3e50;
}
</style>
