package com.jason.singleton.s05;

public enum EnumInitialization {
	INSTANCE;
	static String test = "";
	public static EnumInitialization getInstance() {
		test = "test";
		return INSTANCE;
	}
}