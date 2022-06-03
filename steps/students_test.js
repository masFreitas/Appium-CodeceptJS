Feature('students');

const { login_page, home_page } = inject() //global import, because login will be used in every scenario
const randonCode = require('../Utils/code')
const randonName = require('../Utils/name')

Scenario('Add student with success', ({ I }) => {
    const code = randonCode.getCode()
    const name = randonName.getName()

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(code, name)
    home_page.searchStudent(name, code)
});

Scenario('Scroll list', ({ I }) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.scrollToSeeStudent(55512)
}).tag('@scroll');
