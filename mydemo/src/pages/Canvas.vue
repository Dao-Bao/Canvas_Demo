<template>
    <div ref="canvasbox" class="canvasbox">
        <canvas ref="canvas_f" id="cvs_f"
        width='1080' height='1920'
        >
        </canvas>

        <canvas ref="canvas_s" id="cvs_s"
        width="600" height="600"
        @click="Show()"
        ></canvas>
        
        <canvas ref="canvas_t" id="cvs_t"
        width="600" height="600"
        @click="Show()"
        ></canvas>

        <detail 
         v-show="isShow" @child-event="parentEvent" ref="detail"
        :isShow="isShow">
        </detail>

        <img src="https://i.loli.net/2019/09/19/kos4Bdn5gM3fV8I.png" class="c" @click="Clear()">
    </div>
</template>

<script>
import Detail from './component/Detail'
export default {
    name: 'Canvas',
    data() {
        return{
            ctx: '',
            tagObj: {
                // rect:[{h:150, w:200, x: 350, y:161}],
                x:0,
                y:0,
                url:''
            },
            isShow:false,
            drawImageArray:[]
        }
    },
    components: {
        Detail
    },
    mounted() {
        this.drawImgBj();
        this.drawImgLp();
    },
    methods: {
        drawImgBj() {
            var cvs = document.getElementById('cvs_f');
            let ctx = this.$refs.canvas_f.getContext('2d');
            let imgs = new Image();  //背景图片
            // let img = new Image();  //轮盘图片
            imgs.src = "https://i.loli.net/2019/09/17/UEYBrKkxd1i7IDZ.png";
            // img.src ="https://ftp.bmp.ovh/imgs/2019/09/6dc43257fdfc74ac.png";
            ctx.beginPath();
            imgs.onload = function() {
                var bg = ctx.createPattern(imgs, "no-repeat");
                ctx.fillStyle = bg;
                ctx.fillRect(0, 0, cvs_f.width, cvs_f.height);
                // ctx.drawImage(img, 242, 625, 600, 600);
                // ctx.strokeRect(242, 625, 600, 600);                
            }
        },
        drawImgLp() {
            let ctx = this.$refs.canvas_s.getContext('2d');
            // let imgs = new Image();  //背景图片
            let img = new Image();  //轮盘图片
            // imgs.src = "https://i.loli.net/2019/09/17/UEYBrKkxd1i7IDZ.png";
            img.src ="https://ftp.bmp.ovh/imgs/2019/09/6dc43257fdfc74ac.png";
            img.onload = function() {
                ctx.drawImage(img, 0, 0, 600, 600);
                ctx.strokeRect(242, 625, 600, 600);             
            }
        },
        Show() {
            this.isShow = true;
        },
        parentEvent(data) {
            console.log(data);
            let ctx = this.$refs.canvas_s.getContext('2d');
            let img  = new Image();
            // let drawImageArray=new Array;
            // console.log(data[0].imgUrl);
            // for(var i=0;i<data.length;i++){
            //     console.log(data[i].id);
            //     console.log(data[i].imgUrl);
            //     img.src=data[i].imgUrl;
            // }
            // console.log(drawImageArray);
            // drawImageArray.push(data[0].id, data[0].imgUrl);
            // console.log(drawImageArray);
            img.src = data[0].imgUrl;
            // onclick = this.$options.methods.Clear();
            img.src = data[1].imgUrl;
            img.src = data[2].imgUrl;
            // img.src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1991077321,1838931410&fm=26&gp=0.jpg";
            // img.src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1138872300,3541432612&fm=26&gp=0.jpg";
            // img.src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4263179180,2837457146&fm=26&gp=0.jpg";
            img.onload = function() {
                ctx.drawImage(img,0,0,600,600);
            }
        },
        // anotherCanvas() {
        //     var cvs = document.getElementById('cvs_t');
        //     let ctx = this.$refs.canvas_t.getContext('2d');
        //     let imgs = new Image();
        //     imgs.src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1138872300,3541432612&fm=26&gp=0.jpg";
        //     imgs.onload = function() {
        //         ctx.drawImage(imgs,0,0,600,600);
        //     }            
        // },
        Clear() {
            let ctx_f = this.$refs.canvas_s.getContext('2d');
            ctx_f.clearRect(0,0,600,600);
        }
    }
}
</script>

<style scoped>
    .canvasbox{
        width: 100%;
        height: 100%;
        position: relative;
    }
    canvas{
        position: absolute;
        top: 0;
        left: 0;
        /* background-color:purple; */
    }
    #cvs_s{
        position: absolute;
        left: 235px;
        top: 650px;
    }
    .c {
        width:60px;
        height: 60px;
        position: absolute;
        left: 815px;
        top: 615px;
    }
</style>