import { GET_PRODUCT_BY_ID, 
        GET_PRODUCT_ALL, 
        ADD_PRODUCT_TO_CART, 
        SHOW_SINGLE_PRODUCT_BY_ID } from "../types";

export const getProductById = (payload) => ({
    type: GET_PRODUCT_BY_ID,
    payload
});

export const getProductAll = () => ({ 
    type: GET_PRODUCT_ALL 
});

export const addProductToCart = (payload) => ({ 
    type: ADD_PRODUCT_TO_CART, 
    payload 
});

export const showSimgleProductByIdAction = (payload) => ({ 
    type: SHOW_SINGLE_PRODUCT_BY_ID, 
    payload 
});

