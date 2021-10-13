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
                <a-tabs type="card" class="rank-tabs-card">
                    <a-tab-pane key="1" tab="基本设置">
                        <a-form :form="form">
                            <a-form-item :label-col="formItemLayout.labelCol" 
                                :wrapper-col="formItemLayout.wrapperCol" label="昵称：">
                                <a-input v-decorator="['username',
                                    { rules: [{ message: 'Please input your name' }],initialValue:`${userItem[0].nickname}` },]"/>
                            </a-form-item>
                            <a-form-item :label-col="formItemLayout.labelCol" 
                                :wrapper-col="formItemLayout.wrapperCol" label="介绍：">
                                <a-textarea allow-clear v-decorator="['signature',{rules:[{initialValue:`${userItem[0].signature}`}]},]" />
                            </a-form-item>
                            <a-form-item :label-col="formItemLayout.labelCol" 
                                :wrapper-col="formItemLayout.wrapperCol" label="性别：">
                                <a-radio-group :options="fromRadioValue" :default-value="defaultValue" />
                            </a-form-item>
                            <a-form-item :label-col="fromOptionLayout.labelCol" 
                                :wrapper-col="fromOptionLayout.wrapperCol" label="生日:">
                                <a-select default-value="1999" style="width: 75px">
                                    <a-select-option value="1997">1997</a-select-option>
                                    <a-select-option value="1998">1998</a-select-option>
                                    <a-select-option value="1999" disabled>1999</a-select-option>
                                    <a-select-option value="2000">2000</a-select-option>
                                </a-select><span>年</span>
                                <a-select default-value="01" style="width: 75px">
                                    <a-select-option value="01">01</a-select-option>
                                    <a-select-option value="02">02</a-select-option>
                                    <a-select-option value="03" disabled>03</a-select-option>
                                    <a-select-option value="04">04</a-select-option>
                                </a-select><span>月</span>
                                <a-select default-value="18" style="width: 75px">
                                    <a-select-option value="01">01</a-select-option>
                                    <a-select-option value="02">02</a-select-option>
                                    <a-select-option value="03" disabled>03</a-select-option>
                                    <a-select-option value="04">04</a-select-option>
                                </a-select><span>日</span>
                            </a-form-item>
                            <a-form-item :label-col="fromOptionLayout.labelCol" 
                                :wrapper-col="fromOptionLayout.wrapperCol" label="地区:">
                                <a-select :default-value="provinceData[0]" style="width: 85px" @change="handleProvinceChange">
                                    <a-select-option v-for="province in provinceData" :key="province">{{ province }}</a-select-option>
                                </a-select>
                                <a-select v-model="secondCity" style="width: 85px;margin-left:15px;">
                                    <a-select-option v-for="city in cities" :key="city">{{ city }}</a-select-option>
                                </a-select>
                            </a-form-item>
                            <a-form-item class="a-from-item-avatar">
                                <a-avatar shape="square" :size="128" icon="user" :src="userItem[0].avatarUrl" />
                                <br/><a href="#">更换头像</a>
                            </a-form-item>
                            <a-form-item :label-col="formTailLayout.labelCol" 
                                :wrapper-col="formTailLayout.wrapperCol" class="a-from-item-submit">
                                <a-button type="primary" @click="check">保存</a-button>
                            </a-form-item>
                        </a-form>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="隐私设置">
                        <div class="mysetting-user">
                            <div class="setting-item">
                                <h3><span class="f-fs1">私信</span><span class="sub s-fc3">接收新私信提醒</span></h3>
                                <a-radio-group v-model="remindValue">
                                    <a-radio :style="radioStyle" :value="0">所有人</a-radio>
                                    <a-radio :style="radioStyle" :value="1">我关注的人</a-radio>
                                </a-radio-group>
                            </div>
                            <div class="setting-item">
                                <h3><span class="f-fs1">通知</span></h3>
                                <a-radio-group>
                                    <a-checkbox :defaultChecked="true">歌单被收藏</a-checkbox><br/>
                                    <a-checkbox :defaultChecked="true">视频被收藏</a-checkbox><br/>
                                    <a-checkbox :defaultChecked="true">电台被订阅</a-checkbox><br/>
                                    <a-checkbox :defaultChecked="true">收到赞</a-checkbox><br/>
                                    <a-checkbox :defaultChecked="true">新粉丝</a-checkbox>
                                </a-radio-group>
                            </div>
                            <div class="setting-item">
                                <h3><span class="f-fs1">听歌排行</span></h3>
                                <a-radio-group v-model="rankingValue">
                                    <a-radio :style="radioStyle" :value="7">所有人可见</a-radio>
                                    <a-radio :style="radioStyle" :value="8">仅自己可见</a-radio>
                                </a-radio-group>
                            </div>
                            <div class="setting-item">
                                <h3><span class="f-fs1">个性化服务</span></h3>
                                <a-radio-group v-model="serviceValue">
                                    <a-radio :style="radioStyle" :value="true">开启</a-radio>
                                    <a-radio :style="radioStyle" :value="false">关闭（关闭后，将不会使用你的个性信息提供个性化服务）</a-radio>
                                </a-radio-group>
                            </div>
                        </div>
                    </a-tab-pane>
                </a-tabs>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import List from '../ChildComponents/List'
