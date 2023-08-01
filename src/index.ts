import Calculator from './calculator'

const calculator = new Calculator()
console.log('Created a new calculator')
calculator.sum(1)
console.log(`Sum 1, result is ${calculator.result}`)
calculator.multiplyBy(2)
console.log(`Multiply by 2, result is ${calculator.result}`)
calculator.sum(3)
console.log(`Sum 3, result is ${calculator.result}`)
