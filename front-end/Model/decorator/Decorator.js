/**
 * @author : yusik
 * @date : 2018-12-19
 */

'use strict';

class Component {
    constructor() {
    }

    Operation (){
    }
}

class ConcreteComponent extends Component {
    constructor() {
        super();
    }

    Operation (){
        console.log('111');
    }
}

class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
    }

    Operation (){
        this.component.Operation()
    }
}

class ConcreteDecoratorA extends Decorator {
    constructor(component, sign) {
        super(component);
        this.addedState = sign;
    }

    Operation (){
        super.Operation();
        console.log(this.addedState);
    }
}

class ConcreteDecoratorB extends Decorator {
    constructor(component, sign) {
        super(component);
        this.addedState = sign;
    }

    Operation (){
        super.Operation();
        console.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState);
    }

    AddedBehavior  (){
        this.Operation();
        console.log('BBB');
    }
}

function init_Decorator() {
    const component = new ConcreteComponent();
    const decoratorA = new ConcreteDecoratorA(new ConcreteComponent(), 'A.sign');
    const decoratorB = new ConcreteDecoratorB(new ConcreteComponent(), 'B.sign');
    console.log('component: ');
    component.Operation();
    console.log('decoratorA: ');
    decoratorA.Operation();
    console.log('decoratorB: ');
    decoratorB.AddedBehavior();
}

init_Decorator();