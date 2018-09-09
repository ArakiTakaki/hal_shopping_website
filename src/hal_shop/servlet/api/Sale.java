package hal_shop.servlet.api;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import hal_shop.beans.CartBeans;

/**
 * Servlet implementation class Sale
 */
@WebServlet("/API/Sale")
public class Sale extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
    public Sale() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		HttpSession session = request.getSession(true);
		
		@SuppressWarnings("unchecked")
		List<CartBeans> cart = (ArrayList<CartBeans>)session.getAttribute("CART");
		//TODO out.print cart;
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession(true);
		
		String productNoStr = request.getParameter("product_no");
		int countInt = Integer.parseInt(request.getParameter("quantity"));
		
		@SuppressWarnings("unchecked")
		List<CartBeans> cart = (ArrayList<CartBeans>)session.getAttribute("CART");
		
		CartBeans cb = new CartBeans();
		cb.setProductNO(productNoStr);
		cb.setCount(countInt);
		cart.add(cb);
	}

}
