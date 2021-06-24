import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCartMenu: ElementFinder;

  constructor() {
    this.addToCartMenu = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToAddToCartMenu(): Promise<void> {
    await this.addToCartMenu.click();
  }
}
