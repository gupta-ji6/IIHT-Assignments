package com.customer.utility;

import java.sql.*;

public class DBConnection {
	public static Connection getConnection() {
		Connection con = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/shopping", "root", "pass@word1");
			return con;
		} catch(Exception e) {
			e.printStackTrace();
		}
		return con;
	}
}
