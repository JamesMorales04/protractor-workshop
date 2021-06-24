import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private shippingStepMenu: ElementFinder;

  constructor() {
    this.shippingStepMenu = $('#center_column > form > p > button > span');
  }

  public async goToShippingStepMenu(): Promise<void> {
    await this.shippingStepMenu.click();
  }
}
