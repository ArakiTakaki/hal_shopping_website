//===========
//  Actions
//==========
export const INCREMENT = 'INCREMENT';
export const increment = () => ({ type: INCREMENT });

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const incrementAsync = () => ({ type: INCREMENT_ASYNC });

export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const getProductRequest = () => ({ type: GET_PRODUCT_REQUEST });

export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const getProductSuccess = () => ({ type: GET_PRODUCT_SUCCESS });

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const setProducts = (products) => ({ type: SET_PRODUCTS, payload:products} )

export const GET_CATEGORY_IN_PRODUCT_REQUEST = 'GET_CATEGORY_IN_PRODUCT_REQUEST';
export const getCategoryInProductRequest = (category) => ({ type: GET_CATEGORY_IN_PRODUCT_REQUEST, payload:category })