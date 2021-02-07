import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './types';

export const addToCart = (item) => (dispatch,getState) => {
	const cartItems =getState().cart.cart.slice();
	let alreadyExist = false;
	cartItems.forEach((x)=>{
		if (x.name === item.name){
			alreadyExist = true;
			x.count++;
		}
	});
    if (!alreadyExist) {
		cartItems.push({ ...item, count:1})
	}
	
    dispatch({
        type: ADD_TO_CART,
        payload: cartItems
    })
}

export const removeItem = (item) => dispatch => {
	dispatch({
		type: REMOVE_FROM_CART,
		payload: item
	})
}

export const emptyCart = () => dispatch => {
	dispatch({
		type: EMPTY_CART
	})
}