import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private paymentMenu: ElementFinder;

  private termsOfService: ElementFinder;

  constructor() {
    this.termsOfService = $('#cgv');
    this.paymentMenu = $('#form > p > button > span');
  }

  public async goToPaymentMenu(): Promise<void> {
    await this.termsOfService.click();
    await this.paymentMenu.click();
  }
}
