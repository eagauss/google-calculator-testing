# Google Calculator End-to-End Test Suite

**Author:** [Emil Akhadov](https://www.linkedin.com/in/emil-akhadov/)

This project contains an automated end-to-end test suite for the Google Calculator component that appears when searching for "calculator" on Google. The tests are built using Cypress.io.

## Project Goal

The primary goal of this project is to build an automated end-to-end test suite that tests the functionality of this calculator component on Google. The calculator only has the buttons `0123456789.=+-×÷AC/CE`.

## Setup and Installation
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?logo=node.js)](https://nodejs.org/)  
To run these tests, ensure you have Node.js v18+ installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/eagauss/google-calculator-testing.git
    cd google-calculator-testing
    ```

2.  **Install dependencies:**
    ```bash
    npm ci
    ```
    This will install Cypress and `@cypress/xpath`, which are listed as `devDependencies` in `package.json`.

**Important Note:** Due to Google's limitations, you might encounter a CAPTCHA. You will need to manually solve this CAPTCHA only once for the tests to proceed.

## Running the Tests

You can run the tests in two modes:

* **Headed (browser visible):**
    ```bash
    npm run cy:run
    ```
  This command will execute the tests in a Chrome browser that is visible during the execution.

* **Open Cypress Test Runner:**
    ```bash
    npm run cy:open
    ```
  This command will open the Cypress Test Runner application, allowing you to select and run specific tests, view their execution, and debug.

## Test Structure

The tests are organized as follows:

* `cypress.config.js`: This file contains the Cypress configuration, including `baseUrl`, `viewportWidth`, `viewportHeight`, and experimental features.
* `cypress/e2e/calculator.cy.js`: This file contains the main test suite with various calculator scenarios.
* `cypress/support/page_objects/calculatorPage.js`: This file defines the Page Object Model for the calculator, providing methods to interact with calculator elements.

## Implemented Test Cases

The test suite covers a variety of scenarios, including:

* Basic arithmetic operations (addition, subtraction, multiplication, division).
* Operations with positive and negative numbers.
* Operations involving decimals.
* Division by zero handling (results in 'Infinity' or 'Error').
* Clear Entry (`CE`) and All Clear (`AC`) functionality.
* Typing expressions directly into the display and pressing Enter.

## Technologies Used

[![Cypress Version](https://img.shields.io/npm/v/cypress?label=cypress&logo=cypress&color=4BC0A9&labelColor=black)](https://www.npmjs.com/package/cypress)
[![@cypress/xpath version](https://img.shields.io/npm/v/@cypress/xpath/latest?label=%40cypress%2Fxpath)](https://www.npmjs.com/package/@cypress/xpath)

* **Cypress.io**: End-to-end testing framework (v14.4.0)
* **`@cypress/xpath`**: XPath selector plugin (v2.0.3)

## Important Note on XPath Usage
While this project uses `@cypress/xpath` for element selection, note that:
* The plugin is no longer actively maintained
* I recommend migrating to `data-cy` attributes for future-proofing
* XPath is used here primarily for demonstration purposes
