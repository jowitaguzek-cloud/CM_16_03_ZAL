class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async clickProductHeading() {
    await this.page.getByRole('heading', { name: 'Miecz Runiczny' }).click();
  }

  async addToCart() {
    await this.page.getByTestId('buy-btn-1').click();
  }

  async confirmAdded() {
    return await this.page.getByText('Dodano do koszyka: Miecz').isVisible();
  }

  async openCart() {
    await this.page.getByTestId('cart-button').click();
  }
}

module.exports = { ProductPage };