package hal_shop.util.message;

public class Message {

	private String code = "";
	private String message = "";

	public Message exception404() {
		this.code = "AuthError";
		this.message = "ログインを行なってください。";
		return this;
	}
	
	public Message createMessage(String code, String message) {
		this.code = code;
		this.message = message;
		return this;
	}

	@Override
	public String toString() {
		return "Errors [code=" + code + ", message=" + message + "]";
	}

	/**
	 * 
	 * @return
	 */
	public String toJSON() {
		return "{" + "\"" + "code" + "\":" + "\"" + this.code + "\"," + "\"" + "message" + "\":" + "\"" + this.message
				+ "\"" + "}";
	}
}
