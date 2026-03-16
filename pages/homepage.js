class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async openFirstProduct() {
    await this.page.getByTestId('product-title-1').click();
  }
}

module.exports = { HomePage };