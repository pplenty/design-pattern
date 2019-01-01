package com.jason.factory;

/**
 * @author : yusik
 * @date : 2019-01-01
 */
public class AnimalFactory {

    public static Animal getAnimal(String name) {
        switch (name) {
            case "dog":
                return new Dog();
            case "cat":
                return new Cat();
            case "tiger":
                return new Tiger();
        }

        return null;
    }

}
