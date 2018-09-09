
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

import hal_shop.util.dao.category.CategoryDAO;
import hal_shop.util.dao.product.ProductDAO;
import hal_shop.util.dao.product.ProductDTO;

import org.json.JSONArray;

@WebServlet("/API/Product")
public class Product extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Product() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String action = request.getParameter("action");
		String params = request.getParameter("params");

        JSONArray arr = new JSONArray(getProduct(action,params));
		PrintWriter out = response.getWriter();
		out.println(arr);
	}
	
	private List<ProductDTO> getProduct(String action,String params) {
		if(action == null || params == null) {
			return ProductDAO.getall();
		}

		switch(action) {
		case "category":
			return CategoryDAO.getProducts(params);
		case "find":
			List<ProductDTO> pdo = new ArrayList<ProductDTO>();
			pdo.add(ProductDAO.find(params));
			return pdo;
		default:
			return ProductDAO.getall();
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
