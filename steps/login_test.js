Feature('login');

const { loginPage } = inject() //global import, because login will be used in every scenario

BeforeSuite (() => {
    console.log("Before Suite")

});

Before (() => {
    console.log("Before")

});

Scenario('Login with success', ({ I, homePage }) => {
    loginPage.doLogin('teste@teste.com', '123456')

    pause() //"interactive debugger"

    homePage.checkLoginSuccess()
});

Scenario('Login with error', ({ I }) => {
    loginPage.doLogin('xteste@teste.com', '123456')
    loginPage.checkLoginError()
});

AfterSuite (() => {
    console.log("After Suite")

});

After (() => {
    console.log("After")

});