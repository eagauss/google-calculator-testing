const { defineConfig } = require('cypress');

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  experimentalCspAllowList: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    experimentalRunAllSpecs: true,
    baseUrl: 'https://www.google.ca/search?q=calculator',
    testIsolation: false,
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
