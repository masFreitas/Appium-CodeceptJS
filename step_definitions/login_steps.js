const { I } = inject();
// Add in your custom step files

Given('I fill email field', () => {
  I.waitForElement('~email', 5)
  I.fillField('~email', 'teste@teste.com');
});

Given('I fill password field', () => {
  I.fillField('~senha', '123456');
});

When('I tap on Entrar', () => {
  I.tap('~entrar');
});

Then('I see the Salvar button', () => {
  I.waitForElement('~salvar', 5)
  I.seeElement('~salvar')
});
