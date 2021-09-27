<template>
    <!-- /发现音乐/推荐 -->
    <div class="recommend">
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
                    <MusicImage :listData="hotRecommend"></MusicImage>
                </div>
            </div>
            <div class="recommend-ation">
                <List :islistIcon="false">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title">个性推荐</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#">更多</a>
                        <a-icon class="more-icon" type="more" />
                    </template>
                </List>
                <div class="recommend-ation-music">
                    <MusicImage :listData="recommendAtion"></MusicImage>
                </div>
            </div>
            <div class="new-shelves">
                <List :islistIcon="false">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title">新碟上架</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#">更多</a>
                        <a-icon class="more-icon" type="more" />
                    </template>
                </List>
                <div class="new-shelves-music">
                    <SingerImage>
                        <template v-slot:singerMusic>
                            <a-icon type="left-circle" theme="twoTone" two-tone-color="#C10D0C" />
                            <ul class="singer-ul shelves-music-ul">
                                <li v-for="(item,index) in newShelvesMusic" :key="index">
                                    <div class="singer-image">
                                        <img :src="item.musicImg"/>
                                        <a class="singer-msk" :title="item.musicMsk" href="#"></a>
                                        <div class="singer-bottom" >
                                            <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                         </div>
                                    </div>
                                    <p class="singer-dec"><a href="#" :title="item.musicMsk">{{item.musicMsk}}</a></p>
                                    <p class="singer-love"><em :title="item.musicSinger">{{item.musicSinger}}</em></p>
                                </li>
                            </ul>
                            <a-icon type="right-circle" theme="twoTone" two-tone-color="#C10D0C" />
                        </template>
                    </SingerImage>
                </div>
            </div>  
        </div>
        <div class="right-recommend">
            <div class="recommend-user-login">
                <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <a-button type="danger" @click="loginIsShow">用户登录</a-button>
            </div>
            <div class="user-data">
                <img src="/109951166027478939.jpg" />
                <div class="user-data-1">
                    <h2>yyyy-xyezhu</h2>
                    <a-icon type="man" :style="{fontSize:'16px',color:'#08c'}" />
                </div>
                <a-button type="primary">签到</a-button>
                <!--<a-button type="primary" disabled>已签到</a-button>-->
                <dataCount class="user-data-2" style="margin-top: 4vh;padding-left: 20px;"></dataCount>
            </div>
            <div class="user-login" v-show="loginShow">
                <div class="user-login-title">
                    <div>手机号登录</div>
                    <a-icon type="close" title="关闭窗体" @click="loginIsShow" />
                </div>
                <div class="user-login-form">
                    <a-form :form="form" @submit="handleSubmit">
                        <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol" label="手机号:">
                            <a-input v-decorator="['userphone',{ rules: [{message: '请输入手机号' }] },]"
                                placeholder="请输入手机号"/>
                        </a-form-item>
                        <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol" label="密码:">
                            <a-input type="password" v-decorator="['userpassword',{ rules: [{message: '请输入密码' }] },]"
                                placeholder="请输入密码"/>
                        </a-form-item>
                        <a-form-item :label-col="formHoldLayout.labelCol" :wrapper-col="formHoldLayout.wrapperCol">
                            <a-checkbox >自动登录</a-checkbox>
                        </a-form-item>
                        <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
                            <a-button type="primary" html-type="submit" class="login-from-button">登录</a-button>
                        </a-form-item>
                    </a-form>
                </div>
                <div class="user-login-register">
                    <a href="#">没有账号？免费注册&nbsp;&nbsp;></a>
                </div>
            </div>
            <div class="recommend-singer">
                <List :islistIcon="true" style="border-bottom:1px solid #ccc">
                    <template v-slot:listTitle>
                        <a href="#" class="v-list-title" style="font-size:12px;font-weight:bold;margin:1.5vh 0 0 -1vw;">入驻歌手</a>
                    </template>
                    <template v-slot:listMore>
                        <a href="#" style="font-size:12px;margin-right:1vw;margin-top:1vh;">查看全部></a>
                    </template>
                </List>
                <SingerList>
                    <template v-slot:singerLists>
                        <a-list item-layout="horizontal" :data-source="data">
                            <a-list-item slot="renderItem" slot-scope="item">
                                <a-list-item-meta :description="item.description">
                                    <a slot="title" href="#">{{ item.title }}</a>
                                    <a-avatar slot="avatar" shape="square" :size="64"  src="/109951166027478939.jpg"/>
                                </a-list-item-meta>
                            </a-list-item>
                        </a-list>
                    </template>
                </SingerList> 
            </div>
        </div>
    </div>
</template>
<script>
import List from '../ChildComponents/List'
import MusicImage from '../ChildComponents/musicImage'
import SingerImage from '../ChildComponents/singerImage'
import SingerList from '../ChildComponents/singerList'
import dataCount from '../ChildComponents/dataCount'
import axios from '../../utils/services'

