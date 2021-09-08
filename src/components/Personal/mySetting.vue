<template>
    <!-- 个人中心/个人设置 -->
    <div class="my-setting">
        <a-row class="rank-a-row">
            <a-col :span="20" class="right-rank-row" style="border: 0px solid;">
                <List :islistIcon="true" style="border-bottom:0px solid">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title">个人设置</a>
                    </template>
                </List>
                <ul class="my-setting-menu">
                    <li><router-link to="/personal/mySetting/userUpdate"><em>基本设置</em></router-link></li>
                    <li><router-link to="/personal/mySetting/userSetting"><em>隐私设置</em></router-link></li>
                </ul>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import List from '../ChildComponents/List'
export default {
    components:{
        List,
    },
    created(){
        this.$router.push('/personal/mySetting/userUpdate')
    }
}
</script>
<style lang="less">
@height: 39px;
.my-setting-menu{
    height: @height;
    border: 1px solid #ccc;
    border-width: 0 1px;
    background-position: 0 0;
    background-repeat: repeat-x;
    width:100%;
}
.my-setting-menu,.my-setting-menu li,.my-setting-menu a,.my-setting-menu em{
    background: url(/tab.png?d8fbadd77e2996d5825d6243b2e6872c) 0 0px;
    height: @height;
    font-size: 14px;
    list-style-type: none;
    float: left;
}
.my-setting-menu em{
    width: 134px;
    padding: 2px 2px 0 0;
    line-height: 37px;
    cursor: pointer;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}
.my-setting-menu a{
    color: #333;
}
.my-setting-menu a:hover{
    color: #333;
}
.my-setting-menu em:hover{
    background-position: right -90px;
}

</style>