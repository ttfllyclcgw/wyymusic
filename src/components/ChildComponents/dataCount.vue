<template>
    <ul class="rktitle-2">
        <li><a href="#"><strong id="event_count">{{userItem[0].eventCount}}</strong><span>动态</span></a></li>
        <li><a href="#"><strong id="follow_count">{{userItem[0].follows}}</strong><span>关注</span></a></li>
        <li><a href="#"><strong id="fan_count">{{userItem[0].followeds}}</strong><span>粉丝</span></a></li>
    </ul>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({
            userItem: 'getUserItem'
        })
    }
}
</script>
<style>
.rktitle-2 li{
    list-style-type: none;
    float: left;
    padding: 0 20px 0 20px;
    border-left: 1px solid #ddd;
}
.rktitle-2 li:nth-child(1){
    border-left: 0px solid #ddd;
    padding: 0 20px 0 0px;
}
</style>


