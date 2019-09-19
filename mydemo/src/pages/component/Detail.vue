<template>
  <div class="a">
    <div class="canvas" ref="cvs" v-for="item of styleImg" :key="item.id">
      <div class="b">
        <img :src="item.imgUrl" @click="emitToParent(item.id)" ref="test" />
        <!-- <button >点击切换下一张</button>             -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      "styleImg": {}
    }
  },
  methods: {
    hide () {
      this.isShow = false;
    },
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data;
      this.styleImg = res.data.styleImgList;
    },

    emitToParent (info) {
      this.$emit('change', this.$refs.test[info].src);
      // this.$emit('child-event',this.imgUrl);
    },
    next (res) {
      var id = res.id;
      // console.log(res.id);
    }
  },
  watch: {
    img: {

    }
  },
  mounted () {
    this.getHomeInfo();
  }
}
</script>
<style scoped>
.a {
  width: 1080px;
  height: 1920px;
  position: absolute;
  left: 1080px;
  background-color: rgba(250, 240, 230, 0.5);
}
.b {
  padding: 40px;
}
</style>