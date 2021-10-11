<template>
    <div>
        <List :islistIcon="true">
            <template v-slot:listTitle>
                <a href="#" class="v-list-title" style="cursor:default">{{flagName}}</a>
            </template>
        </List>
        <ul class="right-rank-row-select">
            <li><a href="#" style="color:#fff;">热门</a></li>
            <li v-for="(data,index) in zm" :key="index">
                <router-link to="#">{{data}}</router-link>
            </li>
            <li><a href="#">其他</a></li>
        </ul>
        <div class="right-singer-top10">
            <MusicImage>
                <template v-slot:recommend>
                    <ul class="music-ul" v-if="artistData.length">
                        <li v-for="(item,index) in artistData" :key="index" style="width:118px;">
                            <div class="music-image" >
                                <img :src="item.picUrl" v-if="index<10" style="width:118px;height:110px;"  />
                                <router-link to="/discoverMusic/singer/details" class="music-msk" 
                                    :title="item.name"></router-link>
                            </div>
                            <p class="music-dec" style="width:118px;"><a href="#" :title="item.name">{{item.name | ellipsis}}</a></p>
                        </li>
                    </ul>  
                </template>
            </MusicImage>
        </div>
    </div>
</template>
<script>
import List from '../ChildComponents/List'
import MusicImage from '../ChildComponents/musicImage'
import {mapGetters} from 'vuex'
export default {
    components:{
        List,
        MusicImage
    },
    computed:{
        ...mapGetters({
            flagName: 'getFlagName'
        })
    },
    mounted(){
        this.zmfor()
    },
    props:['artistlist'],
    watch:{
        artistlist:function(val){
            this.artistData = val;
        }
    },
    filters:{
        /** 字符超长处理 */
        ellipsis (value) {
            if (!value) return ''
            if (value.length > 7) {
                return value.slice(0,7) + '...'
            }
            return value
        }
    },
    data(){
        return{
            artistData:[],
            zm: []
        }
    },
    methods:{
        zmfor(){
            for(var i=0;i<26;i++){
                this.zm.push(String.fromCharCode(65+i))
            }
        }
        
    }
}
</script>
<style scoped>
</style>
