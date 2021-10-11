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
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import List from '../ChildComponents/List'
import SingerList from '../ChildComponents/singerList'
import SingerArtistlist from '../ChildComponents/singerArtistlist'
export default {
    components:{
        List,
        SingerList,
        SingerArtistlist
    },
    data(){
        return{

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
.right-singer-list li > a:hover{
    text-decoration: underline;
}
</style>