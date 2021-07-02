import { browser } from 'protractor';

import { DownloadFileBlob } from '../src/page';

import { DownloadService } from '../src/service/download.service';

describe('Given a SDET learning protractor', () => {
  describe('When open web page with a file to download', () => {
    beforeEach(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('https://demoqa.com/upload-download');
    });
    describe('And download the blob file', () => {
      const downloadFile: DownloadFileBlob = new DownloadFileBlob();
      beforeEach(async () => {
        await downloadFile.download();
      });
      it('Then should be in temp folder', async () => {
        const service = new DownloadService();
        const file = await service.readFileFromTemp('testFileBlob.jpeg');
        expect(file.byteLength).toBeGreaterThanOrEqual(4000);
      });
    });
  });
});
