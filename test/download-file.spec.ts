import { browser } from 'protractor';

import { DownloadFile } from '../src/page';

import { DownloadService } from '../src/service/download.service';

describe('Given a SDET learning protractor', () => {
  describe('When open Google Page', () => {
    beforeEach(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('http://the-internet.herokuapp.com/download');
    });
    describe('And download the file', () => {
      const downloadFile: DownloadFile = new DownloadFile();
      beforeEach(async () => {
        await downloadFile.download();
      });
      it('Then should have a title', async () => {
        const service = new DownloadService();
        const file = await service.readFileFromTemp('testFile.jpeg');
        expect(file.byteLength).toBeGreaterThanOrEqual(8000);
      });
    });
  });
});
