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
}


function loadPassenger(num){
    if (this.passenger < this.maximumPassengers) {
    if ((num + this.passenger) <= this.maximumPassengers){
        this.passenger = num;
        return this.passenger;
        } else {
        return availableRoom == "false";
        }
    }
}


function start(){
    if (this.fuel > 0){
    return start == "true";
    }
}


function scheduleService(mileage){
    if (this.mileage > 30000){
    return this.scheduleService == "true";  
    }   
}


let v = new NewCar("Mecury", "Sedan", "1965", "silver", 29000);
console.log(v.make)


v.start()
v.loadPassenger(5)
v.scheduleService()


console.log(v)