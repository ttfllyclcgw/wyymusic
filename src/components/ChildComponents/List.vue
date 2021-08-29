<template>
    <!-- /标题栏 -->
    <div class="v-list">
        <a-icon class="v-list-icon" :class="{listIcon:islistIcon}" type="fire" theme="twoTone" two-tone-color="#C10D0C" />
        <slot name="listTitle"></slot>
        <div class="tab">
            <slot name="listTab"></slot>
        </div>
        <span class="more">
            <slot name="listMore"></slot>
        </span>
    </div>
</template>

<script>
export default {
  props:{
    islistIcon:{
      type: Boolean,
      required: true,
      default:false  //默认显示
    },
  }
}
</script>
<style lang="less">
@fontSize:1.3rem;
@color: #333;
@lineHeight: 3.2rem;
.v-list{
    width: 100%;
    border-bottom: 2px solid #C10D0C;
    height: 6.5vh;
    .v-list-title{
        color: @color;
        font-size: @fontSize;
        margin-left: 0.2vw;
        line-height: 2.8rem;
    }
    .tab a{
        color: @color;
    }
    .tab span{
        margin: 0 10px;
        color: #ccc;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-text-size-adjust: none;
    }
    .more a{
        color: @color;
        float: right;
        margin-right: 3vw;
        line-height: @lineHeight;
    }
}
.v-list-icon,.v-list a,.tab,.tab span{
    float: left;
}
.tab,.tab span{
    margin-left: 0.7vw;
    font-size: 0.9rem;
    line-height: @lineHeight;
}
.more{
    float: right;
    position: relative;
}
.v-list-icon{
    font-size: 1.2rem;
    margin-left: 0.5vw;
    margin-top: 1.9vh;
}
.more-icon{
    position: absolute;
    left: 2.7vw;
    top: 2.7vh;
}
.tab a:hover,.more a:hover{
    text-decoration: underline;
}

::-webkit-scrollbar-track-piece { 
  background-color:#f8f8f8;
}
::-webkit-scrollbar {
  width:9px;
  height:9px;
}
::-webkit-scrollbar-thumb {
  background-color:#dddddd;
  background-clip:padding-box;
  min-height:28px;
}
::-webkit-scrollbar-thumb:hover {
  background-color:#bbb;
}
#components-layout-demo-side::-webkit-scrollbar {
 width: 8px;
}
#components-layout-demo-side::-webkit-scrollbar-track {
 background-color:red;
 -webkit-border-radius: 2em;
 -moz-border-radius: 2em;
 border-radius:2em;
}
#components-layout-demo-side::-webkit-scrollbar-thumb {
 background-color:green;
 -webkit-border-radius: 2em;
 -moz-border-radius: 2em;
 border-radius:2em;
}
p{
    vertical-align: middle;
    color: #000;
    font-size: 12px;
}
</style>