package com.customer.test;

import com.customer.dao.CustomerDAO;
import com.customer.dao.CustomerDAOImpl;
import com.customer.model.Customer;

public class UpdateCustomerTest {
	public static void main(String[] args) {
		Customer customer = new Customer();
		customer.setFirstName("Akshay");
		customer.setLastName("Kumar");
		customer.setEmail("akshay@gmail.com");
		customer.setMobile("965852145");
		customer.setUsername("ak");
		customer.setPassword("akshay");
		customer.setId(2);
		
		CustomerDAO dao = new CustomerDAOImpl();
		boolean flag = dao.updateCustomer(customer);
		if(flag) 
			System.out.println("Customer successfully updated!");
	}
}
