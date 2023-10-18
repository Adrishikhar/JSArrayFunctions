// Given an array of products with properties name, price, and quantity, use:filter to keep
// products that have more than 10 items in quantity.map to get an array of product prices.reduce to get the total cost of all the products

const products = [
    {name: 'Apple', price: 0.5, quantity: 15},
    {name: 'Banana', price: 0.25, quantity: 5},
    {name: 'Cherry', price: 1, quantity: 12},
    {name: 'Orange', price: 0.8, quantity: 9},
    {name: 'Cashews', price: 1.3, quantity: 20}
]

const prices = products.filter(e => e.quantity > 10).reduce((acc, currentValue) => {
    acc +=  currentValue.quantity * currentValue.price
    return acc
}, 0)

console.log(prices)