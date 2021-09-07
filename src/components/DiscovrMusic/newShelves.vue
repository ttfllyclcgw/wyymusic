<template>
    <!-- /发现音乐/新碟上架 -->
    <div>
        <a-row>
            <a-col :span="20" class="song-list-columns">
                <div class="song-list-header hot-shelves-header">
                    <List :islistIcon="true">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="cursor:auto">热门新碟</a>
                        </template>
                    </List>
                    <div class="song-list-shelves">
                        <SingerImage>
                            <template v-slot:singerMusic>
                                <ul class="singer-ul shelves-ul">
                                    <li v-for="(item,index) in hotShelves" :key="index" style="width:130px;">
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
                    </div>    
                </div>
                <div class="song-list-header all-shelves-header">
                    <List :islistIcon="true">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="cursor:auto">全部新碟</a>
                        </template>
                        <template v-slot:listTab>
                        <a href="#">全部</a>
                        <span class="line">|</span>
                        <a href="#">华语</a>
                        <span class="line">|</span>
                        <a href="#">欧美</a>
                        <span class="line">|</span>
                        <a href="#">韩国</a>
                        <span class="line">|</span>
                        <a href="#">日本</a>
                    </template>
                    </List>
                    <div class="song-list-shelves">
                        <SingerImage>
                            <template v-slot:singerMusic>
                                <ul class="singer-ul shelves-ul">
                                    <li v-for="(item,index) in hotShelves" :key="index" style="width:130px;">
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
                    </div>  
                </div>  
                <div class="song-list-page">
                    <a-pagination
                        v-model="current" :page-size-options="pageSizeOptions" :total="total"
                        show-size-changer :page-size="pageSize" @showSizeChange="onShowSizeChange">
                        <template slot="buildOptionText" slot-scope="props">
                            <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
                            <span v-if="props.value === '50'">全部</span>
                        </template>
                    </a-pagination>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import List from '../ChildComponents/List.vue'
import SingerImage from '../ChildComponents/singerImage.vue'
export default {
    components:{
        List,
        SingerImage
    },
    data(){
        return{
            hotShelves:[
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
                {
                    musicId:'7',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'不期而遇的夏天',
                    musicSinger:'陈奕迅'
                },
                {
                    musicId:'8',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'不期而遇的夏天',
                    musicSinger:'陈奕迅'
                },
                {
                    musicId:'9',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'不期而遇的夏天',
                    musicSinger:'陈奕迅'
                },
                {
                    musicId:'10',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'不期而遇的夏天',
                    musicSinger:'陈奕迅'
                },
            ],
            /** 分页 */
            pageSizeOptions: ['10', '20', '30', '40', '50'],
            current: 1,
            pageSize: 10,
            total: 50,
            /** 分类显示/隐藏 */
            isShow: false,
        }
    },
    methods:{
        onShowSizeChange(current, pageSize) {
            this.pageSize = pageSize;
        },
    }
}
</script>
<style lang="less">
.song-list-shelves{
    height:60vh;
}
.shelves-ul li{
    margin-left:3.6vw;
}
.shelves-bottom .bottom-bf{
    left: 7.5vw !important;
}
</style>