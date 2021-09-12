<template>
    <div class="ranking">
        <slot name="rankingTitle"></slot>
        <slot name="rankingList"></slot>
    </div>
</template>


<script>
export default{

}
</script>
<style lang="less">
.ranking-title{
    height: 25vh;
}
.ranking-title img, .ranking-title .rktitle{
    float: left;
}
.ranking-title img{
    border: 1px solid #ccc;
    padding:2px;
}
.ranking-title{
    margin-left: 2vw;
    margin-top: 1vh;
}
.rktitle{
    margin-left: 2vw;
    margin-top: 2vh;
}
.ranking-title .rktitle > span{
    font-size: 12px;
    margin-left: 0.3vw;
}
.ranking-title .rktitle > div{
    margin-top: 2vh;
    width:40vw;
}
.rank-plus{
    margin-top:1%;
}
.ant-btn{
    margin-left: 0.3%;
}
.data-key,.data-title,.data-rank,.data-duration,.data-singer,.data-shelves{
    font-size: 12px;
}
.data-singer,.data-shelves,.data-title a{
    color:rgba(0, 0, 0, 0.65);
}
.data-singer:hover,.data-shelves:hover,.data-title a:hover{
    color:rgba(0, 0, 0, 0.65);
    text-decoration: underline;
}
.data-title img{
    width: 50px;
    height: 50px;
}
.data-rank{
    color: #c20c0c;
}
.data-title span{
    color: #aeaeae;
}
.data-title .anticon-play-circle,.data-title a{
    margin-left: 3%;
}
.data-title span{
    margin-left: 1%;
}
</style>