<template>
    <Ranking>
        <template v-slot:rankingTitle>
            <div class="ranking-title">
                <img :src="datalist.coverImgUrl" style="width:140px;height:140px" />
                <div class="rktitle">
                    <h2>{{datalist.name}}</h2>
                    <a-icon type="history" /><span>最近更新:</span><span>{{datalist.updateTime | formatDate}}</span>
                    <div>
                        <a-button type="primary" icon="play-circle" title="播放">播放</a-button>
                        <a-button type="primary" icon="plus"  class="rank-plus" style="font-size:12px" title="添加到播放列表" />
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
                        <a href="#" v-if="datalist.tracks" style="font-size:12px;margin-left:1vw;margin-top:0.2vh;cursor:default;textDecoration:none;">
                            {{datalist.tracks.length}}首歌</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#" style="font-size:12px;cursor:default;textDecoration:none;margin-right:1vw;margin-top:1vh;">
                            播放：<em style="color:#c20c0c">{{datalist.playCount}}</em>次
                        </a>
                    </template>
                </List>
                <table class="qgg-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>标题</th>
                            <th>时长</th>
                            <th>歌手</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in datalist.tracks" :key="index">
                            <td width="7%">{{index+1}}</td>
                            <td width="60%">
                                <img :src="item.al.picUrl" class="qgg-table-picUrl" v-if="index==0" />
                                <img :src="item.al.picUrl" class="qgg-table-picUrl" v-else-if="index==1"/>
                                <img :src="item.al.picUrl" class="qgg-table-picUrl" v-else-if="index==2"/>
                                <a-icon class="bottom-bf qgg-table-playCircle" type="play-circle" />
                                <a href="#" :title="item.name">{{item.name}}</a>
                                <span v-for="(items,index1) in item.alia" :key="index1" :title="items">
                                    {{index1 === item.alia.length ? " ":"- "}}{{items}}
                                </span>
                            </td>
                            <td width="10%">{{item.dt | formatSeconds}}</td>
                            <td width="20%" class="qgg-table-singer">
                                <div class="qgg-table-singer-div">
                                    <a href="#" v-for="(items,index2) in item.ar" :key="index2" 
                                        :title="items.name" >{{items.name}}{{index2 === item.ar.length-1 ? " ":" / "}}</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        /** 月/日 */
        formatDate: function (value) {
            let date = new Date(value);
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return MM + '月' + d + '日';
        },
        /** 分/秒 */
        formatSeconds: function(value){
            let date = new Date(value);
            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;
            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            return m + ':' + s;
        },
        /** 字符超长处理 */
        ellipsis (value) {
            if (!value) return ''
            if (value.length > 32) {
                return value.slice(0,32) + '...'
            }
            return value
        }
    },
    data(){
        return{
            datalist:[],
        }
    },
    methods:{
    },
}
</script>
<style lang="less">
/** Table 表格样式 **/
.qgg-table{
    border-collapse: collapse;
    width:100%;
    border:0px solid #c6c6c6 !important;
    margin-bottom:20px;
    color: #999;
}
.qgg-table th{
    border-collapse: collapse;
    border-right:0px solid #c6c6c6 !important;
    border-bottom:0px solid #c6c6c6 !important;
    background-color:#f0f0f0 !important; 
    padding:5px 9px;
    font-size:14px;
    font-weight:normal;
}
.qgg-table td{
    border-collapse: collapse;
    border-right:0px solid #c6c6c6 !important;
    border-bottom:0px solid #c6c6c6 !important; 
    padding:5px 9px;
    font-size:12px;
    font-weight:normal;
    word-break: break-all;
}
.qgg-table tr:nth-child(odd){
    background-color:#fff !important; 
}
.qgg-table tr:nth-child(even){
    background-color: #f8f8f8 !important;
}
.qgg-table tr td:nth-child(1){
    text-align: center;
}
.qgg-table tr td a{
    color: #333;
}
.qgg-table-picUrl{
    margin-right: 5px;
    width:50px;
    height:50px;
}
.qgg-table-playCircle{
    margin-right: 5px;
    cursor: pointer;
}
.qgg-table-singer .qgg-table-singer-div{
    width: 250px;
    display:inline-block;/*行内元素必须添加此属性，宽度设置才能有效*/
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
</style>
