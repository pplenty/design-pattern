package com.jason.singleton.s02;

public class LazyInitialization {
	
	private static LazyInitialization instance;
	private LazyInitialization () {}
	
	public static LazyInitialization getInstance () {
		if ( instance == null )
			instance = new LazyInitialization();
		return instance;
	}
	
	public void print () {
		System.out.println("It's print() method in LazyInitialization instance.");
		System.out.println("instance hashCode > " + instance.hashCode());
	}
}