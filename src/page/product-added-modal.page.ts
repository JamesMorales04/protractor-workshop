import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private shoppingCartMenu: ElementFinder;

  constructor() {
    this.shoppingCartMenu = $('[style*="display: block;"] [title="Proceed to checkout"]');
  }

  public async goToSummaryMenu(): Promise<void> {
    await this.shoppingCartMenu.click();
  }
}
