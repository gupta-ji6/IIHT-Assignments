package com.customer.test;

import java.util.List;
import java.util.ArrayList;

import com.customer.dao.CustomerDAO;
import com.customer.dao.CustomerDAOImpl;
import com.customer.model.Customer;

public class GetCustomersTest {
	public static void main(String[] args) {
		Customer customer = new Customer();
		
		CustomerDAO dao = new CustomerDAOImpl();
		List<Customer> customersList = new ArrayList<Customer>();
		customersList = dao.getAllCustomers();
		for(Customer customer1: customersList) {
			System.out.println(customer1);
		}
	}
}

