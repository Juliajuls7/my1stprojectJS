function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomNumber(10, 42))


const personName = 'Julia'
const personAge = 25
const personSex = 'female'

function logPerson(s, name, age) {
    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}`
}

const output = logPerson `Name: ${personName}, age: ${personAge}, пол: ${personSex}`
console.log(output)
    // Name: Julia, age: 25