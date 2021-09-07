<template>
    <!-- 个人中心/我的主页 -->
    <div>
        <a-row class="rank-a-row">
            <a-col :span="20" class="right-rank-row">
                <Ranking>
                    <template v-slot:rankingTitle>
                        <div class="ranking-title">
                            <img src="/109951166027478939.jpg" />
                            <div class="rktitle">
                                <div>
                                    <h2>yyyy-xyezhu</h2>
                                    <!--<a-icon type="man" />
                                    <a-button icon="update-myhome" >编辑个人资料</a-button>-->
                                </div>
                                
                                <a-icon type="history" /><span>最近更新:</span><span>08月31日(每天更新)</span>
                                <div>
                                    <a-button type="primary" icon="play-circle" >播放</a-button>
                                    <a-button type="primary" icon="plus"  class="rank-plus" style="font-size:12px" />
                                    <a-button icon="folder-add" >(111)</a-button>
                                    <a-button icon="rise" >(33333333)</a-button>
                                    <a-button icon="download" >下载</a-button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-slot:rankingList>
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
                            <a-table :columns="rankColumns" :data-source="rankData">
                                <a slot="name" slot-scope="text">{{ text }}</a>
                            </a-table>
                        </div>
                    </template>
                </Ranking>
                <div class="hot-recommend">
                    <List :islistIcon="true">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title">我创建的歌单</a>
                        </template>
                        <template v-slot:listTab>
                            <a href="#">(<em>11</em>)</a>
                        </template>
                    </List>
                    <div class="hot-recommend-music my-create-song">
                        <MusicImage>
                            <template v-slot:recommend>
                                <ul class="music-ul my-create-song-ul" v-if="hotRecommend.length">
                                    <li v-for="(item,index) in hotRecommend" :key="index">
                                        <div class="music-image">
                                            <img :src="item.musicImg" />
                                            <a class="music-msk" :title="item.musicMsk" href="#"></a>
                                            <div class="music-bottom">
                                                <a-icon class="bottom-ej" type="customer-service" />
                                                <span class="nb">{{item.musicNb}}</span>
                                                <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                            </div>
                                        </div>
                                        <p class="music-dec"><a href="#">{{item.musicMsk}}</a></p>
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
                            <a href="#">(<em>11</em>)</a>
                        </template>
                    </List>
                    <div class="hot-recommend-music my-collect-song">
                        <MusicImage>
                            <template v-slot:recommend>
                                <ul class="music-ul my-collect-song-ul" v-if="hotRecommend.length">
                                    <li v-for="(item,index) in hotRecommend" :key="index">
                                        <div class="music-image">
                                            <img :src="item.musicImg" />
                                            <a class="music-msk" :title="item.musicMsk" href="#"></a>
                                            <div class="music-bottom">
                                                <a-icon class="bottom-ej" type="customer-service" />
                                                <span class="nb">{{item.musicNb}}</span>
                                                <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                            </div>
                                        </div>
                                        <p class="music-dec"><a href="#">{{item.musicMsk}}</a></p>
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
export default {
    components:{
        Ranking,
        List,
        MusicImage
    },
    data(){
        return{
            rankColumns:[
                {
                    title: '',
                    dataIndex: 'key',
                    width:50
                },
                {
                    title: '标题',
                    dataIndex: 'title',
                    ellipsis: true,
                },
                {
                    title: '时长',
                    dataIndex: 'duration',
                    width: 130,
                    ellipsis: true,
                },
                {
                    title: '歌手',
                    dataIndex: 'singer',
                    width: 230,
                    ellipsis: true,
                },
            ],
            rankData:[
                {
                    key: <span class="data-key">1.</span>,
                    title: <div class="data-title">
                        <a-icon type="play-circle" />
                        <a href="#">致你</a><span>- (女生版)</span>
                    </div>,
                    duration: <span class="data-duration">04:31</span>,
                    singer: <a href="#" class="data-singer">yihuik苡慧</a>,
                },
                {
                    key: <span class="data-key">2.</span>,
                    title: <div class="data-title">
                        <a-icon type="play-circle" />
                        <a href="#">你注定会遇到我</a><span></span>
                    </div>,
                    duration: <span class="data-duration">04:16</span>,
                    singer: <a href="#" class="data-singer">金玟岐</a>,
                },
                {
                    key: <span class="data-key">3.</span>,
                    title: <div class="data-title">
                        <a-icon type="play-circle" />
                        <a href="#">我们好好的</a><span></span>
                    </div>,
                    duration: <span class="data-duration">04:32</span>,
                    singer: <a href="#" class="data-singer">李荣浩</a>,
                },
                {
                    key: <span class="data-key">4.</span>,
                    title: <div class="data-title">
                        <a-icon type="play-circle" />
                        <a href="#">不安（Live）</a><span></span>
                    </div>,
                    duration: <span class="data-duration">03:28</span>,
                    singer: <a href="#" class="data-singer">陈红鲤</a>,
                },
                {
                    key: <span class="data-key">5.</span>,
                    title: <div class="data-title">
                        <a-icon type="play-circle" />
                        <a href="#">生命線</a><span>- (游戏《月姬 -A piece of blue glass moon-》主题曲)</span>
                    </div>,
                    duration: <span class="data-duration">04:15</span>,
                    singer: <a href="#" class="data-singer">ReoNa</a>,
                },
            ],
            hotRecommend:[
                {
                    musicId:'1',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'24万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'2',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'3',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'4',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'5',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'24万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'6',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'7',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                }
            ],
        }
    }
}
</script>
<style lang="less">
.my-create-song-ul li,.my-collect-song-ul li{
    margin-left: 3vw;
}
</style>