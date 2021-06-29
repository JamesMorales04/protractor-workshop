import {
  $, browser, ElementFinder, promise,
} from 'protractor';

export class IFramePage {
  private iframe1: ElementFinder;

  constructor() {
    this.iframe1 = $('#frame1');
  }

  public async getFrameHeight(): Promise<number> {
    return Number(await this.iframe1.getAttribute('height'));
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }
}
