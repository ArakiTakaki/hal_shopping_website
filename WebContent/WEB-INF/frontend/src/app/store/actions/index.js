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
export const dialogOpen = (product) => ({type:DIALOG_OPEN, payload:product});

export const DIALOG_CLOSE = "DIALOG_CLOSE";
export const dialogClose = () => ({type:DIALOG_CLOSE});
//Dialog周り

//Sidebar周り
export const SIDEBAR_OPEN = "SIDEBAR_OPEN";
export const sidebarOpen = () => ({type:SIDEBAR_OPEN});

export const SIDEBAR_CLOSE = "SIDEBAR_CLOSE";
export const sidebarClose = () => ({type:SIDEBAR_CLOSE});
//Sidebar周り

//userMenu
export const USER_MENU_OPEN = "USER_MENU_OPEN";
export const userMenuOpen = (element) => ({type:USER_MENU_OPEN,payload:element});

export const USER_MENU_CLOSE = "USER_MENU_CLOSE";
export const userMenuClose = () => ({type:USER_MENU_CLOSE});
//userMenu


