
interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {

    operation() {
        return `Operation from ConcreteProduct1`;
    }
}

class ConcreteProduct2 implements Product {
    operation() {
        return `Operation from ConcreteProduct2`;
    }
}

abstract class Creator {

    public abstract factoryMethod(): Product

    public someOperation(): void {
        const product  = this.factoryMethod();

        console.log(`Creator: The same creator's code has just worked with ${product.operation()}`)
    }
} 


class ConcreteCreator1 extends Creator {

    factoryMethod(): Product {
        return new ConcreteProduct1()
    }
}

class ConcreteCreator2 extends Creator {

    factoryMethod(): Product {
        return new ConcreteProduct2();
    } 
}




function clientCode(creator: Creator) {

    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}


console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());