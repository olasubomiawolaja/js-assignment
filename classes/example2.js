class car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    car_info() {
        console.log(`Car: ${this.make}, ${this.model},${this.year}`)
    }
}

const car1 =new car("toyota","camry",2024);

car1.car_info()