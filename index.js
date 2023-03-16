// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {return drivers.slice(0, 2)}

const returnLastTwoDrivers = (drivers) => {return drivers.slice(2)}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = () => {
    const fareMultiplier = (a) => a * a;
    return fareMultiplier;
}

const fareDoubler = (a) => a * 2;

const fareTripler = (a) => a * 3;

const selectDifferentDrivers = (drivers, driverFunction) => {
    return driverFunction(drivers);
}