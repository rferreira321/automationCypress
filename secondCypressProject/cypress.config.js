const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 6000,
  videoCompression : true,
  viewportHeight : 500,
  viewportWidth : 600,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
    baseUrl: 'https://automationexercise.com',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: false,
  }
})

