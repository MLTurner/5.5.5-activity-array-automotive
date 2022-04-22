//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class NewCar extends VehicleModule {
    constructor(make, model, year, color, mileage) {
    super(maximumPassengers, passenger, numberOfWheels, maximumPassengers, fuel, scheduleService) 
        this.make = "Mercury";
        this.model = "Sedan";
        this.year = "1965";
        this.color = "silver";
        this.mileage = "29000";
        this.maximumPassengers = "5";
        this.passenger = "0";
        this.numberOfWheels = "4";
        this.maximumSpeed = "160";
        this.fuel = "10";
        this.scheduleService = "false"
    }
}

loadPassenger(num) {
    if (this.passenger < this.maximumPassengers) {
    return availableRoom == false;
    }
}

start() {
    if (this.fuel > 0)
    return start == true;
}

scheduleService(mileage) {
    if (this.mileage > 30000)
    return this.scheduleService == true;
}