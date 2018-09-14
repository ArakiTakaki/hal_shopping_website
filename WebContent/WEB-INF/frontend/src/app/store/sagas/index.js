//=========
//  Sagas
//=========
import * as Actions from '../actions';
import { put, takeEvery, take, fork} from 'redux-saga/effects';
import * as API from '../../util/api';

function* getProduct() {
  try{
    const request = yield API.getProduct();
    if ( request.status !== 200 )
      throw new Error("HTTP_REQUEST_ERROR:" +request.status);
    console.log(request.data);
    yield put(Actions.setProducts(request.data));
  }catch(e){
    console.error("サーバからの応答が不正でした。");
    console.error(e);
  }
}
function* getCategory(){
  try{
    const request = yield API.getCategory();
    if ( request.status !== 200 )
      throw new Error("HTTP_REQUEST_ERROR:" +request.status);
    yield put(Actions.getCategorySuccess(request.data));
    console.log(request.data);
  }catch(e){
    console.error("サーバからの応答がありませんでした。");
    console.error(e);
  }
}

function* getCatergoryProduct(action) {
  const {payload} = action;
  try{
    const request = yield API.getCatergoryProduct(payload);
    if ( request.status !== 200 )
      throw new Error("HTTP_REQUEST_ERROR:" +request.status);
    yield put(Actions.setProducts(request.data));
  }catch(e){
    console.error("サーバからの応答がありませんでした。");
    console.error(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(Actions.GET_PRODUCT_REQUEST, getProduct);
  yield takeEvery(Actions.GET_CATEGORY_REQUEST, getCategory);
  yield takeEvery(Actions.GET_CATEGORY_IN_PRODUCT_REQUEST, getCatergoryProduct);
}