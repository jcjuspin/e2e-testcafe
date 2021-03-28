import { Role, Selector } from 'testcafe';

const emailInput = Selector('input').withAttribute('type', 'email')
const passwordInput = Selector('input').withAttribute('type', 'password')
const email = 'testeur.vytein+e2e@gmail.com'
const password = 'testeurvyte2021!'

export const userEmailAccount = Role('https://www.vyte.in/login/email', async t => {
  await t
  .typeText(emailInput, email)
  .typeText(passwordInput, password)
  .pressKey('enter')
});