//===========
//  Actions
//==========

export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const getProductRequest = () => ({ type: GET_PRODUCT_REQUEST });

export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const getProductSuccess = () => ({ type: GET_PRODUCT_SUCCESS });

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products })

export const GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST';
export const getCategoryRequest = () => ({ type: GET_CATEGORY_REQUEST });

export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const getCategorySuccess = (category) => ({ type: GET_CATEGORY_SUCCESS, payload:category});

export const GET_CATEGORY_IN_PRODUCT_REQUEST = 'GET_CATEGORY_IN_PRODUCT_REQUEST';
export const getCategoryInProductRequest = (category) => ({ type: GET_CATEGORY_IN_PRODUCT_REQUEST, payload: category })

export const GET_CATEGORY_IN_PRODUCT_SUCCESS = 'GET_CATEGORY_IN_PRODUCT_SUCCESS';
export const getCategoryInProductSuccess = (data) => ({ type: GET_CATEGORY_IN_PRODUCT_SUCCESS, payload: data })


//Dialog周り
export const DIALOG_OPEN = "DIALOG_OPEN";
export const dialogOpen = () => ({type:DIALOG_OPEN});

export const DIALOG_CLOSE = "DIALOG_CLOSE";
export const dialogClose = () => ({type:DIALOG_CLOSE});
//Dialog周り