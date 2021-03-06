package hal_shop.servlet.api;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import hal_shop.beans.CartBeans;

@WebServlet("/API/Buy")
public class Buy extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Buy() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession(false);
		CartBeans cart = (CartBeans)session.getAttribute("CART");
	}

}
