import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private processComplete: ElementFinder;

  constructor() {
    this.processComplete = $('#center_column > div > p > strong');
  }

  public async goToProcessComplete(): Promise<string> {
    return this.processComplete.getText();
  }
}
