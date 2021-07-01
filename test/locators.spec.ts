import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given a SDET learning protractor', () => {
  describe('When open Automation Practice Form', () => {
    beforeEach(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
    });
    describe('And fill the form', () => {
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
          file: './resources/universe.jpg',
          commands: [
            'Browser Commands',
            'Navigation Commands',
            'Switch Commands',
            'Wait Commands',
            'WebElement Commands'],
        });
      });
      it('Then should have a file uploaded And should have the title after the alert is accepted', async () => {
        expect(await personalInformationPage.verifyUploadedFile()).toEqual('universe.jpg');
        await personalInformationPage.pressConfirmButton();
        expect(personalInformationPage.getFormTitle()).toEqual('Selenium - Automation Practice Form');
      });
    });
  });
});
