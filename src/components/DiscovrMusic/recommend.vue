/* eslint-disable vue/no-unused-vars */
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
                    <MusicImage>
                        <template v-slot:recommend>
                            <ul class="music-ul recommend-ul" v-if="hotRecommend.length">
                                <li v-for="(item,index) in hotRecommend" :key="index">
                                    <div class="music-image">
                                        <img :src="item.coverImgUrl" class="music-img" />
                                        <a class="music-msk" :title="item.name" href="#"></a>
                                        <div class="music-bottom">
                                            <a-icon class="bottom-ej" type="customer-service" />
                                            <span class="nb">{{item.playCount}}</span>
                                            <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                        </div>
                                    </div>
                                    <p class="music-dec"><a href="#" :title="item.name">{{item.name}}</a></p>
                                </li>
                            </ul>
                        </template>
                    </MusicImage>
                </div>
            </div>
            <div class="recommend-ation" v-show="isUserlogin">
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
                    <MusicImage>
                        <template v-slot:recommend>
                            <ul class="music-ul" v-if="recommendAtion.length">
                                <li v-for="(item,index) in recommendAtion" :key="index">
                                    <div class="music-image">
                                        <img :src="item.picUrl" class="music-img" />
                                        <a class="music-msk" :title="item.name" href="#"></a>
                                        <div class="music-bottom">
                                            <a-icon class="bottom-ej" type="customer-service" />
                                            <span class="nb">{{item.playCount}}</span>
                                            <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                        </div>
                                    </div>
                                    <p class="music-dec"><a href="#">{{item.name}}</a></p>
                                    <p class="music-love"><em :title="item.copywriter">{{item.copywriter}}</em></p>
                                </li>
                            </ul>
                        </template>
                    </MusicImage>
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
                            <a-carousel autoplay>
                                <div v-for="(items,index) in newShelvesMusic" :key="index" class="singer-shelvesmusic">
                                    <ul class="singer-ul shelves-music-ul">
                                        <li v-for="(item,index) in items" :key="index">
                                            <div class="singer-image">
                                                <img :src="item.blurPicUrl"/>
                                                <a class="singer-msk" :title="item.name" href="#" style="cursor:pointer;top:0px;"></a>
                                                <div class="singer-bottom" >
                                                    <a-icon class="bottom-bf" title="播放" type="play-circle" />
                                                </div>
                                            </div>
                                            <p class="singer-dec"><a href="#" :title="item.name">{{item.name}}</a></p>
                                            <p class="singer-love"><em :title="item.artists[0].name">{{item.artists[0].name}}</em></p>
                                        </li>
                                    </ul>
                                </div>
                            </a-carousel>
                        </template>
                    </SingerImage>
                </div>
            </div>  
        </div>
        <div class="right-recommend">
            <div class="recommend-user-login" v-if="userDataShow === 'login'">
                <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <a-button type="danger" @click="loginIsShow">用户登录</a-button>
            </div>
            <div class="user-data" v-else>
                <img :src="userItem[0].avatarUrl" />
                <div class="user-data-1">
                    <h2>{{userItem[0].nickname}}</h2>
                    <a-icon type="man" v-if="userItem[0].gender === 1" :style="{fontSize:'16px',color:'#08c'}" />
                    <a-icon type="woman" v-else-if="userItem[0].gender === 0" :style="{fontSize:'16px',color:'hotpink'}" />
                    <a-icon v-else  />
                </div>
                <a-button type="primary" @click="signIn" v-if="sign === 'in'">签到</a-button>
                <a-button type="primary" disabled v-else>已签到</a-button>
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
                        <a-list item-layout="horizontal" :data-source="artistsData">
                            <a-list-item slot="renderItem" slot-scope="item">
                                <a-list-item-meta :description="item.alias">
                                    <a slot="title" href="#">{{ item.name }}</a>
                                    <a-avatar slot="avatar" shape="square" :size="64"  :src="item.img1v1Url" />
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
import {mapGetters,mapMutations} from 'vuex'

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
    computed:{
        ...mapGetters({
            userItem: 'getUserItem'  //用户信息
        })
    },
    mounted(){
        /** 调用定时器 */
        this.$nextTick(()=>{
            setInterval(this.signNo,1000)
        }),
        this.playlistHot();
        this.recommendSingerlist();
        this.newShelveslist();
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
            userDataShow: 'login',
            isUserlogin: false,
            /** 签到 */
            sign: 'in',
            /** 热门推荐 */
            hotRecommend:[],
            /** 个性推荐 */
            recommendAtion:[],
            /** 新碟上架 */
            newShelvesMusic:[],
            /** 入驻歌手 */
            artistsData:[]
        }
    },
    methods:{
        ...mapMutations({
            setUserItem: 'setUserItem'
        }),
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
                    axios.get(`/login/cellphone`,{params})
                        .then(function(response){
                            if(response.data.code === 200){
                                that.setUserItem(response.data.profile)
                                console.log("useritem",that.userItem[0])
                                that.$message.success('登录成功');
                                that.loginShow = false;
                                that.userDataShow = that.userDataShow === 'data'?'login':'data';
                                /** 登录成功调用个性推荐 */
                                that.isUserlogin = true;
                                that.recommendAtionlist();
                            }else if(response.data.code === 400 || response.data.code === 502){
                                that.$message.warning('账号或密码错误');
                            }
                        }).catch(function(error){
                            that.$message.error('服务未启动');
                        })
                }
            })
        },
        /** 签到/已签到 */
        signIn(){
            this.sign = 'no'
            this.$message.success('已签到');
        },
        /** 每天凌晨12点重置已签到按钮 */
        signNo(){
            let hh = new Date().getHours(); //时
            let mf = new Date().getMinutes()<10?'0'+new Date().getMinutes():new Date().getMinutes(); //分
            let ss = new Date().getSeconds()<10?'0'+new Date().getSeconds():new Date().getSeconds(); //秒
            if(hh==23&&mf==59&&ss==59){
                this.sign = 'in'
                clearInterval(this.times)
            }
        },
        /** 热门推荐 /top/playlist?limit=10 */
        playlistHot(){
            axios.get(`/top/playlist?limit=${10}`)
                .then((response)=>{
                    this.hotRecommend = response.data.playlists;
                }).catch((error)=>{
                    this.$message.error('服务未启动');
                })
        },
        /** 个性推荐 /recommend/resource?userId=308371271 */
        recommendAtionlist(){
            axios.post(`/personalized?limit=${5}`)
                .then((response)=>{
                    this.recommendAtion = response.data.result
                }).catch((error)=>{
                    this.$message.error('服务未启动');
                })
        },
        /** 入驻歌手 top/artists?offset=0&limit=5 */
        recommendSingerlist(){
            axios.get(`/top/artists?offset=0&limit=${5}`)
                .then((response)=>{
                    this.artistsData = response.data.artists;
                }).catch((error)=>{
                    this.$message.error('服务未启动');
                })
        },
        newShelveslist(){
            axios.get(`/top/album?offset=${0}&limit=${30}&year=${new Date().getFullYear()}&month=${new Date().getMonth()+1}`)
                .then((response)=>{
                    let arr = response.data.weekData;

                    let i = 0;
                    let sectionCount = 6;
                    for(let j = 0; j < arr.length; j++){
                        i = parseInt(j / sectionCount);
                        if(this.newShelvesMusic.length <= i){
                            this.newShelvesMusic.push([]);
                        }
                        this.newShelvesMusic[i].push(arr[j]);
                    }
                }).catch((error)=>{
                    this.$message.error('服务未启动');
                })
        }

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
    height: 70vh;
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
.music-img{
    width: 140px;
    height: 140px;
}
.recommend-ul li{
    height: 210px;
}

/** 走马灯 */
</style>