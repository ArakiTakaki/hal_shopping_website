//============
//  Reducers
//============
import * as Actions from '../actions'

const reducer = (state, action) => {
  const {payload} = action;
  switch (action.type) {
    case Actions.SET_PRODUCTS:
      state.shop.products = payload;
      break;
    case Actions.GET_CATEGORY_IN_PRODUCT_SUCCESS:
      state.shop.products = payload;
      break;
    case Actions.GET_CATEGORY_SUCCESS:
      state.shop.categories = payload;
      break;
    case Actions.DIALOG_OPEN:
      state.buyDialog.open = true;
      state.buyDialog.product = payload;
      break;
    case Actions.DIALOG_CLOSE:
      state.buyDialog.open = false;
      break;
    default:
      return state;
  }
  return Object.assign({},state);
};
export default reducer;