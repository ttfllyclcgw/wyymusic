<template>
    <!-- /发现音乐/歌手 -->
    <div class="singer">
        <a-row class="rank-a-row">
            <a-col :span="4" class="left-rank-row">
                <div class="left-rank-row-singer">
                    <List :islistIcon="true" style="border-bottom:0px solid">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="font-size:16px;font-weight:bold;margin:1.5vh 0 0 -1vw;">华语</a>
                        </template>
                    </List>
                    <SingerList>
                        <template v-slot:singerLists>
                            <ul class="singer-list-ul">
                                <li><a href="#">华语男歌手</a></li>
                                <li><a href="#">华语女歌手</a></li>
                                <li><a href="#">华语组合/乐队</a></li>
                            </ul>
                        </template>
                    </SingerList>
                </div>
                <div class="left-rank-row-singer">
                    <List :islistIcon="true" style="border-bottom:0px solid">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="font-size:16px;font-weight:bold;margin:1.5vh 0 0 -1vw;">欧美</a>
                        </template>
                    </List>
                    <SingerList>
                        <template v-slot:singerLists>
                            <ul class="singer-list-ul">
                                <li><a href="#">欧美男歌手</a></li>
                                <li><a href="#">欧美女歌手</a></li>
                                <li><a href="#">欧美组合/乐队</a></li>
                            </ul>
                        </template>
                    </SingerList>
                </div>
                <div class="left-rank-row-singer">
                    <List :islistIcon="true" style="border-bottom:0px solid">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="font-size:16px;font-weight:bold;margin:1.5vh 0 0 -1vw;">日本</a>
                        </template>
                    </List>
                    <SingerList>
                        <template v-slot:singerLists>
                            <ul class="singer-list-ul">
                                <li><a href="#">日本男歌手</a></li>
                                <li><a href="#">日本女歌手</a></li>
                                <li><a href="#">日本组合/乐队</a></li>
                            </ul>
                        </template>
                    </SingerList>
                </div>
                <div class="left-rank-row-singer">
                    <List :islistIcon="true" style="border-bottom:0px solid">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="font-size:16px;font-weight:bold;margin:1.5vh 0 0 -1vw;">韩国</a>
                        </template>
                    </List>
                    <SingerList>
                        <template v-slot:singerLists>
                            <ul class="singer-list-ul">
                                <li><a href="#">韩国男歌手</a></li>
                                <li><a href="#">韩国女歌手</a></li>
                                <li><a href="#">韩国组合/乐队</a></li>
                            </ul>
                        </template>
                    </SingerList>
                </div>
                <div class="left-rank-row-singer">
                    <List :islistIcon="true" style="border-bottom:0px solid">
                        <template v-slot:listTitle>
                            <a href="#" class="v-list-title" style="font-size:16px;font-weight:bold;margin:1.5vh 0 0 -1vw;">其他</a>
                        </template>
                    </List>
                    <SingerList>
                        <template v-slot:singerLists>
                            <ul class="singer-list-ul">
                                <li><a href="#">其他男歌手</a></li>
                                <li><a href="#">其他女歌手</a></li>
                                <li><a href="#">其他组合/乐队</a></li>
                            </ul>
                        </template>
                    </SingerList>
                </div>
            </a-col>
            <a-col :span="16" class="right-rank-row">
                <List :islistIcon="true">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title" style="cursor:default">华语</a>
                    </template>
                </List>
                <ul class="right-rank-row-select">
                    <li><a href="#" style="color:#fff;">热门</a></li>
                    <li><a href="#">A</a></li>
                    <li><a href="#">B</a></li>
                    <li><a href="#">C</a></li>
                    <li><a href="#">D</a></li>
                    <li><a href="#">E</a></li>
                    <li><a href="#">F</a></li>
                    <li><a href="#">G</a></li>
                    <li><a href="#">H</a></li>
                    <li><a href="#">I</a></li>
                    <li><a href="#">J</a></li>
                    <li><a href="#">K</a></li>
                    <li><a href="#">L</a></li>
                    <li><a href="#">M</a></li>
                    <li><a href="#">N</a></li>
                    <li><a href="#">O</a></li>
                    <li><a href="#">P</a></li>
                    <li><a href="#">Q</a></li>
                    <li><a href="#">R</a></li>
                    <li><a href="#">S</a></li>
                    <li><a href="#">T</a></li>
                    <li><a href="#">U</a></li>
                    <li><a href="#">V</a></li>
                    <li><a href="#">W</a></li>
                    <li><a href="#">X</a></li>
                    <li><a href="#">Y</a></li>
                    <li><a href="#">Z</a></li>
                    <li><a href="#">其他</a></li>
                </ul>
                <div class="right-singer-top10">
                    <MusicImage>
                        <template v-slot:recommend>
                            <ul class="music-ul" v-if="singerTopTen.length">
                                <li v-for="(item,index) in singerTopTen" :key="index" style="width:118px;">
                                    <div class="music-image" >
                                        <img :src="item.musicImg" style="width:118px;height:110px;"  />
                                        <a class="music-msk" :title="item.musicMsk" href="#"></a>
                                    </div>
                                    <p class="music-dec" style="width:118px;"><a href="#">{{item.musicMsk}}</a></p>
                                </li>
                            </ul>  
                        </template>
                    </MusicImage>
                </div>
                <div class="right-singer-list">
                    <ul v-if="singer.length">
                        <li v-for="(item,index) in singer" :key="index">
                            <a href="#">{{item.musicMsk}}</a>
                        </li>
                    </ul>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import List from '../ChildComponents/List'
