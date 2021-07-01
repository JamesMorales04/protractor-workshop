import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a SDET learning protractor', () => {
  const iFrame: IFramePage = new IFramePage();
  describe('and then open Iframe page', () => {
    beforeEach(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('https://demoqa.com/frames');
    });

    it('and then should have as title frames', async () => {
      expect(await iFrame.getTittlePage()).toBe('Frames');
    });
    describe('and then set frame height', () => {
      const newIframeHeight = 500;
      beforeEach(async () => {
        await iFrame.setFormFrameHeight(newIframeHeight);
      });

      it('and then should have a different height than before', async () => {
        expect(await iFrame.getFrameHeight()).toBe(newIframeHeight);
      });
      describe('and then switch to frame 1', () => {
        beforeEach(async () => {
          await iFrame.switchToFrame();
        });

        it('and then should have a different title', async () => {
          expect(await iFrame.getTittlePage()).toBe('This is a sample page');
        });
      });
      describe('and then switch to main context', () => {
        beforeEach(async () => {
          await iFrame.switchToMainPage();
        });

        it('and then should have a different title', async () => {
          expect(await iFrame.getTittlePage()).toBe('Frames');
        });
      });
    });
  });
});
