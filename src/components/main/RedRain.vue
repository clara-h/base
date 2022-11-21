<template>
  <div class="">
    <a @click="start">点击开始</a>
    <div id="redzone">
    </div>
  </div>
</template>

<script>

export default {
  name: "RedRain",
  data() {
    return {
      clickNum: 0,
      animationtime: null,
      countDownTime: null,
    }
  },
  methods:{
    addBao:function(left, height, src) {
      let div = document.createElement("div")
      let img = document.createElement("img")
      div.appendChild(img)
      img.className = "roll"
      img.src = src
      div.style.left = left + "px"
      div.style.height = height + "px"
      div.classList.add("redBox")
      document.getElementById("redzone").appendChild(div);
      let _this = this
      div.addEventListener('click', function (event) {
        _this.ckickRed(event)
      })
      setTimeout(function() {
        document.getElementById("redzone").removeChild(div);
      }, 4000)
    },
    ckickRed(event) {
      console.log(event)
      this.clickNum ++
      console.log('点击到红包了:' + this.clickNum)
    },
    start() {
      let _this = this;
      if (this.animationtime) {
        clearTimeout(this.animationtime)
        this.animationtime = null
      }
      // 开始倒计时
      this.countDown(10)
      this.animationtime = setInterval(function(){
        let left = Math.random() * (document.body.scrollWidth - 100)
        let height = Math.random() * document.body.scrollHeight
        let src = require('@/assets/img/gift.png')
        _this.addBao(left, height, src);
      }, 500);
    },
    // 倒计时
    countDown(time) {
      this.countDownTime && clearTimeout(this.countDownTime)
      let num = 0
      let _this = this
      this.countDownTime = setInterval(function(){
        num++
        console.log(num)
        if (num >= time) {
          clearTimeout(_this.countDownTime)
          _this.end()
        }
      }, 1000);
    },
    end() {
      this.animationtime && clearTimeout(this.animationtime)
      this.animationtime = null
    }
  },
  mounted(){

  },
}
</script>

<style>
@keyframes redImg {
  0% {
    top:0;
  }
  100% {
    top: 100%;
  }
}
.redBox {
  position: absolute;
  /* opacity: 0;*/
  z-index: 10000;
  animation: redImg 4s infinite linear;
  -webkit-animation: redImg 4s infinite linear;
  -moz-animation: redImg 4s infinite linear;
  -ms-animation: redImg 4s infinite linear;
  -o-animation: redImg 4s infinite linear;
}

.redBox {
  position: fixed;
}
img{
  display: block;
  width: 100px;
  height: auto;
}
</style>
