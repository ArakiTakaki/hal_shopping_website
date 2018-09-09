package hal_shop.servlet.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import hal_shop.beans.CartBeans;

@WebServlet("/API/Sale")
public class Sale extends HttpServlet {

	private static final long serialVersionUID = 1L;

    public Sale() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		HttpSession session = request.getSession(false);

		@SuppressWarnings("unchecked")
		List<CartBeans> cart = (ArrayList<CartBeans>)session.getAttribute("CART");

		JSONObject arr = new JSONObject(cart);
		PrintWriter out = response.getWriter();
		out.println(arr);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		HttpSession session = request.getSession(true);

		String productNoStr = request.getParameter("product_no");
		int countInt = Integer.parseInt(request.getParameter("quantity"));

		CartBeans cart = (CartBeans)session.getAttribute("CART");

		CartBeans cb = new CartBeans();
		cb.setItem(productNoStr, countInt);
		
		JSONObject arr = new JSONObject(cart);
		PrintWriter out = response.getWriter();
		out.println(arr);
	}

}
