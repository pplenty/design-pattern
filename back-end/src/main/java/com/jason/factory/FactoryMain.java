package com.jason.factory;

public class FactoryMain {

	public static void main(String[] args) {
		Animal a1 = AnimalFactory.getAnimal("cat");
		System.out.println(a1);

		Animal a2 = AnimalFactory.getAnimal("dog");
		System.out.println(a2);

		Animal a3 = AnimalFactory.getAnimal("tiger");
		System.out.println(a3);

		Animal a4 = AnimalFactory.getAnimal("lion");
		System.out.println(a4);


	}
}