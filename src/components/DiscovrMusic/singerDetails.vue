<template>
    <!-- /发现音乐/歌手/歌手详情 -->
    <div class="singer">
        <a-row class="rank-a-row">
            <a-col :span="16" class="left-rank-row">
                <div class="singer-details-user">
                    <div class="singer-details-user-title">
                        <h2>纳豆nado</h2>
                    </div>
                    <img src="109951165718586494.jpg" />
                    <div class="singer-details-user-operation">
                        <a-button icon="user">个人主页</a-button>
                        <a-button icon="folder-add">收藏</a-button>
                    </div>
                </div>
                <a-tabs type="card" class="singer-details-tabs">
                    <a-tab-pane key="1" tab="热门作品">
                        <div class="singer-details-hotTitle">
                            <a-button type="primary" icon="play-circle">播放</a-button>
                            <a-button  icon="folder-add">收藏热门50</a-button>
                            <a-select label-in-value :default-value="{ key: '热门单曲' }" style="width: 100px;">
                                <a-select-option value="热门单曲">热门单曲</a-select-option>
                                <a-select-option value="作词作品">作词作品</a-select-option>
                                <a-select-option value="作曲作品">作曲作品</a-select-option>
                            </a-select>
                        </div>
                        <Ranking>
                            <template v-slot:rankingList>
                                <div class="ranking-list">
                                    <a-table :columns="hotColumns" :row-key="record=>record.key" :data-source="hotData">
                                        <a slot="name" slot-scope="text">{{ text }}</a>
                                    </a-table>
                                </div>
                            </template>
                        </Ranking>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="所有专辑">
                        <SingerImage>
                            <template v-slot:singerMusic>
                                <ul class="singer-ul">
                                    <li v-for="(item,index) in allShelves" :key="index" style="width:130px;">
                                        <div class="singer-image">
                                            <img :src="item.musicImg" style="width:130px;height:130px" />
                                            <a class="singer-msk" :title="item.musicMsk" href="#"></a>
                                            <div class="singer-bottom shelves-bottom" >
                                                <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                            </div>
                                        </div>
                                        <p class="singer-dec" style="width:130px;"><a href="#" :title="item.musicMsk">{{item.musicMsk}}</a></p>
                                        <p class="singer-love" style="width:130px;"><em :title="item.musicSinger">{{item.musicSinger}}</em></p>
                                    </li>
                                </ul>
                            </template>
                        </SingerImage>
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="相关MV">暂无MV</a-tab-pane>
                    <a-tab-pane key="4" tab="艺人介绍">
                        <div class="singer-details-js">
                            <h2><span>纳豆nado</span>简介</h2>
                            <p>斗鱼直播间：1209 微博：纳豆nado_ 感谢你来听，感谢能陪伴你。</p>
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </a-col>
            <a-col :span="4" class="right-rank-row">
                <div class="recommend-singer">
                    <List :islistIcon="true" style="border-bottom:1px solid #ccc">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" 
                                style="font-size:12px;font-weight:bold;margin:1.5vh 0 0 -1vw;cursor: default;">相似歌手</a>
                        </template>
                    </List>
                    <ul class="love-songlist-user similarity-singer-user">
                        <li v-for="item in similaritySinger" :key="item.userId">
                            <img :src="item.userAvatar"  :title="item.userName" style="width:50px;height:50px" />
                            <a>{{item.userName}}</a>
                        </li>
                    </ul>
                </div>
            </a-col>
        </a-row>
        <router-view></router-view>
    </div>
</template>

