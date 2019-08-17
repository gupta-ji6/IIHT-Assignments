package com.assignment.aug16;

import java.sql.*;


public class JdbcUpdate {

	public static void main(String[] args) {
		
		Connection con = null;
		Statement st = null;
		 try {
			 Class.forName("com.mysql.jdbc.Driver");
			 con = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/shopping", "root", "pass@word1");
			 System.out.println("Connection done");
			 st = (Statement) con.createStatement();
			 String query = "update customer set last_name=\"Goyal\" where customer_id=2";
			 int count = st.executeUpdate(query);
			 System.out.println("Updated queries: " + count);
		 } catch(ClassNotFoundException e) {
			 e.printStackTrace();
		 } catch (SQLException e) {
			 e.printStackTrace();
		 } finally {
			 try {
				 if(st != null)
					 st.close();
				 if(con!= null)
					 con.close();
			 } catch(Exception e) {
				 e.printStackTrace();
			 }
		 }
	}

}
