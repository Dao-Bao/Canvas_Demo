<template>
    <div class="canvas" ref="cvs" v-bind:style="{ styleCanvas }">
        <div class="pic">
            你好
            <img :src="picData" ref="pic" :style="{ stylePic }"/>
        </div>
    </div>   
</template>

<script>
export default {
    name: 'demo',
    data() {
        return {
            styleCanvas: {
                width: null,
                height:null,
            },
            stylePic: {
                width: null,  //300
                height: null,
                left: null,
                top: null,
            },
            picData: {
                src: "res.data.cc.url"
            }
        }
    },
    mounted () {
        this.$fetch('/api/index.json',this.data).then((res) => {
            // this.$refs.cvs.style.width = res.data.sceneW;  //json -> scenceW
            // this.$refs.cvs.style.height = res.data.sceneH;  //json -> scenceH

            // console.log(res.data);
            // console.log(res.data.cc);
            // console.log(res.data.sceneW);
            // console.log(res.data.sceneH);
            // console.log(res.data.cc.width);
            // console.log(res.data.cc.height);
            // console.log(res.data.cc.src);
            // console.log(res.data.cc.x);
            // console.log(this.$refs.cvs.style.width);
            // console.log("$");

            // this.$nextTick(() => {
            // })

            console.log(this.styleCanvas.width);


            var that = this;
            that.styleCanvas.width = res.data.sceneW;
            that.styleCanvas.height = res.data.sceneH;
            that.stylePic.width = res.data.cc.width;
            that.stylePic.height = res.data.cc.height;
            that.stylePic.left = res.data.cc.x;
            that.stylePic.top = res.data.cc.y;


            // console.log(that);
            // console.log(res.data.sceneW);
            console.log(that.styleCanvas.width);
            // console.log(that.stylePic.width);

        })
     }
  }
</script>