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
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(1,7,-1);setFlagName('华语男歌手')">华语男歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}"
                                    v-on:click.native="artistlistData(2,7,-1);setFlagName('华语女歌手')">华语女歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}"
                                    v-on:click.native="artistlistData(3,7,-1);setFlagName('华语组合/乐队')">华语组合/乐队</router-link></li>
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
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(1,96,-1);setFlagName('欧美男歌手')">欧美男歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(2,96,-1);setFlagName('欧美女歌手')">欧美女歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(3,96,-1);setFlagName('欧美组合/乐队')">欧美组合/乐队</router-link></li>
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
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(1,8,-1);setFlagName('日本男歌手')">日本男歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(2,8,-1);setFlagName('日本女歌手')">日本女歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(3,8,-1);setFlagName('日本组合/乐队')">日本组合/乐队</router-link></li>
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
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(1,16,-1);setFlagName('韩国男歌手')">韩国男歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(2,16,-1);setFlagName('韩国女歌手')">韩国女歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(3,16,-1);setFlagName('韩国组合/乐队')">韩国组合/乐队</router-link></li>
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
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(1,0,-1);setFlagName('其他男歌手')">其他男歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(2,0,-1);setFlagName('其他女歌手')">其他女歌手</router-link></li>
                                <li><router-link :to="{path:`/discoveryMusic/singer/artistlist`}" 
                                    v-on:click.native="artistlistData(3,0,-1);setFlagName('其他组合/乐队')">其他组合/乐队</router-link></li>
                            </ul>
                        </template>
                    </SingerList>
                </div>
            </a-col>
            <a-col :span="16" class="right-rank-row">
                <keep-alive>
                    <router-view :artistlist="artistlist"></router-view>
                </keep-alive>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import List from '../ChildComponents/List'
import SingerList from '../ChildComponents/singerList'
import axios from '../../utils/services'
import {mapMutations} from 'vuex'
export default {
    components:{
        List,
        SingerList,
    },
    mounted(){
        this.$router.push('/discoveryMusic/singer/artistlist')
        this.artistlistData(this.type,this.area,this.initial)
    },
    data(){
        return{
            artistlist:[],
            type: 1,
            area: 7,
            initial: -1,
        }
    },
    methods:{
        ...mapMutations({
            setFlagName: 'setFlagName'
        }),
        /** 歌手分类列表 /artist/list?type=1&area=96&initial=0 */
        artistlistData(type,area,initial){
            axios.get(`/artist/list?type=${type}&area=${area}&initial=${initial}&limit=100`)
                .then((response)=>{
                    this.artistlist = response.data.artists
                })
        },
    }
}
</script>
<style lang="less">
@color: #333;
.singer-list-ul li > a{
    color: @color;
    line-height: 30px;
}
.singer-list-ul{
    margin-top: 4px;
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
.right-rank-row{
    padding-bottom: 5vh;;
}
</style>