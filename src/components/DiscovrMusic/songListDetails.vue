<template>
    <!-- /发现音乐/歌单/歌单详情 -->
    <div class="singer">
        <a-row class="rank-a-row">
            <a-col :span="16" class="left-rank-row">
                <Ranking>
                    <template v-slot:rankingTitle>
                        <div class="ranking-title songlist-details">
                            <img src="/109951166027478939.jpg" />
                            <div class="rktitle">
                                <span class="details-type">歌单</span><h2>踏山河~嘉宾~不是花火呀</h2>
                                <img src="/109951166027478939.jpg" style="width:40px;height:40px;cursor:pointer;border:0 solid" />
                                <router-link to="/discoverMusic/userDetails" class="songlist-details-user">---于怀</router-link>
                                <span>2020-03-07 创建</span>
                                <div>
                                    <a-button type="primary" icon="play-circle" >播放</a-button>
                                    <a-button type="primary" icon="plus"  class="rank-plus" style="font-size:12px" />
                                    <a-button icon="folder-add" >(111)</a-button>
                                    <a-button icon="rise" >(33333333)</a-button>
                                    <a-button icon="download" >下载</a-button>
                                </div>
                                <div class="songlist-details-tag">
                                    <span>标签：</span>
                                    <ul>
                                        <li><a-tag><a href="#">流行</a></a-tag></li>
                                        <li><a-tag><a href="#">清晨</a></a-tag></li>
                                        <li><a-tag><a href="#">治愈</a></a-tag></li>
                                    </ul>
                                </div>
                                <div class="songlist-details-descriptions">
                                    <span>介绍：</span>
                                    <span>我们常常会陷入悲伤绝望的情绪而无法自拔
                                        打开这个歌单
                                        再最后回忆一次
                                        无法割舍的糟糕过去
                                        听完这些歌
                                        向着前方继续前进吧
                                        让坏情绪都留在这里</span>
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
                                    <a href="#" style="font-size:12px;margin-left:1vw;margin-top:0.2vh;cursor:default;textDecoration:none;">99首歌</a>
                                </template>
                                <template v-slot:listMore>
                                    <a href="#" style="font-size:12px;cursor:default;textDecoration:none;margin-right:1vw;margin-top:1vh;">
                                        播放：<em style="color:#c20c0c">4495203840 </em>次
                                    </a>
                                </template>
                            </List>
                            <a-table :columns="songListColumns" :row-key="record=>record.key" :data-source="songListData">
                                <a slot="name" slot-scope="text">{{ text }}</a>
                            </a-table>
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
                        <li v-for="item in loveUserData" :key="item.userId">
                            <img :src="item.userAvatar"  :title="item.userName" style="width:40px;height:40px" />
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
                                    <a-list-item-meta :description="item.description">
                                        <a slot="title" href="#">{{ item.title }}</a>
                                        <a-avatar slot="avatar" shape="square" :size="64"  src="/109951166027478939.jpg"/>
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
export default {
    components:{
        Ranking,
        List,
        SingerList
    },
    data(){
        return{
            /** 歌曲列表 */
            songListColumns:[
                {
                    title: '',
                    dataIndex: 'key',
                    width:40
                },
                {
                    title: '',
                    dataIndex: 'rank',
                    width: 40,
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
                    width: 130,
                    ellipsis: true,
                },
                {
                    title: '歌手',
                    dataIndex: 'singer',
                    width: 130,
                    ellipsis: true,
                },
                {
                    title: '专辑',
                    dataIndex: 'shelves',
                    width: 170,
                    ellipsis: true,
                },
            ],
            songListData:[
                {
                    key: 1,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <a href="#">致你</a><span>- (女生版)</span>
                    </div>,
                    duration: <span class="data-duration">04:31</span>,
                    singer: <a href="#" class="data-singer">yihuik苡慧</a>,
                    shelves: <a href="#" class="data-shelves">致你</a>
                },
                {
                    key: 2,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <a href="#">你注定会遇到我</a><span></span>
                    </div>,
                    duration: <span class="data-duration">04:16</span>,
                    singer: <a href="#" class="data-singer">金玟岐</a>,
                    shelves: <a href="#" class="data-shelves">飞船</a>
                },
                {
                    key: 3,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <a href="#">我们好好的</a><span></span>
                    </div>,
                    duration: <span class="data-duration">04:32</span>,
                    singer: <a href="#" class="data-singer">李荣浩</a>,
                    shelves: <a href="#" class="data-shelves">你的婚礼</a>
                },
                {
                    key: 4,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <a href="#">不安（Live）</a><span></span>
                    </div>,
                    duration: <span class="data-duration">03:28</span>,
                    singer: <a href="#" class="data-singer">陈红鲤</a>,
                    shelves: <a href="#" class="data-shelves">我是歌手第二季 第8期</a>

                },
                {
                    key: 5,
                    rank: <a-icon type="play-circle" />,
                    title: <div class="data-title">
                        <a href="#">生命線</a><span>- (游戏《月姬 -A piece of blue glass moon-》主题曲)</span>
                    </div>,
                    duration: <span class="data-duration">04:15</span>,
                    singer: <a href="#" class="data-singer">ReoNa</a>,
                    shelves: <a href="#" class="data-shelves">一开始你就很特别</a>,
                },
            ],
            /** 喜欢这个歌单、专辑的人 */
            loveUserData:[
                {
                    userId: 1,
                    userName: '树莓小雪糕',
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
                    userName: '一只喵喵喵星人',
                    userAvatar: '/109951166027478939.jpg',
                },
                {
                    userId: 6,
                    userName: '欢欢酱-',
                    userAvatar: '/109951166027478939.jpg',
                },
                {
                    userId: 7,
                    userName: '名字好难啊-',
                    userAvatar: '/109951166027478939.jpg',
                },
                {
                    userId: 8,
                    userName: '来找小玉听歌',
                    userAvatar: '/109951166027478939.jpg',
                },

            ],
            /** 热门歌单 */
            hotSongData:[
                {
                    title: '【精品中国纪录片】用音乐记录美丽祖国',
                    description:'般蛋'
                },
                {
                    title: '睡眠治愈曲 | 慵懒撩人，聆听入境',
                    description:'后原'
                },
                {
                    title: '后摇单人团|一个人的宇宙',
                    description:'帐号已注销'
                },
                {
                    title: '欧美小鲜肉｜始于颜值 陷于才华',
                    description:'银河系第一帅气'
                },
                {
                    title: '华语电影台词对白｜念念不忘',
                    description:'下一颗巧克力'
                },
            ]
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