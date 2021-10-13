<template>
    <!-- 个人中心/我的主页 -->
    <div>
        <a-row class="rank-a-row">
            <a-col :span="20" class="right-rank-row">
                <Ranking>
                    <template v-slot:rankingTitle>
                        <div class="ranking-title">
                            <img :src="userItem[0].avatarUrl" style="width:188px;height:188px" />
                            <div class="rktitle rktitle-home">
                                <div class="rktitle-1">
                                    <h2>{{userItem[0].nickname}}</h2>
                                    <a-icon type="man" v-if="userItem[0].gender === 1" :style="{fontSize:'16px',color:'#08c'}" />
                                    <a-icon type="woman" v-else-if="userItem[0].gender === 0" :style="{fontSize:'16px',color:'hotpink'}" />
                                    <a-icon v-else  />
                                    <a-button class="update-myhome" >编辑个人资料</a-button>
                                </div>
                                <dataCount class="user-data-2"></dataCount>
                                <div class="rktitle-3">
                                    <span>所在地区：</span><span>广东省 - 珠海市</span>
                                    <span class="sep">出生日期：</span><span>{{userItem[0].birthday | formatDate}}</span>
                                </div>
                            </div>
                        </div>
                    </template>
                    <!--<template v-slot:rankingList>
                        <div class="ranking-list">
                            <List :islistIcon="true">
                                <template v-slot:listTitle>
                                    <a href="#" class="v-list-title" style="cursor:default;textDecoration:none;">听歌排行</a>
                                </template>
                                <template v-slot:listTab>
                                    <a href="#" style="font-size:12px;margin-left:1vw;margin-top:0.2vh;cursor:default;textDecoration:none;">
                                        累积听歌<em>22190</em>首
                                    </a>
                                </template>
                                <template v-slot:listMore>
                                    <a href="#">最近一周</a>
                                </template>
                            </List>
                            <a-table :columns="rankColumns" :row-key="record=>record.key" :data-source="rankData">
                                <a slot="name" slot-scope="text">{{ text }}</a>
                            </a-table>
                        </div>
                    </template>-->
                </Ranking>
                <div class="hot-recommend">
                    <List :islistIcon="true">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title">我创建的歌单</a>
                        </template>
                        <template v-slot:listTab>
                            <a href="#">(<em>{{createdSong.length}}</em>)</a>
                        </template>
                    </List>
                    <div class="hot-recommend-music my-create-song">
                        <MusicImage>
                            <template v-slot:recommend>
                                <ul class="music-ul my-create-song-ul" v-if="createdSong.length">
                                    <li v-for="item in createdSong" :key="item.id">
                                        <div class="music-image song-image">
                                            <img :src="item.coverImgUrl"  />
                                            <a class="music-msk" :title="item.name" href="#"></a>
                                            <div class="music-bottom">
                                                <a-icon class="bottom-ej" type="customer-service" />
                                                <span class="nb">{{item.playCount}}</span>
                                                <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                            </div>
                                        </div>
                                        <p class="music-dec"><a href="#" :title="item.name">{{item.name}}</a></p>
                                    </li>
                                </ul>  
                            </template>
                        </MusicImage>
                    </div>
                </div>
                <div class="hot-recommend">
                    <List :islistIcon="true">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title">我收藏的歌单</a>
                        </template>
                        <template v-slot:listTab>
                            <a href="#">(<em>{{collectSong.length}}</em>)</a>
                        </template>
                    </List>
                    <div class="hot-recommend-music my-collect-song">
                        <MusicImage>
                            <template v-slot:recommend>
                                <ul class="music-ul my-collect-song-ul" v-if="collectSong.length">
                                    <li v-for="item in collectSong" :key="item.id">
                                        <div class="music-image song-image">
                                            <img :src="item.coverImgUrl" style="width:140px;height:140px" />
                                            <a class="music-msk" :title="item.name" href="#"></a>
                                            <div class="music-bottom">
                                                <a-icon class="bottom-ej" type="customer-service" />
                                                <span class="nb">{{item.playCount}}</span>
                                                <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                            </div>
                                        </div>
                                        <p class="music-dec"><a href="#" :title="item.name">{{item.name}}</a></p>
                                    </li>
                                </ul>  
                            </template>
                        </MusicImage>
                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import Ranking from '../ChildComponents/ranking'
import List from '../ChildComponents/List'
import MusicImage from '../ChildComponents/musicImage'
import dataCount from '../ChildComponents/dataCount'
import {mapGetters} from 'vuex'
import axios from '../../utils/services'
export default {
    components:{
        Ranking,
        List,
        MusicImage,
        dataCount
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
    },
    computed:{
        ...mapGetters({
            userItem: 'getUserItem'
        })
    },
    data(){
        return{
            rankColumns:[],
            rankData:[],
            collectSong:[],
            createdSong:[],
        }
    },
    mounted(){
        this.homeSonglist();
    },
    methods:{
        homeSonglist(){
            axios.get(`/user/playlist?uid=${this.userItem[0].userId}`)
                .then((response)=>{
                    let playlist = response.data.playlist
                    for(let i=0;playlist.length>i;i++){
                        if(playlist[i].subscribed===true){
                            this.collectSong.push(playlist[i])
                        }else{
                            this.createdSong.push(playlist[i])
                        }
                    }
                })
        }
    }
}
</script>
<style lang="less">
@width: 140px;
.song-image{
    img{
        border: 1px solid #ccc;
        width: @width;
        height: @width;
    }
}
.my-collect-song-ul,.my-create-song-ul{
    li{
        .music-dec{
            width: @width;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
}
.my-create-song-ul li,.my-collect-song-ul li{
    margin-left: 3vw;
}
.rktitle-home{
    margin-top: 0;
}
.ranking-title{
    height: 200px;
}
.rktitle-1{
    border-bottom: 1px solid #ccc;
    height: 45px;
}
.rktitle-1 h2,.rktitle-1 .anticon,.rktitle-1 .ant-btn{
    float: left;
}
.rktitle-1 .anticon{
    margin-left: 1vw;
    line-height: 40px;
}
.rktitle-1 .ant-btn{
    float: right;
}
.rktitle-2{
    height: 41px;
    margin-bottom: 15px;
    padding: 0;
    margin-top: 1vh;
}
.rktitle-2,.rktitle-2:hover {
    color: #666;
}
.rktitle-2 li > a{
    display: inline-block;
    position: relative;
    zoom: 1;
    color: #666;
}
.rktitle-2 li > a:hover{
    color: #0066cc;
}
.rktitle-2 li > a strong{
    display: block;
    margin-top: -4px;
    font-size: 24px;
    font-weight: normal;
}
.rktitle-2 li > a span{
    display: block;
    text-indent: 2px;
    font-size: 12px;
}
.rktitle-3 span{
    font-size: 12px;
}
.rktitle-3 > .sep{
    margin-left: 2vw;
}
</style>