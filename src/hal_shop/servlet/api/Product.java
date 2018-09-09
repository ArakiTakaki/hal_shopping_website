
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
		
		String data = getProduct(action,params);
		
		PrintWriter out = response.getWriter();
		out.println(data);
	}
	
	private String getProduct(String action,String params) {
		
		if(action == null || params == null) {
			return new JSONArray(ProductDAO.getall()).toString();
		}

		switch(action) {
		case "category":
			return new JSONArray(CategoryDAO.getProducts(params)).toString();
		case "find":
			List<ProductDTO> pdo = new ArrayList<ProductDTO>();
			pdo.add(ProductDAO.find(params));
			return new JSONArray(pdo).toString();
		default:
			return new JSONArray(ProductDAO.getall()).toString();
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}
	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
