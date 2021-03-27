
interface AbstractProductA {
    usefulFunctionA(): string;
}

interface AbstractProductB{
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

interface AbstractFactory {

    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;

}

class AbstractFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }
    createProductB(): AbstractProductB {
        return new  ConcreteProductB1();
    }

}

class AbstractFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }
    createProductB(): AbstractProductB {
        return new  ConcreteProductB2();
    }

}

class ConcreteProductA1 implements AbstractProductA {
    usefulFunctionA(): string {
       return "The result of the product A1.";
    }
}


class ConcreteProductA2 implements AbstractProductA {
    usefulFunctionA(): string {
       return "The result of the product A2.";
    }
}

class ConcreteProductB1 implements AbstractProductB {

    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
    usefulFunctionB(): string {
       return "The result of the product B1.";
    }
}

class ConcreteProductB2 implements AbstractProductB {

    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }

    usefulFunctionB(): string {
       return "The result of the product B2.";
    }

}

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productA.usefulFunctionA())
    console.log(productB.anotherUsefulFunctionB(productA))
}

console.log(`Testing client code with first factory type...`)

clientCode(new AbstractFactory1())

console.log("")

console.log(`Testing client code with first factory type...`)

clientCode(new AbstractFactory2())