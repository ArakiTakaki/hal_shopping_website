package hal_shop.servlet.api;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import hal_shop.util.dao.category.CategoryDAO;
import hal_shop.util.dao.product.ProductDAO;
import hal_shop.util.dao.product.ProductDTO;

/**
 * Servlet implementation class Product
 */
@WebServlet("/API/Product")
public class Product extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Product() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		List<ProductDTO> pdo;
		String category = request.getParameter("category");
		if (category != null) {
			pdo = CategoryDAO.getProducts(category);
		} else {
			pdo = ProductDAO.getall();
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
	}

}
