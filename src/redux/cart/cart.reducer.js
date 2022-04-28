import CartActionTypes from './cart.types'

const INITAIL_STATE = {
    hidden: true,
    cartItems:[]
}

const cartReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden 
            }
    
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItem:[...state.cartItems,action.payload]
            }
    
        default:
            return state;
    }
}

export default cartReducer;