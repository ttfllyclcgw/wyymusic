<template>
  <a-list item-layout="horizontal" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta :description="item.description" :style="{fontSize:`${descriptionFontSize}px`}">
        <a slot="title" href="#" :style="{fontSize:`${titleFontSize}px`}">{{ item.title }}</a>
        <a-avatar
          slot="avatar" shape="square" :size="64"  src="/109951166027478939.jpg"/>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
<script>
const data = [
  {
    title: '张惠妹aMEl',
    description:'台湾歌手张惠妹'
  },
  {
    title: 'Fine乐团',
    description:'独立音乐人'
  },
  {
    title: '萬曉利',
    description:'民谣歌手、中国现代民谣的代表人物之一'
  },
  {
    title: '音乐人赵雷',
    description:'民谣歌手'
  },
  {
    title: '王三薄',
    description:'音乐人'
  },
];
export default {
    props:{
        titleFontSize:{
            type: Number,
            default:14
        },
        descriptionFontSize:{
            type:Number,
            default:12
        }
    },
    data() {
        return {
            data,
        };
    },
};
</script>
<style lang="less">
.xx{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
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
    width:50%;
}
.ant-list-items li{
    width:100%;
    padding-left: 5%;
}
</style>