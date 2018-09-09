package hal_shop.util.dao.customer;

import java.sql.ResultSet;
import java.sql.SQLException;

import hal_shop.util.dao.ResultSetMapping;

public class CustomerMapping extends ResultSetMapping<CustomerDTO> {
	
	public CustomerMapping() {
		this.primaryKey = "customer_no";
		this.table = "customer";
	}
	
	@Override
	public CustomerDTO setMapping(ResultSet rs)throws SQLException{
		CustomerDTO cd = new CustomerDTO();
		cd.setNo(rs.getString("customer_no"));
		cd.setName(rs.getString("customer_name"));
		cd.setAddres(rs.getString("customer_addres"));
		cd.setSex(rs.getInt("customer_sex"));
		cd.setAge(rs.getInt("customer_age"));
		cd.setId(rs.getString("customer_id"));
		cd.setPass(rs.getString("customer_pass"));
		return cd;
	}

}
