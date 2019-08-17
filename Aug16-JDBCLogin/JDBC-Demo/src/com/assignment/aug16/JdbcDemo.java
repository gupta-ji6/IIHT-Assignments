package com.assignment.aug16;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import com.mysql.jdbc.ResultSet;

public class JdbcDemo {

	public static void main(String[] args) {
		 try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "pass@word1");
			Statement st = con.createStatement();
			System.out.println("Created JDBC Connection");
			ResultSet result = (ResultSet) st.executeQuery("select * from user");
			while(result.next()) {
				System.out.println(result.getInt(1) + "" + result.getString(2) + "" + result.getString(3) + "" + result.getString(4));
			}
		} catch (Exception e) {
			e.printStackTrace();
		} 
		
	}

}
