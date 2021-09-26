import axios from './services'

export default{
    cellphone_login(obj){
        axios.get('/login/cellphone?phone=obj.phone&password=obj.password')
    }
}