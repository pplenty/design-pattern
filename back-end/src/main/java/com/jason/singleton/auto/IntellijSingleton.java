package com.jason.singleton.auto;

/**
 * @author : yusik
 * @date : 2018-12-25
 */
public class IntellijSingleton {
    private static IntellijSingleton ourInstance = new IntellijSingleton();

    public static IntellijSingleton getInstance() {
        return ourInstance;
    }

    private IntellijSingleton() {
    }
}
