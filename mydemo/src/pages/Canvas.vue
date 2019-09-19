<template>
  <div>
    <div ref="canvasbox" class="canvasbox">
      <canvas ref="canvas_f" id="cvs_f"
        width="1080" height="1920"
        ></canvas>

      <canvas ref="canvas_s" id="cvs_s" 
        width="600" height="600" 
        @click="Show()">
        </canvas>
    </div>
    <img src="https://i.loli.net/2019/09/19/ITEe8mHhxvVau9n.png" class="c" @click="Clear">
    <div @click="Show()">
      <Detail @change="changUrl" v-show="isShow" ></Detail>
    </div>
  </div>
</template>

<script>
import Detail from './component/Detail'
export default {
  name: 'Canvas',
  data () {
    return {
      ctx: '',
      tagObj: {
        x: 0,
        y: 0,
        url: ''
      },
      isShow: false,
      test: ""
    }
  },
  components: {
    Detail
  },
  mounted () {
    this.drawImgBj();
    this.drawImgLp();
  },
  methods: {
    drawImgBj () {
      var cvs = document.getElementById('cvs_f');
      let ctx = this.$refs.canvas_f.getContext('2d');
      let imgs = new Image();  //背景图片
      ctx.beginPath();
      imgs.onload = function () {
        var bg = ctx.createPattern(imgs, "no-repeat");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, cvs_f.width, cvs_f.height);
      }
      imgs.src = "https://i.loli.net/2019/09/17/UEYBrKkxd1i7IDZ.png";
    },
    changUrl (info) {
      // console.log(info)
      this.src = info;
      this.test2();
    },
    test2 () {
      let ctx = this.$refs.canvas_s.getContext('2d');
      let img = new Image();  //后台获取图片
      img.onload = function () {
        ctx.drawImage(img, 0, 0, 600, 600);
        ctx.strokeRect(242, 625, 600, 600);
      }
      img.src = this.src;

    },
    drawImgLp () {
      let ctx = this.$refs.canvas_s.getContext('2d');
      let img = new Image();  //轮盘图片
      img.onload = function () {
        ctx.drawImage(img, 0, 0, 600, 600);
        ctx.strokeRect(242, 625, 600, 600);
      }
      img.src = "https://ftp.bmp.ovh/imgs/2019/09/6dc43257fdfc74ac.png";

    },
    Show () {
      this.isShow = true;
    },
    Clear () {
      let ctx_f = this.$refs.canvas_s.getContext('2d');
      ctx_f.clearRect(0, 0, 600, 600);
    }
  }
}
</script>

<style scoped>
.canvasbox {
  width: 100%;
  height: 100%;
  position: relative;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  /* background-color:purple; */
}
#cvs_s {
  position: absolute;
  left: 235px;
  top: 650px;
}
.c {
  width: 60px;
  height: 60px;
  position: absolute;
  left: 815px;
  top: 615px;
}
</style>