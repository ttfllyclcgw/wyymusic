<template>
    <!-- /发现音乐/歌单 -->
    <div class="song-list">
        <a-row>
            <a-col :span="20" class="song-list-columns">
                <div class="song-list-header">
                    <List :islistIcon="true">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="cursor:auto">全部</a>
                        </template>
                        <template v-slot:listTab>
                            <a-button class="song-list-columns-selectType" @click="typeShow()">
                                选择分类<a-icon type="down" /></a-button>
                        </template>
                        <template v-slot:listMore>
                            <a-button type="danger" class="song-list-columns-hot">热门</a-button>
                        </template>
                    </List>
                    <div class="song-list-music">
                        <MusicImage>
                            <template v-slot:recommend>
                                <ul class="music-ul" v-if="songlist.length">
                                    <li v-for="(item,index) in songlist" :key="index">
                                        <div class="music-image">
                                            <img :src="item.coverImgUrl" class="music-img" />
                                            <a class="music-msk" :title="item.name" href="#"></a>
                                            <div class="music-bottom">
                                                <a-icon class="bottom-ej" type="customer-service" />
                                                <span class="nb">{{item.playCount}}</span>
                                                <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                            </div>
                                        </div>
                                        <p class="music-dec"><a href="#" :title="item.name">{{item.name | ellipsis}}</a></p>
                                        <p class="music-love songlist-music-love">
                                            <em :title="item.creator.nickname">by</em>
                                            <router-link to="#" :title="item.creator.nickname">{{item.creator.nickname | ellipsis}}</router-link>
                                        </p>
                                    </li>
                                </ul>
                            </template>
                        </MusicImage>
                    </div>    
                </div>
                <div class="song-list-page">
                    <Pagination @playsonglist="playsonglist(limit,offset)"></Pagination>
                </div>
                <div class="song-type-select" v-show="isShow">
                    <h3><a href="#"><em>全部风格</em></a></h3>
                    <dl class="f-cb">
                        <dt class="f-cb-dt"><a-icon type="global" />语种</dt>
                        <dd class="f-cb-dd">
                            <a href="#">华语</a><span class="line">|</span>
                            <a href="#">欧美</a><span class="line">|</span>
                            <a href="#">日语</a><span class="line">|</span>
                            <a href="#">韩语</a><span class="line">|</span>
                            <a href="#">粤语</a>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt class="f-cb-dt"><a-icon type="project" />风格</dt>
                        <dd class="f-cb-dd">
                            <a href="#">流行</a><span class="line">|</span>
                            <a href="#">摇滚</a><span class="line">|</span>
                            <a href="#">民谣</a><span class="line">|</span>
                            <a href="#">电子</a><span class="line">|</span>
                            <a href="#">舞曲</a><span class="line">|</span>
                            <a href="#">说唱</a><span class="line">|</span>
                            <a href="#">轻音乐</a><span class="line">|</span>
                            <a href="#">爵士</a><span class="line">|</span>
                            <a href="#">乡村</a><span class="line">|</span>
                            <a href="#">R&B/Soul</a><span class="line">|</span>
                            <a href="#">古典</a><span class="line">|</span>
                            <a href="#">民族</a><span class="line">|</span>
                            <a href="#">英伦</a><span class="line">|</span>
                            <a href="#">金属</a><span class="line">|</span>
                            <a href="#">蓝调</a><span class="line">|</span>
                            <a href="#">雷鬼</a><span class="line">|</span>
                            <a href="#">世界音乐</a><span class="line">|</span>
                            <a href="#">New Age</a><span class="line">|</span>
                            <a href="#">古风</a><span class="line">|</span>
                            <a href="#">Bossa Nova</a>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt class="f-cb-dt"><a-icon type="coffee" />场景</dt>
                        <dd class="f-cb-dd">
                            <a href="#">清晨</a><span class="line">|</span>
                            <a href="#">夜晚</a><span class="line">|</span>
                            <a href="#">学习</a><span class="line">|</span>
                            <a href="#">工作</a><span class="line">|</span>
                            <a href="#">午休</a><span class="line">|</span>
                            <a href="#">下午茶</a><span class="line">|</span>
                            <a href="#">地铁</a><span class="line">|</span>
                            <a href="#">驾车</a><span class="line">|</span>
                            <a href="#">运动</a><span class="line">|</span>
                            <a href="#">旅行</a><span class="line">|</span>
                            <a href="#">散步</a><span class="line">|</span>
                            <a href="#">酒吧</a>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt class="f-cb-dt"><a-icon type="smile" />情感</dt>
                        <dd class="f-cb-dd">
                            <a href="#">怀旧</a><span class="line">|</span>
                            <a href="#">清新</a><span class="line">|</span>
                            <a href="#">浪漫</a><span class="line">|</span>
                            <a href="#">伤感</a><span class="line">|</span>
                            <a href="#">治愈</a><span class="line">|</span>
                            <a href="#">放松</a><span class="line">|</span>
                            <a href="#">孤独</a><span class="line">|</span>
                            <a href="#">感动</a><span class="line">|</span>
                            <a href="#">兴奋</a><span class="line">|</span>
                            <a href="#">快乐</a><span class="line">|</span>
                            <a href="#">安静</a><span class="line">|</span>
                            <a href="#">思念</a>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt class="f-cb-dt"><a-icon type="customer-service" />主题</dt>
                        <dd class="f-cb-dd">
                            <a href="#">综艺</a><span class="line">|</span>
                            <a href="#">影视原声</a><span class="line">|</span>
                            <a href="#">ACG</a><span class="line">|</span>
                            <a href="#">儿童</a><span class="line">|</span>
                            <a href="#">校园</a><span class="line">|</span>
                            <a href="#">游戏</a><span class="line">|</span>
                            <a href="#">校园</a><span class="line">|</span>
                            <a href="#">70后</a><span class="line">|</span>
                            <a href="#">80后</a><span class="line">|</span>
                            <a href="#">90后</a><span class="line">|</span>
                            <a href="#">网络歌曲</a><span class="line">|</span>
                            <a href="#">KTV</a><span class="line">|</span>
                            <a href="#">经典</a><span class="line">|</span>
                            <a href="#">翻唱</a><span class="line">|</span>
                            <a href="#">吉他</a><span class="line">|</span>
                            <a href="#">钢琴</a><span class="line">|</span>
                            <a href="#">器乐</a><span class="line">|</span>
                            <a href="#">榜单</a><span class="line">|</span>
                            <a href="#">00后</a>
                        </dd>
                    </dl>
                </div>
            </a-col>
        </a-row>
        <router-view></router-view>
    </div>
