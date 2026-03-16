class CartPage {
  constructor(page) {
    this.page = page;
  }

  async openProductInCart() {
    await this.page.getByText('Miecz Runiczny (p1)').click();
  }

  async buy() {
    await this.page.getByTestId('cart-buy').click();
  }

  async checkSuccess() {
    return await this.page.getByText('sukces').isVisible();
  }
}

module.exports = { CartPage };