import {mapGetters} from 'vuex'
const fromRadioValue = ['男', '女', '保密']; // eslint-disable-line no-unused-vars

const provinceData = ['广东省', '湖南省','福建省']; // eslint-disable-line no-unused-vars
const cityData = {  // eslint-disable-line no-unused-vars
   '广东省': ['珠海市', '广州市', '梅州市'],
   '湖南省': ['长沙市', '衡阳市', '株洲市'],
   '福建省': ['福州市', '莆田市', '厦门市','龙岩市']
};
export default {
    components:{
        List,
    },
    computed:{
        ...mapGetters({
            userItem: 'getUserItem'
        })
    },
    data(){
        return{
            /** 隐私设置 */
            remindValue: 0,
            rankingValue:7,
            serviceValue:true,
            radioStyle: {
                display: 'block',
                height: '30px',
                lineHeight: '30px',
            },
            /** 基本设置 */
            formItemLayout:{
                labelCol: { span: 4 },
                wrapperCol: { span: 8 },
            },
            formTailLayout:{
                labelCol: { span: 4 },
                wrapperCol: { span: 8, offset: 6 },
            },
            /** 生日 / 省份 */
            fromOptionLayout:{
                labelCol: { span: 4 },
                wrapperCol: { span: 12},
            },
            form: this.$form.createForm(this, { name: 'dynamic_rule' }),
            /** 性别 */
            fromRadioValue,
            defaultValue: '男',
            /** 地区 */
            provinceData,
            cityData,
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
        }
    },
    mounted(){
    },
    methods:{
        check() {
            this.form.validateFields(err => {
                if (!err) {
                    alert('success');
                }
            });
        },
        handleChange(e) {
            this.checkNick = e.target.checked;
            this.$nextTick(() => {
                this.form.validateFields(['nickname'], { force: true });
            });
        },
        handleProvinceChange(value) {
            this.cities = cityData[value];
            this.secondCity = cityData[value][0];
        },
        /** 判断返回的用户性别 */
        checkGender(){
            console.log(this.userItem[0].gender)
            if(this.userItem[0].gender===1){
                this.defaultValue = '男'
            }else if(this.userItem[0].gender===0){
                this.defaultValue = '女'
            }else{
                this.defaultValue = '保密'
            }
        }
    },
}
</script>
<style lang="less">
.my-setting{
    position: relative;
    height: 105vh;
}
.rank-tabs-card{
    position: absolute;
    right: 6vw;
    top: 2vh;
}
.ant-tabs-tab{
    width:10vw;
    text-align: center;
}
/** 隐私设置 */
.setting-item{
    padding: 5px 0 20px;
    border-bottom: 1px dotted #ccc;
}
.setting-item h3{
    height: 25px;
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
/** 基本设置 */
.ant-form-item{
    margin-bottom: 12px !important;
}
.ant-form-item-children .ant-select-enabled + span{
    margin: 0 5px;
}
.ant-form-horizontal{
    position: relative;
}
.a-from-item-avatar{
    position: absolute;
    left: 30vw;
    bottom: 40vh;
    z-index: 5;
    width: 20vw;
}
.a-from-item-avatar a{
    margin-left: 2.5vw;
    color: #333;
}
.a-from-item-avatar a:hover{
    color: #333;
    text-decoration: underline;
}
.a-from-item-submit{
    position: absolute;
    bottom: 23vh;
}
.ant-form-item .ant-form-item-label{
    width: 50px;
}
</style>