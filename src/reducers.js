import deepcopy from 'deepcopy'

var initialState = {
    cart_list: []
}

export function item_select(state, action) {
    if (state === undefined) {
        return initialState
    }
    let new_state = deepcopy(state);
    if (action.type === 'ADD_ITEM') {
        new_state.cart_list.push(action.data)
    } else if (action.type === "VIEW_THE_CART") {
        new_state.cart_list.push(action.data)
    } else if (action.type === "REMOVE_FROM_CART") {
        new_state.cart_list.filter(action.data !== action.data.item)
    } 
    return new_state
}


export default item_select