import { type StepDefinitions } from 'jest-cucumber'
import Calculator from '../src/calculator'

let calculator: Calculator

export const calculatorSteps: StepDefinitions = ({ given, when, then }) => {
  given('I create a new calculator', () => {
    calculator = new Calculator()
  })

  when(/^I sum (\d+)$/, (operand) => {
    calculator.sum(parseInt(operand))
  })

  when(/^I multiply by (\d+)$/, (operand) => {
    calculator.multiplyBy(parseInt(operand))
  })

  then(/^the result is (\d+)$/, (expectedResult) => {
    expect(calculator.result).toBe(parseInt(expectedResult))
  })
}
