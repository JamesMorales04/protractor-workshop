import {
  $, ElementFinder, browser, ExpectedConditions,
} from 'protractor';

export class ProductListPage {
  private addToCartMenu: ElementFinder;

  constructor() {
    this.addToCartMenu = $('#center_column [title="Add to cart"]');
  }

  public async goToAddToCartMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartMenu), 3000);
    await this.addToCartMenu.click();
  }
}
