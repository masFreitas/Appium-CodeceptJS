Feature('Search Google');

Scenario('Search QAzando', ({ I }) => {
    I.amOnPage('https://www.google.com.br')
    I.fillField('.gLFyf', 'QAzando')
    I.waitForElement('.s49v2', 5)
    I.click('.s49v2')
    I.see('www.qazando.com.br')
});
