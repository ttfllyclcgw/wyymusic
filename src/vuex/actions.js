export default{
    syncsetUserItem(context,item){
        context.commit('setUserItem',item)
    },
    syncsetOffset(context){
        context.commit('setOffset')
    },
    syncsetTotal(context,total){
        context.commit('setTotal',total)
    }
}