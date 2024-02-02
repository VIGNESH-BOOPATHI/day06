class UberCalculator {
    constructor(ratePerKilometer, ratePerMinute, baseFare) {
        this.ratePerKilometer = ratePerKilometer;
        this.ratePerMinute = ratePerMinute;
        this.baseFare = baseFare;
    }

    calculateFare(distance, duration) {
        const distanceFare = this.ratePerKilometer * distance;
        const timeFare = this.ratePerMinute * duration;
        const totalFare = this.baseFare + distanceFare + timeFare;

        return totalFare;
    }
}

// Example usage:
const uberXCalculator = new UberCalculator(20, 1, 200); // Rates for UberX

const distance = 10; // in kilometers
const duration = 20; // in minutes

const fare = uberXCalculator.calculateFare(distance, duration);

console.log(`UberX Fare: Rs.${fare}`);

//OUTPUT

    //UberX Fare: Rs.420

