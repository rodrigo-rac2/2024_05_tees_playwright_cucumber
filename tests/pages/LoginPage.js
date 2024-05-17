const { chromium } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        return await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { timeout: 40000 });
    }

    async fillField(chave, valor) {
        var localizador = "";
        switch (chave) {
            case "username":
                localizador = 'input[name="username"]';
                break;
            case "password":
                localizador = 'input[name="password"]';
                break;
            default:
                throw new Error("Campo não encontrado");
        }
        return localizador
            ? await this.page.fill(localizador, valor)
            : console.error("erro: campo não encontrado");
    }

    async clickButton() {
        return await this.page.click('button[type="submit"]');
    }
}

module.exports = { LoginPage };
