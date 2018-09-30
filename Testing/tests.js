const expect = chai.expect

describe("check tests are running", () => {
  it("ran a test", () => {
    expect(true).to.equal(true);
  })
})
describe("check screen functionality", () => {
  it("can get/set the screen", () => {
    setScreen('test')
    expect(getScreen()).to.equal('test');
  })
  it("clears the Screen", () => {
    setScreen('test')
    clearScreen()
    expect(getScreen()).to.equal('');
  })
})

describe("parses screen", () => {
  it("turns 1+1 into [1, '+', 1]", () => {
    expect(parseScreen('1+1')).to.deep.equal([1, '+', 1]);
  })
})

describe("calculating", () => {
  it("add 1+1 and get 2", () => {
    // calculate(num1, '÷', num2)
    // calculate(num1, 'x', num2)
    let result = calculate(1, '+', 1)
    expect(result).to.equal(2);
  })
  it("subtract 2 - 1 and get 1", () => {
    let result = calculate(2, '-', 1)
    expect(result).to.equal(1);
  })

  it("divide 10 by 5 and get 2", () => {
    let result = calculate(10, '÷', 5)
    expect(result).to.equal(2);
  })

  it("multiply 10 by 2 and get 20", () => {
    let result = calculate(10, 'x', 2)
    expect(result).to.equal(20);
  })

  it("uses parseScreen with calculate", () =>{
    let params = parseScreen('1+1')
    let result = calculate(...params)
    expect(result).to.equal(2);
  })
})

describe('BDD', () =>{
  it('clear screen', () => {
    // set the Screen
    setScreen('testing123')
    // click clear button
    let clearButton = document.getElementById('clear')
    clearButton.click()
    // check the screen is clear
    expect(getScreen()).to.equal('');

  })

  it ('does addition', () => {
    // click 1, +, 1, equals
    let oneButton = document.querySelectorAll('.buttons span')[11]
    let equalsButton = document.getElementById("equals")
    let plusButton = document.querySelectorAll('.buttons .operator')[4]

    oneButton.click()
    plusButton.click()
    oneButton.click()
    expect(getScreen()).to.equal('1+1');

    equalsButton.click()
    // check screen says "2"
    expect(getScreen()).to.equal('2');
    clearScreen()
  })

  it ('does subtraction', () => {
    // click 1, +, 1, equals
    let oneButton = document.querySelectorAll('.buttons span')[11]
    let equalsButton = document.getElementById("equals")
    let subtractButton = document.querySelectorAll('.buttons .operator')[3]

    oneButton.click()
    subtractButton.click()
    oneButton.click()
    expect(getScreen()).to.equal('1-1');

    equalsButton.click()
    // check screen says "0"
    expect(getScreen()).to.equal('0');
    clearScreen()
  })

  it ('does division', () => {
    // click 1, +, 1, equals
    let oneButton = document.querySelectorAll('.buttons span')[11]
    let equalsButton = document.getElementById("equals")
    let divisionButton = document.querySelectorAll('.buttons .operator')[1]

    oneButton.click()
    divisionButton.click()
    oneButton.click()
    expect(getScreen()).to.equal('1÷1');

    equalsButton.click()
    // check screen says "0"
    expect(getScreen()).to.equal('1');
    clearScreen()
  })

  it ('does multiplication', () => {
    // click 1, +, 1, equals
    let oneButton = document.querySelectorAll('.buttons span')[11]
    let equalsButton = document.getElementById("equals")
    let multiplyButton = document.querySelectorAll('.buttons .operator')[2]

    oneButton.click()
    multiplyButton.click()
    oneButton.click()
    expect(getScreen()).to.equal('1x1');

    equalsButton.click()
    // check screen says "0"
    expect(getScreen()).to.equal('1');
    clearScreen()
  })

})
