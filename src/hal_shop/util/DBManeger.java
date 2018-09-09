package hal_shop.util;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.PreparedStatement;


public class DBManeger {
	private DBManeger() {}
	public static void conn() {
		try {
			Class.forName("org.hsqldb.jdbcDriver");
            String url = "jdbc:hsqldb:hsql://localhost";
            Connection con = DriverManager.getConnection(url, "sa", "");

            // (2) SQLの実行
            String selectStatement =
                "select title " +
                "from books where title like ?";
            PreparedStatement prepStmt =
                con.prepareStatement(selectStatement);
            prepStmt.setString(1, "%Java%");
            ResultSet rs = prepStmt.executeQuery();

            // (3) SQLの実行結果の処理
            while (rs.next()) {
                String title = rs.getString("title");
                System.out.println(title);
            }

            // (4) 後始末
            rs.close();
            prepStmt.close();
            con.close();
		} catch (ClassNotFoundException e) {
			System.out.println(e);
		} catch (SQLException e) {
			System.out.println(e);
		}
	}
}
