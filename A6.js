//Given an array of objects representing people with a name and age property, first,filter out anyone younger than 18, and then use reduce to find the oldest person's name.

const people = [
    {name: 'Alice', age: 15},
    {name: 'Bob', age: 20},
    {name: 'Charlie', age: 22},
    {name: 'Rob', age: 40},
    {name: 'Mob', age: 100}
]

const adults = people.filter(e => e.age > 18)
const eldest = adults.reduce((acc, currentValue) => {
    if (currentValue.age > acc.age) {
        acc = currentValue
    }
    return acc
})

console.log(eldest)