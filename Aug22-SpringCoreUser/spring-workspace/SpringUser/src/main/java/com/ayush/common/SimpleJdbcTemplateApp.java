package com.ayush.common;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ayush.user.dao.UserDAO;
import com.ayush.user.model.User;


public class SimpleJdbcTemplateApp {
	public static void main( String[] args )
    {
    	//if you have time, 
    	//it's better to create an unit test rather than testing like this :)
    	
    	ApplicationContext context = 
    		new ClassPathXmlApplicationContext("Spring-Module.xml");
    	
    	UserDAO userSimpleDAO = (UserDAO) context.getBean("userSimpleDAO");
        User user1 = new User(1, "ayush", "gupta", "7877791648", "ayu@iiht.com", "2019-08-19", "Cognizant", "2019-07-22");
        User user2 = new User(2, "rajat", "gupta", "7877791648", "ayu@iiht.com", "2019-08-19", "Cognizant", "2019-07-22");
        User user3 = new User(3, "gaurav", "gupta", "7877791648", "ayu@iiht.com", "2019-08-19", "Cognizant", "2019-07-22");
 
        List<User>users = new ArrayList<User>();
        users.add(user1);
        users.add(user2);
        users.add(user3);
 
        userSimpleDAO.insertBatch(users);

        String sql = "UPDATE USERS SET NAME ='BATCHUPDATE'";
        userSimpleDAO.insertBatchSQL(sql);
        
        System.out.println("Batch Insert Done!");
    	
        User userA = userSimpleDAO.findByUserId(1);
        System.out.println("User A : " + userA);
        
        User userB = userSimpleDAO.findByUserId2(1);
        System.out.println("User B : " + userB);
        
        List<User> userAs = userSimpleDAO.findAll();
        for(User u: userAs){
        	 System.out.println("User As : " + userAs);
        }
       
        List<User> userBs = userSimpleDAO.findAll2();
        for(User u: userBs){
        	 System.out.println("User Bs : " + userBs);
        }
        
        String userName = userSimpleDAO.findUserNameById(1);
        System.out.println("User Name : " + userName);
        
        int total = userSimpleDAO.findTotalUser();
        System.out.println("Total : " + total);
        
        
        User user4 = new User(4, "akshay", "gupta", "7877791648", "ayu@iiht.com", "2019-08-19", "Cognizant", "2019-07-22");
        User user5 = new User(5, "ashok", "gupta", "7877791648", "ayu@iiht.com", "2019-08-19", "Cognizant", "2019-07-22");
        User user6 = new User(6, "dev", "gupta", "7877791648", "ayu@iiht.com", "2019-08-19", "Cognizant", "2019-07-22");
 
        List<User>users2 = new ArrayList<User>();
        users2.add(user4);
        users2.add(user5);
        users2.add(user6);
        
        userSimpleDAO.insertBatchNamedParameter2(users2);
        
        //delete all records
        userSimpleDAO.insertBatchSQL("DELETE FROM USERS");
        System.out.println("Records Deleted!");
    }
}
