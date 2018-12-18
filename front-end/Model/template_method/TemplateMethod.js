/**
 @author      : yusik
 @date       : 2018-12-18
 @description :
 */

'use strict';

class AbstractClass {
    constructor() {
        console.log("AbstractClass created");
    }

    method1() {
        throw Error("must be overridden this method");
    }

    method2() {
        throw Error("must be overridden this method");
    }

    method3() {
        throw Error("must be overridden this method");
    }
}

class ConcreteClass extends AbstractClass {
    constructor() {
        super();
        console.log("ConcreteClass created");
    }

    method1() {
        console.log('ConcreteClass method1');
    }

    method2() {
        console.log('ConcreteClass method2');
    }
}

/** TEST CODE */
function test() {
    let class1 = new ConcreteClass();

    class1.method1();
    class1.method2();
    class1.method3();
}

test();