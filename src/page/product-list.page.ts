import {
  $, $$, ElementFinder, ElementArrayFinder, browser, ExpectedConditions,
} from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  private addToCartButton: ElementFinder;

  constructor() {
    this.products = $$('.product_list');
    this.addToCartButton = $('[id="add_to_cart"]');
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products
      .filter((product: ElementFinder) => product
        .$('.product-name')
        .getText()
        .then((name: string) => name.includes(productName)))
      .first();
  }

  public async selectProduct(productName: string): Promise<void> {
    const selectedProduct = this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(selectedProduct.$('img')), 3000);
    await selectedProduct.$('img').click();
  }

  public async addToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartButton), 3000);
    await this.addToCartButton.click();
  }
}
