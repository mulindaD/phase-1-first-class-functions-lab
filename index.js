// Code your solution in this file!
const returnFirstTwoDrivers = arr => arr.slice(0, 2)

const returnLastTwoDrivers = arr => arr.slice(arr.length - 2)

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = int => {
    return () => int * int
}

const fareDoubler = (x) => {
    return x * 2
}

const fareTripler = x => x * 3

const selectDifferentDrivers = (arrayOfDrivers, callback) => {
    return callback(arrayOfDrivers);
}

