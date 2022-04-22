//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")


class NewCar extends VehicleModule {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage); { 
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
    return availableRoom == "false";
    }
}

start() {
    if (this.fuel > 0)
    return start == "true";
}

scheduleService(mileage) {
    if (this.mileage > 30000)
    return this.scheduleService == "true";
}

let v = new NewCar("Mecury", "Sedan", "1965", "silver", 29000);
console.log(v.make)


v.start()
v.loadPassenger(5)
v.scheduleService()