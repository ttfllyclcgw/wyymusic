<template>
    <!-- /发现音乐/歌单/歌单详情 -->
    <div class="singer">
        <a-row class="rank-a-row">
            <a-col :span="16" class="left-rank-row">
                <Ranking>
                    <template v-slot:rankingTitle>
                        <div class="ranking-title songlist-details">
                            <img :src="songListData.coverImgUrl" style="width:146px;height:146px;" />
                            <div class="rktitle">
                                <span class="details-type">歌单</span><h2>{{songListData.name}}</h2>
                                <img :src="songListData.creator.avatarUrl" style="width:40px;height:40px;cursor:pointer;border:0 solid" />
                                <router-link to="/discoverMusic/userDetails" 
                                    class="songlist-details-user">{{songListData.creator.nickname}}</router-link>
                                <span>{{songListData.createTime | formatDate}} 创建</span>
                                <div>
                                    <a-button type="primary" icon="play-circle" >播放</a-button>
                                    <a-button type="primary" icon="plus"  class="rank-plus" style="font-size:12px" />
                                    <a-button icon="folder-add" >({{songListData.subscribedCount}})</a-button>
                                    <a-button icon="rise" >({{songListData.shareCount}})</a-button>
                                    <a-button icon="download" >下载</a-button>
                                </div>
                                <div class="songlist-details-tag">
                                    <span>标签：</span>
                                    <ul>
                                        <li v-for="(item,index) in songListData.tags" :key="index">
                                            <a-tag><a href="#">{{item}}</a></a-tag>
                                        </li>
                                    </ul>
                                </div>
                                <div class="songlist-details-descriptions">
                                    <span>介绍：</span>
                                    <span>{{songListData.description | maxEllipsis}}</span>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-slot:rankingList>
                        <div class="ranking-list">
                            <List :islistIcon="true">
                                <template v-slot:listTitle>
                                    <a href="#" class="v-list-title" style="cursor:default;textDecoration:none;">歌曲列表</a>
                                </template>
                                <template v-slot:listTab>
                                    <a href="#" style="font-size:12px;margin-left:1vw;margin-top:0.2vh;cursor:default;textDecoration:none;">{{songListData.trackCount}}首歌</a>
                                </template>
                                <template v-slot:listMore>
                                    <a href="#" style="font-size:12px;cursor:default;textDecoration:none;margin-right:1vw;margin-top:1vh;">
                                        播放：<em style="color:#c20c0c">{{songListData.playCount}} </em>次
                                    </a>
                                </template>
                            </List>
                            <table class="qgg-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>标题</th>
                                        <th>时长</th>
                                        <th>歌手</th>
                                        <th>专辑</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in songListData.tracks" :key="index">
                                        <td width="5%">{{index+1}}</td>
                                        <td width="60%">
                                            <a-icon class="bottom-bf qgg-table-playCircle" type="play-circle" />
                                            <a href="#" :title="item.name">{{item.name}}</a>
                                            <span v-for="(items,index1) in item.alia" :key="index1" :title="items">
                                                {{index1 === item.alia.length ? " ":"- "}}{{items}}
                                            </span>
                                        </td>
                                        <td width="10%">{{item.dt | formatSeconds}}</td>
                                        <td width="5%" class="qgg-table-singer">
                                            <div class="qgg-table-singer-div">
                                                <a href="#" v-for="(items,index2) in item.ar" :key="index2" 
                                                    :title="items.name" >{{items.name}}{{index2 === item.ar.length-1 ? " ":" / "}}</a>
                                            </div>
                                        </td>
                                        <td width="20%" class="qgg-table-singer">{{item.al.name | minEllipsis}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </template>
                </Ranking>
            </a-col>
            <a-col :span="4" class="right-rank-row">
                <div class="recommend-singer love-songlist">
                    <List :islistIcon="true" style="border-bottom:1px solid #ccc">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" 
                                style="font-size:12px;font-weight:bold;margin:1.5vh 0 0 -1vw;cursor: default;">喜欢这个歌单的人</a>
                        </template>
                    </List>
                    <ul class="love-songlist-user clearfix">
                        <li v-for="(item,index) in songListData.subscribers" :key="index">
                            <img :src="item.avatarUrl"  :title="item.nickname" style="width:40px;height:40px" />
                        </li>
                    </ul>
                </div>
                <div class="recommend-singer">
                    <List :islistIcon="true" style="border-bottom:1px solid #ccc">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" 
                                style="font-size:12px;font-weight:bold;margin:1.5vh 0 0 -1vw;cursor: default;">热门歌单</a>
                        </template>
                    </List>
                    <SingerList>
                        <template v-slot:singerLists>
                            <a-list item-layout="horizontal" :data-source="hotSongData">
                                <a-list-item slot="renderItem" slot-scope="item">
                                    <a-list-item-meta :description="item.creator.nickname">
                                        <a slot="title" href="#" :title="item.name">{{ item.name }}</a>
                                        <a-avatar slot="avatar" shape="square" :size="64"  :src="item.coverImgUrl"/>
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </template>
                    </SingerList>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import Ranking from '../ChildComponents/ranking.vue'
import List from '../ChildComponents/List.vue'
import SingerList from '../ChildComponents/singerList.vue'
import axios from '../../utils/services'
export default {
    components:{
        Ranking,
        List,
        SingerList
    },
    props:['id'],
    data(){
        return{
            /** 歌曲列表 */
            songListData:[],
            /** 热门歌单 */
            hotSongData:[]
        }
    },
    filters:{
        /** 年/月/日 */
        formatDate: function (value) {
            let date = new Date(value);
            let yy = date.getFullYear()
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return yy +'-'+ MM + '-' + d;
        },
        /** 分/秒 */
        formatSeconds: function(value){
            let date = new Date(value);
            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;
            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            return m + ':' + s;
        },
        /** 字符超长处理 */
        minEllipsis (value) {
            if (!value) return ''
            if (value.length > 10) {
                return value.slice(0,10) + '...'
            }
            return value
        },
        maxEllipsis (value) {
            if (!value) return ''
            if (value.length > 100) {
                return value.slice(0,100) + '...'
            }
            return value
        }
    },
    mounted(){
        this.getPath()
    },
    watch:{
        '$route':'getPath'
    },
    methods:{
        /** 监听路由，每次进入页面调用方法，放在method里 */
        getPath(){
            if(this.$route.path == '/discoveryMusic/list/details'){
                this.songDetailsList(); //初始化方法
                this.hotSongList();
            }
        },
        /** 获取歌单详情 */
        songDetailsList(){
            axios.get(`/playlist/detail?id=${this.$route.query.id}`)
                .then((response)=>{
                    this.songListData = response.data.playlist
                })
        },
        /** 热门歌单/top/playlist?limit=5 */
        hotSongList(){
            axios.get(`/top/playlist?limit=5`)
                .then((response)=>{
                    this.hotSongData = response.data.playlists
                })
        }
        
    }
}
</script>
<style lang="less">
.songlist-details{
    height: 37vh;
}
.details-type{
    width:50px;
    height:24px;
    display: block;
    background: #d21a1a;
    color: #fff;
    border-radius: 10px;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
    position: absolute;
    top: 25px;
}
.songlist-details h2{
    margin-left: 4.5vw;
}
.rktitle .songlist-details-user,.rktitle .songlist-details-user + span{
    line-height: 35px;
}
.rktitle .songlist-details-user{
    color: #0c73c2;
    margin-left: 0.5vw;
}
.rktitle .songlist-details-user:hover{
    color: #0c73c2;
    text-decoration: underline;
}
.rktitle .songlist-details-user + span{
    margin-left: 1vw;
}
.songlist-details-tag{
    position: absolute;
    left: 2vw;
}
.songlist-details-tag ul li{
    list-style-type: none;
    float: left;
    margin-top: -3vh;
}
.songlist-details-descriptions{
    position: absolute;
    left: 2vw;
    top: 28vh;
}
.songlist-details-tag span,.songlist-details-descriptions span{
    font-size: 12px;
}
.love-songlist{
    height: 24vh;
}
.love-songlist-user{
    clear: both;
    height: 23vh;
    padding: 0;
}
.love-songlist-user li{
    list-style-type: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    float: left;
    margin-left:0.4vw;
    margin-top:1vh;
    padding: 0;
}
</style>