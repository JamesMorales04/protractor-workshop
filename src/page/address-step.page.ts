import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private shippingStepMenu: ElementFinder;

  constructor() {
    this.shippingStepMenu = $('[name="processAddress"]');
  }

  public async goToShippingStepMenu(): Promise<void> {
    await this.shippingStepMenu.click();
  }
}
