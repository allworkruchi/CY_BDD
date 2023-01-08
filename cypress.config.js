const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  
  "video": false,
  "defaultCommandTimeout": 5000,
  "pageLoadTimeout": 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
      specPattern: '**/*.feature',
      excludeSpecPattern: ['*.js'],
  },
});
