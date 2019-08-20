package com.customer.test;

import com.customer.dao.CustomerDAO;
import com.customer.dao.CustomerDAOImpl;
import com.customer.model.Customer;

public class AddCustomerTest {
	public static void main(String[] args) {
		Customer customer = new Customer();
		customer.setFirstName("Prachi");
		customer.setLastName("Desai");
		customer.setEmail("prachidesai@gmail.com");
		customer.setMobile("965269845");
		customer.setUsername("prachid");
		customer.setPassword("iloveayush");
		
		CustomerDAO dao = new CustomerDAOImpl();
		boolean flag = dao.addCustomer(customer);
		if(flag) 
			System.out.println("Customer successfully added!");
	}
}