/** 登陆表单样式属性 */
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};
const formHoldLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 12 },
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 7 },
};
export default {
    components:{
        List,
        MusicImage,
        SingerImage,
        SingerList,
        dataCount
    },
    beforeCreate(){
        this.form = this.$form.createForm(this, { name: 'normal_login' })
    },
    data(){
        return{
            /** 登陆表单样式属性 */
            checkNick: false,
            formItemLayout,
            formHoldLayout,
            formTailLayout,
            /** 登陆窗体显示/隐藏 */
            loginShow: false,
            /** 热门推荐 */
            hotRecommend:[
                {
                    musicId:'1',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'24万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'2',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'3',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'4',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'5',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'24万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'6',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'7',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'8',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'9',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'10',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                }
            ],
            /** 个性推荐 */
            recommendAtion:[
                {
                    musicId:'1',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'24万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'2',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'3',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'4',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'25万',
                    musicLove:'猜你喜欢'
                },
                {
                    musicId:'5',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'私人雷达|根据听歌记录为你打造',
                    musicNb:'24万',
                    musicLove:'猜你喜欢'
                },
            ],
            /** 新碟上架 */
            newShelvesMusic:[
                {
                    musicId:'1',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'在世界的尽头说我恨你',
                    musicSinger:'鱼丁糸'
                },
                {
                    musicId:'2',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'Human (Deluxe)',
                    musicSinger:'OneRepublic'
                },
                {
                    musicId:'3',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'我们好好的',
                    musicSinger:'李荣浩'
                },
                {
                    musicId:'4',
                    musicImg:'/109951166283221642.jpg',
                    musicMsk:'这些年为你攒下的歌Pt.1',
                    musicSinger:'黄渤'
                },
                {
                    musicId:'5',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'Solar Power',
                    musicSinger:'Lorde'
                },
                {
                    musicId:'6',
                    musicImg:'/109951166027478939.jpg',
                    musicMsk:'不期而遇的夏天',
                    musicSinger:'陈奕迅'
                },
            ],
            /** 入驻歌手 */
            data:[
                {
                    title: '张惠妹aMEl',
                    description:'台湾歌手张惠妹'
                },
                {
                    title: 'Fine乐团',
                    description:'独立音乐人'
                },
                {
                    title: '萬曉利',
                    description:'民谣歌手、中国现代民谣的代表人物之一'
                },
                {
                    title: '音乐人赵雷',
                    description:'民谣歌手'
                },
                {
                    title: '王三薄',
                    description:'音乐人'
                },
            ]
        }
    },
    methods:{
        /** 打开登录窗口 */
        loginIsShow(){
            this.loginShow =! this.loginShow;
        },
        /** 登录 */
        handleSubmit(e){
            e.preventDefault();
            this.form.validateFields((err,values)=>{
                if(!err){
                    let params = {
                        phone: values.userphone,
                        password: values.userpassword
                    }
                    let that = this;
                    /** 登录信息 */
                    axios.get('/login/cellphone',{params})
                        .then(function(response){
                            if(response.data.code === 200){
                                that.$message.success('登录成功');
                            }else if(response.data.code === 400 || response.data.code === 502){
                                that.$message.warning('账号或密码错误');
                            }
                        }).catch(function(error){
                            that.$message.error('服务未启动');
                        })
                }
            })
        },
    }
}
</script>
<style lang="less">
.listIcon{
    visibility: hidden;
}
.left-recommend{
    width:65vw;
    height:100%;
}
.right-recommend{
    width:18.5vw;
    margin-left: 0.5vw;
    height: 100%;
}
.left-recommend,.right-recommend{
    float:left;
    border: 1px solid #d3d3d3;
    border-bottom: 0;
}
.hot-recommend,.recommend-ation,.new-shelves{
    height: 100%;
}
.hot-recommend-music{
    border: 0px solid;
    margin:0;
    height: 75vh;
}
.recommend-ation-music{
    height: 40vh;
    margin:0;
}
.new-shelves-music{
    margin:0;
}
.anticon-left-circle,.anticon-right-circle{
    font-size: 1.5em;
    z-index: 3;
    cursor: pointer;
}
.anticon-left-circle,.anticon-right-circle{
    position:absolute;
    margin-top: 10vh;
    margin-left: 1vw;
}
.recommend-singer{
    height: 100%;
}
.recommend-user-login{
    height: 20vh;
    background:#fafafa;
    border-bottom: 2px solid #ccc;
}
.recommend-user-login p{
    color: #666;
    padding:3vh 0 1vw 1vw;
}
.recommend-user-login .ant-btn-danger{
    margin-left: 6vw;
}
.shelves-music-ul li:nth-child(1){
    margin-left: 4vw;
}
.user-data{
    height: 30vh;
    background:#fafafa;
    border-bottom: 2px solid #ccc;
    display: none;
}
.user-data img{
    width: 80px;
    height: 80px;
    border: 1px solid #ccc;
    padding:2px;
    margin: 3vh 0 0 1.5vw;
}
.user-data img,.user-data-1{
    float: left;
}
.user-data-1{
    margin-top: 3vh;
}
.user-data-1 h2{
    font-size: 16px;
}
.user-data-1 h2,.user-data-1 .anticon{
    float: left;
    margin-left: 0.5vw;
}
.user-data-1 .anticon{
    margin-top: 0.5vh;
}
.user-data .ant-btn{
    margin: 1vh 0 0 1.5vw;
}
.user-login{
    width: 41vw;
    height: 50vh;
    z-index: 9998;
    position: fixed;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
    border: none;
    left: 400px;
    top: 150px;
}
.user-login-title{
    height: 39px;
    background: #2D2D2D;
}
.user-login-title div{
    color: #fff;
    margin-left: 1.5vw;
    padding-top: 1.3vh;
    width: 90%;
}
.user-login-title div,.user-login-title .anticon{
    float: left;
}
.user-login-title .anticon{
    color: #848484;
    padding-top: 2vh;
    cursor: pointer;
}
.user-login-form{
    margin: 3vh 0 0 7vw;
}
.user-login-register{
    background: #F7F7F7;
    height: 40px;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.user-login-register a{
    position: absolute;
    right: 20px;
    top: 10px;
    color: #999;
    font-size: 12px;
}
</style>