import SingerList from '../ChildComponents/singerList'
import MusicImage from '../ChildComponents/musicImage'
export default {
    components:{
        List,
        SingerList,
        MusicImage
    },
    data(){
        return{
            singerTopTen:[
                {
                    musicId:'1',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'薛之谦',
                },
                {
                    musicId:'2',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'林俊杰',
                },
                {
                    musicId:'3',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'陈奕迅',
                },
                {
                    musicId:'4',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'刘大壮',
                },
                {
                    musicId:'5',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'毛不易',
                },
                {
                    musicId:'6',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'许嵩',
                },
                {
                    musicId:'7',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'李荣浩',
                },
                {
                    musicId:'8',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'颜人中',
                },
                {
                    musicId:'9',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'张杰',
                },
                {
                    musicId:'10',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'隔壁老樊',
                },
            ],
            singer:[
                {
                    musicId:'11',
                    musicMsk:'郭顶',
                },
                {
                    musicId:'12',
                    musicMsk:'队长',
                },
                {
                    musicId:'13',
                    musicMsk:'姜云升',
                },
                {
                    musicId:'14',
                    musicMsk:'Copy',
                },
                {
                    musicId:'15',
                    musicMsk:'小田音乐社',
                },
                {
                    musicId:'16',
                    musicMsk:'沈以诚',
                },
                {
                    musicId:'17',
                    musicMsk:'汪苏泷',
                },
                {
                    musicId:'18',
                    musicMsk:'华晨宇',
                },
                {
                    musicId:'19',
                    musicMsk:'马思维',
                },
                {
                    musicId:'20',
                    musicMsk:'h3R3',
                },
                {
                    musicId:'21',
                    musicMsk:'法老',
                },
            ]
        }
    }
}
</script>
<style lang="less">
@color: #333;
.singer-list-ul li > a{
    color: @color;
    line-height: 30px;
}
.left-rank-row-singer{
    border-bottom: 1px solid #ccc;
    margin-left:1vw;
    margin-right: 1vw;
}
.right-rank-row-select{
    height:3vh;
    margin-top: 3vh;
    padding:0;
}
.right-rank-row-select li{
    list-style-type: none;
    float: left;
    margin-left: 1.1vw;
    text-align: center;
}
.right-rank-row-select li:nth-child(1){
    background:#c20c0c;
    border-radius: 2px;
    height: 4vh;
    width: 3vw;
}
.right-rank-row-select li > a{
    color:@color;
    font-size: 16px;
}
.right-rank-row-select li > a:hover{
    text-decoration: underline;
}
.right-singer-top10{
    height: 53vh;
}
.right-singer-list{
    border-top: 1px dashed #ccc;
}
.right-singer-list ul{
    margin-top: 3vh;
}
.right-singer-list li{
    list-style-type: none;
    float:left;
    width:10vw;
    height:5vh;
    border: 0px solid;
}
.right-singer-list li > a{
    color:@color;
}
</style>