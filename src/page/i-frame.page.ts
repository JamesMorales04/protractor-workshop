import {
  $, browser, ElementFinder, promise, ExpectedConditions,
} from 'protractor';

export class IFramePage {
  private iframe1: ElementFinder;

  private documentTitleLabel: ElementFinder;

  constructor() {
    this.iframe1 = $('#frame1');
    this.documentTitleLabel = $('.main-header');
  }

  public async switchToFrame(): Promise<void> {
    this.documentTitleLabel = $('#sampleHeading');
    await browser.switchTo().frame(this.iframe1.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    this.documentTitleLabel = $('.main-header');
    await browser.switchTo().defaultContent();
  }

  public async getTittlePage(): Promise<string> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.documentTitleLabel), 3000);
    return this.documentTitleLabel.getText();
  }

  public async getFrameHeight(): Promise<number> {
    return Number(await this.iframe1.getAttribute('height'));
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }
}
