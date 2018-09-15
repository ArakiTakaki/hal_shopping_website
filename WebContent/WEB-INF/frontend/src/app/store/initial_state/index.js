//================
//  InitialState
//================

"use strict";

const image = {
  imgPath: "",
  id: 0,
  productNo: ""
}

const product = {
  area: "",  //Area
  no: "",    //num
  price: 0,
  name: "",
  description: "",
  type: "",
  categoryID: 0,
  images: []
}

const initialState = {
  user: {
    open: false,
    element: {},
    userName: "guest",
    userID: "",
  },
  // messageオブジェクトを受信した場合
  popup: {
    state: false,
    code: "",
    message: "",
  },

  // ログイン情報の管理
  auth: {
    id: "",
    password: ""
  },
  // サイドバーの開閉状態
  sidebarState: false,
  userBar: false,

  // 接続してから受信したメッセージ一覧
  messages: [],

  //開閉　Product
  buyDialog: {
    open: false,
    product: product,
  },

  // カート情報の管理
  cart: {},

  // shopの商品情報store
  shop: {
    // 取得した商品一覧保存場所
    products: [],
    // 選択したカテゴリ
    categories: "",
  }
}

export default initialState;