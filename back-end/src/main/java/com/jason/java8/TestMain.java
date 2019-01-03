package com.jason.java8;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static java.util.Comparator.comparing;

/**
 * @author : yusik
 * @version : 1.0
 * @date : 2019-01-03
 * @description :
 */
public class TestMain {
    
    public static void main(String[] args) {
        
        // Before
        Runnable oldRunner = new Runnable(){
            public void run(){
                System.out.println("I am running");
            }
        };
    
        // After
        Runnable java8Runner = () -> {
            System.out.println("I am running..");
        };
        
        Thread thread = new Thread(oldRunner);
        thread.start();
        Thread thread2 = new Thread(java8Runner);
        thread2.start();
    
        
        
    
        
        List<Apple> inventory = new ArrayList<>();
        // Before
        inventory.sort((Apple a1, Apple a2) -> a1.getWeight().compareTo(a2.getWeight()));
    
        // After
        inventory.sort(comparing(Apple::getWeight));
    
        
        
        
        
        
        // Before
        List<String> list = getNames();
        List<String> listOpt = list != null ? list : new ArrayList<>();
        
        // After
        List<String> listOpta = Optional.ofNullable(getNames()).orElseGet(ArrayList::new);
    
        
        
        
        // Before
        User user = getUser();
        if (user != null) {
            User.Address address = user.getAddress();
            if (address != null) {
                String street = address.getStreet();
                if (street != null) {
                    System.out.println("ok");
                }
            }
        }
    
        System.out.println("no address");
    
        // After
        Optional<User> user2 = Optional.ofNullable(getUser());
        Optional<User.Address> address = user2.map(User::getAddress);
        Optional<String> street = address.map(User.Address::getStreet);
        String result = street.orElse("no address");
    
        result = user2.map(User::getAddress)
                .map(User.Address::getStreet)
                .orElse("no address");
        
    
    }
    
    private static User getUser() {
        return null;
    }
    
    private static List<String> getNames() {
    
        List<String> names = new ArrayList<>();
        
        for (int i = 0; i < 10; i++) {
          names.add("test" + i);
        }
        
        return names;
    }
}