</template>

<script>
import List from '../ChildComponents/List'
import MusicImage from '../ChildComponents/musicImage'
import axios from '../../utils/services'
import {mapGetters,mapActions} from 'vuex'
import Pagination from '../ChildComponents/pagination.vue'
export default {
    components:{
        List,
        MusicImage,
        Pagination
    },
    computed:{
        ...mapGetters({
            /** 分页 */
            current: 'getCurrent',
            total: 'getTotal',
            limit: 'getLimit',
            offset: 'getOffset',
        })
    },
    data(){
        return{
            songlist:[],
            /** 分类显示/隐藏 */
            isShow: false,
        }
    },
    mounted(){
        this.playsonglist(this.limit,this.offset)
    },
    filters:{
        /** 字符超长处理 */
        ellipsis (value) {
            if (!value) return ''
            if (value.length > 8) {
                return value.slice(0,8) + '...'
            }
            return value
        }
    },
    methods:{
        ...mapActions({
            setTotal: 'syncsetTotal'
        }),
        /** 分页 */
        onChange(current) {
            this.current = current;
        },
        /** 分类显示/隐藏 */
        typeShow(){
            this.isShow =! this.isShow;
        },
        /** 歌单 /top/playlist */
        playsonglist(limit,offset){
            axios.get(`/top/playlist?limit=${limit}&offset=${offset}`)
                .then((response)=>{
                    this.songlist = response.data.playlists
                    this.setTotal(response.data.total)
                })
        }
    }
}
</script>
<style lang="less">
.song-list-columns{
    border: 1px solid #ccc;
    margin-left: 6vw;
}
.song-list-columns .song-list-page,.song-list-header{
    margin-top: 4vh;
    height: 100%;
    margin-bottom: 5vh;
}
.song-list-columns-selectType{
    position: relative;
    border: 1px solid #ccc;
    padding-left: 0px !important;
    margin-top: -10vh !important;
}
.song-list-columns-selectType span{
    line-height: 25px;
    color: rgba(0, 0, 0, 0.65) !important;
}
.song-list-columns-selectType .anticon-down{
    position: absolute;
    right: 0.5vw;
    top: 1.3vh;
}
.song-list-columns-hot{
    margin-top:0.7vh;
    margin-right: 1vw;
}
.song-list-music{
    height: 100%;
}
.song-list-columns-hot{
    padding: 0 4px !important;
}
.song-list-music > div ul li{
    margin-left:3.2vw;
}
.song-list-page{
    height: 20vh;
}
.song-list-page .ant-pagination > li{
    margin-top: 4vh;
}
.song-list-page .ant-pagination > li:nth-child(1){
    margin-left: 20vw;
}
.song-type-select{
    position: absolute;
    z-index: 10;
    border: 1px solid #ccc;
    background: #fff;
    width: 48vw;
    height: 53vh;
    top: 10.5vh;
    left: 0vw;
}
.song-type-select h3{
    border-bottom: 1px solid #e6e6e6;
    height: 5vh;
}
.song-type-select h3 a{
    display: block;
    margin-left: 2vw;
    margin-top: 1vh;
    color: rgba(0, 0, 0, 0.65);
    width: 5vw;
    border: 2px solid #ccc;
    font-size: 14px;
    text-align: center;
}
.f-cb,.f-cb dt,.f-cb dd{
    height: 9vh;
    margin: 0;
}
.f-cb dd a{
    color: #333;
    margin: 0 0.5vw;
}
.f-cb dd a:hover{
    text-decoration: underline;
}
.f-cb dt,.f-cb dd{
    float: left;
}
.f-cb dt{
    width: 5vw;
    border-right: 1px solid #ccc;
    margin-left: 0.5vw;
    font-weight: bold;
}
.f-cb dd{
    width: 40vw;
    padding-left: 1vw;
}
.f-cb dt .anticon{
    margin: 0 0.5vw;
}
.songlist-music-love{
    position: relative;
}
.songlist-music-love > a{
    position: absolute;
    top: 0;
    left: 15px;
}
.songlist-music-love a{
    color: #666;
}
.songlist-music-love a:hover{
    text-decoration: underline;
    color: #666;
}
</style>