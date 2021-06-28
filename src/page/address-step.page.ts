import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private shippingStepMenu: ElementFinder;

  constructor() {
    this.shippingStepMenu = $('#center_column > form > p > [name="processAddress"]');
  }

  public async goToShippingStepMenu(): Promise<void> {
    await this.shippingStepMenu.click();
  }
}
