import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private signInMenu: ElementFinder;

  constructor() {
    this.signInMenu = $('.cart_navigation span');
  }

  public async goToSignInMenu(): Promise<void> {
    await this.signInMenu.click();
  }
}
