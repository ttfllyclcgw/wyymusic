export default{
    getUserItem(state){
        return state.userItem
    },
    getCurrent(state){
        return state.current
    },
    getTotal(state){
        return state.total
    },
    getLimit(state){
        return state.limit
    },
    getOffset(state){
        return state.offset
    },
    getFlagName(state){
        return state.flagName
    }
}