package com.jason.java8;

/**
 * @author : yusik
 * @version : 1.0
 * @date : 2019-01-03
 * @description :
 */
class User {
    
    private Address address;
    
    Address getAddress() {
        
        return address;
    }
    
    class Address {
        
        private String street;
        
        String getStreet() {
            
            return street;
        }
    }
    
}
