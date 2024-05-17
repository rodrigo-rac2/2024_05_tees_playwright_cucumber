const {
  Given,
  When,
  Then,
  BeforeAll,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { DashboardPage } = require("../pages/DashboardPage");

let page;

setDefaultTimeout(60000);

BeforeAll(async function () {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
});

Given("o usuário acessa a página de login", async function () {
  await new LoginPage(page).open();
});

When(
  "o usuário preenche o campo de {string} com {string}",
  async function (chave, valor) {
    return new LoginPage(page).fillField(chave, valor);
  }
);

When("o usuário clica no botão de login", function () {
  return new LoginPage(page).clickButton();
});

Then("o usuário deve ser redirecionado para o dashboard", async function () {
  return expect(await new DashboardPage(page).getTitle()).toBe("OrangeHRM");
});
