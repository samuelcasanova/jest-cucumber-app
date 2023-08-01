export default class Calculator {
  private _result: number = 0

  public sum (operand: number): void {
    this._result += operand
  }

  multiplyBy (operand: number): void {
    this._result *= operand
  }

  public get result (): number {
    return this._result
  }
}
