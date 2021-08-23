<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>发现音乐</span></span>
          <a-menu-item key="1">推荐</a-menu-item>
          <a-menu-item key="2">排行榜</a-menu-item>
          <a-menu-item key="3">歌单</a-menu-item>
          <a-menu-item key="4">主播电台</a-menu-item>
          <a-menu-item key="5">歌手</a-menu-item>
          <a-menu-item key="6">新碟上架</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="video-camera" /><span>我的音乐</span></span>
          <a-menu-item key="7">创建的歌单</a-menu-item>
          <a-menu-item key="8">收藏的歌单</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="team" /><span>朋友</span>
        </a-menu-item>
        <a-menu-item key="10">
          <a-icon type="cloud-o" /><span>商城</span>
        </a-menu-item>
        <a-menu-item key="11">
          <a-icon type="pie-chart" /><span>音乐人</span>
        </a-menu-item>
        <a-menu-item key="12">
          <a-icon type="appstore-o" /><span>个人中心</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="menu-aplayer">
        <!--music：当前播放的音乐 list：播放列表 showlrc：是否显示歌词 listFolded:是否显示歌曲列表
        listMaxHeight:播放列表面板最大高度-->
        <aplayer class="music-aplayer" :music="musics[0]" :list="musics" :showLrc="true" :listFolded="true"
           listMaxHeight="100px" style="margin:0"></aplayer>
      </a-layout-header>
      <a-layout-content class="menu-content">
        <!--<a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>发现音乐</a-breadcrumb-item>
          <a-breadcrumb-item>推荐</a-breadcrumb-item>
        </a-breadcrumb>-->
        <div :style="{ background: '#fff', minHeight: '80vh' }">
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer class="menu-footer">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import aplayer from 'vue-aplayer'  //引入vue-aplayer音频播放器
export default {
  components:{
    aplayer
  },
  mounted:{
  },
  data() {
    return {
      collapsed: false,
      detailForm: {
       clickType: "",
       title: "ajlgaljg",
     },
     // 音频列表
     musics: [
       {
         title: "目及皆是你",
         artist: "小蓝背心",
         src: "歌曲文件的URL",
         pic: "封面图片URL",
         lrc: "歌词或歌词文件的URL",
       },
       {
         title: "星辰大海",
         artist: "黄霄雲",
         url: "歌曲文件的URL",
         pic: "封面图片URL",
         lrc: "歌词或歌词文件的URL",
       }
     ],
    };
  },
}
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: url(../assets/topbar.png?d2f76305527ad432e0bcf8ce0bfbaa4e) no-repeat 8px -19.5px;
  margin: 16px;
}
.menu-aplayer{
  height: 14vh;
  padding: 0;
  background: #fff;
}
.menu-content{
  margin: 2vh 2vh 0 2vh;
}
.menu-footer{
  text-align: center;
  padding: 0;
}
</style>
