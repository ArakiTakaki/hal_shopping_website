//================
//  InitialState
//================
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

  // shopの商品情報store
  shop:{
    // 取得した商品一覧保存場所

    products:[],
    // 選択したカテゴリ
    categories:"",
  },

  //
  buyDialog:{
    //開閉　Produc
    open: true,
    name: 'あんころ餅',
    description: 'teafkdjlkasdjfklajslkdfjklasjdfkljaslkdfjaklsjdfkl jsladfklasjdsakldfjlkasd sdjfklasdjf lkjdskljf klasdjfkl jaskldj flkajsd kljsaklfj',
    images:[],
    price:12000,
    type:'果物'

  }
}
// Productsコンポーネント
// {
//   "area": "鹿児島",
//   "no": "00003",
//   "images": "Array(3)",
//   "price": 320,
//   "name": "豚ロース",
//   "no":"00003",
//   "price":320,
//   "type":"精肉"
// }

export default initialState;