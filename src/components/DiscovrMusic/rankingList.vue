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
                <Ranking>
                    <template v-slot:rankingTitle>
                        <div class="ranking-title">
                            <img src="/109951166027478939.jpg" />
                            <div class="rktitle">
                                <h2>飙升榜</h2>
                                <a-icon type="history" /><span>最近更新:</span><span>08月31日(每天更新)</span>
                                <div>
                                    <a-button type="primary" icon="play-circle" >播放</a-button>
                                    <a-button type="primary" icon="plus"  class="rank-plus" style="font-size:12px" />
                                    <a-button icon="folder-add" >(111)</a-button>
                                    <a-button icon="rise" >(33333333)</a-button>
                                    <a-button icon="download" >下载</a-button>
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
                            <a-table :columns="rankColumns" :data-source="rankData">
                                <a slot="name" slot-scope="text">{{ text }}</a>
                            </a-table>
                        </div>
                    </template>
                </Ranking>
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
            ],
            rankColumns:[
                {
                    title: '',
                    dataIndex: 'key',
                    width:30
                },
                {
                    title: '',
                    dataIndex: 'rank',
                    width: 60,
                },
                {
                    title: '标题',
                    dataIndex: 'title',
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
                    width: 230,
                    ellipsis: true,
                },
            ],
            rankData:[
                {
                    key: <span class="data-key">1</span>,
                    rank: <div class="data-rank"><a-icon type="arrow-up" />8</div>,
                    title: <div class="data-title">
                        <img src="/109951166027478939.jpg" />
                        <a-icon type="play-circle" />
                        <a href="#">致你</a><span>- (女生版)</span>
                    </div>,
                    duration: <span class="data-duration">04:31</span>,
                    singer: <a href="#" class="data-singer">yihuik苡慧</a>,
                },
                {
                    key: <span class="data-key">2</span>,
                    rank: <div class="data-rank"><a-icon type="arrow-up" />8</div>,
                    title: <div class="data-title">
                        <img src="/109951166027478939.jpg" />
                        <a-icon type="play-circle" />
                        <a href="#">你注定会遇到我</a><span></span>
                    </div>,
                    duration: <span class="data-duration">04:16</span>,
                    singer: <a href="#" class="data-singer">金玟岐</a>,
                },
                {
                    key: <span class="data-key">3</span>,
                    rank: <div class="data-rank">new</div>,
                    title: <div class="data-title">
                        <img src="/109951166027478939.jpg" />
                        <a-icon type="play-circle" />
                        <a href="#">我们好好的</a><span></span>
                    </div>,
                    duration: <span class="data-duration">04:32</span>,
                    singer: <a href="#" class="data-singer">李荣浩</a>,
                },
                {
                    key: <span class="data-key">4</span>,
                    rank: <div class="data-rank">new</div>,
                    title: <div class="data-title">
                        <a-icon type="play-circle" />
                        <a href="#">不安（Live）</a><span></span>
                    </div>,
                    duration: <span class="data-duration">03:28</span>,
                    singer: <a href="#" class="data-singer">陈红鲤</a>,
                },
                {
                    key: <span class="data-key">5</span>,
                    rank: <div class="data-rank">new</div>,
                    title: <div class="data-title">
                        <a-icon type="play-circle" />
                        <a href="#">生命線</a><span>- (游戏《月姬 -A piece of blue glass moon-》主题曲)</span>
                    </div>,
                    duration: <span class="data-duration">04:15</span>,
                    singer: <a href="#" class="data-singer">ReoNa</a>,
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