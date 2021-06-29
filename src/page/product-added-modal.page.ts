import {
  $, ElementFinder, browser, ExpectedConditions,
} from 'protractor';

export class ProductAddedModalPage {
  private shoppingCartMenu: ElementFinder;

  constructor() {
    this.shoppingCartMenu = $('[title="Proceed to checkout"]');
  }

  public async goToSummaryMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.shoppingCartMenu), 3000);
    await this.shoppingCartMenu.click();
  }
}
