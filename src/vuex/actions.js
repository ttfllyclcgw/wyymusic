export default{
    syncsetUserItem(context,item){
        context.commit('setUserItem',item)
    },
    syncsetTotal(context,total){
        context.commit('setTotal',total)
    }
}