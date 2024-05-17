class DashboardPage {
    constructor(page) {
        this.page = page;
    }

    async getTitle() {
        console.log(await this.page.title());
        return await this.page.title();
    }
}

module.exports = { DashboardPage };