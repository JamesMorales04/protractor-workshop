import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a SDET learning protractor', () => {
  const iFrame: IFramePage = new IFramePage();
  describe('When open Iframe page', () => {
    beforeEach(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('https://demoqa.com/frames');
    });

    it('Then should have as title frames', async () => {
      expect(await iFrame.getTittlePage()).toBe('Frames');
    });
    describe('And set frame height', () => {
      const newIframeHeight = 500;
      beforeEach(async () => {
        await iFrame.setFormFrameHeight(newIframeHeight);
      });

      it('Then should have a different height than before', async () => {
        expect(await iFrame.getFrameHeight()).toBe(newIframeHeight);
      });
      describe('And switch to frame 1', () => {
        beforeEach(async () => {
          await iFrame.switchToFrame();
        });

        it('Then should have a different title', async () => {
          expect(await iFrame.getTittlePage()).toBe('This is a sample page');
        });
      });
      describe('When switch to main context', () => {
        beforeEach(async () => {
          await iFrame.switchToMainPage();
        });

        it('Then should have a different title', async () => {
          expect(await iFrame.getTittlePage()).toBe('Frames');
        });
      });
    });
  });
});
