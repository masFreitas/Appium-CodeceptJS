Feature('login');

const { login_page } = inject() //global import, because login will be used in every scenario

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

Scenario('Login with success', ({ I, home_page }) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
});

Scenario('Login with error', ({ I }) => {
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
});
