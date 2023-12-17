import { MY_CARS, HIS_CARS } from './cars.js'

//TODO home work import users from data-examples.js
//Write different functions that will return
//1. The avarage age of users
//2. All users that are above age of 30
//3. All unique jobTitle-s
//4. All users full name

//import companyInformation from data-examples.js
//Write different functions that will return
//1. Department names
//2. All teamMembers
//3. All users that are above age of 30
//4. All unique jobTitle-s


const allCars = [...MY_CARS, ...HIS_CARS]

const nonToyotaCars = allCars.filter((car) => {
    return car !== 'Toyota'
})

const toyotaCars = allCars.filter((car) => {
    return car === 'Toyota'
})

const carsWithA = allCars.filter((car) => {
    return car.toLowerCase().includes('a')
})

console.log('carsWithA', carsWithA)

const carsData = carsWithA.map((car) => {

    // let color
    // if(car === 'Toyota') {
    //     color = 'Blue'
    // } else {
    //     color = 'Green'
    // }

    const color = car === 'Toyota' ? 'Blue' : 'Green'
    return {
        car,
        color,
    }
})


// Reduce example
const arrayOfNumbers = [
    {
        age: 1.22321333,
    },
    {
        age: 2,
    },
    {
        age: 3,
    },
    {
        age: 5,
    }
]

const result = arrayOfNumbers.reduce((acc, curr) => {
    return acc + curr.age 
}, 0)

// Number formats
console.log(result / arrayOfNumbers.length)
console.log(Math.round(result / arrayOfNumbers.length))
console.log(Math.ceil(result / arrayOfNumbers.length))
console.log(Math.floor(result / arrayOfNumbers.length))
console.log((result / arrayOfNumbers.length).toFixed(3))

//Timeout/Timeinterval
const loggingInterval = setInterval(() => {
    console.log('interval logging')
}, 1000)

setTimeout(() => {
    clearInterval(loggingInterval)
}, 5000);


console.log(carsData)