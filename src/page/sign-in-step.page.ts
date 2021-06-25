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

  public async goToAddressMenu(email, password): Promise<void> {
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    await this.addressMenu.click();
  }
}