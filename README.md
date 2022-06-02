# Automation project with CodeceptJS and Appium
# Using Mobile Broswser

## Install

### To install dependencies

```
npm install
```

### To run test using mobile browser

First you need to modify the codecept.conf.js file, so it can use the Chrome browser

```
    Appium: {
      platform: 'Android',
      desiredCapabilities: {
        deviceName: 'pixel2aula',
        platformVersion: '9',
        browserName: 'Chrome'
      }
    }
  },
```
After that, you need to start Appium with the following command, so that it can install chromedriver

```
appium --allow-insecure chromedriver_autodownload
```

Then just run your test


```
npm run test
```
## Report
To use mochawesome (report), add the following command to the end of the run command
```
--reporter mochawesome
```
