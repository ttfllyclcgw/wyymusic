export default{
    setUserItem(state,item){
        state.userItem.push(item)
    },
    setTotal(state,total){
        state.total = total
    },
    setCurrent(state,current){
        state.current = current
    },
    pre_page(state,offset){
        state.offset = offset - state.limit
    },
    next_page(state,offset){
        state.offset = offset + state.limit
    },
    go_page(state,current){
        state.current = current
        state.offset = current * state.limit
    }
}