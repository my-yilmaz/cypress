const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qtbx59',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
