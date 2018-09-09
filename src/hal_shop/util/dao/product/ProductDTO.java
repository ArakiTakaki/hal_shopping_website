package hal_shop.util.dao.product;

/**
 * @author arakitakaki
 *
 */
public class ProductDTO {
	private String no, name, type;
	private int categoryID, price;
	private String area, description;

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getCategoryID() {
		return categoryID;
	}

	public void setCategoryID(int id) {
		this.categoryID = id;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}