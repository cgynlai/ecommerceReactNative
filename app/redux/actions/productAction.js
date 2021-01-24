import { FETCH_PRODUCTS } from './types';
import { getProducts } from '../../productlist';

export const fetchProducts = () => dispatch => {
    const products = getProducts();
    dispatch ({
        type: FETCH_PRODUCTS,
        payload: products
    })
}

