<template>
    <!-- /发现音乐/排行榜 -->
    <div class="rankingList">
        <a-row class="rank-a-row">
            <a-col :span="4" class="left-rank-row">
                <div class="left-singer-rank">
                    <List :islistIcon="true" style="border-bottom:0px solid">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="font-size:14px;font-weight:bold;margin:1.5vh 0 0 -1vw;">云音乐特色榜</a>
                        </template>
                    </List>
                    <SingerList>
                        <template v-slot:singerLists>
                            <a-list item-layout="horizontal" :data-source="featuresList">
                                <a-list-item slot="renderItem" slot-scope="item">
                                    <a-list-item-meta :description="item.updateFrequency">
                                        <!--<a slot="title" href="#" :style="{fontSize:`${titleFontSize}px`}">{{ item.title }}</a>-->
                                        <router-link slot="title" :to="{path:'/discoveryMusic/ranking/details',query:{id:item.id}}" 
                                            v-on:click.native="detailslist(item.id)">{{ item.name }}</router-link>
                                        <a-avatar  slot="avatar" shape="square" :size="43"  :src="item.coverImgUrl"/>
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </template>
                    </SingerList>
                </div>
                <div class="left-singer-rank">
                    <List :islistIcon="true" style="border-bottom:0px solid">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="font-size:14px;font-weight:bold;margin:1.5vh 0 0 -1vw;">全球媒体榜</a>
                        </template>
                    </List>
                    <SingerList>
                        <template v-slot:singerLists>
                            <a-list item-layout="horizontal" :data-source="worldList">
                                <a-list-item slot="renderItem" slot-scope="item">
                                    <a-list-item-meta :description="item.updateFrequency">
                                        <router-link slot="title" :to="{path:'/discoveryMusic/ranking/details',query:{id:item.id}}" 
                                            v-on:click.native="detailslist(item.id)">{{ item.name }}</router-link>
                                        <a-avatar  slot="avatar" shape="square" :size="43"  :src="item.coverImgUrl"/>
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </template>
                    </SingerList>
                </div>
            </a-col>
            <a-col :span="16" class="right-rank-row">
                <keep-alive>
                    <router-view :detailData="detailData"></router-view>
                </keep-alive>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import List from '../ChildComponents/List.vue'
import SingerList from '../ChildComponents/singerList.vue'
import axios from '../../utils/services'
export default {
    components:{
        List,
        SingerList
    },
    data(){
        return{
            featuresList:[],
            worldList:[],
            detailData:[]
        }
    },
    mounted(){
        this.toplist()
        this.$router.push('/discoveryMusic/ranking/details')
        this.detailslist('19723756')
    },
    
    methods:{
        /** 所有榜单内容摘要 */
        toplist(){
            axios.get(`/toplist`)
                .then((response)=>{
                    let data = response.data.list
                    for(var i = 0; i < data.length; i++){
                        if(i < 4){
                            this.featuresList.push(data[i])
                        }else{
                            this.worldList.push(data[i])
                        }
                    }
                }).catch((error)=>{
                    this.$message.error('/toplist查询失败');
                })
        },
        /** 获取歌单详情 */
        detailslist(id){
            axios.get(`/playlist/detail?id=${id}`)
                .then((response)=>{
                    this.detailData = response.data.playlist
                }).catch((error)=>{
                    this.$message.error('/playlist/detail查询失败');
                })
        }
        
    }
}
</script>
<style lang="less">
.left-rank-row,.right-rank-row{
    border: 1px solid #ccc;
    height: 100%;
    margin-left: 5vw;
}
.left-singer-rank div .ant-list-split .ant-spin-nested-loading .ant-spin-container .ant-list-items .ant-list-item{
    border-bottom: 0px solid;
    padding: 5px 0;
    margin-left: 1vw;
}
</style>