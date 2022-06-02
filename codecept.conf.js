const server = require('./server/server.js')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      desiredCapabilities: {
        // appPackage: 'com.qazandoapp',
        // appActivity: 'MainActivity',
        deviceName: 'pixel2aula',
        platformVersion: '9',
        browserName: 'Chrome'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {

    reporter: "mochawesome",
    reporterOptions: {
      reportFilename: "[status]_[datetime]-report",
      timestamp: "longDate"
    }

  },
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
  timeout: null,
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/login_steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true,
      enable: true
    },
    retryFailedStep: {
      enable: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    allure: {
      "enabled": true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  tests: './steps/search_google_test.js',
  name: 'qazando-automation'
}