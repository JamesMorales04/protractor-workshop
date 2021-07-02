import {
  $, ElementFinder, browser, ExpectedConditions,
} from 'protractor';

import { DownloadService } from '../service/download.service';

export class DownloadFileBlob {
  private downloadButton: ElementFinder;

  constructor() {
    this.downloadButton = $('#downloadButton');
  }

  public async getLink(): Promise<string> {
    return this.downloadButton.getAttribute('href');
  }

  public async download(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.downloadButton), 3000);
    const service = new DownloadService();
    await service.downloadBlobFile(await this.downloadButton.getAttribute('href'), 'testFileBlob.jpeg');
  }
}
