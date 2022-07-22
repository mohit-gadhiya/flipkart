import axios from 'axios'
import * as actionType from '../constants/productConstants'
const URL = 'http://localhost:5500'

export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/products`);

        dispatch({type:actionType.GET_PRODUCT_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_FAIL, payload:error.message})
    }
}

export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({type:actionType.GET_PRODUCT_DETAIL_REQUEST})

        const {data} = await axios.get(`${URL}/product/${id}`);

        dispatch({type:actionType.GET_PRODUCT_DETAIL_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_DETAIL_FAIL, payload:error.message})
    }
}