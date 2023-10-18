const sentence = "I love learning new things!"

const list = sentence.split(" ")

const newList = list.map((e) => e.toUpperCase())
console.log(newList)
