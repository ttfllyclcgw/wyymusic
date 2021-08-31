<template>
    <div class="ranking">
        <div class="ranking-title">
            <img src="/109951166027478939.jpg" />
            <div class="rktitle">
                <h2>飙升榜</h2>
                <a-icon type="history" /><span>最近更新:</span><span>08月31日(每天更新)</span>
                <div>
                    <a-button type="primary" icon="play-circle" :size="size">播放</a-button>
                    <a-button type="primary" icon="plus" :size="size" class="rank-plus" />
                    <a-button icon="folder-add" :size="size">(111)</a-button>
                    <a-button icon="rise" :size="size">(33333333)</a-button>
                    <a-button icon="download" :size="size">下载</a-button>
                </div>
            </div>
        </div>
        <div class="ranking-list">
            <List :islistIcon="true">
                <template v-slot:listTitle>
                    <a href="#" class="v-list-title">歌曲列表</a>
                </template>
                <template v-slot:listTab>
                    <a href="#" style="font-size:12px;margin-left:1vw;margin-top:0.2vh">99首歌</a>
                </template>
                <template v-slot:listMore>
                    <a href="#" style="font-size:12px;cursor:default;textDecoration:none;margin-right:1vw;margin-top:1vh;">
                        播放：<em style="color:#c20c0c">4495203840 </em>次
                    </a>
                </template>
            </List>
            <a-table :columns="rankColumns" :data-source="rankData" >
                <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
        </div>
    </div>
</template>


<script>
import List from '../ChildComponents/List.vue'
export default{
    components:{
        List
    },
    data(){
        return{
            rankColumns:[
                {
                    title: '',
                    dataIndex: 'key',
                    key: 'key',
                    width:30
                },
                {
                    title: '',
                    dataIndex: 'rank',
                    key: 'rank',
                    width: 60,
                },
                {
                    title: '标题',
                    dataIndex: 'title',
                    key: 'title',
                    ellipsis: true,
                },
                {
                    title: '时长',
                    dataIndex: 'duration',
                    key: 'duration',
                    width: 130,
                    ellipsis: true,
                },
                {
                    title: '歌手',
                    dataIndex: 'singer',
                    key: 'singer',
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
.ranking-title{
    height: 25vh;
}
.ranking-title img, .ranking-title .rktitle{
    float: left;
}
.ranking-title img{
    border: 1px solid #ccc;
    padding:2px;
}
.ranking-title .rktitle{
    margin-left: 4%;
    margin-top: 1.5%;
}
.ranking-title .rktitle > span{
    font-size: 12px;
    margin-left: 1%;
}
.ranking-title .rktitle > div{
    margin-top: 3%;
    width:40vw;
}
.rank-plus{
    margin-top:1%;
}
.ant-btn{
    margin-left: 0.3%;
}
.data-key,.data-title,.data-rank,.data-duration,.data-singer{
    font-size: 12px;
}
.data-singer,.data-title a{
    color:rgba(0, 0, 0, 0.65);
}
.data-singer:hover,.data-title a:hover{
    color:rgba(0, 0, 0, 0.65);
    text-decoration: underline;
}
.data-title img{
    width: 50px;
    height: 50px;
}
.data-rank{
    color: #c20c0c;
}
.data-title span{
    color: #aeaeae;
}
.data-title .anticon-play-circle,.data-title a{
    margin-left: 3%;
}
.data-title span{
    margin-left: 1%;
}
</style>