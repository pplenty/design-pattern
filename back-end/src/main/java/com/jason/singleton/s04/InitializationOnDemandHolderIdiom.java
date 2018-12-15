package com.jason.singleton.s04;

public class InitializationOnDemandHolderIdiom {
	
	static {
		System.out.println("InitializationOnDemandHolderIdiom class load..");
	}
	private InitializationOnDemandHolderIdiom () {
		System.out.println("InitializationOnDemandHolderIdiom load..");
	}
	
	private static class Singleton {
		static {
			System.out.println("InitializationOnDemandHolderIdiom.Singleton class load..");
		}
		private static final InitializationOnDemandHolderIdiom instance = new InitializationOnDemandHolderIdiom();
	}
	
	public static InitializationOnDemandHolderIdiom getInstance () {
		System.out.println("create instance");
		return Singleton.instance;
	}
}