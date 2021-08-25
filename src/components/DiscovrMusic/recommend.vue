<template>
    <!-- /发现音乐/推荐 -->
    <div>
        <div class="left-recommend">
            <div class="hot-recommend">
                <List :islistIcon="false">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title">热门推荐</a>
                    </template>
                    <template v-slot:listTab>
                        <a href="#">华语</a>
                        <span class="line">|</span>
                        <a href="#">流行</a>
                        <span class="line">|</span>
                        <a href="#">摇滚</a>
                        <span class="line">|</span>
                        <a href="#">民谣</a>
                        <span class="line">|</span>
                        <a href="#">电子</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#">更多</a>
                        <a-icon class="more-icon" type="more" />
                    </template>
                </List>
                <div class="hot-recommend-music">
                    <MusicImage></MusicImage>
                </div>
            </div>
        </div>
        <div class="right-recommend"></div>
    </div>
</template>
<script>
import List from '../ChildComponents/List'
import MusicImage from '../ChildComponents/musicImage'
export default {
    components:{
        List,
        MusicImage
    }
}
</script>
<style lang="less">
.listIcon{
    visibility: hidden;
}
.left-recommend{
    width:75%;
    height:100%;
}
.right-recommend{
    width:25%;
}
.left-recommend,.right-recommend{
    float:left;
    border: 0px solid;
}
.hot-recommend{
    height: 100%;
}
.hot-recommend-music{
    border: 0px solid;
    height:100%;
    margin:0;
}
</style>