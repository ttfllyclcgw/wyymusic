<template>
    <Ranking>
        <template v-slot:rankingTitle>
            <div class="ranking-title">
                <img :src="datalist.coverImgUrl" style="width:140px;height:140px" />
                <div class="rktitle">
                    <h2>{{datalist.name}}</h2>
                    <a-icon type="history" /><span>最近更新:</span><span>{{datalist.updateTime | formatDate}}</span>
                    <div>
                        <a-button type="primary" icon="play-circle" >播放</a-button>
                        <a-button type="primary" icon="plus"  class="rank-plus" style="font-size:12px" />
                        <a-button icon="folder-add" >({{datalist.subscribedCount}})</a-button>
                        <a-button icon="rise" >({{datalist.shareCount}})</a-button>
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
                        <a href="#" style="font-size:12px;margin-left:1vw;margin-top:0.2vh;cursor:default;textDecoration:none;">{{datalist.trackCount}}首歌</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#" style="font-size:12px;cursor:default;textDecoration:none;margin-right:1vw;margin-top:1vh;">
                            播放：<em style="color:#c20c0c">{{datalist.playCount}} </em>次
                        </a>
                    </template>
                </List>
                <a-table :columns="rankColumns" :row-key="record=>record.key" :data-source="rankData">
                    <a slot="name" slot-scope="text">{{ text }}</a>
                </a-table>
            </div>
        </template>
    </Ranking>
</template>
<script>
import List from '../ChildComponents/List.vue'
import Ranking from '../ChildComponents/ranking.vue'
export default {
    components:{
        List,
        Ranking
    },
    props:['detailData'],
    watch:{
        detailData:function(val){
            this.datalist = val;
        }
    },
    filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return MM + '月' + d + '日';
      }
    },
    data(){
        return{
            datalist:[],
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
                    key: 1,
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
                    key: 2,
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
                    key: 3,
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
                    key: 4,
                    rank: <div class="data-rank">new</div>,
                    title: <div class="data-title">
                        <a-icon type="play-circle" />
                        <a href="#">不安（Live）</a><span></span>
                    </div>,
                    duration: <span class="data-duration">03:28</span>,
                    singer: <a href="#" class="data-singer">陈红鲤</a>,
                },
                {
                    key: 5,
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
    },
    methods:{
    },
}
</script>
<style scoped>

</style>
