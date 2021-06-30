import {
  $, element, by, ElementFinder, browser, ExpectedConditions,
} from 'protractor';

interface PersonalData {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands:string[];
}

export class PersonalInformationPage {
  private confirmButton: ElementFinder;

  private firstName: ElementFinder;

  private lastName: ElementFinder;

  constructor() {
    this.confirmButton = $('[name="submit"]');
    this.firstName = element(by.name('firstname'));
    this.lastName = element(by.name('lastname'));
  }

  public async fillPersonalDataForm(formData: PersonalData): Promise<void> {
    await this.fillFullName(formData.firstName, formData.lastName);
    await this.fillSex(formData.sex);
    await this.fillExperience(formData.experience);
    await this.fillProfession(formData.profession);
    await this.fillTools(formData.tools);
    await this.fillContinent(formData.continent);
    await this.fillCommands(formData.commands);
  }

  private async fillFullName(firstName: string, lastName:string): Promise<void> {
    await this.firstName.sendKeys(firstName);
    await this.lastName.sendKeys(lastName);
  }

  private async fillSex(sex: string): Promise<void> {
    await $(`[name="sex"][value="${sex}"]`).click();
  }

  private async fillExperience(experience: number): Promise<void> {
    await $(`[name="exp"][value="${experience}"]`).click();
  }

  private async fillProfession(profession: string[]): Promise<void> {
    profession.forEach(async (choosedProfession) => {
      await $(`[name="profession"][value="${choosedProfession}"]`).click();
    });
  }

  private async fillTools(tools: string[]): Promise<void> {
    tools.forEach(async (choosedTools) => {
      await $(`[name="tool"][value="${choosedTools}"]`).click();
    });
  }

  private async fillContinent(continent: string): Promise<void> {
    await element(by.name('continents')).element(by.cssContainingText('option', continent)).click();
  }

  private async fillCommands(commands: string[]): Promise<void> {
    commands.forEach(async (choosedCommands) => {
      await element(by.name('selenium_commands')).element(by.cssContainingText('option', choosedCommands)).click();
    });
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }

  private async acceptAlert(): Promise<void> {
    await browser.wait(ExpectedConditions.alertIsPresent());
    await browser.switchTo().alert().accept();
  }

  public async getFormTitle(): Promise<string> {
    return browser.findElement(by.tagName('h1')).getText();
  }

  public async pressConfirmButton(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.confirmButton), 3000);
    this.confirmButton.click();
    this.acceptAlert();
  }
}
