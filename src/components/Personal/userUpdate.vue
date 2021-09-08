<template>
    <a-form :form="form">
        <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol" label="昵称：">
            <a-input v-decorator="['username',{ rules: [{ message: 'Please input your name' }] },]"/>
        </a-form-item>
        <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol" label="介绍：">
            <a-textarea allow-clear />
        </a-form-item>
        <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol" label="性别：">
            <a-radio-group :options="fromRadioValue" :default-value="defaultValue" />
        </a-form-item>
        <a-form-item :label-col="fromOptionLayout.labelCol" :wrapper-col="fromOptionLayout.wrapperCol" label="生日:">
            <a-select default-value="1998" style="width: 75px">
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
            <a-select default-value="01" style="width: 75px">
                <a-select-option value="01">01</a-select-option>
                <a-select-option value="02">02</a-select-option>
                <a-select-option value="03" disabled>03</a-select-option>
                <a-select-option value="04">04</a-select-option>
            </a-select><span>日</span>
        </a-form-item>
        <a-form-item :label-col="fromOptionLayout.labelCol" :wrapper-col="fromOptionLayout.wrapperCol" label="地区:">
            <a-select :default-value="provinceData[0]" style="width: 85px" @change="handleProvinceChange">
                <a-select-option v-for="province in provinceData" :key="province">{{ province }}</a-select-option>
            </a-select>
            <a-select v-model="secondCity" style="width: 85px;margin-left:15px;">
                <a-select-option v-for="city in cities" :key="city">{{ city }}</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item class="a-from-item-avatar">
            <a-avatar shape="square" :size="128" icon="user" src="/109951166027478939.jpg" />
            <br/><a href="#">更换头像</a>
        </a-form-item>
        <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol" class="a-from-item-submit">
            <a-button type="primary" @click="check">保存</a-button>
        </a-form-item>
    </a-form>
</template>
<script>
const fromRadioValue = ['男', '女', '保密']; // eslint-disable-line no-unused-vars

const provinceData = ['广东省', '湖南省','福建省']; // eslint-disable-line no-unused-vars
const cityData = {  // eslint-disable-line no-unused-vars
   '广东省': ['广州市', '珠海市', '梅州市'],
   '湖南省': ['长沙市', '衡阳市', '株洲市'],
   '福建省': ['福州市', '莆田市', '厦门市','龙岩市']
};
export default{
    data(){
        return{
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
            defaultValue: fromRadioValue[0],
            /** 地区 */
            provinceData,
            cityData,
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
        }
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
    },
}
</script>
<style lang="less">
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
    left: 40vw;
    top: -40vh;
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
    top: -20vh;
}
</style>
