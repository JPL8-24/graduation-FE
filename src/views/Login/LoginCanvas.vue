<template>
    <div class="Canvas">
        <canvas id="cas" ></canvas>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                timer:''
            }
        },
        components: {},
        methods: {
        },
        mounted() {
            let c = document.getElementById('cas')
            c.width=document.body.clientWidth
            c.height=document.body.clientHeight
            let ctx = document.getElementById('cas').getContext('2d')
            //基点的构造元素
            function Circle(color, count) {
                this.x = 0; //基点的x坐标
                this.y = 0; //基点的y坐标
                this.r = 25; //基点半径
                this.color = color; //基点的颜色
                this.shadowCount = count; //基点散发的粒子个数
                this.shadows = []; //基点散发的粒子对象集合
                //初始化粒子的方法
                this._circle = function () {
                    for (var i = 0; i < this.shadowCount; i++) {
                        this.shadows.push(new Shadow());
                    }
                }
                this._circle();
            }
            //基点对象的渲染方法
            Circle.prototype.rounder = function (x, y) {
                this.x = x;
                this.y = y;
                for (var i = 0; i < this.shadows.length; i++) {
                    this.shadows[i].initShadow(this);
                }
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                ctx.fill();
            }
            //粒子对象
            function Shadow(obj) {
                this.jg = Math.random() * 30; //渲染粒子的间隔
                this.x = -1000; //粒子的x坐标
                this.y = -1000; //粒子的y坐标
                this.r = -1000; //粒子的半径
                var R = parseInt(Math.random() * 256); //颜色的随机数
                var G = parseInt(Math.random() * 256); //颜色的随机数
                var B = parseInt(Math.random() * 256); //颜色的随机数
                this.color = "rgb(" + R + "," + G + "," + B + ")"; //粒子颜色
                this.fadeR = 300; //粒子的消失距离
                //粒子移动的角度的弧度值
                var jd = Math.PI / 180 * (parseInt(Math.random() * 360))
                //根据粒子角度来计算得到的粒子x与y方向的速度
                this.sx = Math.sin(jd) * this.fadeR / 100;
                this.sy = Math.cos(jd) * this.fadeR / 100;
            }
            //粒子对象渲染方法
            Shadow.prototype.initShadow = function (obj) {
                //由于每个粒子对象是同时绘制，所以定义随机间隔来实现时间差效果
                if (this.jg < 0) {
                    //当数据初始化之后就不再重新对影子赋值
                    if (this.x == -1000) {
                        this.x = obj.x;
                    }
                    if (this.y == -1000) {
                        this.y = obj.y;
                    }
                    if (this.r == -1000) {
                        this.r = obj.r;
                    }
                    //只有在对象的半径是正数的时候渲染影子
                    if (this.r > 0) {
                        ctx.beginPath();
                        ctx.fillStyle = this.color;
                        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                        this.x += this.sx;
                        this.y += this.sy;
                        this.r -= this.fadeR / 300;
                        ctx.fill();
                    } else {
                        //当半径失效之后调用初始化方法让粒子重新出现实现单个对象的不规则状态循环
                        this.init();
                    }
                } else {
                    this.jg--;
                }
            }
            //粒子结束后重新初始化
            Shadow.prototype.init = function () {
                this.jg = Math.random() * 30;
                this.x = -1000;
                this.y = -1000;
                this.r = -1000;
                var R = parseInt(Math.random() * 256);
                var G = parseInt(Math.random() * 256);
                var B = parseInt(Math.random() * 256);
                this.color = "rgb(" + R + "," + G + "," + B + ")";
                this.fadeR = 300;
                var jd = Math.PI / 180 * (parseInt(Math.random() * 360))
                this.sx = Math.sin(jd) * this.fadeR / 100;
                this.sy = Math.cos(jd) * this.fadeR / 100;
            }
            //实例化本体对象
            let c1 = new Circle("rgba(100,230,140,0.5)", 100);
            let x = 0;
            let y = 0;
            //动画启动方法
            function startFill() {
                ctx.clearRect(0, 0, c.width, c.height)
                c1.rounder(x, y)
                
            }
            //鼠标跟踪方法
            c.addEventListener("mousemove", function (e) {
                x = e.offsetX;
                y = e.offsetY;
            });
            //开启定时器
            this.timer=setInterval(startFill, 17)
        },
        destroyed(){
            clearInterval(this.timer)
        
        }
    }
</script>

<style scoped>
    .Canvas {
        width: 100%;
        height: 100%;
        position: fixed;
    }
</style>