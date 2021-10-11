<template>
    <div>
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
                                <router-link to="/discoverMusic/singer/details" class="music-msk" 
                                    :title="item.musicMsk"></router-link>
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
    </div>
</template>
<script>
import List from '../ChildComponents/List'
import MusicImage from '../ChildComponents/musicImage'
export default {
    components:{
        List,
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
<style scoped>

</style>
