Feature('login');

const { loginPage } = inject() //global import, because login will be used in every scenario

BeforeSuite (() => {
    console.log("Before Suite")

});

Before (() => {
    console.log("Before")

});

AfterSuite (() => {
    console.log("After Suite")

});

After (() => {
    console.log("After")

});

Scenario('Login with success', ({ I, homePage }) => {
    loginPage.doLogin('teste@teste.com', '123456')
    homePage.checkLoginSuccess()
});

Scenario('Login with error', ({ I }) => {
    loginPage.doLogin('xteste@teste.com', '123456')
    loginPage.checkLoginError()
});
