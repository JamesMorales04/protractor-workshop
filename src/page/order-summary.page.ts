import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private processComplete: ElementFinder;

  constructor() {
    this.processComplete = $('#center_column > div > p > strong');
  }

  public async goToProcessComplete(): Promise<void> {
    await expect(this.processComplete.getText())
      .toBe('Your order on My Store is complete.');
  }
}
