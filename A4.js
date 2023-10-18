const capitalizeAndFilter = () => {
    const fruits = ['apple', 'banana', 'avocado']
    return fruits.map(e => e.toUpperCase()).filter(e => e.startsWith('A'))
}

console.log(capitalizeAndFilter())

