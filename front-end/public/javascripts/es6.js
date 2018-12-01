/**
 * @author : yusik
 * @date : 29/11/2018
 */
'use strict';

// class
class Parent {

    constructor() {
        this.age = 56;
    }

    print() {
        console.log('I\'m parent', this.age);
    }

}

class Child extends Parent {

    constructor() {
        super();
        this.age = 26;
    }

    printChild() {
        console.log('I\'m child', this.age);
    }

}

let parent = new Parent();
let child = new Child();
parent.print();
child.print(); // call super class method
child.printChild();

// const
const Color = {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE'
};
console.log(Color.RED);
console.log(Color.GREEN);
console.log(Color.BLUE);

// arrow function
let array = ['a', 'b', 'c', '3'];
array.forEach((s, i) => console.log(i + ' : ' + s));

let filteredArray = array.filter(s => s === 'c');
console.log(filteredArray);

// template string
let stmt1 = `In JavaScript '\n' is a line-feed.`;
console.log(stmt1);

let stmt2 = `In JavaScript this is
not legal.`;
console.log(stmt2);

let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);


// Enhanced Object Literals
var obj = {

    // __proto__
    __proto__: Child,

    // ‘handler: handler’의 단축 표기
    name,

    // Methods
    print() {
        // Super calls
        console.log(super.print);
        // return "d " + super.print();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};

console.log(obj);

// Default + Rest + Spread
function add(x, y=50) {
    return x + y;
}
console.log(add(55)); // 105

function mutiply(x, ...y) {
    y.forEach(i => x = x *= i)
    return x;
}
console.log(mutiply(3, 2, 5, 2, 5, 6)); // 1800

function substract(x, y, z) {

    return x - y - z;
}
console.log(substract(...[10, 3, 6])); // 1


// Iterators + For…Of
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;

        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { done: false, value: cur }
            }
        }
    }
}

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 25)
        break;
    console.log(n); // 1, 2, 3, 5, 8, ...987
}

//
var fibonacci2 = {
    [Symbol.iterator]: function*() {
        var pre = 0, cur = 1;
        for (;;) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }
}


// Generators
for (var n of fibonacci2) {
    // truncate the sequence at 20
    if (n > 20)
        break;
    console.log(n); // 1, 2, 3, 5, 8, 13
}

function * gen(){
    yield * ["a", "b", "c"];
}

var a = gen();

console.log(a.next()); // { value: "a", done: false }
console.log(a.next()); // { value: "b", done: false }
console.log(a.next()); // { value: "c", done: false }
console.log(a.next()); // { value: undefined, done: true }

// Proxying a normal object
var target = {};
var handler = {
    get: function (receiver, name) {
        return `Hello, ${name}!`;
    }
};

var p = new Proxy(target, handler);
console.log(p.world);// 'Hello, world!';
console.log(p.bye);// 'Hello, world!';



// Proxying a function object
var target = function () { return 'I am the target'; };
var handler = {
    apply: function (receiver, ...args) {
        return 'I am the proxy';
    }
};
var p = new Proxy(target, handler);
console.log(p()); // 'I am the proxy';



// let validator = {
//     set: function(obj, prop, value) {
//         console.log(obj);
//         console.log(prop);
//         console.log(value);
//         if (prop === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new Error('The age is not an integer');
//             }
//             if (value > 200) {
//                 throw new Error('The age seems invalid');
//             }
//         }
//
//         console.log(111);
//         // The default behavior to store the value
//         obj[prop] = value;
//
//         console.log(222);
//     }
// };
//
// let person = new Proxy({}, validator);
// person.age = 100;
// console.log(person.age); // 100
// person.age = 'young'; // Throws an exception
// person.age = 300; // Throws an exception

// Symbol
var map = {};
var a = Symbol('a');

map[a] = 123;
map["b"] = 456;

console.log(map[a]); // 123
console.log(map["b"]); // 456

for (let key in map) {
    console.log(key); // b
}

Object.keys(map); // ["b"]















// Binary and Octal
0b111110111 === 503 // true
0o767 === 503 // true

// Tail Calls
// function factorial(n, acc = 1) {
//     'use strict';
//     if (n <= 1) return acc;
//     return factorial(n - 1, n * acc);
// }
//
// // 현재 대부분의 자바스크립트 엔진에서 스택 오버플로우가 일어나지만,
// // ES6에서는 입력 값이 커도 안전하다
// factorial(100000);