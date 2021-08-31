<template>
    <!-- /发现音乐/推荐 -->
    <div class="recommend">
        <div class="left-recommend">
            <div class="hot-recommend">
                <List :islistIcon="false">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title">热门推荐</a>
                    </template>
                    <template v-slot:listTab>
                        <a href="#">华语</a>
                        <span class="line">|</span>
                        <a href="#">流行</a>
                        <span class="line">|</span>
                        <a href="#">摇滚</a>
                        <span class="line">|</span>
                        <a href="#">民谣</a>
                        <span class="line">|</span>
                        <a href="#">电子</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#">更多</a>
                        <a-icon class="more-icon" type="more" />
                    </template>
                </List>
                <div class="hot-recommend-music">
                    <MusicImage>
                        <template v-slot:recommend>
                            <ul class="music-ul" v-if="hotRecommend.length">
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
            <div class="recommend-ation">
                <List :islistIcon="false">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title">个性推荐</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#">更多</a>
                        <a-icon class="more-icon" type="more" />
                    </template>
                </List>
                <div class="recommend-ation-music">
                    <MusicImage>
                        <template v-slot:recommend>
                            <ul class="music-ul" v-if="recommendAtion.length">
                                <li v-for="(item,index) in recommendAtion" :key="index">
                                    <div class="music-image">
                                        <img :src="item.musicImg" />
                                        <a class="music-msk" :title="item.musicMsk" href="#"></a>
                                        <div class="music-bottom">
                                            <a-icon class="bottom-ej" type="customer-service" />
                                            <span class="nb">{{item.musicNb}}</span>
                                            <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                        </div>
                                    </div>
                                    <p  class="music-dec"><a href="#">{{item.musicMsk}}</a></p>
                                    <p  class="music-love"><em :title="item.musicLove">{{item.musicLove}}</em></p>
                                </li>
                            </ul>  
                        </template>
                    </MusicImage>
                </div>
            </div>
            <div class="new-shelves">
                <List :islistIcon="false">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title">新碟上架</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#">更多</a>
                        <a-icon class="more-icon" type="more" />
                    </template>
                </List>
                <div class="new-shelves-music">
                    <SingerImage>
                        <template v-slot:singerMusic>
                            <a-icon type="left-circle" theme="twoTone" two-tone-color="#C10D0C" />
                            <ul class="singer-ul">
                                <li v-for="(item,index) in newShelvesMusic" :key="index">
                                    <div class="singer-image">
                                        <img :src="item.musicImg"/>
                                        <a class="singer-msk" :title="item.musicMsk" href="#"></a>
                                        <div class="singer-bottom" >
                                            <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                         </div>
                                    </div>
                                    <p class="singer-dec"><a href="#" :title="item.musicMsk">{{item.musicMsk}}</a></p>
                                    <p class="singer-love"><em :title="item.musicSinger">{{item.musicSinger}}</em></p>
                                </li>
                            </ul>
                            <a-icon type="right-circle" theme="twoTone" two-tone-color="#C10D0C" />
                        </template>
                    </SingerImage>
                </div>
            </div>
            
        </div>
        <div class="right-recommend">
            <div class="recommend-user-login">
                <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <a-button type="danger">用户登录</a-button>
            </div>
            <div class="recommend-singer">
                <List :islistIcon="true" style="border-bottom:0px solid">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title" style="font-size:12px;font-weight:bold;margin:1.5vh 0 0 -1vw;">入驻歌手</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#" style="font-size:12px;margin-right:1vw;margin-top:1vh;">查看全部></a>
                    </template>
                </List>
                <SingerList>
                    <template v-slot:singerLists>
                        <a-list item-layout="horizontal" :data-source="data">
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
        </div>
    </div>
</template>
<script>
import List from '../ChildComponents/List'
import MusicImage from '../ChildComponents/musicImage'
import SingerImage from '../ChildComponents/singerImage'
import SingerList from '../ChildComponents/singerList'
export default {
    components:{
        List,
        MusicImage,
        SingerImage,
        SingerList
    },
    data(){
        return{
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
                },
                {
                    musicId:'8',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'9',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'10',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                }
            ],
            recommendAtion:[
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
            ],
            newShelvesMusic:[
                {
                    musicId:'1',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'在世界的尽头说我恨你',
                    musicSinger:'鱼丁糸'
                },
                {
                    musicId:'2',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'Human (Deluxe)',
                    musicSinger:'OneRepublic'
                },
                {
                    musicId:'3',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'我们好好的',
                    musicSinger:'李荣浩'
                },
                {
                    musicId:'4',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'这些年为你攒下的歌Pt.1',
                    musicSinger:'黄渤'
                },
                {
                    musicId:'5',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'Solar Power',
                    musicSinger:'Lorde'
                },
                {
                    musicId:'6',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'不期而遇的夏天',
                    musicSinger:'陈奕迅'
                },
            ],
            data:[
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
            ]
        }
    }
}
</script>
<style lang="less">
.listIcon{
    visibility: hidden;
}
.left-recommend{
    width:78%;
    height:100%;
}
.right-recommend{
    width:21%;
    margin-left: 1%;
    height: 100%;
}
.left-recommend,.right-recommend{
    float:left;
    border: 1px solid #d3d3d3;
    border-bottom: 0;
}
.hot-recommend,.recommend-ation,.new-shelves{
    height: 100%;
}
.hot-recommend-music{
    border: 0px solid;
    height:60vh;
    margin:0;
}
.recommend-ation-music{
    height: 34vh;
    margin:0;
}
.new-shelves-music{
    margin:0;
}
.anticon-left-circle,.anticon-right-circle{
    font-size: 1.5em;
    z-index: 3;
    cursor: pointer;
}
.anticon-left-circle{
    position:absolute;
    margin-top: 4%;
    margin-left: 1%;
}
.anticon-right-circle{
    position:absolute;
    margin-top: 3.5%;
    margin-left: 1.5%;
}
.recommend-singer{
    height: 100%;
}
.recommend-user-login{
    height: 20vh;
    background:#fafafa;
    border-bottom: 2px solid #ccc;
}
.recommend-user-login p{
    color: #666;
    padding:3vh 0 1vw 1vw;
}
.recommend-user-login .ant-btn-danger{
    margin-left: 32%;
}
</style>