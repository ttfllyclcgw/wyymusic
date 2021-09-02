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
                            <a-list item-layout="horizontal" :data-source="data">
                                <a-list-item slot="renderItem" slot-scope="item">
                                    <a-list-item-meta :description="item.description">
                                        <!--<a slot="title" href="#" :style="{fontSize:`${titleFontSize}px`}">{{ item.title }}</a>-->
                                        <a slot="title" href="#">{{ item.title }}</a>
                                        <a-avatar  slot="avatar" shape="square" :size="43"  src="/109951166027478939.jpg"/>
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
                            <a-list item-layout="horizontal" :data-source="data">
                                <a-list-item slot="renderItem" slot-scope="item">
                                    <a-list-item-meta :description="item.description">
                                        <a slot="title" href="#">{{ item.title }}</a>
                                        <a-avatar  slot="avatar" shape="square" :size="43"  src="/109951166027478939.jpg"/>
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </template>
                    </SingerList>
                </div>
            </a-col>
            <a-col :span="16" class="right-rank-row">
                <Ranking></Ranking>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import List from '../ChildComponents/List.vue'
import SingerList from '../ChildComponents/singerList.vue'
import Ranking from '../ChildComponents/ranking.vue'
export default {
    components:{
        List,
        SingerList,
        Ranking
    },
    data(){
        return{
            data:[
                {
                    title: '飙升榜',
                    description:'每天更新'
                },
                {
                    title: '新歌榜',
                    description:'每天更新'
                },
                {
                    title: '原创榜',
                    description:'每周四更新'
                },
                {
                    title: '热歌榜',
                    description:'每天更新'
                },
                {
                    title: '黑胶VIP爱听榜',
                    description:'每周四更新'
                },
            ]
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