package com.jason.singleton;


import com.jason.singleton.s04.InitializationOnDemandHolderIdiom;

/**
 * @author : kohyusik
 * @version : 1.0
 * @date : 2018-04-19
 * @description :
 */
public class SingletonTest {
    
    public static void main(String[] args) {
        
        try {
            Class.forName("com.jason.singleton.s04.InitializationOnDemandHolderIdiom");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        
        //        EagerInitialization.getInstance().print();
        //        EagerInitialization.getInstance().print();
        //        StaticBlockInitalization.getInstance();
        
        InitializationOnDemandHolderIdiom.getInstance();
        
    }
    
}
