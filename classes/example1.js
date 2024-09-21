class person {
    constructor(name, age , height,){
        this.name = name
        this.age  = age
        this.height = height

    }
    
    greet() {
        console.log(`Hello my name is ${this.name} and I am ${this.age } year old also im ${this.height} tall`);
    }
}

const person1 = new
 person("Subomi",23, 5.8)
person1.greet()


