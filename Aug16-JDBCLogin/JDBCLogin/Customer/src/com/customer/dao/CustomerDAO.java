package com.customer.dao;

import com.customer.model.Customer;
import java.util.*;

public interface CustomerDAO {
	public boolean addCustomer(Customer customer);
	public boolean updateCustomer(Customer customer);
	public boolean deleteCustomer(Customer customer);
	public List<Customer> getAllCustomers();
	public Customer login(String username, String password);
}
