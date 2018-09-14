package hal_shop.util.message;

public class Message {

	private String code = "";
	private String message = "";
	private boolean state = true;

	public Message exception404() {
		this.code = "AuthError";
		this.message = "ログインを行なってください。";
		this.state = true;
		return this;
	}
	
	public Message createMessage(String code, String message) {
		this.code = code;
		this.message = message;
		this.state = true;
		return this;
	}
	
	public Message noSendStatus() {
		this.code = "";
		this.message = "";
		this.state = false;
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
		return "{" + "\"" + "code" + "\":" + "\"" + this.code + "\"," 
				+ "\"" + "state" + "\":" + "\"" + this.state + "\","
				+ "\"" + "message" + "\":" + "\"" + this.message
				+ "\"" + "}";
	}
}
