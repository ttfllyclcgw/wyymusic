<template>
    <div>
        <slot name="singerMusic">
            
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
    }*/
}
</script>
<style lang="less">
@color:#000;
@width:100px;
@height:100px;
.singer-ul{
    padding:0;
}
.singer-ul li{
    list-style-type: none;
    width:@width;
    margin-left:2vw;
    float: left;
}
.singer-ul li:nth-child(1){
    margin-left: 6%;
}
.singer-image{
    position: relative;
    margin-top:3vh;
}
.singer-image img{
    opacity: 0.7;
    width:@width;
    height: @height;
}
.singer-msk{
    position: absolute;
    z-index:2;
    left: 0;
    width: @width;
    height: @height;
}
.singer-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: @width;
    height: 27px;
    color:#ccc;
    opacity: 0.6;
    z-index: 3;
    line-height: 28px;
}
.singer-bottom .bottom-bf{
    cursor: pointer;
    z-index: 4;
    position: absolute;
    bottom:@height*0.05%;
    left: @width*0.75%;
}
.singer-bottom .bottom-bf:hover{
    color:#fff;
}
.singer-dec a{
    width: @width;
    color: @color;
}
.singer-dec a:hover{
    text-decoration: underline;
    color: @color;
}
.singer-dec{
    margin-bottom: 0;
    width:@width;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.singer-love em{
    font-style: normal;
    text-align: left;
    font-size: 12px;
    color: #999;
    display: block;
}
</style>
