import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../actions/types';

const initialState = {
    cart: [],
    total: 0
}

export default function (state=initialState, action){
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload,
                total: state.total + action.payload.count
            }
        case REMOVE_FROM_CART:
             return {
                 ...state,
                 cart: state.cart.filter((item, i) => i !==action.payload.index),
                 total: state.total - action.payload.cost
             }
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }
        default:
            return state
    }

}