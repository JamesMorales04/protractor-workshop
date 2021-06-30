import {
  $, element, by, ElementFinder, browser, ExpectedConditions,
} from 'protractor';

const { resolve } = require('path');

interface PersonalData {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  file: string;
  commands:string[];

}

export class PersonalInformationPage {
  private confirmButton: ElementFinder;

  constructor() {
    this.confirmButton = $('[name="submit"]');
  }

  public async fillPersonalDataForm(formData: PersonalData): Promise<void> {
    await this.fillFullName(formData.firstName, formData.lastName);
    await this.fillSex(formData.sex);
    await this.fillExperience(formData.experience);
    await this.fillProfession(formData.profession);
    await this.uploadFile(formData.file);
    await this.fillTools(formData.tools);
    await this.fillContinent(formData.continent);
    await this.fillCommands(formData.commands);
  }

  public async fillFullName(firstName: string, lastName:string): Promise<void> {
    await element(by.name('firstname')).sendKeys(firstName);
    await element(by.name('lastname')).sendKeys(lastName);
  }

  public async fillSex(sex: string): Promise<void> {
    await $(`[name="sex"][value="${sex}"]`).click();
  }

  public async fillExperience(experience: number): Promise<void> {
    await $(`[name="exp"][value="${experience}"]`).click();
  }

  public async fillProfession(profession: string[]): Promise<void> {
    profession.forEach(async (choosedProfession) => {
      await $(`[name="profession"][value="${choosedProfession}"]`).click();
    });
  }

  public async fillTools(tools: string[]): Promise<void> {
    tools.forEach(async (choosedTools) => {
      await $(`[name="tool"][value="${choosedTools}"]`).click();
    });
  }

  public async fillContinent(continent: string): Promise<void> {
    await element(by.name('continents')).element(by.cssContainingText('option', continent)).click();
  }

  public async fillCommands(commands: string[]): Promise<void> {
    commands.forEach(async (choosedCommands) => {
      await element(by.name('selenium_commands')).element(by.cssContainingText('option', choosedCommands)).click();
    });
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }

  public async acceptAlert(): Promise<void> {
    await browser.wait(ExpectedConditions.alertIsPresent());
    await browser.switchTo().alert().accept();
  }

  public async uploadFile(relativePath: string): Promise<void> {
    const path = resolve(relativePath);
    await $('[name="photo"]').sendKeys(path);
  }

  public async pressConfirmButton(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.confirmButton), 3000);
    this.confirmButton.click();
  }
}
