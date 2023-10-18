const numbers = [2,3,4,5]

const primes = numbers.filter(e => {
    for (let i = 2; i <= Math.sqrt(e); i++) {
        if (e % i === 0) {
            return false
        }
    }
    return true
})
const sum = primes.reduce((acc, currentValue) => {
    return acc + currentValue ** 2
}, 0)

console.log(sum)