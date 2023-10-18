// JS Array methods2Given an array of words, use map to obtain an array of word lengths, and then use reduce to get the average word length.

const sumOfLengths = () => {
    const fruits = ['apple', 'banana', 'cherry']
    const lengths = fruits.map(e => e.length)
    return lengths.reduce((accumulator, currentValue) => (accumulator + currentValue)) / lengths.length
}

console.log(sumOfLengths())