import '@cypress/xpath'
import CalculatorPage from '../support/page_objects/calculatorPage';

Cypress.on('uncaught:exception', () => false)

before(() => {
  cy.session('calculator-session', () => {
      cy.clearLocalStorage();
      cy.clearAllSessionStorage();
      cy.clearCookies();
      cy.visit('');
      CalculatorPage.calculatorDisplayWithTimeout().should('be.visible');
    },
    {
      cacheAcrossSpecs: true,
    })
})
