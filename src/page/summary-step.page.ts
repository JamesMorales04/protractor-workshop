import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private signInMenu: ElementFinder;

  constructor() {
    this.signInMenu = $('.cart_navigation [title="Proceed to checkout"]');
  }

  public async goToSignInMenu(): Promise<void> {
    await this.signInMenu.click();
  }
}
