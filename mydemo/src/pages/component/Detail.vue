<template>
    <div class="a">
        <div @click="emitToParent"
            class="canvas"
            ref="cvs"
            v-for="item of styleImg"
            :key="item.id" >
            <div class="b" :id="item.id">
                <img :src="item.imgUrl"  @click="next(item.id)"  />
            <!-- <button >点击切换下一张</button>             -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
        name: 'Detail',
        data() {
            return {
                "styleImg":{}
            }
        },
        methods: {
            hide(){
                this.isShow = false;
            },
            getHomeInfo () {
                axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data;
                // console.log(res.data.styleImgList[0].imgUrl);
                // console.log(res.data.styleImgList[0].id);
                // this.styleImg.imgUrl = res.data.styleImgList[0].imgUrl;
                this.styleImg = res.data.styleImgList;
                // this.styleImg.id = res.data.styleImgList.id;
            },

            emitToParent() {
                this.$emit('child-event',this.styleImg);
                // this.$emit('child-event',this.imgUrl);
            },
            next(res) {
                var id=res.id;
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
    .a{
        width: 1080px;
        height: 1920px;
        position: absolute;
        left: 1080px;
        background-color: rgba(250, 240, 230, 0.5);
    }
    .b{
        padding: 100px;
    }
</style>