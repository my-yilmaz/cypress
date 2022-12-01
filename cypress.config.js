const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pw2quz",
  
  e2e: {
    experimentalRunAllSpecs:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here  
    },
      "reporter": "mochawesome",
      "reporterOptions": {
        "reportDir":"cypress/reports",
        "reportFilename":"report",
        "overwrite": false,
        "html": true,
        "json": true,
        "charts":true,
        
      },
      "video":false
  },
});
