import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a SDET learning protractor', () => {
  describe('then open Iframe page', () => {
    const iFrame: IFramePage = new IFramePage();
    beforeEach(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('https://demoqa.com/frames');
    });
    it('then should have a tittle', async () => {
      expect(await iFrame.getFrameHeight()).toBe('This is a sample page');
    });
    describe('Then set frame height', () => {
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
