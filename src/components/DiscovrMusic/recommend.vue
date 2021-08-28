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
                                    <p class="music-love"><em :title="item.musicLove">{{item.musicLove}}</em></p>
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
                                    <p  class="music-dec"><a href="#">{{item.musicMsk}}</a></p>
                                    <p  class="music-love"><em :title="item.musicLove">{{item.musicLove}}</em></p>
                                </li>
                            </ul>  
                        </template>
                    </MusicImage>
                </div>
            </div>
        </div>
        <div class="right-recommend"></div>
    </div>
</template>
<script>
import List from '../ChildComponents/List'
import MusicImage from '../ChildComponents/musicImage'
export default {
    components:{
        List,
        MusicImage
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
                    musicId:'2',
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
                }
            ],
        }
    }
}
</script>
<style lang="less">
.listIcon{
    visibility: hidden;
}
.left-recommend{
    width:74%;
    height:100%;
}
.right-recommend{
    width:25%;
    margin-left: 1%;
}
.left-recommend,.right-recommend{
    float:left;
    border: 0px solid;
}
.hot-recommend,.recommend-ation{
    height: 100%;
}
.hot-recommend-music{
    border: 0px solid;
    height:68vh;
    margin:0;
}
.recommend-ation-music{
    margin:0;
}
</style>