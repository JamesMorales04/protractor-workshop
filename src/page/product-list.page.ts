import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCartMenu: ElementFinder;

  constructor() {
    this.addToCartMenu = $('#center_column [title="Add to cart"]');
  }

  public async goToAddToCartMenu(): Promise<void> {
    await this.addToCartMenu.click();
  }
}
