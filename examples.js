// import { myAwesomeReusableFunction } from "./utils"
// import { myAwesomeReusableFunction } from "./utils"
import getPersonData from './utils'

// console.log(getPersonData())

const { doSomething } = getPersonData()
console.log(doSomething())


// myArrowFunction()
myAwesomeReusableFunction()


// const firstName = "Aleksandar"


// let lastName = "Ivanov"
// lastName = "Petrov"


const number = 2

// const result = number + 3

const array = [1,"2",{a:2}]

const objectExample = {
    firstName: "Aleksandar",
    lastName: "Petrov",
    address: {
        street: "Street name",
        zipCode: 4000
    },
    photos: ["image1.jpg", "image2.jpg"]
}

objectExample.firstName = "Ivan"
delete objectExample.firstName

objectExample.address.zipCode



function myFunction(a, b) {
    console.log(a, b)
    return a + b
}

const myResult = myFunction(4, 5)

if(myResult > 10) {
    console.log('My result is huge')
} else if(myResult < 10) {
    console.log('My result is not that huge')
} else {
    console.log('My result is 10')
}


switch (myResult) {
    case 10:
        console.log('My result is 10')
    break
    default: 
        console.log('My result is not 10')
}


const cars = ['Audi', 'Toyota', 'Lada']
console.log(cars[1]) //Toyota
console.log(cars[0]) //Audi

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

cars.forEach(function(element) {
    console.log(element)
})

cars.forEach((element) => {
    console.log(element)
})

const user = {
    name: "tralala",
    password: "123",
    age: 20,
}

for(const key in user) {
    console.log(key, user[key])
}

Object.keys(user)  // ["name", "password", "age"]
Object.values(user) // ["tralala", "123", 20]

Object.entries(user) 
/* [
        ["name", "tralala"], 
        ["password", "123"],
        ["age", 20]
    ]
*/


// const myArrowFunction = (a = 0, b = 2) => {
//     return a + b
// }

const myArrowFunction2 = (a = 0, b = 2) => a + b

// myArrowFunction() // 2


const array1 = [1,2,3]
const array2 = [4,5,6]

console.log([...array1, ...array2]) // [1,2,3,4,5,6]

console.log([1,...array2]) // [1,4,5,6]


const obj1 = {firstName: "Ivan"}
const obj2 = {lastName: "Ivanov"}
const obj3 = {...obj1, ...obj2} 
// {firstName: "Ivan", lastName: "Ivanov"}

obj3.firstName // "Ivan"

// const { firstName } = obj3
// console.log(firstName) // "Ivan"


const getPerson = () => {
    //Do some code and return person Object
    return {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        getFullName: () => {
            return 'Ivan Ivanov'
        }
    }
}

const { getFullName } = getPerson()
console.log(getFullName()) // Ivan Ivanov

const myNewArray = ["Ivan", "Ivanov"]

const [tralala, lastName] = myNewArray

console.log(tralala, lastName)





