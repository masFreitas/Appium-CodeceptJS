# Automation project with CodeceptJS and Appium

## Install

### To install dependencies

```
npm install
```

### To run test

```
npx codeceptjs run --steps
```

## Report
To use mochawesome (report), add the following command to the end of the run command
```
--reporter mochawesome
```

## Tags
You can add tags to the test, so you can run then separately.
Tags can be added into a Scenario  or into a Feature
```
Feature('login').tag('@login');

const { login_page } = inject() //global import, because login will be used in every scenario

Scenario('Login with success', ({ I, home_page }) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
}).tag('@loginsucesso');

Scenario('Login with error', ({ I }) => {
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
}).tag('@login_erro');
```
To run the test using tags, just use --grep '@tag_name' at the end of the run command
```
npx codeceptjs run --grep '@login_erro'
```

#### To run on mobile browser, use the branch [mobile-web-browser](https://github.com/masFreitas/Appium-CodeceptJS/tree/mobile-web-browser)
