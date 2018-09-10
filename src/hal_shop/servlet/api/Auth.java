package hal_shop.servlet.api;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import hal_shop.beans.AuthBeans;
import hal_shop.util.Contexts;
import hal_shop.util.dao.customer.CustomerDAO;
import hal_shop.util.dao.customer.CustomerDTO;
import hal_shop.util.message.Message;

@WebServlet("/API/Auth")
public class Auth extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Auth() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request,response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		String action = request.getParameter("action");

		if (action == null) {
			response.setStatus(Contexts.BAD_REQUEST);
			out.println(new Message().exception404().toJSON());
			return;
		}
		switch (action) {
		case "login":
			out.println(login(request,response));
			break;
		case "logout":
			out.println(logout(request,response));
			break;
		case "edit":
			// TODO 会員情報の編集
			break;
		}
		return;
	}

	private String logout(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			response.setStatus(Contexts.BAD_REQUEST);
			return new Message().createMessage("AuthError", "ログインすらしておりません").toJSON();
		}
		if (session.getAttribute("AUTH") == null) {
			response.setStatus(Contexts.BAD_REQUEST);
			return new Message().createMessage("AuthError", "ログインすらしておりません").toJSON();
		}
		session.removeAttribute("AUTH");
		session.invalidate();
		return new Message().createMessage("auth", "ログアウトしました").toJSON();
	}

	private String login(HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		String password = request.getParameter("password");
		CustomerDTO cdo = CustomerDAO.Login(id, password);
		HttpSession session = request.getSession(true);

		if (session.getAttribute("AUTH") != null) {
			response.setStatus(Contexts.BAD_REQUEST);
			return new Message().createMessage("AuthError", "既にログイン中です。").toJSON();
		}
		if (cdo == null) {
			response.setStatus(Contexts.BAD_REQUEST);
			return new Message().createMessage("AuthError", "ID、パスワードが未入力です").toJSON();
		}
		
		JSONObject arr = new JSONObject(cdo);
		AuthBeans ab = new AuthBeans();
		ab.setName(cdo.getName());
		ab.setNo(cdo.getNo());
		session = request.getSession(true);
		session.setAttribute("AUTH", ab);
		return arr.toString();
	}

}
