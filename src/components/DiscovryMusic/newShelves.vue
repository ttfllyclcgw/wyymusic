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
                                            <img :src="item.picUrl" style="width:130px;height:130px" />
                                            <a class="singer-msk" :title="item.name" href="#"></a>
                                            <div class="singer-bottom shelves-bottom" >
                                                <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                            </div>
                                        </div>
                                        <p class="singer-dec" style="width:130px;"><a href="#" :title="item.name">{{item.name}}</a></p>
                                        <p class="singer-love" style="width:130px;">
                                            <a href="#" v-for="(items,index2) in item.artists" :key="index2" 
                                            :title="items.name" >{{items.name}}{{index2 === item.artists.length-1 ? " ":" / "}}</a>
                                        </p>
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
                                    <li v-for="(item,index) in allShelves" :key="index" style="width:130px;">
                                        <div class="singer-image">
                                            <img :src="item.picUrl" style="width:130px;height:130px" />
                                            <a class="singer-msk" :title="item.name" href="#"></a>
                                            <div class="singer-bottom shelves-bottom" >
                                                <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                            </div>
                                        </div>
                                        <p class="singer-dec" style="width:130px;"><a href="#" :title="item.name">{{item.name}}</a></p>
                                        <p class="singer-love" style="width:130px;">
                                            <a href="#" v-for="(items,index2) in item.artists" :key="index2" 
                                            :title="items.name" >{{items.name}}{{index2 === item.artists.length-1 ? " ":" / "}}</a>
                                        </p>
                                    </li>
                                </ul>
                            </template>
                        </SingerImage>
                    </div>  
                </div>  
                <div class="song-list-page">
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import List from '../ChildComponents/List.vue'
import SingerImage from '../ChildComponents/singerImage.vue'
import axios from '../../utils/services'
export default {
    components:{
        List,
        SingerImage
    },
    data(){
        return{
            /** 热门新碟 */
            hotShelves:[],
            type: 'new',
            /** 全部新碟 */
            allShelves:[],
            area: 'ALL',
            offset: 0,
            /** 分页 */
        }
    },
    mounted(){
        this.hotShelveslist();
        this.allShelveslist();
    },
    methods:{
        /** 热门新碟 */
        hotShelveslist(){
            axios.get(`/top/album?offset=${0}&limit=${10}&type=${this.type}`)
                .then((response)=>{
                    for(let i=0;this.hotShelves.length<10;i++){
                        this.hotShelves.push(response.data.weekData[i])
                    }
                })
        },
        /** 全部新碟 */
        allShelveslist(){
            axios.get(`/album/new?area=${this.area}&offset=${this.offset}&limit=${35}`)
                .then((response)=>{
                    this.allShelves = response.data.albums
                })
        }
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
    left: 7vw !important;
}
.shelves-ul li{
    .singer-dec{
        font-size: 14px;
        color: #000;
    }
    .singer-love{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        a{
            font-size: 12px;
            color: #666;
        }
        a:hover{
            text-decoration: underline;
            color: #666;
        }
    }
}
</style>