<script>
import Ranking from '../ChildComponents/ranking'
import SingerImage from '../ChildComponents/singerImage'
import List from '../ChildComponents/List'
export default {
    components:{
        Ranking,
        SingerImage,
        List
    },
    data(){
        return{
            /** 热门作品 */
            hotColumns:[
                {
                    title: '',
                    dataIndex: 'key',
                    width:30
                },
                {
                    title: '',
                    dataIndex: 'rank',
                    width: 30,
                },
                {
                    title: '标题',
                    dataIndex: 'title',
                    width: 250,
                    ellipsis: true,
                },
                {
                    title: '时长',
                    dataIndex: 'duration',
                    width: 100,
                    ellipsis: true,
                },
                {
                    title: '歌手',
                    dataIndex: 'singer',
                    width: 100,
                    ellipsis: true,
                },
                {
                    title: '专辑',
                    dataIndex: 'shelves',
                    width: 170,
                    ellipsis: true,
                },
            ],
            hotData:[
                {
                    key: 1,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <router-link to="/music">致你</router-link><span>- (女生版)</span>
                    </div>,
                    duration: <span class="data-duration">04:31</span>,
                    singer: <a href="#" class="data-singer">yihuik苡慧</a>,
                    shelves: <a href="#" class="data-shelves">致你</a>
                },
                {
                    key: 2,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <router-link to="/music">你注定会遇到我</router-link><span></span>
                    </div>,
                    duration: <span class="data-duration">04:16</span>,
                    singer: <a href="#" class="data-singer">金玟岐</a>,
                    shelves: <a href="#" class="data-shelves">飞船</a>
                },
                {
                    key: 3,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <router-link to="/music">我们好好的</router-link><span></span>
                    </div>,
                    duration: <span class="data-duration">04:32</span>,
                    singer: <a href="#" class="data-singer">李荣浩</a>,
                    shelves: <a href="#" class="data-shelves">你的婚礼</a>
                },
                {
                    key: 4,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <router-link to="/music">不安（Live）</router-link><span></span>
                    </div>,
                    duration: <span class="data-duration">03:28</span>,
                    singer: <a href="#" class="data-singer">陈红鲤</a>,
                    shelves: <a href="#" class="data-shelves">我是歌手第二季 第8期</a>

                },
                {
                    key: 5,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <router-link to="/music">生命線</router-link><span>- (游戏《月姬 -A piece of blue glass moon-》主题曲)</span>
                    </div>,
                    duration: <span class="data-duration">04:15</span>,
                    singer: <a href="#" class="data-singer">ReoNa</a>,
                    shelves: <a href="#" class="data-shelves">一开始你就很特别</a>,
                },
            ],
            /** 所有专辑 */
            allShelves:[
                {
                    musicId:'1',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'我在你梦里',
                    musicSinger:'2021.8.14'
                },
                {
                    musicId:'2',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'爱绝非错觉',
                    musicSinger:'2021.7.20'
                },
                {
                    musicId:'3',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'暧昧期',
                    musicSinger:'2021.6.08'
                },
                {
                    musicId:'4',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'芙蓉时光',
                    musicSinger:'黄渤'
                },
                {
                    musicId:'5',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'Solar Power',
                    musicSinger:'2021.5.20'
                },
                {
                    musicId:'6',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'命轮',
                    musicSinger:'2021.4.20'
                },
                {
                    musicId:'7',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'心邻居',
                    musicSinger:'2021.3.14'
                },
                {
                    musicId:'8',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'let you go',
                    musicSinger:'2021.2.26'
                },
                {
                    musicId:'9',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'美人外史',
                    musicSinger:'2021.2.11'
                },
                {
                    musicId:'10',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'罪逍遥',
                    musicSinger:'2020.12.31'
                },
            ],
            /** 相似歌手 */
            similaritySinger:[
                {
                    userId: 1,
                    userName: '小雪糕',
                    userAvatar: '/109951166027478939.jpg',
                },
                {
                    userId: 2,
                    userName: '小铁Joe',
                    userAvatar: '/109951166027478939.jpg',
                },
                {
                    userId: 3,
                    userName: '羊驼idol',
                    userAvatar: '/109951166027478939.jpg',
                },
                {
                    userId: 4,
                    userName: '浮梦沉生',
                    userAvatar: '/109951166027478939.jpg',
                },
                {
                    userId: 5,
                    userName: '一只喵喵',
                    userAvatar: '/109951166027478939.jpg',
                },
                {
                    userId: 6,
                    userName: '欢欢酱-',
                    userAvatar: '/109951166027478939.jpg',
                },
            ]
        }
    }
}
</script>
<style lang="less">
.singer-details-user img{
    border: 1px solid #ccc;
    margin-top: -1.5vh;
}
.singer-details-user{
    margin-left: 4vw;
    position: relative;
}
.singer-details-user-title{
    margin-top: 2vh;
}
.singer-details-user-operation .ant-btn{
    background: #333;
    color: #fff;
    opacity: 0.8;
    margin-left: 1vw;
}
.singer-details-user-operation .ant-btn:hover{
    background: #333;
    color: #fff;
    opacity: 0.7;
}
.singer-details-user-operation{
    position: absolute;
    right: 5vw;
    width: 240px;
    bottom: 2vh;
}
.singer-details-tabs{
    position: absolute;
    left: 4vw;
    width: 47.15vw;
}
.singer-details-tabs .ant-tabs-tab{
    width: 11.65vw;
}
.singer-details-hotTitle{
    position: relative;
}
.singer-details-hotTitle .ant-select{
    position: absolute;
    right: 0;
}
.singer-details-js h2{
    color: #333;
    font-size: 14px;
    font-weight: bold;
}
.singer-details-js p{
    line-height: 25px;
    color: #666;
    text-indent: 2em;
}
.similarity-singer-user li{
    width: 55px;
    height: 82px;
}
.similarity-singer-user li a{
    color: #333;
    vertical-align: middle;
    width: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.similarity-singer-user li a:hover{
    color: #333;
    text-decoration: underline;
}
</style>