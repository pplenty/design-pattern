package com.jason.singleton.s03;

public class ThreadSafeInitalization {
	
	private static ThreadSafeInitalization instance;
	private ThreadSafeInitalization () {}
	
	public static synchronized ThreadSafeInitalization getInstance () {
		if (instance == null)
			instance = new ThreadSafeInitalization();
		return instance;
	}
    
    public void print () {
        System.out.println("It's print() method in ThreadSafeInitalization instance.");
        System.out.println("instance hashCode > " + instance.hashCode());
    }
	
}