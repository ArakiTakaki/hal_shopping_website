//=========
//  Sagas
//=========
import * as Actions from '../actions';
import { put, takeEvery, call } from 'redux-saga/effects';
import * as API from '../../util/api';

function* getProduct() {
  try{
    const request = yield API.getProduct();
    if ( request.status !== 200 )
      throw new Error("HTTP_REQUEST_ERROR:" +request.status);
    yield put(Actions.setProducts(request.data));
  }catch(e){
    console.error("サーバからの応答が不正でした。");
    console.error(e);
  }
}

function* getCatergoryProduct() {
  try{
    const request = yield API.getCatergoryProduct(1);
    if ( request.status !== 200 )
      throw new Error("HTTP_REQUEST_ERROR:" +request.status);
    yield put(Actions.setProducts(request.data));
  }catch(e){
    console.error("サーバからの応答が不正でした。");
    console.error(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(Actions.GET_PRODUCT_REQUEST, getProduct);
  yield takeEvery(Actions.GET_CATEGORY_IN_PRODUCT_REQUEST, getCatergoryProduct);
}