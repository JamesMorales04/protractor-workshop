import {
  ElementFinder, browser, ExpectedConditions, element, by,
} from 'protractor';

import { DownloadService } from '../service/download.service';

export class DownloadFile {
  private downloadButton: ElementFinder;

  constructor() {
    this.downloadButton = element(by.linkText('flower.jpeg'));
  }

  public async getLink(): Promise<string> {
    return this.downloadButton.getAttribute('href');
  }

  public async download(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.downloadButton), 6000);
    const service = new DownloadService();
    await service.downloadFile(await this.downloadButton.getAttribute('href'), 'testFile.jpeg');
  }
}
