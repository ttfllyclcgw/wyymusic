<template>
    <div class="mysetting-user">
        <div class="setting-item">
            <h3>
              <span class="f-fs1">私信</span>
              <span class="sub s-fc3">接收新私信提醒</span>
            </h3>
            <a-radio-group v-model="remindValue">
                <a-radio :style="radioStyle" :value="0">所有人</a-radio>
                <a-radio :style="radioStyle" :value="1">我关注的人</a-radio>
            </a-radio-group>
        </div>
        <div class="setting-item">
            <h3>
              <span class="f-fs1">通知</span>
            </h3>
            <a-radio-group>
                <a-checkbox :defaultChecked="true">歌单被收藏</a-checkbox><br/>
                <a-checkbox :defaultChecked="true">视频被收藏</a-checkbox><br/>
                <a-checkbox :defaultChecked="true">电台被订阅</a-checkbox><br/>
                <a-checkbox :defaultChecked="true">收到赞</a-checkbox><br/>
                <a-checkbox :defaultChecked="true">新粉丝</a-checkbox>
            </a-radio-group>
        </div>
        <div class="setting-item">
            <h3>
              <span class="f-fs1">听歌排行</span>
            </h3>
            <a-radio-group v-model="rankingValue">
                <a-radio :style="radioStyle" :value="7">所有人可见</a-radio>
                <a-radio :style="radioStyle" :value="8">仅自己可见</a-radio>
            </a-radio-group>
        </div>
        <div class="setting-item">
            <h3>
              <span class="f-fs1">个性化服务</span>
            </h3>
            <a-radio-group v-model="serviceValue">
                <a-radio :style="radioStyle" :value="true">开启</a-radio>
                <a-radio :style="radioStyle" :value="false">关闭（关闭后，将不会使用你的个性信息提供个性化服务）</a-radio>
            </a-radio-group>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            remindValue: 0,
            rankingValue:7,
            serviceValue:true,
            radioStyle: {
                display: 'block',
                height: '30px',
                lineHeight: '30px',
            },
        }
    },
}
</script>
<style lang="less">
.setting-item{
    padding: 38px 0 25px;
    border-bottom: 1px dotted #ccc;
}
.setting-item h3{
    height: 33px;
}
.f-fs1{
    font-size: 14px;
    font-weight: bold;
}
.sub{
    margin-left: 12px;
    font-weight: normal;
}
.s-fc3{
    color: #666;
    font-size: 12px;
}
.setting-item > .ant-radio-group{
    margin-left: 38px;
}
.setting-item > .ant-radio-group .ant-radio-wrapper span{
    font-size: 12px;
}
</style>