import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a SDET learning protractor', () => {
  describe('then open Iframe page', () => {
    beforeEach(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('https://demoqa.com/frames');
    });
    describe('Then set frame height', () => {
      const iFrame: IFramePage = new IFramePage();
      const newIframeHeight = 500;
      beforeEach(async () => {
        iFrame.setFormFrameHeight(newIframeHeight);
      });
      it('then should have a different height than before', async () => {
        expect(await iFrame.getFrameHeight()).toBe(newIframeHeight);
      });
    });
  });
});
