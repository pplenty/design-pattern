/**
 * @author : yusik
 * @date : 2018-12-25
 */

let instance = null;

class Singleton {

    constructor() {

        if(!instance){
            instance = this;
        }

        return instance;
    }
}

function test() {
    const singleton = new Singleton();
    const singleton2 = new Singleton();

    console.log(singleton === singleton2);
}

test();