import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a SDET learning protractor', () => {
  const iFrame: IFramePage = new IFramePage();
  describe('then open Iframe page', () => {
    beforeEach(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('https://demoqa.com/frames');
    });

    it('then should have as title frames', async () => {
      expect(await iFrame.getTittlePage()).toBe('Frames');
    });
    describe('Then set frame height', () => {
      const newIframeHeight = 500;
      beforeEach(async () => {
        await iFrame.setFormFrameHeight(newIframeHeight);
      });

      it('then should have a different height than before', async () => {
        expect(await iFrame.getFrameHeight()).toBe(newIframeHeight);
      });
      describe('Then switch to frame 1', () => {
        beforeEach(async () => {
          await iFrame.switchToFrame();
        });

        it('then should have a different title', async () => {
          expect(await iFrame.getTittlePage()).toBe('This is a sample page');
        });
      });
      describe('Then switch to main context', () => {
        beforeEach(async () => {
          await iFrame.switchToMainPage();
        });

        it('then should have a different title', async () => {
          expect(await iFrame.getTittlePage()).toBe('Frames');
        });
      });
    });
  });
});
