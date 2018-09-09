package hal_shop.util.dao.customer;

import java.sql.ResultSet;
import java.sql.SQLException;

import hal_shop.util.dao.ResultSetMapping;
//+-----------------+-------------+------+-----+---------+-------+
//| Field           | Type        | Null | Key | Default | Extra |
//+-----------------+-------------+------+-----+---------+-------+
//| customer_no     | char(4)     | NO   | PRI | NULL    |       |
//| customer_name   | varchar(20) | NO   |     | NULL    |       |
//| customer_addres | varchar(30) | NO   |     | NULL    |       |
//| customer_sex    | int(1)      | NO   |     | NULL    |       |
//| customer_age    | int(11)     | NO   |     | NULL    |       |
//| customer_id     | varchar(11) | NO   |     | NULL    |       |
//| customer_pass   | varchar(11) | NO   |     | NULL    |       |
//+-----------------+-------------+------+-----+---------+-------+
public class CustomerMapping extends ResultSetMapping<CustomerDTO> {

	protected String primaryKey = "customer_no";
	protected String table = "customer";
	
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
