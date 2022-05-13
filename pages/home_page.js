const { I } = inject();

module.exports = {

  button: {
    save: '~salvar',
  },

  checkLoginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  }
}
