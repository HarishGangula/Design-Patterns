class Product {
    public parts: string[] = [];

    public listParts() {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}


interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class ConcreteBuilder implements Builder {

    private product: Product;

    constructor() {
        this.reset();
    }

    reset() {
        this.product = new Product()
    }

    producePartA(): void {
        this.product.parts.push("A");
    }
    producePartB(): void {
        this.product.parts.push("B");
    }
    producePartC(): void {
        this.product.parts.push("C");
    }

    getResults(): Product {
        const product = this.product;
        this.reset();
        return product;
    }

}

class Director {

    private builder: Builder;
    constructor(builder: Builder) {
        this.builder = builder;
    }

    public buildSmallProduct(): void {
        this.builder.producePartA();
    }

    public buildCompleteProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }

}


function clientCode() {
    
    const builder = new ConcreteBuilder();
    const director = new Director(builder);

    director.buildSmallProduct();

    const smallProduct = builder.getResults();
    smallProduct.listParts();

    director.buildCompleteProduct();

    const bigProduct = builder.getResults();
    bigProduct.listParts();
}
clientCode();