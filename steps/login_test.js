Feature('login');

const { login_page } = inject() //global import, because login will be used in every scenario

Scenario('Login with success', ({ I, home_page }) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
});

Scenario('Login with error', ({ I }) => {
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
});
