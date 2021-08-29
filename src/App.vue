<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible class="menu-sider">
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>发现音乐</span></span>
          <a-menu-item key="1">
            <router-link to="/discovrMusic/recommend">推荐</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/discovrMusic/rankingList">排行榜</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/discovrMusic/songList">歌单</router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/discovrMusic/newsRadio">主播电台</router-link>
          </a-menu-item>
          <a-menu-item key="5">
            <router-link to="/discovrMusic/singer">歌手</router-link>
          </a-menu-item>
          <a-menu-item key="6">
            <router-link to="/discovrMusic/newShelves">新碟上架</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="video-camera" /><span>我的音乐</span></span>
          <a-menu-item key="7">
            <router-link to="/myMusic/createdPlaylist">创建的歌单</router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <router-link to="/myMusic/collectPlaylist">收藏的歌单</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <router-link to="/friend"><a-icon type="team" /><span>朋友</span></router-link>
        </a-menu-item>
        <a-menu-item key="10">
          <router-link to="/discovrMusic/recommend"><a-icon type="cloud-o" /><span>商城</span></router-link>
        </a-menu-item>
        <a-menu-item key="11">
          <router-link to="/discovrMusic/recommend"><a-icon type="pie-chart" /><span>音乐人</span></router-link>
        </a-menu-item>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="appstore-o" /><span>个人中心</span></span>
          <a-menu-item key="12">
            <router-link to="/personal/myHomepage">我的主页</router-link>
          </a-menu-item>
          <a-menu-item key="13">
            <router-link to="/personal/mySetting">个人设置</router-link>
          </a-menu-item>
        </a-sub-menu>
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
        <div :style="{ background: '#fff',height: '100%' }">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
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
  mounted(){
    this.$router.push('/discovrMusic/recommend')
    
  },
  methods:{
    
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
  background: url(assets/topbar.png?d2f76305527ad432e0bcf8ce0bfbaa4e) no-repeat 8px -19.5px;
  margin: 16px;
}
#components-layout-demo-side{
  position: relative;
  overflow-y: auto;
}
.menu-aplayer{
  height: 10%;
  padding: 0;
  position:fixed;
  right: 0;
  width:86.9%;
  min-width:30%;
}
.menu-sider{
  position:fixed;
  height: 100%;
  white-space: nowrap;
}
.menu-content{
  margin-left:13.5%;
  margin-top:6.5%;
  width:86%;
  height: 100%;
  overflow-y: auto;
}
.menu-footer{
  text-align: center;
  padding: 0;
}


</style>
