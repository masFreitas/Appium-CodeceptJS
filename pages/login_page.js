const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    password: '~senha'
  },

  button: {
    enter: '~entrar'
  },

  message: {
    loginError: '~lognFail',
  },

  doLogin(email, password) {
    I.waitForElement(this.fields.email, 5)
    I.retry(4).fillField(this.fields.email, email) //retry 4 times the same action
    I.fillField(this.fields.password, password)
    I.tap(this.button.enter)
  },

  checkLoginError() {
    I.waitForElement(this.message.loginError, 5)
    I.seeElement(this.message.loginError)
  }

}
