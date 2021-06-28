import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given a SDET learning protractor', () => {
  describe('when open Automation Practice Form', () => {
    beforeEach(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
    });
    describe('Then fill the form', () => {
      const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
      beforeEach(async () => {
        await personalInformationPage.fillPersonalDataForm({
          firstName: 'Alejandro',
          lastName: 'Perdomo',
          sex: 'Male',
          experience: 7,
          profession: ['Automation Tester'],
          tools: ['Selenium Webdriver'],
          continent: 'South America',
          commands: [
            'Browser Commands',
            'Navigation Commands',
            'Switch Commands',
            'Wait Commands',
            'WebElement Commands'],
        });
      });
      it('then should have the title Practice Automation Form', async () => {
        await personalInformationPage.pressConfirmButton();
        expect(await browser.driver.getTitle()).toEqual('Practice Automation Form');
      });
    });
  });
});
