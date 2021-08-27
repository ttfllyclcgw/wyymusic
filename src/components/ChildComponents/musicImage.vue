<template>
    <div>
<<<<<<< HEAD
        <slot name="recommend">
            <!--<ul class="music-ul">
                <li v-for="(item,index) in this.data" :key="index">
                    <div class="music-image">
                        <img :src="item.musicImg" />
                        <a class="music-msk" :title="item.musicMsk" href="#"></a>
                        <div class="music-bottom" :class="{musicBottom:ismusicBottom}">
                            <a-icon class="bottom-ej" type="customer-service" />
                            <span class="nb">{{item.musicNb}}</span>
                            <a-icon class="bottom-bf" title="播放" type="play-circle" />
=======
        <ul class="music-ul">
            <li v-for="(item,index) in this.data" :key="index">
                <div class="music-image">
                    <img :src="item.musicImg" />
                    <a class="music-msk" :title="item.musicMsk" href="#"></a>
                    <div class="music-bottom" :class="{musicBottom:ismusicBottom}">
                        <a-icon class="bottom-ej" type="customer-service" />
                        <span class="nb">{{item.musicNb}}</span>
                        <a-icon class="bottom-bf" title="播放" type="play-circle" />
>>>>>>> 7ca55df75242e283b08a943cfc8dbd796dfdfc41
                    </div>
                    </div>
                    <p :class="{dec:isdec}" class="music-dec"><a href="#">{{item.musicMsk}}</a></p>
                    <p :class="{love:islove}" class="music-love"><em :title="item.musicLove">{{item.musicLove}}</em></p>
                </li>
            </ul>-->
        </slot>
    </div>
</template>
<script>
export default{
    /**props:{
        isdec:{     //描述是否显示 false为显示
            type: Boolean,
            required: true,
            default: false
        },
        islove:{    //口味/歌手是否显示 false为显示
            type: Boolean,
            required: true,
            default: false
        },
        ismusicBottom:{ //播放量/播放是否显示 false为显示
            type: Boolean,
            required: true,
            default: false
        },
        isData:{
            type:Array
        }
    },
    data(){
        return{
            data: this.isData
        }
    },
    methods:{
<<<<<<< HEAD
    }*/
=======
    }
>>>>>>> 7ca55df75242e283b08a943cfc8dbd796dfdfc41
}
</script>
<style lang="less">
@color:#000;
@width:100%;
@height:100%;
.music-ul{
    padding:0;
}
.music-ul li{
    list-style-type: none;
    width: 140px;
    margin-left:6.5%;
    float: left;
}
.music-image{
    position: relative;
    margin-top:3vh;
}
.music-image img{
    opacity: 0.7;
}
.music-msk{
    position: absolute;
    z-index:2;
    left: 0;
    width: @width;
    height: @height;
}
.music-bottom{
    position: absolute;
    bottom: 0;
    left:0;
    width: @width;
    height: 27px;
    color:#ccc;
    background-color:@color;
    opacity: 0.6;
    z-index: 3;
    line-height: 28px;
    vertical-align: middle;
}
.bottom-ej{
    margin-left: 5%;
}
.music-bottom .nb{
    margin-left: 5%;
}
.music-bottom .bottom-bf:hover{
    color:#fff;
}
.music-dec a{
    width: @width;
    color: @color;
}
.music-dec a:hover{
    text-decoration: underline;
    color: @color;
}
.music-dec{
    margin-bottom: 0;
}
.music-bottom .bottom-bf{
    cursor: pointer;
    z-index: 4;
    position: absolute;
    bottom: 25%;
    right: 7%;
}
.dec,.love,.musicBottom{
    display:none;
}
.music-love em{
    font-style: normal;
    text-align: left;
    font-size: 0.7rem;
    color: #999;
    display: block;
    width:140px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>
