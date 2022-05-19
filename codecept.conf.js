const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const server = require('C:\\Users\\mateu\\Documents\\CodeceptJSAppium\\qazando-automation\\server.js')

exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\Users\\mateu\\Documents\\CodeceptJSAppium\\APK\\appsqazando\\app-release.apk',
      desiredCapabilities: {
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: "pixel2aula",
        platformVersion: "9",
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login_page.js',
    homePage: './pages/home_page.js',
  },
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
  mocha: {},
  name: 'qazando-automation',
  plugins: {
    retryFailedStep: {
      enable: true
    },
    screenshotOnFail: {
      enable: true
    }
  }
}