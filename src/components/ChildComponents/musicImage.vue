<template>
    <div>
        <ul class="music-ul">
            <li>
                <div class="music-image">
                    <img src="../../assets/109951166283221642.jpg" />
                    <a class="music-msk" title="私人雷达|根据听歌记录为你打造" href="#"></a>
                </div>
                <p><a href="#">私人雷达|根据听歌记录为你打造</a></p>
                <p><em>猜你喜欢</em></p>
            </li>
            <li>
                <div class="music-image">
                    <img src="../../assets/109951166027478939.jpg" />
                    <a class="music-msk" title="私人雷达|根据听歌记录为你打造" href="#"></a>
                </div>
                <p><a href="#">私人雷达|根据听歌记录为你打造</a></p>
                <p><em>猜你喜欢</em></p>
            </li>
        </ul>  
    </div>
</template>
<script>
export default{

}
</script>
<style lang="less">
.music-ul{
    padding:0;
}
.music-ul li{
    list-style-type: none;
    width: 140px;
    margin-left: 1vw;
    float: left;
}
.music-image{
    position: relative;
}
.music-msk{
    position: absolute;
    z-index:10;
    left: 0;
    width:100%;
    height: 100%;
}
</style>
