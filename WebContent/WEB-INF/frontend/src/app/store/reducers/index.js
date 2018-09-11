//============
//  Reducers
//============
import * as Actions from '../actions'

function cat(obj,obj2){
  return Object.assign(obj,obj2)
}

const reducer = (state, action) => {
  const {payload} = action;
  switch (action.type) {
    case Actions.INCREMENT:
      state.num ++;
      break;
    case Actions.SET_PRODUCTS:
      state.products = payload;
      break;
    default:
      return state;
  }
  return cat({},state);
};
export default reducer;