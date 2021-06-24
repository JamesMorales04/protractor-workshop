import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private addressMenu: ElementFinder;

  private email: ElementFinder;

  private password: ElementFinder;

  constructor() {
    this.email = $('#email');
    this.password = $('#passwd');
    this.addressMenu = $('#SubmitLogin > span');
  }

  public async goToAddressMenu(): Promise<void> {
    await this.email.sendKeys('aperdomobo@gmail.com');
    await this.password.sendKeys('WorkshopProtractor');
    await this.addressMenu.click();
  }
}
