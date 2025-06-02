export class CalculatorPage {

  static rejectAllButton() {
    return cy.contains('h1', 'Before you continue to Google')
      .parents('span')
      .find('button div:contains("Reject all")')
  }

  static zeroButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'0\']');
  }

  static oneButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'1\']');
  }

  static twoButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'2\']');
  }

  static threeButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'3\']');
  }

  static fourButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'4\']');
  }

  static fiveButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'5\']');
  }

  static sixButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'6\']');
  }

  static sevenButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'7\']');
  }

  static eightButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'8\']');
  }

  static nineButton() {
    return cy.xpath('//div[@role=\'button\'][text() = \'9\']');
  }

  static plusButton() {
    return cy.xpath('//div[@aria-label=\'plus\'][contains(text(), \'+\')]');
  }

  static minusButton() {
    return cy.xpath('//div[@aria-label=\'minus\'][contains(text(), \'−\')]');
  }

  static multiplyButton() {
    return cy.xpath('//div[@aria-label=\'multiply\'][contains(text(), \'×\')]');
  }

  static divideButton() {
    return cy.xpath('//div[@aria-label=\'divide\'][contains(text(), \'÷\')]');
  }

  static equalsButton() {
    return cy.xpath('//div[@aria-label=\'equals\'][contains(text(), \'=\')]');
  }

  static pointButton() {
    return cy.xpath('//div[@aria-label=\'point\'][contains(text(), \'.\')]');
  }

  static allClearButton() {
    return cy.xpath('//div[@aria-label=\'all clear\']');
  }

  static clearEntryButton() {
    return cy.xpath('//div[@aria-label=\'clear entry\']');
  }

  static calculatorDisplay() {
    return cy.get('#cwos');
  }

  static calculatorDisplayWithTimeout() {
    return cy.get('#cwos', { timeout: 60000 })
  }
}

export default CalculatorPage
