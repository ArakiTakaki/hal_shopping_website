import Axios from 'axios';
import Meta from '../../../env';

const axios = Axios.create({
  baseURL: Meta.server()
});

//TODO APIの非同期通信に関してもっとよく考えておく。
function _get(url){
  return axios.get(url);
  //return req; エラー処理考えとく。
}
export function getProduct(){
  return _get('Product');
}
export function getCategory(){
  return _get('Category');
}

export function getCatergoryProduct(category){
  return _get('Product?action=category&params=' + category);
}

