const { I } = inject();

module.exports = {

  button: {
    save: '~salvar',
  },

  fields: {
    code: '~codigo',
    student: '~aluno',
    search: '~search'
  },

  checkLoginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  },

  registerStudent(code, student) {
    I.waitForElement(this.button.save, 5)
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.student, student)
    I.tap(this.button.save)
  },

  searchStudent(search, check) {
    I.fillField(this.fields.search, search)
    I.waitForElement('~'+ check +'', 5)
    I.seeElement('~'+ check +'')
  },
}

