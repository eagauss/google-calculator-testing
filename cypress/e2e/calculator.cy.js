
import CalculatorPage from '../support/page_objects/calculatorPage';

describe('Google Calculator End-to-End Test Suite', () => {

  it('1 + 2 = 3', () => {
    CalculatorPage.oneButton().click();
    CalculatorPage.plusButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '3');
  });

  it('44 - 50 = -6', () => {
    CalculatorPage.fourButton().click();
    CalculatorPage.fourButton().click();
    CalculatorPage.minusButton().click();
    CalculatorPage.fiveButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '-6');
  });

  it('5 × 7 = 42', () => {
    CalculatorPage.fiveButton().click();
    CalculatorPage.multiplyButton().click();
    CalculatorPage.sevenButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '35');
  });

  it('0 × 7 = 0', () => {
    CalculatorPage.zeroButton().click();
    CalculatorPage.multiplyButton().click();
    CalculatorPage.sevenButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '0');
  });

  it('9 × 0 = 0', () => {
    CalculatorPage.nineButton().click();
    CalculatorPage.multiplyButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '0');
  });

  it('121 ÷ 11 = 11', () => {
    CalculatorPage.oneButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.oneButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.oneButton().click();
    CalculatorPage.oneButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '11');
  });

  it('1337 ÷ 0 = Infinity', () => {
    CalculatorPage.oneButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.sevenButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', 'Infinity');
  });

  it('0 ÷ 420 = 0', () => {
    CalculatorPage.zeroButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.fourButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '0');
  });

  it('3.7 + 1.3 = 5', () => {
    CalculatorPage.threeButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.sevenButton().click();
    CalculatorPage.plusButton().click();
    CalculatorPage.oneButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '5');
  });

  it('8 - 2.2 = 5.8', () => {
    CalculatorPage.eightButton().click();
    CalculatorPage.minusButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '5.8');
  });

  it('6.3 × 0.2 = 1.26', () => {
    CalculatorPage.sixButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.multiplyButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '1.26');
  });

  it('9 ÷ 0.03 = 300', () => {
    CalculatorPage.nineButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '300');
  });

  it('4 ÷ 0.002 = 2000', () => {
    CalculatorPage.fourButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '2000');
  });

  it('12 ÷ 0.4 = 30', () => {
    CalculatorPage.oneButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.fourButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '30');
  });


  // Decimal test cases with randomized numbers

  it('6.2 + 3.8 = 10', () => {
    CalculatorPage.sixButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.plusButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.eightButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '10');
  });

  it('7 - 2.2 = 4.8', () => {
    CalculatorPage.sevenButton().click();
    CalculatorPage.minusButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '4.8');
  });

  it('5.6 × 0.2 = 1.12', () => {
    CalculatorPage.fiveButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.sixButton().click();
    CalculatorPage.multiplyButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '1.12');
  });

  it('4 ÷ 0.02 = 200', () => {
    CalculatorPage.fourButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '200');
  });

  it('6 ÷ 0.003 = 2000', () => {
    CalculatorPage.sixButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '2000');
  });

  it('15 ÷ 0.5 = 30', () => {
    CalculatorPage.oneButton().click();
    CalculatorPage.fiveButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.zeroButton().click();
    CalculatorPage.pointButton().click();
    CalculatorPage.fiveButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '30');
  });


  it('4 + -7 = -3', () => {
    CalculatorPage.fourButton().click();
    CalculatorPage.plusButton().click();
    CalculatorPage.minusButton().click();
    CalculatorPage.sevenButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '-3');
  });

  it('2 - -6  = -4', () => {
    CalculatorPage.twoButton().click();
    CalculatorPage.minusButton().click();
    CalculatorPage.minusButton().click();
    CalculatorPage.sixButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '-4');
  });

  it('4 × -5 = -20', () => {
    CalculatorPage.fourButton().click();
    CalculatorPage.multiplyButton().click();
    CalculatorPage.minusButton().click();
    CalculatorPage.fiveButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '-20');
  });

  it('8 × -3 = -24', () => {
    CalculatorPage.eightButton().click();
    CalculatorPage.multiplyButton().click();
    CalculatorPage.minusButton().click();  // negative 3
    CalculatorPage.threeButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '-24');
  });

  it('12 ÷ -3 = -4', () => {
    CalculatorPage.oneButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.minusButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '-4');
  });

  it('9 ÷ -3 = -3', () => {
    CalculatorPage.nineButton().click();
    CalculatorPage.divideButton().click();
    CalculatorPage.minusButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '-3');
  });

  it('5 + 3 × 2 = 11', () => {
    CalculatorPage.fiveButton().click();
    CalculatorPage.plusButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.multiplyButton().click();
    CalculatorPage.twoButton().click();
    CalculatorPage.equalsButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '11');
  });

  it('should clear the current entry using CE', () => {
    CalculatorPage.eightButton().click();
    CalculatorPage.plusButton().click();
    CalculatorPage.clearEntryButton().click();

    CalculatorPage.calculatorDisplay().should('have.text', '8');
  });

  it('should reset the result to zero after clearing calculator', () => {
    CalculatorPage.sevenButton().click();
    CalculatorPage.multiplyButton().click();
    CalculatorPage.threeButton().click();
    CalculatorPage.equalsButton().click();
    CalculatorPage.calculatorDisplay().should('have.text', '261');
    CalculatorPage.allClearButton().click();
    CalculatorPage.calculatorDisplay().should('have.text', '0');
  });

  it('typing "1.2+7" and pressing Enter results 8.2', () => {
    CalculatorPage.calculatorDisplay().type('1.2+7{enter}');

    CalculatorPage.calculatorDisplay().should('have.text', '8.2');
  });

  it('typing "10/-4" and pressing Enter results -2.5', () => {
    CalculatorPage.calculatorDisplay().type('10/-4{enter}');

    CalculatorPage.calculatorDisplay().should('have.text', '-2.5');
  });

  it('typing "0/0" and pressing Enter results Error', () => {
    CalculatorPage.calculatorDisplay().type('0/0{enter}');

    CalculatorPage.calculatorDisplay().should('have.text', 'Error');
  });
});
