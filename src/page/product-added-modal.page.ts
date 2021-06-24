import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private shoppingCartMenu: ElementFinder;

  constructor() {
    this.shoppingCartMenu = $('[style*="display: block;"] .button-container > a');
  }

  public async goToSummaryMenu(): Promise<void> {
    await this.shoppingCartMenu.click();
  }
}
