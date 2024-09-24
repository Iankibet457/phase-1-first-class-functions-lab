// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function (){
        return num *num
    }

}
const fareDoubler = function createFareMultiplier(fare){
    return fare *2
}
fareDoubler()

const fareTripler = function createFareMultiplier(fare){
    return fare *3
}
fareTripler()

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)

}