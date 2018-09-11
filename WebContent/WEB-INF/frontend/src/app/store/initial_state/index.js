const initialState = {
  num: 0,
  userName: "guest",
  userID: "",
  // messageオブジェクトを受信した場合
  popup:{
    state:false,
    code:"",
    message:"",
  },

  // ログイン情報の管理
  auth:{
    id:"",
    password:""
  },
  // サイドバーの開閉状態
  sidebarState: false,
  userBar: false,

  // 接続してから受信したメッセージ一覧
  messages:[],

  // カート情報の管理
  cart:{},

  // 取得した商品一覧保存場所
  products:[]

}

export default initialState;