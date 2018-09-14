package hal_shop.util;

public class Contexts { 

	// 認証が必要(認証ダイアログを表示させる)
	public static final int UNAUTHORIZED = 401;
	
	// 支払いが必要 現在は実装されておらず、将来のために予約されているとされる。
	public static final int PAYMENT_REQUIRED = 402;
	
	// 禁止されているアクセス
	public static final int FORBIDDEN = 403;
	
	// よくあるやつ
	public static final int NOT_FOUND = 404;
	
	// 不正なリクエストを受信した場合
	public static final int BAD_REQUEST = 453;
}
