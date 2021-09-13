<template>
    <!-- /发现音乐/歌单/歌单详情 -->
    <div class="singer">
        <a-row class="rank-a-row">
            <a-col :span="16" class="left-rank-row">
                <Ranking>
                    <template v-slot:rankingTitle>
                        <div class="ranking-title songlist-details music-details">
                            <img src="/109951166027478939.jpg" />
                            <div class="rktitle music-rktitle">
                                <span class="details-type">单曲</span><h2>目及皆是你</h2>
                                <span>歌手：</span><a href="#">小蓝背心</a><br/>
                                <span>所属专辑：</span><a href="#">目及皆是你</a>
                                <div>
                                    <a-button type="primary" icon="play-circle" >播放</a-button>
                                    <a-button type="primary" icon="plus"  class="rank-plus" style="font-size:12px" />
                                    <a-button icon="folder-add" >收藏</a-button>
                                    <a-button icon="rise" >分享</a-button>
                                    <a-button icon="download" >下载</a-button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-slot:rankingList>
                        <div class="ranking-list">
                            <div class="music-lyric">
                                作词 : 陶旧<br/>
                                作曲 : 常金<br/>
                                编曲 : 卡其漠罗洋<br/>
                                制作人 : 孙海亮<br/>
                                玻璃上的雾气 我临摹一个你<br/>
                                穿透风景坠入你的眼睛<br/>
                                离地心几英里 我温暖包裹你<br/>
                                在赤道以北的季节说爱情<br/>
                                等霜雪落满地 风吹暖暖四季<br/>
                                等地球忙着自转照耀你<br/>
                                我栖息的星系 有微光折射你<br/>
                                是我逃离引力设下相遇伏笔<br/>
                                我戒不掉你 像戒不了呼吸<br/>
                                漫长的距离 我用思念来代替<br/>
                                这寂静星系 浪漫是你<br/>
                                一生的探秘 只想被你吸引<br/>
                                你就像氧气 没你不能呼吸<br/>
                                我波澜四起 心动好几个世纪<br/>
                                手写的结局 用幸福延续<br/>
                                我的心 温柔的给你<br/>
                                Oh baby I love you<br/>
                                等霜雪落满地 风吹暖暖四季<br/>
                                等地球忙着自转照耀你<br/>
                                我栖息的星系 有微光折射你<br/>
                                是我逃离引力设下相遇伏笔<br/>
                                我戒不掉你 像戒不了呼吸<br/>
                                漫长的距离 我用思念来代替<br/>
                                这寂静星系 浪漫是你<br/>
                                一生的探秘 只想被你吸引<br/>
                                你就像氧气 没你不能呼吸<br/>
                                我波澜四起 心动好几个世纪<br/>
                                手写的结局 用幸福延续<br/>
                                我的心 温柔的给你<br/>
                                Oh baby I love you<br/>
                                我戒不掉你 像戒不了呼吸<br/>
                                漫长的距离 我用思念来代替<br/>
                                这寂静星系 浪漫是你<br/>
                                一生的探秘 只想被你吸引<br/>
                                你就像氧气 像戒不了呼吸<br/>
                                我波澜四起 心动好几个世纪<br/>
                                手写的结局 用幸福延续<br/>
                                我的心 温柔的给你<br/>
                                Oh baby I love you<br/>
                                和声 : 镁愔少侠<br/>
                                混音 : 张鸣利<br/>
                                出品 : OMG@MUSIC<br/>
                                营销推广 : 噼里啪啦Studio<br/>
                                发行 : 讯飞音乐<br/>
                                未经著作权人书面许可，不得以任何方式（包括翻唱、翻录等）使用
                            </div>
                        </div>
                    </template>
                </Ranking>
            </a-col>
            <a-col :span="4" class="right-rank-row">
                <div class="recommend-singer">
                    <List :islistIcon="true" style="border-bottom:1px solid #ccc">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" 
                                style="font-size:12px;font-weight:bold;margin:1.5vh 0 0 -1vw;cursor: default;">包含这首歌的歌单</a>
                        </template>
                    </List>
                    <SingerList>
                        <template v-slot:singerLists>
                            <a-list item-layout="horizontal" :data-source="orSongData">
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
                <div class="recommend-singer">
                    <List :islistIcon="true" style="border-bottom:1px solid #ccc">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" 
                                style="font-size:12px;font-weight:bold;margin:1.5vh 0 0 -1vw;cursor: default;">相似歌曲</a>
                        </template>
                    </List>
                    <ul class="similarity-music-ul">
                        <li v-for="item in similarityMusic" :key="item.musicId">
                            <div class="music-singer">
                                <div><a href="#" class="music-name">{{item.musicName}}</a></div>
                                <div><a href="#" class="music-singer">{{item.musicSinger}}</a></div>
                            </div>
                            <div class="music-operation">
                                <a-icon type="caret-right" />
                                <a-icon type="plus" />
                            </div>
                        </li>
                    </ul>
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
            /** 相似歌曲 */ 
            similarityMusic:[
                {
                    musicId: 1,
                    musicName: '时光背面的我',
                    musicSinger: '刘至佳/韩瞳',
                },
                {
                    musicId: 2,
                    musicName: '银河与星斗',
                    musicSinger: 'yihuik苡慧',
                },
                {
                    musicId: 3,
                    musicName: '放空',
                    musicSinger: '大籽/Lil E/A1 TRIP',
                },
                {
                    musicId: 4,
                    musicName: '骁',
                    musicSinger: '井胧/井迪',
                },
                {
                    musicId: 5,
                    musicName: '风吹一夏',
                    musicSinger: 'DP龙猪/Swei水/Rays陈袁',
                }
            ],
            /** 包含这首歌的歌单 */
            orSongData:[
                {
                    key: 1,
                    title: '【精品中国纪录片】用音乐记录美丽祖国',
                    description:'般蛋'
                },
                {
                    key: 2,
                    title: '睡眠治愈曲 | 慵懒撩人，聆听入境',
                    description:'后原'
                },
                {
                    key: 3,
                    title: '后摇单人团|一个人的宇宙',
                    description:'帐号已注销'
                },
            ]
        }
    }
}
</script>
<style lang="less">
.music-details{
    height: 28vh;
}
.music-rktitle a:hover{
    color: #1890ff;
    text-decoration: underline;
}
.music-lyric{
    margin-left: 15vw;
    margin-bottom: 10vh;
}
/** 相似歌曲 */
.similarity-music-ul{
    clear:both;
    padding: 0 0 0 1vw;
}
.similarity-music-ul li{
    list-style-type: none;
    font-size: 12px;
    margin-top: 1vh;
    position: relative;
}
.music-name{
    color: #333;
}
.music-singer{
    color: #999;
}
.music-operation{
    position: absolute;
    right: 0.5vw;
    bottom: 2vh;
}
.music-operation .anticon{
    margin-left: 0.5vw;
    cursor: pointer;
}
</style>