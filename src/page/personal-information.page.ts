import {
  $, element, by, ElementFinder, browser, ExpectedConditions,
} from 'protractor';

import * as remote from 'selenium-webdriver/remote';

import { existsSync } from 'fs';

const { resolve } = require('path');

interface PersonalData {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  file?: string;
  commands:string[];
}
export class PersonalInformationPage {
  private confirmButton: ElementFinder;

  private imageUploadButton: ElementFinder;

  private firstName: ElementFinder;

  private lastName: ElementFinder;

  constructor() {
    this.confirmButton = $('[name="submit"]');
    this.imageUploadButton = $('[name="photo"]');
    this.firstName = element(by.name('firstname'));
    this.lastName = element(by.name('lastname'));
  }

  public async fillPersonalDataForm(formData: PersonalData): Promise<void> {
    await this.firstName.sendKeys(formData.firstName);
    await this.lastName.sendKeys(formData.lastName);
    await this.fillSex(formData.sex);
    await this.fillExperience(formData.experience);
    await this.fillProfession(formData.profession);
    await this.fillTools(formData.tools);
    await this.fillContinent(formData.continent);
    await this.fillCommands(formData.commands);

    if (formData.file) {
      await this.uploadFile(formData.file);
    }
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

  private async acceptAlert(): Promise<void> {
    await browser.wait(ExpectedConditions.alertIsPresent());
    await browser.switchTo().alert().accept();
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }

  public async getFormTitle(): Promise<string> {
    return browser.findElement(by.tagName('h1')).getText();
  }

  public async uploadFile(relativePath: string): Promise<void> {
    const path = resolve(relativePath);
    if (existsSync(path)) {
      await browser.setFileDetector(new remote.FileDetector());
      await this.imageUploadButton.sendKeys(path);
      await browser.setFileDetector(undefined);
    }
  }

  public async verifyUploadedFile(): Promise<string> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.imageUploadButton), 3000);
    return (await this.imageUploadButton.getAttribute('value')).split('\\').pop();
  }

  public async pressConfirmButton(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.confirmButton), 3000);
    this.confirmButton.click();
    this.acceptAlert();
  }
}
