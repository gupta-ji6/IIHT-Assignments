package com.customer.dao;

import java.util.ArrayList;
import java.util.List;
import com.customer.model.Customer;
import com.customer.utility.DBConnection;
import java.sql.*;

public class CustomerDAOImpl implements CustomerDAO {
	public boolean addCustomer(Customer customer) {
		try {
			Connection con = DBConnection.getConnection();
			String sql = "insert into customer(first_name, last_name, email_id, mobile, username, password) values (?, ?, ?, ?, ?, ?)";
			PreparedStatement stmt = con.prepareStatement(sql);
			
			stmt.setString(1, customer.getFirstName());
			stmt.setString(2, customer.getLastName());
			stmt.setString(3, customer.getEmail());
			stmt.setString(4, customer.getMobile());
			stmt.setString(5, customer.getUsername());
			stmt.setString(6, customer.getPassword());
			
			int num = stmt.executeUpdate();
			if(num>0)
				return true;
		}
		catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
		}
		return false;
	}                                     
	
	public boolean updateCustomer(Customer customer) {
		try {
			Connection con = DBConnection.getConnection();
			String sql = "update customer set first_name = ?, last_name=?, email_id=?, mobile=?, username=?, password=? where customer_id=?";
			PreparedStatement stmt = con.prepareStatement(sql);
			
			stmt.setString(1, customer.getFirstName());
			stmt.setString(2, customer.getLastName());
			stmt.setString(3, customer.getEmail());
			stmt.setString(4, customer.getMobile());
			stmt.setString(5, customer.getUsername());
			stmt.setString(6, customer.getPassword());
			stmt.setInt(7,  customer.getId());
			
			int num = stmt.executeUpdate();
			if(num>0)
				return true;
		}
		catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
		}
		return false;
		
	}
	
	public boolean deleteCustomer(Customer customer) {
		try {
			Connection con = DBConnection.getConnection();
			String sql = "delete from customer where customer_id=?";
			PreparedStatement stmt = con.prepareStatement(sql);
			
			stmt.setInt(1, customer.getId());
			int num = stmt.executeUpdate();
			if(num>0)
				return true;
		}
		catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
		}
		return false;
		
	}
	
	public List<Customer> getAllCustomers() {
		try {
			Connection con = DBConnection.getConnection();
			String sql = "select * from customer";
			Statement stmt = con.createStatement();
			List<Customer> customerList = new ArrayList<Customer>();
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next()) {
				Customer customer = new Customer();
				customer.setId(rs.getInt("customer_id"));
				customer.setFirstName(rs.getString("first_name"));
				customer.setLastName(rs.getString("last_name"));
				customer.setEmail(rs.getString("email_id"));
				customer.setMobile(rs.getString("mobile"));
				customer.setUsername(rs.getString("username"));
				customer.setPassword(rs.getString("password"));
				
				customerList.add(customer);
			}
			return customerList;
		}
		catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
		}
		return null;
		
	}
	
	public Customer login(String username, String password) {
		try {
			Connection con = DBConnection.getConnection();
			String str = "select * from customer where username=? and password=?";
			
			PreparedStatement stmt = con.prepareStatement(str);
			stmt.setString(1, username);
			stmt.setString(2, password);
			ResultSet rs = stmt.executeQuery();
			if(rs.next()) {
				Customer customer = new Customer();
				customer.setFirstName(rs.getString("first_name"));
				customer.setLastName(rs.getString("last_name"));
				customer.setEmail(rs.getString("email_id"));
				customer.setMobile(rs.getString("mobile"));
				customer.setUsername(rs.getString("username"));
				customer.setPassword(rs.getString("password"));
				return customer;
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
