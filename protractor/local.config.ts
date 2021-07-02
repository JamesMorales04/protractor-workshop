import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/download-file-blob.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000,
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=800,600'],
      prefs: { credentials_enable_service: false },
    },
  },
  onPrepare: () => {
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  },
};
