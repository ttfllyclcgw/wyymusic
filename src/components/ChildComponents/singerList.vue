<template>
  <div><slot name="singerLists"></slot></div>
</template>
<script>
export default {
    props:{
        titleFontSize:{
            type: Number,
            default:14
        },
    },
};
</script>
<style lang="less">
.ant-list-item-meta-content .ant-list-item-meta-description{
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    width:95%;
}
.ant-list-item-meta-content{
    width:10vw;
}
.ant-list-item-meta-content h4{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    width:70%;
}
.ant-list-items li{
    width:100%;
    padding-left: 5%;
}
</style>