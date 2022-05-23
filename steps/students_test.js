Feature('students');

const { login_page, home_page } = inject() //global import, because login will be used in every scenario

Scenario('Add student with success', ({ I }) => {

    const code = '9090'
    const name = 'Fernando Silveira'

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(code, name)
    home_page.searchStudent(name, code)
});
