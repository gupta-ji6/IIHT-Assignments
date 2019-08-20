package com.customer.test;

import com.customer.dao.CustomerDAO;
import com.customer.dao.CustomerDAOImpl;
import com.customer.model.Customer;

public class DeleteCustomerTest {
	public static void main(String[] args) {
		Customer customer = new Customer();
		customer.setId(3);
		
		CustomerDAO dao = new CustomerDAOImpl();
		boolean flag = dao.updateCustomer(customer);
		if(flag) 
			System.out.println("Customer successfully deleted!");
	}
}
